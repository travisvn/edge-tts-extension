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
  chrome.runtime.sendMessage({ action: "controlPanel:remove" });
}


export function togglePause() {
  if (!audioElement) return;

  if (audioElement.paused) {
    audioElement.play();
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


export async function readText(text:string) {
  cleanup();
  try {
    const settings = await chrome.storage.sync.get({
      voiceName: "en-US-ChristopherNeural",
      customVoice: "",
      speed: 1.2,
    });

    const tts = new EdgeTTSClient();
    await tts.setMetadata(
      settings.customVoice || settings.voiceName, // Use custom voice if specified
      OUTPUT_FORMAT.WEBM_24KHZ_16BIT_MONO_OPUS
      // OUTPUT_FORMAT.AUDIO_24KHZ_48KBITRATE_MONO_MP3
    );

    const prosodyOptions = new ProsodyOptions();
    prosodyOptions.rate = settings.speed;

    return new Promise((resolve, reject) => {
      const mediaSource = new MediaSource();
      let sourceBuffer: SourceBuffer;
      const chunks: Uint8Array[] = [];
      let isFirstChunk = true;

      chrome.runtime.sendMessage({ action: "controlPanel:create" });

      if (!audioElement) {
        audioElement = new Audio();
        audioElement.src = URL.createObjectURL(mediaSource);
        navigator.mediaSession.setActionHandler("play", () =>
          audioElement.play()
        );
        navigator.mediaSession.setActionHandler("pause", () =>
          audioElement.pause()
        );
        navigator.mediaSession.setActionHandler("stop", () => stopPlayback());

        audioElement.onplay = () => {
          isPlaying = true;
        };

        audioElement.onpause = () => {
          isPlaying = false;
        };

        audioElement.onended = () => {
          isPlaying = false;
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

      chrome.runtime.sendMessage({ action: "controlPanel:updateLoading", isLoading: false });
      mediaSource.addEventListener("sourceopen", () => {
        try {
          sourceBuffer = mediaSource.addSourceBuffer(
            'audio/webm; codecs="opus"'
          );
          sourceBuffer.addEventListener("updateend", appendNextChunk);

          const stream = tts.toStream(text, prosodyOptions);

          stream.on("data", (data) => {
            if (data instanceof Uint8Array) {
              chunks.push(data);
              appendNextChunk();
            }
          });

          stream.on("end", () => {
            const checkAndEndStream = () => {
              if (chunks.length === 0 && !sourceBuffer.updating) {
                mediaSource.endOfStream();
                resolve(void 0);
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

export function readPage() {


  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (!tabs || tabs.length === 0 || !tabs[0].id) return;
    
    const tabId = tabs[0].id;

    chrome.scripting.executeScript({
      target: { tabId: tabId },
      func: () => document.body.innerText
    }).then((results) => {
      if (results && results.length > 0 && results[0].result) {
        const selectedText = results[0].result;
        console.log("page content :", selectedText);
        readText(selectedText);
      }
    });
  });
}