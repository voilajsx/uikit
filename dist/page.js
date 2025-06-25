import { jsx as e, jsxs as p } from "react/jsx-runtime";
import { createContext as S, forwardRef as m, useContext as E } from "react";
import { c as g } from "./index-DACAHwoB.js";
import { c as f } from "./utils-qaFjX9_3.js";
import { Header as N, HeaderLogo as v, HeaderNav as h } from "./header.js";
import { Footer as w } from "./footer.js";
const z = S({
  variant: "default",
  size: "xl"
}), I = g(
  "min-h-screen flex flex-col",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        muted: "bg-muted/20 text-foreground",
        primary: "bg-primary/5 text-foreground",
        black: "bg-zinc-900 text-zinc-100"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
), O = g(
  "flex-1 w-full"
), R = g(
  "mx-auto",
  {
    variants: {
      size: {
        sm: "max-w-2xl px-4 py-6",
        md: "max-w-4xl px-4 sm:px-6 py-8",
        lg: "max-w-6xl px-4 sm:px-6 lg:px-8 py-8",
        xl: "max-w-7xl px-4 sm:px-6 lg:px-8 py-8",
        full: "max-w-full px-4 sm:px-6 lg:px-8 py-8"
      }
    },
    defaultVariants: {
      size: "xl"
    }
  }
), k = m(({
  className: r,
  variant: n = "default",
  size: a = "xl",
  sticky: l = !0,
  navigation: o = [],
  currentPath: s = "",
  onNavigate: c,
  title: x,
  logo: u,
  headerActions: i,
  footerNavigation: t = [],
  footerContent: L,
  copyright: C,
  children: j
}, F) => {
  const P = t.length > 0 ? t : o;
  return /* @__PURE__ */ e(z.Provider, { value: { variant: n, size: a }, children: /* @__PURE__ */ p(
    "div",
    {
      ref: F,
      className: f(I({ variant: n }), r),
      children: [
        /* @__PURE__ */ p(
          N,
          {
            variant: n,
            size: a,
            sticky: l,
            children: [
              /* @__PURE__ */ e(v, { children: u || x && /* @__PURE__ */ e("span", { className: "text-xl font-bold", children: x }) }),
              o.length > 0 && /* @__PURE__ */ e(
                h,
                {
                  navigation: o,
                  currentPath: s,
                  onNavigate: c
                }
              ),
              i && /* @__PURE__ */ e("div", { className: "ml-auto flex items-center gap-2", children: i })
            ]
          }
        ),
        /* @__PURE__ */ e(y, { size: a, children: j }),
        /* @__PURE__ */ p(
          w,
          {
            variant: n,
            size: a,
            children: [
              P.length > 0 && /* @__PURE__ */ e("div", { className: "flex flex-wrap justify-center gap-6 py-4", children: P.map((d) => /* @__PURE__ */ e(
                "button",
                {
                  onClick: () => {
                    d.path && c ? c(d.path, d) : d.onClick && d.onClick();
                  },
                  className: "text-sm text-muted-foreground hover:text-foreground transition-colors",
                  children: d.label
                },
                d.key
              )) }),
              L,
              C && /* @__PURE__ */ e("div", { className: "text-center py-4 border-t border-border", children: /* @__PURE__ */ e("p", { className: "text-sm text-muted-foreground", children: C }) })
            ]
          }
        )
      ]
    }
  ) });
});
k.displayName = "PageLayout";
const V = m(({
  variant: r,
  size: n,
  sticky: a = !0,
  navigation: l = [],
  currentPath: o = "",
  onNavigate: s,
  className: c,
  children: x
}, u) => {
  const { variant: i, size: t } = b();
  return /* @__PURE__ */ p(
    N,
    {
      variant: r || i,
      size: n || t,
      sticky: a,
      className: c,
      children: [
        x,
        l.length > 0 && /* @__PURE__ */ e(
          h,
          {
            navigation: l,
            currentPath: o,
            onNavigate: s
          }
        )
      ]
    }
  );
});
V.displayName = "PageHeader";
const y = m(({
  size: r,
  className: n,
  children: a
}, l) => {
  const { size: o } = b(), s = r || o;
  return /* @__PURE__ */ e(
    "main",
    {
      ref: l,
      className: f(O(), n),
      children: /* @__PURE__ */ e("div", { className: f(R({ size: s })), children: a })
    }
  );
});
y.displayName = "PageContent";
const H = m(({
  variant: r,
  size: n,
  navigation: a = [],
  currentPath: l = "",
  onNavigate: o,
  className: s,
  children: c
}, x) => {
  const { variant: u, size: i } = b();
  return /* @__PURE__ */ p(
    w,
    {
      variant: r || u,
      size: n || i,
      className: s,
      children: [
        a.length > 0 && /* @__PURE__ */ e("div", { className: "flex flex-wrap justify-center gap-6 py-4", children: a.map((t) => /* @__PURE__ */ e(
          "button",
          {
            onClick: () => {
              t.path && o ? o(t.path, t) : t.onClick && t.onClick();
            },
            className: "text-sm text-muted-foreground hover:text-foreground transition-colors",
            children: t.label
          },
          t.key
        )) }),
        c
      ]
    }
  );
});
H.displayName = "PageFooter";
const b = () => {
  const r = E(z);
  if (!r)
    throw new Error("usePage must be used within a PageLayout component");
  return r;
}, M = Object.assign(k, {
  Header: V,
  Content: y,
  Footer: H,
  Logo: v,
  Nav: h
});
export {
  y as PageContent,
  H as PageFooter,
  V as PageHeader,
  M as PageLayout,
  b as usePage
};
//# sourceMappingURL=page.js.map
