import { EdgeTTSClient, ProsodyOptions, OUTPUT_FORMAT } from "edge-tts-client";
import './content-styles.css';
import {
  createControlPanel,
  updatePanelContent,
} from "./components/controlPanel";
import { circlePause, circlePlay } from './lib/svgs';

let audioElement: HTMLAudioElement | null = null;
let isPlaying = false;
let controlPanel: HTMLElement | null = null;

// Restore global control functions
window.onClickTogglePause = onClickTogglePause;
window.onClickStopPlayback = onClickStopPlayback;

// 🟢 **1. Restore & Enhance `initTTS` (Text-to-Speech Initialization)**
export async function initTTS(text: string) {
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
      settings.customVoice || settings.voiceName,
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

        // **🟢 Set up `navigator.mediaSession` event handlers**
        navigator.mediaSession.setActionHandler("play", () => {
          audioElement?.play();
        });

        navigator.mediaSession.setActionHandler("pause", () => {
          audioElement?.pause();
        });

        navigator.mediaSession.setActionHandler("stop", () => {
          stopPlayback();
        });

        // **🟢 Keep the UI and playback state in sync**
        audioElement.onplay = () => {
          isPlaying = true;
          navigator.mediaSession.playbackState = "playing";
          updatePlayPauseButton(false);
        };

        audioElement.onpause = () => {
          isPlaying = false;
          navigator.mediaSession.playbackState = "paused";
          updatePlayPauseButton(true);
        };

        audioElement.onended = () => {
          isPlaying = false;
          navigator.mediaSession.playbackState = "paused";
          updatePlayPauseButton(true);
        };
      }

      if (controlPanel) {
        updatePanelContent(false);
      }

      const appendNextChunk = () => {
        if (chunks.length > 0 && !sourceBuffer.updating) {
          try {
            const chunk = chunks.shift();
            if (chunk) {
              sourceBuffer.appendBuffer(chunk);
              if (isFirstChunk) {
                audioElement?.play().catch(console.error);
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

// 🟢 **2. Restore `togglePause`**
function togglePause() {
  if (!audioElement) return;

  if (audioElement.paused) {
    audioElement.play();
  } else {
    audioElement.pause();
  }
}

// 🟢 **3. Restore `stopPlayback`**
function stopPlayback() {
  if (audioElement) {
    audioElement.pause();
    audioElement.currentTime = 0;
  }
  cleanup();
}

// 🟢 **4. Restore `updatePlayPauseButton`**
function updatePlayPauseButton(isPaused: boolean) {
  const pauseButton = document.querySelector("#tts-pause");
  if (pauseButton) {
    const buttonText = isPaused ? "Resume" : "Pause";
    pauseButton.innerHTML = `
      ${isPaused ? circlePlay : circlePause}
      <span>${buttonText}</span>
    `;
  }
}

// 🟢 **5. Restore `onClickTogglePause`**
function onClickTogglePause2() {
  let panel = document.getElementById('tts-control-panel');
  if (!panel) {
    console.warn('panel not found');
    return;
  }
  const isPaused = panel.dataset.isPaused === 'true';
  panel.dataset.isPaused = `${!isPaused}`;
  updatePlayPauseButton(!isPaused);
  chrome.runtime.sendMessage({ action: "offscreen:togglePause", isPaused: !isPaused });
}

// 🟢 **6. Restore `onClickStopPlayback`**
// function onClickStopPlayback() {
//   chrome.runtime.sendMessage({ action: "offscreen:stopPlayback" });
// }

// 🟢 **7. Restore Cleanup & Control Panel Management**
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
  const controlPanel = document.getElementById('tts-control-panel');
  if (controlPanel && controlPanel.parentNode) {
    controlPanel.parentNode.removeChild(controlPanel);
  }
}

// 🟢 **8. Restore Chrome Runtime Message Listener**
chrome.runtime.onMessage.addListener(async (request) => {
  if (request.action === "controlPanel:updateLoading") {
    updatePanelContent(request.isLoading);
  }

  if (request.action === "controlPanel:remove") {
    removeControlPanel();
  }

  if (request.action === "controlPanel:create") {
    await createControlPanel(true);
  }
});



window.onClickTogglePause = onClickTogglePause;
window.onClickStopPlayback = onClickStopPlayback;


function onClickTogglePause() {
  let panel = document.getElementById('tts-control-panel');
  if (!panel) {
    console.warn('panel not found');
    return;
  }
  const isPaused = panel.dataset.isPaused === 'true';
  panel.dataset.isPaused = `${!isPaused}`;

  updatePlayPauseButton(!isPaused);

  // 🔹 Send a message to the offscreen page to pause or resume
  chrome.runtime.sendMessage({ target: "offscreen", type: "togglePause", isPaused: !isPaused });
}


function onClickStopPlayback() {
  chrome.runtime.sendMessage({ action: "offscreen:stopPlayback" });
}

function updatePlayPauseButton3(isPaused: boolean) {
  const pauseButton = document.querySelector("#tts-pause");
  if (pauseButton) {
    const buttonText =
      isPaused ? "Resume" : "Pause";
    pauseButton.innerHTML = `
      ${isPaused ? circlePlay : circlePause}
      <span>
        ${buttonText}
      </span>
    `;
  }
}

chrome.runtime.onMessage.addListener(async (request, sender, sendResponse) => {

  if (request.action === "controlPanel:updateLoading") {
    updatePanelContent(request.isLoading);
  }

  if (request.action === "controlPanel:remove") {
    removeControlPanel();
  }

  if (request.action === "controlPanel:create") {
    await createControlPanel(true);
  }

  if (request.action === "controlPanel:updatePlaybackState") {
    updatePlayPauseButton(!request.isPlaying);
  }

});
