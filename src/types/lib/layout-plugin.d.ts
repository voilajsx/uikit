/**
 * @fileoverview TypeScript definitions for layout plugin
 * @package @voilajsx/uikit
 * @file /src/lib/layout-plugin.d.ts
 */

import { Plugin } from 'vite';

export interface LayoutPluginOptions {
  /**
   * Enable/disable the plugin
   * @default process.env.VOILA_LAYOUT_BUILD === 'true'
   */
  enabled?: boolean;
  
  /**
   * Enable verbose logging
   * @default process.env.NODE_ENV === 'development'
   */
  verbose?: boolean;
}

/**
 * VoilaJS Layout Integration Plugin
 * Handles theme, layout, and prop drilling via environment variables
 */
export function voilajsLayout(options?: LayoutPluginOptions): Plugin;

/**
 * Named export alias for clean imports
 */
export { voilajsLayout as LayoutPlugin };

/**
 * Default export for backward compatibility
 */
declare const _default: typeof voilajsLayout;
export default _default;