import { jsx as _, Fragment as E, jsxs as r } from "react/jsx-runtime";
import { ThemeProvider as m } from "./theme-provider.js";
import { AdminLayout as u } from "./admin.js";
import { PageLayout as s } from "./page.js";
import { AuthLayout as p } from "./auth.js";
import { BlankLayout as O } from "./blank.js";
import { PopupLayout as A } from "./popup.js";
const y = {};
function d(e, o = []) {
  if (!e) return o;
  try {
    return JSON.parse(e);
  } catch {
    return console.warn("Failed to parse JSON:", e), o;
  }
}
function L() {
  const e = y;
  return {
    // Theme system
    theme: e.VITE__LAYOUT__THEME || "base",
    mode: e.VITE__LAYOUT__MODE || "light",
    detectSystem: e.VITE__LAYOUT__DETECT_SYSTEM === "true",
    // Layout selection
    layout: e.VITE__LAYOUT__TYPE || "admin",
    title: e.VITE__LAYOUT__TITLE || e.VITE__APP__NAME || "Platform",
    logo: e.VITE__LAYOUT__LOGO,
    navigation: d(e.VITE__LAYOUT__NAVIGATION, []),
    // Admin layout
    adminLayout: {
      scheme: e.VITE__LAYOUT__ADMIN__SCHEME || "sidebar",
      tone: e.VITE__LAYOUT__ADMIN__TONE || "subtle",
      size: e.VITE__LAYOUT__ADMIN__SIZE || "lg",
      defaultSidebarOpen: e.VITE__LAYOUT__ADMIN__SIDEBAR_OPEN !== "false",
      position: e.VITE__LAYOUT__ADMIN__POSITION || "relative"
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
      scheme: e.VITE__LAYOUT__BLANK__SCHEME || "simple",
      tone: e.VITE__LAYOUT__BLANK__TONE || "clean",
      size: e.VITE__LAYOUT__BLANK__SIZE || "lg"
    },
    // Popup layout
    popupLayout: {
      scheme: e.VITE__LAYOUT__POPUP__SCHEME || "modal",
      tone: e.VITE__LAYOUT__POPUP__TONE || "clean",
      size: e.VITE__LAYOUT__POPUP__SIZE || "md",
      position: e.VITE__LAYOUT__POPUP__POSITION || "relative",
      showClose: e.VITE__LAYOUT__POPUP__SHOW_CLOSE !== "false"
    }
  };
}
function S({
  children: e,
  layout: o,
  navigation: i,
  overrides: t = {}
}) {
  const a = { ...L(), ...t }, n = o || a.layout, l = i || a.navigation;
  return /* @__PURE__ */ _(
    m,
    {
      theme: a.theme,
      mode: a.mode,
      detectSystem: a.detectSystem,
      children: I(e, n, l, a)
    }
  );
}
function I(e, o, i, t) {
  const a = typeof window < "u" ? window.location.pathname : "/", n = t.logo ? /* @__PURE__ */ _("img", { src: t.logo, alt: "Logo", className: "h-8 w-auto" }) : void 0;
  switch (o) {
    case "admin":
      return /* @__PURE__ */ r(
        u,
        {
          scheme: t.adminLayout.scheme,
          tone: t.adminLayout.tone,
          size: t.adminLayout.size,
          defaultSidebarOpen: t.adminLayout.defaultSidebarOpen,
          position: t.adminLayout.position,
          children: [
            /* @__PURE__ */ _(
              u.Header,
              {
                title: t.title
              }
            ),
            /* @__PURE__ */ _(
              u.Sidebar,
              {
                navigation: i,
                currentPath: a,
                onNavigate: T,
                logo: n
              }
            ),
            /* @__PURE__ */ _(u.Content, { children: e })
          ]
        }
      );
    case "page":
      return /* @__PURE__ */ r(
        s,
        {
          scheme: t.pageLayout.scheme,
          tone: t.pageLayout.tone,
          size: t.pageLayout.size,
          children: [
            /* @__PURE__ */ _(
              s.Header,
              {
                navigation: i,
                currentPath: a,
                onNavigate: T,
                logo: n,
                title: t.title,
                position: t.pageLayout.position
              }
            ),
            /* @__PURE__ */ _(s.Content, { children: e }),
            /* @__PURE__ */ _(
              s.Footer,
              {
                copyright: `© ${(/* @__PURE__ */ new Date()).getFullYear()} ${t.title}. All rights reserved.`
              }
            )
          ]
        }
      );
    case "auth":
      return /* @__PURE__ */ _(
        p,
        {
          scheme: t.authLayout.scheme,
          tone: t.authLayout.tone,
          size: t.authLayout.size,
          title: t.title,
          logo: n,
          imageUrl: t.authLayout.imageUrl,
          imageOverlay: t.authLayout.imageOverlay,
          children: e
        }
      );
    case "blank":
      return /* @__PURE__ */ r(
        O,
        {
          scheme: t.blankLayout.scheme,
          tone: t.blankLayout.tone,
          size: t.blankLayout.size,
          children: [
            n && /* @__PURE__ */ _("div", { className: "flex justify-center mb-6", children: n }),
            e
          ]
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
          showClose: t.popupLayout.showClose,
          onClose: () => typeof window < "u" && window.close?.(),
          children: e
        }
      );
    case "none":
    default:
      return /* @__PURE__ */ _(E, { children: e });
  }
}
function T(e, o) {
  if (!(typeof window > "u")) {
    if (o.onClick) {
      o.onClick();
      return;
    }
    e && (e.startsWith("http") || e.startsWith("//") ? window.open(e, "_blank") : window.location.href = e);
  }
}
function w() {
  return L();
}
export {
  S as LayoutWrapper,
  w as useLayoutConfig
};
//# sourceMappingURL=layout-wrapper.js.map
