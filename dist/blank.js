import { jsx as t, jsxs as f } from "react/jsx-runtime";
import { forwardRef as g } from "react";
import { c as a } from "./index-DACAHwoB.js";
import { c as e } from "./utils-qaFjX9_3.js";
const h = a(
  "min-h-screen bg-background flex items-center justify-center p-4",
  {
    variants: {
      variant: {
        default: "",
        card: "",
        error: "",
        maintenance: "",
        suspension: ""
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
), y = a(
  "w-full space-y-8 text-center",
  {
    variants: {
      size: {
        sm: "max-w-md",
        md: "max-w-2xl",
        lg: "max-w-4xl",
        xl: "max-w-5xl",
        full: "max-w-6xl"
      },
      variant: {
        default: "",
        card: "p-8 sm:p-12 bg-card border border-border rounded-xl shadow-lg",
        error: "",
        maintenance: "",
        suspension: ""
      }
    },
    defaultVariants: {
      size: "md",
      variant: "default"
    }
  }
), N = a(
  "flex justify-center",
  {
    variants: {
      variant: {
        default: "",
        card: "",
        error: "text-muted-foreground",
        maintenance: "text-primary animate-pulse",
        suspension: "text-destructive"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
), V = a(
  "font-bold tracking-tight text-foreground",
  {
    variants: {
      size: {
        sm: "text-2xl sm:text-3xl",
        md: "text-3xl sm:text-4xl",
        lg: "text-4xl sm:text-5xl",
        xl: "text-5xl sm:text-6xl",
        full: "text-6xl sm:text-7xl"
      }
    },
    defaultVariants: {
      size: "md"
    }
  }
), w = a(
  "text-muted-foreground",
  {
    variants: {
      size: {
        sm: "text-base",
        md: "text-lg",
        lg: "text-xl",
        xl: "text-2xl",
        full: "text-3xl"
      },
      variant: {
        default: "max-w-md mx-auto",
        card: "",
        error: "",
        maintenance: "",
        suspension: ""
      }
    },
    defaultVariants: {
      size: "md",
      variant: "default"
    }
  }
), b = a(
  "text-center",
  {
    variants: {
      variant: {
        default: "",
        card: "",
        error: "text-sm text-muted-foreground",
        maintenance: "text-sm text-muted-foreground",
        suspension: "text-sm text-muted-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
), o = g(({
  variant: s = "default",
  size: n = "md",
  title: l,
  subtitle: d,
  logo: x,
  icon: m,
  actions: i,
  footer: c,
  className: v,
  containerProps: r,
  children: u
}, p) => /* @__PURE__ */ t("div", { ref: p, className: e(h({ variant: s }), v), children: /* @__PURE__ */ f(
  "div",
  {
    ...r,
    className: e(
      y({ size: n, variant: s }),
      r == null ? void 0 : r.className
    ),
    children: [
      x && /* @__PURE__ */ t("div", { className: "flex justify-center", children: x }),
      m && /* @__PURE__ */ t("div", { className: e(N({ variant: s })), children: m }),
      (l || d) && /* @__PURE__ */ f("div", { className: "space-y-4", children: [
        l && /* @__PURE__ */ t("h1", { className: e(V({ size: n })), children: l }),
        d && /* @__PURE__ */ t("p", { className: e(w({ size: n, variant: s })), children: d })
      ] }),
      u && /* @__PURE__ */ t("div", { className: "space-y-6", children: u }),
      i && /* @__PURE__ */ t("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: i }),
      c && /* @__PURE__ */ t("div", { className: e(b({ variant: s })), children: c })
    ]
  }
) }));
o.displayName = "BlankLayout";
const L = o;
export {
  L as BlankLayout
};
//# sourceMappingURL=blank.js.map
