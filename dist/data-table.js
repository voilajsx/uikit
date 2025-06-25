import { jsxs as c, jsx as t } from "react/jsx-runtime";
import { useState as g, useMemo as b } from "react";
import { c as j } from "./utils-qaFjX9_3.js";
import { Input as B } from "./input.js";
import { Button as H } from "./button.js";
import { Table as I, TableHeader as L, TableRow as S, TableHead as V, TableBody as M, TableCell as C } from "./table.js";
import { S as R } from "./search-CpUwRnG-.js";
import { C as U } from "./chevron-up-Cv9IJCav.js";
import { C as $ } from "./chevron-down-BORJtX8F.js";
function Q({
  columns: o,
  data: d,
  searchable: f = !0,
  sortable: u = !0,
  searchPlaceholder: k = "Search...",
  className: x
}) {
  const [l, T] = g(""), [i, v] = g(null), [n, m] = g(null), h = b(() => !f || !l.trim() ? d : d.filter((e) => o.some((a) => {
    const r = e[a.key];
    return r == null ? !1 : String(r).toLowerCase().includes(l.toLowerCase());
  })), [d, l, o, f]), p = b(() => !u || !i || !n ? h : [...h].sort((e, a) => {
    const r = e[i], s = a[i];
    if (r == null && s == null) return 0;
    if (r == null) return n === "asc" ? -1 : 1;
    if (s == null) return n === "asc" ? 1 : -1;
    if (typeof r == "string" && typeof s == "string") {
      const N = r.localeCompare(s);
      return n === "asc" ? N : -N;
    }
    if (typeof r == "number" && typeof s == "number")
      return n === "asc" ? r - s : s - r;
    const y = String(r).localeCompare(String(s));
    return n === "asc" ? y : -y;
  }), [h, i, n, u]), w = (e) => {
    const a = o.find((r) => r.key === e);
    a != null && a.sortable && (i === e ? n === "asc" ? m("desc") : n === "desc" && (m(null), v(null)) : (v(e), m("asc")));
  }, D = (e) => i !== e ? null : n === "asc" ? /* @__PURE__ */ t(U, { className: "h-4 w-4" }) : n === "desc" ? /* @__PURE__ */ t($, { className: "h-4 w-4" }) : null;
  return /* @__PURE__ */ c("div", { className: j("space-y-4", x), children: [
    f && /* @__PURE__ */ c("div", { className: "relative", children: [
      /* @__PURE__ */ t(R, { className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }),
      /* @__PURE__ */ t(
        B,
        {
          placeholder: k,
          value: l,
          onChange: (e) => T(e.target.value),
          className: "pl-9"
        }
      )
    ] }),
    /* @__PURE__ */ t("div", { className: "rounded-md border", children: /* @__PURE__ */ c(I, { children: [
      /* @__PURE__ */ t(L, { children: /* @__PURE__ */ t(S, { children: o.map((e) => /* @__PURE__ */ t(V, { children: e.sortable && u ? /* @__PURE__ */ c(
        H,
        {
          variant: "ghost",
          className: "h-auto p-0 font-semibold hover:bg-transparent",
          onClick: () => w(e.key),
          children: [
            /* @__PURE__ */ t("span", { children: e.title }),
            /* @__PURE__ */ t("div", { className: "ml-2 flex h-4 w-4 items-center justify-center", children: D(e.key) })
          ]
        }
      ) : /* @__PURE__ */ t("span", { className: "font-semibold", children: e.title }) }, e.key)) }) }),
      /* @__PURE__ */ t(M, { children: p.length === 0 ? /* @__PURE__ */ t(S, { children: /* @__PURE__ */ t(
        C,
        {
          colSpan: o.length,
          className: "h-24 text-center text-muted-foreground",
          children: l ? "No results found." : "No data available."
        }
      ) }) : p.map((e, a) => /* @__PURE__ */ t(S, { children: o.map((r) => /* @__PURE__ */ t(C, { children: r.render ? r.render(e[r.key], e) : String(e[r.key] ?? "") }, r.key)) }, a)) })
    ] }) }),
    f && /* @__PURE__ */ c("div", { className: "text-sm text-muted-foreground", children: [
      "Showing ",
      p.length,
      " of ",
      d.length,
      " results",
      l && ` for "${l}"`
    ] })
  ] });
}
export {
  Q as DataTable
};
//# sourceMappingURL=data-table.js.map
