import { jsx as l, jsxs as Q, Fragment as Ie } from "react/jsx-runtime";
import * as n from "react";
import * as Re from "react-dom";
import { c as Ne } from "./index-rKs9bXHr.js";
import { u as _e, c as N } from "./index-CPxmoWFw.js";
import { u as lt, c as it } from "./index-DphuwxkL.js";
import { u as B, a as ct } from "./index-B1fTi8J3.js";
import { c as dt } from "./index-UFb2E87s.js";
import { P as ut, D as pt } from "./index-DBSLDOnW.js";
import { h as ft, u as mt, R as ht, F as vt } from "./Combination-DHU6vllo.js";
import { u as Te } from "./index-B_PLZIoC.js";
import { c as Ee, R as gt, a as St, C as wt, A as xt } from "./index-ZLovmeI2.js";
import { P as M } from "./index-CP7NBbfF.js";
import { u as yt } from "./index-DwYXX2sM.js";
import { u as G } from "./index-DuekHEmj.js";
import { u as Ct } from "./index-BZPx6jYI.js";
import { V as bt } from "./index-ClHfXshV.js";
import { c as j } from "./utils-qaFjX9_3.js";
import { C as It } from "./check-DXouwtzp.js";
import { C as Me } from "./chevron-down-BORJtX8F.js";
import { C as Tt } from "./chevron-up-Cv9IJCav.js";
var Pt = [" ", "Enter", "ArrowUp", "ArrowDown"], Nt = [" ", "Enter"], ee = "Select", [de, ue, _t] = it(ee), [ne, Ro] = dt(ee, [
  _t,
  Ee
]), pe = Ee(), [Rt, Y] = ne(ee), [Et, Mt] = ne(ee), Ae = (t) => {
  const {
    __scopeSelect: o,
    children: e,
    open: i,
    defaultOpen: c,
    onOpenChange: p,
    value: s,
    defaultValue: a,
    onValueChange: r,
    dir: f,
    name: g,
    autoComplete: x,
    disabled: T,
    required: P,
    form: I
  } = t, d = pe(o), [v, y] = n.useState(null), [u, h] = n.useState(null), [A, O] = n.useState(!1), re = lt(f), [_, L] = _e({
    prop: i,
    defaultProp: c ?? !1,
    onChange: p,
    caller: ee
  }), [z, X] = _e({
    prop: s,
    defaultProp: a,
    onChange: r,
    caller: ee
  }), V = n.useRef(null), H = v ? I || !!v.closest("form") : !0, [K, U] = n.useState(/* @__PURE__ */ new Set()), F = Array.from(K).map((R) => R.props.value).join(";");
  return /* @__PURE__ */ l(gt, { ...d, children: /* @__PURE__ */ Q(
    Rt,
    {
      required: P,
      scope: o,
      trigger: v,
      onTriggerChange: y,
      valueNode: u,
      onValueNodeChange: h,
      valueNodeHasChildren: A,
      onValueNodeHasChildrenChange: O,
      contentId: Te(),
      value: z,
      onValueChange: X,
      open: _,
      onOpenChange: L,
      dir: re,
      triggerPointerDownPosRef: V,
      disabled: T,
      children: [
        /* @__PURE__ */ l(de.Provider, { scope: o, children: /* @__PURE__ */ l(
          Et,
          {
            scope: t.__scopeSelect,
            onNativeOptionAdd: n.useCallback((R) => {
              U((k) => new Set(k).add(R));
            }, []),
            onNativeOptionRemove: n.useCallback((R) => {
              U((k) => {
                const W = new Set(k);
                return W.delete(R), W;
              });
            }, []),
            children: e
          }
        ) }),
        H ? /* @__PURE__ */ Q(
          nt,
          {
            "aria-hidden": !0,
            required: P,
            tabIndex: -1,
            name: g,
            autoComplete: x,
            value: z,
            onChange: (R) => X(R.target.value),
            disabled: T,
            form: I,
            children: [
              z === void 0 ? /* @__PURE__ */ l("option", { value: "" }) : null,
              Array.from(K)
            ]
          },
          F
        ) : null
      ]
    }
  ) });
};
Ae.displayName = ee;
var Oe = "SelectTrigger", De = n.forwardRef(
  (t, o) => {
    const { __scopeSelect: e, disabled: i = !1, ...c } = t, p = pe(e), s = Y(Oe, e), a = s.disabled || i, r = B(o, s.onTriggerChange), f = ue(e), g = n.useRef("touch"), [x, T, P] = st((d) => {
      const v = f().filter((h) => !h.disabled), y = v.find((h) => h.value === s.value), u = at(v, d, y);
      u !== void 0 && s.onValueChange(u.value);
    }), I = (d) => {
      a || (s.onOpenChange(!0), P()), d && (s.triggerPointerDownPosRef.current = {
        x: Math.round(d.pageX),
        y: Math.round(d.pageY)
      });
    };
    return /* @__PURE__ */ l(St, { asChild: !0, ...p, children: /* @__PURE__ */ l(
      M.button,
      {
        type: "button",
        role: "combobox",
        "aria-controls": s.contentId,
        "aria-expanded": s.open,
        "aria-required": s.required,
        "aria-autocomplete": "none",
        dir: s.dir,
        "data-state": s.open ? "open" : "closed",
        disabled: a,
        "data-disabled": a ? "" : void 0,
        "data-placeholder": rt(s.value) ? "" : void 0,
        ...c,
        ref: r,
        onClick: N(c.onClick, (d) => {
          d.currentTarget.focus(), g.current !== "mouse" && I(d);
        }),
        onPointerDown: N(c.onPointerDown, (d) => {
          g.current = d.pointerType;
          const v = d.target;
          v.hasPointerCapture(d.pointerId) && v.releasePointerCapture(d.pointerId), d.button === 0 && d.ctrlKey === !1 && d.pointerType === "mouse" && (I(d), d.preventDefault());
        }),
        onKeyDown: N(c.onKeyDown, (d) => {
          const v = x.current !== "";
          !(d.ctrlKey || d.altKey || d.metaKey) && d.key.length === 1 && T(d.key), !(v && d.key === " ") && Pt.includes(d.key) && (I(), d.preventDefault());
        })
      }
    ) });
  }
);
De.displayName = Oe;
var Le = "SelectValue", ke = n.forwardRef(
  (t, o) => {
    const { __scopeSelect: e, className: i, style: c, children: p, placeholder: s = "", ...a } = t, r = Y(Le, e), { onValueNodeHasChildrenChange: f } = r, g = p !== void 0, x = B(o, r.onValueNodeChange);
    return G(() => {
      f(g);
    }, [f, g]), /* @__PURE__ */ l(
      M.span,
      {
        ...a,
        ref: x,
        style: { pointerEvents: "none" },
        children: rt(r.value) ? /* @__PURE__ */ l(Ie, { children: s }) : p
      }
    );
  }
);
ke.displayName = Le;
var At = "SelectIcon", Be = n.forwardRef(
  (t, o) => {
    const { __scopeSelect: e, children: i, ...c } = t;
    return /* @__PURE__ */ l(M.span, { "aria-hidden": !0, ...c, ref: o, children: i || "▼" });
  }
);
Be.displayName = At;
var Ot = "SelectPortal", Ve = (t) => /* @__PURE__ */ l(ut, { asChild: !0, ...t });
Ve.displayName = Ot;
var te = "SelectContent", He = n.forwardRef(
  (t, o) => {
    const e = Y(te, t.__scopeSelect), [i, c] = n.useState();
    if (G(() => {
      c(new DocumentFragment());
    }, []), !e.open) {
      const p = i;
      return p ? Re.createPortal(
        /* @__PURE__ */ l(Ue, { scope: t.__scopeSelect, children: /* @__PURE__ */ l(de.Slot, { scope: t.__scopeSelect, children: /* @__PURE__ */ l("div", { children: t.children }) }) }),
        p
      ) : null;
    }
    return /* @__PURE__ */ l(Fe, { ...t, ref: o });
  }
);
He.displayName = te;
var D = 10, [Ue, q] = ne(te), Dt = "SelectContentImpl", Lt = ct("SelectContent.RemoveScroll"), Fe = n.forwardRef(
  (t, o) => {
    const {
      __scopeSelect: e,
      position: i = "item-aligned",
      onCloseAutoFocus: c,
      onEscapeKeyDown: p,
      onPointerDownOutside: s,
      //
      // PopperContent props
      side: a,
      sideOffset: r,
      align: f,
      alignOffset: g,
      arrowPadding: x,
      collisionBoundary: T,
      collisionPadding: P,
      sticky: I,
      hideWhenDetached: d,
      avoidCollisions: v,
      //
      ...y
    } = t, u = Y(te, e), [h, A] = n.useState(null), [O, re] = n.useState(null), _ = B(o, (m) => A(m)), [L, z] = n.useState(null), [X, V] = n.useState(
      null
    ), H = ue(e), [K, U] = n.useState(!1), F = n.useRef(!1);
    n.useEffect(() => {
      if (h) return ft(h);
    }, [h]), mt();
    const R = n.useCallback(
      (m) => {
        const [b, ...E] = H().map((w) => w.ref.current), [C] = E.slice(-1), S = document.activeElement;
        for (const w of m)
          if (w === S || (w == null || w.scrollIntoView({ block: "nearest" }), w === b && O && (O.scrollTop = 0), w === C && O && (O.scrollTop = O.scrollHeight), w == null || w.focus(), document.activeElement !== S)) return;
      },
      [H, O]
    ), k = n.useCallback(
      () => R([L, h]),
      [R, L, h]
    );
    n.useEffect(() => {
      K && k();
    }, [K, k]);
    const { onOpenChange: W, triggerPointerDownPosRef: $ } = u;
    n.useEffect(() => {
      if (h) {
        let m = { x: 0, y: 0 };
        const b = (C) => {
          var S, w;
          m = {
            x: Math.abs(Math.round(C.pageX) - (((S = $.current) == null ? void 0 : S.x) ?? 0)),
            y: Math.abs(Math.round(C.pageY) - (((w = $.current) == null ? void 0 : w.y) ?? 0))
          };
        }, E = (C) => {
          m.x <= 10 && m.y <= 10 ? C.preventDefault() : h.contains(C.target) || W(!1), document.removeEventListener("pointermove", b), $.current = null;
        };
        return $.current !== null && (document.addEventListener("pointermove", b), document.addEventListener("pointerup", E, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", b), document.removeEventListener("pointerup", E, { capture: !0 });
        };
      }
    }, [h, W, $]), n.useEffect(() => {
      const m = () => W(!1);
      return window.addEventListener("blur", m), window.addEventListener("resize", m), () => {
        window.removeEventListener("blur", m), window.removeEventListener("resize", m);
      };
    }, [W]);
    const [fe, le] = st((m) => {
      const b = H().filter((S) => !S.disabled), E = b.find((S) => S.ref.current === document.activeElement), C = at(b, m, E);
      C && setTimeout(() => C.ref.current.focus());
    }), me = n.useCallback(
      (m, b, E) => {
        const C = !F.current && !E;
        (u.value !== void 0 && u.value === b || C) && (z(m), C && (F.current = !0));
      },
      [u.value]
    ), he = n.useCallback(() => h == null ? void 0 : h.focus(), [h]), oe = n.useCallback(
      (m, b, E) => {
        const C = !F.current && !E;
        (u.value !== void 0 && u.value === b || C) && V(m);
      },
      [u.value]
    ), ie = i === "popper" ? we : We, se = ie === we ? {
      side: a,
      sideOffset: r,
      align: f,
      alignOffset: g,
      arrowPadding: x,
      collisionBoundary: T,
      collisionPadding: P,
      sticky: I,
      hideWhenDetached: d,
      avoidCollisions: v
    } : {};
    return /* @__PURE__ */ l(
      Ue,
      {
        scope: e,
        content: h,
        viewport: O,
        onViewportChange: re,
        itemRefCallback: me,
        selectedItem: L,
        onItemLeave: he,
        itemTextRefCallback: oe,
        focusSelectedItem: k,
        selectedItemText: X,
        position: i,
        isPositioned: K,
        searchRef: fe,
        children: /* @__PURE__ */ l(ht, { as: Lt, allowPinchZoom: !0, children: /* @__PURE__ */ l(
          vt,
          {
            asChild: !0,
            trapped: u.open,
            onMountAutoFocus: (m) => {
              m.preventDefault();
            },
            onUnmountAutoFocus: N(c, (m) => {
              var b;
              (b = u.trigger) == null || b.focus({ preventScroll: !0 }), m.preventDefault();
            }),
            children: /* @__PURE__ */ l(
              pt,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: p,
                onPointerDownOutside: s,
                onFocusOutside: (m) => m.preventDefault(),
                onDismiss: () => u.onOpenChange(!1),
                children: /* @__PURE__ */ l(
                  ie,
                  {
                    role: "listbox",
                    id: u.contentId,
                    "data-state": u.open ? "open" : "closed",
                    dir: u.dir,
                    onContextMenu: (m) => m.preventDefault(),
                    ...y,
                    ...se,
                    onPlaced: () => U(!0),
                    ref: _,
                    style: {
                      // flex layout so we can place the scroll buttons properly
                      display: "flex",
                      flexDirection: "column",
                      // reset the outline by default as the content MAY get focused
                      outline: "none",
                      ...y.style
                    },
                    onKeyDown: N(y.onKeyDown, (m) => {
                      const b = m.ctrlKey || m.altKey || m.metaKey;
                      if (m.key === "Tab" && m.preventDefault(), !b && m.key.length === 1 && le(m.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(m.key)) {
                        let C = H().filter((S) => !S.disabled).map((S) => S.ref.current);
                        if (["ArrowUp", "End"].includes(m.key) && (C = C.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(m.key)) {
                          const S = m.target, w = C.indexOf(S);
                          C = C.slice(w + 1);
                        }
                        setTimeout(() => R(C)), m.preventDefault();
                      }
                    })
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
Fe.displayName = Dt;
var kt = "SelectItemAlignedPosition", We = n.forwardRef((t, o) => {
  const { __scopeSelect: e, onPlaced: i, ...c } = t, p = Y(te, e), s = q(te, e), [a, r] = n.useState(null), [f, g] = n.useState(null), x = B(o, (_) => g(_)), T = ue(e), P = n.useRef(!1), I = n.useRef(!0), { viewport: d, selectedItem: v, selectedItemText: y, focusSelectedItem: u } = s, h = n.useCallback(() => {
    if (p.trigger && p.valueNode && a && f && d && v && y) {
      const _ = p.trigger.getBoundingClientRect(), L = f.getBoundingClientRect(), z = p.valueNode.getBoundingClientRect(), X = y.getBoundingClientRect();
      if (p.dir !== "rtl") {
        const S = X.left - L.left, w = z.left - S, Z = _.left - w, J = _.width + Z, ve = Math.max(J, L.width), ge = window.innerWidth - D, Se = Ne(w, [
          D,
          // Prevents the content from going off the starting edge of the
          // viewport. It may still go off the ending edge, but this can be
          // controlled by the user since they may want to manage overflow in a
          // specific way.
          // https://github.com/radix-ui/primitives/issues/2049
          Math.max(D, ge - ve)
        ]);
        a.style.minWidth = J + "px", a.style.left = Se + "px";
      } else {
        const S = L.right - X.right, w = window.innerWidth - z.right - S, Z = window.innerWidth - _.right - w, J = _.width + Z, ve = Math.max(J, L.width), ge = window.innerWidth - D, Se = Ne(w, [
          D,
          Math.max(D, ge - ve)
        ]);
        a.style.minWidth = J + "px", a.style.right = Se + "px";
      }
      const V = T(), H = window.innerHeight - D * 2, K = d.scrollHeight, U = window.getComputedStyle(f), F = parseInt(U.borderTopWidth, 10), R = parseInt(U.paddingTop, 10), k = parseInt(U.borderBottomWidth, 10), W = parseInt(U.paddingBottom, 10), $ = F + R + K + W + k, fe = Math.min(v.offsetHeight * 5, $), le = window.getComputedStyle(d), me = parseInt(le.paddingTop, 10), he = parseInt(le.paddingBottom, 10), oe = _.top + _.height / 2 - D, ie = H - oe, se = v.offsetHeight / 2, m = v.offsetTop + se, b = F + R + m, E = $ - b;
      if (b <= oe) {
        const S = V.length > 0 && v === V[V.length - 1].ref.current;
        a.style.bottom = "0px";
        const w = f.clientHeight - d.offsetTop - d.offsetHeight, Z = Math.max(
          ie,
          se + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (S ? he : 0) + w + k
        ), J = b + Z;
        a.style.height = J + "px";
      } else {
        const S = V.length > 0 && v === V[0].ref.current;
        a.style.top = "0px";
        const Z = Math.max(
          oe,
          F + d.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (S ? me : 0) + se
        ) + E;
        a.style.height = Z + "px", d.scrollTop = b - oe + d.offsetTop;
      }
      a.style.margin = `${D}px 0`, a.style.minHeight = fe + "px", a.style.maxHeight = H + "px", i == null || i(), requestAnimationFrame(() => P.current = !0);
    }
  }, [
    T,
    p.trigger,
    p.valueNode,
    a,
    f,
    d,
    v,
    y,
    p.dir,
    i
  ]);
  G(() => h(), [h]);
  const [A, O] = n.useState();
  G(() => {
    f && O(window.getComputedStyle(f).zIndex);
  }, [f]);
  const re = n.useCallback(
    (_) => {
      _ && I.current === !0 && (h(), u == null || u(), I.current = !1);
    },
    [h, u]
  );
  return /* @__PURE__ */ l(
    Vt,
    {
      scope: e,
      contentWrapper: a,
      shouldExpandOnScrollRef: P,
      onScrollButtonChange: re,
      children: /* @__PURE__ */ l(
        "div",
        {
          ref: r,
          style: {
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            zIndex: A
          },
          children: /* @__PURE__ */ l(
            M.div,
            {
              ...c,
              ref: x,
              style: {
                // When we get the height of the content, it includes borders. If we were to set
                // the height without having `boxSizing: 'border-box'` it would be too big.
                boxSizing: "border-box",
                // We need to ensure the content doesn't get taller than the wrapper
                maxHeight: "100%",
                ...c.style
              }
            }
          )
        }
      )
    }
  );
});
We.displayName = kt;
var Bt = "SelectPopperPosition", we = n.forwardRef((t, o) => {
  const {
    __scopeSelect: e,
    align: i = "start",
    collisionPadding: c = D,
    ...p
  } = t, s = pe(e);
  return /* @__PURE__ */ l(
    wt,
    {
      ...s,
      ...p,
      ref: o,
      align: i,
      collisionPadding: c,
      style: {
        // Ensure border-box for floating-ui calculations
        boxSizing: "border-box",
        ...p.style,
        "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-select-content-available-width": "var(--radix-popper-available-width)",
        "--radix-select-content-available-height": "var(--radix-popper-available-height)",
        "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }
  );
});
we.displayName = Bt;
var [Vt, Pe] = ne(te, {}), xe = "SelectViewport", ze = n.forwardRef(
  (t, o) => {
    const { __scopeSelect: e, nonce: i, ...c } = t, p = q(xe, e), s = Pe(xe, e), a = B(o, p.onViewportChange), r = n.useRef(0);
    return /* @__PURE__ */ Q(Ie, { children: [
      /* @__PURE__ */ l(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: i
        }
      ),
      /* @__PURE__ */ l(de.Slot, { scope: e, children: /* @__PURE__ */ l(
        M.div,
        {
          "data-radix-select-viewport": "",
          role: "presentation",
          ...c,
          ref: a,
          style: {
            // we use position: 'relative' here on the `viewport` so that when we call
            // `selectedItem.offsetTop` in calculations, the offset is relative to the viewport
            // (independent of the scrollUpButton).
            position: "relative",
            flex: 1,
            // Viewport should only be scrollable in the vertical direction.
            // This won't work in vertical writing modes, so we'll need to
            // revisit this if/when that is supported
            // https://developer.chrome.com/blog/vertical-form-controls
            overflow: "hidden auto",
            ...c.style
          },
          onScroll: N(c.onScroll, (f) => {
            const g = f.currentTarget, { contentWrapper: x, shouldExpandOnScrollRef: T } = s;
            if (T != null && T.current && x) {
              const P = Math.abs(r.current - g.scrollTop);
              if (P > 0) {
                const I = window.innerHeight - D * 2, d = parseFloat(x.style.minHeight), v = parseFloat(x.style.height), y = Math.max(d, v);
                if (y < I) {
                  const u = y + P, h = Math.min(I, u), A = u - h;
                  x.style.height = h + "px", x.style.bottom === "0px" && (g.scrollTop = A > 0 ? A : 0, x.style.justifyContent = "flex-end");
                }
              }
            }
            r.current = g.scrollTop;
          })
        }
      ) })
    ] });
  }
);
ze.displayName = xe;
var Ke = "SelectGroup", [Ht, Ut] = ne(Ke), $e = n.forwardRef(
  (t, o) => {
    const { __scopeSelect: e, ...i } = t, c = Te();
    return /* @__PURE__ */ l(Ht, { scope: e, id: c, children: /* @__PURE__ */ l(M.div, { role: "group", "aria-labelledby": c, ...i, ref: o }) });
  }
);
$e.displayName = Ke;
var Ge = "SelectLabel", je = n.forwardRef(
  (t, o) => {
    const { __scopeSelect: e, ...i } = t, c = Ut(Ge, e);
    return /* @__PURE__ */ l(M.div, { id: c.id, ...i, ref: o });
  }
);
je.displayName = Ge;
var ce = "SelectItem", [Ft, Ye] = ne(ce), qe = n.forwardRef(
  (t, o) => {
    const {
      __scopeSelect: e,
      value: i,
      disabled: c = !1,
      textValue: p,
      ...s
    } = t, a = Y(ce, e), r = q(ce, e), f = a.value === i, [g, x] = n.useState(p ?? ""), [T, P] = n.useState(!1), I = B(
      o,
      (u) => {
        var h;
        return (h = r.itemRefCallback) == null ? void 0 : h.call(r, u, i, c);
      }
    ), d = Te(), v = n.useRef("touch"), y = () => {
      c || (a.onValueChange(i), a.onOpenChange(!1));
    };
    if (i === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return /* @__PURE__ */ l(
      Ft,
      {
        scope: e,
        value: i,
        disabled: c,
        textId: d,
        isSelected: f,
        onItemTextChange: n.useCallback((u) => {
          x((h) => h || ((u == null ? void 0 : u.textContent) ?? "").trim());
        }, []),
        children: /* @__PURE__ */ l(
          de.ItemSlot,
          {
            scope: e,
            value: i,
            disabled: c,
            textValue: g,
            children: /* @__PURE__ */ l(
              M.div,
              {
                role: "option",
                "aria-labelledby": d,
                "data-highlighted": T ? "" : void 0,
                "aria-selected": f && T,
                "data-state": f ? "checked" : "unchecked",
                "aria-disabled": c || void 0,
                "data-disabled": c ? "" : void 0,
                tabIndex: c ? void 0 : -1,
                ...s,
                ref: I,
                onFocus: N(s.onFocus, () => P(!0)),
                onBlur: N(s.onBlur, () => P(!1)),
                onClick: N(s.onClick, () => {
                  v.current !== "mouse" && y();
                }),
                onPointerUp: N(s.onPointerUp, () => {
                  v.current === "mouse" && y();
                }),
                onPointerDown: N(s.onPointerDown, (u) => {
                  v.current = u.pointerType;
                }),
                onPointerMove: N(s.onPointerMove, (u) => {
                  var h;
                  v.current = u.pointerType, c ? (h = r.onItemLeave) == null || h.call(r) : v.current === "mouse" && u.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: N(s.onPointerLeave, (u) => {
                  var h;
                  u.currentTarget === document.activeElement && ((h = r.onItemLeave) == null || h.call(r));
                }),
                onKeyDown: N(s.onKeyDown, (u) => {
                  var A;
                  ((A = r.searchRef) == null ? void 0 : A.current) !== "" && u.key === " " || (Nt.includes(u.key) && y(), u.key === " " && u.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }
);
qe.displayName = ce;
var ae = "SelectItemText", Xe = n.forwardRef(
  (t, o) => {
    const { __scopeSelect: e, className: i, style: c, ...p } = t, s = Y(ae, e), a = q(ae, e), r = Ye(ae, e), f = Mt(ae, e), [g, x] = n.useState(null), T = B(
      o,
      (y) => x(y),
      r.onItemTextChange,
      (y) => {
        var u;
        return (u = a.itemTextRefCallback) == null ? void 0 : u.call(a, y, r.value, r.disabled);
      }
    ), P = g == null ? void 0 : g.textContent, I = n.useMemo(
      () => /* @__PURE__ */ l("option", { value: r.value, disabled: r.disabled, children: P }, r.value),
      [r.disabled, r.value, P]
    ), { onNativeOptionAdd: d, onNativeOptionRemove: v } = f;
    return G(() => (d(I), () => v(I)), [d, v, I]), /* @__PURE__ */ Q(Ie, { children: [
      /* @__PURE__ */ l(M.span, { id: r.textId, ...p, ref: T }),
      r.isSelected && s.valueNode && !s.valueNodeHasChildren ? Re.createPortal(p.children, s.valueNode) : null
    ] });
  }
);
Xe.displayName = ae;
var Ze = "SelectItemIndicator", Je = n.forwardRef(
  (t, o) => {
    const { __scopeSelect: e, ...i } = t;
    return Ye(Ze, e).isSelected ? /* @__PURE__ */ l(M.span, { "aria-hidden": !0, ...i, ref: o }) : null;
  }
);
Je.displayName = Ze;
var ye = "SelectScrollUpButton", Qe = n.forwardRef((t, o) => {
  const e = q(ye, t.__scopeSelect), i = Pe(ye, t.__scopeSelect), [c, p] = n.useState(!1), s = B(o, i.onScrollButtonChange);
  return G(() => {
    if (e.viewport && e.isPositioned) {
      let a = function() {
        const f = r.scrollTop > 0;
        p(f);
      };
      const r = e.viewport;
      return a(), r.addEventListener("scroll", a), () => r.removeEventListener("scroll", a);
    }
  }, [e.viewport, e.isPositioned]), c ? /* @__PURE__ */ l(
    tt,
    {
      ...t,
      ref: s,
      onAutoScroll: () => {
        const { viewport: a, selectedItem: r } = e;
        a && r && (a.scrollTop = a.scrollTop - r.offsetHeight);
      }
    }
  ) : null;
});
Qe.displayName = ye;
var Ce = "SelectScrollDownButton", et = n.forwardRef((t, o) => {
  const e = q(Ce, t.__scopeSelect), i = Pe(Ce, t.__scopeSelect), [c, p] = n.useState(!1), s = B(o, i.onScrollButtonChange);
  return G(() => {
    if (e.viewport && e.isPositioned) {
      let a = function() {
        const f = r.scrollHeight - r.clientHeight, g = Math.ceil(r.scrollTop) < f;
        p(g);
      };
      const r = e.viewport;
      return a(), r.addEventListener("scroll", a), () => r.removeEventListener("scroll", a);
    }
  }, [e.viewport, e.isPositioned]), c ? /* @__PURE__ */ l(
    tt,
    {
      ...t,
      ref: s,
      onAutoScroll: () => {
        const { viewport: a, selectedItem: r } = e;
        a && r && (a.scrollTop = a.scrollTop + r.offsetHeight);
      }
    }
  ) : null;
});
et.displayName = Ce;
var tt = n.forwardRef((t, o) => {
  const { __scopeSelect: e, onAutoScroll: i, ...c } = t, p = q("SelectScrollButton", e), s = n.useRef(null), a = ue(e), r = n.useCallback(() => {
    s.current !== null && (window.clearInterval(s.current), s.current = null);
  }, []);
  return n.useEffect(() => () => r(), [r]), G(() => {
    var g;
    const f = a().find((x) => x.ref.current === document.activeElement);
    (g = f == null ? void 0 : f.ref.current) == null || g.scrollIntoView({ block: "nearest" });
  }, [a]), /* @__PURE__ */ l(
    M.div,
    {
      "aria-hidden": !0,
      ...c,
      ref: o,
      style: { flexShrink: 0, ...c.style },
      onPointerDown: N(c.onPointerDown, () => {
        s.current === null && (s.current = window.setInterval(i, 50));
      }),
      onPointerMove: N(c.onPointerMove, () => {
        var f;
        (f = p.onItemLeave) == null || f.call(p), s.current === null && (s.current = window.setInterval(i, 50));
      }),
      onPointerLeave: N(c.onPointerLeave, () => {
        r();
      })
    }
  );
}), Wt = "SelectSeparator", ot = n.forwardRef(
  (t, o) => {
    const { __scopeSelect: e, ...i } = t;
    return /* @__PURE__ */ l(M.div, { "aria-hidden": !0, ...i, ref: o });
  }
);
ot.displayName = Wt;
var be = "SelectArrow", zt = n.forwardRef(
  (t, o) => {
    const { __scopeSelect: e, ...i } = t, c = pe(e), p = Y(be, e), s = q(be, e);
    return p.open && s.position === "popper" ? /* @__PURE__ */ l(xt, { ...c, ...i, ref: o }) : null;
  }
);
zt.displayName = be;
var Kt = "SelectBubbleInput", nt = n.forwardRef(
  ({ __scopeSelect: t, value: o, ...e }, i) => {
    const c = n.useRef(null), p = B(i, c), s = Ct(o);
    return n.useEffect(() => {
      const a = c.current;
      if (!a) return;
      const r = window.HTMLSelectElement.prototype, g = Object.getOwnPropertyDescriptor(
        r,
        "value"
      ).set;
      if (s !== o && g) {
        const x = new Event("change", { bubbles: !0 });
        g.call(a, o), a.dispatchEvent(x);
      }
    }, [s, o]), /* @__PURE__ */ l(
      M.select,
      {
        ...e,
        style: { ...bt, ...e.style },
        ref: p,
        defaultValue: o
      }
    );
  }
);
nt.displayName = Kt;
function rt(t) {
  return t === "" || t === void 0;
}
function st(t) {
  const o = yt(t), e = n.useRef(""), i = n.useRef(0), c = n.useCallback(
    (s) => {
      const a = e.current + s;
      o(a), function r(f) {
        e.current = f, window.clearTimeout(i.current), f !== "" && (i.current = window.setTimeout(() => r(""), 1e3));
      }(a);
    },
    [o]
  ), p = n.useCallback(() => {
    e.current = "", window.clearTimeout(i.current);
  }, []);
  return n.useEffect(() => () => window.clearTimeout(i.current), []), [e, c, p];
}
function at(t, o, e) {
  const c = o.length > 1 && Array.from(o).every((f) => f === o[0]) ? o[0] : o, p = e ? t.indexOf(e) : -1;
  let s = $t(t, Math.max(p, 0));
  c.length === 1 && (s = s.filter((f) => f !== e));
  const r = s.find(
    (f) => f.textValue.toLowerCase().startsWith(c.toLowerCase())
  );
  return r !== e ? r : void 0;
}
function $t(t, o) {
  return t.map((e, i) => t[(o + i) % t.length]);
}
var Gt = Ae, jt = De, Yt = ke, qt = Be, Xt = Ve, Zt = He, Jt = ze, Qt = $e, eo = je, to = qe, oo = Xe, no = Je, ro = Qe, so = et, ao = ot;
function Eo({
  ...t
}) {
  return /* @__PURE__ */ l(Gt, { "data-slot": "select", ...t });
}
function Mo({
  ...t
}) {
  return /* @__PURE__ */ l(Qt, { "data-slot": "select-group", ...t });
}
function Ao({
  ...t
}) {
  return /* @__PURE__ */ l(Yt, { "data-slot": "select-value", ...t });
}
function Oo({
  className: t,
  size: o = "default",
  children: e,
  ...i
}) {
  return /* @__PURE__ */ Q(
    jt,
    {
      "data-slot": "select-trigger",
      "data-size": o,
      className: j(
        "border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        t
      ),
      ...i,
      children: [
        e,
        /* @__PURE__ */ l(qt, { asChild: !0, children: /* @__PURE__ */ l(Me, { className: "size-4 opacity-50" }) })
      ]
    }
  );
}
function Do({
  className: t,
  children: o,
  position: e = "popper",
  ...i
}) {
  return /* @__PURE__ */ l(Xt, { children: /* @__PURE__ */ Q(
    Zt,
    {
      "data-slot": "select-content",
      className: j(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md",
        e === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        t
      ),
      position: e,
      ...i,
      children: [
        /* @__PURE__ */ l(lo, {}),
        /* @__PURE__ */ l(
          Jt,
          {
            className: j(
              "p-1",
              e === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"
            ),
            children: o
          }
        ),
        /* @__PURE__ */ l(io, {})
      ]
    }
  ) });
}
function Lo({
  className: t,
  ...o
}) {
  return /* @__PURE__ */ l(
    eo,
    {
      "data-slot": "select-label",
      className: j("text-muted-foreground px-2 py-1.5 text-xs", t),
      ...o
    }
  );
}
function ko({
  className: t,
  children: o,
  ...e
}) {
  return /* @__PURE__ */ Q(
    to,
    {
      "data-slot": "select-item",
      className: j(
        "focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        t
      ),
      ...e,
      children: [
        /* @__PURE__ */ l("span", { className: "absolute right-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ l(no, { children: /* @__PURE__ */ l(It, { className: "size-4" }) }) }),
        /* @__PURE__ */ l(oo, { children: o })
      ]
    }
  );
}
function Bo({
  className: t,
  ...o
}) {
  return /* @__PURE__ */ l(
    ao,
    {
      "data-slot": "select-separator",
      className: j("bg-border pointer-events-none -mx-1 my-1 h-px", t),
      ...o
    }
  );
}
function lo({
  className: t,
  ...o
}) {
  return /* @__PURE__ */ l(
    ro,
    {
      "data-slot": "select-scroll-up-button",
      className: j(
        "flex cursor-default items-center justify-center py-1",
        t
      ),
      ...o,
      children: /* @__PURE__ */ l(Tt, { className: "size-4" })
    }
  );
}
function io({
  className: t,
  ...o
}) {
  return /* @__PURE__ */ l(
    so,
    {
      "data-slot": "select-scroll-down-button",
      className: j(
        "flex cursor-default items-center justify-center py-1",
        t
      ),
      ...o,
      children: /* @__PURE__ */ l(Me, { className: "size-4" })
    }
  );
}
export {
  Eo as Select,
  Do as SelectContent,
  Mo as SelectGroup,
  ko as SelectItem,
  Lo as SelectLabel,
  io as SelectScrollDownButton,
  lo as SelectScrollUpButton,
  Bo as SelectSeparator,
  Oo as SelectTrigger,
  Ao as SelectValue
};
//# sourceMappingURL=select.js.map
