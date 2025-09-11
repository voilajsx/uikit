import * as r from "react";
import { c as p } from "./index-C0UREtMP.js";
import { P as h, d as k } from "./index-BVRIAMfe.js";
import { u as T } from "./index-DQH6odE9.js";
import { u as b } from "./index-0ioNhtNM.js";
import { jsx as P } from "react/jsx-runtime";
import M from "react-dom";
import { u as U } from "./index-CCKe-Mpx.js";
function z(n, e = globalThis?.document) {
  const t = b(n);
  r.useEffect(() => {
    const o = (s) => {
      s.key === "Escape" && t(s);
    };
    return e.addEventListener("keydown", o, { capture: !0 }), () => e.removeEventListener("keydown", o, { capture: !0 });
  }, [t, e]);
}
var H = "DismissableLayer", y = "dismissableLayer.update", K = "dismissableLayer.pointerDownOutside", j = "dismissableLayer.focusOutside", R, B = r.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), X = r.forwardRef(
  (n, e) => {
    const {
      disableOutsidePointerEvents: t = !1,
      onEscapeKeyDown: o,
      onPointerDownOutside: s,
      onFocusOutside: a,
      onInteractOutside: d,
      onDismiss: l,
      ...E
    } = n, c = r.useContext(B), [u, F] = r.useState(null), f = u?.ownerDocument ?? globalThis?.document, [, I] = r.useState({}), S = T(e, (i) => F(i)), D = Array.from(c.layers), [A] = [...c.layersWithOutsidePointerEventsDisabled].slice(-1), N = D.indexOf(A), O = u ? D.indexOf(u) : -1, W = c.layersWithOutsidePointerEventsDisabled.size > 0, L = O >= N, _ = G((i) => {
      const v = i.target, w = [...c.branches].some((m) => m.contains(v));
      !L || w || (s?.(i), d?.(i), i.defaultPrevented || l?.());
    }, f), C = J((i) => {
      const v = i.target;
      [...c.branches].some((m) => m.contains(v)) || (a?.(i), d?.(i), i.defaultPrevented || l?.());
    }, f);
    return z((i) => {
      O === c.layers.size - 1 && (o?.(i), !i.defaultPrevented && l && (i.preventDefault(), l()));
    }, f), r.useEffect(() => {
      if (u)
        return t && (c.layersWithOutsidePointerEventsDisabled.size === 0 && (R = f.body.style.pointerEvents, f.body.style.pointerEvents = "none"), c.layersWithOutsidePointerEventsDisabled.add(u)), c.layers.add(u), g(), () => {
          t && c.layersWithOutsidePointerEventsDisabled.size === 1 && (f.body.style.pointerEvents = R);
        };
    }, [u, f, t, c]), r.useEffect(() => () => {
      u && (c.layers.delete(u), c.layersWithOutsidePointerEventsDisabled.delete(u), g());
    }, [u, c]), r.useEffect(() => {
      const i = () => I({});
      return document.addEventListener(y, i), () => document.removeEventListener(y, i);
    }, []), /* @__PURE__ */ P(
      h.div,
      {
        ...E,
        ref: S,
        style: {
          pointerEvents: W ? L ? "auto" : "none" : void 0,
          ...n.style
        },
        onFocusCapture: p(n.onFocusCapture, C.onFocusCapture),
        onBlurCapture: p(n.onBlurCapture, C.onBlurCapture),
        onPointerDownCapture: p(
          n.onPointerDownCapture,
          _.onPointerDownCapture
        )
      }
    );
  }
);
X.displayName = H;
var Y = "DismissableLayerBranch", q = r.forwardRef((n, e) => {
  const t = r.useContext(B), o = r.useRef(null), s = T(e, o);
  return r.useEffect(() => {
    const a = o.current;
    if (a)
      return t.branches.add(a), () => {
        t.branches.delete(a);
      };
  }, [t.branches]), /* @__PURE__ */ P(h.div, { ...n, ref: s });
});
q.displayName = Y;
function G(n, e = globalThis?.document) {
  const t = b(n), o = r.useRef(!1), s = r.useRef(() => {
  });
  return r.useEffect(() => {
    const a = (l) => {
      if (l.target && !o.current) {
        let E = function() {
          x(
            K,
            t,
            c,
            { discrete: !0 }
          );
        };
        const c = { originalEvent: l };
        l.pointerType === "touch" ? (e.removeEventListener("click", s.current), s.current = E, e.addEventListener("click", s.current, { once: !0 })) : E();
      } else
        e.removeEventListener("click", s.current);
      o.current = !1;
    }, d = window.setTimeout(() => {
      e.addEventListener("pointerdown", a);
    }, 0);
    return () => {
      window.clearTimeout(d), e.removeEventListener("pointerdown", a), e.removeEventListener("click", s.current);
    };
  }, [e, t]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => o.current = !0
  };
}
function J(n, e = globalThis?.document) {
  const t = b(n), o = r.useRef(!1);
  return r.useEffect(() => {
    const s = (a) => {
      a.target && !o.current && x(j, t, { originalEvent: a }, {
        discrete: !1
      });
    };
    return e.addEventListener("focusin", s), () => e.removeEventListener("focusin", s);
  }, [e, t]), {
    onFocusCapture: () => o.current = !0,
    onBlurCapture: () => o.current = !1
  };
}
function g() {
  const n = new CustomEvent(y);
  document.dispatchEvent(n);
}
function x(n, e, t, { discrete: o }) {
  const s = t.originalEvent.target, a = new CustomEvent(n, { bubbles: !1, cancelable: !0, detail: t });
  e && s.addEventListener(n, e, { once: !0 }), o ? k(s, a) : s.dispatchEvent(a);
}
var Q = "Portal", V = r.forwardRef((n, e) => {
  const { container: t, ...o } = n, [s, a] = r.useState(!1);
  U(() => a(!0), []);
  const d = t || s && globalThis?.document?.body;
  return d ? M.createPortal(/* @__PURE__ */ P(h.div, { ...o, ref: e }), d) : null;
});
V.displayName = Q;
export {
  X as D,
  V as P
};
//# sourceMappingURL=index-BY7PeRJA.js.map
