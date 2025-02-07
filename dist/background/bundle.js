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
                    console.log("No text selected.");
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
        console.log("Received pause toggle:", message.isPaused);
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
        console.log('tabId :', tabId);
        if (message.action === 'controlPanel:updatePause') {
            chrome.tabs.sendMessage(tabId, {
                action: 'controlPanel:updatePause',
                isPaused: message.isPaused
            });
        }
        else if (message.action === 'controlPanel:remove') {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxDQUFDO0FBRUwsQ0FBQyxFQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lZGdlLXR0cy1jaHJvbWUtZXh0ZW5zaW9uLy4vc3JjL29mZlNjcmVlbi9zZXR1cC50cyIsIndlYnBhY2s6Ly9lZGdlLXR0cy1jaHJvbWUtZXh0ZW5zaW9uL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2VkZ2UtdHRzLWNocm9tZS1leHRlbnNpb24vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2VkZ2UtdHRzLWNocm9tZS1leHRlbnNpb24vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9lZGdlLXR0cy1jaHJvbWUtZXh0ZW5zaW9uL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZWRnZS10dHMtY2hyb21lLWV4dGVuc2lvbi8uL3NyYy9iYWNrZ3JvdW5kL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImxldCBjcmVhdGluZzsgLy8gQSBnbG9iYWwgcHJvbWlzZSB0byBhdm9pZCBjb25jdXJyZW5jeSBpc3N1ZXNcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNldHVwT2Zmc2NyZWVuRG9jdW1lbnQocGF0aDpzdHJpbmcpIHtcbiAgLy8gQ2hlY2sgYWxsIHdpbmRvd3MgY29udHJvbGxlZCBieSB0aGUgc2VydmljZSB3b3JrZXIgdG8gc2VlIGlmIG9uZVxuICAvLyBvZiB0aGVtIGlzIHRoZSBvZmZzY3JlZW4gZG9jdW1lbnQgd2l0aCB0aGUgZ2l2ZW4gcGF0aFxuICBjb25zdCBvZmZzY3JlZW5VcmwgPSBjaHJvbWUucnVudGltZS5nZXRVUkwocGF0aCk7XG4gIGNvbnN0IGV4aXN0aW5nQ29udGV4dHMgPSBhd2FpdCBjaHJvbWUucnVudGltZS5nZXRDb250ZXh0cyh7XG4gICAgY29udGV4dFR5cGVzOiBbY2hyb21lLnJ1bnRpbWUuQ29udGV4dFR5cGUuT0ZGU0NSRUVOX0RPQ1VNRU5UXSxcbiAgICBkb2N1bWVudFVybHM6IFtvZmZzY3JlZW5VcmxdXG4gIH0pO1xuXG4gIGlmIChleGlzdGluZ0NvbnRleHRzLmxlbmd0aCA+IDApIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBjcmVhdGUgb2Zmc2NyZWVuIGRvY3VtZW50XG4gIGlmIChjcmVhdGluZykge1xuICAgIGF3YWl0IGNyZWF0aW5nO1xuICB9IGVsc2Uge1xuICAgIGNyZWF0aW5nID0gY2hyb21lLm9mZnNjcmVlbi5jcmVhdGVEb2N1bWVudCh7XG4gICAgICB1cmw6IHBhdGgsXG4gICAgICByZWFzb25zOiBbY2hyb21lLm9mZnNjcmVlbi5SZWFzb24uQVVESU9fUExBWUJBQ0ssIGNocm9tZS5vZmZzY3JlZW4uUmVhc29uLkxPQ0FMX1NUT1JBR0VdLFxuICAgICAganVzdGlmaWNhdGlvbjogJ3BsYXkgdGV4dCB0byBzcGVlY2ggYXVkaW8gZmlsZScsXG4gICAgfSk7XG4gICAgYXdhaXQgY3JlYXRpbmc7XG4gICAgY3JlYXRpbmcgPSBudWxsO1xuICB9XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBzZXR1cE9mZnNjcmVlbkRvY3VtZW50IH0gZnJvbSBcIi4uL29mZlNjcmVlbi9zZXR1cFwiO1xuLy8gc3JjL2JhY2tncm91bmQvaW5kZXgudHNcblxuY2hyb21lLnJ1bnRpbWUub25JbnN0YWxsZWQuYWRkTGlzdGVuZXIoKCkgPT4ge1xuICAvLyBBZGQgY29udGV4dCBtZW51IGZvciByZWFkaW5nIHNlbGVjdGVkIHRleHRcbiAgY2hyb21lLmNvbnRleHRNZW51cy5jcmVhdGUoe1xuICAgIGlkOiBcInJlYWRBbG91ZFwiLFxuICAgIHRpdGxlOiBcIlJlYWQgQWxvdWQgd2l0aCBFZGdlIFRUU1wiLFxuICAgIGNvbnRleHRzOiBbXCJzZWxlY3Rpb25cIl0sXG4gIH0pO1xuXG4gIC8vIEFkZCBjb250ZXh0IG1lbnUgZm9yIHJlYWRpbmcgdGhlIGVudGlyZSBwYWdlXG4gIGNocm9tZS5jb250ZXh0TWVudXMuY3JlYXRlKHtcbiAgICBpZDogXCJyZWFkUGFnZVwiLFxuICAgIHRpdGxlOiBcIlJlYWQgUGFnZSBBbG91ZCB3aXRoIEVkZ2UgVFRTXCIsXG4gICAgY29udGV4dHM6IFtcInBhZ2VcIl0sXG4gIH0pO1xufSk7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBncmFiQW5kUmVhZFBhZ2UoICkge1xuICBhd2FpdCBzZXR1cE9mZnNjcmVlbkRvY3VtZW50KCdvZmZTY3JlZW4vb2ZmLXNjcmVlbi5odG1sJylcbiAgXG4gIGNocm9tZS50YWJzLnF1ZXJ5KHsgYWN0aXZlOiB0cnVlLCBjdXJyZW50V2luZG93OiB0cnVlIH0sIGFzeW5jICh0YWJzKSA9PiB7XG4gICAgaWYgKCF0YWJzIHx8IHRhYnMubGVuZ3RoID09PSAwIHx8ICF0YWJzWzBdLmlkKSByZXR1cm47XG4gICAgXG4gICAgY29uc3QgdGFiSWQgPSB0YWJzWzBdLmlkO1xuICAgIGNvbnN0IHNldHRpbmdzID0gYXdhaXQgY2hyb21lLnN0b3JhZ2Uuc3luYy5nZXQoe1xuICAgICAgdm9pY2VOYW1lOiBcImVuLVVTLUNocmlzdG9waGVyTmV1cmFsXCIsXG4gICAgICBjdXN0b21Wb2ljZTogXCJcIixcbiAgICAgIHNwZWVkOiAxLjIsXG4gICAgfSk7XG5cbiAgICBjaHJvbWUuc2NyaXB0aW5nLmV4ZWN1dGVTY3JpcHQoe1xuICAgICAgdGFyZ2V0OiB7IHRhYklkOiB0YWJJZCB9LFxuICAgICAgZnVuYzogKCkgPT4gZG9jdW1lbnQuYm9keS5pbm5lclRleHRcbiAgICB9KS50aGVuKChyZXN1bHRzKSA9PiB7XG4gICAgICBpZiAocmVzdWx0cyAmJiByZXN1bHRzLmxlbmd0aCA+IDAgJiYgcmVzdWx0c1swXS5yZXN1bHQpIHtcbiAgICAgICAgY29uc3QgcGFnZUNvbnRlbnQgPSByZXN1bHRzWzBdLnJlc3VsdDtcbiAgICAgICAgY29uc29sZS5sb2coXCJwYWdlIGNvbnRlbnQgOlwiLCBwYWdlQ29udGVudCk7XG4gICAgICAgIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHtcbiAgICAgICAgICB0eXBlOiAncmVhZFRleHQnLFxuICAgICAgICAgIHRhcmdldDogJ29mZnNjcmVlbicsXG4gICAgICAgICAgZGF0YTogcGFnZUNvbnRlbnQsXG4gICAgICAgICAgc2V0dGluZ3NcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufVxuXG5cbmNocm9tZS5jb250ZXh0TWVudXMub25DbGlja2VkLmFkZExpc3RlbmVyKGFzeW5jIChpbmZvLCB0YWIpID0+IHtcblxuICBpZiAoIXRhYi5pZCApIHtcbiAgICBjb25zb2xlLmVycm9yKCdUYWIgTm90IEZvdW5kLicpXG4gICAgcmV0dXJuIFxuICB9XG5cbiAgY29uc3Qgc2V0dGluZ3MgPSBhd2FpdCBjaHJvbWUuc3RvcmFnZS5zeW5jLmdldCh7XG4gICAgdm9pY2VOYW1lOiBcImVuLVVTLUNocmlzdG9waGVyTmV1cmFsXCIsXG4gICAgY3VzdG9tVm9pY2U6IFwiXCIsXG4gICAgc3BlZWQ6IDEuMixcbiAgfSk7XG4gIFxuXG4gIGlmIChcbiAgICBpbmZvLm1lbnVJdGVtSWQgPT09IFwicmVhZEFsb3VkXCIgJiZcbiAgICBpbmZvLnNlbGVjdGlvblRleHRcbiAgKSB7XG4gICAgYXdhaXQgc2V0dXBPZmZzY3JlZW5Eb2N1bWVudCgnb2ZmU2NyZWVuL29mZi1zY3JlZW4uaHRtbCcpXG4gICAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe1xuICAgICAgdHlwZTogJ3JlYWRUZXh0JyxcbiAgICAgIHRhcmdldDogJ29mZnNjcmVlbicsXG4gICAgICBkYXRhOiBpbmZvLnNlbGVjdGlvblRleHQsXG4gICAgICBzZXR0aW5nc1xuICAgIH0pO1xuICB9IGVsc2UgaWYgKGluZm8ubWVudUl0ZW1JZCA9PT0gXCJyZWFkUGFnZVwiICYmIHRhYj8uaWQgIT09IHVuZGVmaW5lZCkge1xuICAgIGdyYWJBbmRSZWFkUGFnZSgpXG4gIH1cbn0pO1xuXG5jaHJvbWUuY29tbWFuZHMub25Db21tYW5kLmFkZExpc3RlbmVyKGFzeW5jIChjb21tYW5kKSA9PiB7XG4gIGlmIChjb21tYW5kID09PSBcInJlYWQtc2VsZWN0ZWQtdGV4dFwiKSB7XG4gICAgYXdhaXQgc2V0dXBPZmZzY3JlZW5Eb2N1bWVudCgnb2ZmU2NyZWVuL29mZi1zY3JlZW4uaHRtbCcpXG5cbiAgICBjb25zdCBzZXR0aW5ncyA9IGF3YWl0IGNocm9tZS5zdG9yYWdlLnN5bmMuZ2V0KHtcbiAgICAgIHZvaWNlTmFtZTogXCJlbi1VUy1DaHJpc3RvcGhlck5ldXJhbFwiLFxuICAgICAgY3VzdG9tVm9pY2U6IFwiXCIsXG4gICAgICBzcGVlZDogMS4yLFxuICAgIH0pO1xuXG4gICAgY2hyb21lLnRhYnMucXVlcnkoeyBhY3RpdmU6IHRydWUsIGN1cnJlbnRXaW5kb3c6IHRydWUgfSwgKHRhYnMpID0+IHtcbiAgICAgIGlmICghdGFicyB8fCB0YWJzLmxlbmd0aCA9PT0gMCB8fCAhdGFic1swXS5pZCkgcmV0dXJuO1xuXG4gICAgICBjb25zdCB0YWJJZCA9IHRhYnNbMF0uaWQ7XG5cbiAgICAgIGNocm9tZS5zY3JpcHRpbmdcbiAgICAgICAgLmV4ZWN1dGVTY3JpcHQoe1xuICAgICAgICAgIHRhcmdldDogeyB0YWJJZDogdGFiSWQgfSxcbiAgICAgICAgICBmdW5jOiAoKSA9PiB3aW5kb3cuZ2V0U2VsZWN0aW9uKCkudG9TdHJpbmcoKSxcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKHJlc3VsdHMpID0+IHtcbiAgICAgICAgICBpZiAocmVzdWx0cyAmJiByZXN1bHRzLmxlbmd0aCA+IDAgJiYgcmVzdWx0c1swXS5yZXN1bHQpIHtcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkVGV4dCA9IHJlc3VsdHNbMF0ucmVzdWx0O1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJTZWxlY3RlZCB0ZXh0OlwiLCBzZWxlY3RlZFRleHQpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBTZW5kIG1lc3NhZ2UgdG8gb2Zmc2NyZWVuIGRvY3VtZW50XG4gICAgICAgICAgICBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSh7XG4gICAgICAgICAgICAgIHR5cGU6ICdyZWFkVGV4dCcsXG4gICAgICAgICAgICAgIHRhcmdldDogJ29mZnNjcmVlbicsXG4gICAgICAgICAgICAgIGRhdGE6IHNlbGVjdGVkVGV4dCxcbiAgICAgICAgICAgICAgc2V0dGluZ3NcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIk5vIHRleHQgc2VsZWN0ZWQuXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4gY29uc29sZS5lcnJvcihcIkVycm9yIGV4ZWN1dGluZyBzY3JpcHQ6XCIsIGVycm9yKSk7XG4gICAgfSk7XG4gIH1cbn0pO1xuXG4vLyBMaXN0ZW5lciBmb3IgbWVzc2FnZXMgdG8gdGhlIG9mZnNjcmVlbiBkb2N1bWVudFxuY2hyb21lLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKGFzeW5jIChtZXNzYWdlLCBzZW5kZXIsIHNlbmRSZXNwb25zZSkgPT4ge1xuXG4gIGlmIChtZXNzYWdlLmFjdGlvbiA9PT0gXCJvZmZzY3JlZW46cmVhZFBhZ2VcIikge1xuICAgIGdyYWJBbmRSZWFkUGFnZSgpO1xuICB9IGVsc2UgaWYgKG1lc3NhZ2UuYWN0aW9uID09PSBcIm9mZnNjcmVlbjp0b2dnbGVQYXVzZVwiKSB7XG4gICAgY29uc29sZS5sb2coXCJSZWNlaXZlZCBwYXVzZSB0b2dnbGU6XCIsIG1lc3NhZ2UuaXNQYXVzZWQpO1xuICAgIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHtcbiAgICAgIHR5cGU6ICd0b2dnbGVQYXVzZScsXG4gICAgICB0YXJnZXQ6ICdvZmZzY3JlZW4nLFxuICAgICAgaXNQYXVzZWQ6IG1lc3NhZ2UuaXNQYXVzZWRcbiAgICB9KTtcbiAgfSBlbHNlIGlmIChtZXNzYWdlLmFjdGlvbiA9PT0gXCJvZmZzY3JlZW46c3RvcFBsYXliYWNrXCIpIHtcbiAgICBjb25zb2xlLmxvZyhcIlN0b3BwaW5nIHBsYXliYWNrIGFuZCByZW1vdmluZyBjb250cm9sIHBhbmVsLlwiKTtcbiAgICBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSh7XG4gICAgICB0eXBlOiAnc3RvcFBsYXliYWNrJyxcbiAgICAgIHRhcmdldDogJ29mZnNjcmVlbicsXG4gICAgfSk7XG4gIH1cbn0pO1xuXG4vLyBMaXN0ZW5lciBmb3IgbWVzc2FnZXMgdG8gdGhlIGNvbnRlbnQgc2NyaXB0XG5jaHJvbWUucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoYXN5bmMgKG1lc3NhZ2UsIHNlbmRlciwgc2VuZFJlc3BvbnNlKSA9PiB7XG5cbiAgY2hyb21lLnRhYnMucXVlcnkoeyBhY3RpdmU6IHRydWUsIGN1cnJlbnRXaW5kb3c6IHRydWUgfSwgKHRhYnMpID0+IHtcbiAgICBpZiAoIXRhYnMgfHwgdGFicy5sZW5ndGggPT09IDAgfHwgIXRhYnNbMF0uaWQpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJObyBhY3RpdmUgdGFiIGZvdW5kLlwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB0YWJJZCA9IHRhYnNbMF0uaWQ7XG4gICAgY29uc29sZS5sb2coJ3RhYklkIDonLCB0YWJJZCk7XG4gICAgaWYgKG1lc3NhZ2UuYWN0aW9uID09PSAnY29udHJvbFBhbmVsOnVwZGF0ZVBhdXNlJykge1xuICAgICAgY2hyb21lLnRhYnMuc2VuZE1lc3NhZ2UodGFiSWQsIHtcbiAgICAgICAgYWN0aW9uOiAnY29udHJvbFBhbmVsOnVwZGF0ZVBhdXNlJyxcbiAgICAgICAgaXNQYXVzZWQ6IG1lc3NhZ2UuaXNQYXVzZWRcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAobWVzc2FnZS5hY3Rpb24gPT09ICdjb250cm9sUGFuZWw6cmVtb3ZlJykge1xuICAgICAgY2hyb21lLnRhYnMuc2VuZE1lc3NhZ2UodGFiSWQsIHtcbiAgICAgICAgYWN0aW9uOiAnY29udHJvbFBhbmVsOnJlbW92ZScsXG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKG1lc3NhZ2UuYWN0aW9uID09PSAnY29udHJvbFBhbmVsOmNyZWF0ZScpIHtcbiAgICAgIGNocm9tZS50YWJzLnNlbmRNZXNzYWdlKHRhYklkLCB7XG4gICAgICAgIGFjdGlvbjogJ2NvbnRyb2xQYW5lbDpjcmVhdGUnLFxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChtZXNzYWdlLmFjdGlvbiA9PT0gJ2NvbnRyb2xQYW5lbDp1cGRhdGVMb2FkaW5nJykge1xuICAgICAgY2hyb21lLnRhYnMuc2VuZE1lc3NhZ2UodGFiSWQsIHtcbiAgICAgICAgYWN0aW9uOiAnY29udHJvbFBhbmVsOnVwZGF0ZUxvYWRpbmcnLFxuICAgICAgICBpc0xvYWRpbmc6IG1lc3NhZ2UuaXNMb2FkaW5nXG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuIFxufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=