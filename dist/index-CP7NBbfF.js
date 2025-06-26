import * as f from "react";
import * as p from "react-dom";
import { a as c } from "./index-B1fTi8J3.js";
import { jsx as l } from "react/jsx-runtime";
var u = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
], h = u.reduce((t, i) => {
  const o = c(`Primitive.${i}`), r = f.forwardRef((e, a) => {
    const { asChild: s, ...m } = e, n = s ? o : i;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ l(n, { ...m, ref: a });
  });
  return r.displayName = `Primitive.${i}`, { ...t, [i]: r };
}, {});
function w(t, i) {
  t && p.flushSync(() => t.dispatchEvent(i));
}
export {
  h as P,
  w as d
};
//# sourceMappingURL=index-CP7NBbfF.js.map
