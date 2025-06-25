import * as s from "react";
import { u as w } from "./index-DuekHEmj.js";
function $(t, e, { checkForDefaultPrevented: o = !0 } = {}) {
  return function(c) {
    if (t == null || t(c), o === !1 || !c.defaultPrevented)
      return e == null ? void 0 : e(c);
  };
}
var R = s[" useInsertionEffect ".trim().toString()] || w;
function h({
  prop: t,
  defaultProp: e,
  onChange: o = () => {
  },
  caller: l
}) {
  const [c, n, u] = S({
    defaultProp: e,
    onChange: o
  }), r = t !== void 0, m = r ? t : c;
  {
    const f = s.useRef(t !== void 0);
    s.useEffect(() => {
      const i = f.current;
      i !== r && console.warn(
        `${l} is changing from ${i ? "controlled" : "uncontrolled"} to ${r ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), f.current = r;
    }, [r, l]);
  }
  const a = s.useCallback(
    (f) => {
      var i;
      if (r) {
        const d = b(f) ? f(t) : f;
        d !== t && ((i = u.current) == null || i.call(u, d));
      } else
        n(f);
    },
    [r, t, n, u]
  );
  return [m, a];
}
function S({
  defaultProp: t,
  onChange: e
}) {
  const [o, l] = s.useState(t), c = s.useRef(o), n = s.useRef(e);
  return R(() => {
    n.current = e;
  }, [e]), s.useEffect(() => {
    var u;
    c.current !== o && ((u = n.current) == null || u.call(n, o), c.current = o);
  }, [o, c]), [o, l, n];
}
function b(t) {
  return typeof t == "function";
}
export {
  $ as c,
  h as u
};
//# sourceMappingURL=index-CPxmoWFw.js.map
