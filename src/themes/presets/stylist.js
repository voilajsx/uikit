/**
 * Stylist Theme - Fashion & Design Industry
 * A sophisticated theme with rose gold accents and elegant typography
 */

const stylistTheme = {
  id: 'stylist',
  name: 'Stylist',
  description: 'Fashion and design industry theme with rose gold accents and elegant typography',

  // Design tokens for enhanced styling
  design: {
    fontPrimary: 'Inter, system-ui, sans-serif',
    fontDisplay: 'Playfair Display, Georgia, serif',
    fontMono: 'JetBrains Mono, monospace',

    gradientPrimary: 'linear-gradient(135deg, #E91E63 0%, #AD1457 50%, #880E4F 100%)',
    gradientSecondary: 'linear-gradient(135deg, #FFB74D 0%, #FF8A65 50%, #FF7043 100%)',
    gradientRoseGold: 'linear-gradient(135deg, #E8B4CB 0%, #D4AF37 50%, #B8860B 100%)',

    shadowEnhance: '0 8px 32px rgba(233, 30, 99, 0.15)',
    radiusEnhance: '12px',

    // Custom patterns
    brandPattern: 'radial-gradient(circle at 50% 50%, rgba(233, 30, 99, 0.1) 0%, transparent 70%)',
  },

  // Custom CSS for theme-specific styling
  customStyles: `
    .theme-stylist {
      /* Rose gold gradient variable */
      --rose-gold-gradient: linear-gradient(135deg, #E8B4CB 0%, #D4AF37 50%, #B8860B 100%);
      --fashion-shadow: 0 4px 20px rgba(233, 30, 99, 0.2);
    }

    .theme-stylist .voila-heading {
      font-family: 'Playfair Display', Georgia, serif;
      font-weight: 700;
      letter-spacing: -0.02em;
    }

    .theme-stylist .voila-subheading {
      font-family: 'Inter', system-ui, sans-serif;
      font-weight: 500;
      letter-spacing: 0.01em;
    }

    .theme-stylist .stylist-card {
      background: var(--rose-gold-gradient);
      border-radius: 12px;
      box-shadow: var(--fashion-shadow);
    }

    /* Enhanced focus styles */
    .theme-stylist *:focus-visible {
      outline: 2px solid rgb(233, 30, 99);
      outline-offset: 2px;
      border-radius: 4px;
    }

    /* Custom button styles */
    .theme-stylist .btn-rose-gold {
      background: var(--rose-gold-gradient);
      color: white;
      border: none;
      transition: all 0.3s ease;
    }

    .theme-stylist .btn-rose-gold:hover {
      transform: translateY(-1px);
      box-shadow: 0 6px 25px rgba(233, 30, 99, 0.25);
    }
  `,

  // Light mode colors
  light: {
    // Base colors
    background: '#FEFEFE',
    foreground: '#2D1B2E',
    card: '#FFFFFF',
    cardForeground: '#2D1B2E',
    popover: '#FFFFFF',
    popoverForeground: '#2D1B2E',

    // Brand colors - Rose gold and deep pink palette
    primary: '#E91E63',                    // Deep pink primary
    primaryForeground: '#FFFFFF',
    secondary: '#F8BBD9',                  // Light pink secondary
    secondaryForeground: '#7C2D12',

    // Supporting colors
    muted: '#FAF5F7',                      // Very light pink
    mutedForeground: '#8B5A6B',
    accent: '#FFF0F5',                     // Lavender blush
    accentForeground: '#7C2D12',

    // State colors
    destructive: '#DC2626',
    destructiveForeground: '#FFFFFF',

    // Border colors
    border: '#F0D4E7',                     // Soft pink border
    input: '#F0D4E7',
    ring: '#E91E63',

    // Chart colors - Fashion industry palette
    chart1: '#E91E63',                     // Deep pink
    chart2: '#FF6B9D',                     // Rose
    chart3: '#C44569',                     // Dark rose
    chart4: '#FF8A80',                     // Light coral
    chart5: '#AD1457',                     // Dark pink

    // Sidebar colors
    sidebar: '#FDF2F8',                    // Very light pink
    sidebarForeground: '#5D1A1D',
    sidebarPrimary: '#E91E63',
    sidebarPrimaryForeground: '#FFFFFF',
    sidebarAccent: '#FCE7F3',              // Light pink accent
    sidebarAccentForeground: '#5D1A1D',
    sidebarBorder: '#F0D4E7',
    sidebarRing: '#E91E63',
  },

  // Dark mode colors
  dark: {
    // Base colors
    background: '#1A0E1A',                 // Deep dark purple
    foreground: '#F9E8F3',
    card: '#2D1B2E',                       // Dark purple card
    cardForeground: '#F9E8F3',
    popover: '#2D1B2E',
    popoverForeground: '#F9E8F3',

    // Brand colors - Adjusted for dark mode
    primary: '#FF6B9D',                    // Lighter pink for dark mode
    primaryForeground: '#1A0E1A',
    secondary: '#4A2C42',                  // Dark secondary
    secondaryForeground: '#F9E8F3',

    // Supporting colors
    muted: '#3D2A3D',                      // Dark muted
    mutedForeground: '#B8A9C9',
    accent: '#4A2C42',
    accentForeground: '#F9E8F3',

    // State colors
    destructive: '#F87171',
    destructiveForeground: '#1F2937',

    // Border colors
    border: '#5D4E75',                     // Purple-tinted border
    input: '#5D4E75',
    ring: '#FF6B9D',

    // Chart colors - Dark mode fashion palette
    chart1: '#FF6B9D',                     // Light pink
    chart2: '#E91E63',                     // Deep pink
    chart3: '#C44569',                     // Dark rose
    chart4: '#FF8A80',                     // Light coral
    chart5: '#8E24AA',                     // Purple accent

    // Sidebar colors
    sidebar: '#1A0E1A',                    // Match background
    sidebarForeground: '#D4A8CD',
    sidebarPrimary: '#FF6B9D',
    sidebarPrimaryForeground: '#1A0E1A',
    sidebarAccent: '#2D1B2E',
    sidebarAccentForeground: '#D4A8CD',
    sidebarBorder: '#5D4E75',
    sidebarRing: '#FF6B9D',
  }
};

export default stylistTheme;