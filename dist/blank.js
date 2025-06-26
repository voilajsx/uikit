import { jsx as e, jsxs as f } from "react/jsx-runtime";
import { forwardRef as b } from "react";
import { c as a } from "./index-DACAHwoB.js";
import { c as t } from "./utils-qaFjX9_3.js";
const y = a(
  "min-h-screen flex items-center justify-center p-4",
  {
    variants: {
      scheme: {
        default: "",
        centered: "flex-col",
        error: "flex-col",
        maintenance: "flex-col"
      },
      tone: {
        clean: "bg-background",
        subtle: "bg-muted/20",
        brand: "bg-primary/5",
        contrast: "bg-zinc-900"
      }
    },
    defaultVariants: {
      scheme: "default",
      tone: "clean"
    }
  }
), N = a(
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
      scheme: {
        default: "",
        centered: "",
        error: "max-w-2xl",
        maintenance: "max-w-3xl"
      }
    },
    defaultVariants: {
      size: "lg",
      scheme: "default"
    }
  }
), V = a(
  "flex justify-center",
  {
    variants: {
      scheme: {
        default: "",
        centered: "",
        error: "text-destructive",
        maintenance: "text-primary animate-pulse"
      }
    },
    defaultVariants: {
      scheme: "default"
    }
  }
), p = a(
  "font-bold tracking-tight",
  {
    variants: {
      size: {
        sm: "text-2xl sm:text-3xl",
        md: "text-3xl sm:text-4xl",
        lg: "text-4xl sm:text-5xl",
        xl: "text-5xl sm:text-6xl",
        full: "text-6xl sm:text-7xl"
      },
      tone: {
        clean: "text-foreground",
        subtle: "text-foreground",
        brand: "text-foreground",
        contrast: "text-zinc-100"
      }
    },
    defaultVariants: {
      size: "lg",
      tone: "clean"
    }
  }
), w = a(
  "",
  {
    variants: {
      size: {
        sm: "text-base",
        md: "text-lg",
        lg: "text-xl",
        xl: "text-2xl",
        full: "text-3xl"
      },
      tone: {
        clean: "text-muted-foreground max-w-md mx-auto",
        subtle: "text-muted-foreground",
        brand: "text-muted-foreground",
        contrast: "text-zinc-300"
      }
    },
    defaultVariants: {
      size: "lg",
      tone: "clean"
    }
  }
), z = a(
  "text-center",
  {
    variants: {
      scheme: {
        default: "",
        centered: "",
        error: "text-sm",
        maintenance: "text-sm"
      },
      tone: {
        clean: "text-muted-foreground",
        subtle: "text-muted-foreground",
        brand: "text-muted-foreground",
        contrast: "text-zinc-400"
      }
    },
    defaultVariants: {
      scheme: "default",
      tone: "clean"
    }
  }
), g = b(({
  scheme: l = "default",
  tone: n = "clean",
  size: s = "lg",
  title: x,
  subtitle: c,
  logo: m,
  icon: d,
  actions: i,
  footer: o,
  className: h,
  containerProps: r,
  children: u
}, v) => /* @__PURE__ */ e("div", { ref: v, className: t(y({ scheme: l, tone: n }), h), children: /* @__PURE__ */ f(
  "div",
  {
    ...r,
    className: t(
      N({ size: s, scheme: l }),
      r == null ? void 0 : r.className
    ),
    children: [
      m && /* @__PURE__ */ e("div", { className: "flex justify-center", children: m }),
      d && /* @__PURE__ */ e("div", { className: t(V({ scheme: l })), children: d }),
      (x || c) && /* @__PURE__ */ f("div", { className: "space-y-4", children: [
        x && /* @__PURE__ */ e("h1", { className: t(p({ size: s, tone: n })), children: x }),
        c && /* @__PURE__ */ e("p", { className: t(w({ size: s, tone: n })), children: c })
      ] }),
      u && /* @__PURE__ */ e("div", { className: "space-y-6", children: u }),
      i && /* @__PURE__ */ e("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: i }),
      o && /* @__PURE__ */ e("div", { className: t(z({ scheme: l, tone: n })), children: o })
    ]
  }
) }));
g.displayName = "BlankLayout";
const C = g;
export {
  C as BlankLayout
};
//# sourceMappingURL=blank.js.map
