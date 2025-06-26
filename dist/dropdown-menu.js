import { jsx as t, jsxs as M } from "react/jsx-runtime";
import * as i from "react";
import { u as b, c as w } from "./index-CPxmoWFw.js";
import { b as j } from "./index-B1fTi8J3.js";
import { c as B } from "./index-UFb2E87s.js";
import { P as F } from "./index-CP7NBbfF.js";
import { c as D, R as H, P as W, C as X, I as q, L as J, S as Q, A as V, G as Y, f as Z, g as ee, h as oe, d as ne, e as re, b as te, a as ae, i as de } from "./index-CNSaAFk3.js";
import { u as h } from "./index-B_PLZIoC.js";
import { c as l } from "./utils-qaFjX9_3.js";
import { C as se } from "./chevron-right-pz9eCjj-.js";
import { C as ie } from "./circle-DHOdTDQh.js";
import { C as pe } from "./check-DXouwtzp.js";
var g = "DropdownMenu", [ue, Qe] = B(
  g,
  [D]
), p = D(), [ce, x] = ue(g), _ = (e) => {
  const {
    __scopeDropdownMenu: o,
    children: n,
    dir: r,
    open: a,
    defaultOpen: s,
    onOpenChange: c,
    modal: d = !0
  } = e, u = p(o), v = i.useRef(null), [m, f] = b({
    prop: a,
    defaultProp: s ?? !1,
    onChange: c,
    caller: g
  });
  return /* @__PURE__ */ t(
    ce,
    {
      scope: o,
      triggerId: h(),
      triggerRef: v,
      contentId: h(),
      open: m,
      onOpenChange: f,
      onOpenToggle: i.useCallback(() => f((U) => !U), [f]),
      modal: d,
      children: /* @__PURE__ */ t(H, { ...u, open: m, onOpenChange: f, dir: r, modal: d, children: n })
    }
  );
};
_.displayName = g;
var N = "DropdownMenuTrigger", R = i.forwardRef(
  (e, o) => {
    const { __scopeDropdownMenu: n, disabled: r = !1, ...a } = e, s = x(N, n), c = p(n);
    return /* @__PURE__ */ t(V, { asChild: !0, ...c, children: /* @__PURE__ */ t(
      F.button,
      {
        type: "button",
        id: s.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": s.open,
        "aria-controls": s.open ? s.contentId : void 0,
        "data-state": s.open ? "open" : "closed",
        "data-disabled": r ? "" : void 0,
        disabled: r,
        ...a,
        ref: j(o, s.triggerRef),
        onPointerDown: w(e.onPointerDown, (d) => {
          !r && d.button === 0 && d.ctrlKey === !1 && (s.onOpenToggle(), s.open || d.preventDefault());
        }),
        onKeyDown: w(e.onKeyDown, (d) => {
          r || (["Enter", " "].includes(d.key) && s.onOpenToggle(), d.key === "ArrowDown" && s.onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(d.key) && d.preventDefault());
        })
      }
    ) });
  }
);
R.displayName = N;
var le = "DropdownMenuPortal", C = (e) => {
  const { __scopeDropdownMenu: o, ...n } = e, r = p(o);
  return /* @__PURE__ */ t(W, { ...r, ...n });
};
C.displayName = le;
var I = "DropdownMenuContent", S = i.forwardRef(
  (e, o) => {
    const { __scopeDropdownMenu: n, ...r } = e, a = x(I, n), s = p(n), c = i.useRef(!1);
    return /* @__PURE__ */ t(
      X,
      {
        id: a.contentId,
        "aria-labelledby": a.triggerId,
        ...s,
        ...r,
        ref: o,
        onCloseAutoFocus: w(e.onCloseAutoFocus, (d) => {
          var u;
          c.current || (u = a.triggerRef.current) == null || u.focus(), c.current = !1, d.preventDefault();
        }),
        onInteractOutside: w(e.onInteractOutside, (d) => {
          const u = d.detail.originalEvent, v = u.button === 0 && u.ctrlKey === !0, m = u.button === 2 || v;
          (!a.modal || m) && (c.current = !0);
        }),
        style: {
          ...e.style,
          "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
          "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
          "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
        }
      }
    );
  }
);
S.displayName = I;
var me = "DropdownMenuGroup", y = i.forwardRef(
  (e, o) => {
    const { __scopeDropdownMenu: n, ...r } = e, a = p(n);
    return /* @__PURE__ */ t(Y, { ...a, ...r, ref: o });
  }
);
y.displayName = me;
var fe = "DropdownMenuLabel", P = i.forwardRef(
  (e, o) => {
    const { __scopeDropdownMenu: n, ...r } = e, a = p(n);
    return /* @__PURE__ */ t(J, { ...a, ...r, ref: o });
  }
);
P.displayName = fe;
var we = "DropdownMenuItem", A = i.forwardRef(
  (e, o) => {
    const { __scopeDropdownMenu: n, ...r } = e, a = p(n);
    return /* @__PURE__ */ t(q, { ...a, ...r, ref: o });
  }
);
A.displayName = we;
var ge = "DropdownMenuCheckboxItem", E = i.forwardRef((e, o) => {
  const { __scopeDropdownMenu: n, ...r } = e, a = p(n);
  return /* @__PURE__ */ t(ae, { ...a, ...r, ref: o });
});
E.displayName = ge;
var ve = "DropdownMenuRadioGroup", O = i.forwardRef((e, o) => {
  const { __scopeDropdownMenu: n, ...r } = e, a = p(n);
  return /* @__PURE__ */ t(ne, { ...a, ...r, ref: o });
});
O.displayName = ve;
var Me = "DropdownMenuRadioItem", T = i.forwardRef((e, o) => {
  const { __scopeDropdownMenu: n, ...r } = e, a = p(n);
  return /* @__PURE__ */ t(re, { ...a, ...r, ref: o });
});
T.displayName = Me;
var he = "DropdownMenuItemIndicator", k = i.forwardRef((e, o) => {
  const { __scopeDropdownMenu: n, ...r } = e, a = p(n);
  return /* @__PURE__ */ t(te, { ...a, ...r, ref: o });
});
k.displayName = he;
var be = "DropdownMenuSeparator", G = i.forwardRef((e, o) => {
  const { __scopeDropdownMenu: n, ...r } = e, a = p(n);
  return /* @__PURE__ */ t(Q, { ...a, ...r, ref: o });
});
G.displayName = be;
var De = "DropdownMenuArrow", xe = i.forwardRef(
  (e, o) => {
    const { __scopeDropdownMenu: n, ...r } = e, a = p(n);
    return /* @__PURE__ */ t(de, { ...a, ...r, ref: o });
  }
);
xe.displayName = De;
var _e = (e) => {
  const { __scopeDropdownMenu: o, children: n, open: r, onOpenChange: a, defaultOpen: s } = e, c = p(o), [d, u] = b({
    prop: r,
    defaultProp: s ?? !1,
    onChange: a,
    caller: "DropdownMenuSub"
  });
  return /* @__PURE__ */ t(Z, { ...c, open: d, onOpenChange: u, children: n });
}, Ne = "DropdownMenuSubTrigger", z = i.forwardRef((e, o) => {
  const { __scopeDropdownMenu: n, ...r } = e, a = p(n);
  return /* @__PURE__ */ t(oe, { ...a, ...r, ref: o });
});
z.displayName = Ne;
var Re = "DropdownMenuSubContent", $ = i.forwardRef((e, o) => {
  const { __scopeDropdownMenu: n, ...r } = e, a = p(n);
  return /* @__PURE__ */ t(
    ee,
    {
      ...a,
      ...r,
      ref: o,
      style: {
        ...e.style,
        "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
        "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
        "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }
  );
});
$.displayName = Re;
var Ce = _, Ie = R, L = C, Se = S, ye = y, Pe = P, Ae = A, Ee = E, Oe = O, Te = T, K = k, ke = G, Ge = _e, ze = z, $e = $;
function Ve({
  ...e
}) {
  return /* @__PURE__ */ t(Ce, { "data-slot": "dropdown-menu", ...e });
}
function Ye({
  ...e
}) {
  return /* @__PURE__ */ t(L, { "data-slot": "dropdown-menu-portal", ...e });
}
function Ze({
  ...e
}) {
  return /* @__PURE__ */ t(
    Ie,
    {
      "data-slot": "dropdown-menu-trigger",
      ...e
    }
  );
}
function eo({
  className: e,
  sideOffset: o = 4,
  ...n
}) {
  return /* @__PURE__ */ t(L, { children: /* @__PURE__ */ t(
    Se,
    {
      "data-slot": "dropdown-menu-content",
      sideOffset: o,
      className: l(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
        e
      ),
      ...n
    }
  ) });
}
function oo({
  ...e
}) {
  return /* @__PURE__ */ t(ye, { "data-slot": "dropdown-menu-group", ...e });
}
function no({
  className: e,
  inset: o,
  variant: n = "default",
  ...r
}) {
  return /* @__PURE__ */ t(
    Ae,
    {
      "data-slot": "dropdown-menu-item",
      "data-inset": o,
      "data-variant": n,
      className: l(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...r
    }
  );
}
function ro({
  className: e,
  children: o,
  checked: n,
  ...r
}) {
  return /* @__PURE__ */ M(
    Ee,
    {
      "data-slot": "dropdown-menu-checkbox-item",
      className: l(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      checked: n,
      ...r,
      children: [
        /* @__PURE__ */ t("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ t(K, { children: /* @__PURE__ */ t(pe, { className: "size-4" }) }) }),
        o
      ]
    }
  );
}
function to({
  ...e
}) {
  return /* @__PURE__ */ t(
    Oe,
    {
      "data-slot": "dropdown-menu-radio-group",
      ...e
    }
  );
}
function ao({
  className: e,
  children: o,
  ...n
}) {
  return /* @__PURE__ */ M(
    Te,
    {
      "data-slot": "dropdown-menu-radio-item",
      className: l(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...n,
      children: [
        /* @__PURE__ */ t("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ t(K, { children: /* @__PURE__ */ t(ie, { className: "size-2 fill-current" }) }) }),
        o
      ]
    }
  );
}
function so({
  className: e,
  inset: o,
  ...n
}) {
  return /* @__PURE__ */ t(
    Pe,
    {
      "data-slot": "dropdown-menu-label",
      "data-inset": o,
      className: l(
        "px-2 py-1.5 text-sm font-medium data-[inset]:pl-8",
        e
      ),
      ...n
    }
  );
}
function io({
  className: e,
  ...o
}) {
  return /* @__PURE__ */ t(
    ke,
    {
      "data-slot": "dropdown-menu-separator",
      className: l("bg-border -mx-1 my-1 h-px", e),
      ...o
    }
  );
}
function po({
  className: e,
  ...o
}) {
  return /* @__PURE__ */ t(
    "span",
    {
      "data-slot": "dropdown-menu-shortcut",
      className: l(
        "text-muted-foreground ml-auto text-xs tracking-widest",
        e
      ),
      ...o
    }
  );
}
function uo({
  ...e
}) {
  return /* @__PURE__ */ t(Ge, { "data-slot": "dropdown-menu-sub", ...e });
}
function co({
  className: e,
  inset: o,
  children: n,
  ...r
}) {
  return /* @__PURE__ */ M(
    ze,
    {
      "data-slot": "dropdown-menu-sub-trigger",
      "data-inset": o,
      className: l(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8",
        e
      ),
      ...r,
      children: [
        n,
        /* @__PURE__ */ t(se, { className: "ml-auto size-4" })
      ]
    }
  );
}
function lo({
  className: e,
  ...o
}) {
  return /* @__PURE__ */ t(
    $e,
    {
      "data-slot": "dropdown-menu-sub-content",
      className: l(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg",
        e
      ),
      ...o
    }
  );
}
export {
  Ve as DropdownMenu,
  ro as DropdownMenuCheckboxItem,
  eo as DropdownMenuContent,
  oo as DropdownMenuGroup,
  no as DropdownMenuItem,
  so as DropdownMenuLabel,
  Ye as DropdownMenuPortal,
  to as DropdownMenuRadioGroup,
  ao as DropdownMenuRadioItem,
  io as DropdownMenuSeparator,
  po as DropdownMenuShortcut,
  uo as DropdownMenuSub,
  lo as DropdownMenuSubContent,
  co as DropdownMenuSubTrigger,
  Ze as DropdownMenuTrigger
};
//# sourceMappingURL=dropdown-menu.js.map
