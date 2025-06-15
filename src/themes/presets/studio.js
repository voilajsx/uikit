/**
 * @fileoverview Studio theme preset with designer professional colors
 * @description Light and dark variants for a sophisticated creative theme
 * @package @voilajsx/uikit
 * @file /src/themes/presets/studio.js
 */

/**
 * Studio theme - sophisticated designer grays with strategic color accents
 * Perfect for creative tools, design applications, and professional portfolios
 */
const studioTheme = {
  name: 'Studio',
  id: 'studio',

  light: {
    background: 'oklch(0.99 0.001 270)',
    foreground: 'oklch(0.08 0.005 270)',
    card: 'oklch(0.98 0.002 270)',
    cardForeground: 'oklch(0.08 0.005 270)',
    popover: 'oklch(0.98 0.002 270)',
    popoverForeground: 'oklch(0.08 0.005 270)',
    primary: 'oklch(0.32 0.02 270)', // Studio charcoal
    primaryForeground: 'oklch(0.98 0.002 270)',
    secondary: 'oklch(0.85 0.003 270)', // 10% darker - was 0.95, now 0.85
    secondaryForeground: 'oklch(0.15 0.008 270)',
    muted: 'oklch(0.97 0.002 270)',
    mutedForeground: 'oklch(0.38 0.005 270)',
    accent: 'oklch(0.65 0.15 45)', // 10% lighter - was 0.55, now 0.65
    accentForeground: 'oklch(0.98 0.002 270)',
    destructive: 'oklch(0.45 0.25 25)',
    destructiveForeground: 'oklch(0.98 0.002 270)',
    border: 'oklch(0.9 0.003 270)',
    input: 'oklch(0.9 0.003 270)',
    ring: 'oklch(0.32 0.02 270)',
    chart1: 'oklch(0.32 0.02 270)', // Studio charcoal
    chart2: 'oklch(0.65 0.15 45)', // Updated creative amber (lighter)
    chart3: 'oklch(0.45 0.12 200)', // Designer teal
    chart4: 'oklch(0.5 0.1 320)', // Creative magenta
    chart5: 'oklch(0.4 0.08 120)', // Studio green
  },

  dark: {
    background: 'oklch(0.05 0.003 270)', // Professional dark background
    foreground: 'oklch(0.95 0.005 270)', // Clean foreground
    card: 'oklch(0.15 0.01 270)', // Much more visible cards - increased visibility
    cardForeground: 'oklch(0.95 0.005 270)',
    popover: 'oklch(0.15 0.01 270)', // Match card visibility
    popoverForeground: 'oklch(0.95 0.005 270)',
    primary: 'oklch(0.60 0.08 260)', // Professional purple-blue - sophisticated and modern
    primaryForeground: 'oklch(0.98 0.003 270)',
    secondary: 'oklch(0.02 0.008 270)', // 10% darker - was 0.12, now 0.02
    secondaryForeground: 'oklch(0.94 0.005 270)',
    muted: 'oklch(0.08 0.006 270)',
    mutedForeground: 'oklch(0.74 0.005 270)',
    accent: 'oklch(0.85 0.18 45)', // 10% lighter - was 0.75, now 0.85
    accentForeground: 'oklch(0.04 0.005 270)',
    destructive: 'oklch(0.65 0.25 25)',
    destructiveForeground: 'oklch(0.04 0.005 270)',
    border: 'oklch(0.18 0.008 270)',
    input: 'oklch(0.18 0.008 270)',
    ring: 'oklch(0.60 0.08 260)', // Match professional primary
    chart1: 'oklch(0.60 0.08 260)', // Professional purple-blue
    chart2: 'oklch(0.85 0.18 45)', // Updated bright creative amber (lighter)
    chart3: 'oklch(0.7 0.15 200)', // Bright designer teal
    chart4: 'oklch(0.72 0.12 320)', // Bright creative magenta
    chart5: 'oklch(0.68 0.1 120)', // Bright studio green
  },
};

export default studioTheme;
