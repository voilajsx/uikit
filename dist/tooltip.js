import { jsx as u, jsxs as H } from "react/jsx-runtime";
import * as s from "react";
import { u as K, c as C } from "./index-CPxmoWFw.js";
import { u as S, b as W } from "./index-CRtwelBU.js";
import { c as J } from "./index-UFb2E87s.js";
import { P as Q, D as Z } from "./index-DRDDWTfS.js";
import { u as ee } from "./index-B_PLZIoC.js";
import { c as G, R as te, a as oe, A as re, C as ne } from "./index-De8DLPwF.js";
import { P as j } from "./index-BFzlN27V.js";
import { P as se } from "./index-IjmGKHPz.js";
import { R as ae } from "./index-ClC6ZmUV.js";
import { c as ie } from "./utils-qaFjX9_3.js";
var [D, ze] = J("Tooltip", [
  G
]), A = G(), F = "TooltipProvider", le = 700, O = "tooltip.open", [ce, k] = D(F), z = (e) => {
  const {
    __scopeTooltip: o,
    delayDuration: t = le,
    skipDelayDuration: r = 300,
    disableHoverableContent: n = !1,
    children: i
  } = e, l = s.useRef(!0), v = s.useRef(!1), a = s.useRef(0);
  return s.useEffect(() => {
    const d = a.current;
    return () => window.clearTimeout(d);
  }, []), /* @__PURE__ */ u(
    ce,
    {
      scope: o,
      isOpenDelayedRef: l,
      delayDuration: t,
      onOpen: s.useCallback(() => {
        window.clearTimeout(a.current), l.current = !1;
      }, []),
      onClose: s.useCallback(() => {
        window.clearTimeout(a.current), a.current = window.setTimeout(
          () => l.current = !0,
          r
        );
      }, [r]),
      isPointerInTransitRef: v,
      onPointerInTransitChange: s.useCallback((d) => {
        v.current = d;
      }, []),
      disableHoverableContent: n,
      children: i
    }
  );
};
z.displayName = F;
var R = "Tooltip", [ue, _] = D(R), $ = (e) => {
  const {
    __scopeTooltip: o,
    children: t,
    open: r,
    defaultOpen: n,
    onOpenChange: i,
    disableHoverableContent: l,
    delayDuration: v
  } = e, a = k(R, e.__scopeTooltip), d = A(o), [c, f] = s.useState(null), m = ee(), p = s.useRef(0), h = l ?? a.disableHoverableContent, y = v ?? a.delayDuration, T = s.useRef(!1), [g, x] = K({
    prop: r,
    defaultProp: n ?? !1,
    onChange: (N) => {
      N ? (a.onOpen(), document.dispatchEvent(new CustomEvent(O))) : a.onClose(), i == null || i(N);
    },
    caller: R
  }), w = s.useMemo(() => g ? T.current ? "delayed-open" : "instant-open" : "closed", [g]), P = s.useCallback(() => {
    window.clearTimeout(p.current), p.current = 0, T.current = !1, x(!0);
  }, [x]), E = s.useCallback(() => {
    window.clearTimeout(p.current), p.current = 0, x(!1);
  }, [x]), I = s.useCallback(() => {
    window.clearTimeout(p.current), p.current = window.setTimeout(() => {
      T.current = !0, x(!0), p.current = 0;
    }, y);
  }, [y, x]);
  return s.useEffect(() => () => {
    p.current && (window.clearTimeout(p.current), p.current = 0);
  }, []), /* @__PURE__ */ u(te, { ...d, children: /* @__PURE__ */ u(
    ue,
    {
      scope: o,
      contentId: m,
      open: g,
      stateAttribute: w,
      trigger: c,
      onTriggerChange: f,
      onTriggerEnter: s.useCallback(() => {
        a.isOpenDelayedRef.current ? I() : P();
      }, [a.isOpenDelayedRef, I, P]),
      onTriggerLeave: s.useCallback(() => {
        h ? E() : (window.clearTimeout(p.current), p.current = 0);
      }, [E, h]),
      onOpen: P,
      onClose: E,
      disableHoverableContent: h,
      children: t
    }
  ) });
};
$.displayName = R;
var L = "TooltipTrigger", B = s.forwardRef(
  (e, o) => {
    const { __scopeTooltip: t, ...r } = e, n = _(L, t), i = k(L, t), l = A(t), v = s.useRef(null), a = S(o, v, n.onTriggerChange), d = s.useRef(!1), c = s.useRef(!1), f = s.useCallback(() => d.current = !1, []);
    return s.useEffect(() => () => document.removeEventListener("pointerup", f), [f]), /* @__PURE__ */ u(re, { asChild: !0, ...l, children: /* @__PURE__ */ u(
      se.button,
      {
        "aria-describedby": n.open ? n.contentId : void 0,
        "data-state": n.stateAttribute,
        ...r,
        ref: a,
        onPointerMove: C(e.onPointerMove, (m) => {
          m.pointerType !== "touch" && !c.current && !i.isPointerInTransitRef.current && (n.onTriggerEnter(), c.current = !0);
        }),
        onPointerLeave: C(e.onPointerLeave, () => {
          n.onTriggerLeave(), c.current = !1;
        }),
        onPointerDown: C(e.onPointerDown, () => {
          n.open && n.onClose(), d.current = !0, document.addEventListener("pointerup", f, { once: !0 });
        }),
        onFocus: C(e.onFocus, () => {
          d.current || n.onOpen();
        }),
        onBlur: C(e.onBlur, n.onClose),
        onClick: C(e.onClick, n.onClose)
      }
    ) });
  }
);
B.displayName = L;
var M = "TooltipPortal", [pe, de] = D(M, {
  forceMount: void 0
}), U = (e) => {
  const { __scopeTooltip: o, forceMount: t, children: r, container: n } = e, i = _(M, o);
  return /* @__PURE__ */ u(pe, { scope: o, forceMount: t, children: /* @__PURE__ */ u(j, { present: t || i.open, children: /* @__PURE__ */ u(Q, { asChild: !0, container: n, children: r }) }) });
};
U.displayName = M;
var b = "TooltipContent", V = s.forwardRef(
  (e, o) => {
    const t = de(b, e.__scopeTooltip), { forceMount: r = t.forceMount, side: n = "top", ...i } = e, l = _(b, e.__scopeTooltip);
    return /* @__PURE__ */ u(j, { present: r || l.open, children: l.disableHoverableContent ? /* @__PURE__ */ u(Y, { side: n, ...i, ref: o }) : /* @__PURE__ */ u(fe, { side: n, ...i, ref: o }) });
  }
), fe = s.forwardRef((e, o) => {
  const t = _(b, e.__scopeTooltip), r = k(b, e.__scopeTooltip), n = s.useRef(null), i = S(o, n), [l, v] = s.useState(null), { trigger: a, onClose: d } = t, c = n.current, { onPointerInTransitChange: f } = r, m = s.useCallback(() => {
    v(null), f(!1);
  }, [f]), p = s.useCallback(
    (h, y) => {
      const T = h.currentTarget, g = { x: h.clientX, y: h.clientY }, x = Te(g, T.getBoundingClientRect()), w = ye(g, x), P = xe(y.getBoundingClientRect()), E = Ce([...w, ...P]);
      v(E), f(!0);
    },
    [f]
  );
  return s.useEffect(() => () => m(), [m]), s.useEffect(() => {
    if (a && c) {
      const h = (T) => p(T, c), y = (T) => p(T, a);
      return a.addEventListener("pointerleave", h), c.addEventListener("pointerleave", y), () => {
        a.removeEventListener("pointerleave", h), c.removeEventListener("pointerleave", y);
      };
    }
  }, [a, c, p, m]), s.useEffect(() => {
    if (l) {
      const h = (y) => {
        const T = y.target, g = { x: y.clientX, y: y.clientY }, x = (a == null ? void 0 : a.contains(T)) || (c == null ? void 0 : c.contains(T)), w = !ge(g, l);
        x ? m() : w && (m(), d());
      };
      return document.addEventListener("pointermove", h), () => document.removeEventListener("pointermove", h);
    }
  }, [a, c, l, d, m]), /* @__PURE__ */ u(Y, { ...e, ref: i });
}), [ve, me] = D(R, { isInside: !1 }), he = W("TooltipContent"), Y = s.forwardRef(
  (e, o) => {
    const {
      __scopeTooltip: t,
      children: r,
      "aria-label": n,
      onEscapeKeyDown: i,
      onPointerDownOutside: l,
      ...v
    } = e, a = _(b, t), d = A(t), { onClose: c } = a;
    return s.useEffect(() => (document.addEventListener(O, c), () => document.removeEventListener(O, c)), [c]), s.useEffect(() => {
      if (a.trigger) {
        const f = (m) => {
          const p = m.target;
          p != null && p.contains(a.trigger) && c();
        };
        return window.addEventListener("scroll", f, { capture: !0 }), () => window.removeEventListener("scroll", f, { capture: !0 });
      }
    }, [a.trigger, c]), /* @__PURE__ */ u(
      Z,
      {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: i,
        onPointerDownOutside: l,
        onFocusOutside: (f) => f.preventDefault(),
        onDismiss: c,
        children: /* @__PURE__ */ H(
          ne,
          {
            "data-state": a.stateAttribute,
            ...d,
            ...v,
            ref: o,
            style: {
              ...v.style,
              "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
              "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
              "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
              "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
              "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
            },
            children: [
              /* @__PURE__ */ u(he, { children: r }),
              /* @__PURE__ */ u(ve, { scope: t, isInside: !0, children: /* @__PURE__ */ u(ae, { id: a.contentId, role: "tooltip", children: n || r }) })
            ]
          }
        )
      }
    );
  }
);
V.displayName = b;
var q = "TooltipArrow", X = s.forwardRef(
  (e, o) => {
    const { __scopeTooltip: t, ...r } = e, n = A(t);
    return me(
      q,
      t
    ).isInside ? null : /* @__PURE__ */ u(oe, { ...n, ...r, ref: o });
  }
);
X.displayName = q;
function Te(e, o) {
  const t = Math.abs(o.top - e.y), r = Math.abs(o.bottom - e.y), n = Math.abs(o.right - e.x), i = Math.abs(o.left - e.x);
  switch (Math.min(t, r, n, i)) {
    case i:
      return "left";
    case n:
      return "right";
    case t:
      return "top";
    case r:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function ye(e, o, t = 5) {
  const r = [];
  switch (o) {
    case "top":
      r.push(
        { x: e.x - t, y: e.y + t },
        { x: e.x + t, y: e.y + t }
      );
      break;
    case "bottom":
      r.push(
        { x: e.x - t, y: e.y - t },
        { x: e.x + t, y: e.y - t }
      );
      break;
    case "left":
      r.push(
        { x: e.x + t, y: e.y - t },
        { x: e.x + t, y: e.y + t }
      );
      break;
    case "right":
      r.push(
        { x: e.x - t, y: e.y - t },
        { x: e.x - t, y: e.y + t }
      );
      break;
  }
  return r;
}
function xe(e) {
  const { top: o, right: t, bottom: r, left: n } = e;
  return [
    { x: n, y: o },
    { x: t, y: o },
    { x: t, y: r },
    { x: n, y: r }
  ];
}
function ge(e, o) {
  const { x: t, y: r } = e;
  let n = !1;
  for (let i = 0, l = o.length - 1; i < o.length; l = i++) {
    const v = o[i], a = o[l], d = v.x, c = v.y, f = a.x, m = a.y;
    c > r != m > r && t < (f - d) * (r - c) / (m - c) + d && (n = !n);
  }
  return n;
}
function Ce(e) {
  const o = e.slice();
  return o.sort((t, r) => t.x < r.x ? -1 : t.x > r.x ? 1 : t.y < r.y ? -1 : t.y > r.y ? 1 : 0), be(o);
}
function be(e) {
  if (e.length <= 1) return e.slice();
  const o = [];
  for (let r = 0; r < e.length; r++) {
    const n = e[r];
    for (; o.length >= 2; ) {
      const i = o[o.length - 1], l = o[o.length - 2];
      if ((i.x - l.x) * (n.y - l.y) >= (i.y - l.y) * (n.x - l.x)) o.pop();
      else break;
    }
    o.push(n);
  }
  o.pop();
  const t = [];
  for (let r = e.length - 1; r >= 0; r--) {
    const n = e[r];
    for (; t.length >= 2; ) {
      const i = t[t.length - 1], l = t[t.length - 2];
      if ((i.x - l.x) * (n.y - l.y) >= (i.y - l.y) * (n.x - l.x)) t.pop();
      else break;
    }
    t.push(n);
  }
  return t.pop(), o.length === 1 && t.length === 1 && o[0].x === t[0].x && o[0].y === t[0].y ? o : o.concat(t);
}
var we = z, Pe = $, Ee = B, Re = U, _e = V, De = X;
function Ae({
  delayDuration: e = 0,
  ...o
}) {
  return /* @__PURE__ */ u(
    we,
    {
      "data-slot": "tooltip-provider",
      delayDuration: e,
      ...o
    }
  );
}
function $e({
  ...e
}) {
  return /* @__PURE__ */ u(Ae, { children: /* @__PURE__ */ u(Pe, { "data-slot": "tooltip", ...e }) });
}
function Be({
  ...e
}) {
  return /* @__PURE__ */ u(Ee, { "data-slot": "tooltip-trigger", ...e });
}
function Ue({
  className: e,
  sideOffset: o = 0,
  children: t,
  ...r
}) {
  return /* @__PURE__ */ u(Re, { children: /* @__PURE__ */ H(
    _e,
    {
      "data-slot": "tooltip-content",
      sideOffset: o,
      className: ie(
        "bg-primary text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md px-3 py-1.5 text-xs text-balance",
        e
      ),
      ...r,
      children: [
        t,
        /* @__PURE__ */ u(De, { className: "bg-primary fill-primary z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" })
      ]
    }
  ) });
}
export {
  $e as Tooltip,
  Ue as TooltipContent,
  Ae as TooltipProvider,
  Be as TooltipTrigger
};
//# sourceMappingURL=tooltip.js.map
