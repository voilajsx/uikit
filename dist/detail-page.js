import { jsx as e, jsxs as a, Fragment as P } from "react/jsx-runtime";
import { Card as L, CardContent as D, CardHeader as q, CardTitle as H } from "./card.js";
import { c as C } from "./utils-qaFjX9_3.js";
import { Button as h } from "./button.js";
import { Badge as F } from "./badge.js";
import { Alert as Y, AlertDescription as K } from "./alert.js";
import { Dialog as Q, DialogContent as R, DialogHeader as W, DialogTitle as X, DialogDescription as Z, DialogFooter as _ } from "./dialog.js";
import { TooltipProvider as ee, Tooltip as y, TooltipTrigger as v, TooltipContent as w } from "./tooltip.js";
import { ValidatedInput as x, FormActions as te, ValidatedSelect as ae, ValidatedTextarea as re } from "./form.js";
import { c as f } from "./createLucideIcon-B45kRl5r.js";
import { E as ne } from "./ellipsis-BhAoKPVk.js";
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ie = f("ArrowLeft", [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const se = f("CircleCheckBig", [
  ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const le = f("Copy", [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ce = f("Trash2", [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
  ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
  ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const I = f("TriangleAlert", [
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
      key: "wmoenq"
    }
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
]), B = (t, r) => {
  if (r.formatter)
    return r.formatter(t);
  switch (r.type) {
    case "date":
      return new Date(t).toLocaleDateString();
    case "datetime":
      return new Date(t).toLocaleString();
    case "boolean":
      return t ? "✅ Yes" : "❌ No";
    case "number":
      return typeof t == "number" ? t.toLocaleString() : t;
    case "json":
      return /* @__PURE__ */ e("pre", { className: "text-xs bg-muted p-2 rounded overflow-auto max-h-32", children: JSON.stringify(t, null, 2) });
    case "badge":
      return /* @__PURE__ */ e(F, { variant: r.badgeVariant || "default", children: String(t) });
    default:
      return String(t);
  }
}, de = (t) => {
  navigator.clipboard.writeText(t);
};
function Le({
  title: t,
  subtitle: r,
  icon: n,
  onBack: s,
  status: l,
  actions: c = [],
  formSections: m = [],
  metadataFields: d = [],
  sidebarCards: p = [],
  isEditing: o = !1,
  onFormChange: N,
  onSave: g,
  onCancel: u,
  saveText: b = "Save Changes",
  cancelText: O = "Cancel",
  saving: k = !1,
  formValid: $ = !0,
  loading: T = !1,
  error: S,
  onClearError: A,
  children: E,
  className: G = ""
}) {
  const j = c.find((i) => i.variant === "destructive"), z = c.find((i) => i.id === "edit"), M = c.filter((i) => i.variant !== "destructive" && i.id !== "edit"), V = [
    ...j ? [j] : [],
    ...z && !o ? [z] : [],
    ...M.filter((i) => i.position !== "secondary")
  ], J = M.filter((i) => i.position === "secondary");
  return /* @__PURE__ */ e(ee, { children: /* @__PURE__ */ e("div", { className: C("min-h-screen p-6", G), children: /* @__PURE__ */ a("div", { className: "max-w-7xl mx-auto space-y-8", children: [
    /* @__PURE__ */ e("div", { children: /* @__PURE__ */ a("div", { className: "flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 lg:gap-6", children: [
      /* @__PURE__ */ a("div", { className: "flex items-center gap-3 min-w-0 flex-1", children: [
        n && /* @__PURE__ */ e("div", { className: "w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0", children: /* @__PURE__ */ e(n, { className: "w-6 h-6 text-primary" }) }),
        /* @__PURE__ */ a("div", { className: "min-w-0 flex-1", children: [
          /* @__PURE__ */ e("h1", { className: "text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent leading-tight", children: T ? "Loading..." : t }),
          r && /* @__PURE__ */ e("p", { className: "text-sm text-muted-foreground mt-0.5 leading-relaxed", children: r })
        ] })
      ] }),
      /* @__PURE__ */ a("div", { className: "flex items-center gap-2 shrink-0 lg:ml-4", children: [
        /* @__PURE__ */ a(y, { children: [
          /* @__PURE__ */ e(v, { asChild: !0, children: /* @__PURE__ */ a(
            h,
            {
              variant: "outline",
              size: "sm",
              onClick: s,
              className: "flex items-center gap-1.5",
              children: [
                /* @__PURE__ */ e(ie, { className: "w-4 h-4" }),
                /* @__PURE__ */ e("span", { className: "hidden sm:inline", children: "Back" })
              ]
            }
          ) }),
          /* @__PURE__ */ e(w, { side: "bottom", children: "Go back" })
        ] }),
        o && g && u ? /* @__PURE__ */ a("form", { onSubmit: (i) => {
          i.preventDefault(), g();
        }, className: "flex items-center gap-2", children: [
          /* @__PURE__ */ e(
            h,
            {
              type: "button",
              variant: "outline",
              size: "sm",
              onClick: u,
              disabled: k,
              children: O
            }
          ),
          /* @__PURE__ */ e(
            h,
            {
              type: "submit",
              size: "sm",
              disabled: k || !$,
              className: "min-w-20",
              children: k ? /* @__PURE__ */ a("div", { className: "flex items-center gap-1", children: [
                /* @__PURE__ */ e("div", { className: "w-3 h-3 border border-current border-t-transparent rounded-full animate-spin" }),
                /* @__PURE__ */ e("span", { className: "hidden sm:inline", children: "Saving..." })
              ] }) : b
            }
          )
        ] }) : /* @__PURE__ */ a(P, { children: [
          V.slice(0, 2).map((i) => /* @__PURE__ */ a(y, { children: [
            /* @__PURE__ */ e(v, { asChild: !0, children: /* @__PURE__ */ a(
              h,
              {
                variant: i.variant || "default",
                size: "sm",
                onClick: i.onClick,
                disabled: i.disabled || T,
                className: "flex items-center gap-1.5",
                children: [
                  /* @__PURE__ */ e(i.icon, { className: "w-4 h-4" }),
                  /* @__PURE__ */ e("span", { className: "hidden sm:inline", children: i.loading ? "Loading..." : i.label })
                ]
              }
            ) }),
            /* @__PURE__ */ e(w, { side: "bottom", children: i.label })
          ] }, i.id)),
          (V.length > 2 || J.length > 0) && /* @__PURE__ */ a(y, { children: [
            /* @__PURE__ */ e(v, { asChild: !0, children: /* @__PURE__ */ e(h, { variant: "outline", size: "sm", className: "px-2", children: /* @__PURE__ */ e(ne, { className: "w-4 h-4" }) }) }),
            /* @__PURE__ */ e(w, { side: "bottom", children: "More actions" })
          ] })
        ] })
      ] })
    ] }) }),
    S && /* @__PURE__ */ a(Y, { variant: "destructive", children: [
      /* @__PURE__ */ e(I, { className: "h-4 w-4" }),
      /* @__PURE__ */ a(K, { className: "flex items-center justify-between", children: [
        S,
        A && /* @__PURE__ */ e(h, { variant: "outline", size: "sm", onClick: A, children: "Dismiss" })
      ] })
    ] }),
    l && /* @__PURE__ */ e(oe, { ...l }),
    /* @__PURE__ */ a("div", { className: "grid grid-cols-1 xl:grid-cols-3 gap-8", children: [
      /* @__PURE__ */ a("div", { className: "xl:col-span-2 space-y-6", children: [
        m.map((i, U) => /* @__PURE__ */ e(
          he,
          {
            section: i,
            isEditing: o,
            onFieldChange: N
          },
          U
        )),
        E
      ] }),
      /* @__PURE__ */ a("div", { className: "space-y-6", children: [
        d.length > 0 && /* @__PURE__ */ e(me, { data: d }),
        p
      ] })
    ] })
  ] }) }) });
}
function oe({
  active: t,
  activeLabel: r = "Active",
  inactiveLabel: n = "Inactive",
  activeText: s = "Entity is operational and accessible",
  inactiveText: l = "Entity is inactive and cannot access services",
  customBadge: c
}) {
  return /* @__PURE__ */ e(L, { className: "border-border/50", children: /* @__PURE__ */ e(D, { className: "p-4", children: /* @__PURE__ */ a("div", { className: "flex items-center justify-between", children: [
    /* @__PURE__ */ a("div", { className: "flex items-center gap-4", children: [
      /* @__PURE__ */ e("div", { className: C(
        "w-10 h-10 rounded-full flex items-center justify-center",
        t ? "bg-green-100 text-green-600" : "bg-orange-100 text-orange-600"
      ), children: t ? /* @__PURE__ */ e(se, { className: "w-5 h-5" }) : /* @__PURE__ */ e(I, { className: "w-5 h-5" }) }),
      /* @__PURE__ */ a("div", { children: [
        /* @__PURE__ */ a("h3", { className: "font-semibold text-foreground", children: [
          "Status: ",
          t ? r : n
        ] }),
        /* @__PURE__ */ e("p", { className: "text-sm text-muted-foreground", children: t ? s : l })
      ] })
    ] }),
    c || /* @__PURE__ */ a(F, { variant: t ? "default" : "secondary", className: "flex items-center gap-2", children: [
      /* @__PURE__ */ e("div", { className: C(
        "w-2 h-2 rounded-full",
        t ? "bg-green-500" : "bg-orange-500"
      ) }),
      t ? r : n
    ] })
  ] }) }) });
}
function me({
  data: t,
  title: r = "Metadata"
}) {
  return /* @__PURE__ */ a(L, { children: [
    /* @__PURE__ */ e(q, { className: "border-b", children: /* @__PURE__ */ e(H, { className: "text-lg", children: r }) }),
    /* @__PURE__ */ e(D, { className: "p-4 md:p-6 space-y-4", children: /* @__PURE__ */ e("div", { className: "space-y-3", children: t.map((n, s) => /* @__PURE__ */ a("div", { children: [
      /* @__PURE__ */ a("label", { className: "text-xs font-medium text-muted-foreground uppercase tracking-wide flex items-center gap-1", children: [
        n.icon && /* @__PURE__ */ e(n.icon, { className: "w-3 h-3" }),
        n.label
      ] }),
      /* @__PURE__ */ e("div", { className: "flex items-center gap-2 mt-1", children: n.copyable ? /* @__PURE__ */ a(P, { children: [
        /* @__PURE__ */ e("div", { className: "text-sm font-mono bg-muted px-2 py-1 rounded border flex-1 break-all", children: B(n.value, n) }),
        /* @__PURE__ */ a(y, { children: [
          /* @__PURE__ */ e(v, { asChild: !0, children: /* @__PURE__ */ e(
            h,
            {
              variant: "ghost",
              size: "sm",
              onClick: () => de(String(n.value)),
              className: "h-8 w-8 p-0 shrink-0",
              children: /* @__PURE__ */ e(le, { className: "w-3 h-3" })
            }
          ) }),
          /* @__PURE__ */ a(w, { children: [
            "Copy ",
            n.label
          ] })
        ] })
      ] }) : /* @__PURE__ */ e("div", { className: "text-sm break-words", children: B(n.value, n) }) })
    ] }, s)) }) })
  ] });
}
function he({
  section: t,
  isEditing: r,
  onFieldChange: n
}) {
  return /* @__PURE__ */ a(L, { children: [
    /* @__PURE__ */ a(q, { className: "border-b", children: [
      /* @__PURE__ */ a(H, { className: "flex items-center gap-3", children: [
        t.icon && /* @__PURE__ */ e("div", { className: "w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ e(t.icon, { className: "w-4 h-4 text-primary" }) }),
        /* @__PURE__ */ e("span", { className: "bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent", children: t.title })
      ] }),
      t.description && /* @__PURE__ */ e("p", { className: "text-sm text-muted-foreground", children: t.description })
    ] }),
    /* @__PURE__ */ e(D, { className: "p-4 md:p-6", children: /* @__PURE__ */ e("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6", children: t.fields.map((s) => /* @__PURE__ */ e("div", { className: s.type === "textarea" ? "md:col-span-2" : "", children: /* @__PURE__ */ e(
      pe,
      {
        field: s,
        isEditing: r,
        onChange: (l) => n == null ? void 0 : n(s.key, l)
      }
    ) }, s.key)) }) })
  ] });
}
function pe({
  field: t,
  isEditing: r,
  onChange: n
}) {
  var l, c, m, d, p, o, N, g, u, b;
  const s = {
    label: t.label,
    value: String(t.value || ""),
    onChange: n,
    disabled: !r || t.disabled,
    required: t.required,
    placeholder: t.placeholder
  };
  switch (t.type) {
    case "textarea":
      return /* @__PURE__ */ e(
        re,
        {
          ...s,
          rows: t.rows || 3,
          minLength: (l = t.validation) == null ? void 0 : l.minLength,
          maxLength: (c = t.validation) == null ? void 0 : c.maxLength
        }
      );
    case "select":
      return /* @__PURE__ */ e(
        ae,
        {
          ...s,
          options: t.options || []
        }
      );
    case "email":
      return /* @__PURE__ */ e(
        x,
        {
          ...s,
          type: "email",
          minLength: (m = t.validation) == null ? void 0 : m.minLength,
          maxLength: (d = t.validation) == null ? void 0 : d.maxLength,
          pattern: (p = t.validation) == null ? void 0 : p.pattern
        }
      );
    case "password":
      return /* @__PURE__ */ e(
        x,
        {
          ...s,
          type: "password",
          minLength: (o = t.validation) == null ? void 0 : o.minLength,
          maxLength: (N = t.validation) == null ? void 0 : N.maxLength,
          showPasswordStrength: !0,
          showPasswordToggle: !0
        }
      );
    case "number":
      return /* @__PURE__ */ e(
        x,
        {
          ...s,
          type: "number"
        }
      );
    default:
      return /* @__PURE__ */ e(
        x,
        {
          ...s,
          type: "text",
          minLength: (g = t.validation) == null ? void 0 : g.minLength,
          maxLength: (u = t.validation) == null ? void 0 : u.maxLength,
          pattern: (b = t.validation) == null ? void 0 : b.pattern
        }
      );
  }
}
function De({
  open: t,
  entity: r,
  confirmationValue: n,
  onConfirmationChange: s,
  onConfirm: l,
  onCancel: c,
  loading: m = !1
}) {
  const d = n === r.name, p = (o) => {
    o.preventDefault(), d && !m && l();
  };
  return /* @__PURE__ */ e(Q, { open: t, onOpenChange: c, children: /* @__PURE__ */ a(R, { className: "max-w-md", children: [
    /* @__PURE__ */ a(W, { children: [
      /* @__PURE__ */ a(X, { className: "flex items-center gap-3 text-destructive", children: [
        /* @__PURE__ */ e("div", { className: "w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center", children: /* @__PURE__ */ e(ce, { className: "w-5 h-5 text-destructive" }) }),
        "Delete ",
        r.type
      ] }),
      /* @__PURE__ */ a(Z, { children: [
        "This action cannot be undone. This will permanently delete the ",
        r.type.toLowerCase(),
        "."
      ] })
    ] }),
    /* @__PURE__ */ a("form", { onSubmit: p, children: [
      /* @__PURE__ */ a("div", { className: "space-y-4", children: [
        /* @__PURE__ */ e("div", { className: "p-4 bg-destructive/5 border border-destructive/20 rounded-lg", children: /* @__PURE__ */ a("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ e("div", { className: "w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center", children: r.icon ? /* @__PURE__ */ e(r.icon, { className: "w-4 h-4 text-primary" }) : /* @__PURE__ */ e("span", { className: "text-primary font-bold text-sm", children: r.name.charAt(0).toUpperCase() }) }),
          /* @__PURE__ */ a("div", { children: [
            /* @__PURE__ */ e("p", { className: "font-semibold text-foreground", children: r.name }),
            /* @__PURE__ */ e("p", { className: "text-sm text-muted-foreground", children: r.type })
          ] })
        ] }) }),
        /* @__PURE__ */ e(
          x,
          {
            required: !0,
            label: `Type "${r.name}" to confirm:`,
            placeholder: r.name,
            value: n,
            onChange: s
          }
        )
      ] }),
      /* @__PURE__ */ e(_, { className: "mt-6", children: /* @__PURE__ */ e(
        te,
        {
          submitText: `Delete ${r.type}`,
          cancelText: "Cancel",
          showCancel: !0,
          loading: m,
          disabled: !d,
          onCancel: c
        }
      ) })
    ] })
  ] }) });
}
export {
  De as DeleteConfirmDialog,
  Le as DetailPageLayout
};
//# sourceMappingURL=detail-page.js.map
