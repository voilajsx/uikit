/**
 * Available platforms
 */
export declare const PLATFORMS: {
  readonly WEB: 'web'
  readonly NATIVE: 'native'
  readonly TAURI: 'tauri'
  readonly UNKNOWN: 'unknown'
}

export type Platform = typeof PLATFORMS[keyof typeof PLATFORMS]

/**
 * Detects the current platform
 */
export declare function detectPlatform(): Platform

/**
 * Determines if code is running in browser environment
 */
export declare function isBrowser(): boolean

/**
 * Determines if code is running in React Native environment
 */
export declare function isNative(): boolean

/**
 * Determines if code is running in Tauri environment
 */
export declare function isTauri(): boolean