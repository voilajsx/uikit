import { jsx as n, jsxs as y } from "react/jsx-runtime";
import * as s from "react";
import { u as ne, c as oe } from "./index-DRTnvS9P.js";
import { u as k, c as x } from "./index-CPxmoWFw.js";
import { u as se } from "./index-CRtwelBU.js";
import { c as ue } from "./index-UFb2E87s.js";
import { u as S } from "./index-B_PLZIoC.js";
import { c as ie, C as ce, I as de, R as le, S as pe, A as me, a as be, b as fe, d as ge, e as ve, L as Me, f as he, g as xe, h as _e, P as Re, G as Ce, i as Se } from "./index-c_E53tLm.js";
import { c as G, R as Ne, I as Ie } from "./index-TGy1wBIr.js";
import { P as D } from "./index-IjmGKHPz.js";
import { c as M } from "./utils-qaFjX9_3.js";
import { C as we } from "./check-DXouwtzp.js";
import { C as ye } from "./circle-DHOdTDQh.js";
import { C as Ae } from "./chevron-right-pz9eCjj-.js";
var R = "Menubar", [N, Pe, Ee] = oe(R), [z, Sr] = ue(R, [
  Ee,
  G
]), l = ie(), $ = G(), [Te, A] = z(R), K = s.forwardRef(
  (e, r) => {
    const {
      __scopeMenubar: t,
      value: a,
      onValueChange: o,
      defaultValue: h,
      loop: p = !0,
      dir: c,
      ...u
    } = e, b = ne(c), i = $(t), [g, m] = k({
      prop: a,
      onChange: o,
      defaultProp: h ?? "",
      caller: R
    }), [v, d] = s.useState(null);
    return /* @__PURE__ */ n(
      Te,
      {
        scope: t,
        value: g,
        onMenuOpen: s.useCallback(
          (f) => {
            m(f), d(f);
          },
          [m]
        ),
        onMenuClose: s.useCallback(() => m(""), [m]),
        onMenuToggle: s.useCallback(
          (f) => {
            m((E) => E ? "" : f), d(f);
          },
          [m]
        ),
        dir: b,
        loop: p,
        children: /* @__PURE__ */ n(N.Provider, { scope: t, children: /* @__PURE__ */ n(N.Slot, { scope: t, children: /* @__PURE__ */ n(
          Ne,
          {
            asChild: !0,
            ...i,
            orientation: "horizontal",
            loop: p,
            dir: b,
            currentTabStopId: v,
            onCurrentTabStopIdChange: d,
            children: /* @__PURE__ */ n(D.div, { role: "menubar", ...u, ref: r })
          }
        ) }) })
      }
    );
  }
);
K.displayName = R;
var P = "MenubarMenu", [Oe, F] = z(P), L = (e) => {
  const { __scopeMenubar: r, value: t, ...a } = e, o = S(), h = t || o || "LEGACY_REACT_AUTO_VALUE", p = A(P, r), c = l(r), u = s.useRef(null), b = s.useRef(!1), i = p.value === h;
  return s.useEffect(() => {
    i || (b.current = !1);
  }, [i]), /* @__PURE__ */ n(
    Oe,
    {
      scope: r,
      value: h,
      triggerId: S(),
      triggerRef: u,
      contentId: S(),
      wasKeyboardTriggerOpenRef: b,
      children: /* @__PURE__ */ n(
        le,
        {
          ...c,
          open: i,
          onOpenChange: (g) => {
            g || p.onMenuClose();
          },
          modal: !1,
          dir: p.dir,
          ...a
        }
      )
    }
  );
};
L.displayName = P;
var I = "MenubarTrigger", B = s.forwardRef(
  (e, r) => {
    const { __scopeMenubar: t, disabled: a = !1, ...o } = e, h = $(t), p = l(t), c = A(I, t), u = F(I, t), b = s.useRef(null), i = se(r, b, u.triggerRef), [g, m] = s.useState(!1), v = c.value === u.value;
    return /* @__PURE__ */ n(N.ItemSlot, { scope: t, value: u.value, disabled: a, children: /* @__PURE__ */ n(
      Ie,
      {
        asChild: !0,
        ...h,
        focusable: !a,
        tabStopId: u.value,
        children: /* @__PURE__ */ n(me, { asChild: !0, ...p, children: /* @__PURE__ */ n(
          D.button,
          {
            type: "button",
            role: "menuitem",
            id: u.triggerId,
            "aria-haspopup": "menu",
            "aria-expanded": v,
            "aria-controls": v ? u.contentId : void 0,
            "data-highlighted": g ? "" : void 0,
            "data-state": v ? "open" : "closed",
            "data-disabled": a ? "" : void 0,
            disabled: a,
            ...o,
            ref: i,
            onPointerDown: x(e.onPointerDown, (d) => {
              !a && d.button === 0 && d.ctrlKey === !1 && (c.onMenuOpen(u.value), v || d.preventDefault());
            }),
            onPointerEnter: x(e.onPointerEnter, () => {
              var f;
              !!c.value && !v && (c.onMenuOpen(u.value), (f = b.current) == null || f.focus());
            }),
            onKeyDown: x(e.onKeyDown, (d) => {
              a || (["Enter", " "].includes(d.key) && c.onMenuToggle(u.value), d.key === "ArrowDown" && c.onMenuOpen(u.value), ["Enter", " ", "ArrowDown"].includes(d.key) && (u.wasKeyboardTriggerOpenRef.current = !0, d.preventDefault()));
            }),
            onFocus: x(e.onFocus, () => m(!0)),
            onBlur: x(e.onBlur, () => m(!1))
          }
        ) })
      }
    ) });
  }
);
B.displayName = I;
var ke = "MenubarPortal", U = (e) => {
  const { __scopeMenubar: r, ...t } = e, a = l(r);
  return /* @__PURE__ */ n(Re, { ...a, ...t });
};
U.displayName = ke;
var w = "MenubarContent", V = s.forwardRef(
  (e, r) => {
    const { __scopeMenubar: t, align: a = "start", ...o } = e, h = l(t), p = A(w, t), c = F(w, t), u = Pe(t), b = s.useRef(!1);
    return /* @__PURE__ */ n(
      ce,
      {
        id: c.contentId,
        "aria-labelledby": c.triggerId,
        "data-radix-menubar-content": "",
        ...h,
        ...o,
        ref: r,
        align: a,
        onCloseAutoFocus: x(e.onCloseAutoFocus, (i) => {
          var m;
          !!!p.value && !b.current && ((m = c.triggerRef.current) == null || m.focus()), b.current = !1, i.preventDefault();
        }),
        onFocusOutside: x(e.onFocusOutside, (i) => {
          const g = i.target;
          u().some((v) => {
            var d;
            return (d = v.ref.current) == null ? void 0 : d.contains(g);
          }) && i.preventDefault();
        }),
        onInteractOutside: x(e.onInteractOutside, () => {
          b.current = !0;
        }),
        onEntryFocus: (i) => {
          c.wasKeyboardTriggerOpenRef.current || i.preventDefault();
        },
        onKeyDown: x(
          e.onKeyDown,
          (i) => {
            if (["ArrowRight", "ArrowLeft"].includes(i.key)) {
              const g = i.target, m = g.hasAttribute("data-radix-menubar-subtrigger"), v = g.closest("[data-radix-menubar-content]") !== i.currentTarget, f = (p.dir === "rtl" ? "ArrowRight" : "ArrowLeft") === i.key;
              if (!f && m || v && f) return;
              let _ = u().filter((C) => !C.disabled).map((C) => C.value);
              f && _.reverse();
              const T = _.indexOf(c.value);
              _ = p.loop ? We(_, T + 1) : _.slice(T + 1);
              const [O] = _;
              O && p.onMenuOpen(O);
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
    const { __scopeMenubar: t, ...a } = e, o = l(t);
    return /* @__PURE__ */ n(Ce, { ...o, ...a, ref: r });
  }
);
j.displayName = Ge;
var De = "MenubarLabel", H = s.forwardRef(
  (e, r) => {
    const { __scopeMenubar: t, ...a } = e, o = l(t);
    return /* @__PURE__ */ n(Me, { ...o, ...a, ref: r });
  }
);
H.displayName = De;
var ze = "MenubarItem", W = s.forwardRef(
  (e, r) => {
    const { __scopeMenubar: t, ...a } = e, o = l(t);
    return /* @__PURE__ */ n(de, { ...o, ...a, ref: r });
  }
);
W.displayName = ze;
var $e = "MenubarCheckboxItem", X = s.forwardRef(
  (e, r) => {
    const { __scopeMenubar: t, ...a } = e, o = l(t);
    return /* @__PURE__ */ n(be, { ...o, ...a, ref: r });
  }
);
X.displayName = $e;
var Ke = "MenubarRadioGroup", Y = s.forwardRef(
  (e, r) => {
    const { __scopeMenubar: t, ...a } = e, o = l(t);
    return /* @__PURE__ */ n(ge, { ...o, ...a, ref: r });
  }
);
Y.displayName = Ke;
var Fe = "MenubarRadioItem", q = s.forwardRef(
  (e, r) => {
    const { __scopeMenubar: t, ...a } = e, o = l(t);
    return /* @__PURE__ */ n(ve, { ...o, ...a, ref: r });
  }
);
q.displayName = Fe;
var Le = "MenubarItemIndicator", J = s.forwardRef((e, r) => {
  const { __scopeMenubar: t, ...a } = e, o = l(t);
  return /* @__PURE__ */ n(fe, { ...o, ...a, ref: r });
});
J.displayName = Le;
var Be = "MenubarSeparator", Q = s.forwardRef(
  (e, r) => {
    const { __scopeMenubar: t, ...a } = e, o = l(t);
    return /* @__PURE__ */ n(pe, { ...o, ...a, ref: r });
  }
);
Q.displayName = Be;
var Ue = "MenubarArrow", Ve = s.forwardRef(
  (e, r) => {
    const { __scopeMenubar: t, ...a } = e, o = l(t);
    return /* @__PURE__ */ n(Se, { ...o, ...a, ref: r });
  }
);
Ve.displayName = Ue;
var Z = "MenubarSub", ee = (e) => {
  const { __scopeMenubar: r, children: t, open: a, onOpenChange: o, defaultOpen: h } = e, p = l(r), [c, u] = k({
    prop: a,
    defaultProp: h ?? !1,
    onChange: o,
    caller: Z
  });
  return /* @__PURE__ */ n(he, { ...p, open: c, onOpenChange: u, children: t });
};
ee.displayName = Z;
var je = "MenubarSubTrigger", re = s.forwardRef(
  (e, r) => {
    const { __scopeMenubar: t, ...a } = e, o = l(t);
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
    const { __scopeMenubar: t, ...a } = e, o = l(t);
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
      className: M(
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
      className: M(
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
      className: M(
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
      className: M(
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
      className: M(
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
      className: M(
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
      className: M(
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
      className: M("bg-border -mx-1 my-1 h-px", e),
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
      className: M(
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
      className: M(
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
      className: M(
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
