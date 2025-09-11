import { jsx as n, jsxs as y } from "react/jsx-runtime";
import * as s from "react";
import { u as ne, c as oe } from "./index-1QHKgw6D.js";
import { u as k, c as x } from "./index-C0UREtMP.js";
import { u as se } from "./index-DQH6odE9.js";
import { c as ue } from "./index-DFZozV_h.js";
import { u as S } from "./index-xqkGMOJ8.js";
import { c as ie, C as ce, I as de, R as le, S as pe, A as me, a as be, b as fe, d as ge, e as ve, L as Me, f as he, g as xe, h as _e, P as Re, G as Ce, i as Se } from "./index-Lf7yDOXW.js";
import { c as G, R as Ne, I as Ie } from "./index-DFi6WydO.js";
import { P as D } from "./index-BVRIAMfe.js";
import { c as v } from "./utils-CwJPJKOE.js";
import { C as we } from "./check-DXouwtzp.js";
import { C as ye } from "./circle-DHOdTDQh.js";
import { C as Ae } from "./chevron-right-pz9eCjj-.js";
var R = "Menubar", [N, Pe, Ee] = oe(R), [z, Sr] = ue(R, [
  Ee,
  G
]), d = ie(), $ = G(), [Te, A] = z(R), K = s.forwardRef(
  (e, r) => {
    const {
      __scopeMenubar: t,
      value: a,
      onValueChange: o,
      defaultValue: M,
      loop: l = !0,
      dir: c,
      ...u
    } = e, m = ne(c), i = $(t), [f, b] = k({
      prop: a,
      onChange: o,
      defaultProp: M ?? "",
      caller: R
    }), [g, p] = s.useState(null);
    return /* @__PURE__ */ n(
      Te,
      {
        scope: t,
        value: f,
        onMenuOpen: s.useCallback(
          (h) => {
            b(h), p(h);
          },
          [b]
        ),
        onMenuClose: s.useCallback(() => b(""), [b]),
        onMenuToggle: s.useCallback(
          (h) => {
            b((E) => E ? "" : h), p(h);
          },
          [b]
        ),
        dir: m,
        loop: l,
        children: /* @__PURE__ */ n(N.Provider, { scope: t, children: /* @__PURE__ */ n(N.Slot, { scope: t, children: /* @__PURE__ */ n(
          Ne,
          {
            asChild: !0,
            ...i,
            orientation: "horizontal",
            loop: l,
            dir: m,
            currentTabStopId: g,
            onCurrentTabStopIdChange: p,
            children: /* @__PURE__ */ n(D.div, { role: "menubar", ...u, ref: r })
          }
        ) }) })
      }
    );
  }
);
K.displayName = R;
var P = "MenubarMenu", [Oe, F] = z(P), L = (e) => {
  const { __scopeMenubar: r, value: t, ...a } = e, o = S(), M = t || o || "LEGACY_REACT_AUTO_VALUE", l = A(P, r), c = d(r), u = s.useRef(null), m = s.useRef(!1), i = l.value === M;
  return s.useEffect(() => {
    i || (m.current = !1);
  }, [i]), /* @__PURE__ */ n(
    Oe,
    {
      scope: r,
      value: M,
      triggerId: S(),
      triggerRef: u,
      contentId: S(),
      wasKeyboardTriggerOpenRef: m,
      children: /* @__PURE__ */ n(
        le,
        {
          ...c,
          open: i,
          onOpenChange: (f) => {
            f || l.onMenuClose();
          },
          modal: !1,
          dir: l.dir,
          ...a
        }
      )
    }
  );
};
L.displayName = P;
var I = "MenubarTrigger", B = s.forwardRef(
  (e, r) => {
    const { __scopeMenubar: t, disabled: a = !1, ...o } = e, M = $(t), l = d(t), c = A(I, t), u = F(I, t), m = s.useRef(null), i = se(r, m, u.triggerRef), [f, b] = s.useState(!1), g = c.value === u.value;
    return /* @__PURE__ */ n(N.ItemSlot, { scope: t, value: u.value, disabled: a, children: /* @__PURE__ */ n(
      Ie,
      {
        asChild: !0,
        ...M,
        focusable: !a,
        tabStopId: u.value,
        children: /* @__PURE__ */ n(me, { asChild: !0, ...l, children: /* @__PURE__ */ n(
          D.button,
          {
            type: "button",
            role: "menuitem",
            id: u.triggerId,
            "aria-haspopup": "menu",
            "aria-expanded": g,
            "aria-controls": g ? u.contentId : void 0,
            "data-highlighted": f ? "" : void 0,
            "data-state": g ? "open" : "closed",
            "data-disabled": a ? "" : void 0,
            disabled: a,
            ...o,
            ref: i,
            onPointerDown: x(e.onPointerDown, (p) => {
              !a && p.button === 0 && p.ctrlKey === !1 && (c.onMenuOpen(u.value), g || p.preventDefault());
            }),
            onPointerEnter: x(e.onPointerEnter, () => {
              !!c.value && !g && (c.onMenuOpen(u.value), m.current?.focus());
            }),
            onKeyDown: x(e.onKeyDown, (p) => {
              a || (["Enter", " "].includes(p.key) && c.onMenuToggle(u.value), p.key === "ArrowDown" && c.onMenuOpen(u.value), ["Enter", " ", "ArrowDown"].includes(p.key) && (u.wasKeyboardTriggerOpenRef.current = !0, p.preventDefault()));
            }),
            onFocus: x(e.onFocus, () => b(!0)),
            onBlur: x(e.onBlur, () => b(!1))
          }
        ) })
      }
    ) });
  }
);
B.displayName = I;
var ke = "MenubarPortal", U = (e) => {
  const { __scopeMenubar: r, ...t } = e, a = d(r);
  return /* @__PURE__ */ n(Re, { ...a, ...t });
};
U.displayName = ke;
var w = "MenubarContent", V = s.forwardRef(
  (e, r) => {
    const { __scopeMenubar: t, align: a = "start", ...o } = e, M = d(t), l = A(w, t), c = F(w, t), u = Pe(t), m = s.useRef(!1);
    return /* @__PURE__ */ n(
      ce,
      {
        id: c.contentId,
        "aria-labelledby": c.triggerId,
        "data-radix-menubar-content": "",
        ...M,
        ...o,
        ref: r,
        align: a,
        onCloseAutoFocus: x(e.onCloseAutoFocus, (i) => {
          !!!l.value && !m.current && c.triggerRef.current?.focus(), m.current = !1, i.preventDefault();
        }),
        onFocusOutside: x(e.onFocusOutside, (i) => {
          const f = i.target;
          u().some((g) => g.ref.current?.contains(f)) && i.preventDefault();
        }),
        onInteractOutside: x(e.onInteractOutside, () => {
          m.current = !0;
        }),
        onEntryFocus: (i) => {
          c.wasKeyboardTriggerOpenRef.current || i.preventDefault();
        },
        onKeyDown: x(
          e.onKeyDown,
          (i) => {
            if (["ArrowRight", "ArrowLeft"].includes(i.key)) {
              const f = i.target, b = f.hasAttribute("data-radix-menubar-subtrigger"), g = f.closest("[data-radix-menubar-content]") !== i.currentTarget, h = (l.dir === "rtl" ? "ArrowRight" : "ArrowLeft") === i.key;
              if (!h && b || g && h) return;
              let _ = u().filter((C) => !C.disabled).map((C) => C.value);
              h && _.reverse();
              const T = _.indexOf(c.value);
              _ = l.loop ? We(_, T + 1) : _.slice(T + 1);
              const [O] = _;
              O && l.onMenuOpen(O);
            }
          },
          { checkForDefaultPrevented: !1 }
        ),
        style: {
          ...e.style,
          "--radix-menubar-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-menubar-content-available-width": "var(--radix-popper-available-width)",
          "--radix-menubar-content-available-height": "var(--radix-popper-available-height)",
          "--radix-menubar-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-menubar-trigger-height": "var(--radix-popper-anchor-height)"
        }
      }
    );
  }
);
V.displayName = w;
var Ge = "MenubarGroup", j = s.forwardRef(
  (e, r) => {
    const { __scopeMenubar: t, ...a } = e, o = d(t);
    return /* @__PURE__ */ n(Ce, { ...o, ...a, ref: r });
  }
);
j.displayName = Ge;
var De = "MenubarLabel", H = s.forwardRef(
  (e, r) => {
    const { __scopeMenubar: t, ...a } = e, o = d(t);
    return /* @__PURE__ */ n(Me, { ...o, ...a, ref: r });
  }
);
H.displayName = De;
var ze = "MenubarItem", W = s.forwardRef(
  (e, r) => {
    const { __scopeMenubar: t, ...a } = e, o = d(t);
    return /* @__PURE__ */ n(de, { ...o, ...a, ref: r });
  }
);
W.displayName = ze;
var $e = "MenubarCheckboxItem", X = s.forwardRef(
  (e, r) => {
    const { __scopeMenubar: t, ...a } = e, o = d(t);
    return /* @__PURE__ */ n(be, { ...o, ...a, ref: r });
  }
);
X.displayName = $e;
var Ke = "MenubarRadioGroup", Y = s.forwardRef(
  (e, r) => {
    const { __scopeMenubar: t, ...a } = e, o = d(t);
    return /* @__PURE__ */ n(ge, { ...o, ...a, ref: r });
  }
);
Y.displayName = Ke;
var Fe = "MenubarRadioItem", q = s.forwardRef(
  (e, r) => {
    const { __scopeMenubar: t, ...a } = e, o = d(t);
    return /* @__PURE__ */ n(ve, { ...o, ...a, ref: r });
  }
);
q.displayName = Fe;
var Le = "MenubarItemIndicator", J = s.forwardRef((e, r) => {
  const { __scopeMenubar: t, ...a } = e, o = d(t);
  return /* @__PURE__ */ n(fe, { ...o, ...a, ref: r });
});
J.displayName = Le;
var Be = "MenubarSeparator", Q = s.forwardRef(
  (e, r) => {
    const { __scopeMenubar: t, ...a } = e, o = d(t);
    return /* @__PURE__ */ n(pe, { ...o, ...a, ref: r });
  }
);
Q.displayName = Be;
var Ue = "MenubarArrow", Ve = s.forwardRef(
  (e, r) => {
    const { __scopeMenubar: t, ...a } = e, o = d(t);
    return /* @__PURE__ */ n(Se, { ...o, ...a, ref: r });
  }
);
Ve.displayName = Ue;
var Z = "MenubarSub", ee = (e) => {
  const { __scopeMenubar: r, children: t, open: a, onOpenChange: o, defaultOpen: M } = e, l = d(r), [c, u] = k({
    prop: a,
    defaultProp: M ?? !1,
    onChange: o,
    caller: Z
  });
  return /* @__PURE__ */ n(he, { ...l, open: c, onOpenChange: u, children: t });
};
ee.displayName = Z;
var je = "MenubarSubTrigger", re = s.forwardRef(
  (e, r) => {
    const { __scopeMenubar: t, ...a } = e, o = d(t);
    return /* @__PURE__ */ n(
      _e,
      {
        "data-radix-menubar-subtrigger": "",
        ...o,
        ...a,
        ref: r
      }
    );
  }
);
re.displayName = je;
var He = "MenubarSubContent", te = s.forwardRef(
  (e, r) => {
    const { __scopeMenubar: t, ...a } = e, o = d(t);
    return /* @__PURE__ */ n(
      xe,
      {
        ...o,
        "data-radix-menubar-content": "",
        ...a,
        ref: r,
        style: {
          ...e.style,
          "--radix-menubar-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-menubar-content-available-width": "var(--radix-popper-available-width)",
          "--radix-menubar-content-available-height": "var(--radix-popper-available-height)",
          "--radix-menubar-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-menubar-trigger-height": "var(--radix-popper-anchor-height)"
        }
      }
    );
  }
);
te.displayName = He;
function We(e, r) {
  return e.map((t, a) => e[(r + a) % e.length]);
}
var Xe = K, Ye = L, qe = B, Je = U, Qe = V, Ze = j, er = H, rr = W, tr = X, ar = Y, nr = q, ae = J, or = Q, sr = ee, ur = re, ir = te;
function Nr({
  className: e,
  ...r
}) {
  return /* @__PURE__ */ n(
    Xe,
    {
      "data-slot": "menubar",
      className: v(
        "bg-background flex h-9 items-center gap-1 rounded-md border p-1 shadow-xs",
        e
      ),
      ...r
    }
  );
}
function Ir({
  ...e
}) {
  return /* @__PURE__ */ n(Ye, { "data-slot": "menubar-menu", ...e });
}
function wr({
  ...e
}) {
  return /* @__PURE__ */ n(Ze, { "data-slot": "menubar-group", ...e });
}
function cr({
  ...e
}) {
  return /* @__PURE__ */ n(Je, { "data-slot": "menubar-portal", ...e });
}
function yr({
  ...e
}) {
  return /* @__PURE__ */ n(ar, { "data-slot": "menubar-radio-group", ...e });
}
function Ar({
  className: e,
  ...r
}) {
  return /* @__PURE__ */ n(
    qe,
    {
      "data-slot": "menubar-trigger",
      className: v(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex items-center rounded-sm px-2 py-1 text-sm font-medium outline-hidden select-none",
        e
      ),
      ...r
    }
  );
}
function Pr({
  className: e,
  align: r = "start",
  alignOffset: t = -4,
  sideOffset: a = 8,
  ...o
}) {
  return /* @__PURE__ */ n(cr, { children: /* @__PURE__ */ n(
    Qe,
    {
      "data-slot": "menubar-content",
      align: r,
      alignOffset: t,
      sideOffset: a,
      className: v(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[12rem] origin-(--radix-menubar-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-md",
        e
      ),
      ...o
    }
  ) });
}
function Er({
  className: e,
  inset: r,
  variant: t = "default",
  ...a
}) {
  return /* @__PURE__ */ n(
    rr,
    {
      "data-slot": "menubar-item",
      "data-inset": r,
      "data-variant": t,
      className: v(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...a
    }
  );
}
function Tr({
  className: e,
  children: r,
  checked: t,
  ...a
}) {
  return /* @__PURE__ */ y(
    tr,
    {
      "data-slot": "menubar-checkbox-item",
      className: v(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-xs py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      checked: t,
      ...a,
      children: [
        /* @__PURE__ */ n("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ n(ae, { children: /* @__PURE__ */ n(we, { className: "size-4" }) }) }),
        r
      ]
    }
  );
}
function Or({
  className: e,
  children: r,
  ...t
}) {
  return /* @__PURE__ */ y(
    nr,
    {
      "data-slot": "menubar-radio-item",
      className: v(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-xs py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...t,
      children: [
        /* @__PURE__ */ n("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ n(ae, { children: /* @__PURE__ */ n(ye, { className: "size-2 fill-current" }) }) }),
        r
      ]
    }
  );
}
function kr({
  className: e,
  inset: r,
  ...t
}) {
  return /* @__PURE__ */ n(
    er,
    {
      "data-slot": "menubar-label",
      "data-inset": r,
      className: v(
        "px-2 py-1.5 text-sm font-medium data-[inset]:pl-8",
        e
      ),
      ...t
    }
  );
}
function Gr({
  className: e,
  ...r
}) {
  return /* @__PURE__ */ n(
    or,
    {
      "data-slot": "menubar-separator",
      className: v("bg-border -mx-1 my-1 h-px", e),
      ...r
    }
  );
}
function Dr({
  className: e,
  ...r
}) {
  return /* @__PURE__ */ n(
    "span",
    {
      "data-slot": "menubar-shortcut",
      className: v(
        "text-muted-foreground ml-auto text-xs tracking-widest",
        e
      ),
      ...r
    }
  );
}
function zr({
  ...e
}) {
  return /* @__PURE__ */ n(sr, { "data-slot": "menubar-sub", ...e });
}
function $r({
  className: e,
  inset: r,
  children: t,
  ...a
}) {
  return /* @__PURE__ */ y(
    ur,
    {
      "data-slot": "menubar-sub-trigger",
      "data-inset": r,
      className: v(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-none select-none data-[inset]:pl-8",
        e
      ),
      ...a,
      children: [
        t,
        /* @__PURE__ */ n(Ae, { className: "ml-auto h-4 w-4" })
      ]
    }
  );
}
function Kr({
  className: e,
  ...r
}) {
  return /* @__PURE__ */ n(
    ir,
    {
      "data-slot": "menubar-sub-content",
      className: v(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-menubar-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg",
        e
      ),
      ...r
    }
  );
}
export {
  Nr as Menubar,
  Tr as MenubarCheckboxItem,
  Pr as MenubarContent,
  wr as MenubarGroup,
  Er as MenubarItem,
  kr as MenubarLabel,
  Ir as MenubarMenu,
  cr as MenubarPortal,
  yr as MenubarRadioGroup,
  Or as MenubarRadioItem,
  Gr as MenubarSeparator,
  Dr as MenubarShortcut,
  zr as MenubarSub,
  Kr as MenubarSubContent,
  $r as MenubarSubTrigger,
  Ar as MenubarTrigger
};
//# sourceMappingURL=menubar.js.map
