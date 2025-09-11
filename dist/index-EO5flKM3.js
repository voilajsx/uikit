import * as o from "react";
import { u as O, c as S } from "./index-C0UREtMP.js";
import { c as D } from "./index-DFZozV_h.js";
import { u as M } from "./index-CCKe-Mpx.js";
import { u as L } from "./index-DQH6odE9.js";
import { P as v } from "./index-BVRIAMfe.js";
import { P as k } from "./index-BCjJQGh8.js";
import { u as F } from "./index-xqkGMOJ8.js";
import { jsx as c } from "react/jsx-runtime";
var f = "Collapsible", [B, V] = D(f), [G, g] = B(f), T = o.forwardRef(
  (e, r) => {
    const {
      __scopeCollapsible: s,
      open: a,
      defaultOpen: t,
      disabled: l,
      onOpenChange: i,
      ...m
    } = e, [p, d] = O({
      prop: a,
      defaultProp: t ?? !1,
      onChange: i,
      caller: f
    });
    return /* @__PURE__ */ c(
      G,
      {
        scope: s,
        disabled: l,
        contentId: F(),
        open: p,
        onOpenToggle: o.useCallback(() => d((C) => !C), [d]),
        children: /* @__PURE__ */ c(
          v.div,
          {
            "data-state": h(p),
            "data-disabled": l ? "" : void 0,
            ...m,
            ref: r
          }
        )
      }
    );
  }
);
T.displayName = f;
var w = "CollapsibleTrigger", A = o.forwardRef(
  (e, r) => {
    const { __scopeCollapsible: s, ...a } = e, t = g(w, s);
    return /* @__PURE__ */ c(
      v.button,
      {
        type: "button",
        "aria-controls": t.contentId,
        "aria-expanded": t.open || !1,
        "data-state": h(t.open),
        "data-disabled": t.disabled ? "" : void 0,
        disabled: t.disabled,
        ...a,
        ref: r,
        onClick: S(e.onClick, t.onOpenToggle)
      }
    );
  }
);
A.displayName = w;
var R = "CollapsibleContent", I = o.forwardRef(
  (e, r) => {
    const { forceMount: s, ...a } = e, t = g(R, e.__scopeCollapsible);
    return /* @__PURE__ */ c(k, { present: s || t.open, children: ({ present: l }) => /* @__PURE__ */ c($, { ...a, ref: r, present: l }) });
  }
);
I.displayName = R;
var $ = o.forwardRef((e, r) => {
  const { __scopeCollapsible: s, present: a, children: t, ...l } = e, i = g(R, s), [m, p] = o.useState(a), d = o.useRef(null), C = L(r, d), P = o.useRef(0), y = P.current, x = o.useRef(0), N = x.current, b = i.open || m, _ = o.useRef(b), u = o.useRef(void 0);
  return o.useEffect(() => {
    const n = requestAnimationFrame(() => _.current = !1);
    return () => cancelAnimationFrame(n);
  }, []), M(() => {
    const n = d.current;
    if (n) {
      u.current = u.current || {
        transitionDuration: n.style.transitionDuration,
        animationName: n.style.animationName
      }, n.style.transitionDuration = "0s", n.style.animationName = "none";
      const E = n.getBoundingClientRect();
      P.current = E.height, x.current = E.width, _.current || (n.style.transitionDuration = u.current.transitionDuration, n.style.animationName = u.current.animationName), p(a);
    }
  }, [i.open, a]), /* @__PURE__ */ c(
    v.div,
    {
      "data-state": h(i.open),
      "data-disabled": i.disabled ? "" : void 0,
      id: i.contentId,
      hidden: !b,
      ...l,
      ref: C,
      style: {
        "--radix-collapsible-content-height": y ? `${y}px` : void 0,
        "--radix-collapsible-content-width": N ? `${N}px` : void 0,
        ...e.style
      },
      children: b && t
    }
  );
});
function h(e) {
  return e ? "open" : "closed";
}
var W = T, X = A, Y = I;
export {
  I as C,
  W as R,
  X as T,
  A as a,
  Y as b,
  V as c
};
//# sourceMappingURL=index-EO5flKM3.js.map
