import { jsx as L } from "react/jsx-runtime";
import { createContext as $, useState as S, useEffect as h, useContext as E } from "react";
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
}, A = {
  clean: "bg-background text-foreground border-border",
  subtle: "bg-muted/30 text-foreground border-border/50",
  brand: "bg-primary text-primary-foreground border-primary/20",
  contrast: "bg-foreground text-background border-foreground/20"
  // Automatically flips with mode
}, P = [
  "base",
  // Sky blue theme - clean & professional (DEFAULT)
  "elegant",
  // Minimal blue - clean & professional
  "metro",
  // Dark teal - admin dashboards
  "studio",
  // Designer grays - creative tools
  "vivid"
  // Premium cursive - luxury/creative portfolios
], g = $(void 0);
function T(t, n, a, m = !1, s = "uikit-theme") {
  if (typeof window > "u")
    return { theme: t, mode: n };
  if (m)
    return console.log(`🎨 Config priority: ${t} (${n} mode)`), { theme: t, mode: n };
  if (s === null) {
    if (a) {
      const o = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      return console.log(`🎨 System preference (no storage): ${t} (${o} mode)`), { theme: t, mode: o };
    }
    return console.log(`🎨 Props only (no storage): ${t} (${n} mode)`), { theme: t, mode: n };
  }
  try {
    const r = localStorage.getItem(s);
    if (r) {
      const o = JSON.parse(r);
      if (o.theme && typeof o.theme == "string" && ["light", "dark"].includes(o.mode))
        return console.log(`🎨 Restored from storage: ${o.theme} (${o.mode} mode)`), o;
    }
    if (a) {
      const i = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      return console.log(`🎨 System preference: ${t} (${i} mode)`), { theme: t, mode: i };
    }
    return console.log(`🎨 Props fallback: ${t} (${n} mode)`), { theme: t, mode: n };
  } catch (r) {
    return console.warn("Failed to load theme preferences, using defaults:", r), { theme: t, mode: n };
  }
}
function u(t, n) {
  if (typeof window > "u") return;
  const a = document.documentElement;
  a.classList.remove("light", "dark"), Array.from(a.classList).filter(
    (s) => s.startsWith("theme-")
  ).forEach((s) => {
    a.classList.remove(s);
  }), a.classList.add(n), a.classList.add(`theme-${t}`);
}
function F({
  children: t,
  theme: n = "base",
  mode: a = "light",
  detectSystem: m = !0,
  forceConfig: s = !1,
  // 🔧 NEW: Force config over storage
  storageKey: r = "uikit-theme"
  // 🔧 NEW: Configurable storage key
}) {
  const [o, i] = S(() => {
    const e = T(n, a, m, s, r);
    return u(e.theme, e.mode), e;
  });
  h(() => {
    if (typeof window > "u") return;
    const { theme: e, mode: c } = o;
    if (u(e, c), r && !s)
      try {
        localStorage.setItem(r, JSON.stringify({ theme: e, mode: c }));
      } catch (d) {
        console.warn("Failed to save theme preferences:", d);
      }
    console.log(`🎨 Applied theme: ${e} (${c} mode)`);
  }, [o, r, s]), h(() => {
    if (!m || typeof window > "u") return;
    const e = window.matchMedia("(prefers-color-scheme: dark)"), c = (d) => {
      if (!s)
        try {
          (r ? localStorage.getItem(r) : null) || i((y) => ({
            ...y,
            mode: d.matches ? "dark" : "light"
          }));
        } catch (l) {
          console.warn("Failed to handle system preference change:", l);
        }
    };
    return e.addEventListener("change", c), () => e.removeEventListener("change", c);
  }, [m, s, r]);
  const p = (e) => {
    i((c) => ({ ...c, theme: e }));
  }, f = (e) => {
    if (e !== "light" && e !== "dark") {
      console.warn(`Invalid mode: ${e}. Expected 'light' or 'dark'.`);
      return;
    }
    i((c) => ({ ...c, mode: e }));
  }, b = () => {
    i((e) => ({
      ...e,
      mode: e.mode === "light" ? "dark" : "light"
    }));
  }, k = (e) => A[e], v = (e) => x[e] || "clean", w = {
    theme: o.theme,
    mode: o.mode,
    availableThemes: P,
    setTheme: p,
    setMode: f,
    toggleMode: b,
    getToneClasses: k,
    getDefaultTone: v
  };
  return /* @__PURE__ */ L(g.Provider, { value: w, children: t });
}
function H() {
  const t = E(g);
  if (!t)
    throw new Error("useTheme must be used within a ThemeProvider");
  return t;
}
export {
  P as AVAILABLE_THEMES,
  F as ThemeProvider,
  H as useTheme
};
//# sourceMappingURL=theme-provider.js.map
