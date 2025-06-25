import { jsx as e, jsxs as a, Fragment as b } from "react/jsx-runtime";
import { forwardRef as C } from "react";
import { c as N } from "./index-DACAHwoB.js";
import { c as r } from "./utils-qaFjX9_3.js";
const o = N(
  "min-h-screen",
  {
    variants: {
      variant: {
        simple: "bg-background flex items-center justify-center p-4",
        card: "bg-background flex items-center justify-center p-4",
        "split-gradient": "flex min-h-screen bg-background",
        "split-image": "flex min-h-screen bg-background",
        "card-gradient": "min-h-screen bg-background flex items-center justify-center p-4 sm:p-6",
        "card-image": "min-h-screen relative overflow-hidden"
      }
    },
    defaultVariants: {
      variant: "card"
    }
  }
), g = N(
  "w-full space-y-6",
  {
    variants: {
      size: {
        sm: "max-w-sm",
        md: "max-w-md",
        lg: "max-w-lg",
        xl: "max-w-xl",
        full: "max-w-2xl"
      },
      variant: {
        simple: "",
        card: "p-8 bg-card border border-border rounded-lg shadow-lg",
        "split-gradient": "mx-auto lg:w-96",
        "split-image": "mx-auto lg:w-96",
        "card-gradient": "",
        "card-image": ""
      }
    },
    defaultVariants: {
      size: "md",
      variant: "card"
    }
  }
), y = C(({
  variant: l = "card",
  size: h = "md",
  title: c,
  subtitle: d,
  logo: i,
  footer: s,
  className: m,
  containerProps: t,
  // Split variant props
  splitContent: w,
  // Image variant props
  imageUrl: v = "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  imageAlt: E = "Authentication background",
  imageOverlay: x = "dark",
  // Card variant props
  cardContent: u,
  children: f
}, n) => {
  const p = {
    light: "bg-gradient-to-br from-white/50 via-white/25 to-white/50",
    dark: "bg-gradient-to-br from-black/40 via-black/25 to-black/40",
    none: ""
  };
  return l === "simple" ? /* @__PURE__ */ e("div", { ref: n, className: r(o({ variant: l }), m), children: /* @__PURE__ */ a(
    "div",
    {
      ...t,
      className: r(
        g({ size: h, variant: l }),
        t == null ? void 0 : t.className
      ),
      children: [
        i && /* @__PURE__ */ e("div", { className: "flex justify-center", children: i }),
        (c || d) && /* @__PURE__ */ a("div", { className: "text-center space-y-2", children: [
          c && /* @__PURE__ */ e("h1", { className: "text-2xl font-semibold tracking-tight text-foreground", children: c }),
          d && /* @__PURE__ */ e("p", { className: "text-sm text-muted-foreground", children: d })
        ] }),
        /* @__PURE__ */ e("div", { className: "space-y-4", children: f }),
        s && /* @__PURE__ */ e("div", { className: "text-center", children: s })
      ]
    }
  ) }) : l === "card" ? /* @__PURE__ */ e("div", { ref: n, className: r(o({ variant: l }), m), children: /* @__PURE__ */ a(
    "div",
    {
      ...t,
      className: r(
        g({ size: h, variant: l }),
        t == null ? void 0 : t.className
      ),
      children: [
        i && /* @__PURE__ */ e("div", { className: "flex justify-center", children: i }),
        (c || d) && /* @__PURE__ */ a("div", { className: "text-center space-y-2", children: [
          c && /* @__PURE__ */ e("h1", { className: "text-2xl font-semibold tracking-tight text-foreground", children: c }),
          d && /* @__PURE__ */ e("p", { className: "text-sm text-muted-foreground", children: d })
        ] }),
        /* @__PURE__ */ e("div", { className: "space-y-4", children: f }),
        s && /* @__PURE__ */ e("div", { className: "text-center", children: s })
      ]
    }
  ) }) : l === "split-gradient" || l === "split-image" ? /* @__PURE__ */ a("div", { ref: n, className: r(o({ variant: l }), m), children: [
    /* @__PURE__ */ a("div", { className: "hidden lg:flex lg:w-1/2 relative overflow-hidden", children: [
      l === "split-gradient" ? /* @__PURE__ */ a(b, { children: [
        /* @__PURE__ */ e("div", { className: "absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-accent" }),
        /* @__PURE__ */ e("div", { className: "absolute inset-0 opacity-10", children: /* @__PURE__ */ e(
          "div",
          {
            className: "w-full h-full",
            style: {
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3Ccircle cx='53' cy='7' r='1'/%3E%3Ccircle cx='7' cy='53' r='1'/%3E%3Ccircle cx='53' cy='53' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }
          }
        ) })
      ] }) : /* @__PURE__ */ a(b, { children: [
        /* @__PURE__ */ e(
          "img",
          {
            src: v,
            alt: E,
            className: "absolute inset-0 w-full h-full object-cover"
          }
        ),
        x !== "none" && /* @__PURE__ */ e("div", { className: r("absolute inset-0", p[x]) })
      ] }),
      /* @__PURE__ */ e("div", { className: r(
        "relative z-10 flex flex-col justify-center p-8 lg:p-12",
        l === "split-gradient" ? "text-primary-foreground" : "text-white"
      ), children: w })
    ] }),
    /* @__PURE__ */ e("div", { className: "flex flex-1 lg:w-1/2", children: /* @__PURE__ */ e("div", { className: "flex flex-col justify-center w-full px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24", children: /* @__PURE__ */ a("div", { className: r(g({ size: h, variant: l })), children: [
      i && /* @__PURE__ */ e("div", { className: "flex justify-center lg:justify-start mb-8", children: i }),
      (c || d) && /* @__PURE__ */ a("div", { className: "text-center lg:text-left space-y-2 mb-8", children: [
        c && /* @__PURE__ */ e("h1", { className: "text-2xl sm:text-3xl font-semibold tracking-tight text-foreground", children: c }),
        d && /* @__PURE__ */ e("p", { className: "text-sm text-muted-foreground", children: d })
      ] }),
      /* @__PURE__ */ e("div", { className: "space-y-4", children: f }),
      s && /* @__PURE__ */ e("div", { className: "text-center lg:text-left mt-8", children: s })
    ] }) }) })
  ] }) : l === "card-gradient" ? /* @__PURE__ */ e("div", { ref: n, className: r(o({ variant: l }), m), children: /* @__PURE__ */ a("div", { className: r("w-full", g({ size: "md", variant: "simple" })), children: [
    /* @__PURE__ */ a("div", { className: "bg-card rounded-xl shadow-2xl overflow-hidden border border-border", children: [
      /* @__PURE__ */ a("div", { className: "relative h-48 bg-gradient-to-br from-primary via-primary to-primary/80 overflow-hidden", children: [
        /* @__PURE__ */ e("div", { className: "absolute inset-0 opacity-20", children: /* @__PURE__ */ e(
          "div",
          {
            className: "w-full h-full",
            style: {
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3Ccircle cx='10' cy='10' r='1'/%3E%3Ccircle cx='50' cy='10' r='1'/%3E%3Ccircle cx='10' cy='50' r='1'/%3E%3Ccircle cx='50' cy='50' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }
          }
        ) }),
        /* @__PURE__ */ e("div", { className: "absolute top-4 right-6 w-16 h-16 bg-primary-foreground/10 rounded-full blur-xl" }),
        /* @__PURE__ */ e("div", { className: "absolute bottom-6 left-8 w-12 h-12 bg-primary-foreground/15 rounded-full blur-lg" }),
        /* @__PURE__ */ e("div", { className: "absolute top-12 left-12 w-8 h-8 bg-primary-foreground/20 rounded-full blur-md" }),
        /* @__PURE__ */ a("div", { className: "relative z-10 h-full flex flex-col justify-center items-center text-center px-8", children: [
          /* @__PURE__ */ e("div", { className: "mb-4", children: i }),
          c && /* @__PURE__ */ e("h1", { className: "text-2xl font-bold text-primary-foreground mb-2", children: c }),
          d && /* @__PURE__ */ e("p", { className: "text-primary-foreground/90 text-sm", children: d })
        ] })
      ] }),
      /* @__PURE__ */ e("div", { className: "p-8 space-y-6 bg-card", children: /* @__PURE__ */ e("div", { className: "space-y-4", children: f }) })
    ] }),
    u && /* @__PURE__ */ e("div", { className: "mt-8", children: u }),
    s && /* @__PURE__ */ e("div", { className: "text-center mt-6 text-sm text-muted-foreground", children: s })
  ] }) }) : l === "card-image" ? /* @__PURE__ */ a("div", { ref: n, className: r(o({ variant: l }), m), children: [
    /* @__PURE__ */ a(
      "div",
      {
        className: "absolute inset-0 bg-cover bg-center bg-no-repeat",
        style: {
          backgroundImage: `url('${v}')`
        },
        children: [
          /* @__PURE__ */ e("div", { className: r("absolute inset-0", p[x]) }),
          /* @__PURE__ */ e("div", { className: "absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" })
        ]
      }
    ),
    /* @__PURE__ */ e("div", { className: "relative z-10 min-h-screen flex items-center justify-center p-4 sm:p-6", children: /* @__PURE__ */ a("div", { className: r("w-full", g({ size: h, variant: "simple" })), children: [
      i && /* @__PURE__ */ e("div", { className: "text-center mb-8", children: i }),
      /* @__PURE__ */ a("div", { className: "bg-card/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-border/20 overflow-hidden", children: [
        /* @__PURE__ */ a("div", { className: "px-8 pt-8 pb-6 text-center", children: [
          c && /* @__PURE__ */ e("h1", { className: "text-3xl font-bold text-foreground mb-2", children: c }),
          d && /* @__PURE__ */ e("p", { className: "text-muted-foreground", children: d })
        ] }),
        /* @__PURE__ */ e("div", { className: "px-8 pb-8 space-y-6", children: /* @__PURE__ */ e("div", { className: "space-y-4", children: f }) })
      ] }),
      u && /* @__PURE__ */ e("div", { className: "mt-8", children: u }),
      s && /* @__PURE__ */ e("div", { className: "text-center mt-8 text-sm text-primary-foreground/80", children: s })
    ] }) }),
    /* @__PURE__ */ e("div", { className: "absolute top-20 left-10 w-2 h-2 bg-primary-foreground/30 rounded-full animate-pulse" }),
    /* @__PURE__ */ e("div", { className: "absolute top-40 right-20 w-3 h-3 bg-primary/40 rounded-full animate-pulse delay-1000" }),
    /* @__PURE__ */ e("div", { className: "absolute bottom-32 left-20 w-2 h-2 bg-primary/40 rounded-full animate-pulse delay-500" }),
    /* @__PURE__ */ e("div", { className: "absolute bottom-20 right-32 w-4 h-4 bg-primary-foreground/20 rounded-full animate-pulse delay-700" })
  ] }) : /* @__PURE__ */ e("div", { ref: n, className: r(o({ variant: "card" }), m), children: /* @__PURE__ */ e("div", { className: r(g({ size: h, variant: "card" })), children: /* @__PURE__ */ e("div", { className: "text-center", children: /* @__PURE__ */ a("p", { className: "text-destructive", children: [
    "Invalid variant: ",
    l
  ] }) }) }) });
});
y.displayName = "AuthLayout";
const V = y;
export {
  V as AuthLayout
};
//# sourceMappingURL=auth.js.map
