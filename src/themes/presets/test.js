/**
 * Test theme preset - Modern cyberpunk design
 * @description Electric cyberpunk theme with teal and purple accents for tech applications
 * @package @voilajsx/uikit
 * @file /src/themes/presets/test.js
 */

/**
 * Test theme preset - Modern cyberpunk design with electric accents
 * Perfect for tech, gaming, and futuristic applications
 */
const testTheme = {
  id: 'test',
  name: 'Test',
  description:
    'Modern cyberpunk theme with electric teal and purple accents for tech applications',

  // Enhanced design tokens for cyberpunk aesthetic
  design: {
    fontPrimary: "'Inter', system-ui, -apple-system, sans-serif",
    fontDisplay: "'Rajdhani', 'Inter', system-ui, sans-serif",
    fontMono: "'JetBrains Mono', 'SF Mono', Monaco, monospace",
    radiusEnhance: '0.5rem', // Sharp modern corners
    spacingEnhance: '1.0', // Clean spacing
    shadowEnhance: '0 0 20px rgb(6 182 212 / 0.3), 0 2px 8px rgb(0 0 0 / 0.4)',
    shadowLg: '0 0 30px rgb(6 182 212 / 0.4), 0 4px 12px rgb(0 0 0 / 0.5)',
    shadowXl: '0 0 40px rgb(6 182 212 / 0.5), 0 8px 16px rgb(0 0 0 / 0.6)',
    gradientPrimary: 'linear-gradient(135deg, oklch(0.55 0.18 210) 0%, oklch(0.65 0.15 190) 100%)', // Teal to cyan gradient
    gradientSubtle: 'linear-gradient(135deg, oklch(0.98 0.005 210) 0%, oklch(0.99 0.002 190) 100%)',
    gradientHover: 'linear-gradient(135deg, oklch(0.65 0.15 190) 0%, oklch(0.55 0.18 210) 100%)', // Flipped gradient
    gradientText: 'linear-gradient(135deg, oklch(0.55 0.18 210) 0%, oklch(0.70 0.20 280) 50%, oklch(0.65 0.15 190) 100%)', // Teal to purple to cyan
    gradientBackground: 'linear-gradient(135deg, oklch(0.08 0.02 220) 0%, oklch(0.06 0.015 200) 100%)', // Dark teal gradient
    gradientBackgroundLight: 'linear-gradient(135deg, oklch(0.55 0.18 210 / 0.02) 0%, oklch(1.00 0.000 0) 60%, oklch(0.65 0.15 190 / 0.015) 100%)',
  },

  // Custom CSS for modern cyberpunk styling
  customStyles: `
    /* Import modern fonts */
    @import url('https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap');
    
    /* Font system */
    .theme-test {
      font-family: var(--voila-font-primary);
      --radius-lg: var(--voila-radius-enhance);
      --radius-md: calc(var(--voila-radius-enhance) - 3px);
      --radius-sm: calc(var(--voila-radius-enhance) - 6px);
    }
    
    .theme-test h1, .theme-test h2, .theme-test h3, 
    .theme-test h4, .theme-test h5, .theme-test h6,
    .theme-test [data-slot="heading"] {
      font-family: var(--voila-font-display);
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.1em;
    }
    
    .theme-test code, .theme-test pre,
    .theme-test [data-slot="code"] {
      font-family: var(--voila-font-mono);
    }
    
    /* Luxury gradient effects */
    .theme-test .btn-primary,
    .theme-test button[data-variant="primary"],
    .theme-test [data-slot="button"][data-variant="primary"] {
      background: var(--color-primary-gradient);
      box-shadow: var(--voila-shadow-enhance);
      border: none;
      font-weight: 500;
      transition: all 0.3s ease;
    }
    
    .theme-test .btn-primary:hover,
    .theme-test button[data-variant="primary"]:hover,
    .theme-test [data-slot="button"][data-variant="primary"]:hover {
      background: var(--voila-gradient-hover);
      box-shadow: var(--voila-shadow-lg);
      transform: translateY(-1px);
    }
    
    /* Luxury cards with gradient backgrounds */
    .theme-test [data-slot="card"] {
      background: var(--color-card);
      box-shadow: var(--voila-shadow-enhance);
      transition: all 0.3s ease;
      border: 1px solid oklch(from var(--color-border) l c h / 0.5);
    }
    
    .theme-test [data-slot="card"]:hover {
      box-shadow: var(--voila-shadow-lg);
      transform: translateY(-2px);
    }
    
    /* Enhanced cards with subtle gradients */
    .theme-test [data-slot="card"][data-variant="enhanced"] {
      background: var(--voila-gradient-subtle);
      border: 1px solid oklch(from var(--color-primary) l c h / 0.2);
    }
    
    /* Aurora text gradient */
    .theme-test .text-gradient-primary {
      background: var(--voila-gradient-text);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      color: transparent;
      font-weight: 600;
    }
    
    /* Cyberpunk focus styles */
    .theme-test *:focus-visible {
      outline: 2px solid var(--color-primary);
      outline-offset: 2px;
      box-shadow: 0 0 20px oklch(0.65 0.20 210 / 0.4);
    }
  `,

  light: {
    // Base colors - clean and modern
    background: 'oklch(0.99 0.002 200)',
    backgroundGradient: 'linear-gradient(135deg, oklch(0.55 0.18 210 / 0.02) 0%, oklch(1.00 0.000 0) 60%, oklch(0.65 0.15 190 / 0.015) 100%)',
    foreground: 'oklch(0.15 0.02 220)',
    card: 'oklch(0.98 0.005 200)',
    cardForeground: 'oklch(0.15 0.02 220)',
    popover: 'oklch(0.98 0.005 200)',
    popoverForeground: 'oklch(0.15 0.02 220)',

    // Interactive colors - modern cyberpunk
    primary: 'oklch(0.55 0.18 210)', // Electric teal
    primaryGradient: 'linear-gradient(135deg, oklch(0.55 0.18 210) 0%, oklch(0.65 0.15 190) 100%)',
    primaryForeground: 'oklch(0.98 0.002 200)',
    secondary: 'oklch(0.88 0.08 200)',
    secondaryForeground: 'oklch(0.15 0.02 220)',
    muted: 'oklch(0.92 0.005 200)',
    mutedForeground: 'oklch(0.40 0.02 220)',
    accent: 'oklch(0.70 0.20 280)', // Electric purple
    accentForeground: 'oklch(0.98 0.002 200)',

    // State colors
    destructive: 'oklch(0.55 0.25 15)',
    destructiveForeground: 'oklch(0.98 0.002 200)',

    // Border colors
    border: 'oklch(0.85 0.05 200)',
    input: 'oklch(0.85 0.05 200)',
    ring: 'oklch(0.55 0.18 210)',

    // Chart colors - cyberpunk spectrum
    chart1: 'oklch(0.55 0.18 210)', // Electric teal
    chart2: 'oklch(0.70 0.20 280)', // Electric purple
    chart3: 'oklch(0.65 0.15 190)', // Bright cyan
    chart4: 'oklch(0.60 0.16 320)', // Electric magenta
    chart5: 'oklch(0.52 0.15 250)', // Electric blue

    // Sidebar colors
    sidebar: 'oklch(0.98 0.005 200)',
    sidebarForeground: 'oklch(0.15 0.02 220)',
    sidebarPrimary: 'oklch(0.55 0.18 210)',
    sidebarPrimaryForeground: 'oklch(0.98 0.002 200)',
    sidebarAccent: 'oklch(0.92 0.005 200)',
    sidebarAccentForeground: 'oklch(0.40 0.02 220)',
    sidebarBorder: 'oklch(0.85 0.05 200)',
    sidebarRing: 'oklch(0.55 0.18 210)',
  },

  dark: {
    // Base colors - dark cyberpunk
    background: 'oklch(0.08 0.02 220)',
    backgroundGradient: 'linear-gradient(135deg, oklch(0.08 0.02 220) 0%, oklch(0.06 0.015 200) 100%)',
    foreground: 'oklch(0.92 0.05 200)',
    card: 'oklch(0.12 0.025 220)',
    cardForeground: 'oklch(0.92 0.05 200)',
    popover: 'oklch(0.12 0.025 220)',
    popoverForeground: 'oklch(0.92 0.05 200)',

    // Interactive colors - electric cyberpunk
    primary: 'oklch(0.65 0.20 210)', // Bright electric teal
    primaryGradient: 'linear-gradient(135deg, oklch(0.65 0.20 210) 0%, oklch(0.75 0.18 190) 100%)',
    primaryForeground: 'oklch(0.08 0.02 220)',
    secondary: 'oklch(0.18 0.03 220)',
    secondaryForeground: 'oklch(0.85 0.05 200)',
    muted: 'oklch(0.15 0.025 220)',
    mutedForeground: 'oklch(0.70 0.08 200)',
    accent: 'oklch(0.80 0.25 280)', // Bright electric purple
    accentForeground: 'oklch(0.08 0.02 220)',

    // State colors
    destructive: 'oklch(0.70 0.25 15)',
    destructiveForeground: 'oklch(0.08 0.02 220)',

    // Border colors
    border: 'oklch(0.25 0.05 220)',
    input: 'oklch(0.22 0.04 220)',
    ring: 'oklch(0.65 0.20 210)',

    // Chart colors - bright cyberpunk spectrum
    chart1: 'oklch(0.65 0.20 210)', // Bright electric teal
    chart2: 'oklch(0.80 0.25 280)', // Bright electric purple
    chart3: 'oklch(0.75 0.18 190)', // Bright cyan
    chart4: 'oklch(0.72 0.22 320)', // Electric magenta
    chart5: 'oklch(0.62 0.20 250)', // Electric blue

    // Sidebar colors
    sidebar: 'oklch(0.10 0.02 220)',
    sidebarForeground: 'oklch(0.92 0.05 200)',
    sidebarPrimary: 'oklch(0.65 0.20 210)',
    sidebarPrimaryForeground: 'oklch(0.08 0.02 220)',
    sidebarAccent: 'oklch(0.15 0.025 220)',
    sidebarAccentForeground: 'oklch(0.70 0.08 200)',
    sidebarBorder: 'oklch(0.25 0.05 220)',
    sidebarRing: 'oklch(0.65 0.20 210)',
  },
};

export default testTheme;