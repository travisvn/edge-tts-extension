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
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => __awaiter(void 0, void 0, void 0, function* () {
    // forward messages to offscreen document
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
    // forward messages to content script
    if (message.action === 'controlPanel:updatePause') {
        chrome.runtime.sendMessage({
            action: 'controlPanel:updatePause',
            isPaused: message.isPaused
        });
    }
    else if (message.action === 'controlPanel:remove') {
        chrome.runtime.sendMessage({
            action: 'controlPanel:remove',
        });
    }
    else if (message.action === 'controlPanel:create') {
        chrome.runtime.sendMessage({
            action: 'controlPanel:create',
        });
    }
    else if (message.action === 'controlPanel:updateLoading') {
        chrome.runtime.sendMessage({
            action: 'controlPanel:updateLoading',
            isLoading: message.isLoading
        });
    }
}));

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFXLENBQUM7WUFDekIsTUFBTSxFQUFFLHFCQUFxQjtTQUM5QixDQUFDLENBQUM7SUFDTCxDQUFDO1NBQUssSUFBSSxPQUFPLENBQUMsTUFBTSxLQUFJLHFCQUFxQixFQUFFLENBQUM7UUFDbEQsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUM7WUFDekIsTUFBTSxFQUFFLHFCQUFxQjtTQUM5QixDQUFDLENBQUM7SUFDTCxDQUFDO1NBQUssSUFBSSxPQUFPLENBQUMsTUFBTSxLQUFJLDRCQUE0QixFQUFFLENBQUM7UUFDekQsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUM7WUFDekIsTUFBTSxFQUFFLDRCQUE0QjtZQUNwQyxTQUFTLEVBQUUsT0FBTyxDQUFDLFNBQVM7U0FDN0IsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztBQUNILENBQUMsRUFBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWRnZS10dHMtY2hyb21lLWV4dGVuc2lvbi8uL3NyYy9vZmZTY3JlZW4vc2V0dXAudHMiLCJ3ZWJwYWNrOi8vZWRnZS10dHMtY2hyb21lLWV4dGVuc2lvbi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9lZGdlLXR0cy1jaHJvbWUtZXh0ZW5zaW9uL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9lZGdlLXR0cy1jaHJvbWUtZXh0ZW5zaW9uL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZWRnZS10dHMtY2hyb21lLWV4dGVuc2lvbi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2VkZ2UtdHRzLWNocm9tZS1leHRlbnNpb24vLi9zcmMvYmFja2dyb3VuZC9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgY3JlYXRpbmc7IC8vIEEgZ2xvYmFsIHByb21pc2UgdG8gYXZvaWQgY29uY3VycmVuY3kgaXNzdWVzXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzZXR1cE9mZnNjcmVlbkRvY3VtZW50KHBhdGg6c3RyaW5nKSB7XG4gIC8vIENoZWNrIGFsbCB3aW5kb3dzIGNvbnRyb2xsZWQgYnkgdGhlIHNlcnZpY2Ugd29ya2VyIHRvIHNlZSBpZiBvbmVcbiAgLy8gb2YgdGhlbSBpcyB0aGUgb2Zmc2NyZWVuIGRvY3VtZW50IHdpdGggdGhlIGdpdmVuIHBhdGhcbiAgY29uc3Qgb2Zmc2NyZWVuVXJsID0gY2hyb21lLnJ1bnRpbWUuZ2V0VVJMKHBhdGgpO1xuICBjb25zdCBleGlzdGluZ0NvbnRleHRzID0gYXdhaXQgY2hyb21lLnJ1bnRpbWUuZ2V0Q29udGV4dHMoe1xuICAgIGNvbnRleHRUeXBlczogW2Nocm9tZS5ydW50aW1lLkNvbnRleHRUeXBlLk9GRlNDUkVFTl9ET0NVTUVOVF0sXG4gICAgZG9jdW1lbnRVcmxzOiBbb2Zmc2NyZWVuVXJsXVxuICB9KTtcblxuICBpZiAoZXhpc3RpbmdDb250ZXh0cy5sZW5ndGggPiAwKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gY3JlYXRlIG9mZnNjcmVlbiBkb2N1bWVudFxuICBpZiAoY3JlYXRpbmcpIHtcbiAgICBhd2FpdCBjcmVhdGluZztcbiAgfSBlbHNlIHtcbiAgICBjcmVhdGluZyA9IGNocm9tZS5vZmZzY3JlZW4uY3JlYXRlRG9jdW1lbnQoe1xuICAgICAgdXJsOiBwYXRoLFxuICAgICAgcmVhc29uczogW2Nocm9tZS5vZmZzY3JlZW4uUmVhc29uLkFVRElPX1BMQVlCQUNLLCBjaHJvbWUub2Zmc2NyZWVuLlJlYXNvbi5MT0NBTF9TVE9SQUdFXSxcbiAgICAgIGp1c3RpZmljYXRpb246ICdwbGF5IHRleHQgdG8gc3BlZWNoIGF1ZGlvIGZpbGUnLFxuICAgIH0pO1xuICAgIGF3YWl0IGNyZWF0aW5nO1xuICAgIGNyZWF0aW5nID0gbnVsbDtcbiAgfVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgc2V0dXBPZmZzY3JlZW5Eb2N1bWVudCB9IGZyb20gXCIuLi9vZmZTY3JlZW4vc2V0dXBcIjtcbi8vIHNyYy9iYWNrZ3JvdW5kL2luZGV4LnRzXG5cbmNocm9tZS5ydW50aW1lLm9uSW5zdGFsbGVkLmFkZExpc3RlbmVyKCgpID0+IHtcbiAgLy8gQWRkIGNvbnRleHQgbWVudSBmb3IgcmVhZGluZyBzZWxlY3RlZCB0ZXh0XG4gIGNocm9tZS5jb250ZXh0TWVudXMuY3JlYXRlKHtcbiAgICBpZDogXCJyZWFkQWxvdWRcIixcbiAgICB0aXRsZTogXCJSZWFkIEFsb3VkIHdpdGggRWRnZSBUVFNcIixcbiAgICBjb250ZXh0czogW1wic2VsZWN0aW9uXCJdLFxuICB9KTtcblxuICAvLyBBZGQgY29udGV4dCBtZW51IGZvciByZWFkaW5nIHRoZSBlbnRpcmUgcGFnZVxuICBjaHJvbWUuY29udGV4dE1lbnVzLmNyZWF0ZSh7XG4gICAgaWQ6IFwicmVhZFBhZ2VcIixcbiAgICB0aXRsZTogXCJSZWFkIFBhZ2UgQWxvdWQgd2l0aCBFZGdlIFRUU1wiLFxuICAgIGNvbnRleHRzOiBbXCJwYWdlXCJdLFxuICB9KTtcbn0pO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ3JhYkFuZFJlYWRQYWdlKCApIHtcbiAgYXdhaXQgc2V0dXBPZmZzY3JlZW5Eb2N1bWVudCgnb2ZmU2NyZWVuL29mZi1zY3JlZW4uaHRtbCcpXG4gIFxuICBjaHJvbWUudGFicy5xdWVyeSh7IGFjdGl2ZTogdHJ1ZSwgY3VycmVudFdpbmRvdzogdHJ1ZSB9LCBhc3luYyAodGFicykgPT4ge1xuICAgIGlmICghdGFicyB8fCB0YWJzLmxlbmd0aCA9PT0gMCB8fCAhdGFic1swXS5pZCkgcmV0dXJuO1xuICAgIFxuICAgIGNvbnN0IHRhYklkID0gdGFic1swXS5pZDtcbiAgICBjb25zdCBzZXR0aW5ncyA9IGF3YWl0IGNocm9tZS5zdG9yYWdlLnN5bmMuZ2V0KHtcbiAgICAgIHZvaWNlTmFtZTogXCJlbi1VUy1DaHJpc3RvcGhlck5ldXJhbFwiLFxuICAgICAgY3VzdG9tVm9pY2U6IFwiXCIsXG4gICAgICBzcGVlZDogMS4yLFxuICAgIH0pO1xuXG4gICAgY2hyb21lLnNjcmlwdGluZy5leGVjdXRlU2NyaXB0KHtcbiAgICAgIHRhcmdldDogeyB0YWJJZDogdGFiSWQgfSxcbiAgICAgIGZ1bmM6ICgpID0+IGRvY3VtZW50LmJvZHkuaW5uZXJUZXh0XG4gICAgfSkudGhlbigocmVzdWx0cykgPT4ge1xuICAgICAgaWYgKHJlc3VsdHMgJiYgcmVzdWx0cy5sZW5ndGggPiAwICYmIHJlc3VsdHNbMF0ucmVzdWx0KSB7XG4gICAgICAgIGNvbnN0IHBhZ2VDb250ZW50ID0gcmVzdWx0c1swXS5yZXN1bHQ7XG4gICAgICAgIGNvbnNvbGUubG9nKFwicGFnZSBjb250ZW50IDpcIiwgcGFnZUNvbnRlbnQpO1xuICAgICAgICBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSh7XG4gICAgICAgICAgdHlwZTogJ3JlYWRUZXh0JyxcbiAgICAgICAgICB0YXJnZXQ6ICdvZmZzY3JlZW4nLFxuICAgICAgICAgIGRhdGE6IHBhZ2VDb250ZW50LFxuICAgICAgICAgIHNldHRpbmdzXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn1cblxuXG5jaHJvbWUuY29udGV4dE1lbnVzLm9uQ2xpY2tlZC5hZGRMaXN0ZW5lcihhc3luYyAoaW5mbywgdGFiKSA9PiB7XG5cbiAgaWYgKCF0YWIuaWQgKSB7XG4gICAgY29uc29sZS5lcnJvcignVGFiIE5vdCBGb3VuZC4nKVxuICAgIHJldHVybiBcbiAgfVxuXG4gIGNvbnN0IHNldHRpbmdzID0gYXdhaXQgY2hyb21lLnN0b3JhZ2Uuc3luYy5nZXQoe1xuICAgIHZvaWNlTmFtZTogXCJlbi1VUy1DaHJpc3RvcGhlck5ldXJhbFwiLFxuICAgIGN1c3RvbVZvaWNlOiBcIlwiLFxuICAgIHNwZWVkOiAxLjIsXG4gIH0pO1xuICBcblxuICBpZiAoXG4gICAgaW5mby5tZW51SXRlbUlkID09PSBcInJlYWRBbG91ZFwiICYmXG4gICAgaW5mby5zZWxlY3Rpb25UZXh0XG4gICkge1xuICAgIGF3YWl0IHNldHVwT2Zmc2NyZWVuRG9jdW1lbnQoJ29mZlNjcmVlbi9vZmYtc2NyZWVuLmh0bWwnKVxuICAgIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHtcbiAgICAgIHR5cGU6ICdyZWFkVGV4dCcsXG4gICAgICB0YXJnZXQ6ICdvZmZzY3JlZW4nLFxuICAgICAgZGF0YTogaW5mby5zZWxlY3Rpb25UZXh0LFxuICAgICAgc2V0dGluZ3NcbiAgICB9KTtcbiAgfSBlbHNlIGlmIChpbmZvLm1lbnVJdGVtSWQgPT09IFwicmVhZFBhZ2VcIiAmJiB0YWI/LmlkICE9PSB1bmRlZmluZWQpIHtcbiAgICBncmFiQW5kUmVhZFBhZ2UoKVxuICB9XG59KTtcblxuY2hyb21lLmNvbW1hbmRzLm9uQ29tbWFuZC5hZGRMaXN0ZW5lcihhc3luYyAoY29tbWFuZCkgPT4ge1xuICBpZiAoY29tbWFuZCA9PT0gXCJyZWFkLXNlbGVjdGVkLXRleHRcIikge1xuICAgIGF3YWl0IHNldHVwT2Zmc2NyZWVuRG9jdW1lbnQoJ29mZlNjcmVlbi9vZmYtc2NyZWVuLmh0bWwnKVxuXG4gICAgY29uc3Qgc2V0dGluZ3MgPSBhd2FpdCBjaHJvbWUuc3RvcmFnZS5zeW5jLmdldCh7XG4gICAgICB2b2ljZU5hbWU6IFwiZW4tVVMtQ2hyaXN0b3BoZXJOZXVyYWxcIixcbiAgICAgIGN1c3RvbVZvaWNlOiBcIlwiLFxuICAgICAgc3BlZWQ6IDEuMixcbiAgICB9KTtcblxuICAgIGNocm9tZS50YWJzLnF1ZXJ5KHsgYWN0aXZlOiB0cnVlLCBjdXJyZW50V2luZG93OiB0cnVlIH0sICh0YWJzKSA9PiB7XG4gICAgICBpZiAoIXRhYnMgfHwgdGFicy5sZW5ndGggPT09IDAgfHwgIXRhYnNbMF0uaWQpIHJldHVybjtcblxuICAgICAgY29uc3QgdGFiSWQgPSB0YWJzWzBdLmlkO1xuXG4gICAgICBjaHJvbWUuc2NyaXB0aW5nXG4gICAgICAgIC5leGVjdXRlU2NyaXB0KHtcbiAgICAgICAgICB0YXJnZXQ6IHsgdGFiSWQ6IHRhYklkIH0sXG4gICAgICAgICAgZnVuYzogKCkgPT4gd2luZG93LmdldFNlbGVjdGlvbigpLnRvU3RyaW5nKCksXG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKChyZXN1bHRzKSA9PiB7XG4gICAgICAgICAgaWYgKHJlc3VsdHMgJiYgcmVzdWx0cy5sZW5ndGggPiAwICYmIHJlc3VsdHNbMF0ucmVzdWx0KSB7XG4gICAgICAgICAgICBjb25zdCBzZWxlY3RlZFRleHQgPSByZXN1bHRzWzBdLnJlc3VsdDtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU2VsZWN0ZWQgdGV4dDpcIiwgc2VsZWN0ZWRUZXh0KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gU2VuZCBtZXNzYWdlIHRvIG9mZnNjcmVlbiBkb2N1bWVudFxuICAgICAgICAgICAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe1xuICAgICAgICAgICAgICB0eXBlOiAncmVhZFRleHQnLFxuICAgICAgICAgICAgICB0YXJnZXQ6ICdvZmZzY3JlZW4nLFxuICAgICAgICAgICAgICBkYXRhOiBzZWxlY3RlZFRleHQsXG4gICAgICAgICAgICAgIHNldHRpbmdzXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJObyB0ZXh0IHNlbGVjdGVkLlwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUuZXJyb3IoXCJFcnJvciBleGVjdXRpbmcgc2NyaXB0OlwiLCBlcnJvcikpO1xuICAgIH0pO1xuICB9XG59KTtcblxuY2hyb21lLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKGFzeW5jIChtZXNzYWdlLCBzZW5kZXIsIHNlbmRSZXNwb25zZSkgPT4ge1xuICBcbiAgLy8gZm9yd2FyZCBtZXNzYWdlcyB0byBvZmZzY3JlZW4gZG9jdW1lbnRcbiAgaWYgKG1lc3NhZ2UuYWN0aW9uID09PSBcIm9mZnNjcmVlbjpyZWFkUGFnZVwiKSB7XG4gICAgZ3JhYkFuZFJlYWRQYWdlKClcbiAgfVxuICBlbHNlIGlmIChtZXNzYWdlLmFjdGlvbiA9PT0gXCJvZmZzY3JlZW46dG9nZ2xlUGF1c2VcIikge1xuICAgIGNvbnNvbGUubG9nKFwiUmVjZWl2ZWQgcGF1c2UgdG9nZ2xlOlwiLCBtZXNzYWdlLmlzUGF1c2VkKTtcbiAgICBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSh7XG4gICAgICB0eXBlOiAndG9nZ2xlUGF1c2UnLFxuICAgICAgdGFyZ2V0OiAnb2Zmc2NyZWVuJyxcbiAgICAgIGlzUGF1c2VkOiBtZXNzYWdlLmlzUGF1c2VkXG4gICAgfSk7XG4gIH0gZWxzZSBpZiAobWVzc2FnZS5hY3Rpb24gPT09IFwib2Zmc2NyZWVuOnN0b3BQbGF5YmFja1wiKSB7XG4gICAgY29uc29sZS5sb2coXCJTdG9wcGluZyBwbGF5YmFjayBhbmQgcmVtb3ZpbmcgY29udHJvbCBwYW5lbC5cIik7XG4gICAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe1xuICAgICAgdHlwZTogJ3N0b3BQbGF5YmFjaycsXG4gICAgICB0YXJnZXQ6ICdvZmZzY3JlZW4nLFxuICAgIH0pO1xuICB9XG4gIC8vIGZvcndhcmQgbWVzc2FnZXMgdG8gY29udGVudCBzY3JpcHRcbiAgaWYgKG1lc3NhZ2UuYWN0aW9uID09PSdjb250cm9sUGFuZWw6dXBkYXRlUGF1c2UnKSB7XG4gICAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe1xuICAgICAgYWN0aW9uOiAnY29udHJvbFBhbmVsOnVwZGF0ZVBhdXNlJyxcbiAgICAgIGlzUGF1c2VkOiBtZXNzYWdlLmlzUGF1c2VkXG4gICAgfSk7XG4gIH1lbHNlIGlmIChtZXNzYWdlLmFjdGlvbiA9PT0nY29udHJvbFBhbmVsOnJlbW92ZScpIHtcbiAgICBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSh7XG4gICAgICBhY3Rpb246ICdjb250cm9sUGFuZWw6cmVtb3ZlJyxcbiAgICB9KTtcbiAgfWVsc2UgaWYgKG1lc3NhZ2UuYWN0aW9uID09PSdjb250cm9sUGFuZWw6Y3JlYXRlJykge1xuICAgIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHtcbiAgICAgIGFjdGlvbjogJ2NvbnRyb2xQYW5lbDpjcmVhdGUnLFxuICAgIH0pO1xuICB9ZWxzZSBpZiAobWVzc2FnZS5hY3Rpb24gPT09J2NvbnRyb2xQYW5lbDp1cGRhdGVMb2FkaW5nJykge1xuICAgIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHtcbiAgICAgIGFjdGlvbjogJ2NvbnRyb2xQYW5lbDp1cGRhdGVMb2FkaW5nJyxcbiAgICAgIGlzTG9hZGluZzogbWVzc2FnZS5pc0xvYWRpbmdcbiAgICB9KTtcbiAgfVxufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=