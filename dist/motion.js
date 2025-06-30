import { jsx as p } from "react/jsx-runtime";
import * as o from "react";
import { forwardRef as v } from "react";
import { c } from "./utils-qaFjX9_3.js";
const u = (e, s = "normal", n = 0, t = "immediate") => {
  const a = {
    fast: "duration-200",
    normal: "duration-300",
    slow: "duration-500"
  }, r = {
    fadeIn: "animate-in fade-in",
    slideInUp: "animate-in slide-in-from-bottom-4",
    scaleIn: "animate-in zoom-in-95",
    slideInDown: "animate-in slide-in-from-top-4",
    pulse: "animate-pulse"
  }, i = {
    immediate: "",
    hover: "hover:animate-in",
    inView: "motion-safe:animate-in"
    // Uses CSS animation with reduced motion support
  };
  return [
    r[e],
    a[s],
    i[t],
    n > 0 ? `delay-[${n}ms]` : ""
  ].filter(Boolean).join(" ");
}, w = v(({
  as: e = "div",
  preset: s = "fadeIn",
  duration: n = "normal",
  delay: t = 0,
  trigger: a = "immediate",
  className: r,
  children: i,
  ...m
}, l) => {
  const d = u(s, n, t, a);
  return o.createElement(
    e,
    {
      ...m,
      ref: l,
      className: c(d, r)
    },
    i
  );
});
w.displayName = "Motion";
const I = ({
  size: e = "md",
  className: s
}) => /* @__PURE__ */ p(
  "div",
  {
    className: c(
      "rounded-full border-2 border-primary border-t-transparent animate-spin",
      {
        sm: "h-4 w-4",
        md: "h-6 w-6",
        lg: "h-8 w-8"
      }[e],
      s
    )
  }
), y = ({
  preset: e = "fadeIn",
  duration: s = "normal",
  delay: n = 0,
  as: t = "div",
  className: a,
  children: r
}) => {
  const [i, m] = o.useState(!1), l = o.useRef(null);
  o.useEffect(() => {
    const f = new IntersectionObserver(
      ([h]) => {
        h.isIntersecting && (m(!0), f.disconnect());
      },
      { threshold: 0.1 }
    );
    return l.current && f.observe(l.current), () => f.disconnect();
  }, []);
  const d = i ? u(e, s, n, "immediate") : "opacity-0";
  return o.createElement(
    t,
    {
      ref: l,
      className: c(d, a)
    },
    r
  );
}, N = ({
  effect: e = "scale",
  as: s = "div",
  className: n,
  children: t
}) => {
  const a = {
    scale: "hover:scale-105 transition-transform duration-200",
    lift: "hover:-translate-y-1 hover:shadow-lg transition-all duration-200",
    glow: "hover:shadow-lg hover:shadow-primary/25 transition-shadow duration-200",
    rotate: "hover:rotate-1 transition-transform duration-200"
  };
  return o.createElement(
    s,
    {
      className: c(a[e], n)
    },
    t
  );
};
export {
  N as Hover,
  I as LoadingSpinner,
  w as Motion,
  y as Reveal
};
//# sourceMappingURL=motion.js.map
