/**
 * Mango theme preset - tropical yellows and vibrant greens
 * @description Fresh, energetic theme with mango yellow and tropical green accents
 * @package demo-theme
 * @file demo/src/themes/mango.js
 */

/**
 * Mango theme preset - tropical and energetic design with yellow-green palette
 * Perfect for food apps, lifestyle brands, and energetic applications
 */
const mangoTheme = {
  id: 'mango',
  name: 'Mango',
  description:
    'Tropical mango theme with vibrant yellows and fresh greens for energetic applications',

  // Enhanced design tokens
  design: {
    fontPrimary: "'Poppins', 'system-ui', sans-serif",
    fontDisplay: "'Fredoka One', 'Poppins', sans-serif",
    radiusEnhance: '1rem',
    spacingEnhance: '1.1',
    shadowEnhance: '0 8px 25px rgb(45 100% 50% / 0.15), 0 3px 10px rgb(45 100% 50% / 0.1)',
    gradientPrimary: 'linear-gradient(135deg, oklch(0.75 0.15 80) 0%, oklch(0.65 0.18 140) 100%)',
    gradientSubtle: 'linear-gradient(135deg, oklch(0.75 0.15 80 / 0.1) 0%, oklch(0.65 0.18 140 / 0.05) 100%)',
    gradientHover: 'linear-gradient(135deg, oklch(0.75 0.15 80 / 0.9) 0%, oklch(0.65 0.18 140 / 0.9) 100%)',
    gradientText: 'linear-gradient(135deg, oklch(0.75 0.15 80) 0%, oklch(0.65 0.18 140) 100%)',
  },

  light: {
    // Base colors - warm cream background
    background: 'oklch(0.98 0.02 80)',
    foreground: 'oklch(0.15 0.03 80)',
    card: 'oklch(0.96 0.03 80)',
    cardForeground: 'oklch(0.15 0.03 80)',
    popover: 'oklch(0.96 0.03 80)',
    popoverForeground: 'oklch(0.15 0.03 80)',

    // Interactive colors - mango yellow primary
    primary: 'oklch(0.75 0.15 80)', // Vibrant mango yellow
    primaryForeground: 'oklch(0.98 0.02 80)',
    secondary: 'oklch(0.88 0.08 80)', // Soft mango
    secondaryForeground: 'oklch(0.25 0.05 80)',
    muted: 'oklch(0.92 0.04 80)',
    mutedForeground: 'oklch(0.45 0.06 80)',
    accent: 'oklch(0.65 0.18 140)', // Fresh green accent
    accentForeground: 'oklch(0.98 0.02 80)',

    // State colors
    destructive: 'oklch(0.55 0.22 25)',
    destructiveForeground: 'oklch(0.98 0.02 80)',

    // Border colors
    border: 'oklch(0.85 0.06 80)',
    input: 'oklch(0.85 0.06 80)',
    ring: 'oklch(0.75 0.15 80)',

    // Chart colors - tropical palette
    chart1: 'oklch(0.75 0.15 80)', // Mango yellow
    chart2: 'oklch(0.65 0.18 140)', // Fresh green
    chart3: 'oklch(0.70 0.16 110)', // Lime green
    chart4: 'oklch(0.60 0.20 160)', // Deep green
    chart5: 'oklch(0.80 0.12 60)', // Golden yellow

    // Sidebar colors
    sidebar: 'oklch(0.96 0.03 80)',
    sidebarForeground: 'oklch(0.15 0.03 80)',
    sidebarPrimary: 'oklch(0.75 0.15 80)',
    sidebarPrimaryForeground: 'oklch(0.98 0.02 80)',
    sidebarAccent: 'oklch(0.92 0.04 80)',
    sidebarAccentForeground: 'oklch(0.45 0.06 80)',
    sidebarBorder: 'oklch(0.85 0.06 80)',
    sidebarRing: 'oklch(0.75 0.15 80)',
  },

  dark: {
    // Base colors - deep forest dark
    background: 'oklch(0.08 0.02 140)',
    foreground: 'oklch(0.95 0.03 80)',
    card: 'oklch(0.12 0.03 140)',
    cardForeground: 'oklch(0.95 0.03 80)',
    popover: 'oklch(0.12 0.03 140)',
    popoverForeground: 'oklch(0.95 0.03 80)',

    // Interactive colors - bright mango in dark mode
    primary: 'oklch(0.80 0.12 80)', // Bright mango yellow
    primaryForeground: 'oklch(0.10 0.02 140)',
    secondary: 'oklch(0.18 0.04 140)',
    secondaryForeground: 'oklch(0.88 0.04 80)',
    muted: 'oklch(0.15 0.03 140)',
    mutedForeground: 'oklch(0.70 0.05 80)',
    accent: 'oklch(0.75 0.20 140)', // Bright tropical green
    accentForeground: 'oklch(0.10 0.02 140)',

    // State colors
    destructive: 'oklch(0.65 0.25 25)',
    destructiveForeground: 'oklch(0.08 0.02 140)',

    // Border colors
    border: 'oklch(0.25 0.04 140)',
    input: 'oklch(0.25 0.04 140)',
    ring: 'oklch(0.80 0.12 80)',

    // Chart colors - bright tropical palette for dark mode
    chart1: 'oklch(0.80 0.12 80)', // Bright mango
    chart2: 'oklch(0.75 0.20 140)', // Bright green
    chart3: 'oklch(0.78 0.18 110)', // Bright lime
    chart4: 'oklch(0.70 0.22 160)', // Deep bright green
    chart5: 'oklch(0.85 0.10 60)', // Golden bright yellow

    // Sidebar colors
    sidebar: 'oklch(0.12 0.03 140)',
    sidebarForeground: 'oklch(0.95 0.03 80)',
    sidebarPrimary: 'oklch(0.80 0.12 80)',
    sidebarPrimaryForeground: 'oklch(0.10 0.02 140)',
    sidebarAccent: 'oklch(0.15 0.03 140)',
    sidebarAccentForeground: 'oklch(0.70 0.05 80)',
    sidebarBorder: 'oklch(0.25 0.04 140)',
    sidebarRing: 'oklch(0.80 0.12 80)',
  },
};

export default mangoTheme;