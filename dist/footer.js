import { jsx as e, jsxs as l, Fragment as V } from "react/jsx-runtime";
import { createContext as I, forwardRef as y, useContext as z } from "react";
import { c as C } from "./index-DACAHwoB.js";
import { c as o } from "./utils-qaFjX9_3.js";
import { Button as T } from "./button.js";
import { Separator as F } from "./separator.js";
const b = I({
  tone: "contrast",
  size: "xl"
}), L = C(
  "w-full border-t transition-all duration-200",
  {
    variants: {
      tone: {
        clean: "bg-background border-border text-foreground",
        subtle: "bg-muted/30 border-border/50 text-foreground",
        brand: "bg-primary border-primary-foreground/20 text-primary-foreground",
        contrast: "bg-zinc-900 border-zinc-700/40 text-zinc-100"
      },
      position: {
        sticky: "sticky bottom-0 z-30",
        fixed: "fixed bottom-0 left-0 right-0 z-30",
        relative: "relative"
      }
    },
    defaultVariants: {
      tone: "contrast",
      position: "relative"
    }
  }
), O = C(
  "mx-auto",
  {
    variants: {
      size: {
        sm: "max-w-2xl py-4 px-4",
        md: "max-w-4xl py-5 px-4 sm:px-6",
        lg: "max-w-6xl py-6 px-4 sm:px-6 lg:px-8",
        xl: "max-w-7xl py-6 px-4 sm:px-6 lg:px-8",
        full: "max-w-full py-8 px-4 sm:px-6 lg:px-8"
      }
    },
    defaultVariants: {
      size: "xl"
    }
  }
), S = y(({
  className: d,
  tone: s = "contrast",
  size: i = "xl",
  position: x = "relative",
  navigation: a = [],
  currentPath: c = "",
  onNavigate: n,
  children: u,
  ...h
}, g) => /* @__PURE__ */ e(b.Provider, { value: { tone: s, size: i }, children: /* @__PURE__ */ e(
  "footer",
  {
    ref: g,
    className: o(L({ tone: s, position: x }), d),
    ...h,
    children: /* @__PURE__ */ l("div", { className: o(O({ size: i })), children: [
      a.length > 0 && !u && /* @__PURE__ */ e(
        w,
        {
          navigation: a,
          currentPath: c,
          onNavigate: n
        }
      ),
      u
    ] })
  }
) }));
S.displayName = "Footer";
const w = y(({
  className: d,
  navigation: s = [],
  currentPath: i = "",
  onNavigate: x,
  logo: a,
  social: c,
  copyright: n,
  ...u
}, h) => {
  const { tone: g } = z(b), N = (r) => {
    r.href && x ? x(r.href, r) : r.onClick && r.onClick();
  }, k = (r = !1) => {
    const f = "text-sm transition-colors cursor-pointer";
    switch (g) {
      case "subtle":
        return o(f, r ? "text-foreground" : "text-muted-foreground hover:text-foreground");
      case "brand":
        return o(f, r ? "text-primary-foreground" : "text-primary-foreground/80 hover:text-primary-foreground");
      case "contrast":
        return o(f, r ? "text-zinc-100" : "text-zinc-300 hover:text-zinc-100");
      default:
        return o(f, r ? "text-foreground" : "text-muted-foreground hover:text-foreground");
    }
  };
  return /* @__PURE__ */ l(
    "div",
    {
      ref: h,
      className: o("space-y-4", d),
      ...u,
      children: [
        /* @__PURE__ */ l("div", { className: "flex flex-col sm:flex-row items-center justify-between gap-4", children: [
          a && /* @__PURE__ */ e("div", { className: "flex-shrink-0", children: a }),
          s.length > 0 && /* @__PURE__ */ e("nav", { className: "flex flex-wrap items-center justify-center gap-6", children: s.map((r) => {
            const f = r.href ? i === r.href : r.isActive;
            return /* @__PURE__ */ e(
              "button",
              {
                onClick: () => N(r),
                className: o(k(f), r.className),
                children: r.label
              },
              r.key
            );
          }) }),
          c && /* @__PURE__ */ e("div", { className: "flex-shrink-0", children: c })
        ] }),
        n && /* @__PURE__ */ l(V, { children: [
          /* @__PURE__ */ e(F, {}),
          /* @__PURE__ */ e("div", { className: "text-center", children: /* @__PURE__ */ e("p", { className: o(
            "text-sm",
            g === "contrast" ? "text-zinc-400" : "text-muted-foreground"
          ), children: n }) })
        ] })
      ]
    }
  );
});
w.displayName = "FooterBasic";
const j = y(({
  className: d,
  brand: s,
  columns: i = [],
  newsletter: x,
  social: a,
  legal: c = [],
  currentPath: n = "",
  onNavigate: u,
  copyright: h,
  ...g
}, N) => {
  const { tone: k } = z(b), r = (t) => {
    t.href && u ? u(t.href, t) : t.onClick && t.onClick();
  }, p = (() => {
    switch (k) {
      case "subtle":
        return {
          heading: "text-foreground",
          text: "text-muted-foreground",
          link: "text-muted-foreground hover:text-foreground"
        };
      case "brand":
        return {
          heading: "text-primary-foreground",
          text: "text-primary-foreground/70",
          link: "text-primary-foreground/70 hover:text-primary-foreground"
        };
      case "contrast":
        return {
          heading: "text-zinc-100",
          text: "text-zinc-300",
          link: "text-zinc-300 hover:text-zinc-100"
        };
      default:
        return {
          heading: "text-foreground",
          text: "text-muted-foreground",
          link: "text-muted-foreground hover:text-foreground"
        };
    }
  })();
  return /* @__PURE__ */ l(
    "div",
    {
      ref: N,
      className: o("space-y-8", d),
      ...g,
      children: [
        /* @__PURE__ */ l("div", { className: "grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5", children: [
          s && /* @__PURE__ */ e("div", { className: "lg:col-span-2 space-y-4", children: s }),
          i.slice(0, 3).map((t) => {
            var v;
            return /* @__PURE__ */ l("div", { className: "space-y-3", children: [
              /* @__PURE__ */ e("h4", { className: o("text-sm font-semibold", p.heading), children: t.title }),
              /* @__PURE__ */ e("ul", { className: "space-y-2", children: (v = t.items) == null ? void 0 : v.map((m) => {
                const B = m.href ? n === m.href : m.isActive;
                return /* @__PURE__ */ e("li", { children: /* @__PURE__ */ e(
                  "button",
                  {
                    onClick: () => r(m),
                    className: o(
                      "text-sm transition-colors cursor-pointer block",
                      B ? p.heading : p.link,
                      m.className
                    ),
                    children: m.label
                  }
                ) }, m.key);
              }) })
            ] }, t.key);
          })
        ] }),
        /* @__PURE__ */ l("div", { className: "space-y-4", children: [
          /* @__PURE__ */ e(F, {}),
          /* @__PURE__ */ l("div", { className: "flex flex-col sm:flex-row items-center justify-between gap-4", children: [
            h && /* @__PURE__ */ e("p", { className: o("text-sm", p.text), children: h }),
            c.length > 0 && /* @__PURE__ */ e("div", { className: "flex items-center gap-4", children: c.map((t) => {
              const v = t.href ? n === t.href : t.isActive;
              return /* @__PURE__ */ e(
                "button",
                {
                  onClick: () => r(t),
                  className: o(
                    "text-sm transition-colors cursor-pointer",
                    v ? p.heading : p.link,
                    t.className
                  ),
                  children: t.label
                },
                t.key
              );
            }) }),
            a && /* @__PURE__ */ e("div", { className: "flex items-center gap-2", children: a })
          ] })
        ] })
      ]
    }
  );
});
j.displayName = "FooterAdvanced";
const A = y(({
  className: d,
  links: s = [],
  ...i
}, x) => {
  const { tone: a } = z(b), c = () => {
    switch (a) {
      case "subtle":
        return "text-muted-foreground hover:text-foreground hover:bg-background/50";
      case "brand":
        return "text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary-foreground/10";
      case "contrast":
        return "text-zinc-300 hover:text-zinc-100 hover:bg-zinc-800/50";
      default:
        return "text-muted-foreground hover:text-foreground hover:bg-muted";
    }
  };
  return /* @__PURE__ */ e(
    "div",
    {
      ref: x,
      className: o("flex items-center gap-1", d),
      ...i,
      children: s.map((n) => /* @__PURE__ */ e(
        T,
        {
          variant: "ghost",
          size: "icon",
          className: o("h-8 w-8", c(), n.className),
          onClick: n.onClick,
          title: n.label,
          children: /* @__PURE__ */ e(n.icon, { className: "h-4 w-4" })
        },
        n.key
      ))
    }
  );
});
A.displayName = "FooterSocial";
const J = Object.assign(S, {
  Basic: w,
  Advanced: j,
  Social: A
});
export {
  J as Footer,
  j as FooterAdvanced,
  w as FooterBasic,
  A as FooterSocial
};
//# sourceMappingURL=footer.js.map
