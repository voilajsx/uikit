/**
 * Ruby theme preset - sophisticated reds with golden accents
 * @description Premium red theme with rose accents perfect for luxury and premium brands
 * @package @voilajsx/uikit
 * @file /src/themes/presets/ruby.js
 */

/**
 * Ruby theme preset - sophisticated red with golden accents for premium brands
 * Perfect for luxury brands, premium applications, and elegant interfaces
 */
const rubyTheme = {
  id: 'ruby',
  name: 'Ruby',
  description:
    'Sophisticated red theme with golden accents for premium and luxury brand applications',

  // Flat Design Tokens - no gradients
  fontPrimary: "'Inter', system-ui, sans-serif",
  fontDisplay: "'Inter', system-ui, sans-serif",
  radiusEnhance: '0.5rem', // Standard radius
  spacingEnhance: 1, // Default spacing
  shadowEnhance: '0 1px 2px 0 rgb(0 0 0 / 0.05)', // Minimal shadow
  shadowLg: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  shadowXl: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',

  // No gradients - flat colors only
  gradientPrimary: 'oklch(0.48 0.18 20)',
  gradientSubtle: 'oklch(0.93 0.005 0)',
  gradientHover: 'oklch(0.44 0.16 20)',
  gradientText: 'oklch(0.48 0.18 20)',

  light: {
      // Base colors
      background: 'oklch(0.98 0.005 0)',
      foreground: 'oklch(0.12 0.01 0)',
      card: 'oklch(0.96 0.007 0)',
      cardForeground: 'oklch(0.12 0.01 0)',
      popover: 'oklch(0.96 0.007 0)',
      popoverForeground: 'oklch(0.12 0.01 0)',

      // Interactive colors
      primary: 'oklch(0.48 0.18 20)', // Ruby red
      primaryForeground: 'oklch(0.98 0.005 0)',
      secondary: 'oklch(0.8 0.005 0)',
      secondaryForeground: 'oklch(0.2 0.01 0)',
      muted: 'oklch(0.93 0.005 0)',
      mutedForeground: 'oklch(0.4 0.01 0)',
      accent: 'oklch(0.56 0.01 240)', // Accent gray
      accentForeground: 'oklch(0.98 0.005 0)',

      // State colors
      destructive: 'oklch(0.5 0.2 20)',
      destructiveForeground: 'oklch(0.98 0.005 0)',

      // Border colors
      border: 'oklch(0.85 0.005 0)',
      input: 'oklch(0.85 0.005 0)',
      ring: 'oklch(0.48 0.18 20)',

      // Chart colors
      chart1: 'oklch(0.48 0.18 20)', // Primary red
      chart2: 'oklch(0.56 0.01 240)', // Accent gray
      chart3: 'oklch(0.65 0.15 80)', // Vibrant yellow-green
      chart4: 'oklch(0.55 0.12 180)', // Cool blue
      chart5: 'oklch(0.7 0.1 300)', // Soft purple

      // Sidebar colors
      sidebar: 'oklch(0.96 0.007 0)',
      sidebarForeground: 'oklch(0.12 0.01 0)',
      sidebarPrimary: 'oklch(0.48 0.18 20)',
      sidebarPrimaryForeground: 'oklch(0.98 0.005 0)',
      sidebarAccent: 'oklch(0.93 0.005 0)',
      sidebarAccentForeground: 'oklch(0.4 0.01 0)',
      sidebarBorder: 'oklch(0.85 0.005 0)',
      sidebarRing: 'oklch(0.48 0.18 20)',
    },

  dark: {
      // Base colors
      background: 'oklch(0.05 0.003 0)',
      foreground: 'oklch(0.95 0.005 0)',
      card: 'oklch(0.15 0.01 0)',
      cardForeground: 'oklch(0.95 0.005 0)',
      popover: 'oklch(0.15 0.01 0)',
      popoverForeground: 'oklch(0.95 0.005 0)',

      // Interactive colors
      primary: 'oklch(0.58 0.15 15)', // Burgundy-red
      primaryForeground: 'oklch(0.98 0.003 0)',
      secondary: 'oklch(0.1 0.008 0)',
      secondaryForeground: 'oklch(0.85 0.005 0)',
      muted: 'oklch(0.15 0.005 0)',
      mutedForeground: 'oklch(0.7 0.01 0)',
      accent: 'oklch(0.7 0.01 240)', // Bright accent gray
      accentForeground: 'oklch(0.08 0.005 0)',

      // State colors
      destructive: 'oklch(0.7 0.3 20)',
      destructiveForeground: 'oklch(0.08 0.005 0)',

      // Border colors
      border: 'oklch(0.25 0.005 0)',
      input: 'oklch(0.25 0.005 0)',
      ring: 'oklch(0.58 0.15 15)',

      // Chart colors
      chart1: 'oklch(0.58 0.15 15)', // Burgundy-red
      chart2: 'oklch(0.7 0.01 240)', // Bright accent gray
      chart3: 'oklch(0.75 0.18 80)', // Brighter yellow-green
      chart4: 'oklch(0.68 0.15 180)', // Brighter cool blue
      chart5: 'oklch(0.8 0.12 300)', // Brighter soft purple

      // Sidebar colors
      sidebar: 'oklch(0.15 0.01 0)',
      sidebarForeground: 'oklch(0.95 0.005 0)',
      sidebarPrimary: 'oklch(0.58 0.15 15)',
      sidebarPrimaryForeground: 'oklch(0.98 0.003 0)',
      sidebarAccent: 'oklch(0.15 0.005 0)',
      sidebarAccentForeground: 'oklch(0.7 0.01 0)',
      sidebarBorder: 'oklch(0.25 0.005 0)',
      sidebarRing: 'oklch(0.58 0.15 15)',
    },
};

export default rubyTheme;