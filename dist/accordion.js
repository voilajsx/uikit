import { jsx as t, jsxs as X } from "react/jsx-runtime";
import l from "react";
import { c as Z } from "./index-UFb2E87s.js";
import { c as ee, u as oe } from "./index-DRTnvS9P.js";
import { u as re } from "./index-CRtwelBU.js";
import { u as V, c as te } from "./index-CPxmoWFw.js";
import { P as H } from "./index-IjmGKHPz.js";
import { c as K, b as ne, R as ce, T as ae } from "./index-B2_XKEyh.js";
import { u as ie } from "./index-B_PLZIoC.js";
import { c as S } from "./utils-qaFjX9_3.js";
import { C as se } from "./chevron-down-BORJtX8F.js";
var d = "Accordion", le = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"], [E, de, pe] = ee(d), [b, Oe] = Z(d, [
  pe,
  K
]), k = K(), $ = l.forwardRef(
  (e, n) => {
    const { type: o, ...c } = e, a = c, r = c;
    return /* @__PURE__ */ t(E.Provider, { scope: e.__scopeAccordion, children: o === "multiple" ? /* @__PURE__ */ t(ve, { ...r, ref: n }) : /* @__PURE__ */ t(me, { ...a, ref: n }) });
  }
);
$.displayName = d;
var [j, ue] = b(d), [z, fe] = b(
  d,
  { collapsible: !1 }
), me = l.forwardRef(
  (e, n) => {
    const {
      value: o,
      defaultValue: c,
      onValueChange: a = () => {
      },
      collapsible: r = !1,
      ...s
    } = e, [i, p] = V({
      prop: o,
      defaultProp: c ?? "",
      onChange: a,
      caller: d
    });
    return /* @__PURE__ */ t(
      j,
      {
        scope: e.__scopeAccordion,
        value: l.useMemo(() => i ? [i] : [], [i]),
        onItemOpen: p,
        onItemClose: l.useCallback(() => r && p(""), [r, p]),
        children: /* @__PURE__ */ t(z, { scope: e.__scopeAccordion, collapsible: r, children: /* @__PURE__ */ t(L, { ...s, ref: n }) })
      }
    );
  }
), ve = l.forwardRef((e, n) => {
  const {
    value: o,
    defaultValue: c,
    onValueChange: a = () => {
    },
    ...r
  } = e, [s, i] = V({
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
    j,
    {
      scope: e.__scopeAccordion,
      value: s,
      onItemOpen: p,
      onItemClose: m,
      children: /* @__PURE__ */ t(z, { scope: e.__scopeAccordion, collapsible: !0, children: /* @__PURE__ */ t(L, { ...r, ref: n }) })
    }
  );
}), [Ae, h] = b(d), L = l.forwardRef(
  (e, n) => {
    const { __scopeAccordion: o, disabled: c, dir: a, orientation: r = "vertical", ...s } = e, i = l.useRef(null), p = re(i, n), m = de(o), f = oe(a) === "ltr", x = te(e.onKeyDown, (A) => {
      var O;
      if (!le.includes(A.key)) return;
      const Q = A.target, I = m().filter((N) => {
        var M;
        return !((M = N.ref.current) != null && M.disabled);
      }), g = I.findIndex((N) => N.ref.current === Q), T = I.length;
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
      const W = u % T;
      (O = I[W].ref.current) == null || O.focus();
    });
    return /* @__PURE__ */ t(
      Ae,
      {
        scope: o,
        disabled: c,
        direction: a,
        orientation: r,
        children: /* @__PURE__ */ t(E.Slot, { scope: o, children: /* @__PURE__ */ t(
          H.div,
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
), C = "AccordionItem", [ge, D] = b(C), G = l.forwardRef(
  (e, n) => {
    const { __scopeAccordion: o, value: c, ...a } = e, r = h(C, o), s = ue(C, o), i = k(o), p = ie(), m = c && s.value.includes(c) || !1, v = r.disabled || e.disabled;
    return /* @__PURE__ */ t(
      ge,
      {
        scope: o,
        open: m,
        disabled: v,
        triggerId: p,
        children: /* @__PURE__ */ t(
          ce,
          {
            "data-orientation": r.orientation,
            "data-state": J(m),
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
G.displayName = C;
var U = "AccordionHeader", Y = l.forwardRef(
  (e, n) => {
    const { __scopeAccordion: o, ...c } = e, a = h(d, o), r = D(U, o);
    return /* @__PURE__ */ t(
      H.h3,
      {
        "data-orientation": a.orientation,
        "data-state": J(r.open),
        "data-disabled": r.disabled ? "" : void 0,
        ...c,
        ref: n
      }
    );
  }
);
Y.displayName = U;
var y = "AccordionTrigger", q = l.forwardRef(
  (e, n) => {
    const { __scopeAccordion: o, ...c } = e, a = h(d, o), r = D(y, o), s = fe(y, o), i = k(o);
    return /* @__PURE__ */ t(E.ItemSlot, { scope: o, children: /* @__PURE__ */ t(
      ae,
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
q.displayName = y;
var B = "AccordionContent", F = l.forwardRef(
  (e, n) => {
    const { __scopeAccordion: o, ...c } = e, a = h(d, o), r = D(B, o), s = k(o);
    return /* @__PURE__ */ t(
      ne,
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
F.displayName = B;
function J(e) {
  return e ? "open" : "closed";
}
var Ce = $, be = G, he = Y, xe = q, Ie = F;
function Me({
  ...e
}) {
  return /* @__PURE__ */ t(Ce, { "data-slot": "accordion", ...e });
}
function Ve({
  className: e,
  ...n
}) {
  return /* @__PURE__ */ t(
    be,
    {
      "data-slot": "accordion-item",
      className: S("border-b last:border-b-0", e),
      ...n
    }
  );
}
function He({
  className: e,
  children: n,
  ...o
}) {
  return /* @__PURE__ */ t(he, { className: "flex", children: /* @__PURE__ */ X(
    xe,
    {
      "data-slot": "accordion-trigger",
      className: S(
        "focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180",
        e
      ),
      ...o,
      children: [
        n,
        /* @__PURE__ */ t(se, { className: "text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200" })
      ]
    }
  ) });
}
function Ke({
  className: e,
  children: n,
  ...o
}) {
  return /* @__PURE__ */ t(
    Ie,
    {
      "data-slot": "accordion-content",
      className: "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm",
      ...o,
      children: /* @__PURE__ */ t("div", { className: S("pt-0 pb-4", e), children: n })
    }
  );
}
export {
  Me as Accordion,
  Ke as AccordionContent,
  Ve as AccordionItem,
  He as AccordionTrigger
};
//# sourceMappingURL=accordion.js.map
