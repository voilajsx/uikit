import { jsx as L } from "react/jsx-runtime";
import { createContext as S, useState as E, useEffect as u, useContext as x } from "react";
const A = {
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
}, I = {
  clean: "bg-background text-foreground border-border",
  subtle: "bg-muted/30 text-foreground border-border/50",
  brand: "bg-primary text-primary-foreground border-primary/20",
  contrast: "bg-foreground text-background border-foreground/20"
  // Automatically flips with mode
}, m = [
  "base",
  // Clean default - showcases base system (DEFAULT)
  "elegant",
  // Minimal blue - clean & professional
  "metro",
  // Dark teal - admin dashboards
  "studio",
  // Designer grays - creative tools
  "vivid",
  // Premium cursive - luxury/creative portfolios
  "stylist"
  // Fashion & design industry theme with pink and orange accents
], p = S(void 0);
function P(t, n, a, c = !1, i = "uikit-theme") {
  if (typeof window > "u")
    return { theme: t, mode: n };
  if (c)
    return console.log(`🎨 Config priority: ${t} (${n} mode)`), { theme: t, mode: n };
  if (i === null) {
    if (a) {
      const o = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      return console.log(`🎨 System preference (no storage): ${t} (${o} mode)`), { theme: t, mode: o };
    }
    return console.log(`🎨 Props only (no storage): ${t} (${n} mode)`), { theme: t, mode: n };
  }
  try {
    const r = localStorage.getItem(i);
    if (r) {
      const o = JSON.parse(r);
      if (m.includes(o.theme) && ["light", "dark"].includes(o.mode))
        return console.log(`🎨 Restored from storage: ${o.theme} (${o.mode} mode)`), o;
    }
    if (a) {
      const d = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      return console.log(`🎨 System preference: ${t} (${d} mode)`), { theme: t, mode: d };
    }
    return console.log(`🎨 Props fallback: ${t} (${n} mode)`), { theme: t, mode: n };
  } catch (r) {
    return console.warn("Failed to load theme preferences, using defaults:", r), { theme: t, mode: n };
  }
}
function g(t, n) {
  if (typeof window > "u") return;
  const a = document.documentElement;
  a.classList.remove("light", "dark"), m.forEach((c) => {
    a.classList.remove(`theme-${c}`);
  }), a.classList.add(n), a.classList.add(`theme-${t}`);
}
function H({
  children: t,
  theme: n = "base",
  mode: a = "light",
  detectSystem: c = !0,
  forceConfig: i = !1,
  // 🔧 NEW: Force config over storage
  storageKey: r = "uikit-theme"
  // 🔧 NEW: Configurable storage key
}) {
  const [o, d] = E(() => {
    const e = P(n, a, c, i, r);
    return g(e.theme, e.mode), e;
  });
  u(() => {
    if (typeof window > "u") return;
    const { theme: e, mode: s } = o;
    if (g(e, s), r && !i)
      try {
        localStorage.setItem(r, JSON.stringify({ theme: e, mode: s }));
      } catch (l) {
        console.warn("Failed to save theme preferences:", l);
      }
    console.log(`🎨 Applied theme: ${e} (${s} mode)`);
  }, [o, r, i]), u(() => {
    if (!c || typeof window > "u") return;
    const e = window.matchMedia("(prefers-color-scheme: dark)"), s = (l) => {
      if (!i)
        try {
          (r ? localStorage.getItem(r) : null) || d((y) => ({
            ...y,
            mode: l.matches ? "dark" : "light"
          }));
        } catch (h) {
          console.warn("Failed to handle system preference change:", h);
        }
    };
    return e.addEventListener("change", s), () => e.removeEventListener("change", s);
  }, [c, i, r]);
  const f = (e) => {
    if (!m.includes(e)) {
      console.warn(`Invalid theme: ${e}. Available themes:`, m);
      return;
    }
    d((s) => ({ ...s, theme: e }));
  }, b = (e) => {
    if (e !== "light" && e !== "dark") {
      console.warn(`Invalid mode: ${e}. Expected 'light' or 'dark'.`);
      return;
    }
    d((s) => ({ ...s, mode: e }));
  }, k = () => {
    d((e) => ({
      ...e,
      mode: e.mode === "light" ? "dark" : "light"
    }));
  }, v = (e) => I[e], $ = (e) => A[e] || "clean", w = {
    theme: o.theme,
    mode: o.mode,
    availableThemes: m,
    setTheme: f,
    setMode: b,
    toggleMode: k,
    getToneClasses: v,
    getDefaultTone: $
  };
  return /* @__PURE__ */ L(p.Provider, { value: w, children: t });
}
function N() {
  const t = x(p);
  if (!t)
    throw new Error("useTheme must be used within a ThemeProvider");
  return t;
}
export {
  m as AVAILABLE_THEMES,
  H as ThemeProvider,
  N as useTheme
};
//# sourceMappingURL=theme-provider.js.map
