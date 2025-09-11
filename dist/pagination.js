import { jsx as i, jsxs as e } from "react/jsx-runtime";
import { c as t } from "./utils-CwJPJKOE.js";
import { buttonVariants as l } from "./button.js";
import { E as c } from "./ellipsis-BhAoKPVk.js";
import { C as p } from "./chevron-right-pz9eCjj-.js";
import { C as m } from "./chevron-left-C1pkx4AF.js";
function N({ className: a, ...n }) {
  return /* @__PURE__ */ i(
    "nav",
    {
      role: "navigation",
      "aria-label": "pagination",
      "data-slot": "pagination",
      className: t("mx-auto flex w-full justify-center", a),
      ...n
    }
  );
}
function P({
  className: a,
  ...n
}) {
  return /* @__PURE__ */ i(
    "ul",
    {
      "data-slot": "pagination-content",
      className: t("flex flex-row items-center gap-1", a),
      ...n
    }
  );
}
function v({ ...a }) {
  return /* @__PURE__ */ i("li", { "data-slot": "pagination-item", ...a });
}
function o({
  className: a,
  isActive: n,
  size: s = "icon",
  ...r
}) {
  return /* @__PURE__ */ i(
    "a",
    {
      "aria-current": n ? "page" : void 0,
      "data-slot": "pagination-link",
      "data-active": n,
      className: t(
        l({
          variant: n ? "outline" : "ghost",
          size: s
        }),
        a
      ),
      ...r
    }
  );
}
function b({
  className: a,
  ...n
}) {
  return /* @__PURE__ */ e(
    o,
    {
      "aria-label": "Go to previous page",
      size: "default",
      className: t("gap-1 px-2.5 sm:pl-2.5", a),
      ...n,
      children: [
        /* @__PURE__ */ i(m, {}),
        /* @__PURE__ */ i("span", { className: "hidden sm:block", children: "Previous" })
      ]
    }
  );
}
function C({
  className: a,
  ...n
}) {
  return /* @__PURE__ */ e(
    o,
    {
      "aria-label": "Go to next page",
      size: "default",
      className: t("gap-1 px-2.5 sm:pr-2.5", a),
      ...n,
      children: [
        /* @__PURE__ */ i("span", { className: "hidden sm:block", children: "Next" }),
        /* @__PURE__ */ i(p, {})
      ]
    }
  );
}
function j({
  className: a,
  ...n
}) {
  return /* @__PURE__ */ e(
    "span",
    {
      "aria-hidden": !0,
      "data-slot": "pagination-ellipsis",
      className: t("flex size-9 items-center justify-center", a),
      ...n,
      children: [
        /* @__PURE__ */ i(c, { className: "size-4" }),
        /* @__PURE__ */ i("span", { className: "sr-only", children: "More pages" })
      ]
    }
  );
}
export {
  N as Pagination,
  P as PaginationContent,
  j as PaginationEllipsis,
  v as PaginationItem,
  o as PaginationLink,
  C as PaginationNext,
  b as PaginationPrevious
};
//# sourceMappingURL=pagination.js.map
