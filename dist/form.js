import { jsx as m } from "react/jsx-runtime";
import * as y from "react";
import i from "react";
import { S as W } from "./index-B5MIi2tR.js";
import { c as p } from "./utils-qaFjX9_3.js";
import { Label as G } from "./label.js";
var j = (e) => e.type === "checkbox", K = (e) => e instanceof Date, O = (e) => e == null;
const q = (e) => typeof e == "object";
var b = (e) => !O(e) && !Array.isArray(e) && q(e) && !K(e), z = (e) => b(e) && e.target ? j(e.target) ? e.target.checked : e.target.value : e, J = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e, Q = (e, o) => e.has(J(o)), X = (e) => {
  const o = e.constructor && e.constructor.prototype;
  return b(o) && o.hasOwnProperty("isPrototypeOf");
}, Y = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function L(e) {
  let o;
  const t = Array.isArray(e), s = typeof FileList < "u" ? e instanceof FileList : !1;
  if (e instanceof Date)
    o = new Date(e);
  else if (e instanceof Set)
    o = new Set(e);
  else if (!(Y && (e instanceof Blob || s)) && (t || b(e)))
    if (o = t ? [] : {}, !t && !X(e))
      o = e;
    else
      for (const r in e)
        e.hasOwnProperty(r) && (o[r] = L(e[r]));
  else
    return e;
  return o;
}
var M = (e) => /^\w*$/.test(e), V = (e) => e === void 0, Z = (e) => Array.isArray(e) ? e.filter(Boolean) : [], B = (e) => Z(e.replace(/["|']|\]/g, "").split(/\.|\[/)), c = (e, o, t) => {
  if (!o || !b(e))
    return t;
  const s = (M(o) ? [o] : B(o)).reduce((r, n) => O(r) ? r : r[n], e);
  return V(s) || s === e ? V(e[o]) ? t : e[o] : s;
}, C = (e) => typeof e == "boolean", P = (e, o, t) => {
  let s = -1;
  const r = M(o) ? [o] : B(o), n = r.length, l = n - 1;
  for (; ++s < n; ) {
    const u = r[s];
    let a = t;
    if (s !== l) {
      const f = e[u];
      a = b(f) || Array.isArray(f) ? f : isNaN(+r[s + 1]) ? {} : [];
    }
    if (u === "__proto__" || u === "constructor" || u === "prototype")
      return;
    e[u] = a, e = e[u];
  }
};
const k = {
  BLUR: "blur",
  CHANGE: "change"
}, D = {
  all: "all"
}, S = i.createContext(null);
S.displayName = "HookFormContext";
const v = () => i.useContext(S), ee = (e) => {
  const { children: o, ...t } = e;
  return i.createElement(S.Provider, { value: t }, o);
};
var te = (e, o, t, s = !0) => {
  const r = {
    defaultValues: o._defaultValues
  };
  for (const n in e)
    Object.defineProperty(r, n, {
      get: () => {
        const l = n;
        return o._proxyFormState[l] !== D.all && (o._proxyFormState[l] = !s || D.all), t && (t[l] = !0), e[l];
      }
    });
  return r;
};
const R = typeof window < "u" ? y.useLayoutEffect : y.useEffect;
function U(e) {
  const o = v(), { control: t = o.control, disabled: s, name: r, exact: n } = e || {}, [l, u] = i.useState(t._formState), a = i.useRef({
    isDirty: !1,
    isLoading: !1,
    dirtyFields: !1,
    touchedFields: !1,
    validatingFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  });
  return R(() => t._subscribe({
    name: r,
    formState: a.current,
    exact: n,
    callback: (f) => {
      !s && u({
        ...t._formState,
        ...f
      });
    }
  }), [r, s, n]), i.useEffect(() => {
    a.current.isValid && t._setValid(!0);
  }, [t]), i.useMemo(() => te(l, t, a.current, !1), [l, t]);
}
var re = (e) => typeof e == "string", oe = (e, o, t, s, r) => re(e) ? c(t, e, r) : Array.isArray(e) ? e.map((n) => c(t, n)) : t;
function se(e) {
  const o = v(), { control: t = o.control, name: s, defaultValue: r, disabled: n, exact: l } = e || {}, u = i.useRef(r), [a, f] = i.useState(t._getWatch(s, u.current));
  return R(() => t._subscribe({
    name: s,
    formState: {
      values: !0
    },
    exact: l,
    callback: (F) => !n && f(oe(s, t._names, F.values || t._formValues, !1, u.current))
  }), [s, t, n, l]), i.useEffect(() => t._removeUnmounted()), a;
}
function ne(e) {
  const o = v(), { name: t, disabled: s, control: r = o.control, shouldUnregister: n } = e, l = Q(r._names.array, t), u = se({
    control: r,
    name: t,
    defaultValue: c(r._formValues, t, c(r._defaultValues, t, e.defaultValue)),
    exact: !0
  }), a = U({
    control: r,
    name: t,
    exact: !0
  }), f = i.useRef(e), F = i.useRef(r.register(t, {
    ...e.rules,
    value: u,
    ...C(e.disabled) ? { disabled: e.disabled } : {}
  })), I = i.useMemo(() => Object.defineProperties({}, {
    invalid: {
      enumerable: !0,
      get: () => !!c(a.errors, t)
    },
    isDirty: {
      enumerable: !0,
      get: () => !!c(a.dirtyFields, t)
    },
    isTouched: {
      enumerable: !0,
      get: () => !!c(a.touchedFields, t)
    },
    isValidating: {
      enumerable: !0,
      get: () => !!c(a.validatingFields, t)
    },
    error: {
      enumerable: !0,
      get: () => c(a.errors, t)
    }
  }), [a, t]), A = i.useCallback((d) => F.current.onChange({
    target: {
      value: z(d),
      name: t
    },
    type: k.CHANGE
  }), [t]), w = i.useCallback(() => F.current.onBlur({
    target: {
      value: c(r._formValues, t),
      name: t
    },
    type: k.BLUR
  }), [t, r._formValues]), E = i.useCallback((d) => {
    const _ = c(r._fields, t);
    _ && d && (_._f.ref = {
      focus: () => d.focus && d.focus(),
      select: () => d.select && d.select(),
      setCustomValidity: (g) => d.setCustomValidity(g),
      reportValidity: () => d.reportValidity()
    });
  }, [r._fields, t]), N = i.useMemo(() => ({
    name: t,
    value: u,
    ...C(s) || a.disabled ? { disabled: a.disabled || s } : {},
    onChange: A,
    onBlur: w,
    ref: E
  }), [t, s, a.disabled, A, w, E, u]);
  return i.useEffect(() => {
    const d = r._options.shouldUnregister || n;
    r.register(t, {
      ...f.current.rules,
      ...C(f.current.disabled) ? { disabled: f.current.disabled } : {}
    });
    const _ = (g, H) => {
      const h = c(r._fields, g);
      h && h._f && (h._f.mount = H);
    };
    if (_(t, !0), d) {
      const g = L(c(r._options.defaultValues, t));
      P(r._defaultValues, t, g), V(c(r._formValues, t)) && P(r._formValues, t, g);
    }
    return !l && r.register(t), () => {
      (l ? d && !r._state.action : d) ? r.unregister(t) : _(t, !1);
    };
  }, [t, r, l, n]), i.useEffect(() => {
    r._setDisabledField({
      disabled: s,
      name: t
    });
  }, [s, t, r]), i.useMemo(() => ({
    field: N,
    formState: a,
    fieldState: I
  }), [N, a, I]);
}
const ae = (e) => e.render(ne(e)), fe = ee, $ = y.createContext(
  {}
), me = ({
  ...e
}) => /* @__PURE__ */ m($.Provider, { value: { name: e.name }, children: /* @__PURE__ */ m(ae, { ...e }) }), x = () => {
  const e = y.useContext($), o = y.useContext(T), { getFieldState: t } = v(), s = U({ name: e.name }), r = t(e.name, s);
  if (!e)
    throw new Error("useFormField should be used within <FormField>");
  const { id: n } = o;
  return {
    id: n,
    name: e.name,
    formItemId: `${n}-form-item`,
    formDescriptionId: `${n}-form-item-description`,
    formMessageId: `${n}-form-item-message`,
    ...r
  };
}, T = y.createContext(
  {}
);
function ye({ className: e, ...o }) {
  const t = y.useId();
  return /* @__PURE__ */ m(T.Provider, { value: { id: t }, children: /* @__PURE__ */ m(
    "div",
    {
      "data-slot": "form-item",
      className: p("grid gap-2", e),
      ...o
    }
  ) });
}
function ge({
  className: e,
  ...o
}) {
  const { error: t, formItemId: s } = x();
  return /* @__PURE__ */ m(
    G,
    {
      "data-slot": "form-label",
      "data-error": !!t,
      className: p("data-[error=true]:text-destructive", e),
      htmlFor: s,
      ...o
    }
  );
}
function _e({ ...e }) {
  const { error: o, formItemId: t, formDescriptionId: s, formMessageId: r } = x();
  return /* @__PURE__ */ m(
    W,
    {
      "data-slot": "form-control",
      id: t,
      "aria-describedby": o ? `${s} ${r}` : `${s}`,
      "aria-invalid": !!o,
      ...e
    }
  );
}
function be({ className: e, ...o }) {
  const { formDescriptionId: t } = x();
  return /* @__PURE__ */ m(
    "p",
    {
      "data-slot": "form-description",
      id: t,
      className: p("text-muted-foreground text-sm", e),
      ...o
    }
  );
}
function Fe({ className: e, ...o }) {
  const { error: t, formMessageId: s } = x(), r = t ? String((t == null ? void 0 : t.message) ?? "") : o.children;
  return r ? /* @__PURE__ */ m(
    "p",
    {
      "data-slot": "form-message",
      id: s,
      className: p("text-destructive text-sm", e),
      ...o,
      children: r
    }
  ) : null;
}
export {
  fe as Form,
  _e as FormControl,
  be as FormDescription,
  me as FormField,
  ye as FormItem,
  ge as FormLabel,
  Fe as FormMessage,
  x as useFormField
};
//# sourceMappingURL=form.js.map
