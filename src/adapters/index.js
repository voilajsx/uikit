/**
 * @fileoverview Adapter exports for @voilajsx/uikit
 * @description Exports all cross-platform adapters and hooks
 * @package @voilajsx/uikit
 * @file /src/adapters/index.js
 */

// Export adapter functions
export { webAdapter, getWebComponent } from './web';
export { nativeAdapter, getNativeComponent } from './native';

// Export adapter hooks
export {
  useAdapter,
  usePlatform,
  useStyles,
  useIsNative,
  useIsWeb,
  usePlatformComponent,
} from './hooks';
