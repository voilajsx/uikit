/**
 * @fileoverview Sunset theme preset with OKLCH colors
 * @description Light and dark variants for a warm sunset-inspired theme
 * @package @voilajsx/uikit
 * @file /src/themes/presets/sunset.js
 */

/**
 * Sunset theme preset with warm oranges, pinks, and purples
 */
const sunsetTheme = {
  name: 'Sunset',
  id: 'sunset',

  light: {
    background: 'oklch(0.99 0.01 60)',
    foreground: 'oklch(0.2 0.03 50)',
    card: 'oklch(0.97 0.02 65)',
    cardForeground: 'oklch(0.2 0.03 50)',
    popover: 'oklch(0.97 0.02 65)',
    popoverForeground: 'oklch(0.2 0.03 50)',
    primary: 'oklch(0.65 0.28 35)', // Warm orange
    primaryForeground: 'oklch(0.99 0.01 60)',
    secondary: 'oklch(0.9 0.08 45)', // Light peach
    secondaryForeground: 'oklch(0.3 0.1 30)',
    muted: 'oklch(0.94 0.03 55)',
    mutedForeground: 'oklch(0.45 0.05 45)',
    accent: 'oklch(0.7 0.25 15)', // Deep magenta
    accentForeground: 'oklch(0.99 0.01 60)',
    destructive: 'oklch(0.6 0.28 30)',
    destructiveForeground: 'oklch(0.99 0.01 60)',
    border: 'oklch(0.85 0.05 50)',
    input: 'oklch(0.85 0.05 50)',
    ring: 'oklch(0.65 0.28 35)',
    chart1: 'oklch(0.65 0.28 35)', // Orange
    chart2: 'oklch(0.7 0.25 15)', // Magenta
    chart3: 'oklch(0.6 0.2 70)', // Pink
    chart4: 'oklch(0.7 0.15 90)', // Purple
    chart5: 'oklch(0.5 0.2 25)', // Deep orange
    sidebar: 'oklch(0.97 0.02 65)',
    sidebarForeground: 'oklch(0.2 0.03 50)',
    sidebarPrimary: 'oklch(0.65 0.28 35)',
    sidebarPrimaryForeground: 'oklch(0.99 0.01 60)',
    sidebarAccent: 'oklch(0.94 0.03 55)',
    sidebarAccentForeground: 'oklch(0.2 0.03 50)',
    sidebarBorder: 'oklch(0.85 0.05 50)',
    sidebarRing: 'oklch(0.65 0.28 35)',
  },

  dark: {
    background: 'oklch(0.1 0.05 30)',
    foreground: 'oklch(0.95 0.03 60)',
    card: 'oklch(0.13 0.06 35)',
    cardForeground: 'oklch(0.95 0.03 60)',
    popover: 'oklch(0.13 0.06 35)',
    popoverForeground: 'oklch(0.95 0.03 60)',
    primary: 'oklch(0.7 0.3 35)', // Bright orange
    primaryForeground: 'oklch(0.1 0.03 30)',
    secondary: 'oklch(0.25 0.1 40)', // Deep purple-brown
    secondaryForeground: 'oklch(0.95 0.03 60)',
    muted: 'oklch(0.2 0.06 35)',
    mutedForeground: 'oklch(0.7 0.06 50)',
    accent: 'oklch(0.6 0.25 15)', // Deeper magenta
    accentForeground: 'oklch(0.95 0.03 60)',
    destructive: 'oklch(0.5 0.25 30)',
    destructiveForeground: 'oklch(0.95 0.03 60)',
    border: 'oklch(0.3 0.07 35)',
    input: 'oklch(0.3 0.07 35)',
    ring: 'oklch(0.7 0.3 35)',
    chart1: 'oklch(0.7 0.3 35)', // Bright orange
    chart2: 'oklch(0.6 0.25 15)', // Magenta
    chart3: 'oklch(0.65 0.2 70)', // Pink
    chart4: 'oklch(0.7 0.2 90)', // Purple
    chart5: 'oklch(0.6 0.2 25)', // Deep orange
    sidebar: 'oklch(0.13 0.06 35)',
    sidebarForeground: 'oklch(0.95 0.03 60)',
    sidebarPrimary: 'oklch(0.7 0.3 35)',
    sidebarPrimaryForeground: 'oklch(0.1 0.03 30)',
    sidebarAccent: 'oklch(0.2 0.06 35)',
    sidebarAccentForeground: 'oklch(0.95 0.03 60)',
    sidebarBorder: 'oklch(0.3 0.07 35)',
    sidebarRing: 'oklch(0.7 0.3 35)',
  },
};

export default sunsetTheme;
