import { jsx as r, jsxs as w } from "react/jsx-runtime";
import { forwardRef as b, useState as k, useEffect as C } from "react";
import { c as y } from "./index-DACAHwoB.js";
import { c as h } from "./utils-qaFjX9_3.js";
import { Button as E } from "./button.js";
import { Badge as B } from "./badge.js";
import { C as I } from "./chevron-right-pz9eCjj-.js";
const V = y(
  "w-full mx-auto",
  {
    variants: {
      variant: {
        default: "bg-white text-foreground",
        muted: "bg-muted/20 text-foreground",
        primary: "bg-primary/10 text-foreground",
        black: "bg-muted/40 text-foreground"
      },
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
      }
    },
    defaultVariants: {
      variant: "default",
      layout: "none",
      size: "xl"
    }
  }
), z = y(
  "flex-shrink-0 bg-background border-r border-border",
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
        xl: "md:w-72 lg:w-80 xl:w-96",
        full: "md:w-80 lg:w-96 xl:w-[28rem]"
      },
      sticky: {
        true: "md:sticky md:top-0 md:h-screen md:overflow-y-auto",
        false: "md:h-full"
      }
    },
    defaultVariants: {
      position: "left",
      size: "md",
      sticky: !1
    }
  }
), H = y(
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
  const l = {
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
  return l[t] || l.md;
};
function A({
  items: t,
  size: l = "md",
  currentPath: m = "",
  onNavigate: n
}) {
  const [o, f] = k(/* @__PURE__ */ new Set()), d = j(l);
  C(() => {
    const e = /* @__PURE__ */ new Set(), a = (i) => {
      i.forEach((s) => {
        s.items && s.items.length > 0 && (e.add(s.key), a(s.items));
      });
    };
    a(t), f(e);
  }, [t]);
  const p = (e) => {
    const a = new Set(o);
    a.has(e) ? a.delete(e) : a.add(e), f(a);
  }, x = (e) => {
    e.items && e.items.length > 0 ? p(e.key) : e.path && n ? n(e.path, e) : e.onClick && e.onClick();
  }, c = (e, a = 0) => {
    const i = e.items && e.items.length > 0, s = o.has(e.key), u = e.path ? m === e.path : e.isActive;
    return /* @__PURE__ */ w("div", { className: "w-full", children: [
      /* @__PURE__ */ w(
        E,
        {
          variant: u ? "secondary" : "ghost",
          className: h(
            "w-full justify-start transition-all items-center",
            d.button,
            a > 0 && "ml-4 w-[calc(100%-1rem)]",
            e.className
          ),
          onClick: () => x(e),
          children: [
            e.icon && /* @__PURE__ */ r(e.icon, { className: d.icon }),
            /* @__PURE__ */ r("span", { className: "flex-1 text-left truncate", children: e.label }),
            e.badge && d.showBadges && /* @__PURE__ */ r(B, { variant: "secondary", className: "text-xs ml-auto", children: e.badge }),
            i && /* @__PURE__ */ r(
              I,
              {
                className: h(
                  "h-4 w-4 ml-2 transition-transform duration-200 text-muted-foreground",
                  s && "rotate-90"
                )
              }
            )
          ]
        }
      ),
      i && s && e.items && /* @__PURE__ */ r("div", { className: "mt-1 space-y-1", children: e.items.map(
        (S) => c(S, a + 1)
      ) })
    ] }, e.key);
  };
  return /* @__PURE__ */ r("nav", { className: h("w-full p-3", d.spacing), children: t.map((e) => c(e)) });
}
const g = b(({
  content: t,
  position: l = "left",
  size: m = "md",
  sticky: n = !1,
  currentPath: o = "",
  onNavigate: f,
  className: d,
  style: p
}, x) => {
  if (!t) return null;
  const [c, e] = k(0);
  C(() => {
    if (!n) return;
    const i = () => {
      const s = document.querySelector("header");
      e(s ? s.offsetHeight : 0);
    };
    return i(), window.addEventListener("resize", i), () => window.removeEventListener("resize", i);
  }, [n]);
  const a = () => Array.isArray(t) ? /* @__PURE__ */ r(
    A,
    {
      items: t,
      size: m,
      currentPath: o,
      onNavigate: f
    }
  ) : /* @__PURE__ */ r("div", { className: "p-3", children: t });
  return /* @__PURE__ */ r(
    "aside",
    {
      ref: x,
      className: h(
        z({ position: l, size: m, sticky: n }),
        d
      ),
      style: n ? { ...p, top: `${c + 10}px` } : p,
      children: a()
    }
  );
});
g.displayName = "ContainerSidebar";
const v = b(({
  size: t = "md",
  children: l,
  className: m,
  style: n
}, o) => /* @__PURE__ */ r(
  "main",
  {
    ref: o,
    className: h(H({ size: t }), m),
    style: n,
    children: l
  }
));
v.displayName = "ContainerMain";
const N = b(({
  className: t,
  style: l,
  variant: m = "default",
  sidebar: n = "none",
  navigation: o = [],
  sidebarContent: f,
  currentPath: d = "",
  onNavigate: p,
  sticky: x = !1,
  size: c = "xl",
  children: e
}, a) => {
  const i = n === "left" ? "sidebar-left" : n === "right" ? "sidebar-right" : "none", s = n !== "none" && (o.length > 0 || f), u = o.length > 0 ? o : f;
  return /* @__PURE__ */ w(
    "div",
    {
      ref: a,
      className: h(V({ variant: m, layout: i, size: c }), t),
      style: l,
      children: [
        s && n === "left" && /* @__PURE__ */ r(
          g,
          {
            content: u,
            position: "left",
            size: c,
            sticky: x,
            currentPath: d,
            onNavigate: p
          }
        ),
        /* @__PURE__ */ r(v, { size: c, children: e }),
        s && n === "right" && /* @__PURE__ */ r(
          g,
          {
            content: u,
            position: "right",
            size: c,
            sticky: x,
            currentPath: d,
            onNavigate: p
          }
        )
      ]
    }
  );
});
N.displayName = "Container";
const F = Object.assign(N, {
  Sidebar: g,
  Main: v
});
export {
  F as Container,
  v as ContainerMain,
  g as ContainerSidebar
};
//# sourceMappingURL=container.js.map
