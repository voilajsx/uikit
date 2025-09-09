/**
 * Sky Theme - Clean, minimal blue theme inspired by shadcn design
 * @module themes/presets/sky
 */

export const sky = {
  id: 'sky',
  name: 'Sky',
  description: 'Clean, minimal blue theme with flat colors and elegant simplicity',
  
  // Minimal Design Tokens - keeping defaults
  fontPrimary: "'Inter', system-ui, sans-serif",
  fontDisplay: "'Inter', system-ui, sans-serif",
  radiusEnhance: '0.5rem',  // Standard radius
  spacingEnhance: 1,        // Default spacing
  shadowEnhance: '0 1px 2px 0 rgb(0 0 0 / 0.05)',        // Minimal shadow
  shadowLg: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  shadowXl: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  
  // No gradients - flat colors only
  gradientPrimary: 'oklch(0.58 0.18 240)',
  gradientSubtle: 'oklch(0.95 0.01 240)',
  gradientHover: 'oklch(0.54 0.16 240)',
  gradientText: 'oklch(0.58 0.18 240)',
  
  colors: {
    light: {
      background: 'oklch(0.99 0.002 240)',
      foreground: 'oklch(0.15 0.01 240)',
      card: 'oklch(0.98 0.005 240)',
      cardForeground: 'oklch(0.15 0.01 240)',
      popover: 'oklch(0.98 0.005 240)',
      popoverForeground: 'oklch(0.15 0.01 240)',
      primary: 'oklch(0.6 0.2 240)',
      primaryForeground: 'oklch(0.99 0.002 240)',
      secondary: 'oklch(0.88 0.008 240)',
      secondaryForeground: 'oklch(0.25 0.015 240)',
      muted: 'oklch(0.95 0.005 240)',
      mutedForeground: 'oklch(0.45 0.012 240)',
      accent: 'oklch(0.65 0.18 220)',
      accentForeground: 'oklch(0.99 0.002 240)',
      destructive: 'oklch(0.55 0.22 15)',
      destructiveForeground: 'oklch(0.99 0.002 240)',
      border: 'oklch(0.9 0.008 240)',
      input: 'oklch(0.9 0.008 240)',
      ring: 'oklch(0.6 0.2 240)',
      chart1: 'oklch(0.6 0.2 240)',
      chart2: 'oklch(0.65 0.18 220)',
      chart3: 'oklch(0.58 0.16 200)',
      chart4: 'oklch(0.62 0.14 260)',
      chart5: 'oklch(0.55 0.18 180)',
      sidebar: 'oklch(0.98 0.005 240)',
      sidebarForeground: 'oklch(0.15 0.01 240)',
      sidebarPrimary: 'oklch(0.6 0.2 240)',
      sidebarPrimaryForeground: 'oklch(0.99 0.002 240)',
      sidebarAccent: 'oklch(0.95 0.005 240)',
      sidebarAccentForeground: 'oklch(0.45 0.012 240)',
      sidebarBorder: 'oklch(0.9 0.008 240)',
      sidebarRing: 'oklch(0.6 0.2 240)'
    },
    dark: {
      background: 'oklch(0.06 0.012 240)',
      foreground: 'oklch(0.94 0.006 240)',
      card: 'oklch(0.12 0.018 240)',
      cardForeground: 'oklch(0.94 0.006 240)',
      popover: 'oklch(0.12 0.018 240)',
      popoverForeground: 'oklch(0.94 0.006 240)',
      primary: 'oklch(0.65 0.18 240)',
      primaryForeground: 'oklch(0.06 0.012 240)',
      secondary: 'oklch(0.18 0.02 240)',
      secondaryForeground: 'oklch(0.88 0.008 240)',
      muted: 'oklch(0.15 0.015 240)',
      mutedForeground: 'oklch(0.72 0.01 240)',
      accent: 'oklch(0.7 0.16 220)',
      accentForeground: 'oklch(0.06 0.012 240)',
      destructive: 'oklch(0.65 0.2 15)',
      destructiveForeground: 'oklch(0.06 0.012 240)',
      border: 'oklch(0.22 0.015 240)',
      input: 'oklch(0.22 0.015 240)',
      ring: 'oklch(0.65 0.18 240)',
      chart1: 'oklch(0.65 0.18 240)',
      chart2: 'oklch(0.7 0.16 220)',
      chart3: 'oklch(0.68 0.14 200)',
      chart4: 'oklch(0.72 0.12 260)',
      chart5: 'oklch(0.6 0.16 180)',
      sidebar: 'oklch(0.12 0.018 240)',
      sidebarForeground: 'oklch(0.94 0.006 240)',
      sidebarPrimary: 'oklch(0.65 0.18 240)',
      sidebarPrimaryForeground: 'oklch(0.06 0.012 240)',
      sidebarAccent: 'oklch(0.15 0.015 240)',
      sidebarAccentForeground: 'oklch(0.72 0.01 240)',
      sidebarBorder: 'oklch(0.22 0.015 240)',
      sidebarRing: 'oklch(0.65 0.18 240)'
    }
  }
};

export default sky;