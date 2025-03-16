import { setupOffscreenDocument } from "../offScreen/setup";

// 🌟 Register Context Menus
chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "readAloud",
    title: "Read Aloud with Edge TTS",
    contexts: ["selection"],
  });

  chrome.contextMenus.create({
    id: "readPage",
    title: "Read Page Aloud with Edge TTS",
    contexts: ["page"],
  });
});

// 🌟 Function to Read Full Page
export async function grabAndReadPage() {
  await setupOffscreenDocument('offScreen/off-screen.html');

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
      func: () => document.body.innerText,
    }).then((results) => {
      if (results && results.length > 0 && results[0].result) {
        const pageContent = results[0].result;
        console.log("[Background] Sending page content to offscreen.");

        chrome.runtime.sendMessage({
          type: "readText",
          target: "offscreen",
          data: pageContent,
          settings,
        });
      }
    });
  });
}

// 🌟 Handle Context Menu Clicks
chrome.contextMenus.onClicked.addListener(async (info, tab) => {
  if (!tab?.id) {
    console.error("[Background] Tab not found.");
    return;
  }

  const settings = await chrome.storage.sync.get({
    voiceName: "en-US-ChristopherNeural",
    customVoice: "",
    speed: 1.2,
  });

  if (info.menuItemId === "readAloud" && info.selectionText) {
    await setupOffscreenDocument('offScreen/off-screen.html');

    chrome.runtime.sendMessage({
      type: "readText",
      target: "offscreen",
      data: info.selectionText,
      settings,
    });
  } else if (info.menuItemId === "readPage") {
    grabAndReadPage();
  }
});

// 🌟 Handle Keyboard Shortcuts
chrome.commands.onCommand.addListener(async (command) => {
  if (command === "read-selected-text") {
    await setupOffscreenDocument('offScreen/off-screen.html');

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
            console.log("[Background] Sending selected text to offscreen.");

            chrome.runtime.sendMessage({
              type: "readText",
              target: "offscreen",
              data: selectedText,
              settings,
            });
          } else {
            console.warn("[Background] No text selected.");
          }
        })
        .catch((error) => console.error("[Background] Error executing script:", error));
    });
  }
});

// 🌟 Unified Message Listener (Handles Both Offscreen and UI Messages)
chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
  console.log("[Background] Received message:", message);

  // 🔹 Ensure offscreen document exists before sending messages
  if (["readText", "togglePause", "stopPlayback"].includes(message.type) && message.target === "offscreen") {
    await setupOffscreenDocument('offScreen/off-screen.html');
  }

  if (message.action === "offscreen:readPage") {
    grabAndReadPage();
  } else if (message.action === "offscreen:togglePause") {
    chrome.runtime.sendMessage({
      type: "togglePause",
      target: "offscreen",
      isPaused: message.isPaused,
    });
  } else if (message.action === "offscreen:stopPlayback") {
    console.log("[Background] Stopping playback and removing control panel.");
    chrome.runtime.sendMessage({
      type: "stopPlayback",
      target: "offscreen",
    });
  } else {
    // 🔹 Relay messages to the content script (UI updates)
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (!tabs || tabs.length === 0 || !tabs[0].id) {
        console.error("[Background] No active tab found.");
        return;
      }

      const tabId = tabs[0].id;
      chrome.tabs.sendMessage(tabId, message);
    });
  }
});
