import { jsx as e, jsxs as f } from "react/jsx-runtime";
import { createContext as _, forwardRef as u, useContext as E } from "react";
import { c as h } from "./index-DACAHwoB.js";
import { c as x } from "./utils-qaFjX9_3.js";
import { Header as P, HeaderLogo as v, HeaderNav as b } from "./header.js";
import { Footer as z } from "./footer.js";
const V = _({
  scheme: "default",
  tone: "clean",
  size: "xl"
}), I = h(
  "min-h-screen flex flex-col",
  {
    variants: {
      scheme: {
        default: "",
        blog: "lg:grid lg:grid-cols-[1fr_300px] lg:gap-8",
        docs: "lg:grid lg:grid-cols-[250px_1fr] lg:gap-6",
        marketing: "space-y-0"
      },
      tone: {
        clean: "bg-background text-foreground",
        subtle: "bg-muted/20 text-foreground",
        brand: "bg-primary/5 text-foreground",
        contrast: "bg-zinc-900 text-zinc-100"
      }
    },
    defaultVariants: {
      scheme: "default",
      tone: "clean"
    }
  }
), O = h(
  "flex-1 w-full",
  {
    variants: {
      scheme: {
        default: "",
        blog: "lg:order-1",
        docs: "lg:order-2",
        marketing: ""
      }
    },
    defaultVariants: {
      scheme: "default"
    }
  }
), q = h(
  "mx-auto",
  {
    variants: {
      size: {
        sm: "max-w-2xl px-4 py-6",
        md: "max-w-4xl px-4 sm:px-6 py-8",
        lg: "max-w-6xl px-4 sm:px-6 lg:px-8 py-8",
        xl: "max-w-7xl px-4 sm:px-6 lg:px-8 py-8",
        full: "max-w-full px-4 sm:px-6 lg:px-8 py-8"
      },
      scheme: {
        default: "",
        blog: "lg:max-w-none lg:px-0",
        docs: "lg:max-w-none lg:px-0",
        marketing: ""
      }
    },
    defaultVariants: {
      size: "xl",
      scheme: "default"
    }
  }
), B = h(
  "hidden lg:block",
  {
    variants: {
      scheme: {
        default: "hidden",
        blog: "lg:order-2 bg-muted/30 p-6",
        docs: "lg:order-1 bg-muted/30 p-4 border-r border-border",
        marketing: "hidden"
      }
    },
    defaultVariants: {
      scheme: "default"
    }
  }
), H = u(({
  className: n,
  scheme: t = "default",
  tone: o = "clean",
  size: s = "xl",
  position: d = "sticky",
  navigation: l = [],
  currentPath: g = "",
  onNavigate: a,
  title: i,
  logo: p,
  headerActions: m,
  sidebarContent: c,
  footerNavigation: N = [],
  footerContent: j,
  copyright: C,
  children: F
}, T) => {
  const w = N.length > 0 ? N : l, R = o === "clean" ? "contrast" : o;
  return /* @__PURE__ */ e(V.Provider, { value: { scheme: t, tone: o, size: s }, children: /* @__PURE__ */ f(
    "div",
    {
      ref: T,
      className: x(I({ scheme: t, tone: o }), n),
      children: [
        /* @__PURE__ */ f(
          P,
          {
            tone: o,
            size: s,
            position: d,
            children: [
              /* @__PURE__ */ e(v, { children: p || i && /* @__PURE__ */ e("span", { className: "text-xl font-bold", children: i }) }),
              l.length > 0 && /* @__PURE__ */ e(
                b,
                {
                  navigation: l,
                  currentPath: g,
                  onNavigate: a
                }
              ),
              m && /* @__PURE__ */ e("div", { className: "ml-auto flex items-center gap-2", children: m })
            ]
          }
        ),
        /* @__PURE__ */ f("div", { className: x("flex-1", t !== "default" && "lg:grid"), children: [
          (t === "blog" || t === "docs") && /* @__PURE__ */ e("aside", { className: x(B({ scheme: t })), children: c || /* @__PURE__ */ f("div", { className: "space-y-4", children: [
            /* @__PURE__ */ e("h3", { className: "text-lg font-semibold", children: t === "blog" ? "Recent Posts" : "Navigation" }),
            t === "docs" && l.length > 0 && /* @__PURE__ */ e("nav", { className: "space-y-2", children: l.map((r) => /* @__PURE__ */ e(
              "button",
              {
                onClick: () => {
                  r.href && a ? a(r.href, r) : r.onClick && r.onClick();
                },
                className: x(
                  "block w-full text-left px-3 py-2 rounded-md text-sm transition-colors",
                  r.href && g === r.href ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground hover:bg-muted"
                ),
                children: r.label
              },
              r.key
            )) })
          ] }) }),
          /* @__PURE__ */ e(y, { scheme: t, size: s, children: F })
        ] }),
        /* @__PURE__ */ f(
          z,
          {
            tone: R,
            size: s,
            children: [
              w.length > 0 && /* @__PURE__ */ e("div", { className: "flex flex-wrap justify-center gap-6 py-4", children: w.map((r) => /* @__PURE__ */ e(
                "button",
                {
                  onClick: () => {
                    r.href && a ? a(r.href, r) : r.onClick && r.onClick();
                  },
                  className: "text-sm text-muted-foreground hover:text-foreground transition-colors",
                  children: r.label
                },
                r.key
              )) }),
              j,
              C && /* @__PURE__ */ e("div", { className: "text-center py-4 border-t border-border", children: /* @__PURE__ */ e("p", { className: "text-sm text-muted-foreground", children: C }) })
            ]
          }
        )
      ]
    }
  ) });
});
H.displayName = "PageLayout";
const L = u(({
  tone: n,
  size: t,
  position: o = "sticky",
  navigation: s = [],
  currentPath: d = "",
  onNavigate: l,
  className: g,
  children: a
}, i) => {
  const { tone: p, size: m } = k();
  return /* @__PURE__ */ f(
    P,
    {
      tone: n || p,
      size: t || m,
      position: o,
      className: g,
      children: [
        a,
        s.length > 0 && /* @__PURE__ */ e(
          b,
          {
            navigation: s,
            currentPath: d,
            onNavigate: l
          }
        )
      ]
    }
  );
});
L.displayName = "PageHeader";
const y = u(({
  scheme: n,
  size: t,
  className: o,
  children: s
}, d) => {
  const { scheme: l, size: g } = k(), a = n || l, i = t || g;
  return /* @__PURE__ */ e(
    "main",
    {
      ref: d,
      className: x(O({ scheme: a }), o),
      children: /* @__PURE__ */ e("div", { className: x(q({ size: i, scheme: a })), children: s })
    }
  );
});
y.displayName = "PageContent";
const S = u(({
  tone: n,
  size: t,
  navigation: o = [],
  currentPath: s = "",
  onNavigate: d,
  className: l,
  children: g
}, a) => {
  const { tone: i, size: p } = k();
  return /* @__PURE__ */ f(
    z,
    {
      tone: n || (i === "clean" ? "contrast" : i),
      size: t || p,
      className: l,
      children: [
        o.length > 0 && /* @__PURE__ */ e("div", { className: "flex flex-wrap justify-center gap-6 py-4", children: o.map((c) => /* @__PURE__ */ e(
          "button",
          {
            onClick: () => {
              c.href && d ? d(c.href, c) : c.onClick && c.onClick();
            },
            className: "text-sm text-muted-foreground hover:text-foreground transition-colors",
            children: c.label
          },
          c.key
        )) }),
        g
      ]
    }
  );
});
S.displayName = "PageFooter";
const k = () => {
  const n = E(V);
  if (!n)
    throw new Error("usePage must be used within a PageLayout component");
  return n;
}, U = Object.assign(H, {
  Header: L,
  Content: y,
  Footer: S,
  Logo: v,
  Nav: b
});
export {
  y as PageContent,
  S as PageFooter,
  L as PageHeader,
  U as PageLayout,
  k as usePage
};
//# sourceMappingURL=page.js.map
