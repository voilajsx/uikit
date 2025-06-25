import { jsx as _, Fragment as A } from "react/jsx-runtime";
import { ThemeProvider as m } from "./theme-provider.js";
import { AdminLayout as L } from "./admin.js";
import { PageLayout as E } from "./page.js";
import { AuthLayout as d } from "./auth.js";
import { BlankLayout as I } from "./blank.js";
const c = {};
function l(t) {
  if (!t) return [];
  try {
    return JSON.parse(t);
  } catch {
    return console.warn("Failed to parse navigation JSON:", t), [];
  }
}
function r() {
  const t = c;
  console.log("🔍 DEBUG getLayoutConfig: Raw environment variables:", {
    VITE__LAYOUT__THEME: t.VITE__LAYOUT__THEME,
    VITE__LAYOUT__VARIANT: t.VITE__LAYOUT__VARIANT,
    VITE__LAYOUT__TYPE: t.VITE__LAYOUT__TYPE,
    VITE__LAYOUT__TITLE: t.VITE__LAYOUT__TITLE,
    VITE__LAYOUT__ADMIN__VARIANT: t.VITE__LAYOUT__ADMIN__VARIANT,
    VITE__LAYOUT__ADMIN__SIZE: t.VITE__LAYOUT__ADMIN__SIZE
  });
  const a = {
    // Theme configuration
    theme: t.VITE__LAYOUT__THEME || "default",
    variant: t.VITE__LAYOUT__VARIANT || "light",
    detectSystem: t.VITE__LAYOUT__DETECT_SYSTEM === "true",
    // Layout configuration
    layout: t.VITE__LAYOUT__TYPE || "admin",
    title: t.VITE__LAYOUT__TITLE || t.VITE__APP__NAME || "Platform",
    logo: t.VITE__LAYOUT__LOGO,
    // Navigation configuration (JSON string)
    navigation: l(t.VITE__LAYOUT__NAVIGATION),
    // Admin layout specific props
    adminLayout: {
      variant: t.VITE__LAYOUT__ADMIN__VARIANT || "default",
      size: t.VITE__LAYOUT__ADMIN__SIZE || "md",
      collapsible: t.VITE__LAYOUT__ADMIN__COLLAPSIBLE !== "false",
      defaultSidebarOpen: t.VITE__LAYOUT__ADMIN__SIDEBAR_OPEN !== "false"
    },
    // Page layout specific props
    pageLayout: {
      variant: t.VITE__LAYOUT__PAGE__VARIANT || "default",
      size: t.VITE__LAYOUT__PAGE__SIZE || "xl"
    },
    // Header specific props
    header: {
      variant: t.VITE__LAYOUT__HEADER__VARIANT || "default",
      sticky: t.VITE__LAYOUT__HEADER__STICKY !== "false",
      size: t.VITE__LAYOUT__HEADER__SIZE || "xl"
    },
    // Footer specific props
    footer: {
      variant: t.VITE__LAYOUT__FOOTER__VARIANT || "default",
      size: t.VITE__LAYOUT__FOOTER__SIZE || "xl"
    },
    // Auth layout specific props
    authLayout: {
      variant: t.VITE__LAYOUT__AUTH__VARIANT || "card",
      imageUrl: t.VITE__LAYOUT__AUTH__IMAGE_URL,
      imageOverlay: t.VITE__LAYOUT__AUTH__IMAGE_OVERLAY || "dark"
    },
    // Blank layout specific props
    blankLayout: {
      variant: t.VITE__LAYOUT__BLANK__VARIANT || "default"
    },
    // Additional custom props (JSON format)
    customProps: l(t.VITE__LAYOUT__CUSTOM_PROPS) || {}
  };
  return console.log("🔧 DEBUG getLayoutConfig: Final config:", {
    theme: a.theme,
    variant: a.variant,
    layout: a.layout,
    title: a.title,
    navItems: a.navigation.length,
    adminVariant: a.adminLayout.variant,
    adminSize: a.adminLayout.size
  }), typeof window < "u" && window.console && console.log("🔧 Layout configuration loaded:", {
    theme: a.theme,
    variant: a.variant,
    layout: a.layout,
    title: a.title,
    navItems: a.navigation.length,
    customProps: Object.keys(a.customProps).length,
    source: "VITE__ environment variables"
  }), a;
}
function Y({
  children: t,
  layout: a,
  navigation: n,
  overrides: e = {}
}) {
  const o = { ...r(), ...e }, i = a || o.layout, T = n || o.navigation;
  return console.log("🎨 DEBUG LayoutWrapper: Passing to ThemeProvider:", {
    theme: o.theme,
    variant: o.variant,
    detectSystem: o.detectSystem,
    finalLayout: i,
    overrides: e
  }), /* @__PURE__ */ _(
    m,
    {
      theme: o.theme,
      variant: o.variant,
      detectSystem: o.detectSystem,
      children: g(t, i, T, o)
    }
  );
}
function g(t, a, n, e) {
  switch (console.log("🏗️ DEBUG renderLayoutFromConfig:", {
    layout: a,
    navigationCount: n.length,
    theme: e.theme
  }), a) {
    case "admin":
      return /* @__PURE__ */ _(
        L,
        {
          variant: e.adminLayout.variant,
          size: e.adminLayout.size,
          title: e.title,
          logo: e.logo ? /* @__PURE__ */ _("img", { src: e.logo, alt: "Logo", className: "h-8 w-auto" }) : void 0,
          navigation: n,
          currentPath: typeof window < "u" ? window.location.pathname : "/",
          onNavigate: s,
          collapsible: e.adminLayout.collapsible,
          defaultSidebarOpen: e.adminLayout.defaultSidebarOpen,
          headerActions: u(),
          ...e.customProps,
          children: t
        }
      );
    case "page":
      return /* @__PURE__ */ _(
        E,
        {
          variant: e.pageLayout.variant,
          size: e.pageLayout.size,
          sticky: e.header.sticky,
          navigation: n,
          currentPath: typeof window < "u" ? window.location.pathname : "/",
          onNavigate: s,
          title: e.title,
          logo: e.logo ? /* @__PURE__ */ _("img", { src: e.logo, alt: "Logo", className: "h-8 w-auto" }) : void 0,
          headerActions: u(),
          copyright: `© ${(/* @__PURE__ */ new Date()).getFullYear()} ${e.title}. All rights reserved.`,
          ...e.customProps,
          children: t
        }
      );
    case "auth":
      return /* @__PURE__ */ _(
        d,
        {
          variant: e.authLayout.variant,
          title: e.title,
          logo: e.logo ? /* @__PURE__ */ _("img", { src: e.logo, alt: "Logo", className: "h-16 w-auto" }) : void 0,
          imageUrl: e.authLayout.imageUrl,
          imageOverlay: e.authLayout.imageOverlay,
          ...e.customProps,
          children: t
        }
      );
    case "blank":
      return /* @__PURE__ */ _(
        I,
        {
          variant: e.blankLayout.variant,
          title: e.title,
          logo: e.logo ? /* @__PURE__ */ _("img", { src: e.logo, alt: "Logo", className: "h-12 w-auto" }) : void 0,
          ...e.customProps,
          children: t
        }
      );
    case "none":
    default:
      return /* @__PURE__ */ _(A, { children: t });
  }
}
function u(t) {
  return null;
}
function s(t, a) {
  if (!(typeof window > "u")) {
    if (a.onClick) {
      const n = a.onClick.toString();
      if (n.includes("handleLogout") || a.key === "logout") {
        localStorage.removeItem("auth_token"), localStorage.removeItem("auth_user"), window.dispatchEvent(new CustomEvent("layout-logout")), window.location.href = "/login";
        return;
      }
      if (n.includes("toggleTheme") || a.key === "theme-toggle") {
        const o = (document.documentElement.classList.contains("dark") ? "dark" : "light") === "dark" ? "light" : "dark";
        document.documentElement.classList.toggle("dark", o === "dark"), localStorage.setItem("uikit-theme", JSON.stringify({
          theme: "default",
          variant: o
        }));
        return;
      }
      a.onClick();
      return;
    }
    t && (t.startsWith("http") || t.startsWith("//") ? window.open(t, "_blank") : window.location.href = t);
  }
}
function p() {
  return r();
}
function f(t, a) {
  return {
    ...r()[a] || {},
    ...t
    // Component props override layout config
  };
}
export {
  Y as LayoutWrapper,
  p as useLayoutConfig,
  f as withLayoutConfig
};
//# sourceMappingURL=wrapper.js.map
