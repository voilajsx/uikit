import { jsx as n } from "react/jsx-runtime";
import * as u from "react";
import { u as g, c as f } from "./index-CPxmoWFw.js";
import { P as v } from "./index-D5Ppf2aB.js";
import { c as m } from "./index-DACAHwoB.js";
import { c as p } from "./utils-qaFjX9_3.js";
var s = "Toggle", i = u.forwardRef((e, t) => {
  const { pressed: a, defaultPressed: r, onPressedChange: d, ...l } = e, [o, c] = g({
    prop: a,
    onChange: d,
    defaultProp: r ?? !1,
    caller: s
  });
  return /* @__PURE__ */ n(
    v.button,
    {
      type: "button",
      "aria-pressed": o,
      "data-state": o ? "on" : "off",
      "data-disabled": e.disabled ? "" : void 0,
      ...l,
      ref: t,
      onClick: f(e.onClick, () => {
        e.disabled || c(!o);
      })
    }
  );
});
i.displayName = s;
var b = i;
const h = m(
  "inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium hover:bg-muted hover:text-muted-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] outline-none transition-[color,box-shadow] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive whitespace-nowrap",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline: "border border-input bg-transparent shadow-xs hover:bg-accent hover:text-accent-foreground"
      },
      size: {
        default: "h-9 px-2 min-w-9",
        sm: "h-8 px-1.5 min-w-8",
        lg: "h-10 px-2.5 min-w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function y({
  className: e,
  variant: t,
  size: a,
  ...r
}) {
  return /* @__PURE__ */ n(
    b,
    {
      "data-slot": "toggle",
      className: p(h({ variant: t, size: a, className: e })),
      ...r
    }
  );
}
export {
  y as Toggle,
  h as toggleVariants
};
//# sourceMappingURL=toggle.js.map
