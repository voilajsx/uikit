import { jsx as s } from "react/jsx-runtime";
import * as i from "react";
import { u as L, c as P } from "./index-C0UREtMP.js";
import { u as O, c as z } from "./index-DQH6odE9.js";
import { c as G } from "./index-DFZozV_h.js";
import { P as H, D as K } from "./index-BY7PeRJA.js";
import { h as j, R as U, u as V, F as W } from "./Combination-C0DFrmJW.js";
import { u as Z } from "./index-xqkGMOJ8.js";
import { c as _, R as q, A as x, C as B, a as J } from "./index-dhIqEbxW.js";
import { P as w } from "./index-BCjJQGh8.js";
import { P as b } from "./index-BVRIAMfe.js";
import { c as Q } from "./utils-CwJPJKOE.js";
var C = "Popover", [E, xo] = G(C, [
  _
]), m = _(), [X, u] = E(C), F = (o) => {
  const {
    __scopePopover: n,
    children: e,
    open: a,
    defaultOpen: t,
    onOpenChange: r,
    modal: c = !1
  } = o, p = m(n), f = i.useRef(null), [v, g] = i.useState(!1), [h, l] = L({
    prop: a,
    defaultProp: t ?? !1,
    onChange: r,
    caller: C
  });
  return /* @__PURE__ */ s(q, { ...p, children: /* @__PURE__ */ s(
    X,
    {
      scope: n,
      contentId: Z(),
      triggerRef: f,
      open: h,
      onOpenChange: l,
      onOpenToggle: i.useCallback(() => l((R) => !R), [l]),
      hasCustomAnchor: v,
      onCustomAnchorAdd: i.useCallback(() => g(!0), []),
      onCustomAnchorRemove: i.useCallback(() => g(!1), []),
      modal: c,
      children: e
    }
  ) });
};
F.displayName = C;
var N = "PopoverAnchor", S = i.forwardRef(
  (o, n) => {
    const { __scopePopover: e, ...a } = o, t = u(N, e), r = m(e), { onCustomAnchorAdd: c, onCustomAnchorRemove: p } = t;
    return i.useEffect(() => (c(), () => p()), [c, p]), /* @__PURE__ */ s(x, { ...r, ...a, ref: n });
  }
);
S.displayName = N;
var y = "PopoverTrigger", D = i.forwardRef(
  (o, n) => {
    const { __scopePopover: e, ...a } = o, t = u(y, e), r = m(e), c = O(n, t.triggerRef), p = /* @__PURE__ */ s(
      b.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": t.open,
        "aria-controls": t.contentId,
        "data-state": $(t.open),
        ...a,
        ref: c,
        onClick: P(o.onClick, t.onOpenToggle)
      }
    );
    return t.hasCustomAnchor ? p : /* @__PURE__ */ s(x, { asChild: !0, ...r, children: p });
  }
);
D.displayName = y;
var A = "PopoverPortal", [Y, oo] = E(A, {
  forceMount: void 0
}), M = (o) => {
  const { __scopePopover: n, forceMount: e, children: a, container: t } = o, r = u(A, n);
  return /* @__PURE__ */ s(Y, { scope: n, forceMount: e, children: /* @__PURE__ */ s(w, { present: e || r.open, children: /* @__PURE__ */ s(H, { asChild: !0, container: t, children: a }) }) });
};
M.displayName = A;
var d = "PopoverContent", T = i.forwardRef(
  (o, n) => {
    const e = oo(d, o.__scopePopover), { forceMount: a = e.forceMount, ...t } = o, r = u(d, o.__scopePopover);
    return /* @__PURE__ */ s(w, { present: a || r.open, children: r.modal ? /* @__PURE__ */ s(to, { ...t, ref: n }) : /* @__PURE__ */ s(ro, { ...t, ref: n }) });
  }
);
T.displayName = d;
var eo = z("PopoverContent.RemoveScroll"), to = i.forwardRef(
  (o, n) => {
    const e = u(d, o.__scopePopover), a = i.useRef(null), t = O(n, a), r = i.useRef(!1);
    return i.useEffect(() => {
      const c = a.current;
      if (c) return j(c);
    }, []), /* @__PURE__ */ s(U, { as: eo, allowPinchZoom: !0, children: /* @__PURE__ */ s(
      k,
      {
        ...o,
        ref: t,
        trapFocus: e.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: P(o.onCloseAutoFocus, (c) => {
          c.preventDefault(), r.current || e.triggerRef.current?.focus();
        }),
        onPointerDownOutside: P(
          o.onPointerDownOutside,
          (c) => {
            const p = c.detail.originalEvent, f = p.button === 0 && p.ctrlKey === !0, v = p.button === 2 || f;
            r.current = v;
          },
          { checkForDefaultPrevented: !1 }
        ),
        onFocusOutside: P(
          o.onFocusOutside,
          (c) => c.preventDefault(),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
), ro = i.forwardRef(
  (o, n) => {
    const e = u(d, o.__scopePopover), a = i.useRef(!1), t = i.useRef(!1);
    return /* @__PURE__ */ s(
      k,
      {
        ...o,
        ref: n,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (r) => {
          o.onCloseAutoFocus?.(r), r.defaultPrevented || (a.current || e.triggerRef.current?.focus(), r.preventDefault()), a.current = !1, t.current = !1;
        },
        onInteractOutside: (r) => {
          o.onInteractOutside?.(r), r.defaultPrevented || (a.current = !0, r.detail.originalEvent.type === "pointerdown" && (t.current = !0));
          const c = r.target;
          e.triggerRef.current?.contains(c) && r.preventDefault(), r.detail.originalEvent.type === "focusin" && t.current && r.preventDefault();
        }
      }
    );
  }
), k = i.forwardRef(
  (o, n) => {
    const {
      __scopePopover: e,
      trapFocus: a,
      onOpenAutoFocus: t,
      onCloseAutoFocus: r,
      disableOutsidePointerEvents: c,
      onEscapeKeyDown: p,
      onPointerDownOutside: f,
      onFocusOutside: v,
      onInteractOutside: g,
      ...h
    } = o, l = u(d, e), R = m(e);
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
            onEscapeKeyDown: p,
            onPointerDownOutside: f,
            onFocusOutside: v,
            onDismiss: () => l.onOpenChange(!1),
            children: /* @__PURE__ */ s(
              B,
              {
                "data-state": $(l.open),
                role: "dialog",
                id: l.contentId,
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
), I = "PopoverClose", no = i.forwardRef(
  (o, n) => {
    const { __scopePopover: e, ...a } = o, t = u(I, e);
    return /* @__PURE__ */ s(
      b.button,
      {
        type: "button",
        ...a,
        ref: n,
        onClick: P(o.onClick, () => t.onOpenChange(!1))
      }
    );
  }
);
no.displayName = I;
var ao = "PopoverArrow", so = i.forwardRef(
  (o, n) => {
    const { __scopePopover: e, ...a } = o, t = m(e);
    return /* @__PURE__ */ s(J, { ...t, ...a, ref: n });
  }
);
so.displayName = ao;
function $(o) {
  return o ? "open" : "closed";
}
var co = F, io = S, po = D, uo = M, lo = T;
function wo({
  ...o
}) {
  return /* @__PURE__ */ s(co, { "data-slot": "popover", ...o });
}
function bo({
  ...o
}) {
  return /* @__PURE__ */ s(po, { "data-slot": "popover-trigger", ...o });
}
function Eo({
  className: o,
  align: n = "center",
  sideOffset: e = 4,
  ...a
}) {
  return /* @__PURE__ */ s(uo, { children: /* @__PURE__ */ s(
    lo,
    {
      "data-slot": "popover-content",
      align: n,
      sideOffset: e,
      className: Q(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 origin-(--radix-popover-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden",
        o
      ),
      ...a
    }
  ) });
}
function Fo({
  ...o
}) {
  return /* @__PURE__ */ s(io, { "data-slot": "popover-anchor", ...o });
}
export {
  wo as Popover,
  Fo as PopoverAnchor,
  Eo as PopoverContent,
  bo as PopoverTrigger
};
//# sourceMappingURL=popover.js.map
