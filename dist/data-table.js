import { jsxs as l, jsx as r } from "react/jsx-runtime";
import * as Ke from "react";
import { forwardRef as Ve, useState as j, useMemo as E, useCallback as K } from "react";
import { c as P } from "./index-Bke1qZdk.js";
import { c as d } from "./utils-CwJPJKOE.js";
import { Button as g } from "./button.js";
import { Input as Ae } from "./input.js";
import { Badge as Te } from "./badge.js";
import { Checkbox as J } from "./checkbox.js";
import { Select as ze, SelectTrigger as Fe, SelectValue as qe, SelectContent as Ee, SelectItem as V } from "./select.js";
import { DropdownMenu as Q, DropdownMenuTrigger as X, DropdownMenuContent as Y, DropdownMenuItem as Z } from "./dropdown-menu.js";
import { S as Ue } from "./search-CpUwRnG-.js";
import { c as C } from "./createLucideIcon-B45kRl5r.js";
import { E as He } from "./ellipsis-BhAoKPVk.js";
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Be = C("ArrowDownWideNarrow", [
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
const Ie = C("ArrowUpDown", [
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
const Oe = C("ArrowUpNarrowWide", [
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
const Re = C("Download", [
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
const _e = C("Filter", [
  ["polygon", { points: "22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3", key: "1yg77f" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $ = C("RefreshCw", [
  ["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
  ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }],
  ["path", { d: "M8 16H3v5", key: "1cv678" }]
]), Ge = P(
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
), x = P(
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
), Je = Ve(({
  data: p = [],
  columns: h = [],
  virtualized: Qe = !1,
  rowHeight: Xe = 40,
  height: ee,
  selectable: o = !1,
  selectionMode: A = "multiple",
  selectedRows: te = [],
  onSelectionChange: S,
  getRowId: M = (w, q) => q.toString(),
  sortable: U = !0,
  sortConfig: re = [],
  onSortChange: H,
  filterable: Ye = !0,
  filterConfig: se = {},
  onFilterChange: B,
  searchable: ae = !0,
  searchPlaceholder: ne = "Search...",
  searchValue: ie = "",
  onSearchChange: le,
  pagination: T = !0,
  currentPage: c = 0,
  pageSize: y = 10,
  totalRows: z,
  onPageChange: F,
  onPageSizeChange: ce,
  actions: N = [],
  bulkActions: I = [],
  expandable: de = !1,
  expandedRows: oe = [],
  onExpandChange: Ze,
  renderExpanded: O,
  loading: he = !1,
  emptyState: me,
  error: R,
  exportable: pe = !1,
  exportFormats: ue = ["csv", "json"],
  onExport: fe,
  size: ve = "md",
  density: k = "normal",
  striped: ge = !1,
  bordered: ye = !0,
  hoverable: Ne = !0,
  className: we,
  style: be
}, ke) => {
  const [w, q] = j(re), [D, xe] = j(se), [W, Ce] = j(ie), [m, _] = j(te), u = E(
    () => h.filter((e) => !e.hidden),
    [h]
  ), Se = K((e) => {
    if (!U || !h.find((i) => i.id === e)?.sortable) return;
    const t = [...w], n = t.findIndex((i) => i.key === e);
    n >= 0 ? t[n].direction === "asc" ? t[n].direction = "desc" : t.splice(n, 1) : t.push({ key: e, direction: "asc" }), q(t), H?.(t);
  }, [U, h, w, H]);
  K((e, a, t = "contains") => {
    const n = { ...D };
    if (a === "" || a == null)
      delete n[e];
    else {
      const i = h.find((s) => s.id === e);
      n[e] = {
        type: i?.filterType || "text",
        value: a,
        operator: t
      };
    }
    xe(n), B?.(n);
  }, [h, D, B]);
  const Me = K((e) => {
    if (!o) return;
    const a = e ? p.map((t, n) => M(t, n)) : [];
    _(a), S?.(a);
  }, [o, p, M, S]), De = K((e, a) => {
    if (!o) return;
    let t = [...m];
    A === "single" ? t = a ? [e] : [] : a ? t.push(e) : t = t.filter((n) => n !== e), _(t), S?.(t);
  }, [o, A, m, S]), b = E(() => {
    let e = [...p];
    return W && (e = e.filter((a) => u.some((t) => {
      const n = t.accessor ? t.accessor(a) : t.accessorKey ? a[t.accessorKey] : "";
      return String(n).toLowerCase().includes(W.toLowerCase());
    }))), Object.entries(D).forEach(([a, t]) => {
      const n = h.find((i) => i.id === a);
      n && (e = e.filter((i) => {
        const s = n.accessor ? n.accessor(i) : n.accessorKey ? i[n.accessorKey] : "";
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
    }), w.length > 0 && e.sort((a, t) => {
      for (const n of w) {
        const i = h.find((je) => je.id === n.key);
        if (!i) continue;
        const s = i.accessor ? i.accessor(a) : i.accessorKey ? a[i.accessorKey] : "", f = i.accessor ? i.accessor(t) : i.accessorKey ? t[i.accessorKey] : "";
        let v = 0;
        if (i.sortFn)
          v = i.sortFn(s, f);
        else
          switch (i.dataType) {
            case "number":
              v = Number(s) - Number(f);
              break;
            case "date":
              v = new Date(s).getTime() - new Date(f).getTime();
              break;
            case "boolean":
              v = (s ? 1 : 0) - (f ? 1 : 0);
              break;
            default:
              v = String(s).localeCompare(String(f));
          }
        if (v !== 0)
          return n.direction === "asc" ? v : -v;
      }
      return 0;
    }), e;
  }, [p, W, D, w, h, u]), G = E(() => {
    if (!T) return b;
    const e = c * y, a = e + y;
    return b.slice(e, a);
  }, [b, T, c, y]), L = Math.ceil((z || b.length) / y), We = (e) => {
    const a = w.find((i) => i.key === e.id), t = !!a, n = a?.direction;
    return /* @__PURE__ */ r(
      "th",
      {
        className: d(
          x({
            density: k,
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
        onClick: () => e.sortable && Se(e.id),
        children: /* @__PURE__ */ l("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ r("span", { children: e.header }),
          e.sortable && /* @__PURE__ */ l("div", { className: "flex flex-col", children: [
            !t && /* @__PURE__ */ r(Ie, { className: "h-3 w-3" }),
            t && n === "asc" && /* @__PURE__ */ r(Oe, { className: "h-3 w-3" }),
            t && n === "desc" && /* @__PURE__ */ r(Be, { className: "h-3 w-3" })
          ] }),
          e.filterable && /* @__PURE__ */ r(
            g,
            {
              variant: "ghost",
              size: "sm",
              className: "h-6 w-6 p-0",
              onClick: (i) => {
                i.stopPropagation();
              },
              children: /* @__PURE__ */ r(_e, { className: "h-3 w-3" })
            }
          )
        ] })
      },
      e.id
    );
  }, Le = (e, a) => {
    const t = M(e, a), n = m.includes(t), i = oe.includes(t);
    return /* @__PURE__ */ l(Ke.Fragment, { children: [
      /* @__PURE__ */ l(
        "tr",
        {
          className: d(
            "transition-colors",
            Ne && "hover:bg-muted/50",
            ge && a % 2 === 0 && "bg-muted/20",
            n && "bg-primary/10"
          ),
          children: [
            o && /* @__PURE__ */ r("td", { className: d(x({ density: k })), children: /* @__PURE__ */ r(
              J,
              {
                checked: n,
                onCheckedChange: (s) => De(t, s)
              }
            ) }),
            u.map((s) => {
              const f = s.accessor ? s.accessor(e) : s.accessorKey ? e[s.accessorKey] : "";
              return /* @__PURE__ */ r(
                "td",
                {
                  className: d(
                    x({
                      density: k,
                      pinned: s.pinned || "none"
                    }),
                    s.className
                  ),
                  style: {
                    width: s.width,
                    minWidth: s.minWidth,
                    maxWidth: s.maxWidth
                  },
                  children: s.cell ? s.cell(f, e, a) : String(f)
                },
                s.id
              );
            }),
            N.length > 0 && /* @__PURE__ */ r("td", { className: d(x({ density: k })), children: /* @__PURE__ */ l(Q, { children: [
              /* @__PURE__ */ r(X, { asChild: !0, children: /* @__PURE__ */ r(g, { variant: "ghost", size: "sm", children: /* @__PURE__ */ r(He, { className: "h-4 w-4" }) }) }),
              /* @__PURE__ */ r(Y, { align: "end", children: N.filter((s) => !s.visible || s.visible(e, a)).map((s) => /* @__PURE__ */ l(
                Z,
                {
                  onClick: () => s.onClick(e, a),
                  className: d(
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
      de && i && O && /* @__PURE__ */ r("tr", { children: /* @__PURE__ */ r("td", { colSpan: u.length + (o ? 1 : 0) + (N.length > 0 ? 1 : 0), children: O(e, a) }) })
    ] }, t);
  };
  return /* @__PURE__ */ l("div", { className: d("space-y-4", we), style: be, children: [
    /* @__PURE__ */ l("div", { className: "flex items-center justify-between gap-4", children: [
      /* @__PURE__ */ l("div", { className: "flex items-center gap-2", children: [
        ae && /* @__PURE__ */ l("div", { className: "relative", children: [
          /* @__PURE__ */ r(Ue, { className: "absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" }),
          /* @__PURE__ */ r(
            Ae,
            {
              placeholder: ne,
              value: W,
              onChange: (e) => {
                Ce(e.target.value), le?.(e.target.value);
              },
              className: "pl-8 w-64"
            }
          )
        ] }),
        I.length > 0 && m.length > 0 && /* @__PURE__ */ l("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ l(Te, { variant: "secondary", children: [
            m.length,
            " selected"
          ] }),
          I.map((e) => /* @__PURE__ */ l(
            g,
            {
              variant: e.variant || "default",
              size: "sm",
              onClick: () => {
                const a = p.filter(
                  (t, n) => m.includes(M(t, n))
                );
                e.onClick(a);
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
      /* @__PURE__ */ l("div", { className: "flex items-center gap-2", children: [
        pe && /* @__PURE__ */ l(Q, { children: [
          /* @__PURE__ */ r(X, { asChild: !0, children: /* @__PURE__ */ l(g, { variant: "outline", size: "sm", children: [
            /* @__PURE__ */ r(Re, { className: "h-4 w-4 mr-2" }),
            "Export"
          ] }) }),
          /* @__PURE__ */ r(Y, { children: ue.map((e) => /* @__PURE__ */ l(
            Z,
            {
              onClick: () => fe?.(e, b),
              children: [
                "Export as ",
                e.toUpperCase()
              ]
            },
            e
          )) })
        ] }),
        /* @__PURE__ */ r(g, { variant: "outline", size: "sm", onClick: () => window.location.reload(), children: /* @__PURE__ */ r($, { className: "h-4 w-4" }) })
      ] })
    ] }),
    /* @__PURE__ */ r(
      "div",
      {
        className: "border border-border rounded-lg overflow-auto",
        style: { height: ee },
        children: /* @__PURE__ */ l(
          "table",
          {
            ref: ke,
            className: d(Ge({ size: ve, bordered: ye })),
            children: [
              /* @__PURE__ */ r("thead", { children: /* @__PURE__ */ l("tr", { children: [
                o && /* @__PURE__ */ r("th", { className: d(x({ density: k }), "bg-muted/50"), children: A === "multiple" && /* @__PURE__ */ r(
                  J,
                  {
                    checked: m.length === p.length && p.length > 0,
                    className: d(
                      m.length > 0 && m.length < p.length && "data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground [&>svg]:opacity-50"
                    ),
                    onCheckedChange: Me
                  }
                ) }),
                u.map(We),
                N.length > 0 && /* @__PURE__ */ r("th", { className: d(x({ density: k }), "bg-muted/50 w-16"), children: "Actions" })
              ] }) }),
              /* @__PURE__ */ r("tbody", { children: he ? /* @__PURE__ */ r("tr", { children: /* @__PURE__ */ r(
                "td",
                {
                  colSpan: u.length + (o ? 1 : 0) + (N.length > 0 ? 1 : 0),
                  className: "text-center py-8",
                  children: /* @__PURE__ */ l("div", { className: "flex items-center justify-center gap-2", children: [
                    /* @__PURE__ */ r($, { className: "h-4 w-4 animate-spin" }),
                    "Loading..."
                  ] })
                }
              ) }) : R ? /* @__PURE__ */ r("tr", { children: /* @__PURE__ */ r(
                "td",
                {
                  colSpan: u.length + (o ? 1 : 0) + (N.length > 0 ? 1 : 0),
                  className: "text-center py-8 text-destructive",
                  children: R
                }
              ) }) : G.length === 0 ? /* @__PURE__ */ r("tr", { children: /* @__PURE__ */ r(
                "td",
                {
                  colSpan: u.length + (o ? 1 : 0) + (N.length > 0 ? 1 : 0),
                  className: "text-center py-8",
                  children: me || /* @__PURE__ */ r("div", { className: "text-muted-foreground", children: "No data available" })
                }
              ) }) : G.map(Le) })
            ]
          }
        )
      }
    ),
    T && L > 1 && /* @__PURE__ */ l("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ l("div", { className: "text-sm text-muted-foreground", children: [
        "Showing ",
        c * y + 1,
        " to",
        " ",
        Math.min((c + 1) * y, z || b.length),
        " of",
        " ",
        z || b.length,
        " results"
      ] }),
      /* @__PURE__ */ l("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ l(
          ze,
          {
            value: y.toString(),
            onValueChange: (e) => ce?.(Number(e)),
            children: [
              /* @__PURE__ */ r(Fe, { className: "w-20", children: /* @__PURE__ */ r(qe, {}) }),
              /* @__PURE__ */ l(Ee, { children: [
                /* @__PURE__ */ r(V, { value: "10", children: "10" }),
                /* @__PURE__ */ r(V, { value: "25", children: "25" }),
                /* @__PURE__ */ r(V, { value: "50", children: "50" }),
                /* @__PURE__ */ r(V, { value: "100", children: "100" })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ l("div", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ r(
            g,
            {
              variant: "outline",
              size: "sm",
              disabled: c === 0,
              onClick: () => F?.(c - 1),
              children: "Previous"
            }
          ),
          Array.from({ length: Math.min(5, L) }, (e, a) => {
            const t = c < 3 ? a : c - 2 + a;
            return t >= L ? null : /* @__PURE__ */ r(
              g,
              {
                variant: t === c ? "default" : "outline",
                size: "sm",
                onClick: () => F?.(t),
                children: t + 1
              },
              t
            );
          }),
          /* @__PURE__ */ r(
            g,
            {
              variant: "outline",
              size: "sm",
              disabled: c === L - 1,
              onClick: () => F?.(c + 1),
              children: "Next"
            }
          )
        ] })
      ] })
    ] })
  ] });
});
Je.displayName = "DataTable";
export {
  Je as DataTable
};
//# sourceMappingURL=data-table.js.map
