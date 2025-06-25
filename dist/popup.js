import { jsxs as m, jsx as a, Fragment as w } from "react/jsx-runtime";
import { forwardRef as x } from "react";
import { c as o } from "./index-DACAHwoB.js";
import { c as r } from "./utils-qaFjX9_3.js";
import { Button as f } from "./button.js";
import { Separator as z } from "./separator.js";
import { C as V } from "./chevron-left-C1pkx4AF.js";
import { X as C } from "./x-BxwubQiM.js";
const E = o(
  "flex flex-col border rounded-lg overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-background border-border shadow-lg",
        muted: "bg-muted/30 border-border/50 shadow-md",
        primary: "bg-primary/5 border-primary/20 shadow-lg",
        black: "bg-zinc-900 border-zinc-700 shadow-xl text-zinc-100"
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
      sticky: {
        true: "sticky top-0 z-50",
        false: "relative"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "md",
      sticky: !1
    }
  }
), N = o(
  "flex items-center gap-3",
  {
    variants: {
      variant: {
        default: "",
        muted: "",
        primary: "",
        black: ""
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
      variant: "default",
      size: "md"
    }
  }
), P = o(
  "flex-1",
  {
    variants: {
      variant: {
        default: "",
        muted: "",
        primary: "",
        black: ""
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
      variant: "default",
      size: "md",
      scrollable: !0
    }
  }
), F = o(
  "border-t",
  {
    variants: {
      variant: {
        default: "border-border",
        muted: "border-border/50",
        primary: "border-primary/20",
        black: "border-zinc-700"
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
      variant: "default",
      size: "md"
    }
  }
), h = o(
  "h-8 w-8 p-0 shrink-0",
  {
    variants: {
      variant: {
        default: "text-muted-foreground hover:text-foreground hover:bg-muted",
        muted: "text-muted-foreground hover:text-foreground hover:bg-background/50",
        primary: "text-primary/80 hover:text-primary hover:bg-primary/10",
        black: "text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
), H = o(
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
      variant: {
        default: "text-foreground",
        muted: "text-foreground",
        primary: "text-foreground",
        black: "text-zinc-100"
      }
    },
    defaultVariants: {
      size: "md",
      variant: "default"
    }
  }
), L = o(
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
      variant: {
        default: "text-muted-foreground",
        muted: "text-muted-foreground",
        primary: "text-muted-foreground",
        black: "text-zinc-400"
      }
    },
    defaultVariants: {
      size: "md",
      variant: "default"
    }
  }
), j = x(({
  variant: e = "default",
  size: t = "md",
  sticky: i = !1,
  title: l,
  subtitle: s,
  logo: d,
  badge: n,
  headerActions: c,
  showBack: u = !1,
  showClose: p = !1,
  showDivider: b = !0,
  onBack: g,
  onClose: v,
  footer: y,
  scrollable: S = !0,
  className: X,
  style: q,
  children: B
}, D) => {
  const k = l || s || d || n || c || u || p;
  return /* @__PURE__ */ m(
    "div",
    {
      ref: D,
      className: r(E({ variant: e, size: t, sticky: i }), X),
      style: q,
      children: [
        k && /* @__PURE__ */ m(w, { children: [
          /* @__PURE__ */ m("div", { className: r(N({ variant: e, size: t })), children: [
            u && /* @__PURE__ */ a(
              f,
              {
                variant: "ghost",
                className: r(h({ variant: e })),
                onClick: g,
                "aria-label": "Go back",
                children: /* @__PURE__ */ a(V, { className: "h-4 w-4" })
              }
            ),
            d && /* @__PURE__ */ a("div", { className: "shrink-0", children: d }),
            /* @__PURE__ */ m("div", { className: "flex-1 min-w-0", children: [
              l && /* @__PURE__ */ m("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ a("h1", { className: r(H({ size: t, variant: e })), children: l }),
                n && n
              ] }),
              s && /* @__PURE__ */ a("p", { className: r(L({ size: t, variant: e })), children: s })
            ] }),
            c && /* @__PURE__ */ a("div", { className: "shrink-0 flex items-center gap-1", children: c }),
            p && /* @__PURE__ */ a(
              f,
              {
                variant: "ghost",
                className: r(h({ variant: e })),
                onClick: v,
                "aria-label": "Close",
                children: /* @__PURE__ */ a(C, { className: "h-4 w-4" })
              }
            )
          ] }),
          b && /* @__PURE__ */ a(z, { className: r(
            e === "muted" && "bg-border/50",
            e === "primary" && "bg-primary/20",
            e === "black" && "bg-zinc-700"
          ) })
        ] }),
        /* @__PURE__ */ a(
          "div",
          {
            className: r(
              P({ variant: e, size: t, scrollable: S }),
              !k && N({ variant: e, size: t })
            ),
            children: B
          }
        ),
        y && /* @__PURE__ */ m(w, { children: [
          /* @__PURE__ */ a(z, { className: r(
            e === "muted" && "bg-border/50",
            e === "primary" && "bg-primary/20",
            e === "black" && "bg-zinc-700"
          ) }),
          /* @__PURE__ */ a("div", { className: r(F({ variant: e, size: t })), children: y })
        ] })
      ]
    }
  );
});
j.displayName = "PopupLayout";
const G = x(({
  variant: e = "default",
  size: t = "md",
  title: i,
  subtitle: l,
  logo: s,
  badge: d,
  actions: n,
  showBack: c = !1,
  showClose: u = !1,
  onBack: p,
  onClose: b,
  className: g
}, v) => /* @__PURE__ */ m("div", { ref: v, className: r(N({ variant: e, size: t }), g), children: [
  c && /* @__PURE__ */ a(f, { variant: "ghost", className: r(h({ variant: e })), onClick: p, children: /* @__PURE__ */ a(V, { className: "h-4 w-4" }) }),
  s && /* @__PURE__ */ a("div", { className: "shrink-0", children: s }),
  /* @__PURE__ */ m("div", { className: "flex-1 min-w-0", children: [
    i && /* @__PURE__ */ m("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ a("h1", { className: r(H({ size: t, variant: e })), children: i }),
      d && d
    ] }),
    l && /* @__PURE__ */ a("p", { className: r(L({ size: t, variant: e })), children: l })
  ] }),
  n && /* @__PURE__ */ a("div", { className: "shrink-0", children: n }),
  u && /* @__PURE__ */ a(f, { variant: "ghost", className: r(h({ variant: e })), onClick: b, children: /* @__PURE__ */ a(C, { className: "h-4 w-4" }) })
] }));
G.displayName = "PopupHeader";
const O = x(({
  variant: e = "default",
  size: t = "md",
  scrollable: i = !0,
  className: l,
  children: s
}, d) => /* @__PURE__ */ a(
  "div",
  {
    ref: d,
    className: r(P({ variant: e, size: t, scrollable: i }), l),
    children: s
  }
));
O.displayName = "PopupContent";
const R = x(({
  variant: e = "default",
  size: t = "md",
  actions: i,
  className: l,
  children: s
}, d) => /* @__PURE__ */ a("div", { ref: d, className: r(F({ variant: e, size: t }), l), children: i || s }));
R.displayName = "PopupFooter";
const Y = Object.assign(j, {
  Header: G,
  Content: O,
  Footer: R
});
export {
  O as PopupContent,
  R as PopupFooter,
  G as PopupHeader,
  Y as PopupLayout
};
//# sourceMappingURL=popup.js.map
