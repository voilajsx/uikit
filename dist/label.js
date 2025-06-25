import { jsx as o } from "react/jsx-runtime";
import * as i from "react";
import { P as n } from "./index-IjmGKHPz.js";
import { c as d } from "./utils-qaFjX9_3.js";
var s = "Label", l = i.forwardRef((e, a) => /* @__PURE__ */ o(
  n.label,
  {
    ...e,
    ref: a,
    onMouseDown: (t) => {
      var r;
      t.target.closest("button, input, select, textarea") || ((r = e.onMouseDown) == null || r.call(e, t), !t.defaultPrevented && t.detail > 1 && t.preventDefault());
    }
  }
));
l.displayName = s;
var u = l;
function g({
  className: e,
  ...a
}) {
  return /* @__PURE__ */ o(
    u,
    {
      "data-slot": "label",
      className: d(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        e
      ),
      ...a
    }
  );
}
export {
  g as Label
};
//# sourceMappingURL=label.js.map
