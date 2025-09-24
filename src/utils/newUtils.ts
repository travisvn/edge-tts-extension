import { ValueError } from './exceptions';
import { TTSConfig } from './ttsConfig';

// Browser-compatible Buffer utilities
class BrowserBuffer {
  static from(input: string | ArrayBuffer | Uint8Array, encoding?: string): Uint8Array {
    if (typeof input === 'string') {
      return new TextEncoder().encode(input);
    } else if (input instanceof ArrayBuffer) {
      return new Uint8Array(input);
    } else if (input instanceof Uint8Array) {
      return input;
    }
    throw new Error('Unsupported input type for BrowserBuffer.from');
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

function _findLastNewlineOrSpaceWithinLimit(text: Uint8Array, limit: number): number {
  const slice = text.subarray(0, limit);
  const textStr = new TextDecoder().decode(slice);
  let splitAt = textStr.lastIndexOf('\n');
  if (splitAt < 0) {
    splitAt = textStr.lastIndexOf(' ');
  }
  return splitAt >= 0 ? new TextEncoder().encode(textStr.substring(0, splitAt)).length : -1;
}

function _findSafeUtf8SplitPoint(textSegment: Uint8Array): number {
  let splitAt = textSegment.length;
  while (splitAt > 0) {
    const slice = textSegment.subarray(0, splitAt);
    try {
      const decoded = new TextDecoder('utf-8', { fatal: true }).decode(slice);
      return splitAt;
    } catch {
      splitAt--;
    }
  }
  return splitAt;
}

function _adjustSplitPointForXmlEntity(text: Uint8Array, splitAt: number): number {
  const textStr = new TextDecoder().decode(text.subarray(0, splitAt));
  let ampersandIndex = textStr.lastIndexOf('&');
  while (ampersandIndex !== -1) {
    const remainingText = textStr.substring(ampersandIndex);
    const semicolonIndex = remainingText.indexOf(';');
    if (semicolonIndex !== -1) {
      break; // Found a terminated entity
    }
    // Ampersand is not terminated before split_at
    splitAt = new TextEncoder().encode(textStr.substring(0, ampersandIndex)).length;
    const newTextStr = new TextDecoder().decode(text.subarray(0, splitAt));
    ampersandIndex = newTextStr.lastIndexOf('&');
  }
  return splitAt;
}

/**
 * Splits text into chunks that don't exceed the specified byte length.
 * Attempts to split at word boundaries and handles UTF-8 encoding properly.
 * @param text - Text to split (string or Uint8Array)
 * @param byteLength - Maximum byte length per chunk
 * @yields Uint8Array chunks of the split text
 * @throws {ValueError} If byteLength is too small or text has invalid structure
 */
export function* splitTextByByteLengthImproved(text: string | Uint8Array, byteLength: number): Generator<Uint8Array> {
  let buffer = typeof text === 'string' ? BrowserBuffer.from(text) : text;

  if (byteLength <= 0) {
    throw new ValueError("byteLength must be greater than 0");
  }

  while (buffer.length > byteLength) {
    let splitAt = _findLastNewlineOrSpaceWithinLimit(buffer, byteLength);

    if (splitAt < 0) {
      splitAt = _findSafeUtf8SplitPoint(buffer.subarray(0, byteLength));
    }

    splitAt = _adjustSplitPointForXmlEntity(buffer, splitAt);

    if (splitAt <= 0) {
      throw new ValueError(
        "Maximum byte length is too small or "
        + "invalid text structure near '&' or invalid UTF-8"
      );
    }

    const chunk = buffer.subarray(0, splitAt);
    const chunkString = new TextDecoder().decode(chunk).trim();
    if (chunkString) {
      yield BrowserBuffer.from(chunkString);
    }

    buffer = buffer.subarray(splitAt);
  }

  const remainingChunk = new TextDecoder().decode(buffer).trim();
  if (remainingChunk) {
    yield BrowserBuffer.from(remainingChunk);
  }
}

/**
 * Creates SSML (Speech Synthesis Markup Language) from text and TTS configuration.
 * @param tc - TTS configuration containing voice and prosody settings
 * @param escapedText - Text content (should be XML-escaped)
 * @returns Complete SSML document string
 */
export function mkssml(tc: TTSConfig, escapedText: string | Uint8Array): string {
  const text = escapedText instanceof Uint8Array ? new TextDecoder().decode(escapedText) : escapedText;
  return (
    "<speak version='1.0' xmlns='http://www.w3.org/2001/10/synthesis' xml:lang='en-US'>"
    + `<voice name='${tc.voice}'>`
    + `<prosody pitch='${tc.pitch}' rate='${tc.rate}' volume='${tc.volume}'>`
    + `${text}`
    + "</prosody>"
    + "</voice>"
    + "</speak>"
  );
}

/**
 * Formats the current date as a string in the format expected by the TTS service.
 * @returns Formatted date string
 */
export function dateToStringAlternative(): string {
  return new Date().toUTCString().replace("GMT", "GMT+0000 (Coordinated Universal Time)");
}

/**
 * Creates a complete WebSocket message with headers and SSML data.
 * @param requestId - Unique request identifier
 * @param timestamp - Timestamp string for the request
 * @param ssml - SSML content to include in the message
 * @returns Complete WebSocket message string with headers and data
 */
export function ssmlHeadersPlusDataAlternative(requestId: string, timestamp: string, ssml: string): string {
  return (
    `X-RequestId:${requestId}\r\n`
    + "Content-Type:application/ssml+xml\r\n"
    + `X-Timestamp:${timestamp}Z\r\n`  // This is not a mistake, Microsoft Edge bug.
    + "Path:ssml\r\n\r\n"
    + `${ssml}`
  );
}

/**
 * Calculates the maximum message size for text chunks based on WebSocket limits.
 * @param ttsConfig - TTS configuration to calculate overhead for
 * @returns Maximum byte size for text content in a single message
 */
export function calcMaxMesgSize(ttsConfig: TTSConfig): number {
  const websocketMaxSize = 2 ** 16;
  const overheadPerMessage = ssmlHeadersPlusData(
    connectId(),
    dateToStringAlternative(),
    mkssml(ttsConfig, ""),
  ).length + 50; // margin of error
  return websocketMaxSize - overheadPerMessage;
}

/**
 * Generates a UUID v4 string without hyphens using Web Crypto API.
 * Works in both Node.js (with globalThis.crypto) and browsers.
 */
export function connectId(): string {
  // Use Web Crypto API available in both Node.js 16+ and all modern browsers
  const array = new Uint8Array(16);
  globalThis.crypto.getRandomValues(array);

  // Set version (4) and variant bits according to RFC 4122
  array[6] = (array[6] & 0x0f) | 0x40;
  array[8] = (array[8] & 0x3f) | 0x80;

  // Convert to hex string and format as UUID, then remove hyphens
  const hex = Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
  const uuid = `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20, 32)}`;

  return uuid.replace(/-/g, '');
}

/**
 * Web-native XML escaping function.
 */
export function escape(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

/**
 * Unescapes XML entities in text.
 */
export function unescape(text: string): string {
  return text
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&');
}

/**
 * Parses text-based WebSocket messages to extract headers and data.
 * Uses Uint8Array for universal compatibility.
 */
export function getHeadersAndDataFromText(message: Uint8Array): [{ [key: string]: string }, Uint8Array] {
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

/**
 * Parses binary WebSocket messages to extract headers and data.
 * Uses Uint8Array for universal compatibility.
 */
export function getHeadersAndDataFromBinary(message: Uint8Array): [{ [key: string]: string }, Uint8Array] {
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

/**
 * Converts a date to the expected string format for WebSocket messages.
 */
export function dateToString(date?: Date): string {
  if (!date) {
    date = new Date();
  }
  return date.toISOString().replace(/[-:.]/g, '').slice(0, -1);
}

/**
 * Removes characters that are incompatible with SSML.
 * Preserves essential punctuation (.?;:!,) for natural speech pauses.
 * XML special characters (&<>"') are handled by the escape() function.
 */
export function removeIncompatibleCharacters(str: string): string {
  // Keep essential punctuation for natural speech: .?;:!,
  // Remove characters that could break SSML structure or cause parsing issues
  const chars_to_remove = "*/()[]{}$%^@#+=|\\~`><\"&";
  let clean_str = str;
  for (const char of chars_to_remove) {
    clean_str = clean_str.replace(new RegExp('\\' + char, 'g'), '');
  }
  return clean_str;
}

/**
 * Splits text by byte length while respecting word boundaries.
 */
export function splitTextByByteLength(text: string, byteLength: number): string[] {
  const encoder = new TextEncoder();
  const words = text.split(/(\s+)/); // Split by whitespace but keep delimiters
  const chunks: string[] = [];
  let currentChunk = "";

  for (const word of words) {
    const potentialChunk = currentChunk + word;
    if (encoder.encode(potentialChunk).length <= byteLength) {
      currentChunk = potentialChunk;
    } else {
      if (currentChunk) {
        chunks.push(currentChunk.trim());
        currentChunk = word;
      } else {
        // Single word is longer than byteLength, split it
        const wordBytes = encoder.encode(word);
        for (let i = 0; i < wordBytes.length; i += byteLength) {
          const slice = wordBytes.slice(i, i + byteLength);
          chunks.push(new TextDecoder().decode(slice));
        }
        currentChunk = "";
      }
    }
  }

  if (currentChunk.trim()) {
    chunks.push(currentChunk.trim());
  }

  return chunks;
}

/**
 * Creates SSML headers plus data for WebSocket communication.
 */
export function ssmlHeadersPlusData(requestId: string, timestamp: string, ssml: string): string {
  return `X-RequestId:${requestId}\r\nContent-Type:application/ssml+xml\r\nX-Timestamp:${timestamp}Z\r\nPath:ssml\r\n\r\n${ssml}`;
}