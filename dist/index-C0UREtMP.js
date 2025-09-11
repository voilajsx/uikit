import * as n from "react";
import { u as m } from "./index-CCKe-Mpx.js";
function w(e, r, { checkForDefaultPrevented: t = !0 } = {}) {
  return function(o) {
    if (e?.(o), t === !1 || !o.defaultPrevented)
      return r?.(o);
  };
}
var v = n[" useInsertionEffect ".trim().toString()] || m;
function S({
  prop: e,
  defaultProp: r,
  onChange: t = () => {
  },
  caller: l
}) {
  const [o, u, i] = R({
    defaultProp: r,
    onChange: t
  }), c = e !== void 0, a = c ? e : o;
  {
    const s = n.useRef(e !== void 0);
    n.useEffect(() => {
      const f = s.current;
      f !== c && console.warn(
        `${l} is changing from ${f ? "controlled" : "uncontrolled"} to ${c ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), s.current = c;
    }, [c, l]);
  }
  const d = n.useCallback(
    (s) => {
      if (c) {
        const f = E(s) ? s(e) : s;
        f !== e && i.current?.(f);
      } else
        u(s);
    },
    [c, e, u, i]
  );
  return [a, d];
}
function R({
  defaultProp: e,
  onChange: r
}) {
  const [t, l] = n.useState(e), o = n.useRef(t), u = n.useRef(r);
  return v(() => {
    u.current = r;
  }, [r]), n.useEffect(() => {
    o.current !== t && (u.current?.(t), o.current = t);
  }, [t, o]), [t, l, u];
}
function E(e) {
  return typeof e == "function";
}
export {
  w as c,
  S as u
};
//# sourceMappingURL=index-C0UREtMP.js.map
