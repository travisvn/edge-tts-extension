import { EdgeTTSClient, ProsodyOptions, OUTPUT_FORMAT } from "edge-tts-client";
import "./content-styles.css";
import {
  createControlPanel,
  updatePanelContent,
} from "./components/controlPanel";
import { circlePause, circlePlay } from "./lib/svgs";


let controlPanel = null;
window.onClickTogglePause = onClickTogglePause;
window.onClickStopPlayback = onClickStopPlayback;

function updatePlayPauseButton(isPaused: boolean) {
  const pauseButton = document.querySelector("#tts-pause");
  if (pauseButton) {
    const buttonText =
      isPaused ? "Pause" : "Resume";
    pauseButton.innerHTML = `
      ${isPaused ? circlePause : circlePlay}
      <span>
        ${buttonText}
      </span>
    `;
  }
}

function removeControlPanel() {
  if (controlPanel && controlPanel.parentNode) {
    controlPanel.parentNode.removeChild(controlPanel);
  }
  controlPanel = null;
}


function onClickTogglePause() {
  chrome.runtime.sendMessage({ action: "offscreen:togglePause" });
}

function onClickStopPlayback() {
  chrome.runtime.sendMessage({ action: "offscreen:stopPlayback" });
}


chrome.runtime.onMessage.addListener(async (request, sender, sendResponse) => {
console.log('request_ content script:', request);
  if (request.action === "controlPanel:updatePause") {
    updatePlayPauseButton(request.isPaused);
  }

  if (request.action === "controlPanel:updateLoading") {
    updatePanelContent(controlPanel, request.isLoading);
  }
  
  if (request.action === "controlPanel:remove") {
    removeControlPanel();
  }

  if (request.action === "controlPanel:create") {
    controlPanel = await createControlPanel(true);
  }


});
