import { jsx as Wt } from "react/jsx-runtime";
import * as ft from "react";
import a from "react";
import Xt from "react-dom";
var Kt = (n, o, e, s, E, l, b, T) => {
  let f = document.documentElement, i = ["light", "dark"];
  function y(p) {
    (Array.isArray(n) ? n : [n]).forEach((v) => {
      let U = v === "class", c = U && l ? E.map((D) => l[D] || D) : E;
      U ? (f.classList.remove(...c), f.classList.add(l && l[p] ? l[p] : p)) : f.setAttribute(v, p);
    }), t(p);
  }
  function t(p) {
    T && i.includes(p) && (f.style.colorScheme = p);
  }
  function R() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  if (s) y(s);
  else try {
    let p = localStorage.getItem(o) || e, v = b && p === "system" ? R() : p;
    y(v);
  } catch {
  }
}, qt = ft.createContext(void 0), Gt = { setTheme: (n) => {
}, themes: [] }, Jt = () => {
  var n;
  return (n = ft.useContext(qt)) != null ? n : Gt;
};
ft.memo(({ forcedTheme: n, storageKey: o, attribute: e, enableSystem: s, enableColorScheme: E, defaultTheme: l, value: b, themes: T, nonce: f, scriptProps: i }) => {
  let y = JSON.stringify([e, o, l, n, T, b, s, E]).slice(1, -1);
  return ft.createElement("script", { ...i, suppressHydrationWarning: !0, nonce: typeof window > "u" ? f : "", dangerouslySetInnerHTML: { __html: `(${Kt.toString()})(${y})` } });
});
function Qt(n) {
  if (typeof document > "u") return;
  let o = document.head || document.getElementsByTagName("head")[0], e = document.createElement("style");
  e.type = "text/css", o.appendChild(e), e.styleSheet ? e.styleSheet.cssText = n : e.appendChild(document.createTextNode(n));
}
const Zt = (n) => {
  switch (n) {
    case "success":
      return ae;
    case "info":
      return se;
    case "warning":
      return oe;
    case "error":
      return ne;
    default:
      return null;
  }
}, te = Array(12).fill(0), ee = ({ visible: n, className: o }) => /* @__PURE__ */ a.createElement("div", {
  className: [
    "sonner-loading-wrapper",
    o
  ].filter(Boolean).join(" "),
  "data-visible": n
}, /* @__PURE__ */ a.createElement("div", {
  className: "sonner-spinner"
}, te.map((e, s) => /* @__PURE__ */ a.createElement("div", {
  className: "sonner-loading-bar",
  key: `spinner-bar-${s}`
})))), ae = /* @__PURE__ */ a.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  height: "20",
  width: "20"
}, /* @__PURE__ */ a.createElement("path", {
  fillRule: "evenodd",
  d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
  clipRule: "evenodd"
})), oe = /* @__PURE__ */ a.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  height: "20",
  width: "20"
}, /* @__PURE__ */ a.createElement("path", {
  fillRule: "evenodd",
  d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
  clipRule: "evenodd"
})), se = /* @__PURE__ */ a.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  height: "20",
  width: "20"
}, /* @__PURE__ */ a.createElement("path", {
  fillRule: "evenodd",
  d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
  clipRule: "evenodd"
})), ne = /* @__PURE__ */ a.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  height: "20",
  width: "20"
}, /* @__PURE__ */ a.createElement("path", {
  fillRule: "evenodd",
  d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
  clipRule: "evenodd"
})), re = /* @__PURE__ */ a.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "12",
  height: "12",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.5",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /* @__PURE__ */ a.createElement("line", {
  x1: "18",
  y1: "6",
  x2: "6",
  y2: "18"
}), /* @__PURE__ */ a.createElement("line", {
  x1: "6",
  y1: "6",
  x2: "18",
  y2: "18"
})), ie = () => {
  const [n, o] = a.useState(document.hidden);
  return a.useEffect(() => {
    const e = () => {
      o(document.hidden);
    };
    return document.addEventListener("visibilitychange", e), () => window.removeEventListener("visibilitychange", e);
  }, []), n;
};
let wt = 1;
class le {
  constructor() {
    this.subscribe = (o) => (this.subscribers.push(o), () => {
      const e = this.subscribers.indexOf(o);
      this.subscribers.splice(e, 1);
    }), this.publish = (o) => {
      this.subscribers.forEach((e) => e(o));
    }, this.addToast = (o) => {
      this.publish(o), this.toasts = [
        ...this.toasts,
        o
      ];
    }, this.create = (o) => {
      var e;
      const { message: s, ...E } = o, l = typeof (o == null ? void 0 : o.id) == "number" || ((e = o.id) == null ? void 0 : e.length) > 0 ? o.id : wt++, b = this.toasts.find((f) => f.id === l), T = o.dismissible === void 0 ? !0 : o.dismissible;
      return this.dismissedToasts.has(l) && this.dismissedToasts.delete(l), b ? this.toasts = this.toasts.map((f) => f.id === l ? (this.publish({
        ...f,
        ...o,
        id: l,
        title: s
      }), {
        ...f,
        ...o,
        id: l,
        dismissible: T,
        title: s
      }) : f) : this.addToast({
        title: s,
        ...E,
        dismissible: T,
        id: l
      }), l;
    }, this.dismiss = (o) => (o ? (this.dismissedToasts.add(o), requestAnimationFrame(() => this.subscribers.forEach((e) => e({
      id: o,
      dismiss: !0
    })))) : this.toasts.forEach((e) => {
      this.subscribers.forEach((s) => s({
        id: e.id,
        dismiss: !0
      }));
    }), o), this.message = (o, e) => this.create({
      ...e,
      message: o
    }), this.error = (o, e) => this.create({
      ...e,
      message: o,
      type: "error"
    }), this.success = (o, e) => this.create({
      ...e,
      type: "success",
      message: o
    }), this.info = (o, e) => this.create({
      ...e,
      type: "info",
      message: o
    }), this.warning = (o, e) => this.create({
      ...e,
      type: "warning",
      message: o
    }), this.loading = (o, e) => this.create({
      ...e,
      type: "loading",
      message: o
    }), this.promise = (o, e) => {
      if (!e)
        return;
      let s;
      e.loading !== void 0 && (s = this.create({
        ...e,
        promise: o,
        type: "loading",
        message: e.loading,
        description: typeof e.description != "function" ? e.description : void 0
      }));
      const E = Promise.resolve(o instanceof Function ? o() : o);
      let l = s !== void 0, b;
      const T = E.then(async (i) => {
        if (b = [
          "resolve",
          i
        ], a.isValidElement(i))
          l = !1, this.create({
            id: s,
            type: "default",
            message: i
          });
        else if (ce(i) && !i.ok) {
          l = !1;
          const t = typeof e.error == "function" ? await e.error(`HTTP error! status: ${i.status}`) : e.error, R = typeof e.description == "function" ? await e.description(`HTTP error! status: ${i.status}`) : e.description, v = typeof t == "object" && !a.isValidElement(t) ? t : {
            message: t
          };
          this.create({
            id: s,
            type: "error",
            description: R,
            ...v
          });
        } else if (i instanceof Error) {
          l = !1;
          const t = typeof e.error == "function" ? await e.error(i) : e.error, R = typeof e.description == "function" ? await e.description(i) : e.description, v = typeof t == "object" && !a.isValidElement(t) ? t : {
            message: t
          };
          this.create({
            id: s,
            type: "error",
            description: R,
            ...v
          });
        } else if (e.success !== void 0) {
          l = !1;
          const t = typeof e.success == "function" ? await e.success(i) : e.success, R = typeof e.description == "function" ? await e.description(i) : e.description, v = typeof t == "object" && !a.isValidElement(t) ? t : {
            message: t
          };
          this.create({
            id: s,
            type: "success",
            description: R,
            ...v
          });
        }
      }).catch(async (i) => {
        if (b = [
          "reject",
          i
        ], e.error !== void 0) {
          l = !1;
          const y = typeof e.error == "function" ? await e.error(i) : e.error, t = typeof e.description == "function" ? await e.description(i) : e.description, p = typeof y == "object" && !a.isValidElement(y) ? y : {
            message: y
          };
          this.create({
            id: s,
            type: "error",
            description: t,
            ...p
          });
        }
      }).finally(() => {
        l && (this.dismiss(s), s = void 0), e.finally == null || e.finally.call(e);
      }), f = () => new Promise((i, y) => T.then(() => b[0] === "reject" ? y(b[1]) : i(b[1])).catch(y));
      return typeof s != "string" && typeof s != "number" ? {
        unwrap: f
      } : Object.assign(s, {
        unwrap: f
      });
    }, this.custom = (o, e) => {
      const s = (e == null ? void 0 : e.id) || wt++;
      return this.create({
        jsx: o(s),
        id: s,
        ...e
      }), s;
    }, this.getActiveToasts = () => this.toasts.filter((o) => !this.dismissedToasts.has(o.id)), this.subscribers = [], this.toasts = [], this.dismissedToasts = /* @__PURE__ */ new Set();
  }
}
const k = new le(), de = (n, o) => {
  const e = (o == null ? void 0 : o.id) || wt++;
  return k.addToast({
    title: n,
    ...o,
    id: e
  }), e;
}, ce = (n) => n && typeof n == "object" && "ok" in n && typeof n.ok == "boolean" && "status" in n && typeof n.status == "number", ue = de, fe = () => k.toasts, me = () => k.getActiveToasts();
Object.assign(ue, {
  success: k.success,
  info: k.info,
  warning: k.warning,
  error: k.error,
  custom: k.custom,
  message: k.message,
  promise: k.promise,
  dismiss: k.dismiss,
  loading: k.loading
}, {
  getHistory: fe,
  getToasts: me
});
Qt("[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);background:var(--normal-bg);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}");
function ut(n) {
  return n.label !== void 0;
}
const pe = 3, ge = "24px", he = "16px", Mt = 4e3, be = 356, ve = 14, ye = 45, we = 200;
function L(...n) {
  return n.filter(Boolean).join(" ");
}
function xe(n) {
  const [o, e] = n.split("-"), s = [];
  return o && s.push(o), e && s.push(e), s;
}
const Ee = (n) => {
  var o, e, s, E, l, b, T, f, i;
  const { invert: y, toast: t, unstyled: R, interacting: p, setHeights: v, visibleToasts: U, heights: c, index: D, toasts: nt, expanded: Q, removeToast: rt, defaultRichColors: O, closeButton: W, style: mt, cancelButtonStyle: it, actionButtonStyle: pt, className: gt = "", descriptionClassName: P = "", duration: X, position: Z, gap: ht, expandByDefault: z, classNames: d, icons: I, closeButtonAriaLabel: j = "Close toast" } = n, [C, tt] = a.useState(null), [u, g] = a.useState(null), [m, B] = a.useState(!1), [F, h] = a.useState(!1), [et, K] = a.useState(!1), [at, ot] = a.useState(!1), [Ct, xt] = a.useState(!1), [At, bt] = a.useState(0), [Ht, Et] = a.useState(0), st = a.useRef(t.duration || X || Mt), Tt = a.useRef(null), $ = a.useRef(null), Ot = D === 0, zt = D + 1 <= U, N = t.type, q = t.dismissible !== !1, Lt = t.className || "", Pt = t.descriptionClassName || "", lt = a.useMemo(() => c.findIndex((r) => r.toastId === t.id) || 0, [
    c,
    t.id
  ]), jt = a.useMemo(() => {
    var r;
    return (r = t.closeButton) != null ? r : W;
  }, [
    t.closeButton,
    W
  ]), St = a.useMemo(() => t.duration || X || Mt, [
    t.duration,
    X
  ]), vt = a.useRef(0), G = a.useRef(0), kt = a.useRef(0), J = a.useRef(null), [$t, Yt] = Z.split("-"), Nt = a.useMemo(() => c.reduce((r, w, S) => S >= lt ? r : r + w.height, 0), [
    c,
    lt
  ]), _t = ie(), Ft = t.invert || y, yt = N === "loading";
  G.current = a.useMemo(() => lt * ht + Nt, [
    lt,
    Nt
  ]), a.useEffect(() => {
    st.current = St;
  }, [
    St
  ]), a.useEffect(() => {
    B(!0);
  }, []), a.useEffect(() => {
    const r = $.current;
    if (r) {
      const w = r.getBoundingClientRect().height;
      return Et(w), v((S) => [
        {
          toastId: t.id,
          height: w,
          position: t.position
        },
        ...S
      ]), () => v((S) => S.filter((_) => _.toastId !== t.id));
    }
  }, [
    v,
    t.id
  ]), a.useLayoutEffect(() => {
    if (!m) return;
    const r = $.current, w = r.style.height;
    r.style.height = "auto";
    const S = r.getBoundingClientRect().height;
    r.style.height = w, Et(S), v((_) => _.find((x) => x.toastId === t.id) ? _.map((x) => x.toastId === t.id ? {
      ...x,
      height: S
    } : x) : [
      {
        toastId: t.id,
        height: S,
        position: t.position
      },
      ..._
    ]);
  }, [
    m,
    t.title,
    t.description,
    v,
    t.id,
    t.jsx,
    t.action,
    t.cancel
  ]);
  const Y = a.useCallback(() => {
    h(!0), bt(G.current), v((r) => r.filter((w) => w.toastId !== t.id)), setTimeout(() => {
      rt(t);
    }, we);
  }, [
    t,
    rt,
    v,
    G
  ]);
  a.useEffect(() => {
    if (t.promise && N === "loading" || t.duration === 1 / 0 || t.type === "loading") return;
    let r;
    return Q || p || _t ? (() => {
      if (kt.current < vt.current) {
        const _ = (/* @__PURE__ */ new Date()).getTime() - vt.current;
        st.current = st.current - _;
      }
      kt.current = (/* @__PURE__ */ new Date()).getTime();
    })() : (() => {
      st.current !== 1 / 0 && (vt.current = (/* @__PURE__ */ new Date()).getTime(), r = setTimeout(() => {
        t.onAutoClose == null || t.onAutoClose.call(t, t), Y();
      }, st.current));
    })(), () => clearTimeout(r);
  }, [
    Q,
    p,
    t,
    N,
    _t,
    Y
  ]), a.useEffect(() => {
    t.delete && (Y(), t.onDismiss == null || t.onDismiss.call(t, t));
  }, [
    Y,
    t.delete
  ]);
  function Vt() {
    var r;
    if (I != null && I.loading) {
      var w;
      return /* @__PURE__ */ a.createElement("div", {
        className: L(d == null ? void 0 : d.loader, t == null || (w = t.classNames) == null ? void 0 : w.loader, "sonner-loader"),
        "data-visible": N === "loading"
      }, I.loading);
    }
    return /* @__PURE__ */ a.createElement(ee, {
      className: L(d == null ? void 0 : d.loader, t == null || (r = t.classNames) == null ? void 0 : r.loader),
      visible: N === "loading"
    });
  }
  const Ut = t.icon || (I == null ? void 0 : I[N]) || Zt(N);
  var Rt, Dt;
  return /* @__PURE__ */ a.createElement("li", {
    tabIndex: 0,
    ref: $,
    className: L(gt, Lt, d == null ? void 0 : d.toast, t == null || (o = t.classNames) == null ? void 0 : o.toast, d == null ? void 0 : d.default, d == null ? void 0 : d[N], t == null || (e = t.classNames) == null ? void 0 : e[N]),
    "data-sonner-toast": "",
    "data-rich-colors": (Rt = t.richColors) != null ? Rt : O,
    "data-styled": !(t.jsx || t.unstyled || R),
    "data-mounted": m,
    "data-promise": !!t.promise,
    "data-swiped": Ct,
    "data-removed": F,
    "data-visible": zt,
    "data-y-position": $t,
    "data-x-position": Yt,
    "data-index": D,
    "data-front": Ot,
    "data-swiping": et,
    "data-dismissible": q,
    "data-type": N,
    "data-invert": Ft,
    "data-swipe-out": at,
    "data-swipe-direction": u,
    "data-expanded": !!(Q || z && m),
    style: {
      "--index": D,
      "--toasts-before": D,
      "--z-index": nt.length - D,
      "--offset": `${F ? At : G.current}px`,
      "--initial-height": z ? "auto" : `${Ht}px`,
      ...mt,
      ...t.style
    },
    onDragEnd: () => {
      K(!1), tt(null), J.current = null;
    },
    onPointerDown: (r) => {
      yt || !q || (Tt.current = /* @__PURE__ */ new Date(), bt(G.current), r.target.setPointerCapture(r.pointerId), r.target.tagName !== "BUTTON" && (K(!0), J.current = {
        x: r.clientX,
        y: r.clientY
      }));
    },
    onPointerUp: () => {
      var r, w, S;
      if (at || !q) return;
      J.current = null;
      const _ = Number(((r = $.current) == null ? void 0 : r.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0), dt = Number(((w = $.current) == null ? void 0 : w.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0), x = (/* @__PURE__ */ new Date()).getTime() - ((S = Tt.current) == null ? void 0 : S.getTime()), M = C === "x" ? _ : dt, ct = Math.abs(M) / x;
      if (Math.abs(M) >= ye || ct > 0.11) {
        bt(G.current), t.onDismiss == null || t.onDismiss.call(t, t), g(C === "x" ? _ > 0 ? "right" : "left" : dt > 0 ? "down" : "up"), Y(), ot(!0);
        return;
      } else {
        var A, H;
        (A = $.current) == null || A.style.setProperty("--swipe-amount-x", "0px"), (H = $.current) == null || H.style.setProperty("--swipe-amount-y", "0px");
      }
      xt(!1), K(!1), tt(null);
    },
    onPointerMove: (r) => {
      var w, S, _;
      if (!J.current || !q || ((w = window.getSelection()) == null ? void 0 : w.toString().length) > 0) return;
      const x = r.clientY - J.current.y, M = r.clientX - J.current.x;
      var ct;
      const A = (ct = n.swipeDirections) != null ? ct : xe(Z);
      !C && (Math.abs(M) > 1 || Math.abs(x) > 1) && tt(Math.abs(M) > Math.abs(x) ? "x" : "y");
      let H = {
        x: 0,
        y: 0
      };
      const Bt = (V) => 1 / (1.5 + Math.abs(V) / 20);
      if (C === "y") {
        if (A.includes("top") || A.includes("bottom"))
          if (A.includes("top") && x < 0 || A.includes("bottom") && x > 0)
            H.y = x;
          else {
            const V = x * Bt(x);
            H.y = Math.abs(V) < Math.abs(x) ? V : x;
          }
      } else if (C === "x" && (A.includes("left") || A.includes("right")))
        if (A.includes("left") && M < 0 || A.includes("right") && M > 0)
          H.x = M;
        else {
          const V = M * Bt(M);
          H.x = Math.abs(V) < Math.abs(M) ? V : M;
        }
      (Math.abs(H.x) > 0 || Math.abs(H.y) > 0) && xt(!0), (S = $.current) == null || S.style.setProperty("--swipe-amount-x", `${H.x}px`), (_ = $.current) == null || _.style.setProperty("--swipe-amount-y", `${H.y}px`);
    }
  }, jt && !t.jsx && N !== "loading" ? /* @__PURE__ */ a.createElement("button", {
    "aria-label": j,
    "data-disabled": yt,
    "data-close-button": !0,
    onClick: yt || !q ? () => {
    } : () => {
      Y(), t.onDismiss == null || t.onDismiss.call(t, t);
    },
    className: L(d == null ? void 0 : d.closeButton, t == null || (s = t.classNames) == null ? void 0 : s.closeButton)
  }, (Dt = I == null ? void 0 : I.close) != null ? Dt : re) : null, (N || t.icon || t.promise) && t.icon !== null && ((I == null ? void 0 : I[N]) !== null || t.icon) ? /* @__PURE__ */ a.createElement("div", {
    "data-icon": "",
    className: L(d == null ? void 0 : d.icon, t == null || (E = t.classNames) == null ? void 0 : E.icon)
  }, t.promise || t.type === "loading" && !t.icon ? t.icon || Vt() : null, t.type !== "loading" ? Ut : null) : null, /* @__PURE__ */ a.createElement("div", {
    "data-content": "",
    className: L(d == null ? void 0 : d.content, t == null || (l = t.classNames) == null ? void 0 : l.content)
  }, /* @__PURE__ */ a.createElement("div", {
    "data-title": "",
    className: L(d == null ? void 0 : d.title, t == null || (b = t.classNames) == null ? void 0 : b.title)
  }, t.jsx ? t.jsx : typeof t.title == "function" ? t.title() : t.title), t.description ? /* @__PURE__ */ a.createElement("div", {
    "data-description": "",
    className: L(P, Pt, d == null ? void 0 : d.description, t == null || (T = t.classNames) == null ? void 0 : T.description)
  }, typeof t.description == "function" ? t.description() : t.description) : null), /* @__PURE__ */ a.isValidElement(t.cancel) ? t.cancel : t.cancel && ut(t.cancel) ? /* @__PURE__ */ a.createElement("button", {
    "data-button": !0,
    "data-cancel": !0,
    style: t.cancelButtonStyle || it,
    onClick: (r) => {
      ut(t.cancel) && q && (t.cancel.onClick == null || t.cancel.onClick.call(t.cancel, r), Y());
    },
    className: L(d == null ? void 0 : d.cancelButton, t == null || (f = t.classNames) == null ? void 0 : f.cancelButton)
  }, t.cancel.label) : null, /* @__PURE__ */ a.isValidElement(t.action) ? t.action : t.action && ut(t.action) ? /* @__PURE__ */ a.createElement("button", {
    "data-button": !0,
    "data-action": !0,
    style: t.actionButtonStyle || pt,
    onClick: (r) => {
      ut(t.action) && (t.action.onClick == null || t.action.onClick.call(t.action, r), !r.defaultPrevented && Y());
    },
    className: L(d == null ? void 0 : d.actionButton, t == null || (i = t.classNames) == null ? void 0 : i.actionButton)
  }, t.action.label) : null);
};
function It() {
  if (typeof window > "u" || typeof document > "u") return "ltr";
  const n = document.documentElement.getAttribute("dir");
  return n === "auto" || !n ? window.getComputedStyle(document.documentElement).direction : n;
}
function Te(n, o) {
  const e = {};
  return [
    n,
    o
  ].forEach((s, E) => {
    const l = E === 1, b = l ? "--mobile-offset" : "--offset", T = l ? he : ge;
    function f(i) {
      [
        "top",
        "right",
        "bottom",
        "left"
      ].forEach((y) => {
        e[`${b}-${y}`] = typeof i == "number" ? `${i}px` : i;
      });
    }
    typeof s == "number" || typeof s == "string" ? f(s) : typeof s == "object" ? [
      "top",
      "right",
      "bottom",
      "left"
    ].forEach((i) => {
      s[i] === void 0 ? e[`${b}-${i}`] = T : e[`${b}-${i}`] = typeof s[i] == "number" ? `${s[i]}px` : s[i];
    }) : f(T);
  }), e;
}
const Se = /* @__PURE__ */ a.forwardRef(function(o, e) {
  const { invert: s, position: E = "bottom-right", hotkey: l = [
    "altKey",
    "KeyT"
  ], expand: b, closeButton: T, className: f, offset: i, mobileOffset: y, theme: t = "light", richColors: R, duration: p, style: v, visibleToasts: U = pe, toastOptions: c, dir: D = It(), gap: nt = ve, icons: Q, containerAriaLabel: rt = "Notifications" } = o, [O, W] = a.useState([]), mt = a.useMemo(() => Array.from(new Set([
    E
  ].concat(O.filter((u) => u.position).map((u) => u.position)))), [
    O,
    E
  ]), [it, pt] = a.useState([]), [gt, P] = a.useState(!1), [X, Z] = a.useState(!1), [ht, z] = a.useState(t !== "system" ? t : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"), d = a.useRef(null), I = l.join("+").replace(/Key/g, "").replace(/Digit/g, ""), j = a.useRef(null), C = a.useRef(!1), tt = a.useCallback((u) => {
    W((g) => {
      var m;
      return (m = g.find((B) => B.id === u.id)) != null && m.delete || k.dismiss(u.id), g.filter(({ id: B }) => B !== u.id);
    });
  }, []);
  return a.useEffect(() => k.subscribe((u) => {
    if (u.dismiss) {
      requestAnimationFrame(() => {
        W((g) => g.map((m) => m.id === u.id ? {
          ...m,
          delete: !0
        } : m));
      });
      return;
    }
    setTimeout(() => {
      Xt.flushSync(() => {
        W((g) => {
          const m = g.findIndex((B) => B.id === u.id);
          return m !== -1 ? [
            ...g.slice(0, m),
            {
              ...g[m],
              ...u
            },
            ...g.slice(m + 1)
          ] : [
            u,
            ...g
          ];
        });
      });
    });
  }), [
    O
  ]), a.useEffect(() => {
    if (t !== "system") {
      z(t);
      return;
    }
    if (t === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? z("dark") : z("light")), typeof window > "u") return;
    const u = window.matchMedia("(prefers-color-scheme: dark)");
    try {
      u.addEventListener("change", ({ matches: g }) => {
        z(g ? "dark" : "light");
      });
    } catch {
      u.addListener(({ matches: m }) => {
        try {
          z(m ? "dark" : "light");
        } catch (B) {
          console.error(B);
        }
      });
    }
  }, [
    t
  ]), a.useEffect(() => {
    O.length <= 1 && P(!1);
  }, [
    O
  ]), a.useEffect(() => {
    const u = (g) => {
      var m;
      if (l.every((h) => g[h] || g.code === h)) {
        var F;
        P(!0), (F = d.current) == null || F.focus();
      }
      g.code === "Escape" && (document.activeElement === d.current || (m = d.current) != null && m.contains(document.activeElement)) && P(!1);
    };
    return document.addEventListener("keydown", u), () => document.removeEventListener("keydown", u);
  }, [
    l
  ]), a.useEffect(() => {
    if (d.current)
      return () => {
        j.current && (j.current.focus({
          preventScroll: !0
        }), j.current = null, C.current = !1);
      };
  }, [
    d.current
  ]), // Remove item from normal navigation flow, only available via hotkey
  /* @__PURE__ */ a.createElement("section", {
    ref: e,
    "aria-label": `${rt} ${I}`,
    tabIndex: -1,
    "aria-live": "polite",
    "aria-relevant": "additions text",
    "aria-atomic": "false",
    suppressHydrationWarning: !0
  }, mt.map((u, g) => {
    var m;
    const [B, F] = u.split("-");
    return O.length ? /* @__PURE__ */ a.createElement("ol", {
      key: u,
      dir: D === "auto" ? It() : D,
      tabIndex: -1,
      ref: d,
      className: f,
      "data-sonner-toaster": !0,
      "data-sonner-theme": ht,
      "data-y-position": B,
      "data-x-position": F,
      style: {
        "--front-toast-height": `${((m = it[0]) == null ? void 0 : m.height) || 0}px`,
        "--width": `${be}px`,
        "--gap": `${nt}px`,
        ...v,
        ...Te(i, y)
      },
      onBlur: (h) => {
        C.current && !h.currentTarget.contains(h.relatedTarget) && (C.current = !1, j.current && (j.current.focus({
          preventScroll: !0
        }), j.current = null));
      },
      onFocus: (h) => {
        h.target instanceof HTMLElement && h.target.dataset.dismissible === "false" || C.current || (C.current = !0, j.current = h.relatedTarget);
      },
      onMouseEnter: () => P(!0),
      onMouseMove: () => P(!0),
      onMouseLeave: () => {
        X || P(!1);
      },
      onDragEnd: () => P(!1),
      onPointerDown: (h) => {
        h.target instanceof HTMLElement && h.target.dataset.dismissible === "false" || Z(!0);
      },
      onPointerUp: () => Z(!1)
    }, O.filter((h) => !h.position && g === 0 || h.position === u).map((h, et) => {
      var K, at;
      return /* @__PURE__ */ a.createElement(Ee, {
        key: h.id,
        icons: Q,
        index: et,
        toast: h,
        defaultRichColors: R,
        duration: (K = c == null ? void 0 : c.duration) != null ? K : p,
        className: c == null ? void 0 : c.className,
        descriptionClassName: c == null ? void 0 : c.descriptionClassName,
        invert: s,
        visibleToasts: U,
        closeButton: (at = c == null ? void 0 : c.closeButton) != null ? at : T,
        interacting: X,
        position: u,
        style: c == null ? void 0 : c.style,
        unstyled: c == null ? void 0 : c.unstyled,
        classNames: c == null ? void 0 : c.classNames,
        cancelButtonStyle: c == null ? void 0 : c.cancelButtonStyle,
        actionButtonStyle: c == null ? void 0 : c.actionButtonStyle,
        closeButtonAriaLabel: c == null ? void 0 : c.closeButtonAriaLabel,
        removeToast: tt,
        toasts: O.filter((ot) => ot.position == h.position),
        heights: it.filter((ot) => ot.position == h.position),
        setHeights: pt,
        expandByDefault: b,
        gap: nt,
        expanded: gt,
        swipeDirections: o.swipeDirections
      });
    })) : null;
  }));
}), De = ({ ...n }) => {
  const { theme: o = "system" } = Jt();
  return /* @__PURE__ */ Wt(
    Se,
    {
      theme: o,
      className: "toaster group",
      style: {
        "--normal-bg": "var(--popover)",
        "--normal-text": "var(--popover-foreground)",
        "--normal-border": "var(--border)"
      },
      ...n
    }
  );
};
export {
  De as Toaster
};
//# sourceMappingURL=sonner.js.map
