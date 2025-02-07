import { EdgeTTSClient, ProsodyOptions, OUTPUT_FORMAT } from "edge-tts-client";
import "./content-styles.css";
import {
  createControlPanel,
  updatePanelContent,
} from "./components/controlPanel";
import { circlePause, circlePlay } from "./lib/svgs";


window.onClickTogglePause = onClickTogglePause;
window.onClickStopPlayback = onClickStopPlayback;



function removeControlPanel() {
  const controlPanel = document.getElementById('tts-control-panel');
  if (controlPanel && controlPanel.parentNode) {
    controlPanel.parentNode.removeChild(controlPanel);
  }
}


function onClickTogglePause() {
  let panel = document.getElementById('tts-control-panel')
  if (!panel) {
    console.warn('panel not found');
    return;
  };
  const isPaused = panel.dataset.isPaused === 'true';
  panel.dataset.isPaused = `${!isPaused}`;
  updatePlayPauseButton(!isPaused);
  chrome.runtime.sendMessage({ action: "offscreen:togglePause",isPaused: !isPaused });
}

function onClickStopPlayback() {
  chrome.runtime.sendMessage({ action: "offscreen:stopPlayback" });
}

function updatePlayPauseButton(isPaused: boolean) {
  const pauseButton = document.querySelector("#tts-pause");
  if (pauseButton) {
    const buttonText =
      isPaused ?  "Resume" : "Pause";
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


});
