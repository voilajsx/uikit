import { j as jsxRuntimeExports } from "../../_virtual/jsx-runtime.js";
import { forwardRef, useState } from "react";
import { Search, ArrowUpDown, ArrowUp, ArrowDown } from "lucide-react";
import { cn } from "../../lib/utils.js";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "./table.js";
import "./button.js";
import { Input } from "./input.js";
const DataTable = forwardRef(({
  className,
  columns = [],
  data = [],
  searchable = true,
  sortable = true,
  ...props
}, ref) => {
  const [sorting, setSorting] = useState({ column: null, direction: null });
  const [searchTerm, setSearchTerm] = useState("");
  const filteredData = searchable ? data.filter(
    (row) => Object.values(row).some(
      (value) => String(value).toLowerCase().includes(searchTerm.toLowerCase())
    )
  ) : data;
  const sortedData = sortable && sorting.column ? [...filteredData].sort((a, b) => {
    const aVal = a[sorting.column];
    const bVal = b[sorting.column];
    if (aVal < bVal) return sorting.direction === "asc" ? -1 : 1;
    if (aVal > bVal) return sorting.direction === "asc" ? 1 : -1;
    return 0;
  }) : filteredData;
  const handleSort = (columnKey) => {
    if (!sortable) return;
    setSorting((prev) => {
      if (prev.column === columnKey) {
        if (prev.direction === "asc") return { column: columnKey, direction: "desc" };
        if (prev.direction === "desc") return { column: null, direction: null };
      }
      return { column: columnKey, direction: "asc" };
    });
  };
  const getSortIcon = (columnKey) => {
    if (sorting.column !== columnKey) return /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpDown, { className: "ml-2 h-4 w-4" });
    if (sorting.direction === "asc") return /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUp, { className: "ml-2 h-4 w-4" });
    if (sorting.direction === "desc") return /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowDown, { className: "ml-2 h-4 w-4" });
    return /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpDown, { className: "ml-2 h-4 w-4" });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("w-full space-y-4", className), ref, ...props, children: [
    searchable && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "h-4 w-4 text-muted-foreground" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Input,
        {
          placeholder: "Search...",
          value: searchTerm,
          onChange: (e) => setSearchTerm(e.target.value),
          className: "max-w-sm"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-md border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(TableRow, { children: columns.map((column) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        TableHead,
        {
          className: cn(
            sortable && column.sortable !== false ? "cursor-pointer select-none" : ""
          ),
          onClick: () => column.sortable !== false && handleSort(column.key),
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center", children: [
            column.title,
            sortable && column.sortable !== false && getSortIcon(column.key)
          ] })
        },
        column.key
      )) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: sortedData.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(TableRow, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { colSpan: columns.length, className: "h-24 text-center", children: "No results." }) }) : sortedData.map((row, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(TableRow, { children: columns.map((column) => /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: column.render ? column.render(row[column.key], row) : row[column.key] }, column.key)) }, index)) })
    ] }) })
  ] });
});
DataTable.displayName = "DataTable";
export {
  DataTable
};
//# sourceMappingURL=data-table.js.map
