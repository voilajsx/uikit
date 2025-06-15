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
    background: 'oklch(0.98 0.005 0)', // Very light off-white, almost white
    foreground: 'oklch(0.12 0.01 0)', // Dark charcoal
    card: 'oklch(0.96 0.007 0)', // Slightly darker card than background
    cardForeground: 'oklch(0.12 0.01 0)',
    popover: 'oklch(0.96 0.007 0)',
    popoverForeground: 'oklch(0.12 0.01 0)',
    primary: 'oklch(0.48 0.18 20)', // Equivalent to #db2229
    primaryForeground: 'oklch(0.98 0.005 0)', // Light text on primary
    secondary: 'oklch(0.8 0.005 0)', // 10% darker - was 0.9, now 0.8
    secondaryForeground: 'oklch(0.2 0.01 0)', // Darker gray text
    muted: 'oklch(0.93 0.005 0)', // Softer light gray
    mutedForeground: 'oklch(0.4 0.01 0)', // Medium gray for muted text
    accent: 'oklch(0.56 0.01 240)', // 10% lighter - was 0.46, now 0.56
    accentForeground: 'oklch(0.98 0.005 0)', // Light text on accent
    destructive: 'oklch(0.5 0.2 20)', // A slightly softer red for destructive actions
    destructiveForeground: 'oklch(0.98 0.005 0)',
    border: 'oklch(0.85 0.005 0)', // Subtle gray border
    input: 'oklch(0.85 0.005 0)',
    ring: 'oklch(0.48 0.18 20)', // Matches primary
    chart1: 'oklch(0.48 0.18 20)', // Primary red
    chart2: 'oklch(0.56 0.01 240)', // Updated accent gray (lighter)
    chart3: 'oklch(0.65 0.15 80)', // Vibrant yellow-green for contrast in charts
    chart4: 'oklch(0.55 0.12 180)', // A cool blue for charts
    chart5: 'oklch(0.7 0.1 300)', // A soft purple for charts
  },

  dark: {
    background: 'oklch(0.05 0.003 0)', // Professional dark background
    foreground: 'oklch(0.95 0.005 0)', // Clean light foreground
    card: 'oklch(0.15 0.01 0)', // Much more visible cards - increased visibility
    cardForeground: 'oklch(0.95 0.005 0)',
    popover: 'oklch(0.15 0.01 0)', // Match card visibility
    popoverForeground: 'oklch(0.95 0.005 0)',
    primary: 'oklch(0.58 0.15 15)', // Better burgundy-red - increased lightness and saturation for better visibility
    primaryForeground: 'oklch(0.98 0.003 0)', // Clean light text on primary
    secondary: 'oklch(0.1 0.008 0)', // 10% darker - was 0.2, now 0.1
    secondaryForeground: 'oklch(0.85 0.005 0)', // Lighter gray text
    muted: 'oklch(0.15 0.005 0)', // Slightly brighter dark gray
    mutedForeground: 'oklch(0.7 0.01 0)', // Medium light gray for muted text
    accent: 'oklch(0.7 0.01 240)', // 10% lighter - was 0.6, now 0.7
    accentForeground: 'oklch(0.08 0.005 0)', // Dark text on accent
    destructive: 'oklch(0.7 0.3 20)', // A brighter red for destructive actions
    destructiveForeground: 'oklch(0.08 0.005 0)',
    border: 'oklch(0.25 0.005 0)', // Slightly lighter dark gray border
    input: 'oklch(0.25 0.005 0)',
    ring: 'oklch(0.58 0.15 15)', // Match better primary
    chart1: 'oklch(0.58 0.15 15)', // Better burgundy-red
    chart2: 'oklch(0.7 0.01 240)', // Updated accent gray (lighter)
    chart3: 'oklch(0.75 0.18 80)', // Brighter yellow-green
    chart4: 'oklch(0.68 0.15 180)', // Brighter cool blue
    chart5: 'oklch(0.8 0.12 300)', // Brighter soft purple
  },
};

export default rubyTheme;
