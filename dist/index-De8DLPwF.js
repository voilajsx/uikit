import * as C from "react";
import { useLayoutEffect as Ce } from "react";
import * as Oe from "react-dom";
import { P as bt } from "./index-IjmGKHPz.js";
import { jsx as X } from "react/jsx-runtime";
import { u as Ut } from "./index-CRtwelBU.js";
import { c as Pe } from "./index-UFb2E87s.js";
import { u as Se } from "./index-DwYXX2sM.js";
import { u as _t } from "./index-DuekHEmj.js";
import { u as Ee } from "./index-CHDs-SiB.js";
const De = ["top", "right", "bottom", "left"], Z = Math.min, H = Math.max, ft = Math.round, lt = Math.floor, I = (t) => ({
  x: t,
  y: t
}), Le = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Te = {
  start: "end",
  end: "start"
};
function yt(t, e, n) {
  return H(t, Z(e, n));
}
function q(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function U(t) {
  return t.split("-")[0];
}
function tt(t) {
  return t.split("-")[1];
}
function Rt(t) {
  return t === "x" ? "y" : "x";
}
function Ct(t) {
  return t === "y" ? "height" : "width";
}
function z(t) {
  return ["top", "bottom"].includes(U(t)) ? "y" : "x";
}
function Ot(t) {
  return Rt(z(t));
}
function Me(t, e, n) {
  n === void 0 && (n = !1);
  const o = tt(t), i = Ot(t), r = Ct(i);
  let s = i === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return e.reference[r] > e.floating[r] && (s = ut(s)), [s, ut(s)];
}
function $e(t) {
  const e = ut(t);
  return [vt(t), e, vt(e)];
}
function vt(t) {
  return t.replace(/start|end/g, (e) => Te[e]);
}
function ke(t, e, n) {
  const o = ["left", "right"], i = ["right", "left"], r = ["top", "bottom"], s = ["bottom", "top"];
  switch (t) {
    case "top":
    case "bottom":
      return n ? e ? i : o : e ? o : i;
    case "left":
    case "right":
      return e ? r : s;
    default:
      return [];
  }
}
function Fe(t, e, n, o) {
  const i = tt(t);
  let r = ke(U(t), n === "start", o);
  return i && (r = r.map((s) => s + "-" + i), e && (r = r.concat(r.map(vt)))), r;
}
function ut(t) {
  return t.replace(/left|right|bottom|top/g, (e) => Le[e]);
}
function Ne(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function Zt(t) {
  return typeof t != "number" ? Ne(t) : {
    top: t,
    right: t,
    bottom: t,
    left: t
  };
}
function dt(t) {
  const {
    x: e,
    y: n,
    width: o,
    height: i
  } = t;
  return {
    width: o,
    height: i,
    top: n,
    left: e,
    right: e + o,
    bottom: n + i,
    x: e,
    y: n
  };
}
function Bt(t, e, n) {
  let {
    reference: o,
    floating: i
  } = t;
  const r = z(e), s = Ot(e), c = Ct(s), a = U(e), l = r === "y", f = o.x + o.width / 2 - i.width / 2, u = o.y + o.height / 2 - i.height / 2, p = o[c] / 2 - i[c] / 2;
  let d;
  switch (a) {
    case "top":
      d = {
        x: f,
        y: o.y - i.height
      };
      break;
    case "bottom":
      d = {
        x: f,
        y: o.y + o.height
      };
      break;
    case "right":
      d = {
        x: o.x + o.width,
        y: u
      };
      break;
    case "left":
      d = {
        x: o.x - i.width,
        y: u
      };
      break;
    default:
      d = {
        x: o.x,
        y: o.y
      };
  }
  switch (tt(e)) {
    case "start":
      d[s] -= p * (n && l ? -1 : 1);
      break;
    case "end":
      d[s] += p * (n && l ? -1 : 1);
      break;
  }
  return d;
}
const He = async (t, e, n) => {
  const {
    placement: o = "bottom",
    strategy: i = "absolute",
    middleware: r = [],
    platform: s
  } = n, c = r.filter(Boolean), a = await (s.isRTL == null ? void 0 : s.isRTL(e));
  let l = await s.getElementRects({
    reference: t,
    floating: e,
    strategy: i
  }), {
    x: f,
    y: u
  } = Bt(l, o, a), p = o, d = {}, m = 0;
  for (let h = 0; h < c.length; h++) {
    const {
      name: w,
      fn: g
    } = c[h], {
      x,
      y: A,
      data: y,
      reset: v
    } = await g({
      x: f,
      y: u,
      initialPlacement: o,
      placement: p,
      strategy: i,
      middlewareData: d,
      rects: l,
      platform: s,
      elements: {
        reference: t,
        floating: e
      }
    });
    f = x ?? f, u = A ?? u, d = {
      ...d,
      [w]: {
        ...d[w],
        ...y
      }
    }, v && m <= 50 && (m++, typeof v == "object" && (v.placement && (p = v.placement), v.rects && (l = v.rects === !0 ? await s.getElementRects({
      reference: t,
      floating: e,
      strategy: i
    }) : v.rects), {
      x: f,
      y: u
    } = Bt(l, p, a)), h = -1);
  }
  return {
    x: f,
    y: u,
    placement: p,
    strategy: i,
    middlewareData: d
  };
};
async function ot(t, e) {
  var n;
  e === void 0 && (e = {});
  const {
    x: o,
    y: i,
    platform: r,
    rects: s,
    elements: c,
    strategy: a
  } = t, {
    boundary: l = "clippingAncestors",
    rootBoundary: f = "viewport",
    elementContext: u = "floating",
    altBoundary: p = !1,
    padding: d = 0
  } = q(e, t), m = Zt(d), w = c[p ? u === "floating" ? "reference" : "floating" : u], g = dt(await r.getClippingRect({
    element: (n = await (r.isElement == null ? void 0 : r.isElement(w))) == null || n ? w : w.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(c.floating)),
    boundary: l,
    rootBoundary: f,
    strategy: a
  })), x = u === "floating" ? {
    x: o,
    y: i,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, A = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(c.floating)), y = await (r.isElement == null ? void 0 : r.isElement(A)) ? await (r.getScale == null ? void 0 : r.getScale(A)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, v = dt(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: c,
    rect: x,
    offsetParent: A,
    strategy: a
  }) : x);
  return {
    top: (g.top - v.top + m.top) / y.y,
    bottom: (v.bottom - g.bottom + m.bottom) / y.y,
    left: (g.left - v.left + m.left) / y.x,
    right: (v.right - g.right + m.right) / y.x
  };
}
const We = (t) => ({
  name: "arrow",
  options: t,
  async fn(e) {
    const {
      x: n,
      y: o,
      placement: i,
      rects: r,
      platform: s,
      elements: c,
      middlewareData: a
    } = e, {
      element: l,
      padding: f = 0
    } = q(t, e) || {};
    if (l == null)
      return {};
    const u = Zt(f), p = {
      x: n,
      y: o
    }, d = Ot(i), m = Ct(d), h = await s.getDimensions(l), w = d === "y", g = w ? "top" : "left", x = w ? "bottom" : "right", A = w ? "clientHeight" : "clientWidth", y = r.reference[m] + r.reference[d] - p[d] - r.floating[m], v = p[d] - r.reference[d], R = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(l));
    let O = R ? R[A] : 0;
    (!O || !await (s.isElement == null ? void 0 : s.isElement(R))) && (O = c.floating[A] || r.floating[m]);
    const T = y / 2 - v / 2, F = O / 2 - h[m] / 2 - 1, L = Z(u[g], F), $ = Z(u[x], F), k = L, S = O - h[m] - $, P = O / 2 - h[m] / 2 + T, N = yt(k, P, S), E = !a.arrow && tt(i) != null && P !== N && r.reference[m] / 2 - (P < k ? L : $) - h[m] / 2 < 0, D = E ? P < k ? P - k : P - S : 0;
    return {
      [d]: p[d] + D,
      data: {
        [d]: N,
        centerOffset: P - N - D,
        ...E && {
          alignmentOffset: D
        }
      },
      reset: E
    };
  }
}), _e = function(t) {
  return t === void 0 && (t = {}), {
    name: "flip",
    options: t,
    async fn(e) {
      var n, o;
      const {
        placement: i,
        middlewareData: r,
        rects: s,
        initialPlacement: c,
        platform: a,
        elements: l
      } = e, {
        mainAxis: f = !0,
        crossAxis: u = !0,
        fallbackPlacements: p,
        fallbackStrategy: d = "bestFit",
        fallbackAxisSideDirection: m = "none",
        flipAlignment: h = !0,
        ...w
      } = q(t, e);
      if ((n = r.arrow) != null && n.alignmentOffset)
        return {};
      const g = U(i), x = z(c), A = U(c) === c, y = await (a.isRTL == null ? void 0 : a.isRTL(l.floating)), v = p || (A || !h ? [ut(c)] : $e(c)), R = m !== "none";
      !p && R && v.push(...Fe(c, h, m, y));
      const O = [c, ...v], T = await ot(e, w), F = [];
      let L = ((o = r.flip) == null ? void 0 : o.overflows) || [];
      if (f && F.push(T[g]), u) {
        const P = Me(i, s, y);
        F.push(T[P[0]], T[P[1]]);
      }
      if (L = [...L, {
        placement: i,
        overflows: F
      }], !F.every((P) => P <= 0)) {
        var $, k;
        const P = ((($ = r.flip) == null ? void 0 : $.index) || 0) + 1, N = O[P];
        if (N && (!(u === "alignment" ? x !== z(N) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        L.every((b) => b.overflows[0] > 0 && z(b.placement) === x)))
          return {
            data: {
              index: P,
              overflows: L
            },
            reset: {
              placement: N
            }
          };
        let E = (k = L.filter((D) => D.overflows[0] <= 0).sort((D, b) => D.overflows[1] - b.overflows[1])[0]) == null ? void 0 : k.placement;
        if (!E)
          switch (d) {
            case "bestFit": {
              var S;
              const D = (S = L.filter((b) => {
                if (R) {
                  const M = z(b.placement);
                  return M === x || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  M === "y";
                }
                return !0;
              }).map((b) => [b.placement, b.overflows.filter((M) => M > 0).reduce((M, V) => M + V, 0)]).sort((b, M) => b[1] - M[1])[0]) == null ? void 0 : S[0];
              D && (E = D);
              break;
            }
            case "initialPlacement":
              E = c;
              break;
          }
        if (i !== E)
          return {
            reset: {
              placement: E
            }
          };
      }
      return {};
    }
  };
};
function Vt(t, e) {
  return {
    top: t.top - e.height,
    right: t.right - e.width,
    bottom: t.bottom - e.height,
    left: t.left - e.width
  };
}
function zt(t) {
  return De.some((e) => t[e] >= 0);
}
const Be = function(t) {
  return t === void 0 && (t = {}), {
    name: "hide",
    options: t,
    async fn(e) {
      const {
        rects: n
      } = e, {
        strategy: o = "referenceHidden",
        ...i
      } = q(t, e);
      switch (o) {
        case "referenceHidden": {
          const r = await ot(e, {
            ...i,
            elementContext: "reference"
          }), s = Vt(r, n.reference);
          return {
            data: {
              referenceHiddenOffsets: s,
              referenceHidden: zt(s)
            }
          };
        }
        case "escaped": {
          const r = await ot(e, {
            ...i,
            altBoundary: !0
          }), s = Vt(r, n.floating);
          return {
            data: {
              escapedOffsets: s,
              escaped: zt(s)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function Ve(t, e) {
  const {
    placement: n,
    platform: o,
    elements: i
  } = t, r = await (o.isRTL == null ? void 0 : o.isRTL(i.floating)), s = U(n), c = tt(n), a = z(n) === "y", l = ["left", "top"].includes(s) ? -1 : 1, f = r && a ? -1 : 1, u = q(e, t);
  let {
    mainAxis: p,
    crossAxis: d,
    alignmentAxis: m
  } = typeof u == "number" ? {
    mainAxis: u,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: u.mainAxis || 0,
    crossAxis: u.crossAxis || 0,
    alignmentAxis: u.alignmentAxis
  };
  return c && typeof m == "number" && (d = c === "end" ? m * -1 : m), a ? {
    x: d * f,
    y: p * l
  } : {
    x: p * l,
    y: d * f
  };
}
const ze = function(t) {
  return t === void 0 && (t = 0), {
    name: "offset",
    options: t,
    async fn(e) {
      var n, o;
      const {
        x: i,
        y: r,
        placement: s,
        middlewareData: c
      } = e, a = await Ve(e, t);
      return s === ((n = c.offset) == null ? void 0 : n.placement) && (o = c.arrow) != null && o.alignmentOffset ? {} : {
        x: i + a.x,
        y: r + a.y,
        data: {
          ...a,
          placement: s
        }
      };
    }
  };
}, Ie = function(t) {
  return t === void 0 && (t = {}), {
    name: "shift",
    options: t,
    async fn(e) {
      const {
        x: n,
        y: o,
        placement: i
      } = e, {
        mainAxis: r = !0,
        crossAxis: s = !1,
        limiter: c = {
          fn: (w) => {
            let {
              x: g,
              y: x
            } = w;
            return {
              x: g,
              y: x
            };
          }
        },
        ...a
      } = q(t, e), l = {
        x: n,
        y: o
      }, f = await ot(e, a), u = z(U(i)), p = Rt(u);
      let d = l[p], m = l[u];
      if (r) {
        const w = p === "y" ? "top" : "left", g = p === "y" ? "bottom" : "right", x = d + f[w], A = d - f[g];
        d = yt(x, d, A);
      }
      if (s) {
        const w = u === "y" ? "top" : "left", g = u === "y" ? "bottom" : "right", x = m + f[w], A = m - f[g];
        m = yt(x, m, A);
      }
      const h = c.fn({
        ...e,
        [p]: d,
        [u]: m
      });
      return {
        ...h,
        data: {
          x: h.x - n,
          y: h.y - o,
          enabled: {
            [p]: r,
            [u]: s
          }
        }
      };
    }
  };
}, Ye = function(t) {
  return t === void 0 && (t = {}), {
    options: t,
    fn(e) {
      const {
        x: n,
        y: o,
        placement: i,
        rects: r,
        middlewareData: s
      } = e, {
        offset: c = 0,
        mainAxis: a = !0,
        crossAxis: l = !0
      } = q(t, e), f = {
        x: n,
        y: o
      }, u = z(i), p = Rt(u);
      let d = f[p], m = f[u];
      const h = q(c, e), w = typeof h == "number" ? {
        mainAxis: h,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...h
      };
      if (a) {
        const A = p === "y" ? "height" : "width", y = r.reference[p] - r.floating[A] + w.mainAxis, v = r.reference[p] + r.reference[A] - w.mainAxis;
        d < y ? d = y : d > v && (d = v);
      }
      if (l) {
        var g, x;
        const A = p === "y" ? "width" : "height", y = ["top", "left"].includes(U(i)), v = r.reference[u] - r.floating[A] + (y && ((g = s.offset) == null ? void 0 : g[u]) || 0) + (y ? 0 : w.crossAxis), R = r.reference[u] + r.reference[A] + (y ? 0 : ((x = s.offset) == null ? void 0 : x[u]) || 0) - (y ? w.crossAxis : 0);
        m < v ? m = v : m > R && (m = R);
      }
      return {
        [p]: d,
        [u]: m
      };
    }
  };
}, je = function(t) {
  return t === void 0 && (t = {}), {
    name: "size",
    options: t,
    async fn(e) {
      var n, o;
      const {
        placement: i,
        rects: r,
        platform: s,
        elements: c
      } = e, {
        apply: a = () => {
        },
        ...l
      } = q(t, e), f = await ot(e, l), u = U(i), p = tt(i), d = z(i) === "y", {
        width: m,
        height: h
      } = r.floating;
      let w, g;
      u === "top" || u === "bottom" ? (w = u, g = p === (await (s.isRTL == null ? void 0 : s.isRTL(c.floating)) ? "start" : "end") ? "left" : "right") : (g = u, w = p === "end" ? "top" : "bottom");
      const x = h - f.top - f.bottom, A = m - f.left - f.right, y = Z(h - f[w], x), v = Z(m - f[g], A), R = !e.middlewareData.shift;
      let O = y, T = v;
      if ((n = e.middlewareData.shift) != null && n.enabled.x && (T = A), (o = e.middlewareData.shift) != null && o.enabled.y && (O = x), R && !p) {
        const L = H(f.left, 0), $ = H(f.right, 0), k = H(f.top, 0), S = H(f.bottom, 0);
        d ? T = m - 2 * (L !== 0 || $ !== 0 ? L + $ : H(f.left, f.right)) : O = h - 2 * (k !== 0 || S !== 0 ? k + S : H(f.top, f.bottom));
      }
      await a({
        ...e,
        availableWidth: T,
        availableHeight: O
      });
      const F = await s.getDimensions(c.floating);
      return m !== F.width || h !== F.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function pt() {
  return typeof window < "u";
}
function et(t) {
  return Kt(t) ? (t.nodeName || "").toLowerCase() : "#document";
}
function W(t) {
  var e;
  return (t == null || (e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function j(t) {
  var e;
  return (e = (Kt(t) ? t.ownerDocument : t.document) || window.document) == null ? void 0 : e.documentElement;
}
function Kt(t) {
  return pt() ? t instanceof Node || t instanceof W(t).Node : !1;
}
function _(t) {
  return pt() ? t instanceof Element || t instanceof W(t).Element : !1;
}
function Y(t) {
  return pt() ? t instanceof HTMLElement || t instanceof W(t).HTMLElement : !1;
}
function It(t) {
  return !pt() || typeof ShadowRoot > "u" ? !1 : t instanceof ShadowRoot || t instanceof W(t).ShadowRoot;
}
function rt(t) {
  const {
    overflow: e,
    overflowX: n,
    overflowY: o,
    display: i
  } = B(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + o + n) && !["inline", "contents"].includes(i);
}
function Xe(t) {
  return ["table", "td", "th"].includes(et(t));
}
function ht(t) {
  return [":popover-open", ":modal"].some((e) => {
    try {
      return t.matches(e);
    } catch {
      return !1;
    }
  });
}
function Pt(t) {
  const e = St(), n = _(t) ? B(t) : t;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((o) => n[o] ? n[o] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !e && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !e && (n.filter ? n.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((o) => (n.willChange || "").includes(o)) || ["paint", "layout", "strict", "content"].some((o) => (n.contain || "").includes(o));
}
function qe(t) {
  let e = K(t);
  for (; Y(e) && !Q(e); ) {
    if (Pt(e))
      return e;
    if (ht(e))
      return null;
    e = K(e);
  }
  return null;
}
function St() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Q(t) {
  return ["html", "body", "#document"].includes(et(t));
}
function B(t) {
  return W(t).getComputedStyle(t);
}
function gt(t) {
  return _(t) ? {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  } : {
    scrollLeft: t.scrollX,
    scrollTop: t.scrollY
  };
}
function K(t) {
  if (et(t) === "html")
    return t;
  const e = (
    // Step into the shadow DOM of the parent of a slotted node.
    t.assignedSlot || // DOM Element detected.
    t.parentNode || // ShadowRoot detected.
    It(t) && t.host || // Fallback.
    j(t)
  );
  return It(e) ? e.host : e;
}
function Gt(t) {
  const e = K(t);
  return Q(e) ? t.ownerDocument ? t.ownerDocument.body : t.body : Y(e) && rt(e) ? e : Gt(e);
}
function it(t, e, n) {
  var o;
  e === void 0 && (e = []), n === void 0 && (n = !0);
  const i = Gt(t), r = i === ((o = t.ownerDocument) == null ? void 0 : o.body), s = W(i);
  if (r) {
    const c = At(s);
    return e.concat(s, s.visualViewport || [], rt(i) ? i : [], c && n ? it(c) : []);
  }
  return e.concat(i, it(i, [], n));
}
function At(t) {
  return t.parent && Object.getPrototypeOf(t.parent) ? t.frameElement : null;
}
function Jt(t) {
  const e = B(t);
  let n = parseFloat(e.width) || 0, o = parseFloat(e.height) || 0;
  const i = Y(t), r = i ? t.offsetWidth : n, s = i ? t.offsetHeight : o, c = ft(n) !== r || ft(o) !== s;
  return c && (n = r, o = s), {
    width: n,
    height: o,
    $: c
  };
}
function Et(t) {
  return _(t) ? t : t.contextElement;
}
function J(t) {
  const e = Et(t);
  if (!Y(e))
    return I(1);
  const n = e.getBoundingClientRect(), {
    width: o,
    height: i,
    $: r
  } = Jt(e);
  let s = (r ? ft(n.width) : n.width) / o, c = (r ? ft(n.height) : n.height) / i;
  return (!s || !Number.isFinite(s)) && (s = 1), (!c || !Number.isFinite(c)) && (c = 1), {
    x: s,
    y: c
  };
}
const Ue = /* @__PURE__ */ I(0);
function Qt(t) {
  const e = W(t);
  return !St() || !e.visualViewport ? Ue : {
    x: e.visualViewport.offsetLeft,
    y: e.visualViewport.offsetTop
  };
}
function Ze(t, e, n) {
  return e === void 0 && (e = !1), !n || e && n !== W(t) ? !1 : e;
}
function G(t, e, n, o) {
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  const i = t.getBoundingClientRect(), r = Et(t);
  let s = I(1);
  e && (o ? _(o) && (s = J(o)) : s = J(t));
  const c = Ze(r, n, o) ? Qt(r) : I(0);
  let a = (i.left + c.x) / s.x, l = (i.top + c.y) / s.y, f = i.width / s.x, u = i.height / s.y;
  if (r) {
    const p = W(r), d = o && _(o) ? W(o) : o;
    let m = p, h = At(m);
    for (; h && o && d !== m; ) {
      const w = J(h), g = h.getBoundingClientRect(), x = B(h), A = g.left + (h.clientLeft + parseFloat(x.paddingLeft)) * w.x, y = g.top + (h.clientTop + parseFloat(x.paddingTop)) * w.y;
      a *= w.x, l *= w.y, f *= w.x, u *= w.y, a += A, l += y, m = W(h), h = At(m);
    }
  }
  return dt({
    width: f,
    height: u,
    x: a,
    y: l
  });
}
function Dt(t, e) {
  const n = gt(t).scrollLeft;
  return e ? e.left + n : G(j(t)).left + n;
}
function te(t, e, n) {
  n === void 0 && (n = !1);
  const o = t.getBoundingClientRect(), i = o.left + e.scrollLeft - (n ? 0 : (
    // RTL <body> scrollbar.
    Dt(t, o)
  )), r = o.top + e.scrollTop;
  return {
    x: i,
    y: r
  };
}
function Ke(t) {
  let {
    elements: e,
    rect: n,
    offsetParent: o,
    strategy: i
  } = t;
  const r = i === "fixed", s = j(o), c = e ? ht(e.floating) : !1;
  if (o === s || c && r)
    return n;
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = I(1);
  const f = I(0), u = Y(o);
  if ((u || !u && !r) && ((et(o) !== "body" || rt(s)) && (a = gt(o)), Y(o))) {
    const d = G(o);
    l = J(o), f.x = d.x + o.clientLeft, f.y = d.y + o.clientTop;
  }
  const p = s && !u && !r ? te(s, a, !0) : I(0);
  return {
    width: n.width * l.x,
    height: n.height * l.y,
    x: n.x * l.x - a.scrollLeft * l.x + f.x + p.x,
    y: n.y * l.y - a.scrollTop * l.y + f.y + p.y
  };
}
function Ge(t) {
  return Array.from(t.getClientRects());
}
function Je(t) {
  const e = j(t), n = gt(t), o = t.ownerDocument.body, i = H(e.scrollWidth, e.clientWidth, o.scrollWidth, o.clientWidth), r = H(e.scrollHeight, e.clientHeight, o.scrollHeight, o.clientHeight);
  let s = -n.scrollLeft + Dt(t);
  const c = -n.scrollTop;
  return B(o).direction === "rtl" && (s += H(e.clientWidth, o.clientWidth) - i), {
    width: i,
    height: r,
    x: s,
    y: c
  };
}
function Qe(t, e) {
  const n = W(t), o = j(t), i = n.visualViewport;
  let r = o.clientWidth, s = o.clientHeight, c = 0, a = 0;
  if (i) {
    r = i.width, s = i.height;
    const l = St();
    (!l || l && e === "fixed") && (c = i.offsetLeft, a = i.offsetTop);
  }
  return {
    width: r,
    height: s,
    x: c,
    y: a
  };
}
function tn(t, e) {
  const n = G(t, !0, e === "fixed"), o = n.top + t.clientTop, i = n.left + t.clientLeft, r = Y(t) ? J(t) : I(1), s = t.clientWidth * r.x, c = t.clientHeight * r.y, a = i * r.x, l = o * r.y;
  return {
    width: s,
    height: c,
    x: a,
    y: l
  };
}
function Yt(t, e, n) {
  let o;
  if (e === "viewport")
    o = Qe(t, n);
  else if (e === "document")
    o = Je(j(t));
  else if (_(e))
    o = tn(e, n);
  else {
    const i = Qt(t);
    o = {
      x: e.x - i.x,
      y: e.y - i.y,
      width: e.width,
      height: e.height
    };
  }
  return dt(o);
}
function ee(t, e) {
  const n = K(t);
  return n === e || !_(n) || Q(n) ? !1 : B(n).position === "fixed" || ee(n, e);
}
function en(t, e) {
  const n = e.get(t);
  if (n)
    return n;
  let o = it(t, [], !1).filter((c) => _(c) && et(c) !== "body"), i = null;
  const r = B(t).position === "fixed";
  let s = r ? K(t) : t;
  for (; _(s) && !Q(s); ) {
    const c = B(s), a = Pt(s);
    !a && c.position === "fixed" && (i = null), (r ? !a && !i : !a && c.position === "static" && !!i && ["absolute", "fixed"].includes(i.position) || rt(s) && !a && ee(t, s)) ? o = o.filter((f) => f !== s) : i = c, s = K(s);
  }
  return e.set(t, o), o;
}
function nn(t) {
  let {
    element: e,
    boundary: n,
    rootBoundary: o,
    strategy: i
  } = t;
  const s = [...n === "clippingAncestors" ? ht(e) ? [] : en(e, this._c) : [].concat(n), o], c = s[0], a = s.reduce((l, f) => {
    const u = Yt(e, f, i);
    return l.top = H(u.top, l.top), l.right = Z(u.right, l.right), l.bottom = Z(u.bottom, l.bottom), l.left = H(u.left, l.left), l;
  }, Yt(e, c, i));
  return {
    width: a.right - a.left,
    height: a.bottom - a.top,
    x: a.left,
    y: a.top
  };
}
function on(t) {
  const {
    width: e,
    height: n
  } = Jt(t);
  return {
    width: e,
    height: n
  };
}
function rn(t, e, n) {
  const o = Y(e), i = j(e), r = n === "fixed", s = G(t, !0, r, e);
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const a = I(0);
  function l() {
    a.x = Dt(i);
  }
  if (o || !o && !r)
    if ((et(e) !== "body" || rt(i)) && (c = gt(e)), o) {
      const d = G(e, !0, r, e);
      a.x = d.x + e.clientLeft, a.y = d.y + e.clientTop;
    } else i && l();
  r && !o && i && l();
  const f = i && !o && !r ? te(i, c) : I(0), u = s.left + c.scrollLeft - a.x - f.x, p = s.top + c.scrollTop - a.y - f.y;
  return {
    x: u,
    y: p,
    width: s.width,
    height: s.height
  };
}
function wt(t) {
  return B(t).position === "static";
}
function jt(t, e) {
  if (!Y(t) || B(t).position === "fixed")
    return null;
  if (e)
    return e(t);
  let n = t.offsetParent;
  return j(t) === n && (n = n.ownerDocument.body), n;
}
function ne(t, e) {
  const n = W(t);
  if (ht(t))
    return n;
  if (!Y(t)) {
    let i = K(t);
    for (; i && !Q(i); ) {
      if (_(i) && !wt(i))
        return i;
      i = K(i);
    }
    return n;
  }
  let o = jt(t, e);
  for (; o && Xe(o) && wt(o); )
    o = jt(o, e);
  return o && Q(o) && wt(o) && !Pt(o) ? n : o || qe(t) || n;
}
const sn = async function(t) {
  const e = this.getOffsetParent || ne, n = this.getDimensions, o = await n(t.floating);
  return {
    reference: rn(t.reference, await e(t.floating), t.strategy),
    floating: {
      x: 0,
      y: 0,
      width: o.width,
      height: o.height
    }
  };
};
function cn(t) {
  return B(t).direction === "rtl";
}
const ln = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Ke,
  getDocumentElement: j,
  getClippingRect: nn,
  getOffsetParent: ne,
  getElementRects: sn,
  getClientRects: Ge,
  getDimensions: on,
  getScale: J,
  isElement: _,
  isRTL: cn
};
function oe(t, e) {
  return t.x === e.x && t.y === e.y && t.width === e.width && t.height === e.height;
}
function an(t, e) {
  let n = null, o;
  const i = j(t);
  function r() {
    var c;
    clearTimeout(o), (c = n) == null || c.disconnect(), n = null;
  }
  function s(c, a) {
    c === void 0 && (c = !1), a === void 0 && (a = 1), r();
    const l = t.getBoundingClientRect(), {
      left: f,
      top: u,
      width: p,
      height: d
    } = l;
    if (c || e(), !p || !d)
      return;
    const m = lt(u), h = lt(i.clientWidth - (f + p)), w = lt(i.clientHeight - (u + d)), g = lt(f), A = {
      rootMargin: -m + "px " + -h + "px " + -w + "px " + -g + "px",
      threshold: H(0, Z(1, a)) || 1
    };
    let y = !0;
    function v(R) {
      const O = R[0].intersectionRatio;
      if (O !== a) {
        if (!y)
          return s();
        O ? s(!1, O) : o = setTimeout(() => {
          s(!1, 1e-7);
        }, 1e3);
      }
      O === 1 && !oe(l, t.getBoundingClientRect()) && s(), y = !1;
    }
    try {
      n = new IntersectionObserver(v, {
        ...A,
        // Handle <iframe>s
        root: i.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(v, A);
    }
    n.observe(t);
  }
  return s(!0), r;
}
function fn(t, e, n, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: i = !0,
    ancestorResize: r = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: c = typeof IntersectionObserver == "function",
    animationFrame: a = !1
  } = o, l = Et(t), f = i || r ? [...l ? it(l) : [], ...it(e)] : [];
  f.forEach((g) => {
    i && g.addEventListener("scroll", n, {
      passive: !0
    }), r && g.addEventListener("resize", n);
  });
  const u = l && c ? an(l, n) : null;
  let p = -1, d = null;
  s && (d = new ResizeObserver((g) => {
    let [x] = g;
    x && x.target === l && d && (d.unobserve(e), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
      var A;
      (A = d) == null || A.observe(e);
    })), n();
  }), l && !a && d.observe(l), d.observe(e));
  let m, h = a ? G(t) : null;
  a && w();
  function w() {
    const g = G(t);
    h && !oe(h, g) && n(), h = g, m = requestAnimationFrame(w);
  }
  return n(), () => {
    var g;
    f.forEach((x) => {
      i && x.removeEventListener("scroll", n), r && x.removeEventListener("resize", n);
    }), u == null || u(), (g = d) == null || g.disconnect(), d = null, a && cancelAnimationFrame(m);
  };
}
const un = ze, dn = Ie, mn = _e, pn = je, hn = Be, Xt = We, gn = Ye, wn = (t, e, n) => {
  const o = /* @__PURE__ */ new Map(), i = {
    platform: ln,
    ...n
  }, r = {
    ...i.platform,
    _c: o
  };
  return He(t, e, {
    ...i,
    platform: r
  });
};
var xn = typeof document < "u", yn = function() {
}, at = xn ? Ce : yn;
function mt(t, e) {
  if (t === e)
    return !0;
  if (typeof t != typeof e)
    return !1;
  if (typeof t == "function" && t.toString() === e.toString())
    return !0;
  let n, o, i;
  if (t && e && typeof t == "object") {
    if (Array.isArray(t)) {
      if (n = t.length, n !== e.length) return !1;
      for (o = n; o-- !== 0; )
        if (!mt(t[o], e[o]))
          return !1;
      return !0;
    }
    if (i = Object.keys(t), n = i.length, n !== Object.keys(e).length)
      return !1;
    for (o = n; o-- !== 0; )
      if (!{}.hasOwnProperty.call(e, i[o]))
        return !1;
    for (o = n; o-- !== 0; ) {
      const r = i[o];
      if (!(r === "_owner" && t.$$typeof) && !mt(t[r], e[r]))
        return !1;
    }
    return !0;
  }
  return t !== t && e !== e;
}
function ie(t) {
  return typeof window > "u" ? 1 : (t.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function qt(t, e) {
  const n = ie(t);
  return Math.round(e * n) / n;
}
function xt(t) {
  const e = C.useRef(t);
  return at(() => {
    e.current = t;
  }), e;
}
function vn(t) {
  t === void 0 && (t = {});
  const {
    placement: e = "bottom",
    strategy: n = "absolute",
    middleware: o = [],
    platform: i,
    elements: {
      reference: r,
      floating: s
    } = {},
    transform: c = !0,
    whileElementsMounted: a,
    open: l
  } = t, [f, u] = C.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: e,
    middlewareData: {},
    isPositioned: !1
  }), [p, d] = C.useState(o);
  mt(p, o) || d(o);
  const [m, h] = C.useState(null), [w, g] = C.useState(null), x = C.useCallback((b) => {
    b !== R.current && (R.current = b, h(b));
  }, []), A = C.useCallback((b) => {
    b !== O.current && (O.current = b, g(b));
  }, []), y = r || m, v = s || w, R = C.useRef(null), O = C.useRef(null), T = C.useRef(f), F = a != null, L = xt(a), $ = xt(i), k = xt(l), S = C.useCallback(() => {
    if (!R.current || !O.current)
      return;
    const b = {
      placement: e,
      strategy: n,
      middleware: p
    };
    $.current && (b.platform = $.current), wn(R.current, O.current, b).then((M) => {
      const V = {
        ...M,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: k.current !== !1
      };
      P.current && !mt(T.current, V) && (T.current = V, Oe.flushSync(() => {
        u(V);
      }));
    });
  }, [p, e, n, $, k]);
  at(() => {
    l === !1 && T.current.isPositioned && (T.current.isPositioned = !1, u((b) => ({
      ...b,
      isPositioned: !1
    })));
  }, [l]);
  const P = C.useRef(!1);
  at(() => (P.current = !0, () => {
    P.current = !1;
  }), []), at(() => {
    if (y && (R.current = y), v && (O.current = v), y && v) {
      if (L.current)
        return L.current(y, v, S);
      S();
    }
  }, [y, v, S, L, F]);
  const N = C.useMemo(() => ({
    reference: R,
    floating: O,
    setReference: x,
    setFloating: A
  }), [x, A]), E = C.useMemo(() => ({
    reference: y,
    floating: v
  }), [y, v]), D = C.useMemo(() => {
    const b = {
      position: n,
      left: 0,
      top: 0
    };
    if (!E.floating)
      return b;
    const M = qt(E.floating, f.x), V = qt(E.floating, f.y);
    return c ? {
      ...b,
      transform: "translate(" + M + "px, " + V + "px)",
      ...ie(E.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: M,
      top: V
    };
  }, [n, c, E.floating, f.x, f.y]);
  return C.useMemo(() => ({
    ...f,
    update: S,
    refs: N,
    elements: E,
    floatingStyles: D
  }), [f, S, N, E, D]);
}
const An = (t) => {
  function e(n) {
    return {}.hasOwnProperty.call(n, "current");
  }
  return {
    name: "arrow",
    options: t,
    fn(n) {
      const {
        element: o,
        padding: i
      } = typeof t == "function" ? t(n) : t;
      return o && e(o) ? o.current != null ? Xt({
        element: o.current,
        padding: i
      }).fn(n) : {} : o ? Xt({
        element: o,
        padding: i
      }).fn(n) : {};
    }
  };
}, bn = (t, e) => ({
  ...un(t),
  options: [t, e]
}), Rn = (t, e) => ({
  ...dn(t),
  options: [t, e]
}), Cn = (t, e) => ({
  ...gn(t),
  options: [t, e]
}), On = (t, e) => ({
  ...mn(t),
  options: [t, e]
}), Pn = (t, e) => ({
  ...pn(t),
  options: [t, e]
}), Sn = (t, e) => ({
  ...hn(t),
  options: [t, e]
}), En = (t, e) => ({
  ...An(t),
  options: [t, e]
});
var Dn = "Arrow", re = C.forwardRef((t, e) => {
  const { children: n, width: o = 10, height: i = 5, ...r } = t;
  return /* @__PURE__ */ X(
    bt.svg,
    {
      ...r,
      ref: e,
      width: o,
      height: i,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: t.asChild ? n : /* @__PURE__ */ X("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
re.displayName = Dn;
var Ln = re, Lt = "Popper", [se, jn] = Pe(Lt), [Tn, ce] = se(Lt), le = (t) => {
  const { __scopePopper: e, children: n } = t, [o, i] = C.useState(null);
  return /* @__PURE__ */ X(Tn, { scope: e, anchor: o, onAnchorChange: i, children: n });
};
le.displayName = Lt;
var ae = "PopperAnchor", fe = C.forwardRef(
  (t, e) => {
    const { __scopePopper: n, virtualRef: o, ...i } = t, r = ce(ae, n), s = C.useRef(null), c = Ut(e, s);
    return C.useEffect(() => {
      r.onAnchorChange((o == null ? void 0 : o.current) || s.current);
    }), o ? null : /* @__PURE__ */ X(bt.div, { ...i, ref: c });
  }
);
fe.displayName = ae;
var Tt = "PopperContent", [Mn, $n] = se(Tt), ue = C.forwardRef(
  (t, e) => {
    var Mt, $t, kt, Ft, Nt, Ht;
    const {
      __scopePopper: n,
      side: o = "bottom",
      sideOffset: i = 0,
      align: r = "center",
      alignOffset: s = 0,
      arrowPadding: c = 0,
      avoidCollisions: a = !0,
      collisionBoundary: l = [],
      collisionPadding: f = 0,
      sticky: u = "partial",
      hideWhenDetached: p = !1,
      updatePositionStrategy: d = "optimized",
      onPlaced: m,
      ...h
    } = t, w = ce(Tt, n), [g, x] = C.useState(null), A = Ut(e, (nt) => x(nt)), [y, v] = C.useState(null), R = Ee(y), O = (R == null ? void 0 : R.width) ?? 0, T = (R == null ? void 0 : R.height) ?? 0, F = o + (r !== "center" ? "-" + r : ""), L = typeof f == "number" ? f : { top: 0, right: 0, bottom: 0, left: 0, ...f }, $ = Array.isArray(l) ? l : [l], k = $.length > 0, S = {
      padding: L,
      boundary: $.filter(Fn),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: k
    }, { refs: P, floatingStyles: N, placement: E, isPositioned: D, middlewareData: b } = vn({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: F,
      whileElementsMounted: (...nt) => fn(...nt, {
        animationFrame: d === "always"
      }),
      elements: {
        reference: w.anchor
      },
      middleware: [
        bn({ mainAxis: i + T, alignmentAxis: s }),
        a && Rn({
          mainAxis: !0,
          crossAxis: !1,
          limiter: u === "partial" ? Cn() : void 0,
          ...S
        }),
        a && On({ ...S }),
        Pn({
          ...S,
          apply: ({ elements: nt, rects: Wt, availableWidth: ve, availableHeight: Ae }) => {
            const { width: be, height: Re } = Wt.reference, ct = nt.floating.style;
            ct.setProperty("--radix-popper-available-width", `${ve}px`), ct.setProperty("--radix-popper-available-height", `${Ae}px`), ct.setProperty("--radix-popper-anchor-width", `${be}px`), ct.setProperty("--radix-popper-anchor-height", `${Re}px`);
          }
        }),
        y && En({ element: y, padding: c }),
        Nn({ arrowWidth: O, arrowHeight: T }),
        p && Sn({ strategy: "referenceHidden", ...S })
      ]
    }), [M, V] = pe(E), st = Se(m);
    _t(() => {
      D && (st == null || st());
    }, [D, st]);
    const he = (Mt = b.arrow) == null ? void 0 : Mt.x, ge = ($t = b.arrow) == null ? void 0 : $t.y, we = ((kt = b.arrow) == null ? void 0 : kt.centerOffset) !== 0, [xe, ye] = C.useState();
    return _t(() => {
      g && ye(window.getComputedStyle(g).zIndex);
    }, [g]), /* @__PURE__ */ X(
      "div",
      {
        ref: P.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...N,
          transform: D ? N.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: xe,
          "--radix-popper-transform-origin": [
            (Ft = b.transformOrigin) == null ? void 0 : Ft.x,
            (Nt = b.transformOrigin) == null ? void 0 : Nt.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((Ht = b.hide) == null ? void 0 : Ht.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: t.dir,
        children: /* @__PURE__ */ X(
          Mn,
          {
            scope: n,
            placedSide: M,
            onArrowChange: v,
            arrowX: he,
            arrowY: ge,
            shouldHideArrow: we,
            children: /* @__PURE__ */ X(
              bt.div,
              {
                "data-side": M,
                "data-align": V,
                ...h,
                ref: A,
                style: {
                  ...h.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: D ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
ue.displayName = Tt;
var de = "PopperArrow", kn = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, me = C.forwardRef(function(e, n) {
  const { __scopePopper: o, ...i } = e, r = $n(de, o), s = kn[r.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ X(
      "span",
      {
        ref: r.onArrowChange,
        style: {
          position: "absolute",
          left: r.arrowX,
          top: r.arrowY,
          [s]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0"
          }[r.placedSide],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: "rotate(180deg)",
            left: "translateY(50%) rotate(-90deg) translateX(50%)"
          }[r.placedSide],
          visibility: r.shouldHideArrow ? "hidden" : void 0
        },
        children: /* @__PURE__ */ X(
          Ln,
          {
            ...i,
            ref: n,
            style: {
              ...i.style,
              // ensures the element can be measured correctly (mostly for if SVG)
              display: "block"
            }
          }
        )
      }
    )
  );
});
me.displayName = de;
function Fn(t) {
  return t !== null;
}
var Nn = (t) => ({
  name: "transformOrigin",
  options: t,
  fn(e) {
    var w, g, x;
    const { placement: n, rects: o, middlewareData: i } = e, s = ((w = i.arrow) == null ? void 0 : w.centerOffset) !== 0, c = s ? 0 : t.arrowWidth, a = s ? 0 : t.arrowHeight, [l, f] = pe(n), u = { start: "0%", center: "50%", end: "100%" }[f], p = (((g = i.arrow) == null ? void 0 : g.x) ?? 0) + c / 2, d = (((x = i.arrow) == null ? void 0 : x.y) ?? 0) + a / 2;
    let m = "", h = "";
    return l === "bottom" ? (m = s ? u : `${p}px`, h = `${-a}px`) : l === "top" ? (m = s ? u : `${p}px`, h = `${o.floating.height + a}px`) : l === "right" ? (m = `${-a}px`, h = s ? u : `${d}px`) : l === "left" && (m = `${o.floating.width + a}px`, h = s ? u : `${d}px`), { data: { x: m, y: h } };
  }
});
function pe(t) {
  const [e, n = "center"] = t.split("-");
  return [e, n];
}
var Xn = le, qn = fe, Un = ue, Zn = me;
export {
  qn as A,
  Un as C,
  Xn as R,
  Zn as a,
  jn as c
};
//# sourceMappingURL=index-De8DLPwF.js.map
