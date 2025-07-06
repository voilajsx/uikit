import { jsx as e, jsxs as t, Fragment as P } from "react/jsx-runtime";
import { Card as L, CardContent as D, CardHeader as q, CardTitle as H } from "./card.js";
import { c as C } from "./utils-qaFjX9_3.js";
import { Button as h } from "./button.js";
import { Badge as F } from "./badge.js";
import { Alert as Y, AlertDescription as K } from "./alert.js";
import { Dialog as Q, DialogContent as R, DialogHeader as W, DialogTitle as X, DialogDescription as Z, DialogFooter as _ } from "./dialog.js";
import { TooltipProvider as ee, Tooltip as y, TooltipTrigger as v, TooltipContent as w } from "./tooltip.js";
import { ValidatedInput as x, FormActions as ae, ValidatedSelect as te, ValidatedTextarea as re } from "./form.js";
import { c as N } from "./createLucideIcon-B45kRl5r.js";
import { E as ne } from "./ellipsis-BhAoKPVk.js";
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const se = N("ArrowLeft", [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ie = N("CircleCheckBig", [
  ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const le = N("Copy", [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ce = N("Trash2", [
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
const I = N("TriangleAlert", [
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
      key: "wmoenq"
    }
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
]), B = (a, r) => {
  if (r.formatter)
    return r.formatter(a);
  switch (r.type) {
    case "date":
      return new Date(a).toLocaleDateString();
    case "datetime":
      return new Date(a).toLocaleString();
    case "boolean":
      return a ? "✅ Yes" : "❌ No";
    case "number":
      return typeof a == "number" ? a.toLocaleString() : a;
    case "json":
      return /* @__PURE__ */ e("pre", { className: "text-xs bg-muted p-2 rounded overflow-auto max-h-32", children: JSON.stringify(a, null, 2) });
    case "badge":
      return /* @__PURE__ */ e(F, { variant: r.badgeVariant || "default", children: String(a) });
    default:
      return String(a);
  }
}, de = (a) => {
  navigator.clipboard.writeText(a);
};
function Le({
  title: a,
  subtitle: r,
  icon: n,
  onBack: i,
  status: l,
  actions: c = [],
  formSections: m = [],
  metadataFields: d = [],
  sidebarCards: p = [],
  isEditing: o = !1,
  onFormChange: f,
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
  const j = c.find((s) => s.variant === "destructive"), z = c.find((s) => s.id === "edit"), M = c.filter((s) => s.variant !== "destructive" && s.id !== "edit"), V = [
    ...j ? [j] : [],
    ...z && !o ? [z] : [],
    ...M.filter((s) => s.position !== "secondary")
  ], J = M.filter((s) => s.position === "secondary");
  return /* @__PURE__ */ e(ee, { children: /* @__PURE__ */ e("div", { className: C("min-h-screen p-6", G), children: /* @__PURE__ */ t("div", { className: "max-w-7xl mx-auto space-y-8", children: [
    /* @__PURE__ */ e("div", { children: /* @__PURE__ */ t("div", { className: "flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 lg:gap-6", children: [
      /* @__PURE__ */ t("div", { className: "flex items-center gap-3 min-w-0 flex-1", children: [
        n && /* @__PURE__ */ e("div", { className: "w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0", children: /* @__PURE__ */ e(n, { className: "w-6 h-6 text-primary" }) }),
        /* @__PURE__ */ t("div", { className: "min-w-0 flex-1", children: [
          /* @__PURE__ */ e("h1", { className: "text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent leading-tight", children: T ? "Loading..." : a }),
          r && /* @__PURE__ */ e("p", { className: "text-sm text-muted-foreground mt-0.5 leading-relaxed", children: r })
        ] })
      ] }),
      /* @__PURE__ */ t("div", { className: "flex items-center gap-2 shrink-0 lg:ml-4", children: [
        /* @__PURE__ */ t(y, { children: [
          /* @__PURE__ */ e(v, { asChild: !0, children: /* @__PURE__ */ t(
            h,
            {
              variant: "outline",
              size: "sm",
              onClick: i,
              className: "flex items-center gap-1.5",
              children: [
                /* @__PURE__ */ e(se, { className: "w-4 h-4" }),
                /* @__PURE__ */ e("span", { className: "hidden sm:inline", children: "Back" })
              ]
            }
          ) }),
          /* @__PURE__ */ e(w, { side: "bottom", children: "Go back" })
        ] }),
        o && g && u ? /* @__PURE__ */ t("form", { onSubmit: (s) => {
          s.preventDefault(), g();
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
              children: k ? /* @__PURE__ */ t("div", { className: "flex items-center gap-1", children: [
                /* @__PURE__ */ e("div", { className: "w-3 h-3 border border-current border-t-transparent rounded-full animate-spin" }),
                /* @__PURE__ */ e("span", { className: "hidden sm:inline", children: "Saving..." })
              ] }) : b
            }
          )
        ] }) : /* @__PURE__ */ t(P, { children: [
          V.slice(0, 2).map((s) => /* @__PURE__ */ t(y, { children: [
            /* @__PURE__ */ e(v, { asChild: !0, children: /* @__PURE__ */ t(
              h,
              {
                variant: s.variant || "default",
                size: "sm",
                onClick: s.onClick,
                disabled: s.disabled || T,
                className: "flex items-center gap-1.5",
                children: [
                  /* @__PURE__ */ e(s.icon, { className: "w-4 h-4" }),
                  /* @__PURE__ */ e("span", { className: "hidden sm:inline", children: s.loading ? "Loading..." : s.label })
                ]
              }
            ) }),
            /* @__PURE__ */ e(w, { side: "bottom", children: s.label })
          ] }, s.id)),
          (V.length > 2 || J.length > 0) && /* @__PURE__ */ t(y, { children: [
            /* @__PURE__ */ e(v, { asChild: !0, children: /* @__PURE__ */ e(h, { variant: "outline", size: "sm", className: "px-2", children: /* @__PURE__ */ e(ne, { className: "w-4 h-4" }) }) }),
            /* @__PURE__ */ e(w, { side: "bottom", children: "More actions" })
          ] })
        ] })
      ] })
    ] }) }),
    S && /* @__PURE__ */ t(Y, { variant: "destructive", children: [
      /* @__PURE__ */ e(I, { className: "h-4 w-4" }),
      /* @__PURE__ */ t(K, { className: "flex items-center justify-between", children: [
        S,
        A && /* @__PURE__ */ e(h, { variant: "outline", size: "sm", onClick: A, children: "Dismiss" })
      ] })
    ] }),
    l && /* @__PURE__ */ e(oe, { ...l }),
    /* @__PURE__ */ t("div", { className: "grid grid-cols-1 xl:grid-cols-3 gap-8", children: [
      /* @__PURE__ */ t("div", { className: "xl:col-span-2 space-y-6", children: [
        m.map((s, U) => /* @__PURE__ */ e(
          he,
          {
            section: s,
            isEditing: o,
            onFieldChange: f
          },
          U
        )),
        E
      ] }),
      /* @__PURE__ */ t("div", { className: "space-y-6", children: [
        d.length > 0 && /* @__PURE__ */ e(me, { data: d }),
        p
      ] })
    ] })
  ] }) }) });
}
function oe({
  active: a,
  activeLabel: r = "Active",
  inactiveLabel: n = "Inactive",
  activeText: i = "Entity is operational and accessible",
  inactiveText: l = "Entity is inactive and cannot access services",
  customBadge: c
}) {
  return /* @__PURE__ */ e(L, { className: "border-0 shadow-lg", children: /* @__PURE__ */ e(D, { className: "p-4", children: /* @__PURE__ */ t("div", { className: "flex items-center justify-between", children: [
    /* @__PURE__ */ t("div", { className: "flex items-center gap-4", children: [
      /* @__PURE__ */ e("div", { className: C(
        "w-10 h-10 rounded-full flex items-center justify-center",
        a ? "bg-green-100 text-green-600" : "bg-orange-100 text-orange-600"
      ), children: a ? /* @__PURE__ */ e(ie, { className: "w-5 h-5" }) : /* @__PURE__ */ e(I, { className: "w-5 h-5" }) }),
      /* @__PURE__ */ t("div", { children: [
        /* @__PURE__ */ t("h3", { className: "font-semibold text-foreground", children: [
          "Status: ",
          a ? r : n
        ] }),
        /* @__PURE__ */ e("p", { className: "text-sm text-muted-foreground", children: a ? i : l })
      ] })
    ] }),
    c || /* @__PURE__ */ t(F, { variant: a ? "default" : "secondary", className: "flex items-center gap-2", children: [
      /* @__PURE__ */ e("div", { className: C(
        "w-2 h-2 rounded-full",
        a ? "bg-green-500" : "bg-orange-500"
      ) }),
      a ? r : n
    ] })
  ] }) }) });
}
function me({
  data: a,
  title: r = "Metadata"
}) {
  return /* @__PURE__ */ t(L, { className: "border-0 shadow-lg", children: [
    /* @__PURE__ */ e(q, { className: "border-0", children: /* @__PURE__ */ e(H, { className: "text-lg", children: r }) }),
    /* @__PURE__ */ e(D, { className: "p-4 md:p-6 space-y-4", children: /* @__PURE__ */ e("div", { className: "space-y-3", children: a.map((n, i) => /* @__PURE__ */ t("div", { children: [
      /* @__PURE__ */ t("label", { className: "text-xs font-medium text-muted-foreground uppercase tracking-wide flex items-center gap-1", children: [
        n.icon && /* @__PURE__ */ e(n.icon, { className: "w-3 h-3" }),
        n.label
      ] }),
      /* @__PURE__ */ e("div", { className: "flex items-center gap-2 mt-1", children: n.copyable ? /* @__PURE__ */ t(P, { children: [
        /* @__PURE__ */ e("div", { className: "text-sm font-mono bg-muted px-2 py-1 rounded border flex-1 break-all", children: B(n.value, n) }),
        /* @__PURE__ */ t(y, { children: [
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
          /* @__PURE__ */ t(w, { children: [
            "Copy ",
            n.label
          ] })
        ] })
      ] }) : /* @__PURE__ */ e("div", { className: "text-sm break-words", children: B(n.value, n) }) })
    ] }, i)) }) })
  ] });
}
function he({
  section: a,
  isEditing: r,
  onFieldChange: n
}) {
  return /* @__PURE__ */ t(L, { className: "border-0 shadow-lg", children: [
    /* @__PURE__ */ t(q, { className: "border-0", children: [
      /* @__PURE__ */ t(H, { className: "flex items-center gap-3", children: [
        a.icon && /* @__PURE__ */ e("div", { className: "w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ e(a.icon, { className: "w-4 h-4 text-primary" }) }),
        /* @__PURE__ */ e("span", { className: "bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent", children: a.title })
      ] }),
      a.description && /* @__PURE__ */ e("p", { className: "text-sm text-muted-foreground", children: a.description })
    ] }),
    /* @__PURE__ */ e(D, { className: "p-4 md:p-6", children: /* @__PURE__ */ e("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6", children: a.fields.map((i) => /* @__PURE__ */ e("div", { className: i.type === "textarea" ? "md:col-span-2" : "", children: /* @__PURE__ */ e(
      pe,
      {
        field: i,
        isEditing: r,
        onChange: (l) => n == null ? void 0 : n(i.key, l)
      }
    ) }, i.key)) }) })
  ] });
}
function pe({
  field: a,
  isEditing: r,
  onChange: n
}) {
  var l, c, m, d, p, o, f, g, u, b;
  const i = {
    label: a.label,
    value: String(a.value || ""),
    onChange: n,
    disabled: !r || a.disabled,
    required: a.required,
    placeholder: a.placeholder
  };
  switch (a.type) {
    case "textarea":
      return /* @__PURE__ */ e(
        re,
        {
          ...i,
          rows: a.rows || 3,
          minLength: (l = a.validation) == null ? void 0 : l.minLength,
          maxLength: (c = a.validation) == null ? void 0 : c.maxLength
        }
      );
    case "select":
      return /* @__PURE__ */ e(
        te,
        {
          ...i,
          options: a.options || []
        }
      );
    case "email":
      return /* @__PURE__ */ e(
        x,
        {
          ...i,
          type: "email",
          minLength: (m = a.validation) == null ? void 0 : m.minLength,
          maxLength: (d = a.validation) == null ? void 0 : d.maxLength,
          pattern: (p = a.validation) == null ? void 0 : p.pattern
        }
      );
    case "password":
      return /* @__PURE__ */ e(
        x,
        {
          ...i,
          type: "password",
          minLength: (o = a.validation) == null ? void 0 : o.minLength,
          maxLength: (f = a.validation) == null ? void 0 : f.maxLength,
          showPasswordStrength: !0,
          showPasswordToggle: !0
        }
      );
    case "number":
      return /* @__PURE__ */ e(
        x,
        {
          ...i,
          type: "number"
        }
      );
    default:
      return /* @__PURE__ */ e(
        x,
        {
          ...i,
          type: "text",
          minLength: (g = a.validation) == null ? void 0 : g.minLength,
          maxLength: (u = a.validation) == null ? void 0 : u.maxLength,
          pattern: (b = a.validation) == null ? void 0 : b.pattern
        }
      );
  }
}
function De({
  open: a,
  entity: r,
  confirmationValue: n,
  onConfirmationChange: i,
  onConfirm: l,
  onCancel: c,
  loading: m = !1
}) {
  const d = n === r.name, p = (o) => {
    o.preventDefault(), d && !m && l();
  };
  return /* @__PURE__ */ e(Q, { open: a, onOpenChange: c, children: /* @__PURE__ */ t(R, { className: "max-w-md", children: [
    /* @__PURE__ */ t(W, { children: [
      /* @__PURE__ */ t(X, { className: "flex items-center gap-3 text-destructive", children: [
        /* @__PURE__ */ e("div", { className: "w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center", children: /* @__PURE__ */ e(ce, { className: "w-5 h-5 text-destructive" }) }),
        "Delete ",
        r.type
      ] }),
      /* @__PURE__ */ t(Z, { children: [
        "This action cannot be undone. This will permanently delete the ",
        r.type.toLowerCase(),
        "."
      ] })
    ] }),
    /* @__PURE__ */ t("form", { onSubmit: p, children: [
      /* @__PURE__ */ t("div", { className: "space-y-4", children: [
        /* @__PURE__ */ e("div", { className: "p-4 bg-destructive/5 border border-destructive/20 rounded-lg", children: /* @__PURE__ */ t("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ e("div", { className: "w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center", children: r.icon ? /* @__PURE__ */ e(r.icon, { className: "w-4 h-4 text-primary" }) : /* @__PURE__ */ e("span", { className: "text-primary font-bold text-sm", children: r.name.charAt(0).toUpperCase() }) }),
          /* @__PURE__ */ t("div", { children: [
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
            onChange: i
          }
        )
      ] }),
      /* @__PURE__ */ e(_, { className: "mt-6", children: /* @__PURE__ */ e(
        ae,
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
