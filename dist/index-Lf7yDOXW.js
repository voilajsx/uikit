import * as o from "react";
import { c as M } from "./index-C0UREtMP.js";
import { c as ze, u as Ze } from "./index-1QHKgw6D.js";
import { u as k, c as $e, a as qe } from "./index-DQH6odE9.js";
import { c as Je } from "./index-DFZozV_h.js";
import { P as Qe, D as et } from "./index-BY7PeRJA.js";
import { h as tt, u as nt, R as ot, F as rt } from "./Combination-C0DFrmJW.js";
import { u as de } from "./index-xqkGMOJ8.js";
import { c as pe, R as me, A as ct, C as at, a as st } from "./index-dhIqEbxW.js";
import { P as X } from "./index-BCjJQGh8.js";
import { P as N, d as ut } from "./index-BVRIAMfe.js";
import { c as he, I as it, R as lt } from "./index-DFi6WydO.js";
import { u as q } from "./index-0ioNhtNM.js";
import { jsx as s } from "react/jsx-runtime";
var $ = ["Enter", " "], dt = ["ArrowDown", "PageUp", "Home"], Ce = ["ArrowUp", "PageDown", "End"], ft = [...dt, ...Ce], pt = {
  ltr: [...$, "ArrowRight"],
  rtl: [...$, "ArrowLeft"]
}, mt = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
}, F = "Menu", [O, ht, Ct] = ze(F), [P, qt] = Je(F, [
  Ct,
  pe,
  he
]), L = pe(), Me = he(), [ve, R] = P(F), [Mt, K] = P(F), ge = (e) => {
  const { __scopeMenu: n, open: t = !1, children: r, dir: u, onOpenChange: c, modal: d = !0 } = e, m = L(n), [h, p] = o.useState(null), l = o.useRef(!1), a = q(c), f = Ze(u);
  return o.useEffect(() => {
    const g = () => {
      l.current = !0, document.addEventListener("pointerdown", C, { capture: !0, once: !0 }), document.addEventListener("pointermove", C, { capture: !0, once: !0 });
    }, C = () => l.current = !1;
    return document.addEventListener("keydown", g, { capture: !0 }), () => {
      document.removeEventListener("keydown", g, { capture: !0 }), document.removeEventListener("pointerdown", C, { capture: !0 }), document.removeEventListener("pointermove", C, { capture: !0 });
    };
  }, []), /* @__PURE__ */ s(me, { ...m, children: /* @__PURE__ */ s(
    ve,
    {
      scope: n,
      open: t,
      onOpenChange: a,
      content: h,
      onContentChange: p,
      children: /* @__PURE__ */ s(
        Mt,
        {
          scope: n,
          onClose: o.useCallback(() => a(!1), [a]),
          isUsingKeyboardRef: l,
          dir: f,
          modal: d,
          children: r
        }
      )
    }
  ) });
};
ge.displayName = F;
var vt = "MenuAnchor", J = o.forwardRef(
  (e, n) => {
    const { __scopeMenu: t, ...r } = e, u = L(t);
    return /* @__PURE__ */ s(ct, { ...u, ...r, ref: n });
  }
);
J.displayName = vt;
var Q = "MenuPortal", [gt, _e] = P(Q, {
  forceMount: void 0
}), Re = (e) => {
  const { __scopeMenu: n, forceMount: t, children: r, container: u } = e, c = R(Q, n);
  return /* @__PURE__ */ s(gt, { scope: n, forceMount: t, children: /* @__PURE__ */ s(X, { present: t || c.open, children: /* @__PURE__ */ s(Qe, { asChild: !0, container: u, children: r }) }) });
};
Re.displayName = Q;
var _ = "MenuContent", [_t, ee] = P(_), Se = o.forwardRef(
  (e, n) => {
    const t = _e(_, e.__scopeMenu), { forceMount: r = t.forceMount, ...u } = e, c = R(_, e.__scopeMenu), d = K(_, e.__scopeMenu);
    return /* @__PURE__ */ s(O.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ s(X, { present: r || c.open, children: /* @__PURE__ */ s(O.Slot, { scope: e.__scopeMenu, children: d.modal ? /* @__PURE__ */ s(Rt, { ...u, ref: n }) : /* @__PURE__ */ s(St, { ...u, ref: n }) }) }) });
  }
), Rt = o.forwardRef(
  (e, n) => {
    const t = R(_, e.__scopeMenu), r = o.useRef(null), u = k(n, r);
    return o.useEffect(() => {
      const c = r.current;
      if (c) return tt(c);
    }, []), /* @__PURE__ */ s(
      te,
      {
        ...e,
        ref: u,
        trapFocus: t.open,
        disableOutsidePointerEvents: t.open,
        disableOutsideScroll: !0,
        onFocusOutside: M(
          e.onFocusOutside,
          (c) => c.preventDefault(),
          { checkForDefaultPrevented: !1 }
        ),
        onDismiss: () => t.onOpenChange(!1)
      }
    );
  }
), St = o.forwardRef((e, n) => {
  const t = R(_, e.__scopeMenu);
  return /* @__PURE__ */ s(
    te,
    {
      ...e,
      ref: n,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => t.onOpenChange(!1)
    }
  );
}), Pt = $e("MenuContent.ScrollLock"), te = o.forwardRef(
  (e, n) => {
    const {
      __scopeMenu: t,
      loop: r = !1,
      trapFocus: u,
      onOpenAutoFocus: c,
      onCloseAutoFocus: d,
      disableOutsidePointerEvents: m,
      onEntryFocus: h,
      onEscapeKeyDown: p,
      onPointerDownOutside: l,
      onFocusOutside: a,
      onInteractOutside: f,
      onDismiss: g,
      disableOutsideScroll: C,
      ...E
    } = e, x = R(_, t), I = K(_, t), Ue = L(t), Be = Me(t), ae = ht(t), [Ve, se] = o.useState(null), G = o.useRef(null), Ye = k(n, G, x.onContentChange), U = o.useRef(0), B = o.useRef(""), Xe = o.useRef(0), H = o.useRef(null), ue = o.useRef("right"), W = o.useRef(0), je = C ? ot : o.Fragment, He = C ? { as: Pt, allowPinchZoom: !0 } : void 0, We = (i) => {
      const y = B.current + i, S = ae().filter((v) => !v.disabled), b = document.activeElement, z = S.find((v) => v.ref.current === b)?.textValue, Z = S.map((v) => v.textValue), ie = Nt(Z, y, z), T = S.find((v) => v.textValue === ie)?.ref.current;
      (function v(le) {
        B.current = le, window.clearTimeout(U.current), le !== "" && (U.current = window.setTimeout(() => v(""), 1e3));
      })(y), T && setTimeout(() => T.focus());
    };
    o.useEffect(() => () => window.clearTimeout(U.current), []), nt();
    const w = o.useCallback((i) => ue.current === H.current?.side && Lt(i, H.current?.area), []);
    return /* @__PURE__ */ s(
      _t,
      {
        scope: t,
        searchRef: B,
        onItemEnter: o.useCallback(
          (i) => {
            w(i) && i.preventDefault();
          },
          [w]
        ),
        onItemLeave: o.useCallback(
          (i) => {
            w(i) || (G.current?.focus(), se(null));
          },
          [w]
        ),
        onTriggerLeave: o.useCallback(
          (i) => {
            w(i) && i.preventDefault();
          },
          [w]
        ),
        pointerGraceTimerRef: Xe,
        onPointerGraceIntentChange: o.useCallback((i) => {
          H.current = i;
        }, []),
        children: /* @__PURE__ */ s(je, { ...He, children: /* @__PURE__ */ s(
          rt,
          {
            asChild: !0,
            trapped: u,
            onMountAutoFocus: M(c, (i) => {
              i.preventDefault(), G.current?.focus({ preventScroll: !0 });
            }),
            onUnmountAutoFocus: d,
            children: /* @__PURE__ */ s(
              et,
              {
                asChild: !0,
                disableOutsidePointerEvents: m,
                onEscapeKeyDown: p,
                onPointerDownOutside: l,
                onFocusOutside: a,
                onInteractOutside: f,
                onDismiss: g,
                children: /* @__PURE__ */ s(
                  lt,
                  {
                    asChild: !0,
                    ...Be,
                    dir: I.dir,
                    orientation: "vertical",
                    loop: r,
                    currentTabStopId: Ve,
                    onCurrentTabStopIdChange: se,
                    onEntryFocus: M(h, (i) => {
                      I.isUsingKeyboardRef.current || i.preventDefault();
                    }),
                    preventScrollOnEntryFocus: !0,
                    children: /* @__PURE__ */ s(
                      at,
                      {
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": Ge(x.open),
                        "data-radix-menu-content": "",
                        dir: I.dir,
                        ...Ue,
                        ...E,
                        ref: Ye,
                        style: { outline: "none", ...E.style },
                        onKeyDown: M(E.onKeyDown, (i) => {
                          const S = i.target.closest("[data-radix-menu-content]") === i.currentTarget, b = i.ctrlKey || i.altKey || i.metaKey, z = i.key.length === 1;
                          S && (i.key === "Tab" && i.preventDefault(), !b && z && We(i.key));
                          const Z = G.current;
                          if (i.target !== Z || !ft.includes(i.key)) return;
                          i.preventDefault();
                          const T = ae().filter((v) => !v.disabled).map((v) => v.ref.current);
                          Ce.includes(i.key) && T.reverse(), Dt(T);
                        }),
                        onBlur: M(e.onBlur, (i) => {
                          i.currentTarget.contains(i.target) || (window.clearTimeout(U.current), B.current = "");
                        }),
                        onPointerMove: M(
                          e.onPointerMove,
                          D((i) => {
                            const y = i.target, S = W.current !== i.clientX;
                            if (i.currentTarget.contains(y) && S) {
                              const b = i.clientX > W.current ? "right" : "left";
                              ue.current = b, W.current = i.clientX;
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
Se.displayName = _;
var Et = "MenuGroup", ne = o.forwardRef(
  (e, n) => {
    const { __scopeMenu: t, ...r } = e;
    return /* @__PURE__ */ s(N.div, { role: "group", ...r, ref: n });
  }
);
ne.displayName = Et;
var It = "MenuLabel", Pe = o.forwardRef(
  (e, n) => {
    const { __scopeMenu: t, ...r } = e;
    return /* @__PURE__ */ s(N.div, { ...r, ref: n });
  }
);
Pe.displayName = It;
var V = "MenuItem", fe = "menu.itemSelect", j = o.forwardRef(
  (e, n) => {
    const { disabled: t = !1, onSelect: r, ...u } = e, c = o.useRef(null), d = K(V, e.__scopeMenu), m = ee(V, e.__scopeMenu), h = k(n, c), p = o.useRef(!1), l = () => {
      const a = c.current;
      if (!t && a) {
        const f = new CustomEvent(fe, { bubbles: !0, cancelable: !0 });
        a.addEventListener(fe, (g) => r?.(g), { once: !0 }), ut(a, f), f.defaultPrevented ? p.current = !1 : d.onClose();
      }
    };
    return /* @__PURE__ */ s(
      Ee,
      {
        ...u,
        ref: h,
        disabled: t,
        onClick: M(e.onClick, l),
        onPointerDown: (a) => {
          e.onPointerDown?.(a), p.current = !0;
        },
        onPointerUp: M(e.onPointerUp, (a) => {
          p.current || a.currentTarget?.click();
        }),
        onKeyDown: M(e.onKeyDown, (a) => {
          const f = m.searchRef.current !== "";
          t || f && a.key === " " || $.includes(a.key) && (a.currentTarget.click(), a.preventDefault());
        })
      }
    );
  }
);
j.displayName = V;
var Ee = o.forwardRef(
  (e, n) => {
    const { __scopeMenu: t, disabled: r = !1, textValue: u, ...c } = e, d = ee(V, t), m = Me(t), h = o.useRef(null), p = k(n, h), [l, a] = o.useState(!1), [f, g] = o.useState("");
    return o.useEffect(() => {
      const C = h.current;
      C && g((C.textContent ?? "").trim());
    }, [c.children]), /* @__PURE__ */ s(
      O.ItemSlot,
      {
        scope: t,
        disabled: r,
        textValue: u ?? f,
        children: /* @__PURE__ */ s(it, { asChild: !0, ...m, focusable: !r, children: /* @__PURE__ */ s(
          N.div,
          {
            role: "menuitem",
            "data-highlighted": l ? "" : void 0,
            "aria-disabled": r || void 0,
            "data-disabled": r ? "" : void 0,
            ...c,
            ref: p,
            onPointerMove: M(
              e.onPointerMove,
              D((C) => {
                r ? d.onItemLeave(C) : (d.onItemEnter(C), C.defaultPrevented || C.currentTarget.focus({ preventScroll: !0 }));
              })
            ),
            onPointerLeave: M(
              e.onPointerLeave,
              D((C) => d.onItemLeave(C))
            ),
            onFocus: M(e.onFocus, () => a(!0)),
            onBlur: M(e.onBlur, () => a(!1))
          }
        ) })
      }
    );
  }
), wt = "MenuCheckboxItem", Ie = o.forwardRef(
  (e, n) => {
    const { checked: t = !1, onCheckedChange: r, ...u } = e;
    return /* @__PURE__ */ s(Te, { scope: e.__scopeMenu, checked: t, children: /* @__PURE__ */ s(
      j,
      {
        role: "menuitemcheckbox",
        "aria-checked": Y(t) ? "mixed" : t,
        ...u,
        ref: n,
        "data-state": ce(t),
        onSelect: M(
          u.onSelect,
          () => r?.(Y(t) ? !0 : !t),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
Ie.displayName = wt;
var we = "MenuRadioGroup", [yt, xt] = P(
  we,
  { value: void 0, onValueChange: () => {
  } }
), ye = o.forwardRef(
  (e, n) => {
    const { value: t, onValueChange: r, ...u } = e, c = q(r);
    return /* @__PURE__ */ s(yt, { scope: e.__scopeMenu, value: t, onValueChange: c, children: /* @__PURE__ */ s(ne, { ...u, ref: n }) });
  }
);
ye.displayName = we;
var xe = "MenuRadioItem", be = o.forwardRef(
  (e, n) => {
    const { value: t, ...r } = e, u = xt(xe, e.__scopeMenu), c = t === u.value;
    return /* @__PURE__ */ s(Te, { scope: e.__scopeMenu, checked: c, children: /* @__PURE__ */ s(
      j,
      {
        role: "menuitemradio",
        "aria-checked": c,
        ...r,
        ref: n,
        "data-state": ce(c),
        onSelect: M(
          r.onSelect,
          () => u.onValueChange?.(t),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
be.displayName = xe;
var oe = "MenuItemIndicator", [Te, bt] = P(
  oe,
  { checked: !1 }
), Ae = o.forwardRef(
  (e, n) => {
    const { __scopeMenu: t, forceMount: r, ...u } = e, c = bt(oe, t);
    return /* @__PURE__ */ s(
      X,
      {
        present: r || Y(c.checked) || c.checked === !0,
        children: /* @__PURE__ */ s(
          N.span,
          {
            ...u,
            ref: n,
            "data-state": ce(c.checked)
          }
        )
      }
    );
  }
);
Ae.displayName = oe;
var Tt = "MenuSeparator", Oe = o.forwardRef(
  (e, n) => {
    const { __scopeMenu: t, ...r } = e;
    return /* @__PURE__ */ s(
      N.div,
      {
        role: "separator",
        "aria-orientation": "horizontal",
        ...r,
        ref: n
      }
    );
  }
);
Oe.displayName = Tt;
var At = "MenuArrow", De = o.forwardRef(
  (e, n) => {
    const { __scopeMenu: t, ...r } = e, u = L(t);
    return /* @__PURE__ */ s(st, { ...u, ...r, ref: n });
  }
);
De.displayName = At;
var re = "MenuSub", [Ot, ke] = P(re), Ne = (e) => {
  const { __scopeMenu: n, children: t, open: r = !1, onOpenChange: u } = e, c = R(re, n), d = L(n), [m, h] = o.useState(null), [p, l] = o.useState(null), a = q(u);
  return o.useEffect(() => (c.open === !1 && a(!1), () => a(!1)), [c.open, a]), /* @__PURE__ */ s(me, { ...d, children: /* @__PURE__ */ s(
    ve,
    {
      scope: n,
      open: r,
      onOpenChange: a,
      content: p,
      onContentChange: l,
      children: /* @__PURE__ */ s(
        Ot,
        {
          scope: n,
          contentId: de(),
          triggerId: de(),
          trigger: m,
          onTriggerChange: h,
          children: t
        }
      )
    }
  ) });
};
Ne.displayName = re;
var A = "MenuSubTrigger", Fe = o.forwardRef(
  (e, n) => {
    const t = R(A, e.__scopeMenu), r = K(A, e.__scopeMenu), u = ke(A, e.__scopeMenu), c = ee(A, e.__scopeMenu), d = o.useRef(null), { pointerGraceTimerRef: m, onPointerGraceIntentChange: h } = c, p = { __scopeMenu: e.__scopeMenu }, l = o.useCallback(() => {
      d.current && window.clearTimeout(d.current), d.current = null;
    }, []);
    return o.useEffect(() => l, [l]), o.useEffect(() => {
      const a = m.current;
      return () => {
        window.clearTimeout(a), h(null);
      };
    }, [m, h]), /* @__PURE__ */ s(J, { asChild: !0, ...p, children: /* @__PURE__ */ s(
      Ee,
      {
        id: u.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": t.open,
        "aria-controls": u.contentId,
        "data-state": Ge(t.open),
        ...e,
        ref: qe(n, u.onTriggerChange),
        onClick: (a) => {
          e.onClick?.(a), !(e.disabled || a.defaultPrevented) && (a.currentTarget.focus(), t.open || t.onOpenChange(!0));
        },
        onPointerMove: M(
          e.onPointerMove,
          D((a) => {
            c.onItemEnter(a), !a.defaultPrevented && !e.disabled && !t.open && !d.current && (c.onPointerGraceIntentChange(null), d.current = window.setTimeout(() => {
              t.onOpenChange(!0), l();
            }, 100));
          })
        ),
        onPointerLeave: M(
          e.onPointerLeave,
          D((a) => {
            l();
            const f = t.content?.getBoundingClientRect();
            if (f) {
              const g = t.content?.dataset.side, C = g === "right", E = C ? -5 : 5, x = f[C ? "left" : "right"], I = f[C ? "right" : "left"];
              c.onPointerGraceIntentChange({
                area: [
                  // Apply a bleed on clientX to ensure that our exit point is
                  // consistently within polygon bounds
                  { x: a.clientX + E, y: a.clientY },
                  { x, y: f.top },
                  { x: I, y: f.top },
                  { x: I, y: f.bottom },
                  { x, y: f.bottom }
                ],
                side: g
              }), window.clearTimeout(m.current), m.current = window.setTimeout(
                () => c.onPointerGraceIntentChange(null),
                300
              );
            } else {
              if (c.onTriggerLeave(a), a.defaultPrevented) return;
              c.onPointerGraceIntentChange(null);
            }
          })
        ),
        onKeyDown: M(e.onKeyDown, (a) => {
          const f = c.searchRef.current !== "";
          e.disabled || f && a.key === " " || pt[r.dir].includes(a.key) && (t.onOpenChange(!0), t.content?.focus(), a.preventDefault());
        })
      }
    ) });
  }
);
Fe.displayName = A;
var Le = "MenuSubContent", Ke = o.forwardRef(
  (e, n) => {
    const t = _e(_, e.__scopeMenu), { forceMount: r = t.forceMount, ...u } = e, c = R(_, e.__scopeMenu), d = K(_, e.__scopeMenu), m = ke(Le, e.__scopeMenu), h = o.useRef(null), p = k(n, h);
    return /* @__PURE__ */ s(O.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ s(X, { present: r || c.open, children: /* @__PURE__ */ s(O.Slot, { scope: e.__scopeMenu, children: /* @__PURE__ */ s(
      te,
      {
        id: m.contentId,
        "aria-labelledby": m.triggerId,
        ...u,
        ref: p,
        align: "start",
        side: d.dir === "rtl" ? "left" : "right",
        disableOutsidePointerEvents: !1,
        disableOutsideScroll: !1,
        trapFocus: !1,
        onOpenAutoFocus: (l) => {
          d.isUsingKeyboardRef.current && h.current?.focus(), l.preventDefault();
        },
        onCloseAutoFocus: (l) => l.preventDefault(),
        onFocusOutside: M(e.onFocusOutside, (l) => {
          l.target !== m.trigger && c.onOpenChange(!1);
        }),
        onEscapeKeyDown: M(e.onEscapeKeyDown, (l) => {
          d.onClose(), l.preventDefault();
        }),
        onKeyDown: M(e.onKeyDown, (l) => {
          const a = l.currentTarget.contains(l.target), f = mt[d.dir].includes(l.key);
          a && f && (c.onOpenChange(!1), m.trigger?.focus(), l.preventDefault());
        })
      }
    ) }) }) });
  }
);
Ke.displayName = Le;
function Ge(e) {
  return e ? "open" : "closed";
}
function Y(e) {
  return e === "indeterminate";
}
function ce(e) {
  return Y(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function Dt(e) {
  const n = document.activeElement;
  for (const t of e)
    if (t === n || (t.focus(), document.activeElement !== n)) return;
}
function kt(e, n) {
  return e.map((t, r) => e[(n + r) % e.length]);
}
function Nt(e, n, t) {
  const u = n.length > 1 && Array.from(n).every((p) => p === n[0]) ? n[0] : n, c = t ? e.indexOf(t) : -1;
  let d = kt(e, Math.max(c, 0));
  u.length === 1 && (d = d.filter((p) => p !== t));
  const h = d.find(
    (p) => p.toLowerCase().startsWith(u.toLowerCase())
  );
  return h !== t ? h : void 0;
}
function Ft(e, n) {
  const { x: t, y: r } = e;
  let u = !1;
  for (let c = 0, d = n.length - 1; c < n.length; d = c++) {
    const m = n[c], h = n[d], p = m.x, l = m.y, a = h.x, f = h.y;
    l > r != f > r && t < (a - p) * (r - l) / (f - l) + p && (u = !u);
  }
  return u;
}
function Lt(e, n) {
  if (!n) return !1;
  const t = { x: e.clientX, y: e.clientY };
  return Ft(t, n);
}
function D(e) {
  return (n) => n.pointerType === "mouse" ? e(n) : void 0;
}
var Jt = ge, Qt = J, en = Re, tn = Se, nn = ne, on = Pe, rn = j, cn = Ie, an = ye, sn = be, un = Ae, ln = Oe, dn = De, fn = Ne, pn = Fe, mn = Ke;
export {
  Qt as A,
  tn as C,
  nn as G,
  rn as I,
  on as L,
  en as P,
  Jt as R,
  ln as S,
  cn as a,
  un as b,
  qt as c,
  an as d,
  sn as e,
  fn as f,
  mn as g,
  pn as h,
  dn as i
};
//# sourceMappingURL=index-Lf7yDOXW.js.map
