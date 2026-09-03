// src/background/index.ts
import browser from 'webextension-polyfill';

let playbackTabId: number | null = null;
let playbackState = { state: 'idle', status: '', followEnabled: true };

async function claimPlayback(tabId: number): Promise<void> {
  if (playbackTabId !== null && playbackTabId !== tabId) {
    await browser.tabs.sendMessage(playbackTabId, { action: 'stopPlayback' }).catch(() => undefined);
  }
  playbackTabId = tabId;
}

async function sendReadingCommand(tabId: number, message: Record<string, unknown>): Promise<void> {
  await claimPlayback(tabId);
  await browser.tabs.sendMessage(tabId, message);
}

const nativeSidePanel = (globalThis as any).chrome?.sidePanel;
if (nativeSidePanel?.setPanelBehavior) {
  nativeSidePanel.setPanelBehavior({ openPanelOnActionClick: true }).catch(() => undefined);
}

async function activeTabId(): Promise<number | null> {
  const [tab] = await browser.tabs.query({ active: true, currentWindow: true });
  return tab?.id ?? null;
}

async function handlePanelCommand(message: { command?: string; value?: number; voiceName?: string }): Promise<unknown> {
  if (message.command === 'getState') return { ...playbackState, playbackTabId };
  const activeId = await activeTabId();
  const controlCommands = ['togglePlayback', 'stopPlayback', 'retryPlayback', 'resumeFollow', 'changeSpeed', 'changeVoice'];
  const tabId = controlCommands.includes(message.command || '') ? (playbackTabId ?? activeId) : activeId;
  if (tabId === null) throw new Error('No webpage is available.');
  if (message.command === 'readPage') await claimPlayback(tabId);
  await browser.tabs.sendMessage(tabId, { action: message.command, value: message.value, voiceName: message.voiceName });
  return { ok: true };
}

browser.runtime.onMessage.addListener(((rawMessage: unknown, sender: browser.Runtime.MessageSender) => {
  const message = rawMessage as { action?: string; state?: string; status?: string; followEnabled?: boolean; command?: string; value?: number; voiceName?: string };
  if (message.action === 'panelCommand') return handlePanelCommand(message);
  if (message.action === 'playbackState' && sender.tab?.id !== undefined) {
    if (['generating', 'continuing', 'playing', 'paused', 'error'].includes(message.state || '')) claimPlayback(sender.tab.id).catch(() => undefined);
    playbackState = { state: message.state || 'idle', status: message.status || '', followEnabled: message.followEnabled !== false };
    browser.runtime.sendMessage({ action: 'stateChanged', ...playbackState }).catch(() => undefined);
  } else if (message.action === 'playbackStopped' && sender.tab?.id === playbackTabId) {
    playbackTabId = null;
    playbackState = { state: 'stopped', status: '', followEnabled: true };
    browser.runtime.sendMessage({ action: 'stateChanged', ...playbackState }).catch(() => undefined);
  }
}) as browser.Runtime.OnMessageListener);

browser.tabs.onRemoved.addListener((tabId) => { if (tabId === playbackTabId) playbackTabId = null; });

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
    sendReadingCommand(tab.id, {
      action: 'readText',
      text: info.selectionText,
    });
  } else if (info.menuItemId === 'readPage' && tab?.id !== undefined) {
    // Handle reading the entire page
    sendReadingCommand(tab.id, {
      action: 'readPage',
    });
  } else if (info.menuItemId === 'readFromHere' && info.selectionText && tab?.id !== undefined) {
    // Handle reading from here
    sendReadingCommand(tab.id, {
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
          sendReadingCommand(tab.id, {
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
      sendReadingCommand(tab.id, {
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
          sendReadingCommand(tab.id, {
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
      browser.tabs.sendMessage(playbackTabId ?? tab.id, {
        action: 'togglePlayback',
      });
      break;

    default:
      console.warn('Unknown command:', command);
  }
});
