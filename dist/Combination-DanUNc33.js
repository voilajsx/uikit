import * as u from "react";
import { useState as he } from "react";
import { u as me } from "./index-CRtwelBU.js";
import { P as pe } from "./index-IjmGKHPz.js";
import { u as z } from "./index-DwYXX2sM.js";
import { jsx as ge } from "react/jsx-runtime";
var U = 0;
function gt() {
  u.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? Z()), document.body.insertAdjacentElement("beforeend", e[1] ?? Z()), U++, () => {
      U === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), U--;
    };
  }, []);
}
function Z() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var _ = "focusScope.autoFocusOnMount", j = "focusScope.autoFocusOnUnmount", q = { bubbles: !1, cancelable: !0 }, ye = "FocusScope", be = u.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: r = !1,
    onMountAutoFocus: c,
    onUnmountAutoFocus: i,
    ...s
  } = e, [a, S] = u.useState(null), b = z(c), g = z(i), f = u.useRef(null), v = me(t, (o) => S(o)), h = u.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  u.useEffect(() => {
    if (r) {
      let o = function(p) {
        if (h.paused || !a) return;
        const y = p.target;
        a.contains(y) ? f.current = y : k(f.current, { select: !0 });
      }, l = function(p) {
        if (h.paused || !a) return;
        const y = p.relatedTarget;
        y !== null && (a.contains(y) || k(f.current, { select: !0 }));
      }, d = function(p) {
        if (document.activeElement === document.body)
          for (const E of p)
            E.removedNodes.length > 0 && k(a);
      };
      document.addEventListener("focusin", o), document.addEventListener("focusout", l);
      const m = new MutationObserver(d);
      return a && m.observe(a, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", o), document.removeEventListener("focusout", l), m.disconnect();
      };
    }
  }, [r, a, h.paused]), u.useEffect(() => {
    if (a) {
      $.add(h);
      const o = document.activeElement;
      if (!a.contains(o)) {
        const d = new CustomEvent(_, q);
        a.addEventListener(_, b), a.dispatchEvent(d), d.defaultPrevented || (Ee(ke(oe(a)), { select: !0 }), document.activeElement === o && k(a));
      }
      return () => {
        a.removeEventListener(_, b), setTimeout(() => {
          const d = new CustomEvent(j, q);
          a.addEventListener(j, g), a.dispatchEvent(d), d.defaultPrevented || k(o ?? document.body, { select: !0 }), a.removeEventListener(j, g), $.remove(h);
        }, 0);
      };
    }
  }, [a, b, g, h]);
  const w = u.useCallback(
    (o) => {
      if (!n && !r || h.paused) return;
      const l = o.key === "Tab" && !o.altKey && !o.ctrlKey && !o.metaKey, d = document.activeElement;
      if (l && d) {
        const m = o.currentTarget, [p, y] = Se(m);
        p && y ? !o.shiftKey && d === y ? (o.preventDefault(), n && k(p, { select: !0 })) : o.shiftKey && d === p && (o.preventDefault(), n && k(y, { select: !0 })) : d === m && o.preventDefault();
      }
    },
    [n, r, h.paused]
  );
  return /* @__PURE__ */ ge(pe.div, { tabIndex: -1, ...s, ref: v, onKeyDown: w });
});
be.displayName = ye;
function Ee(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (k(r, { select: t }), document.activeElement !== n) return;
}
function Se(e) {
  const t = oe(e), n = Q(t, e), r = Q(t.reverse(), e);
  return [n, r];
}
function oe(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const c = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || c ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Q(e, t) {
  for (const n of e)
    if (!we(n, { upTo: t })) return n;
}
function we(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function Ce(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function k(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && Ce(e) && t && e.select();
  }
}
var $ = Re();
function Re() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = J(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = J(e, t), (n = e[0]) == null || n.resume();
    }
  };
}
function J(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function ke(e) {
  return e.filter((t) => t.tagName !== "A");
}
var Ae = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, T = /* @__PURE__ */ new WeakMap(), F = /* @__PURE__ */ new WeakMap(), L = {}, K = 0, ce = function(e) {
  return e && (e.host || ce(e.parentNode));
}, Te = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = ce(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, Ne = function(e, t, n, r) {
  var c = Te(t, Array.isArray(e) ? e : [e]);
  L[n] || (L[n] = /* @__PURE__ */ new WeakMap());
  var i = L[n], s = [], a = /* @__PURE__ */ new Set(), S = new Set(c), b = function(f) {
    !f || a.has(f) || (a.add(f), b(f.parentNode));
  };
  c.forEach(b);
  var g = function(f) {
    !f || S.has(f) || Array.prototype.forEach.call(f.children, function(v) {
      if (a.has(v))
        g(v);
      else
        try {
          var h = v.getAttribute(r), w = h !== null && h !== "false", o = (T.get(v) || 0) + 1, l = (i.get(v) || 0) + 1;
          T.set(v, o), i.set(v, l), s.push(v), o === 1 && w && F.set(v, !0), l === 1 && v.setAttribute(n, "true"), w || v.setAttribute(r, "true");
        } catch (d) {
          console.error("aria-hidden: cannot operate on ", v, d);
        }
    });
  };
  return g(t), a.clear(), K++, function() {
    s.forEach(function(f) {
      var v = T.get(f) - 1, h = i.get(f) - 1;
      T.set(f, v), i.set(f, h), v || (F.has(f) || f.removeAttribute(r), F.delete(f)), h || f.removeAttribute(n);
    }), K--, K || (T = /* @__PURE__ */ new WeakMap(), T = /* @__PURE__ */ new WeakMap(), F = /* @__PURE__ */ new WeakMap(), L = {});
  };
}, yt = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), c = Ae(e);
  return c ? (r.push.apply(r, Array.from(c.querySelectorAll("[aria-live], script"))), Ne(r, c, n, "aria-hidden")) : function() {
    return null;
  };
}, C = function() {
  return C = Object.assign || function(t) {
    for (var n, r = 1, c = arguments.length; r < c; r++) {
      n = arguments[r];
      for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
    }
    return t;
  }, C.apply(this, arguments);
};
function ue(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var c = 0, r = Object.getOwnPropertySymbols(e); c < r.length; c++)
      t.indexOf(r[c]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[c]) && (n[r[c]] = e[r[c]]);
  return n;
}
function Me(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, c = t.length, i; r < c; r++)
    (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return e.concat(i || Array.prototype.slice.call(t));
}
var W = "right-scroll-bar-position", B = "width-before-scroll-bar", Pe = "with-scroll-bars-hidden", Oe = "--removed-body-scroll-bar-size";
function H(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function Fe(e, t) {
  var n = he(function() {
    return {
      // value
      value: e,
      // last callback
      callback: t,
      // "memoized" public interface
      facade: {
        get current() {
          return n.value;
        },
        set current(r) {
          var c = n.value;
          c !== r && (n.value = r, n.callback(r, c));
        }
      }
    };
  })[0];
  return n.callback = t, n.facade;
}
var Le = typeof window < "u" ? u.useLayoutEffect : u.useEffect, ee = /* @__PURE__ */ new WeakMap();
function Ie(e, t) {
  var n = Fe(null, function(r) {
    return e.forEach(function(c) {
      return H(c, r);
    });
  });
  return Le(function() {
    var r = ee.get(n);
    if (r) {
      var c = new Set(r), i = new Set(e), s = n.current;
      c.forEach(function(a) {
        i.has(a) || H(a, null);
      }), i.forEach(function(a) {
        c.has(a) || H(a, s);
      });
    }
    ee.set(n, e);
  }, [e]), n;
}
function xe(e) {
  return e;
}
function We(e, t) {
  t === void 0 && (t = xe);
  var n = [], r = !1, c = {
    read: function() {
      if (r)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return n.length ? n[n.length - 1] : e;
    },
    useMedium: function(i) {
      var s = t(i, r);
      return n.push(s), function() {
        n = n.filter(function(a) {
          return a !== s;
        });
      };
    },
    assignSyncMedium: function(i) {
      for (r = !0; n.length; ) {
        var s = n;
        n = [], s.forEach(i);
      }
      n = {
        push: function(a) {
          return i(a);
        },
        filter: function() {
          return n;
        }
      };
    },
    assignMedium: function(i) {
      r = !0;
      var s = [];
      if (n.length) {
        var a = n;
        n = [], a.forEach(i), s = n;
      }
      var S = function() {
        var g = s;
        s = [], g.forEach(i);
      }, b = function() {
        return Promise.resolve().then(S);
      };
      b(), n = {
        push: function(g) {
          s.push(g), b();
        },
        filter: function(g) {
          return s = s.filter(g), n;
        }
      };
    }
  };
  return c;
}
function Be(e) {
  e === void 0 && (e = {});
  var t = We(null);
  return t.options = C({ async: !0, ssr: !1 }, e), t;
}
var ie = function(e) {
  var t = e.sideCar, n = ue(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return u.createElement(r, C({}, n));
};
ie.isSideCarExport = !0;
function De(e, t) {
  return e.useMedium(t), ie;
}
var le = Be(), V = function() {
}, D = u.forwardRef(function(e, t) {
  var n = u.useRef(null), r = u.useState({
    onScrollCapture: V,
    onWheelCapture: V,
    onTouchMoveCapture: V
  }), c = r[0], i = r[1], s = e.forwardProps, a = e.children, S = e.className, b = e.removeScrollBar, g = e.enabled, f = e.shards, v = e.sideCar, h = e.noRelative, w = e.noIsolation, o = e.inert, l = e.allowPinchZoom, d = e.as, m = d === void 0 ? "div" : d, p = e.gapMode, y = ue(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), E = v, A = Ie([n, t]), R = C(C({}, y), c);
  return u.createElement(
    u.Fragment,
    null,
    g && u.createElement(E, { sideCar: le, removeScrollBar: b, shards: f, noRelative: h, noIsolation: w, inert: o, setCallbacks: i, allowPinchZoom: !!l, lockRef: n, gapMode: p }),
    s ? u.cloneElement(u.Children.only(a), C(C({}, R), { ref: A })) : u.createElement(m, C({}, R, { className: S, ref: A }), a)
  );
});
D.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
D.classNames = {
  fullWidth: B,
  zeroRight: W
};
var Ue = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function _e() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = Ue();
  return t && e.setAttribute("nonce", t), e;
}
function je(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function Ke(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var He = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = _e()) && (je(t, n), Ke(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, Ve = function() {
  var e = He();
  return function(t, n) {
    u.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, se = function() {
  var e = Ve(), t = function(n) {
    var r = n.styles, c = n.dynamic;
    return e(r, c), null;
  };
  return t;
}, Xe = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, X = function(e) {
  return parseInt(e || "", 10) || 0;
}, Ye = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], c = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [X(n), X(r), X(c)];
}, Ge = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return Xe;
  var t = Ye(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, ze = se(), P = "data-scroll-locked", Ze = function(e, t, n, r) {
  var c = e.left, i = e.top, s = e.right, a = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(Pe, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(a, "px ").concat(r, `;
  }
  body[`).concat(P, `] {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(r, ";"),
    n === "margin" && `
    padding-left: `.concat(c, `px;
    padding-top: `).concat(i, `px;
    padding-right: `).concat(s, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(a, "px ").concat(r, `;
    `),
    n === "padding" && "padding-right: ".concat(a, "px ").concat(r, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(W, ` {
    right: `).concat(a, "px ").concat(r, `;
  }
  
  .`).concat(B, ` {
    margin-right: `).concat(a, "px ").concat(r, `;
  }
  
  .`).concat(W, " .").concat(W, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(B, " .").concat(B, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(P, `] {
    `).concat(Oe, ": ").concat(a, `px;
  }
`);
}, te = function() {
  var e = parseInt(document.body.getAttribute(P) || "0", 10);
  return isFinite(e) ? e : 0;
}, qe = function() {
  u.useEffect(function() {
    return document.body.setAttribute(P, (te() + 1).toString()), function() {
      var e = te() - 1;
      e <= 0 ? document.body.removeAttribute(P) : document.body.setAttribute(P, e.toString());
    };
  }, []);
}, Qe = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, c = r === void 0 ? "margin" : r;
  qe();
  var i = u.useMemo(function() {
    return Ge(c);
  }, [c]);
  return u.createElement(ze, { styles: Ze(i, !t, c, n ? "" : "!important") });
}, Y = !1;
if (typeof window < "u")
  try {
    var I = Object.defineProperty({}, "passive", {
      get: function() {
        return Y = !0, !0;
      }
    });
    window.addEventListener("test", I, I), window.removeEventListener("test", I, I);
  } catch {
    Y = !1;
  }
var N = Y ? { passive: !1 } : !1, $e = function(e) {
  return e.tagName === "TEXTAREA";
}, fe = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !$e(e) && n[t] === "visible")
  );
}, Je = function(e) {
  return fe(e, "overflowY");
}, et = function(e) {
  return fe(e, "overflowX");
}, ne = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var c = de(e, r);
    if (c) {
      var i = ve(e, r), s = i[1], a = i[2];
      if (s > a)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, tt = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, nt = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, de = function(e, t) {
  return e === "v" ? Je(t) : et(t);
}, ve = function(e, t) {
  return e === "v" ? tt(t) : nt(t);
}, rt = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, at = function(e, t, n, r, c) {
  var i = rt(e, window.getComputedStyle(t).direction), s = i * r, a = n.target, S = t.contains(a), b = !1, g = s > 0, f = 0, v = 0;
  do {
    if (!a)
      break;
    var h = ve(e, a), w = h[0], o = h[1], l = h[2], d = o - l - i * w;
    (w || d) && de(e, a) && (f += d, v += w);
    var m = a.parentNode;
    a = m && m.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? m.host : m;
  } while (
    // portaled content
    !S && a !== document.body || // self content
    S && (t.contains(a) || t === a)
  );
  return (g && Math.abs(f) < 1 || !g && Math.abs(v) < 1) && (b = !0), b;
}, x = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, re = function(e) {
  return [e.deltaX, e.deltaY];
}, ae = function(e) {
  return e && "current" in e ? e.current : e;
}, ot = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, ct = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, ut = 0, M = [];
function it(e) {
  var t = u.useRef([]), n = u.useRef([0, 0]), r = u.useRef(), c = u.useState(ut++)[0], i = u.useState(se)[0], s = u.useRef(e);
  u.useEffect(function() {
    s.current = e;
  }, [e]), u.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(c));
      var o = Me([e.lockRef.current], (e.shards || []).map(ae), !0).filter(Boolean);
      return o.forEach(function(l) {
        return l.classList.add("allow-interactivity-".concat(c));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(c)), o.forEach(function(l) {
          return l.classList.remove("allow-interactivity-".concat(c));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var a = u.useCallback(function(o, l) {
    if ("touches" in o && o.touches.length === 2 || o.type === "wheel" && o.ctrlKey)
      return !s.current.allowPinchZoom;
    var d = x(o), m = n.current, p = "deltaX" in o ? o.deltaX : m[0] - d[0], y = "deltaY" in o ? o.deltaY : m[1] - d[1], E, A = o.target, R = Math.abs(p) > Math.abs(y) ? "h" : "v";
    if ("touches" in o && R === "h" && A.type === "range")
      return !1;
    var O = ne(R, A);
    if (!O)
      return !0;
    if (O ? E = R : (E = R === "v" ? "h" : "v", O = ne(R, A)), !O)
      return !1;
    if (!r.current && "changedTouches" in o && (p || y) && (r.current = E), !E)
      return !0;
    var G = r.current || E;
    return at(G, l, o, G === "h" ? p : y);
  }, []), S = u.useCallback(function(o) {
    var l = o;
    if (!(!M.length || M[M.length - 1] !== i)) {
      var d = "deltaY" in l ? re(l) : x(l), m = t.current.filter(function(E) {
        return E.name === l.type && (E.target === l.target || l.target === E.shadowParent) && ot(E.delta, d);
      })[0];
      if (m && m.should) {
        l.cancelable && l.preventDefault();
        return;
      }
      if (!m) {
        var p = (s.current.shards || []).map(ae).filter(Boolean).filter(function(E) {
          return E.contains(l.target);
        }), y = p.length > 0 ? a(l, p[0]) : !s.current.noIsolation;
        y && l.cancelable && l.preventDefault();
      }
    }
  }, []), b = u.useCallback(function(o, l, d, m) {
    var p = { name: o, delta: l, target: d, should: m, shadowParent: lt(d) };
    t.current.push(p), setTimeout(function() {
      t.current = t.current.filter(function(y) {
        return y !== p;
      });
    }, 1);
  }, []), g = u.useCallback(function(o) {
    n.current = x(o), r.current = void 0;
  }, []), f = u.useCallback(function(o) {
    b(o.type, re(o), o.target, a(o, e.lockRef.current));
  }, []), v = u.useCallback(function(o) {
    b(o.type, x(o), o.target, a(o, e.lockRef.current));
  }, []);
  u.useEffect(function() {
    return M.push(i), e.setCallbacks({
      onScrollCapture: f,
      onWheelCapture: f,
      onTouchMoveCapture: v
    }), document.addEventListener("wheel", S, N), document.addEventListener("touchmove", S, N), document.addEventListener("touchstart", g, N), function() {
      M = M.filter(function(o) {
        return o !== i;
      }), document.removeEventListener("wheel", S, N), document.removeEventListener("touchmove", S, N), document.removeEventListener("touchstart", g, N);
    };
  }, []);
  var h = e.removeScrollBar, w = e.inert;
  return u.createElement(
    u.Fragment,
    null,
    w ? u.createElement(i, { styles: ct(c) }) : null,
    h ? u.createElement(Qe, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function lt(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const st = De(le, it);
var ft = u.forwardRef(function(e, t) {
  return u.createElement(D, C({}, e, { ref: t, sideCar: st }));
});
ft.classNames = D.classNames;
export {
  be as F,
  ft as R,
  yt as h,
  gt as u
};
//# sourceMappingURL=Combination-DanUNc33.js.map
