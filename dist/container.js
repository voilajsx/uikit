import { jsx as r, jsxs as b } from "react/jsx-runtime";
import { forwardRef as S, useState as M, useEffect as z } from "react";
import { c as A } from "./index-Bke1qZdk.js";
import { c as k } from "./utils-CwJPJKOE.js";
import { Button as R } from "./button.js";
import { Badge as I } from "./badge.js";
import { Select as G, SelectTrigger as $, SelectValue as O, SelectContent as T, SelectItem as q } from "./select.js";
import { C as D } from "./chevron-right-pz9eCjj-.js";
const F = A(
  "w-full mx-auto bg-background text-foreground",
  {
    variants: {
      layout: {
        none: "block",
        "sidebar-left": "block md:flex",
        // ✅ FIXED: Always flex for side-by-side
        "sidebar-right": "block md:flex"
        // ✅ FIXED: Always flex for side-by-side
      },
      size: {
        sm: "max-w-2xl",
        md: "max-w-4xl",
        lg: "max-w-6xl",
        xl: "max-w-7xl",
        full: "max-w-full"
      },
      position: {
        sticky: "relative",
        fixed: "relative",
        relative: "relative"
      }
    },
    defaultVariants: {
      layout: "none",
      size: "xl",
      position: "relative"
    }
  }
), H = A(
  "flex-shrink-0 rounded-lg m-4 max-md:hidden",
  // ✅ OPTIMIZED: Added m-4 for consistent outer margin
  {
    variants: {
      position: {
        left: "order-first",
        right: "order-last"
      },
      size: {
        sm: "w-48",
        // ✅ FIXED: Removed responsive prefixes for consistent width
        md: "w-56",
        lg: "w-64",
        xl: "w-64",
        full: "w-64"
      },
      sidebarPosition: {
        sticky: "sticky top-4 self-start max-h-[calc(100vh-2rem)] overflow-y-auto",
        // ✅ FIXED: Added self-start
        fixed: "sticky top-4 self-start max-h-[calc(100vh-2rem)] overflow-y-auto",
        // ✅ FIXED: Added self-start  
        relative: "self-start"
        // ✅ FIXED: Added self-start
      },
      tone: {
        clean: "bg-muted/10 border border-border/60 dark:bg-muted/20 dark:border-border/50",
        subtle: "bg-muted/50 border border-border/20 dark:bg-muted/60 dark:border-border/30",
        brand: "bg-primary/10 border border-primary/15 dark:bg-primary/15 dark:border-primary/20",
        contrast: "bg-muted/70 border border-border/50 dark:bg-muted/80 dark:border-border/60"
      }
    },
    defaultVariants: {
      position: "left",
      size: "md",
      sidebarPosition: "relative",
      tone: "clean"
    }
  }
), J = A(
  "flex-1 min-w-0 p-4",
  // ✅ OPTIMIZED: Constant p-4 padding, removed min-w-0 conflict
  {
    variants: {
      size: {
        sm: "",
        // ✅ OPTIMIZED: Removed size-based padding, using constant p-4
        md: "",
        lg: "",
        xl: "",
        full: ""
      },
      hasGap: {
        true: "",
        // ✅ OPTIMIZED: Removed ml-6, using sidebar m-4 instead
        false: ""
      }
    },
    defaultVariants: {
      size: "md",
      hasGap: !1
    }
  }
), L = (a = "md") => {
  const c = {
    sm: {
      button: "text-xs py-1.5 px-2 min-h-[28px]",
      icon: "h-3 w-3 mr-2 flex-shrink-0",
      spacing: "space-y-0.5",
      showBadges: !1
    },
    md: {
      button: "text-sm py-2 px-3 min-h-[32px]",
      icon: "h-4 w-4 mr-2 flex-shrink-0",
      spacing: "space-y-1",
      showBadges: !0
    },
    lg: {
      button: "text-sm py-2.5 px-4 min-h-[36px]",
      icon: "h-4 w-4 mr-3 flex-shrink-0",
      spacing: "space-y-1.5",
      showBadges: !0
    },
    xl: {
      button: "text-sm py-2.5 px-4 min-h-[36px]",
      icon: "h-4 w-4 mr-3 flex-shrink-0",
      spacing: "space-y-1.5",
      showBadges: !0
    },
    full: {
      button: "text-sm py-2.5 px-4 min-h-[36px]",
      icon: "h-4 w-4 mr-3 flex-shrink-0",
      spacing: "space-y-1.5",
      showBadges: !0
    }
  };
  return c[a] || c.md;
};
function Q({
  navigation: a,
  size: c = "md",
  tone: s,
  currentPath: x = "",
  onNavigate: n
}) {
  const [h, p] = M(/* @__PURE__ */ new Set()), m = L(c);
  z(() => {
    const e = /* @__PURE__ */ new Set(), o = (w) => {
      w.forEach((d) => {
        d.items && d.items.length > 0 && (e.add(d.key), o(d.items));
      });
    };
    o(a), p(e);
  }, [a]);
  const u = (e) => {
    const o = new Set(h);
    o.has(e) ? o.delete(e) : o.add(e), p(o);
  }, y = (e) => {
    e.items && e.items.length > 0 ? u(e.key) : e.href && n ? n(e.href, e) : e.onClick && e.onClick();
  }, f = (e, o = 0) => {
    const w = e.items && e.items.length > 0, d = h.has(e.key), l = e.href ? x === e.href : e.isActive;
    return /* @__PURE__ */ b("div", { className: "w-full", children: [
      /* @__PURE__ */ b(
        R,
        {
          variant: "ghost",
          className: k(
            "w-full justify-start transition-all items-center cursor-pointer",
            m.button,
            o > 0 && "ml-4 w-[calc(100%-1rem)]",
            // Tone-aware styling
            s === "clean" && (l ? "bg-muted text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground hover:bg-muted/50"),
            s === "subtle" && (l ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground hover:bg-background/60"),
            s === "brand" && (l ? "bg-primary/10 text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground hover:bg-primary/5"),
            s === "contrast" && (l ? "bg-muted text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground hover:bg-muted/60"),
            e.className
          ),
          onClick: () => y(e),
          children: [
            e.icon && /* @__PURE__ */ r(e.icon, { className: m.icon }),
            /* @__PURE__ */ r("span", { className: "flex-1 text-left truncate", children: e.label }),
            e.badge && m.showBadges && /* @__PURE__ */ r(I, { variant: "secondary", className: "text-xs ml-auto", children: e.badge }),
            w && /* @__PURE__ */ r(
              D,
              {
                className: k(
                  "h-4 w-4 ml-2 transition-transform duration-200 text-muted-foreground",
                  d && "rotate-90"
                )
              }
            )
          ]
        }
      ),
      w && d && e.items && /* @__PURE__ */ r("div", { className: "mt-1 space-y-1", children: e.items.map(
        (v) => f(v, o + 1)
      ) })
    ] }, e.key);
  };
  return /* @__PURE__ */ r("nav", { className: k("w-full p-3", m.spacing), children: a.map((e) => f(e)) });
}
const C = S(({
  content: a,
  position: c = "left",
  size: s = "md",
  sidebarPosition: x = "relative",
  tone: n = "clean",
  currentPath: h = "",
  onNavigate: p,
  className: m,
  style: u
}, y) => {
  if (!a) return null;
  const f = () => Array.isArray(a) ? /* @__PURE__ */ r(
    Q,
    {
      navigation: a,
      size: s,
      tone: n,
      currentPath: h,
      onNavigate: p
    }
  ) : /* @__PURE__ */ r("div", { className: "p-3", children: a });
  return /* @__PURE__ */ r(
    "aside",
    {
      ref: y,
      className: k(
        H({ position: c, size: s, sidebarPosition: x, tone: n }),
        m
      ),
      style: u,
      children: f()
    }
  );
});
C.displayName = "ContainerSidebar";
const B = S(({
  size: a = "md",
  children: c,
  className: s,
  style: x
}, n) => /* @__PURE__ */ r(
  "main",
  {
    ref: n,
    className: k(J({ size: a }), s),
    style: x,
    children: c
  }
));
B.displayName = "ContainerMain";
const V = S(({
  className: a,
  style: c,
  tone: s = "clean",
  position: x = "relative",
  sidebar: n = "none",
  navigation: h = [],
  sidebarContent: p,
  currentPath: m = "",
  onNavigate: u,
  sidebarPosition: y = "relative",
  size: f = "xl",
  children: e
}, o) => {
  const w = n === "left" ? "sidebar-left" : n === "right" ? "sidebar-right" : "none", d = n !== "none" && (h.length > 0 || p), l = h.length > 0 ? h : p, v = (g, N = "") => {
    const t = [];
    return g.forEach((i) => {
      const E = N ? `${N} > ${i.label}` : i.label;
      (i.href || i.onClick) && t.push({ key: i.key, label: E, item: i }), i.items && i.items.length > 0 && t.push(...v(i.items, E));
    }), t;
  }, j = (g) => {
    if (!Array.isArray(l)) return;
    const t = v(l).find((i) => i.key === g);
    t && u && (t.item.href ? u(t.item.href, t.item) : t.item.onClick && t.item.onClick());
  };
  return /* @__PURE__ */ b(
    "div",
    {
      ref: o,
      className: k(F({ layout: w, size: f, position: x }), a),
      style: c,
      children: [
        d && n === "left" && /* @__PURE__ */ r(
          C,
          {
            content: l,
            position: "left",
            size: f,
            sidebarPosition: y,
            tone: s,
            currentPath: m,
            onNavigate: u
          }
        ),
        /* @__PURE__ */ b(B, { size: f, children: [
          d && Array.isArray(l) && /* @__PURE__ */ r("div", { className: "md:hidden mb-4", children: /* @__PURE__ */ b(G, { value: v(l).find((g) => g.item.href === m)?.key, onValueChange: j, children: [
            /* @__PURE__ */ r($, { className: "w-full", children: /* @__PURE__ */ r(O, { placeholder: "Navigate to..." }) }),
            /* @__PURE__ */ r(T, { children: v(l).map(({ key: g, label: N, item: t }) => /* @__PURE__ */ r(q, { value: g, children: /* @__PURE__ */ b("div", { className: "flex items-center justify-between w-full", children: [
              /* @__PURE__ */ b("div", { className: "flex items-center gap-2", children: [
                t.icon && /* @__PURE__ */ r(t.icon, { className: "h-4 w-4" }),
                /* @__PURE__ */ r("span", { children: N })
              ] }),
              t.badge && /* @__PURE__ */ r(I, { variant: "secondary", className: "text-xs", children: t.badge })
            ] }) }, g)) })
          ] }) }),
          e
        ] }),
        d && n === "right" && /* @__PURE__ */ r(
          C,
          {
            content: l,
            position: "right",
            size: f,
            sidebarPosition: y,
            tone: s,
            currentPath: m,
            onNavigate: u
          }
        )
      ]
    }
  );
});
V.displayName = "Container";
const ee = Object.assign(V, {
  Sidebar: C,
  Main: B
});
export {
  ee as Container,
  B as ContainerMain,
  C as ContainerSidebar
};
//# sourceMappingURL=container.js.map
