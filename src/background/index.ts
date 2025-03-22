// src/background/index.ts
import browser from 'webextension-polyfill';

browser.runtime.onInstalled.addListener(() => {
  // Add context menu for reading selected text
  browser.contextMenus.create({
    id: 'readAloud',
    title: 'Read Aloud with Edge TTS',
    contexts: ['selection'],
  });

  // Add context menu for reading the entire page
  browser.contextMenus.create({
    id: 'readPage',
    title: 'Read Page Aloud with Edge TTS',
    contexts: ['page'],
  });
});

browser.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === 'readAloud' && info.selectionText && tab?.id !== undefined) {
    // Handle reading selected text
    browser.tabs.sendMessage(tab.id, {
      action: 'readText',
      text: info.selectionText,
    });
  } else if (info.menuItemId === 'readPage' && tab?.id !== undefined) {
    // Handle reading the entire page
    browser.tabs.sendMessage(tab.id, {
      action: 'readPage',
    });
  }
});