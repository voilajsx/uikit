import { jsxs as d, jsx as r } from "react/jsx-runtime";
import { forwardRef as X, useState as k, useEffect as z } from "react";
import { c as B } from "./index-DACAHwoB.js";
import { c as n } from "./utils-qaFjX9_3.js";
import { Button as Y } from "./button.js";
import { Badge as $ } from "./badge.js";
import { Separator as q } from "./separator.js";
import { X as A } from "./x-BxwubQiM.js";
import { M as D } from "./menu-DBhEanGo.js";
import { C as F } from "./chevron-right-pz9eCjj-.js";
const G = B(
  "min-h-screen bg-background flex",
  {
    variants: {
      variant: {
        default: "",
        muted: "",
        primary: "",
        black: ""
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
), J = B(
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
      variant: {
        default: [
          "bg-white border-border",
          "text-foreground"
        ],
        muted: [
          "bg-muted/30 border-border/50",
          "text-foreground"
        ],
        primary: [
          "bg-primary border-primary-foreground/20",
          "text-primary-foreground"
        ],
        black: [
          "bg-zinc-900 border-zinc-700/40",
          "text-zinc-100"
        ]
      }
    },
    defaultVariants: {
      size: "md",
      variant: "default"
    }
  }
), Q = B(
  "w-full border-b transition-all duration-200 z-40 bg-background/80 backdrop-blur-sm border-border/40 supports-[backdrop-filter]:bg-background/60 text-foreground",
  {
    variants: {
      sticky: {
        true: "sticky top-0",
        false: "relative"
      }
    },
    defaultVariants: {
      sticky: !0
    }
  }
), H = (x = "md") => {
  const a = {
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
  return a[x] || a.md;
};
function Z({
  navigationItems: x = [],
  currentPath: a = "",
  onNavigate: g = () => {
  },
  size: f = "md",
  variant: i = "default"
}) {
  const [p, N] = k(/* @__PURE__ */ new Set()), l = H(f), b = (e) => {
    const o = new Set(p);
    o.has(e) ? o.delete(e) : o.add(e), N(o);
  }, h = (e, o = !1) => {
    const s = "w-full flex items-center gap-3 rounded-lg transition-all duration-200 group text-left font-medium";
    if (o) {
      const t = `${l.submenuButton} font-normal`;
      switch (i) {
        case "muted":
          return n(
            t,
            e ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground hover:bg-background/50"
          );
        case "primary":
          return n(
            t,
            e ? "bg-primary-foreground/20 text-primary-foreground shadow-sm" : "text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10"
          );
        case "black":
          return n(
            t,
            e ? "bg-zinc-800 text-zinc-100 shadow-sm" : "text-zinc-300 hover:text-zinc-100 hover:bg-zinc-800/70"
          );
        default:
          return n(
            t,
            e ? "bg-secondary text-secondary-foreground shadow-sm" : "text-muted-foreground hover:text-foreground hover:bg-muted/70"
          );
      }
    } else {
      const t = l.menuButton;
      switch (i) {
        case "muted":
          return n(
            s,
            t,
            e ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground hover:bg-background/50"
          );
        case "primary":
          return n(
            s,
            t,
            e ? "bg-primary-foreground/20 text-primary-foreground shadow-sm" : "text-primary-foreground/90 hover:text-primary-foreground hover:bg-primary-foreground/10"
          );
        case "black":
          return n(
            s,
            t,
            e ? "bg-zinc-800 text-zinc-100 shadow-sm" : "text-zinc-200 hover:text-zinc-100 hover:bg-zinc-800/80"
          );
        default:
          return n(
            s,
            t,
            e ? "bg-secondary text-secondary-foreground shadow-sm" : "text-muted-foreground hover:text-foreground hover:bg-muted/70"
          );
      }
    }
  }, y = ({ item: e, isSubmenu: o = !1 }) => {
    const s = !o && e.items && e.items.length > 0, t = p.has(e.key), m = e.path ? a === e.path : !!e.isActive;
    return /* @__PURE__ */ d("div", { className: "w-full", children: [
      /* @__PURE__ */ d(
        "button",
        {
          onClick: () => {
            s ? b(e.key) : e.path ? g(e.path, e) : e.onClick && e.onClick();
          },
          className: h(m, o),
          children: [
            !o && e.icon && /* @__PURE__ */ r(e.icon, { className: n(l.icon, "flex-shrink-0") }),
            /* @__PURE__ */ r("span", { className: "flex-1 truncate text-left", children: e.label }),
            e.badge && l.showBadges && /* @__PURE__ */ r(
              $,
              {
                variant: m ? "secondary" : "outline",
                className: n(
                  "text-xs h-4 px-1 ml-1 flex-shrink-0",
                  i === "primary" && !m && "border-primary-foreground/30 text-primary-foreground/80 bg-primary-foreground/10",
                  i === "black" && !m && "border-zinc-600 text-zinc-300 bg-zinc-800/50"
                ),
                children: e.badge
              }
            ),
            s && /* @__PURE__ */ r(F, { className: n(
              l.icon,
              "flex-shrink-0 transition-transform duration-200",
              t && "rotate-90"
            ) })
          ]
        }
      ),
      s && t && e.items && /* @__PURE__ */ r("div", { className: n(
        "overflow-hidden transition-all duration-300 mt-1",
        "max-h-96 opacity-100"
      ), children: /* @__PURE__ */ r("div", { className: n(l.spacing, "pb-2"), children: e.items.map((c) => /* @__PURE__ */ r(y, { item: c, isSubmenu: !0 }, c.key)) }) })
    ] }, e.key);
  }, w = x.reduce((e, o) => {
    const s = o.section || "main";
    return e[s] || (e[s] = []), e[s].push(o), e;
  }, {}), v = () => {
    switch (i) {
      case "muted":
        return "px-3 mb-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider";
      case "primary":
        return "px-3 mb-4 text-xs font-semibold text-primary-foreground/70 uppercase tracking-wider";
      case "black":
        return "px-3 mb-4 text-xs font-semibold text-zinc-400 uppercase tracking-wider";
      default:
        return "px-3 mb-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider";
    }
  };
  return /* @__PURE__ */ r("nav", { className: "p-6 space-y-8", children: Object.entries(w).map(([e, o]) => /* @__PURE__ */ d("div", { children: [
    /* @__PURE__ */ r("h3", { className: v(), children: e.charAt(0).toUpperCase() + e.slice(1) }),
    /* @__PURE__ */ r("div", { className: l.spacing, children: o.map((s) => /* @__PURE__ */ r(y, { item: s }, s.key)) }),
    e !== "system" && /* @__PURE__ */ r(
      q,
      {
        className: n(
          "mt-6",
          i === "primary" && "bg-primary-foreground/20",
          i === "black" && "bg-zinc-800/60"
        )
      }
    )
  ] }, e)) });
}
const E = X(({
  className: x,
  variant: a = "default",
  size: g = "md",
  sticky: f = !0,
  navigation: i = [],
  currentPath: p = "",
  onNavigate: N = () => {
  },
  title: l = "Admin Panel",
  logo: b,
  headerActions: h,
  sidebarContent: y,
  sidebarFooter: w,
  collapsible: v = !0,
  defaultSidebarOpen: e = !0,
  children: o
}, s) => {
  const [t, m] = k(e), [c, L] = k(!1), [V, j] = k(!1), S = H(g);
  z(() => {
    const u = () => {
      const M = window.innerWidth < 1024;
      L(M), M && e === !0 && m(!1);
    };
    return u(), window.addEventListener("resize", u), () => window.removeEventListener("resize", u);
  }, [e]), z(() => {
    const u = () => {
      j(window.scrollY > 0);
    };
    if (f)
      return window.addEventListener("scroll", u), () => window.removeEventListener("scroll", u);
  }, [f]), z(() => (c && t ? document.body.style.overflow = "hidden" : document.body.style.overflow = "unset", () => {
    document.body.style.overflow = "unset";
  }), [c, t]);
  const C = () => {
    m(!t);
  }, I = () => {
    const u = V && f ? "shadow-sm" : "";
    return n(Q({ sticky: f }), u);
  }, O = () => "p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors", R = () => {
    switch (a) {
      case "muted":
        return "border-border/20 bg-muted/20";
      case "primary":
        return "border-primary-foreground/20 bg-primary-foreground/10";
      case "black":
        return "border-zinc-800/40 bg-zinc-900/50";
      default:
        return "border-border/20 bg-muted/20";
    }
  }, P = () => {
    switch (a) {
      case "muted":
        return "text-muted-foreground";
      case "primary":
        return "text-primary-foreground/90";
      case "black":
        return "text-zinc-200";
      default:
        return "text-muted-foreground";
    }
  }, T = () => {
    switch (a) {
      case "muted":
        return "text-muted-foreground hover:bg-muted hover:text-foreground";
      case "primary":
        return "text-primary-foreground hover:bg-primary-foreground/20 hover:text-primary-foreground";
      case "black":
        return "text-zinc-300 hover:bg-zinc-800 hover:text-zinc-100";
      default:
        return "text-muted-foreground hover:bg-muted hover:text-foreground";
    }
  }, U = () => {
    switch (a) {
      case "muted":
        return "border-border/20 bg-muted/20";
      case "primary":
        return "border-primary-foreground/20 bg-primary-foreground/10";
      case "black":
        return "border-zinc-800/40 bg-zinc-900/50";
      default:
        return "border-border/20 bg-muted/20";
    }
  }, W = () => c ? "" : {
    sm: t ? "lg:ml-48" : "lg:ml-0",
    md: t ? "lg:ml-64" : "lg:ml-0",
    lg: t ? "lg:ml-80" : "lg:ml-0",
    xl: t ? "lg:ml-96" : "lg:ml-0",
    full: t ? "lg:ml-[28rem]" : "lg:ml-0"
  }[g];
  return /* @__PURE__ */ d(
    "div",
    {
      ref: s,
      className: n(G({ variant: a }), x),
      children: [
        c && t && /* @__PURE__ */ r(
          "div",
          {
            className: "fixed inset-0 z-40 bg-black/50 backdrop-blur-sm",
            onClick: () => m(!1),
            "aria-hidden": "true"
          }
        ),
        /* @__PURE__ */ r("aside", { className: n(
          J({ size: g, variant: a }),
          c ? [
            t ? "translate-x-0" : "-translate-x-full"
          ] : [
            t ? "translate-x-0" : "-translate-x-full"
          ]
        ), children: /* @__PURE__ */ d("div", { className: "flex flex-col h-full", children: [
          /* @__PURE__ */ d("div", { className: n(
            "flex items-center justify-between border-b flex-shrink-0",
            S.sidebarHeader,
            R()
          ), children: [
            /* @__PURE__ */ r("h2", { className: n(
              "font-semibold uppercase tracking-wider",
              P()
            ), children: "Navigation" }),
            v && c && /* @__PURE__ */ r(
              Y,
              {
                variant: "ghost",
                size: "icon",
                onClick: C,
                className: n("flex-shrink-0", T()),
                "aria-label": "Close sidebar",
                children: /* @__PURE__ */ r(A, { className: "h-4 w-4" })
              }
            )
          ] }),
          /* @__PURE__ */ r("div", { className: "flex-1 overflow-y-auto", children: y || /* @__PURE__ */ r(
            Z,
            {
              navigationItems: i,
              currentPath: p,
              onNavigate: N,
              size: g,
              variant: a
            }
          ) }),
          w && /* @__PURE__ */ r("div", { className: n(
            "flex-shrink-0 border-t",
            U()
          ), children: w })
        ] }) }),
        /* @__PURE__ */ d("div", { className: n(
          "flex-1 flex flex-col min-w-0 transition-all duration-300 ease-in-out",
          W()
        ), children: [
          /* @__PURE__ */ r("header", { className: I(), children: /* @__PURE__ */ d("div", { className: n(
            "flex items-center justify-between px-4 lg:px-6",
            S.sidebarHeader
          ), children: [
            /* @__PURE__ */ d("div", { className: "flex items-center gap-4 min-w-0", children: [
              v && /* @__PURE__ */ r(
                "button",
                {
                  className: O(),
                  onClick: C,
                  "aria-label": t ? "Close sidebar" : "Open sidebar",
                  children: /* @__PURE__ */ r(D, { className: "h-5 w-5" })
                }
              ),
              /* @__PURE__ */ d("div", { className: "flex items-center gap-3 min-w-0", children: [
                b && /* @__PURE__ */ r("div", { className: "flex-shrink-0", children: b }),
                /* @__PURE__ */ r("h1", { className: "text-lg font-semibold truncate", children: l })
              ] })
            ] }),
            h && /* @__PURE__ */ r("div", { className: "flex-shrink-0", children: h })
          ] }) }),
          /* @__PURE__ */ r("main", { className: "flex-1 min-w-0", children: /* @__PURE__ */ r("div", { className: "p-4 lg:p-6 w-full", children: /* @__PURE__ */ r("div", { className: "w-full max-w-7xl mx-auto", children: o }) }) })
        ] })
      ]
    }
  );
});
E.displayName = "AdminLayout";
const ie = E;
export {
  ie as AdminLayout
};
//# sourceMappingURL=admin.js.map
