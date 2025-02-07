import { setupOffscreenDocument } from "../offScreen/setup";
// src/background/index.ts

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

export async function grabAndReadPage( ) {
  await setupOffscreenDocument('offScreen/off-screen.html')
  
  chrome.tabs.query({ active: true, currentWindow: true }, async (tabs) => {
    if (!tabs || tabs.length === 0 || !tabs[0].id) return;
    
    const tabId = tabs[0].id;
    const settings = await chrome.storage.sync.get({
      voiceName: "en-US-ChristopherNeural",
      customVoice: "",
      speed: 1.2,
    });

    chrome.scripting.executeScript({
      target: { tabId: tabId },
      func: () => document.body.innerText
    }).then((results) => {
      if (results && results.length > 0 && results[0].result) {
        const pageContent = results[0].result;
        console.log("page content :", pageContent);
        chrome.runtime.sendMessage({
          type: 'readText',
          target: 'offscreen',
          data: pageContent,
          settings
        });
      }
    });
  });
}


chrome.contextMenus.onClicked.addListener(async (info, tab) => {

  if (!tab.id ) {
    console.error('Tab Not Found.')
    return 
  }

  const settings = await chrome.storage.sync.get({
    voiceName: "en-US-ChristopherNeural",
    customVoice: "",
    speed: 1.2,
  });
  

  if (
    info.menuItemId === "readAloud" &&
    info.selectionText
  ) {
    await setupOffscreenDocument('offScreen/off-screen.html')
    chrome.runtime.sendMessage({
      type: 'readText',
      target: 'offscreen',
      data: info.selectionText,
      settings
    });
  } else if (info.menuItemId === "readPage" && tab?.id !== undefined) {
    grabAndReadPage()
  }
});

chrome.commands.onCommand.addListener(async (command) => {
  if (command === "read-selected-text") {
    await setupOffscreenDocument('offScreen/off-screen.html')

    const settings = await chrome.storage.sync.get({
      voiceName: "en-US-ChristopherNeural",
      customVoice: "",
      speed: 1.2,
    });

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
            
            // Send message to offscreen document
            chrome.runtime.sendMessage({
              type: 'readText',
              target: 'offscreen',
              data: selectedText,
              settings
            });
          } else {
            console.log("No text selected.");
          }
        })
        .catch((error) => console.error("Error executing script:", error));
    });
  }
});

chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
  
  // forward messages to offscreen document
  if (message.action === "offscreen:readPage") {
    grabAndReadPage()
  }
  else if (message.action === "offscreen:togglePause") {
    console.log("Received pause toggle:", message.isPaused);
    chrome.runtime.sendMessage({
      type: 'togglePause',
      target: 'offscreen',
      isPaused: message.isPaused
    });
  } else if (message.action === "offscreen:stopPlayback") {
    console.log("Stopping playback and removing control panel.");
    chrome.runtime.sendMessage({
      type: 'stopPlayback',
      target: 'offscreen',
    });
  }
  // forward messages to content script
  if (message.action ==='controlPanel:updatePause') {
    chrome.runtime.sendMessage({
      action: 'controlPanel:updatePause',
      isPaused: message.isPaused
    });
  }else if (message.action ==='controlPanel:remove') {
    chrome.runtime.sendMessage({
      action: 'controlPanel:remove',
    });
  }else if (message.action ==='controlPanel:create') {
    chrome.runtime.sendMessage({
      action: 'controlPanel:create',
    });
  }else if (message.action ==='controlPanel:updateLoading') {
    chrome.runtime.sendMessage({
      action: 'controlPanel:updateLoading',
      isLoading: message.isLoading
    });
  }
});
