import { jsx as s } from "react/jsx-runtime";
import * as p from "react";
import { u as L, c as P } from "./index-CPxmoWFw.js";
import { u as O, c as z } from "./index-B5MIi2tR.js";
import { c as G } from "./index-UFb2E87s.js";
import { P as H, D as K } from "./index-DQ8UKqpy.js";
import { h as j, R as U, u as V, F as W } from "./Combination-CecJSrLC.js";
import { u as Z } from "./index-B_PLZIoC.js";
import { c as _, R as q, A as x, C as B, a as J } from "./index-f0dRS7uo.js";
import { P as w } from "./index-BS6MejTA.js";
import { P as b } from "./index-D5Ppf2aB.js";
import { c as Q } from "./utils-qaFjX9_3.js";
var C = "Popover", [E, _e] = G(C, [
  _
]), m = _(), [X, d] = E(C), F = (e) => {
  const {
    __scopePopover: n,
    children: o,
    open: a,
    defaultOpen: t,
    onOpenChange: r,
    modal: c = !1
  } = e, i = m(n), u = p.useRef(null), [l, g] = p.useState(!1), [h, f] = L({
    prop: a,
    defaultProp: t ?? !1,
    onChange: r,
    caller: C
  });
  return /* @__PURE__ */ s(q, { ...i, children: /* @__PURE__ */ s(
    X,
    {
      scope: n,
      contentId: Z(),
      triggerRef: u,
      open: h,
      onOpenChange: f,
      onOpenToggle: p.useCallback(() => f((R) => !R), [f]),
      hasCustomAnchor: l,
      onCustomAnchorAdd: p.useCallback(() => g(!0), []),
      onCustomAnchorRemove: p.useCallback(() => g(!1), []),
      modal: c,
      children: o
    }
  ) });
};
F.displayName = C;
var N = "PopoverAnchor", S = p.forwardRef(
  (e, n) => {
    const { __scopePopover: o, ...a } = e, t = d(N, o), r = m(o), { onCustomAnchorAdd: c, onCustomAnchorRemove: i } = t;
    return p.useEffect(() => (c(), () => i()), [c, i]), /* @__PURE__ */ s(x, { ...r, ...a, ref: n });
  }
);
S.displayName = N;
var y = "PopoverTrigger", D = p.forwardRef(
  (e, n) => {
    const { __scopePopover: o, ...a } = e, t = d(y, o), r = m(o), c = O(n, t.triggerRef), i = /* @__PURE__ */ s(
      b.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": t.open,
        "aria-controls": t.contentId,
        "data-state": $(t.open),
        ...a,
        ref: c,
        onClick: P(e.onClick, t.onOpenToggle)
      }
    );
    return t.hasCustomAnchor ? i : /* @__PURE__ */ s(x, { asChild: !0, ...r, children: i });
  }
);
D.displayName = y;
var A = "PopoverPortal", [Y, ee] = E(A, {
  forceMount: void 0
}), M = (e) => {
  const { __scopePopover: n, forceMount: o, children: a, container: t } = e, r = d(A, n);
  return /* @__PURE__ */ s(Y, { scope: n, forceMount: o, children: /* @__PURE__ */ s(w, { present: o || r.open, children: /* @__PURE__ */ s(H, { asChild: !0, container: t, children: a }) }) });
};
M.displayName = A;
var v = "PopoverContent", T = p.forwardRef(
  (e, n) => {
    const o = ee(v, e.__scopePopover), { forceMount: a = o.forceMount, ...t } = e, r = d(v, e.__scopePopover);
    return /* @__PURE__ */ s(w, { present: a || r.open, children: r.modal ? /* @__PURE__ */ s(te, { ...t, ref: n }) : /* @__PURE__ */ s(re, { ...t, ref: n }) });
  }
);
T.displayName = v;
var oe = z("PopoverContent.RemoveScroll"), te = p.forwardRef(
  (e, n) => {
    const o = d(v, e.__scopePopover), a = p.useRef(null), t = O(n, a), r = p.useRef(!1);
    return p.useEffect(() => {
      const c = a.current;
      if (c) return j(c);
    }, []), /* @__PURE__ */ s(U, { as: oe, allowPinchZoom: !0, children: /* @__PURE__ */ s(
      k,
      {
        ...e,
        ref: t,
        trapFocus: o.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: P(e.onCloseAutoFocus, (c) => {
          var i;
          c.preventDefault(), r.current || (i = o.triggerRef.current) == null || i.focus();
        }),
        onPointerDownOutside: P(
          e.onPointerDownOutside,
          (c) => {
            const i = c.detail.originalEvent, u = i.button === 0 && i.ctrlKey === !0, l = i.button === 2 || u;
            r.current = l;
          },
          { checkForDefaultPrevented: !1 }
        ),
        onFocusOutside: P(
          e.onFocusOutside,
          (c) => c.preventDefault(),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
), re = p.forwardRef(
  (e, n) => {
    const o = d(v, e.__scopePopover), a = p.useRef(!1), t = p.useRef(!1);
    return /* @__PURE__ */ s(
      k,
      {
        ...e,
        ref: n,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (r) => {
          var c, i;
          (c = e.onCloseAutoFocus) == null || c.call(e, r), r.defaultPrevented || (a.current || (i = o.triggerRef.current) == null || i.focus(), r.preventDefault()), a.current = !1, t.current = !1;
        },
        onInteractOutside: (r) => {
          var u, l;
          (u = e.onInteractOutside) == null || u.call(e, r), r.defaultPrevented || (a.current = !0, r.detail.originalEvent.type === "pointerdown" && (t.current = !0));
          const c = r.target;
          ((l = o.triggerRef.current) == null ? void 0 : l.contains(c)) && r.preventDefault(), r.detail.originalEvent.type === "focusin" && t.current && r.preventDefault();
        }
      }
    );
  }
), k = p.forwardRef(
  (e, n) => {
    const {
      __scopePopover: o,
      trapFocus: a,
      onOpenAutoFocus: t,
      onCloseAutoFocus: r,
      disableOutsidePointerEvents: c,
      onEscapeKeyDown: i,
      onPointerDownOutside: u,
      onFocusOutside: l,
      onInteractOutside: g,
      ...h
    } = e, f = d(v, o), R = m(o);
    return V(), /* @__PURE__ */ s(
      W,
      {
        asChild: !0,
        loop: !0,
        trapped: a,
        onMountAutoFocus: t,
        onUnmountAutoFocus: r,
        children: /* @__PURE__ */ s(
          K,
          {
            asChild: !0,
            disableOutsidePointerEvents: c,
            onInteractOutside: g,
            onEscapeKeyDown: i,
            onPointerDownOutside: u,
            onFocusOutside: l,
            onDismiss: () => f.onOpenChange(!1),
            children: /* @__PURE__ */ s(
              B,
              {
                "data-state": $(f.open),
                role: "dialog",
                id: f.contentId,
                ...R,
                ...h,
                ref: n,
                style: {
                  ...h.style,
                  "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
                  "--radix-popover-content-available-width": "var(--radix-popper-available-width)",
                  "--radix-popover-content-available-height": "var(--radix-popper-available-height)",
                  "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
                  "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
                }
              }
            )
          }
        )
      }
    );
  }
), I = "PopoverClose", ne = p.forwardRef(
  (e, n) => {
    const { __scopePopover: o, ...a } = e, t = d(I, o);
    return /* @__PURE__ */ s(
      b.button,
      {
        type: "button",
        ...a,
        ref: n,
        onClick: P(e.onClick, () => t.onOpenChange(!1))
      }
    );
  }
);
ne.displayName = I;
var ae = "PopoverArrow", se = p.forwardRef(
  (e, n) => {
    const { __scopePopover: o, ...a } = e, t = m(o);
    return /* @__PURE__ */ s(J, { ...t, ...a, ref: n });
  }
);
se.displayName = ae;
function $(e) {
  return e ? "open" : "closed";
}
var ce = F, ie = S, pe = D, ue = M, le = T;
function xe({
  ...e
}) {
  return /* @__PURE__ */ s(ce, { "data-slot": "popover", ...e });
}
function we({
  ...e
}) {
  return /* @__PURE__ */ s(pe, { "data-slot": "popover-trigger", ...e });
}
function be({
  className: e,
  align: n = "center",
  sideOffset: o = 4,
  ...a
}) {
  return /* @__PURE__ */ s(ue, { children: /* @__PURE__ */ s(
    le,
    {
      "data-slot": "popover-content",
      align: n,
      sideOffset: o,
      className: Q(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 origin-(--radix-popover-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden",
        e
      ),
      ...a
    }
  ) });
}
function Ee({
  ...e
}) {
  return /* @__PURE__ */ s(ie, { "data-slot": "popover-anchor", ...e });
}
export {
  xe as Popover,
  Ee as PopoverAnchor,
  be as PopoverContent,
  we as PopoverTrigger
};
//# sourceMappingURL=popover.js.map
