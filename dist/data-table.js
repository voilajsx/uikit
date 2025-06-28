import { jsxs as c, jsx as r } from "react/jsx-runtime";
import * as Ve from "react";
import { forwardRef as Ae, useState as T, useMemo as R, useCallback as q } from "react";
import { c as re } from "./index-DACAHwoB.js";
import { c as n } from "./utils-qaFjX9_3.js";
import { Button as w } from "./button.js";
import { Input as Te } from "./input.js";
import { Badge as qe } from "./badge.js";
import { Checkbox as Z } from "./checkbox.js";
import { Select as Ue, SelectTrigger as He, SelectValue as ze, SelectContent as Fe, SelectItem as U } from "./select.js";
import { DropdownMenu as $, DropdownMenuTrigger as C, DropdownMenuContent as P, DropdownMenuItem as ee } from "./dropdown-menu.js";
import { S as Be } from "./search-CpUwRnG-.js";
import { c as W } from "./createLucideIcon-B45kRl5r.js";
import { E as Ee } from "./ellipsis-BhAoKPVk.js";
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ie = W("ArrowDownWideNarrow", [
  ["path", { d: "m3 16 4 4 4-4", key: "1co6wj" }],
  ["path", { d: "M7 20V4", key: "1yoxec" }],
  ["path", { d: "M11 4h10", key: "1w87gc" }],
  ["path", { d: "M11 8h7", key: "djye34" }],
  ["path", { d: "M11 12h4", key: "q8tih4" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Oe = W("ArrowUpDown", [
  ["path", { d: "m21 16-4 4-4-4", key: "f6ql7i" }],
  ["path", { d: "M17 20V4", key: "1ejh1v" }],
  ["path", { d: "m3 8 4-4 4 4", key: "11wl7u" }],
  ["path", { d: "M7 4v16", key: "1glfcx" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Re = W("ArrowUpNarrowWide", [
  ["path", { d: "m3 8 4-4 4 4", key: "11wl7u" }],
  ["path", { d: "M7 4v16", key: "1glfcx" }],
  ["path", { d: "M11 12h4", key: "q8tih4" }],
  ["path", { d: "M11 16h7", key: "uosisv" }],
  ["path", { d: "M11 20h10", key: "jvxblo" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _e = W("Download", [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["polyline", { points: "7 10 12 15 17 10", key: "2ggqvy" }],
  ["line", { x1: "12", x2: "12", y1: "15", y2: "3", key: "1vk2je" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ge = W("Filter", [
  ["polygon", { points: "22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3", key: "1yg77f" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const te = W("RefreshCw", [
  ["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
  ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }],
  ["path", { d: "M8 16H3v5", key: "1cv678" }]
]), Je = re(
  "w-full border-collapse",
  {
    variants: {
      size: {
        sm: "text-xs",
        md: "text-sm",
        lg: "text-base"
      },
      bordered: {
        true: "border border-border",
        false: ""
      }
    },
    defaultVariants: {
      size: "md",
      bordered: !0
    }
  }
), D = re(
  "text-left border-b border-border transition-colors",
  {
    variants: {
      density: {
        compact: "px-2 py-1",
        normal: "px-3 py-2",
        comfortable: "px-4 py-3"
      },
      pinned: {
        left: "sticky left-0 z-10 bg-background",
        right: "sticky right-0 z-10 bg-background",
        none: ""
      }
    },
    defaultVariants: {
      density: "normal",
      pinned: "none"
    }
  }
), Qe = Ae(({
  data: u = [],
  columns: h = [],
  virtualized: Xe = !1,
  rowHeight: Ye = 40,
  height: se,
  selectable: o = !1,
  selectionMode: H = "multiple",
  selectedRows: ie = [],
  onSelectionChange: f,
  getRowId: L = (x, O) => O.toString(),
  sortable: _ = !0,
  sortConfig: ae = [],
  onSortChange: j,
  filterable: Ze = !0,
  filterConfig: le = {},
  onFilterChange: S,
  searchable: ce = !0,
  searchPlaceholder: de = "Search...",
  searchValue: ne = "",
  onSearchChange: z,
  pagination: F = !0,
  currentPage: d = 0,
  pageSize: b = 10,
  totalRows: B,
  onPageChange: m,
  onPageSizeChange: E,
  actions: k = [],
  bulkActions: G = [],
  expandable: oe = !1,
  expandedRows: he = [],
  onExpandChange: $e,
  renderExpanded: J,
  loading: me = !1,
  emptyState: pe,
  error: Q,
  exportable: ue = !1,
  exportFormats: fe = ["csv", "json"],
  onExport: I,
  size: ve = "md",
  density: M = "normal",
  striped: ye = !1,
  bordered: Ne = !0,
  hoverable: we = !0,
  className: be,
  style: ke
}, xe) => {
  const [x, O] = T(ae), [K, ge] = T(le), [V, Me] = T(ne), [p, X] = T(ie), v = R(
    () => h.filter((e) => !e.hidden),
    [h]
  ), De = q((e) => {
    if (!_) return;
    const i = h.find((l) => l.id === e);
    if (!(i != null && i.sortable)) return;
    const t = [...x], a = t.findIndex((l) => l.key === e);
    a >= 0 ? t[a].direction === "asc" ? t[a].direction = "desc" : t.splice(a, 1) : t.push({ key: e, direction: "asc" }), O(t), j == null || j(t);
  }, [_, h, x, j]);
  q((e, i, t = "contains") => {
    const a = { ...K };
    if (i === "" || i == null)
      delete a[e];
    else {
      const l = h.find((s) => s.id === e);
      a[e] = {
        type: (l == null ? void 0 : l.filterType) || "text",
        value: i,
        operator: t
      };
    }
    ge(a), S == null || S(a);
  }, [h, K, S]);
  const We = q((e) => {
    if (!o) return;
    const i = e ? u.map((t, a) => L(t, a)) : [];
    X(i), f == null || f(i);
  }, [o, u, L, f]), Le = q((e, i) => {
    if (!o) return;
    let t = [...p];
    H === "single" ? t = i ? [e] : [] : i ? t.push(e) : t = t.filter((a) => a !== e), X(t), f == null || f(t);
  }, [o, H, p, f]), g = R(() => {
    let e = [...u];
    return V && (e = e.filter((i) => v.some((t) => {
      const a = t.accessor ? t.accessor(i) : t.accessorKey ? i[t.accessorKey] : "";
      return String(a).toLowerCase().includes(V.toLowerCase());
    }))), Object.entries(K).forEach(([i, t]) => {
      const a = h.find((l) => l.id === i);
      a && (e = e.filter((l) => {
        const s = a.accessor ? a.accessor(l) : a.accessorKey ? l[a.accessorKey] : "";
        switch (t.operator) {
          case "equals":
            return s === t.value;
          case "contains":
            return String(s).toLowerCase().includes(String(t.value).toLowerCase());
          case "startsWith":
            return String(s).toLowerCase().startsWith(String(t.value).toLowerCase());
          case "endsWith":
            return String(s).toLowerCase().endsWith(String(t.value).toLowerCase());
          case "gt":
            return Number(s) > Number(t.value);
          case "lt":
            return Number(s) < Number(t.value);
          case "gte":
            return Number(s) >= Number(t.value);
          case "lte":
            return Number(s) <= Number(t.value);
          default:
            return String(s).toLowerCase().includes(String(t.value).toLowerCase());
        }
      }));
    }), x.length > 0 && e.sort((i, t) => {
      for (const a of x) {
        const l = h.find((Ke) => Ke.id === a.key);
        if (!l) continue;
        const s = l.accessor ? l.accessor(i) : l.accessorKey ? i[l.accessorKey] : "", y = l.accessor ? l.accessor(t) : l.accessorKey ? t[l.accessorKey] : "";
        let N = 0;
        if (l.sortFn)
          N = l.sortFn(s, y);
        else
          switch (l.dataType) {
            case "number":
              N = Number(s) - Number(y);
              break;
            case "date":
              N = new Date(s).getTime() - new Date(y).getTime();
              break;
            case "boolean":
              N = (s ? 1 : 0) - (y ? 1 : 0);
              break;
            default:
              N = String(s).localeCompare(String(y));
          }
        if (N !== 0)
          return a.direction === "asc" ? N : -N;
      }
      return 0;
    }), e;
  }, [u, V, K, x, h, v]), Y = R(() => {
    if (!F) return g;
    const e = d * b, i = e + b;
    return g.slice(e, i);
  }, [g, F, d, b]), A = Math.ceil((B || g.length) / b), je = (e) => {
    const i = x.find((l) => l.key === e.id), t = !!i, a = i == null ? void 0 : i.direction;
    return /* @__PURE__ */ r(
      "th",
      {
        className: n(
          D({
            density: M,
            pinned: e.pinned || "none"
          }),
          "bg-muted/50 font-medium text-muted-foreground",
          e.sortable && "cursor-pointer hover:bg-muted",
          e.className
        ),
        style: {
          width: e.width,
          minWidth: e.minWidth,
          maxWidth: e.maxWidth
        },
        onClick: () => e.sortable && De(e.id),
        children: /* @__PURE__ */ c("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ r("span", { children: e.header }),
          e.sortable && /* @__PURE__ */ c("div", { className: "flex flex-col", children: [
            !t && /* @__PURE__ */ r(Oe, { className: "h-3 w-3" }),
            t && a === "asc" && /* @__PURE__ */ r(Re, { className: "h-3 w-3" }),
            t && a === "desc" && /* @__PURE__ */ r(Ie, { className: "h-3 w-3" })
          ] }),
          e.filterable && /* @__PURE__ */ r(
            w,
            {
              variant: "ghost",
              size: "sm",
              className: "h-6 w-6 p-0",
              onClick: (l) => {
                l.stopPropagation();
              },
              children: /* @__PURE__ */ r(Ge, { className: "h-3 w-3" })
            }
          )
        ] })
      },
      e.id
    );
  }, Se = (e, i) => {
    const t = L(e, i), a = p.includes(t), l = he.includes(t);
    return /* @__PURE__ */ c(Ve.Fragment, { children: [
      /* @__PURE__ */ c(
        "tr",
        {
          className: n(
            "transition-colors",
            we && "hover:bg-muted/50",
            ye && i % 2 === 0 && "bg-muted/20",
            a && "bg-primary/10"
          ),
          children: [
            o && /* @__PURE__ */ r("td", { className: n(D({ density: M })), children: /* @__PURE__ */ r(
              Z,
              {
                checked: a,
                onCheckedChange: (s) => Le(t, s)
              }
            ) }),
            v.map((s) => {
              const y = s.accessor ? s.accessor(e) : s.accessorKey ? e[s.accessorKey] : "";
              return /* @__PURE__ */ r(
                "td",
                {
                  className: n(
                    D({
                      density: M,
                      pinned: s.pinned || "none"
                    }),
                    s.className
                  ),
                  style: {
                    width: s.width,
                    minWidth: s.minWidth,
                    maxWidth: s.maxWidth
                  },
                  children: s.cell ? s.cell(y, e, i) : String(y)
                },
                s.id
              );
            }),
            k.length > 0 && /* @__PURE__ */ r("td", { className: n(D({ density: M })), children: /* @__PURE__ */ c($, { children: [
              /* @__PURE__ */ r(C, { asChild: !0, children: /* @__PURE__ */ r(w, { variant: "ghost", size: "sm", children: /* @__PURE__ */ r(Ee, { className: "h-4 w-4" }) }) }),
              /* @__PURE__ */ r(P, { align: "end", children: k.filter((s) => !s.visible || s.visible(e, i)).map((s) => /* @__PURE__ */ c(
                ee,
                {
                  onClick: () => s.onClick(e, i),
                  className: n(
                    s.variant === "destructive" && "text-destructive"
                  ),
                  children: [
                    s.icon && /* @__PURE__ */ r(s.icon, { className: "h-4 w-4 mr-2" }),
                    s.label
                  ]
                },
                s.id
              )) })
            ] }) })
          ]
        }
      ),
      oe && l && J && /* @__PURE__ */ r("tr", { children: /* @__PURE__ */ r("td", { colSpan: v.length + (o ? 1 : 0) + (k.length > 0 ? 1 : 0), children: J(e, i) }) })
    ] }, t);
  };
  return /* @__PURE__ */ c("div", { className: n("space-y-4", be), style: ke, children: [
    /* @__PURE__ */ c("div", { className: "flex items-center justify-between gap-4", children: [
      /* @__PURE__ */ c("div", { className: "flex items-center gap-2", children: [
        ce && /* @__PURE__ */ c("div", { className: "relative", children: [
          /* @__PURE__ */ r(Be, { className: "absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" }),
          /* @__PURE__ */ r(
            Te,
            {
              placeholder: de,
              value: V,
              onChange: (e) => {
                Me(e.target.value), z == null || z(e.target.value);
              },
              className: "pl-8 w-64"
            }
          )
        ] }),
        G.length > 0 && p.length > 0 && /* @__PURE__ */ c("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ c(qe, { variant: "secondary", children: [
            p.length,
            " selected"
          ] }),
          G.map((e) => /* @__PURE__ */ c(
            w,
            {
              variant: e.variant || "default",
              size: "sm",
              onClick: () => {
                const i = u.filter(
                  (t, a) => p.includes(L(t, a))
                );
                e.onClick(i);
              },
              children: [
                e.icon && /* @__PURE__ */ r(e.icon, { className: "h-4 w-4 mr-2" }),
                e.label
              ]
            },
            e.id
          ))
        ] })
      ] }),
      /* @__PURE__ */ c("div", { className: "flex items-center gap-2", children: [
        ue && /* @__PURE__ */ c($, { children: [
          /* @__PURE__ */ r(C, { asChild: !0, children: /* @__PURE__ */ c(w, { variant: "outline", size: "sm", children: [
            /* @__PURE__ */ r(_e, { className: "h-4 w-4 mr-2" }),
            "Export"
          ] }) }),
          /* @__PURE__ */ r(P, { children: fe.map((e) => /* @__PURE__ */ c(
            ee,
            {
              onClick: () => I == null ? void 0 : I(e, g),
              children: [
                "Export as ",
                e.toUpperCase()
              ]
            },
            e
          )) })
        ] }),
        /* @__PURE__ */ r(w, { variant: "outline", size: "sm", onClick: () => window.location.reload(), children: /* @__PURE__ */ r(te, { className: "h-4 w-4" }) })
      ] })
    ] }),
    /* @__PURE__ */ r(
      "div",
      {
        className: "border border-border rounded-lg overflow-auto",
        style: { height: se },
        children: /* @__PURE__ */ c(
          "table",
          {
            ref: xe,
            className: n(Je({ size: ve, bordered: Ne })),
            children: [
              /* @__PURE__ */ r("thead", { children: /* @__PURE__ */ c("tr", { children: [
                o && /* @__PURE__ */ r("th", { className: n(D({ density: M }), "bg-muted/50"), children: H === "multiple" && /* @__PURE__ */ r(
                  Z,
                  {
                    checked: p.length === u.length && u.length > 0,
                    className: n(
                      p.length > 0 && p.length < u.length && "data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground [&>svg]:opacity-50"
                    ),
                    onCheckedChange: We
                  }
                ) }),
                v.map(je),
                k.length > 0 && /* @__PURE__ */ r("th", { className: n(D({ density: M }), "bg-muted/50 w-16"), children: "Actions" })
              ] }) }),
              /* @__PURE__ */ r("tbody", { children: me ? /* @__PURE__ */ r("tr", { children: /* @__PURE__ */ r(
                "td",
                {
                  colSpan: v.length + (o ? 1 : 0) + (k.length > 0 ? 1 : 0),
                  className: "text-center py-8",
                  children: /* @__PURE__ */ c("div", { className: "flex items-center justify-center gap-2", children: [
                    /* @__PURE__ */ r(te, { className: "h-4 w-4 animate-spin" }),
                    "Loading..."
                  ] })
                }
              ) }) : Q ? /* @__PURE__ */ r("tr", { children: /* @__PURE__ */ r(
                "td",
                {
                  colSpan: v.length + (o ? 1 : 0) + (k.length > 0 ? 1 : 0),
                  className: "text-center py-8 text-destructive",
                  children: Q
                }
              ) }) : Y.length === 0 ? /* @__PURE__ */ r("tr", { children: /* @__PURE__ */ r(
                "td",
                {
                  colSpan: v.length + (o ? 1 : 0) + (k.length > 0 ? 1 : 0),
                  className: "text-center py-8",
                  children: pe || /* @__PURE__ */ r("div", { className: "text-muted-foreground", children: "No data available" })
                }
              ) }) : Y.map(Se) })
            ]
          }
        )
      }
    ),
    F && A > 1 && /* @__PURE__ */ c("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ c("div", { className: "text-sm text-muted-foreground", children: [
        "Showing ",
        d * b + 1,
        " to",
        " ",
        Math.min((d + 1) * b, B || g.length),
        " of",
        " ",
        B || g.length,
        " results"
      ] }),
      /* @__PURE__ */ c("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ c(
          Ue,
          {
            value: b.toString(),
            onValueChange: (e) => E == null ? void 0 : E(Number(e)),
            children: [
              /* @__PURE__ */ r(He, { className: "w-20", children: /* @__PURE__ */ r(ze, {}) }),
              /* @__PURE__ */ c(Fe, { children: [
                /* @__PURE__ */ r(U, { value: "10", children: "10" }),
                /* @__PURE__ */ r(U, { value: "25", children: "25" }),
                /* @__PURE__ */ r(U, { value: "50", children: "50" }),
                /* @__PURE__ */ r(U, { value: "100", children: "100" })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ c("div", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ r(
            w,
            {
              variant: "outline",
              size: "sm",
              disabled: d === 0,
              onClick: () => m == null ? void 0 : m(d - 1),
              children: "Previous"
            }
          ),
          Array.from({ length: Math.min(5, A) }, (e, i) => {
            const t = d < 3 ? i : d - 2 + i;
            return t >= A ? null : /* @__PURE__ */ r(
              w,
              {
                variant: t === d ? "default" : "outline",
                size: "sm",
                onClick: () => m == null ? void 0 : m(t),
                children: t + 1
              },
              t
            );
          }),
          /* @__PURE__ */ r(
            w,
            {
              variant: "outline",
              size: "sm",
              disabled: d === A - 1,
              onClick: () => m == null ? void 0 : m(d + 1),
              children: "Next"
            }
          )
        ] })
      ] })
    ] })
  ] });
});
Qe.displayName = "DataTable";
export {
  Qe as DataTable
};
//# sourceMappingURL=data-table.js.map
