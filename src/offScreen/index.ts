import { audioElement, stopPlayback, readText } from "./ttsService";

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.target !== "offscreen") return 

  if (message.type === "readText" && message.target === "offscreen") {
    readText(message.data, message.settings);
  }
  
  if (message.type === "stopPlayback" && message.target === "offscreen") {
    console.log("Stopping playback and removing control panel.");
    stopPlayback();
  }
  if (message.type === "togglePause" && message.target === "offscreen") {
    console.log("Received pause toggle:", message?.isPaused);

    if (message?.isPaused) {
      audioElement?.pause();
    } else {
      audioElement?.play();
    }

    chrome.runtime.sendMessage({
      action: "controlPanel:updatePause",
      isPaused: !!message?.isPaused,
    });

  }
});

 