import { jsx as ae } from "react/jsx-runtime";
import * as Ke from "react";
import h, { createContext as hn, useContext as mn, useCallback as $, useRef as pe, useLayoutEffect as yn, useState as qe, useEffect as gn, useMemo as Te } from "react";
import { c as N } from "./utils-qaFjX9_3.js";
import { buttonVariants as et, Button as wn } from "./button.js";
import { C as bn } from "./chevron-left-C1pkx4AF.js";
import { C as Mn } from "./chevron-right-pz9eCjj-.js";
import { C as kn } from "./chevron-down-BORJtX8F.js";
const Pe = {}, me = {};
function ye(t, e) {
  try {
    const r = (Pe[t] || (Pe[t] = new Intl.DateTimeFormat("en-GB", {
      timeZone: t,
      hour: "numeric",
      timeZoneName: "longOffset"
    }).format))(e).split("GMT")[1] || "";
    return r in me ? me[r] : tt(r, r.split(":"));
  } catch {
    if (t in me) return me[t];
    const n = t == null ? void 0 : t.match(Dn);
    return n ? tt(t, n.slice(1)) : NaN;
  }
}
const Dn = /([+-]\d\d):?(\d\d)?/;
function tt(t, e) {
  const n = +e[0], r = +(e[1] || 0);
  return me[t] = n > 0 ? n * 60 + r : n * 60 - r;
}
class V extends Date {
  //#region static
  constructor(...e) {
    super(), e.length > 1 && typeof e[e.length - 1] == "string" && (this.timeZone = e.pop()), this.internal = /* @__PURE__ */ new Date(), isNaN(ye(this.timeZone, this)) ? this.setTime(NaN) : e.length ? typeof e[0] == "number" && (e.length === 1 || e.length === 2 && typeof e[1] != "number") ? this.setTime(e[0]) : typeof e[0] == "string" ? this.setTime(+new Date(e[0])) : e[0] instanceof Date ? this.setTime(+e[0]) : (this.setTime(+new Date(...e)), ht(this), Ae(this)) : this.setTime(Date.now());
  }
  static tz(e, ...n) {
    return n.length ? new V(...n, e) : new V(Date.now(), e);
  }
  //#endregion
  //#region time zone
  withTimeZone(e) {
    return new V(+this, e);
  }
  getTimezoneOffset() {
    return -ye(this.timeZone, this);
  }
  //#endregion
  //#region time
  setTime(e) {
    return Date.prototype.setTime.apply(this, arguments), Ae(this), +this;
  }
  //#endregion
  //#region date-fns integration
  [Symbol.for("constructDateFrom")](e) {
    return new V(+new Date(e), this.timeZone);
  }
  //#endregion
}
const nt = /^(get|set)(?!UTC)/;
Object.getOwnPropertyNames(Date.prototype).forEach((t) => {
  if (!nt.test(t)) return;
  const e = t.replace(nt, "$1UTC");
  V.prototype[e] && (t.startsWith("get") ? V.prototype[t] = function() {
    return this.internal[e]();
  } : (V.prototype[t] = function() {
    return Date.prototype[e].apply(this.internal, arguments), vn(this), +this;
  }, V.prototype[e] = function() {
    return Date.prototype[e].apply(this, arguments), Ae(this), +this;
  }));
});
function Ae(t) {
  t.internal.setTime(+t), t.internal.setUTCMinutes(t.internal.getUTCMinutes() - t.getTimezoneOffset());
}
function vn(t) {
  Date.prototype.setFullYear.call(t, t.internal.getUTCFullYear(), t.internal.getUTCMonth(), t.internal.getUTCDate()), Date.prototype.setHours.call(t, t.internal.getUTCHours(), t.internal.getUTCMinutes(), t.internal.getUTCSeconds(), t.internal.getUTCMilliseconds()), ht(t);
}
function ht(t) {
  const e = ye(t.timeZone, t), n = /* @__PURE__ */ new Date(+t);
  n.setUTCHours(n.getUTCHours() - 1);
  const r = -(/* @__PURE__ */ new Date(+t)).getTimezoneOffset(), a = -(/* @__PURE__ */ new Date(+n)).getTimezoneOffset(), o = r - a, i = Date.prototype.getHours.apply(t) !== t.internal.getUTCHours();
  o && i && t.internal.setUTCMinutes(t.internal.getUTCMinutes() + o);
  const s = r - e;
  s && Date.prototype.setUTCMinutes.call(t, Date.prototype.getUTCMinutes.call(t) + s);
  const u = ye(t.timeZone, t), l = -(/* @__PURE__ */ new Date(+t)).getTimezoneOffset() - u, d = u !== e, m = l - s;
  if (d && m) {
    Date.prototype.setUTCMinutes.call(t, Date.prototype.getUTCMinutes.call(t) + m);
    const w = ye(t.timeZone, t), b = u - w;
    b && (t.internal.setUTCMinutes(t.internal.getUTCMinutes() + b), Date.prototype.setUTCMinutes.call(t, Date.prototype.getUTCMinutes.call(t) + b));
  }
}
class I extends V {
  //#region static
  static tz(e, ...n) {
    return n.length ? new I(...n, e) : new I(Date.now(), e);
  }
  //#endregion
  //#region representation
  toISOString() {
    const [e, n, r] = this.tzComponents(), a = `${e}${n}:${r}`;
    return this.internal.toISOString().slice(0, -1) + a;
  }
  toString() {
    return `${this.toDateString()} ${this.toTimeString()}`;
  }
  toDateString() {
    const [e, n, r, a] = this.internal.toUTCString().split(" ");
    return `${e == null ? void 0 : e.slice(0, -1)} ${r} ${n} ${a}`;
  }
  toTimeString() {
    const e = this.internal.toUTCString().split(" ")[4], [n, r, a] = this.tzComponents();
    return `${e} GMT${n}${r}${a} (${On(this.timeZone, this)})`;
  }
  toLocaleString(e, n) {
    return Date.prototype.toLocaleString.call(this, e, {
      ...n,
      timeZone: (n == null ? void 0 : n.timeZone) || this.timeZone
    });
  }
  toLocaleDateString(e, n) {
    return Date.prototype.toLocaleDateString.call(this, e, {
      ...n,
      timeZone: (n == null ? void 0 : n.timeZone) || this.timeZone
    });
  }
  toLocaleTimeString(e, n) {
    return Date.prototype.toLocaleTimeString.call(this, e, {
      ...n,
      timeZone: (n == null ? void 0 : n.timeZone) || this.timeZone
    });
  }
  //#endregion
  //#region private
  tzComponents() {
    const e = this.getTimezoneOffset(), n = e > 0 ? "-" : "+", r = String(Math.floor(Math.abs(e) / 60)).padStart(2, "0"), a = String(Math.abs(e) % 60).padStart(2, "0");
    return [n, r, a];
  }
  //#endregion
  withTimeZone(e) {
    return new I(+this, e);
  }
  //#region date-fns integration
  [Symbol.for("constructDateFrom")](e) {
    return new I(+new Date(e), this.timeZone);
  }
  //#endregion
}
function On(t, e) {
  return new Intl.DateTimeFormat("en-GB", {
    timeZone: t,
    timeZoneName: "long"
  }).format(e).slice(12);
}
var g;
(function(t) {
  t.Root = "root", t.Chevron = "chevron", t.Day = "day", t.DayButton = "day_button", t.CaptionLabel = "caption_label", t.Dropdowns = "dropdowns", t.Dropdown = "dropdown", t.DropdownRoot = "dropdown_root", t.Footer = "footer", t.MonthGrid = "month_grid", t.MonthCaption = "month_caption", t.MonthsDropdown = "months_dropdown", t.Month = "month", t.Months = "months", t.Nav = "nav", t.NextMonthButton = "button_next", t.PreviousMonthButton = "button_previous", t.Week = "week", t.Weeks = "weeks", t.Weekday = "weekday", t.Weekdays = "weekdays", t.WeekNumber = "week_number", t.WeekNumberHeader = "week_number_header", t.YearsDropdown = "years_dropdown";
})(g || (g = {}));
var P;
(function(t) {
  t.disabled = "disabled", t.hidden = "hidden", t.outside = "outside", t.focused = "focused", t.today = "today";
})(P || (P = {}));
var Q;
(function(t) {
  t.range_end = "range_end", t.range_middle = "range_middle", t.range_start = "range_start", t.selected = "selected";
})(Q || (Q = {}));
var j;
(function(t) {
  t.weeks_before_enter = "weeks_before_enter", t.weeks_before_exit = "weeks_before_exit", t.weeks_after_enter = "weeks_after_enter", t.weeks_after_exit = "weeks_after_exit", t.caption_after_enter = "caption_after_enter", t.caption_after_exit = "caption_after_exit", t.caption_before_enter = "caption_before_enter", t.caption_before_exit = "caption_before_exit";
})(j || (j = {}));
const mt = 6048e5, Wn = 864e5, rt = Symbol.for("constructDateFrom");
function B(t, e) {
  return typeof t == "function" ? t(e) : t && typeof t == "object" && rt in t ? t[rt](e) : t instanceof Date ? new t.constructor(e) : new Date(e);
}
function _(t, e) {
  return B(e || t, t);
}
function yt(t, e, n) {
  const r = _(t, n == null ? void 0 : n.in);
  return isNaN(e) ? B(t, NaN) : (e && r.setDate(r.getDate() + e), r);
}
function gt(t, e, n) {
  const r = _(t, n == null ? void 0 : n.in);
  if (isNaN(e)) return B(t, NaN);
  if (!e)
    return r;
  const a = r.getDate(), o = B(t, r.getTime());
  o.setMonth(r.getMonth() + e + 1, 0);
  const i = o.getDate();
  return a >= i ? o : (r.setFullYear(
    o.getFullYear(),
    o.getMonth(),
    a
  ), r);
}
let pn = {};
function be() {
  return pn;
}
function ue(t, e) {
  var s, u, c, l;
  const n = be(), r = (e == null ? void 0 : e.weekStartsOn) ?? ((u = (s = e == null ? void 0 : e.locale) == null ? void 0 : s.options) == null ? void 0 : u.weekStartsOn) ?? n.weekStartsOn ?? ((l = (c = n.locale) == null ? void 0 : c.options) == null ? void 0 : l.weekStartsOn) ?? 0, a = _(t, e == null ? void 0 : e.in), o = a.getDay(), i = (o < r ? 7 : 0) + o - r;
  return a.setDate(a.getDate() - i), a.setHours(0, 0, 0, 0), a;
}
function ge(t, e) {
  return ue(t, { ...e, weekStartsOn: 1 });
}
function wt(t, e) {
  const n = _(t, e == null ? void 0 : e.in), r = n.getFullYear(), a = B(n, 0);
  a.setFullYear(r + 1, 0, 4), a.setHours(0, 0, 0, 0);
  const o = ge(a), i = B(n, 0);
  i.setFullYear(r, 0, 4), i.setHours(0, 0, 0, 0);
  const s = ge(i);
  return n.getTime() >= o.getTime() ? r + 1 : n.getTime() >= s.getTime() ? r : r - 1;
}
function at(t) {
  const e = _(t), n = new Date(
    Date.UTC(
      e.getFullYear(),
      e.getMonth(),
      e.getDate(),
      e.getHours(),
      e.getMinutes(),
      e.getSeconds(),
      e.getMilliseconds()
    )
  );
  return n.setUTCFullYear(e.getFullYear()), +t - +n;
}
function ce(t, ...e) {
  const n = B.bind(
    null,
    e.find((r) => typeof r == "object")
  );
  return e.map(n);
}
function we(t, e) {
  const n = _(t, e == null ? void 0 : e.in);
  return n.setHours(0, 0, 0, 0), n;
}
function bt(t, e, n) {
  const [r, a] = ce(
    n == null ? void 0 : n.in,
    t,
    e
  ), o = we(r), i = we(a), s = +o - at(o), u = +i - at(i);
  return Math.round((s - u) / Wn);
}
function Sn(t, e) {
  const n = wt(t, e), r = B(t, 0);
  return r.setFullYear(n, 0, 4), r.setHours(0, 0, 0, 0), ge(r);
}
function Nn(t, e, n) {
  return yt(t, e * 7, n);
}
function Cn(t, e, n) {
  return gt(t, e * 12, n);
}
function xn(t, e) {
  let n, r = e == null ? void 0 : e.in;
  return t.forEach((a) => {
    !r && typeof a == "object" && (r = B.bind(null, a));
    const o = _(a, r);
    (!n || n < o || isNaN(+o)) && (n = o);
  }), B(r, n || NaN);
}
function _n(t, e) {
  let n, r = e == null ? void 0 : e.in;
  return t.forEach((a) => {
    !r && typeof a == "object" && (r = B.bind(null, a));
    const o = _(a, r);
    (!n || n > o || isNaN(+o)) && (n = o);
  }), B(r, n || NaN);
}
function Yn(t, e, n) {
  const [r, a] = ce(
    n == null ? void 0 : n.in,
    t,
    e
  );
  return +we(r) == +we(a);
}
function Mt(t) {
  return t instanceof Date || typeof t == "object" && Object.prototype.toString.call(t) === "[object Date]";
}
function En(t) {
  return !(!Mt(t) && typeof t != "number" || isNaN(+_(t)));
}
function Tn(t, e, n) {
  const [r, a] = ce(
    n == null ? void 0 : n.in,
    t,
    e
  ), o = r.getFullYear() - a.getFullYear(), i = r.getMonth() - a.getMonth();
  return o * 12 + i;
}
function Pn(t, e) {
  const n = _(t, e == null ? void 0 : e.in), r = n.getMonth();
  return n.setFullYear(n.getFullYear(), r + 1, 0), n.setHours(23, 59, 59, 999), n;
}
function Bn(t, e) {
  const [n, r] = ce(t, e.start, e.end);
  return { start: n, end: r };
}
function Fn(t, e) {
  const { start: n, end: r } = Bn(e == null ? void 0 : e.in, t);
  let a = +n > +r;
  const o = a ? +n : +r, i = a ? r : n;
  i.setHours(0, 0, 0, 0), i.setDate(1);
  let s = 1;
  const u = [];
  for (; +i <= o; )
    u.push(B(n, i)), i.setMonth(i.getMonth() + s);
  return a ? u.reverse() : u;
}
function In(t, e) {
  const n = _(t, e == null ? void 0 : e.in);
  return n.setDate(1), n.setHours(0, 0, 0, 0), n;
}
function Hn(t, e) {
  const n = _(t, e == null ? void 0 : e.in), r = n.getFullYear();
  return n.setFullYear(r + 1, 0, 0), n.setHours(23, 59, 59, 999), n;
}
function kt(t, e) {
  const n = _(t, e == null ? void 0 : e.in);
  return n.setFullYear(n.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
function Dt(t, e) {
  var s, u, c, l;
  const n = be(), r = (e == null ? void 0 : e.weekStartsOn) ?? ((u = (s = e == null ? void 0 : e.locale) == null ? void 0 : s.options) == null ? void 0 : u.weekStartsOn) ?? n.weekStartsOn ?? ((l = (c = n.locale) == null ? void 0 : c.options) == null ? void 0 : l.weekStartsOn) ?? 0, a = _(t, e == null ? void 0 : e.in), o = a.getDay(), i = (o < r ? -7 : 0) + 6 - (o - r);
  return a.setDate(a.getDate() + i), a.setHours(23, 59, 59, 999), a;
}
function qn(t, e) {
  return Dt(t, { ...e, weekStartsOn: 1 });
}
const An = {
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
}, jn = (t, e, n) => {
  let r;
  const a = An[t];
  return typeof a == "string" ? r = a : e === 1 ? r = a.one : r = a.other.replace("{{count}}", e.toString()), n != null && n.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
};
function Be(t) {
  return (e = {}) => {
    const n = e.width ? String(e.width) : t.defaultWidth;
    return t.formats[n] || t.formats[t.defaultWidth];
  };
}
const zn = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, $n = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, Rn = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, Gn = {
  date: Be({
    formats: zn,
    defaultWidth: "full"
  }),
  time: Be({
    formats: $n,
    defaultWidth: "full"
  }),
  dateTime: Be({
    formats: Rn,
    defaultWidth: "full"
  })
}, Zn = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, Qn = (t, e, n, r) => Zn[t];
function le(t) {
  return (e, n) => {
    const r = n != null && n.context ? String(n.context) : "standalone";
    let a;
    if (r === "formatting" && t.formattingValues) {
      const i = t.defaultFormattingWidth || t.defaultWidth, s = n != null && n.width ? String(n.width) : i;
      a = t.formattingValues[s] || t.formattingValues[i];
    } else {
      const i = t.defaultWidth, s = n != null && n.width ? String(n.width) : t.defaultWidth;
      a = t.values[s] || t.values[i];
    }
    const o = t.argumentCallback ? t.argumentCallback(e) : e;
    return a[o];
  };
}
const Xn = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, Ln = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, Vn = {
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
}, Un = {
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
}, Jn = {
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
}, Kn = {
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
}, er = (t, e) => {
  const n = Number(t), r = n % 100;
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
}, tr = {
  ordinalNumber: er,
  era: le({
    values: Xn,
    defaultWidth: "wide"
  }),
  quarter: le({
    values: Ln,
    defaultWidth: "wide",
    argumentCallback: (t) => t - 1
  }),
  month: le({
    values: Vn,
    defaultWidth: "wide"
  }),
  day: le({
    values: Un,
    defaultWidth: "wide"
  }),
  dayPeriod: le({
    values: Jn,
    defaultWidth: "wide",
    formattingValues: Kn,
    defaultFormattingWidth: "wide"
  })
};
function he(t) {
  return (e, n = {}) => {
    const r = n.width, a = r && t.matchPatterns[r] || t.matchPatterns[t.defaultMatchWidth], o = e.match(a);
    if (!o)
      return null;
    const i = o[0], s = r && t.parsePatterns[r] || t.parsePatterns[t.defaultParseWidth], u = Array.isArray(s) ? rr(s, (d) => d.test(i)) : (
      // [TODO] -- I challenge you to fix the type
      nr(s, (d) => d.test(i))
    );
    let c;
    c = t.valueCallback ? t.valueCallback(u) : u, c = n.valueCallback ? (
      // [TODO] -- I challenge you to fix the type
      n.valueCallback(c)
    ) : c;
    const l = e.slice(i.length);
    return { value: c, rest: l };
  };
}
function nr(t, e) {
  for (const n in t)
    if (Object.prototype.hasOwnProperty.call(t, n) && e(t[n]))
      return n;
}
function rr(t, e) {
  for (let n = 0; n < t.length; n++)
    if (e(t[n]))
      return n;
}
function ar(t) {
  return (e, n = {}) => {
    const r = e.match(t.matchPattern);
    if (!r) return null;
    const a = r[0], o = e.match(t.parsePattern);
    if (!o) return null;
    let i = t.valueCallback ? t.valueCallback(o[0]) : o[0];
    i = n.valueCallback ? n.valueCallback(i) : i;
    const s = e.slice(a.length);
    return { value: i, rest: s };
  };
}
const or = /^(\d+)(th|st|nd|rd)?/i, sr = /\d+/i, ir = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, ur = {
  any: [/^b/i, /^(a|c)/i]
}, cr = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, dr = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, fr = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, lr = {
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
}, hr = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, mr = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, yr = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, gr = {
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
}, wr = {
  ordinalNumber: ar({
    matchPattern: or,
    parsePattern: sr,
    valueCallback: (t) => parseInt(t, 10)
  }),
  era: he({
    matchPatterns: ir,
    defaultMatchWidth: "wide",
    parsePatterns: ur,
    defaultParseWidth: "any"
  }),
  quarter: he({
    matchPatterns: cr,
    defaultMatchWidth: "wide",
    parsePatterns: dr,
    defaultParseWidth: "any",
    valueCallback: (t) => t + 1
  }),
  month: he({
    matchPatterns: fr,
    defaultMatchWidth: "wide",
    parsePatterns: lr,
    defaultParseWidth: "any"
  }),
  day: he({
    matchPatterns: hr,
    defaultMatchWidth: "wide",
    parsePatterns: mr,
    defaultParseWidth: "any"
  }),
  dayPeriod: he({
    matchPatterns: yr,
    defaultMatchWidth: "any",
    parsePatterns: gr,
    defaultParseWidth: "any"
  })
}, je = {
  code: "en-US",
  formatDistance: jn,
  formatLong: Gn,
  formatRelative: Qn,
  localize: tr,
  match: wr,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function br(t, e) {
  const n = _(t, e == null ? void 0 : e.in);
  return bt(n, kt(n)) + 1;
}
function vt(t, e) {
  const n = _(t, e == null ? void 0 : e.in), r = +ge(n) - +Sn(n);
  return Math.round(r / mt) + 1;
}
function Ot(t, e) {
  var l, d, m, w;
  const n = _(t, e == null ? void 0 : e.in), r = n.getFullYear(), a = be(), o = (e == null ? void 0 : e.firstWeekContainsDate) ?? ((d = (l = e == null ? void 0 : e.locale) == null ? void 0 : l.options) == null ? void 0 : d.firstWeekContainsDate) ?? a.firstWeekContainsDate ?? ((w = (m = a.locale) == null ? void 0 : m.options) == null ? void 0 : w.firstWeekContainsDate) ?? 1, i = B((e == null ? void 0 : e.in) || t, 0);
  i.setFullYear(r + 1, 0, o), i.setHours(0, 0, 0, 0);
  const s = ue(i, e), u = B((e == null ? void 0 : e.in) || t, 0);
  u.setFullYear(r, 0, o), u.setHours(0, 0, 0, 0);
  const c = ue(u, e);
  return +n >= +s ? r + 1 : +n >= +c ? r : r - 1;
}
function Mr(t, e) {
  var s, u, c, l;
  const n = be(), r = (e == null ? void 0 : e.firstWeekContainsDate) ?? ((u = (s = e == null ? void 0 : e.locale) == null ? void 0 : s.options) == null ? void 0 : u.firstWeekContainsDate) ?? n.firstWeekContainsDate ?? ((l = (c = n.locale) == null ? void 0 : c.options) == null ? void 0 : l.firstWeekContainsDate) ?? 1, a = Ot(t, e), o = B((e == null ? void 0 : e.in) || t, 0);
  return o.setFullYear(a, 0, r), o.setHours(0, 0, 0, 0), ue(o, e);
}
function Wt(t, e) {
  const n = _(t, e == null ? void 0 : e.in), r = +ue(n, e) - +Mr(n, e);
  return Math.round(r / mt) + 1;
}
function x(t, e) {
  const n = t < 0 ? "-" : "", r = Math.abs(t).toString().padStart(e, "0");
  return n + r;
}
const re = {
  // Year
  y(t, e) {
    const n = t.getFullYear(), r = n > 0 ? n : 1 - n;
    return x(e === "yy" ? r % 100 : r, e.length);
  },
  // Month
  M(t, e) {
    const n = t.getMonth();
    return e === "M" ? String(n + 1) : x(n + 1, 2);
  },
  // Day of the month
  d(t, e) {
    return x(t.getDate(), e.length);
  },
  // AM or PM
  a(t, e) {
    const n = t.getHours() / 12 >= 1 ? "pm" : "am";
    switch (e) {
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
  h(t, e) {
    return x(t.getHours() % 12 || 12, e.length);
  },
  // Hour [0-23]
  H(t, e) {
    return x(t.getHours(), e.length);
  },
  // Minute
  m(t, e) {
    return x(t.getMinutes(), e.length);
  },
  // Second
  s(t, e) {
    return x(t.getSeconds(), e.length);
  },
  // Fraction of second
  S(t, e) {
    const n = e.length, r = t.getMilliseconds(), a = Math.trunc(
      r * Math.pow(10, n - 3)
    );
    return x(a, e.length);
  }
}, ie = {
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, ot = {
  // Era
  G: function(t, e, n) {
    const r = t.getFullYear() > 0 ? 1 : 0;
    switch (e) {
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
  y: function(t, e, n) {
    if (e === "yo") {
      const r = t.getFullYear(), a = r > 0 ? r : 1 - r;
      return n.ordinalNumber(a, { unit: "year" });
    }
    return re.y(t, e);
  },
  // Local week-numbering year
  Y: function(t, e, n, r) {
    const a = Ot(t, r), o = a > 0 ? a : 1 - a;
    if (e === "YY") {
      const i = o % 100;
      return x(i, 2);
    }
    return e === "Yo" ? n.ordinalNumber(o, { unit: "year" }) : x(o, e.length);
  },
  // ISO week-numbering year
  R: function(t, e) {
    const n = wt(t);
    return x(n, e.length);
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
  u: function(t, e) {
    const n = t.getFullYear();
    return x(n, e.length);
  },
  // Quarter
  Q: function(t, e, n) {
    const r = Math.ceil((t.getMonth() + 1) / 3);
    switch (e) {
      // 1, 2, 3, 4
      case "Q":
        return String(r);
      // 01, 02, 03, 04
      case "QQ":
        return x(r, 2);
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
  q: function(t, e, n) {
    const r = Math.ceil((t.getMonth() + 1) / 3);
    switch (e) {
      // 1, 2, 3, 4
      case "q":
        return String(r);
      // 01, 02, 03, 04
      case "qq":
        return x(r, 2);
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
  M: function(t, e, n) {
    const r = t.getMonth();
    switch (e) {
      case "M":
      case "MM":
        return re.M(t, e);
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
  L: function(t, e, n) {
    const r = t.getMonth();
    switch (e) {
      // 1, 2, ..., 12
      case "L":
        return String(r + 1);
      // 01, 02, ..., 12
      case "LL":
        return x(r + 1, 2);
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
  w: function(t, e, n, r) {
    const a = Wt(t, r);
    return e === "wo" ? n.ordinalNumber(a, { unit: "week" }) : x(a, e.length);
  },
  // ISO week of year
  I: function(t, e, n) {
    const r = vt(t);
    return e === "Io" ? n.ordinalNumber(r, { unit: "week" }) : x(r, e.length);
  },
  // Day of the month
  d: function(t, e, n) {
    return e === "do" ? n.ordinalNumber(t.getDate(), { unit: "date" }) : re.d(t, e);
  },
  // Day of year
  D: function(t, e, n) {
    const r = br(t);
    return e === "Do" ? n.ordinalNumber(r, { unit: "dayOfYear" }) : x(r, e.length);
  },
  // Day of week
  E: function(t, e, n) {
    const r = t.getDay();
    switch (e) {
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
  e: function(t, e, n, r) {
    const a = t.getDay(), o = (a - r.weekStartsOn + 8) % 7 || 7;
    switch (e) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case "e":
        return String(o);
      // Padded numerical value
      case "ee":
        return x(o, 2);
      // 1st, 2nd, ..., 7th
      case "eo":
        return n.ordinalNumber(o, { unit: "day" });
      case "eee":
        return n.day(a, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "eeeee":
        return n.day(a, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "eeeeee":
        return n.day(a, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
      case "eeee":
      default:
        return n.day(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(t, e, n, r) {
    const a = t.getDay(), o = (a - r.weekStartsOn + 8) % 7 || 7;
    switch (e) {
      // Numerical value (same as in `e`)
      case "c":
        return String(o);
      // Padded numerical value
      case "cc":
        return x(o, e.length);
      // 1st, 2nd, ..., 7th
      case "co":
        return n.ordinalNumber(o, { unit: "day" });
      case "ccc":
        return n.day(a, {
          width: "abbreviated",
          context: "standalone"
        });
      // T
      case "ccccc":
        return n.day(a, {
          width: "narrow",
          context: "standalone"
        });
      // Tu
      case "cccccc":
        return n.day(a, {
          width: "short",
          context: "standalone"
        });
      // Tuesday
      case "cccc":
      default:
        return n.day(a, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(t, e, n) {
    const r = t.getDay(), a = r === 0 ? 7 : r;
    switch (e) {
      // 2
      case "i":
        return String(a);
      // 02
      case "ii":
        return x(a, e.length);
      // 2nd
      case "io":
        return n.ordinalNumber(a, { unit: "day" });
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
  a: function(t, e, n) {
    const a = t.getHours() / 12 >= 1 ? "pm" : "am";
    switch (e) {
      case "a":
      case "aa":
        return n.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return n.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return n.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return n.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(t, e, n) {
    const r = t.getHours();
    let a;
    switch (r === 12 ? a = ie.noon : r === 0 ? a = ie.midnight : a = r / 12 >= 1 ? "pm" : "am", e) {
      case "b":
      case "bb":
        return n.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return n.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return n.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return n.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(t, e, n) {
    const r = t.getHours();
    let a;
    switch (r >= 17 ? a = ie.evening : r >= 12 ? a = ie.afternoon : r >= 4 ? a = ie.morning : a = ie.night, e) {
      case "B":
      case "BB":
      case "BBB":
        return n.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return n.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return n.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(t, e, n) {
    if (e === "ho") {
      let r = t.getHours() % 12;
      return r === 0 && (r = 12), n.ordinalNumber(r, { unit: "hour" });
    }
    return re.h(t, e);
  },
  // Hour [0-23]
  H: function(t, e, n) {
    return e === "Ho" ? n.ordinalNumber(t.getHours(), { unit: "hour" }) : re.H(t, e);
  },
  // Hour [0-11]
  K: function(t, e, n) {
    const r = t.getHours() % 12;
    return e === "Ko" ? n.ordinalNumber(r, { unit: "hour" }) : x(r, e.length);
  },
  // Hour [1-24]
  k: function(t, e, n) {
    let r = t.getHours();
    return r === 0 && (r = 24), e === "ko" ? n.ordinalNumber(r, { unit: "hour" }) : x(r, e.length);
  },
  // Minute
  m: function(t, e, n) {
    return e === "mo" ? n.ordinalNumber(t.getMinutes(), { unit: "minute" }) : re.m(t, e);
  },
  // Second
  s: function(t, e, n) {
    return e === "so" ? n.ordinalNumber(t.getSeconds(), { unit: "second" }) : re.s(t, e);
  },
  // Fraction of second
  S: function(t, e) {
    return re.S(t, e);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(t, e, n) {
    const r = t.getTimezoneOffset();
    if (r === 0)
      return "Z";
    switch (e) {
      // Hours and optional minutes
      case "X":
        return it(r);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`
      case "XXXX":
      case "XX":
        return se(r);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`
      case "XXXXX":
      case "XXX":
      // Hours and minutes with `:` delimiter
      default:
        return se(r, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(t, e, n) {
    const r = t.getTimezoneOffset();
    switch (e) {
      // Hours and optional minutes
      case "x":
        return it(r);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`
      case "xxxx":
      case "xx":
        return se(r);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`
      case "xxxxx":
      case "xxx":
      // Hours and minutes with `:` delimiter
      default:
        return se(r, ":");
    }
  },
  // Timezone (GMT)
  O: function(t, e, n) {
    const r = t.getTimezoneOffset();
    switch (e) {
      // Short
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + st(r, ":");
      // Long
      case "OOOO":
      default:
        return "GMT" + se(r, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(t, e, n) {
    const r = t.getTimezoneOffset();
    switch (e) {
      // Short
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + st(r, ":");
      // Long
      case "zzzz":
      default:
        return "GMT" + se(r, ":");
    }
  },
  // Seconds timestamp
  t: function(t, e, n) {
    const r = Math.trunc(+t / 1e3);
    return x(r, e.length);
  },
  // Milliseconds timestamp
  T: function(t, e, n) {
    return x(+t, e.length);
  }
};
function st(t, e = "") {
  const n = t > 0 ? "-" : "+", r = Math.abs(t), a = Math.trunc(r / 60), o = r % 60;
  return o === 0 ? n + String(a) : n + String(a) + e + x(o, 2);
}
function it(t, e) {
  return t % 60 === 0 ? (t > 0 ? "-" : "+") + x(Math.abs(t) / 60, 2) : se(t, e);
}
function se(t, e = "") {
  const n = t > 0 ? "-" : "+", r = Math.abs(t), a = x(Math.trunc(r / 60), 2), o = x(r % 60, 2);
  return n + a + e + o;
}
const ut = (t, e) => {
  switch (t) {
    case "P":
      return e.date({ width: "short" });
    case "PP":
      return e.date({ width: "medium" });
    case "PPP":
      return e.date({ width: "long" });
    case "PPPP":
    default:
      return e.date({ width: "full" });
  }
}, pt = (t, e) => {
  switch (t) {
    case "p":
      return e.time({ width: "short" });
    case "pp":
      return e.time({ width: "medium" });
    case "ppp":
      return e.time({ width: "long" });
    case "pppp":
    default:
      return e.time({ width: "full" });
  }
}, kr = (t, e) => {
  const n = t.match(/(P+)(p+)?/) || [], r = n[1], a = n[2];
  if (!a)
    return ut(t, e);
  let o;
  switch (r) {
    case "P":
      o = e.dateTime({ width: "short" });
      break;
    case "PP":
      o = e.dateTime({ width: "medium" });
      break;
    case "PPP":
      o = e.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      o = e.dateTime({ width: "full" });
      break;
  }
  return o.replace("{{date}}", ut(r, e)).replace("{{time}}", pt(a, e));
}, Dr = {
  p: pt,
  P: kr
}, vr = /^D+$/, Or = /^Y+$/, Wr = ["D", "DD", "YY", "YYYY"];
function pr(t) {
  return vr.test(t);
}
function Sr(t) {
  return Or.test(t);
}
function Nr(t, e, n) {
  const r = Cr(t, e, n);
  if (console.warn(r), Wr.includes(t)) throw new RangeError(r);
}
function Cr(t, e, n) {
  const r = t[0] === "Y" ? "years" : "days of the month";
  return `Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${e}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const xr = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, _r = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, Yr = /^'([^]*?)'?$/, Er = /''/g, Tr = /[a-zA-Z]/;
function Pr(t, e, n) {
  var l, d, m, w, b, W, k, M;
  const r = be(), a = (n == null ? void 0 : n.locale) ?? r.locale ?? je, o = (n == null ? void 0 : n.firstWeekContainsDate) ?? ((d = (l = n == null ? void 0 : n.locale) == null ? void 0 : l.options) == null ? void 0 : d.firstWeekContainsDate) ?? r.firstWeekContainsDate ?? ((w = (m = r.locale) == null ? void 0 : m.options) == null ? void 0 : w.firstWeekContainsDate) ?? 1, i = (n == null ? void 0 : n.weekStartsOn) ?? ((W = (b = n == null ? void 0 : n.locale) == null ? void 0 : b.options) == null ? void 0 : W.weekStartsOn) ?? r.weekStartsOn ?? ((M = (k = r.locale) == null ? void 0 : k.options) == null ? void 0 : M.weekStartsOn) ?? 0, s = _(t, n == null ? void 0 : n.in);
  if (!En(s))
    throw new RangeError("Invalid time value");
  let u = e.match(_r).map((D) => {
    const y = D[0];
    if (y === "p" || y === "P") {
      const S = Dr[y];
      return S(D, a.formatLong);
    }
    return D;
  }).join("").match(xr).map((D) => {
    if (D === "''")
      return { isToken: !1, value: "'" };
    const y = D[0];
    if (y === "'")
      return { isToken: !1, value: Br(D) };
    if (ot[y])
      return { isToken: !0, value: D };
    if (y.match(Tr))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + y + "`"
      );
    return { isToken: !1, value: D };
  });
  a.localize.preprocessor && (u = a.localize.preprocessor(s, u));
  const c = {
    firstWeekContainsDate: o,
    weekStartsOn: i,
    locale: a
  };
  return u.map((D) => {
    if (!D.isToken) return D.value;
    const y = D.value;
    (!(n != null && n.useAdditionalWeekYearTokens) && Sr(y) || !(n != null && n.useAdditionalDayOfYearTokens) && pr(y)) && Nr(y, e, String(t));
    const S = ot[y[0]];
    return S(s, y, a.localize, c);
  }).join("");
}
function Br(t) {
  const e = t.match(Yr);
  return e ? e[1].replace(Er, "'") : t;
}
function Fr(t, e) {
  const n = _(t, e == null ? void 0 : e.in), r = n.getFullYear(), a = n.getMonth(), o = B(n, 0);
  return o.setFullYear(r, a + 1, 0), o.setHours(0, 0, 0, 0), o.getDate();
}
function Ir(t, e) {
  return _(t, e == null ? void 0 : e.in).getMonth();
}
function Hr(t, e) {
  return _(t, e == null ? void 0 : e.in).getFullYear();
}
function qr(t, e) {
  return +_(t) > +_(e);
}
function Ar(t, e) {
  return +_(t) < +_(e);
}
function jr(t, e, n) {
  const [r, a] = ce(
    n == null ? void 0 : n.in,
    t,
    e
  );
  return r.getFullYear() === a.getFullYear() && r.getMonth() === a.getMonth();
}
function zr(t, e, n) {
  const [r, a] = ce(
    n == null ? void 0 : n.in,
    t,
    e
  );
  return r.getFullYear() === a.getFullYear();
}
function $r(t, e, n) {
  const r = _(t, n == null ? void 0 : n.in), a = r.getFullYear(), o = r.getDate(), i = B(t, 0);
  i.setFullYear(a, e, 15), i.setHours(0, 0, 0, 0);
  const s = Fr(i);
  return r.setMonth(e, Math.min(o, s)), r;
}
function Rr(t, e, n) {
  const r = _(t, n == null ? void 0 : n.in);
  return isNaN(+r) ? B(t, NaN) : (r.setFullYear(e), r);
}
const ct = 5, Gr = 4;
function Zr(t, e) {
  const n = e.startOfMonth(t), r = n.getDay() > 0 ? n.getDay() : 7, a = e.addDays(t, -r + 1), o = e.addDays(a, ct * 7 - 1);
  return e.getMonth(t) === e.getMonth(o) ? ct : Gr;
}
function St(t, e) {
  const n = e.startOfMonth(t), r = n.getDay();
  return r === 1 ? n : r === 0 ? e.addDays(n, -1 * 6) : e.addDays(n, -1 * (r - 1));
}
function Qr(t, e) {
  const n = St(t, e), r = Zr(t, e);
  return e.addDays(n, r * 7 - 1);
}
class te {
  /**
   * Creates an instance of `DateLib`.
   *
   * @param options Configuration options for the date library.
   * @param overrides Custom overrides for the date library functions.
   */
  constructor(e, n) {
    this.Date = Date, this.today = () => {
      var r;
      return (r = this.overrides) != null && r.today ? this.overrides.today() : this.options.timeZone ? I.tz(this.options.timeZone) : new this.Date();
    }, this.newDate = (r, a, o) => {
      var i;
      return (i = this.overrides) != null && i.newDate ? this.overrides.newDate(r, a, o) : this.options.timeZone ? new I(r, a, o, this.options.timeZone) : new Date(r, a, o);
    }, this.addDays = (r, a) => {
      var o;
      return (o = this.overrides) != null && o.addDays ? this.overrides.addDays(r, a) : yt(r, a);
    }, this.addMonths = (r, a) => {
      var o;
      return (o = this.overrides) != null && o.addMonths ? this.overrides.addMonths(r, a) : gt(r, a);
    }, this.addWeeks = (r, a) => {
      var o;
      return (o = this.overrides) != null && o.addWeeks ? this.overrides.addWeeks(r, a) : Nn(r, a);
    }, this.addYears = (r, a) => {
      var o;
      return (o = this.overrides) != null && o.addYears ? this.overrides.addYears(r, a) : Cn(r, a);
    }, this.differenceInCalendarDays = (r, a) => {
      var o;
      return (o = this.overrides) != null && o.differenceInCalendarDays ? this.overrides.differenceInCalendarDays(r, a) : bt(r, a);
    }, this.differenceInCalendarMonths = (r, a) => {
      var o;
      return (o = this.overrides) != null && o.differenceInCalendarMonths ? this.overrides.differenceInCalendarMonths(r, a) : Tn(r, a);
    }, this.eachMonthOfInterval = (r) => {
      var a;
      return (a = this.overrides) != null && a.eachMonthOfInterval ? this.overrides.eachMonthOfInterval(r) : Fn(r);
    }, this.endOfBroadcastWeek = (r) => {
      var a;
      return (a = this.overrides) != null && a.endOfBroadcastWeek ? this.overrides.endOfBroadcastWeek(r) : Qr(r, this);
    }, this.endOfISOWeek = (r) => {
      var a;
      return (a = this.overrides) != null && a.endOfISOWeek ? this.overrides.endOfISOWeek(r) : qn(r);
    }, this.endOfMonth = (r) => {
      var a;
      return (a = this.overrides) != null && a.endOfMonth ? this.overrides.endOfMonth(r) : Pn(r);
    }, this.endOfWeek = (r, a) => {
      var o;
      return (o = this.overrides) != null && o.endOfWeek ? this.overrides.endOfWeek(r, a) : Dt(r, this.options);
    }, this.endOfYear = (r) => {
      var a;
      return (a = this.overrides) != null && a.endOfYear ? this.overrides.endOfYear(r) : Hn(r);
    }, this.format = (r, a, o) => {
      var s;
      const i = (s = this.overrides) != null && s.format ? this.overrides.format(r, a, this.options) : Pr(r, a, this.options);
      return this.options.numerals && this.options.numerals !== "latn" ? this.replaceDigits(i) : i;
    }, this.getISOWeek = (r) => {
      var a;
      return (a = this.overrides) != null && a.getISOWeek ? this.overrides.getISOWeek(r) : vt(r);
    }, this.getMonth = (r, a) => {
      var o;
      return (o = this.overrides) != null && o.getMonth ? this.overrides.getMonth(r, this.options) : Ir(r, this.options);
    }, this.getYear = (r, a) => {
      var o;
      return (o = this.overrides) != null && o.getYear ? this.overrides.getYear(r, this.options) : Hr(r, this.options);
    }, this.getWeek = (r, a) => {
      var o;
      return (o = this.overrides) != null && o.getWeek ? this.overrides.getWeek(r, this.options) : Wt(r, this.options);
    }, this.isAfter = (r, a) => {
      var o;
      return (o = this.overrides) != null && o.isAfter ? this.overrides.isAfter(r, a) : qr(r, a);
    }, this.isBefore = (r, a) => {
      var o;
      return (o = this.overrides) != null && o.isBefore ? this.overrides.isBefore(r, a) : Ar(r, a);
    }, this.isDate = (r) => {
      var a;
      return (a = this.overrides) != null && a.isDate ? this.overrides.isDate(r) : Mt(r);
    }, this.isSameDay = (r, a) => {
      var o;
      return (o = this.overrides) != null && o.isSameDay ? this.overrides.isSameDay(r, a) : Yn(r, a);
    }, this.isSameMonth = (r, a) => {
      var o;
      return (o = this.overrides) != null && o.isSameMonth ? this.overrides.isSameMonth(r, a) : jr(r, a);
    }, this.isSameYear = (r, a) => {
      var o;
      return (o = this.overrides) != null && o.isSameYear ? this.overrides.isSameYear(r, a) : zr(r, a);
    }, this.max = (r) => {
      var a;
      return (a = this.overrides) != null && a.max ? this.overrides.max(r) : xn(r);
    }, this.min = (r) => {
      var a;
      return (a = this.overrides) != null && a.min ? this.overrides.min(r) : _n(r);
    }, this.setMonth = (r, a) => {
      var o;
      return (o = this.overrides) != null && o.setMonth ? this.overrides.setMonth(r, a) : $r(r, a);
    }, this.setYear = (r, a) => {
      var o;
      return (o = this.overrides) != null && o.setYear ? this.overrides.setYear(r, a) : Rr(r, a);
    }, this.startOfBroadcastWeek = (r, a) => {
      var o;
      return (o = this.overrides) != null && o.startOfBroadcastWeek ? this.overrides.startOfBroadcastWeek(r, this) : St(r, this);
    }, this.startOfDay = (r) => {
      var a;
      return (a = this.overrides) != null && a.startOfDay ? this.overrides.startOfDay(r) : we(r);
    }, this.startOfISOWeek = (r) => {
      var a;
      return (a = this.overrides) != null && a.startOfISOWeek ? this.overrides.startOfISOWeek(r) : ge(r);
    }, this.startOfMonth = (r) => {
      var a;
      return (a = this.overrides) != null && a.startOfMonth ? this.overrides.startOfMonth(r) : In(r);
    }, this.startOfWeek = (r, a) => {
      var o;
      return (o = this.overrides) != null && o.startOfWeek ? this.overrides.startOfWeek(r, this.options) : ue(r, this.options);
    }, this.startOfYear = (r) => {
      var a;
      return (a = this.overrides) != null && a.startOfYear ? this.overrides.startOfYear(r) : kt(r);
    }, this.options = { locale: je, ...e }, this.overrides = n;
  }
  /**
   * Generates a mapping of Arabic digits (0-9) to the target numbering system
   * digits.
   *
   * @since 9.5.0
   * @returns A record mapping Arabic digits to the target numerals.
   */
  getDigitMap() {
    const { numerals: e = "latn" } = this.options, n = new Intl.NumberFormat("en-US", {
      numberingSystem: e
    }), r = {};
    for (let a = 0; a < 10; a++)
      r[a.toString()] = n.format(a);
    return r;
  }
  /**
   * Replaces Arabic digits in a string with the target numbering system digits.
   *
   * @since 9.5.0
   * @param input The string containing Arabic digits.
   * @returns The string with digits replaced.
   */
  replaceDigits(e) {
    const n = this.getDigitMap();
    return e.replace(/\d/g, (r) => n[r] || r);
  }
  /**
   * Formats a number using the configured numbering system.
   *
   * @since 9.5.0
   * @param value The number to format.
   * @returns The formatted number as a string.
   */
  formatNumber(e) {
    return this.replaceDigits(e.toString());
  }
}
const U = new te();
class Nt {
  constructor(e, n, r = U) {
    this.date = e, this.displayMonth = n, this.outside = !!(n && !r.isSameMonth(e, n)), this.dateLib = r;
  }
  /**
   * Checks if this day is equal to another `CalendarDay`, considering both the
   * date and the displayed month.
   *
   * @param day The `CalendarDay` to compare with.
   * @returns `true` if the days are equal, otherwise `false`.
   */
  isEqualTo(e) {
    return this.dateLib.isSameDay(e.date, this.date) && this.dateLib.isSameMonth(e.displayMonth, this.displayMonth);
  }
}
class Xr {
  constructor(e, n) {
    this.date = e, this.weeks = n;
  }
}
class Lr {
  constructor(e, n) {
    this.days = n, this.weekNumber = e;
  }
}
function K(t, e, n = !1, r = U) {
  let { from: a, to: o } = t;
  const { differenceInCalendarDays: i, isSameDay: s } = r;
  return a && o ? (i(o, a) < 0 && ([a, o] = [o, a]), i(e, a) >= (n ? 1 : 0) && i(o, e) >= (n ? 1 : 0)) : !n && o ? s(o, e) : !n && a ? s(a, e) : !1;
}
function Ct(t) {
  return !!(t && typeof t == "object" && "before" in t && "after" in t);
}
function ze(t) {
  return !!(t && typeof t == "object" && "from" in t);
}
function xt(t) {
  return !!(t && typeof t == "object" && "after" in t);
}
function _t(t) {
  return !!(t && typeof t == "object" && "before" in t);
}
function Yt(t) {
  return !!(t && typeof t == "object" && "dayOfWeek" in t);
}
function Et(t, e) {
  return Array.isArray(t) && t.every(e.isDate);
}
function ee(t, e, n = U) {
  const r = Array.isArray(e) ? e : [e], { isSameDay: a, differenceInCalendarDays: o, isAfter: i } = n;
  return r.some((s) => {
    if (typeof s == "boolean")
      return s;
    if (n.isDate(s))
      return a(t, s);
    if (Et(s, n))
      return s.includes(t);
    if (ze(s))
      return K(s, t, !1, n);
    if (Yt(s))
      return Array.isArray(s.dayOfWeek) ? s.dayOfWeek.includes(t.getDay()) : s.dayOfWeek === t.getDay();
    if (Ct(s)) {
      const u = o(s.before, t), c = o(s.after, t), l = u > 0, d = c < 0;
      return i(s.before, s.after) ? d && l : l || d;
    }
    return xt(s) ? o(t, s.after) > 0 : _t(s) ? o(s.before, t) > 0 : typeof s == "function" ? s(t) : !1;
  });
}
function Vr(t, e, n) {
  const { disabled: r, hidden: a, modifiers: o, showOutsideDays: i, broadcastCalendar: s, today: u } = e, { isSameDay: c, isSameMonth: l, startOfMonth: d, isBefore: m, endOfMonth: w, isAfter: b } = n, W = e.startMonth && d(e.startMonth), k = e.endMonth && w(e.endMonth), M = {
    [P.focused]: [],
    [P.outside]: [],
    [P.disabled]: [],
    [P.hidden]: [],
    [P.today]: []
  }, D = {};
  for (const y of t) {
    const { date: S, displayMonth: f } = y, O = !!(f && !l(S, f)), v = !!(W && m(S, W)), E = !!(k && b(S, k)), z = !!(r && ee(S, r, n)), A = !!(a && ee(S, a, n)) || v || E || // Broadcast calendar will show outside days as default
    !s && !i && O || s && i === !1 && O, H = c(S, u ?? n.today());
    O && M.outside.push(y), z && M.disabled.push(y), A && M.hidden.push(y), H && M.today.push(y), o && Object.keys(o).forEach((q) => {
      const oe = o == null ? void 0 : o[q];
      oe && ee(S, oe, n) && (D[q] ? D[q].push(y) : D[q] = [y]);
    });
  }
  return (y) => {
    const S = {
      [P.focused]: !1,
      [P.disabled]: !1,
      [P.hidden]: !1,
      [P.outside]: !1,
      [P.today]: !1
    }, f = {};
    for (const O in M) {
      const v = M[O];
      S[O] = v.some((E) => E === y);
    }
    for (const O in D)
      f[O] = D[O].some((v) => v === y);
    return {
      ...S,
      // custom modifiers should override all the previous ones
      ...f
    };
  };
}
function Ur(t, e, n = {}) {
  return Object.entries(t).filter(([, a]) => a === !0).reduce((a, [o]) => (n[o] ? a.push(n[o]) : e[P[o]] ? a.push(e[P[o]]) : e[Q[o]] && a.push(e[Q[o]]), a), [e[g.Day]]);
}
function Jr(t) {
  return h.createElement("button", { ...t });
}
function Kr(t) {
  return h.createElement("span", { ...t });
}
function ea(t) {
  const { size: e = 24, orientation: n = "left", className: r } = t;
  return h.createElement(
    "svg",
    { className: r, width: e, height: e, viewBox: "0 0 24 24" },
    n === "up" && h.createElement("polygon", { points: "6.77 17 12.5 11.43 18.24 17 20 15.28 12.5 8 5 15.28" }),
    n === "down" && h.createElement("polygon", { points: "6.77 8 12.5 13.57 18.24 8 20 9.72 12.5 17 5 9.72" }),
    n === "left" && h.createElement("polygon", { points: "16 18.112 9.81111111 12 16 5.87733333 14.0888889 4 6 12 14.0888889 20" }),
    n === "right" && h.createElement("polygon", { points: "8 18.112 14.18888889 12 8 5.87733333 9.91111111 4 18 12 9.91111111 20" })
  );
}
function ta(t) {
  const { day: e, modifiers: n, ...r } = t;
  return h.createElement("td", { ...r });
}
function na(t) {
  const { day: e, modifiers: n, ...r } = t, a = h.useRef(null);
  return h.useEffect(() => {
    var o;
    n.focused && ((o = a.current) == null || o.focus());
  }, [n.focused]), h.createElement("button", { ref: a, ...r });
}
function ra(t) {
  const { options: e, className: n, components: r, classNames: a, ...o } = t, i = [a[g.Dropdown], n].join(" "), s = e == null ? void 0 : e.find(({ value: u }) => u === o.value);
  return h.createElement(
    "span",
    { "data-disabled": o.disabled, className: a[g.DropdownRoot] },
    h.createElement(r.Select, { className: i, ...o }, e == null ? void 0 : e.map(({ value: u, label: c, disabled: l }) => h.createElement(r.Option, { key: u, value: u, disabled: l }, c))),
    h.createElement(
      "span",
      { className: a[g.CaptionLabel], "aria-hidden": !0 },
      s == null ? void 0 : s.label,
      h.createElement(r.Chevron, { orientation: "down", size: 18, className: a[g.Chevron] })
    )
  );
}
function aa(t) {
  return h.createElement("div", { ...t });
}
function oa(t) {
  return h.createElement("div", { ...t });
}
function sa(t) {
  const { calendarMonth: e, displayIndex: n, ...r } = t;
  return h.createElement("div", { ...r }, t.children);
}
function ia(t) {
  const { calendarMonth: e, displayIndex: n, ...r } = t;
  return h.createElement("div", { ...r });
}
function ua(t) {
  return h.createElement("table", { ...t });
}
function ca(t) {
  return h.createElement("div", { ...t });
}
const Tt = hn(void 0);
function Me() {
  const t = mn(Tt);
  if (t === void 0)
    throw new Error("useDayPicker() must be used within a custom component.");
  return t;
}
function da(t) {
  const { components: e } = Me();
  return h.createElement(e.Dropdown, { ...t });
}
function fa(t) {
  const { onPreviousClick: e, onNextClick: n, previousMonth: r, nextMonth: a, ...o } = t, { components: i, classNames: s, labels: { labelPrevious: u, labelNext: c } } = Me(), l = $((m) => {
    a && (n == null || n(m));
  }, [a, n]), d = $((m) => {
    r && (e == null || e(m));
  }, [r, e]);
  return h.createElement(
    "nav",
    { ...o },
    h.createElement(
      i.PreviousMonthButton,
      { type: "button", className: s[g.PreviousMonthButton], tabIndex: r ? void 0 : -1, "aria-disabled": r ? void 0 : !0, "aria-label": u(r), onClick: d },
      h.createElement(i.Chevron, { disabled: r ? void 0 : !0, className: s[g.Chevron], orientation: "left" })
    ),
    h.createElement(
      i.NextMonthButton,
      { type: "button", className: s[g.NextMonthButton], tabIndex: a ? void 0 : -1, "aria-disabled": a ? void 0 : !0, "aria-label": c(a), onClick: l },
      h.createElement(i.Chevron, { disabled: a ? void 0 : !0, orientation: "right", className: s[g.Chevron] })
    )
  );
}
function la(t) {
  const { components: e } = Me();
  return h.createElement(e.Button, { ...t });
}
function ha(t) {
  return h.createElement("option", { ...t });
}
function ma(t) {
  const { components: e } = Me();
  return h.createElement(e.Button, { ...t });
}
function ya(t) {
  const { rootRef: e, ...n } = t;
  return h.createElement("div", { ...n, ref: e });
}
function ga(t) {
  return h.createElement("select", { ...t });
}
function wa(t) {
  const { week: e, ...n } = t;
  return h.createElement("tr", { ...n });
}
function ba(t) {
  return h.createElement("th", { ...t });
}
function Ma(t) {
  return h.createElement(
    "thead",
    { "aria-hidden": !0 },
    h.createElement("tr", { ...t })
  );
}
function ka(t) {
  const { week: e, ...n } = t;
  return h.createElement("th", { ...n });
}
function Da(t) {
  return h.createElement("th", { ...t });
}
function va(t) {
  return h.createElement("tbody", { ...t });
}
function Oa(t) {
  const { components: e } = Me();
  return h.createElement(e.Dropdown, { ...t });
}
const Wa = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button: Jr,
  CaptionLabel: Kr,
  Chevron: ea,
  Day: ta,
  DayButton: na,
  Dropdown: ra,
  DropdownNav: aa,
  Footer: oa,
  Month: sa,
  MonthCaption: ia,
  MonthGrid: ua,
  Months: ca,
  MonthsDropdown: da,
  Nav: fa,
  NextMonthButton: la,
  Option: ha,
  PreviousMonthButton: ma,
  Root: ya,
  Select: ga,
  Week: wa,
  WeekNumber: ka,
  WeekNumberHeader: Da,
  Weekday: ba,
  Weekdays: Ma,
  Weeks: va,
  YearsDropdown: Oa
}, Symbol.toStringTag, { value: "Module" }));
function pa(t) {
  return {
    ...Wa,
    ...t
  };
}
function Sa(t) {
  const e = {
    "data-mode": t.mode ?? void 0,
    "data-required": "required" in t ? t.required : void 0,
    "data-multiple-months": t.numberOfMonths && t.numberOfMonths > 1 || void 0,
    "data-week-numbers": t.showWeekNumber || void 0,
    "data-broadcast-calendar": t.broadcastCalendar || void 0,
    "data-nav-layout": t.navLayout || void 0
  };
  return Object.entries(t).forEach(([n, r]) => {
    n.startsWith("data-") && (e[n] = r);
  }), e;
}
function $e() {
  const t = {};
  for (const e in g)
    t[g[e]] = `rdp-${g[e]}`;
  for (const e in P)
    t[P[e]] = `rdp-${P[e]}`;
  for (const e in Q)
    t[Q[e]] = `rdp-${Q[e]}`;
  for (const e in j)
    t[j[e]] = `rdp-${j[e]}`;
  return t;
}
function Pt(t, e, n) {
  return (n ?? new te(e)).format(t, "LLLL y");
}
const Na = Pt;
function Ca(t, e, n) {
  return (n ?? new te(e)).format(t, "d");
}
function xa(t, e = U) {
  return e.format(t, "LLLL");
}
function _a(t, e = U) {
  return t < 10 ? e.formatNumber(`0${t.toLocaleString()}`) : e.formatNumber(`${t.toLocaleString()}`);
}
function Ya() {
  return "";
}
function Ea(t, e, n) {
  return (n ?? new te(e)).format(t, "cccccc");
}
function Bt(t, e = U) {
  return e.format(t, "yyyy");
}
const Ta = Bt, Pa = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  formatCaption: Pt,
  formatDay: Ca,
  formatMonthCaption: Na,
  formatMonthDropdown: xa,
  formatWeekNumber: _a,
  formatWeekNumberHeader: Ya,
  formatWeekdayName: Ea,
  formatYearCaption: Ta,
  formatYearDropdown: Bt
}, Symbol.toStringTag, { value: "Module" }));
function Ba(t) {
  return t != null && t.formatMonthCaption && !t.formatCaption && (t.formatCaption = t.formatMonthCaption), t != null && t.formatYearCaption && !t.formatYearDropdown && (t.formatYearDropdown = t.formatYearCaption), {
    ...Pa,
    ...t
  };
}
function Fa(t, e, n, r, a) {
  const { startOfMonth: o, startOfYear: i, endOfYear: s, eachMonthOfInterval: u, getMonth: c } = a;
  return u({
    start: i(t),
    end: s(t)
  }).map((m) => {
    const w = r.formatMonthDropdown(m, a), b = c(m), W = e && m < o(e) || n && m > o(n) || !1;
    return { value: b, label: w, disabled: W };
  });
}
function Ia(t, e = {}, n = {}) {
  let r = { ...e == null ? void 0 : e[g.Day] };
  return Object.entries(t).filter(([, a]) => a === !0).forEach(([a]) => {
    r = {
      ...r,
      ...n == null ? void 0 : n[a]
    };
  }), r;
}
function Ha(t, e, n) {
  const r = t.today(), a = e ? t.startOfISOWeek(r) : t.startOfWeek(r), o = [];
  for (let i = 0; i < 7; i++) {
    const s = t.addDays(a, i);
    o.push(s);
  }
  return o;
}
function qa(t, e, n, r) {
  if (!t || !e)
    return;
  const { startOfYear: a, endOfYear: o, addYears: i, getYear: s, isBefore: u, isSameYear: c } = r, l = a(t), d = o(e), m = [];
  let w = l;
  for (; u(w, d) || c(w, d); )
    m.push(w), w = i(w, 1);
  return m.map((b) => {
    const W = n.formatYearDropdown(b, r);
    return {
      value: s(b),
      label: W,
      disabled: !1
    };
  });
}
function Ft(t, e, n) {
  return (n ?? new te(e)).format(t, "LLLL y");
}
const Aa = Ft;
function ja(t, e, n, r) {
  let a = (r ?? new te(n)).format(t, "PPPP");
  return e != null && e.today && (a = `Today, ${a}`), a;
}
function It(t, e, n, r) {
  let a = (r ?? new te(n)).format(t, "PPPP");
  return e.today && (a = `Today, ${a}`), e.selected && (a = `${a}, selected`), a;
}
const za = It;
function $a() {
  return "";
}
function Ra(t) {
  return "Choose the Month";
}
function Ga(t) {
  return "Go to the Next Month";
}
function Za(t) {
  return "Go to the Previous Month";
}
function Qa(t, e, n) {
  return (n ?? new te(e)).format(t, "cccc");
}
function Xa(t, e) {
  return `Week ${t}`;
}
function La(t) {
  return "Week Number";
}
function Va(t) {
  return "Choose the Year";
}
const Ua = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  labelCaption: Aa,
  labelDay: za,
  labelDayButton: It,
  labelGrid: Ft,
  labelGridcell: ja,
  labelMonthDropdown: Ra,
  labelNav: $a,
  labelNext: Ga,
  labelPrevious: Za,
  labelWeekNumber: Xa,
  labelWeekNumberHeader: La,
  labelWeekday: Qa,
  labelYearDropdown: Va
}, Symbol.toStringTag, { value: "Module" })), ke = (t) => t instanceof HTMLElement ? t : null, Fe = (t) => [
  ...t.querySelectorAll("[data-animated-month]") ?? []
], Ja = (t) => ke(t.querySelector("[data-animated-month]")), Ie = (t) => ke(t.querySelector("[data-animated-caption]")), He = (t) => ke(t.querySelector("[data-animated-weeks]")), Ka = (t) => ke(t.querySelector("[data-animated-nav]")), eo = (t) => ke(t.querySelector("[data-animated-weekdays]"));
function to(t, e, { classNames: n, months: r, focused: a, dateLib: o }) {
  const i = pe(null), s = pe(r), u = pe(!1);
  yn(() => {
    const c = s.current;
    if (s.current = r, !e || !t.current || // safety check because the ref can be set to anything by consumers
    !(t.current instanceof HTMLElement) || // validation required for the animation to work as expected
    r.length === 0 || c.length === 0 || r.length !== c.length)
      return;
    const l = o.isSameMonth(r[0].date, c[0].date), d = o.isAfter(r[0].date, c[0].date), m = d ? n[j.caption_after_enter] : n[j.caption_before_enter], w = d ? n[j.weeks_after_enter] : n[j.weeks_before_enter], b = i.current, W = t.current.cloneNode(!0);
    if (W instanceof HTMLElement ? (Fe(W).forEach((y) => {
      if (!(y instanceof HTMLElement))
        return;
      const S = Ja(y);
      S && y.contains(S) && y.removeChild(S);
      const f = Ie(y);
      f && f.classList.remove(m);
      const O = He(y);
      O && O.classList.remove(w);
    }), i.current = W) : i.current = null, u.current || l || // skip animation if a day is focused because it can cause issues to the animation and is better for a11y
    a)
      return;
    const k = b instanceof HTMLElement ? Fe(b) : [], M = Fe(t.current);
    if (M && M.every((D) => D instanceof HTMLElement) && k && k.every((D) => D instanceof HTMLElement)) {
      u.current = !0, t.current.style.isolation = "isolate";
      const D = Ka(t.current);
      D && (D.style.zIndex = "1"), M.forEach((y, S) => {
        const f = k[S];
        if (!f)
          return;
        y.style.position = "relative", y.style.overflow = "hidden";
        const O = Ie(y);
        O && O.classList.add(m);
        const v = He(y);
        v && v.classList.add(w);
        const E = () => {
          u.current = !1, t.current && (t.current.style.isolation = ""), D && (D.style.zIndex = ""), O && O.classList.remove(m), v && v.classList.remove(w), y.style.position = "", y.style.overflow = "", y.contains(f) && y.removeChild(f);
        };
        f.style.pointerEvents = "none", f.style.position = "absolute", f.style.overflow = "hidden", f.setAttribute("aria-hidden", "true");
        const z = eo(f);
        z && (z.style.opacity = "0");
        const A = Ie(f);
        A && (A.classList.add(d ? n[j.caption_before_exit] : n[j.caption_after_exit]), A.addEventListener("animationend", E));
        const H = He(f);
        H && H.classList.add(d ? n[j.weeks_before_exit] : n[j.weeks_after_exit]), y.insertBefore(f, y.firstChild);
      });
    }
  });
}
function no(t, e, n, r) {
  const a = t[0], o = t[t.length - 1], { ISOWeek: i, fixedWeeks: s, broadcastCalendar: u } = n ?? {}, { addDays: c, differenceInCalendarDays: l, differenceInCalendarMonths: d, endOfBroadcastWeek: m, endOfISOWeek: w, endOfMonth: b, endOfWeek: W, isAfter: k, startOfBroadcastWeek: M, startOfISOWeek: D, startOfWeek: y } = r, S = u ? M(a, r) : i ? D(a) : y(a), f = u ? m(o) : i ? w(b(o)) : W(b(o)), O = l(f, S), v = d(o, a) + 1, E = [];
  for (let H = 0; H <= O; H++) {
    const q = c(S, H);
    if (e && k(q, e))
      break;
    E.push(q);
  }
  const A = (u ? 35 : 42) * v;
  if (s && E.length < A) {
    const H = A - E.length;
    for (let q = 0; q < H; q++) {
      const oe = c(E[E.length - 1], 1);
      E.push(oe);
    }
  }
  return E;
}
function ro(t) {
  const e = [];
  return t.reduce((n, r) => {
    const a = r.weeks.reduce((o, i) => [...o, ...i.days], e);
    return [...n, ...a];
  }, e);
}
function ao(t, e, n, r) {
  const { numberOfMonths: a = 1 } = n, o = [];
  for (let i = 0; i < a; i++) {
    const s = r.addMonths(t, i);
    if (e && s > e)
      break;
    o.push(s);
  }
  return o;
}
function dt(t, e) {
  const { month: n, defaultMonth: r, today: a = e.today(), numberOfMonths: o = 1, endMonth: i, startMonth: s } = t;
  let u = n || r || a;
  const { differenceInCalendarMonths: c, addMonths: l, startOfMonth: d } = e;
  if (i && c(i, u) < 0) {
    const m = -1 * (o - 1);
    u = l(i, m);
  }
  return s && c(u, s) < 0 && (u = s), d(u);
}
function oo(t, e, n, r) {
  const { addDays: a, endOfBroadcastWeek: o, endOfISOWeek: i, endOfMonth: s, endOfWeek: u, getISOWeek: c, getWeek: l, startOfBroadcastWeek: d, startOfISOWeek: m, startOfWeek: w } = r, b = t.reduce((W, k) => {
    const M = n.broadcastCalendar ? d(k, r) : n.ISOWeek ? m(k) : w(k), D = n.broadcastCalendar ? o(k) : n.ISOWeek ? i(s(k)) : u(s(k)), y = e.filter((v) => v >= M && v <= D), S = n.broadcastCalendar ? 35 : 42;
    if (n.fixedWeeks && y.length < S) {
      const v = e.filter((E) => {
        const z = S - y.length;
        return E > D && E <= a(D, z);
      });
      y.push(...v);
    }
    const f = y.reduce((v, E) => {
      const z = n.ISOWeek ? c(E) : l(E), A = v.find((q) => q.weekNumber === z), H = new Nt(E, k, r);
      return A ? A.days.push(H) : v.push(new Lr(z, [H])), v;
    }, []), O = new Xr(k, f);
    return W.push(O), W;
  }, []);
  return n.reverseMonths ? b.reverse() : b;
}
function so(t, e) {
  let { startMonth: n, endMonth: r } = t;
  const { startOfYear: a, startOfDay: o, startOfMonth: i, endOfMonth: s, addYears: u, endOfYear: c, newDate: l, today: d } = e, { fromYear: m, toYear: w, fromMonth: b, toMonth: W } = t;
  !n && b && (n = b), !n && m && (n = e.newDate(m, 0, 1)), !r && W && (r = W), !r && w && (r = l(w, 11, 31));
  const k = t.captionLayout === "dropdown" || t.captionLayout === "dropdown-years";
  return n ? n = i(n) : m ? n = l(m, 0, 1) : !n && k && (n = a(u(t.today ?? d(), -100))), r ? r = s(r) : w ? r = l(w, 11, 31) : !r && k && (r = c(t.today ?? d())), [
    n && o(n),
    r && o(r)
  ];
}
function io(t, e, n, r) {
  if (n.disableNavigation)
    return;
  const { pagedNavigation: a, numberOfMonths: o = 1 } = n, { startOfMonth: i, addMonths: s, differenceInCalendarMonths: u } = r, c = a ? o : 1, l = i(t);
  if (!e)
    return s(l, c);
  if (!(u(e, t) < o))
    return s(l, c);
}
function uo(t, e, n, r) {
  if (n.disableNavigation)
    return;
  const { pagedNavigation: a, numberOfMonths: o } = n, { startOfMonth: i, addMonths: s, differenceInCalendarMonths: u } = r, c = a ? o ?? 1 : 1, l = i(t);
  if (!e)
    return s(l, -c);
  if (!(u(l, e) <= 0))
    return s(l, -c);
}
function co(t) {
  const e = [];
  return t.reduce((n, r) => [...n, ...r.weeks], e);
}
function Se(t, e) {
  const [n, r] = qe(t);
  return [e === void 0 ? n : e, r];
}
function fo(t, e) {
  const [n, r] = so(t, e), { startOfMonth: a, endOfMonth: o } = e, i = dt(t, e), [s, u] = Se(
    i,
    // initialMonth is always computed from props.month if provided
    t.month ? i : void 0
  );
  gn(() => {
    const O = dt(t, e);
    u(O);
  }, [t.timeZone]);
  const c = ao(s, r, t, e), l = no(c, t.endMonth ? o(t.endMonth) : void 0, t, e), d = oo(c, l, t, e), m = co(d), w = ro(d), b = uo(s, n, t, e), W = io(s, r, t, e), { disableNavigation: k, onMonthChange: M } = t, D = (O) => m.some((v) => v.days.some((E) => E.isEqualTo(O))), y = (O) => {
    if (k)
      return;
    let v = a(O);
    n && v < a(n) && (v = a(n)), r && v > a(r) && (v = a(r)), u(v), M == null || M(v);
  };
  return {
    months: d,
    weeks: m,
    days: w,
    navStart: n,
    navEnd: r,
    previousMonth: b,
    nextMonth: W,
    goToMonth: y,
    goToDay: (O) => {
      D(O) || y(O.date);
    }
  };
}
var L;
(function(t) {
  t[t.Today = 0] = "Today", t[t.Selected = 1] = "Selected", t[t.LastFocused = 2] = "LastFocused", t[t.FocusedModifier = 3] = "FocusedModifier";
})(L || (L = {}));
function ft(t) {
  return !t[P.disabled] && !t[P.hidden] && !t[P.outside];
}
function lo(t, e, n, r) {
  let a, o = -1;
  for (const i of t) {
    const s = e(i);
    ft(s) && (s[P.focused] && o < L.FocusedModifier ? (a = i, o = L.FocusedModifier) : r != null && r.isEqualTo(i) && o < L.LastFocused ? (a = i, o = L.LastFocused) : n(i.date) && o < L.Selected ? (a = i, o = L.Selected) : s[P.today] && o < L.Today && (a = i, o = L.Today));
  }
  return a || (a = t.find((i) => ft(e(i)))), a;
}
function ho(t, e, n, r, a, o, i) {
  const { ISOWeek: s, broadcastCalendar: u } = o, { addDays: c, addMonths: l, addWeeks: d, addYears: m, endOfBroadcastWeek: w, endOfISOWeek: b, endOfWeek: W, max: k, min: M, startOfBroadcastWeek: D, startOfISOWeek: y, startOfWeek: S } = i;
  let O = {
    day: c,
    week: d,
    month: l,
    year: m,
    startOfWeek: (v) => u ? D(v, i) : s ? y(v) : S(v),
    endOfWeek: (v) => u ? w(v) : s ? b(v) : W(v)
  }[t](n, e === "after" ? 1 : -1);
  return e === "before" && r ? O = k([r, O]) : e === "after" && a && (O = M([a, O])), O;
}
function Ht(t, e, n, r, a, o, i, s = 0) {
  if (s > 365)
    return;
  const u = ho(t, e, n.date, r, a, o, i), c = !!(o.disabled && ee(u, o.disabled, i)), l = !!(o.hidden && ee(u, o.hidden, i)), d = u, m = new Nt(u, d, i);
  return !c && !l ? m : Ht(t, e, m, r, a, o, i, s + 1);
}
function mo(t, e, n, r, a) {
  const { autoFocus: o } = t, [i, s] = qe(), u = lo(e.days, n, r || (() => !1), i), [c, l] = qe(o ? u : void 0);
  return {
    isFocusTarget: (W) => !!(u != null && u.isEqualTo(W)),
    setFocused: l,
    focused: c,
    blur: () => {
      s(c), l(void 0);
    },
    moveFocus: (W, k) => {
      if (!c)
        return;
      const M = Ht(W, k, c, e.navStart, e.navEnd, t, a);
      M && (e.goToDay(M), l(M));
    }
  };
}
function yo(t, e) {
  const { selected: n, required: r, onSelect: a } = t, [o, i] = Se(n, a ? n : void 0), s = a ? n : o, { isSameDay: u } = e, c = (w) => (s == null ? void 0 : s.some((b) => u(b, w))) ?? !1, { min: l, max: d } = t;
  return {
    selected: s,
    select: (w, b, W) => {
      let k = [...s ?? []];
      if (c(w)) {
        if ((s == null ? void 0 : s.length) === l || r && (s == null ? void 0 : s.length) === 1)
          return;
        k = s == null ? void 0 : s.filter((M) => !u(M, w));
      } else
        (s == null ? void 0 : s.length) === d ? k = [w] : k = [...k, w];
      return a || i(k), a == null || a(k, w, b, W), k;
    },
    isSelected: c
  };
}
function go(t, e, n = 0, r = 0, a = !1, o = U) {
  const { from: i, to: s } = e || {}, { isSameDay: u, isAfter: c, isBefore: l } = o;
  let d;
  if (!i && !s)
    d = { from: t, to: n > 0 ? void 0 : t };
  else if (i && !s)
    u(i, t) ? a ? d = { from: i, to: void 0 } : d = void 0 : l(t, i) ? d = { from: t, to: i } : d = { from: i, to: t };
  else if (i && s)
    if (u(i, t) && u(s, t))
      a ? d = { from: i, to: s } : d = void 0;
    else if (u(i, t))
      d = { from: i, to: n > 0 ? void 0 : t };
    else if (u(s, t))
      d = { from: t, to: n > 0 ? void 0 : t };
    else if (l(t, i))
      d = { from: t, to: s };
    else if (c(t, i))
      d = { from: i, to: t };
    else if (c(t, s))
      d = { from: i, to: t };
    else
      throw new Error("Invalid range");
  if (d != null && d.from && (d != null && d.to)) {
    const m = o.differenceInCalendarDays(d.to, d.from);
    r > 0 && m > r ? d = { from: t, to: void 0 } : n > 1 && m < n && (d = { from: t, to: void 0 });
  }
  return d;
}
function wo(t, e, n = U) {
  const r = Array.isArray(e) ? e : [e];
  let a = t.from;
  const o = n.differenceInCalendarDays(t.to, t.from), i = Math.min(o, 6);
  for (let s = 0; s <= i; s++) {
    if (r.includes(a.getDay()))
      return !0;
    a = n.addDays(a, 1);
  }
  return !1;
}
function lt(t, e, n = U) {
  return K(t, e.from, !1, n) || K(t, e.to, !1, n) || K(e, t.from, !1, n) || K(e, t.to, !1, n);
}
function bo(t, e, n = U) {
  const r = Array.isArray(e) ? e : [e];
  if (r.filter((s) => typeof s != "function").some((s) => typeof s == "boolean" ? s : n.isDate(s) ? K(t, s, !1, n) : Et(s, n) ? s.some((u) => K(t, u, !1, n)) : ze(s) ? s.from && s.to ? lt(t, { from: s.from, to: s.to }, n) : !1 : Yt(s) ? wo(t, s.dayOfWeek, n) : Ct(s) ? n.isAfter(s.before, s.after) ? lt(t, {
    from: n.addDays(s.after, 1),
    to: n.addDays(s.before, -1)
  }, n) : ee(t.from, s, n) || ee(t.to, s, n) : xt(s) || _t(s) ? ee(t.from, s, n) || ee(t.to, s, n) : !1))
    return !0;
  const i = r.filter((s) => typeof s == "function");
  if (i.length) {
    let s = t.from;
    const u = n.differenceInCalendarDays(t.to, t.from);
    for (let c = 0; c <= u; c++) {
      if (i.some((l) => l(s)))
        return !0;
      s = n.addDays(s, 1);
    }
  }
  return !1;
}
function Mo(t, e) {
  const { disabled: n, excludeDisabled: r, selected: a, required: o, onSelect: i } = t, [s, u] = Se(a, i ? a : void 0), c = i ? a : s;
  return {
    selected: c,
    select: (m, w, b) => {
      const { min: W, max: k } = t, M = m ? go(m, c, W, k, o, e) : void 0;
      return r && n && (M != null && M.from) && M.to && bo({ from: M.from, to: M.to }, n, e) && (M.from = m, M.to = void 0), i || u(M), i == null || i(M, m, w, b), M;
    },
    isSelected: (m) => c && K(c, m, !1, e)
  };
}
function ko(t, e) {
  const { selected: n, required: r, onSelect: a } = t, [o, i] = Se(n, a ? n : void 0), s = a ? n : o, { isSameDay: u } = e;
  return {
    selected: s,
    select: (d, m, w) => {
      let b = d;
      return !r && s && s && u(d, s) && (b = void 0), a || i(b), a == null || a(b, d, m, w), b;
    },
    isSelected: (d) => s ? u(s, d) : !1
  };
}
function Do(t, e) {
  const n = ko(t, e), r = yo(t, e), a = Mo(t, e);
  switch (t.mode) {
    case "single":
      return n;
    case "multiple":
      return r;
    case "range":
      return a;
    default:
      return;
  }
}
function vo(t) {
  var Je;
  let e = t;
  e.timeZone && (e = {
    ...t
  }, e.today && (e.today = new I(e.today, e.timeZone)), e.month && (e.month = new I(e.month, e.timeZone)), e.defaultMonth && (e.defaultMonth = new I(e.defaultMonth, e.timeZone)), e.startMonth && (e.startMonth = new I(e.startMonth, e.timeZone)), e.endMonth && (e.endMonth = new I(e.endMonth, e.timeZone)), e.mode === "single" && e.selected ? e.selected = new I(e.selected, e.timeZone) : e.mode === "multiple" && e.selected ? e.selected = (Je = e.selected) == null ? void 0 : Je.map((p) => new I(p, e.timeZone)) : e.mode === "range" && e.selected && (e.selected = {
    from: e.selected.from ? new I(e.selected.from, e.timeZone) : void 0,
    to: e.selected.to ? new I(e.selected.to, e.timeZone) : void 0
  }));
  const { components: n, formatters: r, labels: a, dateLib: o, locale: i, classNames: s } = Te(() => {
    const p = { ...je, ...e.locale };
    return {
      dateLib: new te({
        locale: p,
        weekStartsOn: e.broadcastCalendar ? 1 : e.weekStartsOn,
        firstWeekContainsDate: e.firstWeekContainsDate,
        useAdditionalWeekYearTokens: e.useAdditionalWeekYearTokens,
        useAdditionalDayOfYearTokens: e.useAdditionalDayOfYearTokens,
        timeZone: e.timeZone,
        numerals: e.numerals
      }, e.dateLib),
      components: pa(e.components),
      formatters: Ba(e.formatters),
      labels: { ...Ua, ...e.labels },
      locale: p,
      classNames: { ...$e(), ...e.classNames }
    };
  }, [
    e.locale,
    e.broadcastCalendar,
    e.weekStartsOn,
    e.firstWeekContainsDate,
    e.useAdditionalWeekYearTokens,
    e.useAdditionalDayOfYearTokens,
    e.timeZone,
    e.numerals,
    e.dateLib,
    e.components,
    e.formatters,
    e.labels,
    e.classNames
  ]), { captionLayout: u, mode: c, navLayout: l, numberOfMonths: d = 1, onDayBlur: m, onDayClick: w, onDayFocus: b, onDayKeyDown: W, onDayMouseEnter: k, onDayMouseLeave: M, onNextClick: D, onPrevClick: y, showWeekNumber: S, styles: f } = e, { formatCaption: O, formatDay: v, formatMonthDropdown: E, formatWeekNumber: z, formatWeekNumberHeader: A, formatWeekdayName: H, formatYearDropdown: q } = r, oe = fo(e, o), { days: Re, months: Ne, navStart: Ge, navEnd: Ze, previousMonth: R, nextMonth: G, goToMonth: J } = oe, Ce = Vr(Re, e, o), { isSelected: de, select: fe, selected: De } = Do(e, o) ?? {}, { blur: Qe, focused: ve, isFocusTarget: qt, moveFocus: Xe, setFocused: Oe } = mo(e, oe, Ce, de ?? (() => !1), o), { labelDayButton: At, labelGridcell: jt, labelGrid: zt, labelMonthDropdown: $t, labelNav: Le, labelPrevious: Rt, labelNext: Gt, labelWeekday: Zt, labelWeekNumber: Qt, labelWeekNumberHeader: Xt, labelYearDropdown: Lt } = a, Vt = Te(() => Ha(o, e.ISOWeek), [o, e.ISOWeek]), Ve = c !== void 0 || w !== void 0, xe = $(() => {
    R && (J(R), y == null || y(R));
  }, [R, J, y]), _e = $(() => {
    G && (J(G), D == null || D(G));
  }, [J, G, D]), Ut = $((p, T) => (Y) => {
    Y.preventDefault(), Y.stopPropagation(), Oe(p), fe == null || fe(p.date, T, Y), w == null || w(p.date, T, Y);
  }, [fe, w, Oe]), Jt = $((p, T) => (Y) => {
    Oe(p), b == null || b(p.date, T, Y);
  }, [b, Oe]), Kt = $((p, T) => (Y) => {
    Qe(), m == null || m(p.date, T, Y);
  }, [Qe, m]), en = $((p, T) => (Y) => {
    const ne = {
      ArrowLeft: ["day", e.dir === "rtl" ? "after" : "before"],
      ArrowRight: ["day", e.dir === "rtl" ? "before" : "after"],
      ArrowDown: ["week", "after"],
      ArrowUp: ["week", "before"],
      PageUp: [Y.shiftKey ? "year" : "month", "before"],
      PageDown: [Y.shiftKey ? "year" : "month", "after"],
      Home: ["startOfWeek", "before"],
      End: ["endOfWeek", "after"]
    };
    if (ne[Y.key]) {
      Y.preventDefault(), Y.stopPropagation();
      const [Z, We] = ne[Y.key];
      Xe(Z, We);
    }
    W == null || W(p.date, T, Y);
  }, [Xe, W, e.dir]), tn = $((p, T) => (Y) => {
    k == null || k(p.date, T, Y);
  }, [k]), nn = $((p, T) => (Y) => {
    M == null || M(p.date, T, Y);
  }, [M]), rn = $((p) => (T) => {
    const Y = Number(T.target.value), ne = o.setMonth(o.startOfMonth(p), Y);
    J(ne);
  }, [o, J]), an = $((p) => (T) => {
    const Y = Number(T.target.value), ne = o.setYear(o.startOfMonth(p), Y);
    J(ne);
  }, [o, J]), { className: on, style: sn } = Te(() => ({
    className: [s[g.Root], e.className].filter(Boolean).join(" "),
    style: { ...f == null ? void 0 : f[g.Root], ...e.style }
  }), [s, e.className, e.style, f]), un = Sa(e), Ue = pe(null);
  to(Ue, !!e.animate, {
    classNames: s,
    months: Ne,
    focused: ve,
    dateLib: o
  });
  const cn = {
    dayPickerProps: e,
    selected: De,
    select: fe,
    isSelected: de,
    months: Ne,
    nextMonth: G,
    previousMonth: R,
    goToMonth: J,
    getModifiers: Ce,
    components: n,
    classNames: s,
    styles: f,
    labels: a,
    formatters: r
  };
  return h.createElement(
    Tt.Provider,
    { value: cn },
    h.createElement(
      n.Root,
      { rootRef: e.animate ? Ue : void 0, className: on, style: sn, dir: e.dir, id: e.id, lang: e.lang, nonce: e.nonce, title: e.title, role: e.role, "aria-label": e["aria-label"], ...un },
      h.createElement(
        n.Months,
        { className: s[g.Months], style: f == null ? void 0 : f[g.Months] },
        !e.hideNavigation && !l && h.createElement(n.Nav, { "data-animated-nav": e.animate ? "true" : void 0, className: s[g.Nav], style: f == null ? void 0 : f[g.Nav], "aria-label": Le(), onPreviousClick: xe, onNextClick: _e, previousMonth: R, nextMonth: G }),
        Ne.map((p, T) => {
          const Y = Fa(p.date, Ge, Ze, r, o), ne = qa(Ge, Ze, r, o);
          return h.createElement(
            n.Month,
            { "data-animated-month": e.animate ? "true" : void 0, className: s[g.Month], style: f == null ? void 0 : f[g.Month], key: T, displayIndex: T, calendarMonth: p },
            l === "around" && !e.hideNavigation && T === 0 && h.createElement(
              n.PreviousMonthButton,
              { type: "button", className: s[g.PreviousMonthButton], tabIndex: R ? void 0 : -1, "aria-disabled": R ? void 0 : !0, "aria-label": Rt(R), onClick: xe, "data-animated-button": e.animate ? "true" : void 0 },
              h.createElement(n.Chevron, { disabled: R ? void 0 : !0, className: s[g.Chevron], orientation: e.dir === "rtl" ? "right" : "left" })
            ),
            h.createElement(n.MonthCaption, { "data-animated-caption": e.animate ? "true" : void 0, className: s[g.MonthCaption], style: f == null ? void 0 : f[g.MonthCaption], calendarMonth: p, displayIndex: T }, u != null && u.startsWith("dropdown") ? h.createElement(
              n.DropdownNav,
              { className: s[g.Dropdowns], style: f == null ? void 0 : f[g.Dropdowns] },
              u === "dropdown" || u === "dropdown-months" ? h.createElement(n.MonthsDropdown, { className: s[g.MonthsDropdown], "aria-label": $t(), classNames: s, components: n, disabled: !!e.disableNavigation, onChange: rn(p.date), options: Y, style: f == null ? void 0 : f[g.Dropdown], value: o.getMonth(p.date) }) : h.createElement("span", null, E(p.date, o)),
              u === "dropdown" || u === "dropdown-years" ? h.createElement(n.YearsDropdown, { className: s[g.YearsDropdown], "aria-label": Lt(o.options), classNames: s, components: n, disabled: !!e.disableNavigation, onChange: an(p.date), options: ne, style: f == null ? void 0 : f[g.Dropdown], value: o.getYear(p.date) }) : h.createElement("span", null, q(p.date, o)),
              h.createElement("span", { role: "status", "aria-live": "polite", style: {
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
              } }, O(p.date, o.options, o))
            ) : h.createElement(n.CaptionLabel, { className: s[g.CaptionLabel], role: "status", "aria-live": "polite" }, O(p.date, o.options, o))),
            l === "around" && !e.hideNavigation && T === d - 1 && h.createElement(
              n.NextMonthButton,
              { type: "button", className: s[g.NextMonthButton], tabIndex: G ? void 0 : -1, "aria-disabled": G ? void 0 : !0, "aria-label": Gt(G), onClick: _e, "data-animated-button": e.animate ? "true" : void 0 },
              h.createElement(n.Chevron, { disabled: G ? void 0 : !0, className: s[g.Chevron], orientation: e.dir === "rtl" ? "left" : "right" })
            ),
            T === d - 1 && l === "after" && !e.hideNavigation && h.createElement(n.Nav, { "data-animated-nav": e.animate ? "true" : void 0, className: s[g.Nav], style: f == null ? void 0 : f[g.Nav], "aria-label": Le(), onPreviousClick: xe, onNextClick: _e, previousMonth: R, nextMonth: G }),
            h.createElement(
              n.MonthGrid,
              { role: "grid", "aria-multiselectable": c === "multiple" || c === "range", "aria-label": zt(p.date, o.options, o) || void 0, className: s[g.MonthGrid], style: f == null ? void 0 : f[g.MonthGrid] },
              !e.hideWeekdays && h.createElement(
                n.Weekdays,
                { "data-animated-weekdays": e.animate ? "true" : void 0, className: s[g.Weekdays], style: f == null ? void 0 : f[g.Weekdays] },
                S && h.createElement(n.WeekNumberHeader, { "aria-label": Xt(o.options), className: s[g.WeekNumberHeader], style: f == null ? void 0 : f[g.WeekNumberHeader], scope: "col" }, A()),
                Vt.map((Z, We) => h.createElement(n.Weekday, { "aria-label": Zt(Z, o.options, o), className: s[g.Weekday], key: We, style: f == null ? void 0 : f[g.Weekday], scope: "col" }, H(Z, o.options, o)))
              ),
              h.createElement(n.Weeks, { "data-animated-weeks": e.animate ? "true" : void 0, className: s[g.Weeks], style: f == null ? void 0 : f[g.Weeks] }, p.weeks.map((Z, We) => h.createElement(
                n.Week,
                { className: s[g.Week], key: Z.weekNumber, style: f == null ? void 0 : f[g.Week], week: Z },
                S && h.createElement(n.WeekNumber, { week: Z, style: f == null ? void 0 : f[g.WeekNumber], "aria-label": Qt(Z.weekNumber, {
                  locale: i
                }), className: s[g.WeekNumber], scope: "row", role: "rowheader" }, z(Z.weekNumber, o)),
                Z.days.map((F) => {
                  const { date: X } = F, C = Ce(F);
                  if (C[P.focused] = !C.hidden && !!(ve != null && ve.isEqualTo(F)), C[Q.selected] = (de == null ? void 0 : de(X)) || C.selected, ze(De)) {
                    const { from: Ye, to: Ee } = De;
                    C[Q.range_start] = !!(Ye && Ee && o.isSameDay(X, Ye)), C[Q.range_end] = !!(Ye && Ee && o.isSameDay(X, Ee)), C[Q.range_middle] = K(De, X, !0, o);
                  }
                  const dn = Ia(C, f, e.modifiersStyles), fn = Ur(C, s, e.modifiersClassNames), ln = !Ve && !C.hidden ? jt(X, C, o.options, o) : void 0;
                  return h.createElement(n.Day, { key: `${o.format(X, "yyyy-MM-dd")}_${o.format(F.displayMonth, "yyyy-MM")}`, day: F, modifiers: C, className: fn.join(" "), style: dn, role: "gridcell", "aria-selected": C.selected || void 0, "aria-label": ln, "data-day": o.format(X, "yyyy-MM-dd"), "data-month": F.outside ? o.format(X, "yyyy-MM") : void 0, "data-selected": C.selected || void 0, "data-disabled": C.disabled || void 0, "data-hidden": C.hidden || void 0, "data-outside": F.outside || void 0, "data-focused": C.focused || void 0, "data-today": C.today || void 0 }, !C.hidden && Ve ? h.createElement(n.DayButton, { className: s[g.DayButton], style: f == null ? void 0 : f[g.DayButton], type: "button", day: F, modifiers: C, disabled: C.disabled || void 0, tabIndex: qt(F) ? 0 : -1, "aria-label": At(X, C, o.options, o), onClick: Ut(F, C), onBlur: Kt(F, C), onFocus: Jt(F, C), onKeyDown: en(F, C), onMouseEnter: tn(F, C), onMouseLeave: nn(F, C) }, v(X, o.options, o)) : !C.hidden && v(F.date, o.options, o));
                })
              )))
            )
          );
        })
      ),
      e.footer && h.createElement(n.Footer, { className: s[g.Footer], style: f == null ? void 0 : f[g.Footer], role: "status", "aria-live": "polite" }, e.footer)
    )
  );
}
function Yo({
  className: t,
  classNames: e,
  showOutsideDays: n = !0,
  captionLayout: r = "label",
  buttonVariant: a = "ghost",
  formatters: o,
  components: i,
  ...s
}) {
  const u = $e();
  return /* @__PURE__ */ ae(
    vo,
    {
      showOutsideDays: n,
      className: N(
        "bg-background group/calendar p-3 [--cell-size:--spacing(8)] [[data-slot=card-content]_&]:bg-transparent [[data-slot=popover-content]_&]:bg-transparent",
        String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,
        String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
        t
      ),
      captionLayout: r,
      formatters: {
        formatMonthDropdown: (c) => c.toLocaleString("default", { month: "short" }),
        ...o
      },
      classNames: {
        root: N("w-fit", u.root),
        months: N(
          "flex gap-4 flex-col md:flex-row relative",
          u.months
        ),
        month: N("flex flex-col w-full gap-4", u.month),
        nav: N(
          "flex items-center gap-1 w-full absolute top-0 inset-x-0 justify-between",
          u.nav
        ),
        button_previous: N(
          et({ variant: a }),
          "size-(--cell-size) aria-disabled:opacity-50 p-0 select-none",
          u.button_previous
        ),
        button_next: N(
          et({ variant: a }),
          "size-(--cell-size) aria-disabled:opacity-50 p-0 select-none",
          u.button_next
        ),
        month_caption: N(
          "flex items-center justify-center h-(--cell-size) w-full px-(--cell-size)",
          u.month_caption
        ),
        dropdowns: N(
          "w-full flex items-center text-sm font-medium justify-center h-(--cell-size) gap-1.5",
          u.dropdowns
        ),
        dropdown_root: N(
          "relative has-focus:border-ring border border-input shadow-xs has-focus:ring-ring/50 has-focus:ring-[3px] rounded-md",
          u.dropdown_root
        ),
        dropdown: N("absolute inset-0 opacity-0", u.dropdown),
        caption_label: N(
          "select-none font-medium",
          r === "label" ? "text-sm" : "rounded-md pl-2 pr-1 flex items-center gap-1 text-sm h-8 [&>svg]:text-muted-foreground [&>svg]:size-3.5",
          u.caption_label
        ),
        table: "w-full border-collapse",
        weekdays: N("flex", u.weekdays),
        weekday: N(
          "text-muted-foreground rounded-md flex-1 font-normal text-[0.8rem] select-none",
          u.weekday
        ),
        week: N("flex w-full mt-2", u.week),
        week_number_header: N(
          "select-none w-(--cell-size)",
          u.week_number_header
        ),
        week_number: N(
          "text-[0.8rem] select-none text-muted-foreground",
          u.week_number
        ),
        day: N(
          "relative w-full h-full p-0 text-center [&:first-child[data-selected=true]_button]:rounded-l-md [&:last-child[data-selected=true]_button]:rounded-r-md group/day aspect-square select-none",
          u.day
        ),
        range_start: N(
          "rounded-l-md bg-accent",
          u.range_start
        ),
        range_middle: N("rounded-none", u.range_middle),
        range_end: N("rounded-r-md bg-accent", u.range_end),
        today: N(
          "bg-accent text-accent-foreground rounded-md data-[selected=true]:rounded-none",
          u.today
        ),
        outside: N(
          "text-muted-foreground aria-selected:text-muted-foreground",
          u.outside
        ),
        disabled: N(
          "text-muted-foreground opacity-50",
          u.disabled
        ),
        hidden: N("invisible", u.hidden),
        ...e
      },
      components: {
        Root: ({ className: c, rootRef: l, ...d }) => /* @__PURE__ */ ae(
          "div",
          {
            "data-slot": "calendar",
            ref: l,
            className: N(c),
            ...d
          }
        ),
        Chevron: ({ className: c, orientation: l, ...d }) => l === "left" ? /* @__PURE__ */ ae(bn, { className: N("size-4", c), ...d }) : l === "right" ? /* @__PURE__ */ ae(
          Mn,
          {
            className: N("size-4", c),
            ...d
          }
        ) : /* @__PURE__ */ ae(kn, { className: N("size-4", c), ...d }),
        DayButton: Oo,
        WeekNumber: ({ children: c, ...l }) => /* @__PURE__ */ ae("td", { ...l, children: /* @__PURE__ */ ae("div", { className: "flex size-(--cell-size) items-center justify-center text-center", children: c }) }),
        ...i
      },
      ...s
    }
  );
}
function Oo({
  className: t,
  day: e,
  modifiers: n,
  ...r
}) {
  const a = $e(), o = Ke.useRef(null);
  return Ke.useEffect(() => {
    var i;
    n.focused && ((i = o.current) == null || i.focus());
  }, [n.focused]), /* @__PURE__ */ ae(
    wn,
    {
      ref: o,
      variant: "ghost",
      size: "icon",
      "data-day": e.date.toLocaleDateString(),
      "data-selected-single": n.selected && !n.range_start && !n.range_end && !n.range_middle,
      "data-range-start": n.range_start,
      "data-range-end": n.range_end,
      "data-range-middle": n.range_middle,
      className: N(
        "data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground data-[range-middle=true]:bg-accent data-[range-middle=true]:text-accent-foreground data-[range-start=true]:bg-primary data-[range-start=true]:text-primary-foreground data-[range-end=true]:bg-primary data-[range-end=true]:text-primary-foreground group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:ring-ring/50 dark:hover:text-accent-foreground flex aspect-square size-auto w-full min-w-(--cell-size) flex-col gap-1 leading-none font-normal group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 group-data-[focused=true]/day:ring-[3px] data-[range-end=true]:rounded-md data-[range-end=true]:rounded-r-md data-[range-middle=true]:rounded-none data-[range-start=true]:rounded-md data-[range-start=true]:rounded-l-md [&>span]:text-xs [&>span]:opacity-70",
        a.day,
        t
      ),
      ...r
    }
  );
}
export {
  Yo as Calendar,
  Oo as CalendarDayButton
};
//# sourceMappingURL=calendar.js.map
