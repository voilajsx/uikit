/**
 * Neon theme preset - electric cyberpunk colors
 * @description High-tech, electric theme perfect for gaming, tech, and modern creative applications
 * @package @voilajsx/uikit
 * @file /src/themes/presets/neon.js
 */

/**
 * Neon theme preset - electric cyberpunk design with glowing accents
 * Perfect for gaming, tech, and modern creative applications
 */
const neonTheme = {
  id: 'neon',
  name: 'Neon',
  description:
    'Electric cyberpunk theme with glowing accents for gaming and high-tech applications',

  light: {
    // Base colors
    background: 'oklch(0.99 0.005 280)',
    foreground: 'oklch(0.12 0.02 280)',
    card: 'oklch(0.97 0.008 280)',
    cardForeground: 'oklch(0.12 0.02 280)',
    popover: 'oklch(0.97 0.008 280)',
    popoverForeground: 'oklch(0.12 0.02 280)',

    // Interactive colors
    primary: 'oklch(0.45 0.28 320)', // Electric magenta
    primaryForeground: 'oklch(0.98 0.005 280)',
    secondary: 'oklch(0.82 0.015 280)',
    secondaryForeground: 'oklch(0.18 0.025 280)',
    muted: 'oklch(0.95 0.01 280)',
    mutedForeground: 'oklch(0.35 0.02 280)',
    accent: 'oklch(0.65 0.25 180)', // Electric cyan
    accentForeground: 'oklch(0.98 0.005 280)',

    // State colors
    destructive: 'oklch(0.45 0.3 15)',
    destructiveForeground: 'oklch(0.98 0.005 280)',

    // Border colors
    border: 'oklch(0.85 0.015 280)',
    input: 'oklch(0.85 0.015 280)',
    ring: 'oklch(0.45 0.28 320)',

    // Chart colors
    chart1: 'oklch(0.45 0.28 320)', // Electric magenta
    chart2: 'oklch(0.65 0.25 180)', // Electric cyan
    chart3: 'oklch(0.5 0.3 280)', // Electric purple
    chart4: 'oklch(0.6 0.25 120)', // Electric green
    chart5: 'oklch(0.65 0.28 60)', // Electric yellow

    // Sidebar colors
    sidebar: 'oklch(0.97 0.008 280)',
    sidebarForeground: 'oklch(0.12 0.02 280)',
    sidebarPrimary: 'oklch(0.45 0.28 320)',
    sidebarPrimaryForeground: 'oklch(0.98 0.005 280)',
    sidebarAccent: 'oklch(0.95 0.01 280)',
    sidebarAccentForeground: 'oklch(0.35 0.02 280)',
    sidebarBorder: 'oklch(0.85 0.015 280)',
    sidebarRing: 'oklch(0.45 0.28 320)',
  },

  dark: {
    // Base colors
    background: 'oklch(0.04 0.015 280)',
    foreground: 'oklch(0.95 0.01 280)',
    card: 'oklch(0.15 0.02 280)',
    cardForeground: 'oklch(0.95 0.01 280)',
    popover: 'oklch(0.15 0.02 280)',
    popoverForeground: 'oklch(0.95 0.01 280)',

    // Interactive colors
    primary: 'oklch(0.55 0.18 300)', // Professional electric purple
    primaryForeground: 'oklch(0.98 0.005 280)',
    secondary: 'oklch(0.05 0.025 280)',
    secondaryForeground: 'oklch(0.9 0.015 280)',
    muted: 'oklch(0.08 0.02 280)',
    mutedForeground: 'oklch(0.78 0.015 280)',
    accent: 'oklch(0.9 0.3 180)', // Bright electric cyan
    accentForeground: 'oklch(0.03 0.02 280)',

    // State colors
    destructive: 'oklch(0.7 0.35 15)',
    destructiveForeground: 'oklch(0.03 0.02 280)',

    // Border colors
    border: 'oklch(0.2 0.025 280)',
    input: 'oklch(0.2 0.025 280)',
    ring: 'oklch(0.55 0.18 300)',

    // Chart colors
    chart1: 'oklch(0.55 0.18 300)', // Professional electric purple
    chart2: 'oklch(0.9 0.3 180)', // Bright electric cyan
    chart3: 'oklch(0.7 0.35 280)', // Bright electric purple
    chart4: 'oklch(0.75 0.3 120)', // Bright electric green
    chart5: 'oklch(0.8 0.32 60)', // Bright electric yellow

    // Sidebar colors
    sidebar: 'oklch(0.15 0.02 280)',
    sidebarForeground: 'oklch(0.95 0.01 280)',
    sidebarPrimary: 'oklch(0.55 0.18 300)',
    sidebarPrimaryForeground: 'oklch(0.98 0.005 280)',
    sidebarAccent: 'oklch(0.08 0.02 280)',
    sidebarAccentForeground: 'oklch(0.78 0.015 280)',
    sidebarBorder: 'oklch(0.2 0.025 280)',
    sidebarRing: 'oklch(0.55 0.18 300)',
  },
};

export default neonTheme;
