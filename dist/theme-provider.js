import { jsx } from "react/jsx-runtime";
import { createContext, useState, useEffect, useContext } from "react";
let AVAILABLE_THEMES = [
  { id: "default", name: "Default" },
  { id: "aurora", name: "Aurora" },
  { id: "metro", name: "Metro" },
  { id: "neon", name: "Neon" },
  { id: "ruby", name: "Ruby" },
  { id: "studio", name: "Studio" }
];
let THEME_DEFINITIONS = /* @__PURE__ */ new Map();
const DEFAULT_COLOR_SCHEMA = {
  light: {
    // Base colors - from @theme in globals.css
    background: "oklch(0.99 0.002 240)",
    foreground: "oklch(0.08 0.015 240)",
    card: "oklch(0.995 0.001 240)",
    cardForeground: "oklch(0.08 0.015 240)",
    popover: "oklch(0.985 0.003 240)",
    popoverForeground: "oklch(0.08 0.015 240)",
    // Interactive colors
    primary: "oklch(0.48 0.18 240)",
    // True sky blue
    primaryForeground: "oklch(0.98 0.005 240)",
    secondary: "oklch(0.88 0.03 220)",
    // Grayish blue
    secondaryForeground: "oklch(0.25 0.05 220)",
    muted: "oklch(0.95 0.01 240)",
    mutedForeground: "oklch(0.38 0.04 240)",
    accent: "oklch(0.52 0.12 200)",
    // Sea green tinted blue
    accentForeground: "oklch(0.98 0.005 200)",
    // State colors
    destructive: "oklch(0.55 0.18 20)",
    destructiveForeground: "oklch(0.98 0.002 20)",
    // Border colors
    border: "oklch(0.90 0.008 220)",
    input: "oklch(0.90 0.008 220)",
    ring: "oklch(0.48 0.18 240)",
    // Chart colors
    chart1: "oklch(0.48 0.18 240)",
    chart2: "oklch(0.52 0.12 200)",
    chart3: "oklch(0.42 0.16 235)",
    chart4: "oklch(0.60 0.12 250)",
    chart5: "oklch(0.88 0.03 220)",
    // Sidebar colors
    sidebar: "oklch(0.985 0.003 240)",
    sidebarForeground: "oklch(0.08 0.015 240)",
    sidebarPrimary: "oklch(0.48 0.18 240)",
    sidebarPrimaryForeground: "oklch(0.98 0.005 240)",
    sidebarAccent: "oklch(0.95 0.01 240)",
    sidebarAccentForeground: "oklch(0.20 0.08 240)",
    sidebarBorder: "oklch(0.90 0.008 220)",
    sidebarRing: "oklch(0.48 0.18 240)"
  },
  dark: {
    // Base colors - from .dark in globals.css
    background: "oklch(0.12 0.015 240)",
    foreground: "oklch(0.92 0.008 240)",
    card: "oklch(0.18 0.025 240)",
    cardForeground: "oklch(0.92 0.008 240)",
    popover: "oklch(0.18 0.025 240)",
    popoverForeground: "oklch(0.92 0.008 240)",
    // Interactive colors
    primary: "oklch(0.58 0.14 240)",
    // Softer sky blue for dark mode
    primaryForeground: "oklch(0.95 0.005 240)",
    secondary: "oklch(0.25 0.03 220)",
    // Dark grayish blue
    secondaryForeground: "oklch(0.82 0.02 220)",
    muted: "oklch(0.18 0.02 240)",
    mutedForeground: "oklch(0.68 0.025 240)",
    accent: "oklch(0.68 0.10 75)",
    // Soft golden yellow for dark mode
    accentForeground: "oklch(0.12 0.015 75)",
    // State colors
    destructive: "oklch(0.52 0.16 20)",
    destructiveForeground: "oklch(0.92 0.008 240)",
    // Border colors
    border: "oklch(0.30 0.008 220)",
    input: "oklch(0.30 0.008 220)",
    ring: "oklch(0.58 0.14 240)",
    // Chart colors
    chart1: "oklch(0.58 0.14 240)",
    chart2: "oklch(0.68 0.10 75)",
    chart3: "oklch(0.55 0.12 235)",
    chart4: "oklch(0.62 0.11 250)",
    chart5: "oklch(0.25 0.03 220)",
    // Sidebar colors
    sidebar: "oklch(0.18 0.025 240)",
    sidebarForeground: "oklch(0.92 0.008 240)",
    sidebarPrimary: "oklch(0.58 0.14 240)",
    sidebarPrimaryForeground: "oklch(0.95 0.005 240)",
    sidebarAccent: "oklch(0.18 0.02 240)",
    sidebarAccentForeground: "oklch(0.82 0.02 240)",
    sidebarBorder: "oklch(0.30 0.008 220)",
    sidebarRing: "oklch(0.58 0.14 240)"
  }
};
function generateCSSVariables(colors) {
  return Object.entries(colors).map(([key, value]) => {
    const cssKey = `--color-${key.replace(/([A-Z])/g, "-$1").toLowerCase()}`;
    return `  ${cssKey}: ${value};`;
  }).join("\n");
}
function mergeWithDefaults(themeColors, defaults) {
  return {
    ...defaults,
    // Start with complete defaults
    ...themeColors
    // Override with theme-specific colors
  };
}
function validateTheme(theme) {
  if (!theme.light || !theme.dark) return;
  const requiredColors = Object.keys(DEFAULT_COLOR_SCHEMA.light);
  const lightMissing = requiredColors.filter((color) => !theme.light[color]);
  const darkMissing = requiredColors.filter((color) => !theme.dark[color]);
  if (lightMissing.length > 0) {
    console.warn(`⚠️ Theme ${theme.id} missing ${lightMissing.length} light colors:`, lightMissing);
    console.info(`💡 These will fallback to default theme values`);
  }
  if (darkMissing.length > 0) {
    console.warn(`⚠️ Theme ${theme.id} missing ${darkMissing.length} dark colors:`, darkMissing);
    console.info(`💡 These will fallback to default theme values`);
  }
  return {
    isComplete: lightMissing.length === 0 && darkMissing.length === 0,
    lightMissing,
    darkMissing
  };
}
function injectThemeCSS(theme) {
  if (!theme.light || !theme.dark) {
    console.warn(`Theme ${theme.id} missing light/dark definitions`);
    return;
  }
  const validation = validateTheme(theme);
  const completeLight = mergeWithDefaults(theme.light, DEFAULT_COLOR_SCHEMA.light);
  const completeDark = mergeWithDefaults(theme.dark, DEFAULT_COLOR_SCHEMA.dark);
  if (!validation.isComplete) {
    const totalMissing = validation.lightMissing.length + validation.darkMissing.length;
    console.log(`🔧 Theme ${theme.id}: Added ${totalMissing} fallback colors from default theme`);
  }
  const styleId = `theme-${theme.id}-dynamic`;
  const existingStyle = document.getElementById(styleId);
  if (existingStyle) {
    existingStyle.remove();
  }
  const lightVariables = generateCSSVariables(completeLight);
  const darkVariables = generateCSSVariables(completeDark);
  const css = `
/* ${theme.name} Theme - With Default Fallbacks */
.theme-${theme.id} {
${lightVariables}
}

.theme-${theme.id}.dark {
${darkVariables}
}
`;
  const styleElement = document.createElement("style");
  styleElement.id = styleId;
  styleElement.textContent = css;
  document.head.appendChild(styleElement);
  console.log(`✅ Injected complete CSS for theme: ${theme.name} (${theme.id})`);
}
function registerTheme(theme, injectCSS = true) {
  if (!theme || !theme.id || !theme.name) {
    console.warn("registerTheme: Theme must have id and name properties");
    return;
  }
  THEME_DEFINITIONS.set(theme.id, theme);
  if (!AVAILABLE_THEMES.find((t) => t.id === theme.id)) {
    AVAILABLE_THEMES.push({ id: theme.id, name: theme.name });
  }
  if (injectCSS && typeof window !== "undefined" && theme.light && theme.dark) {
    injectThemeCSS(theme);
  }
  console.log(`📝 Registered theme: ${theme.name} (${theme.id})`);
}
function registerThemes(themes, injectCSS = true) {
  themes.forEach((theme) => registerTheme(theme, injectCSS));
}
function getAvailableThemes() {
  return [...AVAILABLE_THEMES];
}
function getThemeDefinition(themeId) {
  return THEME_DEFINITIONS.get(themeId) || null;
}
function unregisterTheme(themeId) {
  const builtInThemes = ["default", "aurora", "metro", "neon", "ruby", "studio"];
  if (builtInThemes.includes(themeId)) {
    console.warn(`Cannot remove built-in theme: ${themeId}`);
    return;
  }
  AVAILABLE_THEMES = AVAILABLE_THEMES.filter((t) => t.id !== themeId);
  THEME_DEFINITIONS.delete(themeId);
  if (typeof window !== "undefined") {
    const styleElement = document.getElementById(`theme-${themeId}-dynamic`);
    if (styleElement) {
      styleElement.remove();
    }
  }
  console.log(`🗑️ Unregistered theme: ${themeId}`);
}
function reinjectedAllThemeCSS() {
  if (typeof window === "undefined") return;
  THEME_DEFINITIONS.forEach((theme) => {
    if (theme.light && theme.dark) {
      injectThemeCSS(theme);
    }
  });
}
const ThemeContext = createContext({
  theme: "default",
  variant: "light",
  setTheme: () => {
  },
  setVariant: () => {
  },
  toggleVariant: () => {
  },
  availableThemes: AVAILABLE_THEMES,
  registerTheme,
  getAvailableThemes,
  getThemeDefinition,
  unregisterTheme,
  reinjectedAllThemeCSS
});
function ThemeProvider({
  children,
  theme = "default",
  variant = "light",
  detectSystem = true,
  customThemes = [],
  autoInjectCSS = true
}) {
  const [themeState, setThemeState] = useState({
    theme,
    variant
  });
  useEffect(() => {
    if (customThemes.length > 0) {
      registerThemes(customThemes, autoInjectCSS);
    }
  }, [customThemes, autoInjectCSS]);
  useEffect(() => {
    if (autoInjectCSS && typeof window !== "undefined") {
      setTimeout(() => {
        reinjectedAllThemeCSS();
      }, 0);
    }
  }, [autoInjectCSS]);
  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const saved = localStorage.getItem("uikit-theme");
      if (saved) {
        const { theme: theme2, variant: variant2 } = JSON.parse(saved);
        setThemeState({ theme: theme2, variant: variant2 });
      } else if (detectSystem) {
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        if (prefersDark) {
          setThemeState((prev) => ({ ...prev, variant: "dark" }));
        }
      }
    } catch (e) {
      console.warn("Failed to load theme from localStorage:", e);
    }
  }, [detectSystem]);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const { theme: theme2, variant: variant2 } = themeState;
    const root = document.documentElement;
    root.classList.remove("dark", "light");
    AVAILABLE_THEMES.forEach((t) => {
      root.classList.remove(`theme-${t.id}`);
    });
    if (theme2 !== "default") {
      root.classList.add(`theme-${theme2}`);
    }
    root.classList.add(variant2);
    try {
      localStorage.setItem("uikit-theme", JSON.stringify({ theme: theme2, variant: variant2 }));
    } catch (e) {
      console.warn("Failed to save theme to localStorage:", e);
    }
    console.log(`🎨 Applied theme: ${theme2} (${variant2})`);
  }, [themeState]);
  useEffect(() => {
    if (!detectSystem || typeof window === "undefined") return;
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e) => {
      try {
        const saved = localStorage.getItem("uikit-theme");
        if (!saved) {
          setThemeState((prev) => ({
            ...prev,
            variant: e.matches ? "dark" : "light"
          }));
        }
      } catch (e2) {
        console.warn("Failed to handle system preference change:", e2);
      }
    };
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [detectSystem]);
  const contextValue = {
    theme: themeState.theme,
    variant: themeState.variant,
    availableThemes: AVAILABLE_THEMES,
    setTheme: (newTheme) => {
      if (typeof newTheme === "string") {
        const themeExists = AVAILABLE_THEMES.find((t) => t.id === newTheme);
        if (!themeExists) {
          console.warn(
            `Theme '${newTheme}' not found in registry. Available themes:`,
            AVAILABLE_THEMES.map((t) => t.id)
          );
        }
        setThemeState((prev) => ({ ...prev, theme: newTheme }));
      } else if (typeof newTheme === "object" && newTheme.id) {
        registerTheme(newTheme, autoInjectCSS);
        setThemeState((prev) => ({ ...prev, theme: newTheme.id }));
      } else {
        console.warn("setTheme: Invalid theme format. Expected string ID or theme object.");
      }
    },
    setVariant: (newVariant) => {
      if (newVariant === "light" || newVariant === "dark") {
        setThemeState((prev) => ({ ...prev, variant: newVariant }));
      } else {
        console.warn('setVariant: Invalid variant. Expected "light" or "dark".');
      }
    },
    toggleVariant: () => {
      setThemeState((prev) => ({
        ...prev,
        variant: prev.variant === "light" ? "dark" : "light"
      }));
    },
    // Expose theme management functions
    registerTheme: (theme2) => registerTheme(theme2, autoInjectCSS),
    registerThemes: (themes) => registerThemes(themes, autoInjectCSS),
    getAvailableThemes,
    getThemeDefinition,
    unregisterTheme,
    reinjectedAllThemeCSS
  };
  return /* @__PURE__ */ jsx(ThemeContext.Provider, { value: contextValue, children });
}
function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
export {
  ThemeProvider,
  getAvailableThemes,
  getThemeDefinition,
  registerTheme,
  registerThemes,
  reinjectedAllThemeCSS,
  unregisterTheme,
  useTheme
};
//# sourceMappingURL=theme-provider.js.map
