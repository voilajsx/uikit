/**
 * @fileoverview Platform detection utilities for @voilajsx/uikit
 * @description Detects runtime platform for adaptive component rendering
 * @package @voilajsx/uikit
 * @file /src/lib/platform.js
 */

/**
 * Available platforms
 * @type {Object}
 */
export const PLATFORMS = {
  WEB: 'web',
  NATIVE: 'native',
  TAURI: 'tauri',
  UNKNOWN: 'unknown',
};

/**
 * Detects the current platform
 * @returns {string} Platform identifier from PLATFORMS
 */
export function detectPlatform() {
  // Check if we're in a browser environment
  if (typeof window !== 'undefined' && typeof document !== 'undefined') {
    // Check for Tauri
    if (window.__TAURI__ !== undefined || window.__TAURI_IPC__ !== undefined) {
      return PLATFORMS.TAURI;
    }
    return PLATFORMS.WEB;
  }

  // Check for React Native
  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    return PLATFORMS.NATIVE;
  }

  return PLATFORMS.UNKNOWN;
}

/**
 * Determines if code is running in browser environment
 * @returns {boolean} True if running in browser
 */
export function isBrowser() {
  return typeof window !== 'undefined' && typeof document !== 'undefined';
}

/**
 * Determines if code is running in React Native environment
 * @returns {boolean} True if running in React Native
 */
export function isNative() {
  return (
    typeof navigator !== 'undefined' && navigator.product === 'ReactNative'
  );
}

/**
 * Determines if code is running in Tauri environment
 * @returns {boolean} True if running in Tauri
 */
export function isTauri() {
  return (
    typeof window !== 'undefined' &&
    (window.__TAURI__ !== undefined || window.__TAURI_IPC__ !== undefined)
  );
}
