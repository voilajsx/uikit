import { jsx as r, jsxs as d } from "react/jsx-runtime";
import { createContext as W, forwardRef as C, useState as h, useContext as X, useEffect as m } from "react";
import { c as H } from "./index-DACAHwoB.js";
import { c as n } from "./utils-qaFjX9_3.js";
import { Button as q } from "./button.js";
import { C as E } from "./chevron-down-BORJtX8F.js";
import { X as F } from "./x-BxwubQiM.js";
import { M as G } from "./menu-DBhEanGo.js";
const L = W({
  tone: "clean",
  size: "xl"
}), J = H(
  "w-full border-b transition-all duration-200 z-40",
  {
    variants: {
      tone: {
        clean: [
          "bg-background/80 backdrop-blur-sm border-border/40 supports-[backdrop-filter]:bg-background/60",
          "text-foreground"
        ],
        subtle: [
          "bg-muted/50 backdrop-blur-sm border-border/30",
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
      },
      position: {
        sticky: "sticky top-0",
        fixed: "fixed top-0 left-0 right-0",
        relative: "relative"
      }
    },
    defaultVariants: {
      tone: "clean",
      position: "sticky"
    }
  }
), K = H(
  "mx-auto flex items-center justify-between",
  {
    variants: {
      size: {
        sm: "max-w-2xl h-12 px-4",
        md: "max-w-4xl h-14 px-4 sm:px-6",
        lg: "max-w-6xl h-16 px-4 sm:px-6 lg:px-8",
        xl: "max-w-7xl h-16 px-4 sm:px-6 lg:px-8",
        full: "max-w-full h-16 px-4 sm:px-6 lg:px-8"
      }
    },
    defaultVariants: {
      size: "xl"
    }
  }
), O = C(({
  className: c,
  tone: s = "clean",
  size: l = "xl",
  position: u = "sticky",
  children: b,
  ...y
}, a) => /* @__PURE__ */ r(L.Provider, { value: { tone: s, size: l }, children: /* @__PURE__ */ r(
  "header",
  {
    ref: a,
    className: n(J({ tone: s, position: u }), c),
    ...y,
    children: /* @__PURE__ */ r("div", { className: n(K({ size: l })), children: b })
  }
) }));
O.displayName = "Header";
const D = C(({
  className: c,
  children: s,
  ...l
}, u) => /* @__PURE__ */ r(
  "div",
  {
    ref: u,
    className: n("flex items-center flex-shrink-0", c),
    ...l,
    children: s
  }
));
D.displayName = "HeaderLogo";
const A = C(({
  navigation: c = [],
  currentPath: s = "",
  onNavigate: l,
  className: u,
  ...b
}, y) => {
  const [a, v] = h(!1), [M, w] = h(/* @__PURE__ */ new Set()), [N, f] = h(null), [g, j] = h(!1), { tone: S } = X(L);
  m(() => {
    j(!0);
  }, []), m(() => {
    if (!g) return;
    const e = () => {
      window.innerWidth >= 768 && (v(!1), w(/* @__PURE__ */ new Set()));
    };
    return window.addEventListener("resize", e), () => window.removeEventListener("resize", e);
  }, [g]), m(() => {
    if (g)
      return a ? document.body.style.overflow = "hidden" : document.body.style.overflow = "unset", () => {
        document.body.style.overflow = "unset";
      };
  }, [a, g]), m(() => {
    const e = () => f(null);
    if (N !== null)
      return document.addEventListener("click", e), () => document.removeEventListener("click", e);
  }, [N]);
  const V = (e) => {
    const t = new Set(M);
    t.has(e) ? t.delete(e) : t.add(e), w(t);
  }, p = (e) => {
    v(!1), w(/* @__PURE__ */ new Set()), f(null), e.href && l ? l(e.href, e) : e.onClick && e.onClick();
  }, B = (e = !1) => {
    const t = "px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-md flex items-center gap-2";
    switch (S) {
      case "subtle":
        return n(
          t,
          e ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground hover:bg-white/80"
        );
      case "brand":
        return n(
          t,
          e ? "bg-primary-foreground/20 text-primary-foreground shadow-sm" : "text-primary-foreground/90 hover:text-primary-foreground hover:bg-white/10"
        );
      case "contrast":
        return n(
          t,
          e ? "bg-zinc-700 text-zinc-100 shadow-sm" : "text-zinc-200 hover:text-zinc-100 hover:bg-white/5"
        );
      default:
        return n(
          t,
          e ? "bg-gray-100 text-foreground shadow-sm" : "text-foreground hover:text-foreground hover:bg-gray-50"
        );
    }
  }, R = (e = !1) => n(
    "w-full flex items-center px-3 py-2 text-left transition-colors duration-200 rounded-lg",
    e ? "bg-secondary text-secondary-foreground" : "text-foreground hover:bg-gray-50"
  ), T = () => {
    switch (S) {
      case "subtle":
        return "text-muted-foreground hover:text-foreground hover:bg-white/80";
      case "brand":
        return "text-primary-foreground hover:bg-white/10";
      case "contrast":
        return "text-zinc-100 hover:bg-white/5";
      default:
        return "text-foreground hover:bg-gray-50";
    }
  };
  return /* @__PURE__ */ d("div", { className: "flex items-center ml-auto", children: [
    /* @__PURE__ */ r("nav", { className: n("hidden md:flex items-center space-x-1", u), ref: y, ...b, children: c.map((e) => {
      var x;
      const t = e.items && e.items.length > 0, i = N === e.key, k = e.href ? s === e.href : e.isActive;
      return /* @__PURE__ */ d("div", { className: "relative", children: [
        /* @__PURE__ */ d(
          "button",
          {
            type: "button",
            className: n(B(k), e.className),
            onClick: (o) => {
              o.stopPropagation(), t ? f(i ? null : e.key) : (f(null), p(e));
            },
            children: [
              e.icon && /* @__PURE__ */ r(e.icon, { className: "h-4 w-4" }),
              /* @__PURE__ */ r("span", { children: e.label }),
              t && /* @__PURE__ */ r(E, { className: n(
                "h-3 w-3 transition-transform duration-200",
                i && "rotate-180"
              ) })
            ]
          }
        ),
        t && i && /* @__PURE__ */ r(
          "div",
          {
            className: "absolute top-full left-0 w-48 bg-background border border-border rounded-lg shadow-lg z-50 mt-1",
            onClick: (o) => o.stopPropagation(),
            children: /* @__PURE__ */ r("div", { className: "py-1", children: (x = e.items) == null ? void 0 : x.map((o) => {
              const z = o.href ? s === o.href : o.isActive;
              return /* @__PURE__ */ d(
                "button",
                {
                  type: "button",
                  className: n(
                    "w-full px-3 py-2 text-left text-sm transition-colors flex items-center gap-2",
                    "hover:bg-gray-50 focus:bg-gray-50 focus:outline-none",
                    z ? "bg-gray-100 text-foreground font-medium" : "text-foreground"
                  ),
                  onClick: () => {
                    f(null), p(o);
                  },
                  children: [
                    o.icon && /* @__PURE__ */ r(o.icon, { className: "h-4 w-4" }),
                    /* @__PURE__ */ r("span", { children: o.label }),
                    o.badge && /* @__PURE__ */ r("span", { className: "ml-auto text-xs bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded", children: o.badge })
                  ]
                },
                o.key
              );
            }) })
          }
        )
      ] }, e.key);
    }) }),
    /* @__PURE__ */ r(
      q,
      {
        variant: "ghost",
        size: "icon",
        className: n("md:hidden", T()),
        onClick: () => v(!a),
        "aria-label": a ? "Close menu" : "Open menu",
        children: a ? /* @__PURE__ */ r(F, { className: "h-5 w-5" }) : /* @__PURE__ */ r(G, { className: "h-5 w-5" })
      }
    ),
    a && /* @__PURE__ */ r("div", { className: "fixed top-16 left-0 right-0 z-40 md:hidden bg-background border-b border-border/40 shadow-lg", children: /* @__PURE__ */ r("div", { className: "max-h-96 overflow-y-auto", children: /* @__PURE__ */ r("div", { className: "px-4 py-4 space-y-2", children: c.map((e) => {
      var x;
      const t = e.items && e.items.length > 0, i = M.has(e.key), k = e.href ? s === e.href : e.isActive;
      return /* @__PURE__ */ d("div", { className: "space-y-1", children: [
        /* @__PURE__ */ d(
          "button",
          {
            type: "button",
            className: n(R(k), e.className),
            onClick: () => t ? V(e.key) : p(e),
            children: [
              e.icon && /* @__PURE__ */ r(e.icon, { className: "h-4 w-4 mr-3 flex-shrink-0" }),
              /* @__PURE__ */ r("span", { className: "flex-1 text-sm", children: e.label }),
              e.badge && /* @__PURE__ */ r("span", { className: "text-xs bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded mr-2", children: e.badge }),
              t && /* @__PURE__ */ r(E, { className: n(
                "h-4 w-4 transition-transform duration-200 flex-shrink-0",
                i && "rotate-180"
              ) })
            ]
          }
        ),
        t && i && /* @__PURE__ */ r("div", { className: "ml-6 space-y-1 border-l border-border/30 pl-4", children: (x = e.items) == null ? void 0 : x.map((o) => {
          const z = o.href ? s === o.href : o.isActive;
          return /* @__PURE__ */ d(
            "button",
            {
              type: "button",
              className: n(
                "w-full flex items-center px-3 py-2 text-left transition-colors rounded-lg",
                z ? "bg-secondary text-secondary-foreground" : "text-muted-foreground hover:text-foreground hover:bg-gray-50"
              ),
              onClick: () => p(o),
              children: [
                o.icon && /* @__PURE__ */ r(o.icon, { className: "h-3 w-3 mr-3 flex-shrink-0" }),
                /* @__PURE__ */ r("span", { className: "flex-1 text-sm", children: o.label }),
                o.badge && /* @__PURE__ */ r("span", { className: "text-xs bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded", children: o.badge })
              ]
            },
            o.key
          );
        }) })
      ] }, e.key);
    }) }) }) })
  ] });
});
A.displayName = "HeaderNav";
const ee = Object.assign(O, {
  Logo: D,
  Nav: A
});
export {
  ee as Header,
  D as HeaderLogo,
  A as HeaderNav,
  K as containerVariants,
  J as headerVariants
};
//# sourceMappingURL=header.js.map
