import { jsx as a, jsxs as s } from "react/jsx-runtime";
import { R as r, C as d, a as n, D as c, T as g, b as u, O as f, P as m } from "./index-CzfPQm2s.js";
import { c as o } from "./utils-qaFjX9_3.js";
import { X as p } from "./x-BxwubQiM.js";
function N({
  ...t
}) {
  return /* @__PURE__ */ a(r, { "data-slot": "dialog", ...t });
}
function z({
  ...t
}) {
  return /* @__PURE__ */ a(u, { "data-slot": "dialog-trigger", ...t });
}
function x({
  ...t
}) {
  return /* @__PURE__ */ a(m, { "data-slot": "dialog-portal", ...t });
}
function C({
  ...t
}) {
  return /* @__PURE__ */ a(n, { "data-slot": "dialog-close", ...t });
}
function D({
  className: t,
  ...e
}) {
  return /* @__PURE__ */ a(
    f,
    {
      "data-slot": "dialog-overlay",
      className: o(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        t
      ),
      ...e
    }
  );
}
function w({
  className: t,
  children: e,
  showCloseButton: l = !0,
  ...i
}) {
  return /* @__PURE__ */ s(x, { "data-slot": "dialog-portal", children: [
    /* @__PURE__ */ a(D, {}),
    /* @__PURE__ */ s(
      d,
      {
        "data-slot": "dialog-content",
        className: o(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
          t
        ),
        ...i,
        children: [
          e,
          l && /* @__PURE__ */ s(
            n,
            {
              "data-slot": "dialog-close",
              className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
              children: [
                /* @__PURE__ */ a(p, {}),
                /* @__PURE__ */ a("span", { className: "sr-only", children: "Close" })
              ]
            }
          )
        ]
      }
    )
  ] });
}
function T({ className: t, ...e }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "dialog-header",
      className: o("flex flex-col gap-2 text-center sm:text-left", t),
      ...e
    }
  );
}
function k({ className: t, ...e }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "dialog-footer",
      className: o(
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        t
      ),
      ...e
    }
  );
}
function j({
  className: t,
  ...e
}) {
  return /* @__PURE__ */ a(
    g,
    {
      "data-slot": "dialog-title",
      className: o("text-lg leading-none font-semibold", t),
      ...e
    }
  );
}
function O({
  className: t,
  ...e
}) {
  return /* @__PURE__ */ a(
    c,
    {
      "data-slot": "dialog-description",
      className: o("text-muted-foreground text-sm", t),
      ...e
    }
  );
}
export {
  N as Dialog,
  C as DialogClose,
  w as DialogContent,
  O as DialogDescription,
  k as DialogFooter,
  T as DialogHeader,
  D as DialogOverlay,
  x as DialogPortal,
  j as DialogTitle,
  z as DialogTrigger
};
//# sourceMappingURL=dialog.js.map
