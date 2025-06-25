import * as i from "react";
import { c as y } from "./index-CPxmoWFw.js";
import { P as m, d as I } from "./index-IjmGKHPz.js";
import { u as T } from "./index-CRtwelBU.js";
import { u as b } from "./index-DwYXX2sM.js";
import { jsx as P } from "react/jsx-runtime";
import M from "react-dom";
import { u as U } from "./index-DuekHEmj.js";
function z(r, e = globalThis == null ? void 0 : globalThis.document) {
  const s = b(r);
  i.useEffect(() => {
    const n = (t) => {
      t.key === "Escape" && s(t);
    };
    return e.addEventListener("keydown", n, { capture: !0 }), () => e.removeEventListener("keydown", n, { capture: !0 });
  }, [s, e]);
}
var H = "DismissableLayer", h = "dismissableLayer.update", K = "dismissableLayer.pointerDownOutside", j = "dismissableLayer.focusOutside", g, B = i.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), X = i.forwardRef(
  (r, e) => {
    const {
      disableOutsidePointerEvents: s = !1,
      onEscapeKeyDown: n,
      onPointerDownOutside: t,
      onFocusOutside: o,
      onInteractOutside: l,
      onDismiss: u,
      ...E
    } = r, c = i.useContext(B), [d, S] = i.useState(null), f = (d == null ? void 0 : d.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, A] = i.useState({}), N = T(e, (a) => S(a)), D = Array.from(c.layers), [F] = [...c.layersWithOutsidePointerEventsDisabled].slice(-1), W = D.indexOf(F), L = d ? D.indexOf(d) : -1, _ = c.layersWithOutsidePointerEventsDisabled.size > 0, C = L >= W, k = G((a) => {
      const v = a.target, R = [...c.branches].some((p) => p.contains(v));
      !C || R || (t == null || t(a), l == null || l(a), a.defaultPrevented || u == null || u());
    }, f), O = J((a) => {
      const v = a.target;
      [...c.branches].some((p) => p.contains(v)) || (o == null || o(a), l == null || l(a), a.defaultPrevented || u == null || u());
    }, f);
    return z((a) => {
      L === c.layers.size - 1 && (n == null || n(a), !a.defaultPrevented && u && (a.preventDefault(), u()));
    }, f), i.useEffect(() => {
      if (d)
        return s && (c.layersWithOutsidePointerEventsDisabled.size === 0 && (g = f.body.style.pointerEvents, f.body.style.pointerEvents = "none"), c.layersWithOutsidePointerEventsDisabled.add(d)), c.layers.add(d), w(), () => {
          s && c.layersWithOutsidePointerEventsDisabled.size === 1 && (f.body.style.pointerEvents = g);
        };
    }, [d, f, s, c]), i.useEffect(() => () => {
      d && (c.layers.delete(d), c.layersWithOutsidePointerEventsDisabled.delete(d), w());
    }, [d, c]), i.useEffect(() => {
      const a = () => A({});
      return document.addEventListener(h, a), () => document.removeEventListener(h, a);
    }, []), /* @__PURE__ */ P(
      m.div,
      {
        ...E,
        ref: N,
        style: {
          pointerEvents: _ ? C ? "auto" : "none" : void 0,
          ...r.style
        },
        onFocusCapture: y(r.onFocusCapture, O.onFocusCapture),
        onBlurCapture: y(r.onBlurCapture, O.onBlurCapture),
        onPointerDownCapture: y(
          r.onPointerDownCapture,
          k.onPointerDownCapture
        )
      }
    );
  }
);
X.displayName = H;
var Y = "DismissableLayerBranch", q = i.forwardRef((r, e) => {
  const s = i.useContext(B), n = i.useRef(null), t = T(e, n);
  return i.useEffect(() => {
    const o = n.current;
    if (o)
      return s.branches.add(o), () => {
        s.branches.delete(o);
      };
  }, [s.branches]), /* @__PURE__ */ P(m.div, { ...r, ref: t });
});
q.displayName = Y;
function G(r, e = globalThis == null ? void 0 : globalThis.document) {
  const s = b(r), n = i.useRef(!1), t = i.useRef(() => {
  });
  return i.useEffect(() => {
    const o = (u) => {
      if (u.target && !n.current) {
        let E = function() {
          x(
            K,
            s,
            c,
            { discrete: !0 }
          );
        };
        const c = { originalEvent: u };
        u.pointerType === "touch" ? (e.removeEventListener("click", t.current), t.current = E, e.addEventListener("click", t.current, { once: !0 })) : E();
      } else
        e.removeEventListener("click", t.current);
      n.current = !1;
    }, l = window.setTimeout(() => {
      e.addEventListener("pointerdown", o);
    }, 0);
    return () => {
      window.clearTimeout(l), e.removeEventListener("pointerdown", o), e.removeEventListener("click", t.current);
    };
  }, [e, s]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => n.current = !0
  };
}
function J(r, e = globalThis == null ? void 0 : globalThis.document) {
  const s = b(r), n = i.useRef(!1);
  return i.useEffect(() => {
    const t = (o) => {
      o.target && !n.current && x(j, s, { originalEvent: o }, {
        discrete: !1
      });
    };
    return e.addEventListener("focusin", t), () => e.removeEventListener("focusin", t);
  }, [e, s]), {
    onFocusCapture: () => n.current = !0,
    onBlurCapture: () => n.current = !1
  };
}
function w() {
  const r = new CustomEvent(h);
  document.dispatchEvent(r);
}
function x(r, e, s, { discrete: n }) {
  const t = s.originalEvent.target, o = new CustomEvent(r, { bubbles: !1, cancelable: !0, detail: s });
  e && t.addEventListener(r, e, { once: !0 }), n ? I(t, o) : t.dispatchEvent(o);
}
var Q = "Portal", V = i.forwardRef((r, e) => {
  var u;
  const { container: s, ...n } = r, [t, o] = i.useState(!1);
  U(() => o(!0), []);
  const l = s || t && ((u = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : u.body);
  return l ? M.createPortal(/* @__PURE__ */ P(m.div, { ...n, ref: e }), l) : null;
});
V.displayName = Q;
export {
  X as D,
  V as P
};
//# sourceMappingURL=index-DRDDWTfS.js.map
