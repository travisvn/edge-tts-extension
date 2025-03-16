import { audioElement, stopPlayback, readText } from "./ttsService";

chrome.runtime.onMessage.addListener((message) => {
  if (message.target !== "offscreen") return;

  console.log("[Offscreen] Received message:", message);

  if (message.type === "readText") {
    readText(message.data, message.settings);
  }

  if (message.type === "stopPlayback") {
    stopPlayback();
  }

  if (message.type === "togglePause") {
    if (message.isPaused) {
      audioElement?.pause();
    } else {
      audioElement?.play();
    }
  }
});
