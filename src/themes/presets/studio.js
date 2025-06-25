/**
 * Studio theme preset - sophisticated designer grays with strategic color accents
 * @description Professional creative theme for design tools and portfolios
 * @package @voilajsx/uikit
 * @file /src/themes/presets/studio.js
 */

/**
 * Studio theme preset - sophisticated designer grays with strategic color accents
 * Perfect for creative tools, design applications, and professional portfolios
 */
const studioTheme = {
  id: 'studio',
  name: 'Studio',
  description: 'Sophisticated designer grays with strategic color accents for creative professionals',

  light: {
    // Base colors
    background: 'oklch(0.99 0.001 270)',
    foreground: 'oklch(0.08 0.005 270)',
    card: 'oklch(0.98 0.002 270)',
    cardForeground: 'oklch(0.08 0.005 270)',
    popover: 'oklch(0.98 0.002 270)',
    popoverForeground: 'oklch(0.08 0.005 270)',
    
    // Interactive colors
    primary: 'oklch(0.32 0.02 270)', // Studio charcoal
    primaryForeground: 'oklch(0.98 0.002 270)',
    secondary: 'oklch(0.85 0.003 270)',
    secondaryForeground: 'oklch(0.15 0.008 270)',
    muted: 'oklch(0.97 0.002 270)',
    mutedForeground: 'oklch(0.38 0.005 270)',
    accent: 'oklch(0.65 0.15 45)', // Creative amber
    accentForeground: 'oklch(0.98 0.002 270)',
    
    // State colors
    destructive: 'oklch(0.45 0.25 25)',
    destructiveForeground: 'oklch(0.98 0.002 270)',
    
    // Border colors
    border: 'oklch(0.9 0.003 270)',
    input: 'oklch(0.9 0.003 270)',
    ring: 'oklch(0.32 0.02 270)',
    
    // Chart colors
    chart1: 'oklch(0.32 0.02 270)', // Studio charcoal
    chart2: 'oklch(0.65 0.15 45)',  // Creative amber
    chart3: 'oklch(0.45 0.12 200)', // Designer teal
    chart4: 'oklch(0.5 0.1 320)',   // Creative magenta
    chart5: 'oklch(0.4 0.08 120)',  // Studio green
    
    // Sidebar colors
    sidebar: 'oklch(0.98 0.002 270)',
    sidebarForeground: 'oklch(0.08 0.005 270)',
    sidebarPrimary: 'oklch(0.32 0.02 270)',
    sidebarPrimaryForeground: 'oklch(0.98 0.002 270)',
    sidebarAccent: 'oklch(0.97 0.002 270)',
    sidebarAccentForeground: 'oklch(0.38 0.005 270)',
    sidebarBorder: 'oklch(0.9 0.003 270)',
    sidebarRing: 'oklch(0.32 0.02 270)',
  },

  dark: {
    // Base colors
    background: 'oklch(0.05 0.003 270)',
    foreground: 'oklch(0.95 0.005 270)',
    card: 'oklch(0.15 0.01 270)',
    cardForeground: 'oklch(0.95 0.005 270)',
    popover: 'oklch(0.15 0.01 270)',
    popoverForeground: 'oklch(0.95 0.005 270)',
    
    // Interactive colors
    primary: 'oklch(0.60 0.08 260)', // Professional purple-blue
    primaryForeground: 'oklch(0.98 0.003 270)',
    secondary: 'oklch(0.02 0.008 270)',
    secondaryForeground: 'oklch(0.94 0.005 270)',
    muted: 'oklch(0.08 0.006 270)',
    mutedForeground: 'oklch(0.74 0.005 270)',
    accent: 'oklch(0.85 0.18 45)', // Bright creative amber
    accentForeground: 'oklch(0.04 0.005 270)',
    
    // State colors
    destructive: 'oklch(0.65 0.25 25)',
    destructiveForeground: 'oklch(0.04 0.005 270)',
    
    // Border colors
    border: 'oklch(0.18 0.008 270)',
    input: 'oklch(0.18 0.008 270)',
    ring: 'oklch(0.60 0.08 260)',
    
    // Chart colors
    chart1: 'oklch(0.60 0.08 260)', // Professional purple-blue
    chart2: 'oklch(0.85 0.18 45)',  // Bright creative amber
    chart3: 'oklch(0.7 0.15 200)',  // Bright designer teal
    chart4: 'oklch(0.72 0.12 320)', // Bright creative magenta
    chart5: 'oklch(0.68 0.1 120)',  // Bright studio green
    
    // Sidebar colors
    sidebar: 'oklch(0.15 0.01 270)',
    sidebarForeground: 'oklch(0.95 0.005 270)',
    sidebarPrimary: 'oklch(0.60 0.08 260)',
    sidebarPrimaryForeground: 'oklch(0.98 0.003 270)',
    sidebarAccent: 'oklch(0.08 0.006 270)',
    sidebarAccentForeground: 'oklch(0.74 0.005 270)',
    sidebarBorder: 'oklch(0.18 0.008 270)',
    sidebarRing: 'oklch(0.60 0.08 260)',
  },
};

export default studioTheme;