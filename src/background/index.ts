import { audioElement, stopPlayback, readText, readPage } from "./ttsService";
// src/background/index.ts

chrome.runtime.onStartup.addListener( () => {
  console.log(`onStartup()`);
});

chrome.runtime.onInstalled.addListener(() => {
  // Add context menu for reading selected text
  chrome.contextMenus.create({
    id: "readAloud",
    title: "Read Aloud with Edge TTS",
    contexts: ["selection"],
  });

  // Add context menu for reading the entire page
  chrome.contextMenus.create({
    id: "readPage",
    title: "Read Page Aloud with Edge TTS",
    contexts: ["page"],
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (
    info.menuItemId === "readAloud" &&
    info.selectionText &&
    tab?.id !== undefined
  ) {
    // Handle reading selected text
    readText(info.selectionText);
  } else if (info.menuItemId === "readPage" && tab?.id !== undefined) {
    readPage();
  }
});

chrome.commands.onCommand.addListener((command) => {
  if (command === "read-selected-text") {
    console.log("Executing read-selected-text command");

    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (!tabs || tabs.length === 0 || !tabs[0].id) return;

      const tabId = tabs[0].id;

      chrome.scripting
        .executeScript({
          target: { tabId: tabId },
          func: () => window.getSelection().toString(),
        })
        .then((results) => {
          if (results && results.length > 0 && results[0].result) {
            const selectedText = results[0].result;
            console.log("Selected text:", selectedText);

            readText(selectedText);
          } else {
            console.log("No text selected.");
          }
        })
        .catch((error) => console.error("Error executing script:", error));
    });
  }
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  switch (message.action) {
    case "background:togglePause":
      console.log("Received pause toggle:", message.isPaused);

      if (message.isPaused) {
        audioElement?.pause();
        chrome.runtime.sendMessage({
          action: "controlPanel:updatePause",
          isPaused: true,
        });
      } else {
        audioElement?.play();
        chrome.runtime.sendMessage({
          action: "controlPanel:updatePause",
          isPaused: false,
        });
      }
      break;

    case "background:stopPlayback":
      console.log("Stopping playback and removing control panel.");
      stopPlayback();
      break;
  }
});
