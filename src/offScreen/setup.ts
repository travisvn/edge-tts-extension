let creating: Promise<void> | null = null;
let isDocumentReady = false;

export async function setupOffscreenDocument(path: string) {
  const offscreenUrl = chrome.runtime.getURL(path);

  // Check if document already exists
  const existingContexts = await chrome.runtime.getContexts({
    contextTypes: [chrome.runtime.ContextType.OFFSCREEN_DOCUMENT],
    documentUrls: [offscreenUrl]
  });

  if (existingContexts.length > 0) {
    // Document exists, make sure it's ready
    if (isDocumentReady) {
      return; // Document exists and is ready
    } else {
      // Wait for a moment to ensure document is fully initialized
      await new Promise(resolve => setTimeout(resolve, 100));
      isDocumentReady = true;
      return;
    }
  }

  // Document doesn't exist, create it
  if (creating) {
    await creating; // Wait for any existing creation process
  } else {
    console.log("[Setup] Creating offscreen document:", path);
    creating = chrome.offscreen.createDocument({
      url: path,
      reasons: [chrome.offscreen.Reason.AUDIO_PLAYBACK, chrome.offscreen.Reason.LOCAL_STORAGE],
      justification: 'play text to speech audio file',
    });

    try {
      await creating;
      // Wait a moment after creation to ensure the document is fully loaded
      await new Promise(resolve => setTimeout(resolve, 300));
      isDocumentReady = true;
    } catch (error) {
      console.error("[Setup] Error creating offscreen document:", error);
    } finally {
      creating = null;
    }
  }
}
