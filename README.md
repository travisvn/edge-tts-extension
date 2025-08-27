# 🎙️ Edge TTS Reader: Free, High-Quality Text-to-Speech Extension

![GitHub stars](https://img.shields.io/github/stars/travisvn/edge-tts-extension?style=social)
![GitHub forks](https://img.shields.io/github/forks/travisvn/edge-tts-extension?style=social)
![GitHub repo size](https://img.shields.io/github/repo-size/travisvn/edge-tts-extension)
![GitHub language count](https://img.shields.io/github/languages/count/travisvn/edge-tts-extension)
![GitHub top language](https://img.shields.io/github/languages/top/travisvn/edge-tts-extension)
![GitHub last commit](https://img.shields.io/github/last-commit/travisvn/edge-tts-extension?color=red)
[![Discord](https://img.shields.io/badge/Discord-Voice_AI_%26_TTS_Tools-blue?logo=discord&logoColor=white)](https://discord.gg/GkFbBCBqJ6)

Edge TTS Reader brings your browsing experience to life by turning text into natural-sounding audio. Powered by Microsoft Edge's advanced Read Aloud API, this extension makes it effortless to listen to selected text or entire web pages. Whether you're multitasking, improving productivity, or just prefer listening over reading, Edge TTS Reader is your perfect companion.

[View in the Chrome Web Store](https://chromewebstore.google.com/detail/edge-text-to-speech-voice/jeenjljjokaobgdbemlplaidbjfliknl)

## Why Choose Edge TTS Reader?

Say goodbye to staring at long articles or struggling to absorb written information. With Edge TTS Reader, your browser transforms into a virtual assistant, delivering high-quality, lifelike audio at your convenience. Designed for professionals, students, accessibility needs, and language enthusiasts, Edge TTS Reader is lightweight, efficient, and privacy-focused.

## Key Features

### 🎤 High-Quality Text-to-Speech

Enjoy clear, lifelike narration powered by Microsoft's Read Aloud API, customizable to suit different contexts and preferences.

### 📖 Read Selected Text

Highlight text, right-click, and select "Read Aloud with Edge TTS" to hear the content instantly.

### 🌐 Read Entire Web Pages

Right-click anywhere on a page and choose "Read Entire Page Aloud with Edge TTS" for seamless audio playback of the whole page.

### 🎛️ Customizable Settings

- Adjust reading speed (from 0.5x to 2.0x).
- Choose from a variety of voices to match your mood or task.

### 🌓 Dark Mode Support

Respect your system preferences with light, dark, and system theme options.

### 🖱️ Intuitive Popup Interface

Quickly control playback, select voices, and adjust settings via an easy-to-use popup menu.

### 📋 Context Menu Integration

Perform TTS actions directly from the right-click menu to streamline your workflow.

### 🔒 Privacy-Focused

Your data stays secure. Text is processed locally or through Microsoft's trusted APIs without storage or sharing.

---

## How It Works

1. **Highlight Text or Use Context Menu**

   - Highlight text and select "Read Aloud with Edge TTS."
   - Alternatively, right-click and choose "Read Entire Page Aloud."

2. **Customize in the Popup**

   - Open the extension popup to tweak settings like voice, speed, and theme.

3. **Listen and Enjoy**
   - Let Edge TTS Reader deliver clear, natural-sounding audio.

---

## Perfect For:

- **Professionals**: Listen to articles, emails, or reports while multitasking.
- **Students**: Use TTS for study materials, research, or eBooks.
- **Accessibility**: Support for users with visual impairments or reading difficulties.
- **Language Enthusiasts**: Explore diverse voices and pronunciations.

---

## Installation

### Option 1: From Stores

- Chrome: [Chrome Web Store](https://chromewebstore.google.com/detail/edge-text-to-speech-voice/jeenjljjokaobgdbemlplaidbjfliknl)
- Firefox: [Firefox Add-ons](https://addons.mozilla.org/en-US/firefox/addon/edge-tts/) 🆕🔥

### Option 2: Manual Installation

#### For Chrome:

1. Clone this repository:
   ```bash
   git clone https://github.com/travisvn/edge-tts-extension.git
   ```
2. Navigate to the directory:
   ```bash
   cd edge-tts-extension
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Build the Chrome extension:
   ```bash
   npm run build:chrome
   ```
5. Load the extension in Chrome:
   - Open Chrome and go to `chrome://extensions/`.
   - Enable **Developer mode** (toggle in the top-right corner).
   - Click **Load unpacked** and select the `dist/chrome` folder.

#### For Firefox:

1. Clone this repository:
   ```bash
   git clone https://github.com/travisvn/edge-tts-extension.git
   ```
2. Navigate to the directory:
   ```bash
   cd edge-tts-extension
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Build the Firefox extension:
   ```bash
   npm run build:firefox
   ```
5. Load the extension in Firefox:
   - Open Firefox and go to `about:debugging#/runtime/this-firefox`.
   - Click **Load Temporary Add-on...** and select any file in the `dist/firefox` directory.
   - For permanent installation, you need to sign your extension or use Firefox Developer Edition/Nightly with `xpinstall.signatures.required` set to `false` in `about:config`.

## Building for Both Browsers

To build the extension for both Chrome and Firefox:

```bash
npm run build
```

This will create separate builds in `dist/chrome` and `dist/firefox` directories.

---

## Frequently Asked Questions

### What languages and voices are supported?

Edge TTS Reader supports a wide range of voices and languages provided by Microsoft's Read Aloud API.

### Does this work offline?

An internet connection is required to process text via Microsoft's API. The extension is optimized to minimize bandwidth usage.

### Is my data secure?

Yes! Your text is processed securely and never stored or shared.

---

## Contributing

Contributions are welcome! To get started:

1. Fork this repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your feature description"
   ```
4. Push to your branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a pull request.

## Feature Requests

For feature requests, please use the **[Discussions](https://github.com/travisvn/edge-tts-extension/discussions)** section or share your ideas on our **[Discord](https://tts.travisvn.com/discord)**. This helps us keep Issues focused on bugs and actionable tasks. Thanks for your input!

---

## Get Started Today

Transform your browsing experience with Edge TTS Reader. Click **Add to Chrome** and start listening to the web today!

https://chromewebstore.google.com/detail/edge-text-to-speech-voice/jeenjljjokaobgdbemlplaidbjfliknl
