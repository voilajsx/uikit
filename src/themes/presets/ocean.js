/**
 * @fileoverview Ocean theme preset
 * @description Light and dark variants for the ocean theme
 * @package @voilajsx/uikit
 */

/**
 * Ocean theme definition
 */
const oceanTheme = {
  name: 'Ocean',
  id: 'ocean',

  light: {
    background: 'oklch(0.98 0.008 210)',
    foreground: 'oklch(0.15 0.025 215)',
    card: 'oklch(0.96 0.008 210)',
    cardForeground: 'oklch(0.15 0.025 215)',
    popover: 'oklch(0.96 0.008 210)',
    popoverForeground: 'oklch(0.15 0.025 215)',
    primary: 'oklch(0.5 0.2 198)',
    primaryForeground: 'oklch(1 0 0)',
    secondary: 'oklch(0.92 0.05 185)',
    secondaryForeground: 'oklch(0.25 0.08 190)',
    muted: 'oklch(0.92 0.01 210)',
    mutedForeground: 'oklch(0.45 0.03 215)',
    accent: 'oklch(0.5 0.15 195)',
    accentForeground: 'oklch(1 0 0)',
    destructive: 'oklch(0.577 0.245 27.325)',
    destructiveForeground: 'oklch(0.98 0.004 106.418)',
    border: 'oklch(0.88 0.02 185)',
    input: 'oklch(0.88 0.02 185)',
    ring: 'oklch(0.5 0.2 198)',
  },

  dark: {
    background: 'oklch(0.12 0.05 215)',
    foreground: 'oklch(0.98 0.004 210)',
    card: 'oklch(0.1 0.05 215)',
    cardForeground: 'oklch(0.98 0.004 210)',
    popover: 'oklch(0.1 0.05 215)',
    popoverForeground: 'oklch(0.98 0.004 210)',
    primary: 'oklch(0.6 0.25 198)',
    primaryForeground: 'oklch(1 0 0)',
    secondary: 'oklch(0.2 0.08 195)',
    secondaryForeground: 'oklch(0.98 0.004 210)',
    muted: 'oklch(0.2 0.04 215)',
    mutedForeground: 'oklch(0.8 0.04 210)',
    accent: 'oklch(0.5 0.15 195)',
    accentForeground: 'oklch(1 0 0)',
    destructive: 'oklch(0.319 0.128 27.325)',
    destructiveForeground: 'oklch(0.98 0.004 210)',
    border: 'oklch(0.25 0.06 215)',
    input: 'oklch(0.25 0.06 215)',
    ring: 'oklch(0.6 0.25 198)',
  },
};

export default oceanTheme;
