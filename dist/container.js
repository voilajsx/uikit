import { jsx as s, jsxs as b } from "react/jsx-runtime";
import { forwardRef as y, useState as C, useEffect as N } from "react";
import { c as v } from "./index-DACAHwoB.js";
import { c as u } from "./utils-qaFjX9_3.js";
import { Button as E } from "./button.js";
import { Badge as B } from "./badge.js";
import { C as z } from "./chevron-right-pz9eCjj-.js";
const I = v(
  "w-full mx-auto bg-background text-foreground",
  {
    variants: {
      layout: {
        none: "block p-1",
        "sidebar-left": "flex flex-col md:flex-row min-h-screen overflow-visible gap-3 md:gap-4 p-1",
        "sidebar-right": "flex flex-col md:flex-row min-h-screen overflow-visible gap-3 md:gap-4 p-1"
      },
      size: {
        sm: "max-w-2xl",
        md: "max-w-4xl",
        lg: "max-w-6xl",
        xl: "max-w-7xl",
        full: "max-w-full"
      },
      position: {
        sticky: "sticky top-0 z-20",
        fixed: "fixed top-0 left-0 right-0 z-20",
        relative: "relative"
      }
    },
    defaultVariants: {
      layout: "none",
      size: "xl",
      position: "relative"
    }
  }
), V = v(
  "flex-shrink-0 rounded-lg",
  // Added rounded-lg for rounded edges
  {
    variants: {
      position: {
        left: "order-first",
        right: "order-last"
      },
      size: {
        sm: "md:w-48 lg:w-52 xl:w-56",
        md: "md:w-56 lg:w-64 xl:w-72",
        lg: "md:w-64 lg:w-72 xl:w-80",
        // Same size for lg, xl, full
        xl: "md:w-64 lg:w-72 xl:w-80",
        // Same size for lg, xl, full
        full: "md:w-64 lg:w-72 xl:w-80"
        // Same size for lg, xl, full
      },
      sidebarPosition: {
        sticky: "md:sticky md:top-0 md:h-screen md:overflow-y-auto",
        fixed: "md:fixed md:top-0 md:h-screen md:overflow-y-auto",
        relative: "md:h-full"
      },
      tone: {
        clean: "",
        // No background or border for clean
        subtle: "bg-muted/30 border border-border/50",
        brand: "bg-primary/10 border border-primary/20",
        contrast: "bg-muted border border-border"
      }
    },
    defaultVariants: {
      position: "left",
      size: "md",
      sidebarPosition: "relative",
      tone: "clean"
    }
  }
), H = v(
  "flex-1 min-w-0",
  {
    variants: {
      size: {
        sm: "p-2",
        md: "p-3",
        lg: "p-4",
        xl: "p-4",
        full: "p-4"
      }
    },
    defaultVariants: {
      size: "md"
    }
  }
), j = (t = "md") => {
  const o = {
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
  return o[t] || o.md;
};
function A({
  navigation: t,
  size: o = "md",
  currentPath: i = "",
  onNavigate: l
}) {
  const [a, c] = C(/* @__PURE__ */ new Set()), d = j(o);
  N(() => {
    const e = /* @__PURE__ */ new Set(), n = (m) => {
      m.forEach((r) => {
        r.items && r.items.length > 0 && (e.add(r.key), n(r.items));
      });
    };
    n(t), c(e);
  }, [t]);
  const h = (e) => {
    const n = new Set(a);
    n.has(e) ? n.delete(e) : n.add(e), c(n);
  }, f = (e) => {
    e.items && e.items.length > 0 ? h(e.key) : e.href && l ? l(e.href, e) : e.onClick && e.onClick();
  }, p = (e, n = 0) => {
    const m = e.items && e.items.length > 0, r = a.has(e.key), x = e.href ? i === e.href : e.isActive;
    return /* @__PURE__ */ b("div", { className: "w-full", children: [
      /* @__PURE__ */ b(
        E,
        {
          variant: x ? "secondary" : "ghost",
          className: u(
            "w-full justify-start transition-all items-center",
            d.button,
            n > 0 && "ml-4 w-[calc(100%-1rem)]",
            e.className
          ),
          onClick: () => f(e),
          children: [
            e.icon && /* @__PURE__ */ s(e.icon, { className: d.icon }),
            /* @__PURE__ */ s("span", { className: "flex-1 text-left truncate", children: e.label }),
            e.badge && d.showBadges && /* @__PURE__ */ s(B, { variant: "secondary", className: "text-xs ml-auto", children: e.badge }),
            m && /* @__PURE__ */ s(
              z,
              {
                className: u(
                  "h-4 w-4 ml-2 transition-transform duration-200 text-muted-foreground",
                  r && "rotate-90"
                )
              }
            )
          ]
        }
      ),
      m && r && e.items && /* @__PURE__ */ s("div", { className: "mt-1 space-y-1", children: e.items.map(
        (g) => p(g, n + 1)
      ) })
    ] }, e.key);
  };
  return /* @__PURE__ */ s("nav", { className: u("w-full p-3", d.spacing), children: t.map((e) => p(e)) });
}
const w = y(({
  content: t,
  position: o = "left",
  size: i = "md",
  sidebarPosition: l = "relative",
  tone: a = "clean",
  currentPath: c = "",
  onNavigate: d,
  className: h,
  style: f
}, p) => {
  if (!t) return null;
  const [e, n] = C(0);
  N(() => {
    if (l === "relative") return;
    const r = () => {
      const x = document.querySelector("header");
      n(x ? x.offsetHeight : 0);
    };
    return r(), window.addEventListener("resize", r), () => window.removeEventListener("resize", r);
  }, [l]);
  const m = () => Array.isArray(t) ? /* @__PURE__ */ s(
    A,
    {
      navigation: t,
      size: i,
      currentPath: c,
      onNavigate: d
    }
  ) : /* @__PURE__ */ s("div", { className: "p-3", children: t });
  return /* @__PURE__ */ s(
    "aside",
    {
      ref: p,
      className: u(
        V({ position: o, size: i, sidebarPosition: l, tone: a }),
        h
      ),
      style: l !== "relative" ? { ...f, top: `${e + 10}px` } : f,
      children: m()
    }
  );
});
w.displayName = "ContainerSidebar";
const k = y(({
  size: t = "md",
  children: o,
  className: i,
  style: l
}, a) => /* @__PURE__ */ s(
  "main",
  {
    ref: a,
    className: u(H({ size: t }), i),
    style: l,
    children: o
  }
));
k.displayName = "ContainerMain";
const S = y(({
  className: t,
  style: o,
  tone: i = "clean",
  position: l = "relative",
  sidebar: a = "none",
  navigation: c = [],
  sidebarContent: d,
  currentPath: h = "",
  onNavigate: f,
  sidebarPosition: p = "relative",
  size: e = "xl",
  children: n
}, m) => {
  const r = a === "left" ? "sidebar-left" : a === "right" ? "sidebar-right" : "none", x = a !== "none" && (c.length > 0 || d), g = c.length > 0 ? c : d;
  return /* @__PURE__ */ b(
    "div",
    {
      ref: m,
      className: u(I({ layout: r, size: e, position: l }), t),
      style: o,
      children: [
        x && a === "left" && /* @__PURE__ */ s(
          w,
          {
            content: g,
            position: "left",
            size: e,
            sidebarPosition: p,
            tone: i,
            currentPath: h,
            onNavigate: f
          }
        ),
        /* @__PURE__ */ s(k, { size: e, children: n }),
        x && a === "right" && /* @__PURE__ */ s(
          w,
          {
            content: g,
            position: "right",
            size: e,
            sidebarPosition: p,
            tone: i,
            currentPath: h,
            onNavigate: f
          }
        )
      ]
    }
  );
});
S.displayName = "Container";
const F = Object.assign(S, {
  Sidebar: w,
  Main: k
});
export {
  F as Container,
  k as ContainerMain,
  w as ContainerSidebar
};
//# sourceMappingURL=container.js.map
