/**
 * Register a custom theme
 * @param {Object} theme - Theme object with id and name
 */
export function registerTheme(theme: Object): void;
/**
 * Register multiple themes at once
 * @param {Array} themes - Array of theme objects
 */
export function registerThemes(themes: any[]): void;
/**
 * Get all available themes (built-in + custom)
 * @returns {Array} All registered themes
 */
export function getAvailableThemes(): any[];
/**
 * Remove a custom theme
 * @param {string} themeId - Theme ID to remove
 */
export function unregisterTheme(themeId: string): void;
/**
 * Enhanced theme provider component
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components
 * @param {string} [props.theme='default'] - Initial theme
 * @param {'light'|'dark'} [props.variant='light'] - Initial variant
 * @param {boolean} [props.detectSystem=true] - Detect system preference
 * @param {Array} [props.customThemes=[]] - Custom themes to register on mount
 * @returns {JSX.Element} Theme provider component
 */
export function ThemeProvider({ children, theme, variant, detectSystem, customThemes }: {
    children: React.ReactNode;
    theme?: string | undefined;
    variant?: "light" | "dark" | undefined;
    detectSystem?: boolean | undefined;
    customThemes?: any[] | undefined;
}): JSX.Element;
/**
 * Hook to access enhanced theme context
 * @returns {Object} Theme context value with custom theme support
 */
export function useTheme(): Object;
//# sourceMappingURL=theme-provider.d.ts.map