import * as r from "react";
import { c as M } from "./index-CPxmoWFw.js";
import { c as $e, u as qe } from "./index-DphuwxkL.js";
import { u as N, b as Je, a as Qe } from "./index-B1fTi8J3.js";
import { c as et } from "./index-UFb2E87s.js";
import { P as tt, D as nt } from "./index-DBSLDOnW.js";
import { h as ot, u as rt, R as ct, F as at } from "./Combination-DHU6vllo.js";
import { u as he } from "./index-B_PLZIoC.js";
import { c as ve, R as Ce, a as st, C as ut, A as it } from "./index-ZLovmeI2.js";
import { P as W } from "./index-C7MCwCUs.js";
import { P as F, d as lt } from "./index-CP7NBbfF.js";
import { c as ge, I as dt, R as ft } from "./index-BdMATD9m.js";
import { u as ee } from "./index-DwYXX2sM.js";
import { jsx as u } from "react/jsx-runtime";
var Q = ["Enter", " "], mt = ["ArrowDown", "PageUp", "Home"], _e = ["ArrowUp", "PageDown", "End"], pt = [...mt, ..._e], ht = {
  ltr: [...Q, "ArrowRight"],
  rtl: [...Q, "ArrowLeft"]
}, Mt = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
}, L = "Menu", [D, vt, Ct] = $e(L), [w, Qt] = et(L, [
  Ct,
  ve,
  ge
]), K = ve(), Re = ge(), [Pe, E] = w(L), [gt, G] = w(L), Se = (e) => {
  const { __scopeMenu: n, open: t = !1, children: o, dir: s, onOpenChange: a, modal: l = !0 } = e, p = K(n), [h, m] = r.useState(null), f = r.useRef(!1), c = ee(a), d = qe(s);
  return r.useEffect(() => {
    const C = () => {
      f.current = !0, document.addEventListener("pointerdown", v, { capture: !0, once: !0 }), document.addEventListener("pointermove", v, { capture: !0, once: !0 });
    }, v = () => f.current = !1;
    return document.addEventListener("keydown", C, { capture: !0 }), () => {
      document.removeEventListener("keydown", C, { capture: !0 }), document.removeEventListener("pointerdown", v, { capture: !0 }), document.removeEventListener("pointermove", v, { capture: !0 });
    };
  }, []), /* @__PURE__ */ u(Ce, { ...p, children: /* @__PURE__ */ u(
    Pe,
    {
      scope: n,
      open: t,
      onOpenChange: c,
      content: h,
      onContentChange: m,
      children: /* @__PURE__ */ u(
        gt,
        {
          scope: n,
          onClose: r.useCallback(() => c(!1), [c]),
          isUsingKeyboardRef: f,
          dir: d,
          modal: l,
          children: o
        }
      )
    }
  ) });
};
Se.displayName = L;
var _t = "MenuAnchor", te = r.forwardRef(
  (e, n) => {
    const { __scopeMenu: t, ...o } = e, s = K(t);
    return /* @__PURE__ */ u(st, { ...s, ...o, ref: n });
  }
);
te.displayName = _t;
var ne = "MenuPortal", [Rt, Ee] = w(ne, {
  forceMount: void 0
}), Ie = (e) => {
  const { __scopeMenu: n, forceMount: t, children: o, container: s } = e, a = E(ne, n);
  return /* @__PURE__ */ u(Rt, { scope: n, forceMount: t, children: /* @__PURE__ */ u(W, { present: t || a.open, children: /* @__PURE__ */ u(tt, { asChild: !0, container: s, children: o }) }) });
};
Ie.displayName = ne;
var _ = "MenuContent", [Pt, oe] = w(_), we = r.forwardRef(
  (e, n) => {
    const t = Ee(_, e.__scopeMenu), { forceMount: o = t.forceMount, ...s } = e, a = E(_, e.__scopeMenu), l = G(_, e.__scopeMenu);
    return /* @__PURE__ */ u(D.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ u(W, { present: o || a.open, children: /* @__PURE__ */ u(D.Slot, { scope: e.__scopeMenu, children: l.modal ? /* @__PURE__ */ u(St, { ...s, ref: n }) : /* @__PURE__ */ u(Et, { ...s, ref: n }) }) }) });
  }
), St = r.forwardRef(
  (e, n) => {
    const t = E(_, e.__scopeMenu), o = r.useRef(null), s = N(n, o);
    return r.useEffect(() => {
      const a = o.current;
      if (a) return ot(a);
    }, []), /* @__PURE__ */ u(
      re,
      {
        ...e,
        ref: s,
        trapFocus: t.open,
        disableOutsidePointerEvents: t.open,
        disableOutsideScroll: !0,
        onFocusOutside: M(
          e.onFocusOutside,
          (a) => a.preventDefault(),
          { checkForDefaultPrevented: !1 }
        ),
        onDismiss: () => t.onOpenChange(!1)
      }
    );
  }
), Et = r.forwardRef((e, n) => {
  const t = E(_, e.__scopeMenu);
  return /* @__PURE__ */ u(
    re,
    {
      ...e,
      ref: n,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => t.onOpenChange(!1)
    }
  );
}), It = Qe("MenuContent.ScrollLock"), re = r.forwardRef(
  (e, n) => {
    const {
      __scopeMenu: t,
      loop: o = !1,
      trapFocus: s,
      onOpenAutoFocus: a,
      onCloseAutoFocus: l,
      disableOutsidePointerEvents: p,
      onEntryFocus: h,
      onEscapeKeyDown: m,
      onPointerDownOutside: f,
      onFocusOutside: c,
      onInteractOutside: d,
      onDismiss: C,
      disableOutsideScroll: v,
      ...I
    } = e, y = E(_, t), T = G(_, t), U = K(t), B = Re(t), ie = vt(t), [Xe, le] = r.useState(null), V = r.useRef(null), je = N(n, V, y.onContentChange), Y = r.useRef(0), X = r.useRef(""), He = r.useRef(0), Z = r.useRef(null), de = r.useRef("right"), $ = r.useRef(0), We = v ? ct : r.Fragment, ze = v ? { as: It, allowPinchZoom: !0 } : void 0, Ze = (i) => {
      var x, me;
      const g = X.current + i, R = ie().filter((P) => !P.disabled), S = document.activeElement, q = (x = R.find((P) => P.ref.current === S)) == null ? void 0 : x.textValue, J = R.map((P) => P.textValue), fe = Lt(J, g, q), A = (me = R.find((P) => P.textValue === fe)) == null ? void 0 : me.ref.current;
      (function P(pe) {
        X.current = pe, window.clearTimeout(Y.current), pe !== "" && (Y.current = window.setTimeout(() => P(""), 1e3));
      })(g), A && setTimeout(() => A.focus());
    };
    r.useEffect(() => () => window.clearTimeout(Y.current), []), rt();
    const b = r.useCallback((i) => {
      var R, S;
      return de.current === ((R = Z.current) == null ? void 0 : R.side) && Gt(i, (S = Z.current) == null ? void 0 : S.area);
    }, []);
    return /* @__PURE__ */ u(
      Pt,
      {
        scope: t,
        searchRef: X,
        onItemEnter: r.useCallback(
          (i) => {
            b(i) && i.preventDefault();
          },
          [b]
        ),
        onItemLeave: r.useCallback(
          (i) => {
            var g;
            b(i) || ((g = V.current) == null || g.focus(), le(null));
          },
          [b]
        ),
        onTriggerLeave: r.useCallback(
          (i) => {
            b(i) && i.preventDefault();
          },
          [b]
        ),
        pointerGraceTimerRef: He,
        onPointerGraceIntentChange: r.useCallback((i) => {
          Z.current = i;
        }, []),
        children: /* @__PURE__ */ u(We, { ...ze, children: /* @__PURE__ */ u(
          at,
          {
            asChild: !0,
            trapped: s,
            onMountAutoFocus: M(a, (i) => {
              var g;
              i.preventDefault(), (g = V.current) == null || g.focus({ preventScroll: !0 });
            }),
            onUnmountAutoFocus: l,
            children: /* @__PURE__ */ u(
              nt,
              {
                asChild: !0,
                disableOutsidePointerEvents: p,
                onEscapeKeyDown: m,
                onPointerDownOutside: f,
                onFocusOutside: c,
                onInteractOutside: d,
                onDismiss: C,
                children: /* @__PURE__ */ u(
                  ft,
                  {
                    asChild: !0,
                    ...B,
                    dir: T.dir,
                    orientation: "vertical",
                    loop: o,
                    currentTabStopId: Xe,
                    onCurrentTabStopIdChange: le,
                    onEntryFocus: M(h, (i) => {
                      T.isUsingKeyboardRef.current || i.preventDefault();
                    }),
                    preventScrollOnEntryFocus: !0,
                    children: /* @__PURE__ */ u(
                      ut,
                      {
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": Ye(y.open),
                        "data-radix-menu-content": "",
                        dir: T.dir,
                        ...U,
                        ...I,
                        ref: je,
                        style: { outline: "none", ...I.style },
                        onKeyDown: M(I.onKeyDown, (i) => {
                          const R = i.target.closest("[data-radix-menu-content]") === i.currentTarget, S = i.ctrlKey || i.altKey || i.metaKey, q = i.key.length === 1;
                          R && (i.key === "Tab" && i.preventDefault(), !S && q && Ze(i.key));
                          const J = V.current;
                          if (i.target !== J || !pt.includes(i.key)) return;
                          i.preventDefault();
                          const A = ie().filter((x) => !x.disabled).map((x) => x.ref.current);
                          _e.includes(i.key) && A.reverse(), Nt(A);
                        }),
                        onBlur: M(e.onBlur, (i) => {
                          i.currentTarget.contains(i.target) || (window.clearTimeout(Y.current), X.current = "");
                        }),
                        onPointerMove: M(
                          e.onPointerMove,
                          k((i) => {
                            const g = i.target, R = $.current !== i.clientX;
                            if (i.currentTarget.contains(g) && R) {
                              const S = i.clientX > $.current ? "right" : "left";
                              de.current = S, $.current = i.clientX;
                            }
                          })
                        )
                      }
                    )
                  }
                )
              }
            )
          }
        ) })
      }
    );
  }
);
we.displayName = _;
var wt = "MenuGroup", ce = r.forwardRef(
  (e, n) => {
    const { __scopeMenu: t, ...o } = e;
    return /* @__PURE__ */ u(F.div, { role: "group", ...o, ref: n });
  }
);
ce.displayName = wt;
var yt = "MenuLabel", ye = r.forwardRef(
  (e, n) => {
    const { __scopeMenu: t, ...o } = e;
    return /* @__PURE__ */ u(F.div, { ...o, ref: n });
  }
);
ye.displayName = yt;
var j = "MenuItem", Me = "menu.itemSelect", z = r.forwardRef(
  (e, n) => {
    const { disabled: t = !1, onSelect: o, ...s } = e, a = r.useRef(null), l = G(j, e.__scopeMenu), p = oe(j, e.__scopeMenu), h = N(n, a), m = r.useRef(!1), f = () => {
      const c = a.current;
      if (!t && c) {
        const d = new CustomEvent(Me, { bubbles: !0, cancelable: !0 });
        c.addEventListener(Me, (C) => o == null ? void 0 : o(C), { once: !0 }), lt(c, d), d.defaultPrevented ? m.current = !1 : l.onClose();
      }
    };
    return /* @__PURE__ */ u(
      be,
      {
        ...s,
        ref: h,
        disabled: t,
        onClick: M(e.onClick, f),
        onPointerDown: (c) => {
          var d;
          (d = e.onPointerDown) == null || d.call(e, c), m.current = !0;
        },
        onPointerUp: M(e.onPointerUp, (c) => {
          var d;
          m.current || (d = c.currentTarget) == null || d.click();
        }),
        onKeyDown: M(e.onKeyDown, (c) => {
          const d = p.searchRef.current !== "";
          t || d && c.key === " " || Q.includes(c.key) && (c.currentTarget.click(), c.preventDefault());
        })
      }
    );
  }
);
z.displayName = j;
var be = r.forwardRef(
  (e, n) => {
    const { __scopeMenu: t, disabled: o = !1, textValue: s, ...a } = e, l = oe(j, t), p = Re(t), h = r.useRef(null), m = N(n, h), [f, c] = r.useState(!1), [d, C] = r.useState("");
    return r.useEffect(() => {
      const v = h.current;
      v && C((v.textContent ?? "").trim());
    }, [a.children]), /* @__PURE__ */ u(
      D.ItemSlot,
      {
        scope: t,
        disabled: o,
        textValue: s ?? d,
        children: /* @__PURE__ */ u(dt, { asChild: !0, ...p, focusable: !o, children: /* @__PURE__ */ u(
          F.div,
          {
            role: "menuitem",
            "data-highlighted": f ? "" : void 0,
            "aria-disabled": o || void 0,
            "data-disabled": o ? "" : void 0,
            ...a,
            ref: m,
            onPointerMove: M(
              e.onPointerMove,
              k((v) => {
                o ? l.onItemLeave(v) : (l.onItemEnter(v), v.defaultPrevented || v.currentTarget.focus({ preventScroll: !0 }));
              })
            ),
            onPointerLeave: M(
              e.onPointerLeave,
              k((v) => l.onItemLeave(v))
            ),
            onFocus: M(e.onFocus, () => c(!0)),
            onBlur: M(e.onBlur, () => c(!1))
          }
        ) })
      }
    );
  }
), bt = "MenuCheckboxItem", xe = r.forwardRef(
  (e, n) => {
    const { checked: t = !1, onCheckedChange: o, ...s } = e;
    return /* @__PURE__ */ u(ke, { scope: e.__scopeMenu, checked: t, children: /* @__PURE__ */ u(
      z,
      {
        role: "menuitemcheckbox",
        "aria-checked": H(t) ? "mixed" : t,
        ...s,
        ref: n,
        "data-state": ue(t),
        onSelect: M(
          s.onSelect,
          () => o == null ? void 0 : o(H(t) ? !0 : !t),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
xe.displayName = bt;
var Te = "MenuRadioGroup", [xt, Tt] = w(
  Te,
  { value: void 0, onValueChange: () => {
  } }
), Ae = r.forwardRef(
  (e, n) => {
    const { value: t, onValueChange: o, ...s } = e, a = ee(o);
    return /* @__PURE__ */ u(xt, { scope: e.__scopeMenu, value: t, onValueChange: a, children: /* @__PURE__ */ u(ce, { ...s, ref: n }) });
  }
);
Ae.displayName = Te;
var Oe = "MenuRadioItem", De = r.forwardRef(
  (e, n) => {
    const { value: t, ...o } = e, s = Tt(Oe, e.__scopeMenu), a = t === s.value;
    return /* @__PURE__ */ u(ke, { scope: e.__scopeMenu, checked: a, children: /* @__PURE__ */ u(
      z,
      {
        role: "menuitemradio",
        "aria-checked": a,
        ...o,
        ref: n,
        "data-state": ue(a),
        onSelect: M(
          o.onSelect,
          () => {
            var l;
            return (l = s.onValueChange) == null ? void 0 : l.call(s, t);
          },
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
De.displayName = Oe;
var ae = "MenuItemIndicator", [ke, At] = w(
  ae,
  { checked: !1 }
), Ne = r.forwardRef(
  (e, n) => {
    const { __scopeMenu: t, forceMount: o, ...s } = e, a = At(ae, t);
    return /* @__PURE__ */ u(
      W,
      {
        present: o || H(a.checked) || a.checked === !0,
        children: /* @__PURE__ */ u(
          F.span,
          {
            ...s,
            ref: n,
            "data-state": ue(a.checked)
          }
        )
      }
    );
  }
);
Ne.displayName = ae;
var Ot = "MenuSeparator", Fe = r.forwardRef(
  (e, n) => {
    const { __scopeMenu: t, ...o } = e;
    return /* @__PURE__ */ u(
      F.div,
      {
        role: "separator",
        "aria-orientation": "horizontal",
        ...o,
        ref: n
      }
    );
  }
);
Fe.displayName = Ot;
var Dt = "MenuArrow", Le = r.forwardRef(
  (e, n) => {
    const { __scopeMenu: t, ...o } = e, s = K(t);
    return /* @__PURE__ */ u(it, { ...s, ...o, ref: n });
  }
);
Le.displayName = Dt;
var se = "MenuSub", [kt, Ke] = w(se), Ge = (e) => {
  const { __scopeMenu: n, children: t, open: o = !1, onOpenChange: s } = e, a = E(se, n), l = K(n), [p, h] = r.useState(null), [m, f] = r.useState(null), c = ee(s);
  return r.useEffect(() => (a.open === !1 && c(!1), () => c(!1)), [a.open, c]), /* @__PURE__ */ u(Ce, { ...l, children: /* @__PURE__ */ u(
    Pe,
    {
      scope: n,
      open: o,
      onOpenChange: c,
      content: m,
      onContentChange: f,
      children: /* @__PURE__ */ u(
        kt,
        {
          scope: n,
          contentId: he(),
          triggerId: he(),
          trigger: p,
          onTriggerChange: h,
          children: t
        }
      )
    }
  ) });
};
Ge.displayName = se;
var O = "MenuSubTrigger", Ue = r.forwardRef(
  (e, n) => {
    const t = E(O, e.__scopeMenu), o = G(O, e.__scopeMenu), s = Ke(O, e.__scopeMenu), a = oe(O, e.__scopeMenu), l = r.useRef(null), { pointerGraceTimerRef: p, onPointerGraceIntentChange: h } = a, m = { __scopeMenu: e.__scopeMenu }, f = r.useCallback(() => {
      l.current && window.clearTimeout(l.current), l.current = null;
    }, []);
    return r.useEffect(() => f, [f]), r.useEffect(() => {
      const c = p.current;
      return () => {
        window.clearTimeout(c), h(null);
      };
    }, [p, h]), /* @__PURE__ */ u(te, { asChild: !0, ...m, children: /* @__PURE__ */ u(
      be,
      {
        id: s.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": t.open,
        "aria-controls": s.contentId,
        "data-state": Ye(t.open),
        ...e,
        ref: Je(n, s.onTriggerChange),
        onClick: (c) => {
          var d;
          (d = e.onClick) == null || d.call(e, c), !(e.disabled || c.defaultPrevented) && (c.currentTarget.focus(), t.open || t.onOpenChange(!0));
        },
        onPointerMove: M(
          e.onPointerMove,
          k((c) => {
            a.onItemEnter(c), !c.defaultPrevented && !e.disabled && !t.open && !l.current && (a.onPointerGraceIntentChange(null), l.current = window.setTimeout(() => {
              t.onOpenChange(!0), f();
            }, 100));
          })
        ),
        onPointerLeave: M(
          e.onPointerLeave,
          k((c) => {
            var C, v;
            f();
            const d = (C = t.content) == null ? void 0 : C.getBoundingClientRect();
            if (d) {
              const I = (v = t.content) == null ? void 0 : v.dataset.side, y = I === "right", T = y ? -5 : 5, U = d[y ? "left" : "right"], B = d[y ? "right" : "left"];
              a.onPointerGraceIntentChange({
                area: [
                  // Apply a bleed on clientX to ensure that our exit point is
                  // consistently within polygon bounds
                  { x: c.clientX + T, y: c.clientY },
                  { x: U, y: d.top },
                  { x: B, y: d.top },
                  { x: B, y: d.bottom },
                  { x: U, y: d.bottom }
                ],
                side: I
              }), window.clearTimeout(p.current), p.current = window.setTimeout(
                () => a.onPointerGraceIntentChange(null),
                300
              );
            } else {
              if (a.onTriggerLeave(c), c.defaultPrevented) return;
              a.onPointerGraceIntentChange(null);
            }
          })
        ),
        onKeyDown: M(e.onKeyDown, (c) => {
          var C;
          const d = a.searchRef.current !== "";
          e.disabled || d && c.key === " " || ht[o.dir].includes(c.key) && (t.onOpenChange(!0), (C = t.content) == null || C.focus(), c.preventDefault());
        })
      }
    ) });
  }
);
Ue.displayName = O;
var Be = "MenuSubContent", Ve = r.forwardRef(
  (e, n) => {
    const t = Ee(_, e.__scopeMenu), { forceMount: o = t.forceMount, ...s } = e, a = E(_, e.__scopeMenu), l = G(_, e.__scopeMenu), p = Ke(Be, e.__scopeMenu), h = r.useRef(null), m = N(n, h);
    return /* @__PURE__ */ u(D.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ u(W, { present: o || a.open, children: /* @__PURE__ */ u(D.Slot, { scope: e.__scopeMenu, children: /* @__PURE__ */ u(
      re,
      {
        id: p.contentId,
        "aria-labelledby": p.triggerId,
        ...s,
        ref: m,
        align: "start",
        side: l.dir === "rtl" ? "left" : "right",
        disableOutsidePointerEvents: !1,
        disableOutsideScroll: !1,
        trapFocus: !1,
        onOpenAutoFocus: (f) => {
          var c;
          l.isUsingKeyboardRef.current && ((c = h.current) == null || c.focus()), f.preventDefault();
        },
        onCloseAutoFocus: (f) => f.preventDefault(),
        onFocusOutside: M(e.onFocusOutside, (f) => {
          f.target !== p.trigger && a.onOpenChange(!1);
        }),
        onEscapeKeyDown: M(e.onEscapeKeyDown, (f) => {
          l.onClose(), f.preventDefault();
        }),
        onKeyDown: M(e.onKeyDown, (f) => {
          var C;
          const c = f.currentTarget.contains(f.target), d = Mt[l.dir].includes(f.key);
          c && d && (a.onOpenChange(!1), (C = p.trigger) == null || C.focus(), f.preventDefault());
        })
      }
    ) }) }) });
  }
);
Ve.displayName = Be;
function Ye(e) {
  return e ? "open" : "closed";
}
function H(e) {
  return e === "indeterminate";
}
function ue(e) {
  return H(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function Nt(e) {
  const n = document.activeElement;
  for (const t of e)
    if (t === n || (t.focus(), document.activeElement !== n)) return;
}
function Ft(e, n) {
  return e.map((t, o) => e[(n + o) % e.length]);
}
function Lt(e, n, t) {
  const s = n.length > 1 && Array.from(n).every((m) => m === n[0]) ? n[0] : n, a = t ? e.indexOf(t) : -1;
  let l = Ft(e, Math.max(a, 0));
  s.length === 1 && (l = l.filter((m) => m !== t));
  const h = l.find(
    (m) => m.toLowerCase().startsWith(s.toLowerCase())
  );
  return h !== t ? h : void 0;
}
function Kt(e, n) {
  const { x: t, y: o } = e;
  let s = !1;
  for (let a = 0, l = n.length - 1; a < n.length; l = a++) {
    const p = n[a], h = n[l], m = p.x, f = p.y, c = h.x, d = h.y;
    f > o != d > o && t < (c - m) * (o - f) / (d - f) + m && (s = !s);
  }
  return s;
}
function Gt(e, n) {
  if (!n) return !1;
  const t = { x: e.clientX, y: e.clientY };
  return Kt(t, n);
}
function k(e) {
  return (n) => n.pointerType === "mouse" ? e(n) : void 0;
}
var en = Se, tn = te, nn = Ie, on = we, rn = ce, cn = ye, an = z, sn = xe, un = Ae, ln = De, dn = Ne, fn = Fe, mn = Le, pn = Ge, hn = Ue, Mn = Ve;
export {
  tn as A,
  on as C,
  rn as G,
  an as I,
  cn as L,
  nn as P,
  en as R,
  fn as S,
  sn as a,
  dn as b,
  Qt as c,
  un as d,
  ln as e,
  pn as f,
  Mn as g,
  hn as h,
  mn as i
};
//# sourceMappingURL=index-CNSaAFk3.js.map
