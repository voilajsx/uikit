/**
 * Olive theme preset - natural olive green colors
 * @description Earthy, natural theme with olive green tones perfect for organic and eco-friendly applications
 * @package @voilajsx/uikit
 * @file /src/themes/presets/olive.js
 */

/**
 * Olive theme preset - natural olive green design with earthy tones
 * Perfect for organic, eco-friendly, and natural applications
 */
const oliveTheme = {
  id: 'olive',
  name: 'Olive',
  description:
    'Natural olive green theme with earthy tones for organic and eco-friendly applications',

  // Enhanced design tokens for natural aesthetic
  design: {
    fontPrimary: "'Poppins', 'Inter', system-ui, -apple-system, sans-serif",
    fontDisplay: "'Rajdhani', 'Orbitron', 'Inter', system-ui, sans-serif",
    fontMono: "'Source Code Pro', 'JetBrains Mono', 'SF Mono', Monaco, monospace",
    radiusEnhance: '0.5rem', // Natural rounded corners
    spacingEnhance: '1.1',
    shadowEnhance: '0 0 20px rgb(68 99 68 / 0.3), 0 2px 8px rgb(0 0 0 / 0.4)',
    shadowLg: '0 0 30px rgb(68 99 68 / 0.4), 0 4px 12px rgb(0 0 0 / 0.5)',
    shadowXl: '0 0 40px rgb(68 99 68 / 0.5), 0 8px 16px rgb(0 0 0 / 0.6)',
    gradientPrimary: 'linear-gradient(135deg, oklch(0.35 0.04 140) 0%, oklch(0.48 0.06 160) 100%)', // Olive-toned primary gradient
    gradientSubtle: 'linear-gradient(135deg, oklch(0.93 0.02 60) 0%, oklch(0.75 0.06 140) 20%, oklch(0.98 0.01 120) 100%)', // Light goldenrod to light green
    gradientHover: 'linear-gradient(135deg, oklch(0.48 0.06 160) 0%, oklch(0.35 0.04 140) 100%)', // Hover - flipped olive gradient pattern
    gradientText: 'linear-gradient(135deg, oklch(0.35 0.04 140) 0%, oklch(0.48 0.06 160) 50%, oklch(0.64 0.08 120) 100%)', // Olive text gradient
    gradientHoverDark: 'linear-gradient(135deg, oklch(0.58 0.08 160) 0%, oklch(0.42 0.06 140) 100%)', // Dark mode flipped olive hover
    gradientBackground: 'linear-gradient(135deg, oklch(0.25 0.02 180) 0%, oklch(0.23 0.015 150) 100%)', // Dark slate gray gradient
    gradientBackgroundLight: 'linear-gradient(135deg, oklch(0.93 0.02 60 / 0.05) 0%, oklch(1.00 0.000 0) 60%, oklch(0.75 0.06 140 / 0.03) 100%)', // Light goldenrod hint
  },

  // Custom CSS for natural olive styling
  customStyles: `
    /* Import natural fonts - Google Fonts fallback for compatibility */
    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&display=swap');
    
    /* Optional: Use local fonts if @fontsource packages are installed
     * Add these imports to your app's CSS for better performance:
     * @import '@fontsource/poppins/400.css';
     * @import '@fontsource/poppins/500.css';
     * @import '@fontsource/poppins/600.css';
     * @import '@fontsource/poppins/700.css';
     * @import '@fontsource/rajdhani/400.css';
     * @import '@fontsource/rajdhani/500.css';
     * @import '@fontsource/rajdhani/600.css';
     * @import '@fontsource/rajdhani/700.css';
     * @import '@fontsource/source-code-pro/400.css';
     * @import '@fontsource/source-code-pro/500.css';
     * @import '@fontsource/source-code-pro/600.css';
     * @import '@fontsource/orbitron/400.css';
     * @import '@fontsource/orbitron/500.css';
     * @import '@fontsource/orbitron/600.css';
     * @import '@fontsource/orbitron/700.css';
     */
    
    /* Font system */
    .theme-olive {
      font-family: var(--voila-font-primary);
      --radius-lg: var(--voila-radius-enhance);
      --radius-md: calc(var(--voila-radius-enhance) - 2px);
      --radius-sm: calc(var(--voila-radius-enhance) - 4px);
    }
    
    .theme-olive h1, .theme-olive h2, .theme-olive h3, 
    .theme-olive h4, .theme-olive h5, .theme-olive h6,
    .theme-olive [data-slot="heading"] {
      font-family: var(--voila-font-display);
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    
    .theme-olive code, .theme-olive pre,
    .theme-olive [data-slot="code"] {
      font-family: var(--voila-font-mono);
    }
    
    /* Natural olive effects */
    .theme-olive .btn-primary,
    .theme-olive button[data-variant="primary"],
    .theme-olive [data-slot="button"][data-variant="primary"] {
      background: var(--color-primary-gradient);
      box-shadow: var(--voila-shadow-enhance);
      border: 1px solid oklch(0.42 0.05 150);
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      transition: all 0.3s ease;
    }
    
    .theme-olive .btn-primary:hover,
    .theme-olive button[data-variant="primary"]:hover,
    .theme-olive [data-slot="button"][data-variant="primary"]:hover {
      background: var(--voila-gradient-hover);
      box-shadow: var(--voila-shadow-lg);
      transform: translateY(-2px);
    }
    
    .theme-olive.dark .btn-primary:hover,
    .theme-olive.dark button[data-variant="primary"]:hover,
    .theme-olive.dark [data-slot="button"][data-variant="primary"]:hover {
      background: var(--voila-gradient-hover-dark);
    }
    
    /* Professional cards - clean and minimal */
    .theme-olive [data-slot="card"] {
      background: var(--color-card);
      transition: all 0.2s ease;
    }
    
    /* Thin light border for dark mode cards */
    .theme-olive.dark [data-slot="card"] {
      border: 1px solid oklch(0.35 0.03 150);
    }
    
    /* Natural text gradient */
    .theme-olive .text-gradient-primary {
      background: var(--voila-gradient-text);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      color: transparent;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.1em;
    }
    
    /* Enhanced focus styles with natural glow */
    .theme-olive *:focus-visible {
      outline: 2px solid var(--color-primary);
      outline-offset: 2px;
      box-shadow: 0 0 20px oklch(0.42 0.05 150 / 0.5);
    }
  `,

  light: {
    // Base colors - your palette
    background: 'oklch(0.98 0.01 120)', // Clean light background
    backgroundGradient: 'linear-gradient(135deg, oklch(0.93 0.02 60 / 0.05) 0%, oklch(1.00 0.000 0) 60%, oklch(0.75 0.06 140 / 0.03) 100%)', // Light goldenrod hint
    foreground: 'oklch(0.25 0.02 180)', // Dark slate gray for text
    card: 'oklch(0.96 0.015 120)',
    cardForeground: 'oklch(0.25 0.02 180)',
    popover: 'oklch(0.96 0.015 120)',
    popoverForeground: 'oklch(0.25 0.02 180)',

    // Interactive colors - using your palette
    primary: 'oklch(0.42 0.05 150)', // Green #446344
    primaryGradient: 'linear-gradient(135deg, oklch(0.35 0.04 140) 0%, oklch(0.48 0.06 160) 100%)', // More olive-toned gradient
    primaryForeground: 'oklch(0.98 0.01 120)',
    secondary: 'oklch(0.93 0.02 60)', // Light Goldenrod Yellow #F7E5A8
    secondaryForeground: 'oklch(0.25 0.02 180)',
    muted: 'oklch(0.75 0.06 140)', // Light Grayish Green #B2D2B2
    mutedForeground: 'oklch(0.25 0.02 180)',
    accent: 'oklch(0.64 0.08 120)', // Pale Olive Green #799879
    accentForeground: 'oklch(0.98 0.01 120)',

    // State colors
    destructive: 'oklch(0.55 0.35 15)',
    destructiveForeground: 'oklch(0.98 0.01 120)',

    // Border colors
    border: 'oklch(0.75 0.06 140)', // Light Grayish Green for borders
    input: 'oklch(0.75 0.06 140)',
    ring: 'oklch(0.42 0.05 150)', // Green focus ring

    // Chart colors - your color palette
    chart1: 'oklch(0.42 0.05 150)', // Green #446344
    chart2: 'oklch(0.64 0.08 120)', // Pale Olive Green #799879
    chart3: 'oklch(0.75 0.06 140)', // Light Grayish Green #B2D2B2
    chart4: 'oklch(0.93 0.02 60)', // Light Goldenrod Yellow #F7E5A8
    chart5: 'oklch(0.25 0.02 180)', // Dark Slate Gray #2A3A3A

    // Sidebar colors
    sidebar: 'oklch(0.96 0.015 120)',
    sidebarForeground: 'oklch(0.25 0.02 180)',
    sidebarPrimary: 'oklch(0.42 0.05 150)',
    sidebarPrimaryForeground: 'oklch(0.98 0.01 120)',
    sidebarAccent: 'oklch(0.75 0.06 140)',
    sidebarAccentForeground: 'oklch(0.25 0.02 180)',
    sidebarBorder: 'oklch(0.75 0.06 140)',
    sidebarRing: 'oklch(0.42 0.05 150)',
  },

  dark: {
    // Base colors - Dark Slate Gray foundation
    background: 'oklch(0.25 0.02 180)', // Dark Slate Gray #2A3A3A
    backgroundGradient: 'linear-gradient(135deg, oklch(0.25 0.02 180) 0%, oklch(0.23 0.015 150) 100%)',
    foreground: 'oklch(0.93 0.02 60)', // Light Goldenrod for text contrast
    card: 'oklch(0.35 0.03 150)', // Slightly lighter than background
    cardForeground: 'oklch(0.93 0.02 60)',
    popover: 'oklch(0.28 0.025 170)',
    popoverForeground: 'oklch(0.93 0.02 60)',

    // Interactive colors - your bright palette for dark mode
    primary: 'oklch(0.52 0.08 150)', // Brighter Green for visibility
    primaryGradient: 'linear-gradient(135deg, oklch(0.42 0.06 140) 0%, oklch(0.58 0.08 160) 100%)', // More olive-toned gradient for dark mode
    primaryForeground: 'oklch(0.25 0.02 180)',
    secondary: 'oklch(0.90 0.04 60)', // Brighter Light Goldenrod Yellow for visibility
    secondaryForeground: 'oklch(0.25 0.02 180)',
    muted: 'oklch(0.40 0.025 150)', // Visible muted
    mutedForeground: 'oklch(0.85 0.03 60)', // Light goldenrod for muted text
    accent: 'oklch(0.70 0.10 120)', // Brighter Pale Olive Green
    accentForeground: 'oklch(0.25 0.02 180)',

    // State colors
    destructive: 'oklch(0.70 0.35 15)', // Bright red for dark mode
    destructiveForeground: 'oklch(0.25 0.02 180)',

    // Border colors
    border: 'oklch(0.45 0.04 150)', // Visible green borders
    input: 'oklch(0.40 0.03 150)',
    ring: 'oklch(0.52 0.08 150)', // Green focus ring

    // Chart colors - your palette brightened for dark mode
    chart1: 'oklch(0.52 0.08 150)', // Green #446344 (brighter)
    chart2: 'oklch(0.70 0.10 120)', // Pale Olive Green #799879 (brighter)
    chart3: 'oklch(0.80 0.08 140)', // Light Grayish Green #B2D2B2 (brighter)
    chart4: 'oklch(0.90 0.04 60)', // Light Goldenrod Yellow #F7E5A8 (brighter)
    chart5: 'oklch(0.35 0.03 180)', // Dark Slate Gray variant

    // Sidebar colors
    sidebar: 'oklch(0.30 0.025 160)',
    sidebarForeground: 'oklch(0.93 0.02 60)',
    sidebarPrimary: 'oklch(0.52 0.08 150)',
    sidebarPrimaryForeground: 'oklch(0.25 0.02 180)',
    sidebarAccent: 'oklch(0.38 0.03 150)',
    sidebarAccentForeground: 'oklch(0.85 0.03 60)',
    sidebarBorder: 'oklch(0.45 0.04 150)',
    sidebarRing: 'oklch(0.52 0.08 150)',
  },
};

export default oliveTheme;