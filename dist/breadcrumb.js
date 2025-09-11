import { jsx as a, jsxs as n } from "react/jsx-runtime";
import { S as o } from "./index-DQH6odE9.js";
import { c as t } from "./utils-CwJPJKOE.js";
import { C as i } from "./chevron-right-pz9eCjj-.js";
import { E as l } from "./ellipsis-BhAoKPVk.js";
function f({ ...r }) {
  return /* @__PURE__ */ a("nav", { "aria-label": "breadcrumb", "data-slot": "breadcrumb", ...r });
}
function g({ className: r, ...e }) {
  return /* @__PURE__ */ a(
    "ol",
    {
      "data-slot": "breadcrumb-list",
      className: t(
        "text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5",
        r
      ),
      ...e
    }
  );
}
function x({ className: r, ...e }) {
  return /* @__PURE__ */ a(
    "li",
    {
      "data-slot": "breadcrumb-item",
      className: t("inline-flex items-center gap-1.5", r),
      ...e
    }
  );
}
function h({
  asChild: r,
  className: e,
  ...s
}) {
  return /* @__PURE__ */ a(
    r ? o : "a",
    {
      "data-slot": "breadcrumb-link",
      className: t("hover:text-foreground transition-colors", e),
      ...s
    }
  );
}
function N({ className: r, ...e }) {
  return /* @__PURE__ */ a(
    "span",
    {
      "data-slot": "breadcrumb-page",
      role: "link",
      "aria-disabled": "true",
      "aria-current": "page",
      className: t("text-foreground font-normal", r),
      ...e
    }
  );
}
function B({
  children: r,
  className: e,
  ...s
}) {
  return /* @__PURE__ */ a(
    "li",
    {
      "data-slot": "breadcrumb-separator",
      role: "presentation",
      "aria-hidden": "true",
      className: t("[&>svg]:size-3.5", e),
      ...s,
      children: r ?? /* @__PURE__ */ a(i, {})
    }
  );
}
function k({
  className: r,
  ...e
}) {
  return /* @__PURE__ */ n(
    "span",
    {
      "data-slot": "breadcrumb-ellipsis",
      role: "presentation",
      "aria-hidden": "true",
      className: t("flex size-9 items-center justify-center", r),
      ...e,
      children: [
        /* @__PURE__ */ a(l, { className: "size-4" }),
        /* @__PURE__ */ a("span", { className: "sr-only", children: "More" })
      ]
    }
  );
}
export {
  f as Breadcrumb,
  k as BreadcrumbEllipsis,
  x as BreadcrumbItem,
  h as BreadcrumbLink,
  g as BreadcrumbList,
  N as BreadcrumbPage,
  B as BreadcrumbSeparator
};
//# sourceMappingURL=breadcrumb.js.map
