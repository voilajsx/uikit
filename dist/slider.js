import { jsx as m, jsxs as j } from "react/jsx-runtime";
import * as d from "react";
import { c as X } from "./index-rKs9bXHr.js";
import { u as de, c as C } from "./index-CPxmoWFw.js";
import { u as A } from "./index-CRtwelBU.js";
import { c as ue } from "./index-UFb2E87s.js";
import { c as fe, u as me } from "./index-DRTnvS9P.js";
import { u as he } from "./index-BZPx6jYI.js";
import { u as pe } from "./index-CHDs-SiB.js";
import { P as T } from "./index-IjmGKHPz.js";
import { c as H } from "./utils-qaFjX9_3.js";
var G = ["PageUp", "PageDown"], W = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], q = {
  "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
  "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
}, M = "Slider", [L, Se, ge] = fe(M), [J, $e] = ue(M, [
  ge
]), [ve, k] = J(M), Q = d.forwardRef(
  (e, t) => {
    const {
      name: o,
      min: n = 0,
      max: i = 100,
      step: c = 1,
      orientation: r = "horizontal",
      disabled: a = !1,
      minStepsBetweenThumbs: l = 0,
      defaultValue: S = [n],
      value: g,
      onValueChange: s = () => {
      },
      onValueCommit: u = () => {
      },
      inverted: b = !1,
      form: R,
      ...v
    } = e, h = d.useRef(/* @__PURE__ */ new Set()), f = d.useRef(0), w = r === "horizontal" ? be : we, [p = [], I] = de({
      prop: g,
      defaultProp: S,
      onChange: (y) => {
        var _;
        (_ = [...h.current][f.current]) == null || _.focus(), s(y);
      }
    }), V = d.useRef(p);
    function N(y) {
      const P = De(p, y);
      B(y, P);
    }
    function ce(y) {
      B(y, f.current);
    }
    function le() {
      const y = V.current[f.current];
      p[f.current] !== y && u(p);
    }
    function B(y, P, { commit: _ } = { commit: !1 }) {
      const Y = Ae(c), z = Me(Math.round((y - n) / c) * c + n, Y), K = X(z, [n, i]);
      I((E = []) => {
        const x = Pe(E, K, P);
        if (Ce(x, l * c)) {
          f.current = x.indexOf(K);
          const $ = String(x) !== String(E);
          return $ && _ && u(x), $ ? x : E;
        } else
          return E;
      });
    }
    return /* @__PURE__ */ m(
      ve,
      {
        scope: e.__scopeSlider,
        name: o,
        disabled: a,
        min: n,
        max: i,
        valueIndexToChangeRef: f,
        thumbs: h.current,
        values: p,
        orientation: r,
        form: R,
        children: /* @__PURE__ */ m(L.Provider, { scope: e.__scopeSlider, children: /* @__PURE__ */ m(L.Slot, { scope: e.__scopeSlider, children: /* @__PURE__ */ m(
          w,
          {
            "aria-disabled": a,
            "data-disabled": a ? "" : void 0,
            ...v,
            ref: t,
            onPointerDown: C(v.onPointerDown, () => {
              a || (V.current = p);
            }),
            min: n,
            max: i,
            inverted: b,
            onSlideStart: a ? void 0 : N,
            onSlideMove: a ? void 0 : ce,
            onSlideEnd: a ? void 0 : le,
            onHomeKeyDown: () => !a && B(n, 0, { commit: !0 }),
            onEndKeyDown: () => !a && B(i, p.length - 1, { commit: !0 }),
            onStepKeyDown: ({ event: y, direction: P }) => {
              if (!a) {
                const z = G.includes(y.key) || y.shiftKey && W.includes(y.key) ? 10 : 1, K = f.current, E = p[K], x = c * z * P;
                B(E + x, K, { commit: !0 });
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
}), be = d.forwardRef(
  (e, t) => {
    const {
      min: o,
      max: n,
      dir: i,
      inverted: c,
      onSlideStart: r,
      onSlideMove: a,
      onSlideEnd: l,
      onStepKeyDown: S,
      ...g
    } = e, [s, u] = d.useState(null), b = A(t, (w) => u(w)), R = d.useRef(void 0), v = me(i), h = v === "ltr", f = h && !c || !h && c;
    function D(w) {
      const p = R.current || s.getBoundingClientRect(), I = [0, p.width], N = F(I, f ? [o, n] : [n, o]);
      return R.current = p, N(w - p.left);
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
            dir: v,
            "data-orientation": "horizontal",
            ...g,
            ref: b,
            style: {
              ...g.style,
              "--radix-slider-thumb-transform": "translateX(-50%)"
            },
            onSlideStart: (w) => {
              const p = D(w.clientX);
              r == null || r(p);
            },
            onSlideMove: (w) => {
              const p = D(w.clientX);
              a == null || a(p);
            },
            onSlideEnd: () => {
              R.current = void 0, l == null || l();
            },
            onStepKeyDown: (w) => {
              const I = q[f ? "from-left" : "from-right"].includes(w.key);
              S == null || S({ event: w, direction: I ? -1 : 1 });
            }
          }
        )
      }
    );
  }
), we = d.forwardRef(
  (e, t) => {
    const {
      min: o,
      max: n,
      inverted: i,
      onSlideStart: c,
      onSlideMove: r,
      onSlideEnd: a,
      onStepKeyDown: l,
      ...S
    } = e, g = d.useRef(null), s = A(t, g), u = d.useRef(void 0), b = !i;
    function R(v) {
      const h = u.current || g.current.getBoundingClientRect(), f = [0, h.height], w = F(f, b ? [n, o] : [o, n]);
      return u.current = h, w(v - h.top);
    }
    return /* @__PURE__ */ m(
      Z,
      {
        scope: e.__scopeSlider,
        startEdge: b ? "bottom" : "top",
        endEdge: b ? "top" : "bottom",
        size: "height",
        direction: b ? 1 : -1,
        children: /* @__PURE__ */ m(
          te,
          {
            "data-orientation": "vertical",
            ...S,
            ref: s,
            style: {
              ...S.style,
              "--radix-slider-thumb-transform": "translateY(50%)"
            },
            onSlideStart: (v) => {
              const h = R(v.clientY);
              c == null || c(h);
            },
            onSlideMove: (v) => {
              const h = R(v.clientY);
              r == null || r(h);
            },
            onSlideEnd: () => {
              u.current = void 0, a == null || a();
            },
            onStepKeyDown: (v) => {
              const f = q[b ? "from-bottom" : "from-top"].includes(v.key);
              l == null || l({ event: v, direction: f ? -1 : 1 });
            }
          }
        )
      }
    );
  }
), te = d.forwardRef(
  (e, t) => {
    const {
      __scopeSlider: o,
      onSlideStart: n,
      onSlideMove: i,
      onSlideEnd: c,
      onHomeKeyDown: r,
      onEndKeyDown: a,
      onStepKeyDown: l,
      ...S
    } = e, g = k(M, o);
    return /* @__PURE__ */ m(
      T.span,
      {
        ...S,
        ref: t,
        onKeyDown: C(e.onKeyDown, (s) => {
          s.key === "Home" ? (r(s), s.preventDefault()) : s.key === "End" ? (a(s), s.preventDefault()) : G.concat(W).includes(s.key) && (l(s), s.preventDefault());
        }),
        onPointerDown: C(e.onPointerDown, (s) => {
          const u = s.target;
          u.setPointerCapture(s.pointerId), s.preventDefault(), g.thumbs.has(u) ? u.focus() : n(s);
        }),
        onPointerMove: C(e.onPointerMove, (s) => {
          s.target.hasPointerCapture(s.pointerId) && i(s);
        }),
        onPointerUp: C(e.onPointerUp, (s) => {
          const u = s.target;
          u.hasPointerCapture(s.pointerId) && (u.releasePointerCapture(s.pointerId), c(s));
        })
      }
    );
  }
), oe = "SliderTrack", ne = d.forwardRef(
  (e, t) => {
    const { __scopeSlider: o, ...n } = e, i = k(oe, o);
    return /* @__PURE__ */ m(
      T.span,
      {
        "data-disabled": i.disabled ? "" : void 0,
        "data-orientation": i.orientation,
        ...n,
        ref: t
      }
    );
  }
);
ne.displayName = oe;
var O = "SliderRange", re = d.forwardRef(
  (e, t) => {
    const { __scopeSlider: o, ...n } = e, i = k(O, o), c = ee(O, o), r = d.useRef(null), a = A(t, r), l = i.values.length, S = i.values.map(
      (u) => se(u, i.min, i.max)
    ), g = l > 1 ? Math.min(...S) : 0, s = 100 - Math.max(...S);
    return /* @__PURE__ */ m(
      T.span,
      {
        "data-orientation": i.orientation,
        "data-disabled": i.disabled ? "" : void 0,
        ...n,
        ref: a,
        style: {
          ...e.style,
          [c.startEdge]: g + "%",
          [c.endEdge]: s + "%"
        }
      }
    );
  }
);
re.displayName = O;
var U = "SliderThumb", ie = d.forwardRef(
  (e, t) => {
    const o = Se(e.__scopeSlider), [n, i] = d.useState(null), c = A(t, (a) => i(a)), r = d.useMemo(
      () => n ? o().findIndex((a) => a.ref.current === n) : -1,
      [o, n]
    );
    return /* @__PURE__ */ m(ye, { ...e, ref: c, index: r });
  }
), ye = d.forwardRef(
  (e, t) => {
    const { __scopeSlider: o, index: n, name: i, ...c } = e, r = k(U, o), a = ee(U, o), [l, S] = d.useState(null), g = A(t, (D) => S(D)), s = l ? r.form || !!l.closest("form") : !0, u = pe(l), b = r.values[n], R = b === void 0 ? 0 : se(b, r.min, r.max), v = xe(n, r.values.length), h = u == null ? void 0 : u[a.size], f = h ? _e(h, R, a.direction) : 0;
    return d.useEffect(() => {
      if (l)
        return r.thumbs.add(l), () => {
          r.thumbs.delete(l);
        };
    }, [l, r.thumbs]), /* @__PURE__ */ j(
      "span",
      {
        style: {
          transform: "var(--radix-slider-thumb-transform)",
          position: "absolute",
          [a.startEdge]: `calc(${R}% + ${f}px)`
        },
        children: [
          /* @__PURE__ */ m(L.ItemSlot, { scope: e.__scopeSlider, children: /* @__PURE__ */ m(
            T.span,
            {
              role: "slider",
              "aria-label": e["aria-label"] || v,
              "aria-valuemin": r.min,
              "aria-valuenow": b,
              "aria-valuemax": r.max,
              "aria-orientation": r.orientation,
              "data-orientation": r.orientation,
              "data-disabled": r.disabled ? "" : void 0,
              tabIndex: r.disabled ? void 0 : 0,
              ...c,
              ref: g,
              style: b === void 0 ? { display: "none" } : e.style,
              onFocus: C(e.onFocus, () => {
                r.valueIndexToChangeRef.current = n;
              })
            }
          ) }),
          s && /* @__PURE__ */ m(
            ae,
            {
              name: i ?? (r.name ? r.name + (r.values.length > 1 ? "[]" : "") : void 0),
              form: r.form,
              value: b
            },
            n
          )
        ]
      }
    );
  }
);
ie.displayName = U;
var Re = "RadioBubbleInput", ae = d.forwardRef(
  ({ __scopeSlider: e, value: t, ...o }, n) => {
    const i = d.useRef(null), c = A(i, n), r = he(t);
    return d.useEffect(() => {
      const a = i.current;
      if (!a) return;
      const l = window.HTMLInputElement.prototype, g = Object.getOwnPropertyDescriptor(l, "value").set;
      if (r !== t && g) {
        const s = new Event("input", { bubbles: !0 });
        g.call(a, t), a.dispatchEvent(s);
      }
    }, [r, t]), /* @__PURE__ */ m(
      T.input,
      {
        style: { display: "none" },
        ...o,
        ref: c,
        defaultValue: t
      }
    );
  }
);
ae.displayName = Re;
function Pe(e = [], t, o) {
  const n = [...e];
  return n[o] = t, n.sort((i, c) => i - c);
}
function se(e, t, o) {
  const c = 100 / (o - t) * (e - t);
  return X(c, [0, 100]);
}
function xe(e, t) {
  return t > 2 ? `Value ${e + 1} of ${t}` : t === 2 ? ["Minimum", "Maximum"][e] : void 0;
}
function De(e, t) {
  if (e.length === 1) return 0;
  const o = e.map((i) => Math.abs(i - t)), n = Math.min(...o);
  return o.indexOf(n);
}
function _e(e, t, o) {
  const n = e / 2, c = F([0, 50], [0, n]);
  return (n - c(t) * o) * o;
}
function Ee(e) {
  return e.slice(0, -1).map((t, o) => e[o + 1] - t);
}
function Ce(e, t) {
  if (t > 0) {
    const o = Ee(e);
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
function Ae(e) {
  return (String(e).split(".")[1] || "").length;
}
function Me(e, t) {
  const o = Math.pow(10, t);
  return Math.round(e * o) / o;
}
var Ie = Q, Be = ne, Ke = re, Te = ie;
function je({
  className: e,
  defaultValue: t,
  value: o,
  min: n = 0,
  max: i = 100,
  ...c
}) {
  const r = d.useMemo(
    () => Array.isArray(o) ? o : Array.isArray(t) ? t : [n, i],
    [o, t, n, i]
  );
  return /* @__PURE__ */ j(
    Ie,
    {
      "data-slot": "slider",
      defaultValue: t,
      value: o,
      min: n,
      max: i,
      className: H(
        "relative flex w-full touch-none items-center select-none data-[disabled]:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col",
        e
      ),
      ...c,
      children: [
        /* @__PURE__ */ m(
          Be,
          {
            "data-slot": "slider-track",
            className: H(
              "bg-muted relative grow overflow-hidden rounded-full data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5"
            ),
            children: /* @__PURE__ */ m(
              Ke,
              {
                "data-slot": "slider-range",
                className: H(
                  "bg-primary absolute data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full"
                )
              }
            )
          }
        ),
        Array.from({ length: r.length }, (a, l) => /* @__PURE__ */ m(
          Te,
          {
            "data-slot": "slider-thumb",
            className: "border-primary bg-background ring-ring/50 block size-4 shrink-0 rounded-full border shadow-sm transition-[color,box-shadow] hover:ring-4 focus-visible:ring-4 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50"
          },
          l
        ))
      ]
    }
  );
}
export {
  je as Slider
};
//# sourceMappingURL=slider.js.map
