import { jsx as ne } from "react/jsx-runtime";
import * as Le from "react";
import f, { createContext as cn, useContext as un, useCallback as R, useRef as De, useLayoutEffect as dn, useState as Ie, useEffect as ln, useMemo as Ye } from "react";
import { c as N } from "./utils-CwJPJKOE.js";
import { buttonVariants as Xe, Button as fn } from "./button.js";
import { C as hn } from "./chevron-left-C1pkx4AF.js";
import { C as mn } from "./chevron-right-pz9eCjj-.js";
import { C as yn } from "./chevron-down-BORJtX8F.js";
function gn(e, t, n = "long") {
  return new Intl.DateTimeFormat("en-US", {
    // Enforces engine to render the time. Without the option JavaScriptCore omits it.
    hour: "numeric",
    timeZone: e,
    timeZoneName: n
  }).format(t).split(/\s/g).slice(2).join(" ");
}
const pn = {}, he = {};
function oe(e, t) {
  try {
    const r = (pn[e] ||= new Intl.DateTimeFormat("en-US", {
      timeZone: e,
      timeZoneName: "longOffset"
    }).format)(t).split("GMT")[1];
    return r in he ? he[r] : Ue(r, r.split(":"));
  } catch {
    if (e in he) return he[e];
    const n = e?.match(wn);
    return n ? Ue(e, n.slice(1)) : NaN;
  }
}
const wn = /([+-]\d\d):?(\d\d)?/;
function Ue(e, t) {
  const n = +(t[0] || 0), r = +(t[1] || 0), o = +(t[2] || 0) / 60;
  return he[e] = n * 60 + r > 0 ? n * 60 + r + o : n * 60 - r - o;
}
class X extends Date {
  //#region static
  constructor(...t) {
    super(), t.length > 1 && typeof t[t.length - 1] == "string" && (this.timeZone = t.pop()), this.internal = /* @__PURE__ */ new Date(), isNaN(oe(this.timeZone, this)) ? this.setTime(NaN) : t.length ? typeof t[0] == "number" && (t.length === 1 || t.length === 2 && typeof t[1] != "number") ? this.setTime(t[0]) : typeof t[0] == "string" ? this.setTime(+new Date(t[0])) : t[0] instanceof Date ? this.setTime(+t[0]) : (this.setTime(+new Date(...t)), ct(this), He(this)) : this.setTime(Date.now());
  }
  static tz(t, ...n) {
    return n.length ? new X(...n, t) : new X(Date.now(), t);
  }
  //#endregion
  //#region time zone
  withTimeZone(t) {
    return new X(+this, t);
  }
  getTimezoneOffset() {
    const t = -oe(this.timeZone, this);
    return t > 0 ? Math.floor(t) : Math.ceil(t);
  }
  //#endregion
  //#region time
  setTime(t) {
    return Date.prototype.setTime.apply(this, arguments), He(this), +this;
  }
  //#endregion
  //#region date-fns integration
  [Symbol.for("constructDateFrom")](t) {
    return new X(+new Date(t), this.timeZone);
  }
  //#endregion
}
const Ve = /^(get|set)(?!UTC)/;
Object.getOwnPropertyNames(Date.prototype).forEach((e) => {
  if (!Ve.test(e)) return;
  const t = e.replace(Ve, "$1UTC");
  X.prototype[t] && (e.startsWith("get") ? X.prototype[e] = function() {
    return this.internal[t]();
  } : (X.prototype[e] = function() {
    return Date.prototype[t].apply(this.internal, arguments), bn(this), +this;
  }, X.prototype[t] = function() {
    return Date.prototype[t].apply(this, arguments), He(this), +this;
  }));
});
function He(e) {
  e.internal.setTime(+e), e.internal.setUTCSeconds(e.internal.getUTCSeconds() - Math.round(-oe(e.timeZone, e) * 60));
}
function bn(e) {
  Date.prototype.setFullYear.call(e, e.internal.getUTCFullYear(), e.internal.getUTCMonth(), e.internal.getUTCDate()), Date.prototype.setHours.call(e, e.internal.getUTCHours(), e.internal.getUTCMinutes(), e.internal.getUTCSeconds(), e.internal.getUTCMilliseconds()), ct(e);
}
function ct(e) {
  const t = oe(e.timeZone, e), n = t > 0 ? Math.floor(t) : Math.ceil(t), r = /* @__PURE__ */ new Date(+e);
  r.setUTCHours(r.getUTCHours() - 1);
  const o = -(/* @__PURE__ */ new Date(+e)).getTimezoneOffset(), s = -(/* @__PURE__ */ new Date(+r)).getTimezoneOffset(), i = o - s, a = Date.prototype.getHours.apply(e) !== e.internal.getUTCHours();
  i && a && e.internal.setUTCMinutes(e.internal.getUTCMinutes() + i);
  const c = o - n;
  c && Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + c);
  const d = /* @__PURE__ */ new Date(+e);
  d.setUTCSeconds(0);
  const l = o > 0 ? d.getSeconds() : (d.getSeconds() - 60) % 60, u = Math.round(-(oe(e.timeZone, e) * 60)) % 60;
  (u || l) && (e.internal.setUTCSeconds(e.internal.getUTCSeconds() + u), Date.prototype.setUTCSeconds.call(e, Date.prototype.getUTCSeconds.call(e) + u + l));
  const h = oe(e.timeZone, e), g = h > 0 ? Math.floor(h) : Math.ceil(h), O = -(/* @__PURE__ */ new Date(+e)).getTimezoneOffset() - g, w = g !== n, W = O - c;
  if (w && W) {
    Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + W);
    const x = oe(e.timeZone, e), b = x > 0 ? Math.floor(x) : Math.ceil(x), Y = g - b;
    Y && (e.internal.setUTCMinutes(e.internal.getUTCMinutes() + Y), Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + Y));
  }
}
class H extends X {
  //#region static
  static tz(t, ...n) {
    return n.length ? new H(...n, t) : new H(Date.now(), t);
  }
  //#endregion
  //#region representation
  toISOString() {
    const [t, n, r] = this.tzComponents(), o = `${t}${n}:${r}`;
    return this.internal.toISOString().slice(0, -1) + o;
  }
  toString() {
    return `${this.toDateString()} ${this.toTimeString()}`;
  }
  toDateString() {
    const [t, n, r, o] = this.internal.toUTCString().split(" ");
    return `${t?.slice(0, -1)} ${r} ${n} ${o}`;
  }
  toTimeString() {
    const t = this.internal.toUTCString().split(" ")[4], [n, r, o] = this.tzComponents();
    return `${t} GMT${n}${r}${o} (${gn(this.timeZone, this)})`;
  }
  toLocaleString(t, n) {
    return Date.prototype.toLocaleString.call(this, t, {
      ...n,
      timeZone: n?.timeZone || this.timeZone
    });
  }
  toLocaleDateString(t, n) {
    return Date.prototype.toLocaleDateString.call(this, t, {
      ...n,
      timeZone: n?.timeZone || this.timeZone
    });
  }
  toLocaleTimeString(t, n) {
    return Date.prototype.toLocaleTimeString.call(this, t, {
      ...n,
      timeZone: n?.timeZone || this.timeZone
    });
  }
  //#endregion
  //#region private
  tzComponents() {
    const t = this.getTimezoneOffset(), n = t > 0 ? "-" : "+", r = String(Math.floor(Math.abs(t) / 60)).padStart(2, "0"), o = String(Math.abs(t) % 60).padStart(2, "0");
    return [n, r, o];
  }
  //#endregion
  withTimeZone(t) {
    return new H(+this, t);
  }
  //#region date-fns integration
  [Symbol.for("constructDateFrom")](t) {
    return new H(+new Date(t), this.timeZone);
  }
  //#endregion
}
const ut = 6048e5, Mn = 864e5, Ke = Symbol.for("constructDateFrom");
function B(e, t) {
  return typeof e == "function" ? e(t) : e && typeof e == "object" && Ke in e ? e[Ke](t) : e instanceof Date ? new e.constructor(t) : new Date(t);
}
function T(e, t) {
  return B(t || e, e);
}
function dt(e, t, n) {
  const r = T(e, n?.in);
  return isNaN(t) ? B(e, NaN) : (t && r.setDate(r.getDate() + t), r);
}
function lt(e, t, n) {
  const r = T(e, n?.in);
  if (isNaN(t)) return B(e, NaN);
  if (!t)
    return r;
  const o = r.getDate(), s = B(e, r.getTime());
  s.setMonth(r.getMonth() + t + 1, 0);
  const i = s.getDate();
  return o >= i ? s : (r.setFullYear(
    s.getFullYear(),
    s.getMonth(),
    o
  ), r);
}
let kn = {};
function ge() {
  return kn;
}
function ue(e, t) {
  const n = ge(), r = t?.weekStartsOn ?? t?.locale?.options?.weekStartsOn ?? n.weekStartsOn ?? n.locale?.options?.weekStartsOn ?? 0, o = T(e, t?.in), s = o.getDay(), i = (s < r ? 7 : 0) + s - r;
  return o.setDate(o.getDate() - i), o.setHours(0, 0, 0, 0), o;
}
function me(e, t) {
  return ue(e, { ...t, weekStartsOn: 1 });
}
function ft(e, t) {
  const n = T(e, t?.in), r = n.getFullYear(), o = B(n, 0);
  o.setFullYear(r + 1, 0, 4), o.setHours(0, 0, 0, 0);
  const s = me(o), i = B(n, 0);
  i.setFullYear(r, 0, 4), i.setHours(0, 0, 0, 0);
  const a = me(i);
  return n.getTime() >= s.getTime() ? r + 1 : n.getTime() >= a.getTime() ? r : r - 1;
}
function Je(e) {
  const t = T(e), n = new Date(
    Date.UTC(
      t.getFullYear(),
      t.getMonth(),
      t.getDate(),
      t.getHours(),
      t.getMinutes(),
      t.getSeconds(),
      t.getMilliseconds()
    )
  );
  return n.setUTCFullYear(t.getFullYear()), +e - +n;
}
function de(e, ...t) {
  const n = B.bind(
    null,
    t.find((r) => typeof r == "object")
  );
  return t.map(n);
}
function ye(e, t) {
  const n = T(e, t?.in);
  return n.setHours(0, 0, 0, 0), n;
}
function ht(e, t, n) {
  const [r, o] = de(
    n?.in,
    e,
    t
  ), s = ye(r), i = ye(o), a = +s - Je(s), c = +i - Je(i);
  return Math.round((a - c) / Mn);
}
function Dn(e, t) {
  const n = ft(e, t), r = B(e, 0);
  return r.setFullYear(n, 0, 4), r.setHours(0, 0, 0, 0), me(r);
}
function vn(e, t, n) {
  return dt(e, t * 7, n);
}
function On(e, t, n) {
  return lt(e, t * 12, n);
}
function Wn(e, t) {
  let n, r = t?.in;
  return e.forEach((o) => {
    !r && typeof o == "object" && (r = B.bind(null, o));
    const s = T(o, r);
    (!n || n < s || isNaN(+s)) && (n = s);
  }), B(r, n || NaN);
}
function Sn(e, t) {
  let n, r = t?.in;
  return e.forEach((o) => {
    !r && typeof o == "object" && (r = B.bind(null, o));
    const s = T(o, r);
    (!n || n > s || isNaN(+s)) && (n = s);
  }), B(r, n || NaN);
}
function Cn(e, t, n) {
  const [r, o] = de(
    n?.in,
    e,
    t
  );
  return +ye(r) == +ye(o);
}
function mt(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function Nn(e) {
  return !(!mt(e) && typeof e != "number" || isNaN(+T(e)));
}
function xn(e, t, n) {
  const [r, o] = de(
    n?.in,
    e,
    t
  ), s = r.getFullYear() - o.getFullYear(), i = r.getMonth() - o.getMonth();
  return s * 12 + i;
}
function _n(e, t) {
  const n = T(e, t?.in), r = n.getMonth();
  return n.setFullYear(n.getFullYear(), r + 1, 0), n.setHours(23, 59, 59, 999), n;
}
function Tn(e, t) {
  const [n, r] = de(e, t.start, t.end);
  return { start: n, end: r };
}
function Yn(e, t) {
  const { start: n, end: r } = Tn(t?.in, e);
  let o = +n > +r;
  const s = o ? +n : +r, i = o ? r : n;
  i.setHours(0, 0, 0, 0), i.setDate(1);
  let a = 1;
  const c = [];
  for (; +i <= s; )
    c.push(B(n, i)), i.setMonth(i.getMonth() + a);
  return o ? c.reverse() : c;
}
function En(e, t) {
  const n = T(e, t?.in);
  return n.setDate(1), n.setHours(0, 0, 0, 0), n;
}
function Pn(e, t) {
  const n = T(e, t?.in), r = n.getFullYear();
  return n.setFullYear(r + 1, 0, 0), n.setHours(23, 59, 59, 999), n;
}
function yt(e, t) {
  const n = T(e, t?.in);
  return n.setFullYear(n.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
function gt(e, t) {
  const n = ge(), r = t?.weekStartsOn ?? t?.locale?.options?.weekStartsOn ?? n.weekStartsOn ?? n.locale?.options?.weekStartsOn ?? 0, o = T(e, t?.in), s = o.getDay(), i = (s < r ? -7 : 0) + 6 - (s - r);
  return o.setDate(o.getDate() + i), o.setHours(23, 59, 59, 999), o;
}
function Fn(e, t) {
  return gt(e, { ...t, weekStartsOn: 1 });
}
const Bn = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
}, In = (e, t, n) => {
  let r;
  const o = Bn[e];
  return typeof o == "string" ? r = o : t === 1 ? r = o.one : r = o.other.replace("{{count}}", t.toString()), n?.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
};
function Ee(e) {
  return (t = {}) => {
    const n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth];
  };
}
const Hn = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, qn = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, An = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, jn = {
  date: Ee({
    formats: Hn,
    defaultWidth: "full"
  }),
  time: Ee({
    formats: qn,
    defaultWidth: "full"
  }),
  dateTime: Ee({
    formats: An,
    defaultWidth: "full"
  })
}, zn = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, Rn = (e, t, n, r) => zn[e];
function le(e) {
  return (t, n) => {
    const r = n?.context ? String(n.context) : "standalone";
    let o;
    if (r === "formatting" && e.formattingValues) {
      const i = e.defaultFormattingWidth || e.defaultWidth, a = n?.width ? String(n.width) : i;
      o = e.formattingValues[a] || e.formattingValues[i];
    } else {
      const i = e.defaultWidth, a = n?.width ? String(n.width) : e.defaultWidth;
      o = e.values[a] || e.values[i];
    }
    const s = e.argumentCallback ? e.argumentCallback(t) : t;
    return o[s];
  };
}
const $n = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, Zn = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, Gn = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  wide: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
}, Qn = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]
}, Ln = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
}, Xn = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
}, Un = (e, t) => {
  const n = Number(e), r = n % 100;
  if (r > 20 || r < 10)
    switch (r % 10) {
      case 1:
        return n + "st";
      case 2:
        return n + "nd";
      case 3:
        return n + "rd";
    }
  return n + "th";
}, Vn = {
  ordinalNumber: Un,
  era: le({
    values: $n,
    defaultWidth: "wide"
  }),
  quarter: le({
    values: Zn,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: le({
    values: Gn,
    defaultWidth: "wide"
  }),
  day: le({
    values: Qn,
    defaultWidth: "wide"
  }),
  dayPeriod: le({
    values: Ln,
    defaultWidth: "wide",
    formattingValues: Xn,
    defaultFormattingWidth: "wide"
  })
};
function fe(e) {
  return (t, n = {}) => {
    const r = n.width, o = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], s = t.match(o);
    if (!s)
      return null;
    const i = s[0], a = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], c = Array.isArray(a) ? Jn(a, (u) => u.test(i)) : (
      // [TODO] -- I challenge you to fix the type
      Kn(a, (u) => u.test(i))
    );
    let d;
    d = e.valueCallback ? e.valueCallback(c) : c, d = n.valueCallback ? (
      // [TODO] -- I challenge you to fix the type
      n.valueCallback(d)
    ) : d;
    const l = t.slice(i.length);
    return { value: d, rest: l };
  };
}
function Kn(e, t) {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n]))
      return n;
}
function Jn(e, t) {
  for (let n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function er(e) {
  return (t, n = {}) => {
    const r = t.match(e.matchPattern);
    if (!r) return null;
    const o = r[0], s = t.match(e.parsePattern);
    if (!s) return null;
    let i = e.valueCallback ? e.valueCallback(s[0]) : s[0];
    i = n.valueCallback ? n.valueCallback(i) : i;
    const a = t.slice(o.length);
    return { value: i, rest: a };
  };
}
const tr = /^(\d+)(th|st|nd|rd)?/i, nr = /\d+/i, rr = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, or = {
  any: [/^b/i, /^(a|c)/i]
}, sr = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, ar = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, ir = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, cr = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ]
}, ur = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, dr = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, lr = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, fr = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
}, hr = {
  ordinalNumber: er({
    matchPattern: tr,
    parsePattern: nr,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: fe({
    matchPatterns: rr,
    defaultMatchWidth: "wide",
    parsePatterns: or,
    defaultParseWidth: "any"
  }),
  quarter: fe({
    matchPatterns: sr,
    defaultMatchWidth: "wide",
    parsePatterns: ar,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: fe({
    matchPatterns: ir,
    defaultMatchWidth: "wide",
    parsePatterns: cr,
    defaultParseWidth: "any"
  }),
  day: fe({
    matchPatterns: ur,
    defaultMatchWidth: "wide",
    parsePatterns: dr,
    defaultParseWidth: "any"
  }),
  dayPeriod: fe({
    matchPatterns: lr,
    defaultMatchWidth: "any",
    parsePatterns: fr,
    defaultParseWidth: "any"
  })
}, qe = {
  code: "en-US",
  formatDistance: In,
  formatLong: jn,
  formatRelative: Rn,
  localize: Vn,
  match: hr,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function mr(e, t) {
  const n = T(e, t?.in);
  return ht(n, yt(n)) + 1;
}
function pt(e, t) {
  const n = T(e, t?.in), r = +me(n) - +Dn(n);
  return Math.round(r / ut) + 1;
}
function wt(e, t) {
  const n = T(e, t?.in), r = n.getFullYear(), o = ge(), s = t?.firstWeekContainsDate ?? t?.locale?.options?.firstWeekContainsDate ?? o.firstWeekContainsDate ?? o.locale?.options?.firstWeekContainsDate ?? 1, i = B(t?.in || e, 0);
  i.setFullYear(r + 1, 0, s), i.setHours(0, 0, 0, 0);
  const a = ue(i, t), c = B(t?.in || e, 0);
  c.setFullYear(r, 0, s), c.setHours(0, 0, 0, 0);
  const d = ue(c, t);
  return +n >= +a ? r + 1 : +n >= +d ? r : r - 1;
}
function yr(e, t) {
  const n = ge(), r = t?.firstWeekContainsDate ?? t?.locale?.options?.firstWeekContainsDate ?? n.firstWeekContainsDate ?? n.locale?.options?.firstWeekContainsDate ?? 1, o = wt(e, t), s = B(t?.in || e, 0);
  return s.setFullYear(o, 0, r), s.setHours(0, 0, 0, 0), ue(s, t);
}
function bt(e, t) {
  const n = T(e, t?.in), r = +ue(n, t) - +yr(n, t);
  return Math.round(r / ut) + 1;
}
function _(e, t) {
  const n = e < 0 ? "-" : "", r = Math.abs(e).toString().padStart(t, "0");
  return n + r;
}
const te = {
  // Year
  y(e, t) {
    const n = e.getFullYear(), r = n > 0 ? n : 1 - n;
    return _(t === "yy" ? r % 100 : r, t.length);
  },
  // Month
  M(e, t) {
    const n = e.getMonth();
    return t === "M" ? String(n + 1) : _(n + 1, 2);
  },
  // Day of the month
  d(e, t) {
    return _(e.getDate(), t.length);
  },
  // AM or PM
  a(e, t) {
    const n = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return n.toUpperCase();
      case "aaa":
        return n;
      case "aaaaa":
        return n[0];
      case "aaaa":
      default:
        return n === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h(e, t) {
    return _(e.getHours() % 12 || 12, t.length);
  },
  // Hour [0-23]
  H(e, t) {
    return _(e.getHours(), t.length);
  },
  // Minute
  m(e, t) {
    return _(e.getMinutes(), t.length);
  },
  // Second
  s(e, t) {
    return _(e.getSeconds(), t.length);
  },
  // Fraction of second
  S(e, t) {
    const n = t.length, r = e.getMilliseconds(), o = Math.trunc(
      r * Math.pow(10, n - 3)
    );
    return _(o, t.length);
  }
}, ce = {
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, et = {
  // Era
  G: function(e, t, n) {
    const r = e.getFullYear() > 0 ? 1 : 0;
    switch (t) {
      // AD, BC
      case "G":
      case "GG":
      case "GGG":
        return n.era(r, { width: "abbreviated" });
      // A, B
      case "GGGGG":
        return n.era(r, { width: "narrow" });
      // Anno Domini, Before Christ
      case "GGGG":
      default:
        return n.era(r, { width: "wide" });
    }
  },
  // Year
  y: function(e, t, n) {
    if (t === "yo") {
      const r = e.getFullYear(), o = r > 0 ? r : 1 - r;
      return n.ordinalNumber(o, { unit: "year" });
    }
    return te.y(e, t);
  },
  // Local week-numbering year
  Y: function(e, t, n, r) {
    const o = wt(e, r), s = o > 0 ? o : 1 - o;
    if (t === "YY") {
      const i = s % 100;
      return _(i, 2);
    }
    return t === "Yo" ? n.ordinalNumber(s, { unit: "year" }) : _(s, t.length);
  },
  // ISO week-numbering year
  R: function(e, t) {
    const n = ft(e);
    return _(n, t.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function(e, t) {
    const n = e.getFullYear();
    return _(n, t.length);
  },
  // Quarter
  Q: function(e, t, n) {
    const r = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      // 1, 2, 3, 4
      case "Q":
        return String(r);
      // 01, 02, 03, 04
      case "QQ":
        return _(r, 2);
      // 1st, 2nd, 3rd, 4th
      case "Qo":
        return n.ordinalNumber(r, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "QQQ":
        return n.quarter(r, {
          width: "abbreviated",
          context: "formatting"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "QQQQQ":
        return n.quarter(r, {
          width: "narrow",
          context: "formatting"
        });
      // 1st quarter, 2nd quarter, ...
      case "QQQQ":
      default:
        return n.quarter(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(e, t, n) {
    const r = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      // 1, 2, 3, 4
      case "q":
        return String(r);
      // 01, 02, 03, 04
      case "qq":
        return _(r, 2);
      // 1st, 2nd, 3rd, 4th
      case "qo":
        return n.ordinalNumber(r, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "qqq":
        return n.quarter(r, {
          width: "abbreviated",
          context: "standalone"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "qqqqq":
        return n.quarter(r, {
          width: "narrow",
          context: "standalone"
        });
      // 1st quarter, 2nd quarter, ...
      case "qqqq":
      default:
        return n.quarter(r, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(e, t, n) {
    const r = e.getMonth();
    switch (t) {
      case "M":
      case "MM":
        return te.M(e, t);
      // 1st, 2nd, ..., 12th
      case "Mo":
        return n.ordinalNumber(r + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "MMM":
        return n.month(r, {
          width: "abbreviated",
          context: "formatting"
        });
      // J, F, ..., D
      case "MMMMM":
        return n.month(r, {
          width: "narrow",
          context: "formatting"
        });
      // January, February, ..., December
      case "MMMM":
      default:
        return n.month(r, { width: "wide", context: "formatting" });
    }
  },
  // Stand-alone month
  L: function(e, t, n) {
    const r = e.getMonth();
    switch (t) {
      // 1, 2, ..., 12
      case "L":
        return String(r + 1);
      // 01, 02, ..., 12
      case "LL":
        return _(r + 1, 2);
      // 1st, 2nd, ..., 12th
      case "Lo":
        return n.ordinalNumber(r + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "LLL":
        return n.month(r, {
          width: "abbreviated",
          context: "standalone"
        });
      // J, F, ..., D
      case "LLLLL":
        return n.month(r, {
          width: "narrow",
          context: "standalone"
        });
      // January, February, ..., December
      case "LLLL":
      default:
        return n.month(r, { width: "wide", context: "standalone" });
    }
  },
  // Local week of year
  w: function(e, t, n, r) {
    const o = bt(e, r);
    return t === "wo" ? n.ordinalNumber(o, { unit: "week" }) : _(o, t.length);
  },
  // ISO week of year
  I: function(e, t, n) {
    const r = pt(e);
    return t === "Io" ? n.ordinalNumber(r, { unit: "week" }) : _(r, t.length);
  },
  // Day of the month
  d: function(e, t, n) {
    return t === "do" ? n.ordinalNumber(e.getDate(), { unit: "date" }) : te.d(e, t);
  },
  // Day of year
  D: function(e, t, n) {
    const r = mr(e);
    return t === "Do" ? n.ordinalNumber(r, { unit: "dayOfYear" }) : _(r, t.length);
  },
  // Day of week
  E: function(e, t, n) {
    const r = e.getDay();
    switch (t) {
      // Tue
      case "E":
      case "EE":
      case "EEE":
        return n.day(r, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "EEEEE":
        return n.day(r, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "EEEEEE":
        return n.day(r, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
      case "EEEE":
      default:
        return n.day(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(e, t, n, r) {
    const o = e.getDay(), s = (o - r.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case "e":
        return String(s);
      // Padded numerical value
      case "ee":
        return _(s, 2);
      // 1st, 2nd, ..., 7th
      case "eo":
        return n.ordinalNumber(s, { unit: "day" });
      case "eee":
        return n.day(o, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "eeeee":
        return n.day(o, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "eeeeee":
        return n.day(o, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
      case "eeee":
      default:
        return n.day(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(e, t, n, r) {
    const o = e.getDay(), s = (o - r.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      // Numerical value (same as in `e`)
      case "c":
        return String(s);
      // Padded numerical value
      case "cc":
        return _(s, t.length);
      // 1st, 2nd, ..., 7th
      case "co":
        return n.ordinalNumber(s, { unit: "day" });
      case "ccc":
        return n.day(o, {
          width: "abbreviated",
          context: "standalone"
        });
      // T
      case "ccccc":
        return n.day(o, {
          width: "narrow",
          context: "standalone"
        });
      // Tu
      case "cccccc":
        return n.day(o, {
          width: "short",
          context: "standalone"
        });
      // Tuesday
      case "cccc":
      default:
        return n.day(o, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(e, t, n) {
    const r = e.getDay(), o = r === 0 ? 7 : r;
    switch (t) {
      // 2
      case "i":
        return String(o);
      // 02
      case "ii":
        return _(o, t.length);
      // 2nd
      case "io":
        return n.ordinalNumber(o, { unit: "day" });
      // Tue
      case "iii":
        return n.day(r, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "iiiii":
        return n.day(r, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "iiiiii":
        return n.day(r, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
      case "iiii":
      default:
        return n.day(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(e, t, n) {
    const o = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return n.dayPeriod(o, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return n.dayPeriod(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(e, t, n) {
    const r = e.getHours();
    let o;
    switch (r === 12 ? o = ce.noon : r === 0 ? o = ce.midnight : o = r / 12 >= 1 ? "pm" : "am", t) {
      case "b":
      case "bb":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return n.dayPeriod(o, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return n.dayPeriod(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(e, t, n) {
    const r = e.getHours();
    let o;
    switch (r >= 17 ? o = ce.evening : r >= 12 ? o = ce.afternoon : r >= 4 ? o = ce.morning : o = ce.night, t) {
      case "B":
      case "BB":
      case "BBB":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return n.dayPeriod(o, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return n.dayPeriod(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(e, t, n) {
    if (t === "ho") {
      let r = e.getHours() % 12;
      return r === 0 && (r = 12), n.ordinalNumber(r, { unit: "hour" });
    }
    return te.h(e, t);
  },
  // Hour [0-23]
  H: function(e, t, n) {
    return t === "Ho" ? n.ordinalNumber(e.getHours(), { unit: "hour" }) : te.H(e, t);
  },
  // Hour [0-11]
  K: function(e, t, n) {
    const r = e.getHours() % 12;
    return t === "Ko" ? n.ordinalNumber(r, { unit: "hour" }) : _(r, t.length);
  },
  // Hour [1-24]
  k: function(e, t, n) {
    let r = e.getHours();
    return r === 0 && (r = 24), t === "ko" ? n.ordinalNumber(r, { unit: "hour" }) : _(r, t.length);
  },
  // Minute
  m: function(e, t, n) {
    return t === "mo" ? n.ordinalNumber(e.getMinutes(), { unit: "minute" }) : te.m(e, t);
  },
  // Second
  s: function(e, t, n) {
    return t === "so" ? n.ordinalNumber(e.getSeconds(), { unit: "second" }) : te.s(e, t);
  },
  // Fraction of second
  S: function(e, t) {
    return te.S(e, t);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, t, n) {
    const r = e.getTimezoneOffset();
    if (r === 0)
      return "Z";
    switch (t) {
      // Hours and optional minutes
      case "X":
        return nt(r);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`
      case "XXXX":
      case "XX":
        return re(r);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`
      case "XXXXX":
      case "XXX":
      // Hours and minutes with `:` delimiter
      default:
        return re(r, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      // Hours and optional minutes
      case "x":
        return nt(r);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`
      case "xxxx":
      case "xx":
        return re(r);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`
      case "xxxxx":
      case "xxx":
      // Hours and minutes with `:` delimiter
      default:
        return re(r, ":");
    }
  },
  // Timezone (GMT)
  O: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      // Short
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + tt(r, ":");
      // Long
      case "OOOO":
      default:
        return "GMT" + re(r, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      // Short
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + tt(r, ":");
      // Long
      case "zzzz":
      default:
        return "GMT" + re(r, ":");
    }
  },
  // Seconds timestamp
  t: function(e, t, n) {
    const r = Math.trunc(+e / 1e3);
    return _(r, t.length);
  },
  // Milliseconds timestamp
  T: function(e, t, n) {
    return _(+e, t.length);
  }
};
function tt(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = Math.trunc(r / 60), s = r % 60;
  return s === 0 ? n + String(o) : n + String(o) + t + _(s, 2);
}
function nt(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + _(Math.abs(e) / 60, 2) : re(e, t);
}
function re(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = _(Math.trunc(r / 60), 2), s = _(r % 60, 2);
  return n + o + t + s;
}
const rt = (e, t) => {
  switch (e) {
    case "P":
      return t.date({ width: "short" });
    case "PP":
      return t.date({ width: "medium" });
    case "PPP":
      return t.date({ width: "long" });
    case "PPPP":
    default:
      return t.date({ width: "full" });
  }
}, Mt = (e, t) => {
  switch (e) {
    case "p":
      return t.time({ width: "short" });
    case "pp":
      return t.time({ width: "medium" });
    case "ppp":
      return t.time({ width: "long" });
    case "pppp":
    default:
      return t.time({ width: "full" });
  }
}, gr = (e, t) => {
  const n = e.match(/(P+)(p+)?/) || [], r = n[1], o = n[2];
  if (!o)
    return rt(e, t);
  let s;
  switch (r) {
    case "P":
      s = t.dateTime({ width: "short" });
      break;
    case "PP":
      s = t.dateTime({ width: "medium" });
      break;
    case "PPP":
      s = t.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      s = t.dateTime({ width: "full" });
      break;
  }
  return s.replace("{{date}}", rt(r, t)).replace("{{time}}", Mt(o, t));
}, pr = {
  p: Mt,
  P: gr
}, wr = /^D+$/, br = /^Y+$/, Mr = ["D", "DD", "YY", "YYYY"];
function kr(e) {
  return wr.test(e);
}
function Dr(e) {
  return br.test(e);
}
function vr(e, t, n) {
  const r = Or(e, t, n);
  if (console.warn(r), Mr.includes(e)) throw new RangeError(r);
}
function Or(e, t, n) {
  const r = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const Wr = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, Sr = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, Cr = /^'([^]*?)'?$/, Nr = /''/g, xr = /[a-zA-Z]/;
function _r(e, t, n) {
  const r = ge(), o = n?.locale ?? r.locale ?? qe, s = n?.firstWeekContainsDate ?? n?.locale?.options?.firstWeekContainsDate ?? r.firstWeekContainsDate ?? r.locale?.options?.firstWeekContainsDate ?? 1, i = n?.weekStartsOn ?? n?.locale?.options?.weekStartsOn ?? r.weekStartsOn ?? r.locale?.options?.weekStartsOn ?? 0, a = T(e, n?.in);
  if (!Nn(a))
    throw new RangeError("Invalid time value");
  let c = t.match(Sr).map((l) => {
    const u = l[0];
    if (u === "p" || u === "P") {
      const h = pr[u];
      return h(l, o.formatLong);
    }
    return l;
  }).join("").match(Wr).map((l) => {
    if (l === "''")
      return { isToken: !1, value: "'" };
    const u = l[0];
    if (u === "'")
      return { isToken: !1, value: Tr(l) };
    if (et[u])
      return { isToken: !0, value: l };
    if (u.match(xr))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + u + "`"
      );
    return { isToken: !1, value: l };
  });
  o.localize.preprocessor && (c = o.localize.preprocessor(a, c));
  const d = {
    firstWeekContainsDate: s,
    weekStartsOn: i,
    locale: o
  };
  return c.map((l) => {
    if (!l.isToken) return l.value;
    const u = l.value;
    (!n?.useAdditionalWeekYearTokens && Dr(u) || !n?.useAdditionalDayOfYearTokens && kr(u)) && vr(u, t, String(e));
    const h = et[u[0]];
    return h(a, u, o.localize, d);
  }).join("");
}
function Tr(e) {
  const t = e.match(Cr);
  return t ? t[1].replace(Nr, "'") : e;
}
function Yr(e, t) {
  const n = T(e, t?.in), r = n.getFullYear(), o = n.getMonth(), s = B(n, 0);
  return s.setFullYear(r, o + 1, 0), s.setHours(0, 0, 0, 0), s.getDate();
}
function Er(e, t) {
  return T(e, t?.in).getMonth();
}
function Pr(e, t) {
  return T(e, t?.in).getFullYear();
}
function Fr(e, t) {
  return +T(e) > +T(t);
}
function Br(e, t) {
  return +T(e) < +T(t);
}
function Ir(e, t, n) {
  const [r, o] = de(
    n?.in,
    e,
    t
  );
  return r.getFullYear() === o.getFullYear() && r.getMonth() === o.getMonth();
}
function Hr(e, t, n) {
  const [r, o] = de(
    n?.in,
    e,
    t
  );
  return r.getFullYear() === o.getFullYear();
}
function qr(e, t, n) {
  const r = T(e, n?.in), o = r.getFullYear(), s = r.getDate(), i = B(e, 0);
  i.setFullYear(o, t, 15), i.setHours(0, 0, 0, 0);
  const a = Yr(i);
  return r.setMonth(t, Math.min(s, a)), r;
}
function Ar(e, t, n) {
  const r = T(e, n?.in);
  return isNaN(+r) ? B(e, NaN) : (r.setFullYear(t), r);
}
const ot = 5, jr = 4;
function zr(e, t) {
  const n = t.startOfMonth(e), r = n.getDay() > 0 ? n.getDay() : 7, o = t.addDays(e, -r + 1), s = t.addDays(o, ot * 7 - 1);
  return t.getMonth(e) === t.getMonth(s) ? ot : jr;
}
function kt(e, t) {
  const n = t.startOfMonth(e), r = n.getDay();
  return r === 1 ? n : r === 0 ? t.addDays(n, -6) : t.addDays(n, -1 * (r - 1));
}
function Rr(e, t) {
  const n = kt(e, t), r = zr(e, t);
  return t.addDays(n, r * 7 - 1);
}
class ee {
  /**
   * Creates an instance of `DateLib`.
   *
   * @param options Configuration options for the date library.
   * @param overrides Custom overrides for the date library functions.
   */
  constructor(t, n) {
    this.Date = Date, this.today = () => this.overrides?.today ? this.overrides.today() : this.options.timeZone ? H.tz(this.options.timeZone) : new this.Date(), this.newDate = (r, o, s) => this.overrides?.newDate ? this.overrides.newDate(r, o, s) : this.options.timeZone ? new H(r, o, s, this.options.timeZone) : new Date(r, o, s), this.addDays = (r, o) => this.overrides?.addDays ? this.overrides.addDays(r, o) : dt(r, o), this.addMonths = (r, o) => this.overrides?.addMonths ? this.overrides.addMonths(r, o) : lt(r, o), this.addWeeks = (r, o) => this.overrides?.addWeeks ? this.overrides.addWeeks(r, o) : vn(r, o), this.addYears = (r, o) => this.overrides?.addYears ? this.overrides.addYears(r, o) : On(r, o), this.differenceInCalendarDays = (r, o) => this.overrides?.differenceInCalendarDays ? this.overrides.differenceInCalendarDays(r, o) : ht(r, o), this.differenceInCalendarMonths = (r, o) => this.overrides?.differenceInCalendarMonths ? this.overrides.differenceInCalendarMonths(r, o) : xn(r, o), this.eachMonthOfInterval = (r) => this.overrides?.eachMonthOfInterval ? this.overrides.eachMonthOfInterval(r) : Yn(r), this.endOfBroadcastWeek = (r) => this.overrides?.endOfBroadcastWeek ? this.overrides.endOfBroadcastWeek(r) : Rr(r, this), this.endOfISOWeek = (r) => this.overrides?.endOfISOWeek ? this.overrides.endOfISOWeek(r) : Fn(r), this.endOfMonth = (r) => this.overrides?.endOfMonth ? this.overrides.endOfMonth(r) : _n(r), this.endOfWeek = (r, o) => this.overrides?.endOfWeek ? this.overrides.endOfWeek(r, o) : gt(r, this.options), this.endOfYear = (r) => this.overrides?.endOfYear ? this.overrides.endOfYear(r) : Pn(r), this.format = (r, o, s) => {
      const i = this.overrides?.format ? this.overrides.format(r, o, this.options) : _r(r, o, this.options);
      return this.options.numerals && this.options.numerals !== "latn" ? this.replaceDigits(i) : i;
    }, this.getISOWeek = (r) => this.overrides?.getISOWeek ? this.overrides.getISOWeek(r) : pt(r), this.getMonth = (r, o) => this.overrides?.getMonth ? this.overrides.getMonth(r, this.options) : Er(r, this.options), this.getYear = (r, o) => this.overrides?.getYear ? this.overrides.getYear(r, this.options) : Pr(r, this.options), this.getWeek = (r, o) => this.overrides?.getWeek ? this.overrides.getWeek(r, this.options) : bt(r, this.options), this.isAfter = (r, o) => this.overrides?.isAfter ? this.overrides.isAfter(r, o) : Fr(r, o), this.isBefore = (r, o) => this.overrides?.isBefore ? this.overrides.isBefore(r, o) : Br(r, o), this.isDate = (r) => this.overrides?.isDate ? this.overrides.isDate(r) : mt(r), this.isSameDay = (r, o) => this.overrides?.isSameDay ? this.overrides.isSameDay(r, o) : Cn(r, o), this.isSameMonth = (r, o) => this.overrides?.isSameMonth ? this.overrides.isSameMonth(r, o) : Ir(r, o), this.isSameYear = (r, o) => this.overrides?.isSameYear ? this.overrides.isSameYear(r, o) : Hr(r, o), this.max = (r) => this.overrides?.max ? this.overrides.max(r) : Wn(r), this.min = (r) => this.overrides?.min ? this.overrides.min(r) : Sn(r), this.setMonth = (r, o) => this.overrides?.setMonth ? this.overrides.setMonth(r, o) : qr(r, o), this.setYear = (r, o) => this.overrides?.setYear ? this.overrides.setYear(r, o) : Ar(r, o), this.startOfBroadcastWeek = (r, o) => this.overrides?.startOfBroadcastWeek ? this.overrides.startOfBroadcastWeek(r, this) : kt(r, this), this.startOfDay = (r) => this.overrides?.startOfDay ? this.overrides.startOfDay(r) : ye(r), this.startOfISOWeek = (r) => this.overrides?.startOfISOWeek ? this.overrides.startOfISOWeek(r) : me(r), this.startOfMonth = (r) => this.overrides?.startOfMonth ? this.overrides.startOfMonth(r) : En(r), this.startOfWeek = (r, o) => this.overrides?.startOfWeek ? this.overrides.startOfWeek(r, this.options) : ue(r, this.options), this.startOfYear = (r) => this.overrides?.startOfYear ? this.overrides.startOfYear(r) : yt(r), this.options = { locale: qe, ...t }, this.overrides = n;
  }
  /**
   * Generates a mapping of Arabic digits (0-9) to the target numbering system
   * digits.
   *
   * @since 9.5.0
   * @returns A record mapping Arabic digits to the target numerals.
   */
  getDigitMap() {
    const { numerals: t = "latn" } = this.options, n = new Intl.NumberFormat("en-US", {
      numberingSystem: t
    }), r = {};
    for (let o = 0; o < 10; o++)
      r[o.toString()] = n.format(o);
    return r;
  }
  /**
   * Replaces Arabic digits in a string with the target numbering system digits.
   *
   * @since 9.5.0
   * @param input The string containing Arabic digits.
   * @returns The string with digits replaced.
   */
  replaceDigits(t) {
    const n = this.getDigitMap();
    return t.replace(/\d/g, (r) => n[r] || r);
  }
  /**
   * Formats a number using the configured numbering system.
   *
   * @since 9.5.0
   * @param value The number to format.
   * @returns The formatted number as a string.
   */
  formatNumber(t) {
    return this.replaceDigits(t.toString());
  }
}
const U = new ee();
class Dt {
  constructor(t, n, r = U) {
    this.date = t, this.displayMonth = n, this.outside = !!(n && !r.isSameMonth(t, n)), this.dateLib = r;
  }
  /**
   * Checks if this day is equal to another `CalendarDay`, considering both the
   * date and the displayed month.
   *
   * @param day The `CalendarDay` to compare with.
   * @returns `true` if the days are equal, otherwise `false`.
   */
  isEqualTo(t) {
    return this.dateLib.isSameDay(t.date, this.date) && this.dateLib.isSameMonth(t.displayMonth, this.displayMonth);
  }
}
class $r {
  constructor(t, n) {
    this.date = t, this.weeks = n;
  }
}
class Zr {
  constructor(t, n) {
    this.days = n, this.weekNumber = t;
  }
}
function Gr(e) {
  return f.createElement("button", { ...e });
}
function Qr(e) {
  return f.createElement("span", { ...e });
}
function Lr(e) {
  const { size: t = 24, orientation: n = "left", className: r } = e;
  return (
    // biome-ignore lint/a11y/noSvgWithoutTitle: handled by the parent component
    f.createElement(
      "svg",
      { className: r, width: t, height: t, viewBox: "0 0 24 24" },
      n === "up" && f.createElement("polygon", { points: "6.77 17 12.5 11.43 18.24 17 20 15.28 12.5 8 5 15.28" }),
      n === "down" && f.createElement("polygon", { points: "6.77 8 12.5 13.57 18.24 8 20 9.72 12.5 17 5 9.72" }),
      n === "left" && f.createElement("polygon", { points: "16 18.112 9.81111111 12 16 5.87733333 14.0888889 4 6 12 14.0888889 20" }),
      n === "right" && f.createElement("polygon", { points: "8 18.112 14.18888889 12 8 5.87733333 9.91111111 4 18 12 9.91111111 20" })
    )
  );
}
function Xr(e) {
  const { day: t, modifiers: n, ...r } = e;
  return f.createElement("td", { ...r });
}
function Ur(e) {
  const { day: t, modifiers: n, ...r } = e, o = f.useRef(null);
  return f.useEffect(() => {
    n.focused && o.current?.focus();
  }, [n.focused]), f.createElement("button", { ref: o, ...r });
}
var m;
(function(e) {
  e.Root = "root", e.Chevron = "chevron", e.Day = "day", e.DayButton = "day_button", e.CaptionLabel = "caption_label", e.Dropdowns = "dropdowns", e.Dropdown = "dropdown", e.DropdownRoot = "dropdown_root", e.Footer = "footer", e.MonthGrid = "month_grid", e.MonthCaption = "month_caption", e.MonthsDropdown = "months_dropdown", e.Month = "month", e.Months = "months", e.Nav = "nav", e.NextMonthButton = "button_next", e.PreviousMonthButton = "button_previous", e.Week = "week", e.Weeks = "weeks", e.Weekday = "weekday", e.Weekdays = "weekdays", e.WeekNumber = "week_number", e.WeekNumberHeader = "week_number_header", e.YearsDropdown = "years_dropdown";
})(m || (m = {}));
var F;
(function(e) {
  e.disabled = "disabled", e.hidden = "hidden", e.outside = "outside", e.focused = "focused", e.today = "today";
})(F || (F = {}));
var Q;
(function(e) {
  e.range_end = "range_end", e.range_middle = "range_middle", e.range_start = "range_start", e.selected = "selected";
})(Q || (Q = {}));
var j;
(function(e) {
  e.weeks_before_enter = "weeks_before_enter", e.weeks_before_exit = "weeks_before_exit", e.weeks_after_enter = "weeks_after_enter", e.weeks_after_exit = "weeks_after_exit", e.caption_after_enter = "caption_after_enter", e.caption_after_exit = "caption_after_exit", e.caption_before_enter = "caption_before_enter", e.caption_before_exit = "caption_before_exit";
})(j || (j = {}));
function Vr(e) {
  const { options: t, className: n, components: r, classNames: o, ...s } = e, i = [o[m.Dropdown], n].join(" "), a = t?.find(({ value: c }) => c === s.value);
  return f.createElement(
    "span",
    { "data-disabled": s.disabled, className: o[m.DropdownRoot] },
    f.createElement(r.Select, { className: i, ...s }, t?.map(({ value: c, label: d, disabled: l }) => f.createElement(r.Option, { key: c, value: c, disabled: l }, d))),
    f.createElement(
      "span",
      { className: o[m.CaptionLabel], "aria-hidden": !0 },
      a?.label,
      f.createElement(r.Chevron, { orientation: "down", size: 18, className: o[m.Chevron] })
    )
  );
}
function Kr(e) {
  return f.createElement("div", { ...e });
}
function Jr(e) {
  return f.createElement("div", { ...e });
}
function eo(e) {
  const { calendarMonth: t, displayIndex: n, ...r } = e;
  return f.createElement("div", { ...r }, e.children);
}
function to(e) {
  const { calendarMonth: t, displayIndex: n, ...r } = e;
  return f.createElement("div", { ...r });
}
function no(e) {
  return f.createElement("table", { ...e });
}
function ro(e) {
  return f.createElement("div", { ...e });
}
const vt = cn(void 0);
function pe() {
  const e = un(vt);
  if (e === void 0)
    throw new Error("useDayPicker() must be used within a custom component.");
  return e;
}
function oo(e) {
  const { components: t } = pe();
  return f.createElement(t.Dropdown, { ...e });
}
function so(e) {
  const { onPreviousClick: t, onNextClick: n, previousMonth: r, nextMonth: o, ...s } = e, { components: i, classNames: a, labels: { labelPrevious: c, labelNext: d } } = pe(), l = R((h) => {
    o && n?.(h);
  }, [o, n]), u = R((h) => {
    r && t?.(h);
  }, [r, t]);
  return f.createElement(
    "nav",
    { ...s },
    f.createElement(
      i.PreviousMonthButton,
      { type: "button", className: a[m.PreviousMonthButton], tabIndex: r ? void 0 : -1, "aria-disabled": r ? void 0 : !0, "aria-label": c(r), onClick: u },
      f.createElement(i.Chevron, { disabled: r ? void 0 : !0, className: a[m.Chevron], orientation: "left" })
    ),
    f.createElement(
      i.NextMonthButton,
      { type: "button", className: a[m.NextMonthButton], tabIndex: o ? void 0 : -1, "aria-disabled": o ? void 0 : !0, "aria-label": d(o), onClick: l },
      f.createElement(i.Chevron, { disabled: o ? void 0 : !0, orientation: "right", className: a[m.Chevron] })
    )
  );
}
function ao(e) {
  const { components: t } = pe();
  return f.createElement(t.Button, { ...e });
}
function io(e) {
  return f.createElement("option", { ...e });
}
function co(e) {
  const { components: t } = pe();
  return f.createElement(t.Button, { ...e });
}
function uo(e) {
  const { rootRef: t, ...n } = e;
  return f.createElement("div", { ...n, ref: t });
}
function lo(e) {
  return f.createElement("select", { ...e });
}
function fo(e) {
  const { week: t, ...n } = e;
  return f.createElement("tr", { ...n });
}
function ho(e) {
  return f.createElement("th", { ...e });
}
function mo(e) {
  return f.createElement(
    "thead",
    { "aria-hidden": !0 },
    f.createElement("tr", { ...e })
  );
}
function yo(e) {
  const { week: t, ...n } = e;
  return f.createElement("th", { ...n });
}
function go(e) {
  return f.createElement("th", { ...e });
}
function po(e) {
  return f.createElement("tbody", { ...e });
}
function wo(e) {
  const { components: t } = pe();
  return f.createElement(t.Dropdown, { ...e });
}
const bo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button: Gr,
  CaptionLabel: Qr,
  Chevron: Lr,
  Day: Xr,
  DayButton: Ur,
  Dropdown: Vr,
  DropdownNav: Kr,
  Footer: Jr,
  Month: eo,
  MonthCaption: to,
  MonthGrid: no,
  Months: ro,
  MonthsDropdown: oo,
  Nav: so,
  NextMonthButton: ao,
  Option: io,
  PreviousMonthButton: co,
  Root: uo,
  Select: lo,
  Week: fo,
  WeekNumber: yo,
  WeekNumberHeader: go,
  Weekday: ho,
  Weekdays: mo,
  Weeks: po,
  YearsDropdown: wo
}, Symbol.toStringTag, { value: "Module" }));
function K(e, t, n = !1, r = U) {
  let { from: o, to: s } = e;
  const { differenceInCalendarDays: i, isSameDay: a } = r;
  return o && s ? (i(s, o) < 0 && ([o, s] = [s, o]), i(t, o) >= (n ? 1 : 0) && i(s, t) >= (n ? 1 : 0)) : !n && s ? a(s, t) : !n && o ? a(o, t) : !1;
}
function Ot(e) {
  return !!(e && typeof e == "object" && "before" in e && "after" in e);
}
function Ae(e) {
  return !!(e && typeof e == "object" && "from" in e);
}
function Wt(e) {
  return !!(e && typeof e == "object" && "after" in e);
}
function St(e) {
  return !!(e && typeof e == "object" && "before" in e);
}
function Ct(e) {
  return !!(e && typeof e == "object" && "dayOfWeek" in e);
}
function Nt(e, t) {
  return Array.isArray(e) && e.every(t.isDate);
}
function J(e, t, n = U) {
  const r = Array.isArray(t) ? t : [t], { isSameDay: o, differenceInCalendarDays: s, isAfter: i } = n;
  return r.some((a) => {
    if (typeof a == "boolean")
      return a;
    if (n.isDate(a))
      return o(e, a);
    if (Nt(a, n))
      return a.includes(e);
    if (Ae(a))
      return K(a, e, !1, n);
    if (Ct(a))
      return Array.isArray(a.dayOfWeek) ? a.dayOfWeek.includes(e.getDay()) : a.dayOfWeek === e.getDay();
    if (Ot(a)) {
      const c = s(a.before, e), d = s(a.after, e), l = c > 0, u = d < 0;
      return i(a.before, a.after) ? u && l : l || u;
    }
    return Wt(a) ? s(e, a.after) > 0 : St(a) ? s(a.before, e) > 0 : typeof a == "function" ? a(e) : !1;
  });
}
function Mo(e, t, n, r, o) {
  const { disabled: s, hidden: i, modifiers: a, showOutsideDays: c, broadcastCalendar: d, today: l } = t, { isSameDay: u, isSameMonth: h, startOfMonth: g, isBefore: p, endOfMonth: O, isAfter: w } = o, W = n && g(n), x = r && O(r), b = {
    [F.focused]: [],
    [F.outside]: [],
    [F.disabled]: [],
    [F.hidden]: [],
    [F.today]: []
  }, Y = {};
  for (const y of e) {
    const { date: k, displayMonth: M } = y, C = !!(M && !h(k, M)), I = !!(W && p(k, W)), q = !!(x && w(k, x)), A = !!(s && J(k, s, o)), $ = !!(i && J(k, i, o)) || I || q || // Broadcast calendar will show outside days as default
    !d && !c && C || d && c === !1 && C, se = u(k, l ?? o.today());
    C && b.outside.push(y), A && b.disabled.push(y), $ && b.hidden.push(y), se && b.today.push(y), a && Object.keys(a).forEach((ae) => {
      const ie = a?.[ae];
      ie && J(k, ie, o) && (Y[ae] ? Y[ae].push(y) : Y[ae] = [y]);
    });
  }
  return (y) => {
    const k = {
      [F.focused]: !1,
      [F.disabled]: !1,
      [F.hidden]: !1,
      [F.outside]: !1,
      [F.today]: !1
    }, M = {};
    for (const C in b) {
      const I = b[C];
      k[C] = I.some((q) => q === y);
    }
    for (const C in Y)
      M[C] = Y[C].some((I) => I === y);
    return {
      ...k,
      // custom modifiers should override all the previous ones
      ...M
    };
  };
}
function ko(e, t, n = {}) {
  return Object.entries(e).filter(([, o]) => o === !0).reduce((o, [s]) => (n[s] ? o.push(n[s]) : t[F[s]] ? o.push(t[F[s]]) : t[Q[s]] && o.push(t[Q[s]]), o), [t[m.Day]]);
}
function Do(e) {
  return {
    ...bo,
    ...e
  };
}
function vo(e) {
  const t = {
    "data-mode": e.mode ?? void 0,
    "data-required": "required" in e ? e.required : void 0,
    "data-multiple-months": e.numberOfMonths && e.numberOfMonths > 1 || void 0,
    "data-week-numbers": e.showWeekNumber || void 0,
    "data-broadcast-calendar": e.broadcastCalendar || void 0,
    "data-nav-layout": e.navLayout || void 0
  };
  return Object.entries(e).forEach(([n, r]) => {
    n.startsWith("data-") && (t[n] = r);
  }), t;
}
function je() {
  const e = {};
  for (const t in m)
    e[m[t]] = `rdp-${m[t]}`;
  for (const t in F)
    e[F[t]] = `rdp-${F[t]}`;
  for (const t in Q)
    e[Q[t]] = `rdp-${Q[t]}`;
  for (const t in j)
    e[j[t]] = `rdp-${j[t]}`;
  return e;
}
function xt(e, t, n) {
  return (n ?? new ee(t)).format(e, "LLLL y");
}
const Oo = xt;
function Wo(e, t, n) {
  return (n ?? new ee(t)).format(e, "d");
}
function So(e, t = U) {
  return t.format(e, "LLLL");
}
function Co(e, t, n) {
  return (n ?? new ee(t)).format(e, "cccccc");
}
function No(e, t = U) {
  return e < 10 ? t.formatNumber(`0${e.toLocaleString()}`) : t.formatNumber(`${e.toLocaleString()}`);
}
function xo() {
  return "";
}
function _t(e, t = U) {
  return t.format(e, "yyyy");
}
const _o = _t, To = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  formatCaption: xt,
  formatDay: Wo,
  formatMonthCaption: Oo,
  formatMonthDropdown: So,
  formatWeekNumber: No,
  formatWeekNumberHeader: xo,
  formatWeekdayName: Co,
  formatYearCaption: _o,
  formatYearDropdown: _t
}, Symbol.toStringTag, { value: "Module" }));
function Yo(e) {
  return e?.formatMonthCaption && !e.formatCaption && (e.formatCaption = e.formatMonthCaption), e?.formatYearCaption && !e.formatYearDropdown && (e.formatYearDropdown = e.formatYearCaption), {
    ...To,
    ...e
  };
}
function Eo(e, t, n, r, o) {
  const { startOfMonth: s, startOfYear: i, endOfYear: a, eachMonthOfInterval: c, getMonth: d } = o;
  return c({
    start: i(e),
    end: a(e)
  }).map((h) => {
    const g = r.formatMonthDropdown(h, o), p = d(h), O = t && h < s(t) || n && h > s(n) || !1;
    return { value: p, label: g, disabled: O };
  });
}
function Po(e, t = {}, n = {}) {
  let r = { ...t?.[m.Day] };
  return Object.entries(e).filter(([, o]) => o === !0).forEach(([o]) => {
    r = {
      ...r,
      ...n?.[o]
    };
  }), r;
}
function Fo(e, t, n) {
  const r = e.today(), o = t ? e.startOfISOWeek(r) : e.startOfWeek(r), s = [];
  for (let i = 0; i < 7; i++) {
    const a = e.addDays(o, i);
    s.push(a);
  }
  return s;
}
function Bo(e, t, n, r, o = !1) {
  if (!e || !t)
    return;
  const { startOfYear: s, endOfYear: i, addYears: a, getYear: c, isBefore: d, isSameYear: l } = r, u = s(e), h = i(t), g = [];
  let p = u;
  for (; d(p, h) || l(p, h); )
    g.push(p), p = a(p, 1);
  return o && g.reverse(), g.map((O) => {
    const w = n.formatYearDropdown(O, r);
    return {
      value: c(O),
      label: w,
      disabled: !1
    };
  });
}
function Tt(e, t, n, r) {
  let o = (r ?? new ee(n)).format(e, "PPPP");
  return t.today && (o = `Today, ${o}`), t.selected && (o = `${o}, selected`), o;
}
const Io = Tt;
function Yt(e, t, n) {
  return (n ?? new ee(t)).format(e, "LLLL y");
}
const Ho = Yt;
function qo(e, t, n, r) {
  let o = (r ?? new ee(n)).format(e, "PPPP");
  return t?.today && (o = `Today, ${o}`), o;
}
function Ao(e) {
  return "Choose the Month";
}
function jo() {
  return "";
}
function zo(e) {
  return "Go to the Next Month";
}
function Ro(e) {
  return "Go to the Previous Month";
}
function $o(e, t, n) {
  return (n ?? new ee(t)).format(e, "cccc");
}
function Zo(e, t) {
  return `Week ${e}`;
}
function Go(e) {
  return "Week Number";
}
function Qo(e) {
  return "Choose the Year";
}
const Lo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  labelCaption: Ho,
  labelDay: Io,
  labelDayButton: Tt,
  labelGrid: Yt,
  labelGridcell: qo,
  labelMonthDropdown: Ao,
  labelNav: jo,
  labelNext: zo,
  labelPrevious: Ro,
  labelWeekNumber: Zo,
  labelWeekNumberHeader: Go,
  labelWeekday: $o,
  labelYearDropdown: Qo
}, Symbol.toStringTag, { value: "Module" })), we = (e) => e instanceof HTMLElement ? e : null, Pe = (e) => [
  ...e.querySelectorAll("[data-animated-month]") ?? []
], Xo = (e) => we(e.querySelector("[data-animated-month]")), Fe = (e) => we(e.querySelector("[data-animated-caption]")), Be = (e) => we(e.querySelector("[data-animated-weeks]")), Uo = (e) => we(e.querySelector("[data-animated-nav]")), Vo = (e) => we(e.querySelector("[data-animated-weekdays]"));
function Ko(e, t, { classNames: n, months: r, focused: o, dateLib: s }) {
  const i = De(null), a = De(r), c = De(!1);
  dn(() => {
    const d = a.current;
    if (a.current = r, !t || !e.current || // safety check because the ref can be set to anything by consumers
    !(e.current instanceof HTMLElement) || // validation required for the animation to work as expected
    r.length === 0 || d.length === 0 || r.length !== d.length)
      return;
    const l = s.isSameMonth(r[0].date, d[0].date), u = s.isAfter(r[0].date, d[0].date), h = u ? n[j.caption_after_enter] : n[j.caption_before_enter], g = u ? n[j.weeks_after_enter] : n[j.weeks_before_enter], p = i.current, O = e.current.cloneNode(!0);
    if (O instanceof HTMLElement ? (Pe(O).forEach((b) => {
      if (!(b instanceof HTMLElement))
        return;
      const Y = Xo(b);
      Y && b.contains(Y) && b.removeChild(Y);
      const y = Fe(b);
      y && y.classList.remove(h);
      const k = Be(b);
      k && k.classList.remove(g);
    }), i.current = O) : i.current = null, c.current || l || // skip animation if a day is focused because it can cause issues to the animation and is better for a11y
    o)
      return;
    const w = p instanceof HTMLElement ? Pe(p) : [], W = Pe(e.current);
    if (W?.every((x) => x instanceof HTMLElement) && w && w.every((x) => x instanceof HTMLElement)) {
      c.current = !0, e.current.style.isolation = "isolate";
      const x = Uo(e.current);
      x && (x.style.zIndex = "1"), W.forEach((b, Y) => {
        const y = w[Y];
        if (!y)
          return;
        b.style.position = "relative", b.style.overflow = "hidden";
        const k = Fe(b);
        k && k.classList.add(h);
        const M = Be(b);
        M && M.classList.add(g);
        const C = () => {
          c.current = !1, e.current && (e.current.style.isolation = ""), x && (x.style.zIndex = ""), k && k.classList.remove(h), M && M.classList.remove(g), b.style.position = "", b.style.overflow = "", b.contains(y) && b.removeChild(y);
        };
        y.style.pointerEvents = "none", y.style.position = "absolute", y.style.overflow = "hidden", y.setAttribute("aria-hidden", "true");
        const I = Vo(y);
        I && (I.style.opacity = "0");
        const q = Fe(y);
        q && (q.classList.add(u ? n[j.caption_before_exit] : n[j.caption_after_exit]), q.addEventListener("animationend", C));
        const A = Be(y);
        A && A.classList.add(u ? n[j.weeks_before_exit] : n[j.weeks_after_exit]), b.insertBefore(y, b.firstChild);
      });
    }
  });
}
function Jo(e, t, n, r) {
  const o = e[0], s = e[e.length - 1], { ISOWeek: i, fixedWeeks: a, broadcastCalendar: c } = n ?? {}, { addDays: d, differenceInCalendarDays: l, differenceInCalendarMonths: u, endOfBroadcastWeek: h, endOfISOWeek: g, endOfMonth: p, endOfWeek: O, isAfter: w, startOfBroadcastWeek: W, startOfISOWeek: x, startOfWeek: b } = r, Y = c ? W(o, r) : i ? x(o) : b(o), y = c ? h(s) : i ? g(p(s)) : O(p(s)), k = l(y, Y), M = u(s, o) + 1, C = [];
  for (let A = 0; A <= k; A++) {
    const $ = d(Y, A);
    if (t && w($, t))
      break;
    C.push($);
  }
  const q = (c ? 35 : 42) * M;
  if (a && C.length < q) {
    const A = q - C.length;
    for (let $ = 0; $ < A; $++) {
      const se = d(C[C.length - 1], 1);
      C.push(se);
    }
  }
  return C;
}
function es(e) {
  const t = [];
  return e.reduce((n, r) => {
    const o = r.weeks.reduce((s, i) => s.concat(i.days.slice()), t.slice());
    return n.concat(o.slice());
  }, t.slice());
}
function ts(e, t, n, r) {
  const { numberOfMonths: o = 1 } = n, s = [];
  for (let i = 0; i < o; i++) {
    const a = r.addMonths(e, i);
    if (t && a > t)
      break;
    s.push(a);
  }
  return s;
}
function st(e, t, n, r) {
  const { month: o, defaultMonth: s, today: i = r.today(), numberOfMonths: a = 1 } = e;
  let c = o || s || i;
  const { differenceInCalendarMonths: d, addMonths: l, startOfMonth: u } = r;
  if (n && d(n, c) < a - 1) {
    const h = -1 * (a - 1);
    c = l(n, h);
  }
  return t && d(c, t) < 0 && (c = t), u(c);
}
function ns(e, t, n, r) {
  const { addDays: o, endOfBroadcastWeek: s, endOfISOWeek: i, endOfMonth: a, endOfWeek: c, getISOWeek: d, getWeek: l, startOfBroadcastWeek: u, startOfISOWeek: h, startOfWeek: g } = r, p = e.reduce((O, w) => {
    const W = n.broadcastCalendar ? u(w, r) : n.ISOWeek ? h(w) : g(w), x = n.broadcastCalendar ? s(w) : n.ISOWeek ? i(a(w)) : c(a(w)), b = t.filter((M) => M >= W && M <= x), Y = n.broadcastCalendar ? 35 : 42;
    if (n.fixedWeeks && b.length < Y) {
      const M = t.filter((C) => {
        const I = Y - b.length;
        return C > x && C <= o(x, I);
      });
      b.push(...M);
    }
    const y = b.reduce((M, C) => {
      const I = n.ISOWeek ? d(C) : l(C), q = M.find(($) => $.weekNumber === I), A = new Dt(C, w, r);
      return q ? q.days.push(A) : M.push(new Zr(I, [A])), M;
    }, []), k = new $r(w, y);
    return O.push(k), O;
  }, []);
  return n.reverseMonths ? p.reverse() : p;
}
function rs(e, t) {
  let { startMonth: n, endMonth: r } = e;
  const { startOfYear: o, startOfDay: s, startOfMonth: i, endOfMonth: a, addYears: c, endOfYear: d, newDate: l, today: u } = t, { fromYear: h, toYear: g, fromMonth: p, toMonth: O } = e;
  !n && p && (n = p), !n && h && (n = t.newDate(h, 0, 1)), !r && O && (r = O), !r && g && (r = l(g, 11, 31));
  const w = e.captionLayout === "dropdown" || e.captionLayout === "dropdown-years";
  return n ? n = i(n) : h ? n = l(h, 0, 1) : !n && w && (n = o(c(e.today ?? u(), -100))), r ? r = a(r) : g ? r = l(g, 11, 31) : !r && w && (r = d(e.today ?? u())), [
    n && s(n),
    r && s(r)
  ];
}
function os(e, t, n, r) {
  if (n.disableNavigation)
    return;
  const { pagedNavigation: o, numberOfMonths: s = 1 } = n, { startOfMonth: i, addMonths: a, differenceInCalendarMonths: c } = r, d = o ? s : 1, l = i(e);
  if (!t)
    return a(l, d);
  if (!(c(t, e) < s))
    return a(l, d);
}
function ss(e, t, n, r) {
  if (n.disableNavigation)
    return;
  const { pagedNavigation: o, numberOfMonths: s } = n, { startOfMonth: i, addMonths: a, differenceInCalendarMonths: c } = r, d = o ? s ?? 1 : 1, l = i(e);
  if (!t)
    return a(l, -d);
  if (!(c(l, t) <= 0))
    return a(l, -d);
}
function as(e) {
  const t = [];
  return e.reduce((n, r) => n.concat(r.weeks.slice()), t.slice());
}
function ve(e, t) {
  const [n, r] = Ie(e);
  return [t === void 0 ? n : t, r];
}
function is(e, t) {
  const [n, r] = rs(e, t), { startOfMonth: o, endOfMonth: s } = t, i = st(e, n, r, t), [a, c] = ve(
    i,
    // initialMonth is always computed from props.month if provided
    e.month ? i : void 0
  );
  ln(() => {
    const k = st(e, n, r, t);
    c(k);
  }, [e.timeZone]);
  const d = ts(a, r, e, t), l = Jo(d, e.endMonth ? s(e.endMonth) : void 0, e, t), u = ns(d, l, e, t), h = as(u), g = es(u), p = ss(a, n, e, t), O = os(a, r, e, t), { disableNavigation: w, onMonthChange: W } = e, x = (k) => h.some((M) => M.days.some((C) => C.isEqualTo(k))), b = (k) => {
    if (w)
      return;
    let M = o(k);
    n && M < o(n) && (M = o(n)), r && M > o(r) && (M = o(r)), c(M), W?.(M);
  };
  return {
    months: u,
    weeks: h,
    days: g,
    navStart: n,
    navEnd: r,
    previousMonth: p,
    nextMonth: O,
    goToMonth: b,
    goToDay: (k) => {
      x(k) || b(k.date);
    }
  };
}
var L;
(function(e) {
  e[e.Today = 0] = "Today", e[e.Selected = 1] = "Selected", e[e.LastFocused = 2] = "LastFocused", e[e.FocusedModifier = 3] = "FocusedModifier";
})(L || (L = {}));
function at(e) {
  return !e[F.disabled] && !e[F.hidden] && !e[F.outside];
}
function cs(e, t, n, r) {
  let o, s = -1;
  for (const i of e) {
    const a = t(i);
    at(a) && (a[F.focused] && s < L.FocusedModifier ? (o = i, s = L.FocusedModifier) : r?.isEqualTo(i) && s < L.LastFocused ? (o = i, s = L.LastFocused) : n(i.date) && s < L.Selected ? (o = i, s = L.Selected) : a[F.today] && s < L.Today && (o = i, s = L.Today));
  }
  return o || (o = e.find((i) => at(t(i)))), o;
}
function us(e, t, n, r, o, s, i) {
  const { ISOWeek: a, broadcastCalendar: c } = s, { addDays: d, addMonths: l, addWeeks: u, addYears: h, endOfBroadcastWeek: g, endOfISOWeek: p, endOfWeek: O, max: w, min: W, startOfBroadcastWeek: x, startOfISOWeek: b, startOfWeek: Y } = i;
  let k = {
    day: d,
    week: u,
    month: l,
    year: h,
    startOfWeek: (M) => c ? x(M, i) : a ? b(M) : Y(M),
    endOfWeek: (M) => c ? g(M) : a ? p(M) : O(M)
  }[e](n, t === "after" ? 1 : -1);
  return t === "before" && r ? k = w([r, k]) : t === "after" && o && (k = W([o, k])), k;
}
function Et(e, t, n, r, o, s, i, a = 0) {
  if (a > 365)
    return;
  const c = us(e, t, n.date, r, o, s, i), d = !!(s.disabled && J(c, s.disabled, i)), l = !!(s.hidden && J(c, s.hidden, i)), u = c, h = new Dt(c, u, i);
  return !d && !l ? h : Et(e, t, h, r, o, s, i, a + 1);
}
function ds(e, t, n, r, o) {
  const { autoFocus: s } = e, [i, a] = Ie(), c = cs(t.days, n, r || (() => !1), i), [d, l] = Ie(s ? c : void 0);
  return {
    isFocusTarget: (O) => !!c?.isEqualTo(O),
    setFocused: l,
    focused: d,
    blur: () => {
      a(d), l(void 0);
    },
    moveFocus: (O, w) => {
      if (!d)
        return;
      const W = Et(O, w, d, t.navStart, t.navEnd, e, o);
      W && (t.goToDay(W), l(W));
    }
  };
}
function ls(e, t) {
  const { selected: n, required: r, onSelect: o } = e, [s, i] = ve(n, o ? n : void 0), a = o ? n : s, { isSameDay: c } = t, d = (g) => a?.some((p) => c(p, g)) ?? !1, { min: l, max: u } = e;
  return {
    selected: a,
    select: (g, p, O) => {
      let w = [...a ?? []];
      if (d(g)) {
        if (a?.length === l || r && a?.length === 1)
          return;
        w = a?.filter((W) => !c(W, g));
      } else
        a?.length === u ? w = [g] : w = [...w, g];
      return o || i(w), o?.(w, g, p, O), w;
    },
    isSelected: d
  };
}
function fs(e, t, n = 0, r = 0, o = !1, s = U) {
  const { from: i, to: a } = t || {}, { isSameDay: c, isAfter: d, isBefore: l } = s;
  let u;
  if (!i && !a)
    u = { from: e, to: n > 0 ? void 0 : e };
  else if (i && !a)
    c(i, e) ? n === 0 ? u = { from: i, to: e } : o ? u = { from: i, to: void 0 } : u = void 0 : l(e, i) ? u = { from: e, to: i } : u = { from: i, to: e };
  else if (i && a)
    if (c(i, e) && c(a, e))
      o ? u = { from: i, to: a } : u = void 0;
    else if (c(i, e))
      u = { from: i, to: n > 0 ? void 0 : e };
    else if (c(a, e))
      u = { from: e, to: n > 0 ? void 0 : e };
    else if (l(e, i))
      u = { from: e, to: a };
    else if (d(e, i))
      u = { from: i, to: e };
    else if (d(e, a))
      u = { from: i, to: e };
    else
      throw new Error("Invalid range");
  if (u?.from && u?.to) {
    const h = s.differenceInCalendarDays(u.to, u.from);
    r > 0 && h > r ? u = { from: e, to: void 0 } : n > 1 && h < n && (u = { from: e, to: void 0 });
  }
  return u;
}
function hs(e, t, n = U) {
  const r = Array.isArray(t) ? t : [t];
  let o = e.from;
  const s = n.differenceInCalendarDays(e.to, e.from), i = Math.min(s, 6);
  for (let a = 0; a <= i; a++) {
    if (r.includes(o.getDay()))
      return !0;
    o = n.addDays(o, 1);
  }
  return !1;
}
function it(e, t, n = U) {
  return K(e, t.from, !1, n) || K(e, t.to, !1, n) || K(t, e.from, !1, n) || K(t, e.to, !1, n);
}
function ms(e, t, n = U) {
  const r = Array.isArray(t) ? t : [t];
  if (r.filter((a) => typeof a != "function").some((a) => typeof a == "boolean" ? a : n.isDate(a) ? K(e, a, !1, n) : Nt(a, n) ? a.some((c) => K(e, c, !1, n)) : Ae(a) ? a.from && a.to ? it(e, { from: a.from, to: a.to }, n) : !1 : Ct(a) ? hs(e, a.dayOfWeek, n) : Ot(a) ? n.isAfter(a.before, a.after) ? it(e, {
    from: n.addDays(a.after, 1),
    to: n.addDays(a.before, -1)
  }, n) : J(e.from, a, n) || J(e.to, a, n) : Wt(a) || St(a) ? J(e.from, a, n) || J(e.to, a, n) : !1))
    return !0;
  const i = r.filter((a) => typeof a == "function");
  if (i.length) {
    let a = e.from;
    const c = n.differenceInCalendarDays(e.to, e.from);
    for (let d = 0; d <= c; d++) {
      if (i.some((l) => l(a)))
        return !0;
      a = n.addDays(a, 1);
    }
  }
  return !1;
}
function ys(e, t) {
  const { disabled: n, excludeDisabled: r, selected: o, required: s, onSelect: i } = e, [a, c] = ve(o, i ? o : void 0), d = i ? o : a;
  return {
    selected: d,
    select: (h, g, p) => {
      const { min: O, max: w } = e, W = h ? fs(h, d, O, w, s, t) : void 0;
      return r && n && W?.from && W.to && ms({ from: W.from, to: W.to }, n, t) && (W.from = h, W.to = void 0), i || c(W), i?.(W, h, g, p), W;
    },
    isSelected: (h) => d && K(d, h, !1, t)
  };
}
function gs(e, t) {
  const { selected: n, required: r, onSelect: o } = e, [s, i] = ve(n, o ? n : void 0), a = o ? n : s, { isSameDay: c } = t;
  return {
    selected: a,
    select: (u, h, g) => {
      let p = u;
      return !r && a && a && c(u, a) && (p = void 0), o || i(p), o?.(p, u, h, g), p;
    },
    isSelected: (u) => a ? c(a, u) : !1
  };
}
function ps(e, t) {
  const n = gs(e, t), r = ls(e, t), o = ys(e, t);
  switch (e.mode) {
    case "single":
      return n;
    case "multiple":
      return r;
    case "range":
      return o;
    default:
      return;
  }
}
function ws(e) {
  let t = e;
  t.timeZone && (t = {
    ...e
  }, t.today && (t.today = new H(t.today, t.timeZone)), t.month && (t.month = new H(t.month, t.timeZone)), t.defaultMonth && (t.defaultMonth = new H(t.defaultMonth, t.timeZone)), t.startMonth && (t.startMonth = new H(t.startMonth, t.timeZone)), t.endMonth && (t.endMonth = new H(t.endMonth, t.timeZone)), t.mode === "single" && t.selected ? t.selected = new H(t.selected, t.timeZone) : t.mode === "multiple" && t.selected ? t.selected = t.selected?.map((v) => new H(v, t.timeZone)) : t.mode === "range" && t.selected && (t.selected = {
    from: t.selected.from ? new H(t.selected.from, t.timeZone) : void 0,
    to: t.selected.to ? new H(t.selected.to, t.timeZone) : void 0
  }));
  const { components: n, formatters: r, labels: o, dateLib: s, locale: i, classNames: a } = Ye(() => {
    const v = { ...qe, ...t.locale };
    return {
      dateLib: new ee({
        locale: v,
        weekStartsOn: t.broadcastCalendar ? 1 : t.weekStartsOn,
        firstWeekContainsDate: t.firstWeekContainsDate,
        useAdditionalWeekYearTokens: t.useAdditionalWeekYearTokens,
        useAdditionalDayOfYearTokens: t.useAdditionalDayOfYearTokens,
        timeZone: t.timeZone,
        numerals: t.numerals
      }, t.dateLib),
      components: Do(t.components),
      formatters: Yo(t.formatters),
      labels: { ...Lo, ...t.labels },
      locale: v,
      classNames: { ...je(), ...t.classNames }
    };
  }, [
    t.locale,
    t.broadcastCalendar,
    t.weekStartsOn,
    t.firstWeekContainsDate,
    t.useAdditionalWeekYearTokens,
    t.useAdditionalDayOfYearTokens,
    t.timeZone,
    t.numerals,
    t.dateLib,
    t.components,
    t.formatters,
    t.labels,
    t.classNames
  ]), { captionLayout: c, mode: d, navLayout: l, numberOfMonths: u = 1, onDayBlur: h, onDayClick: g, onDayFocus: p, onDayKeyDown: O, onDayMouseEnter: w, onDayMouseLeave: W, onNextClick: x, onPrevClick: b, showWeekNumber: Y, styles: y } = t, { formatCaption: k, formatDay: M, formatMonthDropdown: C, formatWeekNumber: I, formatWeekNumberHeader: q, formatWeekdayName: A, formatYearDropdown: $ } = r, se = is(t, s), { days: ae, months: ie, navStart: be, navEnd: Oe, previousMonth: Z, nextMonth: G, goToMonth: V } = se, We = Mo(ae, t, be, Oe, s), { isSelected: Se, select: Ce, selected: Me } = ps(t, s) ?? {}, { blur: ze, focused: Re, isFocusTarget: Pt, moveFocus: $e, setFocused: ke } = ds(t, se, We, Se ?? (() => !1), s), { labelDayButton: Ft, labelGridcell: Bt, labelGrid: It, labelMonthDropdown: Ht, labelNav: Ze, labelPrevious: qt, labelNext: At, labelWeekday: jt, labelWeekNumber: zt, labelWeekNumberHeader: Rt, labelYearDropdown: $t } = o, Zt = Ye(() => Fo(s, t.ISOWeek), [s, t.ISOWeek]), Ge = d !== void 0 || g !== void 0, Ne = R(() => {
    Z && (V(Z), b?.(Z));
  }, [Z, V, b]), xe = R(() => {
    G && (V(G), x?.(G));
  }, [V, G, x]), Gt = R((v, E) => (D) => {
    D.preventDefault(), D.stopPropagation(), ke(v), Ce?.(v.date, E, D), g?.(v.date, E, D);
  }, [Ce, g, ke]), Qt = R((v, E) => (D) => {
    ke(v), p?.(v.date, E, D);
  }, [p, ke]), Lt = R((v, E) => (D) => {
    ze(), h?.(v.date, E, D);
  }, [ze, h]), Xt = R((v, E) => (D) => {
    const P = {
      ArrowLeft: [
        D.shiftKey ? "month" : "day",
        t.dir === "rtl" ? "after" : "before"
      ],
      ArrowRight: [
        D.shiftKey ? "month" : "day",
        t.dir === "rtl" ? "before" : "after"
      ],
      ArrowDown: [D.shiftKey ? "year" : "week", "after"],
      ArrowUp: [D.shiftKey ? "year" : "week", "before"],
      PageUp: [D.shiftKey ? "year" : "month", "before"],
      PageDown: [D.shiftKey ? "year" : "month", "after"],
      Home: ["startOfWeek", "before"],
      End: ["endOfWeek", "after"]
    };
    if (P[D.key]) {
      D.preventDefault(), D.stopPropagation();
      const [z, S] = P[D.key];
      $e(z, S);
    }
    O?.(v.date, E, D);
  }, [$e, O, t.dir]), Ut = R((v, E) => (D) => {
    w?.(v.date, E, D);
  }, [w]), Vt = R((v, E) => (D) => {
    W?.(v.date, E, D);
  }, [W]), Kt = R((v) => (E) => {
    const D = Number(E.target.value), P = s.setMonth(s.startOfMonth(v), D);
    V(P);
  }, [s, V]), Jt = R((v) => (E) => {
    const D = Number(E.target.value), P = s.setYear(s.startOfMonth(v), D);
    V(P);
  }, [s, V]), { className: en, style: tn } = Ye(() => ({
    className: [a[m.Root], t.className].filter(Boolean).join(" "),
    style: { ...y?.[m.Root], ...t.style }
  }), [a, t.className, t.style, y]), nn = vo(t), Qe = De(null);
  Ko(Qe, !!t.animate, {
    classNames: a,
    months: ie,
    focused: Re,
    dateLib: s
  });
  const rn = {
    dayPickerProps: t,
    selected: Me,
    select: Ce,
    isSelected: Se,
    months: ie,
    nextMonth: G,
    previousMonth: Z,
    goToMonth: V,
    getModifiers: We,
    components: n,
    classNames: a,
    styles: y,
    labels: o,
    formatters: r
  };
  return f.createElement(
    vt.Provider,
    { value: rn },
    f.createElement(
      n.Root,
      { rootRef: t.animate ? Qe : void 0, className: en, style: tn, dir: t.dir, id: t.id, lang: t.lang, nonce: t.nonce, title: t.title, role: t.role, "aria-label": t["aria-label"], ...nn },
      f.createElement(
        n.Months,
        { className: a[m.Months], style: y?.[m.Months] },
        !t.hideNavigation && !l && f.createElement(n.Nav, { "data-animated-nav": t.animate ? "true" : void 0, className: a[m.Nav], style: y?.[m.Nav], "aria-label": Ze(), onPreviousClick: Ne, onNextClick: xe, previousMonth: Z, nextMonth: G }),
        ie.map((v, E) => f.createElement(
          n.Month,
          {
            "data-animated-month": t.animate ? "true" : void 0,
            className: a[m.Month],
            style: y?.[m.Month],
            // biome-ignore lint/suspicious/noArrayIndexKey: breaks animation
            key: E,
            displayIndex: E,
            calendarMonth: v
          },
          l === "around" && !t.hideNavigation && E === 0 && f.createElement(
            n.PreviousMonthButton,
            { type: "button", className: a[m.PreviousMonthButton], tabIndex: Z ? void 0 : -1, "aria-disabled": Z ? void 0 : !0, "aria-label": qt(Z), onClick: Ne, "data-animated-button": t.animate ? "true" : void 0 },
            f.createElement(n.Chevron, { disabled: Z ? void 0 : !0, className: a[m.Chevron], orientation: t.dir === "rtl" ? "right" : "left" })
          ),
          f.createElement(n.MonthCaption, { "data-animated-caption": t.animate ? "true" : void 0, className: a[m.MonthCaption], style: y?.[m.MonthCaption], calendarMonth: v, displayIndex: E }, c?.startsWith("dropdown") ? f.createElement(
            n.DropdownNav,
            { className: a[m.Dropdowns], style: y?.[m.Dropdowns] },
            c === "dropdown" || c === "dropdown-months" ? f.createElement(n.MonthsDropdown, { className: a[m.MonthsDropdown], "aria-label": Ht(), classNames: a, components: n, disabled: !!t.disableNavigation, onChange: Kt(v.date), options: Eo(v.date, be, Oe, r, s), style: y?.[m.Dropdown], value: s.getMonth(v.date) }) : f.createElement("span", null, C(v.date, s)),
            c === "dropdown" || c === "dropdown-years" ? f.createElement(n.YearsDropdown, { className: a[m.YearsDropdown], "aria-label": $t(s.options), classNames: a, components: n, disabled: !!t.disableNavigation, onChange: Jt(v.date), options: Bo(be, Oe, r, s, !!t.reverseYears), style: y?.[m.Dropdown], value: s.getYear(v.date) }) : f.createElement("span", null, $(v.date, s)),
            f.createElement("span", { role: "status", "aria-live": "polite", style: {
              border: 0,
              clip: "rect(0 0 0 0)",
              height: "1px",
              margin: "-1px",
              overflow: "hidden",
              padding: 0,
              position: "absolute",
              width: "1px",
              whiteSpace: "nowrap",
              wordWrap: "normal"
            } }, k(v.date, s.options, s))
          ) : (
            // biome-ignore lint/a11y/useSemanticElements: breaking change
            f.createElement(n.CaptionLabel, { className: a[m.CaptionLabel], role: "status", "aria-live": "polite" }, k(v.date, s.options, s))
          )),
          l === "around" && !t.hideNavigation && E === u - 1 && f.createElement(
            n.NextMonthButton,
            { type: "button", className: a[m.NextMonthButton], tabIndex: G ? void 0 : -1, "aria-disabled": G ? void 0 : !0, "aria-label": At(G), onClick: xe, "data-animated-button": t.animate ? "true" : void 0 },
            f.createElement(n.Chevron, { disabled: G ? void 0 : !0, className: a[m.Chevron], orientation: t.dir === "rtl" ? "left" : "right" })
          ),
          E === u - 1 && l === "after" && !t.hideNavigation && f.createElement(n.Nav, { "data-animated-nav": t.animate ? "true" : void 0, className: a[m.Nav], style: y?.[m.Nav], "aria-label": Ze(), onPreviousClick: Ne, onNextClick: xe, previousMonth: Z, nextMonth: G }),
          f.createElement(
            n.MonthGrid,
            { role: "grid", "aria-multiselectable": d === "multiple" || d === "range", "aria-label": It(v.date, s.options, s) || void 0, className: a[m.MonthGrid], style: y?.[m.MonthGrid] },
            !t.hideWeekdays && f.createElement(
              n.Weekdays,
              { "data-animated-weekdays": t.animate ? "true" : void 0, className: a[m.Weekdays], style: y?.[m.Weekdays] },
              Y && f.createElement(n.WeekNumberHeader, { "aria-label": Rt(s.options), className: a[m.WeekNumberHeader], style: y?.[m.WeekNumberHeader], scope: "col" }, q()),
              Zt.map((D) => f.createElement(n.Weekday, { "aria-label": jt(D, s.options, s), className: a[m.Weekday], key: String(D), style: y?.[m.Weekday], scope: "col" }, A(D, s.options, s)))
            ),
            f.createElement(n.Weeks, { "data-animated-weeks": t.animate ? "true" : void 0, className: a[m.Weeks], style: y?.[m.Weeks] }, v.weeks.map((D) => f.createElement(
              n.Week,
              { className: a[m.Week], key: D.weekNumber, style: y?.[m.Week], week: D },
              Y && // biome-ignore lint/a11y/useSemanticElements: react component
              f.createElement(n.WeekNumber, { week: D, style: y?.[m.WeekNumber], "aria-label": zt(D.weekNumber, {
                locale: i
              }), className: a[m.WeekNumber], scope: "row", role: "rowheader" }, I(D.weekNumber, s)),
              D.days.map((P) => {
                const { date: z } = P, S = We(P);
                if (S[F.focused] = !S.hidden && !!Re?.isEqualTo(P), S[Q.selected] = Se?.(z) || S.selected, Ae(Me)) {
                  const { from: _e, to: Te } = Me;
                  S[Q.range_start] = !!(_e && Te && s.isSameDay(z, _e)), S[Q.range_end] = !!(_e && Te && s.isSameDay(z, Te)), S[Q.range_middle] = K(Me, z, !0, s);
                }
                const on = Po(S, y, t.modifiersStyles), sn = ko(S, a, t.modifiersClassNames), an = !Ge && !S.hidden ? Bt(z, S, s.options, s) : void 0;
                return (
                  // biome-ignore lint/a11y/useSemanticElements: react component
                  f.createElement(n.Day, { key: `${s.format(z, "yyyy-MM-dd")}_${s.format(P.displayMonth, "yyyy-MM")}`, day: P, modifiers: S, className: sn.join(" "), style: on, role: "gridcell", "aria-selected": S.selected || void 0, "aria-label": an, "data-day": s.format(z, "yyyy-MM-dd"), "data-month": P.outside ? s.format(z, "yyyy-MM") : void 0, "data-selected": S.selected || void 0, "data-disabled": S.disabled || void 0, "data-hidden": S.hidden || void 0, "data-outside": P.outside || void 0, "data-focused": S.focused || void 0, "data-today": S.today || void 0 }, !S.hidden && Ge ? f.createElement(n.DayButton, { className: a[m.DayButton], style: y?.[m.DayButton], type: "button", day: P, modifiers: S, disabled: S.disabled || void 0, tabIndex: Pt(P) ? 0 : -1, "aria-label": Ft(z, S, s.options, s), onClick: Gt(P, S), onBlur: Lt(P, S), onFocus: Qt(P, S), onKeyDown: Xt(P, S), onMouseEnter: Ut(P, S), onMouseLeave: Vt(P, S) }, M(z, s.options, s)) : !S.hidden && M(P.date, s.options, s))
                );
              })
            )))
          )
        ))
      ),
      t.footer && // biome-ignore lint/a11y/useSemanticElements: react component
      f.createElement(n.Footer, { className: a[m.Footer], style: y?.[m.Footer], role: "status", "aria-live": "polite" }, t.footer)
    )
  );
}
function Cs({
  className: e,
  classNames: t,
  showOutsideDays: n = !0,
  captionLayout: r = "label",
  buttonVariant: o = "ghost",
  formatters: s,
  components: i,
  ...a
}) {
  const c = je();
  return /* @__PURE__ */ ne(
    ws,
    {
      showOutsideDays: n,
      className: N(
        "bg-background group/calendar p-3 [--cell-size:--spacing(8)] [[data-slot=card-content]_&]:bg-transparent [[data-slot=popover-content]_&]:bg-transparent",
        String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,
        String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
        e
      ),
      captionLayout: r,
      formatters: {
        formatMonthDropdown: (d) => d.toLocaleString("default", { month: "short" }),
        ...s
      },
      classNames: {
        root: N("w-fit", c.root),
        months: N(
          "flex gap-4 flex-col md:flex-row relative",
          c.months
        ),
        month: N("flex flex-col w-full gap-4", c.month),
        nav: N(
          "flex items-center gap-1 w-full absolute top-0 inset-x-0 justify-between",
          c.nav
        ),
        button_previous: N(
          Xe({ variant: o }),
          "size-(--cell-size) aria-disabled:opacity-50 p-0 select-none",
          c.button_previous
        ),
        button_next: N(
          Xe({ variant: o }),
          "size-(--cell-size) aria-disabled:opacity-50 p-0 select-none",
          c.button_next
        ),
        month_caption: N(
          "flex items-center justify-center h-(--cell-size) w-full px-(--cell-size)",
          c.month_caption
        ),
        dropdowns: N(
          "w-full flex items-center text-sm font-medium justify-center h-(--cell-size) gap-1.5",
          c.dropdowns
        ),
        dropdown_root: N(
          "relative has-focus:border-ring border border-input shadow-xs has-focus:ring-ring/50 has-focus:ring-[3px] rounded-md",
          c.dropdown_root
        ),
        dropdown: N("absolute inset-0 opacity-0", c.dropdown),
        caption_label: N(
          "select-none font-medium",
          r === "label" ? "text-sm" : "rounded-md pl-2 pr-1 flex items-center gap-1 text-sm h-8 [&>svg]:text-muted-foreground [&>svg]:size-3.5",
          c.caption_label
        ),
        table: "w-full border-collapse",
        weekdays: N("flex", c.weekdays),
        weekday: N(
          "text-muted-foreground rounded-md flex-1 font-normal text-[0.8rem] select-none",
          c.weekday
        ),
        week: N("flex w-full mt-2", c.week),
        week_number_header: N(
          "select-none w-(--cell-size)",
          c.week_number_header
        ),
        week_number: N(
          "text-[0.8rem] select-none text-muted-foreground",
          c.week_number
        ),
        day: N(
          "relative w-full h-full p-0 text-center [&:first-child[data-selected=true]_button]:rounded-l-md [&:last-child[data-selected=true]_button]:rounded-r-md group/day aspect-square select-none",
          c.day
        ),
        range_start: N(
          "rounded-l-md bg-accent",
          c.range_start
        ),
        range_middle: N("rounded-none", c.range_middle),
        range_end: N("rounded-r-md bg-accent", c.range_end),
        today: N(
          "bg-accent text-accent-foreground rounded-md data-[selected=true]:rounded-none",
          c.today
        ),
        outside: N(
          "text-muted-foreground aria-selected:text-muted-foreground",
          c.outside
        ),
        disabled: N(
          "text-muted-foreground opacity-50",
          c.disabled
        ),
        hidden: N("invisible", c.hidden),
        ...t
      },
      components: {
        Root: ({ className: d, rootRef: l, ...u }) => /* @__PURE__ */ ne(
          "div",
          {
            "data-slot": "calendar",
            ref: l,
            className: N(d),
            ...u
          }
        ),
        Chevron: ({ className: d, orientation: l, ...u }) => l === "left" ? /* @__PURE__ */ ne(hn, { className: N("size-4", d), ...u }) : l === "right" ? /* @__PURE__ */ ne(
          mn,
          {
            className: N("size-4", d),
            ...u
          }
        ) : /* @__PURE__ */ ne(yn, { className: N("size-4", d), ...u }),
        DayButton: bs,
        WeekNumber: ({ children: d, ...l }) => /* @__PURE__ */ ne("td", { ...l, children: /* @__PURE__ */ ne("div", { className: "flex size-(--cell-size) items-center justify-center text-center", children: d }) }),
        ...i
      },
      ...a
    }
  );
}
function bs({
  className: e,
  day: t,
  modifiers: n,
  ...r
}) {
  const o = je(), s = Le.useRef(null);
  return Le.useEffect(() => {
    n.focused && s.current?.focus();
  }, [n.focused]), /* @__PURE__ */ ne(
    fn,
    {
      ref: s,
      variant: "ghost",
      size: "icon",
      "data-day": t.date.toLocaleDateString(),
      "data-selected-single": n.selected && !n.range_start && !n.range_end && !n.range_middle,
      "data-range-start": n.range_start,
      "data-range-end": n.range_end,
      "data-range-middle": n.range_middle,
      className: N(
        "data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground data-[range-middle=true]:bg-accent data-[range-middle=true]:text-accent-foreground data-[range-start=true]:bg-primary data-[range-start=true]:text-primary-foreground data-[range-end=true]:bg-primary data-[range-end=true]:text-primary-foreground group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:ring-ring/50 dark:hover:text-accent-foreground flex aspect-square size-auto w-full min-w-(--cell-size) flex-col gap-1 leading-none font-normal group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 group-data-[focused=true]/day:ring-[3px] data-[range-end=true]:rounded-md data-[range-end=true]:rounded-r-md data-[range-middle=true]:rounded-none data-[range-start=true]:rounded-md data-[range-start=true]:rounded-l-md [&>span]:text-xs [&>span]:opacity-70",
        o.day,
        e
      ),
      ...r
    }
  );
}
export {
  Cs as Calendar,
  bs as CalendarDayButton
};
//# sourceMappingURL=calendar.js.map
