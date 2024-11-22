import { EdgeTTSClient, ProsodyOptions, OUTPUT_FORMAT } from "edge-tts-client";
import './content-styles.css';
import {
  createControlPanel,
  updatePanelContent,
} from "./components/controlPanel";
import { circlePause, circlePlay } from './lib/svgs';

let audioElement = null;
let isPlaying = false;
let controlPanel = null;

// Make these functions available to the control panel
window.togglePause = togglePause;
window.stopPlayback = stopPlayback;

export async function initTTS(text) {
  cleanup();
  try {
    const settings = await chrome.storage.sync.get({
      voiceName: "en-US-ChristopherNeural",
      customVoice: "",
      speed: 1.2,
    });

    // Create control panel in loading state
    controlPanel = await createControlPanel(true);

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

      if (!audioElement) {
        audioElement = new Audio();
        audioElement.src = URL.createObjectURL(mediaSource);
        navigator.mediaSession.setActionHandler("play", () => audioElement.play());
        navigator.mediaSession.setActionHandler("pause", () => audioElement.pause());
        navigator.mediaSession.setActionHandler("stop", () => stopPlayback());

        audioElement.onplay = () => {
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
        };
      }

      // Update control panel immediately to show loading state
      if (controlPanel) {
        updatePanelContent(controlPanel, false);
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
            if (e.name === 'QuotaExceededError') {
              setTimeout(appendNextChunk, 1000);
            } else {
              reject(e);
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
  if (audioElement) {
    const oldSrc = audioElement.src;
    audioElement.src = "";
    URL.revokeObjectURL(oldSrc);
  }
  audioElement = null;
  isPlaying = false;
  removeControlPanel();
}

function removeControlPanel() {
  if (controlPanel && controlPanel.parentNode) {
    controlPanel.parentNode.removeChild(controlPanel);
  }
  controlPanel = null;
}

// Message listener
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "stopPlayback") {
    stopPlayback();
    return;
  }

  if (request.action === "readText") {
    initTTS(request.text).catch((error) => {
      console.error("TTS initialization error:", error);
    });
  }

  if (request.action === 'readPage') {
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
});
