/**
 * @fileoverview Enhanced theme provider types with custom theme support
 * @description TypeScript definitions for the enhanced theme provider
 * @package @voilajsx/uikit
 * @file /src/types/themes/theme-provider.d.ts
 */

import { ReactNode } from 'react'

export interface Theme {
  name: string
  id: string
  description?: string
  light?: Record<string, string>
  dark?: Record<string, string>
}

export interface ThemeProviderProps {
  children: ReactNode
  theme?: string | Theme
  variant?: 'light' | 'dark'
  detectSystem?: boolean
  customThemes?: Theme[]
}

export interface UseThemeReturn {
  theme: string
  variant: 'light' | 'dark'
  setTheme: (theme: string | Theme) => void
  setVariant: (variant: 'light' | 'dark') => void
  toggleVariant: () => void
  availableThemes: { id: string; name: string }[]
  registerTheme: (theme: Theme) => void
  registerThemes: (themes: Theme[]) => void
  getAvailableThemes: () => { id: string; name: string }[]
  unregisterTheme: (themeId: string) => void
}

// Standalone theme management functions
export declare function registerTheme(theme: Theme): void
export declare function registerThemes(themes: Theme[]): void
export declare function getAvailableThemes(): { id: string; name: string }[]
export declare function unregisterTheme(themeId: string): void

// React components
export declare const ThemeProvider: React.FC<ThemeProviderProps>
export declare const useTheme: () => UseThemeReturn