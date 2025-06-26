import { jsxs as i, jsx as r, Fragment as O } from "react/jsx-runtime";
import { forwardRef as P, useState as v, useEffect as N } from "react";
import { c as B } from "./index-DACAHwoB.js";
import { c as t } from "./utils-qaFjX9_3.js";
import { Button as W } from "./button.js";
import { Badge as X } from "./badge.js";
import { M as Y } from "./menu-DBhEanGo.js";
import { X as $ } from "./x-BxwubQiM.js";
import { C as q } from "./chevron-right-pz9eCjj-.js";
const D = B(
  "min-h-screen",
  {
    variants: {
      scheme: {
        sidebar: "bg-background flex",
        topbar: "bg-background flex flex-col",
        hybrid: "bg-background flex flex-col"
      },
      tone: {
        clean: "",
        subtle: "bg-muted/10",
        brand: "bg-primary/5",
        contrast: "bg-zinc-900"
      }
    },
    defaultVariants: {
      scheme: "sidebar",
      tone: "subtle"
    }
  }
), F = B(
  "border-r transition-all duration-300 ease-in-out fixed left-0 top-0 z-50 h-full flex flex-col",
  {
    variants: {
      size: {
        sm: "w-48",
        // 192px
        md: "w-64",
        // 256px
        lg: "w-80",
        // 320px
        xl: "w-96",
        // 384px
        full: "w-[28rem]"
        // 448px
      },
      tone: {
        clean: [
          "bg-white border-border",
          "text-foreground"
        ],
        subtle: [
          "bg-muted/30 border-border/50",
          "text-foreground"
        ],
        brand: [
          "bg-primary border-primary-foreground/20",
          "text-primary-foreground"
        ],
        contrast: [
          "bg-zinc-900 border-zinc-700/40",
          "text-zinc-100"
        ]
      }
    },
    defaultVariants: {
      size: "md",
      tone: "subtle"
    }
  }
), G = B(
  "w-full border-b transition-all duration-200 z-40",
  {
    variants: {
      tone: {
        clean: "bg-background/80 backdrop-blur-sm border-border/40 text-foreground",
        subtle: "bg-muted/50 backdrop-blur-sm border-border/30 text-foreground",
        brand: "bg-primary border-primary-foreground/20 text-primary-foreground",
        contrast: "bg-zinc-900 border-zinc-700/40 text-zinc-100"
      },
      sticky: {
        true: "sticky top-0",
        false: "relative"
      }
    },
    defaultVariants: {
      tone: "clean",
      sticky: !0
    }
  }
), E = (x = "md") => {
  const c = {
    sm: {
      sidebarHeader: "h-12 px-3 text-xs",
      menuButton: "px-2 py-1.5 text-xs min-h-[28px]",
      submenuButton: "ml-3 px-2 py-1 text-xs min-h-[24px]",
      icon: "h-3.5 w-3.5",
      spacing: "space-y-0.5",
      showBadges: !1
    },
    md: {
      sidebarHeader: "h-16 px-4 text-sm",
      menuButton: "px-3 py-2.5 text-sm min-h-[36px]",
      submenuButton: "ml-4 px-3 py-2 text-sm min-h-[32px]",
      icon: "h-4 w-4",
      spacing: "space-y-1",
      showBadges: !0
    },
    lg: {
      sidebarHeader: "h-20 px-6 text-base",
      menuButton: "px-4 py-3 text-sm min-h-[44px]",
      submenuButton: "ml-6 px-4 py-2.5 text-sm min-h-[36px]",
      icon: "h-5 w-5",
      spacing: "space-y-1.5",
      showBadges: !0
    },
    xl: {
      sidebarHeader: "h-20 px-6 text-base",
      menuButton: "px-4 py-3 text-sm min-h-[44px]",
      submenuButton: "ml-6 px-4 py-2.5 text-sm min-h-[36px]",
      icon: "h-5 w-5",
      spacing: "space-y-1.5",
      showBadges: !0
    },
    full: {
      sidebarHeader: "h-20 px-6 text-base",
      menuButton: "px-4 py-3 text-sm min-h-[44px]",
      submenuButton: "ml-6 px-4 py-2.5 text-sm min-h-[36px]",
      icon: "h-5 w-5",
      spacing: "space-y-1.5",
      showBadges: !0
    }
  };
  return c[x] || c.md;
};
function J({
  navigationItems: x = [],
  currentPath: c = "",
  onNavigate: n = () => {
  },
  size: m = "md",
  tone: b = "subtle"
}) {
  const [h, k] = v(/* @__PURE__ */ new Set()), l = E(m), p = (e) => {
    const s = new Set(h);
    s.has(e) ? s.delete(e) : s.add(e), k(s);
  }, y = (e, s = !1) => {
    const d = "w-full flex items-center gap-3 rounded-lg transition-all duration-200 group text-left font-medium";
    if (s) {
      const a = `${l.submenuButton} font-normal`;
      switch (b) {
        case "subtle":
          return t(
            a,
            e ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground hover:bg-background/50"
          );
        case "brand":
          return t(
            a,
            e ? "bg-primary-foreground/20 text-primary-foreground shadow-sm" : "text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10"
          );
        case "contrast":
          return t(
            a,
            e ? "bg-zinc-800 text-zinc-100 shadow-sm" : "text-zinc-300 hover:text-zinc-100 hover:bg-zinc-800/70"
          );
        default:
          return t(
            a,
            e ? "bg-secondary text-secondary-foreground shadow-sm" : "text-muted-foreground hover:text-foreground hover:bg-muted/70"
          );
      }
    } else {
      const a = l.menuButton;
      switch (b) {
        case "subtle":
          return t(
            d,
            a,
            e ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground hover:bg-background/50"
          );
        case "brand":
          return t(
            d,
            a,
            e ? "bg-primary-foreground/20 text-primary-foreground shadow-sm" : "text-primary-foreground/90 hover:text-primary-foreground hover:bg-primary-foreground/10"
          );
        case "contrast":
          return t(
            d,
            a,
            e ? "bg-zinc-800 text-zinc-100 shadow-sm" : "text-zinc-200 hover:text-zinc-100 hover:bg-zinc-800/80"
          );
        default:
          return t(
            d,
            a,
            e ? "bg-secondary text-secondary-foreground shadow-sm" : "text-muted-foreground hover:text-foreground hover:bg-muted/70"
          );
      }
    }
  }, w = ({ item: e, isSubmenu: s = !1 }) => {
    const d = !s && e.items && e.items.length > 0, a = h.has(e.key), g = e.href ? c === e.href : !!e.isActive;
    return /* @__PURE__ */ i("div", { className: "w-full", children: [
      /* @__PURE__ */ i(
        "button",
        {
          onClick: () => {
            d ? p(e.key) : e.href ? n(e.href, e) : e.onClick && e.onClick();
          },
          className: y(g, s),
          children: [
            !s && e.icon && /* @__PURE__ */ r(e.icon, { className: t(l.icon, "flex-shrink-0") }),
            /* @__PURE__ */ r("span", { className: "flex-1 truncate text-left", children: e.label }),
            e.badge && l.showBadges && /* @__PURE__ */ r(
              X,
              {
                variant: g ? "secondary" : "outline",
                className: t(
                  "text-xs h-4 px-1 ml-1 flex-shrink-0",
                  b === "brand" && !g && "border-primary-foreground/30 text-primary-foreground/80 bg-primary-foreground/10",
                  b === "contrast" && !g && "border-zinc-600 text-zinc-300 bg-zinc-800/50"
                ),
                children: e.badge
              }
            ),
            d && /* @__PURE__ */ r(q, { className: t(
              l.icon,
              "flex-shrink-0 transition-transform duration-200",
              a && "rotate-90"
            ) })
          ]
        }
      ),
      d && a && e.items && /* @__PURE__ */ r("div", { className: t(
        "overflow-hidden transition-all duration-300 mt-1",
        "max-h-96 opacity-100"
      ), children: /* @__PURE__ */ r("div", { className: t(l.spacing, "pb-2"), children: e.items.map((o) => /* @__PURE__ */ r(w, { item: o, isSubmenu: !0 }, o.key)) }) })
    ] }, e.key);
  };
  return /* @__PURE__ */ r("nav", { className: "p-6 space-y-2", children: /* @__PURE__ */ r("div", { className: l.spacing, children: x.map((e) => /* @__PURE__ */ r(w, { item: e }, e.key)) }) });
}
const H = P(({
  className: x,
  scheme: c = "sidebar",
  tone: n = "subtle",
  size: m = "lg",
  navigation: b = [],
  currentPath: h = "",
  onNavigate: k = () => {
  },
  title: l = "Admin Panel",
  logo: p,
  headerActions: y,
  sidebarContent: w,
  sidebarFooter: e,
  collapsible: s = !0,
  defaultSidebarOpen: d = !0,
  children: a
}, g) => {
  const [o, z] = v(d), [f, L] = v(!1), [V, j] = v(!1), M = E(m);
  N(() => {
    const u = () => {
      const S = window.innerWidth < 1024;
      L(S), S && d === !0 && z(!1);
    };
    return u(), window.addEventListener("resize", u), () => window.removeEventListener("resize", u);
  }, [d]), N(() => {
    const u = () => {
      j(window.scrollY > 0);
    };
    return window.addEventListener("scroll", u), () => window.removeEventListener("scroll", u);
  }, []), N(() => (f && o ? document.body.style.overflow = "hidden" : document.body.style.overflow = "unset", () => {
    document.body.style.overflow = "unset";
  }), [f, o]);
  const C = () => {
    z(!o);
  }, I = () => c === "topbar" ? null : /* @__PURE__ */ i(O, { children: [
    f && o && /* @__PURE__ */ r(
      "div",
      {
        className: "fixed inset-0 z-40 bg-black/50 backdrop-blur-sm",
        onClick: () => z(!1),
        "aria-hidden": "true"
      }
    ),
    /* @__PURE__ */ r("aside", { className: t(
      F({ size: m, tone: n }),
      f ? [
        o ? "translate-x-0" : "-translate-x-full"
      ] : [
        o ? "translate-x-0" : "-translate-x-full"
      ]
    ), children: /* @__PURE__ */ i("div", { className: "flex flex-col h-full", children: [
      /* @__PURE__ */ i("div", { className: t(
        "flex items-center justify-between border-b flex-shrink-0",
        M.sidebarHeader,
        n === "subtle" && "border-border/20 bg-muted/20",
        n === "brand" && "border-primary-foreground/20 bg-primary-foreground/10",
        n === "contrast" && "border-zinc-800/40 bg-zinc-900/50"
      ), children: [
        /* @__PURE__ */ r("h2", { className: t(
          "font-semibold uppercase tracking-wider",
          n === "subtle" && "text-muted-foreground",
          n === "brand" && "text-primary-foreground/90",
          n === "contrast" && "text-zinc-200",
          n === "clean" && "text-muted-foreground"
        ), children: "Navigation" }),
        s && f && /* @__PURE__ */ r(
          W,
          {
            variant: "ghost",
            size: "icon",
            onClick: C,
            className: t(
              "flex-shrink-0",
              n === "subtle" && "text-muted-foreground hover:bg-muted hover:text-foreground",
              n === "brand" && "text-primary-foreground hover:bg-primary-foreground/20 hover:text-primary-foreground",
              n === "contrast" && "text-zinc-300 hover:bg-zinc-800 hover:text-zinc-100"
            ),
            "aria-label": "Close sidebar",
            children: /* @__PURE__ */ r($, { className: "h-4 w-4" })
          }
        )
      ] }),
      /* @__PURE__ */ r("div", { className: "flex-1 overflow-y-auto", children: w || /* @__PURE__ */ r(
        J,
        {
          navigationItems: b,
          currentPath: h,
          onNavigate: k,
          size: m,
          tone: n
        }
      ) }),
      e && /* @__PURE__ */ r("div", { className: t(
        "flex-shrink-0 border-t",
        n === "subtle" && "border-border/20 bg-muted/20",
        n === "brand" && "border-primary-foreground/20 bg-primary-foreground/10",
        n === "contrast" && "border-zinc-800/40 bg-zinc-900/50"
      ), children: e })
    ] }) })
  ] }), R = () => c === "topbar" || f ? "" : {
    sm: o ? "lg:ml-48" : "lg:ml-0",
    md: o ? "lg:ml-64" : "lg:ml-0",
    lg: o ? "lg:ml-80" : "lg:ml-0",
    xl: o ? "lg:ml-96" : "lg:ml-0",
    full: o ? "lg:ml-[28rem]" : "lg:ml-0"
  }[m];
  return /* @__PURE__ */ i(
    "div",
    {
      ref: g,
      className: t(D({ scheme: c, tone: n }), x),
      children: [
        I(),
        /* @__PURE__ */ i("div", { className: t(
          "flex-1 flex flex-col min-w-0 transition-all duration-300 ease-in-out",
          R()
        ), children: [
          /* @__PURE__ */ r("header", { className: t(
            G({ tone: n, sticky: !0 }),
            V && "shadow-sm"
          ), children: /* @__PURE__ */ i("div", { className: t(
            "flex items-center justify-between px-4 lg:px-6",
            M.sidebarHeader
          ), children: [
            /* @__PURE__ */ i("div", { className: "flex items-center gap-4 min-w-0", children: [
              s && /* @__PURE__ */ r(
                "button",
                {
                  className: "p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors",
                  onClick: C,
                  "aria-label": o ? "Close sidebar" : "Open sidebar",
                  children: /* @__PURE__ */ r(Y, { className: "h-5 w-5" })
                }
              ),
              /* @__PURE__ */ i("div", { className: "flex items-center gap-3 min-w-0", children: [
                p && /* @__PURE__ */ r("div", { className: "flex-shrink-0", children: p }),
                /* @__PURE__ */ r("h1", { className: "text-lg font-semibold truncate", children: l })
              ] })
            ] }),
            y && /* @__PURE__ */ r("div", { className: "flex-shrink-0", children: y })
          ] }) }),
          /* @__PURE__ */ r("main", { className: "flex-1 min-w-0", children: /* @__PURE__ */ r("div", { className: "p-4 lg:p-6 w-full", children: /* @__PURE__ */ r("div", { className: "w-full max-w-7xl mx-auto", children: a }) }) })
        ] })
      ]
    }
  );
});
H.displayName = "AdminLayout";
const te = H;
export {
  te as AdminLayout
};
//# sourceMappingURL=admin.js.map
