/**
 * @fileoverview Forest theme preset with OKLCH colors
 * @description Light and dark variants for a forest-inspired theme
 * @package @voilajsx/uikit
 * @file /src/themes/presets/forest.js
 */

/**
 * Forest theme preset using OKLCH color space
 * To use: Import and register in your application
 */
const forestTheme = {
  name: 'Forest',
  id: 'forest',

  light: {
    background: 'oklch(0.98 0.01 140)',
    foreground: 'oklch(0.2 0.03 145)',
    card: 'oklch(0.96 0.02 140)',
    cardForeground: 'oklch(0.2 0.03 145)',
    popover: 'oklch(0.96 0.02 140)',
    popoverForeground: 'oklch(0.2 0.03 145)',
    primary: 'oklch(0.45 0.15 145)',
    primaryForeground: 'oklch(0.98 0.005 140)',
    secondary: 'oklch(0.9 0.06 135)',
    secondaryForeground: 'oklch(0.3 0.08 140)',
    muted: 'oklch(0.93 0.02 140)',
    mutedForeground: 'oklch(0.5 0.03 145)',
    accent: 'oklch(0.6 0.12 100)',
    accentForeground: 'oklch(0.98 0.005 140)',
    destructive: 'oklch(0.57 0.25 30)',
    destructiveForeground: 'oklch(0.98 0.005 140)',
    border: 'oklch(0.85 0.03 140)',
    input: 'oklch(0.85 0.03 140)',
    ring: 'oklch(0.45 0.15 145)',
    chart1: 'oklch(0.45 0.15 145)',
    chart2: 'oklch(0.5 0.12 100)',
    chart3: 'oklch(0.35 0.15 135)',
    chart4: 'oklch(0.6 0.14 165)',
    chart5: 'oklch(0.55 0.16 120)',
  },

  dark: {
    background: 'oklch(0.1 0.04 145)',
    foreground: 'oklch(0.95 0.02 140)',
    card: 'oklch(0.13 0.04 145)',
    cardForeground: 'oklch(0.95 0.02 140)',
    popover: 'oklch(0.13 0.04 145)',
    popoverForeground: 'oklch(0.95 0.02 140)',
    primary: 'oklch(0.55 0.2 145)',
    primaryForeground: 'oklch(0.1 0.02 145)',
    secondary: 'oklch(0.22 0.08 140)',
    secondaryForeground: 'oklch(0.95 0.02 140)',
    muted: 'oklch(0.2 0.05 145)',
    mutedForeground: 'oklch(0.7 0.05 140)',
    accent: 'oklch(0.45 0.15 100)',
    accentForeground: 'oklch(0.95 0.02 140)',
    destructive: 'oklch(0.43 0.16 30)',
    destructiveForeground: 'oklch(0.95 0.02 140)',
    border: 'oklch(0.25 0.06 145)',
    input: 'oklch(0.25 0.06 145)',
    ring: 'oklch(0.55 0.2 145)',
    chart1: 'oklch(0.55 0.2 145)',
    chart2: 'oklch(0.5 0.18 100)',
    chart3: 'oklch(0.4 0.15 135)',
    chart4: 'oklch(0.6 0.18 165)',
    chart5: 'oklch(0.65 0.16 120)',
  },
};

export default forestTheme;
