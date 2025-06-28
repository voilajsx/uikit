import { jsx as m } from "react/jsx-runtime";
import * as s from "react";
import { S as f } from "./index-B5MIi2tR.js";
import { F as u, C as F, u as x, a as I } from "./index.esm-B0tuhHOt.js";
import { c as i } from "./utils-qaFjX9_3.js";
import { Label as g } from "./label.js";
const S = u, c = s.createContext(
  {}
), $ = ({
  ...t
}) => /* @__PURE__ */ m(c.Provider, { value: { name: t.name }, children: /* @__PURE__ */ m(F, { ...t }) }), d = () => {
  const t = s.useContext(c), o = s.useContext(l), { getFieldState: e } = x(), r = I({ name: t.name }), n = e(t.name, r);
  if (!t)
    throw new Error("useFormField should be used within <FormField>");
  const { id: a } = o;
  return {
    id: a,
    name: t.name,
    formItemId: `${a}-form-item`,
    formDescriptionId: `${a}-form-item-description`,
    formMessageId: `${a}-form-item-message`,
    ...n
  };
}, l = s.createContext(
  {}
);
function D({ className: t, ...o }) {
  const e = s.useId();
  return /* @__PURE__ */ m(l.Provider, { value: { id: e }, children: /* @__PURE__ */ m(
    "div",
    {
      "data-slot": "form-item",
      className: i("grid gap-2", t),
      ...o
    }
  ) });
}
function M({
  className: t,
  ...o
}) {
  const { error: e, formItemId: r } = d();
  return /* @__PURE__ */ m(
    g,
    {
      "data-slot": "form-label",
      "data-error": !!e,
      className: i("data-[error=true]:text-destructive", t),
      htmlFor: r,
      ...o
    }
  );
}
function N({ ...t }) {
  const { error: o, formItemId: e, formDescriptionId: r, formMessageId: n } = d();
  return /* @__PURE__ */ m(
    f,
    {
      "data-slot": "form-control",
      id: e,
      "aria-describedby": o ? `${r} ${n}` : `${r}`,
      "aria-invalid": !!o,
      ...t
    }
  );
}
function w({ className: t, ...o }) {
  const { formDescriptionId: e } = d();
  return /* @__PURE__ */ m(
    "p",
    {
      "data-slot": "form-description",
      id: e,
      className: i("text-muted-foreground text-sm", t),
      ...o
    }
  );
}
function P({ className: t, ...o }) {
  const { error: e, formMessageId: r } = d(), n = e ? String((e == null ? void 0 : e.message) ?? "") : o.children;
  return n ? /* @__PURE__ */ m(
    "p",
    {
      "data-slot": "form-message",
      id: r,
      className: i("text-destructive text-sm", t),
      ...o,
      children: n
    }
  ) : null;
}
export {
  S as Form,
  N as FormControl,
  w as FormDescription,
  $ as FormField,
  D as FormItem,
  M as FormLabel,
  P as FormMessage,
  d as useFormField
};
//# sourceMappingURL=form.js.map
