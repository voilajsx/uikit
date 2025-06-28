import { jsx as e } from "react/jsx-runtime";
import * as p from "react";
import { P as d } from "./index-D5Ppf2aB.js";
import { c as m } from "./utils-qaFjX9_3.js";
var v = "Separator", n = "horizontal", f = ["horizontal", "vertical"], l = p.forwardRef((r, o) => {
  const { decorative: t, orientation: a = n, ...s } = r, i = u(a) ? a : n, c = t ? { role: "none" } : { "aria-orientation": i === "vertical" ? i : void 0, role: "separator" };
  return /* @__PURE__ */ e(
    d.div,
    {
      "data-orientation": i,
      ...c,
      ...s,
      ref: o
    }
  );
});
l.displayName = v;
function u(r) {
  return f.includes(r);
}
var h = l;
function R({
  className: r,
  orientation: o = "horizontal",
  decorative: t = !0,
  ...a
}) {
  return /* @__PURE__ */ e(
    h,
    {
      "data-slot": "separator",
      decorative: t,
      orientation: o,
      className: m(
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        r
      ),
      ...a
    }
  );
}
export {
  R as Separator
};
//# sourceMappingURL=separator.js.map
