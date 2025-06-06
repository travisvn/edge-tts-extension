import { Buffer } from 'buffer';

if (typeof globalThis.Buffer === 'undefined') {
  globalThis.Buffer = Buffer;
}

export enum OUTPUT_FORMAT {
  AUDIO_24KHZ_48KBITRATE_MONO_MP3 = "audio-24khz-48kbitrate-mono-mp3",
  AUDIO_24KHZ_96KBITRATE_MONO_MP3 = "audio-24khz-96kbitrate-mono-mp3",
  WEBM_24KHZ_16BIT_MONO_OPUS = "webm-24khz-16bit-mono-opus",
}

export enum PITCH {
  X_LOW = "x-low",
  LOW = "low",
  MEDIUM = "medium",
  HIGH = "high",
  X_HIGH = "x-high",
  DEFAULT = "default",
}

export enum RATE {
  X_SLOW = "x-slow",
  SLOW = "slow",
  MEDIUM = "medium",
  FAST = "fast",
  X_FAST = "x-fast",
  DEFAULT = "default",
}

export enum VOLUME {
  SILENT = "silent",
  X_SOFT = "x-soft",
  SOFT = "soft",
  MEDIUM = "medium",
  LOUD = "loud",
  X_LOUD = "x-LOUD",
  DEFAULT = "default",
}

export class ProsodyOptions {
  pitch: PITCH | string = "+0Hz";
  rate: RATE | string | number = 1.0;
  volume: VOLUME | string | number = 100.0;
}

type EventType = "data" | "close" | "end";

class EventEmitter {
  private eventListeners: Record<EventType, ((...args: any[]) => void)[]> = {
    data: [],
    close: [],
    end: [],
  };

  on(event: EventType, callback: (...args: any[]) => void) {
    this.eventListeners[event].push(callback);
  }

  emit(event: EventType, data: any) {
    this.eventListeners[event].forEach((cb) => cb(data));
  }
}

export type Voice = {
  Name: string;
  ShortName: string;
  Gender: string;
  Locale: string;
  SuggestedCodec: string;
  FriendlyName: string;
  Status: string;
};

type Metadata = {
  Type: "WordBoundary" | "SentenceBoundary";
  Data: {
    Offset: number;
    Duration: number;
    text: {
      Text: string;
      Length: number;
      BoundaryType: "WordBoundary" | "SentenceBoundary";
    };
  };
}[];

export class EdgeTTSClient {
  static OUTPUT_FORMAT = OUTPUT_FORMAT;
  private static CLIENT_TOKEN = "6A5AA1D4EAFF4E9FB37E23D68491D6F4";
  private static VOICES_URL = `https://speech.platform.bing.com/consumer/speech/synthesize/readaloud/voices/list?trustedclienttoken=${EdgeTTSClient.CLIENT_TOKEN}`;
  private static SYNTH_URL = `wss://speech.platform.bing.com/consumer/speech/synthesize/readaloud/edge/v1?TrustedClientToken=${EdgeTTSClient.CLIENT_TOKEN}`;
  private static BINARY_DELIM = "Path:audio\r\n";
  private static VOICE_LANG_REGEX = /\w{2}-\w{2}/;

  private enableLogging: boolean;
  private isBrowser: boolean;
  private ws: WebSocket | null = null;
  private voice: string | null = null;
  private voiceLocale: string | null = null;
  private outputFormat: OUTPUT_FORMAT | null = null;
  private requestQueue: Record<string, EventEmitter> = {};
  private connectionStartTime = 0;

  constructor(enableLogging = false) {
    this.enableLogging = enableLogging;
    this.isBrowser = typeof window !== "undefined" && typeof window.document !== "undefined";
  }

  private log(...args: any[]) {
    if (this.enableLogging) console.log(...args);
  }

  private async sendMessage(message: string) {
    for (let attempt = 1; attempt <= 3 && this.ws?.readyState !== WebSocket.OPEN; attempt++) {
      if (attempt === 1) this.connectionStartTime = Date.now();
      this.log(`Connecting... attempt ${attempt}`);
      await this.initWebSocket();
    }
    this.ws?.send(message);
  }

  private initWebSocket() {
    this.ws = new WebSocket(EdgeTTSClient.SYNTH_URL);
    this.ws.binaryType = "arraybuffer";
    let metadataBuffer: Metadata = [];

    return new Promise<void>((resolve, reject) => {
      this.ws!.onopen = () => {
        this.log("Connected in", (Date.now() - this.connectionStartTime) / 1000, "seconds");
        this.sendMessage(this.getConfigMessage()).then(resolve);
      };

      this.ws!.onmessage = (event) => this.handleMessage(event, metadataBuffer);
      this.ws!.onclose = () => this.handleClose();
      this.ws!.onerror = (error) => reject(`Connection Error: ${error}`);
    });
  }

  private handleMessage(event: MessageEvent, metadataBuffer: Metadata) {
    const buffer = Buffer.from(event.data as ArrayBuffer);
    const message = buffer.toString();
    const requestIdMatch = /X-RequestId:(.*?)\r\n/.exec(message);
    const requestId = requestIdMatch ? requestIdMatch[1] : "";

    if (message.includes("Path:turn.start")) {
      metadataBuffer.length = 0;
    } else if (message.includes("Path:turn.end")) {
      this.requestQueue[requestId]?.emit("end", metadataBuffer);
    } else if (message.includes("Path:audio")) {
      this.cacheAudioData(buffer, requestId);
    } else if (message.includes("Path:audio.metadata")) {
      const startIndex = message.indexOf("{");
      metadataBuffer.push(JSON.parse(message.slice(startIndex)).Metadata[0]);
    } else {
      this.log("Unknown Message", message);
    }
  }

  private handleClose() {
    this.log("Disconnected after:", (Date.now() - this.connectionStartTime) / 1000, "seconds");
    for (const requestId in this.requestQueue) {
      this.requestQueue[requestId].emit("close", null);
    }
  }

  // 🔧 Patched for Firefox: no slice, manual copy instead
  private cacheAudioData(buffer: Uint8Array, requestId: string) {
    const binaryDelimBytes = new TextEncoder().encode(EdgeTTSClient.BINARY_DELIM);
    const delimiterIndex = this.findDelimiterIndex(buffer, binaryDelimBytes);
    if (delimiterIndex === -1) {
      this.log('Delimiter not found in the buffer.');
      return;
    }

    const audioDataStart = delimiterIndex + binaryDelimBytes.length;
    const length = buffer.length - audioDataStart;
    const audioData = new Uint8Array(length);
    for (let i = 0; i < length; i++) {
      audioData[i] = buffer[audioDataStart + i];
    }

    this.requestQueue[requestId]?.emit("data", audioData);
    this.log("Received audio chunk of size:", audioData.length);
  }

  private findDelimiterIndex(buffer: Uint8Array, delimiter: Uint8Array): number {
    for (let i = 0; i <= buffer.length - delimiter.length; i++) {
      let match = true;
      for (let j = 0; j < delimiter.length; j++) {
        if (buffer[i + j] !== delimiter[j]) {
          match = false;
          break;
        }
      }
      if (match) return i;
    }
    return -1;
  }

  private getConfigMessage(): string {
    return `Content-Type:application/json; charset=utf-8\r\nPath:speech.config\r\n\r\n{
      "context": {
        "synthesis": {
          "audio": {
            "metadataoptions": {
              "sentenceBoundaryEnabled": "true",
              "wordBoundaryEnabled": "true"
            },
            "outputFormat": "${this.outputFormat}"
          }
        }
      }
    }`;
  }

  getVoices(): Promise<Voice[]> {
    return fetch(EdgeTTSClient.VOICES_URL)
      .then((response) => response.json())
      .catch((error) => Promise.reject(error));
  }

  async setMetadata(voiceName: string, outputFormat: OUTPUT_FORMAT, voiceLocale?: string) {
    this.voice = voiceName;
    this.outputFormat = outputFormat;
    this.voiceLocale = voiceLocale || this.inferLocaleFromVoiceName(voiceName);

    if (!this.voiceLocale) {
      throw new Error("Could not infer voiceLocale from voiceName!");
    }

    if (!this.ws || this.ws.readyState !== WebSocket.OPEN) {
      this.connectionStartTime = Date.now();
      await this.initWebSocket();
    }
  }

  private inferLocaleFromVoiceName(voiceName: string): string | null {
    const match = EdgeTTSClient.VOICE_LANG_REGEX.exec(voiceName);
    return match ? match[0] : null;
  }

  close() {
    this.ws?.close();
  }

  toStream(text: string, options: ProsodyOptions = new ProsodyOptions()): EventEmitter {
    return this.sendSSMLRequest(this.buildSSML(text, options));
  }

  private escapeSSML(text: string): string {
    return text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&apos;');
  }

  private buildSSML(text: string, options: ProsodyOptions): string {
    const sanitizedText = this.escapeSSML(text);

    return `<speak version="1.0" xmlns="http://www.w3.org/2001/10/synthesis" xmlns:mstts="https://www.w3.org/2001/mstts" xml:lang="${this.voiceLocale}">
      <voice name="${this.voice}">
        <prosody pitch="${options.pitch}" rate="${options.rate}" volume="${options.volume}">
          ${sanitizedText}
        </prosody>
      </voice>
    </speak>`;
  }

  private sendSSMLRequest(ssml: string): EventEmitter {
    if (!this.ws) {
      throw new Error("WebSocket not initialized. Call setMetadata first.");
    }

    const requestId = generateRandomHex(16);
    const requestMessage = `X-RequestId:${requestId}\r\nContent-Type:application/ssml+xml\r\nPath:ssml\r\n\r\n${ssml.trim()}`;

    const eventEmitter = new EventEmitter();
    this.requestQueue[requestId] = eventEmitter;
    this.sendMessage(requestMessage).then();

    return eventEmitter;
  }
}

// --- Helpers ---
function generateRandomHex(length: number): string {
  const randomValues = new Uint8Array(length);
  window.crypto.getRandomValues(randomValues);
  return Array.from(randomValues, (byte) => `0${byte.toString(16)}`.slice(-2)).join("");
}
