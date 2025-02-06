/******/ (() => { // webpackBootstrap
/*!*********************************!*\
  !*** ./src/background/index.ts ***!
  \*********************************/
// src/background/index.ts
chrome.runtime.onInstalled.addListener(() => {
    // Add context menu for reading selected text
    chrome.contextMenus.create({
        id: 'readAloud',
        title: 'Read Aloud with Edge TTS',
        contexts: ['selection'],
    });
    // Add context menu for reading the entire page
    chrome.contextMenus.create({
        id: 'readPage',
        title: 'Read Page Aloud with Edge TTS',
        contexts: ['page'],
    });
});
chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === 'readAloud' && info.selectionText && (tab === null || tab === void 0 ? void 0 : tab.id) !== undefined) {
        // Handle reading selected text
        chrome.tabs.sendMessage(tab.id, {
            action: 'readText',
            text: info.selectionText,
        });
    }
    else if (info.menuItemId === 'readPage' && (tab === null || tab === void 0 ? void 0 : tab.id) !== undefined) {
        // Handle reading the entire page
        chrome.tabs.sendMessage(tab.id, {
            action: 'readPage',
        });
    }
});

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2dyb3VuZC9idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLDBCQUEwQjtBQUUxQixNQUFNLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFFO0lBQzFDLDZDQUE2QztJQUM3QyxNQUFNLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQztRQUN6QixFQUFFLEVBQUUsV0FBVztRQUNmLEtBQUssRUFBRSwwQkFBMEI7UUFDakMsUUFBUSxFQUFFLENBQUMsV0FBVyxDQUFDO0tBQ3hCLENBQUMsQ0FBQztJQUVILCtDQUErQztJQUMvQyxNQUFNLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQztRQUN6QixFQUFFLEVBQUUsVUFBVTtRQUNkLEtBQUssRUFBRSwrQkFBK0I7UUFDdEMsUUFBUSxFQUFFLENBQUMsTUFBTSxDQUFDO0tBQ25CLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDO0FBRUgsTUFBTSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxFQUFFO0lBQ3RELElBQUksSUFBSSxDQUFDLFVBQVUsS0FBSyxXQUFXLElBQUksSUFBSSxDQUFDLGFBQWEsSUFBSSxJQUFHLGFBQUgsR0FBRyx1QkFBSCxHQUFHLENBQUUsRUFBRSxNQUFLLFNBQVMsRUFBRSxDQUFDO1FBQ25GLCtCQUErQjtRQUMvQixNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFO1lBQzlCLE1BQU0sRUFBRSxVQUFVO1lBQ2xCLElBQUksRUFBRSxJQUFJLENBQUMsYUFBYTtTQUN6QixDQUFDLENBQUM7SUFDTCxDQUFDO1NBQU0sSUFBSSxJQUFJLENBQUMsVUFBVSxLQUFLLFVBQVUsSUFBSSxJQUFHLGFBQUgsR0FBRyx1QkFBSCxHQUFHLENBQUUsRUFBRSxNQUFLLFNBQVMsRUFBRSxDQUFDO1FBQ25FLGlDQUFpQztRQUNqQyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFO1lBQzlCLE1BQU0sRUFBRSxVQUFVO1NBQ25CLENBQUMsQ0FBQztJQUNMLENBQUM7QUFDSCxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2VkZ2UtdHRzLWNocm9tZS1leHRlbnNpb24vLi9zcmMvYmFja2dyb3VuZC9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBzcmMvYmFja2dyb3VuZC9pbmRleC50c1xuXG5jaHJvbWUucnVudGltZS5vbkluc3RhbGxlZC5hZGRMaXN0ZW5lcigoKSA9PiB7XG4gIC8vIEFkZCBjb250ZXh0IG1lbnUgZm9yIHJlYWRpbmcgc2VsZWN0ZWQgdGV4dFxuICBjaHJvbWUuY29udGV4dE1lbnVzLmNyZWF0ZSh7XG4gICAgaWQ6ICdyZWFkQWxvdWQnLFxuICAgIHRpdGxlOiAnUmVhZCBBbG91ZCB3aXRoIEVkZ2UgVFRTJyxcbiAgICBjb250ZXh0czogWydzZWxlY3Rpb24nXSxcbiAgfSk7XG5cbiAgLy8gQWRkIGNvbnRleHQgbWVudSBmb3IgcmVhZGluZyB0aGUgZW50aXJlIHBhZ2VcbiAgY2hyb21lLmNvbnRleHRNZW51cy5jcmVhdGUoe1xuICAgIGlkOiAncmVhZFBhZ2UnLFxuICAgIHRpdGxlOiAnUmVhZCBQYWdlIEFsb3VkIHdpdGggRWRnZSBUVFMnLFxuICAgIGNvbnRleHRzOiBbJ3BhZ2UnXSxcbiAgfSk7XG59KTtcblxuY2hyb21lLmNvbnRleHRNZW51cy5vbkNsaWNrZWQuYWRkTGlzdGVuZXIoKGluZm8sIHRhYikgPT4ge1xuICBpZiAoaW5mby5tZW51SXRlbUlkID09PSAncmVhZEFsb3VkJyAmJiBpbmZvLnNlbGVjdGlvblRleHQgJiYgdGFiPy5pZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgLy8gSGFuZGxlIHJlYWRpbmcgc2VsZWN0ZWQgdGV4dFxuICAgIGNocm9tZS50YWJzLnNlbmRNZXNzYWdlKHRhYi5pZCwge1xuICAgICAgYWN0aW9uOiAncmVhZFRleHQnLFxuICAgICAgdGV4dDogaW5mby5zZWxlY3Rpb25UZXh0LFxuICAgIH0pO1xuICB9IGVsc2UgaWYgKGluZm8ubWVudUl0ZW1JZCA9PT0gJ3JlYWRQYWdlJyAmJiB0YWI/LmlkICE9PSB1bmRlZmluZWQpIHtcbiAgICAvLyBIYW5kbGUgcmVhZGluZyB0aGUgZW50aXJlIHBhZ2VcbiAgICBjaHJvbWUudGFicy5zZW5kTWVzc2FnZSh0YWIuaWQsIHtcbiAgICAgIGFjdGlvbjogJ3JlYWRQYWdlJyxcbiAgICB9KTtcbiAgfVxufSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9