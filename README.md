# Edge TTS Reader — Enhanced Side-Panel Edition

A free browser extension that reads webpages with Microsoft Edge's natural online voices while keeping spoken text visible and highlighted.

> This is a modified fork of [travisvn/edge-tts-extension](https://github.com/travisvn/edge-tts-extension), originally created by **Travis**. The synchronized reading, long-page handling, and side-panel experience were added by [Anass-El-jadd](https://github.com/Anass-El-jadd) in September 2026. The project remains licensed under the GNU AGPL v3.

## Highlights

- Word-by-word highlighting synchronized with speech
- Automatic scrolling with a manual **Resume following text** control
- Start reading from a selected passage or click a word while playback is active
- Reliable Unicode- and SSML-safe streaming for long pages
- Continuation when infinite-scroll pages append readable content
- Dark native side panel that remains open while browsing
- Full searchable Microsoft voice catalogue
- Language and gender voice filters
- Live voice changes that resume from the highlighted word
- Immediate speed adjustment from 0.5× to 2×
- Playback ownership and keyboard controls across browser tabs
- Visible playback errors with retry support

## Requirements

- Microsoft Edge or a Chromium browser supporting the Side Panel API (version 114 or newer)
- An internet connection for Microsoft’s online speech service
- Node.js and npm only when building from source

## Install the enhanced version

This fork is not the version published under the original project's store listing. Install it manually from source:

```bash
git clone https://github.com/Anass-El-jadd/edge-tts-extension.git
cd edge-tts-extension
npm install
npm run build:chrome
```

Then:

1. Open `edge://extensions` (or `chrome://extensions`).
2. Enable **Developer mode**.
3. Select **Load unpacked**.
4. Choose the generated `dist/chrome` directory.
5. Pin the extension and click its toolbar icon to open the reader side panel.

After rebuilding, use **Reload** on the extensions page and refresh existing webpages so they receive the updated content script.

## Usage

- Open the side panel and select **Start reading** to read the current page.
- Select text and use the extension’s context menu to read only the selection or continue from that point.
- While playback is active, click ordinary paragraph text to continue from that word. Links and interactive controls keep their normal behavior.
- Manual scrolling suspends automatic following. Select **Resume following text** to return to the spoken position.
- Search or filter the voice list by language and gender. Changing voice during playback continues from the current word.

## Keyboard shortcuts

| Action | Windows/Linux | macOS |
| --- | --- | --- |
| Read selection | `Ctrl+Shift+S` | `Command+Shift+S` |
| Read page | `Ctrl+Shift+P` | `Command+Shift+P` |
| Read from selection | `Ctrl+Shift+H` | `Command+Shift+H` |
| Pause or resume | `Ctrl+Shift+Space` | `Command+Shift+Space` |

Shortcuts can be changed from the browser’s extension-shortcuts page.

## Development

```bash
npm install
npm run build
```

Production bundles are written to `dist/chrome` and `dist/firefox`.

## Privacy and service availability

Page text is sent to Microsoft’s online Read Aloud service to generate audio and word-boundary timing. The extension does not provide offline synthesis. The consumer speech endpoint is not a guaranteed public API and may change or experience service interruptions.

## Attribution and license

- Original project and implementation: [Travis — edge-tts-extension](https://github.com/travisvn/edge-tts-extension)
- Enhanced fork and reading experience: [Anass-El-jadd](https://github.com/Anass-El-jadd/edge-tts-extension)
- License: [GNU Affero General Public License v3](LICENSE)

This repository contains a modified version of the original work. Copyright and license notices from the original project remain in effect. There is no warranty, as described in the AGPL v3.

Contributions intended for the original project can be discussed in [upstream issues and discussions](https://github.com/travisvn/edge-tts-extension).
