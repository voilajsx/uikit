import { ReactNode } from 'react'

export interface Theme {
  name: string
  id: string
  light: Record<string, string>
  dark: Record<string, string>
}

export interface ThemeProviderProps {
  children: ReactNode
  theme?: string | Theme
  variant?: 'light' | 'dark'
  detectSystem?: boolean
}

export interface UseThemeReturn {
  theme: string
  variant: 'light' | 'dark'
  setTheme: (theme: string | Theme) => void
  setVariant: (variant: 'light' | 'dark') => void
  toggleVariant: () => void
  availableThemes: { id: string; name: string }[]
}

export declare const ThemeProvider: React.FC<ThemeProviderProps>
export declare const useTheme: () => UseThemeReturn