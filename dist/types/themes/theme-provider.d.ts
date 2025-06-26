/**
 * Ultra-simple theme provider with pre-bundled themes
 * @module @voilajsx/uikit
 * @file src/themes/theme-provider.tsx
 */
import React, { ReactNode } from 'react';
/**
 * @llm-rule Pre-bundled themes - CSS included in package
 * Simple selection from 6 built-in themes
 */
export type Theme = 'default' | 'aurora' | 'metro' | 'neon' | 'ruby' | 'studio';
/**
 * @llm-rule System color scheme preference
 * light: Light system theme
 * dark: Dark system theme
 */
export type Mode = 'light' | 'dark';
/**
 * @llm-rule Component visual emphasis system
 * clean → Pure, minimal, white/light backgrounds
 * subtle → Muted, supporting, gray areas
 * brand → Primary colored, branded elements
 * contrast → High emphasis, dark/bold areas
 */
export type Tone = 'clean' | 'subtle' | 'brand' | 'contrast';
/**
 * @llm-props ThemeProvider context - Zero complexity
 * REQUIRED: children
 * RECOMMENDED: theme, mode
 * OPTIONAL: detectSystem
 */
export interface ThemeContextValue {
    /** Current theme from pre-bundled options */
    theme: Theme;
    /** System color mode */
    mode: Mode;
    /** Available themes */
    availableThemes: Theme[];
    /** Set theme from pre-bundled options */
    setTheme: (theme: Theme) => void;
    /** Set system color mode */
    setMode: (mode: Mode) => void;
    /** Toggle between light and dark modes */
    toggleMode: () => void;
    /** Get CSS classes for tone */
    getToneClasses: (tone: Tone) => string;
    /** Get default tone for component */
    getDefaultTone: (component: string) => Tone;
}
/**
 * @llm-props ThemeProvider props
 * REQUIRED: children
 * RECOMMENDED: theme="default", mode="light"
 * OPTIONAL: detectSystem
 * @llm-defaults theme="default", mode="light", detectSystem=true
 */
export interface ThemeProviderProps {
    /** REQUIRED: Child components */
    children: ReactNode;
    /** RECOMMENDED: Theme from pre-bundled options (default: "default") */
    theme?: Theme;
    /** RECOMMENDED: System color mode (default: "light") */
    mode?: Mode;
    /** OPTIONAL: Auto-detect system preference (default: true) */
    detectSystem?: boolean;
}
/**
 * @llm-rule Available pre-bundled themes
 * All themes ship as CSS with the package
 */
export declare const AVAILABLE_THEMES: Theme[];
/**
 * Ultra-simple theme provider with pre-bundled themes
 * @llm-pattern Basic usage (recommended)
 * <ThemeProvider theme="aurora" mode="dark">
 *   <App />
 * </ThemeProvider>
 *
 * @llm-pattern Auto-detect system preference
 * <ThemeProvider theme="default" detectSystem>
 *   <App />
 * </ThemeProvider>
 */
export declare function ThemeProvider({ children, theme, mode, detectSystem }: ThemeProviderProps): React.JSX.Element;
/**
 * Hook to access theme context
 * @llm-pattern Basic theme usage
 * const { theme, mode, setTheme, setMode, toggleMode } = useTheme();
 *
 * @llm-pattern Component styling
 * const { getToneClasses, getDefaultTone } = useTheme();
 * const tone = getDefaultTone('AdminLayout');
 * const classes = getToneClasses(tone); // Works automatically in both modes
 */
export declare function useTheme(): ThemeContextValue;
/**
 * @llm-pattern Theme switcher component example
 * const ThemeSwitcher = () => {
 *   const { theme, availableThemes, setTheme } = useTheme();
 *   return (
 *     <select value={theme} onChange={e => setTheme(e.target.value as Theme)}>
 *       {availableThemes.map(t => <option key={t} value={t}>{t}</option>)}
 *     </select>
 *   );
 * };
 */ 
//# sourceMappingURL=theme-provider.d.ts.map