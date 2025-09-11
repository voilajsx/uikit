import * as u from "react";
import { jsx as C } from "react/jsx-runtime";
function $(t, c) {
  const n = u.createContext(c), p = (r) => {
    const { children: e, ...o } = r, s = u.useMemo(() => o, Object.values(o));
    return /* @__PURE__ */ C(n.Provider, { value: s, children: e });
  };
  p.displayName = t + "Provider";
  function i(r) {
    const e = u.useContext(n);
    if (e) return e;
    if (c !== void 0) return c;
    throw new Error(`\`${r}\` must be used within \`${t}\``);
  }
  return [p, i];
}
function w(t, c = []) {
  let n = [];
  function p(r, e) {
    const o = u.createContext(e), s = n.length;
    n = [...n, e];
    const d = (x) => {
      const { scope: m, children: v, ...a } = x, S = m?.[t]?.[s] || o, h = u.useMemo(() => a, Object.values(a));
      return /* @__PURE__ */ C(S.Provider, { value: h, children: v });
    };
    d.displayName = r + "Provider";
    function f(x, m) {
      const v = m?.[t]?.[s] || o, a = u.useContext(v);
      if (a) return a;
      if (e !== void 0) return e;
      throw new Error(`\`${x}\` must be used within \`${r}\``);
    }
    return [d, f];
  }
  const i = () => {
    const r = n.map((e) => u.createContext(e));
    return function(o) {
      const s = o?.[t] || r;
      return u.useMemo(
        () => ({ [`__scope${t}`]: { ...o, [t]: s } }),
        [o, s]
      );
    };
  };
  return i.scopeName = t, [p, P(i, ...c)];
}
function P(...t) {
  const c = t[0];
  if (t.length === 1) return c;
  const n = () => {
    const p = t.map((i) => ({
      useScope: i(),
      scopeName: i.scopeName
    }));
    return function(r) {
      const e = p.reduce((o, { useScope: s, scopeName: d }) => {
        const x = s(r)[`__scope${d}`];
        return { ...o, ...x };
      }, {});
      return u.useMemo(() => ({ [`__scope${c.scopeName}`]: e }), [e]);
    };
  };
  return n.scopeName = c.scopeName, n;
}
export {
  $ as a,
  w as c
};
//# sourceMappingURL=index-DFZozV_h.js.map
