import { jsx as r, jsxs as c } from "react/jsx-runtime";
import { createContext as R, forwardRef as k, useState as b, useContext as W, useEffect as v } from "react";
import { c as H } from "./index-DACAHwoB.js";
import { c as n } from "./utils-qaFjX9_3.js";
import { Button as S } from "./button.js";
import { C as E } from "./chevron-down-BORJtX8F.js";
import { X } from "./x-BxwubQiM.js";
import { M as q } from "./menu-DBhEanGo.js";
const D = R({
  variant: "default",
  size: "xl"
}), F = H(
  "w-full border-b transition-all duration-200 z-40",
  {
    variants: {
      variant: {
        default: [
          "bg-background/80 backdrop-blur-sm border-border/40 supports-[backdrop-filter]:bg-background/60",
          "text-foreground"
        ],
        muted: [
          "bg-muted/50 backdrop-blur-sm border-border/30",
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
      },
      sticky: {
        true: "sticky top-0",
        false: "relative"
      }
    },
    defaultVariants: {
      variant: "default",
      sticky: !0
    }
  }
), G = H(
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
), L = k(({
  className: u,
  variant: l = "default",
  size: i = "xl",
  sticky: p = !0,
  children: y,
  ...w
}, d) => /* @__PURE__ */ r(D.Provider, { value: { variant: l, size: i }, children: /* @__PURE__ */ r(
  "header",
  {
    ref: d,
    className: n(F({ variant: l, sticky: p }), u),
    ...w,
    children: /* @__PURE__ */ r("div", { className: n(G({ size: i })), children: y })
  }
) }));
L.displayName = "Header";
const O = k(({
  className: u,
  children: l,
  ...i
}, p) => /* @__PURE__ */ r(
  "div",
  {
    ref: p,
    className: n("flex items-center flex-shrink-0", u),
    ...i,
    children: l
  }
));
O.displayName = "HeaderLogo";
const j = k(({
  navigation: u = [],
  currentPath: l = "",
  onNavigate: i,
  className: p,
  ...y
}, w) => {
  const [d, N] = b(!1), [z, C] = b(/* @__PURE__ */ new Set()), [h, A] = b(!1), { variant: M } = W(D);
  v(() => {
    A(!0);
  }, []), v(() => {
    if (!h) return;
    const o = () => {
      window.innerWidth >= 768 && N(!1);
    };
    return window.addEventListener("resize", o), () => window.removeEventListener("resize", o);
  }, [h]), v(() => {
    if (h)
      return d ? document.body.style.overflow = "hidden" : document.body.style.overflow = "unset", () => {
        document.body.style.overflow = "unset";
      };
  }, [d, h]);
  const T = (o) => {
    const e = new Set(z);
    e.has(o) ? e.delete(o) : e.add(o), C(e);
  }, f = (o) => {
    N(!1), C(/* @__PURE__ */ new Set()), o.path && i ? i(o.path, o) : o.onClick && o.onClick();
  }, V = (o = !1) => {
    const e = "justify-start cursor-pointer rounded-lg transition-colors";
    switch (M) {
      case "muted":
        return n(
          e,
          o ? "bg-background text-foreground hover:bg-background/80" : "text-muted-foreground hover:text-foreground hover:bg-background/50"
        );
      case "primary":
        return n(
          e,
          o ? "bg-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/30" : "text-primary-foreground hover:bg-primary-foreground/10"
        );
      case "black":
        return n(
          e,
          o ? "bg-zinc-700 text-zinc-100 hover:bg-zinc-600" : "text-zinc-100 hover:bg-zinc-800"
        );
      default:
        return n(
          e,
          o ? "bg-secondary text-secondary-foreground hover:bg-secondary/80" : "text-foreground hover:bg-muted"
        );
    }
  };
  return /* @__PURE__ */ c("div", { className: "flex items-center ml-auto", children: [
    /* @__PURE__ */ r(() => {
      const [o, e] = b(null);
      return v(() => {
        const t = () => e(null);
        if (o !== null)
          return document.addEventListener("click", t), () => document.removeEventListener("click", t);
      }, [o]), /* @__PURE__ */ r("nav", { className: n("hidden md:flex items-center space-x-1", p), ref: w, ...y, children: u.map((t) => {
        var s;
        const m = t.items && t.items.length > 0, g = o === t.key, x = t.path ? l === t.path : t.isActive;
        return /* @__PURE__ */ c("div", { className: "relative", children: [
          /* @__PURE__ */ c(
            S,
            {
              variant: "ghost",
              size: "sm",
              className: n(V(x), t.className),
              onClick: (a) => {
                a.stopPropagation(), m ? e(g ? null : t.key) : (e(null), f(t));
              },
              children: [
                t.icon && /* @__PURE__ */ r(t.icon, { className: "h-4 w-4 mr-2" }),
                /* @__PURE__ */ r("span", { children: t.label }),
                m && /* @__PURE__ */ r(E, { className: n(
                  "h-3 w-3 ml-1 transition-transform duration-200",
                  g && "rotate-180"
                ) })
              ]
            }
          ),
          m && g && /* @__PURE__ */ r(
            "div",
            {
              className: "absolute top-full left-0 w-48 bg-background border border-border rounded-lg shadow-lg z-50 mt-1",
              onClick: (a) => a.stopPropagation(),
              children: /* @__PURE__ */ r("div", { className: "py-1", children: (s = t.items) == null ? void 0 : s.map((a) => {
                const B = a.path ? l === a.path : a.isActive;
                return /* @__PURE__ */ c(
                  "button",
                  {
                    className: n(
                      "w-full px-3 py-2 text-left text-sm transition-colors flex items-center",
                      "hover:bg-muted focus:bg-muted focus:outline-none",
                      B ? "bg-secondary text-secondary-foreground" : "text-foreground"
                    ),
                    onClick: () => {
                      e(null), f(a);
                    },
                    children: [
                      a.icon && /* @__PURE__ */ r(a.icon, { className: "h-4 w-4 mr-2" }),
                      /* @__PURE__ */ r("span", { children: a.label })
                    ]
                  },
                  a.key
                );
              }) })
            }
          )
        ] }, t.key);
      }) });
    }, {}),
    /* @__PURE__ */ r(() => /* @__PURE__ */ r(
      S,
      {
        variant: "ghost",
        size: "icon",
        className: (() => {
          switch (M) {
            case "muted":
              return "md:hidden text-muted-foreground hover:text-foreground hover:bg-background/50";
            case "primary":
              return "md:hidden text-primary-foreground hover:bg-primary-foreground/10";
            case "black":
              return "md:hidden text-zinc-100 hover:bg-zinc-800";
            default:
              return "md:hidden text-foreground hover:bg-muted";
          }
        })(),
        onClick: () => N(!d),
        "aria-label": d ? "Close menu" : "Open menu",
        children: d ? /* @__PURE__ */ r(X, { className: "h-5 w-5" }) : /* @__PURE__ */ r(q, { className: "h-5 w-5" })
      }
    ), {}),
    /* @__PURE__ */ r(() => {
      const o = (e = !1) => n(
        "flex items-center cursor-pointer transition-colors duration-200 rounded-lg",
        e ? "bg-secondary text-secondary-foreground" : "text-foreground hover:bg-muted"
      );
      return /* @__PURE__ */ r(
        "div",
        {
          className: n(
            "fixed top-16 left-0 right-0 z-40 md:hidden bg-background border-b border-border/40 shadow-lg transition-all duration-300 ease-out overflow-hidden",
            d ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          ),
          children: /* @__PURE__ */ r("div", { className: "max-h-96 overflow-y-auto", children: /* @__PURE__ */ r("div", { className: "px-4 py-4 space-y-2", children: u.map((e) => {
            var x;
            const t = e.items && e.items.length > 0, m = z.has(e.key), g = e.path ? l === e.path : e.isActive;
            return /* @__PURE__ */ c("div", { className: "space-y-1", children: [
              /* @__PURE__ */ r(
                "div",
                {
                  className: n(o(g), e.className),
                  onClick: () => t ? T(e.key) : f(e),
                  children: /* @__PURE__ */ c("div", { className: "flex-1 flex items-center px-3 py-2", children: [
                    e.icon && /* @__PURE__ */ r(e.icon, { className: "h-4 w-4 mr-3" }),
                    /* @__PURE__ */ r("span", { className: "text-sm", children: e.label }),
                    t && /* @__PURE__ */ r(E, { className: n(
                      "h-4 w-4 ml-auto transition-transform duration-200",
                      m && "rotate-180"
                    ) })
                  ] })
                }
              ),
              t && /* @__PURE__ */ r("div", { className: n(
                "ml-6 space-y-1 border-l border-border/30 pl-4 overflow-hidden transition-all duration-300 ease-out",
                m ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              ), children: (x = e.items) == null ? void 0 : x.map((s) => {
                const a = s.path ? l === s.path : s.isActive;
                return /* @__PURE__ */ c(
                  "div",
                  {
                    className: n(
                      "flex items-center px-3 py-2 rounded-lg transition-colors cursor-pointer",
                      a ? "bg-secondary text-secondary-foreground" : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    ),
                    onClick: () => f(s),
                    children: [
                      s.icon && /* @__PURE__ */ r(s.icon, { className: "h-3 w-3 mr-3" }),
                      /* @__PURE__ */ r("span", { className: "text-sm", children: s.label })
                    ]
                  },
                  s.key
                );
              }) })
            ] }, e.key);
          }) }) })
        }
      );
    }, {})
  ] });
});
j.displayName = "HeaderNav";
const re = Object.assign(L, {
  Logo: O,
  Nav: j
});
export {
  re as Header,
  O as HeaderLogo,
  j as HeaderNav,
  G as containerVariants,
  F as headerVariants
};
//# sourceMappingURL=header.js.map
