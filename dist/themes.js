import { ThemeProvider as n, useTheme as i } from "./theme-provider.js";
const o = {
  id: "aurora",
  name: "Aurora",
  description: "Magical northern lights theme with purple-green gradients for creative applications",
  light: {
    // Base colors
    background: "oklch(0.99 0.003 300)",
    foreground: "oklch(0.12 0.015 300)",
    card: "oklch(0.97 0.005 300)",
    cardForeground: "oklch(0.12 0.015 300)",
    popover: "oklch(0.97 0.005 300)",
    popoverForeground: "oklch(0.12 0.015 300)",
    // Interactive colors
    primary: "oklch(0.48 0.2 290)",
    // Aurora purple
    primaryForeground: "oklch(0.98 0.003 300)",
    secondary: "oklch(0.81 0.012 300)",
    secondaryForeground: "oklch(0.18 0.02 300)",
    muted: "oklch(0.94 0.008 300)",
    mutedForeground: "oklch(0.34 0.015 300)",
    accent: "oklch(0.62 0.18 150)",
    // Aurora green
    accentForeground: "oklch(0.98 0.003 300)",
    // State colors
    destructive: "oklch(0.45 0.25 25)",
    destructiveForeground: "oklch(0.98 0.003 300)",
    // Border colors
    border: "oklch(0.86 0.01 300)",
    input: "oklch(0.86 0.01 300)",
    ring: "oklch(0.48 0.2 290)",
    // Chart colors
    chart1: "oklch(0.48 0.2 290)",
    // Aurora purple
    chart2: "oklch(0.62 0.18 150)",
    // Aurora green
    chart3: "oklch(0.55 0.22 200)",
    // Aurora blue
    chart4: "oklch(0.6 0.15 320)",
    // Aurora pink
    chart5: "oklch(0.5 0.16 120)",
    // Aurora mint
    // Sidebar colors
    sidebar: "oklch(0.97 0.005 300)",
    sidebarForeground: "oklch(0.12 0.015 300)",
    sidebarPrimary: "oklch(0.48 0.2 290)",
    sidebarPrimaryForeground: "oklch(0.98 0.003 300)",
    sidebarAccent: "oklch(0.94 0.008 300)",
    sidebarAccentForeground: "oklch(0.34 0.015 300)",
    sidebarBorder: "oklch(0.86 0.01 300)",
    sidebarRing: "oklch(0.48 0.2 290)"
  },
  dark: {
    // Base colors
    background: "oklch(0.04 0.01 300)",
    foreground: "oklch(0.95 0.008 300)",
    card: "oklch(0.15 0.015 300)",
    cardForeground: "oklch(0.95 0.008 300)",
    popover: "oklch(0.15 0.015 300)",
    popoverForeground: "oklch(0.95 0.008 300)",
    // Interactive colors
    primary: "oklch(0.58 0.12 280)",
    // Professional aurora purple
    primaryForeground: "oklch(0.98 0.005 300)",
    secondary: "oklch(0.06 0.02 300)",
    secondaryForeground: "oklch(0.92 0.01 300)",
    muted: "oklch(0.1 0.015 300)",
    mutedForeground: "oklch(0.76 0.012 300)",
    accent: "oklch(0.85 0.22 150)",
    // Bright aurora green
    accentForeground: "oklch(0.05 0.015 300)",
    // State colors
    destructive: "oklch(0.65 0.25 25)",
    destructiveForeground: "oklch(0.05 0.015 300)",
    // Border colors
    border: "oklch(0.2 0.02 300)",
    input: "oklch(0.2 0.02 300)",
    ring: "oklch(0.58 0.12 280)",
    // Chart colors
    chart1: "oklch(0.58 0.12 280)",
    // Professional aurora purple
    chart2: "oklch(0.85 0.22 150)",
    // Bright aurora green
    chart3: "oklch(0.7 0.25 200)",
    // Bright aurora blue
    chart4: "oklch(0.78 0.2 320)",
    // Bright aurora pink
    chart5: "oklch(0.73 0.2 120)",
    // Bright aurora mint
    // Sidebar colors
    sidebar: "oklch(0.15 0.015 300)",
    sidebarForeground: "oklch(0.95 0.008 300)",
    sidebarPrimary: "oklch(0.58 0.12 280)",
    sidebarPrimaryForeground: "oklch(0.98 0.005 300)",
    sidebarAccent: "oklch(0.1 0.015 300)",
    sidebarAccentForeground: "oklch(0.76 0.012 300)",
    sidebarBorder: "oklch(0.2 0.02 300)",
    sidebarRing: "oklch(0.58 0.12 280)"
  }
}, r = {
  id: "metro",
  name: "Metro",
  description: "Clean, systematic design inspired by modern transit systems for professional applications",
  light: {
    // Base colors
    background: "oklch(0.99 0.002 240)",
    foreground: "oklch(0.09 0.01 240)",
    card: "oklch(0.98 0.003 240)",
    cardForeground: "oklch(0.09 0.01 240)",
    popover: "oklch(0.98 0.003 240)",
    popoverForeground: "oklch(0.09 0.01 240)",
    // Interactive colors
    primary: "oklch(0.35 0.08 240)",
    // Deep metro blue
    primaryForeground: "oklch(0.98 0.003 240)",
    secondary: "oklch(0.84 0.008 240)",
    secondaryForeground: "oklch(0.15 0.015 240)",
    muted: "oklch(0.96 0.005 240)",
    mutedForeground: "oklch(0.35 0.01 240)",
    accent: "oklch(0.55 0.12 200)",
    // Transit teal
    accentForeground: "oklch(0.98 0.003 240)",
    // State colors
    destructive: "oklch(0.45 0.25 25)",
    destructiveForeground: "oklch(0.98 0.003 240)",
    // Border colors
    border: "oklch(0.88 0.008 240)",
    input: "oklch(0.88 0.008 240)",
    ring: "oklch(0.35 0.08 240)",
    // Chart colors
    chart1: "oklch(0.35 0.08 240)",
    // Metro blue
    chart2: "oklch(0.55 0.12 200)",
    // Transit teal
    chart3: "oklch(0.5 0.1 160)",
    // Line green
    chart4: "oklch(0.6 0.15 60)",
    // Warning amber
    chart5: "oklch(0.45 0.25 25)",
    // Alert red
    // Sidebar colors
    sidebar: "oklch(0.98 0.003 240)",
    sidebarForeground: "oklch(0.09 0.01 240)",
    sidebarPrimary: "oklch(0.35 0.08 240)",
    sidebarPrimaryForeground: "oklch(0.98 0.003 240)",
    sidebarAccent: "oklch(0.96 0.005 240)",
    sidebarAccentForeground: "oklch(0.35 0.01 240)",
    sidebarBorder: "oklch(0.88 0.008 240)",
    sidebarRing: "oklch(0.35 0.08 240)"
  },
  dark: {
    // Base colors
    background: "oklch(0.05 0.005 220)",
    foreground: "oklch(0.95 0.01 220)",
    card: "oklch(0.15 0.015 220)",
    cardForeground: "oklch(0.95 0.01 220)",
    popover: "oklch(0.15 0.015 220)",
    popoverForeground: "oklch(0.95 0.01 220)",
    // Interactive colors
    primary: "oklch(0.55 0.12 220)",
    // Professional blue
    primaryForeground: "oklch(0.98 0.005 220)",
    secondary: "oklch(0.02 0.015 240)",
    secondaryForeground: "oklch(0.95 0.008 240)",
    muted: "oklch(0.08 0.01 240)",
    mutedForeground: "oklch(0.75 0.01 240)",
    accent: "oklch(0.75 0.18 200)",
    // Bright transit teal
    accentForeground: "oklch(0.04 0.01 240)",
    // State colors
    destructive: "oklch(0.65 0.25 25)",
    destructiveForeground: "oklch(0.04 0.01 240)",
    // Border colors
    border: "oklch(0.18 0.015 240)",
    input: "oklch(0.18 0.015 240)",
    ring: "oklch(0.55 0.12 220)",
    // Chart colors
    chart1: "oklch(0.55 0.12 220)",
    // Professional blue
    chart2: "oklch(0.75 0.18 200)",
    // Bright transit teal
    chart3: "oklch(0.7 0.15 160)",
    // Bright line green
    chart4: "oklch(0.75 0.2 60)",
    // Bright warning amber
    chart5: "oklch(0.65 0.25 25)",
    // Bright alert red
    // Sidebar colors
    sidebar: "oklch(0.15 0.015 220)",
    sidebarForeground: "oklch(0.95 0.01 220)",
    sidebarPrimary: "oklch(0.55 0.12 220)",
    sidebarPrimaryForeground: "oklch(0.98 0.005 220)",
    sidebarAccent: "oklch(0.08 0.01 240)",
    sidebarAccentForeground: "oklch(0.75 0.01 240)",
    sidebarBorder: "oklch(0.18 0.015 240)",
    sidebarRing: "oklch(0.55 0.12 220)"
  }
}, c = {
  id: "neon",
  name: "Neon",
  description: "Electric cyberpunk theme with glowing accents for gaming and high-tech applications",
  light: {
    // Base colors
    background: "oklch(0.99 0.005 280)",
    foreground: "oklch(0.12 0.02 280)",
    card: "oklch(0.97 0.008 280)",
    cardForeground: "oklch(0.12 0.02 280)",
    popover: "oklch(0.97 0.008 280)",
    popoverForeground: "oklch(0.12 0.02 280)",
    // Interactive colors
    primary: "oklch(0.45 0.28 320)",
    // Electric magenta
    primaryForeground: "oklch(0.98 0.005 280)",
    secondary: "oklch(0.82 0.015 280)",
    secondaryForeground: "oklch(0.18 0.025 280)",
    muted: "oklch(0.95 0.01 280)",
    mutedForeground: "oklch(0.35 0.02 280)",
    accent: "oklch(0.65 0.25 180)",
    // Electric cyan
    accentForeground: "oklch(0.98 0.005 280)",
    // State colors
    destructive: "oklch(0.45 0.3 15)",
    destructiveForeground: "oklch(0.98 0.005 280)",
    // Border colors
    border: "oklch(0.85 0.015 280)",
    input: "oklch(0.85 0.015 280)",
    ring: "oklch(0.45 0.28 320)",
    // Chart colors
    chart1: "oklch(0.45 0.28 320)",
    // Electric magenta
    chart2: "oklch(0.65 0.25 180)",
    // Electric cyan
    chart3: "oklch(0.5 0.3 280)",
    // Electric purple
    chart4: "oklch(0.6 0.25 120)",
    // Electric green
    chart5: "oklch(0.65 0.28 60)",
    // Electric yellow
    // Sidebar colors
    sidebar: "oklch(0.97 0.008 280)",
    sidebarForeground: "oklch(0.12 0.02 280)",
    sidebarPrimary: "oklch(0.45 0.28 320)",
    sidebarPrimaryForeground: "oklch(0.98 0.005 280)",
    sidebarAccent: "oklch(0.95 0.01 280)",
    sidebarAccentForeground: "oklch(0.35 0.02 280)",
    sidebarBorder: "oklch(0.85 0.015 280)",
    sidebarRing: "oklch(0.45 0.28 320)"
  },
  dark: {
    // Base colors
    background: "oklch(0.04 0.015 280)",
    foreground: "oklch(0.95 0.01 280)",
    card: "oklch(0.15 0.02 280)",
    cardForeground: "oklch(0.95 0.01 280)",
    popover: "oklch(0.15 0.02 280)",
    popoverForeground: "oklch(0.95 0.01 280)",
    // Interactive colors
    primary: "oklch(0.55 0.18 300)",
    // Professional electric purple
    primaryForeground: "oklch(0.98 0.005 280)",
    secondary: "oklch(0.05 0.025 280)",
    secondaryForeground: "oklch(0.9 0.015 280)",
    muted: "oklch(0.08 0.02 280)",
    mutedForeground: "oklch(0.78 0.015 280)",
    accent: "oklch(0.9 0.3 180)",
    // Bright electric cyan
    accentForeground: "oklch(0.03 0.02 280)",
    // State colors
    destructive: "oklch(0.7 0.35 15)",
    destructiveForeground: "oklch(0.03 0.02 280)",
    // Border colors
    border: "oklch(0.2 0.025 280)",
    input: "oklch(0.2 0.025 280)",
    ring: "oklch(0.55 0.18 300)",
    // Chart colors
    chart1: "oklch(0.55 0.18 300)",
    // Professional electric purple
    chart2: "oklch(0.9 0.3 180)",
    // Bright electric cyan
    chart3: "oklch(0.7 0.35 280)",
    // Bright electric purple
    chart4: "oklch(0.75 0.3 120)",
    // Bright electric green
    chart5: "oklch(0.8 0.32 60)",
    // Bright electric yellow
    // Sidebar colors
    sidebar: "oklch(0.15 0.02 280)",
    sidebarForeground: "oklch(0.95 0.01 280)",
    sidebarPrimary: "oklch(0.55 0.18 300)",
    sidebarPrimaryForeground: "oklch(0.98 0.005 280)",
    sidebarAccent: "oklch(0.08 0.02 280)",
    sidebarAccentForeground: "oklch(0.78 0.015 280)",
    sidebarBorder: "oklch(0.2 0.025 280)",
    sidebarRing: "oklch(0.55 0.18 300)"
  }
}, e = {
  id: "ruby",
  name: "Ruby",
  description: "Sophisticated red theme with golden accents for premium and luxury brand applications",
  light: {
    // Base colors
    background: "oklch(0.98 0.005 0)",
    foreground: "oklch(0.12 0.01 0)",
    card: "oklch(0.96 0.007 0)",
    cardForeground: "oklch(0.12 0.01 0)",
    popover: "oklch(0.96 0.007 0)",
    popoverForeground: "oklch(0.12 0.01 0)",
    // Interactive colors
    primary: "oklch(0.48 0.18 20)",
    // Ruby red
    primaryForeground: "oklch(0.98 0.005 0)",
    secondary: "oklch(0.8 0.005 0)",
    secondaryForeground: "oklch(0.2 0.01 0)",
    muted: "oklch(0.93 0.005 0)",
    mutedForeground: "oklch(0.4 0.01 0)",
    accent: "oklch(0.56 0.01 240)",
    // Accent gray
    accentForeground: "oklch(0.98 0.005 0)",
    // State colors
    destructive: "oklch(0.5 0.2 20)",
    destructiveForeground: "oklch(0.98 0.005 0)",
    // Border colors
    border: "oklch(0.85 0.005 0)",
    input: "oklch(0.85 0.005 0)",
    ring: "oklch(0.48 0.18 20)",
    // Chart colors
    chart1: "oklch(0.48 0.18 20)",
    // Primary red
    chart2: "oklch(0.56 0.01 240)",
    // Accent gray
    chart3: "oklch(0.65 0.15 80)",
    // Vibrant yellow-green
    chart4: "oklch(0.55 0.12 180)",
    // Cool blue
    chart5: "oklch(0.7 0.1 300)",
    // Soft purple
    // Sidebar colors
    sidebar: "oklch(0.96 0.007 0)",
    sidebarForeground: "oklch(0.12 0.01 0)",
    sidebarPrimary: "oklch(0.48 0.18 20)",
    sidebarPrimaryForeground: "oklch(0.98 0.005 0)",
    sidebarAccent: "oklch(0.93 0.005 0)",
    sidebarAccentForeground: "oklch(0.4 0.01 0)",
    sidebarBorder: "oklch(0.85 0.005 0)",
    sidebarRing: "oklch(0.48 0.18 20)"
  },
  dark: {
    // Base colors
    background: "oklch(0.05 0.003 0)",
    foreground: "oklch(0.95 0.005 0)",
    card: "oklch(0.15 0.01 0)",
    cardForeground: "oklch(0.95 0.005 0)",
    popover: "oklch(0.15 0.01 0)",
    popoverForeground: "oklch(0.95 0.005 0)",
    // Interactive colors
    primary: "oklch(0.58 0.15 15)",
    // Burgundy-red
    primaryForeground: "oklch(0.98 0.003 0)",
    secondary: "oklch(0.1 0.008 0)",
    secondaryForeground: "oklch(0.85 0.005 0)",
    muted: "oklch(0.15 0.005 0)",
    mutedForeground: "oklch(0.7 0.01 0)",
    accent: "oklch(0.7 0.01 240)",
    // Bright accent gray
    accentForeground: "oklch(0.08 0.005 0)",
    // State colors
    destructive: "oklch(0.7 0.3 20)",
    destructiveForeground: "oklch(0.08 0.005 0)",
    // Border colors
    border: "oklch(0.25 0.005 0)",
    input: "oklch(0.25 0.005 0)",
    ring: "oklch(0.58 0.15 15)",
    // Chart colors
    chart1: "oklch(0.58 0.15 15)",
    // Burgundy-red
    chart2: "oklch(0.7 0.01 240)",
    // Bright accent gray
    chart3: "oklch(0.75 0.18 80)",
    // Brighter yellow-green
    chart4: "oklch(0.68 0.15 180)",
    // Brighter cool blue
    chart5: "oklch(0.8 0.12 300)",
    // Brighter soft purple
    // Sidebar colors
    sidebar: "oklch(0.15 0.01 0)",
    sidebarForeground: "oklch(0.95 0.005 0)",
    sidebarPrimary: "oklch(0.58 0.15 15)",
    sidebarPrimaryForeground: "oklch(0.98 0.003 0)",
    sidebarAccent: "oklch(0.15 0.005 0)",
    sidebarAccentForeground: "oklch(0.7 0.01 0)",
    sidebarBorder: "oklch(0.25 0.005 0)",
    sidebarRing: "oklch(0.58 0.15 15)"
  }
}, h = {
  id: "studio",
  name: "Studio",
  description: "Sophisticated designer grays with strategic color accents for creative professionals",
  light: {
    // Base colors
    background: "oklch(0.99 0.001 270)",
    foreground: "oklch(0.08 0.005 270)",
    card: "oklch(0.98 0.002 270)",
    cardForeground: "oklch(0.08 0.005 270)",
    popover: "oklch(0.98 0.002 270)",
    popoverForeground: "oklch(0.08 0.005 270)",
    // Interactive colors
    primary: "oklch(0.32 0.02 270)",
    // Studio charcoal
    primaryForeground: "oklch(0.98 0.002 270)",
    secondary: "oklch(0.85 0.003 270)",
    secondaryForeground: "oklch(0.15 0.008 270)",
    muted: "oklch(0.97 0.002 270)",
    mutedForeground: "oklch(0.38 0.005 270)",
    accent: "oklch(0.65 0.15 45)",
    // Creative amber
    accentForeground: "oklch(0.98 0.002 270)",
    // State colors
    destructive: "oklch(0.45 0.25 25)",
    destructiveForeground: "oklch(0.98 0.002 270)",
    // Border colors
    border: "oklch(0.9 0.003 270)",
    input: "oklch(0.9 0.003 270)",
    ring: "oklch(0.32 0.02 270)",
    // Chart colors
    chart1: "oklch(0.32 0.02 270)",
    // Studio charcoal
    chart2: "oklch(0.65 0.15 45)",
    // Creative amber
    chart3: "oklch(0.45 0.12 200)",
    // Designer teal
    chart4: "oklch(0.5 0.1 320)",
    // Creative magenta
    chart5: "oklch(0.4 0.08 120)",
    // Studio green
    // Sidebar colors
    sidebar: "oklch(0.98 0.002 270)",
    sidebarForeground: "oklch(0.08 0.005 270)",
    sidebarPrimary: "oklch(0.32 0.02 270)",
    sidebarPrimaryForeground: "oklch(0.98 0.002 270)",
    sidebarAccent: "oklch(0.97 0.002 270)",
    sidebarAccentForeground: "oklch(0.38 0.005 270)",
    sidebarBorder: "oklch(0.9 0.003 270)",
    sidebarRing: "oklch(0.32 0.02 270)"
  },
  dark: {
    // Base colors
    background: "oklch(0.05 0.003 270)",
    foreground: "oklch(0.95 0.005 270)",
    card: "oklch(0.15 0.01 270)",
    cardForeground: "oklch(0.95 0.005 270)",
    popover: "oklch(0.15 0.01 270)",
    popoverForeground: "oklch(0.95 0.005 270)",
    // Interactive colors
    primary: "oklch(0.60 0.08 260)",
    // Professional purple-blue
    primaryForeground: "oklch(0.98 0.003 270)",
    secondary: "oklch(0.02 0.008 270)",
    secondaryForeground: "oklch(0.94 0.005 270)",
    muted: "oklch(0.08 0.006 270)",
    mutedForeground: "oklch(0.74 0.005 270)",
    accent: "oklch(0.85 0.18 45)",
    // Bright creative amber
    accentForeground: "oklch(0.04 0.005 270)",
    // State colors
    destructive: "oklch(0.65 0.25 25)",
    destructiveForeground: "oklch(0.04 0.005 270)",
    // Border colors
    border: "oklch(0.18 0.008 270)",
    input: "oklch(0.18 0.008 270)",
    ring: "oklch(0.60 0.08 260)",
    // Chart colors
    chart1: "oklch(0.60 0.08 260)",
    // Professional purple-blue
    chart2: "oklch(0.85 0.18 45)",
    // Bright creative amber
    chart3: "oklch(0.7 0.15 200)",
    // Bright designer teal
    chart4: "oklch(0.72 0.12 320)",
    // Bright creative magenta
    chart5: "oklch(0.68 0.1 120)",
    // Bright studio green
    // Sidebar colors
    sidebar: "oklch(0.15 0.01 270)",
    sidebarForeground: "oklch(0.95 0.005 270)",
    sidebarPrimary: "oklch(0.60 0.08 260)",
    sidebarPrimaryForeground: "oklch(0.98 0.003 270)",
    sidebarAccent: "oklch(0.08 0.006 270)",
    sidebarAccentForeground: "oklch(0.74 0.005 270)",
    sidebarBorder: "oklch(0.18 0.008 270)",
    sidebarRing: "oklch(0.60 0.08 260)"
  }
}, l = [
  "default",
  "aurora",
  "metro",
  "neon",
  "ruby",
  "studio"
], k = {
  aurora: o,
  metro: r,
  neon: c,
  ruby: e,
  studio: h
};
export {
  k as ALL_THEME_PRESETS,
  l as AVAILABLE_THEMES,
  n as ThemeProvider,
  o as aurora,
  o as auroraTheme,
  r as metro,
  r as metroTheme,
  c as neon,
  c as neonTheme,
  e as ruby,
  e as rubyTheme,
  h as studio,
  h as studioTheme,
  i as useTheme
};
//# sourceMappingURL=themes.js.map
