import { jsx as p, jsxs as w } from "react/jsx-runtime";
import * as rt from "react";
import { createContext as st, useState as Ue, useCallback as xe, useContext as nt } from "react";
import { g as ue, s as ce, b as Be, c as at, F as it, u as Z, C as F } from "./index.esm-B0tuhHOt.js";
import { c as qe } from "./index-DACAHwoB.js";
import { c as A } from "./utils-qaFjX9_3.js";
import { Input as ot } from "./input.js";
import { Textarea as dt } from "./textarea.js";
import { Button as q } from "./button.js";
import { Label as de } from "./label.js";
import { Checkbox as ct } from "./checkbox.js";
import { RadioGroup as lt, RadioGroupItem as ut } from "./radio-group.js";
import { Switch as ft } from "./switch.js";
import { Select as ht, SelectTrigger as mt, SelectValue as pt, SelectContent as yt, SelectItem as be } from "./select.js";
import { c as ee } from "./createLucideIcon-B45kRl5r.js";
import { X as ke } from "./x-BxwubQiM.js";
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gt = ee("CircleAlert", [
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
const vt = ee("EyeOff", [
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
const _t = ee("Eye", [
  [
    "path",
    {
      d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
      key: "1nclc0"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xt = ee("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bt = ee("Upload", [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["polyline", { points: "17 8 12 3 7 8", key: "t8dd8p" }],
  ["line", { x1: "12", x2: "12", y1: "3", y2: "15", key: "widbto" }]
]), we = (r, e, t) => {
  if (r && "reportValidity" in r) {
    const s = ue(t, e);
    r.setCustomValidity(s && s.message || ""), r.reportValidity();
  }
}, fe = (r, e) => {
  for (const t in e.fields) {
    const s = e.fields[t];
    s && s.ref && "reportValidity" in s.ref ? we(s.ref, t, r) : s && s.refs && s.refs.forEach((n) => we(n, t, r));
  }
}, Ne = (r, e) => {
  e.shouldUseNativeValidation && fe(r, e);
  const t = {};
  for (const s in r) {
    const n = ue(e.fields, s), a = Object.assign(r[s] || {}, { ref: n && n.ref });
    if (kt(e.names || Object.keys(r), s)) {
      const i = Object.assign({}, ue(t, s));
      ce(i, "root", a), ce(t, s, i);
    } else ce(t, s, a);
  }
  return t;
}, kt = (r, e) => {
  const t = Ce(e);
  return r.some((s) => Ce(s).match(`^${t}\\.\\d+`));
};
function Ce(r) {
  return r.replace(/\]|\[/g, "");
}
function We(r, e, t) {
  function s(o, d) {
    var c;
    Object.defineProperty(o, "_zod", {
      value: o._zod ?? {},
      enumerable: !1
    }), (c = o._zod).traits ?? (c.traits = /* @__PURE__ */ new Set()), o._zod.traits.add(r), e(o, d);
    for (const f in i.prototype)
      f in o || Object.defineProperty(o, f, { value: i.prototype[f].bind(o) });
    o._zod.constr = i, o._zod.def = d;
  }
  const n = (t == null ? void 0 : t.Parent) ?? Object;
  class a extends n {
  }
  Object.defineProperty(a, "name", { value: r });
  function i(o) {
    var d;
    const c = t != null && t.Parent ? new a() : this;
    s(c, o), (d = c._zod).deferred ?? (d.deferred = []);
    for (const f of c._zod.deferred)
      f();
    return c;
  }
  return Object.defineProperty(i, "init", { value: s }), Object.defineProperty(i, Symbol.hasInstance, {
    value: (o) => {
      var d, c;
      return t != null && t.Parent && o instanceof t.Parent ? !0 : (c = (d = o == null ? void 0 : o._zod) == null ? void 0 : d.traits) == null ? void 0 : c.has(r);
    }
  }), Object.defineProperty(i, "name", { value: r }), i;
}
class wt extends Error {
  constructor() {
    super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
  }
}
const Nt = {};
function Je(r) {
  return Nt;
}
function Ct(r, e) {
  return typeof e == "bigint" ? e.toString() : e;
}
const Ge = Error.captureStackTrace ? Error.captureStackTrace : (...r) => {
};
function re(r) {
  return typeof r == "string" ? r : r == null ? void 0 : r.message;
}
function He(r, e, t) {
  var n, a, i, o, d, c;
  const s = { ...r, path: r.path ?? [] };
  if (!r.message) {
    const f = re((i = (a = (n = r.inst) == null ? void 0 : n._zod.def) == null ? void 0 : a.error) == null ? void 0 : i.call(a, r)) ?? re((o = e == null ? void 0 : e.error) == null ? void 0 : o.call(e, r)) ?? re((d = t.customError) == null ? void 0 : d.call(t, r)) ?? re((c = t.localeError) == null ? void 0 : c.call(t, r)) ?? "Invalid input";
    s.message = f;
  }
  return delete s.inst, delete s.continue, e != null && e.reportInput || delete s.input, s;
}
const Ye = (r, e) => {
  r.name = "$ZodError", Object.defineProperty(r, "_zod", {
    value: r._zod,
    enumerable: !1
  }), Object.defineProperty(r, "issues", {
    value: e,
    enumerable: !1
  }), Object.defineProperty(r, "message", {
    get() {
      return JSON.stringify(e, Ct, 2);
    },
    enumerable: !0
    // configurable: false,
  });
}, Ot = We("$ZodError", Ye), Xe = We("$ZodError", Ye, { Parent: Error }), Tt = (r) => (e, t, s, n) => {
  const a = s ? Object.assign(s, { async: !1 }) : { async: !1 }, i = e._zod.run({ value: t, issues: [] }, a);
  if (i instanceof Promise)
    throw new wt();
  if (i.issues.length) {
    const o = new ((n == null ? void 0 : n.Err) ?? r)(i.issues.map((d) => He(d, a, Je())));
    throw Ge(o, n == null ? void 0 : n.callee), o;
  }
  return i.value;
}, St = /* @__PURE__ */ Tt(Xe), At = (r) => async (e, t, s, n) => {
  const a = s ? Object.assign(s, { async: !0 }) : { async: !0 };
  let i = e._zod.run({ value: t, issues: [] }, a);
  if (i instanceof Promise && (i = await i), i.issues.length) {
    const o = new ((n == null ? void 0 : n.Err) ?? r)(i.issues.map((d) => He(d, a, Je())));
    throw Ge(o, n == null ? void 0 : n.callee), o;
  }
  return i.value;
}, jt = /* @__PURE__ */ At(Xe);
function Oe(r, e) {
  try {
    var t = r();
  } catch (s) {
    return e(s);
  }
  return t && t.then ? t.then(void 0, e) : t;
}
function Zt(r, e) {
  for (var t = {}; r.length; ) {
    var s = r[0], n = s.code, a = s.message, i = s.path.join(".");
    if (!t[i]) if ("unionErrors" in s) {
      var o = s.unionErrors[0].errors[0];
      t[i] = { message: o.message, type: o.code };
    } else t[i] = { message: a, type: n };
    if ("unionErrors" in s && s.unionErrors.forEach(function(f) {
      return f.errors.forEach(function(b) {
        return r.push(b);
      });
    }), e) {
      var d = t[i].types, c = d && d[s.code];
      t[i] = Be(i, e, t, n, c ? [].concat(c, s.message) : s.message);
    }
    r.shift();
  }
  return t;
}
function Et(r, e) {
  for (var t = {}; r.length; ) {
    var s = r[0], n = s.code, a = s.message, i = s.path.join(".");
    if (!t[i]) if (s.code === "invalid_union") {
      var o = s.errors[0][0];
      t[i] = { message: o.message, type: o.code };
    } else t[i] = { message: a, type: n };
    if (s.code === "invalid_union" && s.errors.forEach(function(f) {
      return f.forEach(function(b) {
        return r.push(b);
      });
    }), e) {
      var d = t[i].types, c = d && d[s.code];
      t[i] = Be(i, e, t, n, c ? [].concat(c, s.message) : s.message);
    }
    r.shift();
  }
  return t;
}
function Rt(r, e, t) {
  if (t === void 0 && (t = {}), function(s) {
    return "_def" in s && typeof s._def == "object" && "typeName" in s._def;
  }(r)) return function(s, n, a) {
    try {
      return Promise.resolve(Oe(function() {
        return Promise.resolve(r[t.mode === "sync" ? "parse" : "parseAsync"](s, e)).then(function(i) {
          return a.shouldUseNativeValidation && fe({}, a), { errors: {}, values: t.raw ? Object.assign({}, s) : i };
        });
      }, function(i) {
        if (function(o) {
          return Array.isArray(o == null ? void 0 : o.issues);
        }(i)) return { values: {}, errors: Ne(Zt(i.errors, !a.shouldUseNativeValidation && a.criteriaMode === "all"), a) };
        throw i;
      }));
    } catch (i) {
      return Promise.reject(i);
    }
  };
  if (function(s) {
    return "_zod" in s && typeof s._zod == "object";
  }(r)) return function(s, n, a) {
    try {
      return Promise.resolve(Oe(function() {
        return Promise.resolve((t.mode === "sync" ? St : jt)(r, s, e)).then(function(i) {
          return a.shouldUseNativeValidation && fe({}, a), { errors: {}, values: t.raw ? Object.assign({}, s) : i };
        });
      }, function(i) {
        if (function(o) {
          return o instanceof Ot;
        }(i)) return { values: {}, errors: Ne(Et(i.issues, !a.shouldUseNativeValidation && a.criteriaMode === "all"), a) };
        throw i;
      }));
    } catch (i) {
      return Promise.reject(i);
    }
  };
  throw new Error("Invalid input: not a Zod schema");
}
var x;
(function(r) {
  r.assertEqual = (n) => {
  };
  function e(n) {
  }
  r.assertIs = e;
  function t(n) {
    throw new Error();
  }
  r.assertNever = t, r.arrayToEnum = (n) => {
    const a = {};
    for (const i of n)
      a[i] = i;
    return a;
  }, r.getValidEnumValues = (n) => {
    const a = r.objectKeys(n).filter((o) => typeof n[n[o]] != "number"), i = {};
    for (const o of a)
      i[o] = n[o];
    return r.objectValues(i);
  }, r.objectValues = (n) => r.objectKeys(n).map(function(a) {
    return n[a];
  }), r.objectKeys = typeof Object.keys == "function" ? (n) => Object.keys(n) : (n) => {
    const a = [];
    for (const i in n)
      Object.prototype.hasOwnProperty.call(n, i) && a.push(i);
    return a;
  }, r.find = (n, a) => {
    for (const i of n)
      if (a(i))
        return i;
  }, r.isInteger = typeof Number.isInteger == "function" ? (n) => Number.isInteger(n) : (n) => typeof n == "number" && Number.isFinite(n) && Math.floor(n) === n;
  function s(n, a = " | ") {
    return n.map((i) => typeof i == "string" ? `'${i}'` : i).join(a);
  }
  r.joinValues = s, r.jsonStringifyReplacer = (n, a) => typeof a == "bigint" ? a.toString() : a;
})(x || (x = {}));
var Te;
(function(r) {
  r.mergeShapes = (e, t) => ({
    ...e,
    ...t
    // second overwrites first
  });
})(Te || (Te = {}));
const h = x.arrayToEnum([
  "string",
  "nan",
  "number",
  "integer",
  "float",
  "boolean",
  "date",
  "bigint",
  "symbol",
  "function",
  "undefined",
  "null",
  "array",
  "object",
  "unknown",
  "promise",
  "void",
  "never",
  "map",
  "set"
]), V = (r) => {
  switch (typeof r) {
    case "undefined":
      return h.undefined;
    case "string":
      return h.string;
    case "number":
      return Number.isNaN(r) ? h.nan : h.number;
    case "boolean":
      return h.boolean;
    case "function":
      return h.function;
    case "bigint":
      return h.bigint;
    case "symbol":
      return h.symbol;
    case "object":
      return Array.isArray(r) ? h.array : r === null ? h.null : r.then && typeof r.then == "function" && r.catch && typeof r.catch == "function" ? h.promise : typeof Map < "u" && r instanceof Map ? h.map : typeof Set < "u" && r instanceof Set ? h.set : typeof Date < "u" && r instanceof Date ? h.date : h.object;
    default:
      return h.unknown;
  }
}, l = x.arrayToEnum([
  "invalid_type",
  "invalid_literal",
  "custom",
  "invalid_union",
  "invalid_union_discriminator",
  "invalid_enum_value",
  "unrecognized_keys",
  "invalid_arguments",
  "invalid_return_type",
  "invalid_date",
  "invalid_string",
  "too_small",
  "too_big",
  "invalid_intersection_types",
  "not_multiple_of",
  "not_finite"
]);
class $ extends Error {
  get errors() {
    return this.issues;
  }
  constructor(e) {
    super(), this.issues = [], this.addIssue = (s) => {
      this.issues = [...this.issues, s];
    }, this.addIssues = (s = []) => {
      this.issues = [...this.issues, ...s];
    };
    const t = new.target.prototype;
    Object.setPrototypeOf ? Object.setPrototypeOf(this, t) : this.__proto__ = t, this.name = "ZodError", this.issues = e;
  }
  format(e) {
    const t = e || function(a) {
      return a.message;
    }, s = { _errors: [] }, n = (a) => {
      for (const i of a.issues)
        if (i.code === "invalid_union")
          i.unionErrors.map(n);
        else if (i.code === "invalid_return_type")
          n(i.returnTypeError);
        else if (i.code === "invalid_arguments")
          n(i.argumentsError);
        else if (i.path.length === 0)
          s._errors.push(t(i));
        else {
          let o = s, d = 0;
          for (; d < i.path.length; ) {
            const c = i.path[d];
            d === i.path.length - 1 ? (o[c] = o[c] || { _errors: [] }, o[c]._errors.push(t(i))) : o[c] = o[c] || { _errors: [] }, o = o[c], d++;
          }
        }
    };
    return n(this), s;
  }
  static assert(e) {
    if (!(e instanceof $))
      throw new Error(`Not a ZodError: ${e}`);
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, x.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(e = (t) => t.message) {
    const t = {}, s = [];
    for (const n of this.issues)
      n.path.length > 0 ? (t[n.path[0]] = t[n.path[0]] || [], t[n.path[0]].push(e(n))) : s.push(e(n));
    return { formErrors: s, fieldErrors: t };
  }
  get formErrors() {
    return this.flatten();
  }
}
$.create = (r) => new $(r);
const he = (r, e) => {
  let t;
  switch (r.code) {
    case l.invalid_type:
      r.received === h.undefined ? t = "Required" : t = `Expected ${r.expected}, received ${r.received}`;
      break;
    case l.invalid_literal:
      t = `Invalid literal value, expected ${JSON.stringify(r.expected, x.jsonStringifyReplacer)}`;
      break;
    case l.unrecognized_keys:
      t = `Unrecognized key(s) in object: ${x.joinValues(r.keys, ", ")}`;
      break;
    case l.invalid_union:
      t = "Invalid input";
      break;
    case l.invalid_union_discriminator:
      t = `Invalid discriminator value. Expected ${x.joinValues(r.options)}`;
      break;
    case l.invalid_enum_value:
      t = `Invalid enum value. Expected ${x.joinValues(r.options)}, received '${r.received}'`;
      break;
    case l.invalid_arguments:
      t = "Invalid function arguments";
      break;
    case l.invalid_return_type:
      t = "Invalid function return type";
      break;
    case l.invalid_date:
      t = "Invalid date";
      break;
    case l.invalid_string:
      typeof r.validation == "object" ? "includes" in r.validation ? (t = `Invalid input: must include "${r.validation.includes}"`, typeof r.validation.position == "number" && (t = `${t} at one or more positions greater than or equal to ${r.validation.position}`)) : "startsWith" in r.validation ? t = `Invalid input: must start with "${r.validation.startsWith}"` : "endsWith" in r.validation ? t = `Invalid input: must end with "${r.validation.endsWith}"` : x.assertNever(r.validation) : r.validation !== "regex" ? t = `Invalid ${r.validation}` : t = "Invalid";
      break;
    case l.too_small:
      r.type === "array" ? t = `Array must contain ${r.exact ? "exactly" : r.inclusive ? "at least" : "more than"} ${r.minimum} element(s)` : r.type === "string" ? t = `String must contain ${r.exact ? "exactly" : r.inclusive ? "at least" : "over"} ${r.minimum} character(s)` : r.type === "number" ? t = `Number must be ${r.exact ? "exactly equal to " : r.inclusive ? "greater than or equal to " : "greater than "}${r.minimum}` : r.type === "date" ? t = `Date must be ${r.exact ? "exactly equal to " : r.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(r.minimum))}` : t = "Invalid input";
      break;
    case l.too_big:
      r.type === "array" ? t = `Array must contain ${r.exact ? "exactly" : r.inclusive ? "at most" : "less than"} ${r.maximum} element(s)` : r.type === "string" ? t = `String must contain ${r.exact ? "exactly" : r.inclusive ? "at most" : "under"} ${r.maximum} character(s)` : r.type === "number" ? t = `Number must be ${r.exact ? "exactly" : r.inclusive ? "less than or equal to" : "less than"} ${r.maximum}` : r.type === "bigint" ? t = `BigInt must be ${r.exact ? "exactly" : r.inclusive ? "less than or equal to" : "less than"} ${r.maximum}` : r.type === "date" ? t = `Date must be ${r.exact ? "exactly" : r.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(r.maximum))}` : t = "Invalid input";
      break;
    case l.custom:
      t = "Invalid input";
      break;
    case l.invalid_intersection_types:
      t = "Intersection results could not be merged";
      break;
    case l.not_multiple_of:
      t = `Number must be a multiple of ${r.multipleOf}`;
      break;
    case l.not_finite:
      t = "Number must be finite";
      break;
    default:
      t = e.defaultError, x.assertNever(r);
  }
  return { message: t };
};
let It = he;
function $t() {
  return It;
}
const Pt = (r) => {
  const { data: e, path: t, errorMaps: s, issueData: n } = r, a = [...t, ...n.path || []], i = {
    ...n,
    path: a
  };
  if (n.message !== void 0)
    return {
      ...n,
      path: a,
      message: n.message
    };
  let o = "";
  const d = s.filter((c) => !!c).slice().reverse();
  for (const c of d)
    o = c(i, { data: e, defaultError: o }).message;
  return {
    ...n,
    path: a,
    message: o
  };
};
function u(r, e) {
  const t = $t(), s = Pt({
    issueData: e,
    data: r.data,
    path: r.path,
    errorMaps: [
      r.common.contextualErrorMap,
      // contextual error map is first priority
      r.schemaErrorMap,
      // then schema-bound map if available
      t,
      // then global override map
      t === he ? void 0 : he
      // then global default map
    ].filter((n) => !!n)
  });
  r.common.issues.push(s);
}
class T {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    this.value === "valid" && (this.value = "dirty");
  }
  abort() {
    this.value !== "aborted" && (this.value = "aborted");
  }
  static mergeArray(e, t) {
    const s = [];
    for (const n of t) {
      if (n.status === "aborted")
        return y;
      n.status === "dirty" && e.dirty(), s.push(n.value);
    }
    return { status: e.value, value: s };
  }
  static async mergeObjectAsync(e, t) {
    const s = [];
    for (const n of t) {
      const a = await n.key, i = await n.value;
      s.push({
        key: a,
        value: i
      });
    }
    return T.mergeObjectSync(e, s);
  }
  static mergeObjectSync(e, t) {
    const s = {};
    for (const n of t) {
      const { key: a, value: i } = n;
      if (a.status === "aborted" || i.status === "aborted")
        return y;
      a.status === "dirty" && e.dirty(), i.status === "dirty" && e.dirty(), a.value !== "__proto__" && (typeof i.value < "u" || n.alwaysSet) && (s[a.value] = i.value);
    }
    return { status: e.value, value: s };
  }
}
const y = Object.freeze({
  status: "aborted"
}), Y = (r) => ({ status: "dirty", value: r }), S = (r) => ({ status: "valid", value: r }), Se = (r) => r.status === "aborted", Ae = (r) => r.status === "dirty", W = (r) => r.status === "valid", se = (r) => typeof Promise < "u" && r instanceof Promise;
var m;
(function(r) {
  r.errToObj = (e) => typeof e == "string" ? { message: e } : e || {}, r.toString = (e) => typeof e == "string" ? e : e == null ? void 0 : e.message;
})(m || (m = {}));
class L {
  constructor(e, t, s, n) {
    this._cachedPath = [], this.parent = e, this.data = t, this._path = s, this._key = n;
  }
  get path() {
    return this._cachedPath.length || (Array.isArray(this._key) ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
}
const je = (r, e) => {
  if (W(e))
    return { success: !0, data: e.value };
  if (!r.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error)
        return this._error;
      const t = new $(r.common.issues);
      return this._error = t, this._error;
    }
  };
};
function v(r) {
  if (!r)
    return {};
  const { errorMap: e, invalid_type_error: t, required_error: s, description: n } = r;
  if (e && (t || s))
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  return e ? { errorMap: e, description: n } : { errorMap: (i, o) => {
    const { message: d } = r;
    return i.code === "invalid_enum_value" ? { message: d ?? o.defaultError } : typeof o.data > "u" ? { message: d ?? s ?? o.defaultError } : i.code !== "invalid_type" ? { message: o.defaultError } : { message: d ?? t ?? o.defaultError };
  }, description: n };
}
class _ {
  get description() {
    return this._def.description;
  }
  _getType(e) {
    return V(e.data);
  }
  _getOrReturnCtx(e, t) {
    return t || {
      common: e.parent.common,
      data: e.data,
      parsedType: V(e.data),
      schemaErrorMap: this._def.errorMap,
      path: e.path,
      parent: e.parent
    };
  }
  _processInputParams(e) {
    return {
      status: new T(),
      ctx: {
        common: e.parent.common,
        data: e.data,
        parsedType: V(e.data),
        schemaErrorMap: this._def.errorMap,
        path: e.path,
        parent: e.parent
      }
    };
  }
  _parseSync(e) {
    const t = this._parse(e);
    if (se(t))
      throw new Error("Synchronous parse encountered promise.");
    return t;
  }
  _parseAsync(e) {
    const t = this._parse(e);
    return Promise.resolve(t);
  }
  parse(e, t) {
    const s = this.safeParse(e, t);
    if (s.success)
      return s.data;
    throw s.error;
  }
  safeParse(e, t) {
    const s = {
      common: {
        issues: [],
        async: (t == null ? void 0 : t.async) ?? !1,
        contextualErrorMap: t == null ? void 0 : t.errorMap
      },
      path: (t == null ? void 0 : t.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: e,
      parsedType: V(e)
    }, n = this._parseSync({ data: e, path: s.path, parent: s });
    return je(s, n);
  }
  "~validate"(e) {
    var s, n;
    const t = {
      common: {
        issues: [],
        async: !!this["~standard"].async
      },
      path: [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: e,
      parsedType: V(e)
    };
    if (!this["~standard"].async)
      try {
        const a = this._parseSync({ data: e, path: [], parent: t });
        return W(a) ? {
          value: a.value
        } : {
          issues: t.common.issues
        };
      } catch (a) {
        (n = (s = a == null ? void 0 : a.message) == null ? void 0 : s.toLowerCase()) != null && n.includes("encountered") && (this["~standard"].async = !0), t.common = {
          issues: [],
          async: !0
        };
      }
    return this._parseAsync({ data: e, path: [], parent: t }).then((a) => W(a) ? {
      value: a.value
    } : {
      issues: t.common.issues
    });
  }
  async parseAsync(e, t) {
    const s = await this.safeParseAsync(e, t);
    if (s.success)
      return s.data;
    throw s.error;
  }
  async safeParseAsync(e, t) {
    const s = {
      common: {
        issues: [],
        contextualErrorMap: t == null ? void 0 : t.errorMap,
        async: !0
      },
      path: (t == null ? void 0 : t.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: e,
      parsedType: V(e)
    }, n = this._parse({ data: e, path: s.path, parent: s }), a = await (se(n) ? n : Promise.resolve(n));
    return je(s, a);
  }
  refine(e, t) {
    const s = (n) => typeof t == "string" || typeof t > "u" ? { message: t } : typeof t == "function" ? t(n) : t;
    return this._refinement((n, a) => {
      const i = e(n), o = () => a.addIssue({
        code: l.custom,
        ...s(n)
      });
      return typeof Promise < "u" && i instanceof Promise ? i.then((d) => d ? !0 : (o(), !1)) : i ? !0 : (o(), !1);
    });
  }
  refinement(e, t) {
    return this._refinement((s, n) => e(s) ? !0 : (n.addIssue(typeof t == "function" ? t(s, n) : t), !1));
  }
  _refinement(e) {
    return new G({
      schema: this,
      typeName: g.ZodEffects,
      effect: { type: "refinement", refinement: e }
    });
  }
  superRefine(e) {
    return this._refinement(e);
  }
  constructor(e) {
    this.spa = this.safeParseAsync, this._def = e, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this), this["~standard"] = {
      version: 1,
      vendor: "zod",
      validate: (t) => this["~validate"](t)
    };
  }
  optional() {
    return M.create(this, this._def);
  }
  nullable() {
    return H.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return j.create(this);
  }
  promise() {
    return oe.create(this, this._def);
  }
  or(e) {
    return ae.create([this, e], this._def);
  }
  and(e) {
    return ie.create(this, e, this._def);
  }
  transform(e) {
    return new G({
      ...v(this._def),
      schema: this,
      typeName: g.ZodEffects,
      effect: { type: "transform", transform: e }
    });
  }
  default(e) {
    const t = typeof e == "function" ? e : () => e;
    return new pe({
      ...v(this._def),
      innerType: this,
      defaultValue: t,
      typeName: g.ZodDefault
    });
  }
  brand() {
    return new ar({
      typeName: g.ZodBranded,
      type: this,
      ...v(this._def)
    });
  }
  catch(e) {
    const t = typeof e == "function" ? e : () => e;
    return new ye({
      ...v(this._def),
      innerType: this,
      catchValue: t,
      typeName: g.ZodCatch
    });
  }
  describe(e) {
    const t = this.constructor;
    return new t({
      ...this._def,
      description: e
    });
  }
  pipe(e) {
    return ve.create(this, e);
  }
  readonly() {
    return ge.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const Vt = /^c[^\s-]{8,}$/i, zt = /^[0-9a-z]+$/, Mt = /^[0-9A-HJKMNP-TV-Z]{26}$/i, Lt = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, Dt = /^[a-z0-9_-]{21}$/i, Ft = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/, Ut = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/, Bt = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i, qt = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let le;
const Wt = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, Jt = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/, Gt = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/, Ht = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, Yt = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/, Xt = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/, Qe = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))", Qt = new RegExp(`^${Qe}$`);
function Ke(r) {
  let e = "[0-5]\\d";
  r.precision ? e = `${e}\\.\\d{${r.precision}}` : r.precision == null && (e = `${e}(\\.\\d+)?`);
  const t = r.precision ? "+" : "?";
  return `([01]\\d|2[0-3]):[0-5]\\d(:${e})${t}`;
}
function Kt(r) {
  return new RegExp(`^${Ke(r)}$`);
}
function er(r) {
  let e = `${Qe}T${Ke(r)}`;
  const t = [];
  return t.push(r.local ? "Z?" : "Z"), r.offset && t.push("([+-]\\d{2}:?\\d{2})"), e = `${e}(${t.join("|")})`, new RegExp(`^${e}$`);
}
function tr(r, e) {
  return !!((e === "v4" || !e) && Wt.test(r) || (e === "v6" || !e) && Gt.test(r));
}
function rr(r, e) {
  if (!Ft.test(r))
    return !1;
  try {
    const [t] = r.split("."), s = t.replace(/-/g, "+").replace(/_/g, "/").padEnd(t.length + (4 - t.length % 4) % 4, "="), n = JSON.parse(atob(s));
    return !(typeof n != "object" || n === null || "typ" in n && (n == null ? void 0 : n.typ) !== "JWT" || !n.alg || e && n.alg !== e);
  } catch {
    return !1;
  }
}
function sr(r, e) {
  return !!((e === "v4" || !e) && Jt.test(r) || (e === "v6" || !e) && Ht.test(r));
}
class z extends _ {
  _parse(e) {
    if (this._def.coerce && (e.data = String(e.data)), this._getType(e) !== h.string) {
      const a = this._getOrReturnCtx(e);
      return u(a, {
        code: l.invalid_type,
        expected: h.string,
        received: a.parsedType
      }), y;
    }
    const s = new T();
    let n;
    for (const a of this._def.checks)
      if (a.kind === "min")
        e.data.length < a.value && (n = this._getOrReturnCtx(e, n), u(n, {
          code: l.too_small,
          minimum: a.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: a.message
        }), s.dirty());
      else if (a.kind === "max")
        e.data.length > a.value && (n = this._getOrReturnCtx(e, n), u(n, {
          code: l.too_big,
          maximum: a.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: a.message
        }), s.dirty());
      else if (a.kind === "length") {
        const i = e.data.length > a.value, o = e.data.length < a.value;
        (i || o) && (n = this._getOrReturnCtx(e, n), i ? u(n, {
          code: l.too_big,
          maximum: a.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: a.message
        }) : o && u(n, {
          code: l.too_small,
          minimum: a.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: a.message
        }), s.dirty());
      } else if (a.kind === "email")
        Bt.test(e.data) || (n = this._getOrReturnCtx(e, n), u(n, {
          validation: "email",
          code: l.invalid_string,
          message: a.message
        }), s.dirty());
      else if (a.kind === "emoji")
        le || (le = new RegExp(qt, "u")), le.test(e.data) || (n = this._getOrReturnCtx(e, n), u(n, {
          validation: "emoji",
          code: l.invalid_string,
          message: a.message
        }), s.dirty());
      else if (a.kind === "uuid")
        Lt.test(e.data) || (n = this._getOrReturnCtx(e, n), u(n, {
          validation: "uuid",
          code: l.invalid_string,
          message: a.message
        }), s.dirty());
      else if (a.kind === "nanoid")
        Dt.test(e.data) || (n = this._getOrReturnCtx(e, n), u(n, {
          validation: "nanoid",
          code: l.invalid_string,
          message: a.message
        }), s.dirty());
      else if (a.kind === "cuid")
        Vt.test(e.data) || (n = this._getOrReturnCtx(e, n), u(n, {
          validation: "cuid",
          code: l.invalid_string,
          message: a.message
        }), s.dirty());
      else if (a.kind === "cuid2")
        zt.test(e.data) || (n = this._getOrReturnCtx(e, n), u(n, {
          validation: "cuid2",
          code: l.invalid_string,
          message: a.message
        }), s.dirty());
      else if (a.kind === "ulid")
        Mt.test(e.data) || (n = this._getOrReturnCtx(e, n), u(n, {
          validation: "ulid",
          code: l.invalid_string,
          message: a.message
        }), s.dirty());
      else if (a.kind === "url")
        try {
          new URL(e.data);
        } catch {
          n = this._getOrReturnCtx(e, n), u(n, {
            validation: "url",
            code: l.invalid_string,
            message: a.message
          }), s.dirty();
        }
      else a.kind === "regex" ? (a.regex.lastIndex = 0, a.regex.test(e.data) || (n = this._getOrReturnCtx(e, n), u(n, {
        validation: "regex",
        code: l.invalid_string,
        message: a.message
      }), s.dirty())) : a.kind === "trim" ? e.data = e.data.trim() : a.kind === "includes" ? e.data.includes(a.value, a.position) || (n = this._getOrReturnCtx(e, n), u(n, {
        code: l.invalid_string,
        validation: { includes: a.value, position: a.position },
        message: a.message
      }), s.dirty()) : a.kind === "toLowerCase" ? e.data = e.data.toLowerCase() : a.kind === "toUpperCase" ? e.data = e.data.toUpperCase() : a.kind === "startsWith" ? e.data.startsWith(a.value) || (n = this._getOrReturnCtx(e, n), u(n, {
        code: l.invalid_string,
        validation: { startsWith: a.value },
        message: a.message
      }), s.dirty()) : a.kind === "endsWith" ? e.data.endsWith(a.value) || (n = this._getOrReturnCtx(e, n), u(n, {
        code: l.invalid_string,
        validation: { endsWith: a.value },
        message: a.message
      }), s.dirty()) : a.kind === "datetime" ? er(a).test(e.data) || (n = this._getOrReturnCtx(e, n), u(n, {
        code: l.invalid_string,
        validation: "datetime",
        message: a.message
      }), s.dirty()) : a.kind === "date" ? Qt.test(e.data) || (n = this._getOrReturnCtx(e, n), u(n, {
        code: l.invalid_string,
        validation: "date",
        message: a.message
      }), s.dirty()) : a.kind === "time" ? Kt(a).test(e.data) || (n = this._getOrReturnCtx(e, n), u(n, {
        code: l.invalid_string,
        validation: "time",
        message: a.message
      }), s.dirty()) : a.kind === "duration" ? Ut.test(e.data) || (n = this._getOrReturnCtx(e, n), u(n, {
        validation: "duration",
        code: l.invalid_string,
        message: a.message
      }), s.dirty()) : a.kind === "ip" ? tr(e.data, a.version) || (n = this._getOrReturnCtx(e, n), u(n, {
        validation: "ip",
        code: l.invalid_string,
        message: a.message
      }), s.dirty()) : a.kind === "jwt" ? rr(e.data, a.alg) || (n = this._getOrReturnCtx(e, n), u(n, {
        validation: "jwt",
        code: l.invalid_string,
        message: a.message
      }), s.dirty()) : a.kind === "cidr" ? sr(e.data, a.version) || (n = this._getOrReturnCtx(e, n), u(n, {
        validation: "cidr",
        code: l.invalid_string,
        message: a.message
      }), s.dirty()) : a.kind === "base64" ? Yt.test(e.data) || (n = this._getOrReturnCtx(e, n), u(n, {
        validation: "base64",
        code: l.invalid_string,
        message: a.message
      }), s.dirty()) : a.kind === "base64url" ? Xt.test(e.data) || (n = this._getOrReturnCtx(e, n), u(n, {
        validation: "base64url",
        code: l.invalid_string,
        message: a.message
      }), s.dirty()) : x.assertNever(a);
    return { status: s.value, value: e.data };
  }
  _regex(e, t, s) {
    return this.refinement((n) => e.test(n), {
      validation: t,
      code: l.invalid_string,
      ...m.errToObj(s)
    });
  }
  _addCheck(e) {
    return new z({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  email(e) {
    return this._addCheck({ kind: "email", ...m.errToObj(e) });
  }
  url(e) {
    return this._addCheck({ kind: "url", ...m.errToObj(e) });
  }
  emoji(e) {
    return this._addCheck({ kind: "emoji", ...m.errToObj(e) });
  }
  uuid(e) {
    return this._addCheck({ kind: "uuid", ...m.errToObj(e) });
  }
  nanoid(e) {
    return this._addCheck({ kind: "nanoid", ...m.errToObj(e) });
  }
  cuid(e) {
    return this._addCheck({ kind: "cuid", ...m.errToObj(e) });
  }
  cuid2(e) {
    return this._addCheck({ kind: "cuid2", ...m.errToObj(e) });
  }
  ulid(e) {
    return this._addCheck({ kind: "ulid", ...m.errToObj(e) });
  }
  base64(e) {
    return this._addCheck({ kind: "base64", ...m.errToObj(e) });
  }
  base64url(e) {
    return this._addCheck({
      kind: "base64url",
      ...m.errToObj(e)
    });
  }
  jwt(e) {
    return this._addCheck({ kind: "jwt", ...m.errToObj(e) });
  }
  ip(e) {
    return this._addCheck({ kind: "ip", ...m.errToObj(e) });
  }
  cidr(e) {
    return this._addCheck({ kind: "cidr", ...m.errToObj(e) });
  }
  datetime(e) {
    return typeof e == "string" ? this._addCheck({
      kind: "datetime",
      precision: null,
      offset: !1,
      local: !1,
      message: e
    }) : this._addCheck({
      kind: "datetime",
      precision: typeof (e == null ? void 0 : e.precision) > "u" ? null : e == null ? void 0 : e.precision,
      offset: (e == null ? void 0 : e.offset) ?? !1,
      local: (e == null ? void 0 : e.local) ?? !1,
      ...m.errToObj(e == null ? void 0 : e.message)
    });
  }
  date(e) {
    return this._addCheck({ kind: "date", message: e });
  }
  time(e) {
    return typeof e == "string" ? this._addCheck({
      kind: "time",
      precision: null,
      message: e
    }) : this._addCheck({
      kind: "time",
      precision: typeof (e == null ? void 0 : e.precision) > "u" ? null : e == null ? void 0 : e.precision,
      ...m.errToObj(e == null ? void 0 : e.message)
    });
  }
  duration(e) {
    return this._addCheck({ kind: "duration", ...m.errToObj(e) });
  }
  regex(e, t) {
    return this._addCheck({
      kind: "regex",
      regex: e,
      ...m.errToObj(t)
    });
  }
  includes(e, t) {
    return this._addCheck({
      kind: "includes",
      value: e,
      position: t == null ? void 0 : t.position,
      ...m.errToObj(t == null ? void 0 : t.message)
    });
  }
  startsWith(e, t) {
    return this._addCheck({
      kind: "startsWith",
      value: e,
      ...m.errToObj(t)
    });
  }
  endsWith(e, t) {
    return this._addCheck({
      kind: "endsWith",
      value: e,
      ...m.errToObj(t)
    });
  }
  min(e, t) {
    return this._addCheck({
      kind: "min",
      value: e,
      ...m.errToObj(t)
    });
  }
  max(e, t) {
    return this._addCheck({
      kind: "max",
      value: e,
      ...m.errToObj(t)
    });
  }
  length(e, t) {
    return this._addCheck({
      kind: "length",
      value: e,
      ...m.errToObj(t)
    });
  }
  /**
   * Equivalent to `.min(1)`
   */
  nonempty(e) {
    return this.min(1, m.errToObj(e));
  }
  trim() {
    return new z({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    });
  }
  toLowerCase() {
    return new z({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    });
  }
  toUpperCase() {
    return new z({
      ...this._def,
      checks: [...this._def.checks, { kind: "toUpperCase" }]
    });
  }
  get isDatetime() {
    return !!this._def.checks.find((e) => e.kind === "datetime");
  }
  get isDate() {
    return !!this._def.checks.find((e) => e.kind === "date");
  }
  get isTime() {
    return !!this._def.checks.find((e) => e.kind === "time");
  }
  get isDuration() {
    return !!this._def.checks.find((e) => e.kind === "duration");
  }
  get isEmail() {
    return !!this._def.checks.find((e) => e.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find((e) => e.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find((e) => e.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find((e) => e.kind === "uuid");
  }
  get isNANOID() {
    return !!this._def.checks.find((e) => e.kind === "nanoid");
  }
  get isCUID() {
    return !!this._def.checks.find((e) => e.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find((e) => e.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find((e) => e.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find((e) => e.kind === "ip");
  }
  get isCIDR() {
    return !!this._def.checks.find((e) => e.kind === "cidr");
  }
  get isBase64() {
    return !!this._def.checks.find((e) => e.kind === "base64");
  }
  get isBase64url() {
    return !!this._def.checks.find((e) => e.kind === "base64url");
  }
  get minLength() {
    let e = null;
    for (const t of this._def.checks)
      t.kind === "min" && (e === null || t.value > e) && (e = t.value);
    return e;
  }
  get maxLength() {
    let e = null;
    for (const t of this._def.checks)
      t.kind === "max" && (e === null || t.value < e) && (e = t.value);
    return e;
  }
}
z.create = (r) => new z({
  checks: [],
  typeName: g.ZodString,
  coerce: (r == null ? void 0 : r.coerce) ?? !1,
  ...v(r)
});
function nr(r, e) {
  const t = (r.toString().split(".")[1] || "").length, s = (e.toString().split(".")[1] || "").length, n = t > s ? t : s, a = Number.parseInt(r.toFixed(n).replace(".", "")), i = Number.parseInt(e.toFixed(n).replace(".", ""));
  return a % i / 10 ** n;
}
class X extends _ {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
  }
  _parse(e) {
    if (this._def.coerce && (e.data = Number(e.data)), this._getType(e) !== h.number) {
      const a = this._getOrReturnCtx(e);
      return u(a, {
        code: l.invalid_type,
        expected: h.number,
        received: a.parsedType
      }), y;
    }
    let s;
    const n = new T();
    for (const a of this._def.checks)
      a.kind === "int" ? x.isInteger(e.data) || (s = this._getOrReturnCtx(e, s), u(s, {
        code: l.invalid_type,
        expected: "integer",
        received: "float",
        message: a.message
      }), n.dirty()) : a.kind === "min" ? (a.inclusive ? e.data < a.value : e.data <= a.value) && (s = this._getOrReturnCtx(e, s), u(s, {
        code: l.too_small,
        minimum: a.value,
        type: "number",
        inclusive: a.inclusive,
        exact: !1,
        message: a.message
      }), n.dirty()) : a.kind === "max" ? (a.inclusive ? e.data > a.value : e.data >= a.value) && (s = this._getOrReturnCtx(e, s), u(s, {
        code: l.too_big,
        maximum: a.value,
        type: "number",
        inclusive: a.inclusive,
        exact: !1,
        message: a.message
      }), n.dirty()) : a.kind === "multipleOf" ? nr(e.data, a.value) !== 0 && (s = this._getOrReturnCtx(e, s), u(s, {
        code: l.not_multiple_of,
        multipleOf: a.value,
        message: a.message
      }), n.dirty()) : a.kind === "finite" ? Number.isFinite(e.data) || (s = this._getOrReturnCtx(e, s), u(s, {
        code: l.not_finite,
        message: a.message
      }), n.dirty()) : x.assertNever(a);
    return { status: n.value, value: e.data };
  }
  gte(e, t) {
    return this.setLimit("min", e, !0, m.toString(t));
  }
  gt(e, t) {
    return this.setLimit("min", e, !1, m.toString(t));
  }
  lte(e, t) {
    return this.setLimit("max", e, !0, m.toString(t));
  }
  lt(e, t) {
    return this.setLimit("max", e, !1, m.toString(t));
  }
  setLimit(e, t, s, n) {
    return new X({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: e,
          value: t,
          inclusive: s,
          message: m.toString(n)
        }
      ]
    });
  }
  _addCheck(e) {
    return new X({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  int(e) {
    return this._addCheck({
      kind: "int",
      message: m.toString(e)
    });
  }
  positive(e) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !1,
      message: m.toString(e)
    });
  }
  negative(e) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !1,
      message: m.toString(e)
    });
  }
  nonpositive(e) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !0,
      message: m.toString(e)
    });
  }
  nonnegative(e) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !0,
      message: m.toString(e)
    });
  }
  multipleOf(e, t) {
    return this._addCheck({
      kind: "multipleOf",
      value: e,
      message: m.toString(t)
    });
  }
  finite(e) {
    return this._addCheck({
      kind: "finite",
      message: m.toString(e)
    });
  }
  safe(e) {
    return this._addCheck({
      kind: "min",
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: m.toString(e)
    })._addCheck({
      kind: "max",
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: m.toString(e)
    });
  }
  get minValue() {
    let e = null;
    for (const t of this._def.checks)
      t.kind === "min" && (e === null || t.value > e) && (e = t.value);
    return e;
  }
  get maxValue() {
    let e = null;
    for (const t of this._def.checks)
      t.kind === "max" && (e === null || t.value < e) && (e = t.value);
    return e;
  }
  get isInt() {
    return !!this._def.checks.find((e) => e.kind === "int" || e.kind === "multipleOf" && x.isInteger(e.value));
  }
  get isFinite() {
    let e = null, t = null;
    for (const s of this._def.checks) {
      if (s.kind === "finite" || s.kind === "int" || s.kind === "multipleOf")
        return !0;
      s.kind === "min" ? (t === null || s.value > t) && (t = s.value) : s.kind === "max" && (e === null || s.value < e) && (e = s.value);
    }
    return Number.isFinite(t) && Number.isFinite(e);
  }
}
X.create = (r) => new X({
  checks: [],
  typeName: g.ZodNumber,
  coerce: (r == null ? void 0 : r.coerce) || !1,
  ...v(r)
});
class Q extends _ {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte;
  }
  _parse(e) {
    if (this._def.coerce)
      try {
        e.data = BigInt(e.data);
      } catch {
        return this._getInvalidInput(e);
      }
    if (this._getType(e) !== h.bigint)
      return this._getInvalidInput(e);
    let s;
    const n = new T();
    for (const a of this._def.checks)
      a.kind === "min" ? (a.inclusive ? e.data < a.value : e.data <= a.value) && (s = this._getOrReturnCtx(e, s), u(s, {
        code: l.too_small,
        type: "bigint",
        minimum: a.value,
        inclusive: a.inclusive,
        message: a.message
      }), n.dirty()) : a.kind === "max" ? (a.inclusive ? e.data > a.value : e.data >= a.value) && (s = this._getOrReturnCtx(e, s), u(s, {
        code: l.too_big,
        type: "bigint",
        maximum: a.value,
        inclusive: a.inclusive,
        message: a.message
      }), n.dirty()) : a.kind === "multipleOf" ? e.data % a.value !== BigInt(0) && (s = this._getOrReturnCtx(e, s), u(s, {
        code: l.not_multiple_of,
        multipleOf: a.value,
        message: a.message
      }), n.dirty()) : x.assertNever(a);
    return { status: n.value, value: e.data };
  }
  _getInvalidInput(e) {
    const t = this._getOrReturnCtx(e);
    return u(t, {
      code: l.invalid_type,
      expected: h.bigint,
      received: t.parsedType
    }), y;
  }
  gte(e, t) {
    return this.setLimit("min", e, !0, m.toString(t));
  }
  gt(e, t) {
    return this.setLimit("min", e, !1, m.toString(t));
  }
  lte(e, t) {
    return this.setLimit("max", e, !0, m.toString(t));
  }
  lt(e, t) {
    return this.setLimit("max", e, !1, m.toString(t));
  }
  setLimit(e, t, s, n) {
    return new Q({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: e,
          value: t,
          inclusive: s,
          message: m.toString(n)
        }
      ]
    });
  }
  _addCheck(e) {
    return new Q({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  positive(e) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !1,
      message: m.toString(e)
    });
  }
  negative(e) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !1,
      message: m.toString(e)
    });
  }
  nonpositive(e) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !0,
      message: m.toString(e)
    });
  }
  nonnegative(e) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !0,
      message: m.toString(e)
    });
  }
  multipleOf(e, t) {
    return this._addCheck({
      kind: "multipleOf",
      value: e,
      message: m.toString(t)
    });
  }
  get minValue() {
    let e = null;
    for (const t of this._def.checks)
      t.kind === "min" && (e === null || t.value > e) && (e = t.value);
    return e;
  }
  get maxValue() {
    let e = null;
    for (const t of this._def.checks)
      t.kind === "max" && (e === null || t.value < e) && (e = t.value);
    return e;
  }
}
Q.create = (r) => new Q({
  checks: [],
  typeName: g.ZodBigInt,
  coerce: (r == null ? void 0 : r.coerce) ?? !1,
  ...v(r)
});
class Ze extends _ {
  _parse(e) {
    if (this._def.coerce && (e.data = !!e.data), this._getType(e) !== h.boolean) {
      const s = this._getOrReturnCtx(e);
      return u(s, {
        code: l.invalid_type,
        expected: h.boolean,
        received: s.parsedType
      }), y;
    }
    return S(e.data);
  }
}
Ze.create = (r) => new Ze({
  typeName: g.ZodBoolean,
  coerce: (r == null ? void 0 : r.coerce) || !1,
  ...v(r)
});
class ne extends _ {
  _parse(e) {
    if (this._def.coerce && (e.data = new Date(e.data)), this._getType(e) !== h.date) {
      const a = this._getOrReturnCtx(e);
      return u(a, {
        code: l.invalid_type,
        expected: h.date,
        received: a.parsedType
      }), y;
    }
    if (Number.isNaN(e.data.getTime())) {
      const a = this._getOrReturnCtx(e);
      return u(a, {
        code: l.invalid_date
      }), y;
    }
    const s = new T();
    let n;
    for (const a of this._def.checks)
      a.kind === "min" ? e.data.getTime() < a.value && (n = this._getOrReturnCtx(e, n), u(n, {
        code: l.too_small,
        message: a.message,
        inclusive: !0,
        exact: !1,
        minimum: a.value,
        type: "date"
      }), s.dirty()) : a.kind === "max" ? e.data.getTime() > a.value && (n = this._getOrReturnCtx(e, n), u(n, {
        code: l.too_big,
        message: a.message,
        inclusive: !0,
        exact: !1,
        maximum: a.value,
        type: "date"
      }), s.dirty()) : x.assertNever(a);
    return {
      status: s.value,
      value: new Date(e.data.getTime())
    };
  }
  _addCheck(e) {
    return new ne({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  min(e, t) {
    return this._addCheck({
      kind: "min",
      value: e.getTime(),
      message: m.toString(t)
    });
  }
  max(e, t) {
    return this._addCheck({
      kind: "max",
      value: e.getTime(),
      message: m.toString(t)
    });
  }
  get minDate() {
    let e = null;
    for (const t of this._def.checks)
      t.kind === "min" && (e === null || t.value > e) && (e = t.value);
    return e != null ? new Date(e) : null;
  }
  get maxDate() {
    let e = null;
    for (const t of this._def.checks)
      t.kind === "max" && (e === null || t.value < e) && (e = t.value);
    return e != null ? new Date(e) : null;
  }
}
ne.create = (r) => new ne({
  checks: [],
  coerce: (r == null ? void 0 : r.coerce) || !1,
  typeName: g.ZodDate,
  ...v(r)
});
class Ee extends _ {
  _parse(e) {
    if (this._getType(e) !== h.symbol) {
      const s = this._getOrReturnCtx(e);
      return u(s, {
        code: l.invalid_type,
        expected: h.symbol,
        received: s.parsedType
      }), y;
    }
    return S(e.data);
  }
}
Ee.create = (r) => new Ee({
  typeName: g.ZodSymbol,
  ...v(r)
});
class Re extends _ {
  _parse(e) {
    if (this._getType(e) !== h.undefined) {
      const s = this._getOrReturnCtx(e);
      return u(s, {
        code: l.invalid_type,
        expected: h.undefined,
        received: s.parsedType
      }), y;
    }
    return S(e.data);
  }
}
Re.create = (r) => new Re({
  typeName: g.ZodUndefined,
  ...v(r)
});
class Ie extends _ {
  _parse(e) {
    if (this._getType(e) !== h.null) {
      const s = this._getOrReturnCtx(e);
      return u(s, {
        code: l.invalid_type,
        expected: h.null,
        received: s.parsedType
      }), y;
    }
    return S(e.data);
  }
}
Ie.create = (r) => new Ie({
  typeName: g.ZodNull,
  ...v(r)
});
class $e extends _ {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(e) {
    return S(e.data);
  }
}
$e.create = (r) => new $e({
  typeName: g.ZodAny,
  ...v(r)
});
class Pe extends _ {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(e) {
    return S(e.data);
  }
}
Pe.create = (r) => new Pe({
  typeName: g.ZodUnknown,
  ...v(r)
});
class D extends _ {
  _parse(e) {
    const t = this._getOrReturnCtx(e);
    return u(t, {
      code: l.invalid_type,
      expected: h.never,
      received: t.parsedType
    }), y;
  }
}
D.create = (r) => new D({
  typeName: g.ZodNever,
  ...v(r)
});
class Ve extends _ {
  _parse(e) {
    if (this._getType(e) !== h.undefined) {
      const s = this._getOrReturnCtx(e);
      return u(s, {
        code: l.invalid_type,
        expected: h.void,
        received: s.parsedType
      }), y;
    }
    return S(e.data);
  }
}
Ve.create = (r) => new Ve({
  typeName: g.ZodVoid,
  ...v(r)
});
class j extends _ {
  _parse(e) {
    const { ctx: t, status: s } = this._processInputParams(e), n = this._def;
    if (t.parsedType !== h.array)
      return u(t, {
        code: l.invalid_type,
        expected: h.array,
        received: t.parsedType
      }), y;
    if (n.exactLength !== null) {
      const i = t.data.length > n.exactLength.value, o = t.data.length < n.exactLength.value;
      (i || o) && (u(t, {
        code: i ? l.too_big : l.too_small,
        minimum: o ? n.exactLength.value : void 0,
        maximum: i ? n.exactLength.value : void 0,
        type: "array",
        inclusive: !0,
        exact: !0,
        message: n.exactLength.message
      }), s.dirty());
    }
    if (n.minLength !== null && t.data.length < n.minLength.value && (u(t, {
      code: l.too_small,
      minimum: n.minLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: n.minLength.message
    }), s.dirty()), n.maxLength !== null && t.data.length > n.maxLength.value && (u(t, {
      code: l.too_big,
      maximum: n.maxLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: n.maxLength.message
    }), s.dirty()), t.common.async)
      return Promise.all([...t.data].map((i, o) => n.type._parseAsync(new L(t, i, t.path, o)))).then((i) => T.mergeArray(s, i));
    const a = [...t.data].map((i, o) => n.type._parseSync(new L(t, i, t.path, o)));
    return T.mergeArray(s, a);
  }
  get element() {
    return this._def.type;
  }
  min(e, t) {
    return new j({
      ...this._def,
      minLength: { value: e, message: m.toString(t) }
    });
  }
  max(e, t) {
    return new j({
      ...this._def,
      maxLength: { value: e, message: m.toString(t) }
    });
  }
  length(e, t) {
    return new j({
      ...this._def,
      exactLength: { value: e, message: m.toString(t) }
    });
  }
  nonempty(e) {
    return this.min(1, e);
  }
}
j.create = (r, e) => new j({
  type: r,
  minLength: null,
  maxLength: null,
  exactLength: null,
  typeName: g.ZodArray,
  ...v(e)
});
function B(r) {
  if (r instanceof N) {
    const e = {};
    for (const t in r.shape) {
      const s = r.shape[t];
      e[t] = M.create(B(s));
    }
    return new N({
      ...r._def,
      shape: () => e
    });
  } else return r instanceof j ? new j({
    ...r._def,
    type: B(r.element)
  }) : r instanceof M ? M.create(B(r.unwrap())) : r instanceof H ? H.create(B(r.unwrap())) : r instanceof U ? U.create(r.items.map((e) => B(e))) : r;
}
class N extends _ {
  constructor() {
    super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const e = this._def.shape(), t = x.objectKeys(e);
    return this._cached = { shape: e, keys: t }, this._cached;
  }
  _parse(e) {
    if (this._getType(e) !== h.object) {
      const c = this._getOrReturnCtx(e);
      return u(c, {
        code: l.invalid_type,
        expected: h.object,
        received: c.parsedType
      }), y;
    }
    const { status: s, ctx: n } = this._processInputParams(e), { shape: a, keys: i } = this._getCached(), o = [];
    if (!(this._def.catchall instanceof D && this._def.unknownKeys === "strip"))
      for (const c in n.data)
        i.includes(c) || o.push(c);
    const d = [];
    for (const c of i) {
      const f = a[c], b = n.data[c];
      d.push({
        key: { status: "valid", value: c },
        value: f._parse(new L(n, b, n.path, c)),
        alwaysSet: c in n.data
      });
    }
    if (this._def.catchall instanceof D) {
      const c = this._def.unknownKeys;
      if (c === "passthrough")
        for (const f of o)
          d.push({
            key: { status: "valid", value: f },
            value: { status: "valid", value: n.data[f] }
          });
      else if (c === "strict")
        o.length > 0 && (u(n, {
          code: l.unrecognized_keys,
          keys: o
        }), s.dirty());
      else if (c !== "strip") throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const c = this._def.catchall;
      for (const f of o) {
        const b = n.data[f];
        d.push({
          key: { status: "valid", value: f },
          value: c._parse(
            new L(n, b, n.path, f)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: f in n.data
        });
      }
    }
    return n.common.async ? Promise.resolve().then(async () => {
      const c = [];
      for (const f of d) {
        const b = await f.key, C = await f.value;
        c.push({
          key: b,
          value: C,
          alwaysSet: f.alwaysSet
        });
      }
      return c;
    }).then((c) => T.mergeObjectSync(s, c)) : T.mergeObjectSync(s, d);
  }
  get shape() {
    return this._def.shape();
  }
  strict(e) {
    return m.errToObj, new N({
      ...this._def,
      unknownKeys: "strict",
      ...e !== void 0 ? {
        errorMap: (t, s) => {
          var a, i;
          const n = ((i = (a = this._def).errorMap) == null ? void 0 : i.call(a, t, s).message) ?? s.defaultError;
          return t.code === "unrecognized_keys" ? {
            message: m.errToObj(e).message ?? n
          } : {
            message: n
          };
        }
      } : {}
    });
  }
  strip() {
    return new N({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new N({
      ...this._def,
      unknownKeys: "passthrough"
    });
  }
  // const AugmentFactory =
  //   <Def extends ZodObjectDef>(def: Def) =>
  //   <Augmentation extends ZodRawShape>(
  //     augmentation: Augmentation
  //   ): ZodObject<
  //     extendShape<ReturnType<Def["shape"]>, Augmentation>,
  //     Def["unknownKeys"],
  //     Def["catchall"]
  //   > => {
  //     return new ZodObject({
  //       ...def,
  //       shape: () => ({
  //         ...def.shape(),
  //         ...augmentation,
  //       }),
  //     }) as any;
  //   };
  extend(e) {
    return new N({
      ...this._def,
      shape: () => ({
        ...this._def.shape(),
        ...e
      })
    });
  }
  /**
   * Prior to zod@1.0.12 there was a bug in the
   * inferred type of merged objects. Please
   * upgrade if you are experiencing issues.
   */
  merge(e) {
    return new N({
      unknownKeys: e._def.unknownKeys,
      catchall: e._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...e._def.shape()
      }),
      typeName: g.ZodObject
    });
  }
  // merge<
  //   Incoming extends AnyZodObject,
  //   Augmentation extends Incoming["shape"],
  //   NewOutput extends {
  //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
  //       ? Augmentation[k]["_output"]
  //       : k extends keyof Output
  //       ? Output[k]
  //       : never;
  //   },
  //   NewInput extends {
  //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
  //       ? Augmentation[k]["_input"]
  //       : k extends keyof Input
  //       ? Input[k]
  //       : never;
  //   }
  // >(
  //   merging: Incoming
  // ): ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"],
  //   NewOutput,
  //   NewInput
  // > {
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  setKey(e, t) {
    return this.augment({ [e]: t });
  }
  // merge<Incoming extends AnyZodObject>(
  //   merging: Incoming
  // ): //ZodObject<T & Incoming["_shape"], UnknownKeys, Catchall> = (merging) => {
  // ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"]
  // > {
  //   // const mergedShape = objectUtil.mergeShapes(
  //   //   this._def.shape(),
  //   //   merging._def.shape()
  //   // );
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  catchall(e) {
    return new N({
      ...this._def,
      catchall: e
    });
  }
  pick(e) {
    const t = {};
    for (const s of x.objectKeys(e))
      e[s] && this.shape[s] && (t[s] = this.shape[s]);
    return new N({
      ...this._def,
      shape: () => t
    });
  }
  omit(e) {
    const t = {};
    for (const s of x.objectKeys(this.shape))
      e[s] || (t[s] = this.shape[s]);
    return new N({
      ...this._def,
      shape: () => t
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return B(this);
  }
  partial(e) {
    const t = {};
    for (const s of x.objectKeys(this.shape)) {
      const n = this.shape[s];
      e && !e[s] ? t[s] = n : t[s] = n.optional();
    }
    return new N({
      ...this._def,
      shape: () => t
    });
  }
  required(e) {
    const t = {};
    for (const s of x.objectKeys(this.shape))
      if (e && !e[s])
        t[s] = this.shape[s];
      else {
        let a = this.shape[s];
        for (; a instanceof M; )
          a = a._def.innerType;
        t[s] = a;
      }
    return new N({
      ...this._def,
      shape: () => t
    });
  }
  keyof() {
    return et(x.objectKeys(this.shape));
  }
}
N.create = (r, e) => new N({
  shape: () => r,
  unknownKeys: "strip",
  catchall: D.create(),
  typeName: g.ZodObject,
  ...v(e)
});
N.strictCreate = (r, e) => new N({
  shape: () => r,
  unknownKeys: "strict",
  catchall: D.create(),
  typeName: g.ZodObject,
  ...v(e)
});
N.lazycreate = (r, e) => new N({
  shape: r,
  unknownKeys: "strip",
  catchall: D.create(),
  typeName: g.ZodObject,
  ...v(e)
});
class ae extends _ {
  _parse(e) {
    const { ctx: t } = this._processInputParams(e), s = this._def.options;
    function n(a) {
      for (const o of a)
        if (o.result.status === "valid")
          return o.result;
      for (const o of a)
        if (o.result.status === "dirty")
          return t.common.issues.push(...o.ctx.common.issues), o.result;
      const i = a.map((o) => new $(o.ctx.common.issues));
      return u(t, {
        code: l.invalid_union,
        unionErrors: i
      }), y;
    }
    if (t.common.async)
      return Promise.all(s.map(async (a) => {
        const i = {
          ...t,
          common: {
            ...t.common,
            issues: []
          },
          parent: null
        };
        return {
          result: await a._parseAsync({
            data: t.data,
            path: t.path,
            parent: i
          }),
          ctx: i
        };
      })).then(n);
    {
      let a;
      const i = [];
      for (const d of s) {
        const c = {
          ...t,
          common: {
            ...t.common,
            issues: []
          },
          parent: null
        }, f = d._parseSync({
          data: t.data,
          path: t.path,
          parent: c
        });
        if (f.status === "valid")
          return f;
        f.status === "dirty" && !a && (a = { result: f, ctx: c }), c.common.issues.length && i.push(c.common.issues);
      }
      if (a)
        return t.common.issues.push(...a.ctx.common.issues), a.result;
      const o = i.map((d) => new $(d));
      return u(t, {
        code: l.invalid_union,
        unionErrors: o
      }), y;
    }
  }
  get options() {
    return this._def.options;
  }
}
ae.create = (r, e) => new ae({
  options: r,
  typeName: g.ZodUnion,
  ...v(e)
});
function me(r, e) {
  const t = V(r), s = V(e);
  if (r === e)
    return { valid: !0, data: r };
  if (t === h.object && s === h.object) {
    const n = x.objectKeys(e), a = x.objectKeys(r).filter((o) => n.indexOf(o) !== -1), i = { ...r, ...e };
    for (const o of a) {
      const d = me(r[o], e[o]);
      if (!d.valid)
        return { valid: !1 };
      i[o] = d.data;
    }
    return { valid: !0, data: i };
  } else if (t === h.array && s === h.array) {
    if (r.length !== e.length)
      return { valid: !1 };
    const n = [];
    for (let a = 0; a < r.length; a++) {
      const i = r[a], o = e[a], d = me(i, o);
      if (!d.valid)
        return { valid: !1 };
      n.push(d.data);
    }
    return { valid: !0, data: n };
  } else return t === h.date && s === h.date && +r == +e ? { valid: !0, data: r } : { valid: !1 };
}
class ie extends _ {
  _parse(e) {
    const { status: t, ctx: s } = this._processInputParams(e), n = (a, i) => {
      if (Se(a) || Se(i))
        return y;
      const o = me(a.value, i.value);
      return o.valid ? ((Ae(a) || Ae(i)) && t.dirty(), { status: t.value, value: o.data }) : (u(s, {
        code: l.invalid_intersection_types
      }), y);
    };
    return s.common.async ? Promise.all([
      this._def.left._parseAsync({
        data: s.data,
        path: s.path,
        parent: s
      }),
      this._def.right._parseAsync({
        data: s.data,
        path: s.path,
        parent: s
      })
    ]).then(([a, i]) => n(a, i)) : n(this._def.left._parseSync({
      data: s.data,
      path: s.path,
      parent: s
    }), this._def.right._parseSync({
      data: s.data,
      path: s.path,
      parent: s
    }));
  }
}
ie.create = (r, e, t) => new ie({
  left: r,
  right: e,
  typeName: g.ZodIntersection,
  ...v(t)
});
class U extends _ {
  _parse(e) {
    const { status: t, ctx: s } = this._processInputParams(e);
    if (s.parsedType !== h.array)
      return u(s, {
        code: l.invalid_type,
        expected: h.array,
        received: s.parsedType
      }), y;
    if (s.data.length < this._def.items.length)
      return u(s, {
        code: l.too_small,
        minimum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array"
      }), y;
    !this._def.rest && s.data.length > this._def.items.length && (u(s, {
      code: l.too_big,
      maximum: this._def.items.length,
      inclusive: !0,
      exact: !1,
      type: "array"
    }), t.dirty());
    const a = [...s.data].map((i, o) => {
      const d = this._def.items[o] || this._def.rest;
      return d ? d._parse(new L(s, i, s.path, o)) : null;
    }).filter((i) => !!i);
    return s.common.async ? Promise.all(a).then((i) => T.mergeArray(t, i)) : T.mergeArray(t, a);
  }
  get items() {
    return this._def.items;
  }
  rest(e) {
    return new U({
      ...this._def,
      rest: e
    });
  }
}
U.create = (r, e) => {
  if (!Array.isArray(r))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new U({
    items: r,
    typeName: g.ZodTuple,
    rest: null,
    ...v(e)
  });
};
class ze extends _ {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(e) {
    const { status: t, ctx: s } = this._processInputParams(e);
    if (s.parsedType !== h.map)
      return u(s, {
        code: l.invalid_type,
        expected: h.map,
        received: s.parsedType
      }), y;
    const n = this._def.keyType, a = this._def.valueType, i = [...s.data.entries()].map(([o, d], c) => ({
      key: n._parse(new L(s, o, s.path, [c, "key"])),
      value: a._parse(new L(s, d, s.path, [c, "value"]))
    }));
    if (s.common.async) {
      const o = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const d of i) {
          const c = await d.key, f = await d.value;
          if (c.status === "aborted" || f.status === "aborted")
            return y;
          (c.status === "dirty" || f.status === "dirty") && t.dirty(), o.set(c.value, f.value);
        }
        return { status: t.value, value: o };
      });
    } else {
      const o = /* @__PURE__ */ new Map();
      for (const d of i) {
        const c = d.key, f = d.value;
        if (c.status === "aborted" || f.status === "aborted")
          return y;
        (c.status === "dirty" || f.status === "dirty") && t.dirty(), o.set(c.value, f.value);
      }
      return { status: t.value, value: o };
    }
  }
}
ze.create = (r, e, t) => new ze({
  valueType: e,
  keyType: r,
  typeName: g.ZodMap,
  ...v(t)
});
class K extends _ {
  _parse(e) {
    const { status: t, ctx: s } = this._processInputParams(e);
    if (s.parsedType !== h.set)
      return u(s, {
        code: l.invalid_type,
        expected: h.set,
        received: s.parsedType
      }), y;
    const n = this._def;
    n.minSize !== null && s.data.size < n.minSize.value && (u(s, {
      code: l.too_small,
      minimum: n.minSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: n.minSize.message
    }), t.dirty()), n.maxSize !== null && s.data.size > n.maxSize.value && (u(s, {
      code: l.too_big,
      maximum: n.maxSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: n.maxSize.message
    }), t.dirty());
    const a = this._def.valueType;
    function i(d) {
      const c = /* @__PURE__ */ new Set();
      for (const f of d) {
        if (f.status === "aborted")
          return y;
        f.status === "dirty" && t.dirty(), c.add(f.value);
      }
      return { status: t.value, value: c };
    }
    const o = [...s.data.values()].map((d, c) => a._parse(new L(s, d, s.path, c)));
    return s.common.async ? Promise.all(o).then((d) => i(d)) : i(o);
  }
  min(e, t) {
    return new K({
      ...this._def,
      minSize: { value: e, message: m.toString(t) }
    });
  }
  max(e, t) {
    return new K({
      ...this._def,
      maxSize: { value: e, message: m.toString(t) }
    });
  }
  size(e, t) {
    return this.min(e, t).max(e, t);
  }
  nonempty(e) {
    return this.min(1, e);
  }
}
K.create = (r, e) => new K({
  valueType: r,
  minSize: null,
  maxSize: null,
  typeName: g.ZodSet,
  ...v(e)
});
class Me extends _ {
  get schema() {
    return this._def.getter();
  }
  _parse(e) {
    const { ctx: t } = this._processInputParams(e);
    return this._def.getter()._parse({ data: t.data, path: t.path, parent: t });
  }
}
Me.create = (r, e) => new Me({
  getter: r,
  typeName: g.ZodLazy,
  ...v(e)
});
class Le extends _ {
  _parse(e) {
    if (e.data !== this._def.value) {
      const t = this._getOrReturnCtx(e);
      return u(t, {
        received: t.data,
        code: l.invalid_literal,
        expected: this._def.value
      }), y;
    }
    return { status: "valid", value: e.data };
  }
  get value() {
    return this._def.value;
  }
}
Le.create = (r, e) => new Le({
  value: r,
  typeName: g.ZodLiteral,
  ...v(e)
});
function et(r, e) {
  return new J({
    values: r,
    typeName: g.ZodEnum,
    ...v(e)
  });
}
class J extends _ {
  _parse(e) {
    if (typeof e.data != "string") {
      const t = this._getOrReturnCtx(e), s = this._def.values;
      return u(t, {
        expected: x.joinValues(s),
        received: t.parsedType,
        code: l.invalid_type
      }), y;
    }
    if (this._cache || (this._cache = new Set(this._def.values)), !this._cache.has(e.data)) {
      const t = this._getOrReturnCtx(e), s = this._def.values;
      return u(t, {
        received: t.data,
        code: l.invalid_enum_value,
        options: s
      }), y;
    }
    return S(e.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const e = {};
    for (const t of this._def.values)
      e[t] = t;
    return e;
  }
  get Values() {
    const e = {};
    for (const t of this._def.values)
      e[t] = t;
    return e;
  }
  get Enum() {
    const e = {};
    for (const t of this._def.values)
      e[t] = t;
    return e;
  }
  extract(e, t = this._def) {
    return J.create(e, {
      ...this._def,
      ...t
    });
  }
  exclude(e, t = this._def) {
    return J.create(this.options.filter((s) => !e.includes(s)), {
      ...this._def,
      ...t
    });
  }
}
J.create = et;
class De extends _ {
  _parse(e) {
    const t = x.getValidEnumValues(this._def.values), s = this._getOrReturnCtx(e);
    if (s.parsedType !== h.string && s.parsedType !== h.number) {
      const n = x.objectValues(t);
      return u(s, {
        expected: x.joinValues(n),
        received: s.parsedType,
        code: l.invalid_type
      }), y;
    }
    if (this._cache || (this._cache = new Set(x.getValidEnumValues(this._def.values))), !this._cache.has(e.data)) {
      const n = x.objectValues(t);
      return u(s, {
        received: s.data,
        code: l.invalid_enum_value,
        options: n
      }), y;
    }
    return S(e.data);
  }
  get enum() {
    return this._def.values;
  }
}
De.create = (r, e) => new De({
  values: r,
  typeName: g.ZodNativeEnum,
  ...v(e)
});
class oe extends _ {
  unwrap() {
    return this._def.type;
  }
  _parse(e) {
    const { ctx: t } = this._processInputParams(e);
    if (t.parsedType !== h.promise && t.common.async === !1)
      return u(t, {
        code: l.invalid_type,
        expected: h.promise,
        received: t.parsedType
      }), y;
    const s = t.parsedType === h.promise ? t.data : Promise.resolve(t.data);
    return S(s.then((n) => this._def.type.parseAsync(n, {
      path: t.path,
      errorMap: t.common.contextualErrorMap
    })));
  }
}
oe.create = (r, e) => new oe({
  type: r,
  typeName: g.ZodPromise,
  ...v(e)
});
class G extends _ {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === g.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(e) {
    const { status: t, ctx: s } = this._processInputParams(e), n = this._def.effect || null, a = {
      addIssue: (i) => {
        u(s, i), i.fatal ? t.abort() : t.dirty();
      },
      get path() {
        return s.path;
      }
    };
    if (a.addIssue = a.addIssue.bind(a), n.type === "preprocess") {
      const i = n.transform(s.data, a);
      if (s.common.async)
        return Promise.resolve(i).then(async (o) => {
          if (t.value === "aborted")
            return y;
          const d = await this._def.schema._parseAsync({
            data: o,
            path: s.path,
            parent: s
          });
          return d.status === "aborted" ? y : d.status === "dirty" || t.value === "dirty" ? Y(d.value) : d;
        });
      {
        if (t.value === "aborted")
          return y;
        const o = this._def.schema._parseSync({
          data: i,
          path: s.path,
          parent: s
        });
        return o.status === "aborted" ? y : o.status === "dirty" || t.value === "dirty" ? Y(o.value) : o;
      }
    }
    if (n.type === "refinement") {
      const i = (o) => {
        const d = n.refinement(o, a);
        if (s.common.async)
          return Promise.resolve(d);
        if (d instanceof Promise)
          throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        return o;
      };
      if (s.common.async === !1) {
        const o = this._def.schema._parseSync({
          data: s.data,
          path: s.path,
          parent: s
        });
        return o.status === "aborted" ? y : (o.status === "dirty" && t.dirty(), i(o.value), { status: t.value, value: o.value });
      } else
        return this._def.schema._parseAsync({ data: s.data, path: s.path, parent: s }).then((o) => o.status === "aborted" ? y : (o.status === "dirty" && t.dirty(), i(o.value).then(() => ({ status: t.value, value: o.value }))));
    }
    if (n.type === "transform")
      if (s.common.async === !1) {
        const i = this._def.schema._parseSync({
          data: s.data,
          path: s.path,
          parent: s
        });
        if (!W(i))
          return y;
        const o = n.transform(i.value, a);
        if (o instanceof Promise)
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: t.value, value: o };
      } else
        return this._def.schema._parseAsync({ data: s.data, path: s.path, parent: s }).then((i) => W(i) ? Promise.resolve(n.transform(i.value, a)).then((o) => ({
          status: t.value,
          value: o
        })) : y);
    x.assertNever(n);
  }
}
G.create = (r, e, t) => new G({
  schema: r,
  typeName: g.ZodEffects,
  effect: e,
  ...v(t)
});
G.createWithPreprocess = (r, e, t) => new G({
  schema: e,
  effect: { type: "preprocess", transform: r },
  typeName: g.ZodEffects,
  ...v(t)
});
class M extends _ {
  _parse(e) {
    return this._getType(e) === h.undefined ? S(void 0) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
M.create = (r, e) => new M({
  innerType: r,
  typeName: g.ZodOptional,
  ...v(e)
});
class H extends _ {
  _parse(e) {
    return this._getType(e) === h.null ? S(null) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
H.create = (r, e) => new H({
  innerType: r,
  typeName: g.ZodNullable,
  ...v(e)
});
class pe extends _ {
  _parse(e) {
    const { ctx: t } = this._processInputParams(e);
    let s = t.data;
    return t.parsedType === h.undefined && (s = this._def.defaultValue()), this._def.innerType._parse({
      data: s,
      path: t.path,
      parent: t
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
}
pe.create = (r, e) => new pe({
  innerType: r,
  typeName: g.ZodDefault,
  defaultValue: typeof e.default == "function" ? e.default : () => e.default,
  ...v(e)
});
class ye extends _ {
  _parse(e) {
    const { ctx: t } = this._processInputParams(e), s = {
      ...t,
      common: {
        ...t.common,
        issues: []
      }
    }, n = this._def.innerType._parse({
      data: s.data,
      path: s.path,
      parent: {
        ...s
      }
    });
    return se(n) ? n.then((a) => ({
      status: "valid",
      value: a.status === "valid" ? a.value : this._def.catchValue({
        get error() {
          return new $(s.common.issues);
        },
        input: s.data
      })
    })) : {
      status: "valid",
      value: n.status === "valid" ? n.value : this._def.catchValue({
        get error() {
          return new $(s.common.issues);
        },
        input: s.data
      })
    };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
ye.create = (r, e) => new ye({
  innerType: r,
  typeName: g.ZodCatch,
  catchValue: typeof e.catch == "function" ? e.catch : () => e.catch,
  ...v(e)
});
class Fe extends _ {
  _parse(e) {
    if (this._getType(e) !== h.nan) {
      const s = this._getOrReturnCtx(e);
      return u(s, {
        code: l.invalid_type,
        expected: h.nan,
        received: s.parsedType
      }), y;
    }
    return { status: "valid", value: e.data };
  }
}
Fe.create = (r) => new Fe({
  typeName: g.ZodNaN,
  ...v(r)
});
class ar extends _ {
  _parse(e) {
    const { ctx: t } = this._processInputParams(e), s = t.data;
    return this._def.type._parse({
      data: s,
      path: t.path,
      parent: t
    });
  }
  unwrap() {
    return this._def.type;
  }
}
class ve extends _ {
  _parse(e) {
    const { status: t, ctx: s } = this._processInputParams(e);
    if (s.common.async)
      return (async () => {
        const a = await this._def.in._parseAsync({
          data: s.data,
          path: s.path,
          parent: s
        });
        return a.status === "aborted" ? y : a.status === "dirty" ? (t.dirty(), Y(a.value)) : this._def.out._parseAsync({
          data: a.value,
          path: s.path,
          parent: s
        });
      })();
    {
      const n = this._def.in._parseSync({
        data: s.data,
        path: s.path,
        parent: s
      });
      return n.status === "aborted" ? y : n.status === "dirty" ? (t.dirty(), {
        status: "dirty",
        value: n.value
      }) : this._def.out._parseSync({
        data: n.value,
        path: s.path,
        parent: s
      });
    }
  }
  static create(e, t) {
    return new ve({
      in: e,
      out: t,
      typeName: g.ZodPipeline
    });
  }
}
class ge extends _ {
  _parse(e) {
    const t = this._def.innerType._parse(e), s = (n) => (W(n) && (n.value = Object.freeze(n.value)), n);
    return se(t) ? t.then((n) => s(n)) : s(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
ge.create = (r, e) => new ge({
  innerType: r,
  typeName: g.ZodReadonly,
  ...v(e)
});
var g;
(function(r) {
  r.ZodString = "ZodString", r.ZodNumber = "ZodNumber", r.ZodNaN = "ZodNaN", r.ZodBigInt = "ZodBigInt", r.ZodBoolean = "ZodBoolean", r.ZodDate = "ZodDate", r.ZodSymbol = "ZodSymbol", r.ZodUndefined = "ZodUndefined", r.ZodNull = "ZodNull", r.ZodAny = "ZodAny", r.ZodUnknown = "ZodUnknown", r.ZodNever = "ZodNever", r.ZodVoid = "ZodVoid", r.ZodArray = "ZodArray", r.ZodObject = "ZodObject", r.ZodUnion = "ZodUnion", r.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", r.ZodIntersection = "ZodIntersection", r.ZodTuple = "ZodTuple", r.ZodRecord = "ZodRecord", r.ZodMap = "ZodMap", r.ZodSet = "ZodSet", r.ZodFunction = "ZodFunction", r.ZodLazy = "ZodLazy", r.ZodLiteral = "ZodLiteral", r.ZodEnum = "ZodEnum", r.ZodEffects = "ZodEffects", r.ZodNativeEnum = "ZodNativeEnum", r.ZodOptional = "ZodOptional", r.ZodNullable = "ZodNullable", r.ZodDefault = "ZodDefault", r.ZodCatch = "ZodCatch", r.ZodPromise = "ZodPromise", r.ZodBranded = "ZodBranded", r.ZodPipeline = "ZodPipeline", r.ZodReadonly = "ZodReadonly";
})(g || (g = {}));
const I = z.create;
D.create;
j.create;
const ir = N.create;
ae.create;
ie.create;
U.create;
J.create;
oe.create;
M.create;
H.create;
const Nr = {
  email: I().min(1, "Email is required").email("Invalid email address"),
  password: I().min(8, "Password must be at least 8 characters").regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, "Password must contain uppercase, lowercase, and number"),
  phone: I().min(1, "Phone number is required").regex(/^[\+]?[1-9][\d]{0,15}$/, "Invalid phone number format"),
  url: I().min(1, "URL is required").url("Invalid URL format"),
  username: I().min(3, "Username must be at least 3 characters").max(20, "Username must be less than 20 characters").regex(/^[a-zA-Z0-9_]+$/, "Username can only contain letters, numbers, and underscores"),
  requiredString: (r = "This field is required") => I().min(1, r),
  optionalString: I().optional(),
  // Password confirmation schema builder
  passwordConfirmation: () => ir({
    password: I().min(8, "Password must be at least 8 characters"),
    confirmPassword: I().min(1, "Please confirm your password")
  }).refine((r) => r.password === r.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"]
  })
}, or = qe(
  "space-y-2",
  {
    variants: {
      variant: {
        default: "",
        inline: "flex items-center space-y-0 space-x-2",
        stacked: "space-y-1"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
), dr = qe(
  "text-sm font-medium flex items-center gap-1",
  {
    variants: {
      variant: {
        destructive: "text-destructive",
        warning: "text-orange-600",
        success: "text-green-600"
      }
    },
    defaultVariants: {
      variant: "destructive"
    }
  }
), Cr = ({
  schema: r,
  defaultValues: e,
  onSubmit: t,
  onError: s,
  loading: n = !1,
  mode: a = "onChange",
  reValidateMode: i = "onChange",
  autoSave: o,
  layout: d = "vertical",
  size: c = "md",
  className: f,
  children: b
}) => {
  const C = at({
    resolver: Rt(r),
    // Type assertion to fix resolver compatibility
    defaultValues: e,
    mode: a,
    reValidateMode: i
  });
  rt.useEffect(() => {
    if (!(o != null && o.enabled)) return;
    const O = C.watch((R) => {
      const _e = setTimeout(() => {
        var te;
        (te = o.onSave) == null || te.call(o, R);
      }, o.debounceMs || 1e3);
      return () => clearTimeout(_e);
    });
    return () => O.unsubscribe();
  }, [C, o]);
  const P = (O) => {
    t(O);
  }, k = (O) => {
    s == null || s(O);
  };
  return /* @__PURE__ */ p(it, { ...C, children: /* @__PURE__ */ p(
    "form",
    {
      onSubmit: C.handleSubmit(P, k),
      className: A(
        "space-y-6",
        d === "horizontal" && "space-y-4",
        d === "inline" && "space-y-2",
        f
      ),
      noValidate: !0,
      children: /* @__PURE__ */ p(tt.Provider, { value: { layout: d, size: c, loading: n }, children: b })
    }
  ) });
}, tt = st({
  layout: "vertical",
  size: "md",
  loading: !1
}), E = () => {
  const r = nt(tt);
  if (!r)
    throw new Error("Form field components must be used within EnhancedForm");
  return r;
}, Or = ({
  name: r,
  label: e,
  description: t,
  required: s = !1,
  variant: n = "default",
  className: a,
  children: i
}) => {
  const { formState: o } = Z(), { layout: d } = E(), c = o.errors[r];
  return /* @__PURE__ */ w("div", { className: A(or({ variant: n }), a), children: [
    e && /* @__PURE__ */ p(
      de,
      {
        htmlFor: r,
        className: A(
          "text-foreground",
          d === "horizontal" && "min-w-24",
          s && "after:content-['*'] after:ml-0.5 after:text-destructive"
        ),
        children: e
      }
    ),
    /* @__PURE__ */ w("div", { className: A(d === "horizontal" && "flex-1"), children: [
      i,
      c && /* @__PURE__ */ w("div", { className: dr({ variant: "destructive" }), children: [
        /* @__PURE__ */ p(gt, { className: "h-4 w-4" }),
        c.message
      ] }),
      t && !c && /* @__PURE__ */ p("p", { className: "text-sm text-muted-foreground", children: t })
    ] })
  ] });
}, Tr = ({
  name: r,
  type: e = "text",
  placeholder: t,
  disabled: s = !1,
  readOnly: n = !1,
  showPasswordToggle: a = !1,
  prefixIcon: i,
  suffixIcon: o,
  inputProps: d
}) => {
  const { control: c } = Z(), { loading: f } = E(), [b, C] = Ue(!1), P = e === "password" && b ? "text" : e;
  return /* @__PURE__ */ p(
    F,
    {
      name: r,
      control: c,
      render: ({ field: k, fieldState: O }) => /* @__PURE__ */ w("div", { className: "relative", children: [
        i && /* @__PURE__ */ p(i, { className: "absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" }),
        /* @__PURE__ */ p(
          ot,
          {
            ...k,
            ...d,
            type: P,
            placeholder: t,
            disabled: s || f,
            readOnly: n,
            className: A(
              "bg-background border-border text-foreground",
              i && "pl-9",
              (o || e === "password" && a) && "pr-9",
              O.error && "border-destructive focus:border-destructive"
            )
          }
        ),
        e === "password" && a && /* @__PURE__ */ p(
          q,
          {
            type: "button",
            variant: "ghost",
            size: "sm",
            className: "absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent",
            onClick: () => C(!b),
            children: b ? /* @__PURE__ */ p(vt, { className: "h-4 w-4" }) : /* @__PURE__ */ p(_t, { className: "h-4 w-4" })
          }
        ),
        o && !a && /* @__PURE__ */ p(o, { className: "absolute right-3 top-2.5 h-4 w-4 text-muted-foreground" })
      ] })
    }
  );
}, Sr = ({
  name: r,
  placeholder: e,
  rows: t = 3,
  disabled: s = !1,
  readOnly: n = !1,
  showCharCount: a = !1,
  maxLength: i,
  textareaProps: o
}) => {
  const { control: d } = Z(), { loading: c } = E();
  return /* @__PURE__ */ p(
    F,
    {
      name: r,
      control: d,
      render: ({ field: f, fieldState: b }) => {
        var C;
        return /* @__PURE__ */ w("div", { className: "space-y-1", children: [
          /* @__PURE__ */ p(
            dt,
            {
              ...f,
              ...o,
              placeholder: e,
              rows: t,
              disabled: s || c,
              readOnly: n,
              maxLength: i,
              className: A(
                "bg-background border-border text-foreground",
                b.error && "border-destructive focus:border-destructive"
              )
            }
          ),
          a && /* @__PURE__ */ w("div", { className: "text-xs text-muted-foreground text-right", children: [
            ((C = f.value) == null ? void 0 : C.length) || 0,
            i && ` / ${i}`
          ] })
        ] });
      }
    }
  );
}, Ar = ({
  name: r,
  placeholder: e = "Select an option...",
  options: t,
  disabled: s = !1,
  clearable: n = !1
}) => {
  const { control: a } = Z(), { loading: i } = E();
  return /* @__PURE__ */ p(
    F,
    {
      name: r,
      control: a,
      render: ({ field: o, fieldState: d }) => {
        var c;
        return /* @__PURE__ */ w(
          ht,
          {
            value: (c = o.value) == null ? void 0 : c.toString(),
            onValueChange: o.onChange,
            disabled: s || i,
            children: [
              /* @__PURE__ */ p(
                mt,
                {
                  className: A(
                    "bg-background border-border text-foreground",
                    d.error && "border-destructive focus:border-destructive"
                  ),
                  children: /* @__PURE__ */ p(pt, { placeholder: e })
                }
              ),
              /* @__PURE__ */ w(yt, { className: "bg-popover border-border", children: [
                n && o.value && /* @__PURE__ */ p(be, { value: "", className: "text-muted-foreground", children: "Clear selection" }),
                t.map((f) => /* @__PURE__ */ p(
                  be,
                  {
                    value: f.value.toString(),
                    disabled: f.disabled,
                    className: "text-foreground",
                    children: f.label
                  },
                  f.value
                ))
              ] })
            ]
          }
        );
      }
    }
  );
}, jr = ({
  name: r,
  label: e,
  description: t,
  disabled: s = !1
}) => {
  const { control: n } = Z(), { loading: a } = E();
  return /* @__PURE__ */ p(
    F,
    {
      name: r,
      control: n,
      render: ({ field: i }) => /* @__PURE__ */ w("div", { className: "flex items-start space-x-2", children: [
        /* @__PURE__ */ p(
          ct,
          {
            checked: i.value,
            onCheckedChange: i.onChange,
            disabled: s || a,
            className: "mt-0.5"
          }
        ),
        /* @__PURE__ */ w("div", { className: "space-y-1", children: [
          /* @__PURE__ */ p(de, { className: "text-sm font-medium leading-none text-foreground", children: e }),
          t && /* @__PURE__ */ p("p", { className: "text-xs text-muted-foreground", children: t })
        ] })
      ] })
    }
  );
}, Zr = ({
  name: r,
  options: e,
  orientation: t = "vertical",
  disabled: s = !1
}) => {
  const { control: n } = Z(), { loading: a } = E();
  return /* @__PURE__ */ p(
    F,
    {
      name: r,
      control: n,
      render: ({ field: i }) => /* @__PURE__ */ p(
        lt,
        {
          value: i.value,
          onValueChange: i.onChange,
          disabled: s || a,
          className: A(
            "space-y-2",
            t === "horizontal" && "flex space-y-0 space-x-4"
          ),
          children: e.map((o) => /* @__PURE__ */ w("div", { className: "flex items-center space-x-2", children: [
            /* @__PURE__ */ p(
              ut,
              {
                value: o.value,
                disabled: o.disabled || s || a
              }
            ),
            /* @__PURE__ */ w("div", { className: "space-y-1", children: [
              /* @__PURE__ */ p(de, { className: "text-sm font-medium text-foreground", children: o.label }),
              o.description && /* @__PURE__ */ p("p", { className: "text-xs text-muted-foreground", children: o.description })
            ] })
          ] }, o.value))
        }
      )
    }
  );
}, Er = ({
  name: r,
  label: e,
  description: t,
  disabled: s = !1
}) => {
  const { control: n } = Z(), { loading: a } = E();
  return /* @__PURE__ */ p(
    F,
    {
      name: r,
      control: n,
      render: ({ field: i }) => /* @__PURE__ */ w("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ w("div", { className: "space-y-1", children: [
          /* @__PURE__ */ p(de, { className: "text-sm font-medium text-foreground", children: e }),
          t && /* @__PURE__ */ p("p", { className: "text-xs text-muted-foreground", children: t })
        ] }),
        /* @__PURE__ */ p(
          ft,
          {
            checked: i.value,
            onCheckedChange: i.onChange,
            disabled: s || a
          }
        )
      ] })
    }
  );
}, Rr = ({
  name: r,
  accept: e,
  multiple: t = !1,
  maxSize: s = 5,
  uploadText: n = "Click to upload or drag and drop",
  disabled: a = !1
}) => {
  const { control: i } = Z(), { loading: o } = E(), [d, c] = Ue(!1);
  return /* @__PURE__ */ p(
    F,
    {
      name: r,
      control: i,
      render: ({ field: { value: f, onChange: b, ...C }, fieldState: P }) => /* @__PURE__ */ w("div", { className: "space-y-2", children: [
        /* @__PURE__ */ w(
          "div",
          {
            className: A(
              "border-2 border-dashed rounded-lg p-6 text-center transition-colors border-border",
              d && "border-primary bg-primary/5",
              P.error && "border-destructive",
              a || o ? "opacity-50 cursor-not-allowed" : "cursor-pointer hover:border-primary hover:bg-primary/5"
            ),
            onDragOver: (k) => {
              k.preventDefault(), c(!0);
            },
            onDragLeave: () => c(!1),
            onDrop: (k) => {
              if (k.preventDefault(), c(!1), a || o) return;
              const O = k.dataTransfer.files;
              O.length > 0 && b(t ? O : O[0]);
            },
            onClick: () => {
              if (a || o) return;
              const k = document.createElement("input");
              k.type = "file", k.accept = e || "", k.multiple = t, k.onchange = (O) => {
                const R = O.target.files;
                R && R.length > 0 && b(t ? R : R[0]);
              }, k.click();
            },
            children: [
              /* @__PURE__ */ p(bt, { className: "h-8 w-8 mx-auto mb-2 text-muted-foreground" }),
              /* @__PURE__ */ p("p", { className: "text-sm text-muted-foreground", children: n }),
              /* @__PURE__ */ w("p", { className: "text-xs text-muted-foreground mt-1", children: [
                e && `Accepted formats: ${e}`,
                s && ` • Max size: ${s}MB`
              ] })
            ]
          }
        ),
        f && /* @__PURE__ */ p("div", { className: "space-y-1", children: t && Array.isArray(f) ? f.map((k, O) => /* @__PURE__ */ w("div", { className: "flex items-center justify-between text-sm", children: [
          /* @__PURE__ */ p("span", { className: "text-foreground", children: (k == null ? void 0 : k.name) || "Unknown file" }),
          /* @__PURE__ */ p(
            q,
            {
              type: "button",
              variant: "ghost",
              size: "sm",
              onClick: () => {
                const R = f.filter((_e, te) => te !== O);
                b(R.length > 0 ? R : null);
              },
              children: /* @__PURE__ */ p(ke, { className: "h-4 w-4" })
            }
          )
        ] }, O)) : f && typeof f == "object" && "name" in f ? /* @__PURE__ */ w("div", { className: "flex items-center justify-between text-sm", children: [
          /* @__PURE__ */ p("span", { className: "text-foreground", children: f.name }),
          /* @__PURE__ */ p(
            q,
            {
              type: "button",
              variant: "ghost",
              size: "sm",
              onClick: () => b(null),
              children: /* @__PURE__ */ p(ke, { className: "h-4 w-4" })
            }
          )
        ] }) : null })
      ] })
    }
  );
}, Ir = ({
  name: r,
  renderItem: e,
  addButtonText: t = "Add Item",
  minItems: s = 0,
  maxItems: n
}) => {
  const { control: a, getValues: i, setValue: o } = Z(), { loading: d } = E(), c = xe(() => {
    const b = i(r) || [];
    n && b.length >= n || o(r, [...b, {}]);
  }, [r, i, o, n]), f = xe((b) => {
    const C = i(r) || [];
    if (C.length <= s) return;
    const P = C.filter((k, O) => O !== b);
    o(r, P);
  }, [r, i, o, s]);
  return /* @__PURE__ */ p(
    F,
    {
      name: r,
      control: a,
      render: ({ field: b }) => {
        var C;
        return /* @__PURE__ */ w("div", { className: "space-y-4", children: [
          (b.value || []).map((P, k) => /* @__PURE__ */ p("div", { className: "border border-border rounded-lg p-4 bg-card", children: e(k, () => f(k)) }, k)),
          /* @__PURE__ */ w(
            q,
            {
              type: "button",
              variant: "outline",
              onClick: c,
              disabled: d || !!(n && (((C = b.value) == null ? void 0 : C.length) || 0) >= n),
              className: "w-full border-border",
              children: [
                /* @__PURE__ */ p(xt, { className: "h-4 w-4 mr-2" }),
                t
              ]
            }
          )
        ] });
      }
    }
  );
}, $r = ({
  submitText: r = "Submit",
  cancelText: e = "Cancel",
  showCancel: t = !1,
  onCancel: s,
  actions: n,
  align: a = "right"
}) => {
  const { formState: i } = Z(), { loading: o } = E();
  return /* @__PURE__ */ w("div", { className: A(
    "flex gap-2",
    a === "left" && "justify-start",
    a === "center" && "justify-center",
    a === "right" && "justify-end"
  ), children: [
    n,
    t && /* @__PURE__ */ p(
      q,
      {
        type: "button",
        variant: "outline",
        onClick: s,
        disabled: o,
        className: "border-border",
        children: e
      }
    ),
    /* @__PURE__ */ p(
      q,
      {
        type: "submit",
        disabled: o || !i.isValid,
        className: "min-w-24 bg-primary text-primary-foreground",
        children: o ? /* @__PURE__ */ w("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ p("div", { className: "h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" }),
          "Loading..."
        ] }) : r
      }
    )
  ] });
};
export {
  Ir as ArrayField,
  jr as CheckboxField,
  Cr as EnhancedForm,
  Rr as FileUploadField,
  $r as FormActions,
  Or as FormField,
  Nr as FormSchemas,
  Tr as InputField,
  Zr as RadioGroupField,
  Ar as SelectField,
  Er as SwitchField,
  Sr as TextareaField
};
//# sourceMappingURL=form-enhanced.js.map
