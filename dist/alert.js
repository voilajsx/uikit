import { jsx as a } from "react/jsx-runtime";
import { c as i } from "./index-Bke1qZdk.js";
import { c as e } from "./utils-CwJPJKOE.js";
const l = i(
  "relative w-full rounded-lg border px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current",
  {
    variants: {
      variant: {
        default: "bg-card text-card-foreground",
        destructive: "text-destructive bg-card [&>svg]:text-current *:data-[slot=alert-description]:text-destructive/90"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function o({
  className: t,
  variant: r,
  ...s
}) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "alert",
      role: "alert",
      className: e(l({ variant: r }), t),
      ...s
    }
  );
}
function g({ className: t, ...r }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "alert-title",
      className: e(
        "col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight",
        t
      ),
      ...r
    }
  );
}
function u({
  className: t,
  ...r
}) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "alert-description",
      className: e(
        "text-muted-foreground col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed",
        t
      ),
      ...r
    }
  );
}
export {
  o as Alert,
  u as AlertDescription,
  g as AlertTitle
};
//# sourceMappingURL=alert.js.map
