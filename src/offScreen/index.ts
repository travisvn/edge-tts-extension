import { audioElement, stopPlayback, readText, togglePause } from "./ttsService";

/**
 * Message handler for the offscreen document
 * 
 * Handles the following message types:
 * - readText: Reads text with the specified settings
 * - stopPlayback: Stops the current playback
 * - togglePause: Toggles the pause state of the current playback
 */
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
    // Use the togglePause function directly when isPaused is not specified
    if (message.isPaused === undefined) {
      togglePause();
    } else {
      // Otherwise set to the specified state
      if (audioElement) {
        const shouldBePaused = message.isPaused;
        const currentlyPaused = audioElement.paused;

        // Only change state if needed
        if (shouldBePaused !== currentlyPaused) {
          if (shouldBePaused) {
            audioElement.pause();
          } else {
            audioElement.play().catch(err => console.error("Error playing audio:", err));
          }
        }
      }
    }
  }
});

// Initialize media session capabilities when the offscreen document loads
if ('mediaSession' in navigator) {
  navigator.mediaSession.setActionHandler('play', () => {
    audioElement?.play().catch(err => console.error("Error playing audio:", err));
  });

  navigator.mediaSession.setActionHandler('pause', () => {
    audioElement?.pause();
  });

  navigator.mediaSession.setActionHandler('stop', () => {
    stopPlayback();
  });
}
