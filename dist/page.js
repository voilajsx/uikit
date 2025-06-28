import { jsx as e, jsxs as x, Fragment as S } from "react/jsx-runtime";
import * as R from "react";
import { createContext as B, forwardRef as N, useContext as V } from "react";
import { c as E } from "./index-DACAHwoB.js";
import { c as y } from "./utils-qaFjX9_3.js";
import { Header as I, HeaderLogo as O, HeaderNav as q } from "./header.js";
import { Footer as A } from "./footer.js";
import { Container as D } from "./container.js";
const k = B({
  scheme: "default",
  tone: "brand",
  size: "xl"
}), G = E(
  "min-h-screen flex flex-col",
  {
    variants: {
      tone: {
        clean: "bg-background text-foreground",
        subtle: "bg-muted/20 text-foreground",
        brand: "bg-primary/5 text-foreground",
        contrast: "bg-zinc-900 text-zinc-100"
      }
    },
    defaultVariants: {
      tone: "clean"
    }
  }
), z = N(({
  scheme: t = "default",
  tone: n = "clean",
  size: s = "xl",
  className: o,
  children: f
}, c) => /* @__PURE__ */ e(k.Provider, { value: { scheme: t, tone: n, size: s }, children: /* @__PURE__ */ e(
  "div",
  {
    ref: c,
    className: y(G({ tone: n }), o),
    children: f
  }
) }));
z.displayName = "PageLayout";
const F = N(({
  tone: t,
  size: n,
  position: s = "sticky",
  navigation: o = [],
  currentPath: f = "",
  onNavigate: c,
  logo: d,
  title: p,
  actions: a,
  className: i
}, m) => {
  const { tone: u, size: h } = v();
  return /* @__PURE__ */ x(
    I,
    {
      ref: m,
      tone: t || u,
      size: n || h,
      position: s,
      className: i,
      children: [
        /* @__PURE__ */ e(O, { children: d || p && /* @__PURE__ */ e("span", { className: "text-xl font-bold", children: p }) }),
        o.length > 0 && /* @__PURE__ */ e(
          q,
          {
            navigation: o,
            currentPath: f,
            onNavigate: c
          }
        ),
        a && /* @__PURE__ */ e("div", { className: "ml-auto flex items-center gap-2", children: a })
      ]
    }
  );
});
F.displayName = "PageHeader";
const H = N(({
  tone: t,
  size: n,
  sidebar: s = "none",
  navigation: o = [],
  sidebarContent: f,
  currentPath: c = "",
  onNavigate: d,
  sidebarPosition: p = "relative",
  breadcrumbs: a = [],
  title: i,
  className: m,
  children: u
}, h) => {
  const { scheme: l, tone: L, size: g } = v(), P = s !== "none" ? s : l === "sidebar" ? "left" : "none", j = (r) => {
    if (r.href && d) {
      const b = {
        key: r.href,
        label: r.label,
        href: r.href
      };
      d(r.href, b);
    }
  }, C = () => a.length === 0 ? null : /* @__PURE__ */ e("nav", { className: "flex items-center gap-2 text-sm text-muted-foreground mb-6", children: a.map((r, b) => /* @__PURE__ */ x(R.Fragment, { children: [
    b > 0 && /* @__PURE__ */ e("span", { className: "text-muted-foreground/60", children: "/" }),
    r.href ? /* @__PURE__ */ e(
      "button",
      {
        onClick: () => j(r),
        className: "hover:text-foreground transition-colors underline-offset-4 hover:underline",
        children: r.label
      }
    ) : /* @__PURE__ */ e("span", { className: "text-foreground font-medium", children: r.label })
  ] }, b)) }), w = () => i ? /* @__PURE__ */ e("h1", { className: "text-2xl sm:text-3xl font-bold text-foreground mb-4", children: i }) : null;
  return P === "none" ? /* @__PURE__ */ e(
    "main",
    {
      ref: h,
      className: y("flex-1", m),
      children: /* @__PURE__ */ x("div", { className: y(
        "mx-auto",
        (n || g) === "sm" && "max-w-2xl px-4 py-6",
        (n || g) === "md" && "max-w-4xl px-4 sm:px-6 py-8",
        (n || g) === "lg" && "max-w-6xl px-4 sm:px-6 lg:px-8 py-8",
        (n || g) === "xl" && "max-w-7xl px-4 sm:px-6 lg:px-8 py-8",
        (n || g) === "full" && "max-w-full px-4 sm:px-6 lg:px-8 py-8"
      ), children: [
        (i || a.length > 0) && /* @__PURE__ */ x("div", { className: "mb-8", children: [
          C(),
          w()
        ] }),
        u
      ] })
    }
  ) : /* @__PURE__ */ e("div", { ref: h, className: y("flex-1", m), children: /* @__PURE__ */ x(
    D,
    {
      sidebar: P,
      navigation: o,
      sidebarContent: f,
      currentPath: c,
      onNavigate: d,
      sidebarPosition: p,
      tone: t || L,
      size: n || g,
      children: [
        (i || a.length > 0) && /* @__PURE__ */ x("div", { className: "mb-8", children: [
          C(),
          w()
        ] }),
        u
      ]
    }
  ) });
});
H.displayName = "PageContent";
const T = N(({
  tone: t,
  size: n,
  position: s = "relative",
  navigation: o = [],
  currentPath: f = "",
  onNavigate: c,
  copyright: d,
  className: p,
  children: a
}, i) => {
  const { tone: m, size: u } = v();
  return /* @__PURE__ */ e(
    A,
    {
      ref: i,
      tone: t || (m === "brand" ? "subtle" : m),
      size: n || u,
      position: s,
      className: p,
      children: a || /* @__PURE__ */ x(S, { children: [
        o.length > 0 && /* @__PURE__ */ e("div", { className: "flex flex-wrap justify-center gap-6 py-4", children: o.map((l) => /* @__PURE__ */ e(
          "button",
          {
            onClick: () => {
              l.href && c ? c(l.href, l) : l.onClick && l.onClick();
            },
            className: "text-sm text-muted-foreground hover:text-foreground transition-colors",
            children: l.label
          },
          l.key
        )) }),
        d && /* @__PURE__ */ e("div", { className: "text-center py-4 border-t border-border", children: /* @__PURE__ */ e("p", { className: "text-sm text-muted-foreground", children: d }) })
      ] })
    }
  );
});
T.displayName = "PageFooter";
const v = () => {
  const t = V(k);
  if (!t)
    throw new Error("usePage must be used within a PageLayout component");
  return t;
}, Y = Object.assign(z, {
  Header: F,
  Content: H,
  Footer: T
});
export {
  H as PageContent,
  T as PageFooter,
  F as PageHeader,
  Y as PageLayout,
  v as usePage
};
//# sourceMappingURL=page.js.map
