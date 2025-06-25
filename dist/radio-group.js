import { jsx as n, jsxs as B } from "react/jsx-runtime";
import * as d from "react";
import { u as K, c as C } from "./index-CPxmoWFw.js";
import { u as w } from "./index-CRtwelBU.js";
import { c as P } from "./index-UFb2E87s.js";
import { P as h } from "./index-IjmGKHPz.js";
import { c as E, R as T, I as U } from "./index-TGy1wBIr.js";
import { u as V } from "./index-DRTnvS9P.js";
import { u as j } from "./index-CHDs-SiB.js";
import { u as z } from "./index-BZPx6jYI.js";
import { P as H } from "./index-BFzlN27V.js";
import { c as _ } from "./utils-qaFjX9_3.js";
import { C as $ } from "./circle-DHOdTDQh.js";
var I = "Radio", [W, k] = P(I), [X, Y] = W(I), G = d.forwardRef(
  (r, t) => {
    const {
      __scopeRadio: o,
      name: c,
      checked: e = !1,
      required: a,
      disabled: s,
      value: f = "on",
      onCheck: u,
      form: m,
      ...v
    } = r, [p, R] = d.useState(null), i = w(t, (g) => R(g)), l = d.useRef(!1), b = p ? m || !!p.closest("form") : !0;
    return /* @__PURE__ */ B(X, { scope: o, checked: e, disabled: s, children: [
      /* @__PURE__ */ n(
        h.button,
        {
          type: "button",
          role: "radio",
          "aria-checked": e,
          "data-state": A(e),
          "data-disabled": s ? "" : void 0,
          disabled: s,
          value: f,
          ...v,
          ref: i,
          onClick: C(r.onClick, (g) => {
            e || u == null || u(), b && (l.current = g.isPropagationStopped(), l.current || g.stopPropagation());
          })
        }
      ),
      b && /* @__PURE__ */ n(
        x,
        {
          control: p,
          bubbles: !l.current,
          name: c,
          value: f,
          checked: e,
          required: a,
          disabled: s,
          form: m,
          style: { transform: "translateX(-100%)" }
        }
      )
    ] });
  }
);
G.displayName = I;
var N = "RadioIndicator", S = d.forwardRef(
  (r, t) => {
    const { __scopeRadio: o, forceMount: c, ...e } = r, a = Y(N, o);
    return /* @__PURE__ */ n(H, { present: c || a.checked, children: /* @__PURE__ */ n(
      h.span,
      {
        "data-state": A(a.checked),
        "data-disabled": a.disabled ? "" : void 0,
        ...e,
        ref: t
      }
    ) });
  }
);
S.displayName = N;
var J = "RadioBubbleInput", x = d.forwardRef(
  ({
    __scopeRadio: r,
    control: t,
    checked: o,
    bubbles: c = !0,
    ...e
  }, a) => {
    const s = d.useRef(null), f = w(s, a), u = z(o), m = j(t);
    return d.useEffect(() => {
      const v = s.current;
      if (!v) return;
      const p = window.HTMLInputElement.prototype, i = Object.getOwnPropertyDescriptor(
        p,
        "checked"
      ).set;
      if (u !== o && i) {
        const l = new Event("click", { bubbles: c });
        i.call(v, o), v.dispatchEvent(l);
      }
    }, [u, o, c]), /* @__PURE__ */ n(
      h.input,
      {
        type: "radio",
        "aria-hidden": !0,
        defaultChecked: o,
        ...e,
        tabIndex: -1,
        ref: f,
        style: {
          ...e.style,
          ...m,
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0
        }
      }
    );
  }
);
x.displayName = J;
function A(r) {
  return r ? "checked" : "unchecked";
}
var Q = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], y = "RadioGroup", [Z, ge] = P(y, [
  E,
  k
]), D = E(), M = k(), [ee, oe] = Z(y), O = d.forwardRef(
  (r, t) => {
    const {
      __scopeRadioGroup: o,
      name: c,
      defaultValue: e,
      value: a,
      required: s = !1,
      disabled: f = !1,
      orientation: u,
      dir: m,
      loop: v = !0,
      onValueChange: p,
      ...R
    } = r, i = D(o), l = V(m), [b, g] = K({
      prop: a,
      defaultProp: e ?? null,
      onChange: p,
      caller: y
    });
    return /* @__PURE__ */ n(
      ee,
      {
        scope: o,
        name: c,
        required: s,
        disabled: f,
        value: b,
        onValueChange: g,
        children: /* @__PURE__ */ n(
          T,
          {
            asChild: !0,
            ...i,
            orientation: u,
            dir: l,
            loop: v,
            children: /* @__PURE__ */ n(
              h.div,
              {
                role: "radiogroup",
                "aria-required": s,
                "aria-orientation": u,
                "data-disabled": f ? "" : void 0,
                dir: l,
                ...R,
                ref: t
              }
            )
          }
        )
      }
    );
  }
);
O.displayName = y;
var F = "RadioGroupItem", L = d.forwardRef(
  (r, t) => {
    const { __scopeRadioGroup: o, disabled: c, ...e } = r, a = oe(F, o), s = a.disabled || c, f = D(o), u = M(o), m = d.useRef(null), v = w(t, m), p = a.value === e.value, R = d.useRef(!1);
    return d.useEffect(() => {
      const i = (b) => {
        Q.includes(b.key) && (R.current = !0);
      }, l = () => R.current = !1;
      return document.addEventListener("keydown", i), document.addEventListener("keyup", l), () => {
        document.removeEventListener("keydown", i), document.removeEventListener("keyup", l);
      };
    }, []), /* @__PURE__ */ n(
      U,
      {
        asChild: !0,
        ...f,
        focusable: !s,
        active: p,
        children: /* @__PURE__ */ n(
          G,
          {
            disabled: s,
            required: a.required,
            checked: p,
            ...u,
            ...e,
            name: a.name,
            ref: v,
            onCheck: () => a.onValueChange(e.value),
            onKeyDown: C((i) => {
              i.key === "Enter" && i.preventDefault();
            }),
            onFocus: C(e.onFocus, () => {
              var i;
              R.current && ((i = m.current) == null || i.click());
            })
          }
        )
      }
    );
  }
);
L.displayName = F;
var re = "RadioGroupIndicator", q = d.forwardRef(
  (r, t) => {
    const { __scopeRadioGroup: o, ...c } = r, e = M(o);
    return /* @__PURE__ */ n(S, { ...e, ...c, ref: t });
  }
);
q.displayName = re;
var te = O, ae = L, ie = q;
function he({
  className: r,
  ...t
}) {
  return /* @__PURE__ */ n(
    te,
    {
      "data-slot": "radio-group",
      className: _("grid gap-3", r),
      ...t
    }
  );
}
function ye({
  className: r,
  ...t
}) {
  return /* @__PURE__ */ n(
    ae,
    {
      "data-slot": "radio-group-item",
      className: _(
        "border-input text-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 aspect-square size-4 shrink-0 rounded-full border shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        r
      ),
      ...t,
      children: /* @__PURE__ */ n(
        ie,
        {
          "data-slot": "radio-group-indicator",
          className: "relative flex items-center justify-center",
          children: /* @__PURE__ */ n($, { className: "fill-primary absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2" })
        }
      )
    }
  );
}
export {
  he as RadioGroup,
  ye as RadioGroupItem
};
//# sourceMappingURL=radio-group.js.map
