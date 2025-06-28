import { jsx as R, jsxs as se } from "react/jsx-runtime";
import * as U from "react";
import { forwardRef as X, useState as g, useRef as Y, useCallback as re, useEffect as w } from "react";
import { c as ce } from "./index-DACAHwoB.js";
import { c as z } from "./utils-qaFjX9_3.js";
const oe = {
  // Fade animations
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
  },
  fadeInUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 }
  },
  fadeInDown: {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  },
  fadeInLeft: {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 }
  },
  fadeInRight: {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 20 }
  },
  fadeOut: {
    initial: { opacity: 1 },
    animate: { opacity: 0 },
    exit: { opacity: 0 }
  },
  // Scale animations
  scaleIn: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 }
  },
  scaleInCenter: {
    initial: { opacity: 0, scale: 0.9, transformOrigin: "center" },
    animate: { opacity: 1, scale: 1, transformOrigin: "center" },
    exit: { opacity: 0, scale: 0.9, transformOrigin: "center" }
  },
  // Slide animations
  slideInUp: {
    initial: { y: "100%" },
    animate: { y: 0 },
    exit: { y: "100%" }
  },
  slideInDown: {
    initial: { y: "-100%" },
    animate: { y: 0 },
    exit: { y: "-100%" }
  },
  slideInLeft: {
    initial: { x: "-100%" },
    animate: { x: 0 },
    exit: { x: "-100%" }
  },
  slideInRight: {
    initial: { x: "100%" },
    animate: { x: 0 },
    exit: { x: "100%" }
  },
  // Special effects
  bounce: {
    initial: { opacity: 0, scale: 0.3 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 300
      }
    },
    exit: { opacity: 0, scale: 0.3 }
  },
  elastic: {
    initial: { opacity: 0, scale: 0 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        damping: 8,
        stiffness: 200
      }
    },
    exit: { opacity: 0, scale: 0 }
  },
  rubberBand: {
    initial: { scale: 1 },
    animate: {
      scale: [1, 1.25, 0.75, 1.15, 0.95, 1],
      transition: { duration: 1 }
    }
  },
  pulse: {
    initial: { scale: 1 },
    animate: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: 1 / 0,
        repeatType: "loop"
      }
    }
  },
  wobble: {
    initial: { rotate: 0 },
    animate: {
      rotate: [0, -5, 5, -5, 0],
      transition: {
        duration: 0.5,
        repeat: 1 / 0,
        repeatType: "loop"
      }
    }
  },
  shake: {
    initial: { x: 0 },
    animate: {
      x: [0, -10, 10, -10, 10, 0],
      transition: { duration: 0.5 }
    }
  }
}, le = {
  easeInOut: [0.4, 0, 0.2, 1],
  easeOut: [0, 0, 0.2, 1],
  easeIn: [0.4, 0, 1, 1],
  easeOutBack: [0.34, 1.56, 0.64, 1],
  easeInBack: [0.36, 0, 0.66, -0.56],
  easeOutBounce: [0.68, -0.55, 0.265, 1.55],
  linear: [0, 0, 1, 1]
}, H = {
  fast: 0.2,
  normal: 0.3,
  slow: 0.5,
  slower: 0.8,
  slowest: 1.2
}, ue = ce(
  "transition-all",
  {
    variants: {
      duration: {
        fast: "duration-200",
        normal: "duration-300",
        slow: "duration-500",
        slower: "duration-700",
        slowest: "duration-1000"
      },
      easing: {
        linear: "ease-linear",
        in: "ease-in",
        out: "ease-out",
        inOut: "ease-in-out"
      }
    },
    defaultVariants: {
      duration: "normal",
      easing: "inOut"
    }
  }
), V = (e = 0.1) => {
  const [i, t] = g(!1), a = Y(null);
  return w(() => {
    const y = new IntersectionObserver(
      ([c]) => t(c.isIntersecting),
      { threshold: e }
    ), r = a.current;
    return r && y.observe(r), () => {
      y.disconnect();
    };
  }, [e]), [a, i];
}, p = (e) => {
  const i = {};
  e.opacity !== void 0 && (i.opacity = e.opacity), e.transformOrigin && (i.transformOrigin = e.transformOrigin);
  const t = [];
  return e.x !== void 0 && (Array.isArray(e.x) ? t.push(`translateX(${typeof e.x[0] == "number" ? `${e.x[0]}px` : e.x[0]})`) : t.push(`translateX(${typeof e.x == "number" ? `${e.x}px` : e.x})`)), e.y !== void 0 && (Array.isArray(e.y) ? t.push(`translateY(${typeof e.y[0] == "number" ? `${e.y[0]}px` : e.y[0]})`) : t.push(`translateY(${typeof e.y == "number" ? `${e.y}px` : e.y})`)), e.scale !== void 0 && (Array.isArray(e.scale) ? t.push(`scale(${e.scale[0]})`) : t.push(`scale(${e.scale})`)), e.rotate !== void 0 && (Array.isArray(e.rotate) ? t.push(`rotate(${e.rotate[0]}deg)`) : t.push(`rotate(${e.rotate}deg)`)), t.length > 0 && (i.transform = t.join(" ")), i;
}, A = X(({
  as: e = "div",
  preset: i,
  initial: t,
  animate: a,
  exit: y,
  duration: r = "normal",
  delay: c = 0,
  easing: l = "easeInOut",
  triggerInView: d = !1,
  repeat: u = 1,
  repeatType: O = "loop",
  spring: S,
  whileHover: m,
  whileTap: I,
  whileFocus: x,
  onAnimationStart: v,
  onAnimationComplete: b,
  className: h,
  style: $,
  children: E,
  ...s
}, T) => {
  const [k, P] = V(), [ye, C] = g(!1), [G, J] = g(!1), B = Y(null), K = re((n) => {
    n && (T && (typeof T == "function" ? T(n) : T.current = n), B.current = n, d && (k.current = n));
  }, [T, k, d]), M = i ? oe[i] : null, N = d ? P && !G : !0;
  w(() => {
    if (!B.current || !N) return;
    const n = B.current, o = () => {
      C(!0), v == null || v();
      const f = {
        ...(M == null ? void 0 : M.initial) || {},
        ...t || {}
      }, D = p(f);
      Object.assign(n.style, D);
      const j = {
        ...(M == null ? void 0 : M.animate) || {},
        ...a || {}
      }, F = typeof r == "number" ? r : H[r], ne = le[l];
      n.style.transition = `all ${F}s cubic-bezier(${ne.join(",")})`, c > 0 && (n.style.transitionDelay = `${c}s`), n.offsetHeight, requestAnimationFrame(() => {
        const ae = p(j);
        Object.assign(n.style, ae);
      });
      const L = () => {
        C(!1), J(!0), b == null || b(), n.removeEventListener("transitionend", L);
      };
      n.addEventListener("transitionend", L);
      const ie = setTimeout(L, (F + c) * 1e3 + 100);
      return () => {
        clearTimeout(ie), n.removeEventListener("transitionend", L);
      };
    };
    if (u === "infinite" || typeof u == "number" && u > 1) {
      const f = () => {
        o();
        const D = (typeof r == "number" ? r : H[r]) * 1e3 + c * 1e3;
        if (u === "infinite")
          setTimeout(f, D);
        else if (typeof u == "number" && u > 1)
          for (let j = 1; j < u; j++)
            setTimeout(f, D * j);
      };
      f();
    } else
      return o();
  }, [N, M, t, a, r, c, l, u, v, b]);
  const q = {};
  (m || I || x) && (q.cursor = "pointer");
  const Q = (n) => {
    var o;
    if (m) {
      const f = p(m);
      Object.assign(n.currentTarget.style, f);
    }
    (o = s.onMouseEnter) == null || o.call(s, n);
  }, W = (n) => {
    var o;
    if (m && a) {
      const f = p(a);
      Object.assign(n.currentTarget.style, f);
    }
    (o = s.onMouseLeave) == null || o.call(s, n);
  }, Z = (n) => {
    var o;
    if (I) {
      const f = p(I);
      Object.assign(n.currentTarget.style, f);
    }
    (o = s.onMouseDown) == null || o.call(s, n);
  }, _ = (n) => {
    var o;
    if (I && a) {
      const f = p(a);
      Object.assign(n.currentTarget.style, f);
    }
    (o = s.onMouseUp) == null || o.call(s, n);
  }, ee = (n) => {
    var o;
    if (x) {
      const f = p(x);
      Object.assign(n.currentTarget.style, f);
    }
    (o = s.onFocus) == null || o.call(s, n);
  }, te = (n) => {
    var o;
    if (x && a) {
      const f = p(a);
      Object.assign(n.currentTarget.style, f);
    }
    (o = s.onBlur) == null || o.call(s, n);
  };
  return U.createElement(
    e,
    {
      ...s,
      ref: K,
      className: z(
        ue({
          duration: typeof r == "string" ? r : "normal",
          easing: l === "easeInOut" ? "inOut" : l === "easeIn" ? "in" : l === "easeOut" ? "out" : "linear"
        }),
        h
      ),
      style: {
        ...q,
        ...$
      },
      onMouseEnter: Q,
      onMouseLeave: W,
      onMouseDown: Z,
      onMouseUp: _,
      onFocus: ee,
      onBlur: te
    },
    E
  );
});
A.displayName = "Motion";
const fe = X(({
  stagger: e = 0.1,
  childPreset: i = "fadeInUp",
  childAnimation: t,
  duration: a = "normal",
  triggerInView: y = !0,
  as: r = "div",
  className: c,
  children: l,
  ...d
}, u) => {
  const [O, S] = V(), [m, I] = g(!1), x = y ? S && !m : !0, v = U.Children.toArray(l);
  return w(() => {
    x && I(!0);
  }, [x]), U.createElement(
    r,
    {
      ...d,
      ref: y ? O : u,
      className: c
    },
    v.map((b, h) => /* @__PURE__ */ R(
      A,
      {
        preset: i,
        initial: t == null ? void 0 : t.initial,
        animate: t == null ? void 0 : t.animate,
        duration: a,
        delay: x ? h * e : 0,
        triggerInView: !1,
        children: b
      },
      h
    ))
  );
});
fe.displayName = "Stagger";
const ve = ({
  show: e,
  exitPreset: i = "fadeOut",
  exitAnimation: t,
  duration: a = "normal",
  onExitComplete: y,
  children: r
}) => {
  const [c, l] = g(e), [d, u] = g(!1);
  w(() => {
    e ? (l(!0), u(!1)) : c && u(!0);
  }, [e, c]);
  const O = () => {
    l(!1), u(!1), y == null || y();
  };
  return c ? /* @__PURE__ */ R(
    A,
    {
      preset: d ? i : "fadeIn",
      animate: d ? t : void 0,
      duration: a,
      onAnimationComplete: d ? O : void 0,
      children: r
    }
  ) : null;
}, Ie = ({
  to: e,
  from: i = 0,
  duration: t = 2,
  format: a = (c) => Math.round(c).toString(),
  triggerInView: y = !0,
  className: r
}) => {
  const [c, l] = g(i), [d, u] = V(), [O, S] = g(!1), m = y ? u && !O : !0;
  return w(() => {
    if (!m) return;
    S(!0);
    const I = Date.now(), x = e - i, v = () => {
      const b = Date.now() - I, h = Math.min(b / (t * 1e3), 1), $ = 1 - Math.pow(1 - h, 3);
      l(i + x * $), h < 1 && requestAnimationFrame(v);
    };
    v();
  }, [m, e, i, t]), /* @__PURE__ */ R("span", { ref: y ? d : void 0, className: r, children: a(c) });
}, be = ({
  text: e,
  speed: i = 50,
  delay: t = 0,
  showCursor: a = !0,
  cursor: y = "|",
  loop: r = !1,
  triggerInView: c = !0,
  onComplete: l,
  className: d
}) => {
  const [u, O] = g(""), [S, m] = g(0), [I, x] = g(!0), [v, b] = V(), [h, $] = g(!1), E = c ? b && !h : !0;
  return w(() => {
    if (!a) return;
    const s = setInterval(() => {
      x((T) => !T);
    }, 500);
    return () => clearInterval(s);
  }, [a]), w(() => {
    if (!E) return;
    $(!0);
    const s = setTimeout(() => {
      S < e.length ? (O(e.slice(0, S + 1)), m((T) => T + 1)) : (l == null || l(), r && setTimeout(() => {
        m(0), O(""), $(!1);
      }, 2e3));
    }, S === 0 ? t : 1e3 / i);
    return () => clearTimeout(s);
  }, [S, e, i, t, r, E, l]), /* @__PURE__ */ se("span", { ref: c ? v : void 0, className: d, children: [
    u,
    a && /* @__PURE__ */ R("span", { className: z("inline-block", I ? "opacity-100" : "opacity-0"), children: y })
  ] });
}, Oe = ({
  preset: e = "fadeInUp",
  animation: i,
  duration: t = "normal",
  delay: a = 0,
  threshold: y = 0.1,
  once: r = !0,
  as: c = "div",
  className: l,
  children: d
}) => /* @__PURE__ */ R(
  A,
  {
    as: c,
    preset: e,
    initial: i == null ? void 0 : i.initial,
    animate: i == null ? void 0 : i.animate,
    duration: t,
    delay: a,
    triggerInView: !0,
    className: l,
    children: d
  }
), Se = ({
  pageKey: e,
  preset: i = "fadeIn",
  duration: t = "normal",
  children: a
}) => /* @__PURE__ */ R(
  A,
  {
    preset: i,
    duration: t,
    children: a
  },
  e
);
export {
  oe as AnimationPresets,
  Ie as Counter,
  le as EasingCurves,
  A as Motion,
  Se as PageTransition,
  ve as Presence,
  Oe as Reveal,
  fe as Stagger,
  H as TimingPresets,
  be as Typewriter,
  V as useInView
};
//# sourceMappingURL=motion.js.map
