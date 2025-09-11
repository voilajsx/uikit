import * as R from "react";
import { useLayoutEffect as Ae } from "react";
import * as Re from "react-dom";
import { P as At } from "./index-BVRIAMfe.js";
import { jsx as j } from "react/jsx-runtime";
import { u as Yt } from "./index-DQH6odE9.js";
import { c as Ce } from "./index-DFZozV_h.js";
import { u as Pe } from "./index-0ioNhtNM.js";
import { u as $t } from "./index-CCKe-Mpx.js";
import { u as Oe } from "./index-BGQepRFJ.js";
const Se = ["top", "right", "bottom", "left"], Z = Math.min, W = Math.max, at = Math.round, ct = Math.floor, I = (t) => ({
  x: t,
  y: t
}), Ee = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Le = {
  start: "end",
  end: "start"
};
function yt(t, e, n) {
  return W(t, Z(e, n));
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
const De = /* @__PURE__ */ new Set(["top", "bottom"]);
function z(t) {
  return De.has(U(t)) ? "y" : "x";
}
function Pt(t) {
  return Rt(z(t));
}
function Me(t, e, n) {
  n === void 0 && (n = !1);
  const o = tt(t), r = Pt(t), i = Ct(r);
  let s = r === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return e.reference[i] > e.floating[i] && (s = ft(s)), [s, ft(s)];
}
function Te(t) {
  const e = ft(t);
  return [vt(t), e, vt(e)];
}
function vt(t) {
  return t.replace(/start|end/g, (e) => Le[e]);
}
const kt = ["left", "right"], Ft = ["right", "left"], $e = ["top", "bottom"], ke = ["bottom", "top"];
function Fe(t, e, n) {
  switch (t) {
    case "top":
    case "bottom":
      return n ? e ? Ft : kt : e ? kt : Ft;
    case "left":
    case "right":
      return e ? $e : ke;
    default:
      return [];
  }
}
function Ne(t, e, n, o) {
  const r = tt(t);
  let i = Fe(U(t), n === "start", o);
  return r && (i = i.map((s) => s + "-" + r), e && (i = i.concat(i.map(vt)))), i;
}
function ft(t) {
  return t.replace(/left|right|bottom|top/g, (e) => Ee[e]);
}
function We(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function jt(t) {
  return typeof t != "number" ? We(t) : {
    top: t,
    right: t,
    bottom: t,
    left: t
  };
}
function ut(t) {
  const {
    x: e,
    y: n,
    width: o,
    height: r
  } = t;
  return {
    width: o,
    height: r,
    top: n,
    left: e,
    right: e + o,
    bottom: n + r,
    x: e,
    y: n
  };
}
function Nt(t, e, n) {
  let {
    reference: o,
    floating: r
  } = t;
  const i = z(e), s = Pt(e), c = Ct(s), l = U(e), a = i === "y", f = o.x + o.width / 2 - r.width / 2, u = o.y + o.height / 2 - r.height / 2, p = o[c] / 2 - r[c] / 2;
  let d;
  switch (l) {
    case "top":
      d = {
        x: f,
        y: o.y - r.height
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
        x: o.x - r.width,
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
      d[s] -= p * (n && a ? -1 : 1);
      break;
    case "end":
      d[s] += p * (n && a ? -1 : 1);
      break;
  }
  return d;
}
const He = async (t, e, n) => {
  const {
    placement: o = "bottom",
    strategy: r = "absolute",
    middleware: i = [],
    platform: s
  } = n, c = i.filter(Boolean), l = await (s.isRTL == null ? void 0 : s.isRTL(e));
  let a = await s.getElementRects({
    reference: t,
    floating: e,
    strategy: r
  }), {
    x: f,
    y: u
  } = Nt(a, o, l), p = o, d = {}, m = 0;
  for (let h = 0; h < c.length; h++) {
    const {
      name: w,
      fn: g
    } = c[h], {
      x,
      y: b,
      data: y,
      reset: v
    } = await g({
      x: f,
      y: u,
      initialPlacement: o,
      placement: p,
      strategy: r,
      middlewareData: d,
      rects: a,
      platform: s,
      elements: {
        reference: t,
        floating: e
      }
    });
    f = x ?? f, u = b ?? u, d = {
      ...d,
      [w]: {
        ...d[w],
        ...y
      }
    }, v && m <= 50 && (m++, typeof v == "object" && (v.placement && (p = v.placement), v.rects && (a = v.rects === !0 ? await s.getElementRects({
      reference: t,
      floating: e,
      strategy: r
    }) : v.rects), {
      x: f,
      y: u
    } = Nt(a, p, l)), h = -1);
  }
  return {
    x: f,
    y: u,
    placement: p,
    strategy: r,
    middlewareData: d
  };
};
async function ot(t, e) {
  var n;
  e === void 0 && (e = {});
  const {
    x: o,
    y: r,
    platform: i,
    rects: s,
    elements: c,
    strategy: l
  } = t, {
    boundary: a = "clippingAncestors",
    rootBoundary: f = "viewport",
    elementContext: u = "floating",
    altBoundary: p = !1,
    padding: d = 0
  } = q(e, t), m = jt(d), w = c[p ? u === "floating" ? "reference" : "floating" : u], g = ut(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(w))) == null || n ? w : w.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(c.floating)),
    boundary: a,
    rootBoundary: f,
    strategy: l
  })), x = u === "floating" ? {
    x: o,
    y: r,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, b = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(c.floating)), y = await (i.isElement == null ? void 0 : i.isElement(b)) ? await (i.getScale == null ? void 0 : i.getScale(b)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, v = ut(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: c,
    rect: x,
    offsetParent: b,
    strategy: l
  }) : x);
  return {
    top: (g.top - v.top + m.top) / y.y,
    bottom: (v.bottom - g.bottom + m.bottom) / y.y,
    left: (g.left - v.left + m.left) / y.x,
    right: (v.right - g.right + m.right) / y.x
  };
}
const _e = (t) => ({
  name: "arrow",
  options: t,
  async fn(e) {
    const {
      x: n,
      y: o,
      placement: r,
      rects: i,
      platform: s,
      elements: c,
      middlewareData: l
    } = e, {
      element: a,
      padding: f = 0
    } = q(t, e) || {};
    if (a == null)
      return {};
    const u = jt(f), p = {
      x: n,
      y: o
    }, d = Pt(r), m = Ct(d), h = await s.getDimensions(a), w = d === "y", g = w ? "top" : "left", x = w ? "bottom" : "right", b = w ? "clientHeight" : "clientWidth", y = i.reference[m] + i.reference[d] - p[d] - i.floating[m], v = p[d] - i.reference[d], P = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(a));
    let C = P ? P[b] : 0;
    (!C || !await (s.isElement == null ? void 0 : s.isElement(P))) && (C = c.floating[b] || i.floating[m]);
    const M = y / 2 - v / 2, F = C / 2 - h[m] / 2 - 1, D = Z(u[g], F), $ = Z(u[x], F), k = D, S = C - h[m] - $, O = C / 2 - h[m] / 2 + M, N = yt(k, O, S), E = !l.arrow && tt(r) != null && O !== N && i.reference[m] / 2 - (O < k ? D : $) - h[m] / 2 < 0, L = E ? O < k ? O - k : O - S : 0;
    return {
      [d]: p[d] + L,
      data: {
        [d]: N,
        centerOffset: O - N - L,
        ...E && {
          alignmentOffset: L
        }
      },
      reset: E
    };
  }
}), Be = function(t) {
  return t === void 0 && (t = {}), {
    name: "flip",
    options: t,
    async fn(e) {
      var n, o;
      const {
        placement: r,
        middlewareData: i,
        rects: s,
        initialPlacement: c,
        platform: l,
        elements: a
      } = e, {
        mainAxis: f = !0,
        crossAxis: u = !0,
        fallbackPlacements: p,
        fallbackStrategy: d = "bestFit",
        fallbackAxisSideDirection: m = "none",
        flipAlignment: h = !0,
        ...w
      } = q(t, e);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const g = U(r), x = z(c), b = U(c) === c, y = await (l.isRTL == null ? void 0 : l.isRTL(a.floating)), v = p || (b || !h ? [ft(c)] : Te(c)), P = m !== "none";
      !p && P && v.push(...Ne(c, h, m, y));
      const C = [c, ...v], M = await ot(e, w), F = [];
      let D = ((o = i.flip) == null ? void 0 : o.overflows) || [];
      if (f && F.push(M[g]), u) {
        const O = Me(r, s, y);
        F.push(M[O[0]], M[O[1]]);
      }
      if (D = [...D, {
        placement: r,
        overflows: F
      }], !F.every((O) => O <= 0)) {
        var $, k;
        const O = ((($ = i.flip) == null ? void 0 : $.index) || 0) + 1, N = C[O];
        if (N && (!(u === "alignment" ? x !== z(N) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        D.every((A) => z(A.placement) === x ? A.overflows[0] > 0 : !0)))
          return {
            data: {
              index: O,
              overflows: D
            },
            reset: {
              placement: N
            }
          };
        let E = (k = D.filter((L) => L.overflows[0] <= 0).sort((L, A) => L.overflows[1] - A.overflows[1])[0]) == null ? void 0 : k.placement;
        if (!E)
          switch (d) {
            case "bestFit": {
              var S;
              const L = (S = D.filter((A) => {
                if (P) {
                  const T = z(A.placement);
                  return T === x || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  T === "y";
                }
                return !0;
              }).map((A) => [A.placement, A.overflows.filter((T) => T > 0).reduce((T, V) => T + V, 0)]).sort((A, T) => A[1] - T[1])[0]) == null ? void 0 : S[0];
              L && (E = L);
              break;
            }
            case "initialPlacement":
              E = c;
              break;
          }
        if (r !== E)
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
function Wt(t, e) {
  return {
    top: t.top - e.height,
    right: t.right - e.width,
    bottom: t.bottom - e.height,
    left: t.left - e.width
  };
}
function Ht(t) {
  return Se.some((e) => t[e] >= 0);
}
const Ve = function(t) {
  return t === void 0 && (t = {}), {
    name: "hide",
    options: t,
    async fn(e) {
      const {
        rects: n
      } = e, {
        strategy: o = "referenceHidden",
        ...r
      } = q(t, e);
      switch (o) {
        case "referenceHidden": {
          const i = await ot(e, {
            ...r,
            elementContext: "reference"
          }), s = Wt(i, n.reference);
          return {
            data: {
              referenceHiddenOffsets: s,
              referenceHidden: Ht(s)
            }
          };
        }
        case "escaped": {
          const i = await ot(e, {
            ...r,
            altBoundary: !0
          }), s = Wt(i, n.floating);
          return {
            data: {
              escapedOffsets: s,
              escaped: Ht(s)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, qt = /* @__PURE__ */ new Set(["left", "top"]);
async function ze(t, e) {
  const {
    placement: n,
    platform: o,
    elements: r
  } = t, i = await (o.isRTL == null ? void 0 : o.isRTL(r.floating)), s = U(n), c = tt(n), l = z(n) === "y", a = qt.has(s) ? -1 : 1, f = i && l ? -1 : 1, u = q(e, t);
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
  return c && typeof m == "number" && (d = c === "end" ? m * -1 : m), l ? {
    x: d * f,
    y: p * a
  } : {
    x: p * a,
    y: d * f
  };
}
const Ie = function(t) {
  return t === void 0 && (t = 0), {
    name: "offset",
    options: t,
    async fn(e) {
      var n, o;
      const {
        x: r,
        y: i,
        placement: s,
        middlewareData: c
      } = e, l = await ze(e, t);
      return s === ((n = c.offset) == null ? void 0 : n.placement) && (o = c.arrow) != null && o.alignmentOffset ? {} : {
        x: r + l.x,
        y: i + l.y,
        data: {
          ...l,
          placement: s
        }
      };
    }
  };
}, Xe = function(t) {
  return t === void 0 && (t = {}), {
    name: "shift",
    options: t,
    async fn(e) {
      const {
        x: n,
        y: o,
        placement: r
      } = e, {
        mainAxis: i = !0,
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
        ...l
      } = q(t, e), a = {
        x: n,
        y: o
      }, f = await ot(e, l), u = z(U(r)), p = Rt(u);
      let d = a[p], m = a[u];
      if (i) {
        const w = p === "y" ? "top" : "left", g = p === "y" ? "bottom" : "right", x = d + f[w], b = d - f[g];
        d = yt(x, d, b);
      }
      if (s) {
        const w = u === "y" ? "top" : "left", g = u === "y" ? "bottom" : "right", x = m + f[w], b = m - f[g];
        m = yt(x, m, b);
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
            [p]: i,
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
        placement: r,
        rects: i,
        middlewareData: s
      } = e, {
        offset: c = 0,
        mainAxis: l = !0,
        crossAxis: a = !0
      } = q(t, e), f = {
        x: n,
        y: o
      }, u = z(r), p = Rt(u);
      let d = f[p], m = f[u];
      const h = q(c, e), w = typeof h == "number" ? {
        mainAxis: h,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...h
      };
      if (l) {
        const b = p === "y" ? "height" : "width", y = i.reference[p] - i.floating[b] + w.mainAxis, v = i.reference[p] + i.reference[b] - w.mainAxis;
        d < y ? d = y : d > v && (d = v);
      }
      if (a) {
        var g, x;
        const b = p === "y" ? "width" : "height", y = qt.has(U(r)), v = i.reference[u] - i.floating[b] + (y && ((g = s.offset) == null ? void 0 : g[u]) || 0) + (y ? 0 : w.crossAxis), P = i.reference[u] + i.reference[b] + (y ? 0 : ((x = s.offset) == null ? void 0 : x[u]) || 0) - (y ? w.crossAxis : 0);
        m < v ? m = v : m > P && (m = P);
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
        placement: r,
        rects: i,
        platform: s,
        elements: c
      } = e, {
        apply: l = () => {
        },
        ...a
      } = q(t, e), f = await ot(e, a), u = U(r), p = tt(r), d = z(r) === "y", {
        width: m,
        height: h
      } = i.floating;
      let w, g;
      u === "top" || u === "bottom" ? (w = u, g = p === (await (s.isRTL == null ? void 0 : s.isRTL(c.floating)) ? "start" : "end") ? "left" : "right") : (g = u, w = p === "end" ? "top" : "bottom");
      const x = h - f.top - f.bottom, b = m - f.left - f.right, y = Z(h - f[w], x), v = Z(m - f[g], b), P = !e.middlewareData.shift;
      let C = y, M = v;
      if ((n = e.middlewareData.shift) != null && n.enabled.x && (M = b), (o = e.middlewareData.shift) != null && o.enabled.y && (C = x), P && !p) {
        const D = W(f.left, 0), $ = W(f.right, 0), k = W(f.top, 0), S = W(f.bottom, 0);
        d ? M = m - 2 * (D !== 0 || $ !== 0 ? D + $ : W(f.left, f.right)) : C = h - 2 * (k !== 0 || S !== 0 ? k + S : W(f.top, f.bottom));
      }
      await l({
        ...e,
        availableWidth: M,
        availableHeight: C
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
function mt() {
  return typeof window < "u";
}
function et(t) {
  return Ut(t) ? (t.nodeName || "").toLowerCase() : "#document";
}
function H(t) {
  var e;
  return (t == null || (e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function Y(t) {
  var e;
  return (e = (Ut(t) ? t.ownerDocument : t.document) || window.document) == null ? void 0 : e.documentElement;
}
function Ut(t) {
  return mt() ? t instanceof Node || t instanceof H(t).Node : !1;
}
function _(t) {
  return mt() ? t instanceof Element || t instanceof H(t).Element : !1;
}
function X(t) {
  return mt() ? t instanceof HTMLElement || t instanceof H(t).HTMLElement : !1;
}
function _t(t) {
  return !mt() || typeof ShadowRoot > "u" ? !1 : t instanceof ShadowRoot || t instanceof H(t).ShadowRoot;
}
const qe = /* @__PURE__ */ new Set(["inline", "contents"]);
function it(t) {
  const {
    overflow: e,
    overflowX: n,
    overflowY: o,
    display: r
  } = B(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + o + n) && !qe.has(r);
}
const Ue = /* @__PURE__ */ new Set(["table", "td", "th"]);
function Ze(t) {
  return Ue.has(et(t));
}
const Ke = [":popover-open", ":modal"];
function pt(t) {
  return Ke.some((e) => {
    try {
      return t.matches(e);
    } catch {
      return !1;
    }
  });
}
const Ge = ["transform", "translate", "scale", "rotate", "perspective"], Je = ["transform", "translate", "scale", "rotate", "perspective", "filter"], Qe = ["paint", "layout", "strict", "content"];
function Ot(t) {
  const e = St(), n = _(t) ? B(t) : t;
  return Ge.some((o) => n[o] ? n[o] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !e && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !e && (n.filter ? n.filter !== "none" : !1) || Je.some((o) => (n.willChange || "").includes(o)) || Qe.some((o) => (n.contain || "").includes(o));
}
function tn(t) {
  let e = K(t);
  for (; X(e) && !Q(e); ) {
    if (Ot(e))
      return e;
    if (pt(e))
      return null;
    e = K(e);
  }
  return null;
}
function St() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const en = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function Q(t) {
  return en.has(et(t));
}
function B(t) {
  return H(t).getComputedStyle(t);
}
function ht(t) {
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
    _t(t) && t.host || // Fallback.
    Y(t)
  );
  return _t(e) ? e.host : e;
}
function Zt(t) {
  const e = K(t);
  return Q(e) ? t.ownerDocument ? t.ownerDocument.body : t.body : X(e) && it(e) ? e : Zt(e);
}
function rt(t, e, n) {
  var o;
  e === void 0 && (e = []), n === void 0 && (n = !0);
  const r = Zt(t), i = r === ((o = t.ownerDocument) == null ? void 0 : o.body), s = H(r);
  if (i) {
    const c = bt(s);
    return e.concat(s, s.visualViewport || [], it(r) ? r : [], c && n ? rt(c) : []);
  }
  return e.concat(r, rt(r, [], n));
}
function bt(t) {
  return t.parent && Object.getPrototypeOf(t.parent) ? t.frameElement : null;
}
function Kt(t) {
  const e = B(t);
  let n = parseFloat(e.width) || 0, o = parseFloat(e.height) || 0;
  const r = X(t), i = r ? t.offsetWidth : n, s = r ? t.offsetHeight : o, c = at(n) !== i || at(o) !== s;
  return c && (n = i, o = s), {
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
  if (!X(e))
    return I(1);
  const n = e.getBoundingClientRect(), {
    width: o,
    height: r,
    $: i
  } = Kt(e);
  let s = (i ? at(n.width) : n.width) / o, c = (i ? at(n.height) : n.height) / r;
  return (!s || !Number.isFinite(s)) && (s = 1), (!c || !Number.isFinite(c)) && (c = 1), {
    x: s,
    y: c
  };
}
const nn = /* @__PURE__ */ I(0);
function Gt(t) {
  const e = H(t);
  return !St() || !e.visualViewport ? nn : {
    x: e.visualViewport.offsetLeft,
    y: e.visualViewport.offsetTop
  };
}
function on(t, e, n) {
  return e === void 0 && (e = !1), !n || e && n !== H(t) ? !1 : e;
}
function G(t, e, n, o) {
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  const r = t.getBoundingClientRect(), i = Et(t);
  let s = I(1);
  e && (o ? _(o) && (s = J(o)) : s = J(t));
  const c = on(i, n, o) ? Gt(i) : I(0);
  let l = (r.left + c.x) / s.x, a = (r.top + c.y) / s.y, f = r.width / s.x, u = r.height / s.y;
  if (i) {
    const p = H(i), d = o && _(o) ? H(o) : o;
    let m = p, h = bt(m);
    for (; h && o && d !== m; ) {
      const w = J(h), g = h.getBoundingClientRect(), x = B(h), b = g.left + (h.clientLeft + parseFloat(x.paddingLeft)) * w.x, y = g.top + (h.clientTop + parseFloat(x.paddingTop)) * w.y;
      l *= w.x, a *= w.y, f *= w.x, u *= w.y, l += b, a += y, m = H(h), h = bt(m);
    }
  }
  return ut({
    width: f,
    height: u,
    x: l,
    y: a
  });
}
function gt(t, e) {
  const n = ht(t).scrollLeft;
  return e ? e.left + n : G(Y(t)).left + n;
}
function Jt(t, e) {
  const n = t.getBoundingClientRect(), o = n.left + e.scrollLeft - gt(t, n), r = n.top + e.scrollTop;
  return {
    x: o,
    y: r
  };
}
function rn(t) {
  let {
    elements: e,
    rect: n,
    offsetParent: o,
    strategy: r
  } = t;
  const i = r === "fixed", s = Y(o), c = e ? pt(e.floating) : !1;
  if (o === s || c && i)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, a = I(1);
  const f = I(0), u = X(o);
  if ((u || !u && !i) && ((et(o) !== "body" || it(s)) && (l = ht(o)), X(o))) {
    const d = G(o);
    a = J(o), f.x = d.x + o.clientLeft, f.y = d.y + o.clientTop;
  }
  const p = s && !u && !i ? Jt(s, l) : I(0);
  return {
    width: n.width * a.x,
    height: n.height * a.y,
    x: n.x * a.x - l.scrollLeft * a.x + f.x + p.x,
    y: n.y * a.y - l.scrollTop * a.y + f.y + p.y
  };
}
function sn(t) {
  return Array.from(t.getClientRects());
}
function cn(t) {
  const e = Y(t), n = ht(t), o = t.ownerDocument.body, r = W(e.scrollWidth, e.clientWidth, o.scrollWidth, o.clientWidth), i = W(e.scrollHeight, e.clientHeight, o.scrollHeight, o.clientHeight);
  let s = -n.scrollLeft + gt(t);
  const c = -n.scrollTop;
  return B(o).direction === "rtl" && (s += W(e.clientWidth, o.clientWidth) - r), {
    width: r,
    height: i,
    x: s,
    y: c
  };
}
const Bt = 25;
function ln(t, e) {
  const n = H(t), o = Y(t), r = n.visualViewport;
  let i = o.clientWidth, s = o.clientHeight, c = 0, l = 0;
  if (r) {
    i = r.width, s = r.height;
    const f = St();
    (!f || f && e === "fixed") && (c = r.offsetLeft, l = r.offsetTop);
  }
  const a = gt(o);
  if (a <= 0) {
    const f = o.ownerDocument, u = f.body, p = getComputedStyle(u), d = f.compatMode === "CSS1Compat" && parseFloat(p.marginLeft) + parseFloat(p.marginRight) || 0, m = Math.abs(o.clientWidth - u.clientWidth - d);
    m <= Bt && (i -= m);
  } else a <= Bt && (i += a);
  return {
    width: i,
    height: s,
    x: c,
    y: l
  };
}
const an = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function fn(t, e) {
  const n = G(t, !0, e === "fixed"), o = n.top + t.clientTop, r = n.left + t.clientLeft, i = X(t) ? J(t) : I(1), s = t.clientWidth * i.x, c = t.clientHeight * i.y, l = r * i.x, a = o * i.y;
  return {
    width: s,
    height: c,
    x: l,
    y: a
  };
}
function Vt(t, e, n) {
  let o;
  if (e === "viewport")
    o = ln(t, n);
  else if (e === "document")
    o = cn(Y(t));
  else if (_(e))
    o = fn(e, n);
  else {
    const r = Gt(t);
    o = {
      x: e.x - r.x,
      y: e.y - r.y,
      width: e.width,
      height: e.height
    };
  }
  return ut(o);
}
function Qt(t, e) {
  const n = K(t);
  return n === e || !_(n) || Q(n) ? !1 : B(n).position === "fixed" || Qt(n, e);
}
function un(t, e) {
  const n = e.get(t);
  if (n)
    return n;
  let o = rt(t, [], !1).filter((c) => _(c) && et(c) !== "body"), r = null;
  const i = B(t).position === "fixed";
  let s = i ? K(t) : t;
  for (; _(s) && !Q(s); ) {
    const c = B(s), l = Ot(s);
    !l && c.position === "fixed" && (r = null), (i ? !l && !r : !l && c.position === "static" && !!r && an.has(r.position) || it(s) && !l && Qt(t, s)) ? o = o.filter((f) => f !== s) : r = c, s = K(s);
  }
  return e.set(t, o), o;
}
function dn(t) {
  let {
    element: e,
    boundary: n,
    rootBoundary: o,
    strategy: r
  } = t;
  const s = [...n === "clippingAncestors" ? pt(e) ? [] : un(e, this._c) : [].concat(n), o], c = s[0], l = s.reduce((a, f) => {
    const u = Vt(e, f, r);
    return a.top = W(u.top, a.top), a.right = Z(u.right, a.right), a.bottom = Z(u.bottom, a.bottom), a.left = W(u.left, a.left), a;
  }, Vt(e, c, r));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function mn(t) {
  const {
    width: e,
    height: n
  } = Kt(t);
  return {
    width: e,
    height: n
  };
}
function pn(t, e, n) {
  const o = X(e), r = Y(e), i = n === "fixed", s = G(t, !0, i, e);
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = I(0);
  function a() {
    l.x = gt(r);
  }
  if (o || !o && !i)
    if ((et(e) !== "body" || it(r)) && (c = ht(e)), o) {
      const d = G(e, !0, i, e);
      l.x = d.x + e.clientLeft, l.y = d.y + e.clientTop;
    } else r && a();
  i && !o && r && a();
  const f = r && !o && !i ? Jt(r, c) : I(0), u = s.left + c.scrollLeft - l.x - f.x, p = s.top + c.scrollTop - l.y - f.y;
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
function zt(t, e) {
  if (!X(t) || B(t).position === "fixed")
    return null;
  if (e)
    return e(t);
  let n = t.offsetParent;
  return Y(t) === n && (n = n.ownerDocument.body), n;
}
function te(t, e) {
  const n = H(t);
  if (pt(t))
    return n;
  if (!X(t)) {
    let r = K(t);
    for (; r && !Q(r); ) {
      if (_(r) && !wt(r))
        return r;
      r = K(r);
    }
    return n;
  }
  let o = zt(t, e);
  for (; o && Ze(o) && wt(o); )
    o = zt(o, e);
  return o && Q(o) && wt(o) && !Ot(o) ? n : o || tn(t) || n;
}
const hn = async function(t) {
  const e = this.getOffsetParent || te, n = this.getDimensions, o = await n(t.floating);
  return {
    reference: pn(t.reference, await e(t.floating), t.strategy),
    floating: {
      x: 0,
      y: 0,
      width: o.width,
      height: o.height
    }
  };
};
function gn(t) {
  return B(t).direction === "rtl";
}
const wn = {
  convertOffsetParentRelativeRectToViewportRelativeRect: rn,
  getDocumentElement: Y,
  getClippingRect: dn,
  getOffsetParent: te,
  getElementRects: hn,
  getClientRects: sn,
  getDimensions: mn,
  getScale: J,
  isElement: _,
  isRTL: gn
};
function ee(t, e) {
  return t.x === e.x && t.y === e.y && t.width === e.width && t.height === e.height;
}
function xn(t, e) {
  let n = null, o;
  const r = Y(t);
  function i() {
    var c;
    clearTimeout(o), (c = n) == null || c.disconnect(), n = null;
  }
  function s(c, l) {
    c === void 0 && (c = !1), l === void 0 && (l = 1), i();
    const a = t.getBoundingClientRect(), {
      left: f,
      top: u,
      width: p,
      height: d
    } = a;
    if (c || e(), !p || !d)
      return;
    const m = ct(u), h = ct(r.clientWidth - (f + p)), w = ct(r.clientHeight - (u + d)), g = ct(f), b = {
      rootMargin: -m + "px " + -h + "px " + -w + "px " + -g + "px",
      threshold: W(0, Z(1, l)) || 1
    };
    let y = !0;
    function v(P) {
      const C = P[0].intersectionRatio;
      if (C !== l) {
        if (!y)
          return s();
        C ? s(!1, C) : o = setTimeout(() => {
          s(!1, 1e-7);
        }, 1e3);
      }
      C === 1 && !ee(a, t.getBoundingClientRect()) && s(), y = !1;
    }
    try {
      n = new IntersectionObserver(v, {
        ...b,
        // Handle <iframe>s
        root: r.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(v, b);
    }
    n.observe(t);
  }
  return s(!0), i;
}
function yn(t, e, n, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: r = !0,
    ancestorResize: i = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: c = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = o, a = Et(t), f = r || i ? [...a ? rt(a) : [], ...rt(e)] : [];
  f.forEach((g) => {
    r && g.addEventListener("scroll", n, {
      passive: !0
    }), i && g.addEventListener("resize", n);
  });
  const u = a && c ? xn(a, n) : null;
  let p = -1, d = null;
  s && (d = new ResizeObserver((g) => {
    let [x] = g;
    x && x.target === a && d && (d.unobserve(e), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
      var b;
      (b = d) == null || b.observe(e);
    })), n();
  }), a && !l && d.observe(a), d.observe(e));
  let m, h = l ? G(t) : null;
  l && w();
  function w() {
    const g = G(t);
    h && !ee(h, g) && n(), h = g, m = requestAnimationFrame(w);
  }
  return n(), () => {
    var g;
    f.forEach((x) => {
      r && x.removeEventListener("scroll", n), i && x.removeEventListener("resize", n);
    }), u?.(), (g = d) == null || g.disconnect(), d = null, l && cancelAnimationFrame(m);
  };
}
const vn = Ie, bn = Xe, An = Be, Rn = je, Cn = Ve, It = _e, Pn = Ye, On = (t, e, n) => {
  const o = /* @__PURE__ */ new Map(), r = {
    platform: wn,
    ...n
  }, i = {
    ...r.platform,
    _c: o
  };
  return He(t, e, {
    ...r,
    platform: i
  });
};
var Sn = typeof document < "u", En = function() {
}, lt = Sn ? Ae : En;
function dt(t, e) {
  if (t === e)
    return !0;
  if (typeof t != typeof e)
    return !1;
  if (typeof t == "function" && t.toString() === e.toString())
    return !0;
  let n, o, r;
  if (t && e && typeof t == "object") {
    if (Array.isArray(t)) {
      if (n = t.length, n !== e.length) return !1;
      for (o = n; o-- !== 0; )
        if (!dt(t[o], e[o]))
          return !1;
      return !0;
    }
    if (r = Object.keys(t), n = r.length, n !== Object.keys(e).length)
      return !1;
    for (o = n; o-- !== 0; )
      if (!{}.hasOwnProperty.call(e, r[o]))
        return !1;
    for (o = n; o-- !== 0; ) {
      const i = r[o];
      if (!(i === "_owner" && t.$$typeof) && !dt(t[i], e[i]))
        return !1;
    }
    return !0;
  }
  return t !== t && e !== e;
}
function ne(t) {
  return typeof window > "u" ? 1 : (t.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Xt(t, e) {
  const n = ne(t);
  return Math.round(e * n) / n;
}
function xt(t) {
  const e = R.useRef(t);
  return lt(() => {
    e.current = t;
  }), e;
}
function Ln(t) {
  t === void 0 && (t = {});
  const {
    placement: e = "bottom",
    strategy: n = "absolute",
    middleware: o = [],
    platform: r,
    elements: {
      reference: i,
      floating: s
    } = {},
    transform: c = !0,
    whileElementsMounted: l,
    open: a
  } = t, [f, u] = R.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: e,
    middlewareData: {},
    isPositioned: !1
  }), [p, d] = R.useState(o);
  dt(p, o) || d(o);
  const [m, h] = R.useState(null), [w, g] = R.useState(null), x = R.useCallback((A) => {
    A !== P.current && (P.current = A, h(A));
  }, []), b = R.useCallback((A) => {
    A !== C.current && (C.current = A, g(A));
  }, []), y = i || m, v = s || w, P = R.useRef(null), C = R.useRef(null), M = R.useRef(f), F = l != null, D = xt(l), $ = xt(r), k = xt(a), S = R.useCallback(() => {
    if (!P.current || !C.current)
      return;
    const A = {
      placement: e,
      strategy: n,
      middleware: p
    };
    $.current && (A.platform = $.current), On(P.current, C.current, A).then((T) => {
      const V = {
        ...T,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: k.current !== !1
      };
      O.current && !dt(M.current, V) && (M.current = V, Re.flushSync(() => {
        u(V);
      }));
    });
  }, [p, e, n, $, k]);
  lt(() => {
    a === !1 && M.current.isPositioned && (M.current.isPositioned = !1, u((A) => ({
      ...A,
      isPositioned: !1
    })));
  }, [a]);
  const O = R.useRef(!1);
  lt(() => (O.current = !0, () => {
    O.current = !1;
  }), []), lt(() => {
    if (y && (P.current = y), v && (C.current = v), y && v) {
      if (D.current)
        return D.current(y, v, S);
      S();
    }
  }, [y, v, S, D, F]);
  const N = R.useMemo(() => ({
    reference: P,
    floating: C,
    setReference: x,
    setFloating: b
  }), [x, b]), E = R.useMemo(() => ({
    reference: y,
    floating: v
  }), [y, v]), L = R.useMemo(() => {
    const A = {
      position: n,
      left: 0,
      top: 0
    };
    if (!E.floating)
      return A;
    const T = Xt(E.floating, f.x), V = Xt(E.floating, f.y);
    return c ? {
      ...A,
      transform: "translate(" + T + "px, " + V + "px)",
      ...ne(E.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: T,
      top: V
    };
  }, [n, c, E.floating, f.x, f.y]);
  return R.useMemo(() => ({
    ...f,
    update: S,
    refs: N,
    elements: E,
    floatingStyles: L
  }), [f, S, N, E, L]);
}
const Dn = (t) => {
  function e(n) {
    return {}.hasOwnProperty.call(n, "current");
  }
  return {
    name: "arrow",
    options: t,
    fn(n) {
      const {
        element: o,
        padding: r
      } = typeof t == "function" ? t(n) : t;
      return o && e(o) ? o.current != null ? It({
        element: o.current,
        padding: r
      }).fn(n) : {} : o ? It({
        element: o,
        padding: r
      }).fn(n) : {};
    }
  };
}, Mn = (t, e) => ({
  ...vn(t),
  options: [t, e]
}), Tn = (t, e) => ({
  ...bn(t),
  options: [t, e]
}), $n = (t, e) => ({
  ...Pn(t),
  options: [t, e]
}), kn = (t, e) => ({
  ...An(t),
  options: [t, e]
}), Fn = (t, e) => ({
  ...Rn(t),
  options: [t, e]
}), Nn = (t, e) => ({
  ...Cn(t),
  options: [t, e]
}), Wn = (t, e) => ({
  ...Dn(t),
  options: [t, e]
});
var Hn = "Arrow", oe = R.forwardRef((t, e) => {
  const { children: n, width: o = 10, height: r = 5, ...i } = t;
  return /* @__PURE__ */ j(
    At.svg,
    {
      ...i,
      ref: e,
      width: o,
      height: r,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: t.asChild ? n : /* @__PURE__ */ j("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
oe.displayName = Hn;
var _n = oe, Lt = "Popper", [re, to] = Ce(Lt), [Bn, ie] = re(Lt), se = (t) => {
  const { __scopePopper: e, children: n } = t, [o, r] = R.useState(null);
  return /* @__PURE__ */ j(Bn, { scope: e, anchor: o, onAnchorChange: r, children: n });
};
se.displayName = Lt;
var ce = "PopperAnchor", le = R.forwardRef(
  (t, e) => {
    const { __scopePopper: n, virtualRef: o, ...r } = t, i = ie(ce, n), s = R.useRef(null), c = Yt(e, s), l = R.useRef(null);
    return R.useEffect(() => {
      const a = l.current;
      l.current = o?.current || s.current, a !== l.current && i.onAnchorChange(l.current);
    }), o ? null : /* @__PURE__ */ j(At.div, { ...r, ref: c });
  }
);
le.displayName = ce;
var Dt = "PopperContent", [Vn, zn] = re(Dt), ae = R.forwardRef(
  (t, e) => {
    const {
      __scopePopper: n,
      side: o = "bottom",
      sideOffset: r = 0,
      align: i = "center",
      alignOffset: s = 0,
      arrowPadding: c = 0,
      avoidCollisions: l = !0,
      collisionBoundary: a = [],
      collisionPadding: f = 0,
      sticky: u = "partial",
      hideWhenDetached: p = !1,
      updatePositionStrategy: d = "optimized",
      onPlaced: m,
      ...h
    } = t, w = ie(Dt, n), [g, x] = R.useState(null), b = Yt(e, (nt) => x(nt)), [y, v] = R.useState(null), P = Oe(y), C = P?.width ?? 0, M = P?.height ?? 0, F = o + (i !== "center" ? "-" + i : ""), D = typeof f == "number" ? f : { top: 0, right: 0, bottom: 0, left: 0, ...f }, $ = Array.isArray(a) ? a : [a], k = $.length > 0, S = {
      padding: D,
      boundary: $.filter(Xn),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: k
    }, { refs: O, floatingStyles: N, placement: E, isPositioned: L, middlewareData: A } = Ln({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: F,
      whileElementsMounted: (...nt) => yn(...nt, {
        animationFrame: d === "always"
      }),
      elements: {
        reference: w.anchor
      },
      middleware: [
        Mn({ mainAxis: r + M, alignmentAxis: s }),
        l && Tn({
          mainAxis: !0,
          crossAxis: !1,
          limiter: u === "partial" ? $n() : void 0,
          ...S
        }),
        l && kn({ ...S }),
        Fn({
          ...S,
          apply: ({ elements: nt, rects: Tt, availableWidth: xe, availableHeight: ye }) => {
            const { width: ve, height: be } = Tt.reference, st = nt.floating.style;
            st.setProperty("--radix-popper-available-width", `${xe}px`), st.setProperty("--radix-popper-available-height", `${ye}px`), st.setProperty("--radix-popper-anchor-width", `${ve}px`), st.setProperty("--radix-popper-anchor-height", `${be}px`);
          }
        }),
        y && Wn({ element: y, padding: c }),
        Yn({ arrowWidth: C, arrowHeight: M }),
        p && Nn({ strategy: "referenceHidden", ...S })
      ]
    }), [T, V] = de(E), Mt = Pe(m);
    $t(() => {
      L && Mt?.();
    }, [L, Mt]);
    const me = A.arrow?.x, pe = A.arrow?.y, he = A.arrow?.centerOffset !== 0, [ge, we] = R.useState();
    return $t(() => {
      g && we(window.getComputedStyle(g).zIndex);
    }, [g]), /* @__PURE__ */ j(
      "div",
      {
        ref: O.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...N,
          transform: L ? N.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: ge,
          "--radix-popper-transform-origin": [
            A.transformOrigin?.x,
            A.transformOrigin?.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...A.hide?.referenceHidden && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: t.dir,
        children: /* @__PURE__ */ j(
          Vn,
          {
            scope: n,
            placedSide: T,
            onArrowChange: v,
            arrowX: me,
            arrowY: pe,
            shouldHideArrow: he,
            children: /* @__PURE__ */ j(
              At.div,
              {
                "data-side": T,
                "data-align": V,
                ...h,
                ref: b,
                style: {
                  ...h.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: L ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
ae.displayName = Dt;
var fe = "PopperArrow", In = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, ue = R.forwardRef(function(e, n) {
  const { __scopePopper: o, ...r } = e, i = zn(fe, o), s = In[i.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ j(
      "span",
      {
        ref: i.onArrowChange,
        style: {
          position: "absolute",
          left: i.arrowX,
          top: i.arrowY,
          [s]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0"
          }[i.placedSide],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: "rotate(180deg)",
            left: "translateY(50%) rotate(-90deg) translateX(50%)"
          }[i.placedSide],
          visibility: i.shouldHideArrow ? "hidden" : void 0
        },
        children: /* @__PURE__ */ j(
          _n,
          {
            ...r,
            ref: n,
            style: {
              ...r.style,
              // ensures the element can be measured correctly (mostly for if SVG)
              display: "block"
            }
          }
        )
      }
    )
  );
});
ue.displayName = fe;
function Xn(t) {
  return t !== null;
}
var Yn = (t) => ({
  name: "transformOrigin",
  options: t,
  fn(e) {
    const { placement: n, rects: o, middlewareData: r } = e, s = r.arrow?.centerOffset !== 0, c = s ? 0 : t.arrowWidth, l = s ? 0 : t.arrowHeight, [a, f] = de(n), u = { start: "0%", center: "50%", end: "100%" }[f], p = (r.arrow?.x ?? 0) + c / 2, d = (r.arrow?.y ?? 0) + l / 2;
    let m = "", h = "";
    return a === "bottom" ? (m = s ? u : `${p}px`, h = `${-l}px`) : a === "top" ? (m = s ? u : `${p}px`, h = `${o.floating.height + l}px`) : a === "right" ? (m = `${-l}px`, h = s ? u : `${d}px`) : a === "left" && (m = `${o.floating.width + l}px`, h = s ? u : `${d}px`), { data: { x: m, y: h } };
  }
});
function de(t) {
  const [e, n = "center"] = t.split("-");
  return [e, n];
}
var eo = se, no = le, oo = ae, ro = ue;
export {
  no as A,
  oo as C,
  eo as R,
  ro as a,
  to as c
};
//# sourceMappingURL=index-dhIqEbxW.js.map
