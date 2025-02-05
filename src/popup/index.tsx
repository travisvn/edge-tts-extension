// src/popup/index.tsx
import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from "../components/ui/provider"
import { Input } from "@chakra-ui/react"
import './styles.css';
import { EdgeTTSClient } from "edge-tts-client";
import SearchableDropdown from '../components/ui/searchableDropdown';
import { ColorModeButton } from '../components/ui/color-mode';
 

function Popup() {
  const [voices, setVoices] = useState([]);
  const [selectedVoice, setSelectedVoice] = useState<string>('en-US-ChristopherNeural');
  const [customVoice, setCustomVoice] = useState<string>('');
  const [speed, setSpeed] = useState<number>(1.2);


    useEffect( () => {
    const fetchVoices = async () => {
      const tts = new EdgeTTSClient();
      const voices = await tts.getVoices();
      setVoices(voices);
    };

    fetchVoices();
    // Load saved settings
    chrome.storage.sync.get(['voiceName', 'speed', 'customVoice'], (result) => {
      if (result.voiceName) {
        setSelectedVoice(result.voiceName);
      }
      if (result.speed) {
        setSpeed(result.speed);
      }
      if (result.customVoice) {
        setCustomVoice(result.customVoice);
      }
    });
  }, []);

  const handleVoiceChange = (voice) => {
    setSelectedVoice(voice);
    chrome.storage.sync.set({ voiceName: voice });
  };

  const handleCustomVoiceChange = (customVoice) => {
    setCustomVoice(customVoice);
    chrome.storage.sync.set({ customVoice: customVoice });
  };

  const handleSpeedChange = (newSpeed) => {
    setSpeed(newSpeed);
    chrome.storage.sync.set({ speed: newSpeed });
  };



  const handlePlayClick = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs: chrome.tabs.Tab[]) => {
      const tab = tabs[0];
      if (tab && tab.id) {
        chrome.scripting.executeScript(
          {
            target: { tabId: tab.id },
            func: () => {
              return document.body.innerText;
            },
          },
          (injectionResults) => {
            if (chrome.runtime.lastError) {
              console.error(chrome.runtime.lastError);
              return;
            }
            for (const frameResult of injectionResults) {
              const pageContent = frameResult.result as string;
              if (pageContent && pageContent.trim() !== '') {
                // handlePlay(pageContent);
                chrome.tabs.sendMessage(tab.id, {
                  action: "readText",
                  text: pageContent,
                });
              } else {
                console.warn('The page content is empty.');
              }
            }
          }
        );
      } else {
        console.error('No active tab found');
      }
    });
  };

  return (
    <Provider>
    <div className="p-4 w-80 bg-white dark:bg-gray-800 dark:text-white transition-colors">
     <ColorModeButton />
      <h1 className="text-xl font-bold select-none">Edge TTS Extension</h1>

      <div className="mt-4">

        <label className="block">Select Voice:</label>
        

        <SearchableDropdown onChange={handleVoiceChange} />

        <label className="block mt-4">Or enter custom voice:</label>
        <Input
          type="text"
          className="w-full mt-1 p-2 border rounded dark:bg-slate-700 dark:border-slate-500 outline-none ring-0"
          placeholder="Custom voice name"
          value={customVoice}
          onChange={(e) => handleCustomVoiceChange(e.target.value)}
        />
      </div>
      <div className='text-center mt-4 text-base font-light'>
        Sample voices at{' '}
        <a
          href='https://tts.travisvn.com'
          target='_blank'
          className='underline'
        >
          tts.travisvn.com
        </a>
      </div>
      <div className="mt-4">
        <label className="block">Speed: {speed}x</label>
        <input
          type="range"
          min="0.5"
          max="2.0"
          step="0.1"
          value={speed}
          // onChange={(e) => setSpeed(parseFloat(e.target.value))}
          onChange={(e) => handleSpeedChange(parseFloat(e.target.value))}
          className="w-full"
        />
      </div>
      <div className="mt-4">
        <>
          <button
            onClick={() => handlePlayClick()}
            className="px-4 py-2  bg-blue-500 text-white rounded"
          >
            Read current page aloud
          </button>
        </>
      </div>
    </div>
    </Provider>
  );
}

const container = document.getElementById('root');
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(<Popup />);