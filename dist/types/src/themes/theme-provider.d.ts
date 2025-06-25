/**
 * @fileoverview Enhanced theme provider with dynamic CSS injection and default fallbacks
 * @description Theme context provider that can handle themes without CSS bundling
 * @package @voilajsx/uikit
 * @file /src/themes/theme-provider.tsx
 */
import React, { ReactNode } from 'react';
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
export interface ThemeDefinition {
    id: string;
    name: string;
    light: ThemeColors;
    dark: ThemeColors;
}
export interface ThemeMetadata {
    id: string;
    name: string;
}
export type ThemeVariant = 'light' | 'dark';
export interface ThemeValidation {
    isComplete: boolean;
    lightMissing: string[];
    darkMissing: string[];
}
export interface ThemeContextValue {
    theme: string;
    variant: ThemeVariant;
    availableThemes: ThemeMetadata[];
    setTheme: (newTheme: string | ThemeDefinition) => void;
    setVariant: (newVariant: ThemeVariant) => void;
    toggleVariant: () => void;
    registerTheme: (theme: ThemeDefinition) => void;
    registerThemes: (themes: ThemeDefinition[]) => void;
    getAvailableThemes: () => ThemeMetadata[];
    getThemeDefinition: (themeId: string) => ThemeDefinition | null;
    unregisterTheme: (themeId: string) => void;
    reinjectedAllThemeCSS: () => void;
}
export interface ThemeProviderProps {
    children: ReactNode;
    theme?: string;
    variant?: ThemeVariant;
    detectSystem?: boolean;
    customThemes?: ThemeDefinition[];
    autoInjectCSS?: boolean;
}
/**
 * Register a custom theme with optional CSS injection and default fallbacks
 */
export declare function registerTheme(theme: ThemeDefinition, injectCSS?: boolean): void;
/**
 * Register multiple themes at once
 */
export declare function registerThemes(themes: ThemeDefinition[], injectCSS?: boolean): void;
/**
 * Get all available themes (built-in + custom)
 */
export declare function getAvailableThemes(): ThemeMetadata[];
/**
 * Get theme definition by ID
 */
export declare function getThemeDefinition(themeId: string): ThemeDefinition | null;
/**
 * Remove a custom theme and its CSS
 */
export declare function unregisterTheme(themeId: string): void;
/**
 * Re-inject CSS for all registered dynamic themes
 * Useful for SSR or when styles get cleared
 */
export declare function reinjectedAllThemeCSS(): void;
/**
 * Enhanced theme provider component with dynamic CSS injection and default fallbacks
 */
export declare function ThemeProvider({ children, theme, variant, detectSystem, customThemes, autoInjectCSS }: ThemeProviderProps): React.JSX.Element;
/**
 * Hook to access enhanced theme context
 */
export declare function useTheme(): ThemeContextValue;
//# sourceMappingURL=theme-provider.d.ts.map