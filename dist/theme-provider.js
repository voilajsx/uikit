import { jsx as L } from "react/jsx-runtime";
import { createContext as S, useState as E, useEffect as h, useContext as x } from "react";
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
  "sky",
  // Minimal blue - clean & professional
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
], p = S(void 0);
function P(t, n, a, i = !1, c = "uikit-theme") {
  if (typeof window > "u")
    return { theme: t, mode: n };
  if (i)
    return console.log(`🎨 Config priority: ${t} (${n} mode)`), { theme: t, mode: n };
  if (c === null) {
    if (a) {
      const r = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      return console.log(`🎨 System preference (no storage): ${t} (${r} mode)`), { theme: t, mode: r };
    }
    return console.log(`🎨 Props only (no storage): ${t} (${n} mode)`), { theme: t, mode: n };
  }
  try {
    const o = localStorage.getItem(c);
    if (o) {
      const r = JSON.parse(o);
      if (m.includes(r.theme) && ["light", "dark"].includes(r.mode))
        return console.log(`🎨 Restored from storage: ${r.theme} (${r.mode} mode)`), r;
    }
    if (a) {
      const d = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      return console.log(`🎨 System preference: ${t} (${d} mode)`), { theme: t, mode: d };
    }
    return console.log(`🎨 Props fallback: ${t} (${n} mode)`), { theme: t, mode: n };
  } catch (o) {
    return console.warn("Failed to load theme preferences, using defaults:", o), { theme: t, mode: n };
  }
}
function g(t, n) {
  if (typeof window > "u") return;
  const a = document.documentElement;
  a.classList.remove("light", "dark"), m.forEach((i) => {
    a.classList.remove(`theme-${i}`);
  }), a.classList.add(n), a.classList.add(`theme-${t}`);
}
function H({
  children: t,
  theme: n = "sky",
  mode: a = "light",
  detectSystem: i = !0,
  forceConfig: c = !1,
  // 🔧 NEW: Force config over storage
  storageKey: o = "uikit-theme"
  // 🔧 NEW: Configurable storage key
}) {
  const [r, d] = E(() => {
    const e = P(n, a, i, c, o);
    return g(e.theme, e.mode), e;
  });
  h(() => {
    if (typeof window > "u") return;
    const { theme: e, mode: s } = r;
    if (g(e, s), o && !c)
      try {
        localStorage.setItem(o, JSON.stringify({ theme: e, mode: s }));
      } catch (l) {
        console.warn("Failed to save theme preferences:", l);
      }
    console.log(`🎨 Applied theme: ${e} (${s} mode)`);
  }, [r, o, c]), h(() => {
    if (!i || typeof window > "u") return;
    const e = window.matchMedia("(prefers-color-scheme: dark)"), s = (l) => {
      if (!c)
        try {
          (o ? localStorage.getItem(o) : null) || d((w) => ({
            ...w,
            mode: l.matches ? "dark" : "light"
          }));
        } catch (u) {
          console.warn("Failed to handle system preference change:", u);
        }
    };
    return e.addEventListener("change", s), () => e.removeEventListener("change", s);
  }, [i, c, o]);
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
  }, y = (e) => I[e], $ = (e) => A[e] || "clean", v = {
    theme: r.theme,
    mode: r.mode,
    availableThemes: m,
    setTheme: f,
    setMode: b,
    toggleMode: k,
    getToneClasses: y,
    getDefaultTone: $
  };
  return /* @__PURE__ */ L(p.Provider, { value: v, children: t });
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
