import React, { useState, useRef, useEffect } from "react";
import { Box, Input, List } from "@chakra-ui/react";
import { useCombobox } from "downshift";
import { EdgeTTSClient } from "edge-tts-client";
import FuzzySearch from 'fuzzy-search';

const TOP_VOICES = [
  'en-US-AndrewNeural',
  'en-US-AriaNeural',
  'en-US-AvaNeural',
  'en-US-ChristopherNeural',
  'en-US-SteffanNeural',
  'en-IE-ConnorNeural',
  'en-GB-RyanNeural',
  'en-GB-SoniaNeural',
  'en-AU-NatashaNeural',
  'en-AU-WilliamNeural',
];
interface SearchableDropdownProps {
  onSelectItemChange: (item: string) => void;
  onInputChange: (input: string) => void;
}
export default function SearchableDropdown({ onSelectItemChange, onInputChange }: SearchableDropdownProps) {
  const [inputItems, setInputItems] = useState(TOP_VOICES);
  const [originalVoices, setOriginalVoices] = useState([]);
  
  useEffect(() => {
    const client = new EdgeTTSClient();
    client.getVoices().then((voices) => {
      const voicesArray = voices.map((voice) => voice.ShortName);
      // Sort voices to have 'en-US' prefixed voices at the front
      const sortedVoicesArray = voicesArray.sort((a, b) => {
        if (a.startsWith('en-US') && !b.startsWith('en-US')) return -1;
        if (!a.startsWith('en-US') && b.startsWith('en-US')) return 1;
        return 0;
      });
      setInputItems(sortedVoicesArray);
      setOriginalVoices(sortedVoicesArray);
    });
  }, []);

  const search = new FuzzySearch(originalVoices, [], {
    caseSensitive: false,
    sort: true,
  });
  
  const {
    isOpen,
    getMenuProps,
    getInputProps,
    getItemProps,
    highlightedIndex,
    selectItem,
  } = useCombobox({
    items: inputItems,
    initialSelectedItem: inputItems[0],
    onInputValueChange: ({ inputValue }) => {
      setInputItems(
        search.search(inputValue)
      );
      onInputChange(inputValue);
    },
    onSelectedItemChange: ({ selectedItem }) => {
      onSelectItemChange(selectedItem);

      setTimeout(() => {
        setInputItems(inputItems)
      }, 300); 
    },
  });


  useEffect( () => {
   
    // Load saved settings
    chrome.storage.sync.get(['voiceName', 'customVoice'], (result) => {
      if (result.voiceName) {
        selectItem(result.voiceName);
      }
      if (result.customVoice) {
        selectItem(result.customVoice);
      }
    });
    
  }, []);

  return (
    <Box className="relative">
      {/* Input Field */}
      <Input
        {...getInputProps()}
        placeholder="Search or Input Custom Voice"
        className="w-full mt-1 p-2 border rounded bg-white text-black dark:bg-gray-700 dark:text-white dark:border-gray-600 outline-none ring-0"
      />
     

      {/* Dropdown List */}
      <List.Root
        {...getMenuProps()}
        className={`absolute transition-all duration-300 w-full mt-1 border border-gray-300 bg-white dark:bg-slate-700 dark:border-gray-700 shadow-md rounded-md z-30
           outline-none ring-0
          ${isOpen ? 'block' : 'hidden'}
          flex flex-col gap-2 py-2`}
      >
       <Box className="px-2 max-h-[200px] overflow-y-auto">

       {inputItems.length > 0 ? inputItems.map((item, index) => (
          <List.Item
            key={item}
            {...getItemProps({ item, index })}
            className={`px-4 py-2 cursor-pointer rounded  ${
              highlightedIndex === index
                ? "bg-gray-100 dark:bg-gray-100 text-slate-700 dark:text-slate-700"
                : `bg-transparent dark:text-white   dark:hover:bg-gray-100 dark:hover:text-slate-700
              hover:bg-gray-100 hover:text-slate-700`
            }  transition-all duration-300`}
          >
            {item}
          </List.Item>
        )) : <List.Item className="px-4 py-2 rounded  bg-transparent text-slate-400 dark:text-slate-400">
          No voices found</List.Item>}
       </Box>
      </List.Root>
      <div className='text-xs text-slate-400 py-2 font-light'>
        Sample voices at{' '}
        <a
          href='https://tts.travisvn.com'
          target='_blank'
          className='underline'
        >
          tts.travisvn.com
        </a>
      </div>
    </Box>
  );
}
