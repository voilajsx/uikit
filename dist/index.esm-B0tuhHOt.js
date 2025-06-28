import * as Ge from "react";
import m from "react";
var ce = (e) => e.type === "checkbox", ie = (e) => e instanceof Date, B = (e) => e == null;
const lt = (e) => typeof e == "object";
var O = (e) => !B(e) && !Array.isArray(e) && lt(e) && !ie(e), nt = (e) => O(e) && e.target ? ce(e.target) ? e.target.checked : e.target.value : e, Et = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e, ut = (e, s) => e.has(Et(s)), kt = (e) => {
  const s = e.constructor && e.constructor.prototype;
  return O(s) && s.hasOwnProperty("isPrototypeOf");
}, Le = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function U(e) {
  let s;
  const t = Array.isArray(e), a = typeof FileList < "u" ? e instanceof FileList : !1;
  if (e instanceof Date)
    s = new Date(e);
  else if (e instanceof Set)
    s = new Set(e);
  else if (!(Le && (e instanceof Blob || a)) && (t || O(e)))
    if (s = t ? [] : {}, !t && !kt(e))
      s = e;
    else
      for (const l in e)
        e.hasOwnProperty(l) && (s[l] = U(e[l]));
  else
    return e;
  return s;
}
var Fe = (e) => /^\w*$/.test(e), L = (e) => e === void 0, Oe = (e) => Array.isArray(e) ? e.filter(Boolean) : [], Te = (e) => Oe(e.replace(/["|']|\]/g, "").split(/\.|\[/)), c = (e, s, t) => {
  if (!s || !O(e))
    return t;
  const a = (Fe(s) ? [s] : Te(s)).reduce((l, n) => B(l) ? l : l[n], e);
  return L(a) || a === e ? L(e[s]) ? t : e[s] : a;
}, W = (e) => typeof e == "boolean", w = (e, s, t) => {
  let a = -1;
  const l = Fe(s) ? [s] : Te(s), n = l.length, d = n - 1;
  for (; ++a < n; ) {
    const y = l[a];
    let b = t;
    if (a !== d) {
      const M = e[y];
      b = O(M) || Array.isArray(M) ? M : isNaN(+l[a + 1]) ? {} : [];
    }
    if (y === "__proto__" || y === "constructor" || y === "prototype")
      return;
    e[y] = b, e = e[y];
  }
};
const _e = {
  BLUR: "blur",
  FOCUS_OUT: "focusout",
  CHANGE: "change"
}, j = {
  onBlur: "onBlur",
  onChange: "onChange",
  onSubmit: "onSubmit",
  onTouched: "onTouched",
  all: "all"
}, X = {
  max: "max",
  min: "min",
  maxLength: "maxLength",
  minLength: "minLength",
  pattern: "pattern",
  required: "required",
  validate: "validate"
}, Re = m.createContext(null);
Re.displayName = "HookFormContext";
const Me = () => m.useContext(Re), Gt = (e) => {
  const { children: s, ...t } = e;
  return m.createElement(Re.Provider, { value: t }, s);
};
var ot = (e, s, t, a = !0) => {
  const l = {
    defaultValues: s._defaultValues
  };
  for (const n in e)
    Object.defineProperty(l, n, {
      get: () => {
        const d = n;
        return s._proxyFormState[d] !== j.all && (s._proxyFormState[d] = !a || j.all), t && (t[d] = !0), e[d];
      }
    });
  return l;
};
const Ue = typeof window < "u" ? Ge.useLayoutEffect : Ge.useEffect;
function Ct(e) {
  const s = Me(), { control: t = s.control, disabled: a, name: l, exact: n } = e || {}, [d, y] = m.useState(t._formState), b = m.useRef({
    isDirty: !1,
    isLoading: !1,
    dirtyFields: !1,
    touchedFields: !1,
    validatingFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  });
  return Ue(() => t._subscribe({
    name: l,
    formState: b.current,
    exact: n,
    callback: (M) => {
      !a && y({
        ...t._formState,
        ...M
      });
    }
  }), [l, a, n]), m.useEffect(() => {
    b.current.isValid && t._setValid(!0);
  }, [t]), m.useMemo(() => ot(d, t, b.current, !1), [d, t]);
}
var J = (e) => typeof e == "string", ft = (e, s, t, a, l) => J(e) ? (a && s.watch.add(e), c(t, e, l)) : Array.isArray(e) ? e.map((n) => (a && s.watch.add(n), c(t, n))) : (a && (s.watchAll = !0), t);
function Lt(e) {
  const s = Me(), { control: t = s.control, name: a, defaultValue: l, disabled: n, exact: d } = e || {}, y = m.useRef(l), [b, M] = m.useState(t._getWatch(a, y.current));
  return Ue(() => t._subscribe({
    name: a,
    formState: {
      values: !0
    },
    exact: d,
    callback: (F) => !n && M(ft(a, t._names, F.values || t._formValues, !1, y.current))
  }), [a, t, n, d]), m.useEffect(() => t._removeUnmounted()), b;
}
function Ot(e) {
  const s = Me(), { name: t, disabled: a, control: l = s.control, shouldUnregister: n } = e, d = ut(l._names.array, t), y = Lt({
    control: l,
    name: t,
    defaultValue: c(l._formValues, t, c(l._defaultValues, t, e.defaultValue)),
    exact: !0
  }), b = Ct({
    control: l,
    name: t,
    exact: !0
  }), M = m.useRef(e), F = m.useRef(l.register(t, {
    ...e.rules,
    value: y,
    ...W(e.disabled) ? { disabled: e.disabled } : {}
  })), S = m.useMemo(() => Object.defineProperties({}, {
    invalid: {
      enumerable: !0,
      get: () => !!c(b.errors, t)
    },
    isDirty: {
      enumerable: !0,
      get: () => !!c(b.dirtyFields, t)
    },
    isTouched: {
      enumerable: !0,
      get: () => !!c(b.touchedFields, t)
    },
    isValidating: {
      enumerable: !0,
      get: () => !!c(b.validatingFields, t)
    },
    error: {
      enumerable: !0,
      get: () => c(b.errors, t)
    }
  }), [b, t]), v = m.useCallback((k) => F.current.onChange({
    target: {
      value: nt(k),
      name: t
    },
    type: _e.CHANGE
  }), [t]), Z = m.useCallback(() => F.current.onBlur({
    target: {
      value: c(l._formValues, t),
      name: t
    },
    type: _e.BLUR
  }), [t, l._formValues]), p = m.useCallback((k) => {
    const Q = c(l._fields, t);
    Q && k && (Q._f.ref = {
      focus: () => k.focus && k.focus(),
      select: () => k.select && k.select(),
      setCustomValidity: (_) => k.setCustomValidity(_),
      reportValidity: () => k.reportValidity()
    });
  }, [l._fields, t]), E = m.useMemo(() => ({
    name: t,
    value: y,
    ...W(a) || b.disabled ? { disabled: b.disabled || a } : {},
    onChange: v,
    onBlur: Z,
    ref: p
  }), [t, a, b.disabled, v, Z, p, y]);
  return m.useEffect(() => {
    const k = l._options.shouldUnregister || n;
    l.register(t, {
      ...M.current.rules,
      ...W(M.current.disabled) ? { disabled: M.current.disabled } : {}
    });
    const Q = (_, $) => {
      const P = c(l._fields, _);
      P && P._f && (P._f.mount = $);
    };
    if (Q(t, !0), k) {
      const _ = U(c(l._options.defaultValues, t));
      w(l._defaultValues, t, _), L(c(l._formValues, t)) && w(l._formValues, t, _);
    }
    return !d && l.register(t), () => {
      (d ? k && !l._state.action : k) ? l.unregister(t) : Q(t, !1);
    };
  }, [t, l, d, n]), m.useEffect(() => {
    l._setDisabledField({
      disabled: a,
      name: t
    });
  }, [a, t, l]), m.useMemo(() => ({
    field: E,
    formState: b,
    fieldState: S
  }), [E, b, S]);
}
const Yt = (e) => e.render(Ot(e));
var Tt = (e, s, t, a, l) => s ? {
  ...t[e],
  types: {
    ...t[e] && t[e].types ? t[e].types : {},
    [a]: l || !0
  }
} : {}, fe = (e) => Array.isArray(e) ? e : [e], Ye = () => {
  let e = [];
  return {
    get observers() {
      return e;
    },
    next: (l) => {
      for (const n of e)
        n.next && n.next(l);
    },
    subscribe: (l) => (e.push(l), {
      unsubscribe: () => {
        e = e.filter((n) => n !== l);
      }
    }),
    unsubscribe: () => {
      e = [];
    }
  };
}, Ce = (e) => B(e) || !lt(e);
function re(e, s) {
  if (Ce(e) || Ce(s))
    return e === s;
  if (ie(e) && ie(s))
    return e.getTime() === s.getTime();
  const t = Object.keys(e), a = Object.keys(s);
  if (t.length !== a.length)
    return !1;
  for (const l of t) {
    const n = e[l];
    if (!a.includes(l))
      return !1;
    if (l !== "ref") {
      const d = s[l];
      if (ie(n) && ie(d) || O(n) && O(d) || Array.isArray(n) && Array.isArray(d) ? !re(n, d) : n !== d)
        return !1;
    }
  }
  return !0;
}
var q = (e) => O(e) && !Object.keys(e).length, Ne = (e) => e.type === "file", z = (e) => typeof e == "function", be = (e) => {
  if (!Le)
    return !1;
  const s = e ? e.ownerDocument : 0;
  return e instanceof (s && s.defaultView ? s.defaultView.HTMLElement : HTMLElement);
}, dt = (e) => e.type === "select-multiple", Be = (e) => e.type === "radio", Rt = (e) => Be(e) || ce(e), ke = (e) => be(e) && e.isConnected;
function Mt(e, s) {
  const t = s.slice(0, -1).length;
  let a = 0;
  for (; a < t; )
    e = L(e) ? a++ : e[s[a++]];
  return e;
}
function Ut(e) {
  for (const s in e)
    if (e.hasOwnProperty(s) && !L(e[s]))
      return !1;
  return !0;
}
function R(e, s) {
  const t = Array.isArray(s) ? s : Fe(s) ? [s] : Te(s), a = t.length === 1 ? e : Mt(e, t), l = t.length - 1, n = t[l];
  return a && delete a[n], l !== 0 && (O(a) && q(a) || Array.isArray(a) && Ut(a)) && R(e, t.slice(0, -1)), e;
}
var ct = (e) => {
  for (const s in e)
    if (z(e[s]))
      return !0;
  return !1;
};
function Ve(e, s = {}) {
  const t = Array.isArray(e);
  if (O(e) || t)
    for (const a in e)
      Array.isArray(e[a]) || O(e[a]) && !ct(e[a]) ? (s[a] = Array.isArray(e[a]) ? [] : {}, Ve(e[a], s[a])) : B(e[a]) || (s[a] = !0);
  return s;
}
function yt(e, s, t) {
  const a = Array.isArray(e);
  if (O(e) || a)
    for (const l in e)
      Array.isArray(e[l]) || O(e[l]) && !ct(e[l]) ? L(s) || Ce(t[l]) ? t[l] = Array.isArray(e[l]) ? Ve(e[l], []) : { ...Ve(e[l]) } : yt(e[l], B(s) ? {} : s[l], t[l]) : t[l] = !re(e[l], s[l]);
  return t;
}
var ue = (e, s) => yt(e, s, Ve(s));
const Je = {
  value: !1,
  isValid: !1
}, Qe = { value: !0, isValid: !0 };
var gt = (e) => {
  if (Array.isArray(e)) {
    if (e.length > 1) {
      const s = e.filter((t) => t && t.checked && !t.disabled).map((t) => t.value);
      return { value: s, isValid: !!s.length };
    }
    return e[0].checked && !e[0].disabled ? (
      // @ts-expect-error expected to work in the browser
      e[0].attributes && !L(e[0].attributes.value) ? L(e[0].value) || e[0].value === "" ? Qe : { value: e[0].value, isValid: !0 } : Qe
    ) : Je;
  }
  return Je;
}, ht = (e, { valueAsNumber: s, valueAsDate: t, setValueAs: a }) => L(e) ? e : s ? e === "" ? NaN : e && +e : t && J(e) ? new Date(e) : a ? a(e) : e;
const Xe = {
  isValid: !1,
  value: null
};
var vt = (e) => Array.isArray(e) ? e.reduce((s, t) => t && t.checked && !t.disabled ? {
  isValid: !0,
  value: t.value
} : s, Xe) : Xe;
function Ze(e) {
  const s = e.ref;
  return Ne(s) ? s.files : Be(s) ? vt(e.refs).value : dt(s) ? [...s.selectedOptions].map(({ value: t }) => t) : ce(s) ? gt(e.refs).value : ht(L(s.value) ? e.ref.value : s.value, e);
}
var Nt = (e, s, t, a) => {
  const l = {};
  for (const n of e) {
    const d = c(s, n);
    d && w(l, n, d._f);
  }
  return {
    criteriaMode: t,
    names: [...e],
    fields: l,
    shouldUseNativeValidation: a
  };
}, me = (e) => e instanceof RegExp, oe = (e) => L(e) ? e : me(e) ? e.source : O(e) ? me(e.value) ? e.value.source : e.value : e, et = (e) => ({
  isOnSubmit: !e || e === j.onSubmit,
  isOnBlur: e === j.onBlur,
  isOnChange: e === j.onChange,
  isOnAll: e === j.all,
  isOnTouch: e === j.onTouched
});
const tt = "AsyncFunction";
var Bt = (e) => !!e && !!e.validate && !!(z(e.validate) && e.validate.constructor.name === tt || O(e.validate) && Object.values(e.validate).find((s) => s.constructor.name === tt)), Pt = (e) => e.mount && (e.required || e.min || e.max || e.maxLength || e.minLength || e.pattern || e.validate), rt = (e, s, t) => !t && (s.watchAll || s.watch.has(e) || [...s.watch].some((a) => e.startsWith(a) && /^\.\w+/.test(e.slice(a.length))));
const de = (e, s, t, a) => {
  for (const l of t || Object.keys(e)) {
    const n = c(e, l);
    if (n) {
      const { _f: d, ...y } = n;
      if (d) {
        if (d.refs && d.refs[0] && s(d.refs[0], l) && !a)
          return !0;
        if (d.ref && s(d.ref, d.name) && !a)
          return !0;
        if (de(y, s))
          break;
      } else if (O(y) && de(y, s))
        break;
    }
  }
};
function st(e, s, t) {
  const a = c(e, t);
  if (a || Fe(t))
    return {
      error: a,
      name: t
    };
  const l = t.split(".");
  for (; l.length; ) {
    const n = l.join("."), d = c(s, n), y = c(e, n);
    if (d && !Array.isArray(d) && t !== n)
      return { name: t };
    if (y && y.type)
      return {
        name: n,
        error: y
      };
    if (y && y.root && y.root.type)
      return {
        name: `${n}.root`,
        error: y.root
      };
    l.pop();
  }
  return {
    name: t
  };
}
var It = (e, s, t, a) => {
  t(e);
  const { name: l, ...n } = e;
  return q(n) || Object.keys(n).length >= Object.keys(s).length || Object.keys(n).find((d) => s[d] === (!a || j.all));
}, qt = (e, s, t) => !e || !s || e === s || fe(e).some((a) => a && (t ? a === s : a.startsWith(s) || s.startsWith(a))), Wt = (e, s, t, a, l) => l.isOnAll ? !1 : !t && l.isOnTouch ? !(s || e) : (t ? a.isOnBlur : l.isOnBlur) ? !e : (t ? a.isOnChange : l.isOnChange) ? e : !0, Ht = (e, s) => !Oe(c(e, s)).length && R(e, s), pt = (e, s, t) => {
  const a = fe(c(e, t));
  return w(a, "root", s[t]), w(e, t, a), e;
}, ve = (e) => J(e);
function it(e, s, t = "validate") {
  if (ve(e) || Array.isArray(e) && e.every(ve) || W(e) && !e)
    return {
      type: t,
      message: ve(e) ? e : "",
      ref: s
    };
}
var le = (e) => O(e) && !me(e) ? e : {
  value: e,
  message: ""
}, at = async (e, s, t, a, l, n) => {
  const { ref: d, refs: y, required: b, maxLength: M, minLength: F, min: S, max: v, pattern: Z, validate: p, name: E, valueAsNumber: k, mount: Q } = e._f, _ = c(t, E);
  if (!Q || s.has(E))
    return {};
  const $ = y ? y[0] : d, P = (V) => {
    l && $.reportValidity && ($.setCustomValidity(W(V) ? "" : V || ""), $.reportValidity());
  }, T = {}, ye = Be(d), ee = ce(d), Ae = ye || ee, K = (k || Ne(d)) && L(d.value) && L(_) || be(d) && d.value === "" || _ === "" || Array.isArray(_) && !_.length, se = Tt.bind(null, E, a, T), G = (V, x, C, N = X.maxLength, I = X.minLength) => {
    const Y = V ? x : C;
    T[E] = {
      type: V ? N : I,
      message: Y,
      ref: d,
      ...se(V ? N : I, Y)
    };
  };
  if (n ? !Array.isArray(_) || !_.length : b && (!Ae && (K || B(_)) || W(_) && !_ || ee && !gt(y).isValid || ye && !vt(y).isValid)) {
    const { value: V, message: x } = ve(b) ? { value: !!b, message: b } : le(b);
    if (V && (T[E] = {
      type: X.required,
      message: x,
      ref: $,
      ...se(X.required, x)
    }, !a))
      return P(x), T;
  }
  if (!K && (!B(S) || !B(v))) {
    let V, x;
    const C = le(v), N = le(S);
    if (!B(_) && !isNaN(_)) {
      const I = d.valueAsNumber || _ && +_;
      B(C.value) || (V = I > C.value), B(N.value) || (x = I < N.value);
    } else {
      const I = d.valueAsDate || new Date(_), Y = (ge) => /* @__PURE__ */ new Date((/* @__PURE__ */ new Date()).toDateString() + " " + ge), ne = d.type == "time", ae = d.type == "week";
      J(C.value) && _ && (V = ne ? Y(_) > Y(C.value) : ae ? _ > C.value : I > new Date(C.value)), J(N.value) && _ && (x = ne ? Y(_) < Y(N.value) : ae ? _ < N.value : I < new Date(N.value));
    }
    if ((V || x) && (G(!!V, C.message, N.message, X.max, X.min), !a))
      return P(T[E].message), T;
  }
  if ((M || F) && !K && (J(_) || n && Array.isArray(_))) {
    const V = le(M), x = le(F), C = !B(V.value) && _.length > +V.value, N = !B(x.value) && _.length < +x.value;
    if ((C || N) && (G(C, V.message, x.message), !a))
      return P(T[E].message), T;
  }
  if (Z && !K && J(_)) {
    const { value: V, message: x } = le(Z);
    if (me(V) && !_.match(V) && (T[E] = {
      type: X.pattern,
      message: x,
      ref: d,
      ...se(X.pattern, x)
    }, !a))
      return P(x), T;
  }
  if (p) {
    if (z(p)) {
      const V = await p(_, t), x = it(V, $);
      if (x && (T[E] = {
        ...x,
        ...se(X.validate, x.message)
      }, !a))
        return P(x.message), T;
    } else if (O(p)) {
      let V = {};
      for (const x in p) {
        if (!q(V) && !a)
          break;
        const C = it(await p[x](_, t), $, x);
        C && (V = {
          ...C,
          ...se(x, C.message)
        }, P(C.message), a && (T[E] = V));
      }
      if (!q(V) && (T[E] = {
        ref: $,
        ...V
      }, !a))
        return T;
    }
  }
  return P(!0), T;
};
const $t = {
  mode: j.onSubmit,
  reValidateMode: j.onChange,
  shouldFocusError: !0
};
function Kt(e = {}) {
  let s = {
    ...$t,
    ...e
  }, t = {
    submitCount: 0,
    isDirty: !1,
    isReady: !1,
    isLoading: z(s.defaultValues),
    isValidating: !1,
    isSubmitted: !1,
    isSubmitting: !1,
    isSubmitSuccessful: !1,
    isValid: !1,
    touchedFields: {},
    dirtyFields: {},
    validatingFields: {},
    errors: s.errors || {},
    disabled: s.disabled || !1
  };
  const a = {};
  let l = O(s.defaultValues) || O(s.values) ? U(s.defaultValues || s.values) || {} : {}, n = s.shouldUnregister ? {} : U(l), d = {
    action: !1,
    mount: !1,
    watch: !1
  }, y = {
    mount: /* @__PURE__ */ new Set(),
    disabled: /* @__PURE__ */ new Set(),
    unMount: /* @__PURE__ */ new Set(),
    array: /* @__PURE__ */ new Set(),
    watch: /* @__PURE__ */ new Set()
  }, b, M = 0;
  const F = {
    isDirty: !1,
    dirtyFields: !1,
    validatingFields: !1,
    touchedFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  };
  let S = {
    ...F
  };
  const v = {
    array: Ye(),
    state: Ye()
  }, Z = s.criteriaMode === j.all, p = (r) => (i) => {
    clearTimeout(M), M = setTimeout(r, i);
  }, E = async (r) => {
    if (!s.disabled && (F.isValid || S.isValid || r)) {
      const i = s.resolver ? q((await ee()).errors) : await K(a, !0);
      i !== t.isValid && v.state.next({
        isValid: i
      });
    }
  }, k = (r, i) => {
    !s.disabled && (F.isValidating || F.validatingFields || S.isValidating || S.validatingFields) && ((r || Array.from(y.mount)).forEach((u) => {
      u && (i ? w(t.validatingFields, u, i) : R(t.validatingFields, u));
    }), v.state.next({
      validatingFields: t.validatingFields,
      isValidating: !q(t.validatingFields)
    }));
  }, Q = (r, i = [], u, g, f = !0, o = !0) => {
    if (g && u && !s.disabled) {
      if (d.action = !0, o && Array.isArray(c(a, r))) {
        const h = u(c(a, r), g.argA, g.argB);
        f && w(a, r, h);
      }
      if (o && Array.isArray(c(t.errors, r))) {
        const h = u(c(t.errors, r), g.argA, g.argB);
        f && w(t.errors, r, h), Ht(t.errors, r);
      }
      if ((F.touchedFields || S.touchedFields) && o && Array.isArray(c(t.touchedFields, r))) {
        const h = u(c(t.touchedFields, r), g.argA, g.argB);
        f && w(t.touchedFields, r, h);
      }
      (F.dirtyFields || S.dirtyFields) && (t.dirtyFields = ue(l, n)), v.state.next({
        name: r,
        isDirty: G(r, i),
        dirtyFields: t.dirtyFields,
        errors: t.errors,
        isValid: t.isValid
      });
    } else
      w(n, r, i);
  }, _ = (r, i) => {
    w(t.errors, r, i), v.state.next({
      errors: t.errors
    });
  }, $ = (r) => {
    t.errors = r, v.state.next({
      errors: t.errors,
      isValid: !1
    });
  }, P = (r, i, u, g) => {
    const f = c(a, r);
    if (f) {
      const o = c(n, r, L(u) ? c(l, r) : u);
      L(o) || g && g.defaultChecked || i ? w(n, r, i ? o : Ze(f._f)) : C(r, o), d.mount && E();
    }
  }, T = (r, i, u, g, f) => {
    let o = !1, h = !1;
    const A = {
      name: r
    };
    if (!s.disabled) {
      if (!u || g) {
        (F.isDirty || S.isDirty) && (h = t.isDirty, t.isDirty = A.isDirty = G(), o = h !== A.isDirty);
        const D = re(c(l, r), i);
        h = !!c(t.dirtyFields, r), D ? R(t.dirtyFields, r) : w(t.dirtyFields, r, !0), A.dirtyFields = t.dirtyFields, o = o || (F.dirtyFields || S.dirtyFields) && h !== !D;
      }
      if (u) {
        const D = c(t.touchedFields, r);
        D || (w(t.touchedFields, r, u), A.touchedFields = t.touchedFields, o = o || (F.touchedFields || S.touchedFields) && D !== u);
      }
      o && f && v.state.next(A);
    }
    return o ? A : {};
  }, ye = (r, i, u, g) => {
    const f = c(t.errors, r), o = (F.isValid || S.isValid) && W(i) && t.isValid !== i;
    if (s.delayError && u ? (b = p(() => _(r, u)), b(s.delayError)) : (clearTimeout(M), b = null, u ? w(t.errors, r, u) : R(t.errors, r)), (u ? !re(f, u) : f) || !q(g) || o) {
      const h = {
        ...g,
        ...o && W(i) ? { isValid: i } : {},
        errors: t.errors,
        name: r
      };
      t = {
        ...t,
        ...h
      }, v.state.next(h);
    }
  }, ee = async (r) => {
    k(r, !0);
    const i = await s.resolver(n, s.context, Nt(r || y.mount, a, s.criteriaMode, s.shouldUseNativeValidation));
    return k(r), i;
  }, Ae = async (r) => {
    const { errors: i } = await ee(r);
    if (r)
      for (const u of r) {
        const g = c(i, u);
        g ? w(t.errors, u, g) : R(t.errors, u);
      }
    else
      t.errors = i;
    return i;
  }, K = async (r, i, u = {
    valid: !0
  }) => {
    for (const g in r) {
      const f = r[g];
      if (f) {
        const { _f: o, ...h } = f;
        if (o) {
          const A = y.array.has(o.name), D = f._f && Bt(f._f);
          D && F.validatingFields && k([g], !0);
          const H = await at(f, y.disabled, n, Z, s.shouldUseNativeValidation && !i, A);
          if (D && F.validatingFields && k([g]), H[o.name] && (u.valid = !1, i))
            break;
          !i && (c(H, o.name) ? A ? pt(t.errors, H, o.name) : w(t.errors, o.name, H[o.name]) : R(t.errors, o.name));
        }
        !q(h) && await K(h, i, u);
      }
    }
    return u.valid;
  }, se = () => {
    for (const r of y.unMount) {
      const i = c(a, r);
      i && (i._f.refs ? i._f.refs.every((u) => !ke(u)) : !ke(i._f.ref)) && xe(r);
    }
    y.unMount = /* @__PURE__ */ new Set();
  }, G = (r, i) => !s.disabled && (r && i && w(n, r, i), !re(ge(), l)), V = (r, i, u) => ft(r, y, {
    ...d.mount ? n : L(i) ? l : J(r) ? { [r]: i } : i
  }, u, i), x = (r) => Oe(c(d.mount ? n : l, r, s.shouldUnregister ? c(l, r, []) : [])), C = (r, i, u = {}) => {
    const g = c(a, r);
    let f = i;
    if (g) {
      const o = g._f;
      o && (!o.disabled && w(n, r, ht(i, o)), f = be(o.ref) && B(i) ? "" : i, dt(o.ref) ? [...o.ref.options].forEach((h) => h.selected = f.includes(h.value)) : o.refs ? ce(o.ref) ? o.refs.forEach((h) => {
        (!h.defaultChecked || !h.disabled) && (Array.isArray(f) ? h.checked = !!f.find((A) => A === h.value) : h.checked = f === h.value || !!f);
      }) : o.refs.forEach((h) => h.checked = h.value === f) : Ne(o.ref) ? o.ref.value = "" : (o.ref.value = f, o.ref.type || v.state.next({
        name: r,
        values: U(n)
      })));
    }
    (u.shouldDirty || u.shouldTouch) && T(r, f, u.shouldTouch, u.shouldDirty, !0), u.shouldValidate && ae(r);
  }, N = (r, i, u) => {
    for (const g in i) {
      if (!i.hasOwnProperty(g))
        return;
      const f = i[g], o = r + "." + g, h = c(a, o);
      (y.array.has(r) || O(f) || h && !h._f) && !ie(f) ? N(o, f, u) : C(o, f, u);
    }
  }, I = (r, i, u = {}) => {
    const g = c(a, r), f = y.array.has(r), o = U(i);
    w(n, r, o), f ? (v.array.next({
      name: r,
      values: U(n)
    }), (F.isDirty || F.dirtyFields || S.isDirty || S.dirtyFields) && u.shouldDirty && v.state.next({
      name: r,
      dirtyFields: ue(l, n),
      isDirty: G(r, o)
    })) : g && !g._f && !B(o) ? N(r, o, u) : C(r, o, u), rt(r, y) && v.state.next({ ...t }), v.state.next({
      name: d.mount ? r : void 0,
      values: U(n)
    });
  }, Y = async (r) => {
    d.mount = !0;
    const i = r.target;
    let u = i.name, g = !0;
    const f = c(a, u), o = (D) => {
      g = Number.isNaN(D) || ie(D) && isNaN(D.getTime()) || re(D, c(n, u, D));
    }, h = et(s.mode), A = et(s.reValidateMode);
    if (f) {
      let D, H;
      const he = i.type ? Ze(f._f) : nt(r), te = r.type === _e.BLUR || r.type === _e.FOCUS_OUT, wt = !Pt(f._f) && !s.resolver && !c(t.errors, u) && !f._f.deps || Wt(te, c(t.touchedFields, u), t.isSubmitted, A, h), Se = rt(u, y, te);
      w(n, u, he), te ? (f._f.onBlur && f._f.onBlur(r), b && b(0)) : f._f.onChange && f._f.onChange(r);
      const Ee = T(u, he, te), Dt = !q(Ee) || Se;
      if (!te && v.state.next({
        name: u,
        type: r.type,
        values: U(n)
      }), wt)
        return (F.isValid || S.isValid) && (s.mode === "onBlur" ? te && E() : te || E()), Dt && v.state.next({ name: u, ...Se ? {} : Ee });
      if (!te && Se && v.state.next({ ...t }), s.resolver) {
        const { errors: je } = await ee([u]);
        if (o(he), g) {
          const St = st(t.errors, a, u), ze = st(je, a, St.name || u);
          D = ze.error, u = ze.name, H = q(je);
        }
      } else
        k([u], !0), D = (await at(f, y.disabled, n, Z, s.shouldUseNativeValidation))[u], k([u]), o(he), g && (D ? H = !1 : (F.isValid || S.isValid) && (H = await K(a, !0)));
      g && (f._f.deps && ae(f._f.deps), ye(u, H, D, Ee));
    }
  }, ne = (r, i) => {
    if (c(t.errors, i) && r.focus)
      return r.focus(), 1;
  }, ae = async (r, i = {}) => {
    let u, g;
    const f = fe(r);
    if (s.resolver) {
      const o = await Ae(L(r) ? r : f);
      u = q(o), g = r ? !f.some((h) => c(o, h)) : u;
    } else r ? (g = (await Promise.all(f.map(async (o) => {
      const h = c(a, o);
      return await K(h && h._f ? { [o]: h } : h);
    }))).every(Boolean), !(!g && !t.isValid) && E()) : g = u = await K(a);
    return v.state.next({
      ...!J(r) || (F.isValid || S.isValid) && u !== t.isValid ? {} : { name: r },
      ...s.resolver || !r ? { isValid: u } : {},
      errors: t.errors
    }), i.shouldFocus && !g && de(a, ne, r ? f : y.mount), g;
  }, ge = (r) => {
    const i = {
      ...d.mount ? n : l
    };
    return L(r) ? i : J(r) ? c(i, r) : r.map((u) => c(i, u));
  }, Pe = (r, i) => ({
    invalid: !!c((i || t).errors, r),
    isDirty: !!c((i || t).dirtyFields, r),
    error: c((i || t).errors, r),
    isValidating: !!c(t.validatingFields, r),
    isTouched: !!c((i || t).touchedFields, r)
  }), _t = (r) => {
    r && fe(r).forEach((i) => R(t.errors, i)), v.state.next({
      errors: r ? t.errors : {}
    });
  }, Ie = (r, i, u) => {
    const g = (c(a, r, { _f: {} })._f || {}).ref, f = c(t.errors, r) || {}, { ref: o, message: h, type: A, ...D } = f;
    w(t.errors, r, {
      ...D,
      ...i,
      ref: g
    }), v.state.next({
      name: r,
      errors: t.errors,
      isValid: !1
    }), u && u.shouldFocus && g && g.focus && g.focus();
  }, bt = (r, i) => z(r) ? v.state.subscribe({
    next: (u) => r(V(void 0, i), u)
  }) : V(r, i, !0), qe = (r) => v.state.subscribe({
    next: (i) => {
      qt(r.name, i.name, r.exact) && It(i, r.formState || F, xt, r.reRenderRoot) && r.callback({
        values: { ...n },
        ...t,
        ...i
      });
    }
  }).unsubscribe, Vt = (r) => (d.mount = !0, S = {
    ...S,
    ...r.formState
  }, qe({
    ...r,
    formState: S
  })), xe = (r, i = {}) => {
    for (const u of r ? fe(r) : y.mount)
      y.mount.delete(u), y.array.delete(u), i.keepValue || (R(a, u), R(n, u)), !i.keepError && R(t.errors, u), !i.keepDirty && R(t.dirtyFields, u), !i.keepTouched && R(t.touchedFields, u), !i.keepIsValidating && R(t.validatingFields, u), !s.shouldUnregister && !i.keepDefaultValue && R(l, u);
    v.state.next({
      values: U(n)
    }), v.state.next({
      ...t,
      ...i.keepDirty ? { isDirty: G() } : {}
    }), !i.keepIsValid && E();
  }, We = ({ disabled: r, name: i }) => {
    (W(r) && d.mount || r || y.disabled.has(i)) && (r ? y.disabled.add(i) : y.disabled.delete(i));
  }, we = (r, i = {}) => {
    let u = c(a, r);
    const g = W(i.disabled) || W(s.disabled);
    return w(a, r, {
      ...u || {},
      _f: {
        ...u && u._f ? u._f : { ref: { name: r } },
        name: r,
        mount: !0,
        ...i
      }
    }), y.mount.add(r), u ? We({
      disabled: W(i.disabled) ? i.disabled : s.disabled,
      name: r
    }) : P(r, !0, i.value), {
      ...g ? { disabled: i.disabled || s.disabled } : {},
      ...s.progressive ? {
        required: !!i.required,
        min: oe(i.min),
        max: oe(i.max),
        minLength: oe(i.minLength),
        maxLength: oe(i.maxLength),
        pattern: oe(i.pattern)
      } : {},
      name: r,
      onChange: Y,
      onBlur: Y,
      ref: (f) => {
        if (f) {
          we(r, i), u = c(a, r);
          const o = L(f.value) && f.querySelectorAll && f.querySelectorAll("input,select,textarea")[0] || f, h = Rt(o), A = u._f.refs || [];
          if (h ? A.find((D) => D === o) : o === u._f.ref)
            return;
          w(a, r, {
            _f: {
              ...u._f,
              ...h ? {
                refs: [
                  ...A.filter(ke),
                  o,
                  ...Array.isArray(c(l, r)) ? [{}] : []
                ],
                ref: { type: o.type, name: r }
              } : { ref: o }
            }
          }), P(r, !1, void 0, o);
        } else
          u = c(a, r, {}), u._f && (u._f.mount = !1), (s.shouldUnregister || i.shouldUnregister) && !(ut(y.array, r) && d.action) && y.unMount.add(r);
      }
    };
  }, De = () => s.shouldFocusError && de(a, ne, y.mount), mt = (r) => {
    W(r) && (v.state.next({ disabled: r }), de(a, (i, u) => {
      const g = c(a, u);
      g && (i.disabled = g._f.disabled || r, Array.isArray(g._f.refs) && g._f.refs.forEach((f) => {
        f.disabled = g._f.disabled || r;
      }));
    }, 0, !1));
  }, He = (r, i) => async (u) => {
    let g;
    u && (u.preventDefault && u.preventDefault(), u.persist && u.persist());
    let f = U(n);
    if (v.state.next({
      isSubmitting: !0
    }), s.resolver) {
      const { errors: o, values: h } = await ee();
      t.errors = o, f = h;
    } else
      await K(a);
    if (y.disabled.size)
      for (const o of y.disabled)
        w(f, o, void 0);
    if (R(t.errors, "root"), q(t.errors)) {
      v.state.next({
        errors: {}
      });
      try {
        await r(f, u);
      } catch (o) {
        g = o;
      }
    } else
      i && await i({ ...t.errors }, u), De(), setTimeout(De);
    if (v.state.next({
      isSubmitted: !0,
      isSubmitting: !1,
      isSubmitSuccessful: q(t.errors) && !g,
      submitCount: t.submitCount + 1,
      errors: t.errors
    }), g)
      throw g;
  }, Ft = (r, i = {}) => {
    c(a, r) && (L(i.defaultValue) ? I(r, U(c(l, r))) : (I(r, i.defaultValue), w(l, r, U(i.defaultValue))), i.keepTouched || R(t.touchedFields, r), i.keepDirty || (R(t.dirtyFields, r), t.isDirty = i.defaultValue ? G(r, U(c(l, r))) : G()), i.keepError || (R(t.errors, r), F.isValid && E()), v.state.next({ ...t }));
  }, pe = (r, i = {}) => {
    const u = r ? U(r) : l, g = U(u), f = q(r), o = f ? l : g;
    if (i.keepDefaultValues || (l = u), !i.keepValues) {
      if (i.keepDirtyValues) {
        const h = /* @__PURE__ */ new Set([
          ...y.mount,
          ...Object.keys(ue(l, n))
        ]);
        for (const A of Array.from(h))
          c(t.dirtyFields, A) ? w(o, A, c(n, A)) : I(A, c(o, A));
      } else {
        if (Le && L(r))
          for (const h of y.mount) {
            const A = c(a, h);
            if (A && A._f) {
              const D = Array.isArray(A._f.refs) ? A._f.refs[0] : A._f.ref;
              if (be(D)) {
                const H = D.closest("form");
                if (H) {
                  H.reset();
                  break;
                }
              }
            }
          }
        for (const h of y.mount)
          I(h, c(o, h));
      }
      n = U(o), v.array.next({
        values: { ...o }
      }), v.state.next({
        values: { ...o }
      });
    }
    y = {
      mount: i.keepDirtyValues ? y.mount : /* @__PURE__ */ new Set(),
      unMount: /* @__PURE__ */ new Set(),
      array: /* @__PURE__ */ new Set(),
      disabled: /* @__PURE__ */ new Set(),
      watch: /* @__PURE__ */ new Set(),
      watchAll: !1,
      focus: ""
    }, d.mount = !F.isValid || !!i.keepIsValid || !!i.keepDirtyValues, d.watch = !!s.shouldUnregister, v.state.next({
      submitCount: i.keepSubmitCount ? t.submitCount : 0,
      isDirty: f ? !1 : i.keepDirty ? t.isDirty : !!(i.keepDefaultValues && !re(r, l)),
      isSubmitted: i.keepIsSubmitted ? t.isSubmitted : !1,
      dirtyFields: f ? {} : i.keepDirtyValues ? i.keepDefaultValues && n ? ue(l, n) : t.dirtyFields : i.keepDefaultValues && r ? ue(l, r) : i.keepDirty ? t.dirtyFields : {},
      touchedFields: i.keepTouched ? t.touchedFields : {},
      errors: i.keepErrors ? t.errors : {},
      isSubmitSuccessful: i.keepIsSubmitSuccessful ? t.isSubmitSuccessful : !1,
      isSubmitting: !1
    });
  }, $e = (r, i) => pe(z(r) ? r(n) : r, i), At = (r, i = {}) => {
    const u = c(a, r), g = u && u._f;
    if (g) {
      const f = g.refs ? g.refs[0] : g.ref;
      f.focus && (f.focus(), i.shouldSelect && z(f.select) && f.select());
    }
  }, xt = (r) => {
    t = {
      ...t,
      ...r
    };
  }, Ke = {
    control: {
      register: we,
      unregister: xe,
      getFieldState: Pe,
      handleSubmit: He,
      setError: Ie,
      _subscribe: qe,
      _runSchema: ee,
      _focusError: De,
      _getWatch: V,
      _getDirty: G,
      _setValid: E,
      _setFieldArray: Q,
      _setDisabledField: We,
      _setErrors: $,
      _getFieldArray: x,
      _reset: pe,
      _resetDefaultValues: () => z(s.defaultValues) && s.defaultValues().then((r) => {
        $e(r, s.resetOptions), v.state.next({
          isLoading: !1
        });
      }),
      _removeUnmounted: se,
      _disableForm: mt,
      _subjects: v,
      _proxyFormState: F,
      get _fields() {
        return a;
      },
      get _formValues() {
        return n;
      },
      get _state() {
        return d;
      },
      set _state(r) {
        d = r;
      },
      get _defaultValues() {
        return l;
      },
      get _names() {
        return y;
      },
      set _names(r) {
        y = r;
      },
      get _formState() {
        return t;
      },
      get _options() {
        return s;
      },
      set _options(r) {
        s = {
          ...s,
          ...r
        };
      }
    },
    subscribe: Vt,
    trigger: ae,
    register: we,
    handleSubmit: He,
    watch: bt,
    setValue: I,
    getValues: ge,
    reset: $e,
    resetField: Ft,
    clearErrors: _t,
    unregister: xe,
    setError: Ie,
    setFocus: At,
    getFieldState: Pe
  };
  return {
    ...Ke,
    formControl: Ke
  };
}
function Jt(e = {}) {
  const s = m.useRef(void 0), t = m.useRef(void 0), [a, l] = m.useState({
    isDirty: !1,
    isValidating: !1,
    isLoading: z(e.defaultValues),
    isSubmitted: !1,
    isSubmitting: !1,
    isSubmitSuccessful: !1,
    isValid: !1,
    submitCount: 0,
    dirtyFields: {},
    touchedFields: {},
    validatingFields: {},
    errors: e.errors || {},
    disabled: e.disabled || !1,
    isReady: !1,
    defaultValues: z(e.defaultValues) ? void 0 : e.defaultValues
  });
  if (!s.current)
    if (e.formControl)
      s.current = {
        ...e.formControl,
        formState: a
      }, e.defaultValues && !z(e.defaultValues) && e.formControl.reset(e.defaultValues, e.resetOptions);
    else {
      const { formControl: d, ...y } = Kt(e);
      s.current = {
        ...y,
        formState: a
      };
    }
  const n = s.current.control;
  return n._options = e, Ue(() => {
    const d = n._subscribe({
      formState: n._proxyFormState,
      callback: () => l({ ...n._formState }),
      reRenderRoot: !0
    });
    return l((y) => ({
      ...y,
      isReady: !0
    })), n._formState.isReady = !0, d;
  }, [n]), m.useEffect(() => n._disableForm(e.disabled), [n, e.disabled]), m.useEffect(() => {
    e.mode && (n._options.mode = e.mode), e.reValidateMode && (n._options.reValidateMode = e.reValidateMode);
  }, [n, e.mode, e.reValidateMode]), m.useEffect(() => {
    e.errors && (n._setErrors(e.errors), n._focusError());
  }, [n, e.errors]), m.useEffect(() => {
    e.shouldUnregister && n._subjects.state.next({
      values: n._getWatch()
    });
  }, [n, e.shouldUnregister]), m.useEffect(() => {
    if (n._proxyFormState.isDirty) {
      const d = n._getDirty();
      d !== a.isDirty && n._subjects.state.next({
        isDirty: d
      });
    }
  }, [n, a.isDirty]), m.useEffect(() => {
    e.values && !re(e.values, t.current) ? (n._reset(e.values, n._options.resetOptions), t.current = e.values, l((d) => ({ ...d }))) : n._resetDefaultValues();
  }, [n, e.values]), m.useEffect(() => {
    n._state.mount || (n._setValid(), n._state.mount = !0), n._state.watch && (n._state.watch = !1, n._subjects.state.next({ ...n._formState })), n._removeUnmounted();
  }), s.current.formState = ot(a, n), s.current;
}
export {
  Yt as C,
  Gt as F,
  Ct as a,
  Tt as b,
  Jt as c,
  c as g,
  w as s,
  Me as u
};
//# sourceMappingURL=index.esm-B0tuhHOt.js.map
