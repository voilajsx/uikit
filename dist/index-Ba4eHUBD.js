import * as s from "react";
import { u as V, c as g } from "./index-C0UREtMP.js";
import { u as _, c as q } from "./index-DQH6odE9.js";
import { c as K, a as U } from "./index-DFZozV_h.js";
import { u as R } from "./index-xqkGMOJ8.js";
import { P as Y, D as Z } from "./index-BY7PeRJA.js";
import { h as z, R as J, u as Q, F as X } from "./Combination-C0DFrmJW.js";
import { P as h } from "./index-BCjJQGh8.js";
import { P as p } from "./index-BVRIAMfe.js";
import { jsx as i, jsxs as N, Fragment as O } from "react/jsx-runtime";
var m = "Dialog", [I, Ce] = K(m), [ee, u] = I(m), x = (e) => {
  const {
    __scopeDialog: t,
    children: n,
    open: a,
    defaultOpen: r,
    onOpenChange: o,
    modal: l = !0
  } = e, c = s.useRef(null), f = s.useRef(null), [v, C] = V({
    prop: a,
    defaultProp: r ?? !1,
    onChange: o,
    caller: m
  });
  return /* @__PURE__ */ i(
    ee,
    {
      scope: t,
      triggerRef: c,
      contentRef: f,
      contentId: R(),
      titleId: R(),
      descriptionId: R(),
      open: v,
      onOpenChange: C,
      onOpenToggle: s.useCallback(() => C((H) => !H), [C]),
      modal: l,
      children: n
    }
  );
};
x.displayName = m;
var A = "DialogTrigger", T = s.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...a } = e, r = u(A, n), o = _(t, r.triggerRef);
    return /* @__PURE__ */ i(
      p.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": r.open,
        "aria-controls": r.contentId,
        "data-state": y(r.open),
        ...a,
        ref: o,
        onClick: g(e.onClick, r.onOpenToggle)
      }
    );
  }
);
T.displayName = A;
var P = "DialogPortal", [oe, b] = I(P, {
  forceMount: void 0
}), M = (e) => {
  const { __scopeDialog: t, forceMount: n, children: a, container: r } = e, o = u(P, t);
  return /* @__PURE__ */ i(oe, { scope: t, forceMount: n, children: s.Children.map(a, (l) => /* @__PURE__ */ i(h, { present: n || o.open, children: /* @__PURE__ */ i(Y, { asChild: !0, container: r, children: l }) })) });
};
M.displayName = P;
var D = "DialogOverlay", w = s.forwardRef(
  (e, t) => {
    const n = b(D, e.__scopeDialog), { forceMount: a = n.forceMount, ...r } = e, o = u(D, e.__scopeDialog);
    return o.modal ? /* @__PURE__ */ i(h, { present: a || o.open, children: /* @__PURE__ */ i(re, { ...r, ref: t }) }) : null;
  }
);
w.displayName = D;
var te = q("DialogOverlay.RemoveScroll"), re = s.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...a } = e, r = u(D, n);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ i(J, { as: te, allowPinchZoom: !0, shards: [r.contentRef], children: /* @__PURE__ */ i(
        p.div,
        {
          "data-state": y(r.open),
          ...a,
          ref: t,
          style: { pointerEvents: "auto", ...a.style }
        }
      ) })
    );
  }
), d = "DialogContent", F = s.forwardRef(
  (e, t) => {
    const n = b(d, e.__scopeDialog), { forceMount: a = n.forceMount, ...r } = e, o = u(d, e.__scopeDialog);
    return /* @__PURE__ */ i(h, { present: a || o.open, children: o.modal ? /* @__PURE__ */ i(ne, { ...r, ref: t }) : /* @__PURE__ */ i(ae, { ...r, ref: t }) });
  }
);
F.displayName = d;
var ne = s.forwardRef(
  (e, t) => {
    const n = u(d, e.__scopeDialog), a = s.useRef(null), r = _(t, n.contentRef, a);
    return s.useEffect(() => {
      const o = a.current;
      if (o) return z(o);
    }, []), /* @__PURE__ */ i(
      S,
      {
        ...e,
        ref: r,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: g(e.onCloseAutoFocus, (o) => {
          o.preventDefault(), n.triggerRef.current?.focus();
        }),
        onPointerDownOutside: g(e.onPointerDownOutside, (o) => {
          const l = o.detail.originalEvent, c = l.button === 0 && l.ctrlKey === !0;
          (l.button === 2 || c) && o.preventDefault();
        }),
        onFocusOutside: g(
          e.onFocusOutside,
          (o) => o.preventDefault()
        )
      }
    );
  }
), ae = s.forwardRef(
  (e, t) => {
    const n = u(d, e.__scopeDialog), a = s.useRef(!1), r = s.useRef(!1);
    return /* @__PURE__ */ i(
      S,
      {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (o) => {
          e.onCloseAutoFocus?.(o), o.defaultPrevented || (a.current || n.triggerRef.current?.focus(), o.preventDefault()), a.current = !1, r.current = !1;
        },
        onInteractOutside: (o) => {
          e.onInteractOutside?.(o), o.defaultPrevented || (a.current = !0, o.detail.originalEvent.type === "pointerdown" && (r.current = !0));
          const l = o.target;
          n.triggerRef.current?.contains(l) && o.preventDefault(), o.detail.originalEvent.type === "focusin" && r.current && o.preventDefault();
        }
      }
    );
  }
), S = s.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, trapFocus: a, onOpenAutoFocus: r, onCloseAutoFocus: o, ...l } = e, c = u(d, n), f = s.useRef(null), v = _(t, f);
    return Q(), /* @__PURE__ */ N(O, { children: [
      /* @__PURE__ */ i(
        X,
        {
          asChild: !0,
          loop: !0,
          trapped: a,
          onMountAutoFocus: r,
          onUnmountAutoFocus: o,
          children: /* @__PURE__ */ i(
            Z,
            {
              role: "dialog",
              id: c.contentId,
              "aria-describedby": c.descriptionId,
              "aria-labelledby": c.titleId,
              "data-state": y(c.open),
              ...l,
              ref: v,
              onDismiss: () => c.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ N(O, { children: [
        /* @__PURE__ */ i(ie, { titleId: c.titleId }),
        /* @__PURE__ */ i(ce, { contentRef: f, descriptionId: c.descriptionId })
      ] })
    ] });
  }
), E = "DialogTitle", W = s.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...a } = e, r = u(E, n);
    return /* @__PURE__ */ i(p.h2, { id: r.titleId, ...a, ref: t });
  }
);
W.displayName = E;
var k = "DialogDescription", G = s.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...a } = e, r = u(k, n);
    return /* @__PURE__ */ i(p.p, { id: r.descriptionId, ...a, ref: t });
  }
);
G.displayName = k;
var L = "DialogClose", $ = s.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...a } = e, r = u(L, n);
    return /* @__PURE__ */ i(
      p.button,
      {
        type: "button",
        ...a,
        ref: t,
        onClick: g(e.onClick, () => r.onOpenChange(!1))
      }
    );
  }
);
$.displayName = L;
function y(e) {
  return e ? "open" : "closed";
}
var B = "DialogTitleWarning", [Re, j] = U(B, {
  contentName: d,
  titleName: E,
  docsSlug: "dialog"
}), ie = ({ titleId: e }) => {
  const t = j(B), n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return s.useEffect(() => {
    e && (document.getElementById(e) || console.error(n));
  }, [n, e]), null;
}, se = "DialogDescriptionWarning", ce = ({ contentRef: e, descriptionId: t }) => {
  const a = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${j(se).contentName}}.`;
  return s.useEffect(() => {
    const r = e.current?.getAttribute("aria-describedby");
    t && r && (document.getElementById(t) || console.warn(a));
  }, [a, e, t]), null;
}, _e = x, he = T, Pe = M, Ee = w, ye = F, Ne = W, Oe = G, Ie = $;
export {
  ye as C,
  Oe as D,
  Ee as O,
  Pe as P,
  _e as R,
  Ne as T,
  Ie as a,
  he as b
};
//# sourceMappingURL=index-Ba4eHUBD.js.map
