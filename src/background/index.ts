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

// Handle keyboard commands
browser.commands.onCommand.addListener(async (command) => {
  const tabs = await browser.tabs.query({ active: true, currentWindow: true });
  const tab = tabs[0];

  if (!tab?.id) {
    console.error('No active tab found for command:', command);
    return;
  }

  switch (command) {
    case 'read-selection':
      // Get selected text and read it
      try {
        const results = await browser.scripting.executeScript({
          target: { tabId: tab.id },
          func: () => window.getSelection()?.toString() || '',
        });

        const selectedText = results[0]?.result as string;
        if (selectedText && selectedText.trim()) {
          browser.tabs.sendMessage(tab.id, {
            action: 'readText',
            text: selectedText,
          });
        } else {
          console.warn('No text selected for read-selection command');
        }
      } catch (error) {
        console.error('Error getting selected text:', error);
      }
      break;

    case 'read-page':
      // Read entire page
      browser.tabs.sendMessage(tab.id, {
        action: 'readPage',
      });
      break;

    case 'read-from-here':
      // Get selected text and read from that position
      try {
        const results = await browser.scripting.executeScript({
          target: { tabId: tab.id },
          func: () => window.getSelection()?.toString() || '',
        });

        const selectedText = results[0]?.result as string;
        if (selectedText && selectedText.trim()) {
          browser.tabs.sendMessage(tab.id, {
            action: 'readFromHere',
            text: selectedText,
          });
        } else {
          console.warn('No text selected for read-from-here command');
        }
      } catch (error) {
        console.error('Error getting selected text for read-from-here:', error);
      }
      break;

    case 'toggle-playback':
      // Toggle play/pause
      browser.tabs.sendMessage(tab.id, {
        action: 'togglePlayback',
      });
      break;

    default:
      console.warn('Unknown command:', command);
  }
});