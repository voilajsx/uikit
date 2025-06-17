/**
 * VoilaJS Layout Integration Plugin
 * Handles theme, layout, and prop drilling via environment variables
 * @param {Object} options - Plugin options
 * @param {boolean} [options.enabled=true] - Enable/disable plugin
 * @param {boolean} [options.verbose=false] - Verbose logging
 * @returns {Object} Vite plugin
 */
export function voilajsLayout(options?: {
    enabled?: boolean | undefined;
    verbose?: boolean | undefined;
}): Object;
export { voilajsLayout as LayoutPlugin };
export default voilajsLayout;
//# sourceMappingURL=layout-plugin.d.ts.map