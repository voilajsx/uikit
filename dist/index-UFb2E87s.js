import * as u from "react";
import { jsx as h } from "react/jsx-runtime";
function w(e, c) {
  const o = u.createContext(c), a = (r) => {
    const { children: t, ...n } = r, s = u.useMemo(() => n, Object.values(n));
    return /* @__PURE__ */ h(o.Provider, { value: s, children: t });
  };
  a.displayName = e + "Provider";
  function i(r) {
    const t = u.useContext(o);
    if (t) return t;
    if (c !== void 0) return c;
    throw new Error(`\`${r}\` must be used within \`${e}\``);
  }
  return [a, i];
}
function _(e, c = []) {
  let o = [];
  function a(r, t) {
    const n = u.createContext(t), s = o.length;
    o = [...o, t];
    const p = (d) => {
      var S;
      const { scope: x, children: f, ...m } = d, v = ((S = x == null ? void 0 : x[e]) == null ? void 0 : S[s]) || n, P = u.useMemo(() => m, Object.values(m));
      return /* @__PURE__ */ h(v.Provider, { value: P, children: f });
    };
    p.displayName = r + "Provider";
    function C(d, x) {
      var v;
      const f = ((v = x == null ? void 0 : x[e]) == null ? void 0 : v[s]) || n, m = u.useContext(f);
      if (m) return m;
      if (t !== void 0) return t;
      throw new Error(`\`${d}\` must be used within \`${r}\``);
    }
    return [p, C];
  }
  const i = () => {
    const r = o.map((t) => u.createContext(t));
    return function(n) {
      const s = (n == null ? void 0 : n[e]) || r;
      return u.useMemo(
        () => ({ [`__scope${e}`]: { ...n, [e]: s } }),
        [n, s]
      );
    };
  };
  return i.scopeName = e, [a, l(i, ...c)];
}
function l(...e) {
  const c = e[0];
  if (e.length === 1) return c;
  const o = () => {
    const a = e.map((i) => ({
      useScope: i(),
      scopeName: i.scopeName
    }));
    return function(r) {
      const t = a.reduce((n, { useScope: s, scopeName: p }) => {
        const d = s(r)[`__scope${p}`];
        return { ...n, ...d };
      }, {});
      return u.useMemo(() => ({ [`__scope${c.scopeName}`]: t }), [t]);
    };
  };
  return o.scopeName = c.scopeName, o;
}
export {
  w as a,
  _ as c
};
//# sourceMappingURL=index-UFb2E87s.js.map
