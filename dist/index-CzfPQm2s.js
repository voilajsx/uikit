import * as s from "react";
import { u as V, c as p } from "./index-CPxmoWFw.js";
import { u as _, a as q } from "./index-B1fTi8J3.js";
import { c as K, a as U } from "./index-UFb2E87s.js";
import { u as R } from "./index-B_PLZIoC.js";
import { P as Y, D as Z } from "./index-DBSLDOnW.js";
import { h as z, R as J, u as Q, F as X } from "./Combination-DHU6vllo.js";
import { P as h } from "./index-C7MCwCUs.js";
import { P as D } from "./index-CP7NBbfF.js";
import { jsx as i, jsxs as N, Fragment as O } from "react/jsx-runtime";
var v = "Dialog", [I, Ce] = K(v), [ee, u] = I(v), x = (e) => {
  const {
    __scopeDialog: o,
    children: r,
    open: a,
    defaultOpen: n,
    onOpenChange: t,
    modal: c = !0
  } = e, l = s.useRef(null), d = s.useRef(null), [g, C] = V({
    prop: a,
    defaultProp: n ?? !1,
    onChange: t,
    caller: v
  });
  return /* @__PURE__ */ i(
    ee,
    {
      scope: o,
      triggerRef: l,
      contentRef: d,
      contentId: R(),
      titleId: R(),
      descriptionId: R(),
      open: g,
      onOpenChange: C,
      onOpenToggle: s.useCallback(() => C((H) => !H), [C]),
      modal: c,
      children: r
    }
  );
};
x.displayName = v;
var A = "DialogTrigger", T = s.forwardRef(
  (e, o) => {
    const { __scopeDialog: r, ...a } = e, n = u(A, r), t = _(o, n.triggerRef);
    return /* @__PURE__ */ i(
      D.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": n.open,
        "aria-controls": n.contentId,
        "data-state": y(n.open),
        ...a,
        ref: t,
        onClick: p(e.onClick, n.onOpenToggle)
      }
    );
  }
);
T.displayName = A;
var P = "DialogPortal", [te, b] = I(P, {
  forceMount: void 0
}), M = (e) => {
  const { __scopeDialog: o, forceMount: r, children: a, container: n } = e, t = u(P, o);
  return /* @__PURE__ */ i(te, { scope: o, forceMount: r, children: s.Children.map(a, (c) => /* @__PURE__ */ i(h, { present: r || t.open, children: /* @__PURE__ */ i(Y, { asChild: !0, container: n, children: c }) })) });
};
M.displayName = P;
var m = "DialogOverlay", w = s.forwardRef(
  (e, o) => {
    const r = b(m, e.__scopeDialog), { forceMount: a = r.forceMount, ...n } = e, t = u(m, e.__scopeDialog);
    return t.modal ? /* @__PURE__ */ i(h, { present: a || t.open, children: /* @__PURE__ */ i(ne, { ...n, ref: o }) }) : null;
  }
);
w.displayName = m;
var oe = q("DialogOverlay.RemoveScroll"), ne = s.forwardRef(
  (e, o) => {
    const { __scopeDialog: r, ...a } = e, n = u(m, r);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ i(J, { as: oe, allowPinchZoom: !0, shards: [n.contentRef], children: /* @__PURE__ */ i(
        D.div,
        {
          "data-state": y(n.open),
          ...a,
          ref: o,
          style: { pointerEvents: "auto", ...a.style }
        }
      ) })
    );
  }
), f = "DialogContent", F = s.forwardRef(
  (e, o) => {
    const r = b(f, e.__scopeDialog), { forceMount: a = r.forceMount, ...n } = e, t = u(f, e.__scopeDialog);
    return /* @__PURE__ */ i(h, { present: a || t.open, children: t.modal ? /* @__PURE__ */ i(re, { ...n, ref: o }) : /* @__PURE__ */ i(ae, { ...n, ref: o }) });
  }
);
F.displayName = f;
var re = s.forwardRef(
  (e, o) => {
    const r = u(f, e.__scopeDialog), a = s.useRef(null), n = _(o, r.contentRef, a);
    return s.useEffect(() => {
      const t = a.current;
      if (t) return z(t);
    }, []), /* @__PURE__ */ i(
      S,
      {
        ...e,
        ref: n,
        trapFocus: r.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: p(e.onCloseAutoFocus, (t) => {
          var c;
          t.preventDefault(), (c = r.triggerRef.current) == null || c.focus();
        }),
        onPointerDownOutside: p(e.onPointerDownOutside, (t) => {
          const c = t.detail.originalEvent, l = c.button === 0 && c.ctrlKey === !0;
          (c.button === 2 || l) && t.preventDefault();
        }),
        onFocusOutside: p(
          e.onFocusOutside,
          (t) => t.preventDefault()
        )
      }
    );
  }
), ae = s.forwardRef(
  (e, o) => {
    const r = u(f, e.__scopeDialog), a = s.useRef(!1), n = s.useRef(!1);
    return /* @__PURE__ */ i(
      S,
      {
        ...e,
        ref: o,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (t) => {
          var c, l;
          (c = e.onCloseAutoFocus) == null || c.call(e, t), t.defaultPrevented || (a.current || (l = r.triggerRef.current) == null || l.focus(), t.preventDefault()), a.current = !1, n.current = !1;
        },
        onInteractOutside: (t) => {
          var d, g;
          (d = e.onInteractOutside) == null || d.call(e, t), t.defaultPrevented || (a.current = !0, t.detail.originalEvent.type === "pointerdown" && (n.current = !0));
          const c = t.target;
          ((g = r.triggerRef.current) == null ? void 0 : g.contains(c)) && t.preventDefault(), t.detail.originalEvent.type === "focusin" && n.current && t.preventDefault();
        }
      }
    );
  }
), S = s.forwardRef(
  (e, o) => {
    const { __scopeDialog: r, trapFocus: a, onOpenAutoFocus: n, onCloseAutoFocus: t, ...c } = e, l = u(f, r), d = s.useRef(null), g = _(o, d);
    return Q(), /* @__PURE__ */ N(O, { children: [
      /* @__PURE__ */ i(
        X,
        {
          asChild: !0,
          loop: !0,
          trapped: a,
          onMountAutoFocus: n,
          onUnmountAutoFocus: t,
          children: /* @__PURE__ */ i(
            Z,
            {
              role: "dialog",
              id: l.contentId,
              "aria-describedby": l.descriptionId,
              "aria-labelledby": l.titleId,
              "data-state": y(l.open),
              ...c,
              ref: g,
              onDismiss: () => l.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ N(O, { children: [
        /* @__PURE__ */ i(ie, { titleId: l.titleId }),
        /* @__PURE__ */ i(ce, { contentRef: d, descriptionId: l.descriptionId })
      ] })
    ] });
  }
), E = "DialogTitle", W = s.forwardRef(
  (e, o) => {
    const { __scopeDialog: r, ...a } = e, n = u(E, r);
    return /* @__PURE__ */ i(D.h2, { id: n.titleId, ...a, ref: o });
  }
);
W.displayName = E;
var k = "DialogDescription", G = s.forwardRef(
  (e, o) => {
    const { __scopeDialog: r, ...a } = e, n = u(k, r);
    return /* @__PURE__ */ i(D.p, { id: n.descriptionId, ...a, ref: o });
  }
);
G.displayName = k;
var L = "DialogClose", $ = s.forwardRef(
  (e, o) => {
    const { __scopeDialog: r, ...a } = e, n = u(L, r);
    return /* @__PURE__ */ i(
      D.button,
      {
        type: "button",
        ...a,
        ref: o,
        onClick: p(e.onClick, () => n.onOpenChange(!1))
      }
    );
  }
);
$.displayName = L;
function y(e) {
  return e ? "open" : "closed";
}
var B = "DialogTitleWarning", [Re, j] = U(B, {
  contentName: f,
  titleName: E,
  docsSlug: "dialog"
}), ie = ({ titleId: e }) => {
  const o = j(B), r = `\`${o.contentName}\` requires a \`${o.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${o.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${o.docsSlug}`;
  return s.useEffect(() => {
    e && (document.getElementById(e) || console.error(r));
  }, [r, e]), null;
}, se = "DialogDescriptionWarning", ce = ({ contentRef: e, descriptionId: o }) => {
  const a = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${j(se).contentName}}.`;
  return s.useEffect(() => {
    var t;
    const n = (t = e.current) == null ? void 0 : t.getAttribute("aria-describedby");
    o && n && (document.getElementById(o) || console.warn(a));
  }, [a, e, o]), null;
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
//# sourceMappingURL=index-CzfPQm2s.js.map
