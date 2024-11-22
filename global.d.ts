declare global {
  interface Window {
    togglePause: () => void;
    stopPlayback: () => void;
    [key: string]: any;
  }
}


interface Window {
  togglePause: () => void;
  stopPlayback: () => void;
  [key: string]: any;
}