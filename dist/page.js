import { jsx as e, jsxs as y, Fragment as z } from "react/jsx-runtime";
import { createContext as k, forwardRef as u, useContext as H } from "react";
import { c as F } from "./index-DACAHwoB.js";
import { c as g } from "./utils-qaFjX9_3.js";
import { Header as L, HeaderLogo as T, HeaderNav as j } from "./header.js";
import { Footer as S } from "./footer.js";
import { Container as R } from "./container.js";
const P = k({
  scheme: "default",
  tone: "brand",
  size: "xl"
}), V = F(
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
), N = u(({
  scheme: r = "default",
  tone: o = "clean",
  size: a = "xl",
  className: n,
  children: d
}, s) => /* @__PURE__ */ e(P.Provider, { value: { scheme: r, tone: o, size: a }, children: /* @__PURE__ */ e(
  "div",
  {
    ref: s,
    className: g(V({ tone: o }), n),
    children: d
  }
) }));
N.displayName = "PageLayout";
const v = u(({
  tone: r,
  size: o,
  position: a = "sticky",
  navigation: n = [],
  currentPath: d = "",
  onNavigate: s,
  logo: x,
  title: i,
  actions: l,
  className: m
}, c) => {
  const { tone: p, size: f } = h();
  return /* @__PURE__ */ y(
    L,
    {
      ref: c,
      tone: r || p,
      size: o || f,
      position: a,
      className: m,
      children: [
        /* @__PURE__ */ e(T, { children: x || i && /* @__PURE__ */ e("span", { className: "text-xl font-bold", children: i }) }),
        n.length > 0 && /* @__PURE__ */ e(
          j,
          {
            navigation: n,
            currentPath: d,
            onNavigate: s
          }
        ),
        l && /* @__PURE__ */ e("div", { className: "ml-auto flex items-center gap-2", children: l })
      ]
    }
  );
});
v.displayName = "PageHeader";
const w = u(({
  tone: r,
  size: o,
  sidebar: a = "none",
  navigation: n = [],
  sidebarContent: d,
  currentPath: s = "",
  onNavigate: x,
  sidebarPosition: i = "relative",
  className: l,
  children: m
}, c) => {
  const { scheme: p, tone: f, size: t } = h(), b = a !== "none" ? a : p === "sidebar" ? "left" : "none";
  return b === "none" ? /* @__PURE__ */ e(
    "main",
    {
      ref: c,
      className: g("flex-1", l),
      children: /* @__PURE__ */ e("div", { className: g(
        "mx-auto",
        (o || t) === "sm" && "max-w-2xl px-4 py-6",
        (o || t) === "md" && "max-w-4xl px-4 sm:px-6 py-8",
        (o || t) === "lg" && "max-w-6xl px-4 sm:px-6 lg:px-8 py-8",
        (o || t) === "xl" && "max-w-7xl px-4 sm:px-6 lg:px-8 py-8",
        (o || t) === "full" && "max-w-full px-4 sm:px-6 lg:px-8 py-8"
      ), children: m })
    }
  ) : /* @__PURE__ */ e("div", { ref: c, className: g("flex-1", l), children: /* @__PURE__ */ e(
    R,
    {
      sidebar: b,
      navigation: n,
      sidebarContent: d,
      currentPath: s,
      onNavigate: x,
      sidebarPosition: i,
      tone: r || f,
      size: o || t,
      children: m
    }
  ) });
});
w.displayName = "PageContent";
const C = u(({
  tone: r,
  size: o,
  position: a = "relative",
  navigation: n = [],
  currentPath: d = "",
  onNavigate: s,
  copyright: x,
  className: i,
  children: l
}, m) => {
  const { tone: c, size: p } = h();
  return /* @__PURE__ */ e(
    S,
    {
      ref: m,
      tone: r || (c === "brand" ? "subtle" : c),
      size: o || p,
      position: a,
      className: i,
      children: l || /* @__PURE__ */ y(z, { children: [
        n.length > 0 && /* @__PURE__ */ e("div", { className: "flex flex-wrap justify-center gap-6 py-4", children: n.map((t) => /* @__PURE__ */ e(
          "button",
          {
            onClick: () => {
              t.href && s ? s(t.href, t) : t.onClick && t.onClick();
            },
            className: "text-sm text-muted-foreground hover:text-foreground transition-colors",
            children: t.label
          },
          t.key
        )) }),
        x && /* @__PURE__ */ e("div", { className: "text-center py-4 border-t border-border", children: /* @__PURE__ */ e("p", { className: "text-sm text-muted-foreground", children: x }) })
      ] })
    }
  );
});
C.displayName = "PageFooter";
const h = () => {
  const r = H(P);
  if (!r)
    throw new Error("usePage must be used within a PageLayout component");
  return r;
}, I = Object.assign(N, {
  Header: v,
  Content: w,
  Footer: C
});
export {
  w as PageContent,
  C as PageFooter,
  v as PageHeader,
  I as PageLayout,
  h as usePage
};
//# sourceMappingURL=page.js.map
