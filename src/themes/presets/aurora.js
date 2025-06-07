/**
 * @fileoverview Aurora theme preset with northern lights inspiration
 * @description Light and dark variants for a magical, elegant theme
 * @package @voilajsx/uikit
 * @file /src/themes/presets/aurora.js
 */

/**
 * Aurora theme - inspired by the northern lights with purple-green gradients
 * Perfect for creative, elegant, and sophisticated applications
 */
const auroraTheme = {
  name: 'Aurora',
  id: 'aurora',

  light: {
    background: 'oklch(0.99 0.003 300)',
    foreground: 'oklch(0.12 0.015 300)',
    card: 'oklch(0.97 0.005 300)',
    cardForeground: 'oklch(0.12 0.015 300)',
    popover: 'oklch(0.97 0.005 300)',
    popoverForeground: 'oklch(0.12 0.015 300)',
    primary: 'oklch(0.48 0.2 290)', // Aurora purple
    primaryForeground: 'oklch(0.98 0.003 300)',
    secondary: 'oklch(0.91 0.012 300)', // Soft lavender
    secondaryForeground: 'oklch(0.18 0.02 300)',
    muted: 'oklch(0.94 0.008 300)',
    mutedForeground: 'oklch(0.34 0.015 300)',
    accent: 'oklch(0.52 0.18 150)', // Aurora green
    accentForeground: 'oklch(0.98 0.003 300)',
    destructive: 'oklch(0.45 0.25 25)',
    destructiveForeground: 'oklch(0.98 0.003 300)',
    border: 'oklch(0.86 0.01 300)',
    input: 'oklch(0.86 0.01 300)',
    ring: 'oklch(0.48 0.2 290)',
    chart1: 'oklch(0.48 0.2 290)', // Aurora purple
    chart2: 'oklch(0.52 0.18 150)', // Aurora green
    chart3: 'oklch(0.55 0.22 200)', // Aurora blue
    chart4: 'oklch(0.6 0.15 320)', // Aurora pink
    chart5: 'oklch(0.5 0.16 120)', // Aurora mint
  },

  dark: {
    background: 'oklch(0.05 0.015 300)',
    foreground: 'oklch(0.95 0.008 300)',
    card: 'oklch(0.07 0.02 300)',
    cardForeground: 'oklch(0.95 0.008 300)',
    popover: 'oklch(0.07 0.02 300)',
    popoverForeground: 'oklch(0.95 0.008 300)',
    primary: 'oklch(0.72 0.25 290)', // Bright aurora purple
    primaryForeground: 'oklch(0.05 0.015 300)',
    secondary: 'oklch(0.16 0.02 300)',
    secondaryForeground: 'oklch(0.92 0.01 300)',
    muted: 'oklch(0.1 0.015 300)',
    mutedForeground: 'oklch(0.76 0.012 300)',
    accent: 'oklch(0.75 0.22 150)', // Bright aurora green
    accentForeground: 'oklch(0.05 0.015 300)',
    destructive: 'oklch(0.65 0.25 25)',
    destructiveForeground: 'oklch(0.05 0.015 300)',
    border: 'oklch(0.2 0.02 300)',
    input: 'oklch(0.2 0.02 300)',
    ring: 'oklch(0.72 0.25 290)',
    chart1: 'oklch(0.72 0.25 290)', // Bright aurora purple
    chart2: 'oklch(0.75 0.22 150)', // Bright aurora green
    chart3: 'oklch(0.7 0.25 200)', // Bright aurora blue
    chart4: 'oklch(0.78 0.2 320)', // Bright aurora pink
    chart5: 'oklch(0.73 0.2 120)', // Bright aurora mint
  },
};

export default auroraTheme;
