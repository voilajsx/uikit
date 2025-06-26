import { jsx as y } from "react/jsx-runtime";
import { createContext as L, useState as E, useEffect as i, useContext as w } from "react";
const x = {
  AdminLayout: "subtle",
  // Professional admin interfaces
  PageLayout: "clean",
  // Clean public websites
  AuthLayout: "clean",
  // Focused authentication
  PopupLayout: "clean",
  // Clean extensions
  BlankLayout: "clean",
  // Simple pages
  Header: "clean",
  // Clean headers
  Footer: "contrast",
  // Bold footers
  AdminSidebar: "subtle",
  // Subtle sidebars
  AdminHeader: "clean",
  // Clean admin headers
  PopupHeader: "brand"
  // Branded popup headers
}, T = {
  clean: "bg-background text-foreground border-border",
  subtle: "bg-muted/30 text-foreground border-border/50",
  brand: "bg-primary text-primary-foreground border-primary/20",
  contrast: "bg-foreground text-background border-foreground/20"
  // Automatically flips with mode
}, a = [
  "default",
  // Professional blue - business apps
  "aurora",
  // Purple/green - creative apps  
  "metro",
  // Transit blue - admin dashboards
  "neon",
  // Electric colors - gaming/tech
  "ruby",
  // Red/gold - luxury brands
  "studio"
  // Designer grays - creative tools
], l = L(void 0);
function C({
  children: d,
  theme: m = "default",
  mode: u = "light",
  detectSystem: s = !0
}) {
  const [c, r] = E({
    theme: m,
    mode: u
  });
  i(() => {
    if (!(typeof window > "u"))
      try {
        const e = localStorage.getItem("uikit-theme");
        if (e) {
          const t = JSON.parse(e);
          if (a.includes(t.theme) && ["light", "dark"].includes(t.mode)) {
            r(t);
            return;
          }
        }
        if (s) {
          const t = window.matchMedia("(prefers-color-scheme: dark)").matches;
          r((o) => ({
            ...o,
            mode: t ? "dark" : "light"
          }));
        }
      } catch (e) {
        console.warn("Failed to load theme preferences:", e);
      }
  }, [s]), i(() => {
    if (typeof window > "u") return;
    const { theme: e, mode: t } = c, o = document.documentElement;
    o.classList.remove("light", "dark"), a.forEach((n) => {
      o.classList.remove(`theme-${n}`);
    }), o.classList.add(t), e !== "default" && o.classList.add(`theme-${e}`);
    try {
      localStorage.setItem("uikit-theme", JSON.stringify({ theme: e, mode: t }));
    } catch (n) {
      console.warn("Failed to save theme preferences:", n);
    }
    console.log(`🎨 Applied theme: ${e} (${t} mode)`);
  }, [c]), i(() => {
    if (!s || typeof window > "u") return;
    const e = window.matchMedia("(prefers-color-scheme: dark)"), t = (o) => {
      try {
        localStorage.getItem("uikit-theme") || r((k) => ({
          ...k,
          mode: o.matches ? "dark" : "light"
        }));
      } catch (n) {
        console.warn("Failed to handle system preference change:", n);
      }
    };
    return e.addEventListener("change", t), () => e.removeEventListener("change", t);
  }, [s]);
  const h = (e) => {
    if (!a.includes(e)) {
      console.warn(`Invalid theme: ${e}. Available themes:`, a);
      return;
    }
    r((t) => ({ ...t, theme: e }));
  }, f = (e) => {
    if (e !== "light" && e !== "dark") {
      console.warn(`Invalid mode: ${e}. Expected 'light' or 'dark'.`);
      return;
    }
    r((t) => ({ ...t, mode: e }));
  }, g = () => {
    r((e) => ({
      ...e,
      mode: e.mode === "light" ? "dark" : "light"
    }));
  }, p = (e) => T[e], b = (e) => x[e] || "clean", v = {
    theme: c.theme,
    mode: c.mode,
    availableThemes: a,
    setTheme: h,
    setMode: f,
    toggleMode: g,
    getToneClasses: p,
    getDefaultTone: b
  };
  return /* @__PURE__ */ y(l.Provider, { value: v, children: d });
}
function I() {
  const d = w(l);
  if (!d)
    throw new Error("useTheme must be used within a ThemeProvider");
  return d;
}
export {
  a as AVAILABLE_THEMES,
  C as ThemeProvider,
  I as useTheme
};
//# sourceMappingURL=theme-provider.js.map
