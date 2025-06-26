import { jsx as a } from "react/jsx-runtime";
import * as n from "react";
import { u as k, c as l } from "./index-CPxmoWFw.js";
import { c as F } from "./index-UFb2E87s.js";
import { u as I } from "./index-B1fTi8J3.js";
import { c as T, R as U, a as $, C as W, A as z } from "./index-ZLovmeI2.js";
import { P as B, D as G } from "./index-DBSLDOnW.js";
import { P as O } from "./index-C7MCwCUs.js";
import { P as K } from "./index-CP7NBbfF.js";
import { c as j } from "./utils-qaFjX9_3.js";
var E, b = "HoverCard", [_, fe] = F(b, [
  T
]), w = T(), [V, x] = _(b), y = (e) => {
  const {
    __scopeHoverCard: o,
    children: t,
    open: s,
    defaultOpen: i,
    onOpenChange: c,
    openDelay: f = 700,
    closeDelay: v = 300
  } = e, d = w(o), m = n.useRef(0), u = n.useRef(0), C = n.useRef(!1), p = n.useRef(!1), [h, r] = k({
    prop: s,
    defaultProp: i ?? !1,
    onChange: c,
    caller: b
  }), P = n.useCallback(() => {
    clearTimeout(u.current), m.current = window.setTimeout(() => r(!0), f);
  }, [f, r]), g = n.useCallback(() => {
    clearTimeout(m.current), !C.current && !p.current && (u.current = window.setTimeout(() => r(!1), v));
  }, [v, r]), M = n.useCallback(() => r(!1), [r]);
  return n.useEffect(() => () => {
    clearTimeout(m.current), clearTimeout(u.current);
  }, []), /* @__PURE__ */ a(
    V,
    {
      scope: o,
      open: h,
      onOpenChange: r,
      onOpen: P,
      onClose: g,
      onDismiss: M,
      hasSelectionRef: C,
      isPointerDownOnContentRef: p,
      children: /* @__PURE__ */ a(U, { ...d, children: t })
    }
  );
};
y.displayName = b;
var N = "HoverCardTrigger", D = n.forwardRef(
  (e, o) => {
    const { __scopeHoverCard: t, ...s } = e, i = x(N, t), c = w(t);
    return /* @__PURE__ */ a($, { asChild: !0, ...c, children: /* @__PURE__ */ a(
      K.a,
      {
        "data-state": i.open ? "open" : "closed",
        ...s,
        ref: o,
        onPointerEnter: l(e.onPointerEnter, S(i.onOpen)),
        onPointerLeave: l(e.onPointerLeave, S(i.onClose)),
        onFocus: l(e.onFocus, i.onOpen),
        onBlur: l(e.onBlur, i.onClose),
        onTouchStart: l(e.onTouchStart, (f) => f.preventDefault())
      }
    ) });
  }
);
D.displayName = N;
var H = "HoverCardPortal", [q, J] = _(H, {
  forceMount: void 0
}), A = (e) => {
  const { __scopeHoverCard: o, forceMount: t, children: s, container: i } = e, c = x(H, o);
  return /* @__PURE__ */ a(q, { scope: o, forceMount: t, children: /* @__PURE__ */ a(O, { present: t || c.open, children: /* @__PURE__ */ a(B, { asChild: !0, container: i, children: s }) }) });
};
A.displayName = H;
var R = "HoverCardContent", L = n.forwardRef(
  (e, o) => {
    const t = J(R, e.__scopeHoverCard), { forceMount: s = t.forceMount, ...i } = e, c = x(R, e.__scopeHoverCard);
    return /* @__PURE__ */ a(O, { present: s || c.open, children: /* @__PURE__ */ a(
      Q,
      {
        "data-state": c.open ? "open" : "closed",
        ...i,
        onPointerEnter: l(e.onPointerEnter, S(c.onOpen)),
        onPointerLeave: l(e.onPointerLeave, S(c.onClose)),
        ref: o
      }
    ) });
  }
);
L.displayName = R;
var Q = n.forwardRef((e, o) => {
  const {
    __scopeHoverCard: t,
    onEscapeKeyDown: s,
    onPointerDownOutside: i,
    onFocusOutside: c,
    onInteractOutside: f,
    ...v
  } = e, d = x(R, t), m = w(t), u = n.useRef(null), C = I(o, u), [p, h] = n.useState(!1);
  return n.useEffect(() => {
    if (p) {
      const r = document.body;
      return E = r.style.userSelect || r.style.webkitUserSelect, r.style.userSelect = "none", r.style.webkitUserSelect = "none", () => {
        r.style.userSelect = E, r.style.webkitUserSelect = E;
      };
    }
  }, [p]), n.useEffect(() => {
    if (u.current) {
      const r = () => {
        h(!1), d.isPointerDownOnContentRef.current = !1, setTimeout(() => {
          var g;
          ((g = document.getSelection()) == null ? void 0 : g.toString()) !== "" && (d.hasSelectionRef.current = !0);
        });
      };
      return document.addEventListener("pointerup", r), () => {
        document.removeEventListener("pointerup", r), d.hasSelectionRef.current = !1, d.isPointerDownOnContentRef.current = !1;
      };
    }
  }, [d.isPointerDownOnContentRef, d.hasSelectionRef]), n.useEffect(() => {
    u.current && Z(u.current).forEach((P) => P.setAttribute("tabindex", "-1"));
  }), /* @__PURE__ */ a(
    G,
    {
      asChild: !0,
      disableOutsidePointerEvents: !1,
      onInteractOutside: f,
      onEscapeKeyDown: s,
      onPointerDownOutside: i,
      onFocusOutside: l(c, (r) => {
        r.preventDefault();
      }),
      onDismiss: d.onDismiss,
      children: /* @__PURE__ */ a(
        W,
        {
          ...m,
          ...v,
          onPointerDown: l(v.onPointerDown, (r) => {
            r.currentTarget.contains(r.target) && h(!0), d.hasSelectionRef.current = !1, d.isPointerDownOnContentRef.current = !0;
          }),
          ref: C,
          style: {
            ...v.style,
            userSelect: p ? "text" : void 0,
            // Safari requires prefix
            WebkitUserSelect: p ? "text" : void 0,
            "--radix-hover-card-content-transform-origin": "var(--radix-popper-transform-origin)",
            "--radix-hover-card-content-available-width": "var(--radix-popper-available-width)",
            "--radix-hover-card-content-available-height": "var(--radix-popper-available-height)",
            "--radix-hover-card-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-hover-card-trigger-height": "var(--radix-popper-anchor-height)"
          }
        }
      )
    }
  );
}), X = "HoverCardArrow", Y = n.forwardRef(
  (e, o) => {
    const { __scopeHoverCard: t, ...s } = e, i = w(t);
    return /* @__PURE__ */ a(z, { ...i, ...s, ref: o });
  }
);
Y.displayName = X;
function S(e) {
  return (o) => o.pointerType === "touch" ? void 0 : e();
}
function Z(e) {
  const o = [], t = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (s) => s.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
  });
  for (; t.nextNode(); ) o.push(t.currentNode);
  return o;
}
var ee = y, re = D, oe = A, te = L;
function ve({
  ...e
}) {
  return /* @__PURE__ */ a(ee, { "data-slot": "hover-card", ...e });
}
function me({
  ...e
}) {
  return /* @__PURE__ */ a(re, { "data-slot": "hover-card-trigger", ...e });
}
function Ce({
  className: e,
  align: o = "center",
  sideOffset: t = 4,
  ...s
}) {
  return /* @__PURE__ */ a(oe, { "data-slot": "hover-card-portal", children: /* @__PURE__ */ a(
    te,
    {
      "data-slot": "hover-card-content",
      align: o,
      sideOffset: t,
      className: j(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-64 origin-(--radix-hover-card-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden",
        e
      ),
      ...s
    }
  ) });
}
export {
  ve as HoverCard,
  Ce as HoverCardContent,
  me as HoverCardTrigger
};
//# sourceMappingURL=hover-card.js.map
