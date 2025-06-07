import { jsx } from "react/jsx-runtime";
import { createContext, useState, useEffect, useContext } from "react";
let AVAILABLE_THEMES = [
  { id: "default", name: "Default" },
  { id: "ocean", name: "Ocean" },
  { id: "forest", name: "Forest" },
  { id: "sunset", name: "Sunset" }
];
function registerTheme(theme) {
  if (!theme || !theme.id || !theme.name) {
    console.warn("registerTheme: Theme must have id and name properties");
    return;
  }
  if (!AVAILABLE_THEMES.find((t) => t.id === theme.id)) {
    AVAILABLE_THEMES.push(theme);
    console.log(`Registered custom theme: ${theme.name} (${theme.id})`);
  }
}
function registerThemes(themes) {
  themes.forEach(registerTheme);
}
function getAvailableThemes() {
  return [...AVAILABLE_THEMES];
}
function unregisterTheme(themeId) {
  const builtInThemes = ["default", "ocean", "forest", "sunset"];
  if (builtInThemes.includes(themeId)) {
    console.warn(`Cannot remove built-in theme: ${themeId}`);
    return;
  }
  AVAILABLE_THEMES = AVAILABLE_THEMES.filter((t) => t.id !== themeId);
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
  getAvailableThemes
});
function ThemeProvider({
  children,
  theme = "default",
  variant = "light",
  detectSystem = true,
  customThemes = []
}) {
  const [themeState, setThemeState] = useState({
    theme,
    variant
  });
  useEffect(() => {
    if (customThemes.length > 0) {
      registerThemes(customThemes);
    }
  }, [customThemes]);
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
    }
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
      }
    };
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [detectSystem]);
  const contextValue = {
    theme: themeState.theme,
    variant: themeState.variant,
    availableThemes: AVAILABLE_THEMES,
    // Dynamic list includes custom themes
    setTheme: (newTheme) => {
      if (typeof newTheme === "string") {
        setThemeState((prev) => ({ ...prev, theme: newTheme }));
      } else if (typeof newTheme === "object" && newTheme.id) {
        registerTheme(newTheme);
        setThemeState((prev) => ({ ...prev, theme: newTheme.id, customTheme: newTheme }));
      }
    },
    setVariant: (newVariant) => {
      if (newVariant === "light" || newVariant === "dark") {
        setThemeState((prev) => ({ ...prev, variant: newVariant }));
      }
    },
    toggleVariant: () => {
      setThemeState((prev) => ({
        ...prev,
        variant: prev.variant === "light" ? "dark" : "light"
      }));
    },
    // Expose theme management functions
    registerTheme,
    registerThemes,
    getAvailableThemes,
    unregisterTheme
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
  registerTheme,
  registerThemes,
  unregisterTheme,
  useTheme
};
//# sourceMappingURL=theme-provider.js.map
