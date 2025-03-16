import { setupOffscreenDocument } from "../offScreen/setup";

// Track if we're currently setting up
let isSettingUp = false;
let messageQueue = [];

// Setup function that ensures messages are processed after setup
async function ensureOffscreenAndProcess(message) {
  if (isSettingUp) {
    // Queue the message if we're currently setting up
    messageQueue.push(message);
    return;
  }

  isSettingUp = true;

  try {
    // Setup offscreen document
    await setupOffscreenDocument('offScreen/off-screen.html');

    // Process the current message
    processMessage(message);

    // Process any queued messages
    while (messageQueue.length > 0) {
      const queuedMessage = messageQueue.shift();
      processMessage(queuedMessage);
    }
  } finally {
    isSettingUp = false;
  }
}

// Process a message by sending it to the offscreen document
function processMessage(message) {
  console.log("[Background] Processing message:", message);
  chrome.runtime.sendMessage(message);
}

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

        ensureOffscreenAndProcess({
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
    ensureOffscreenAndProcess({
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

            ensureOffscreenAndProcess({
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

// 🌟 Unified Message Listener
chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
  console.log("[Background] Received message:", message);

  // Handle messages targeted to the offscreen document
  if (message.target === "offscreen" && message.type) {
    ensureOffscreenAndProcess(message);
    return;
  }

  // Handle UI update messages (controlPanel:*)
  if (message.action && message.action.startsWith("controlPanel:")) {
    // Relay messages to the content script (UI updates)
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
