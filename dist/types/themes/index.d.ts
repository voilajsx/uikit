/**
 * Theme system exports for @voilajsx/uikit
 * @module @voilajsx/uikit
 * @file src/themes/index.ts
 */
export { ThemeProvider, useTheme, type Theme, type Mode, type Tone, type ThemeContextValue, type ThemeProviderProps, } from './theme-provider';
import auroraTheme from './presets/aurora.js';
import metroTheme from './presets/metro.js';
import neonTheme from './presets/neon.js';
import rubyTheme from './presets/ruby.js';
import studioTheme from './presets/studio.js';
export { default as auroraTheme } from './presets/aurora.js';
export { default as metroTheme } from './presets/metro.js';
export { default as neonTheme } from './presets/neon.js';
export { default as rubyTheme } from './presets/ruby.js';
export { default as studioTheme } from './presets/studio.js';
export { auroraTheme as aurora };
export { metroTheme as metro };
export { neonTheme as neon };
export { rubyTheme as ruby };
export { studioTheme as studio };
export interface ThemeColors {
    background: string;
    foreground: string;
    card: string;
    cardForeground: string;
    popover: string;
    popoverForeground: string;
    primary: string;
    primaryForeground: string;
    secondary: string;
    secondaryForeground: string;
    muted: string;
    mutedForeground: string;
    accent: string;
    accentForeground: string;
    destructive: string;
    destructiveForeground: string;
    border: string;
    input: string;
    ring: string;
    chart1: string;
    chart2: string;
    chart3: string;
    chart4: string;
    chart5: string;
    sidebar: string;
    sidebarForeground: string;
    sidebarPrimary: string;
    sidebarPrimaryForeground: string;
    sidebarAccent: string;
    sidebarAccentForeground: string;
    sidebarBorder: string;
    sidebarRing: string;
}
export interface ThemePreset {
    /** Theme identifier (must match filename) */
    id: string;
    /** Human-readable theme name */
    name: string;
    /** Theme description */
    description: string;
    /** Light mode colors */
    light: ThemeColors;
    /** Dark mode colors */
    dark: ThemeColors;
}
/**
 * @llm-rule Available theme presets
 * All themes that can be used with setTheme()
 */
export declare const AVAILABLE_THEMES: readonly ["default", "aurora", "metro", "neon", "ruby", "studio"];
/**
 * @llm-rule All theme presets for build tools
 * Used by build scripts to generate CSS
 */
export declare const ALL_THEME_PRESETS: {
    aurora: {
        id: string;
        name: string;
        description: string;
        light: {
            background: string;
            foreground: string;
            card: string;
            cardForeground: string;
            popover: string;
            popoverForeground: string;
            primary: string;
            primaryForeground: string;
            secondary: string;
            secondaryForeground: string;
            muted: string;
            mutedForeground: string;
            accent: string;
            accentForeground: string;
            destructive: string;
            destructiveForeground: string;
            border: string;
            input: string;
            ring: string;
            chart1: string;
            chart2: string;
            chart3: string;
            chart4: string;
            chart5: string;
            sidebar: string;
            sidebarForeground: string;
            sidebarPrimary: string;
            sidebarPrimaryForeground: string;
            sidebarAccent: string;
            sidebarAccentForeground: string;
            sidebarBorder: string;
            sidebarRing: string;
        };
        dark: {
            background: string;
            foreground: string;
            card: string;
            cardForeground: string;
            popover: string;
            popoverForeground: string;
            primary: string;
            primaryForeground: string;
            secondary: string;
            secondaryForeground: string;
            muted: string;
            mutedForeground: string;
            accent: string;
            accentForeground: string;
            destructive: string;
            destructiveForeground: string;
            border: string;
            input: string;
            ring: string;
            chart1: string;
            chart2: string;
            chart3: string;
            chart4: string;
            chart5: string;
            sidebar: string;
            sidebarForeground: string;
            sidebarPrimary: string;
            sidebarPrimaryForeground: string;
            sidebarAccent: string;
            sidebarAccentForeground: string;
            sidebarBorder: string;
            sidebarRing: string;
        };
    };
    metro: {
        id: string;
        name: string;
        description: string;
        light: {
            background: string;
            foreground: string;
            card: string;
            cardForeground: string;
            popover: string;
            popoverForeground: string;
            primary: string;
            primaryForeground: string;
            secondary: string;
            secondaryForeground: string;
            muted: string;
            mutedForeground: string;
            accent: string;
            accentForeground: string;
            destructive: string;
            destructiveForeground: string;
            border: string;
            input: string;
            ring: string;
            chart1: string;
            chart2: string;
            chart3: string;
            chart4: string;
            chart5: string;
            sidebar: string;
            sidebarForeground: string;
            sidebarPrimary: string;
            sidebarPrimaryForeground: string;
            sidebarAccent: string;
            sidebarAccentForeground: string;
            sidebarBorder: string;
            sidebarRing: string;
        };
        dark: {
            background: string;
            foreground: string;
            card: string;
            cardForeground: string;
            popover: string;
            popoverForeground: string;
            primary: string;
            primaryForeground: string;
            secondary: string;
            secondaryForeground: string;
            muted: string;
            mutedForeground: string;
            accent: string;
            accentForeground: string;
            destructive: string;
            destructiveForeground: string;
            border: string;
            input: string;
            ring: string;
            chart1: string;
            chart2: string;
            chart3: string;
            chart4: string;
            chart5: string;
            sidebar: string;
            sidebarForeground: string;
            sidebarPrimary: string;
            sidebarPrimaryForeground: string;
            sidebarAccent: string;
            sidebarAccentForeground: string;
            sidebarBorder: string;
            sidebarRing: string;
        };
    };
    neon: {
        id: string;
        name: string;
        description: string;
        light: {
            background: string;
            foreground: string;
            card: string;
            cardForeground: string;
            popover: string;
            popoverForeground: string;
            primary: string;
            primaryForeground: string;
            secondary: string;
            secondaryForeground: string;
            muted: string;
            mutedForeground: string;
            accent: string;
            accentForeground: string;
            destructive: string;
            destructiveForeground: string;
            border: string;
            input: string;
            ring: string;
            chart1: string;
            chart2: string;
            chart3: string;
            chart4: string;
            chart5: string;
            sidebar: string;
            sidebarForeground: string;
            sidebarPrimary: string;
            sidebarPrimaryForeground: string;
            sidebarAccent: string;
            sidebarAccentForeground: string;
            sidebarBorder: string;
            sidebarRing: string;
        };
        dark: {
            background: string;
            foreground: string;
            card: string;
            cardForeground: string;
            popover: string;
            popoverForeground: string;
            primary: string;
            primaryForeground: string;
            secondary: string;
            secondaryForeground: string;
            muted: string;
            mutedForeground: string;
            accent: string;
            accentForeground: string;
            destructive: string;
            destructiveForeground: string;
            border: string;
            input: string;
            ring: string;
            chart1: string;
            chart2: string;
            chart3: string;
            chart4: string;
            chart5: string;
            sidebar: string;
            sidebarForeground: string;
            sidebarPrimary: string;
            sidebarPrimaryForeground: string;
            sidebarAccent: string;
            sidebarAccentForeground: string;
            sidebarBorder: string;
            sidebarRing: string;
        };
    };
    ruby: {
        id: string;
        name: string;
        description: string;
        light: {
            background: string;
            foreground: string;
            card: string;
            cardForeground: string;
            popover: string;
            popoverForeground: string;
            primary: string;
            primaryForeground: string;
            secondary: string;
            secondaryForeground: string;
            muted: string;
            mutedForeground: string;
            accent: string;
            accentForeground: string;
            destructive: string;
            destructiveForeground: string;
            border: string;
            input: string;
            ring: string;
            chart1: string;
            chart2: string;
            chart3: string;
            chart4: string;
            chart5: string;
            sidebar: string;
            sidebarForeground: string;
            sidebarPrimary: string;
            sidebarPrimaryForeground: string;
            sidebarAccent: string;
            sidebarAccentForeground: string;
            sidebarBorder: string;
            sidebarRing: string;
        };
        dark: {
            background: string;
            foreground: string;
            card: string;
            cardForeground: string;
            popover: string;
            popoverForeground: string;
            primary: string;
            primaryForeground: string;
            secondary: string;
            secondaryForeground: string;
            muted: string;
            mutedForeground: string;
            accent: string;
            accentForeground: string;
            destructive: string;
            destructiveForeground: string;
            border: string;
            input: string;
            ring: string;
            chart1: string;
            chart2: string;
            chart3: string;
            chart4: string;
            chart5: string;
            sidebar: string;
            sidebarForeground: string;
            sidebarPrimary: string;
            sidebarPrimaryForeground: string;
            sidebarAccent: string;
            sidebarAccentForeground: string;
            sidebarBorder: string;
            sidebarRing: string;
        };
    };
    studio: {
        id: string;
        name: string;
        description: string;
        light: {
            background: string;
            foreground: string;
            card: string;
            cardForeground: string;
            popover: string;
            popoverForeground: string;
            primary: string;
            primaryForeground: string;
            secondary: string;
            secondaryForeground: string;
            muted: string;
            mutedForeground: string;
            accent: string;
            accentForeground: string;
            destructive: string;
            destructiveForeground: string;
            border: string;
            input: string;
            ring: string;
            chart1: string;
            chart2: string;
            chart3: string;
            chart4: string;
            chart5: string;
            sidebar: string;
            sidebarForeground: string;
            sidebarPrimary: string;
            sidebarPrimaryForeground: string;
            sidebarAccent: string;
            sidebarAccentForeground: string;
            sidebarBorder: string;
            sidebarRing: string;
        };
        dark: {
            background: string;
            foreground: string;
            card: string;
            cardForeground: string;
            popover: string;
            popoverForeground: string;
            primary: string;
            primaryForeground: string;
            secondary: string;
            secondaryForeground: string;
            muted: string;
            mutedForeground: string;
            accent: string;
            accentForeground: string;
            destructive: string;
            destructiveForeground: string;
            border: string;
            input: string;
            ring: string;
            chart1: string;
            chart2: string;
            chart3: string;
            chart4: string;
            chart5: string;
            sidebar: string;
            sidebarForeground: string;
            sidebarPrimary: string;
            sidebarPrimaryForeground: string;
            sidebarAccent: string;
            sidebarAccentForeground: string;
            sidebarBorder: string;
            sidebarRing: string;
        };
    };
};
/**
 * @llm-pattern Basic theme usage
 * import { ThemeProvider, useTheme } from '@voilajsx/uikit/themes';
 *
 * <ThemeProvider theme="aurora" mode="dark">
 *   <App />
 * </ThemeProvider>
 *
 * const { setTheme, setMode, getToneClasses } = useTheme();
 */
/**
 * @llm-pattern Build tool usage
 * import { ALL_THEME_PRESETS } from '@voilajsx/uikit/themes';
 *
 * // Generate CSS for all themes
 * Object.values(ALL_THEME_PRESETS).forEach(theme => {
 *   generateCSS(theme);
 * });
 */
/**
 * @llm-pattern Individual theme access
 * import { aurora, studioTheme } from '@voilajsx/uikit/themes';
 *
 * console.log(aurora.name); // "Aurora"
 * console.log(studioTheme.light.primary); // Theme color
 */ 
//# sourceMappingURL=index.d.ts.map