import React, { useState, useRef, useEffect } from "react";
import { Box, Input, List } from "@chakra-ui/react";
import { useCombobox } from "downshift";
import { EdgeTTSClient } from "edge-tts-client";

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

export default function SearchableDropdown({ onChange }: { onChange: (voice: string) => void }) {
  const [inputItems, setInputItems] = useState(TOP_VOICES);
  const [originalVoices, setOriginalVoices] = useState([]);
  
  useEffect(() => {
    const client = new EdgeTTSClient();
    client.getVoices().then((voices) => {
      const voicesArray = voices.map((voice) => voice.ShortName);
      setInputItems(voicesArray);
      setOriginalVoices(voicesArray);
    });
  }, []);
  
  const {
    isOpen,
    getMenuProps,
    getInputProps,
    getItemProps,
    highlightedIndex,
    selectItem,
  } = useCombobox({
    items: inputItems,
    onInputValueChange: ({ inputValue }) => {
      setInputItems(
        inputItems.filter((item) =>
          item.toLowerCase().includes(inputValue?.toLowerCase() || "")
        )
      );
      onChange(inputValue);
    },
    onSelectedItemChange: () => {
      setTimeout(() => setInputItems(originalVoices), 300); 
    },
  });
 ;

  return (
    <Box className="relative">
      {/* Input Field */}
      <Input
        {...getInputProps()}
        defaultValue={'a'}
        placeholder="Search & Select"
        className="w-full mt-1 p-2 border rounded bg-white text-black dark:bg-gray-700 dark:text-white dark:border-gray-600 outline-none ring-0"
      />

      {/* Dropdown List */}
      <List.Root
        {...getMenuProps()}

        className={`absolute transition-all duration-300 w-full mt-1 p-2  border border-gray-300 bg-white dark:bg-slate-700 dark:border-gray-700 shadow-md rounded-md z-30
           outline-none ring-0 
          ${isOpen ? 'block' : 'hidden'}
          `}
      >
        {inputItems.map((item, index) => (
          <List.Item
            key={item}
            {...getItemProps({ item, index })}
            className={`px-4 py-2 cursor-pointer  ${
              highlightedIndex === index
                ? "bg-gray-100 dark:bg-gray-100"
                : "bg-transparent"
            } dark:text-white
              dark:hover:bg-gray-100 dark:hover:text-slate-700
              hover:bg-gray-200 hover:text-slate-700 `}
          >
            {item}
          </List.Item>
        ))}
      </List.Root>
    </Box>
  );
}
