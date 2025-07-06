import { jsxs as h, jsx as i } from "react/jsx-runtime";
import * as S from "react";
import g, { forwardRef as U, useState as b, useCallback as W } from "react";
import { S as he } from "./index-B5MIi2tR.js";
import { c as F } from "./utils-qaFjX9_3.js";
import { Input as be } from "./input.js";
import { Textarea as ye } from "./textarea.js";
import { Button as Q } from "./button.js";
import { Label as j } from "./label.js";
import { Checkbox as xe } from "./checkbox.js";
import { Select as pe, SelectTrigger as Ve, SelectValue as ve, SelectContent as Ne, SelectItem as ee } from "./select.js";
import { c as G } from "./createLucideIcon-B45kRl5r.js";
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const R = G("CircleAlert", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _e = G("CircleCheck", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fe = G("EyeOff", [
  [
    "path",
    {
      d: "M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",
      key: "ct8e1f"
    }
  ],
  ["path", { d: "M14.084 14.158a3 3 0 0 1-4.242-4.242", key: "151rxh" }],
  [
    "path",
    {
      d: "M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",
      key: "13bj9a"
    }
  ],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Se = G("Eye", [
  [
    "path",
    {
      d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
      key: "1nclc0"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
]);
var ke = (e) => e.type === "checkbox", Ee = (e) => e instanceof Date, ae = (e) => e == null;
const Ce = (e) => typeof e == "object";
var z = (e) => !ae(e) && !Array.isArray(e) && Ce(e) && !Ee(e), Ie = (e) => z(e) && e.target ? ke(e.target) ? e.target.checked : e.target.value : e, we = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e, Me = (e, s) => e.has(we(s)), Ae = (e) => {
  const s = e.constructor && e.constructor.prototype;
  return z(s) && s.hasOwnProperty("isPrototypeOf");
}, Pe = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function le(e) {
  let s;
  const t = Array.isArray(e), a = typeof FileList < "u" ? e instanceof FileList : !1;
  if (e instanceof Date)
    s = new Date(e);
  else if (e instanceof Set)
    s = new Set(e);
  else if (!(Pe && (e instanceof Blob || a)) && (t || z(e)))
    if (s = t ? [] : {}, !t && !Ae(e))
      s = e;
    else
      for (const r in e)
        e.hasOwnProperty(r) && (s[r] = le(e[r]));
  else
    return e;
  return s;
}
var oe = (e) => /^\w*$/.test(e), X = (e) => e === void 0, Te = (e) => Array.isArray(e) ? e.filter(Boolean) : [], ie = (e) => Te(e.replace(/["|']|\]/g, "").split(/\.|\[/)), _ = (e, s, t) => {
  if (!s || !z(e))
    return t;
  const a = (oe(s) ? [s] : ie(s)).reduce((r, l) => ae(r) ? r : r[l], e);
  return X(a) || a === e ? X(e[s]) ? t : e[s] : a;
}, J = (e) => typeof e == "boolean", te = (e, s, t) => {
  let a = -1;
  const r = oe(s) ? [s] : ie(s), l = r.length, o = l - 1;
  for (; ++a < l; ) {
    const n = r[a];
    let c = t;
    if (a !== o) {
      const f = e[n];
      c = z(f) || Array.isArray(f) ? f : isNaN(+r[a + 1]) ? {} : [];
    }
    if (n === "__proto__" || n === "constructor" || n === "prototype")
      return;
    e[n] = c, e = e[n];
  }
};
const se = {
  BLUR: "blur",
  CHANGE: "change"
}, re = {
  all: "all"
}, Y = g.createContext(null);
Y.displayName = "HookFormContext";
const Z = () => g.useContext(Y), De = (e) => {
  const { children: s, ...t } = e;
  return g.createElement(Y.Provider, { value: t }, s);
};
var Oe = (e, s, t, a = !0) => {
  const r = {
    defaultValues: s._defaultValues
  };
  for (const l in e)
    Object.defineProperty(r, l, {
      get: () => {
        const o = l;
        return s._proxyFormState[o] !== re.all && (s._proxyFormState[o] = !a || re.all), t && (t[o] = !0), e[o];
      }
    });
  return r;
};
const ce = typeof window < "u" ? S.useLayoutEffect : S.useEffect;
function ne(e) {
  const s = Z(), { control: t = s.control, disabled: a, name: r, exact: l } = e || {}, [o, n] = g.useState(t._formState), c = g.useRef({
    isDirty: !1,
    isLoading: !1,
    dirtyFields: !1,
    touchedFields: !1,
    validatingFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  });
  return ce(() => t._subscribe({
    name: r,
    formState: c.current,
    exact: l,
    callback: (f) => {
      !a && n({
        ...t._formState,
        ...f
      });
    }
  }), [r, a, l]), g.useEffect(() => {
    c.current.isValid && t._setValid(!0);
  }, [t]), g.useMemo(() => Oe(o, t, c.current, !1), [o, t]);
}
var $e = (e) => typeof e == "string", Re = (e, s, t, a, r) => $e(e) ? _(t, e, r) : Array.isArray(e) ? e.map((l) => _(t, l)) : t;
function Ue(e) {
  const s = Z(), { control: t = s.control, name: a, defaultValue: r, disabled: l, exact: o } = e || {}, n = g.useRef(r), [c, f] = g.useState(t._getWatch(a, n.current));
  return ce(() => t._subscribe({
    name: a,
    formState: {
      values: !0
    },
    exact: o,
    callback: (k) => !l && f(Re(a, t._names, k.values || t._formValues, !1, n.current))
  }), [a, t, l, o]), g.useEffect(() => t._removeUnmounted()), c;
}
function je(e) {
  const s = Z(), { name: t, disabled: a, control: r = s.control, shouldUnregister: l } = e, o = Me(r._names.array, t), n = Ue({
    control: r,
    name: t,
    defaultValue: _(r._formValues, t, _(r._defaultValues, t, e.defaultValue)),
    exact: !0
  }), c = ne({
    control: r,
    name: t,
    exact: !0
  }), f = g.useRef(e), k = g.useRef(r.register(t, {
    ...e.rules,
    value: n,
    ...J(e.disabled) ? { disabled: e.disabled } : {}
  })), C = g.useMemo(() => Object.defineProperties({}, {
    invalid: {
      enumerable: !0,
      get: () => !!_(c.errors, t)
    },
    isDirty: {
      enumerable: !0,
      get: () => !!_(c.dirtyFields, t)
    },
    isTouched: {
      enumerable: !0,
      get: () => !!_(c.touchedFields, t)
    },
    isValidating: {
      enumerable: !0,
      get: () => !!_(c.validatingFields, t)
    },
    error: {
      enumerable: !0,
      get: () => _(c.errors, t)
    }
  }), [c, t]), w = g.useCallback((d) => k.current.onChange({
    target: {
      value: Ie(d),
      name: t
    },
    type: se.CHANGE
  }), [t]), E = g.useCallback(() => k.current.onBlur({
    target: {
      value: _(r._formValues, t),
      name: t
    },
    type: se.BLUR
  }), [t, r._formValues]), I = g.useCallback((d) => {
    const u = _(r._fields, t);
    u && d && (u._f.ref = {
      focus: () => d.focus && d.focus(),
      select: () => d.select && d.select(),
      setCustomValidity: (y) => d.setCustomValidity(y),
      reportValidity: () => d.reportValidity()
    });
  }, [r._fields, t]), V = g.useMemo(() => ({
    name: t,
    value: n,
    ...J(a) || c.disabled ? { disabled: c.disabled || a } : {},
    onChange: w,
    onBlur: E,
    ref: I
  }), [t, a, c.disabled, w, E, I, n]);
  return g.useEffect(() => {
    const d = r._options.shouldUnregister || l;
    r.register(t, {
      ...f.current.rules,
      ...J(f.current.disabled) ? { disabled: f.current.disabled } : {}
    });
    const u = (y, x) => {
      const v = _(r._fields, y);
      v && v._f && (v._f.mount = x);
    };
    if (u(t, !0), d) {
      const y = le(_(r._options.defaultValues, t));
      te(r._defaultValues, t, y), X(_(r._formValues, t)) && te(r._formValues, t, y);
    }
    return !o && r.register(t), () => {
      (o ? d && !r._state.action : d) ? r.unregister(t) : u(t, !1);
    };
  }, [t, r, o, l]), g.useEffect(() => {
    r._setDisabledField({
      disabled: a,
      name: t
    });
  }, [a, t, r]), g.useMemo(() => ({
    field: V,
    formState: c,
    fieldState: C
  }), [V, c, C]);
}
const ze = (e) => e.render(je(e)), de = (e, s) => {
  const [t, a] = b(e);
  return S.useEffect(() => {
    const r = setTimeout(() => a(e), s);
    return () => clearTimeout(r);
  }, [e, s]), t;
}, Be = (e) => {
  if (!e) return { score: 0, label: "", color: "" };
  let s = 0;
  return e.length >= 8 && (s += 25), e.length >= 12 && (s += 25), /[a-z]/.test(e) && (s += 10), /[A-Z]/.test(e) && (s += 10), /\d/.test(e) && (s += 15), /[^a-zA-Z\d]/.test(e) && (s += 15), s < 30 ? { score: s, label: "Weak", color: "text-destructive" } : s < 60 ? { score: s, label: "Medium", color: "text-orange-600" } : { score: s, label: "Strong", color: "text-green-600" };
}, lt = De, ue = S.createContext(
  {}
), ot = ({
  ...e
}) => /* @__PURE__ */ i(ue.Provider, { value: { name: e.name }, children: /* @__PURE__ */ i(ze, { ...e }) }), K = () => {
  const e = S.useContext(ue), s = S.useContext(fe), { getFieldState: t } = Z(), a = ne({ name: e.name }), r = t(e.name, a);
  if (!e)
    throw new Error("useFormField should be used within <FormField>");
  const { id: l } = s;
  return {
    id: l,
    name: e.name,
    formItemId: `${l}-form-item`,
    formDescriptionId: `${l}-form-item-description`,
    formMessageId: `${l}-form-item-message`,
    ...r
  };
}, fe = S.createContext(
  {}
);
function it({ className: e, ...s }) {
  const t = S.useId();
  return /* @__PURE__ */ i(fe.Provider, { value: { id: t }, children: /* @__PURE__ */ i(
    "div",
    {
      "data-slot": "form-item",
      className: F("grid gap-2", e),
      ...s
    }
  ) });
}
function ct({
  className: e,
  ...s
}) {
  const { error: t, formItemId: a } = K();
  return /* @__PURE__ */ i(
    j,
    {
      "data-slot": "form-label",
      "data-error": !!t,
      className: F("data-[error=true]:text-destructive", e),
      htmlFor: a,
      ...s
    }
  );
}
function nt({ ...e }) {
  const { error: s, formItemId: t, formDescriptionId: a, formMessageId: r } = K();
  return /* @__PURE__ */ i(
    he,
    {
      "data-slot": "form-control",
      id: t,
      "aria-describedby": s ? `${a} ${r}` : `${a}`,
      "aria-invalid": !!s,
      ...e
    }
  );
}
function dt({ className: e, ...s }) {
  const { formDescriptionId: t } = K();
  return /* @__PURE__ */ i(
    "p",
    {
      "data-slot": "form-description",
      id: t,
      className: F("text-muted-foreground text-sm", e),
      ...s
    }
  );
}
function ut({ className: e, ...s }) {
  const { error: t, formMessageId: a } = K(), r = t ? String((t == null ? void 0 : t.message) ?? "") : s.children;
  return r ? /* @__PURE__ */ i(
    "p",
    {
      "data-slot": "form-message",
      id: a,
      className: F("text-destructive text-sm", e),
      ...s,
      children: r
    }
  ) : null;
}
const He = U(({
  value: e = "",
  onChange: s,
  onFocus: t,
  onBlur: a,
  type: r = "text",
  required: l = !1,
  minLength: o,
  maxLength: n,
  pattern: c,
  label: f,
  placeholder: k,
  disabled: C = !1,
  showPasswordStrength: w = !1,
  showPasswordToggle: E = !0,
  className: I,
  ...V
}, d) => {
  const [u, y] = b(e), [x, v] = b(!1), [m, M] = b(!1), [P, T] = b(!0), [B, H] = b("");
  S.useEffect(() => {
    y(e || "");
  }, [e]);
  const D = de(u, 300), O = W((p) => l && !p.trim() ? { isValid: !1, message: "This field is required" } : !p.trim() && !l ? { isValid: !0, message: "" } : o && p.length < o ? { isValid: !1, message: `Minimum ${o} characters required` } : n && p.length > n ? { isValid: !1, message: `Maximum ${n} characters allowed` } : r === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(p) ? { isValid: !1, message: "Please enter a valid email address" } : r === "url" && !/^https?:\/\/.+\..+/.test(p) ? { isValid: !1, message: "Please enter a valid URL" } : r === "tel" && !/^[\+]?[1-9][\d]{0,15}$/.test(p) ? { isValid: !1, message: "Please enter a valid phone number" } : c && !new RegExp(c).test(p) ? { isValid: !1, message: "Please match the required format" } : { isValid: !0, message: "" }, [l, o, n, r, c]);
  S.useEffect(() => {
    if (m) {
      const p = O(D);
      T(p.isValid), H(p.message);
    }
  }, [D, O, m]);
  const N = (p) => {
    const q = p.target.value;
    y(q), s == null || s(q), m || M(!0);
  }, $ = () => {
    M(!0);
    const p = O(u);
    T(p.isValid), H(p.message), a == null || a();
  }, me = r === "password" && x ? "text" : r, L = m && !P, ge = m && P && u, A = r === "password" && w ? Be(u) : null;
  return /* @__PURE__ */ h("div", { className: "space-y-2", children: [
    f && /* @__PURE__ */ i(
      j,
      {
        className: F(
          "text-foreground",
          l && "after:content-['*'] after:ml-0.5 after:text-destructive"
        ),
        children: f
      }
    ),
    /* @__PURE__ */ h("div", { className: "relative", children: [
      /* @__PURE__ */ i(
        be,
        {
          ...V,
          ref: d,
          type: me,
          value: u,
          onChange: N,
          onBlur: $,
          onFocus: t,
          placeholder: k,
          disabled: C,
          className: F(
            "bg-background border-border text-foreground",
            L && "border-destructive focus:border-destructive",
            ge && "border-green-500",
            r === "password" && E && "pr-10",
            I
          )
        }
      ),
      r === "password" && E && /* @__PURE__ */ i(
        Q,
        {
          type: "button",
          variant: "ghost",
          size: "sm",
          className: "absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent",
          onClick: () => v(!x),
          tabIndex: -1,
          children: x ? /* @__PURE__ */ i(Fe, { className: "h-4 w-4" }) : /* @__PURE__ */ i(Se, { className: "h-4 w-4" })
        }
      ),
      m && u && !E && /* @__PURE__ */ i("div", { className: "absolute right-3 top-2.5", children: P ? /* @__PURE__ */ i(_e, { className: "h-4 w-4 text-green-500" }) : /* @__PURE__ */ i(R, { className: "h-4 w-4 text-destructive" }) })
    ] }),
    A && u && /* @__PURE__ */ h("div", { className: "space-y-1", children: [
      /* @__PURE__ */ h("div", { className: "flex justify-between text-xs", children: [
        /* @__PURE__ */ i("span", { className: "text-muted-foreground", children: "Password strength" }),
        /* @__PURE__ */ i("span", { className: A.color, children: A.label })
      ] }),
      /* @__PURE__ */ i("div", { className: "w-full bg-muted rounded-full h-1.5", children: /* @__PURE__ */ i(
        "div",
        {
          className: F(
            "h-1.5 rounded-full transition-all duration-300",
            A.score < 30 && "bg-destructive",
            A.score >= 30 && A.score < 60 && "bg-orange-500",
            A.score >= 60 && "bg-green-500"
          ),
          style: { width: `${A.score}%` }
        }
      ) })
    ] }),
    L && B && /* @__PURE__ */ h("div", { className: "flex items-center gap-1 text-sm text-destructive", children: [
      /* @__PURE__ */ i(R, { className: "h-3 w-3" }),
      B
    ] })
  ] });
});
He.displayName = "ValidatedInput";
const We = U(({
  value: e = "",
  onChange: s,
  onFocus: t,
  onBlur: a,
  required: r = !1,
  minLength: l,
  maxLength: o,
  label: n,
  placeholder: c,
  disabled: f = !1,
  rows: k = 3,
  showCharCount: C = !0,
  className: w,
  ...E
}, I) => {
  const [V, d] = b(e), [u, y] = b(!1), [x, v] = b(!0), [m, M] = b("");
  S.useEffect(() => {
    d(e || "");
  }, [e]);
  const P = de(V, 300), T = W((N) => r && !N.trim() ? { isValid: !1, message: "This field is required" } : !N.trim() && !r ? { isValid: !0, message: "" } : l && N.length < l ? { isValid: !1, message: `Minimum ${l} characters required` } : o && N.length > o ? { isValid: !1, message: `Maximum ${o} characters allowed` } : { isValid: !0, message: "" }, [r, l, o]);
  S.useEffect(() => {
    if (u) {
      const N = T(P);
      v(N.isValid), M(N.message);
    }
  }, [P, T, u]);
  const B = (N) => {
    const $ = N.target.value;
    o && $.length > o || (d($), s == null || s($), u || y(!0));
  }, H = () => {
    y(!0);
    const N = T(V);
    v(N.isValid), M(N.message), a == null || a();
  }, D = u && !x, O = u && x && V;
  return /* @__PURE__ */ h("div", { className: "space-y-2", children: [
    n && /* @__PURE__ */ i(
      j,
      {
        className: F(
          "text-foreground",
          r && "after:content-['*'] after:ml-0.5 after:text-destructive"
        ),
        children: n
      }
    ),
    /* @__PURE__ */ i(
      ye,
      {
        ...E,
        ref: I,
        value: V,
        onChange: B,
        onBlur: H,
        onFocus: t,
        placeholder: c,
        disabled: f,
        rows: k,
        className: F(
          "bg-background border-border text-foreground",
          D && "border-destructive focus:border-destructive",
          O && "border-green-500",
          w
        )
      }
    ),
    C && o && /* @__PURE__ */ h("div", { className: "text-xs text-muted-foreground text-right", children: [
      V.length,
      " / ",
      o
    ] }),
    D && m && /* @__PURE__ */ h("div", { className: "flex items-center gap-1 text-sm text-destructive", children: [
      /* @__PURE__ */ i(R, { className: "h-3 w-3" }),
      m
    ] })
  ] });
});
We.displayName = "ValidatedTextarea";
const Ge = U(({
  value: e = "",
  onChange: s,
  required: t = !1,
  disabled: a = !1,
  label: r,
  placeholder: l = "Select an option...",
  options: o,
  clearable: n = !1,
  className: c
}, f) => {
  const [k, C] = b(e), [w, E] = b(!1), [I, V] = b(!0), [d, u] = b("");
  S.useEffect(() => {
    C(e || "");
  }, [e]);
  const y = W((m) => t && !m ? { isValid: !1, message: "Please select an option" } : { isValid: !0, message: "" }, [t]), x = (m) => {
    E(!0), C(m);
    const M = y(m);
    V(M.isValid), u(M.message), s == null || s(m);
  }, v = w && !I;
  return /* @__PURE__ */ h("div", { className: "space-y-2", ref: f, children: [
    r && /* @__PURE__ */ i(
      j,
      {
        className: F(
          "text-foreground",
          t && "after:content-['*'] after:ml-0.5 after:text-destructive"
        ),
        children: r
      }
    ),
    /* @__PURE__ */ h(
      pe,
      {
        value: k,
        onValueChange: x,
        disabled: a,
        children: [
          /* @__PURE__ */ i(
            Ve,
            {
              className: F(
                "bg-background border-border text-foreground",
                v && "border-destructive focus:border-destructive",
                c
              ),
              children: /* @__PURE__ */ i(ve, { placeholder: l })
            }
          ),
          /* @__PURE__ */ h(Ne, { className: "bg-popover border-border", children: [
            n && k && /* @__PURE__ */ i(ee, { value: "", className: "text-muted-foreground", children: "Clear selection" }),
            o.map((m) => /* @__PURE__ */ i(
              ee,
              {
                value: m.value,
                disabled: m.disabled,
                className: "text-foreground",
                children: m.label
              },
              m.value
            ))
          ] })
        ]
      }
    ),
    v && d && /* @__PURE__ */ h("div", { className: "flex items-center gap-1 text-sm text-destructive", children: [
      /* @__PURE__ */ i(R, { className: "h-3 w-3" }),
      d
    ] })
  ] });
});
Ge.displayName = "ValidatedSelect";
const Ze = U(({
  checked: e = !1,
  onChange: s,
  required: t = !1,
  disabled: a = !1,
  label: r,
  description: l,
  className: o
}, n) => {
  const [c, f] = b(e), [k, C] = b(!1), [w, E] = b(!0), [I, V] = b("");
  S.useEffect(() => {
    f(e || !1);
  }, [e]);
  const d = W((x) => t && !x ? { isValid: !1, message: "This field is required" } : { isValid: !0, message: "" }, [t]), u = (x) => {
    C(!0), f(x);
    const v = d(x);
    E(v.isValid), V(v.message), s == null || s(x);
  }, y = k && !w;
  return /* @__PURE__ */ h("div", { className: F("space-y-2", o), ref: n, children: [
    /* @__PURE__ */ h("div", { className: "flex items-start space-x-2", children: [
      /* @__PURE__ */ i(
        xe,
        {
          checked: c,
          onCheckedChange: u,
          disabled: a,
          className: "mt-0.5"
        }
      ),
      /* @__PURE__ */ h("div", { className: "space-y-1 flex-1", children: [
        /* @__PURE__ */ i(
          j,
          {
            className: F(
              "text-sm font-medium leading-none text-foreground cursor-pointer",
              t && "after:content-['*'] after:ml-0.5 after:text-destructive"
            ),
            children: r
          }
        ),
        l && /* @__PURE__ */ i("p", { className: "text-xs text-muted-foreground", children: l })
      ] })
    ] }),
    y && I && /* @__PURE__ */ h("div", { className: "flex items-center gap-1 text-sm text-destructive ml-6", children: [
      /* @__PURE__ */ i(R, { className: "h-3 w-3" }),
      I
    ] })
  ] });
});
Ze.displayName = "ValidatedCheckbox";
const Ke = U(({
  submitText: e = "Submit",
  cancelText: s = "Cancel",
  showCancel: t = !1,
  loading: a = !1,
  disabled: r = !1,
  onCancel: l,
  align: o = "right",
  className: n
}, c) => /* @__PURE__ */ h(
  "div",
  {
    ref: c,
    className: F(
      "flex gap-2",
      o === "left" && "justify-start",
      o === "center" && "justify-center",
      o === "right" && "justify-end",
      n
    ),
    children: [
      t && /* @__PURE__ */ i(
        Q,
        {
          type: "button",
          variant: "outline",
          onClick: l,
          disabled: a,
          className: "border-border",
          children: s
        }
      ),
      /* @__PURE__ */ i(
        Q,
        {
          type: "submit",
          disabled: a || r,
          className: "min-w-24 bg-primary text-primary-foreground",
          children: a ? /* @__PURE__ */ h("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ i("div", { className: "h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" }),
            "Loading..."
          ] }) : e
        }
      )
    ]
  }
));
Ke.displayName = "FormActions";
export {
  lt as Form,
  Ke as FormActions,
  nt as FormControl,
  dt as FormDescription,
  ot as FormField,
  it as FormItem,
  ct as FormLabel,
  ut as FormMessage,
  Ze as ValidatedCheckbox,
  He as ValidatedInput,
  Ge as ValidatedSelect,
  We as ValidatedTextarea,
  K as useFormField
};
//# sourceMappingURL=form.js.map
