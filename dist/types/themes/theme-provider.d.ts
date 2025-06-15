/**
 * Register a custom theme with optional CSS injection and default fallbacks
 * @param {Object} theme - Theme object with id, name, light, and dark
 * @param {boolean} injectCSS - Whether to inject CSS (default: true)
 */
export function registerTheme(theme: Object, injectCSS?: boolean): void;
/**
 * Register multiple themes at once
 * @param {Array} themes - Array of theme objects
 * @param {boolean} injectCSS - Whether to inject CSS for all themes
 */
export function registerThemes(themes: any[], injectCSS?: boolean): void;
/**
 * Get all available themes (built-in + custom)
 * @returns {Array} All registered themes
 */
export function getAvailableThemes(): any[];
/**
 * Get theme definition by ID
 * @param {string} themeId - Theme ID
 * @returns {Object|null} Theme definition or null
 */
export function getThemeDefinition(themeId: string): Object | null;
/**
 * Remove a custom theme and its CSS
 * @param {string} themeId - Theme ID to remove
 */
export function unregisterTheme(themeId: string): void;
/**
 * Re-inject CSS for all registered dynamic themes
 * Useful for SSR or when styles get cleared
 */
export function reinjectedAllThemeCSS(): void;
/**
 * Enhanced theme provider component with dynamic CSS injection and default fallbacks
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components
 * @param {string} [props.theme='default'] - Initial theme
 * @param {'light'|'dark'} [props.variant='light'] - Initial variant
 * @param {boolean} [props.detectSystem=true] - Detect system preference
 * @param {Array} [props.customThemes=[]] - Custom themes to register on mount
 * @param {boolean} [props.autoInjectCSS=true] - Auto-inject CSS for custom themes
 * @returns {JSX.Element} Theme provider component
 */
export function ThemeProvider({ children, theme, variant, detectSystem, customThemes, autoInjectCSS }: {
    children: React.ReactNode;
    theme?: string | undefined;
    variant?: "dark" | "light" | undefined;
    detectSystem?: boolean | undefined;
    customThemes?: any[] | undefined;
    autoInjectCSS?: boolean | undefined;
}): JSX.Element;
/**
 * Hook to access enhanced theme context
 * @returns {Object} Theme context value with dynamic theme support and default fallbacks
 */
export function useTheme(): Object;
//# sourceMappingURL=theme-provider.d.ts.map