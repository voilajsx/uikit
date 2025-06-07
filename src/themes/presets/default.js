/**
 * @fileoverview Default theme preset with OKLCH colors
 * @description Light and dark variants for the default theme
 * @package @voilajsx/uikit
 * @file /src/themes/presets/default.js
 */

/**
 * Default theme preset
 */
const defaultTheme = {
  name: 'Default',
  id: 'default',

  light: {
    background: 'oklch(1 0 0)',
    foreground: 'oklch(0.147 0.004 49.25)',
    card: 'oklch(1 0 0)',
    cardForeground: 'oklch(0.147 0.004 49.25)',
    popover: 'oklch(1 0 0)',
    popoverForeground: 'oklch(0.147 0.004 49.25)',
    primary: 'oklch(0.216 0.006 56.043)',
    primaryForeground: 'oklch(0.985 0.001 106.423)',
    secondary: 'oklch(0.97 0.001 106.424)',
    secondaryForeground: 'oklch(0.216 0.006 56.043)',
    muted: 'oklch(0.97 0.001 106.424)',
    mutedForeground: 'oklch(0.553 0.013 58.071)',
    accent: 'oklch(0.97 0.001 106.424)',
    accentForeground: 'oklch(0.216 0.006 56.043)',
    destructive: 'oklch(0.577 0.245 27.325)',
    destructiveForeground: 'oklch(0.985 0.001 106.423)',
    border: 'oklch(0.923 0.003 48.717)',
    input: 'oklch(0.923 0.003 48.717)',
    ring: 'oklch(0.709 0.01 56.259)',
  },

  dark: {
    background: 'oklch(0.097 0.007 264.665)',
    foreground: 'oklch(0.98 0.004 106.418)',
    card: 'oklch(0.097 0.007 264.665)',
    cardForeground: 'oklch(0.98 0.004 106.418)',
    popover: 'oklch(0.097 0.007 264.665)',
    popoverForeground: 'oklch(0.98 0.004 106.418)',
    primary: 'oklch(0.6 0.18 240)',
    primaryForeground: 'oklch(0.095 0.007 264.665)',
    secondary: 'oklch(0.175 0.034 264.665)',
    secondaryForeground: 'oklch(0.98 0.004 106.418)',
    muted: 'oklch(0.175 0.034 264.665)',
    mutedForeground: 'oklch(0.652 0.086 264.665)',
    accent: 'oklch(0.175 0.034 264.665)',
    accentForeground: 'oklch(0.98 0.004 106.418)',
    destructive: 'oklch(0.319 0.128 27.325)',
    destructiveForeground: 'oklch(0.98 0.004 106.418)',
    border: 'oklch(0.175 0.034 264.665)',
    input: 'oklch(0.175 0.034 264.665)',
    ring: 'oklch(0.484 0.152 240)',
  },
};

export default defaultTheme;
