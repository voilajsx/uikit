/**
 * @fileoverview Neon theme preset with electric cyberpunk colors
 * @description Light and dark variants for a high-tech, electric theme
 * @package @voilajsx/uikit
 * @file /src/themes/presets/neon.js
 */

/**
 * Neon theme - electric cyberpunk design with glowing accents
 * Perfect for gaming, tech, and modern creative applications
 */
const neonTheme = {
  name: 'Neon',
  id: 'neon',

  light: {
    background: 'oklch(0.99 0.005 280)',
    foreground: 'oklch(0.12 0.02 280)',
    card: 'oklch(0.97 0.008 280)',
    cardForeground: 'oklch(0.12 0.02 280)',
    popover: 'oklch(0.97 0.008 280)',
    popoverForeground: 'oklch(0.12 0.02 280)',
    primary: 'oklch(0.45 0.28 320)', // Electric magenta
    primaryForeground: 'oklch(0.98 0.005 280)',
    secondary: 'oklch(0.82 0.015 280)', // 10% darker - was 0.92, now 0.82
    secondaryForeground: 'oklch(0.18 0.025 280)',
    muted: 'oklch(0.95 0.01 280)',
    mutedForeground: 'oklch(0.35 0.02 280)',
    accent: 'oklch(0.65 0.25 180)', // 10% lighter - was 0.55, now 0.65
    accentForeground: 'oklch(0.98 0.005 280)',
    destructive: 'oklch(0.45 0.3 15)',
    destructiveForeground: 'oklch(0.98 0.005 280)',
    border: 'oklch(0.85 0.015 280)',
    input: 'oklch(0.85 0.015 280)',
    ring: 'oklch(0.45 0.28 320)',
    chart1: 'oklch(0.45 0.28 320)', // Electric magenta
    chart2: 'oklch(0.65 0.25 180)', // Updated electric cyan (lighter)
    chart3: 'oklch(0.5 0.3 280)', // Electric purple
    chart4: 'oklch(0.6 0.25 120)', // Electric green
    chart5: 'oklch(0.65 0.28 60)', // Electric yellow
  },

  dark: {
    background: 'oklch(0.04 0.015 280)', // Professional dark with subtle purple tint
    foreground: 'oklch(0.95 0.01 280)', // Clean light foreground
    card: 'oklch(0.15 0.02 280)', // Much more visible cards - increased visibility
    cardForeground: 'oklch(0.95 0.01 280)',
    popover: 'oklch(0.15 0.02 280)', // Match card visibility
    popoverForeground: 'oklch(0.95 0.01 280)',
    primary: 'oklch(0.55 0.18 300)', // Professional electric purple - toned down but still vibrant
    primaryForeground: 'oklch(0.98 0.005 280)',
    secondary: 'oklch(0.05 0.025 280)', // 10% darker - was 0.15, now 0.05
    secondaryForeground: 'oklch(0.9 0.015 280)',
    muted: 'oklch(0.08 0.02 280)',
    mutedForeground: 'oklch(0.78 0.015 280)',
    accent: 'oklch(0.9 0.3 180)', // 10% lighter - was 0.8, now 0.9
    accentForeground: 'oklch(0.03 0.02 280)',
    destructive: 'oklch(0.7 0.35 15)',
    destructiveForeground: 'oklch(0.03 0.02 280)',
    border: 'oklch(0.2 0.025 280)',
    input: 'oklch(0.2 0.025 280)',
    ring: 'oklch(0.55 0.18 300)', // Match professional primary
    chart1: 'oklch(0.55 0.18 300)', // Professional electric purple
    chart2: 'oklch(0.9 0.3 180)', // Updated bright electric cyan (lighter)
    chart3: 'oklch(0.7 0.35 280)', // Bright electric purple
    chart4: 'oklch(0.75 0.3 120)', // Bright electric green
    chart5: 'oklch(0.8 0.32 60)', // Bright electric yellow
  },
};

export default neonTheme;
