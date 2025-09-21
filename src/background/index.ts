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

  // Add context menu for reading from here (when text is selected)
  browser.contextMenus.create({
    id: 'readFromHere',
    title: 'Start reading aloud from here',
    contexts: ['selection'],
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
  } else if (info.menuItemId === 'readFromHere' && info.selectionText && tab?.id !== undefined) {
    // Handle reading from here
    browser.tabs.sendMessage(tab.id, {
      action: 'readFromHere',
      text: info.selectionText,
    });
  }
});