import { jsx as e, jsxs as i, Fragment as j } from "react/jsx-runtime";
import * as A from "react";
import { createContext as Y, forwardRef as V, useState as L, useEffect as D, useContext as Z } from "react";
import { c as X } from "./index-DACAHwoB.js";
import { c as d } from "./utils-qaFjX9_3.js";
import { Button as W } from "./button.js";
import { Badge as $ } from "./badge.js";
import { Separator as K } from "./separator.js";
import { TooltipProvider as ee, Tooltip as re, TooltipTrigger as te, TooltipContent as ne } from "./tooltip.js";
import { X as ae } from "./x-BxwubQiM.js";
import { M as q } from "./menu-DBhEanGo.js";
import { C as oe } from "./chevron-right-pz9eCjj-.js";
const G = Y({
  scheme: "sidebar",
  tone: "subtle",
  size: "lg",
  sidebarExpanded: !0,
  setSidebarExpanded: () => {
  },
  isMobile: !1
}), se = X(
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
), ie = X(
  "flex-1 flex flex-col min-w-0",
  {
    variants: {
      mobile: {
        true: "w-full",
        // Mobile: full width
        false: "flex-1"
        // Desktop: flex remaining space
      }
    },
    defaultVariants: {
      mobile: !1
    }
  }
), J = V(({
  scheme: b = "sidebar",
  tone: w = "subtle",
  size: y = "lg",
  position: f = "relative",
  // Add this line
  defaultSidebarOpen: m = !0,
  className: x,
  children: v
}, z) => {
  const [p, t] = L(m), [g, n] = L(!1);
  D(() => {
    const s = () => {
      const a = window.innerWidth < 1024;
      n(a), t(a ? !1 : m);
    };
    return s(), window.addEventListener("resize", s), () => window.removeEventListener("resize", s);
  }, [m]), D(() => (g && p ? document.body.style.overflow = "hidden" : document.body.style.overflow = "unset", () => {
    document.body.style.overflow = "unset";
  }), [g, p]);
  const h = A.Children.toArray(v), S = h.find(
    (s) => A.isValidElement(s) && s.type === H
  ), k = h.find(
    (s) => A.isValidElement(s) && s.type === F
  ), T = h.find(
    (s) => A.isValidElement(s) && s.type === I
  );
  return /* @__PURE__ */ e(G.Provider, { value: {
    scheme: b,
    tone: w,
    size: y,
    sidebarExpanded: p,
    setSidebarExpanded: t,
    isMobile: g
  }, children: /* @__PURE__ */ i(
    "div",
    {
      ref: z,
      className: d(se({ tone: w }), x),
      children: [
        /* @__PURE__ */ e("div", { className: d(
          "flex-shrink-0",
          f === "sticky" && "sticky top-0 max-h-screen overflow-y-auto"
        ), children: S }),
        /* @__PURE__ */ i("div", { className: "flex-1 flex flex-col min-w-0", children: [
          k,
          T
        ] })
      ]
    }
  ) });
});
J.displayName = "AdminLayout";
const H = V(({
  tone: b,
  navigation: w = [],
  currentPath: y = "",
  onNavigate: f,
  logo: m,
  position: x,
  // Add this line
  footer: v,
  className: z
}, p) => {
  const { scheme: t, tone: g, size: n, sidebarExpanded: h, setSidebarExpanded: S, isMobile: k } = P(), [T, s] = L(/* @__PURE__ */ new Set()), [a, B] = L(!1), o = b || g, N = t === "compact", u = !N || a, O = () => {
    N && B(!a);
  }, Q = (r) => {
    const c = new Set(T);
    c.has(r) ? c.delete(r) : c.add(r), s(c);
  }, U = (r, c = !1) => {
    const C = c ? "w-[92%] flex items-center transition-all duration-200 group text-left font-medium rounded-lg cursor-pointer" : "w-full flex items-center transition-all duration-200 group text-left font-medium rounded-lg cursor-pointer", E = c ? u ? "ml-4 px-3 py-2" : "px-2 py-2" : u ? "px-3 py-2.5" : "px-2 py-2.5 justify-center";
    let l = "";
    switch (o) {
      case "clean":
        l = r ? "bg-muted text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground hover:bg-muted/50";
        break;
      case "subtle":
        l = r ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground hover:bg-background/60";
        break;
      case "brand":
        l = r ? "bg-primary-foreground/20 text-primary-foreground shadow-sm" : "text-primary-foreground/90 hover:text-primary-foreground hover:bg-primary-foreground/10";
        break;
      case "contrast":
        l = r ? "bg-muted/20 dark:bg-muted/20 text-white shadow-sm" : " text-white  hover:bg-muted/20";
        break;
      default:
        l = r ? "bg-muted/10 text-foreground   shadow-sm" : "text-muted-foreground hover:text-foreground hover:bg-muted/50";
    }
    return d(C, E, l);
  }, R = ({ item: r, isSubmenu: c = !1 }) => {
    const C = !c && r.items && r.items.length > 0, E = T.has(r.key), l = r.href ? y === r.href : !!r.isActive, _ = /* @__PURE__ */ i(
      "button",
      {
        onClick: () => {
          if (N && !a) {
            B(!0);
            return;
          }
          C ? Q(r.key) : r.href && f ? f(r.href, r) : r.onClick && r.onClick();
        },
        className: U(l, c),
        children: [
          !c && r.icon && /* @__PURE__ */ e(r.icon, { className: d(
            "flex-shrink-0",
            u ? "h-4 w-4 mr-3" : "h-5 w-5"
          ) }),
          u && /* @__PURE__ */ i(j, { children: [
            /* @__PURE__ */ e("span", { className: "flex-1 truncate text-left", children: r.label }),
            r.badge && /* @__PURE__ */ e(
              $,
              {
                variant: l ? "secondary" : "outline",
                className: d(
                  "text-xs h-4 px-1 ml-1 flex-shrink-0",
                  // Badge colors based on tone
                  o === "brand" && !l && "bg-primary-foreground/10 text-primary-foreground border-primary-foreground/20",
                  o === "brand" && l && "bg-primary-foreground/20 text-primary-foreground border-primary-foreground/30",
                  o === "contrast" && !l && "bg-zinc-700 text-zinc-300 border-zinc-600",
                  o === "contrast" && l && "bg-zinc-600 text-zinc-100 border-zinc-500"
                ),
                children: r.badge
              }
            ),
            C && /* @__PURE__ */ e(oe, { className: d(
              "h-4 w-4 flex-shrink-0 transition-transform duration-200",
              E && "rotate-90"
            ) })
          ] })
        ]
      }
    );
    return N && !a && !c && r.icon ? /* @__PURE__ */ i("div", { className: "w-full", children: [
      /* @__PURE__ */ e(ee, { children: /* @__PURE__ */ i(re, { delayDuration: 300, children: [
        /* @__PURE__ */ e(te, { asChild: !0, children: _ }),
        /* @__PURE__ */ e(
          ne,
          {
            side: "right",
            className: "bg-white text-black border border-gray-200 shadow-md [&>*[data-side]]:hidden",
            children: /* @__PURE__ */ e("p", { children: r.label })
          }
        )
      ] }) }),
      C && E && u && r.items && /* @__PURE__ */ e("div", { className: "overflow-hidden transition-all duration-300 mt-1", children: /* @__PURE__ */ e("div", { className: "space-y-1 pb-2", children: r.items.map((M) => /* @__PURE__ */ e(R, { item: M, isSubmenu: !0 }, M.key)) }) })
    ] }, r.key) : /* @__PURE__ */ i("div", { className: "w-full", children: [
      _,
      C && E && u && r.items && /* @__PURE__ */ e("div", { className: "overflow-hidden transition-all duration-300 mt-1", children: /* @__PURE__ */ e("div", { className: "space-y-1 pb-2", children: r.items.map((M) => /* @__PURE__ */ e(R, { item: M, isSubmenu: !0 }, M.key)) }) })
    ] }, r.key);
  };
  return console.log("Scheme:", t, "Size:", n, "IsCompact:"), /* @__PURE__ */ i(j, { children: [
    k && h && /* @__PURE__ */ e(
      "div",
      {
        className: "fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden",
        onClick: () => S(!1),
        "aria-hidden": "true"
      }
    ),
    /* @__PURE__ */ e(
      "aside",
      {
        ref: p,
        className: d(
          "border-r transition-all duration-300 ease-in-out flex flex-col",
          // Mobile positioning
          // Positioning based on prop and mobile state
          k ? "fixed left-0 top-0 z-50 h-full" : "sticky top-0 h-screen",
          // Expansion state
          h ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
          // Width based on scheme and size
          t === "sidebar" && n === "sm" && "w-48",
          t === "sidebar" && n === "md" && "w-56",
          t === "sidebar" && n === "lg" && "w-64",
          t === "sidebar" && n === "xl" && "w-72",
          t === "sidebar" && n === "full" && "w-80",
          t === "compact" && !a && n === "sm" && "w-12",
          t === "compact" && !a && n === "md" && "w-14",
          t === "compact" && !a && n === "lg" && "w-16",
          t === "compact" && !a && n === "xl" && "w-18",
          t === "compact" && !a && n === "full" && "w-20",
          t === "compact" && a && n === "sm" && "w-48",
          t === "compact" && a && n === "md" && "w-56",
          t === "compact" && a && n === "lg" && "w-64",
          t === "compact" && a && n === "xl" && "w-72",
          t === "compact" && a && n === "full" && "w-80",
          // Tone colors - both sidebar and compact use header tone variants
          (t === "sidebar" || t === "compact") && o === "clean" && "bg-background/90 backdrop-blur-sm border-border/40 text-foreground",
          (t === "sidebar" || t === "compact") && o === "subtle" && "bg-muted/90 backdrop-blur-sm border-border/30 text-foreground",
          (t === "sidebar" || t === "compact") && o === "brand" && "bg-primary border-primary-foreground/20 text-primary-foreground",
          (t === "sidebar" || t === "compact") && o === "contrast" && "bg-zinc-900 border-zinc-700/40 text-zinc-100",
          z
        ),
        children: /* @__PURE__ */ i("div", { className: "flex flex-col h-full", children: [
          /* @__PURE__ */ e("div", { className: d(
            "flex items-center shadow-sm  flex-shrink-0",
            u ? "justify-between h-16 px-4" : "justify-center h-16 px-2"
          ), children: u ? /* @__PURE__ */ i(j, { children: [
            m && /* @__PURE__ */ e("div", { className: d(
              "flex-shrink-0",
              // Logo colors based on tone
              o === "brand" && "[&_*]:text-primary-foreground",
              o === "contrast" && "[&_*]:text-zinc-100"
            ), children: m }),
            (k || N && a) && /* @__PURE__ */ e(
              W,
              {
                variant: "ghost",
                size: "icon",
                onClick: () => {
                  k ? S(!1) : N && B(!1);
                },
                className: "flex-shrink-0",
                children: /* @__PURE__ */ e(ae, { className: "h-4 w-4" })
              }
            )
          ] }) : /* @__PURE__ */ e(
            W,
            {
              variant: "ghost",
              size: "icon",
              onClick: O,
              className: "flex-shrink-0",
              children: /* @__PURE__ */ e(q, { className: "h-4 w-4" })
            }
          ) }),
          /* @__PURE__ */ e("div", { className: "flex-1 overflow-y-auto", children: /* @__PURE__ */ e("nav", { className: d("space-y-1", u ? "p-4" : "p-2"), children: w.map((r) => /* @__PURE__ */ e(R, { item: r }, r.key)) }) }),
          v && u && /* @__PURE__ */ i(j, { children: [
            /* @__PURE__ */ e(K, { className: d(
              // Separator colors based on tone
              o === "clean" && "bg-border/40",
              o === "subtle" && "bg-border/30",
              o === "brand" && "bg-primary-foreground/20",
              o === "contrast" && "bg-zinc-700/40"
            ) }),
            /* @__PURE__ */ e("div", { className: "flex-shrink-0 p-4", children: v })
          ] })
        ] })
      }
    )
  ] });
});
H.displayName = "AdminSidebar";
const F = V(({
  tone: b,
  size: w,
  title: y,
  position: f = "sticky",
  // Changed default to sticky
  breadcrumbs: m = [],
  actions: x,
  className: v
}, z) => {
  const { sidebarExpanded: p, setSidebarExpanded: t, isMobile: g } = P();
  return /* @__PURE__ */ e(
    "header",
    {
      ref: z,
      className: d(
        "w-full shadow-sm bg-background/80 backdrop-blur-sm text-foreground flex-shrink-0 z-30",
        // Light transparency with backdrop blur
        // Add positioning classes based on position prop
        f === "sticky" && "sticky top-0",
        f === "fixed" && "fixed top-0 left-0 right-0",
        f === "relative" && "relative",
        v
      ),
      children: /* @__PURE__ */ i("div", { className: "flex items-center justify-between px-4 lg:px-6 h-16", children: [
        /* @__PURE__ */ i("div", { className: "flex items-center gap-4 min-w-0", children: [
          g && /* @__PURE__ */ e(
            "button",
            {
              className: "p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors",
              onClick: () => t(!p),
              "aria-label": p ? "Close sidebar" : "Open sidebar",
              children: /* @__PURE__ */ e(q, { className: "h-5 w-5" })
            }
          ),
          /* @__PURE__ */ e("div", { className: "min-w-0", children: m.length > 0 && /* @__PURE__ */ e("nav", { className: "flex items-center gap-2  text-muted-foreground", children: m.map((n, h) => /* @__PURE__ */ i(A.Fragment, { children: [
            h > 0 && /* @__PURE__ */ e("span", { children: "/" }),
            n.href ? /* @__PURE__ */ e("button", { className: "hover:text-foreground transition-colors", children: n.label }) : /* @__PURE__ */ e("span", { children: n.label })
          ] }, h)) }) })
        ] }),
        x && /* @__PURE__ */ e("div", { className: "flex-shrink-0", children: x })
      ] })
    }
  );
});
F.displayName = "AdminHeader";
const I = V(({
  tone: b,
  size: w,
  className: y,
  children: f
}, m) => {
  const { isMobile: x } = P();
  return /* @__PURE__ */ e("div", { className: d(ie({ mobile: x })), children: /* @__PURE__ */ e(
    "main",
    {
      ref: m,
      className: d("flex-1 min-w-0 overflow-auto", y),
      children: /* @__PURE__ */ e("div", { className: "p-4 lg:p-6 w-full", children: /* @__PURE__ */ e("div", { className: "w-full  mx-auto", children: f }) })
    }
  ) });
});
I.displayName = "AdminContent";
const P = () => {
  const b = Z(G);
  if (!b)
    throw new Error("useAdmin must be used within an AdminLayout component");
  return b;
}, ye = Object.assign(J, {
  Sidebar: H,
  Header: F,
  Content: I
});
export {
  I as AdminContent,
  F as AdminHeader,
  ye as AdminLayout,
  H as AdminSidebar,
  P as useAdmin
};
//# sourceMappingURL=admin.js.map
