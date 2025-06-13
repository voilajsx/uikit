/**
 * @fileoverview Navy theme preset with navy blue primary and yellow accent
 * @description Light and dark variants for a professional naval-inspired theme
 * @package @voilajsx/uikit
 * @file /src/themes/presets/navy.js
 */

/**
 * Navy theme - professional navy blue with bright yellow accents
 * Perfect for corporate, maritime, and professional applications
 */
const navyTheme = {
  name: 'Navy',
  id: 'navy',

  light: {
    background: 'oklch(0.99 0.005 240)',
    foreground: 'oklch(0.15 0.02 240)',
    card: 'oklch(0.97 0.008 240)',
    cardForeground: 'oklch(0.15 0.02 240)',
    popover: 'oklch(0.97 0.008 240)',
    popoverForeground: 'oklch(0.15 0.02 240)',
    primary: 'oklch(0.25 0.18 240)', // Deep navy blue
    primaryForeground: 'oklch(0.98 0.005 240)',
    secondary: 'oklch(0.92 0.015 240)', // Light blue-gray
    secondaryForeground: 'oklch(0.22 0.025 240)',
    muted: 'oklch(0.95 0.01 240)',
    mutedForeground: 'oklch(0.4 0.02 240)',
    accent: 'oklch(0.75 0.15 85)', // Bright yellow
    accentForeground: 'oklch(0.15 0.02 240)',
    destructive: 'oklch(0.55 0.25 25)',
    destructiveForeground: 'oklch(0.98 0.005 240)',
    border: 'oklch(0.85 0.015 240)',
    input: 'oklch(0.85 0.015 240)',
    ring: 'oklch(0.25 0.18 240)',
    chart1: 'oklch(0.25 0.18 240)', // Navy blue
    chart2: 'oklch(0.75 0.15 85)', // Bright yellow
    chart3: 'oklch(0.45 0.15 200)', // Steel blue
    chart4: 'oklch(0.35 0.12 260)', // Deep blue
    chart5: 'oklch(0.65 0.12 65)', // Gold
  },

  dark: {
    background: 'oklch(0.08 0.02 240)',
    foreground: 'oklch(0.95 0.01 240)',
    card: 'oklch(0.1 0.025 240)',
    cardForeground: 'oklch(0.95 0.01 240)',
    popover: 'oklch(0.1 0.025 240)',
    popoverForeground: 'oklch(0.95 0.01 240)',
    primary: 'oklch(0.6 0.22 240)', // Bright navy blue
    primaryForeground: 'oklch(0.08 0.02 240)',
    secondary: 'oklch(0.18 0.025 240)',
    secondaryForeground: 'oklch(0.9 0.015 240)',
    muted: 'oklch(0.12 0.02 240)',
    mutedForeground: 'oklch(0.75 0.015 240)',
    accent: 'oklch(0.85 0.18 85)', // Bright yellow
    accentForeground: 'oklch(0.08 0.02 240)',
    destructive: 'oklch(0.65 0.28 25)',
    destructiveForeground: 'oklch(0.08 0.02 240)',
    border: 'oklch(0.22 0.025 240)',
    input: 'oklch(0.22 0.025 240)',
    ring: 'oklch(0.6 0.22 240)',
    chart1: 'oklch(0.6 0.22 240)', // Bright navy blue
    chart2: 'oklch(0.85 0.18 85)', // Bright yellow
    chart3: 'oklch(0.65 0.18 200)', // Bright steel blue
    chart4: 'oklch(0.55 0.15 260)', // Medium blue
    chart5: 'oklch(0.8 0.15 65)', // Bright gold
  },
};

export default navyTheme;
