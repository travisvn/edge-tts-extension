import browser from 'webextension-polyfill';
import { BrowserCommunicate, BrowserCommunicateOptions } from './utils/browserCommunicate';
import './content-styles.css';
type ReaderState = 'idle' | 'generating' | 'playing' | 'paused' | 'continuing' | 'error' | 'stopped';
import { isFirefox } from './utils/browserDetection';
import {
  ReadingDocument,
  buildReadingDocument,
  findSegmentAtPoint,
  findTextOffsetForDomPosition,
  findTextOffsetAtPoint,
  rangeForOffsets,
} from './utils/readingDocument';

let audioElement: HTMLAudioElement | null = null;
let isPlaying = false;
let currentTTSDeactivate: (() => void) | null = null;
let activeReadingDocument: ReadingDocument | null = null;
let activeWordHighlight: Highlight | null = null;
let highlightAnimationFrame: number | null = null;
let autoScrollSuspended = false;
let currentDynamicSession: DynamicPageSession | null = null;
let lastReadOffset = 0;
let currentWordOffset = 0;
let streamSynthesisSpeed = 1.2;
let requestedSpeed = 1.2;
let preferredVoiceName: string | null = null;
let lastErrorRetry: (() => void) | null = null;

type DynamicPageSession = {
  observer: MutationObserver;
  seenElements: WeakSet<HTMLElement>;
  seenOccurrences: Map<string, number>;
  pending: boolean;
  stopped: boolean;
};

type TimedWord = {
  relativeStartTime: number;
  part: number;
  textStart: number;
  textEnd: number;
};

type QueuedAudioChunk = {
  data: Uint8Array;
  part: number;
};

function setReaderState(nextState: ReaderState, status = ''): void {
  browser.runtime.sendMessage({ action: 'playbackState', state: nextState, status, followEnabled: !autoScrollSuspended }).catch(() => undefined);
}

export async function initTTS(
  text: string,
  readingDocument: ReadingDocument | null = null,
  documentOffset = 0,
  dynamicSession: DynamicPageSession | null = null,
): Promise<void> {
  // Deactivate any previous TTS instance
  if (currentTTSDeactivate) {
    currentTTSDeactivate();
  }

  const preserveDynamicSession = Boolean(dynamicSession && dynamicSession === currentDynamicSession);
  cleanup(preserveDynamicSession);
  try {
    const settings = await browser.storage.sync.get({
      voiceName: "en-US-ChristopherNeural",
      customVoice: "",
      speed: 1.2,
    });

    setReaderState(dynamicSession && preserveDynamicSession ? 'continuing' : 'generating');

    const voiceName = preferredVoiceName || settings.voiceName as string || settings.customVoice as string;

    // Convert speed setting to TTS format
    streamSynthesisSpeed = settings.speed as number;
    requestedSpeed = streamSynthesisSpeed;
    const speedPercent = Math.round((streamSynthesisSpeed - 1) * 100);
    const rateString = speedPercent >= 0 ? `+${speedPercent}%` : `${speedPercent}%`;

    const browserCommunicateOptions: BrowserCommunicateOptions = {
      voice: voiceName,
      rate: rateString,
      connectionTimeout: 10000, // 10 seconds timeout
    };

    // Create BrowserCommunicate instance
    const communicate = new BrowserCommunicate(text, browserCommunicateOptions);
    activeReadingDocument = readingDocument;
    lastReadOffset = documentOffset;
    currentWordOffset = documentOffset;
    autoScrollSuspended = false;
    currentDynamicSession = dynamicSession;

    return new Promise((resolve, reject) => {
      const mediaSource = new MediaSource();
      let sourceBuffer: SourceBuffer;
      const chunks: QueuedAudioChunk[] = [];
      let isFirstChunk = true;
      let isActive = true; // Track if this TTS instance is still active
      const timedWords: TimedWord[] = [];
      const partStartTimes: number[] = [0];
      const endedParts = new Set<number>();
      let appendingPart: number | null = null;
      let nextTimedWord = 0;
      let textSearchOffset = 0;

      // Set up the deactivation function for this instance
      currentTTSDeactivate = () => {
        isActive = false;
      };

      if (!audioElement) {
        audioElement = new Audio();
        audioElement.muted = true; // 🔧 allow autoplay in Firefox
        audioElement.src = URL.createObjectURL(mediaSource);

        navigator.mediaSession.setActionHandler("play", () => audioElement?.play());
        navigator.mediaSession.setActionHandler("pause", () => audioElement?.pause());
        navigator.mediaSession.setActionHandler("stop", () => stopPlayback());

        audioElement.onplay = () => {
          if (audioElement) {
            audioElement.muted = false; // 🔊 unmute once playback begins
          }
          isPlaying = true;
          setReaderState('playing');
          startHighlightLoop(
            timedWords,
            partStartTimes,
            () => nextTimedWord,
            (value) => { nextTimedWord = value; },
          );
        };

        audioElement.onpause = () => {
          isPlaying = false;
          setReaderState('paused');
          stopHighlightLoop();
        };

        audioElement.onended = () => {
          isPlaying = false;
          setReaderState('stopped');
          stopHighlightLoop();
          if (dynamicSession && dynamicSession === currentDynamicSession && !dynamicSession.stopped) {
            continueDynamicReading(dynamicSession);
          } else {
            cleanup();
          }
        };

        audioElement.onerror = (error) => {
          console.error('Audio playback error:', error);
          showPlaybackError('Audio playback failed.');
        };
      }

      const finalizeCompletedPart = (part: number): void => {
        if (!endedParts.has(part) || appendingPart === part || chunks.some((chunk) => chunk.part === part)) {
          return;
        }
        if (sourceBuffer.buffered.length > 0) {
          partStartTimes[part + 1] = sourceBuffer.buffered.end(sourceBuffer.buffered.length - 1);
        }
      };

      const appendNextChunk = () => {
        // Check if this TTS instance is still active and sourceBuffer exists
        if (!isActive || !sourceBuffer || mediaSource.readyState !== 'open') {
          return;
        }

        if (chunks.length > 0 && !sourceBuffer.updating) {
          try {
            const chunk = chunks.shift();
            if (chunk) {
              // SAFELY COPY to avoid DOMException from detached buffer
              const safeChunk = new Uint8Array(chunk.data.length);
              safeChunk.set(chunk.data);
              appendingPart = chunk.part;
              sourceBuffer.appendBuffer(safeChunk);

              if (isFirstChunk) {
                setReaderState('generating', 'Starting playback…');
                if (isFirefox()) {
                  setTimeout(() => {
                    audioElement?.play().catch((err) => {
                      console.warn('Firefox autoplay workaround failed:', err);
                    });
                  }, 0);
                } else {
                  audioElement?.play().catch((err) => {
                    console.warn('Audio playback failed:', err);
                  });
                }
                isFirstChunk = false;
              }
            }
          } catch (err) {
            console.error('appendNextChunk error:', err, 'chunk length:', chunks[0]?.data.length);

            // 🚨 Drop the bad chunk so we don't infinitely loop
            chunks.shift();

            // Only retry if still active
            if (isActive) {
              setTimeout(appendNextChunk, 100);
            }
          }
        }
      };

      mediaSource.addEventListener('sourceopen', () => {
        try {
          // Use WebM format for Firefox, MP3 for Chrome
          const mimeType = isFirefox()
            ? 'audio/webm; codecs="opus"'
            : 'audio/mpeg';
          sourceBuffer = mediaSource.addSourceBuffer(mimeType);
          sourceBuffer.addEventListener('updateend', () => {
            const completedPart = appendingPart;
            appendingPart = null;
            if (completedPart !== null) finalizeCompletedPart(completedPart);
            appendNextChunk();
          });

          // Start the chunked streaming process
          (async () => {
            try {
              let streamEnded = false;

              for await (const chunk of communicate.stream()) {
                if (!isActive) {
                  streamEnded = true;
                  return; // Stop if this instance is no longer active
                }

                if (chunk.type === 'audio' && chunk.data) {
                  // Firefox fix: clone data before using it
                  const cloned = new Uint8Array(chunk.data.byteLength);
                  cloned.set(chunk.data);
                  chunks.push({ data: cloned, part: chunk.part ?? 0 });
                  appendNextChunk();
                } else if (chunk.type === 'WordBoundary' && chunk.text && chunk.offset !== undefined) {
                  const match = findSpokenWord(text, chunk.text, textSearchOffset);
                  textSearchOffset = match.end;
                  timedWords.push({
                    relativeStartTime: chunk.offset / 10_000_000,
                    part: chunk.part ?? 0,
                    textStart: documentOffset + match.start,
                    textEnd: documentOffset + match.end,
                  });
                } else if (chunk.type === 'ChunkEnd') {
                  const part = chunk.part ?? 0;
                  endedParts.add(part);
                  finalizeCompletedPart(part);
                }
              }

              streamEnded = true;

              // All chunks processed, end the stream
              const checkAndEndStream = () => {
                if (!isActive) {
                  return; // Don't continue if this instance is no longer active
                }

                // Only end the stream when all chunks are processed AND appended
                if (streamEnded && chunks.length === 0 && !sourceBuffer.updating) {
                  try {
                    if (mediaSource.readyState === 'open') {
                      mediaSource.endOfStream();
                      resolve(void 0);
                    } else {
                      resolve(void 0);
                    }
                  } catch (err) {
                    // MediaSource might already be closed
                    resolve(void 0);
                  }
                } else {
                  setTimeout(checkAndEndStream, 100);
                }
              };
              checkAndEndStream();
            } catch (error) {
              console.error('TTS streaming error:', error);
              showPlaybackError(error instanceof Error ? error.message : 'Speech generation failed.');
              reject(error);
            }
          })();
        } catch (error) {
          reject(error);
        }
      });
    });
  } catch (error) {
    console.error("TTS Error:", error);
    showPlaybackError(error instanceof Error ? error.message : 'Speech generation failed.');
    throw error;
  }
}

function togglePause() {
  if (!audioElement) return;

  if (audioElement.paused) {
    audioElement.play();
  } else {
    audioElement.pause();
  }
}

function stopPlayback() {
  if (audioElement) {
    audioElement.pause();
    audioElement.currentTime = 0;
  }
  cleanup();
  setReaderState('stopped');
  browser.runtime.sendMessage({ action: 'playbackStopped' }).catch(() => undefined);
}

function cleanup(preserveDynamicSession = false) {
  // Deactivate current TTS instance if exists
  if (currentTTSDeactivate) {
    currentTTSDeactivate();
    currentTTSDeactivate = null;
  }

  if (audioElement) {
    // Remove all event listeners to prevent memory leaks
    audioElement.onplay = null;
    audioElement.onpause = null;
    audioElement.onended = null;
    audioElement.onerror = null;
    audioElement.onloadstart = null;
    audioElement.oncanplay = null;

    // Clean up media session handlers
    try {
      navigator.mediaSession.setActionHandler("play", null);
      navigator.mediaSession.setActionHandler("pause", null);
      navigator.mediaSession.setActionHandler("stop", null);
    } catch (e) {
      // Ignore errors if mediaSession is not supported
    }

    const oldSrc = audioElement.src;
    audioElement.pause();
    audioElement.src = "";
    audioElement.load(); // Force cleanup of internal buffers

    if (oldSrc && oldSrc.startsWith('blob:')) {
      URL.revokeObjectURL(oldSrc);
    }
  }
  audioElement = null;
  isPlaying = false;
  stopHighlightLoop();
  clearWordHighlight();
  activeReadingDocument = null;
  if (!preserveDynamicSession && currentDynamicSession) {
    currentDynamicSession.stopped = true;
    currentDynamicSession.observer.disconnect();
    currentDynamicSession = null;
  }
}

function showPlaybackError(error: string): void {
  if (audioElement) audioElement.pause();
  isPlaying = false;
  lastErrorRetry = () => readMappedPageFrom(currentWordOffset || lastReadOffset);
  setReaderState('error', error);
}

function changePlaybackSpeed(speed: number): void {
  requestedSpeed = speed;
  browser.storage.sync.set({ speed });
  if (audioElement) audioElement.playbackRate = speed / streamSynthesisSpeed;
}

async function changePlaybackVoice(voiceName: string): Promise<void> {
  preferredVoiceName = voiceName;
  await browser.storage.sync.set({ voiceName, customVoice: '' });
  if (activeReadingDocument && (isPlaying || audioElement)) {
    await new Promise<void>((resolve, reject) => {
      readMappedPageFrom(currentWordOffset || lastReadOffset);
      // initTTS reports its real state asynchronously; acknowledging after the
      // restart has been scheduled prevents the side panel from racing storage.
      window.setTimeout(resolve, 0);
    });
  }
}

function resumeAutoScroll(): void {
  autoScrollSuspended = false;
  setReaderState(audioElement?.paused ? 'paused' : isPlaying ? 'playing' : 'idle');
  if (activeReadingDocument) {
    const range = rangeForOffsets(activeReadingDocument, currentWordOffset, currentWordOffset + 1);
    range?.startContainer.parentElement?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}

function findSpokenWord(text: string, word: string, from: number): { start: number; end: number } {
  const exactIndex = text.toLocaleLowerCase().indexOf(word.toLocaleLowerCase(), from);
  if (exactIndex >= 0) return { start: exactIndex, end: exactIndex + word.length };

  const normalizedWord = word.replace(/^\W+|\W+$/g, '');
  const normalizedIndex = normalizedWord
    ? text.toLocaleLowerCase().indexOf(normalizedWord.toLocaleLowerCase(), from)
    : -1;
  if (normalizedIndex >= 0) {
    return { start: normalizedIndex, end: normalizedIndex + normalizedWord.length };
  }
  return { start: from, end: Math.min(text.length, from + Math.max(word.length, 1)) };
}

function startHighlightLoop(
  words: TimedWord[],
  partStartTimes: number[],
  getIndex: () => number,
  setIndex: (value: number) => void,
): void {
  stopHighlightLoop();
  const update = () => {
    if (!audioElement || audioElement.paused) return;
    let index = getIndex();
    const playbackTime = audioElement.currentTime + 0.04;
    const absoluteStartTime = (word: TimedWord): number | null => {
      const partStart = partStartTimes[word.part];
      return partStart === undefined ? null : partStart + word.relativeStartTime;
    };
    let nextStart = words[index + 1] ? absoluteStartTime(words[index + 1]) : null;
    while (index + 1 < words.length && nextStart !== null && nextStart <= playbackTime) {
      index += 1;
      nextStart = words[index + 1] ? absoluteStartTime(words[index + 1]) : null;
    }
    const currentStart = words[index] ? absoluteStartTime(words[index]) : null;
    if (words[index] && currentStart !== null && currentStart <= playbackTime) {
      showWordHighlight(words[index].textStart, words[index].textEnd);
      setIndex(index);
    }
    highlightAnimationFrame = window.requestAnimationFrame(update);
  };
  highlightAnimationFrame = window.requestAnimationFrame(update);
}

function stopHighlightLoop(): void {
  if (highlightAnimationFrame !== null) {
    window.cancelAnimationFrame(highlightAnimationFrame);
    highlightAnimationFrame = null;
  }
}

function showWordHighlight(start: number, end: number): void {
  if (!activeReadingDocument) return;
  clearWordHighlight();
  const range = rangeForOffsets(activeReadingDocument, start, end);
  if (!range) return;
  currentWordOffset = start;
  if (CSS.highlights && typeof Highlight !== 'undefined') {
    activeWordHighlight = new Highlight(range);
    CSS.highlights.set('etts-spoken-word', activeWordHighlight);
  } else {
    const marker = document.createElement('mark');
    marker.id = 'etts-spoken-word-fallback';
    marker.dataset.ettsHighlight = 'true';
    const rect = range.getBoundingClientRect();
    marker.style.position = 'fixed';
    marker.style.pointerEvents = 'none';
    marker.style.left = `${rect.left}px`; marker.style.top = `${rect.top}px`;
    marker.style.width = `${rect.width}px`; marker.style.height = `${rect.height}px`;
    document.body.appendChild(marker);
  }

  const segment = activeReadingDocument.segments.find((item) => start >= item.start && start < item.end);
  if (segment && !autoScrollSuspended) {
    const rect = range.getBoundingClientRect();
    const margin = Math.min(180, window.innerHeight * 0.2);
    if (rect.top < margin || rect.bottom > window.innerHeight - margin) {
      segment.element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }
}

function clearWordHighlight(): void {
  if (CSS.highlights) CSS.highlights.delete('etts-spoken-word');
  const marker = document.querySelector<HTMLElement>('[data-etts-highlight="true"]');
  marker?.remove();
  activeWordHighlight = null;
}

function segmentFingerprint(text: string): string {
  return text.replace(/\s+/g, ' ').trim();
}

function documentFromSegments(source: ReadingDocument, selected: ReadingDocument['segments']): ReadingDocument {
  const text: string[] = [];
  const positions: ReadingDocument['positions'] = [];
  const segments: ReadingDocument['segments'] = [];
  selected.forEach((segment) => {
    const start = text.length;
    for (let index = segment.start; index < segment.end; index += 1) {
      text.push(source.text[index]);
      positions.push(source.positions[index]);
    }
    segments.push({ element: segment.element, start, end: text.length });
    text.push('\n'); positions.push(null);
  });
  if (text[text.length - 1] === '\n') { text.pop(); positions.pop(); }
  return { text: text.join(''), positions, segments };
}

function createDynamicPageSession(readingDocument: ReadingDocument): DynamicPageSession {
  const seenElements = new WeakSet<HTMLElement>();
  const seenOccurrences = new Map<string, number>();
  readingDocument.segments.forEach((segment) => seenElements.add(segment.element));
  readingDocument.segments.forEach((segment) => {
    const key = segmentFingerprint(readingDocument.text.slice(segment.start, segment.end));
    seenOccurrences.set(key, (seenOccurrences.get(key) || 0) + 1);
  });
  const session = {
    seenElements,
    seenOccurrences,
    pending: false,
    stopped: false,
    observer: new MutationObserver(() => undefined),
  };
  session.observer = new MutationObserver(() => {
    if (session.pending || session.stopped) return;
    session.pending = true;
    window.setTimeout(() => { session.pending = false; }, 250);
  });
  session.observer.observe(document.body, { childList: true, subtree: true });
  return session;
}

function continueDynamicReading(session: DynamicPageSession, attemptsRemaining = 6): void {
  if (session.stopped || session !== currentDynamicSession) return;
  const readingDocument = buildReadingDocument();
  const encountered = new Map<string, number>();
  const newSegments = readingDocument.segments.filter((segment) => {
    const key = segmentFingerprint(readingDocument.text.slice(segment.start, segment.end));
    const occurrence = (encountered.get(key) || 0) + 1;
    encountered.set(key, occurrence);
    return !session.seenElements.has(segment.element) && occurrence > (session.seenOccurrences.get(key) || 0);
  });

  if (newSegments.length > 0) {
    readingDocument.segments.forEach((segment) => session.seenElements.add(segment.element));
    encountered.forEach((count, key) => session.seenOccurrences.set(key, Math.max(count, session.seenOccurrences.get(key) || 0)));
    const continuation = documentFromSegments(readingDocument, newSegments);
    initTTS(continuation.text, continuation, 0, session).catch((error) => {
      console.error('TTS continuation error:', error);
      cleanup();
    });
    return;
  }

  if (attemptsRemaining > 0) {
    window.setTimeout(() => continueDynamicReading(session, attemptsRemaining - 1), 500);
  } else {
    cleanup();
  }
}

function readMappedPageFrom(offset: number): void {
  const readingDocument = buildReadingDocument();
  if (!readingDocument.text.trim()) {
    console.warn('The page content is empty.');
    return;
  }
  const safeOffset = Math.max(0, Math.min(offset, readingDocument.text.length));
  const dynamicSession = createDynamicPageSession(readingDocument);
  initTTS(
    readingDocument.text.slice(safeOffset),
    readingDocument,
    safeOffset,
    dynamicSession,
  ).catch((error) => {
    console.error('TTS initialization error:', error);
  });
}

function getMappedSelection(readingDocument: ReadingDocument): { start: number; end: number } | null {
  const selection = window.getSelection();
  if (!selection || selection.rangeCount === 0 || selection.isCollapsed) return null;
  const range = selection.getRangeAt(0);
  const start = findTextOffsetForDomPosition(readingDocument, range.startContainer, range.startOffset, 0);
  const end = findTextOffsetForDomPosition(
    readingDocument,
    range.endContainer,
    range.endOffset,
    readingDocument.text.length,
  );
  return end > start ? { start, end } : null;
}

function readTextWithMapping(text: string): void {
  const readingDocument = buildReadingDocument();
  const mappedSelection = getMappedSelection(readingDocument);
  if (mappedSelection) {
    initTTS(
      readingDocument.text.slice(mappedSelection.start, mappedSelection.end),
      readingDocument,
      mappedSelection.start,
    ).catch((error) => console.error('TTS initialization error:', error));
    return;
  }
  const exactOffset = readingDocument.text.indexOf(text.trim());
  if (exactOffset >= 0) {
    initTTS(text.trim(), readingDocument, exactOffset).catch((error) => {
      console.error('TTS initialization error:', error);
    });
    return;
  }

  // Older popup builds send document.body.innerText through readText. Treat a
  // large unmatched payload as a page request so it still gets DOM mapping.
  if (text.trim().length > 500) {
    readMappedPageFrom(0);
    return;
  }
  initTTS(text).catch((error) => console.error('TTS initialization error:', error));
}

// Define the message structure
interface ExtensionMessage {
  action: string;
  text?: string;
  value?: number;
  voiceName?: string;
}

// Message listener with type assertion to bypass strict type checking
browser.runtime.onMessage.addListener(function handleMessage(
  request: ExtensionMessage,
  sender,
  sendResponse
) {
  if (request.action === "stopPlayback") {
    stopPlayback();
  }
  else if (request.action === "togglePlayback") {
    togglePause();
  }
  else if (request.action === "readText") {
    readTextWithMapping(request.text!);
  }
  else if (request.action === 'readPage') {
    readMappedPageFrom(0);
  }
  else if (request.action === 'retryPlayback') lastErrorRetry?.();
  else if (request.action === 'resumeFollow') resumeAutoScroll();
  else if (request.action === 'changeSpeed' && typeof request.value === 'number') changePlaybackSpeed(request.value);
  else if (request.action === 'changeVoice' && request.voiceName) return changePlaybackVoice(request.voiceName);
  else if (request.action === 'readFromHere' && request.text) {
    try {
      const readingDocument = buildReadingDocument();
      const mappedSelection = getMappedSelection(readingDocument);
      const fallbackOffset = readingDocument.text.indexOf(request.text.trim());
      const start = mappedSelection?.start ?? (fallbackOffset >= 0 ? fallbackOffset : 0);
      const dynamicSession = createDynamicPageSession(readingDocument);
      initTTS(
        readingDocument.text.slice(start),
        readingDocument,
        start,
        dynamicSession,
      ).catch((error) => console.error('TTS initialization error:', error));
    } catch (error) {
      console.error("Error extracting text from selection:", error);
      readTextWithMapping(request.text);
    }
  }

  // Don't return true unless we need to send an async response
  // This prevents "message channel closed" errors
} as browser.Runtime.OnMessageListener);

window.addEventListener('message', (event) => {
  if (event.source !== window) return;

  const { action, text } = event.data || {};
  if (action === 'triggerTTS' && typeof text === 'string') {
    initTTS(text).catch((err) => console.error('initTTS error:', err));
  } else if (action === 'triggerReadPage') {
    readMappedPageFrom(0);
  }
});

// Clicking only repositions a reader that is already playing. Starting TTS is
// deliberately limited to the popup, context menu, and keyboard commands.
document.addEventListener('click', (event) => {
  if (event.button !== 0 || !activeReadingDocument || !isPlaying) return;
  if (event.target instanceof Element && event.target.closest('a, button, input, select, textarea, summary, [role="button"], #tts-control-panel')) return;
  const readingDocument = buildReadingDocument();
  const segment = findSegmentAtPoint(readingDocument, event.target);
  if (!segment) return;
  event.preventDefault();
  event.stopPropagation();
  const offset = findTextOffsetAtPoint(readingDocument, segment, event.clientX, event.clientY);
  const dynamicSession = currentDynamicSession;
  if (dynamicSession) {
    readingDocument.segments.forEach((item) => dynamicSession.seenElements.add(item.element));
  }
  initTTS(readingDocument.text.slice(offset), readingDocument, offset, dynamicSession).catch((error) => {
    console.error('TTS initialization error:', error);
  });
}, true);

function suspendAutoScroll(): void {
  if (!activeReadingDocument || !isPlaying || autoScrollSuspended) return;
  autoScrollSuspended = true;
  setReaderState('playing');
}

// Let the listener move around the page without fighting the spoken-word
// tracker. Clicking readable text starts a new session and re-enables follow.
document.addEventListener('wheel', suspendAutoScroll, { passive: true, capture: true });
document.addEventListener('touchmove', suspendAutoScroll, { passive: true, capture: true });
document.addEventListener('pointerdown', (event) => {
  if (event.clientX >= document.documentElement.clientWidth) suspendAutoScroll();
}, true);
document.addEventListener('keydown', (event) => {
  if (['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End', ' '].includes(event.key)) {
    suspendAutoScroll();
  }
}, true);

// Clean up resources when page is unloaded
window.addEventListener('beforeunload', () => {
  cleanup();
});

// Clean up when page becomes hidden (mobile browser optimization)
// document.addEventListener('visibilitychange', () => {
//   if (document.hidden && audioElement && !audioElement.paused) {
//     audioElement.pause();
//   }
// });
