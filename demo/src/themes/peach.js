/**
 * Peach Theme - Soft peach with elegant coral accents and premium typography
 * Uses Playfair Display for headers, Source Sans Pro for body text
 */

const peachTheme = {
  id: 'peach',
  name: 'Peach',
  description: 'Elegant peach theme with soft coral tones and premium typography for sophisticated applications',
  
  design: {
    // Premium Google Fonts combination
    fontPrimary: "'Source Sans Pro', 'system-ui', sans-serif",        // Clean, readable body text
    fontDisplay: "'Playfair Display', 'Georgia', serif",              // Elegant headers
    fontHeading: "'Crimson Text', 'Times New Roman', serif",          // Beautiful subheadings
    
    // Enhanced design tokens
    radiusEnhance: '0.875rem',
    spacingEnhance: '1.05',
    shadowEnhance: '0 6px 20px rgb(15 20% 50% / 0.12), 0 2px 8px rgb(15 20% 50% / 0.08)',
    
    // Sophisticated gradients
    gradientPrimary: 'linear-gradient(135deg, oklch(0.82 0.08 35) 0%, oklch(0.75 0.12 25) 100%)',
    gradientSubtle: 'linear-gradient(135deg, oklch(0.82 0.08 35 / 0.08) 0%, oklch(0.75 0.12 25 / 0.04) 100%)',
    gradientHover: 'linear-gradient(135deg, oklch(0.82 0.08 35 / 0.95) 0%, oklch(0.75 0.12 25 / 0.95) 100%)',
    gradientText: 'linear-gradient(135deg, oklch(0.75 0.12 25) 0%, oklch(0.68 0.15 20) 100%)',
  },
  
  light: {
    // Soft peach and coral palette
    background: 'oklch(0.98 0.015 35)',           // Very light peachy white
    foreground: 'oklch(0.25 0.02 25)',           // Dark brown-gray text
    card: 'oklch(0.96 0.02 35)',                 // Light peach card background
    cardForeground: 'oklch(0.25 0.02 25)',       // Dark text on cards
    popover: 'oklch(0.96 0.02 35)',              // Popover background
    popoverForeground: 'oklch(0.25 0.02 25)',    // Popover text
    
    primary: 'oklch(0.82 0.08 35)',              // Soft peach primary
    primaryForeground: 'oklch(0.15 0.02 35)',    // Dark text on primary
    secondary: 'oklch(0.92 0.04 35)',            // Very light peach secondary
    secondaryForeground: 'oklch(0.35 0.04 25)',  // Medium dark text
    
    muted: 'oklch(0.94 0.03 35)',                // Muted peach background
    mutedForeground: 'oklch(0.50 0.04 25)',      // Muted text
    accent: 'oklch(0.75 0.12 25)',               // Coral accent
    accentForeground: 'oklch(0.98 0.015 35)',    // Light text on accent
    
    destructive: 'oklch(0.60 0.20 15)',          // Warm red
    destructiveForeground: 'oklch(0.98 0.015 35)', // Light text on destructive
    
    border: 'oklch(0.88 0.05 35)',               // Peach border
    input: 'oklch(0.88 0.05 35)',                // Input border
    ring: 'oklch(0.82 0.08 35)',                 // Focus ring
    
    // Chart colors
    chart1: 'oklch(0.82 0.08 35)',               // Primary peach
    chart2: 'oklch(0.75 0.12 25)',               // Coral
    chart3: 'oklch(0.78 0.10 45)',               // Light orange
    chart4: 'oklch(0.70 0.15 15)',               // Deep coral
    chart5: 'oklch(0.85 0.06 50)',               // Pale orange
    
    // Sidebar colors
    sidebar: 'oklch(0.96 0.02 35)',
    sidebarForeground: 'oklch(0.25 0.02 25)',
    sidebarPrimary: 'oklch(0.82 0.08 35)',
    sidebarPrimaryForeground: 'oklch(0.15 0.02 35)',
    sidebarAccent: 'oklch(0.94 0.03 35)',
    sidebarAccentForeground: 'oklch(0.50 0.04 25)',
    sidebarBorder: 'oklch(0.88 0.05 35)',
    sidebarRing: 'oklch(0.82 0.08 35)',
  },
  
  dark: {
    // Dark peach palette
    background: 'oklch(0.12 0.015 25)',          // Very dark brown
    foreground: 'oklch(0.92 0.02 35)',           // Light peach text
    card: 'oklch(0.16 0.02 25)',                 // Dark card background
    cardForeground: 'oklch(0.92 0.02 35)',       // Light text on cards
    popover: 'oklch(0.16 0.02 25)',              // Dark popover
    popoverForeground: 'oklch(0.92 0.02 35)',    // Light popover text
    
    primary: 'oklch(0.78 0.10 35)',              // Bright peach primary
    primaryForeground: 'oklch(0.15 0.015 25)',   // Dark text on primary
    secondary: 'oklch(0.22 0.03 25)',            // Dark secondary
    secondaryForeground: 'oklch(0.85 0.04 35)',  // Light text on secondary
    
    muted: 'oklch(0.19 0.02 25)',                // Dark muted background
    mutedForeground: 'oklch(0.65 0.04 35)',      // Muted light text
    accent: 'oklch(0.72 0.14 25)',               // Bright coral accent
    accentForeground: 'oklch(0.15 0.015 25)',    // Dark text on accent
    
    destructive: 'oklch(0.68 0.22 15)',          // Bright red
    destructiveForeground: 'oklch(0.12 0.015 25)', // Dark text on destructive
    
    border: 'oklch(0.28 0.04 25)',               // Dark border
    input: 'oklch(0.28 0.04 25)',                // Dark input border
    ring: 'oklch(0.78 0.10 35)',                 // Bright focus ring
    
    // Dark chart colors
    chart1: 'oklch(0.78 0.10 35)',               // Bright peach
    chart2: 'oklch(0.72 0.14 25)',               // Bright coral
    chart3: 'oklch(0.75 0.12 45)',               // Bright orange
    chart4: 'oklch(0.68 0.16 15)',               // Bright deep coral
    chart5: 'oklch(0.82 0.08 50)',               // Bright pale orange
    
    // Dark sidebar colors
    sidebar: 'oklch(0.16 0.02 25)',
    sidebarForeground: 'oklch(0.92 0.02 35)',
    sidebarPrimary: 'oklch(0.78 0.10 35)',
    sidebarPrimaryForeground: 'oklch(0.15 0.015 25)',
    sidebarAccent: 'oklch(0.19 0.02 25)',
    sidebarAccentForeground: 'oklch(0.65 0.04 35)',
    sidebarBorder: 'oklch(0.28 0.04 25)',
    sidebarRing: 'oklch(0.78 0.10 35)',
  }
};

export default peachTheme;