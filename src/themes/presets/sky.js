/**
 * Sky theme preset - Clean professional blue design
 * @description Fresh, minimal sky blue theme perfect for business and professional applications
 * @package @voilajsx/uikit
 * @file /src/themes/presets/sky.js
 */

/**
 * Sky theme preset - Clean professional design with sky blue accents
 * Perfect for business, professional, and productivity applications
 */
const skyTheme = {
  id: 'sky',
  name: 'Sky',
  description: 'Fresh sky blue theme with clean design and professional aesthetics',

  // Enhanced design tokens for professional aesthetic
  design: {
    fontPrimary: "'Inter', system-ui, -apple-system, sans-serif",
    fontDisplay: "'Inter', system-ui, sans-serif",
    fontMono: "'JetBrains Mono', 'SF Mono', Monaco, monospace",
    radiusEnhance: '0.5rem', // Clean modern corners
    spacingEnhance: '1.0', // Clean spacing
    shadowEnhance: '0 1px 3px rgb(0 0 0 / 0.1), 0 1px 2px rgb(0 0 0 / 0.06)',
    shadowLg: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    shadowXl: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    gradientPrimary: 'linear-gradient(135deg, oklch(0.52 0.20 260) 0%, oklch(0.48 0.25 250) 100%)', // Darker, brighter blue gradient
    gradientSubtle: 'linear-gradient(135deg, oklch(0.98 0.005 250) 0%, oklch(0.99 0.002 260) 100%)',
    gradientHover: 'linear-gradient(135deg, oklch(0.48 0.25 250) 0%, oklch(0.52 0.20 260) 100%)', // Flipped gradient
    gradientText: 'linear-gradient(135deg, oklch(0.52 0.20 260) 0%, oklch(0.48 0.25 250) 100%)',
    gradientBackground: 'linear-gradient(135deg, oklch(0.12 0.02 240) 0%, oklch(0.10 0.015 220) 100%)',
    gradientBackgroundLight: 'linear-gradient(135deg, oklch(0.58 0.15 240 / 0.02) 0%, oklch(1.00 0.000 0) 70%, oklch(0.65 0.12 220 / 0.015) 100%)',
  },

  // Custom CSS for clean professional styling
  customStyles: `
    /* Import professional fonts */
    @import url('https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap');
    
    /* Font system */
    .theme-sky {
      font-family: var(--voila-font-primary);
      --radius-lg: var(--voila-radius-enhance);
      --radius-md: calc(var(--voila-radius-enhance) - 2px);
      --radius-sm: calc(var(--voila-radius-enhance) - 4px);
    }
    
    .theme-sky h1, .theme-sky h2, .theme-sky h3, 
    .theme-sky h4, .theme-sky h5, .theme-sky h6,
    .theme-sky [data-slot="heading"] {
      font-family: var(--voila-font-display);
      font-weight: 600;
    }
    
    .theme-sky code, .theme-sky pre,
    .theme-sky [data-slot="code"] {
      font-family: var(--voila-font-mono);
    }
    
    /* Professional button effects */
    .theme-sky .btn-primary,
    .theme-sky button[data-variant="primary"],
    .theme-sky [data-slot="button"][data-variant="primary"] {
      background: var(--color-primary-gradient);
      box-shadow: var(--voila-shadow-enhance);
      border: none;
      font-weight: 500;
      transition: all 0.2s ease;
    }
    
    .theme-sky .btn-primary:hover,
    .theme-sky button[data-variant="primary"]:hover,
    .theme-sky [data-slot="button"][data-variant="primary"]:hover {
      background: var(--voila-gradient-hover);
      box-shadow: var(--voila-shadow-lg);
      transform: translateY(-1px);
    }
    
    /* Clean cards */
    .theme-sky [data-slot="card"] {
      background: var(--color-card);
      box-shadow: var(--voila-shadow-enhance);
      transition: all 0.2s ease;
    }
    
    /* Professional text gradient */
    .theme-sky .text-gradient-primary {
      background: var(--voila-gradient-text);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      color: transparent;
      font-weight: 600;
    }
    
    /* Clean focus styles */
    .theme-sky *:focus-visible {
      outline: 2px solid var(--color-primary);
      outline-offset: 2px;
      box-shadow: 0 0 0 4px oklch(0.58 0.15 240 / 0.2);
    }
  `,
  
  light: {
    // Base colors - clean and professional
    background: 'oklch(1.00 0.000 0)', // Pure white
    backgroundGradient: 'linear-gradient(135deg, oklch(0.58 0.15 240 / 0.02) 0%, oklch(1.00 0.000 0) 70%, oklch(0.65 0.12 220 / 0.015) 100%)',
    foreground: 'oklch(0.20 0.015 240)', // Dark blue-gray
    card: 'oklch(0.99 0.002 220)', // Subtle off-white
    cardForeground: 'oklch(0.20 0.015 240)',
    popover: 'oklch(0.99 0.002 220)',
    popoverForeground: 'oklch(0.20 0.015 240)',

    // Interactive colors - darker, brighter blue
    primary: 'oklch(0.52 0.20 260)', // Darker, brighter blue
    primaryGradient: 'linear-gradient(135deg, oklch(0.52 0.20 260) 0%, oklch(0.48 0.25 250) 100%)',
    primaryForeground: 'oklch(0.98 0.005 250)',
    secondary: 'oklch(0.85 0.08 250)', // Brighter light blue
    secondaryForeground: 'oklch(0.20 0.015 260)',
    muted: 'oklch(0.92 0.02 250)',
    mutedForeground: 'oklch(0.45 0.03 260)',
    accent: 'oklch(0.65 0.15 240)', // Brighter, darker accent
    accentForeground: 'oklch(0.98 0.005 250)',

    // State colors
    destructive: 'oklch(0.55 0.25 25)',
    destructiveForeground: 'oklch(0.98 0.005 220)',

    // Border colors
    border: 'oklch(0.85 0.04 250)',
    input: 'oklch(0.85 0.04 250)',
    ring: 'oklch(0.52 0.20 260)',

    // Chart colors - darker, brighter blue spectrum
    chart1: 'oklch(0.52 0.20 260)', // Darker bright blue
    chart2: 'oklch(0.48 0.25 250)', // Deep bright blue
    chart3: 'oklch(0.55 0.18 270)', // Purple-blue
    chart4: 'oklch(0.58 0.15 240)', // Sky blue
    chart5: 'oklch(0.62 0.12 230)', // Light blue

    // Sidebar colors
    sidebar: 'oklch(0.98 0.005 250)',
    sidebarForeground: 'oklch(0.20 0.015 260)',
    sidebarPrimary: 'oklch(0.52 0.20 260)',
    sidebarPrimaryForeground: 'oklch(0.98 0.005 250)',
    sidebarAccent: 'oklch(0.92 0.02 250)',
    sidebarAccentForeground: 'oklch(0.45 0.03 260)',
    sidebarBorder: 'oklch(0.85 0.04 250)',
    sidebarRing: 'oklch(0.52 0.20 260)',
  },
  
  dark: {
    // Base colors - dark professional
    background: 'oklch(0.12 0.02 240)', // Dark blue-gray
    backgroundGradient: 'linear-gradient(135deg, oklch(0.12 0.02 240) 0%, oklch(0.10 0.015 220) 100%)',
    foreground: 'oklch(0.92 0.01 220)', // Light blue-tinted white
    card: 'oklch(0.15 0.025 240)', // Slightly lighter than background
    cardForeground: 'oklch(0.92 0.01 220)',
    popover: 'oklch(0.14 0.02 240)',
    popoverForeground: 'oklch(0.92 0.01 220)',

    // Interactive colors - brighter, darker blue for dark mode
    primary: 'oklch(0.62 0.25 260)', // Brighter, darker blue for visibility
    primaryGradient: 'linear-gradient(135deg, oklch(0.62 0.25 260) 0%, oklch(0.58 0.28 250) 100%)',
    primaryForeground: 'oklch(0.12 0.02 260)',
    secondary: 'oklch(0.25 0.05 250)', // Darker secondary with more saturation
    secondaryForeground: 'oklch(0.82 0.03 250)',
    muted: 'oklch(0.20 0.03 250)',
    mutedForeground: 'oklch(0.65 0.04 260)',
    accent: 'oklch(0.68 0.20 240)', // Bright, darker accent for dark mode
    accentForeground: 'oklch(0.12 0.02 260)',

    // State colors
    destructive: 'oklch(0.65 0.25 25)',
    destructiveForeground: 'oklch(0.12 0.02 240)',

    // Border colors
    border: 'oklch(0.25 0.03 240)',
    input: 'oklch(0.22 0.025 240)',
    ring: 'oklch(0.68 0.18 230)',

    // Chart colors - bright sky spectrum for dark mode
    chart1: 'oklch(0.68 0.18 230)', // Bright sky blue
    chart2: 'oklch(0.75 0.12 200)', // Bright sky
    chart3: 'oklch(0.72 0.15 210)', // Light blue
    chart4: 'oklch(0.65 0.10 260)', // Soft purple-blue
    chart5: 'oklch(0.78 0.08 180)', // Light cyan

    // Sidebar colors
    sidebar: 'oklch(0.13 0.02 240)',
    sidebarForeground: 'oklch(0.92 0.01 220)',
    sidebarPrimary: 'oklch(0.68 0.18 230)',
    sidebarPrimaryForeground: 'oklch(0.12 0.02 240)',
    sidebarAccent: 'oklch(0.18 0.025 240)',
    sidebarAccentForeground: 'oklch(0.68 0.02 220)',
    sidebarBorder: 'oklch(0.25 0.03 240)',
    sidebarRing: 'oklch(0.68 0.18 230)',
  },
};

export default skyTheme;