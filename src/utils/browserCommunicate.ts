import {
  connectId,
  escape,
  unescape,
  ssmlHeadersPlusData,
  dateToString,
  mkssml,
  removeIncompatibleCharacters,
} from './newUtils';
import {
  NoAudioReceived,
  UnexpectedResponse,
  UnknownResponse,
  WebSocketError
} from "./exceptions";
import { TTSConfig } from './ttsConfig';
import { DEFAULT_VOICE, WSS_URL, SEC_MS_GEC_VERSION } from './constants';
import { BrowserDRM } from './browserDrm';
import { isFirefox } from './browserDetection';

// Browser-specific types (avoiding Node.js Buffer dependency)
export type BrowserTTSChunk = {
  type: "audio" | "WordBoundary" | "ChunkEnd";
  data?: Uint8Array;
  duration?: number;
  offset?: number;
  text?: string;
  part?: number;
};

export type BrowserCommunicateState = {
  partialText: Uint8Array;
  streamWasCalled: boolean;
};

// Browser-compatible Buffer utilities
class BrowserBuffer {
  static from(input: string | ArrayBuffer | Uint8Array, encoding?: string): Uint8Array {
    if (typeof input === 'string') {
      return new TextEncoder().encode(input);
    } else if (input instanceof Uint8Array) {
      return input;
    } else if (input instanceof ArrayBuffer) {
      return new Uint8Array(input);
    } else if (input && typeof input === 'object' && 'byteLength' in input) {
      // Handle cross-compartment ArrayBuffer in Firefox
      // When ArrayBuffer comes from FileReader in Firefox, instanceof check may fail
      return new Uint8Array(input as ArrayBuffer);
    }
    console.error('BrowserBuffer.from received unexpected input type:', typeof input, input);
    throw new Error(`Unsupported input type for BrowserBuffer.from: ${typeof input}`);
  }

  static concat(arrays: Uint8Array[]): Uint8Array {
    const totalLength = arrays.reduce((sum, arr) => sum + arr.length, 0);
    const result = new Uint8Array(totalLength);
    let offset = 0;
    for (const arr of arrays) {
      result.set(arr, offset);
      offset += arr.length;
    }
    return result;
  }
}

// Browser-compatible versions of utility functions
function browserGetHeadersAndDataFromText(message: Uint8Array): [{ [key: string]: string }, Uint8Array] {
  const messageString = new TextDecoder().decode(message);
  const headerEndIndex = messageString.indexOf('\r\n\r\n');

  const headers: { [key: string]: string } = {};
  if (headerEndIndex !== -1) {
    const headerString = messageString.substring(0, headerEndIndex);
    const headerLines = headerString.split('\r\n');
    for (const line of headerLines) {
      const [key, value] = line.split(':', 2);
      if (key && value) {
        headers[key] = value.trim();
      }
    }
  }

  const headerByteLength = new TextEncoder().encode(messageString.substring(0, headerEndIndex + 4)).length;
  return [headers, message.slice(headerByteLength)];
}

function browserGetHeadersAndDataFromBinary(message: Uint8Array): [{ [key: string]: string }, Uint8Array] {
  if (message.length < 2) {
    throw new Error('Message too short to contain header length');
  }

  const headerLength = (message[0] << 8) | message[1]; // Read big-endian uint16
  const headers: { [key: string]: string } = {};

  if (headerLength > 0 && headerLength + 2 <= message.length) {
    const headerBytes = message.slice(2, headerLength + 2);
    const headerString = new TextDecoder().decode(headerBytes);
    const headerLines = headerString.split('\r\n');
    for (const line of headerLines) {
      const [key, value] = line.split(':', 2);
      if (key && value) {
        headers[key] = value.trim();
      }
    }
  }

  return [headers, message.slice(headerLength + 2)];
}

function browserSplitTextByByteLength(text: string, byteLength: number): Generator<Uint8Array> {
  return (function* () {
    if (byteLength <= 0) {
      throw new Error("byteLength must be greater than 0");
    }
    const encoder = new TextEncoder();
    let remaining = text.trim();

    while (encoder.encode(remaining).length > byteLength) {
      // Binary-search a character boundary that fits the byte limit. Slicing the
      // encoded bytes directly can corrupt non-ASCII characters on long pages.
      let low = 1;
      let high = remaining.length;
      while (low < high) {
        const middle = Math.ceil((low + high) / 2);
        if (encoder.encode(remaining.slice(0, middle)).length <= byteLength) low = middle;
        else high = middle - 1;
      }

      let splitAt = low;
      const candidate = remaining.slice(0, splitAt);
      const paragraphBreak = candidate.lastIndexOf('\n');
      const sentenceBreak = Math.max(
        candidate.lastIndexOf('. '),
        candidate.lastIndexOf('! '),
        candidate.lastIndexOf('? '),
      );
      const wordBreak = candidate.lastIndexOf(' ');
      const preferred = paragraphBreak > 0
        ? paragraphBreak
        : sentenceBreak > 0
          ? sentenceBreak + 1
          : wordBreak;
      if (preferred > Math.floor(low * 0.5)) splitAt = preferred;

      // The input is SSML-escaped; never split inside an entity such as &amp;.
      const ampersand = candidate.lastIndexOf('&', splitAt);
      const semicolon = candidate.lastIndexOf(';', splitAt);
      if (ampersand > semicolon && ampersand > 0) splitAt = ampersand;

      const chunkText = remaining.slice(0, splitAt).trim();
      if (chunkText) yield encoder.encode(chunkText);
      remaining = remaining.slice(splitAt).trimStart();
    }

    if (remaining) yield encoder.encode(remaining);
  })();
}

/**
 * Configuration options for the browser Communicate class.
 */
export interface BrowserCommunicateOptions {
  /** Voice to use for synthesis (e.g., "en-US-EmmaMultilingualNeural") */
  voice?: string;
  /** Speech rate adjustment (e.g., "+20%", "-10%") */
  rate?: string;
  /** Volume level adjustment (e.g., "+50%", "-25%") */
  volume?: string;
  /** Pitch adjustment in Hz (e.g., "+5Hz", "-10Hz") */
  pitch?: string;
  /** WebSocket connection timeout in milliseconds */
  connectionTimeout?: number;
}

/**
 * Browser-specific Communicate class that uses only browser-native APIs.
 * Uses native WebSocket and Web Crypto API, avoiding any Node.js dependencies.
 * 
 * @example
 * ```typescript
 * const communicate = new BrowserCommunicate('Hello, world!', {
 *   voice: 'en-US-EmmaMultilingualNeural',
 * });
 * 
 * for await (const chunk of communicate.stream()) {
 *   if (chunk.type === 'audio' && chunk.data) {
 *     // Handle audio data
 *   }
 * }
 * ```
 */
export class BrowserCommunicate {
  private readonly ttsConfig: TTSConfig;
  private readonly texts: Generator<Uint8Array>;
  private readonly connectionTimeout?: number;

  private state: BrowserCommunicateState = {
    partialText: BrowserBuffer.from(''),
    streamWasCalled: false,
  };

  /**
   * Creates a new browser Communicate instance for text-to-speech synthesis.
   * 
   * @param text - The text to synthesize
   * @param options - Configuration options for synthesis
   */
  constructor(text: string, options: BrowserCommunicateOptions = {}) {
    this.ttsConfig = new TTSConfig({
      voice: options.voice || DEFAULT_VOICE,
      rate: options.rate,
      volume: options.volume,
      pitch: options.pitch,
    });

    if (typeof text !== 'string') {
      throw new TypeError('text must be a string');
    }

    // Use much larger chunk size for Firefox to avoid WebM concatenation issues
    // Firefox can't handle multiple WebM streams concatenated together
    const chunkSize = isFirefox() ? 32768 : 4096;

    this.texts = browserSplitTextByByteLength(
      escape(removeIncompatibleCharacters(text)),
      // browserCalcMaxMesgSize(this.ttsConfig.voice, this.ttsConfig.rate, this.ttsConfig.volume, this.ttsConfig.pitch),
      chunkSize,
    );

    this.connectionTimeout = options.connectionTimeout;
  }

  private parseMetadata(data: Uint8Array, part: number): BrowserTTSChunk {
    const metadata = JSON.parse(new TextDecoder().decode(data));
    for (const metaObj of metadata['Metadata']) {
      const metaType = metaObj['Type'];
      if (metaType === 'WordBoundary') {
        const currentOffset = metaObj['Data']['Offset'];
        const currentDuration = metaObj['Data']['Duration'];
        return {
          type: metaType,
          offset: currentOffset,
          duration: currentDuration,
          text: unescape(metaObj['Data']['text']['Text']),
          part,
        };
      }
      if (metaType === 'SessionEnd') {
        continue;
      }
      throw new UnknownResponse(`Unknown metadata type: ${metaType}`);
    }
    throw new UnexpectedResponse('No WordBoundary metadata found');
  }

  private async * _stream(part: number): AsyncGenerator<BrowserTTSChunk, void, unknown> {
    const url = `${WSS_URL}&Sec-MS-GEC=${await BrowserDRM.generateSecMsGec()}&Sec-MS-GEC-Version=${SEC_MS_GEC_VERSION}&ConnectionId=${connectId()}`;

    const websocket = new WebSocket(url);
    const messageQueue: (BrowserTTSChunk | Error | 'close')[] = [];
    let resolveMessage: (() => void) | null = null;

    // Set connection timeout if specified
    let timeoutId: number | undefined;
    if (this.connectionTimeout) {
      timeoutId = window.setTimeout(() => {
        websocket.close();
        messageQueue.push(new WebSocketError('Connection timeout'));
        if (resolveMessage) resolveMessage();
      }, this.connectionTimeout);
    }

    websocket.onmessage = (event: MessageEvent) => {
      // Clear timeout on first message
      if (timeoutId) {
        window.clearTimeout(timeoutId);
        timeoutId = undefined;
      }

      const data = event.data;
      const isBinary = data instanceof ArrayBuffer || data instanceof Blob;

      if (typeof data === 'string') {
        // Text message
        const [headers, parsedData] = browserGetHeadersAndDataFromText(BrowserBuffer.from(data));

        const path = headers['Path'];
        if (path === 'audio.metadata') {
          try {
            const parsedMetadata = this.parseMetadata(parsedData, part);
            messageQueue.push(parsedMetadata);
          } catch (e) {
            messageQueue.push(e as Error);
          }
        } else if (path === 'turn.end') {
          websocket.close();
        } else if (path !== 'response' && path !== 'turn.start') {
          messageQueue.push(new UnknownResponse(`Unknown path received: ${path}`));
        }
      } else if (data instanceof ArrayBuffer) {
        // Binary message
        const bufferData = BrowserBuffer.from(data);
        if (bufferData.length < 2) {
          messageQueue.push(new UnexpectedResponse('We received a binary message, but it is missing the header length.'));
        } else {
          const [headers, audioData] = browserGetHeadersAndDataFromBinary(bufferData);

          if (headers['Path'] !== 'audio') {
            messageQueue.push(new UnexpectedResponse('Received binary message, but the path is not audio.'));
          } else {
            const contentType = headers['Content-Type'] || '';
            // Accept both MP3 (Chrome) and WebM (Firefox) content types
            // Content-Type may include codec parameter (e.g., "audio/webm; codec=opus")
            const isValidAudio = contentType === 'audio/mpeg' ||
                                 contentType.startsWith('audio/webm') ||
                                 contentType === 'audio/webm';
            if (!isValidAudio && contentType) {
              // Only error if there's a Content-Type and it's not valid
              if (audioData.length > 0) {
                messageQueue.push(new UnexpectedResponse(`Received binary message with unexpected Content-Type: ${contentType}`));
              }
            } else if (audioData.length === 0) {
              // Ignore empty audio chunks (normal at end of stream)
              // Do nothing - this is expected behavior
            } else {
              // Accept audio data even without Content-Type header (for compatibility)
              messageQueue.push({ type: 'audio', data: audioData, part });
            }
          }
        }
      } else if (data instanceof Blob) {
        // Handle Blob data using FileReader to avoid Firefox cross-compartment issues
        const reader = new FileReader();
        reader.onload = () => {
          try {
            const arrayBuffer = reader.result as ArrayBuffer;

            // Firefox cross-compartment fix: manually copy bytes to avoid constructor issues
            const byteLength = (arrayBuffer as any).byteLength;
            const bufferData = new Uint8Array(byteLength);
            const sourceView = new Uint8Array(arrayBuffer);
            for (let i = 0; i < byteLength; i++) {
              bufferData[i] = sourceView[i];
            }

            if (bufferData.length < 2) {
              messageQueue.push(new UnexpectedResponse('We received a binary message, but it is missing the header length.'));
            } else {
              const [headers, audioData] = browserGetHeadersAndDataFromBinary(bufferData);

              if (headers['Path'] !== 'audio') {
                messageQueue.push(new UnexpectedResponse('Received binary message, but the path is not audio.'));
              } else {
                const contentType = headers['Content-Type'] || '';
                // Accept both MP3 (Chrome) and WebM (Firefox) content types
                // Content-Type may include codec parameter (e.g., "audio/webm; codec=opus")
                const isValidAudio = contentType === 'audio/mpeg' ||
                                     contentType.startsWith('audio/webm') ||
                                     contentType === 'audio/webm';
                if (!isValidAudio && contentType) {
                  // Only error if there's a Content-Type and it's not valid
                  if (audioData.length > 0) {
                    messageQueue.push(new UnexpectedResponse(`Received binary message with unexpected Content-Type: ${contentType}`));
                  }
                } else if (audioData.length === 0) {
                  // Ignore empty audio chunks (normal at end of stream)
                  // Do nothing - this is expected behavior
                } else {
                  // Accept audio data even without Content-Type header (for compatibility)
                  messageQueue.push({ type: 'audio', data: audioData, part });
                }
              }
            }
          } catch (error) {
            console.error('Error processing Blob data:', error);
            messageQueue.push(new UnexpectedResponse(`Failed to process Blob: ${error}`));
          }
          // Always resolve after processing blob
          if (resolveMessage) {
            resolveMessage();
            resolveMessage = null; // Prevent double resolution
          }
        };
        reader.onerror = () => {
          console.error('FileReader error:', reader.error);
          messageQueue.push(new UnexpectedResponse('Failed to read Blob data'));
          if (resolveMessage) {
            resolveMessage();
            resolveMessage = null; // Prevent double resolution
          }
        };
        reader.readAsArrayBuffer(data);
        // Don't call resolveMessage here - let the FileReader callbacks handle it
        return;
      }

      // Only resolve for non-Blob messages
      if (resolveMessage) resolveMessage();
    };

    websocket.onerror = (error: Event) => {
      if (timeoutId) {
        window.clearTimeout(timeoutId);
        timeoutId = undefined;
      }
      messageQueue.push(new WebSocketError('WebSocket error occurred'));
      if (resolveMessage) resolveMessage();
    };

    websocket.onclose = () => {
      if (timeoutId) {
        window.clearTimeout(timeoutId);
        timeoutId = undefined;
      }
      messageQueue.push('close');
      if (resolveMessage) resolveMessage();
    };

    await new Promise<void>((resolve, reject) => {
      websocket.onopen = () => {
        if (timeoutId) {
          window.clearTimeout(timeoutId);
          timeoutId = undefined;
        }
        resolve();
      };

      // Set up a timeout for connection establishment
      if (this.connectionTimeout) {
        setTimeout(() => {
          if (websocket.readyState === WebSocket.CONNECTING) {
            websocket.close();
            reject(new WebSocketError('Connection timeout'));
          }
        }, this.connectionTimeout);
      }
    });

    // Use WebM format for Firefox, MP3 for Chrome
    const outputFormat = isFirefox()
      ? 'webm-24khz-16bit-mono-opus'
      : 'audio-24khz-48kbitrate-mono-mp3';

    websocket.send(
      `X-Timestamp:${dateToString()}\r\n`
      + 'Content-Type:application/json; charset=utf-8\r\n'
      + 'Path:speech.config\r\n\r\n'
      + '{"context":{"synthesis":{"audio":{"metadataoptions":{'
      + '"sentenceBoundaryEnabled":"false","wordBoundaryEnabled":"true"},'
      + `"outputFormat":"${outputFormat}"`
      + '}}}}\r\n'
    );

    websocket.send(
      ssmlHeadersPlusData(
        connectId(),
        dateToString(),
        mkssml(this.ttsConfig, new TextDecoder().decode(this.state.partialText)),
      )
    );

    let audioWasReceived = false;
    while (true) {
      if (messageQueue.length > 0) {
        const message = messageQueue.shift()!;
        if (message === 'close') {
          if (!audioWasReceived) {
            throw new NoAudioReceived('No audio was received.');
          }
          break;
        } else if (message instanceof Error) {
          throw message;
        } else {
          if (message.type === 'audio') audioWasReceived = true;
          yield message;
        }
      } else {
        // Use a more responsive wait mechanism
        await new Promise<void>(resolve => {
          resolveMessage = resolve;
          // Add a small timeout to prevent indefinite waiting
          setTimeout(resolve, 50);
        });
      }
    }
  }

  /**
   * Streams text-to-speech synthesis results using native browser WebSocket.
   * Uses only browser-native APIs, avoiding Node.js dependencies.
   * 
   * @yields BrowserTTSChunk - Audio data or word boundary information
   * @throws {Error} If called more than once
   * @throws {NoAudioReceived} If no audio data is received
   * @throws {WebSocketError} If WebSocket connection fails
   */
  async * stream(): AsyncGenerator<BrowserTTSChunk, void, unknown> {
    if (this.state.streamWasCalled) {
      throw new Error('stream can only be called once.');
    }
    this.state.streamWasCalled = true;

    let part = 0;
    for (const partialText of this.texts) {
      this.state.partialText = partialText;
      for await (const message of this._stream(part)) {
        yield message;
      }
      yield { type: 'ChunkEnd', part };
      part += 1;
    }
  }
}
