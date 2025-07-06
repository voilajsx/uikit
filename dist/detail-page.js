import { jsx as e, jsxs as t, Fragment as P } from "react/jsx-runtime";
import { Card as L, CardContent as D, CardHeader as q, CardTitle as H } from "./card.js";
import { c as C } from "./utils-qaFjX9_3.js";
import { Button as h } from "./button.js";
import { Badge as F } from "./badge.js";
import { Alert as Y, AlertDescription as K } from "./alert.js";
import { Dialog as Q, DialogContent as R, DialogHeader as W, DialogTitle as X, DialogDescription as Z, DialogFooter as _ } from "./dialog.js";
import { TooltipProvider as ee, Tooltip as y, TooltipTrigger as v, TooltipContent as w } from "./tooltip.js";
import { ValidatedInput as x, FormActions as re, ValidatedSelect as te, ValidatedTextarea as ae } from "./form.js";
import { c as b } from "./createLucideIcon-B45kRl5r.js";
import { E as ne } from "./ellipsis-BhAoKPVk.js";
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ie = b("ArrowLeft", [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const se = b("CircleCheckBig", [
  ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const le = b("Copy", [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ce = b("Trash2", [
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
const I = b("TriangleAlert", [
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
      key: "wmoenq"
    }
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
]), B = (r, a) => {
  if (a.formatter)
    return a.formatter(r);
  switch (a.type) {
    case "date":
      return new Date(r).toLocaleDateString();
    case "datetime":
      return new Date(r).toLocaleString();
    case "boolean":
      return r ? "✅ Yes" : "❌ No";
    case "number":
      return typeof r == "number" ? r.toLocaleString() : r;
    case "json":
      return /* @__PURE__ */ e("pre", { className: "text-xs bg-muted p-2 rounded overflow-auto max-h-32", children: JSON.stringify(r, null, 2) });
    case "badge":
      return /* @__PURE__ */ e(F, { variant: a.badgeVariant || "default", children: String(r) });
    default:
      return String(r);
  }
}, de = (r) => {
  navigator.clipboard.writeText(r);
};
function Le({
  title: r,
  subtitle: a,
  icon: n,
  onBack: s,
  status: l,
  actions: c = [],
  formSections: m = [],
  metadataFields: d = [],
  sidebarCards: p = [],
  isEditing: o = !1,
  onFormChange: f,
  onSave: g,
  onCancel: u,
  saveText: N = "Save Changes",
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
  return /* @__PURE__ */ e(ee, { children: /* @__PURE__ */ e("div", { className: C("min-h-screen p-6", G), children: /* @__PURE__ */ t("div", { className: "max-w-7xl mx-auto space-y-8", children: [
    /* @__PURE__ */ e("div", { children: /* @__PURE__ */ t("div", { className: "flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 lg:gap-6", children: [
      /* @__PURE__ */ t("div", { className: "flex items-center gap-3 min-w-0 flex-1", children: [
        n && /* @__PURE__ */ e("div", { className: "w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0", children: /* @__PURE__ */ e(n, { className: "w-6 h-6 text-primary" }) }),
        /* @__PURE__ */ t("div", { className: "min-w-0 flex-1", children: [
          /* @__PURE__ */ e("h1", { className: "text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent leading-tight", children: T ? "Loading..." : r }),
          a && /* @__PURE__ */ e("p", { className: "text-sm text-muted-foreground mt-0.5 leading-relaxed", children: a })
        ] })
      ] }),
      /* @__PURE__ */ t("div", { className: "flex items-center gap-2 shrink-0 lg:ml-4", children: [
        /* @__PURE__ */ t(y, { children: [
          /* @__PURE__ */ e(v, { asChild: !0, children: /* @__PURE__ */ t(
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
        o && g && u ? /* @__PURE__ */ t("form", { onSubmit: (i) => {
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
              children: k ? /* @__PURE__ */ t("div", { className: "flex items-center gap-1", children: [
                /* @__PURE__ */ e("div", { className: "w-3 h-3 border border-current border-t-transparent rounded-full animate-spin" }),
                /* @__PURE__ */ e("span", { className: "hidden sm:inline", children: "Saving..." })
              ] }) : N
            }
          )
        ] }) : /* @__PURE__ */ t(P, { children: [
          V.slice(0, 2).map((i) => /* @__PURE__ */ t(y, { children: [
            /* @__PURE__ */ e(v, { asChild: !0, children: /* @__PURE__ */ t(
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
        m.map((i, U) => /* @__PURE__ */ e(
          he,
          {
            section: i,
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
  active: r,
  activeLabel: a = "Active",
  inactiveLabel: n = "Inactive",
  activeText: s = "Entity is operational and accessible",
  inactiveText: l = "Entity is inactive and cannot access services",
  customBadge: c
}) {
  return /* @__PURE__ */ e(L, { className: "border-b border-border-50order/50", children: /* @__PURE__ */ e(D, { className: "p-4", children: /* @__PURE__ */ t("div", { className: "flex items-center justify-between", children: [
    /* @__PURE__ */ t("div", { className: "flex items-center gap-4", children: [
      /* @__PURE__ */ e("div", { className: C(
        "w-10 h-10 rounded-full flex items-center justify-center",
        r ? "bg-green-100 text-green-600" : "bg-orange-100 text-orange-600"
      ), children: r ? /* @__PURE__ */ e(se, { className: "w-5 h-5" }) : /* @__PURE__ */ e(I, { className: "w-5 h-5" }) }),
      /* @__PURE__ */ t("div", { children: [
        /* @__PURE__ */ t("h3", { className: "font-semibold text-foreground", children: [
          "Status: ",
          r ? a : n
        ] }),
        /* @__PURE__ */ e("p", { className: "text-sm text-muted-foreground", children: r ? s : l })
      ] })
    ] }),
    c || /* @__PURE__ */ t(F, { variant: r ? "default" : "secondary", className: "flex items-center gap-2", children: [
      /* @__PURE__ */ e("div", { className: C(
        "w-2 h-2 rounded-full",
        r ? "bg-green-500" : "bg-orange-500"
      ) }),
      r ? a : n
    ] })
  ] }) }) });
}
function me({
  data: r,
  title: a = "Metadata"
}) {
  return /* @__PURE__ */ t(L, { children: [
    /* @__PURE__ */ e(q, { className: "border-b border-border-50", children: /* @__PURE__ */ e(H, { className: "text-lg", children: a }) }),
    /* @__PURE__ */ e(D, { className: "p-4 md:p-6 space-y-4", children: /* @__PURE__ */ e("div", { className: "space-y-3", children: r.map((n, s) => /* @__PURE__ */ t("div", { children: [
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
    ] }, s)) }) })
  ] });
}
function he({
  section: r,
  isEditing: a,
  onFieldChange: n
}) {
  return /* @__PURE__ */ t(L, { children: [
    /* @__PURE__ */ t(q, { className: "border-b border-border-50", children: [
      /* @__PURE__ */ t(H, { className: "flex items-center gap-3", children: [
        r.icon && /* @__PURE__ */ e("div", { className: "w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ e(r.icon, { className: "w-4 h-4 text-primary" }) }),
        /* @__PURE__ */ e("span", { className: "bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent", children: r.title })
      ] }),
      r.description && /* @__PURE__ */ e("p", { className: "text-sm text-muted-foreground", children: r.description })
    ] }),
    /* @__PURE__ */ e(D, { className: "p-4 md:p-6", children: /* @__PURE__ */ e("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6", children: r.fields.map((s) => /* @__PURE__ */ e("div", { className: s.type === "textarea" ? "md:col-span-2" : "", children: /* @__PURE__ */ e(
      pe,
      {
        field: s,
        isEditing: a,
        onChange: (l) => n == null ? void 0 : n(s.key, l)
      }
    ) }, s.key)) }) })
  ] });
}
function pe({
  field: r,
  isEditing: a,
  onChange: n
}) {
  var l, c, m, d, p, o, f, g, u, N;
  const s = {
    label: r.label,
    value: String(r.value || ""),
    onChange: n,
    disabled: !a || r.disabled,
    required: r.required,
    placeholder: r.placeholder
  };
  switch (r.type) {
    case "textarea":
      return /* @__PURE__ */ e(
        ae,
        {
          ...s,
          rows: r.rows || 3,
          minLength: (l = r.validation) == null ? void 0 : l.minLength,
          maxLength: (c = r.validation) == null ? void 0 : c.maxLength
        }
      );
    case "select":
      return /* @__PURE__ */ e(
        te,
        {
          ...s,
          options: r.options || []
        }
      );
    case "email":
      return /* @__PURE__ */ e(
        x,
        {
          ...s,
          type: "email",
          minLength: (m = r.validation) == null ? void 0 : m.minLength,
          maxLength: (d = r.validation) == null ? void 0 : d.maxLength,
          pattern: (p = r.validation) == null ? void 0 : p.pattern
        }
      );
    case "password":
      return /* @__PURE__ */ e(
        x,
        {
          ...s,
          type: "password",
          minLength: (o = r.validation) == null ? void 0 : o.minLength,
          maxLength: (f = r.validation) == null ? void 0 : f.maxLength,
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
          minLength: (g = r.validation) == null ? void 0 : g.minLength,
          maxLength: (u = r.validation) == null ? void 0 : u.maxLength,
          pattern: (N = r.validation) == null ? void 0 : N.pattern
        }
      );
  }
}
function De({
  open: r,
  entity: a,
  confirmationValue: n,
  onConfirmationChange: s,
  onConfirm: l,
  onCancel: c,
  loading: m = !1
}) {
  const d = n === a.name, p = (o) => {
    o.preventDefault(), d && !m && l();
  };
  return /* @__PURE__ */ e(Q, { open: r, onOpenChange: c, children: /* @__PURE__ */ t(R, { className: "max-w-md", children: [
    /* @__PURE__ */ t(W, { children: [
      /* @__PURE__ */ t(X, { className: "flex items-center gap-3 text-destructive", children: [
        /* @__PURE__ */ e("div", { className: "w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center", children: /* @__PURE__ */ e(ce, { className: "w-5 h-5 text-destructive" }) }),
        "Delete ",
        a.type
      ] }),
      /* @__PURE__ */ t(Z, { children: [
        "This action cannot be undone. This will permanently delete the ",
        a.type.toLowerCase(),
        "."
      ] })
    ] }),
    /* @__PURE__ */ t("form", { onSubmit: p, children: [
      /* @__PURE__ */ t("div", { className: "space-y-4", children: [
        /* @__PURE__ */ e("div", { className: "p-4 bg-destructive/5 border border-destructive/20 rounded-lg", children: /* @__PURE__ */ t("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ e("div", { className: "w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center", children: a.icon ? /* @__PURE__ */ e(a.icon, { className: "w-4 h-4 text-primary" }) : /* @__PURE__ */ e("span", { className: "text-primary font-bold text-sm", children: a.name.charAt(0).toUpperCase() }) }),
          /* @__PURE__ */ t("div", { children: [
            /* @__PURE__ */ e("p", { className: "font-semibold text-foreground", children: a.name }),
            /* @__PURE__ */ e("p", { className: "text-sm text-muted-foreground", children: a.type })
          ] })
        ] }) }),
        /* @__PURE__ */ e(
          x,
          {
            required: !0,
            label: `Type "${a.name}" to confirm:`,
            placeholder: a.name,
            value: n,
            onChange: s
          }
        )
      ] }),
      /* @__PURE__ */ e(_, { className: "mt-6", children: /* @__PURE__ */ e(
        re,
        {
          submitText: `Delete ${a.type}`,
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
