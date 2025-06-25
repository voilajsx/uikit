import { forwardRef as i, createElement as a } from "react";
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const p = (r) => r.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), c = (...r) => r.filter((e, t, o) => !!e && e.trim() !== "" && o.indexOf(e) === t).join(" ").trim();
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var f = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const g = i(
  ({
    color: r = "currentColor",
    size: e = 24,
    strokeWidth: t = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: n,
    iconNode: u,
    ...l
  }, m) => a(
    "svg",
    {
      ref: m,
      ...f,
      width: e,
      height: e,
      stroke: r,
      strokeWidth: o ? Number(t) * 24 / Number(e) : t,
      className: c("lucide", s),
      ...l
    },
    [
      ...u.map(([d, w]) => a(d, w)),
      ...Array.isArray(n) ? n : [n]
    ]
  )
);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const C = (r, e) => {
  const t = i(
    ({ className: o, ...s }, n) => a(g, {
      ref: n,
      iconNode: e,
      className: c(`lucide-${p(r)}`, o),
      ...s
    })
  );
  return t.displayName = `${r}`, t;
};
export {
  C as c
};
//# sourceMappingURL=createLucideIcon-B45kRl5r.js.map
