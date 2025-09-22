import { u as m, a as p } from "./useApi-VV-b16My.js";
import { useState as f, useCallback as a, useEffect as u } from "react";
function g(r, t) {
  const [s, n] = f(() => {
    if (typeof window > "u")
      return t;
    try {
      const e = window.localStorage.getItem(r);
      return e ? JSON.parse(e) : t;
    } catch (e) {
      return console.warn(`Error reading localStorage key "${r}":`, e), t;
    }
  }), c = a(
    (e) => {
      try {
        const o = e instanceof Function ? e(s) : e;
        n(o), typeof window < "u" && window.localStorage.setItem(r, JSON.stringify(o));
      } catch (o) {
        console.error(`Error setting localStorage key "${r}":`, o);
      }
    },
    [r, s]
  ), d = a(() => {
    try {
      n(t), typeof window < "u" && window.localStorage.removeItem(r);
    } catch (e) {
      console.error(`Error removing localStorage key "${r}":`, e);
    }
  }, [r, t]);
  return u(() => {
    if (typeof window > "u") return;
    const e = (o) => {
      if (o.key === r && o.newValue !== null)
        try {
          n(JSON.parse(o.newValue));
        } catch (w) {
          console.warn(`Error parsing storage event for key "${r}":`, w);
        }
      else o.key === r && o.newValue === null && n(t);
    };
    return window.addEventListener("storage", e), () => window.removeEventListener("storage", e);
  }, [r, t]), [s, c, d];
}
export {
  m as useApi,
  p as useBackendStatus,
  g as useLocalStorage
};
//# sourceMappingURL=hooks.js.map
