/**
 * Detects the current platform
 * @returns {string} Platform identifier from PLATFORMS
 */
export function detectPlatform(): string;
/**
 * Determines if code is running in browser environment
 * @returns {boolean} True if running in browser
 */
export function isBrowser(): boolean;
/**
 * Determines if code is running in React Native environment
 * @returns {boolean} True if running in React Native
 */
export function isNative(): boolean;
/**
 * Determines if code is running in Tauri environment
 * @returns {boolean} True if running in Tauri
 */
export function isTauri(): boolean;
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
export const PLATFORMS: Object;
//# sourceMappingURL=platform.d.ts.map