import { jsx as a } from "react/jsx-runtime";
import { forwardRef as i } from "react";
import { c as l } from "./index-DACAHwoB.js";
import { c as r } from "./utils-qaFjX9_3.js";
const d = l(
  "min-h-screen flex items-center justify-center p-4",
  {
    variants: {
      scheme: {
        simple: "flex-col",
        // Simple centered layout
        card: "flex-col"
        // Card-based layout
      },
      tone: {
        clean: "bg-background",
        subtle: "bg-muted/20",
        brand: "bg-primary/5",
        contrast: "bg-zinc-400"
      }
    },
    defaultVariants: {
      scheme: "simple",
      tone: "clean"
    }
  }
), p = l(
  "w-full space-y-6 text-center",
  {
    variants: {
      scheme: {
        simple: "",
        // No container styling
        card: "bg-card border border-border rounded-lg shadow-lg p-8"
        // Card styling
      },
      size: {
        sm: "max-w-md",
        md: "max-w-lg",
        lg: "max-w-2xl",
        xl: "max-w-4xl",
        full: "max-w-6xl"
      }
    },
    defaultVariants: {
      scheme: "simple",
      size: "lg"
    }
  }
), t = i(({
  scheme: e = "simple",
  tone: n = "clean",
  size: s = "lg",
  className: m,
  children: c
}, o) => /* @__PURE__ */ a("div", { ref: o, className: r(d({ scheme: e, tone: n }), m), children: /* @__PURE__ */ a("div", { className: r(p({ scheme: e, size: s })), children: c }) }));
t.displayName = "BlankLayout";
const g = t;
export {
  g as BlankLayout
};
//# sourceMappingURL=blank.js.map
