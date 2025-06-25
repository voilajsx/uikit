import { jsx as E } from "react/jsx-runtime";
import { createContext as A, useState as M, useEffect as g, useContext as x } from "react";
let s = [
  { id: "default", name: "Default" },
  { id: "aurora", name: "Aurora" },
  { id: "metro", name: "Metro" },
  { id: "neon", name: "Neon" },
  { id: "ruby", name: "Ruby" },
  { id: "studio", name: "Studio" }
];
const f = /* @__PURE__ */ new Map(), m = {
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
function v(e) {
  return Object.entries(e).map(([t, r]) => `  ${`--color-${t.replace(/([A-Z])/g, "-$1").toLowerCase()}`}: ${r};`).join(`
`);
}
function b(e, t) {
  return {
    ...t,
    // Start with complete defaults
    ...e
    // Override with theme-specific colors
  };
}
function C(e) {
  if (!e.light || !e.dark)
    return { isComplete: !1, lightMissing: [], darkMissing: [] };
  const t = Object.keys(m.light), r = t.filter((l) => !e.light[l]), a = t.filter((l) => !e.dark[l]);
  return r.length > 0 && (console.warn(`⚠️ Theme ${e.id} missing ${r.length} light colors:`, r), console.info("💡 These will fallback to default theme values")), a.length > 0 && (console.warn(`⚠️ Theme ${e.id} missing ${a.length} dark colors:`, a), console.info("💡 These will fallback to default theme values")), {
    isComplete: r.length === 0 && a.length === 0,
    lightMissing: r,
    darkMissing: a
  };
}
function w(e) {
  if (!e.light || !e.dark) {
    console.warn(`Theme ${e.id} missing light/dark definitions`);
    return;
  }
  const t = C(e), r = b(e.light, m.light), a = b(e.dark, m.dark);
  if (!t.isComplete) {
    const n = t.lightMissing.length + t.darkMissing.length;
    console.log(`🔧 Theme ${e.id}: Added ${n} fallback colors from default theme`);
  }
  const l = `theme-${e.id}-dynamic`, c = document.getElementById(l);
  c && c.remove();
  const h = v(r), d = v(a), k = `
/* ${e.name} Theme - With Default Fallbacks */
.theme-${e.id} {
${h}
}

.theme-${e.id}.dark {
${d}
}
`, o = document.createElement("style");
  o.id = l, o.textContent = k, document.head.appendChild(o), console.log(`✅ Injected complete CSS for theme: ${e.name} (${e.id})`);
}
function p(e, t = !0) {
  if (!e || !e.id || !e.name) {
    console.warn("registerTheme: Theme must have id and name properties");
    return;
  }
  f.set(e.id, e), s.find((r) => r.id === e.id) || s.push({ id: e.id, name: e.name }), t && typeof window < "u" && e.light && e.dark && w(e), console.log(`📝 Registered theme: ${e.name} (${e.id})`);
}
function y(e, t = !0) {
  e.forEach((r) => p(r, t));
}
function L() {
  return [...s];
}
function D(e) {
  return f.get(e) || null;
}
function S(e) {
  if (["default", "aurora", "metro", "neon", "ruby", "studio"].includes(e)) {
    console.warn(`Cannot remove built-in theme: ${e}`);
    return;
  }
  if (s = s.filter((r) => r.id !== e), f.delete(e), typeof window < "u") {
    const r = document.getElementById(`theme-${e}-dynamic`);
    r && r.remove();
  }
  console.log(`🗑️ Unregistered theme: ${e}`);
}
function $() {
  typeof window > "u" || f.forEach((e) => {
    e.light && e.dark && w(e);
  });
}
const T = A(void 0);
function V({
  children: e,
  theme: t = "default",
  variant: r = "light",
  detectSystem: a = !0,
  customThemes: l = [],
  autoInjectCSS: c = !0
}) {
  const [h, d] = M({
    theme: t,
    variant: r
  });
  g(() => {
    l.length > 0 && y(l, c);
  }, [l, c]), g(() => {
    c && typeof window < "u" && setTimeout(() => {
      $();
    }, 0);
  }, [c]), g(() => {
    if (!(typeof window > "u"))
      try {
        const o = localStorage.getItem("uikit-theme");
        if (o) {
          const { theme: n, variant: i } = JSON.parse(o);
          d({ theme: n, variant: i });
        } else a && window.matchMedia("(prefers-color-scheme: dark)").matches && d((i) => ({ ...i, variant: "dark" }));
      } catch (o) {
        console.warn("Failed to load theme from localStorage:", o);
      }
  }, [a]), g(() => {
    if (typeof window > "u") return;
    const { theme: o, variant: n } = h, i = document.documentElement;
    i.classList.remove("dark", "light"), s.forEach((u) => {
      i.classList.remove(`theme-${u.id}`);
    }), o !== "default" && i.classList.add(`theme-${o}`), i.classList.add(n);
    try {
      localStorage.setItem("uikit-theme", JSON.stringify({ theme: o, variant: n }));
    } catch (u) {
      console.warn("Failed to save theme to localStorage:", u);
    }
    console.log(`🎨 Applied theme: ${o} (${n})`);
  }, [h]), g(() => {
    if (!a || typeof window > "u") return;
    const o = window.matchMedia("(prefers-color-scheme: dark)"), n = (i) => {
      try {
        localStorage.getItem("uikit-theme") || d((F) => ({
          ...F,
          variant: i.matches ? "dark" : "light"
        }));
      } catch (u) {
        console.warn("Failed to handle system preference change:", u);
      }
    };
    return o.addEventListener("change", n), () => o.removeEventListener("change", n);
  }, [a]);
  const k = {
    theme: h.theme,
    variant: h.variant,
    availableThemes: s,
    setTheme: (o) => {
      typeof o == "string" ? (s.find((i) => i.id === o) || console.warn(
        `Theme '${o}' not found in registry. Available themes:`,
        s.map((i) => i.id)
      ), d((i) => ({ ...i, theme: o }))) : typeof o == "object" && o.id ? (p(o, c), d((n) => ({ ...n, theme: o.id }))) : console.warn("setTheme: Invalid theme format. Expected string ID or theme object.");
    },
    setVariant: (o) => {
      o === "light" || o === "dark" ? d((n) => ({ ...n, variant: o })) : console.warn('setVariant: Invalid variant. Expected "light" or "dark".');
    },
    toggleVariant: () => {
      d((o) => ({
        ...o,
        variant: o.variant === "light" ? "dark" : "light"
      }));
    },
    // Expose theme management functions
    registerTheme: (o) => p(o, c),
    registerThemes: (o) => y(o, c),
    getAvailableThemes: L,
    getThemeDefinition: D,
    unregisterTheme: S,
    reinjectedAllThemeCSS: $
  };
  return /* @__PURE__ */ E(T.Provider, { value: k, children: e });
}
function B() {
  const e = x(T);
  if (!e)
    throw new Error("useTheme must be used within a ThemeProvider");
  return e;
}
export {
  V as ThemeProvider,
  L as getAvailableThemes,
  D as getThemeDefinition,
  p as registerTheme,
  y as registerThemes,
  $ as reinjectedAllThemeCSS,
  S as unregisterTheme,
  B as useTheme
};
//# sourceMappingURL=theme-provider.js.map
