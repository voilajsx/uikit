/**
 * @fileoverview Adapter hooks for @voilajsx/uikit
 * @description Cross-platform hooks that automatically choose web or native adapters
 * @package @voilajsx/uikit
 * @file /src/adapters/hooks.js
 */

import { useMemo } from 'react';
import { detectPlatform, PLATFORMS, isNative } from '../lib/platform';

// Lazy import adapters to avoid bundling both on each platform
let webAdapter = null;
let nativeAdapter = null;

/**
 * Get web adapter (lazy loaded)
 * @returns {Function} Web adapter function
 */
const getWebAdapter = async () => {
  if (!webAdapter) {
    const module = await import('./web');
    webAdapter = module.webAdapter;
  }
  return webAdapter;
};

/**
 * Get native adapter (lazy loaded)
 * @returns {Function} Native adapter function
 */
const getNativeAdapter = async () => {
  if (!nativeAdapter) {
    const module = await import('./native');
    nativeAdapter = module.nativeAdapter;
  }
  return nativeAdapter;
};

/**
 * Main hook for getting platform-appropriate component and styles
 * @param {string} component - Component type (button, input, card, etc.)
 * @param {Object} [props={}] - Component props (variant, size, etc.)
 * @returns {Object} Platform-specific component configuration
 */
export function useAdapter(component, props = {}) {
  const platform = useMemo(() => detectPlatform(), []);

  return useMemo(() => {
    // For React Native/Expo
    if (platform === PLATFORMS.NATIVE || isNative()) {
      try {
        const { nativeAdapter } = require('./native');
        return nativeAdapter(component, props);
      } catch (error) {
        console.warn('Native adapter not available, falling back to web');
        const { webAdapter } = require('./web');
        return webAdapter(component, props);
      }
    }

    // For Web and Tauri (both use DOM)
    try {
      const { webAdapter } = require('./web');
      return webAdapter(component, props);
    } catch (error) {
      console.error('Web adapter not available:', error);
      return { component: 'div', styles: '' };
    }
  }, [component, props, platform]);
}

/**
 * Hook for getting current platform
 * @returns {string} Current platform identifier
 */
export function usePlatform() {
  return useMemo(() => detectPlatform(), []);
}

/**
 * Hook for getting platform-specific styles only
 * @param {string} component - Component type
 * @param {Object} [props={}] - Component props
 * @returns {string|Object} CSS classes (web) or StyleSheet object (native)
 */
export function useStyles(component, props = {}) {
  const { styles } = useAdapter(component, props);
  return styles;
}

/**
 * Hook for checking if current platform is native
 * @returns {boolean} True if running on React Native
 */
export function useIsNative() {
  return useMemo(() => isNative(), []);
}

/**
 * Hook for checking if current platform is web
 * @returns {boolean} True if running on web (browser or Tauri)
 */
export function useIsWeb() {
  const platform = usePlatform();
  return platform === PLATFORMS.WEB || platform === PLATFORMS.TAURI;
}

/**
 * Utility hook for conditional platform rendering
 * @param {Object} components - Platform-specific components
 * @param {React.ReactNode} [components.web] - Web component
 * @param {React.ReactNode} [components.native] - Native component
 * @param {React.ReactNode} [components.default] - Fallback component
 * @returns {React.ReactNode} Platform-appropriate component
 */
export function usePlatformComponent({
  web,
  native,
  default: defaultComponent,
}) {
  const isNativePlatform = useIsNative();

  return useMemo(() => {
    if (isNativePlatform && native) {
      return native;
    }
    if (!isNativePlatform && web) {
      return web;
    }
    return defaultComponent || null;
  }, [isNativePlatform, web, native, defaultComponent]);
}
