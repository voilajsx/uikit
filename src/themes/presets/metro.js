/**
 * @fileoverview Metro theme preset with clean transit-inspired design
 * @description Light and dark variants for a modern, systematic theme
 * @package @voilajsx/uikit
 * @file /src/themes/presets/metro.js
 */

/**
 * Metro theme - clean, systematic design inspired by modern transit systems
 * Perfect for dashboards, admin panels, and professional applications
 */
const metroTheme = {
  name: 'Metro',
  id: 'metro',

  light: {
    background: 'oklch(0.99 0.002 240)',
    foreground: 'oklch(0.09 0.01 240)',
    card: 'oklch(0.98 0.003 240)',
    cardForeground: 'oklch(0.09 0.01 240)',
    popover: 'oklch(0.98 0.003 240)',
    popoverForeground: 'oklch(0.09 0.01 240)',
    primary: 'oklch(0.35 0.08 240)', // Deep metro blue
    primaryForeground: 'oklch(0.98 0.003 240)',
    secondary: 'oklch(0.94 0.008 240)', // Light gray-blue
    secondaryForeground: 'oklch(0.15 0.015 240)',
    muted: 'oklch(0.96 0.005 240)',
    mutedForeground: 'oklch(0.35 0.01 240)',
    accent: 'oklch(0.45 0.12 200)', // Transit teal accent
    accentForeground: 'oklch(0.98 0.003 240)',
    destructive: 'oklch(0.45 0.25 25)',
    destructiveForeground: 'oklch(0.98 0.003 240)',
    border: 'oklch(0.88 0.008 240)',
    input: 'oklch(0.88 0.008 240)',
    ring: 'oklch(0.35 0.08 240)',
    chart1: 'oklch(0.35 0.08 240)', // Metro blue
    chart2: 'oklch(0.45 0.12 200)', // Transit teal
    chart3: 'oklch(0.5 0.1 160)', // Line green
    chart4: 'oklch(0.6 0.15 60)', // Warning amber
    chart5: 'oklch(0.45 0.25 25)', // Alert red
  },

  dark: {
    background: 'oklch(0.04 0.01 240)',
    foreground: 'oklch(0.98 0.005 240)',
    card: 'oklch(0.06 0.015 240)',
    cardForeground: 'oklch(0.98 0.005 240)',
    popover: 'oklch(0.06 0.015 240)',
    popoverForeground: 'oklch(0.98 0.005 240)',
    primary: 'oklch(0.7 0.15 240)', // Bright metro blue
    primaryForeground: 'oklch(0.04 0.01 240)',
    secondary: 'oklch(0.12 0.015 240)',
    secondaryForeground: 'oklch(0.95 0.008 240)',
    muted: 'oklch(0.08 0.01 240)',
    mutedForeground: 'oklch(0.75 0.01 240)',
    accent: 'oklch(0.65 0.18 200)', // Bright transit teal
    accentForeground: 'oklch(0.04 0.01 240)',
    destructive: 'oklch(0.65 0.25 25)',
    destructiveForeground: 'oklch(0.04 0.01 240)',
    border: 'oklch(0.18 0.015 240)',
    input: 'oklch(0.18 0.015 240)',
    ring: 'oklch(0.7 0.15 240)',
    chart1: 'oklch(0.7 0.15 240)', // Bright metro blue
    chart2: 'oklch(0.65 0.18 200)', // Bright transit teal
    chart3: 'oklch(0.7 0.15 160)', // Bright line green
    chart4: 'oklch(0.75 0.2 60)', // Bright warning amber
    chart5: 'oklch(0.65 0.25 25)', // Bright alert red
  },
};

export default metroTheme;
