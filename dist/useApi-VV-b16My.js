import { useState as h, useCallback as r } from "react";
const U = {};
function A(o = {}) {
  const [d, l] = h(null), [u, a] = h(!1), [g, f] = h(null), m = o.baseURL || U?.VITE_API_URL || (typeof window < "u" && window.location.hostname === "localhost" ? "http://localhost:3000" : ""), k = {
    "Content-Type": "application/json",
    ...o.headers
  }, t = r(async (e, c, p) => {
    a(!0), f(null);
    try {
      const n = new AbortController(), s = setTimeout(() => n.abort(), o.timeout || 1e4), w = {
        method: e.toUpperCase(),
        headers: k,
        signal: n.signal
      };
      p && ["POST", "PUT", "PATCH"].includes(e.toUpperCase()) && (w.body = JSON.stringify(p));
      const P = `${m}${c}`, i = await fetch(P, w);
      if (clearTimeout(s), !i.ok)
        throw new Error(`HTTP ${i.status}: ${i.statusText}`);
      const T = await i.json();
      return l(T), T;
    } catch (n) {
      let s = "Network error occurred";
      throw n.name === "AbortError" ? s = "Request timeout" : n.message?.includes("fetch") ? s = "Backend not available - check if your API server is running" : s = n.message || "Unknown error occurred", f(s), new Error(s);
    } finally {
      a(!1);
    }
  }, [m, o.timeout]), y = r((e) => t("GET", e), [t]), E = r((e, c) => t("POST", e, c), [t]), _ = r((e, c) => t("PUT", e, c), [t]), b = r((e) => t("DELETE", e), [t]), C = r(() => {
    l(null), f(null), a(!1);
  }, []);
  return {
    data: d,
    loading: u,
    error: g,
    call: t,
    get: y,
    post: E,
    put: _,
    delete: b,
    reset: C
  };
}
function L() {
  const { data: o, loading: d, error: l, get: u } = A(), a = r(async () => {
    try {
      return await u("/health"), !0;
    } catch {
      return !1;
    }
  }, [u]);
  return {
    isConnected: o?.status === "ok",
    loading: d,
    error: l,
    checkStatus: a,
    lastCheck: o?.timestamp
  };
}
export {
  L as a,
  A as u
};
//# sourceMappingURL=useApi-VV-b16My.js.map
