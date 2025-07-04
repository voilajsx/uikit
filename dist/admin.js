import { jsx as e, jsxs as c, Fragment as j } from "react/jsx-runtime";
import * as L from "react";
import { createContext as Y, forwardRef as B, useState as V, useLayoutEffect as Z, useEffect as O, useContext as K } from "react";
import { c as ee } from "./index-DACAHwoB.js";
import { c as i } from "./utils-qaFjX9_3.js";
import { Button as W } from "./button.js";
import { Badge as re } from "./badge.js";
import { Separator as te } from "./separator.js";
import { TooltipProvider as ne, Tooltip as ae, TooltipTrigger as oe, TooltipContent as se } from "./tooltip.js";
import { X as ie } from "./x-BxwubQiM.js";
import { M as _ } from "./menu-DBhEanGo.js";
import { C as de } from "./chevron-right-pz9eCjj-.js";
function $() {
  return typeof window > "u" ? !1 : window.innerWidth < 1024;
}
function le(b) {
  return typeof window > "u" ? b : $() ? !1 : b;
}
const X = Y({
  scheme: "sidebar",
  tone: "subtle",
  size: "lg",
  sidebarExpanded: !0,
  setSidebarExpanded: () => {
  },
  isMobile: !1
}), ce = ee(
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
), q = B(({
  scheme: b = "sidebar",
  tone: y = "subtle",
  size: x = "lg",
  position: h = "relative",
  defaultSidebarOpen: p = !0,
  className: v,
  children: k
}, M) => {
  const [s, n] = V($), [m, t] = V(
    () => le(p)
  );
  Z(() => {
    const d = () => {
      const a = window.innerWidth < 1024, C = s;
      n(a), a && !C && m ? t(!1) : !a && C && t(p);
    };
    return d(), window.addEventListener("resize", d), () => window.removeEventListener("resize", d);
  }, [s, m, p]), O(() => (s && m ? document.body.style.overflow = "hidden" : document.body.style.overflow = "unset", () => {
    document.body.style.overflow = "unset";
  }), [s, m]);
  const w = L.Children.toArray(k), N = w.find(
    (d) => L.isValidElement(d) && d.type === D
  ), g = w.find(
    (d) => L.isValidElement(d) && d.type === H
  ), T = w.find(
    (d) => L.isValidElement(d) && d.type === I
  );
  return /* @__PURE__ */ e(X.Provider, { value: {
    scheme: b,
    tone: y,
    size: x,
    sidebarExpanded: m,
    setSidebarExpanded: t,
    isMobile: s
  }, children: /* @__PURE__ */ c(
    "div",
    {
      ref: M,
      className: i(ce({ tone: y }), v),
      children: [
        /* @__PURE__ */ e("div", { className: i(
          "flex-shrink-0 transition-all duration-500 ease-out overflow-hidden",
          // Desktop: smooth width transition
          !s && m && (x === "sm" ? "w-48" : x === "md" ? "w-56" : x === "lg" ? "w-64" : x === "xl" ? "w-72" : "w-80"),
          !s && !m && "w-0",
          // Mobile: don't affect layout
          s && "w-0",
          h === "sticky" && s && "top-0 max-h-screen",
          h === "sticky" && !s && "sticky top-0 max-h-screen"
        ), children: N }),
        /* @__PURE__ */ c("div", { className: "flex-1 flex flex-col min-w-0 transition-all duration-500 ease-out", children: [
          g,
          T
        ] })
      ]
    }
  ) });
});
q.displayName = "AdminLayout";
const D = B(({
  tone: b,
  navigation: y = [],
  currentPath: x = "",
  onNavigate: h,
  logo: p,
  position: v,
  footer: k,
  className: M
}, s) => {
  const { scheme: n, tone: m, size: t, sidebarExpanded: w, setSidebarExpanded: N, isMobile: g } = F(), [T, d] = V(/* @__PURE__ */ new Set()), [a, C] = V(!1), o = b || m, E = n === "compact", f = !E || a, G = () => {
    E && C(!a);
  }, J = (r) => {
    const l = new Set(T);
    l.has(r) ? l.delete(r) : l.add(r), d(l);
  }, Q = (r, l = !1) => {
    const z = l ? "w-[92%] flex items-center group text-left font-medium rounded-lg cursor-pointer transition-all duration-300 ease-out transform hover:scale-[1.02]" : "w-full flex items-center group text-left font-medium rounded-lg cursor-pointer transition-all duration-300 ease-out transform hover:scale-[1.02]", S = l ? f ? "ml-4 px-3 py-2" : "px-2 py-2" : f ? "px-3 py-2.5" : "px-2 py-2.5 justify-center";
    let u = "";
    switch (o) {
      case "clean":
        u = r ? "bg-muted text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground hover:bg-muted/50";
        break;
      case "subtle":
        u = r ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground hover:bg-background/60";
        break;
      case "brand":
        u = r ? "bg-primary-foreground/20 text-primary-foreground shadow-sm" : "text-primary-foreground/90 hover:text-primary-foreground hover:bg-primary-foreground/10";
        break;
      case "contrast":
        u = r ? "bg-muted/20 dark:bg-muted/20 text-white shadow-sm" : "text-white hover:bg-muted/20";
        break;
      default:
        u = r ? "bg-muted/10 text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground hover:bg-muted/50";
    }
    return i(z, S, u);
  }, R = ({ item: r, isSubmenu: l = !1 }) => {
    const z = !l && r.items && r.items.length > 0, S = T.has(r.key), u = r.href ? x === r.href : !!r.isActive, P = /* @__PURE__ */ c(
      "button",
      {
        onClick: () => {
          if (E && !a) {
            C(!0);
            return;
          }
          z ? J(r.key) : r.href && h ? (h(r.href, r), g && N(!1)) : r.onClick && (r.onClick(), g && N(!1));
        },
        className: Q(u, l),
        children: [
          !l && r.icon && /* @__PURE__ */ e(r.icon, { className: i(
            "flex-shrink-0",
            f ? "h-4 w-4 mr-3" : "h-5 w-5"
          ) }),
          f && /* @__PURE__ */ c(j, { children: [
            /* @__PURE__ */ e("span", { className: "flex-1 truncate text-left", children: r.label }),
            r.badge && /* @__PURE__ */ e(
              re,
              {
                variant: u ? "secondary" : "outline",
                className: i(
                  "text-xs h-4 px-1 ml-1 flex-shrink-0",
                  o === "brand" && !u && "bg-primary-foreground/10 text-primary-foreground border-primary-foreground/20",
                  o === "brand" && u && "bg-primary-foreground/20 text-primary-foreground border-primary-foreground/30",
                  o === "contrast" && !u && "bg-zinc-700 text-zinc-300 border-zinc-600",
                  o === "contrast" && u && "bg-zinc-600 text-zinc-100 border-zinc-500"
                ),
                children: r.badge
              }
            ),
            z && /* @__PURE__ */ e(de, { className: i(
              "h-4 w-4 flex-shrink-0 transition-transform duration-200",
              S && "rotate-90"
            ) })
          ] })
        ]
      }
    );
    return E && !a && !l && r.icon ? /* @__PURE__ */ c("div", { className: "w-full", children: [
      /* @__PURE__ */ e(ne, { children: /* @__PURE__ */ c(ae, { delayDuration: 300, children: [
        /* @__PURE__ */ e(oe, { asChild: !0, children: P }),
        /* @__PURE__ */ e(
          se,
          {
            side: "right",
            className: "bg-white text-black border border-gray-200 shadow-md",
            children: /* @__PURE__ */ e("p", { children: r.label })
          }
        )
      ] }) }),
      z && S && f && r.items && /* @__PURE__ */ e("div", { className: "overflow-hidden transition-all duration-300 mt-1", children: /* @__PURE__ */ e("div", { className: "space-y-1 pb-2", children: r.items.map((A) => /* @__PURE__ */ e(R, { item: A, isSubmenu: !0 }, A.key)) }) })
    ] }, r.key) : /* @__PURE__ */ c("div", { className: "w-full", children: [
      P,
      z && S && f && r.items && /* @__PURE__ */ e("div", { className: "overflow-hidden transition-all duration-400 ease-out mt-1", children: /* @__PURE__ */ e("div", { className: "space-y-1 pb-2 animate-in slide-in-from-top-2", children: r.items.map((A, U) => /* @__PURE__ */ e(
        "div",
        {
          className: "transition-all duration-300 ease-out",
          style: { transitionDelay: `${U * 75}ms` },
          children: /* @__PURE__ */ e(R, { item: A, isSubmenu: !0 })
        },
        A.key
      )) }) })
    ] }, r.key);
  };
  return /* @__PURE__ */ c(j, { children: [
    g && w && /* @__PURE__ */ e(
      "div",
      {
        className: "fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm lg:hidden",
        onClick: () => N(!1),
        "aria-hidden": "true"
      }
    ),
    /* @__PURE__ */ e(
      "aside",
      {
        ref: s,
        className: i(
          "border-r flex flex-col bg-background overflow-hidden",
          // Smooth transitions with better easing
          "transition-all duration-500 ease-out",
          // ✅ FIXED: Proper z-index layering for mobile
          // Mobile: Higher z-index than header (z-[70] > z-[50])
          g ? "fixed left-0 top-0 z-[70] h-full" : "relative h-screen",
          // Mobile: slide animation
          g && (w ? "translate-x-0" : "-translate-x-full"),
          // Desktop: always visible but container controls width
          !g && "translate-x-0",
          // Fixed widths for consistent animation
          n === "sidebar" && t === "sm" && "w-48",
          n === "sidebar" && t === "md" && "w-56",
          n === "sidebar" && t === "lg" && "w-64",
          n === "sidebar" && t === "xl" && "w-72",
          n === "sidebar" && t === "full" && "w-80",
          n === "compact" && !a && t === "sm" && "w-12",
          n === "compact" && !a && t === "md" && "w-14",
          n === "compact" && !a && t === "lg" && "w-16",
          n === "compact" && !a && t === "xl" && "w-18",
          n === "compact" && !a && t === "full" && "w-20",
          n === "compact" && a && t === "sm" && "w-48",
          n === "compact" && a && t === "md" && "w-56",
          n === "compact" && a && t === "lg" && "w-64",
          n === "compact" && a && t === "xl" && "w-72",
          n === "compact" && a && t === "full" && "w-80",
          // Tone colors
          o === "clean" && "bg-background/90 backdrop-blur-sm border-border/40 text-foreground",
          o === "subtle" && "bg-muted/90 backdrop-blur-sm border-border/30 text-foreground",
          o === "brand" && "bg-primary border-primary-foreground/20 text-primary-foreground",
          o === "contrast" && "bg-zinc-900 border-zinc-700/40 text-zinc-100",
          M
        ),
        children: /* @__PURE__ */ c("div", { className: "flex flex-col h-full", children: [
          /* @__PURE__ */ e("div", { className: i(
            "flex items-center shadow-sm flex-shrink-0 border-b transition-all duration-300 ease-out",
            o === "clean" && "border-border/40",
            o === "subtle" && "border-border/30",
            o === "brand" && "border-primary-foreground/20",
            o === "contrast" && "border-zinc-700/40",
            f ? "justify-between h-16 px-4" : "justify-center h-16 px-2"
          ), children: f ? /* @__PURE__ */ c(j, { children: [
            p && /* @__PURE__ */ e("div", { className: i(
              "flex-shrink-0",
              o === "brand" && "[&_*]:text-primary-foreground",
              o === "contrast" && "[&_*]:text-zinc-100"
            ), children: p }),
            (g || E && a) && /* @__PURE__ */ e(
              W,
              {
                variant: "ghost",
                size: "icon",
                onClick: () => {
                  g ? N(!1) : E && C(!1);
                },
                className: "flex-shrink-0",
                children: /* @__PURE__ */ e(ie, { className: "h-4 w-4" })
              }
            )
          ] }) : /* @__PURE__ */ e(
            W,
            {
              variant: "ghost",
              size: "icon",
              onClick: G,
              className: "flex-shrink-0",
              children: /* @__PURE__ */ e(_, { className: "h-4 w-4" })
            }
          ) }),
          /* @__PURE__ */ e("div", { className: "flex-1 overflow-y-auto", children: /* @__PURE__ */ e("nav", { className: i(
            "space-y-1 transition-all duration-300 ease-out",
            f ? "p-4" : "p-2"
          ), children: y.map((r, l) => /* @__PURE__ */ e(
            "div",
            {
              className: i(
                "transition-all duration-300 ease-out",
                f ? "opacity-100 translate-x-0" : "opacity-100"
              ),
              style: {
                transitionDelay: f ? `${l * 50}ms` : "0ms"
              },
              children: /* @__PURE__ */ e(R, { item: r })
            },
            r.key
          )) }) }),
          k && f && /* @__PURE__ */ c(j, { children: [
            /* @__PURE__ */ e(te, { className: i(
              o === "clean" && "bg-border/40",
              o === "subtle" && "bg-border/30",
              o === "brand" && "bg-primary-foreground/20",
              o === "contrast" && "bg-zinc-700/40"
            ) }),
            /* @__PURE__ */ e("div", { className: "flex-shrink-0 p-4", children: k })
          ] })
        ] })
      }
    )
  ] });
});
D.displayName = "AdminSidebar";
const H = B(({
  tone: b,
  size: y,
  title: x,
  position: h = "sticky",
  breadcrumbs: p = [],
  actions: v,
  className: k
}, M) => {
  const { sidebarExpanded: s, setSidebarExpanded: n, isMobile: m } = F();
  return /* @__PURE__ */ e(
    "header",
    {
      ref: M,
      className: i(
        "w-full shadow-sm bg-background/95 backdrop-blur-md text-foreground flex-shrink-0 border-b border-border/50",
        "transition-all duration-500 ease-out",
        // ✅ FIXED: Sticky on desktop, lower z-index for mobile sidebar layering
        h === "sticky" && "sticky top-0",
        h === "fixed" && "fixed top-0 left-0 right-0",
        // Always use lower z-index so mobile sidebar appears above
        "z-[10]",
        h === "relative" && "relative",
        k
      ),
      children: /* @__PURE__ */ c("div", { className: "flex items-center justify-between px-4 lg:px-6 h-16", children: [
        /* @__PURE__ */ c("div", { className: "flex items-center gap-4 min-w-0", children: [
          /* @__PURE__ */ e(
            "button",
            {
              className: i(
                "p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-all duration-300 ease-out",
                "transform hover:scale-105 active:scale-95",
                // Always show on mobile
                m && "block",
                // Show on desktop for toggle functionality  
                !m && "block"
              ),
              onClick: () => n(!s),
              "aria-label": s ? "Close sidebar" : "Open sidebar",
              children: /* @__PURE__ */ e(_, { className: i(
                "h-5 w-5 transition-transform duration-300 ease-out",
                s && !m && "rotate-180"
              ) })
            }
          ),
          /* @__PURE__ */ e("div", { className: "min-w-0", children: p.length > 0 && /* @__PURE__ */ e("nav", { className: "flex items-center gap-2 text-muted-foreground", children: p.map((t, w) => /* @__PURE__ */ c(L.Fragment, { children: [
            w > 0 && /* @__PURE__ */ e("span", { children: "/" }),
            t.href ? /* @__PURE__ */ e("button", { className: "hover:text-foreground transition-colors", children: t.label }) : /* @__PURE__ */ e("span", { children: t.label })
          ] }, w)) }) })
        ] }),
        v && /* @__PURE__ */ e("div", { className: "flex-shrink-0", children: v })
      ] })
    }
  );
});
H.displayName = "AdminHeader";
const I = B(({
  tone: b,
  size: y,
  className: x,
  children: h
}, p) => {
  const { isMobile: v } = F();
  return /* @__PURE__ */ e(
    "main",
    {
      ref: p,
      className: i(
        "flex-1 min-w-0 overflow-auto",
        x
      ),
      children: /* @__PURE__ */ e("div", { className: "p-4 lg:p-6 w-full", children: /* @__PURE__ */ e("div", { className: "w-full mx-auto", children: h }) })
    }
  );
});
I.displayName = "AdminContent";
const F = () => {
  const b = K(X);
  if (!b)
    throw new Error("useAdmin must be used within an AdminLayout component");
  return b;
}, Ne = Object.assign(q, {
  Sidebar: D,
  Header: H,
  Content: I
});
export {
  I as AdminContent,
  H as AdminHeader,
  Ne as AdminLayout,
  D as AdminSidebar,
  F as useAdmin
};
//# sourceMappingURL=admin.js.map
