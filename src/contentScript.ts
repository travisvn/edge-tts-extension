import browser from 'webextension-polyfill';
import { EdgeTTSClient, ProsodyOptions, OUTPUT_FORMAT } from './lib/EdgeTTSClient';
import './content-styles.css';
import {
  createControlPanel,
  updatePanelContent,
} from "./components/controlPanel";
import { circlePause, circlePlay } from './lib/svgs';
import { isFirefox } from './utils/browserDetection';
import { extractTextFromSelection, extractTextFromSelectionSimple } from './utils/textExtraction';

let audioElement: HTMLAudioElement | null = null;
let isPlaying = false;
let controlPanel: HTMLElement | null = null;
let currentTTSDeactivate: (() => void) | null = null;

// Make these functions available to the control panel
(window as any).togglePause = togglePause;
(window as any).stopPlayback = stopPlayback;

export async function initTTS(text: string): Promise<void> {
  // Deactivate any previous TTS instance
  if (currentTTSDeactivate) {
    currentTTSDeactivate();
  }

  cleanup();
  try {
    const settings = await browser.storage.sync.get({
      voiceName: "en-US-ChristopherNeural",
      customVoice: "",
      speed: 1.2,
    });

    // Create control panel in loading state
    controlPanel = await createControlPanel(true);

    const tts = new EdgeTTSClient();
    const voiceName = settings.customVoice as string || settings.voiceName as string;
    await tts.setMetadata(
      voiceName, // Use custom voice if specified
      OUTPUT_FORMAT.WEBM_24KHZ_16BIT_MONO_OPUS
      // OUTPUT_FORMAT.AUDIO_24KHZ_48KBITRATE_MONO_MP3
    );

    const prosodyOptions = new ProsodyOptions();
    prosodyOptions.rate = settings.speed as number;

    return new Promise((resolve, reject) => {
      const mediaSource = new MediaSource();
      let sourceBuffer: SourceBuffer;
      const chunks: Uint8Array[] = [];
      let isFirstChunk = true;
      let isActive = true; // Track if this TTS instance is still active

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
          updatePlayPauseButton();
        };

        audioElement.onpause = () => {
          isPlaying = false;
          updatePlayPauseButton();
        };

        audioElement.onended = () => {
          isPlaying = false;
          updatePlayPauseButton();
          // Clean up when playback ends naturally
          cleanup();
        };

        audioElement.onerror = (error) => {
          console.error('Audio playback error:', error);
          cleanup();
        };
      }

      // Update control panel immediately to show loading state
      if (controlPanel) {
        updatePanelContent(controlPanel, false);
      }

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
              const safeChunk = new Uint8Array(chunk.length);
              safeChunk.set(chunk);
              sourceBuffer.appendBuffer(safeChunk);

              if (isFirstChunk) {
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
            console.error('appendNextChunk error:', err, 'chunk length:', chunks[0]?.length);

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
          sourceBuffer = mediaSource.addSourceBuffer('audio/webm; codecs="opus"');
          sourceBuffer.addEventListener('updateend', appendNextChunk);

          const stream = tts.toStream(text, prosodyOptions);

          stream.on("data", (data) => {
            if (data instanceof Uint8Array) {
              // Firefox fix: clone data before using it
              const cloned = new Uint8Array(data.byteLength);
              cloned.set(data);
              chunks.push(cloned);
              appendNextChunk();
            }
          });

          stream.on("end", () => {
            const checkAndEndStream = () => {
              if (!isActive) {
                return; // Don't continue if this instance is no longer active
              }
              if (chunks.length === 0 && !sourceBuffer.updating) {
                try {
                  mediaSource.endOfStream();
                  resolve(void 0);
                } catch (err) {
                  // MediaSource might already be closed
                  resolve(void 0);
                }
              } else {
                setTimeout(checkAndEndStream, 100);
              }
            };
            checkAndEndStream();
          });

          // stream.on("error", (err) => {
          //   reject(err);
          // });
        } catch (error) {
          reject(error);
        }
      });
    });
  } catch (error) {
    console.error("TTS Error:", error);
    cleanup();
    throw error;
  }
}

function updatePlayPauseButton() {
  const pauseButton = document.querySelector("#tts-pause");
  if (pauseButton) {
    const buttonText =
      audioElement && !audioElement.paused ? "Pause" : "Resume";
    pauseButton.innerHTML = `
      ${audioElement && !audioElement.paused
        ? circlePause
        : circlePlay
      }
      <span>
        ${buttonText}
      </span>
    `;
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
}

function cleanup() {
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
  removeControlPanel();
}

function removeControlPanel() {
  if (controlPanel) {
    // Remove all event listeners from control panel buttons
    const buttons = controlPanel.querySelectorAll('button');
    buttons.forEach((button: HTMLButtonElement) => {
      const newButton = button.cloneNode(true);
      button.parentNode?.replaceChild(newButton, button);
    });

    if (controlPanel.parentNode) {
      controlPanel.parentNode.removeChild(controlPanel);
    }
  }
  controlPanel = null;
}

// Define the message structure
interface ExtensionMessage {
  action: string;
  text?: string;
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
    initTTS(request.text!).catch((error) => {
      console.error("TTS initialization error:", error);
    });
  }
  else if (request.action === 'readPage') {
    // Extract the page content
    const pageContent = document.body.innerText;

    if (pageContent && pageContent.trim() !== '') {
      initTTS(pageContent).catch((error) => {
        console.error("TTS initialization error:", error);
      });
    } else {
      console.warn('The page content is empty.');
    }
  }
  else if (request.action === 'readFromHere' && request.text) {
    // Extract text from the current selection point to the end of the page
    try {
      let textToRead = extractTextFromSelection(request.text);

      // Fallback to simple extraction if the advanced method fails
      if (!textToRead || textToRead.trim().length === 0) {
        textToRead = extractTextFromSelectionSimple(request.text);
      }

      if (textToRead && textToRead.trim() !== '') {
        initTTS(textToRead).catch((error) => {
          console.error("TTS initialization error:", error);
        });
      } else {
        console.warn('No text found from selection point.');
        // Fallback to reading the selected text only
        initTTS(request.text).catch((error) => {
          console.error("TTS initialization error:", error);
        });
      }
    } catch (error) {
      console.error("Error extracting text from selection:", error);
      // Fallback to reading the selected text only
      initTTS(request.text).catch((error) => {
        console.error("TTS initialization error:", error);
      });
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
  }
});

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
