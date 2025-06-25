import { jsx as i } from "react/jsx-runtime";
import * as m from "react";
import { c as $ } from "./index-UFb2E87s.js";
import { P as v } from "./index-IjmGKHPz.js";
import { c as I } from "./utils-qaFjX9_3.js";
var u = "Progress", d = 100, [y, O] = $(u), [R, _] = y(u), f = m.forwardRef(
  (r, e) => {
    const {
      __scopeProgress: n,
      value: o = null,
      max: a,
      getValueLabel: N = w,
      ...b
    } = r;
    (a || a === 0) && !p(a) && console.error(E(`${a}`, "Progress"));
    const t = p(a) ? a : d;
    o !== null && !c(o, t) && console.error(M(`${o}`, "Progress"));
    const s = c(o, t) ? o : null, h = l(s) ? N(s, t) : void 0;
    return /* @__PURE__ */ i(R, { scope: n, value: s, max: t, children: /* @__PURE__ */ i(
      v.div,
      {
        "aria-valuemax": t,
        "aria-valuemin": 0,
        "aria-valuenow": l(s) ? s : void 0,
        "aria-valuetext": h,
        role: "progressbar",
        "data-state": x(s, t),
        "data-value": s ?? void 0,
        "data-max": t,
        ...b,
        ref: e
      }
    ) });
  }
);
f.displayName = u;
var g = "ProgressIndicator", P = m.forwardRef(
  (r, e) => {
    const { __scopeProgress: n, ...o } = r, a = _(g, n);
    return /* @__PURE__ */ i(
      v.div,
      {
        "data-state": x(a.value, a.max),
        "data-value": a.value ?? void 0,
        "data-max": a.max,
        ...o,
        ref: e
      }
    );
  }
);
P.displayName = g;
function w(r, e) {
  return `${Math.round(r / e * 100)}%`;
}
function x(r, e) {
  return r == null ? "indeterminate" : r === e ? "complete" : "loading";
}
function l(r) {
  return typeof r == "number";
}
function p(r) {
  return l(r) && !isNaN(r) && r > 0;
}
function c(r, e) {
  return l(r) && !isNaN(r) && r <= e && r >= 0;
}
function E(r, e) {
  return `Invalid prop \`max\` of value \`${r}\` supplied to \`${e}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${d}\`.`;
}
function M(r, e) {
  return `Invalid prop \`value\` of value \`${r}\` supplied to \`${e}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${d} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
var V = f, A = P;
function T({
  className: r,
  value: e,
  ...n
}) {
  return /* @__PURE__ */ i(
    V,
    {
      "data-slot": "progress",
      className: I(
        "bg-primary/20 relative h-2 w-full overflow-hidden rounded-full",
        r
      ),
      ...n,
      children: /* @__PURE__ */ i(
        A,
        {
          "data-slot": "progress-indicator",
          className: "bg-primary h-full w-full flex-1 transition-all",
          style: { transform: `translateX(-${100 - (e || 0)}%)` }
        }
      )
    }
  );
}
export {
  T as Progress
};
//# sourceMappingURL=progress.js.map
