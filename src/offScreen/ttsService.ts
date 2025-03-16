import { EdgeTTSClient, OUTPUT_FORMAT, ProsodyOptions } from "edge-tts-client";

export let audioElement = null;
export let isPlaying = false;

function cleanup() {
  if (audioElement) {
    const oldSrc = audioElement.src;
    audioElement.src = "";
    URL.revokeObjectURL(oldSrc);
  }
  audioElement = null;
  isPlaying = false;

  // Notify content script to remove the control panel using consistent message format
  chrome.runtime.sendMessage({
    action: "controlPanel:remove"
  });

  // Clear media session handlers
  if ('mediaSession' in navigator) {
    navigator.mediaSession.setActionHandler("play", null);
    navigator.mediaSession.setActionHandler("pause", null);
    navigator.mediaSession.setActionHandler("stop", null);
  }
}

export function togglePause() {
  if (!audioElement) return;

  if (audioElement.paused) {
    audioElement.play().catch(err => {
      console.error("Error playing audio:", err);
    });
  } else {
    audioElement.pause();
  }
}

export function stopPlayback() {
  if (audioElement) {
    audioElement.pause();
    audioElement.currentTime = 0;
  }
  cleanup();
}

type ReadTextSettings = {
  voiceName?: string;
  customVoice?: string;
  speed?: number;
}

export async function readText(text: string, settings: ReadTextSettings = {
  voiceName: "en-US-ChristopherNeural",
  customVoice: "",
  speed: 1.2,
}) {
  cleanup();

  // Send message to create the control panel first using consistent message format
  chrome.runtime.sendMessage({
    action: "controlPanel:create"
  });

  try {
    const tts = new EdgeTTSClient();
    await tts.setMetadata(
      settings.customVoice || settings.voiceName, // Use custom voice if specified
      OUTPUT_FORMAT.WEBM_24KHZ_16BIT_MONO_OPUS
    );

    const prosodyOptions = new ProsodyOptions();
    prosodyOptions.rate = settings.speed;

    return new Promise((resolve, reject) => {
      const mediaSource = new MediaSource();
      let sourceBuffer: SourceBuffer;
      const chunks: Uint8Array[] = [];
      let isFirstChunk = true;

      if (!audioElement) {
        audioElement = new Audio();
        audioElement.src = URL.createObjectURL(mediaSource);

        // Set up media session handlers
        if ('mediaSession' in navigator) {
          navigator.mediaSession.metadata = new MediaMetadata({
            title: 'Reading Text',
            artist: 'Edge TTS Extension',
            album: 'Text to Speech'
          });

          navigator.mediaSession.setActionHandler("play", () => {
            if (!audioElement.paused) return; // Already playing
            audioElement.play().catch(err => {
              console.error("Error playing audio:", err);
            });
          });

          navigator.mediaSession.setActionHandler("pause", () => {
            if (audioElement.paused) return; // Already paused
            audioElement.pause();
          });

          navigator.mediaSession.setActionHandler("stop", () => {
            stopPlayback();
          });
        }

        audioElement.onplay = () => {
          isPlaying = true;
          if ('mediaSession' in navigator) {
            navigator.mediaSession.playbackState = "playing";
          }

          // Notify the control panel that playback has started using consistent message format
          chrome.runtime.sendMessage({
            action: "controlPanel:updatePlaybackState",
            isPlaying: true
          });
        };

        audioElement.onpause = () => {
          isPlaying = false;
          if ('mediaSession' in navigator) {
            navigator.mediaSession.playbackState = "paused";
          }

          // Notify the control panel that playback has paused using consistent message format
          chrome.runtime.sendMessage({
            action: "controlPanel:updatePlaybackState",
            isPlaying: false
          });
        };

        audioElement.onended = () => {
          isPlaying = false;
          if ('mediaSession' in navigator) {
            navigator.mediaSession.playbackState = "none";
          }

          // Notify the control panel that playback has ended using consistent message format
          chrome.runtime.sendMessage({
            action: "controlPanel:updatePlaybackState",
            isPlaying: false
          });

          // Clean up resources when playback is complete
          cleanup();
        };
      }

      const appendNextChunk = () => {
        if (chunks.length > 0 && !sourceBuffer.updating) {
          try {
            const chunk = chunks.shift();
            if (chunk) {
              sourceBuffer.appendBuffer(chunk);
              if (isFirstChunk) {
                audioElement.play().catch(console.error);
                isFirstChunk = false;
              }
            }
          } catch (e) {
            if (e.name === "QuotaExceededError") {
              setTimeout(appendNextChunk, 1000);
            } else {
              reject(e);
            }
          }
        }
      };

      mediaSource.addEventListener("sourceopen", () => {
        // Update UI to indicate loading is complete using consistent message format
        chrome.runtime.sendMessage({
          action: "controlPanel:updateLoading",
          isLoading: false
        });
        try {
          sourceBuffer = mediaSource.addSourceBuffer(
            'audio/webm; codecs="opus"'
          );
          sourceBuffer.addEventListener("updateend", appendNextChunk);

          const stream = tts.toStream(text, prosodyOptions);
          console.log('stream :', stream);

          stream.on("data", (data) => {
            console.log('data :', data);
            if (data instanceof Uint8Array) {
              chunks.push(data);
              appendNextChunk();
            }
          });

          stream.on("end", () => {
            const checkAndEndStream = () => {
              if (chunks.length === 0 && !sourceBuffer.updating) {
                mediaSource?.endOfStream();
                resolve(void 0);
              } else {
                setTimeout(checkAndEndStream, 100);
              }
            };
            checkAndEndStream();
          });
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

