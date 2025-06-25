import { jsx as g } from "react/jsx-runtime";
import * as _ from "react";
import N from "react";
import { c as H } from "./index-UFb2E87s.js";
import { u as U } from "./index-DwYXX2sM.js";
import { u as O } from "./index-DuekHEmj.js";
import { P as w } from "./index-IjmGKHPz.js";
import { c as x } from "./utils-qaFjX9_3.js";
var h = { exports: {} }, y = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var I;
function q() {
  if (I) return y;
  I = 1;
  var e = N;
  function t(a, d) {
    return a === d && (a !== 0 || 1 / a === 1 / d) || a !== a && d !== d;
  }
  var i = typeof Object.is == "function" ? Object.is : t, c = e.useState, o = e.useEffect, r = e.useLayoutEffect, S = e.useDebugValue;
  function f(a, d) {
    var n = d(), u = c({ inst: { value: n, getSnapshot: d } }), s = u[0].inst, p = u[1];
    return r(
      function() {
        s.value = n, s.getSnapshot = d, l(s) && p({ inst: s });
      },
      [a, n, d]
    ), o(
      function() {
        return l(s) && p({ inst: s }), a(function() {
          l(s) && p({ inst: s });
        });
      },
      [a]
    ), S(n), n;
  }
  function l(a) {
    var d = a.getSnapshot;
    a = a.value;
    try {
      var n = d();
      return !i(a, n);
    } catch {
      return !0;
    }
  }
  function v(a, d) {
    return d();
  }
  var E = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? v : f;
  return y.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : E, y;
}
var A = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var C;
function B() {
  return C || (C = 1, process.env.NODE_ENV !== "production" && function() {
    function e(n, u) {
      return n === u && (n !== 0 || 1 / n === 1 / u) || n !== n && u !== u;
    }
    function t(n, u) {
      E || o.startTransition === void 0 || (E = !0, console.error(
        "You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."
      ));
      var s = u();
      if (!a) {
        var p = u();
        r(s, p) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), a = !0);
      }
      p = S({
        inst: { value: s, getSnapshot: u }
      });
      var m = p[0].inst, L = p[1];
      return l(
        function() {
          m.value = s, m.getSnapshot = u, i(m) && L({ inst: m });
        },
        [n, s, u]
      ), f(
        function() {
          return i(m) && L({ inst: m }), n(function() {
            i(m) && L({ inst: m });
          });
        },
        [n]
      ), v(s), s;
    }
    function i(n) {
      var u = n.getSnapshot;
      n = n.value;
      try {
        var s = u();
        return !r(n, s);
      } catch {
        return !0;
      }
    }
    function c(n, u) {
      return u();
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var o = N, r = typeof Object.is == "function" ? Object.is : e, S = o.useState, f = o.useEffect, l = o.useLayoutEffect, v = o.useDebugValue, E = !1, a = !1, d = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? c : t;
    A.useSyncExternalStore = o.useSyncExternalStore !== void 0 ? o.useSyncExternalStore : d, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), A;
}
var T;
function K() {
  return T || (T = 1, process.env.NODE_ENV === "production" ? h.exports = q() : h.exports = B()), h.exports;
}
var $ = K();
function F() {
  return $.useSyncExternalStore(
    P,
    () => !0,
    () => !1
  );
}
function P() {
  return () => {
  };
}
var R = "Avatar", [z, ue] = H(R), [W, D] = z(R), k = _.forwardRef(
  (e, t) => {
    const { __scopeAvatar: i, ...c } = e, [o, r] = _.useState("idle");
    return /* @__PURE__ */ g(
      W,
      {
        scope: i,
        imageLoadingStatus: o,
        onImageLoadingStatusChange: r,
        children: /* @__PURE__ */ g(w.span, { ...c, ref: t })
      }
    );
  }
);
k.displayName = R;
var G = "AvatarImage", V = _.forwardRef(
  (e, t) => {
    const { __scopeAvatar: i, src: c, onLoadingStatusChange: o = () => {
    }, ...r } = e, S = D(G, i), f = Y(c, r), l = U((v) => {
      o(v), S.onImageLoadingStatusChange(v);
    });
    return O(() => {
      f !== "idle" && l(f);
    }, [f, l]), f === "loaded" ? /* @__PURE__ */ g(w.img, { ...r, ref: t, src: c }) : null;
  }
);
V.displayName = G;
var M = "AvatarFallback", j = _.forwardRef(
  (e, t) => {
    const { __scopeAvatar: i, delayMs: c, ...o } = e, r = D(M, i), [S, f] = _.useState(c === void 0);
    return _.useEffect(() => {
      if (c !== void 0) {
        const l = window.setTimeout(() => f(!0), c);
        return () => window.clearTimeout(l);
      }
    }, [c]), S && r.imageLoadingStatus !== "loaded" ? /* @__PURE__ */ g(w.span, { ...o, ref: t }) : null;
  }
);
j.displayName = M;
function b(e, t) {
  return e ? t ? (e.src !== t && (e.src = t), e.complete && e.naturalWidth > 0 ? "loaded" : "loading") : "error" : "idle";
}
function Y(e, { referrerPolicy: t, crossOrigin: i }) {
  const c = F(), o = _.useRef(null), r = c ? (o.current || (o.current = new window.Image()), o.current) : null, [S, f] = _.useState(
    () => b(r, e)
  );
  return O(() => {
    f(b(r, e));
  }, [r, e]), O(() => {
    const l = (a) => () => {
      f(a);
    };
    if (!r) return;
    const v = l("loaded"), E = l("error");
    return r.addEventListener("load", v), r.addEventListener("error", E), t && (r.referrerPolicy = t), typeof i == "string" && (r.crossOrigin = i), () => {
      r.removeEventListener("load", v), r.removeEventListener("error", E);
    };
  }, [r, i, t]), S;
}
var J = k, Q = V, X = j;
function se({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ g(
    J,
    {
      "data-slot": "avatar",
      className: x(
        "relative flex size-8 shrink-0 overflow-hidden rounded-full",
        e
      ),
      ...t
    }
  );
}
function ie({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ g(
    Q,
    {
      "data-slot": "avatar-image",
      className: x("aspect-square size-full", e),
      ...t
    }
  );
}
function ce({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ g(
    X,
    {
      "data-slot": "avatar-fallback",
      className: x(
        "bg-muted flex size-full items-center justify-center rounded-full",
        e
      ),
      ...t
    }
  );
}
export {
  se as Avatar,
  ce as AvatarFallback,
  ie as AvatarImage
};
//# sourceMappingURL=avatar.js.map
