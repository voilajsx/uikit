import { jsx as a } from "react/jsx-runtime";
import { forwardRef as i } from "react";
import { c as l } from "./index-Bke1qZdk.js";
import { c as t } from "./utils-CwJPJKOE.js";
const p = l(
  "",
  {
    variants: {
      scheme: {
        simple: "min-h-screen flex items-center justify-center p-4 flex-col",
        // Simple centered layout
        card: "min-h-screen flex items-center justify-center p-4 flex-col",
        // Card-based layout
        empty: ""
        // No layout styling at all - complete freedom
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
    },
    compoundVariants: [
      {
        scheme: "empty",
        class: ""
        // Override any tone styles for empty scheme
      }
    ]
  }
), d = l(
  "",
  {
    variants: {
      scheme: {
        simple: "w-full space-y-6 text-center",
        // No container styling
        card: "w-full space-y-6 text-center bg-card border border-border rounded-lg shadow-lg p-8",
        // Card styling
        empty: ""
        // No content container styling
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
    },
    compoundVariants: [
      {
        scheme: "empty",
        class: ""
        // Override any size styles for empty scheme
      }
    ]
  }
), m = i(({
  scheme: e = "simple",
  tone: c = "clean",
  size: o = "lg",
  className: s,
  children: n
}, r) => e === "empty" ? /* @__PURE__ */ a("div", { ref: r, className: t(s), children: n }) : /* @__PURE__ */ a("div", { ref: r, className: t(p({ scheme: e, tone: c }), s), children: /* @__PURE__ */ a("div", { className: t(d({ scheme: e, size: o })), children: n }) }));
m.displayName = "BlankLayout";
const b = m;
export {
  b as BlankLayout
};
//# sourceMappingURL=blank.js.map
