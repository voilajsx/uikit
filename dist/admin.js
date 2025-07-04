import { jsx as e, jsxs as m, Fragment as j } from "react/jsx-runtime";
import * as z from "react";
import { createContext as Z, forwardRef as H, useState as L, useLayoutEffect as X, useEffect as K, useContext as ee } from "react";
import { c as te } from "./index-DACAHwoB.js";
import { c as i } from "./utils-qaFjX9_3.js";
import { Button as O } from "./button.js";
import { Badge as re } from "./badge.js";
import { Separator as ne } from "./separator.js";
import { TooltipProvider as ae, Tooltip as oe, TooltipTrigger as ie, TooltipContent as se } from "./tooltip.js";
import { X as de } from "./x-BxwubQiM.js";
import { M as W } from "./menu-DBhEanGo.js";
import { C as le } from "./chevron-right-pz9eCjj-.js";
function ce() {
  if (typeof document > "u") return;
  const d = "admin-layout-fouc-fix";
  if (document.getElementById(d)) return;
  const g = `
    /* FOUC Prevention: Hide sidebar until React hydrates */
    .admin-layout-loading {
      overflow: hidden;
    }
    
    .admin-layout-loading .admin-sidebar-mobile {
      transform: translateX(-100%) !important;
      transition: none !important;
    }
    
    /* Ensure mobile sidebar starts hidden */
    @media (max-width: 1023px) {
      .admin-sidebar-mobile {
        transform: translateX(-100%);
      }
    }
    
    /* Desktop: Prevent width flash */
    @media (min-width: 1024px) {
      .admin-layout-loading .admin-sidebar-container {
        width: 0 !important;
        transition: none !important;
      }
    }
  `, l = document.createElement("style");
  l.id = d, l.textContent = g, document.head.appendChild(l);
}
function me() {
  typeof document > "u" || (document.documentElement.classList.add("admin-layout-loading"), ce());
}
function ue() {
  typeof document > "u" || setTimeout(() => {
    document.documentElement.classList.remove("admin-layout-loading");
  }, 50);
}
function _() {
  return typeof window > "u" ? !1 : window.innerWidth < 1024;
}
function fe(d) {
  return typeof window > "u" ? d : _() ? !1 : d;
}
const $ = Z({
  scheme: "sidebar",
  tone: "subtle",
  size: "lg",
  sidebarExpanded: !0,
  setSidebarExpanded: () => {
  },
  isMobile: !1,
  isHydrated: !1
}), be = te(
  "min-h-screen flex bg-background",
  {
    variants: {
      tone: {
        clean: "",
        subtle: "",
        brand: "",
        contrast: ""
      }
    },
    defaultVariants: {
      tone: "subtle"
    }
  }
), q = H(({
  scheme: d = "sidebar",
  tone: g = "subtle",
  size: l = "lg",
  position: p = "relative",
  defaultSidebarOpen: x = !0,
  className: k,
  children: N
}, M) => {
  z.useMemo(() => {
    me();
  }, []);
  const [y, o] = L(!1), [s, a] = L(_), [u, w] = L(
    () => fe(x)
  );
  X(() => {
    o(!0), ue();
  }, []), X(() => {
    const r = () => {
      const v = window.innerWidth < 1024, n = s;
      a(v), v && !n && u ? w(!1) : !v && n && w(x);
    };
    return r(), window.addEventListener("resize", r), () => window.removeEventListener("resize", r);
  }, [s, u, x]), K(() => (s && u ? document.body.style.overflow = "hidden" : document.body.style.overflow = "unset", () => {
    document.body.style.overflow = "unset";
  }), [s, u]);
  const b = z.Children.toArray(N), I = b.find(
    (r) => z.isValidElement(r) && r.type === F
  ), T = b.find(
    (r) => z.isValidElement(r) && r.type === R
  ), P = b.find(
    (r) => z.isValidElement(r) && r.type === V
  );
  return /* @__PURE__ */ e($.Provider, { value: {
    scheme: d,
    tone: g,
    size: l,
    sidebarExpanded: u,
    setSidebarExpanded: w,
    isMobile: s,
    isHydrated: y
  }, children: /* @__PURE__ */ m(
    "div",
    {
      ref: M,
      className: i(be({ tone: g }), k),
      children: [
        /* @__PURE__ */ e("div", { className: i(
          "admin-sidebar-container flex-shrink-0 overflow-hidden",
          // ✅ FOUC FIX: Only apply transitions after hydration
          y ? "transition-all duration-200 ease-out" : "",
          // Desktop: smooth width transition
          !s && u && (l === "sm" ? "w-48" : l === "md" ? "w-56" : l === "lg" ? "w-64" : l === "xl" ? "w-72" : "w-80"),
          !s && !u && "w-0",
          // Mobile: don't affect layout
          s && "w-0",
          p === "sticky" && s && "top-0 max-h-screen",
          p === "sticky" && !s && "sticky top-0 max-h-screen"
        ), children: I }),
        /* @__PURE__ */ m("div", { className: i(
          "flex-1 flex flex-col min-w-0",
          // ✅ FOUC FIX: Only apply transitions after hydration
          y ? "transition-all duration-200 ease-out" : ""
        ), children: [
          T,
          P
        ] })
      ]
    }
  ) });
});
q.displayName = "AdminLayout";
const F = H(({
  tone: d,
  navigation: g = [],
  currentPath: l = "",
  onNavigate: p,
  logo: x,
  position: k,
  footer: N,
  className: M
}, y) => {
  const { scheme: o, tone: s, size: a, sidebarExpanded: u, setSidebarExpanded: w, isMobile: b, isHydrated: I } = D(), [T, P] = L(/* @__PURE__ */ new Set()), [r, v] = L(!1), n = d || s, C = o === "compact", h = !C || r, G = () => {
    C && v(!r);
  }, J = (t) => {
    const c = new Set(T);
    c.has(t) ? c.delete(t) : c.add(t), P(c);
  }, Q = (t, c = !1) => {
    const E = c ? "w-[92%] flex items-center group text-left font-medium rounded-lg cursor-pointer transition-all duration-300 ease-out transform hover:scale-[1.02]" : "w-full flex items-center group text-left font-medium rounded-lg cursor-pointer transition-all duration-300 ease-out transform hover:scale-[1.02]", S = c ? h ? "ml-4 px-3 py-2" : "px-2 py-2" : h ? "px-3 py-2.5" : "px-2 py-2.5 justify-center";
    let f = "";
    switch (n) {
      case "clean":
        f = t ? "bg-muted text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground hover:bg-muted/50";
        break;
      case "subtle":
        f = t ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground hover:bg-background/60";
        break;
      case "brand":
        f = t ? "bg-primary-foreground/20 text-primary-foreground shadow-sm" : "text-primary-foreground/90 hover:text-primary-foreground hover:bg-primary-foreground/10";
        break;
      case "contrast":
        f = t ? "bg-muted/20 dark:bg-muted/20 text-white shadow-sm" : "text-white hover:bg-muted/20";
        break;
      default:
        f = t ? "bg-muted/10 text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground hover:bg-muted/50";
    }
    return i(E, S, f);
  }, B = ({ item: t, isSubmenu: c = !1 }) => {
    const E = !c && t.items && t.items.length > 0, S = T.has(t.key), f = t.href ? l === t.href : !!t.isActive, U = /* @__PURE__ */ m(
      "button",
      {
        onClick: () => {
          if (C && !r) {
            v(!0);
            return;
          }
          E ? J(t.key) : t.href && p ? (p(t.href, t), b && w(!1)) : t.onClick && (t.onClick(), b && w(!1));
        },
        className: Q(f, c),
        children: [
          !c && t.icon && /* @__PURE__ */ e(t.icon, { className: i(
            "flex-shrink-0",
            h ? "h-4 w-4 mr-3" : "h-5 w-5"
          ) }),
          h && /* @__PURE__ */ m(j, { children: [
            /* @__PURE__ */ e("span", { className: "flex-1 truncate text-left", children: t.label }),
            t.badge && /* @__PURE__ */ e(
              re,
              {
                variant: f ? "secondary" : "outline",
                className: i(
                  "text-xs h-4 px-1 ml-1 flex-shrink-0",
                  n === "brand" && !f && "bg-primary-foreground/10 text-primary-foreground border-primary-foreground/20",
                  n === "brand" && f && "bg-primary-foreground/20 text-primary-foreground border-primary-foreground/30",
                  n === "contrast" && !f && "bg-zinc-700 text-zinc-300 border-zinc-600",
                  n === "contrast" && f && "bg-zinc-600 text-zinc-100 border-zinc-500"
                ),
                children: t.badge
              }
            ),
            E && /* @__PURE__ */ e(le, { className: i(
              "h-4 w-4 flex-shrink-0 transition-transform duration-200",
              S && "rotate-90"
            ) })
          ] })
        ]
      }
    );
    return C && !r && !c && t.icon ? /* @__PURE__ */ m("div", { className: "w-full", children: [
      /* @__PURE__ */ e(ae, { children: /* @__PURE__ */ m(oe, { delayDuration: 300, children: [
        /* @__PURE__ */ e(ie, { asChild: !0, children: U }),
        /* @__PURE__ */ e(
          se,
          {
            side: "right",
            className: "bg-white text-black border border-gray-200 shadow-md",
            children: /* @__PURE__ */ e("p", { children: t.label })
          }
        )
      ] }) }),
      E && S && h && t.items && /* @__PURE__ */ e("div", { className: "overflow-hidden transition-all duration-300 mt-1", children: /* @__PURE__ */ e("div", { className: "space-y-1 pb-2", children: t.items.map((A) => /* @__PURE__ */ e(B, { item: A, isSubmenu: !0 }, A.key)) }) })
    ] }, t.key) : /* @__PURE__ */ m("div", { className: "w-full", children: [
      U,
      E && S && h && t.items && /* @__PURE__ */ e("div", { className: "overflow-hidden transition-all duration-400 ease-out mt-1", children: /* @__PURE__ */ e("div", { className: "space-y-1 pb-2 animate-in slide-in-from-top-2", children: t.items.map((A, Y) => /* @__PURE__ */ e(
        "div",
        {
          className: "transition-all duration-300 ease-out",
          style: { transitionDelay: `${Y * 75}ms` },
          children: /* @__PURE__ */ e(B, { item: A, isSubmenu: !0 })
        },
        A.key
      )) }) })
    ] }, t.key);
  };
  return /* @__PURE__ */ m(j, { children: [
    b && u && /* @__PURE__ */ e(
      "div",
      {
        className: "fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm lg:hidden",
        onClick: () => w(!1),
        "aria-hidden": "true"
      }
    ),
    /* @__PURE__ */ e(
      "aside",
      {
        ref: y,
        className: i(
          "admin-sidebar-mobile border-r flex flex-col bg-background overflow-hidden",
          // ✅ FOUC FIX: Only apply smooth transitions after hydration
          I ? "transition-all duration-200 ease-out" : "",
          // ✅ FIXED: Proper z-index layering for mobile
          // Mobile: Higher z-index than header (z-[70] > z-[10])
          b ? "fixed left-0 top-0 z-[70] h-full" : "relative h-screen",
          // Mobile: slide animation (only when hydrated to prevent flash)
          b && (u ? "translate-x-0" : "-translate-x-full"),
          // Desktop: always visible but container controls width
          !b && "translate-x-0",
          // Fixed widths for consistent animation
          o === "sidebar" && a === "sm" && "w-48",
          o === "sidebar" && a === "md" && "w-56",
          o === "sidebar" && a === "lg" && "w-64",
          o === "sidebar" && a === "xl" && "w-72",
          o === "sidebar" && a === "full" && "w-80",
          o === "compact" && !r && a === "sm" && "w-12",
          o === "compact" && !r && a === "md" && "w-14",
          o === "compact" && !r && a === "lg" && "w-16",
          o === "compact" && !r && a === "xl" && "w-18",
          o === "compact" && !r && a === "full" && "w-20",
          o === "compact" && r && a === "sm" && "w-48",
          o === "compact" && r && a === "md" && "w-56",
          o === "compact" && r && a === "lg" && "w-64",
          o === "compact" && r && a === "xl" && "w-72",
          o === "compact" && r && a === "full" && "w-80",
          // Tone colors
          n === "clean" && "bg-background/90 backdrop-blur-sm border-border/40 text-foreground",
          n === "subtle" && "bg-muted/90 backdrop-blur-sm border-border/30 text-foreground",
          n === "brand" && "bg-primary border-primary-foreground/20 text-primary-foreground",
          n === "contrast" && "bg-zinc-900 border-zinc-700/40 text-zinc-100",
          M
        ),
        children: /* @__PURE__ */ m("div", { className: "flex flex-col h-full", children: [
          /* @__PURE__ */ e("div", { className: i(
            "flex items-center shadow-sm flex-shrink-0 border-b transition-all duration-300 ease-out",
            n === "clean" && "border-border/40",
            n === "subtle" && "border-border/30",
            n === "brand" && "border-primary-foreground/20",
            n === "contrast" && "border-zinc-700/40",
            h ? "justify-between h-16 px-4" : "justify-center h-16 px-2"
          ), children: h ? /* @__PURE__ */ m(j, { children: [
            x && /* @__PURE__ */ e("div", { className: i(
              "flex-shrink-0",
              n === "brand" && "[&_*]:text-primary-foreground",
              n === "contrast" && "[&_*]:text-zinc-100"
            ), children: x }),
            (b || C && r) && /* @__PURE__ */ e(
              O,
              {
                variant: "ghost",
                size: "icon",
                onClick: () => {
                  b ? w(!1) : C && v(!1);
                },
                className: "flex-shrink-0",
                children: /* @__PURE__ */ e(de, { className: "h-4 w-4" })
              }
            )
          ] }) : /* @__PURE__ */ e(
            O,
            {
              variant: "ghost",
              size: "icon",
              onClick: G,
              className: "flex-shrink-0",
              children: /* @__PURE__ */ e(W, { className: "h-4 w-4" })
            }
          ) }),
          /* @__PURE__ */ e("div", { className: "flex-1 overflow-y-auto", children: /* @__PURE__ */ e("nav", { className: i(
            "space-y-1 transition-all duration-300 ease-out",
            h ? "p-4" : "p-2"
          ), children: g.map((t, c) => /* @__PURE__ */ e(
            "div",
            {
              className: i(
                "transition-all duration-300 ease-out",
                h ? "opacity-100 translate-x-0" : "opacity-100"
              ),
              style: {
                transitionDelay: h ? `${c * 50}ms` : "0ms"
              },
              children: /* @__PURE__ */ e(B, { item: t })
            },
            t.key
          )) }) }),
          N && h && /* @__PURE__ */ m(j, { children: [
            /* @__PURE__ */ e(ne, { className: i(
              n === "clean" && "bg-border/40",
              n === "subtle" && "bg-border/30",
              n === "brand" && "bg-primary-foreground/20",
              n === "contrast" && "bg-zinc-700/40"
            ) }),
            /* @__PURE__ */ e("div", { className: "flex-shrink-0 p-4", children: N })
          ] })
        ] })
      }
    )
  ] });
});
F.displayName = "AdminSidebar";
const R = H(({
  tone: d,
  size: g,
  title: l,
  position: p = "sticky",
  breadcrumbs: x = [],
  actions: k,
  className: N
}, M) => {
  const { sidebarExpanded: y, setSidebarExpanded: o, isMobile: s } = D();
  return /* @__PURE__ */ e(
    "header",
    {
      ref: M,
      className: i(
        "w-full shadow-sm bg-background/95 backdrop-blur-md text-foreground flex-shrink-0 border-b border-border/50",
        "transition-all duration-200 ease-out",
        // ✅ FIXED: Sticky on desktop, lower z-index for mobile sidebar layering
        p === "sticky" && "sticky top-0",
        p === "fixed" && "fixed top-0 left-0 right-0",
        // Always use lower z-index so mobile sidebar appears above
        "z-[10]",
        p === "relative" && "relative",
        N
      ),
      children: /* @__PURE__ */ m("div", { className: "flex items-center justify-between px-4 lg:px-6 h-16", children: [
        /* @__PURE__ */ m("div", { className: "flex items-center gap-4 min-w-0", children: [
          /* @__PURE__ */ e(
            "button",
            {
              className: i(
                "p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-all duration-300 ease-out",
                "transform hover:scale-105 active:scale-95",
                // Always show on mobile
                s && "block",
                // Show on desktop for toggle functionality  
                !s && "block"
              ),
              onClick: () => o(!y),
              "aria-label": y ? "Close sidebar" : "Open sidebar",
              children: /* @__PURE__ */ e(W, { className: i(
                "h-5 w-5 transition-transform duration-300 ease-out",
                y && !s && "rotate-180"
              ) })
            }
          ),
          /* @__PURE__ */ e("div", { className: "min-w-0", children: x.length > 0 && /* @__PURE__ */ e("nav", { className: "flex items-center gap-2 text-muted-foreground", children: x.map((a, u) => /* @__PURE__ */ m(z.Fragment, { children: [
            u > 0 && /* @__PURE__ */ e("span", { children: "/" }),
            a.href ? /* @__PURE__ */ e("button", { className: "hover:text-foreground transition-colors", children: a.label }) : /* @__PURE__ */ e("span", { children: a.label })
          ] }, u)) }) })
        ] }),
        k && /* @__PURE__ */ e("div", { className: "flex-shrink-0", children: k })
      ] })
    }
  );
});
R.displayName = "AdminHeader";
const V = H(({
  tone: d,
  size: g,
  className: l,
  children: p
}, x) => {
  const { isMobile: k } = D();
  return /* @__PURE__ */ e(
    "main",
    {
      ref: x,
      className: i(
        "flex-1 min-w-0 overflow-auto",
        l
      ),
      children: /* @__PURE__ */ e("div", { className: "p-4 lg:p-6 w-full", children: /* @__PURE__ */ e("div", { className: "w-full mx-auto", children: p }) })
    }
  );
});
V.displayName = "AdminContent";
const D = () => {
  const d = ee($);
  if (!d)
    throw new Error("useAdmin must be used within an AdminLayout component");
  return d;
}, Me = Object.assign(q, {
  Sidebar: F,
  Header: R,
  Content: V
});
export {
  V as AdminContent,
  R as AdminHeader,
  Me as AdminLayout,
  F as AdminSidebar,
  D as useAdmin
};
//# sourceMappingURL=admin.js.map
