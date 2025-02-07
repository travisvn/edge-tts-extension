/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/offScreen/setup.ts":
/*!********************************!*\
  !*** ./src/offScreen/setup.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setupOffscreenDocument: () => (/* binding */ setupOffscreenDocument)
/* harmony export */ });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let creating; // A global promise to avoid concurrency issues
function setupOffscreenDocument(path) {
    return __awaiter(this, void 0, void 0, function* () {
        // Check all windows controlled by the service worker to see if one
        // of them is the offscreen document with the given path
        const offscreenUrl = chrome.runtime.getURL(path);
        const existingContexts = yield chrome.runtime.getContexts({
            contextTypes: [chrome.runtime.ContextType.OFFSCREEN_DOCUMENT],
            documentUrls: [offscreenUrl]
        });
        if (existingContexts.length > 0) {
            return;
        }
        // create offscreen document
        if (creating) {
            yield creating;
        }
        else {
            creating = chrome.offscreen.createDocument({
                url: path,
                reasons: [chrome.offscreen.Reason.AUDIO_PLAYBACK, chrome.offscreen.Reason.LOCAL_STORAGE],
                justification: 'play text to speech audio file',
            });
            yield creating;
            creating = null;
        }
    });
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!*********************************!*\
  !*** ./src/background/index.ts ***!
  \*********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   grabAndReadPage: () => (/* binding */ grabAndReadPage)
/* harmony export */ });
/* harmony import */ var _offScreen_setup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../offScreen/setup */ "./src/offScreen/setup.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

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
function grabAndReadPage() {
    return __awaiter(this, void 0, void 0, function* () {
        yield (0,_offScreen_setup__WEBPACK_IMPORTED_MODULE_0__.setupOffscreenDocument)('offScreen/off-screen.html');
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => __awaiter(this, void 0, void 0, function* () {
            if (!tabs || tabs.length === 0 || !tabs[0].id)
                return;
            const tabId = tabs[0].id;
            const settings = yield chrome.storage.sync.get({
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
        }));
    });
}
chrome.contextMenus.onClicked.addListener((info, tab) => __awaiter(void 0, void 0, void 0, function* () {
    if (!tab.id) {
        console.error('Tab Not Found.');
        return;
    }
    const settings = yield chrome.storage.sync.get({
        voiceName: "en-US-ChristopherNeural",
        customVoice: "",
        speed: 1.2,
    });
    if (info.menuItemId === "readAloud" &&
        info.selectionText) {
        yield (0,_offScreen_setup__WEBPACK_IMPORTED_MODULE_0__.setupOffscreenDocument)('offScreen/off-screen.html');
        chrome.runtime.sendMessage({
            type: 'readText',
            target: 'offscreen',
            data: info.selectionText,
            settings
        });
    }
    else if (info.menuItemId === "readPage" && (tab === null || tab === void 0 ? void 0 : tab.id) !== undefined) {
        grabAndReadPage();
    }
}));
chrome.commands.onCommand.addListener((command) => __awaiter(void 0, void 0, void 0, function* () {
    if (command === "read-selected-text") {
        yield (0,_offScreen_setup__WEBPACK_IMPORTED_MODULE_0__.setupOffscreenDocument)('offScreen/off-screen.html');
        const settings = yield chrome.storage.sync.get({
            voiceName: "en-US-ChristopherNeural",
            customVoice: "",
            speed: 1.2,
        });
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            if (!tabs || tabs.length === 0 || !tabs[0].id)
                return;
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
                }
                else {
                    console.warn("No text selected.");
                }
            })
                .catch((error) => console.error("Error executing script:", error));
        });
    }
}));
// Listener for messages to the offscreen document
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => __awaiter(void 0, void 0, void 0, function* () {
    if (message.action === "offscreen:readPage") {
        grabAndReadPage();
    }
    else if (message.action === "offscreen:togglePause") {
        chrome.runtime.sendMessage({
            type: 'togglePause',
            target: 'offscreen',
            isPaused: message.isPaused
        });
    }
    else if (message.action === "offscreen:stopPlayback") {
        console.log("Stopping playback and removing control panel.");
        chrome.runtime.sendMessage({
            type: 'stopPlayback',
            target: 'offscreen',
        });
    }
}));
// Listener for messages to the content script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => __awaiter(void 0, void 0, void 0, function* () {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (!tabs || tabs.length === 0 || !tabs[0].id) {
            console.error("No active tab found.");
            return;
        }
        const tabId = tabs[0].id;
        if (message.action === 'controlPanel:remove') {
            chrome.tabs.sendMessage(tabId, {
                action: 'controlPanel:remove',
            });
        }
        else if (message.action === 'controlPanel:create') {
            chrome.tabs.sendMessage(tabId, {
                action: 'controlPanel:create',
            });
        }
        else if (message.action === 'controlPanel:updateLoading') {
            chrome.tabs.sendMessage(tabId, {
                action: 'controlPanel:updateLoading',
                isLoading: message.isLoading
            });
        }
    });
}));

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxFQUFFLEVBQUUsQ0FBQztZQUM5QyxPQUFPLENBQUMsS0FBSyxDQUFDLHNCQUFzQixDQUFDLENBQUM7WUFDdEMsT0FBTztRQUNULENBQUM7UUFFRCxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBRTFCLElBQUksT0FBTyxDQUFDLE1BQU0sS0FBSyxxQkFBcUIsRUFBRSxDQUFDO1lBQzVDLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRTtnQkFDN0IsTUFBTSxFQUFFLHFCQUFxQjthQUM5QixDQUFDLENBQUM7UUFDTCxDQUFDO2FBQU0sSUFBSSxPQUFPLENBQUMsTUFBTSxLQUFLLHFCQUFxQixFQUFFLENBQUM7WUFDcEQsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFO2dCQUM3QixNQUFNLEVBQUUscUJBQXFCO2FBQzlCLENBQUMsQ0FBQztRQUNMLENBQUM7YUFBTSxJQUFJLE9BQU8sQ0FBQyxNQUFNLEtBQUssNEJBQTRCLEVBQUUsQ0FBQztZQUMzRCxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUU7Z0JBQzdCLE1BQU0sRUFBRSw0QkFBNEI7Z0JBQ3BDLFNBQVMsRUFBRSxPQUFPLENBQUMsU0FBUzthQUM3QixDQUFDLENBQUM7UUFDTCxDQUFDO0lBQ0gsQ0FBQyxDQUFDLENBQUM7QUFFTCxDQUFDLEVBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2VkZ2UtdHRzLWNocm9tZS1leHRlbnNpb24vLi9zcmMvb2ZmU2NyZWVuL3NldHVwLnRzIiwid2VicGFjazovL2VkZ2UtdHRzLWNocm9tZS1leHRlbnNpb24vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZWRnZS10dHMtY2hyb21lLWV4dGVuc2lvbi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZWRnZS10dHMtY2hyb21lLWV4dGVuc2lvbi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2VkZ2UtdHRzLWNocm9tZS1leHRlbnNpb24vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9lZGdlLXR0cy1jaHJvbWUtZXh0ZW5zaW9uLy4vc3JjL2JhY2tncm91bmQvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsibGV0IGNyZWF0aW5nOyAvLyBBIGdsb2JhbCBwcm9taXNlIHRvIGF2b2lkIGNvbmN1cnJlbmN5IGlzc3Vlc1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2V0dXBPZmZzY3JlZW5Eb2N1bWVudChwYXRoOnN0cmluZykge1xuICAvLyBDaGVjayBhbGwgd2luZG93cyBjb250cm9sbGVkIGJ5IHRoZSBzZXJ2aWNlIHdvcmtlciB0byBzZWUgaWYgb25lXG4gIC8vIG9mIHRoZW0gaXMgdGhlIG9mZnNjcmVlbiBkb2N1bWVudCB3aXRoIHRoZSBnaXZlbiBwYXRoXG4gIGNvbnN0IG9mZnNjcmVlblVybCA9IGNocm9tZS5ydW50aW1lLmdldFVSTChwYXRoKTtcbiAgY29uc3QgZXhpc3RpbmdDb250ZXh0cyA9IGF3YWl0IGNocm9tZS5ydW50aW1lLmdldENvbnRleHRzKHtcbiAgICBjb250ZXh0VHlwZXM6IFtjaHJvbWUucnVudGltZS5Db250ZXh0VHlwZS5PRkZTQ1JFRU5fRE9DVU1FTlRdLFxuICAgIGRvY3VtZW50VXJsczogW29mZnNjcmVlblVybF1cbiAgfSk7XG5cbiAgaWYgKGV4aXN0aW5nQ29udGV4dHMubGVuZ3RoID4gMCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIGNyZWF0ZSBvZmZzY3JlZW4gZG9jdW1lbnRcbiAgaWYgKGNyZWF0aW5nKSB7XG4gICAgYXdhaXQgY3JlYXRpbmc7XG4gIH0gZWxzZSB7XG4gICAgY3JlYXRpbmcgPSBjaHJvbWUub2Zmc2NyZWVuLmNyZWF0ZURvY3VtZW50KHtcbiAgICAgIHVybDogcGF0aCxcbiAgICAgIHJlYXNvbnM6IFtjaHJvbWUub2Zmc2NyZWVuLlJlYXNvbi5BVURJT19QTEFZQkFDSywgY2hyb21lLm9mZnNjcmVlbi5SZWFzb24uTE9DQUxfU1RPUkFHRV0sXG4gICAgICBqdXN0aWZpY2F0aW9uOiAncGxheSB0ZXh0IHRvIHNwZWVjaCBhdWRpbyBmaWxlJyxcbiAgICB9KTtcbiAgICBhd2FpdCBjcmVhdGluZztcbiAgICBjcmVhdGluZyA9IG51bGw7XG4gIH1cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IHNldHVwT2Zmc2NyZWVuRG9jdW1lbnQgfSBmcm9tIFwiLi4vb2ZmU2NyZWVuL3NldHVwXCI7XG4vLyBzcmMvYmFja2dyb3VuZC9pbmRleC50c1xuXG5jaHJvbWUucnVudGltZS5vbkluc3RhbGxlZC5hZGRMaXN0ZW5lcigoKSA9PiB7XG4gIC8vIEFkZCBjb250ZXh0IG1lbnUgZm9yIHJlYWRpbmcgc2VsZWN0ZWQgdGV4dFxuICBjaHJvbWUuY29udGV4dE1lbnVzLmNyZWF0ZSh7XG4gICAgaWQ6IFwicmVhZEFsb3VkXCIsXG4gICAgdGl0bGU6IFwiUmVhZCBBbG91ZCB3aXRoIEVkZ2UgVFRTXCIsXG4gICAgY29udGV4dHM6IFtcInNlbGVjdGlvblwiXSxcbiAgfSk7XG5cbiAgLy8gQWRkIGNvbnRleHQgbWVudSBmb3IgcmVhZGluZyB0aGUgZW50aXJlIHBhZ2VcbiAgY2hyb21lLmNvbnRleHRNZW51cy5jcmVhdGUoe1xuICAgIGlkOiBcInJlYWRQYWdlXCIsXG4gICAgdGl0bGU6IFwiUmVhZCBQYWdlIEFsb3VkIHdpdGggRWRnZSBUVFNcIixcbiAgICBjb250ZXh0czogW1wicGFnZVwiXSxcbiAgfSk7XG59KTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdyYWJBbmRSZWFkUGFnZSggKSB7XG4gIGF3YWl0IHNldHVwT2Zmc2NyZWVuRG9jdW1lbnQoJ29mZlNjcmVlbi9vZmYtc2NyZWVuLmh0bWwnKVxuICBcbiAgY2hyb21lLnRhYnMucXVlcnkoeyBhY3RpdmU6IHRydWUsIGN1cnJlbnRXaW5kb3c6IHRydWUgfSwgYXN5bmMgKHRhYnMpID0+IHtcbiAgICBpZiAoIXRhYnMgfHwgdGFicy5sZW5ndGggPT09IDAgfHwgIXRhYnNbMF0uaWQpIHJldHVybjtcbiAgICBcbiAgICBjb25zdCB0YWJJZCA9IHRhYnNbMF0uaWQ7XG4gICAgY29uc3Qgc2V0dGluZ3MgPSBhd2FpdCBjaHJvbWUuc3RvcmFnZS5zeW5jLmdldCh7XG4gICAgICB2b2ljZU5hbWU6IFwiZW4tVVMtQ2hyaXN0b3BoZXJOZXVyYWxcIixcbiAgICAgIGN1c3RvbVZvaWNlOiBcIlwiLFxuICAgICAgc3BlZWQ6IDEuMixcbiAgICB9KTtcblxuICAgIGNocm9tZS5zY3JpcHRpbmcuZXhlY3V0ZVNjcmlwdCh7XG4gICAgICB0YXJnZXQ6IHsgdGFiSWQ6IHRhYklkIH0sXG4gICAgICBmdW5jOiAoKSA9PiBkb2N1bWVudC5ib2R5LmlubmVyVGV4dFxuICAgIH0pLnRoZW4oKHJlc3VsdHMpID0+IHtcbiAgICAgIGlmIChyZXN1bHRzICYmIHJlc3VsdHMubGVuZ3RoID4gMCAmJiByZXN1bHRzWzBdLnJlc3VsdCkge1xuICAgICAgICBjb25zdCBwYWdlQ29udGVudCA9IHJlc3VsdHNbMF0ucmVzdWx0O1xuICAgICAgICBjb25zb2xlLmxvZyhcInBhZ2UgY29udGVudCA6XCIsIHBhZ2VDb250ZW50KTtcbiAgICAgICAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe1xuICAgICAgICAgIHR5cGU6ICdyZWFkVGV4dCcsXG4gICAgICAgICAgdGFyZ2V0OiAnb2Zmc2NyZWVuJyxcbiAgICAgICAgICBkYXRhOiBwYWdlQ29udGVudCxcbiAgICAgICAgICBzZXR0aW5nc1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59XG5cblxuY2hyb21lLmNvbnRleHRNZW51cy5vbkNsaWNrZWQuYWRkTGlzdGVuZXIoYXN5bmMgKGluZm8sIHRhYikgPT4ge1xuXG4gIGlmICghdGFiLmlkICkge1xuICAgIGNvbnNvbGUuZXJyb3IoJ1RhYiBOb3QgRm91bmQuJylcbiAgICByZXR1cm4gXG4gIH1cblxuICBjb25zdCBzZXR0aW5ncyA9IGF3YWl0IGNocm9tZS5zdG9yYWdlLnN5bmMuZ2V0KHtcbiAgICB2b2ljZU5hbWU6IFwiZW4tVVMtQ2hyaXN0b3BoZXJOZXVyYWxcIixcbiAgICBjdXN0b21Wb2ljZTogXCJcIixcbiAgICBzcGVlZDogMS4yLFxuICB9KTtcbiAgXG5cbiAgaWYgKFxuICAgIGluZm8ubWVudUl0ZW1JZCA9PT0gXCJyZWFkQWxvdWRcIiAmJlxuICAgIGluZm8uc2VsZWN0aW9uVGV4dFxuICApIHtcbiAgICBhd2FpdCBzZXR1cE9mZnNjcmVlbkRvY3VtZW50KCdvZmZTY3JlZW4vb2ZmLXNjcmVlbi5odG1sJylcbiAgICBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSh7XG4gICAgICB0eXBlOiAncmVhZFRleHQnLFxuICAgICAgdGFyZ2V0OiAnb2Zmc2NyZWVuJyxcbiAgICAgIGRhdGE6IGluZm8uc2VsZWN0aW9uVGV4dCxcbiAgICAgIHNldHRpbmdzXG4gICAgfSk7XG4gIH0gZWxzZSBpZiAoaW5mby5tZW51SXRlbUlkID09PSBcInJlYWRQYWdlXCIgJiYgdGFiPy5pZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgZ3JhYkFuZFJlYWRQYWdlKClcbiAgfVxufSk7XG5cbmNocm9tZS5jb21tYW5kcy5vbkNvbW1hbmQuYWRkTGlzdGVuZXIoYXN5bmMgKGNvbW1hbmQpID0+IHtcbiAgaWYgKGNvbW1hbmQgPT09IFwicmVhZC1zZWxlY3RlZC10ZXh0XCIpIHtcbiAgICBhd2FpdCBzZXR1cE9mZnNjcmVlbkRvY3VtZW50KCdvZmZTY3JlZW4vb2ZmLXNjcmVlbi5odG1sJylcblxuICAgIGNvbnN0IHNldHRpbmdzID0gYXdhaXQgY2hyb21lLnN0b3JhZ2Uuc3luYy5nZXQoe1xuICAgICAgdm9pY2VOYW1lOiBcImVuLVVTLUNocmlzdG9waGVyTmV1cmFsXCIsXG4gICAgICBjdXN0b21Wb2ljZTogXCJcIixcbiAgICAgIHNwZWVkOiAxLjIsXG4gICAgfSk7XG5cbiAgICBjaHJvbWUudGFicy5xdWVyeSh7IGFjdGl2ZTogdHJ1ZSwgY3VycmVudFdpbmRvdzogdHJ1ZSB9LCAodGFicykgPT4ge1xuICAgICAgaWYgKCF0YWJzIHx8IHRhYnMubGVuZ3RoID09PSAwIHx8ICF0YWJzWzBdLmlkKSByZXR1cm47XG5cbiAgICAgIGNvbnN0IHRhYklkID0gdGFic1swXS5pZDtcblxuICAgICAgY2hyb21lLnNjcmlwdGluZ1xuICAgICAgICAuZXhlY3V0ZVNjcmlwdCh7XG4gICAgICAgICAgdGFyZ2V0OiB7IHRhYklkOiB0YWJJZCB9LFxuICAgICAgICAgIGZ1bmM6ICgpID0+IHdpbmRvdy5nZXRTZWxlY3Rpb24oKS50b1N0cmluZygpLFxuICAgICAgICB9KVxuICAgICAgICAudGhlbigocmVzdWx0cykgPT4ge1xuICAgICAgICAgIGlmIChyZXN1bHRzICYmIHJlc3VsdHMubGVuZ3RoID4gMCAmJiByZXN1bHRzWzBdLnJlc3VsdCkge1xuICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRUZXh0ID0gcmVzdWx0c1swXS5yZXN1bHQ7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlNlbGVjdGVkIHRleHQ6XCIsIHNlbGVjdGVkVGV4dCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIFNlbmQgbWVzc2FnZSB0byBvZmZzY3JlZW4gZG9jdW1lbnRcbiAgICAgICAgICAgIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHtcbiAgICAgICAgICAgICAgdHlwZTogJ3JlYWRUZXh0JyxcbiAgICAgICAgICAgICAgdGFyZ2V0OiAnb2Zmc2NyZWVuJyxcbiAgICAgICAgICAgICAgZGF0YTogc2VsZWN0ZWRUZXh0LFxuICAgICAgICAgICAgICBzZXR0aW5nc1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcIk5vIHRleHQgc2VsZWN0ZWQuXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4gY29uc29sZS5lcnJvcihcIkVycm9yIGV4ZWN1dGluZyBzY3JpcHQ6XCIsIGVycm9yKSk7XG4gICAgfSk7XG4gIH1cbn0pO1xuXG4vLyBMaXN0ZW5lciBmb3IgbWVzc2FnZXMgdG8gdGhlIG9mZnNjcmVlbiBkb2N1bWVudFxuY2hyb21lLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKGFzeW5jIChtZXNzYWdlLCBzZW5kZXIsIHNlbmRSZXNwb25zZSkgPT4ge1xuXG4gIGlmIChtZXNzYWdlLmFjdGlvbiA9PT0gXCJvZmZzY3JlZW46cmVhZFBhZ2VcIikge1xuICAgIGdyYWJBbmRSZWFkUGFnZSgpO1xuICB9IGVsc2UgaWYgKG1lc3NhZ2UuYWN0aW9uID09PSBcIm9mZnNjcmVlbjp0b2dnbGVQYXVzZVwiKSB7XG4gICAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe1xuICAgICAgdHlwZTogJ3RvZ2dsZVBhdXNlJyxcbiAgICAgIHRhcmdldDogJ29mZnNjcmVlbicsXG4gICAgICBpc1BhdXNlZDogbWVzc2FnZS5pc1BhdXNlZFxuICAgIH0pO1xuICB9IGVsc2UgaWYgKG1lc3NhZ2UuYWN0aW9uID09PSBcIm9mZnNjcmVlbjpzdG9wUGxheWJhY2tcIikge1xuICAgIGNvbnNvbGUubG9nKFwiU3RvcHBpbmcgcGxheWJhY2sgYW5kIHJlbW92aW5nIGNvbnRyb2wgcGFuZWwuXCIpO1xuICAgIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHtcbiAgICAgIHR5cGU6ICdzdG9wUGxheWJhY2snLFxuICAgICAgdGFyZ2V0OiAnb2Zmc2NyZWVuJyxcbiAgICB9KTtcbiAgfVxufSk7XG5cbi8vIExpc3RlbmVyIGZvciBtZXNzYWdlcyB0byB0aGUgY29udGVudCBzY3JpcHRcbmNocm9tZS5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcihhc3luYyAobWVzc2FnZSwgc2VuZGVyLCBzZW5kUmVzcG9uc2UpID0+IHtcblxuICBjaHJvbWUudGFicy5xdWVyeSh7IGFjdGl2ZTogdHJ1ZSwgY3VycmVudFdpbmRvdzogdHJ1ZSB9LCAodGFicykgPT4ge1xuICAgIGlmICghdGFicyB8fCB0YWJzLmxlbmd0aCA9PT0gMCB8fCAhdGFic1swXS5pZCkge1xuICAgICAgY29uc29sZS5lcnJvcihcIk5vIGFjdGl2ZSB0YWIgZm91bmQuXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHRhYklkID0gdGFic1swXS5pZDtcblxuICAgaWYgKG1lc3NhZ2UuYWN0aW9uID09PSAnY29udHJvbFBhbmVsOnJlbW92ZScpIHtcbiAgICAgIGNocm9tZS50YWJzLnNlbmRNZXNzYWdlKHRhYklkLCB7XG4gICAgICAgIGFjdGlvbjogJ2NvbnRyb2xQYW5lbDpyZW1vdmUnLFxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChtZXNzYWdlLmFjdGlvbiA9PT0gJ2NvbnRyb2xQYW5lbDpjcmVhdGUnKSB7XG4gICAgICBjaHJvbWUudGFicy5zZW5kTWVzc2FnZSh0YWJJZCwge1xuICAgICAgICBhY3Rpb246ICdjb250cm9sUGFuZWw6Y3JlYXRlJyxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAobWVzc2FnZS5hY3Rpb24gPT09ICdjb250cm9sUGFuZWw6dXBkYXRlTG9hZGluZycpIHtcbiAgICAgIGNocm9tZS50YWJzLnNlbmRNZXNzYWdlKHRhYklkLCB7XG4gICAgICAgIGFjdGlvbjogJ2NvbnRyb2xQYW5lbDp1cGRhdGVMb2FkaW5nJyxcbiAgICAgICAgaXNMb2FkaW5nOiBtZXNzYWdlLmlzTG9hZGluZ1xuICAgICAgfSk7XG4gICAgfVxuICB9KTtcbiBcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9