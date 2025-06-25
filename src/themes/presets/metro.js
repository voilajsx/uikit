/**
 * Metro theme preset - clean transit-inspired design
 * @description Modern, systematic theme inspired by transit systems for professional applications
 * @package @voilajsx/uikit
 * @file /src/themes/presets/metro.js
 */

/**
 * Metro theme preset - clean, systematic design inspired by modern transit systems
 * Perfect for dashboards, admin panels, and professional applications
 */
const metroTheme = {
  id: 'metro',
  name: 'Metro',
  description:
    'Clean, systematic design inspired by modern transit systems for professional applications',

  light: {
    // Base colors
    background: 'oklch(0.99 0.002 240)',
    foreground: 'oklch(0.09 0.01 240)',
    card: 'oklch(0.98 0.003 240)',
    cardForeground: 'oklch(0.09 0.01 240)',
    popover: 'oklch(0.98 0.003 240)',
    popoverForeground: 'oklch(0.09 0.01 240)',

    // Interactive colors
    primary: 'oklch(0.35 0.08 240)', // Deep metro blue
    primaryForeground: 'oklch(0.98 0.003 240)',
    secondary: 'oklch(0.84 0.008 240)',
    secondaryForeground: 'oklch(0.15 0.015 240)',
    muted: 'oklch(0.96 0.005 240)',
    mutedForeground: 'oklch(0.35 0.01 240)',
    accent: 'oklch(0.55 0.12 200)', // Transit teal
    accentForeground: 'oklch(0.98 0.003 240)',

    // State colors
    destructive: 'oklch(0.45 0.25 25)',
    destructiveForeground: 'oklch(0.98 0.003 240)',

    // Border colors
    border: 'oklch(0.88 0.008 240)',
    input: 'oklch(0.88 0.008 240)',
    ring: 'oklch(0.35 0.08 240)',

    // Chart colors
    chart1: 'oklch(0.35 0.08 240)', // Metro blue
    chart2: 'oklch(0.55 0.12 200)', // Transit teal
    chart3: 'oklch(0.5 0.1 160)', // Line green
    chart4: 'oklch(0.6 0.15 60)', // Warning amber
    chart5: 'oklch(0.45 0.25 25)', // Alert red

    // Sidebar colors
    sidebar: 'oklch(0.98 0.003 240)',
    sidebarForeground: 'oklch(0.09 0.01 240)',
    sidebarPrimary: 'oklch(0.35 0.08 240)',
    sidebarPrimaryForeground: 'oklch(0.98 0.003 240)',
    sidebarAccent: 'oklch(0.96 0.005 240)',
    sidebarAccentForeground: 'oklch(0.35 0.01 240)',
    sidebarBorder: 'oklch(0.88 0.008 240)',
    sidebarRing: 'oklch(0.35 0.08 240)',
  },

  dark: {
    // Base colors
    background: 'oklch(0.05 0.005 220)',
    foreground: 'oklch(0.95 0.01 220)',
    card: 'oklch(0.15 0.015 220)',
    cardForeground: 'oklch(0.95 0.01 220)',
    popover: 'oklch(0.15 0.015 220)',
    popoverForeground: 'oklch(0.95 0.01 220)',

    // Interactive colors
    primary: 'oklch(0.55 0.12 220)', // Professional blue
    primaryForeground: 'oklch(0.98 0.005 220)',
    secondary: 'oklch(0.02 0.015 240)',
    secondaryForeground: 'oklch(0.95 0.008 240)',
    muted: 'oklch(0.08 0.01 240)',
    mutedForeground: 'oklch(0.75 0.01 240)',
    accent: 'oklch(0.75 0.18 200)', // Bright transit teal
    accentForeground: 'oklch(0.04 0.01 240)',

    // State colors
    destructive: 'oklch(0.65 0.25 25)',
    destructiveForeground: 'oklch(0.04 0.01 240)',

    // Border colors
    border: 'oklch(0.18 0.015 240)',
    input: 'oklch(0.18 0.015 240)',
    ring: 'oklch(0.55 0.12 220)',

    // Chart colors
    chart1: 'oklch(0.55 0.12 220)', // Professional blue
    chart2: 'oklch(0.75 0.18 200)', // Bright transit teal
    chart3: 'oklch(0.7 0.15 160)', // Bright line green
    chart4: 'oklch(0.75 0.2 60)', // Bright warning amber
    chart5: 'oklch(0.65 0.25 25)', // Bright alert red

    // Sidebar colors
    sidebar: 'oklch(0.15 0.015 220)',
    sidebarForeground: 'oklch(0.95 0.01 220)',
    sidebarPrimary: 'oklch(0.55 0.12 220)',
    sidebarPrimaryForeground: 'oklch(0.98 0.005 220)',
    sidebarAccent: 'oklch(0.08 0.01 240)',
    sidebarAccentForeground: 'oklch(0.75 0.01 240)',
    sidebarBorder: 'oklch(0.18 0.015 240)',
    sidebarRing: 'oklch(0.55 0.12 220)',
  },
};

export default metroTheme;
