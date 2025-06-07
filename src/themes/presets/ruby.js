/**
 * @fileoverview Ruby theme preset with sophisticated reds
 * @description Light and dark variants for a premium red theme with rose accents
 * @package @voilajsx/uikit
 * @file /src/themes/presets/ruby.js
 */

/**
 * Ruby theme - sophisticated red with golden accents for premium brands
 */
const rubyTheme = {
  name: 'Ruby',
  id: 'ruby',

  light: {
    background: 'oklch(0.99 0.005 20)',
    foreground: 'oklch(0.15 0.02 20)',
    card: 'oklch(0.97 0.008 15)',
    cardForeground: 'oklch(0.15 0.02 20)',
    popover: 'oklch(0.97 0.008 15)',
    popoverForeground: 'oklch(0.15 0.02 20)',
    primary: 'oklch(0.48 0.26 18)', // Darker for AAA compliance (was 0.52)
    primaryForeground: 'oklch(0.98 0.005 15)',
    secondary: 'oklch(0.88 0.018 10)', // Darker for better contrast (was 0.92)
    secondaryForeground: 'oklch(0.18 0.028 15)', // Darker text for AAA (was 0.2)
    muted: 'oklch(0.93 0.01 15)', // Slightly darker (was 0.95)
    mutedForeground: 'oklch(0.35 0.025 20)', // Much darker for AAA compliance (was 0.45)
    accent: 'oklch(0.68 0.16 350)', // Rose pink accent
    accentForeground: 'oklch(0.98 0.005 15)',
    destructive: 'oklch(0.32 0.28 5)', // Deep wine red - already AAA compliant
    destructiveForeground: 'oklch(0.98 0.005 15)',
    border: 'oklch(0.85 0.015 15)', // Slightly darker for better visibility (was 0.88)
    input: 'oklch(0.85 0.015 15)',
    ring: 'oklch(0.48 0.26 18)',
    chart1: 'oklch(0.48 0.26 18)', // Updated to match primary
    chart2: 'oklch(0.68 0.16 350)', // Rose pink
    chart3: 'oklch(0.32 0.28 5)', // Deep wine
    chart4: 'oklch(0.65 0.18 45)', // Darker amber for better contrast
    chart5: 'oklch(0.55 0.22 340)', // Darker magenta for better contrast
  },

  dark: {
    background: 'oklch(0.06 0.03 15)',
    foreground: 'oklch(0.95 0.008 15)',
    card: 'oklch(0.08 0.035 15)',
    cardForeground: 'oklch(0.95 0.008 15)',
    popover: 'oklch(0.08 0.035 15)',
    popoverForeground: 'oklch(0.95 0.008 15)',
    primary: 'oklch(0.68 0.28 18)', // Slightly brighter for AAA compliance (was 0.65)
    primaryForeground: 'oklch(0.05 0.035 15)', // Darker for better contrast (was 0.06)
    secondary: 'oklch(0.25 0.045 10)', // Brighter for AAA compliance (was 0.22)
    secondaryForeground: 'oklch(0.92 0.012 15)', // Slightly brighter (was 0.9)
    muted: 'oklch(0.14 0.03 15)', // Slightly brighter (was 0.12)
    mutedForeground: 'oklch(0.72 0.018 15)', // Slightly brighter for AAA (was 0.7)
    accent: 'oklch(0.78 0.2 350)', // Brighter rose pink for AAA (was 0.75)
    accentForeground: 'oklch(0.05 0.035 15)', // Darker for better contrast
    destructive: 'oklch(0.48 0.3 5)', // Slightly brighter for AAA (was 0.45)
    destructiveForeground: 'oklch(0.95 0.008 15)',
    border: 'oklch(0.22 0.035 15)', // Slightly brighter for better visibility (was 0.2)
    input: 'oklch(0.22 0.035 15)',
    ring: 'oklch(0.68 0.28 18)',
    chart1: 'oklch(0.68 0.28 18)', // Updated to match primary
    chart2: 'oklch(0.78 0.2 350)', // Updated bright rose
    chart3: 'oklch(0.48 0.3 5)', // Updated deep wine
    chart4: 'oklch(0.75 0.22 45)', // Brighter amber for AAA
    chart5: 'oklch(0.72 0.24 340)', // Brighter magenta for AAA
  },
};

export default rubyTheme;
