import { jsx } from "react/jsx-runtime";
import { createContext, useState, useEffect, useContext } from "react";
const AVAILABLE_THEMES = [
  { id: "default", name: "Default" },
  { id: "ocean", name: "Ocean" },
  { id: "forest", name: "Forest" },
  { id: "sunset", name: "Sunset" }
];
const ThemeContext = createContext({
  theme: "default",
  variant: "light",
  setTheme: () => {
  },
  setVariant: () => {
  },
  toggleVariant: () => {
  },
  availableThemes: AVAILABLE_THEMES
});
function ThemeProvider({
  children,
  theme = "default",
  variant = "light",
  detectSystem = true
}) {
  const [themeState, setThemeState] = useState({
    theme,
    variant
  });
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
    setTheme: (newTheme) => {
      if (typeof newTheme === "string") {
        if (AVAILABLE_THEMES.some((t) => t.id === newTheme)) {
          setThemeState((prev) => ({ ...prev, theme: newTheme }));
        }
      } else if (typeof newTheme === "object" && newTheme.id) {
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
    }
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
  useTheme
};
//# sourceMappingURL=theme-provider.js.map
