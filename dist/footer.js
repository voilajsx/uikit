import { jsx as e, jsxs as i, Fragment as B } from "react/jsx-runtime";
import { createContext as V, forwardRef as v, useContext as k } from "react";
import { c as w } from "./index-Bke1qZdk.js";
import { c as t } from "./utils-CwJPJKOE.js";
import { Button as I } from "./button.js";
import { Separator as C } from "./separator.js";
const y = V({
  tone: "contrast",
  size: "xl"
}), T = w(
  "w-full border-t transition-all duration-200",
  {
    variants: {
      tone: {
        clean: "bg-background/80 backdrop-blur-sm border-border/40 text-foreground",
        subtle: "bg-muted/50 backdrop-blur-sm border-border/30 text-foreground",
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
), L = w(
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
), F = v(({
  className: g,
  tone: c = "contrast",
  size: n = "xl",
  position: m = "relative",
  navigation: l = [],
  currentPath: d = "",
  onNavigate: s,
  children: u,
  ...h
}, a) => /* @__PURE__ */ e(y.Provider, { value: { tone: c, size: n }, children: /* @__PURE__ */ e(
  "footer",
  {
    ref: a,
    className: t(T({ tone: c, position: m }), g),
    ...h,
    children: /* @__PURE__ */ i("div", { className: t(L({ size: n })), children: [
      l.length > 0 && !u && /* @__PURE__ */ e(
        z,
        {
          navigation: l,
          currentPath: d,
          onNavigate: s
        }
      ),
      u
    ] })
  }
) }));
F.displayName = "Footer";
const z = v(({
  className: g,
  navigation: c = [],
  currentPath: n = "",
  onNavigate: m,
  logo: l,
  social: d,
  copyright: s,
  ...u
}, h) => {
  const { tone: a } = k(y), N = (r) => {
    r.href && m ? m(r.href, r) : r.onClick && r.onClick();
  }, b = (r = !1) => {
    const f = "text-sm transition-colors cursor-pointer";
    switch (a) {
      case "subtle":
        return t(f, r ? "text-foreground" : "text-muted-foreground hover:text-foreground");
      case "brand":
        return t(f, r ? "text-primary-foreground" : "text-primary-foreground/80 hover:text-primary-foreground");
      case "contrast":
        return t(f, r ? "text-zinc-100" : "text-zinc-300 hover:text-zinc-100");
      default:
        return t(f, r ? "text-foreground" : "text-muted-foreground hover:text-foreground");
    }
  };
  return /* @__PURE__ */ i(
    "div",
    {
      ref: h,
      className: t("space-y-4", g),
      ...u,
      children: [
        /* @__PURE__ */ i("div", { className: "flex flex-col sm:flex-row items-center justify-between gap-4", children: [
          l && /* @__PURE__ */ e("div", { className: "flex-shrink-0", children: l }),
          c.length > 0 && /* @__PURE__ */ e("nav", { className: "flex flex-wrap items-center justify-center gap-6", children: c.map((r) => {
            const f = r.href ? n === r.href : r.isActive;
            return /* @__PURE__ */ e(
              "button",
              {
                onClick: () => N(r),
                className: t(b(f), r.className),
                children: r.label
              },
              r.key
            );
          }) }),
          d && /* @__PURE__ */ e("div", { className: "flex-shrink-0", children: d })
        ] }),
        s && /* @__PURE__ */ i(B, { children: [
          /* @__PURE__ */ e(C, { className: t(
            a === "brand" && "bg-primary-foreground/20",
            a === "contrast" && "bg-zinc-700"
          ) }),
          /* @__PURE__ */ e("div", { className: "text-center", children: /* @__PURE__ */ e("p", { className: t(
            "text-sm",
            a === "contrast" && "text-zinc-400",
            a === "brand" && "text-primary-foreground/80",
            (a === "clean" || a === "subtle") && "text-muted-foreground"
          ), children: s }) })
        ] })
      ]
    }
  );
});
z.displayName = "FooterBasic";
const S = v(({
  className: g,
  brand: c,
  columns: n = [],
  newsletter: m,
  social: l,
  legal: d = [],
  currentPath: s = "",
  onNavigate: u,
  copyright: h,
  ...a
}, N) => {
  const { tone: b } = k(y), r = (o) => {
    o.href && u ? u(o.href, o) : o.onClick && o.onClick();
  }, p = (() => {
    switch (b) {
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
  return /* @__PURE__ */ i(
    "div",
    {
      ref: N,
      className: t("space-y-8", g),
      ...a,
      children: [
        /* @__PURE__ */ i("div", { className: "grid gap-8 grid-cols-1 md:grid-cols-6 lg:grid-cols-6", children: [
          c && /* @__PURE__ */ i("div", { className: "col-span-2", children: [
            " ",
            c
          ] }),
          /* @__PURE__ */ e("div", { className: "col-span-4", children: n.length > 0 && /* @__PURE__ */ e("div", { className: t(
            "grid gap-6",
            // No columns: hidden
            n.length === 0 && "hidden",
            // 1 column: single column
            n.length === 1 && "grid-cols-1",
            // 2 columns: responsive 1→2
            n.length === 2 && "grid-cols-2 sm:grid-cols-2 md:grid-cols-3",
            // 3 columns: responsive 1→2→3
            n.length === 3 && "grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3",
            // 4+ columns: responsive 1→2→4
            n.length >= 4 && "grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
          ), children: n.slice(0, 4).map((o) => /* @__PURE__ */ i("div", { className: "space-y-3", children: [
            /* @__PURE__ */ e("h4", { className: t("text-sm font-semibold", p.heading), children: o.title }),
            /* @__PURE__ */ e("ul", { className: "space-y-2", children: o.items?.map((x) => {
              const A = x.href ? s === x.href : x.isActive;
              return /* @__PURE__ */ e("li", { children: /* @__PURE__ */ e(
                "button",
                {
                  onClick: () => r(x),
                  className: t(
                    "text-sm transition-colors cursor-pointer block",
                    A ? p.heading : p.link,
                    x.className
                  ),
                  children: x.label
                }
              ) }, x.key);
            }) })
          ] }, o.key)) }) })
        ] }),
        /* @__PURE__ */ i("div", { className: "space-y-4", children: [
          /* @__PURE__ */ e(C, { className: t(
            b === "brand" && "bg-primary-foreground/20",
            b === "contrast" && "bg-zinc-700"
          ) }),
          /* @__PURE__ */ i("div", { className: "flex flex-col sm:flex-row items-center justify-between gap-4", children: [
            h && /* @__PURE__ */ e("p", { className: t("text-sm", p.text), children: h }),
            d.length > 0 && /* @__PURE__ */ e("div", { className: "flex items-center gap-4", children: d.map((o) => {
              const x = o.href ? s === o.href : o.isActive;
              return /* @__PURE__ */ e(
                "button",
                {
                  onClick: () => r(o),
                  className: t(
                    "text-sm transition-colors cursor-pointer",
                    x ? p.heading : p.link,
                    o.className
                  ),
                  children: o.label
                },
                o.key
              );
            }) }),
            l && /* @__PURE__ */ e("div", { className: "flex items-center gap-2", children: l })
          ] })
        ] })
      ]
    }
  );
});
S.displayName = "FooterAdvanced";
const j = v(({
  className: g,
  links: c = [],
  ...n
}, m) => {
  const { tone: l } = k(y), d = () => {
    switch (l) {
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
      ref: m,
      className: t("flex items-center gap-1", g),
      ...n,
      children: c.map((s) => /* @__PURE__ */ e(
        I,
        {
          variant: "ghost",
          size: "icon",
          className: t("h-8 w-8 cursor-pointer", d(), s.className),
          onClick: s.onClick,
          title: s.label,
          children: /* @__PURE__ */ e(s.icon, { className: "h-4 w-4" })
        },
        s.key
      ))
    }
  );
});
j.displayName = "FooterSocial";
const H = Object.assign(F, {
  Basic: z,
  Advanced: S,
  Social: j
});
export {
  H as Footer,
  S as FooterAdvanced,
  z as FooterBasic,
  j as FooterSocial
};
//# sourceMappingURL=footer.js.map
