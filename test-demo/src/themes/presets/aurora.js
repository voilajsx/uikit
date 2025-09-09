/**
 * Aurora theme preset - northern lights inspiration with purple-green gradients
 * @description Magical, elegant theme perfect for creative and sophisticated applications
 * @package @voilajsx/uikit
 * @file /src/themes/presets/aurora.js
 */

/**
 * Aurora theme preset - inspired by the northern lights with purple-green gradients
 * Perfect for creative, elegant, and sophisticated applications
 */
const auroraTheme = {
  id: 'aurora',
  name: 'Aurora',
  description:
    'Magical northern lights theme with purple-green gradients for creative applications',

  // Enhanced design tokens
  design: {
    fontPrimary: "'Inter', system-ui, sans-serif",
    fontDisplay: "'Cal Sans', 'Inter', system-ui, sans-serif",
    radiusEnhance: '1.25rem',
    spacingEnhance: '1.4',
    shadowEnhance: '0 16px 48px rgb(0 0 0 / 0.12), 0 4px 16px rgb(0 0 0 / 0.08)',
    gradientPrimary: 'linear-gradient(135deg, oklch(0.45 0.15 290) 0%, oklch(0.55 0.12 150) 100%)',
    gradientSubtle: 'linear-gradient(135deg, oklch(0.45 0.15 290 / 0.08) 0%, oklch(0.55 0.12 150 / 0.04) 100%)',
    gradientHover: 'linear-gradient(135deg, oklch(0.45 0.15 290 / 0.85) 0%, oklch(0.55 0.12 150 / 0.85) 100%)',
    gradientText: 'linear-gradient(135deg, oklch(0.45 0.15 290) 0%, oklch(0.55 0.12 150) 100%)',
  },

  light: {
    // Base colors
    background: 'oklch(0.99 0.003 300)',
    foreground: 'oklch(0.12 0.015 300)',
    card: 'oklch(0.97 0.005 300)',
    cardForeground: 'oklch(0.12 0.015 300)',
    popover: 'oklch(0.97 0.005 300)',
    popoverForeground: 'oklch(0.12 0.015 300)',

    // Interactive colors
    primary: 'oklch(0.48 0.2 290)', // Aurora purple
    primaryForeground: 'oklch(0.98 0.003 300)',
    secondary: 'oklch(0.81 0.012 300)',
    secondaryForeground: 'oklch(0.18 0.02 300)',
    muted: 'oklch(0.94 0.008 300)',
    mutedForeground: 'oklch(0.34 0.015 300)',
    accent: 'oklch(0.62 0.18 150)', // Aurora green
    accentForeground: 'oklch(0.98 0.003 300)',

    // State colors
    destructive: 'oklch(0.45 0.25 25)',
    destructiveForeground: 'oklch(0.98 0.003 300)',

    // Border colors
    border: 'oklch(0.86 0.01 300)',
    input: 'oklch(0.86 0.01 300)',
    ring: 'oklch(0.48 0.2 290)',

    // Chart colors
    chart1: 'oklch(0.48 0.2 290)', // Aurora purple
    chart2: 'oklch(0.62 0.18 150)', // Aurora green
    chart3: 'oklch(0.55 0.22 200)', // Aurora blue
    chart4: 'oklch(0.6 0.15 320)', // Aurora pink
    chart5: 'oklch(0.5 0.16 120)', // Aurora mint

    // Sidebar colors
    sidebar: 'oklch(0.97 0.005 300)',
    sidebarForeground: 'oklch(0.12 0.015 300)',
    sidebarPrimary: 'oklch(0.48 0.2 290)',
    sidebarPrimaryForeground: 'oklch(0.98 0.003 300)',
    sidebarAccent: 'oklch(0.94 0.008 300)',
    sidebarAccentForeground: 'oklch(0.34 0.015 300)',
    sidebarBorder: 'oklch(0.86 0.01 300)',
    sidebarRing: 'oklch(0.48 0.2 290)',
  },

  dark: {
    // Base colors
    background: 'oklch(0.04 0.01 300)',
    foreground: 'oklch(0.95 0.008 300)',
    card: 'oklch(0.15 0.015 300)',
    cardForeground: 'oklch(0.95 0.008 300)',
    popover: 'oklch(0.15 0.015 300)',
    popoverForeground: 'oklch(0.95 0.008 300)',

    // Interactive colors
    primary: 'oklch(0.58 0.12 280)', // Professional aurora purple
    primaryForeground: 'oklch(0.98 0.005 300)',
    secondary: 'oklch(0.06 0.02 300)',
    secondaryForeground: 'oklch(0.92 0.01 300)',
    muted: 'oklch(0.1 0.015 300)',
    mutedForeground: 'oklch(0.76 0.012 300)',
    accent: 'oklch(0.85 0.22 150)', // Bright aurora green
    accentForeground: 'oklch(0.05 0.015 300)',

    // State colors
    destructive: 'oklch(0.65 0.25 25)',
    destructiveForeground: 'oklch(0.05 0.015 300)',

    // Border colors
    border: 'oklch(0.2 0.02 300)',
    input: 'oklch(0.2 0.02 300)',
    ring: 'oklch(0.58 0.12 280)',

    // Chart colors
    chart1: 'oklch(0.58 0.12 280)', // Professional aurora purple
    chart2: 'oklch(0.85 0.22 150)', // Bright aurora green
    chart3: 'oklch(0.7 0.25 200)', // Bright aurora blue
    chart4: 'oklch(0.78 0.2 320)', // Bright aurora pink
    chart5: 'oklch(0.73 0.2 120)', // Bright aurora mint

    // Sidebar colors
    sidebar: 'oklch(0.15 0.015 300)',
    sidebarForeground: 'oklch(0.95 0.008 300)',
    sidebarPrimary: 'oklch(0.58 0.12 280)',
    sidebarPrimaryForeground: 'oklch(0.98 0.005 300)',
    sidebarAccent: 'oklch(0.1 0.015 300)',
    sidebarAccentForeground: 'oklch(0.76 0.012 300)',
    sidebarBorder: 'oklch(0.2 0.02 300)',
    sidebarRing: 'oklch(0.58 0.12 280)',
  },
};

export default auroraTheme;
