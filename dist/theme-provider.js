import { jsx as w } from "react/jsx-runtime";
import { createContext as L, useState as E, useEffect as l, useContext as S } from "react";
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
}, $ = {
  clean: "bg-background text-foreground border-border",
  subtle: "bg-muted/30 text-foreground border-border/50",
  brand: "bg-primary text-primary-foreground border-primary/20",
  contrast: "bg-foreground text-background border-foreground/20"
  // Automatically flips with mode
}, i = [
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
], h = L(void 0);
function A(t, a, s) {
  if (typeof window > "u")
    return { theme: t, mode: a };
  try {
    const r = localStorage.getItem("uikit-theme");
    if (r) {
      const o = JSON.parse(r);
      if (i.includes(o.theme) && ["light", "dark"].includes(o.mode))
        return console.log(`🎨 Restored theme: ${o.theme} (${o.mode} mode)`), o;
    }
    if (s) {
      const d = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      return console.log(`🎨 Using system preference: ${t} (${d} mode)`), { theme: t, mode: d };
    }
    return console.log(`🎨 Using default: ${t} (${a} mode)`), { theme: t, mode: a };
  } catch (r) {
    return console.warn("Failed to load theme preferences, using defaults:", r), { theme: t, mode: a };
  }
}
function u(t, a) {
  if (typeof window > "u") return;
  const s = document.documentElement;
  s.classList.remove("light", "dark"), i.forEach((r) => {
    s.classList.remove(`theme-${r}`);
  }), s.classList.add(a), t !== "default" && s.classList.add(`theme-${t}`);
}
function C({
  children: t,
  theme: a = "default",
  mode: s = "light",
  detectSystem: r = !0
}) {
  const [o, d] = E(() => {
    const e = A(a, s, r);
    return u(e.theme, e.mode), e;
  });
  l(() => {
    if (typeof window > "u") return;
    const { theme: e, mode: n } = o;
    u(e, n);
    try {
      localStorage.setItem("uikit-theme", JSON.stringify({ theme: e, mode: n }));
    } catch (c) {
      console.warn("Failed to save theme preferences:", c);
    }
    console.log(`🎨 Applied theme: ${e} (${n} mode)`);
  }, [o]), l(() => {
    if (!r || typeof window > "u") return;
    const e = window.matchMedia("(prefers-color-scheme: dark)"), n = (c) => {
      try {
        localStorage.getItem("uikit-theme") || d((v) => ({
          ...v,
          mode: c.matches ? "dark" : "light"
        }));
      } catch (m) {
        console.warn("Failed to handle system preference change:", m);
      }
    };
    return e.addEventListener("change", n), () => e.removeEventListener("change", n);
  }, [r]);
  const g = (e) => {
    if (!i.includes(e)) {
      console.warn(`Invalid theme: ${e}. Available themes:`, i);
      return;
    }
    d((n) => ({ ...n, theme: e }));
  }, f = (e) => {
    if (e !== "light" && e !== "dark") {
      console.warn(`Invalid mode: ${e}. Expected 'light' or 'dark'.`);
      return;
    }
    d((n) => ({ ...n, mode: e }));
  }, p = () => {
    d((e) => ({
      ...e,
      mode: e.mode === "light" ? "dark" : "light"
    }));
  }, b = (e) => $[e], y = (e) => x[e] || "clean", k = {
    theme: o.theme,
    mode: o.mode,
    availableThemes: i,
    setTheme: g,
    setMode: f,
    toggleMode: p,
    getToneClasses: b,
    getDefaultTone: y
  };
  return /* @__PURE__ */ w(h.Provider, { value: k, children: t });
}
function P() {
  const t = S(h);
  if (!t)
    throw new Error("useTheme must be used within a ThemeProvider");
  return t;
}
export {
  i as AVAILABLE_THEMES,
  C as ThemeProvider,
  P as useTheme
};
//# sourceMappingURL=theme-provider.js.map
