/**
 * Base theme preset - Clean default configuration
 * @description Basic black & white theme showcasing the default base configuration
 * @package @voilajsx/uikit
 * @file /src/themes/presets/base.js
 */

// Base theme - self-contained

/**
 * Base theme preset - Shows the default configuration with minimal overrides
 * Perfect for demonstrating the base system and as a starting point for new themes
 */
const baseTheme = {
  id: 'base',
  name: 'Base',
  description: 'Clean default configuration showcasing the base system with minimal styling',

  // Base theme with system fonts only
  customStyles: `
    /* Base theme - Only 4 unified classes */
    .theme-base {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      font-weight: 400;
      line-height: 1.6;
      font-feature-settings: 'kern' 1, 'liga' 1, 'calt' 1;
    }
    
    .theme-base .voila-heading {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-weight: 800;
      letter-spacing: -0.04em;
      line-height: 1.1;
      font-size: clamp(2.5rem, 6vw, 4rem);
      color: var(--color-foreground);
    }
    
    .theme-base .voila-subheading {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-weight: 600;
      letter-spacing: -0.02em;
      line-height: 1.3;
      font-size: clamp(1.25rem, 3vw, 2rem);
      color: var(--color-muted-foreground);
    }
    
    .theme-base .voila-brand-logo {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-weight: 700;
      letter-spacing: -0.03em;
      font-size: 1.25rem;
    }
    
    /* Body text enhancements */
    .theme-base strong, .theme-base b {
      font-weight: 600;
    }
    
    /* Cursor styles for interactive elements */
    .theme-base button,
    .theme-base .btn,
    .theme-base [data-slot="button"],
    .theme-base input[type="button"],
    .theme-base input[type="submit"],
    .theme-base input[type="reset"],
    .theme-base a,
    .theme-base [role="button"],
    .theme-base [tabindex="0"]:not(input):not(textarea):not(select) {
      cursor: pointer;
    }
    
    /* Disabled buttons get not-allowed cursor */
    .theme-base button:disabled,
    .theme-base .btn:disabled,
    .theme-base [data-slot="button"]:disabled,
    .theme-base input:disabled {
      cursor: not-allowed;
    }

    /* Clean focus ring */
    .theme-base *:focus-visible {
      outline: 2px solid var(--color-foreground);
      outline-offset: 2px;
      box-shadow: 0 0 0 4px rgb(from var(--color-foreground) r g b / 0.1);
    }
  `,

  // Use default colors with minimal modifications
  light: {
    // Base clean colors
    background: '#FFFFFF',
    foreground: '#1F2937',
    card: '#F9FAFB',
    cardForeground: '#1F2937',
    popover: '#FFFFFF',
    popoverForeground: '#1F2937',

    // Simple interactive colors - 50% lighter for visibility
    primary: '#5D626B',
    primaryForeground: '#FFFFFF',
    secondary: '#E5E7EB',
    secondaryForeground: '#1F2937',
    muted: '#F9FAFB',
    mutedForeground: '#6B7280',
    accent: '#F3F4F6',
    accentForeground: '#1F2937',

    // State colors
    destructive: '#DC2626',
    destructiveForeground: '#FFFFFF',

    // Border colors
    border: '#E5E7EB',
    input: '#D1D5DB',
    ring: '#374151',

    // Chart colors - simple grayscale progression
    chart1: '#374151',
    chart2: '#6B7280',
    chart3: '#9CA3AF',
    chart4: '#D1D5DB',
    chart5: '#F3F4F6',

    // Sidebar colors
    sidebar: '#F9FAFB',
    sidebarForeground: '#1F2937',
    sidebarPrimary: '#374151',
    sidebarPrimaryForeground: '#FFFFFF',
    sidebarAccent: '#E5E7EB',
    sidebarAccentForeground: '#6B7280',
    sidebarBorder: '#E5E7EB',
    sidebarRing: '#374151',
  },

  dark: {
    // Dark clean colors
    background: '#111827',
    foreground: '#F9FAFB',
    card: '#1F2937',
    cardForeground: '#F9FAFB',
    popover: '#1F2937',
    popoverForeground: '#F9FAFB',

    // Dark interactive colors
    primary: '#7E8084',
    primaryForeground: '#111827',
    secondary: '#4B5563',
    secondaryForeground: '#F9FAFB',
    muted: '#1F2937',
    mutedForeground: '#9CA3AF',
    accent: '#374151',
    accentForeground: '#F9FAFB',

    // State colors
    destructive: '#EF4444',
    destructiveForeground: '#FFFFFF',

    // Border colors
    border: '#374151',
    input: '#4B5563',
    ring: '#D1D5DB',

    // Chart colors - bright grayscale for dark mode
    chart1: '#F9FAFB',
    chart2: '#D1D5DB',
    chart3: '#9CA3AF',
    chart4: '#6B7280',
    chart5: '#4B5563',

    // Sidebar colors
    sidebar: '#1F2937',
    sidebarForeground: '#F9FAFB',
    sidebarPrimary: '#D1D5DB',
    sidebarPrimaryForeground: '#111827',
    sidebarAccent: '#374151',
    sidebarAccentForeground: '#9CA3AF',
    sidebarBorder: '#4B5563',
    sidebarRing: '#D1D5DB',
  },
};

export default baseTheme;