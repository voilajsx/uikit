import { jsx as m, jsxs as j } from "react/jsx-runtime";
import * as c from "react";
import { c as X } from "./index-rKs9bXHr.js";
import { u as de, c as _ } from "./index-C0UREtMP.js";
import { u as C } from "./index-DQH6odE9.js";
import { c as ue } from "./index-DFZozV_h.js";
import { c as fe, u as me } from "./index-1QHKgw6D.js";
import { u as pe } from "./index-BZPx6jYI.js";
import { u as Se } from "./index-BGQepRFJ.js";
import { P as B } from "./index-BVRIAMfe.js";
import { c as H } from "./utils-CwJPJKOE.js";
var G = ["PageUp", "PageDown"], W = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], q = {
  "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
  "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
}, M = "Slider", [L, he, ge] = fe(M), [J, $e] = ue(M, [
  ge
]), [ve, T] = J(M), Q = c.forwardRef(
  (e, t) => {
    const {
      name: o,
      min: n = 0,
      max: r = 100,
      step: l = 1,
      orientation: i = "horizontal",
      disabled: s = !1,
      minStepsBetweenThumbs: d = 0,
      defaultValue: w = [n],
      value: h,
      onValueChange: a = () => {
      },
      onValueCommit: u = () => {
      },
      inverted: v = !1,
      form: R,
      ...g
    } = e, p = c.useRef(/* @__PURE__ */ new Set()), f = c.useRef(0), b = i === "horizontal" ? we : be, [S = [], A] = de({
      prop: h,
      defaultProp: w,
      onChange: (y) => {
        [...p.current][f.current]?.focus(), a(y);
      }
    }), k = c.useRef(S);
    function V(y) {
      const P = De(S, y);
      K(y, P);
    }
    function le(y) {
      K(y, f.current);
    }
    function ce() {
      const y = k.current[f.current];
      S[f.current] !== y && u(S);
    }
    function K(y, P, { commit: z } = { commit: !1 }) {
      const Y = Me(l), N = Ae(Math.round((y - n) / l) * l + n, Y), I = X(N, [n, r]);
      A((E = []) => {
        const x = Pe(E, I, P);
        if (Ce(x, d * l)) {
          f.current = x.indexOf(I);
          const $ = String(x) !== String(E);
          return $ && z && u(x), $ ? x : E;
        } else
          return E;
      });
    }
    return /* @__PURE__ */ m(
      ve,
      {
        scope: e.__scopeSlider,
        name: o,
        disabled: s,
        min: n,
        max: r,
        valueIndexToChangeRef: f,
        thumbs: p.current,
        values: S,
        orientation: i,
        form: R,
        children: /* @__PURE__ */ m(L.Provider, { scope: e.__scopeSlider, children: /* @__PURE__ */ m(L.Slot, { scope: e.__scopeSlider, children: /* @__PURE__ */ m(
          b,
          {
            "aria-disabled": s,
            "data-disabled": s ? "" : void 0,
            ...g,
            ref: t,
            onPointerDown: _(g.onPointerDown, () => {
              s || (k.current = S);
            }),
            min: n,
            max: r,
            inverted: v,
            onSlideStart: s ? void 0 : V,
            onSlideMove: s ? void 0 : le,
            onSlideEnd: s ? void 0 : ce,
            onHomeKeyDown: () => !s && K(n, 0, { commit: !0 }),
            onEndKeyDown: () => !s && K(r, S.length - 1, { commit: !0 }),
            onStepKeyDown: ({ event: y, direction: P }) => {
              if (!s) {
                const N = G.includes(y.key) || y.shiftKey && W.includes(y.key) ? 10 : 1, I = f.current, E = S[I], x = l * N * P;
                K(E + x, I, { commit: !0 });
              }
            }
          }
        ) }) })
      }
    );
  }
);
Q.displayName = M;
var [Z, ee] = J(M, {
  startEdge: "left",
  endEdge: "right",
  size: "width",
  direction: 1
}), we = c.forwardRef(
  (e, t) => {
    const {
      min: o,
      max: n,
      dir: r,
      inverted: l,
      onSlideStart: i,
      onSlideMove: s,
      onSlideEnd: d,
      onStepKeyDown: w,
      ...h
    } = e, [a, u] = c.useState(null), v = C(t, (b) => u(b)), R = c.useRef(void 0), g = me(r), p = g === "ltr", f = p && !l || !p && l;
    function D(b) {
      const S = R.current || a.getBoundingClientRect(), A = [0, S.width], V = F(A, f ? [o, n] : [n, o]);
      return R.current = S, V(b - S.left);
    }
    return /* @__PURE__ */ m(
      Z,
      {
        scope: e.__scopeSlider,
        startEdge: f ? "left" : "right",
        endEdge: f ? "right" : "left",
        direction: f ? 1 : -1,
        size: "width",
        children: /* @__PURE__ */ m(
          te,
          {
            dir: g,
            "data-orientation": "horizontal",
            ...h,
            ref: v,
            style: {
              ...h.style,
              "--radix-slider-thumb-transform": "translateX(-50%)"
            },
            onSlideStart: (b) => {
              const S = D(b.clientX);
              i?.(S);
            },
            onSlideMove: (b) => {
              const S = D(b.clientX);
              s?.(S);
            },
            onSlideEnd: () => {
              R.current = void 0, d?.();
            },
            onStepKeyDown: (b) => {
              const A = q[f ? "from-left" : "from-right"].includes(b.key);
              w?.({ event: b, direction: A ? -1 : 1 });
            }
          }
        )
      }
    );
  }
), be = c.forwardRef(
  (e, t) => {
    const {
      min: o,
      max: n,
      inverted: r,
      onSlideStart: l,
      onSlideMove: i,
      onSlideEnd: s,
      onStepKeyDown: d,
      ...w
    } = e, h = c.useRef(null), a = C(t, h), u = c.useRef(void 0), v = !r;
    function R(g) {
      const p = u.current || h.current.getBoundingClientRect(), f = [0, p.height], b = F(f, v ? [n, o] : [o, n]);
      return u.current = p, b(g - p.top);
    }
    return /* @__PURE__ */ m(
      Z,
      {
        scope: e.__scopeSlider,
        startEdge: v ? "bottom" : "top",
        endEdge: v ? "top" : "bottom",
        size: "height",
        direction: v ? 1 : -1,
        children: /* @__PURE__ */ m(
          te,
          {
            "data-orientation": "vertical",
            ...w,
            ref: a,
            style: {
              ...w.style,
              "--radix-slider-thumb-transform": "translateY(50%)"
            },
            onSlideStart: (g) => {
              const p = R(g.clientY);
              l?.(p);
            },
            onSlideMove: (g) => {
              const p = R(g.clientY);
              i?.(p);
            },
            onSlideEnd: () => {
              u.current = void 0, s?.();
            },
            onStepKeyDown: (g) => {
              const f = q[v ? "from-bottom" : "from-top"].includes(g.key);
              d?.({ event: g, direction: f ? -1 : 1 });
            }
          }
        )
      }
    );
  }
), te = c.forwardRef(
  (e, t) => {
    const {
      __scopeSlider: o,
      onSlideStart: n,
      onSlideMove: r,
      onSlideEnd: l,
      onHomeKeyDown: i,
      onEndKeyDown: s,
      onStepKeyDown: d,
      ...w
    } = e, h = T(M, o);
    return /* @__PURE__ */ m(
      B.span,
      {
        ...w,
        ref: t,
        onKeyDown: _(e.onKeyDown, (a) => {
          a.key === "Home" ? (i(a), a.preventDefault()) : a.key === "End" ? (s(a), a.preventDefault()) : G.concat(W).includes(a.key) && (d(a), a.preventDefault());
        }),
        onPointerDown: _(e.onPointerDown, (a) => {
          const u = a.target;
          u.setPointerCapture(a.pointerId), a.preventDefault(), h.thumbs.has(u) ? u.focus() : n(a);
        }),
        onPointerMove: _(e.onPointerMove, (a) => {
          a.target.hasPointerCapture(a.pointerId) && r(a);
        }),
        onPointerUp: _(e.onPointerUp, (a) => {
          const u = a.target;
          u.hasPointerCapture(a.pointerId) && (u.releasePointerCapture(a.pointerId), l(a));
        })
      }
    );
  }
), oe = "SliderTrack", ne = c.forwardRef(
  (e, t) => {
    const { __scopeSlider: o, ...n } = e, r = T(oe, o);
    return /* @__PURE__ */ m(
      B.span,
      {
        "data-disabled": r.disabled ? "" : void 0,
        "data-orientation": r.orientation,
        ...n,
        ref: t
      }
    );
  }
);
ne.displayName = oe;
var O = "SliderRange", re = c.forwardRef(
  (e, t) => {
    const { __scopeSlider: o, ...n } = e, r = T(O, o), l = ee(O, o), i = c.useRef(null), s = C(t, i), d = r.values.length, w = r.values.map(
      (u) => se(u, r.min, r.max)
    ), h = d > 1 ? Math.min(...w) : 0, a = 100 - Math.max(...w);
    return /* @__PURE__ */ m(
      B.span,
      {
        "data-orientation": r.orientation,
        "data-disabled": r.disabled ? "" : void 0,
        ...n,
        ref: s,
        style: {
          ...e.style,
          [l.startEdge]: h + "%",
          [l.endEdge]: a + "%"
        }
      }
    );
  }
);
re.displayName = O;
var U = "SliderThumb", ie = c.forwardRef(
  (e, t) => {
    const o = he(e.__scopeSlider), [n, r] = c.useState(null), l = C(t, (s) => r(s)), i = c.useMemo(
      () => n ? o().findIndex((s) => s.ref.current === n) : -1,
      [o, n]
    );
    return /* @__PURE__ */ m(ye, { ...e, ref: l, index: i });
  }
), ye = c.forwardRef(
  (e, t) => {
    const { __scopeSlider: o, index: n, name: r, ...l } = e, i = T(U, o), s = ee(U, o), [d, w] = c.useState(null), h = C(t, (D) => w(D)), a = d ? i.form || !!d.closest("form") : !0, u = Se(d), v = i.values[n], R = v === void 0 ? 0 : se(v, i.min, i.max), g = xe(n, i.values.length), p = u?.[s.size], f = p ? Ee(p, R, s.direction) : 0;
    return c.useEffect(() => {
      if (d)
        return i.thumbs.add(d), () => {
          i.thumbs.delete(d);
        };
    }, [d, i.thumbs]), /* @__PURE__ */ j(
      "span",
      {
        style: {
          transform: "var(--radix-slider-thumb-transform)",
          position: "absolute",
          [s.startEdge]: `calc(${R}% + ${f}px)`
        },
        children: [
          /* @__PURE__ */ m(L.ItemSlot, { scope: e.__scopeSlider, children: /* @__PURE__ */ m(
            B.span,
            {
              role: "slider",
              "aria-label": e["aria-label"] || g,
              "aria-valuemin": i.min,
              "aria-valuenow": v,
              "aria-valuemax": i.max,
              "aria-orientation": i.orientation,
              "data-orientation": i.orientation,
              "data-disabled": i.disabled ? "" : void 0,
              tabIndex: i.disabled ? void 0 : 0,
              ...l,
              ref: h,
              style: v === void 0 ? { display: "none" } : e.style,
              onFocus: _(e.onFocus, () => {
                i.valueIndexToChangeRef.current = n;
              })
            }
          ) }),
          a && /* @__PURE__ */ m(
            ae,
            {
              name: r ?? (i.name ? i.name + (i.values.length > 1 ? "[]" : "") : void 0),
              form: i.form,
              value: v
            },
            n
          )
        ]
      }
    );
  }
);
ie.displayName = U;
var Re = "RadioBubbleInput", ae = c.forwardRef(
  ({ __scopeSlider: e, value: t, ...o }, n) => {
    const r = c.useRef(null), l = C(r, n), i = pe(t);
    return c.useEffect(() => {
      const s = r.current;
      if (!s) return;
      const d = window.HTMLInputElement.prototype, h = Object.getOwnPropertyDescriptor(d, "value").set;
      if (i !== t && h) {
        const a = new Event("input", { bubbles: !0 });
        h.call(s, t), s.dispatchEvent(a);
      }
    }, [i, t]), /* @__PURE__ */ m(
      B.input,
      {
        style: { display: "none" },
        ...o,
        ref: l,
        defaultValue: t
      }
    );
  }
);
ae.displayName = Re;
function Pe(e = [], t, o) {
  const n = [...e];
  return n[o] = t, n.sort((r, l) => r - l);
}
function se(e, t, o) {
  const l = 100 / (o - t) * (e - t);
  return X(l, [0, 100]);
}
function xe(e, t) {
  return t > 2 ? `Value ${e + 1} of ${t}` : t === 2 ? ["Minimum", "Maximum"][e] : void 0;
}
function De(e, t) {
  if (e.length === 1) return 0;
  const o = e.map((r) => Math.abs(r - t)), n = Math.min(...o);
  return o.indexOf(n);
}
function Ee(e, t, o) {
  const n = e / 2, l = F([0, 50], [0, n]);
  return (n - l(t) * o) * o;
}
function _e(e) {
  return e.slice(0, -1).map((t, o) => e[o + 1] - t);
}
function Ce(e, t) {
  if (t > 0) {
    const o = _e(e);
    return Math.min(...o) >= t;
  }
  return !0;
}
function F(e, t) {
  return (o) => {
    if (e[0] === e[1] || t[0] === t[1]) return t[0];
    const n = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + n * (o - e[0]);
  };
}
function Me(e) {
  return (String(e).split(".")[1] || "").length;
}
function Ae(e, t) {
  const o = Math.pow(10, t);
  return Math.round(e * o) / o;
}
var Ke = Q, Ie = ne, Be = re, Te = ie;
function je({
  className: e,
  defaultValue: t,
  value: o,
  min: n = 0,
  max: r = 100,
  ...l
}) {
  const i = c.useMemo(
    () => Array.isArray(o) ? o : Array.isArray(t) ? t : [n, r],
    [o, t, n, r]
  );
  return /* @__PURE__ */ j(
    Ke,
    {
      "data-slot": "slider",
      defaultValue: t,
      value: o,
      min: n,
      max: r,
      className: H(
        "relative flex w-full touch-none items-center select-none data-[disabled]:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col",
        e
      ),
      ...l,
      children: [
        /* @__PURE__ */ m(
          Ie,
          {
            "data-slot": "slider-track",
            className: H(
              "bg-muted relative grow overflow-hidden rounded-full data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5"
            ),
            children: /* @__PURE__ */ m(
              Be,
              {
                "data-slot": "slider-range",
                className: H(
                  "bg-primary absolute data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full"
                )
              }
            )
          }
        ),
        Array.from({ length: i.length }, (s, d) => /* @__PURE__ */ m(
          Te,
          {
            "data-slot": "slider-thumb",
            className: "border-primary bg-background ring-ring/50 block size-4 shrink-0 rounded-full border shadow-sm transition-[color,box-shadow] hover:ring-4 focus-visible:ring-4 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50"
          },
          d
        ))
      ]
    }
  );
}
export {
  je as Slider
};
//# sourceMappingURL=slider.js.map
