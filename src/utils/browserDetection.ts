/**
 * Utility functions for browser detection and compatibility
 */

/**
 * Checks if the current browser is Firefox
 */
export const isFirefox = (): boolean => {
  return navigator.userAgent.includes('Firefox');
};

/**
 * Checks if the current browser is Chrome or Chromium-based
 */
export const isChrome = (): boolean => {
  return /Chrome/.test(navigator.userAgent) && !/Edge|Edg/.test(navigator.userAgent);
};

/**
 * Checks if the current browser is Edge
 */
export const isEdge = (): boolean => {
  return /Edge|Edg/.test(navigator.userAgent);
};

/**
 * Checks if we're running in a Firefox addon context
 */
export const isFirefoxExtension = (): boolean => {
  // Use type safety check to avoid TypeScript error
  return typeof window !== 'undefined' && 'InstallTrigger' in window;
};

/**
 * A function that returns browser-specific values
 * @param chromeValue The value to return in Chrome
 * @param firefoxValue The value to return in Firefox
 * @param defaultValue The default value to return in other browsers
 */
export function getBrowserSpecificValue<T>(chromeValue: T, firefoxValue: T, defaultValue: T = chromeValue): T {
  if (isFirefox()) return firefoxValue;
  if (isChrome()) return chromeValue;
  return defaultValue;
} 