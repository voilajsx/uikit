/**
 * @fileoverview Enhanced theme provider types with custom theme support
 * @description TypeScript definitions for the enhanced theme provider
 * @package @voilajsx/uikit
 * @file /src/types/themes/theme-provider.d.ts
 */

import { ReactNode } from 'react'

/**
 * Theme color definitions (all optional - missing colors fallback to default)
 */
export interface ThemeColors {
  background?: string
  foreground?: string
  card?: string
  cardForeground?: string
  popover?: string
  popoverForeground?: string
  primary?: string
  primaryForeground?: string
  secondary?: string
  secondaryForeground?: string
  muted?: string
  mutedForeground?: string
  accent?: string
  accentForeground?: string
  destructive?: string
  destructiveForeground?: string
  border?: string
  input?: string
  ring?: string
  chart1?: string
  chart2?: string
  chart3?: string
  chart4?: string
  chart5?: string
  sidebar?: string
  sidebarForeground?: string
  sidebarPrimary?: string
  sidebarPrimaryForeground?: string
  sidebarAccent?: string
  sidebarAccentForeground?: string
  sidebarBorder?: string
  sidebarRing?: string
}

/**
 * Theme definition
 */
export interface Theme {
  id: string
  name: string
  description?: string
  light?: ThemeColors
  dark?: ThemeColors
}

/**
 * Theme provider props
 */
export interface ThemeProviderProps {
  children: ReactNode
  theme?: string | Theme
  variant?: 'light' | 'dark'
  detectSystem?: boolean
  customThemes?: Theme[]
  autoInjectCSS?: boolean
}

/**
 * useTheme hook return type
 */
export interface UseThemeReturn {
  theme: string
  variant: 'light' | 'dark'
  availableThemes: { id: string; name: string }[]
  setTheme: (theme: string | Theme) => void
  setVariant: (variant: 'light' | 'dark') => void
  toggleVariant: () => void
  registerTheme: (theme: Theme) => void
  getThemeDefinition: (themeId: string) => Theme | null
  unregisterTheme: (themeId: string) => void
}

// Standalone functions
export declare function registerTheme(theme: Theme, injectCSS?: boolean): void
export declare function registerThemes(themes: Theme[], injectCSS?: boolean): void
export declare function getAvailableThemes(): { id: string; name: string }[]
export declare function getThemeDefinition(themeId: string): Theme | null
export declare function unregisterTheme(themeId: string): void

// React components
export declare const ThemeProvider: React.FC<ThemeProviderProps>
export declare const useTheme: () => UseThemeReturn