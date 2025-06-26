import { jsx as _, Fragment as r } from "react/jsx-runtime";
import { ThemeProvider as L } from "./theme-provider.js";
import { AdminLayout as n } from "./admin.js";
import { PageLayout as m } from "./page.js";
import { AuthLayout as E } from "./auth.js";
import { BlankLayout as p } from "./blank.js";
import { PopupLayout as A } from "./popup.js";
const O = {};
function I(e, a = []) {
  if (!e) return a;
  try {
    return JSON.parse(e);
  } catch {
    return console.warn("Failed to parse JSON:", e), a;
  }
}
function s() {
  const e = O;
  return {
    // Theme system
    theme: e.VITE__LAYOUT__THEME || "default",
    mode: e.VITE__LAYOUT__MODE || "light",
    detectSystem: e.VITE__LAYOUT__DETECT_SYSTEM === "true",
    // Layout selection
    layout: e.VITE__LAYOUT__TYPE || "admin",
    title: e.VITE__LAYOUT__TITLE || e.VITE__APP__NAME || "Platform",
    logo: e.VITE__LAYOUT__LOGO,
    navigation: I(e.VITE__LAYOUT__NAVIGATION, []),
    // Admin layout
    adminLayout: {
      scheme: e.VITE__LAYOUT__ADMIN__SCHEME || "sidebar",
      tone: e.VITE__LAYOUT__ADMIN__TONE || "subtle",
      size: e.VITE__LAYOUT__ADMIN__SIZE || "lg",
      collapsible: e.VITE__LAYOUT__ADMIN__COLLAPSIBLE !== "false",
      defaultSidebarOpen: e.VITE__LAYOUT__ADMIN__SIDEBAR_OPEN !== "false"
    },
    // Page layout
    pageLayout: {
      scheme: e.VITE__LAYOUT__PAGE__SCHEME || "default",
      tone: e.VITE__LAYOUT__PAGE__TONE || "clean",
      size: e.VITE__LAYOUT__PAGE__SIZE || "xl",
      position: e.VITE__LAYOUT__PAGE__POSITION || "sticky"
    },
    // Auth layout
    authLayout: {
      scheme: e.VITE__LAYOUT__AUTH__SCHEME || "card",
      tone: e.VITE__LAYOUT__AUTH__TONE || "clean",
      size: e.VITE__LAYOUT__AUTH__SIZE || "md",
      imageUrl: e.VITE__LAYOUT__AUTH__IMAGE_URL,
      imageOverlay: e.VITE__LAYOUT__AUTH__IMAGE_OVERLAY || "dark"
    },
    // Blank layout
    blankLayout: {
      scheme: e.VITE__LAYOUT__BLANK__SCHEME || "default",
      tone: e.VITE__LAYOUT__BLANK__TONE || "clean",
      size: e.VITE__LAYOUT__BLANK__SIZE || "lg"
    },
    // Popup layout
    popupLayout: {
      scheme: e.VITE__LAYOUT__POPUP__SCHEME || "modal",
      tone: e.VITE__LAYOUT__POPUP__TONE || "clean",
      size: e.VITE__LAYOUT__POPUP__SIZE || "md",
      position: e.VITE__LAYOUT__POPUP__POSITION || "relative"
    }
  };
}
function c({
  children: e,
  layout: a,
  navigation: u,
  overrides: t = {}
}) {
  const o = { ...s(), ...t }, l = a || o.layout, T = u || o.navigation;
  return /* @__PURE__ */ _(
    L,
    {
      theme: o.theme,
      mode: o.mode,
      detectSystem: o.detectSystem,
      children: y(e, l, T, o)
    }
  );
}
function y(e, a, u, t) {
  const o = typeof window < "u" ? window.location.pathname : "/", l = t.logo ? /* @__PURE__ */ _("img", { src: t.logo, alt: "Logo", className: "h-8 w-auto" }) : void 0;
  switch (a) {
    case "admin":
      return /* @__PURE__ */ _(
        n,
        {
          scheme: t.adminLayout.scheme,
          tone: t.adminLayout.tone,
          size: t.adminLayout.size,
          title: t.title,
          logo: l,
          navigation: u,
          currentPath: o,
          onNavigate: i,
          collapsible: t.adminLayout.collapsible,
          defaultSidebarOpen: t.adminLayout.defaultSidebarOpen,
          children: e
        }
      );
    case "page":
      return /* @__PURE__ */ _(
        m,
        {
          scheme: t.pageLayout.scheme,
          tone: t.pageLayout.tone,
          size: t.pageLayout.size,
          position: t.pageLayout.position,
          navigation: u,
          currentPath: o,
          onNavigate: i,
          title: t.title,
          logo: l,
          copyright: `© ${(/* @__PURE__ */ new Date()).getFullYear()} ${t.title}. All rights reserved.`,
          children: e
        }
      );
    case "auth":
      return /* @__PURE__ */ _(
        E,
        {
          scheme: t.authLayout.scheme,
          tone: t.authLayout.tone,
          size: t.authLayout.size,
          title: t.title,
          logo: t.logo ? /* @__PURE__ */ _("img", { src: t.logo, alt: "Logo", className: "h-16 w-auto" }) : void 0,
          imageUrl: t.authLayout.imageUrl,
          imageOverlay: t.authLayout.imageOverlay,
          children: e
        }
      );
    case "blank":
      return /* @__PURE__ */ _(
        p,
        {
          scheme: t.blankLayout.scheme,
          tone: t.blankLayout.tone,
          size: t.blankLayout.size,
          title: t.title,
          logo: t.logo ? /* @__PURE__ */ _("img", { src: t.logo, alt: "Logo", className: "h-12 w-auto" }) : void 0,
          children: e
        }
      );
    case "popup":
      return /* @__PURE__ */ _(
        A,
        {
          scheme: t.popupLayout.scheme,
          tone: t.popupLayout.tone,
          size: t.popupLayout.size,
          position: t.popupLayout.position,
          title: t.title,
          children: e
        }
      );
    case "none":
    default:
      return /* @__PURE__ */ _(r, { children: e });
  }
}
function i(e, a) {
  if (!(typeof window > "u")) {
    if (a.onClick) {
      a.onClick();
      return;
    }
    e && (e.startsWith("http") || e.startsWith("//") ? window.open(e, "_blank") : window.location.href = e);
  }
}
function S() {
  return s();
}
export {
  c as LayoutWrapper,
  S as useLayoutConfig
};
//# sourceMappingURL=layout-wrapper.js.map
