import './content-styles.css';
import {
  createControlPanel,
  updatePanelContent,
} from "./components/controlPanel";
import { circlePause, circlePlay } from './lib/svgs';

// Track local UI state
let isCurrentlyPaused = false;

// Expose these functions to the global window object for event handlers in HTML
window.onClickTogglePause = onClickTogglePause;
window.onClickStopPlayback = onClickStopPlayback;

// Handle UI-related functionality only
function onClickTogglePause() {
  // Toggle local state immediately
  isCurrentlyPaused = !isCurrentlyPaused;

  // Update UI immediately for better user experience
  updatePlayPauseButton(isCurrentlyPaused);

  // Send message to offscreen page to pause or resume
  chrome.runtime.sendMessage({
    type: "togglePause",
    target: "offscreen",
    isPaused: isCurrentlyPaused
  });
}

function onClickStopPlayback() {
  // Send message to offscreen page to stop playback
  chrome.runtime.sendMessage({
    type: "stopPlayback",
    target: "offscreen"
  });
}

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

function removeControlPanel() {
  const controlPanel = document.getElementById('tts-control-panel');
  if (controlPanel && controlPanel.parentNode) {
    controlPanel.parentNode.removeChild(controlPanel);
  }
}

// Listen for messages from the background script or offscreen page
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

  if (request.action === "controlPanel:updatePlaybackState") {
    // Update our local state to match the actual playback state
    isCurrentlyPaused = !request.isPlaying;
    updatePlayPauseButton(isCurrentlyPaused);
  }
});
