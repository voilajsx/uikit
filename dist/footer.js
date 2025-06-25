import { jsx as t, jsxs as s, Fragment as j } from "react/jsx-runtime";
import { createContext as B, forwardRef as y, useContext as N } from "react";
import { c as w } from "./index-DACAHwoB.js";
import { c as r } from "./utils-qaFjX9_3.js";
import { Button as V } from "./button.js";
import { Separator as z } from "./separator.js";
const v = B({
  variant: "default",
  size: "xl"
}), I = w(
  "w-full border-t transition-all duration-200",
  {
    variants: {
      variant: {
        default: "bg-background border-border text-foreground",
        muted: "bg-muted/30 border-border/50 text-foreground",
        primary: "bg-primary border-primary-foreground/20 text-primary-foreground",
        black: "bg-zinc-900 border-zinc-700/40 text-zinc-100"
      },
      sticky: {
        true: "sticky bottom-0 z-30",
        false: "relative"
      }
    },
    defaultVariants: {
      variant: "default",
      sticky: !1
    }
  }
), T = w(
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
), C = y(({
  className: i,
  variant: o = "default",
  size: c = "xl",
  sticky: d = !1,
  navigation: n = [],
  currentPath: l = "",
  onNavigate: a,
  children: m,
  ...f
}, p) => /* @__PURE__ */ t(v.Provider, { value: { variant: o, size: c }, children: /* @__PURE__ */ t(
  "footer",
  {
    ref: p,
    className: r(I({ variant: o, sticky: d }), i),
    ...f,
    children: /* @__PURE__ */ s("div", { className: r(T({ size: c })), children: [
      n.length > 0 && !m && /* @__PURE__ */ t(
        k,
        {
          navigation: n,
          currentPath: l,
          onNavigate: a
        }
      ),
      m
    ] })
  }
) }));
C.displayName = "Footer";
const k = y(({
  className: i,
  navigation: o = [],
  currentPath: c = "",
  onNavigate: d,
  logo: n,
  links: l = [],
  // Legacy support
  social: a,
  copyright: m,
  ...f
}, p) => {
  const { variant: b } = N(v), x = o.length > 0 ? o : l.map((e) => ({
    key: e.key,
    label: e.label,
    onClick: e.onClick,
    className: e.className
  })), g = (e) => {
    "path" in e && e.path && d ? d(e.path, e) : e.onClick && e.onClick();
  }, h = (e = !1) => {
    const u = "text-sm transition-colors cursor-pointer";
    switch (b) {
      case "muted":
        return r(u, e ? "text-foreground" : "text-muted-foreground hover:text-foreground");
      case "primary":
        return r(u, e ? "text-primary-foreground" : "text-primary-foreground/80 hover:text-primary-foreground");
      case "black":
        return r(u, e ? "text-zinc-100" : "text-zinc-300 hover:text-zinc-100");
      default:
        return r(u, e ? "text-foreground" : "text-muted-foreground hover:text-foreground");
    }
  };
  return /* @__PURE__ */ s(
    "div",
    {
      ref: p,
      className: r("space-y-4", i),
      ...f,
      children: [
        /* @__PURE__ */ s("div", { className: "flex flex-col sm:flex-row items-center justify-between gap-4", children: [
          n && /* @__PURE__ */ t("div", { className: "flex-shrink-0", children: n }),
          x.length > 0 && /* @__PURE__ */ t("nav", { className: "flex flex-wrap items-center justify-center gap-6", children: x.map((e) => {
            const u = "path" in e ? c === e.path : !1;
            return /* @__PURE__ */ t(
              "button",
              {
                onClick: () => g(e),
                className: r(h(u), e.className),
                children: e.label
              },
              e.key
            );
          }) }),
          a && /* @__PURE__ */ t("div", { className: "flex-shrink-0", children: a })
        ] }),
        m && /* @__PURE__ */ s(j, { children: [
          /* @__PURE__ */ t(z, {}),
          /* @__PURE__ */ t("div", { className: "text-center", children: /* @__PURE__ */ t("p", { className: r(
            "text-sm",
            b === "black" ? "text-zinc-400" : "text-muted-foreground"
          ), children: m }) })
        ] })
      ]
    }
  );
});
k.displayName = "FooterBasic";
const F = y(({
  className: i,
  brand: o,
  columns: c = [],
  newsletter: d,
  social: n,
  legal: l,
  copyright: a,
  ...m
}, f) => {
  const { variant: p } = N(v), x = (() => {
    switch (p) {
      case "muted":
        return {
          heading: "text-foreground",
          text: "text-muted-foreground",
          link: "text-muted-foreground hover:text-foreground"
        };
      case "primary":
        return {
          heading: "text-primary-foreground",
          text: "text-primary-foreground/70",
          link: "text-primary-foreground/70 hover:text-primary-foreground"
        };
      case "black":
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
  return /* @__PURE__ */ s(
    "div",
    {
      ref: f,
      className: r("space-y-8", i),
      ...m,
      children: [
        /* @__PURE__ */ s("div", { className: "grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5", children: [
          o && /* @__PURE__ */ t("div", { className: "lg:col-span-2 space-y-4", children: o }),
          c.slice(0, 3).map((g) => {
            var h;
            return /* @__PURE__ */ s("div", { className: "space-y-3", children: [
              /* @__PURE__ */ t("h4", { className: r("text-sm font-semibold", x.heading), children: g.title }),
              /* @__PURE__ */ t("ul", { className: "space-y-2", children: (h = g.links) == null ? void 0 : h.map((e) => /* @__PURE__ */ t("li", { children: /* @__PURE__ */ t(
                "button",
                {
                  onClick: e.onClick,
                  className: r(
                    "text-sm transition-colors cursor-pointer block",
                    x.link,
                    e.className
                  ),
                  children: e.label
                }
              ) }, e.key)) })
            ] }, g.key);
          })
        ] }),
        /* @__PURE__ */ s("div", { className: "space-y-4", children: [
          /* @__PURE__ */ t(z, {}),
          /* @__PURE__ */ s("div", { className: "flex flex-col sm:flex-row items-center justify-between gap-4", children: [
            a && /* @__PURE__ */ t("p", { className: r("text-sm", x.text), children: a }),
            l && /* @__PURE__ */ t("div", { className: "flex items-center gap-4", children: l }),
            n && /* @__PURE__ */ t("div", { className: "flex items-center gap-2", children: n })
          ] })
        ] })
      ]
    }
  );
});
F.displayName = "FooterAdvanced";
const S = y(({
  className: i,
  links: o = [],
  ...c
}, d) => {
  const { variant: n } = N(v), l = () => {
    switch (n) {
      case "muted":
        return "text-muted-foreground hover:text-foreground hover:bg-background/50";
      case "primary":
        return "text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary-foreground/10";
      case "black":
        return "text-zinc-300 hover:text-zinc-100 hover:bg-zinc-800/50";
      default:
        return "text-muted-foreground hover:text-foreground hover:bg-muted";
    }
  };
  return /* @__PURE__ */ t(
    "div",
    {
      ref: d,
      className: r("flex items-center gap-1", i),
      ...c,
      children: o.map((a) => /* @__PURE__ */ t(
        V,
        {
          variant: "ghost",
          size: "icon",
          className: r("h-8 w-8", l(), a.className),
          onClick: a.onClick,
          title: a.label,
          children: /* @__PURE__ */ t(a.icon, { className: "h-4 w-4" })
        },
        a.key
      ))
    }
  );
});
S.displayName = "FooterSocial";
const D = Object.assign(C, {
  Basic: k,
  Advanced: F,
  Social: S
});
export {
  D as Footer,
  F as FooterAdvanced,
  k as FooterBasic,
  S as FooterSocial
};
//# sourceMappingURL=footer.js.map
