import { ThemeProvider as s, useTheme as l } from "./theme-provider.js";
const e = {
  id: "base",
  name: "Base",
  description: "Clean default configuration showcasing the base system with minimal styling",
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
    background: "#FFFFFF",
    foreground: "#1F2937",
    card: "#F9FAFB",
    cardForeground: "#1F2937",
    popover: "#FFFFFF",
    popoverForeground: "#1F2937",
    // Simple interactive colors - 50% lighter for visibility
    primary: "#9CA3AF",
    primaryForeground: "#FFFFFF",
    secondary: "#F3F4F6",
    secondaryForeground: "#1F2937",
    muted: "#F9FAFB",
    mutedForeground: "#6B7280",
    accent: "#E5E7EB",
    accentForeground: "#1F2937",
    // State colors
    destructive: "#DC2626",
    destructiveForeground: "#FFFFFF",
    // Border colors
    border: "#E5E7EB",
    input: "#D1D5DB",
    ring: "#374151",
    // Chart colors - simple grayscale progression
    chart1: "#374151",
    chart2: "#6B7280",
    chart3: "#9CA3AF",
    chart4: "#D1D5DB",
    chart5: "#F3F4F6",
    // Sidebar colors
    sidebar: "#F9FAFB",
    sidebarForeground: "#1F2937",
    sidebarPrimary: "#374151",
    sidebarPrimaryForeground: "#FFFFFF",
    sidebarAccent: "#E5E7EB",
    sidebarAccentForeground: "#6B7280",
    sidebarBorder: "#E5E7EB",
    sidebarRing: "#374151"
  },
  dark: {
    // Dark clean colors
    background: "#111827",
    foreground: "#F9FAFB",
    card: "#1F2937",
    cardForeground: "#F9FAFB",
    popover: "#1F2937",
    popoverForeground: "#F9FAFB",
    // Dark interactive colors
    primary: "#D1D5DB",
    primaryForeground: "#111827",
    secondary: "#374151",
    secondaryForeground: "#F9FAFB",
    muted: "#1F2937",
    mutedForeground: "#9CA3AF",
    accent: "#4B5563",
    accentForeground: "#F9FAFB",
    // State colors
    destructive: "#EF4444",
    destructiveForeground: "#FFFFFF",
    // Border colors
    border: "#374151",
    input: "#4B5563",
    ring: "#D1D5DB",
    // Chart colors - bright grayscale for dark mode
    chart1: "#F9FAFB",
    chart2: "#D1D5DB",
    chart3: "#9CA3AF",
    chart4: "#6B7280",
    chart5: "#4B5563",
    // Sidebar colors
    sidebar: "#1F2937",
    sidebarForeground: "#F9FAFB",
    sidebarPrimary: "#D1D5DB",
    sidebarPrimaryForeground: "#111827",
    sidebarAccent: "#374151",
    sidebarAccentForeground: "#9CA3AF",
    sidebarBorder: "#4B5563",
    sidebarRing: "#D1D5DB"
  }
}, r = {
  id: "elegant",
  name: "Elegant",
  description: "Fresh, minimal sky blue theme perfect for business and professional applications",
  // Elegant theme with Playfair Display headings and Montserrat body
  customStyles: `
    /* Elegant theme - Only 4 unified classes */
    .theme-elegant {
      font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      font-weight: 400;
      line-height: 1.6;
      font-feature-settings: 'kern' 1, 'liga' 1, 'calt' 1;
    }
    
    .theme-elegant .voila-heading {
      font-family: 'DM Serif Display', serif;
      font-weight: 400;
      letter-spacing: -0.02em;
      line-height: 1.1;
      font-size: clamp(2.5rem, 6vw, 4rem);
      color: var(--color-foreground);
    }
    
    .theme-elegant .voila-subheading {
      font-family: 'Rubik', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      font-weight: 500;
      letter-spacing: -0.01em;
      line-height: 1.3;
      font-size: clamp(1.25rem, 3vw, 2rem);
      color: var(--color-muted-foreground);
    }
    
    .theme-elegant .voila-brand-logo {
      font-family: 'DM Serif Display', serif;
      font-weight: 400;
      letter-spacing: -0.01em;
      font-size: 1.25rem;
    }
    
    /* Body text enhancements */
    .theme-elegant strong, .theme-elegant b {
      font-weight: 600;
    }
    
    /* Cursor styles for interactive elements */
    .theme-elegant button,
    .theme-elegant .btn,
    .theme-elegant [data-slot="button"],
    .theme-elegant input[type="button"],
    .theme-elegant input[type="submit"],
    .theme-elegant input[type="reset"],
    .theme-elegant a,
    .theme-elegant [role="button"],
    .theme-elegant [tabindex="0"]:not(input):not(textarea):not(select) {
      cursor: pointer;
    }
    
    /* Disabled buttons get not-allowed cursor */
    .theme-elegant button:disabled,
    .theme-elegant .btn:disabled,
    .theme-elegant [data-slot="button"]:disabled,
    .theme-elegant input:disabled {
      cursor: not-allowed;
    }
    
    /* Elegant focus ring with blue accent */
    .theme-elegant *:focus-visible {
      outline: 2px solid #003285;
      outline-offset: 2px;
      box-shadow: 0 0 0 4px rgb(0, 50, 133, 0.1);
    }
  `,
  light: {
    // Clean blue color palette
    background: "#FFFFFF",
    foreground: "#1F2937",
    card: "#F8FAFC",
    cardForeground: "#1F2937",
    popover: "#FFFFFF",
    popoverForeground: "#1F2937",
    // Blue accent system with yellow secondary - 50% lighter for visibility
    primary: "#4A90E2",
    primaryForeground: "#FFFFFF",
    secondary: "#FAA533",
    secondaryForeground: "#FFFFFF",
    muted: "#F8FAFC",
    mutedForeground: "#6B7280",
    accent: "#E0F2FE",
    accentForeground: "#1F2937",
    // State colors
    destructive: "#DC2626",
    destructiveForeground: "#FFFFFF",
    // Border colors
    border: "#E2E8F0",
    input: "#CBD5E1",
    ring: "#003285",
    // Chart colors - blue progression
    chart1: "#003285",
    chart2: "#1E40AF",
    chart3: "#3B82F6",
    chart4: "#60A5FA",
    chart5: "#93C5FD",
    // Sidebar colors
    sidebar: "#F8FAFC",
    sidebarForeground: "#1F2937",
    sidebarPrimary: "#003285",
    sidebarPrimaryForeground: "#FFFFFF",
    sidebarAccent: "#E0F2FE",
    sidebarAccentForeground: "#6B7280",
    sidebarBorder: "#E2E8F0",
    sidebarRing: "#003285"
  },
  dark: {
    // Dark blue palette
    background: "#0F172A",
    foreground: "#F8FAFC",
    card: "#1E293B",
    cardForeground: "#F8FAFC",
    popover: "#1E293B",
    popoverForeground: "#F8FAFC",
    // Dark blue accents with yellow secondary - 50% lighter for visibility
    primary: "#60A5FA",
    primaryForeground: "#0F172A",
    secondary: "#FAA533",
    secondaryForeground: "#000000",
    muted: "#1E293B",
    mutedForeground: "#94A3B8",
    accent: "#1E40AF",
    accentForeground: "#F8FAFC",
    // State colors
    destructive: "#EF4444",
    destructiveForeground: "#FFFFFF",
    // Border colors
    border: "#334155",
    input: "#475569",
    ring: "#2563EB",
    // Chart colors - bright blues for dark mode
    chart1: "#2563EB",
    chart2: "#3B82F6",
    chart3: "#60A5FA",
    chart4: "#93C5FD",
    chart5: "#DBEAFE",
    // Sidebar colors
    sidebar: "#1E293B",
    sidebarForeground: "#F8FAFC",
    sidebarPrimary: "#2563EB",
    sidebarPrimaryForeground: "#F8FAFC",
    sidebarAccent: "#1E40AF",
    sidebarAccentForeground: "#94A3B8",
    sidebarBorder: "#475569",
    sidebarRing: "#2563EB"
  }
}, o = {
  id: "metro",
  name: "Metro",
  description: "Clean, systematic design inspired by modern transit systems for professional applications",
  // Only override design tokens that differ from default
  design: {
    // Metro-specific fonts
    fontDisplay: "'Crimson Text', serif",
    // Metro-specific gradients
    gradientPrimary: "#0f3a36",
    // Flat primary color
    gradientSubtle: "linear-gradient(135deg, oklch(0.96 0.005 240) 0%, oklch(0.88 0.008 240) 100%)",
    gradientHover: "linear-gradient(135deg, oklch(0.55 0.12 220) 0%, #0f3a36 100%)",
    gradientText: "linear-gradient(135deg, #0f3a36 0%, oklch(0.55 0.12 200) 50%, oklch(0.96 0.005 240) 100%)",
    gradientBackground: "linear-gradient(135deg, oklch(0.09 0.01 240) 0%, oklch(0.15 0.015 220) 100%)",
    gradientBackgroundLight: "linear-gradient(135deg, oklch(0.96 0.005 240) 0%, oklch(0.99 0.002 240) 70%, oklch(0.88 0.008 240) 100%)"
  },
  // Only metro-specific styles
  customStyles: `
    /* Metro theme - Only 4 unified classes */
    .theme-metro {
      font-family: 'Libre Baskerville', serif;
      font-weight: 400;
      line-height: 1.6;
    }
    
    .theme-metro .voila-heading {
      font-family: 'Crimson Text', serif;
      font-weight: 700;
      letter-spacing: -0.04em;
      line-height: 1.1;
      font-size: clamp(2.5rem, 6vw, 4rem);
    }
    
    .theme-metro .voila-subheading {
      font-family: 'Work Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      font-weight: 500;
      letter-spacing: -0.01em;
      line-height: 1.3;
      font-size: clamp(1.25rem, 3vw, 2rem);
    }
    
    .theme-metro .voila-brand-logo {
      font-family: 'Crimson Text', serif;
      font-weight: 700;
      letter-spacing: -0.03em;
      font-size: 1.25rem;
    }
    
    /* Body text enhancements */
    .theme-metro strong, .theme-metro b {
      font-weight: 600;
    }
    
    /* Cursor styles for interactive elements */
    .theme-metro button,
    .theme-metro .btn,
    .theme-metro [data-slot="button"],
    .theme-metro input[type="button"],
    .theme-metro input[type="submit"],
    .theme-metro input[type="reset"],
    .theme-metro a,
    .theme-metro [role="button"],
    .theme-metro [tabindex="0"]:not(input):not(textarea):not(select) {
      cursor: pointer;
    }
    
    /* Disabled buttons get not-allowed cursor */
    .theme-metro button:disabled,
    .theme-metro .btn:disabled,
    .theme-metro [data-slot="button"]:disabled,
    .theme-metro input:disabled {
      cursor: not-allowed;
    }
    
    /* Metro focus style override */
    .theme-metro *:focus-visible {
      outline: 2px solid #0f3a36;
      outline-offset: 2px;
      box-shadow: 0 0 0 4px rgb(15, 58, 54, 0.2);
    }
  `,
  light: {
    // Only override colors that are different from default
    background: "oklch(0.99 0.002 240)",
    backgroundGradient: "linear-gradient(135deg, oklch(0.96 0.005 240) 0%, oklch(0.99 0.002 240) 70%, oklch(0.88 0.008 240) 100%)",
    foreground: "oklch(0.09 0.01 240)",
    card: "oklch(0.98 0.003 240)",
    cardForeground: "oklch(0.09 0.01 240)",
    popover: "oklch(0.98 0.003 240)",
    popoverForeground: "oklch(0.09 0.01 240)",
    // Metro color palette - 50% lighter for visibility
    primary: "#2d7a70",
    primaryForeground: "oklch(0.98 0.003 240)",
    secondary: "#FAA533",
    secondaryForeground: "#000000",
    muted: "oklch(0.96 0.005 240)",
    mutedForeground: "oklch(0.35 0.01 240)",
    accent: "oklch(0.55 0.12 200)",
    accentForeground: "oklch(0.98 0.003 240)",
    // Border colors
    border: "oklch(0.88 0.008 240)",
    input: "oklch(0.88 0.008 240)",
    ring: "#0f3a36",
    // Chart colors - transit-inspired
    chart1: "#0f3a36",
    chart2: "oklch(0.55 0.12 200)",
    chart3: "oklch(0.5 0.1 160)",
    chart4: "oklch(0.6 0.15 60)",
    chart5: "oklch(0.45 0.25 25)",
    // Sidebar colors
    sidebar: "oklch(0.98 0.003 240)",
    sidebarForeground: "oklch(0.09 0.01 240)",
    sidebarPrimary: "#0f3a36",
    sidebarPrimaryForeground: "oklch(0.98 0.003 240)",
    sidebarAccent: "oklch(0.55 0.12 200)",
    sidebarAccentForeground: "oklch(0.35 0.01 240)",
    sidebarBorder: "oklch(0.88 0.008 240)",
    sidebarRing: "#0f3a36"
  },
  dark: {
    // Dark mode metro colors
    background: "oklch(0.05 0.005 220)",
    backgroundGradient: "linear-gradient(135deg, oklch(0.05 0.005 220) 0%, oklch(0.15 0.015 220) 100%)",
    foreground: "oklch(0.95 0.01 220)",
    card: "oklch(0.20 0.015 220)",
    cardForeground: "oklch(0.95 0.01 220)",
    popover: "oklch(0.20 0.015 220)",
    popoverForeground: "oklch(0.95 0.01 220)",
    primary: "#4fa399",
    primaryForeground: "oklch(0.05 0.005 220)",
    secondary: "#FAA533",
    secondaryForeground: "#000000",
    muted: "oklch(0.08 0.01 240)",
    mutedForeground: "oklch(0.75 0.01 240)",
    accent: "oklch(0.75 0.18 200)",
    accentForeground: "oklch(0.04 0.01 240)",
    // Border colors
    border: "oklch(0.18 0.015 240)",
    input: "oklch(0.18 0.015 240)",
    ring: "#0f3a36",
    // Chart colors - brightened for dark mode
    chart1: "#0f3a36",
    chart2: "oklch(0.75 0.18 200)",
    chart3: "oklch(0.7 0.15 160)",
    chart4: "oklch(0.75 0.2 60)",
    chart5: "oklch(0.65 0.25 25)",
    // Sidebar colors
    sidebar: "oklch(0.20 0.015 220)",
    sidebarForeground: "oklch(0.95 0.01 220)",
    sidebarPrimary: "#0f3a36",
    sidebarPrimaryForeground: "oklch(0.98 0.005 220)",
    sidebarAccent: "oklch(0.75 0.18 200)",
    sidebarAccentForeground: "oklch(0.75 0.01 240)",
    sidebarBorder: "oklch(0.18 0.015 240)",
    sidebarRing: "#0f3a36"
  }
}, t = {
  id: "studio",
  name: "Studio",
  description: "Sophisticated designer grays with strategic color accents for creative professionals",
  // Only override design tokens that differ from default
  design: {
    // Studio-specific fonts
    fontPrimary: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
    fontDisplay: "'Merriweather', serif",
    // Studio-specific gradients
    gradientPrimary: "rgb(37, 41, 49)",
    // Flat primary color
    gradientSubtle: "linear-gradient(135deg, oklch(0.97 0.002 270) 0%, oklch(0.90 0.003 270) 100%)",
    gradientHover: "linear-gradient(135deg, oklch(0.60 0.08 260) 0%, rgb(37, 41, 49) 100%)",
    gradientText: "linear-gradient(135deg, rgb(37, 41, 49) 0%, oklch(0.65 0.15 45) 50%, oklch(0.97 0.002 270) 100%)",
    gradientBackground: "linear-gradient(135deg, oklch(0.08 0.005 270) 0%, oklch(0.15 0.01 270) 100%)",
    gradientBackgroundLight: "linear-gradient(135deg, oklch(0.97 0.002 270) 0%, oklch(0.99 0.001 270) 70%, oklch(0.90 0.003 270) 100%)"
  },
  // Only studio-specific styles
  customStyles: `
    /* Studio theme - Only 4 unified classes */
    .theme-studio {
      font-family: 'Source Serif Pro', serif;
      font-weight: 400;
      line-height: 1.6;
    }
    
    .theme-studio .voila-heading {
      font-family: 'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      font-weight: 700;
      letter-spacing: -0.02em;
      line-height: 1.1;
      font-size: clamp(2.5rem, 6vw, 4rem);
    }
    
    .theme-studio .voila-subheading {
      font-family: 'Poppins', sans-serif;
      font-weight: 600;
      letter-spacing: -0.02em;
      line-height: 1.3;
      font-size: clamp(1.25rem, 3vw, 2rem);
    }
    
    .theme-studio .voila-brand-logo {
      font-family: 'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      font-weight: 600;
      letter-spacing: -0.01em;
      font-size: 1.25rem;
    }
    
    /* Studio-specific button hover */
    .theme-studio .btn-primary:hover,
    .theme-studio button[data-variant="primary"]:hover,
    .theme-studio [data-slot="button"][data-variant="primary"]:hover {
      background: var(--voila-gradient-hover);
    }
    
    
    /* Body text enhancements */
    .theme-studio strong, .theme-studio b {
      font-weight: 600;
    }
    
    /* Cursor styles for interactive elements */
    .theme-studio button,
    .theme-studio .btn,
    .theme-studio [data-slot="button"],
    .theme-studio input[type="button"],
    .theme-studio input[type="submit"],
    .theme-studio input[type="reset"],
    .theme-studio a,
    .theme-studio [role="button"],
    .theme-studio [tabindex="0"]:not(input):not(textarea):not(select) {
      cursor: pointer;
    }
    
    /* Disabled buttons get not-allowed cursor */
    .theme-studio button:disabled,
    .theme-studio .btn:disabled,
    .theme-studio [data-slot="button"]:disabled,
    .theme-studio input:disabled {
      cursor: not-allowed;
    }
    
    /* Studio focus style override */
    .theme-studio *:focus-visible {
      outline: 2px solid rgb(37, 41, 49);
      outline-offset: 2px;
      box-shadow: 0 0 0 4px rgb(37, 41, 49, 0.2);
    }
  `,
  light: {
    // Only override colors that are different from default
    background: "oklch(0.99 0.001 270)",
    backgroundGradient: "linear-gradient(135deg, oklch(0.97 0.002 270) 0%, oklch(0.99 0.001 270) 70%, oklch(0.90 0.003 270) 100%)",
    foreground: "oklch(0.08 0.005 270)",
    card: "oklch(0.98 0.002 270)",
    cardForeground: "oklch(0.08 0.005 270)",
    popover: "oklch(0.98 0.002 270)",
    popoverForeground: "oklch(0.08 0.005 270)",
    // Studio color palette - 50% lighter for visibility
    primary: "rgb(93, 102, 122)",
    primaryForeground: "oklch(0.98 0.002 270)",
    secondary: "oklch(0.85 0.003 270)",
    secondaryForeground: "oklch(0.15 0.008 270)",
    muted: "oklch(0.97 0.002 270)",
    mutedForeground: "oklch(0.38 0.005 270)",
    accent: "oklch(0.65 0.15 45)",
    accentForeground: "oklch(0.98 0.002 270)",
    // Border colors
    border: "oklch(0.9 0.003 270)",
    input: "oklch(0.9 0.003 270)",
    ring: "rgb(37, 41, 49)",
    // Chart colors - creative palette
    chart1: "rgb(37, 41, 49)",
    chart2: "oklch(0.65 0.15 45)",
    chart3: "oklch(0.45 0.12 200)",
    chart4: "oklch(0.5 0.1 320)",
    chart5: "oklch(0.4 0.08 120)",
    // Sidebar colors
    sidebar: "oklch(0.98 0.002 270)",
    sidebarForeground: "oklch(0.08 0.005 270)",
    sidebarPrimary: "rgb(37, 41, 49)",
    sidebarPrimaryForeground: "oklch(0.98 0.002 270)",
    sidebarAccent: "oklch(0.65 0.15 45)",
    sidebarAccentForeground: "oklch(0.38 0.005 270)",
    sidebarBorder: "oklch(0.9 0.003 270)",
    sidebarRing: "rgb(37, 41, 49)"
  },
  dark: {
    // Dark mode studio colors
    background: "oklch(0.05 0.003 270)",
    backgroundGradient: "linear-gradient(135deg, oklch(0.05 0.003 270) 0%, oklch(0.15 0.01 270) 100%)",
    foreground: "oklch(0.95 0.005 270)",
    card: "oklch(0.20 0.01 270)",
    cardForeground: "oklch(0.95 0.005 270)",
    popover: "oklch(0.20 0.01 270)",
    popoverForeground: "oklch(0.95 0.005 270)",
    primary: "rgb(130, 140, 160)",
    primaryForeground: "oklch(0.08 0.005 270)",
    secondary: "oklch(0.10 0.008 270)",
    secondaryForeground: "oklch(0.94 0.005 270)",
    muted: "oklch(0.08 0.006 270)",
    mutedForeground: "oklch(0.74 0.005 270)",
    accent: "oklch(0.85 0.18 45)",
    accentForeground: "oklch(0.04 0.005 270)",
    // Border colors
    border: "oklch(0.18 0.008 270)",
    input: "oklch(0.18 0.008 270)",
    ring: "rgb(37, 41, 49)",
    // Chart colors - brightened for dark mode
    chart1: "rgb(37, 41, 49)",
    chart2: "oklch(0.85 0.18 45)",
    chart3: "oklch(0.7 0.15 200)",
    chart4: "oklch(0.72 0.12 320)",
    chart5: "oklch(0.68 0.1 120)",
    // Sidebar colors
    sidebar: "oklch(0.20 0.01 270)",
    sidebarForeground: "oklch(0.95 0.005 270)",
    sidebarPrimary: "rgb(37, 41, 49)",
    sidebarPrimaryForeground: "oklch(0.98 0.003 270)",
    sidebarAccent: "oklch(0.85 0.18 45)",
    sidebarAccentForeground: "oklch(0.74 0.005 270)",
    sidebarBorder: "oklch(0.18 0.008 270)",
    sidebarRing: "rgb(37, 41, 49)"
  }
}, a = {
  id: "vivid",
  name: "Vivid",
  description: "Premium cursive theme with sophisticated typography for luxury brands and creative portfolios",
  // Only override design tokens that differ from default
  design: {
    // Vivid-specific fonts
    fontPrimary: "'Libre Baskerville', 'Merriweather', 'Times New Roman', serif",
    fontDisplay: "'Playfair Display', 'Crimson Text', 'Times New Roman', serif",
    fontScript: "'Caveat', 'Amatic SC', cursive",
    // More elegant spacing and radius for luxury feel
    radiusEnhance: "1.2rem",
    spacingEnhance: "1.2",
    // Enhanced shadows for premium feel
    shadowEnhance: "0 4px 20px rgb(0 0 0 / 0.08), 0 1px 3px rgb(0 0 0 / 0.05)",
    shadowLg: "0 8px 30px rgb(0 0 0 / 0.12), 0 2px 6px rgb(0 0 0 / 0.08)",
    shadowXl: "0 12px 40px rgb(0 0 0 / 0.15), 0 4px 12px rgb(0 0 0 / 0.1)"
  },
  // Only vivid-specific styles
  customStyles: `
    /* Vivid theme - Only 4 unified classes */
    .theme-vivid {
      font-family: 'Libre Baskerville', serif;
      font-weight: 400;
      line-height: 1.7;
      font-feature-settings: 'kern' 1, 'liga' 1, 'calt' 1, 'onum' 1;
    }
    
    .theme-vivid .voila-heading {
      font-family: 'Caveat', cursive;
      font-weight: 700;
      letter-spacing: -0.02em;
      line-height: 1.1;
      font-size: clamp(2.5rem, 6vw, 4rem);
    }
    
    .theme-vivid .voila-subheading {
      font-family: 'Playfair Display', serif;
      font-weight: 500;
      font-style: italic;
      letter-spacing: -0.01em;
      line-height: 1.3;
      font-size: clamp(1.25rem, 3vw, 2rem);
    }
    
    .theme-vivid .voila-brand-logo {
      font-family: 'Caveat', cursive;
      font-weight: 700;
      letter-spacing: -0.01em;
      font-size: 1.5rem;
    }
    
    /* Clean gradient for bg-primary in Vivid theme only */
    .theme-vivid .bg-primary {
      background: linear-gradient(135deg, oklch(0.25 0.12 280) 0%, rgb(111, 103, 244) 100%) !important;
    }
    
    .theme-vivid.dark .bg-primary {
      background: linear-gradient(135deg, oklch(0.45 0.18 280) 0%, rgb(151, 143, 255) 100%) !important;
    }
    
    /* Premium typography */
    .theme-vivid p, .theme-vivid div, .theme-vivid span {
      font-feature-settings: 'kern' 1, 'liga' 1, 'calt' 1, 'onum' 1;
      line-height: 1.7;
    }
    
    /* Elegant button effects */
    .theme-vivid .btn-primary,
    .theme-vivid button[data-variant="primary"],
    .theme-vivid [data-slot="button"][data-variant="primary"] {
      background: linear-gradient(135deg, oklch(0.25 0.12 280) 0%, rgb(111, 103, 244) 100%);
      letter-spacing: 0.025em;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      border-radius: 1.2rem;
    }
    
    .theme-vivid button,
    .theme-vivid [data-slot="button"] {
      border-radius: 1.2rem;
    }
    
    .theme-vivid .btn-primary:hover,
    .theme-vivid button[data-variant="primary"]:hover,
    .theme-vivid [data-slot="button"][data-variant="primary"]:hover {
      background: linear-gradient(135deg, oklch(0.22 0.14 315) 0%, oklch(0.25 0.12 280) 100%);
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgb(0 0 0 / 0.15), 0 3px 10px rgb(0 0 0 / 0.1);
    }
    
    /* Premium cards */
    .theme-vivid [data-slot="card"] {
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      border: 1px solid oklch(from var(--color-border) l c h / 0.3);
    }
    
    .theme-vivid [data-slot="card"]:hover {
      transform: translateY(-4px);
      box-shadow: 0 12px 40px rgb(0 0 0 / 0.12), 0 4px 12px rgb(0 0 0 / 0.08);
    }
    
    /* Darker shadows for dark mode cards */
    .theme-vivid.dark [data-slot="card"] {
      box-shadow: 0 4px 20px rgb(0 0 0 / 0.25), 0 1px 3px rgb(0 0 0 / 0.15);
      border: 1px solid oklch(from var(--color-border) l c h / 0.4);
    }
    
    .theme-vivid.dark [data-slot="card"]:hover {
      box-shadow: 0 12px 40px rgb(0 0 0 / 0.35), 0 4px 12px rgb(0 0 0 / 0.20);
    }
    
    /* Cursor styles for interactive elements */
    .theme-vivid button,
    .theme-vivid .btn,
    .theme-vivid [data-slot="button"],
    .theme-vivid input[type="button"],
    .theme-vivid input[type="submit"],
    .theme-vivid input[type="reset"],
    .theme-vivid a,
    .theme-vivid [role="button"],
    .theme-vivid [tabindex="0"]:not(input):not(textarea):not(select) {
      cursor: pointer;
    }
    
    /* Disabled buttons get not-allowed cursor */
    .theme-vivid button:disabled,
    .theme-vivid .btn:disabled,
    .theme-vivid [data-slot="button"]:disabled,
    .theme-vivid input:disabled {
      cursor: not-allowed;
    }
    
    /* Refined focus styles */
    .theme-vivid *:focus-visible {
      outline-offset: 3px;
      box-shadow: 0 0 0 6px oklch(0.45 0.08 290 / 0.15);
    }
  `,
  light: {
    // Only override colors that are different from default
    background: "oklch(1.00 0.000 0)",
    backgroundGradient: "linear-gradient(135deg, oklch(0.45 0.08 290 / 0.02) 0%, oklch(1.00 0.000 0) 70%, oklch(0.98 0.005 60 / 0.01) 100%)",
    foreground: "oklch(0.18 0.02 290)",
    card: "oklch(0.99 0.002 290)",
    cardForeground: "oklch(0.18 0.02 290)",
    popover: "oklch(0.99 0.002 290)",
    popoverForeground: "oklch(0.18 0.02 290)",
    // Vivid color palette - blue-dominant elegant with custom rgb gradient
    primary: "oklch(0.50 0.18 280)",
    primaryForeground: "oklch(0.98 0.005 60)",
    secondary: "oklch(0.58 0.20 15)",
    secondaryForeground: "oklch(0.98 0.005 60)",
    muted: "oklch(0.97 0.02 70)",
    mutedForeground: "oklch(0.42 0.05 290)",
    accent: "oklch(0.75 0.12 40)",
    accentForeground: "oklch(0.08 0.02 290)",
    // Border colors
    border: "oklch(0.90 0.02 290)",
    input: "oklch(0.90 0.02 290)",
    ring: "oklch(0.45 0.08 290)",
    // Chart colors - vibrant elegant spectrum  
    chart1: "oklch(0.25 0.12 280)",
    chart2: "oklch(0.58 0.20 15)",
    chart3: "oklch(0.75 0.12 40)",
    chart4: "oklch(0.22 0.14 315)",
    chart5: "oklch(0.45 0.08 290)",
    // Sidebar colors
    sidebar: "oklch(0.98 0.005 60)",
    sidebarForeground: "oklch(0.18 0.02 290)",
    sidebarPrimary: "oklch(0.45 0.08 290)",
    sidebarPrimaryForeground: "oklch(0.98 0.005 60)",
    sidebarAccent: "oklch(0.95 0.015 290)",
    sidebarAccentForeground: "oklch(0.42 0.05 290)",
    sidebarBorder: "oklch(0.90 0.02 290)",
    sidebarRing: "oklch(0.45 0.08 290)"
  },
  dark: {
    // Dark mode vivid colors
    background: "oklch(0.08 0.02 290)",
    backgroundGradient: "linear-gradient(135deg, oklch(0.08 0.02 290) 0%, oklch(0.06 0.015 320) 100%)",
    foreground: "oklch(0.92 0.01 60)",
    card: "oklch(0.20 0.04 290)",
    cardForeground: "oklch(0.92 0.01 60)",
    popover: "oklch(0.16 0.03 290)",
    popoverForeground: "oklch(0.92 0.01 60)",
    // Brightened colors for dark mode with custom rgb gradient
    primary: "oklch(0.68 0.25 280)",
    primaryForeground: "oklch(0.08 0.02 290)",
    secondary: "oklch(0.70 0.25 15)",
    secondaryForeground: "oklch(0.08 0.02 290)",
    muted: "oklch(0.10 0.02 290)",
    mutedForeground: "oklch(0.70 0.05 290)",
    accent: "oklch(0.80 0.15 40)",
    accentForeground: "oklch(0.08 0.02 290)",
    // Border colors
    border: "oklch(0.28 0.05 290)",
    input: "oklch(0.25 0.04 290)",
    ring: "oklch(0.62 0.12 290)",
    // Chart colors - brightened for dark mode
    chart1: "oklch(0.45 0.18 280)",
    chart2: "oklch(0.70 0.25 15)",
    chart3: "oklch(0.80 0.15 40)",
    chart4: "oklch(0.42 0.20 315)",
    chart5: "oklch(0.65 0.12 290)",
    // Sidebar colors
    sidebar: "oklch(0.10 0.02 290)",
    sidebarForeground: "oklch(0.92 0.01 60)",
    sidebarPrimary: "oklch(0.62 0.12 290)",
    sidebarPrimaryForeground: "oklch(0.08 0.02 290)",
    sidebarAccent: "oklch(0.18 0.03 290)",
    sidebarAccentForeground: "oklch(0.70 0.05 290)",
    sidebarBorder: "oklch(0.28 0.05 290)",
    sidebarRing: "oklch(0.62 0.12 290)"
  }
}, i = [
  "base",
  "elegant",
  "metro",
  "studio",
  "vivid"
], n = {
  base: e,
  elegant: r,
  metro: o,
  studio: t,
  vivid: a
};
export {
  n as ALL_THEME_PRESETS,
  i as AVAILABLE_THEMES,
  s as ThemeProvider,
  e as base,
  e as baseTheme,
  r as elegant,
  r as elegantTheme,
  o as metro,
  o as metroTheme,
  t as studio,
  t as studioTheme,
  l as useTheme,
  a as vivid,
  a as vividTheme
};
//# sourceMappingURL=themes.js.map
