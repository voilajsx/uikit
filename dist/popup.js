import { jsxs as o, jsx as a, Fragment as z } from "react/jsx-runtime";
import { forwardRef as b } from "react";
import { c as i } from "./index-Bke1qZdk.js";
import { c as r } from "./utils-CwJPJKOE.js";
import { Button as x } from "./button.js";
import { Separator as V } from "./separator.js";
import { C as k } from "./chevron-left-C1pkx4AF.js";
import { X as C } from "./x-BxwubQiM.js";
const I = i(
  "flex flex-col border rounded-lg overflow-hidden",
  {
    variants: {
      scheme: {
        modal: "shadow-lg",
        drawer: "shadow-md h-full rounded-none",
        floating: "shadow-xl"
      },
      tone: {
        clean: "bg-background border-border",
        subtle: "bg-muted/30 border-border/50",
        brand: "bg-primary/5 border-primary/20",
        contrast: "bg-zinc-900 border-zinc-700 text-zinc-100"
      },
      size: {
        sm: "w-72 max-h-80",
        // 288px × 320px - Ultra compact
        md: "w-80 max-h-96",
        // 320px × 384px - Standard popup
        lg: "w-96 max-h-[32rem]",
        // 384px × 512px - Large popup
        xl: "w-[28rem] max-h-[36rem]",
        // 448px × 576px - Extra large
        full: "min-w-72 max-w-lg max-h-[80vh]"
        // Responsive
      },
      position: {
        sticky: "sticky top-0 z-50",
        fixed: "fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50",
        relative: "relative"
      }
    },
    defaultVariants: {
      scheme: "modal",
      tone: "clean",
      size: "md",
      position: "relative"
    }
  }
), N = i(
  "flex items-center gap-3",
  {
    variants: {
      tone: {
        clean: "",
        subtle: "",
        brand: "",
        contrast: ""
      },
      size: {
        sm: "p-2",
        md: "p-3",
        lg: "p-4",
        xl: "p-4",
        full: "p-4"
      }
    },
    defaultVariants: {
      tone: "clean",
      size: "md"
    }
  }
), P = i(
  "flex-1",
  {
    variants: {
      tone: {
        clean: "",
        subtle: "",
        brand: "",
        contrast: ""
      },
      size: {
        sm: "p-2",
        md: "p-3",
        lg: "p-4",
        xl: "p-4",
        full: "p-4"
      },
      scrollable: {
        true: "overflow-y-auto overflow-x-hidden",
        false: ""
      }
    },
    defaultVariants: {
      tone: "clean",
      size: "md",
      scrollable: !0
    }
  }
), F = i(
  "border-t",
  {
    variants: {
      tone: {
        clean: "border-border",
        subtle: "border-border/50",
        brand: "border-primary/20",
        contrast: "border-zinc-700"
      },
      size: {
        sm: "p-2",
        md: "p-3",
        lg: "p-4",
        xl: "p-4",
        full: "p-4"
      }
    },
    defaultVariants: {
      tone: "clean",
      size: "md"
    }
  }
), f = i(
  "h-8 w-8 p-0 shrink-0",
  {
    variants: {
      tone: {
        clean: "text-muted-foreground hover:text-foreground hover:bg-muted",
        subtle: "text-muted-foreground hover:text-foreground hover:bg-background/50",
        brand: "text-primary/80 hover:text-primary hover:bg-primary/10",
        contrast: "text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800"
      }
    },
    defaultVariants: {
      tone: "clean"
    }
  }
), H = i(
  "font-semibold truncate",
  {
    variants: {
      size: {
        sm: "text-xs",
        md: "text-sm",
        lg: "text-base",
        xl: "text-base",
        full: "text-base"
      },
      tone: {
        clean: "text-foreground",
        subtle: "text-foreground",
        brand: "text-foreground",
        contrast: "text-zinc-100"
      }
    },
    defaultVariants: {
      size: "md",
      tone: "clean"
    }
  }
), L = i(
  "truncate mt-0.5",
  {
    variants: {
      size: {
        sm: "text-xs",
        md: "text-xs",
        lg: "text-sm",
        xl: "text-sm",
        full: "text-sm"
      },
      tone: {
        clean: "text-muted-foreground",
        subtle: "text-muted-foreground",
        brand: "text-muted-foreground",
        contrast: "text-zinc-400"
      }
    },
    defaultVariants: {
      size: "md",
      tone: "clean"
    }
  }
), j = b(({
  scheme: s = "modal",
  tone: e = "clean",
  size: t = "md",
  position: d = "relative",
  title: n,
  subtitle: l,
  logo: c,
  badge: m,
  headerActions: p,
  showBack: u = !1,
  showClose: h = !1,
  showDivider: v = !0,
  onBack: g,
  onClose: S,
  footer: w,
  scrollable: X = !0,
  className: q,
  style: B,
  children: D
}, E) => {
  const y = n || l || c || m || p || u || h;
  return /* @__PURE__ */ o(
    "div",
    {
      ref: E,
      className: r(I({ scheme: s, tone: e, size: t, position: d }), q),
      style: B,
      children: [
        y && /* @__PURE__ */ o(z, { children: [
          /* @__PURE__ */ o("div", { className: r(N({ tone: e, size: t })), children: [
            u && /* @__PURE__ */ a(
              x,
              {
                variant: "ghost",
                className: r(f({ tone: e })),
                onClick: g,
                "aria-label": "Go back",
                children: /* @__PURE__ */ a(k, { className: "h-4 w-4" })
              }
            ),
            c && /* @__PURE__ */ a("div", { className: "shrink-0", children: c }),
            /* @__PURE__ */ o("div", { className: "flex-1 min-w-0", children: [
              n && /* @__PURE__ */ o("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ a("h1", { className: r(H({ size: t, tone: e })), children: n }),
                m && m
              ] }),
              l && /* @__PURE__ */ a("p", { className: r(L({ size: t, tone: e })), children: l })
            ] }),
            p && /* @__PURE__ */ a("div", { className: "shrink-0 flex items-center gap-1", children: p }),
            h && /* @__PURE__ */ a(
              x,
              {
                variant: "ghost",
                className: r(f({ tone: e })),
                onClick: S,
                "aria-label": "Close",
                children: /* @__PURE__ */ a(C, { className: "h-4 w-4" })
              }
            )
          ] }),
          v && /* @__PURE__ */ a(V, { className: r(
            e === "subtle" && "bg-border/50",
            e === "brand" && "bg-primary/20",
            e === "contrast" && "bg-zinc-700"
          ) })
        ] }),
        /* @__PURE__ */ a(
          "div",
          {
            className: r(
              P({ tone: e, size: t, scrollable: X }),
              !y && N({ tone: e, size: t })
            ),
            children: D
          }
        ),
        w && /* @__PURE__ */ o(z, { children: [
          /* @__PURE__ */ a(V, { className: r(
            e === "subtle" && "bg-border/50",
            e === "brand" && "bg-primary/20",
            e === "contrast" && "bg-zinc-700"
          ) }),
          /* @__PURE__ */ a("div", { className: r(F({ tone: e, size: t })), children: w })
        ] })
      ]
    }
  );
});
j.displayName = "PopupLayout";
const G = b(({
  tone: s = "clean",
  size: e = "md",
  title: t,
  subtitle: d,
  logo: n,
  badge: l,
  actions: c,
  showBack: m = !1,
  showClose: p = !1,
  onBack: u,
  onClose: h,
  className: v
}, g) => /* @__PURE__ */ o("div", { ref: g, className: r(N({ tone: s, size: e }), v), children: [
  m && /* @__PURE__ */ a(x, { variant: "ghost", className: r(f({ tone: s })), onClick: u, children: /* @__PURE__ */ a(k, { className: "h-4 w-4" }) }),
  n && /* @__PURE__ */ a("div", { className: "shrink-0", children: n }),
  /* @__PURE__ */ o("div", { className: "flex-1 min-w-0", children: [
    t && /* @__PURE__ */ o("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ a("h1", { className: r(H({ size: e, tone: s })), children: t }),
      l && l
    ] }),
    d && /* @__PURE__ */ a("p", { className: r(L({ size: e, tone: s })), children: d })
  ] }),
  c && /* @__PURE__ */ a("div", { className: "shrink-0", children: c }),
  p && /* @__PURE__ */ a(x, { variant: "ghost", className: r(f({ tone: s })), onClick: h, children: /* @__PURE__ */ a(C, { className: "h-4 w-4" }) })
] }));
G.displayName = "PopupHeader";
const O = b(({
  tone: s = "clean",
  size: e = "md",
  scrollable: t = !0,
  className: d,
  children: n
}, l) => /* @__PURE__ */ a(
  "div",
  {
    ref: l,
    className: r(P({ tone: s, size: e, scrollable: t }), d),
    children: n
  }
));
O.displayName = "PopupContent";
const R = b(({
  tone: s = "clean",
  size: e = "md",
  actions: t,
  className: d,
  children: n
}, l) => /* @__PURE__ */ a("div", { ref: l, className: r(F({ tone: s, size: e }), d), children: t || n }));
R.displayName = "PopupFooter";
const Z = Object.assign(j, {
  Header: G,
  Content: O,
  Footer: R
});
export {
  O as PopupContent,
  R as PopupFooter,
  G as PopupHeader,
  Z as PopupLayout
};
//# sourceMappingURL=popup.js.map
