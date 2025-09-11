import { jsx as t, jsxs as Q } from "react/jsx-runtime";
import l from "react";
import { c as W } from "./index-DFZozV_h.js";
import { c as X, u as Z } from "./index-1QHKgw6D.js";
import { u as ee } from "./index-DQH6odE9.js";
import { u as O, c as oe } from "./index-C0UREtMP.js";
import { P as M } from "./index-BVRIAMfe.js";
import { c as V, b as re, R as te, T as ne } from "./index-EO5flKM3.js";
import { u as ce } from "./index-xqkGMOJ8.js";
import { c as S } from "./utils-CwJPJKOE.js";
import { C as ae } from "./chevron-down-BORJtX8F.js";
var d = "Accordion", ie = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"], [E, se, le] = X(d), [b, De] = W(d, [
  le,
  V
]), k = V(), H = l.forwardRef(
  (e, n) => {
    const { type: o, ...c } = e, a = c, r = c;
    return /* @__PURE__ */ t(E.Provider, { scope: e.__scopeAccordion, children: o === "multiple" ? /* @__PURE__ */ t(fe, { ...r, ref: n }) : /* @__PURE__ */ t(ue, { ...a, ref: n }) });
  }
);
H.displayName = d;
var [K, de] = b(d), [$, pe] = b(
  d,
  { collapsible: !1 }
), ue = l.forwardRef(
  (e, n) => {
    const {
      value: o,
      defaultValue: c,
      onValueChange: a = () => {
      },
      collapsible: r = !1,
      ...s
    } = e, [i, p] = O({
      prop: o,
      defaultProp: c ?? "",
      onChange: a,
      caller: d
    });
    return /* @__PURE__ */ t(
      K,
      {
        scope: e.__scopeAccordion,
        value: l.useMemo(() => i ? [i] : [], [i]),
        onItemOpen: p,
        onItemClose: l.useCallback(() => r && p(""), [r, p]),
        children: /* @__PURE__ */ t($, { scope: e.__scopeAccordion, collapsible: r, children: /* @__PURE__ */ t(j, { ...s, ref: n }) })
      }
    );
  }
), fe = l.forwardRef((e, n) => {
  const {
    value: o,
    defaultValue: c,
    onValueChange: a = () => {
    },
    ...r
  } = e, [s, i] = O({
    prop: o,
    defaultProp: c ?? [],
    onChange: a,
    caller: d
  }), p = l.useCallback(
    (v) => i((f = []) => [...f, v]),
    [i]
  ), m = l.useCallback(
    (v) => i((f = []) => f.filter((x) => x !== v)),
    [i]
  );
  return /* @__PURE__ */ t(
    K,
    {
      scope: e.__scopeAccordion,
      value: s,
      onItemOpen: p,
      onItemClose: m,
      children: /* @__PURE__ */ t($, { scope: e.__scopeAccordion, collapsible: !0, children: /* @__PURE__ */ t(j, { ...r, ref: n }) })
    }
  );
}), [me, h] = b(d), j = l.forwardRef(
  (e, n) => {
    const { __scopeAccordion: o, disabled: c, dir: a, orientation: r = "vertical", ...s } = e, i = l.useRef(null), p = ee(i, n), m = se(o), f = Z(a) === "ltr", x = oe(e.onKeyDown, (A) => {
      if (!ie.includes(A.key)) return;
      const F = A.target, I = m().filter((N) => !N.ref.current?.disabled), g = I.findIndex((N) => N.ref.current === F), T = I.length;
      if (g === -1) return;
      A.preventDefault();
      let u = g;
      const _ = 0, w = T - 1, R = () => {
        u = g + 1, u > w && (u = _);
      }, P = () => {
        u = g - 1, u < _ && (u = w);
      };
      switch (A.key) {
        case "Home":
          u = _;
          break;
        case "End":
          u = w;
          break;
        case "ArrowRight":
          r === "horizontal" && (f ? R() : P());
          break;
        case "ArrowDown":
          r === "vertical" && R();
          break;
        case "ArrowLeft":
          r === "horizontal" && (f ? P() : R());
          break;
        case "ArrowUp":
          r === "vertical" && P();
          break;
      }
      const J = u % T;
      I[J].ref.current?.focus();
    });
    return /* @__PURE__ */ t(
      me,
      {
        scope: o,
        disabled: c,
        direction: a,
        orientation: r,
        children: /* @__PURE__ */ t(E.Slot, { scope: o, children: /* @__PURE__ */ t(
          M.div,
          {
            ...s,
            "data-orientation": r,
            ref: p,
            onKeyDown: c ? void 0 : x
          }
        ) })
      }
    );
  }
), C = "AccordionItem", [ve, D] = b(C), z = l.forwardRef(
  (e, n) => {
    const { __scopeAccordion: o, value: c, ...a } = e, r = h(C, o), s = de(C, o), i = k(o), p = ce(), m = c && s.value.includes(c) || !1, v = r.disabled || e.disabled;
    return /* @__PURE__ */ t(
      ve,
      {
        scope: o,
        open: m,
        disabled: v,
        triggerId: p,
        children: /* @__PURE__ */ t(
          te,
          {
            "data-orientation": r.orientation,
            "data-state": B(m),
            ...i,
            ...a,
            ref: n,
            disabled: v,
            open: m,
            onOpenChange: (f) => {
              f ? s.onItemOpen(c) : s.onItemClose(c);
            }
          }
        )
      }
    );
  }
);
z.displayName = C;
var L = "AccordionHeader", G = l.forwardRef(
  (e, n) => {
    const { __scopeAccordion: o, ...c } = e, a = h(d, o), r = D(L, o);
    return /* @__PURE__ */ t(
      M.h3,
      {
        "data-orientation": a.orientation,
        "data-state": B(r.open),
        "data-disabled": r.disabled ? "" : void 0,
        ...c,
        ref: n
      }
    );
  }
);
G.displayName = L;
var y = "AccordionTrigger", U = l.forwardRef(
  (e, n) => {
    const { __scopeAccordion: o, ...c } = e, a = h(d, o), r = D(y, o), s = pe(y, o), i = k(o);
    return /* @__PURE__ */ t(E.ItemSlot, { scope: o, children: /* @__PURE__ */ t(
      ne,
      {
        "aria-disabled": r.open && !s.collapsible || void 0,
        "data-orientation": a.orientation,
        id: r.triggerId,
        ...i,
        ...c,
        ref: n
      }
    ) });
  }
);
U.displayName = y;
var Y = "AccordionContent", q = l.forwardRef(
  (e, n) => {
    const { __scopeAccordion: o, ...c } = e, a = h(d, o), r = D(Y, o), s = k(o);
    return /* @__PURE__ */ t(
      re,
      {
        role: "region",
        "aria-labelledby": r.triggerId,
        "data-orientation": a.orientation,
        ...s,
        ...c,
        ref: n,
        style: {
          "--radix-accordion-content-height": "var(--radix-collapsible-content-height)",
          "--radix-accordion-content-width": "var(--radix-collapsible-content-width)",
          ...e.style
        }
      }
    );
  }
);
q.displayName = Y;
function B(e) {
  return e ? "open" : "closed";
}
var Ae = H, ge = z, Ce = G, be = U, he = q;
function Te({
  ...e
}) {
  return /* @__PURE__ */ t(Ae, { "data-slot": "accordion", ...e });
}
function Oe({
  className: e,
  ...n
}) {
  return /* @__PURE__ */ t(
    ge,
    {
      "data-slot": "accordion-item",
      className: S("border-b last:border-b-0", e),
      ...n
    }
  );
}
function Me({
  className: e,
  children: n,
  ...o
}) {
  return /* @__PURE__ */ t(Ce, { className: "flex", children: /* @__PURE__ */ Q(
    be,
    {
      "data-slot": "accordion-trigger",
      className: S(
        "focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180",
        e
      ),
      ...o,
      children: [
        n,
        /* @__PURE__ */ t(ae, { className: "text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200" })
      ]
    }
  ) });
}
function Ve({
  className: e,
  children: n,
  ...o
}) {
  return /* @__PURE__ */ t(
    he,
    {
      "data-slot": "accordion-content",
      className: "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm",
      ...o,
      children: /* @__PURE__ */ t("div", { className: S("pt-0 pb-4", e), children: n })
    }
  );
}
export {
  Te as Accordion,
  Ve as AccordionContent,
  Oe as AccordionItem,
  Me as AccordionTrigger
};
//# sourceMappingURL=accordion.js.map
