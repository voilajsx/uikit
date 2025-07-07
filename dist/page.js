import { jsx as e, jsxs as x, Fragment as I } from "react/jsx-runtime";
import * as R from "react";
import { createContext as V, forwardRef as y, useContext as D } from "react";
import { c as E } from "./index-DACAHwoB.js";
import { c as b } from "./utils-qaFjX9_3.js";
import { Header as O, HeaderLogo as q, HeaderNav as A } from "./header.js";
import { Footer as G } from "./footer.js";
import { Container as J } from "./container.js";
import { Breadcrumb as K, BreadcrumbList as M, BreadcrumbItem as Q, BreadcrumbLink as U, BreadcrumbPage as W, BreadcrumbSeparator as X } from "./breadcrumb.js";
const N = V({
  scheme: "default",
  tone: "brand",
  size: "xl"
}), Y = E(
  "min-h-screen flex flex-col",
  {
    variants: {
      tone: {
        clean: "bg-background text-foreground",
        subtle: "bg-background text-foreground",
        brand: "bg-background text-foreground",
        contrast: "bg-zinc-900 text-zinc-100"
      }
    },
    defaultVariants: {
      tone: "clean"
    }
  }
), z = y(({
  scheme: o = "default",
  tone: n = "clean",
  size: i = "xl",
  className: s,
  children: p
}, m) => /* @__PURE__ */ e(N.Provider, { value: { scheme: o, tone: n, size: i }, children: /* @__PURE__ */ e(
  "div",
  {
    ref: m,
    className: b(Y({ tone: n }), s),
    children: p
  }
) }));
z.displayName = "PageLayout";
const L = y(({
  tone: o,
  size: n,
  position: i = "sticky",
  navigation: s = [],
  currentPath: p = "",
  onNavigate: m,
  logo: t,
  title: f,
  actions: l,
  className: c
}, d) => {
  const { tone: u, size: g } = C();
  return /* @__PURE__ */ x(
    O,
    {
      ref: d,
      tone: o || u,
      size: n || g,
      position: i,
      className: c,
      children: [
        /* @__PURE__ */ e(q, { children: t || f && /* @__PURE__ */ e("span", { className: "text-xl font-bold", children: f }) }),
        s.length > 0 && /* @__PURE__ */ e(
          A,
          {
            navigation: s,
            currentPath: p,
            onNavigate: m
          }
        ),
        l && /* @__PURE__ */ e("div", { className: "ml-auto flex items-center gap-2", children: l })
      ]
    }
  );
});
L.displayName = "PageHeader";
const F = y(({
  tone: o,
  size: n,
  sidebar: i = "none",
  navigation: s = [],
  sidebarContent: p,
  currentPath: m = "",
  onNavigate: t,
  sidebarPosition: f = "relative",
  breadcrumbs: l = [],
  onBreadcrumbNavigate: c,
  title: d,
  className: u,
  children: g
}, a) => {
  const { scheme: T, tone: S, size: h } = C(), k = i !== "none" ? i : T === "sidebar" ? "left" : "none", j = (r) => {
    c ? c(r) : t && t(r, {
      key: r,
      label: r,
      href: r
    });
  }, w = () => l.length === 0 ? null : /* @__PURE__ */ e("div", { className: "mb-6", children: /* @__PURE__ */ e(K, { children: /* @__PURE__ */ e(M, { children: l.map((r, P) => /* @__PURE__ */ x(R.Fragment, { children: [
    /* @__PURE__ */ e(Q, { children: r.href ? /* @__PURE__ */ e(
      U,
      {
        asChild: !!(c || t),
        ...c || t ? {
          onClick: (B) => {
            B.preventDefault(), j(r.href);
          }
        } : { href: r.href },
        children: c || t ? /* @__PURE__ */ e("button", { type: "button", children: r.label }) : r.label
      }
    ) : /* @__PURE__ */ e(W, { children: r.label }) }),
    P < l.length - 1 && /* @__PURE__ */ e(X, {})
  ] }, P)) }) }) }), v = () => d ? /* @__PURE__ */ e("h1", { className: "text-2xl sm:text-3xl font-bold text-foreground mb-4", children: d }) : null;
  return k === "none" ? /* @__PURE__ */ e(
    "main",
    {
      ref: a,
      className: b("flex-1", u),
      children: /* @__PURE__ */ x("div", { className: b(
        "mx-auto",
        (n || h) === "sm" && "max-w-2xl px-4 py-6",
        (n || h) === "md" && "max-w-4xl px-4 sm:px-6 py-8",
        (n || h) === "lg" && "max-w-6xl px-4 sm:px-6 lg:px-8 py-8",
        (n || h) === "xl" && "max-w-7xl px-4 sm:px-6 lg:px-8 py-8",
        (n || h) === "full" && "max-w-full px-4 sm:px-6 lg:px-8 py-8"
      ), children: [
        (d || l.length > 0) && /* @__PURE__ */ x("div", { className: "mb-8", children: [
          w(),
          v()
        ] }),
        g
      ] })
    }
  ) : /* @__PURE__ */ e("div", { ref: a, className: b("flex-1", u), children: /* @__PURE__ */ x(
    J,
    {
      sidebar: k,
      navigation: s,
      sidebarContent: p,
      currentPath: m,
      onNavigate: t,
      sidebarPosition: f,
      tone: o || S,
      size: n || h,
      children: [
        (d || l.length > 0) && /* @__PURE__ */ x("div", { className: "mb-8", children: [
          w(),
          v()
        ] }),
        g
      ]
    }
  ) });
});
F.displayName = "PageContent";
const H = y(({
  tone: o,
  size: n,
  position: i = "relative",
  navigation: s = [],
  currentPath: p = "",
  onNavigate: m,
  copyright: t,
  className: f,
  children: l
}, c) => {
  const { tone: d, size: u } = C();
  return /* @__PURE__ */ e(
    G,
    {
      ref: c,
      tone: o || (d === "brand" ? "subtle" : d),
      size: n || u,
      position: i,
      className: f,
      children: l || /* @__PURE__ */ x(I, { children: [
        s.length > 0 && /* @__PURE__ */ e("div", { className: "flex flex-wrap justify-center gap-6 py-4", children: s.map((a) => /* @__PURE__ */ e(
          "button",
          {
            onClick: () => {
              a.href && m ? m(a.href, a) : a.onClick && a.onClick();
            },
            className: "text-sm text-muted-foreground hover:text-foreground transition-colors",
            children: a.label
          },
          a.key
        )) }),
        t && /* @__PURE__ */ e("div", { className: "text-center py-4 border-t border-border", children: /* @__PURE__ */ e("p", { className: "text-sm text-muted-foreground", children: t }) })
      ] })
    }
  );
});
H.displayName = "PageFooter";
const C = () => {
  const o = D(N);
  if (!o)
    throw new Error("usePage must be used within a PageLayout component");
  return o;
}, le = Object.assign(z, {
  Header: L,
  Content: F,
  Footer: H
});
export {
  F as PageContent,
  H as PageFooter,
  L as PageHeader,
  le as PageLayout,
  C as usePage
};
//# sourceMappingURL=page.js.map
