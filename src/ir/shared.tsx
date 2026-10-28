// @ts-nocheck
/* eslint-disable */
// Generated port of the IR Co-Pilot demo (Radar / Canvas / GEI).
import * as React from "react";
import { AlertDialog } from "@/components/ui/alert-dialog";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Dialog } from "@/components/ui/dialog";
import { DropdownMenu, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Popover, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectValue } from "@/components/ui/select";

export function Nj(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}

export const ne = Nj(React);

export let Yh = 1;

export let aM = class {
  constructor() {
    this.subscribe = (e) => (this.subscribers.push(e), () => {
      let n = this.subscribers.indexOf(e);
      this.subscribers.splice(n, 1);
    }), this.publish = (e) => {
      this.subscribers.forEach((n) => n(e));
    }, this.addToast = (e) => {
      this.publish(e), this.toasts = [...this.toasts, e];
    }, this.create = (e) => {
      var n;
      let { message: s, ...a } = e, r = typeof (e == null ? void 0 : e.id) == "number" || ((n = e.id) == null ? void 0 : n.length) > 0 ? e.id : Yh++, i = this.toasts.find((l) => l.id === r), o = e.dismissible === void 0 ? true : e.dismissible;
      return this.dismissedToasts.has(r) && this.dismissedToasts.delete(r), i ? this.toasts = this.toasts.map((l) => l.id === r ? (this.publish({ ...l, ...e, id: r, title: s }), { ...l, ...e, id: r, dismissible: o, title: s }) : l) : this.addToast({ title: s, ...a, dismissible: o, id: r }), r;
    }, this.dismiss = (e) => (this.dismissedToasts.add(e), e || this.toasts.forEach((n) => {
      this.subscribers.forEach((s) => s({ id: n.id, dismiss: true }));
    }), this.subscribers.forEach((n) => n({ id: e, dismiss: true })), e), this.message = (e, n) => this.create({ ...n, message: e }), this.error = (e, n) => this.create({ ...n, message: e, type: "error" }), this.success = (e, n) => this.create({ ...n, type: "success", message: e }), this.info = (e, n) => this.create({ ...n, type: "info", message: e }), this.warning = (e, n) => this.create({ ...n, type: "warning", message: e }), this.loading = (e, n) => this.create({ ...n, type: "loading", message: e }), this.promise = (e, n) => {
      if (!n) return;
      let s;
      n.loading !== void 0 && (s = this.create({ ...n, promise: e, type: "loading", message: n.loading, description: typeof n.description != "function" ? n.description : void 0 }));
      let a = e instanceof Promise ? e : e(), r = s !== void 0, i, o = a.then(async (c) => {
        if (i = ["resolve", c], ne.isValidElement(c)) r = false, this.create({ id: s, type: "default", message: c });
        else if (iM(c) && !c.ok) {
          r = false;
          let u = typeof n.error == "function" ? await n.error(`HTTP error! status: ${c.status}`) : n.error, m = typeof n.description == "function" ? await n.description(`HTTP error! status: ${c.status}`) : n.description;
          this.create({ id: s, type: "error", message: u, description: m });
        } else if (n.success !== void 0) {
          r = false;
          let u = typeof n.success == "function" ? await n.success(c) : n.success, m = typeof n.description == "function" ? await n.description(c) : n.description;
          this.create({ id: s, type: "success", message: u, description: m });
        }
      }).catch(async (c) => {
        if (i = ["reject", c], n.error !== void 0) {
          r = false;
          let u = typeof n.error == "function" ? await n.error(c) : n.error, m = typeof n.description == "function" ? await n.description(c) : n.description;
          this.create({ id: s, type: "error", message: u, description: m });
        }
      }).finally(() => {
        var c;
        r && (this.dismiss(s), s = void 0), (c = n.finally) == null || c.call(n);
      }), l = () => new Promise((c, u) => o.then(() => i[0] === "reject" ? u(i[1]) : c(i[1])).catch(u));
      return typeof s != "string" && typeof s != "number" ? { unwrap: l } : Object.assign(s, { unwrap: l });
    }, this.custom = (e, n) => {
      let s = (n == null ? void 0 : n.id) || Yh++;
      return this.create({ jsx: e(s), id: s, ...n }), s;
    }, this.getActiveToasts = () => this.toasts.filter((e) => !this.dismissedToasts.has(e.id)), this.subscribers = [], this.toasts = [], this.dismissedToasts = /* @__PURE__ */ new Set();
  }
};

export let un = new aM();

export let rM = (e, n) => {
  let s = (n == null ? void 0 : n.id) || Yh++;
  return un.addToast({ title: e, ...n, id: s }), s;
};

export let iM = (e) => e && typeof e == "object" && "ok" in e && typeof e.ok == "boolean" && "status" in e && typeof e.status == "number";

export let oM = rM;

export let lM = () => un.toasts;

export let cM = () => un.getActiveToasts();

export let xn = Object.assign(oM, { success: un.success, info: un.info, warning: un.warning, error: un.error, custom: un.custom, message: un.message, promise: un.promise, dismiss: un.dismiss, loading: un.loading }, { getHistory: lM, getToasts: cM });

export function Vn() {
  return (<footer className="w-full border-t bg-card py-4 mt-auto">
<div className="container mx-auto px-4">
<p className="text-center text-xs text-muted-foreground">
{"Powered by IR Co-Pilot"}
</p>
</div>
</footer>);
}

export let f_ = Select;

export let x_ = SelectValue;

export const C_le = f_;

export const C_ce = x_;

export let $6 = DropdownMenu;

export let J6 = DropdownMenuTrigger;

export const C_ei = $6;

export const C_ti = J6;

export let C_cg = Dialog;

export const C_ot = C_cg;

export const ga = [{ id: "ds-001", name: "Q2 2026 Analyst Coverage Pack", description: "Curated analyst commentary and research notes from key coverage analysts", status: "active", createdFrom: ["analysts"], createdOn: "Sep 8, 2026", createdBy: "IR Team", lastUpdated: "Sep 18, 2026", activityLevel: "high", topics: ["Financials", "Guidance", "Pipeline"], enabledModules: ["radar", "canvas", "coach"], itemCount: 24, updateCadence: "Weekly refresh", purpose: "Provides comprehensive analyst sentiment and messaging consistency tracking for IR preparation and executive briefings", useCases: ["Pre-earnings analyst expectation mapping", "Competitive intelligence synthesis", "Message testing and narrative alignment", "Board reporting on external perception"], moduleAccess: { radar: true, canvas: true, coach: true }, includedEntityIds: { analysts: ["1", "2", "3", "4"] } }, { id: "ds-002", name: "Immunology Competitive Landscape", description: "Intelligence on competitor positioning in immunology therapeutic area", status: "active", createdFrom: ["companies", "assets"], createdOn: "Aug 15, 2026", createdBy: "Strategy Team", lastUpdated: "Sep 15, 2026", activityLevel: "medium", topics: ["Competitive Positioning", "Clinical Data", "Pipeline"], enabledModules: ["radar", "canvas"], itemCount: 18, updateCadence: "Daily monitoring", purpose: "Enables real-time competitive awareness and proactive positioning for IR communications", useCases: ["Competitive response preparation", "Investor Q&A anticipation", "Strategic narrative development"], moduleAccess: { radar: true, canvas: true, coach: false }, includedEntityIds: { companies: ["2", "3", "4", "5"], assets: ["2", "3", "4"] } }, { id: "ds-003", name: "JPM 2026 Event Intelligence", description: "Consolidated insights from JP Morgan Healthcare Conference presentations", status: "approved", createdFrom: ["events", "analysts"], createdOn: "Sep 12, 2026", createdBy: "IR Team", lastUpdated: "Sep 14, 2026", activityLevel: "high", topics: ["Strategy", "Guidance", "Investor Sentiment"], enabledModules: ["canvas", "coach"], itemCount: 31, updateCadence: "Event-driven", purpose: "Tracks JPMorgan Healthcare Conference insights for strategic positioning and investor engagement", useCases: ["Conference debrief preparation", "Peer messaging analysis", "Investor follow-up prioritization"], moduleAccess: { radar: false, canvas: true, coach: true }, includedEntityIds: { events: ["2"], analysts: ["1", "3"] } }, { id: "ds-004", name: "Pipeline Narrative Tracking", description: "Narrative patterns emerging around late-stage pipeline assets", status: "draft", createdFrom: ["narratives", "assets"], createdOn: "Sep 19, 2026", createdBy: "System", lastUpdated: "Sep 19, 2026", activityLevel: "low", topics: ["Pipeline", "Clinical Data", "Regulatory"], enabledModules: [], itemCount: 12, updateCadence: "Weekly", purpose: "Monitors narrative evolution around key pipeline assets to inform proactive messaging", useCases: ["Pipeline narrative monitoring", "Risk narrative early warning", "Message calibration"], moduleAccess: { radar: false, canvas: false, coach: false }, includedEntityIds: { narratives: ["narrative-2", "narrative-4"], assets: ["5", "6"] } }, { id: "ds-005", name: "Market Volatility Signals - Pharma", description: "Quantitative market signals tracking sector-level movements", status: "inactive", createdFrom: ["market-signals"], createdOn: "Jul 20, 2026", createdBy: "Analytics Team", lastUpdated: "Aug 1, 2026", activityLevel: "low", topics: ["Market Activity", "Investor Sentiment"], enabledModules: ["radar"], itemCount: 8, updateCadence: "Real-time", purpose: "Provides quantitative market signal monitoring for rapid response to sector volatility", useCases: ["Market volatility early warning", "Trading day briefings", "Sector read-through analysis"], moduleAccess: { radar: true, canvas: false, coach: false }, includedEntityIds: { signals: ["1", "3", "4", "5"] } }, { id: "ds-006", name: "Entresto LOE Preparation", description: "Intelligence supporting Entresto loss of exclusivity communications", status: "approved", createdFrom: ["analysts", "companies", "narratives"], createdOn: "Sep 5, 2026", createdBy: "IR Team", lastUpdated: "Sep 17, 2026", activityLevel: "medium", topics: ["Competitive Positioning", "Financials", "Strategy"], enabledModules: ["canvas"], itemCount: 22, updateCadence: "Bi-weekly", purpose: "Consolidates intelligence supporting Entresto LOE communications and investor messaging", useCases: ["LOE messaging preparation", "Investor Q&A readiness", "Competitive response planning"], moduleAccess: { radar: false, canvas: true, coach: false }, includedEntityIds: { analysts: ["1", "2"], companies: ["2", "3"], narratives: ["narrative-1", "narrative-3"] } }];

export function we(e) {
  const n = Object.prototype.toString.call(e);
  return e instanceof Date || typeof e == "object" && n === "[object Date]" ? new e.constructor(+e) : typeof e == "number" || n === "[object Number]" || typeof e == "string" || n === "[object String]" ? new Date(e) : /* @__PURE__ */ new Date(NaN);
}

export function qe(e, n) {
  return e instanceof Date ? new e.constructor(n) : new Date(n);
}

export const ug = 6048e5;

export const $O = 864e5;

export let UO = {};

export function xi() {
  return UO;
}

export function Fn(e, n) {
  var l, c, u, m;
  const s = xi(), a = (n == null ? void 0 : n.weekStartsOn) ?? ((c = (l = n == null ? void 0 : n.locale) == null ? void 0 : l.options) == null ? void 0 : c.weekStartsOn) ?? s.weekStartsOn ?? ((m = (u = s.locale) == null ? void 0 : u.options) == null ? void 0 : m.weekStartsOn) ?? 0, r = we(e), i = r.getDay(), o = (i < a ? 7 : 0) + i - a;
  return r.setDate(r.getDate() - o), r.setHours(0, 0, 0, 0), r;
}

export function va(e) {
  return Fn(e, { weekStartsOn: 1 });
}

export function wS(e) {
  const n = we(e), s = n.getFullYear(), a = qe(e, 0);
  a.setFullYear(s + 1, 0, 4), a.setHours(0, 0, 0, 0);
  const r = va(a), i = qe(e, 0);
  i.setFullYear(s, 0, 4), i.setHours(0, 0, 0, 0);
  const o = va(i);
  return n.getTime() >= r.getTime() ? s + 1 : n.getTime() >= o.getTime() ? s : s - 1;
}

export function fo(e) {
  const n = we(e);
  return n.setHours(0, 0, 0, 0), n;
}

export function xo(e) {
  const n = we(e), s = new Date(Date.UTC(n.getFullYear(), n.getMonth(), n.getDate(), n.getHours(), n.getMinutes(), n.getSeconds(), n.getMilliseconds()));
  return s.setUTCFullYear(n.getFullYear()), +e - +s;
}

export function Vs(e, n) {
  const s = fo(e), a = fo(n), r = +s - xo(s), i = +a - xo(a);
  return Math.round((r - i) / $O);
}

export function HO(e) {
  const n = wS(e), s = qe(e, 0);
  return s.setFullYear(n, 0, 4), s.setHours(0, 0, 0, 0), va(s);
}

export function mg(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}

export function QO(e) {
  if (!mg(e) && typeof e != "number") return false;
  const n = we(e);
  return !isNaN(Number(n));
}

export function NS(e) {
  const n = we(e), s = qe(e, 0);
  return s.setFullYear(n.getFullYear(), 0, 1), s.setHours(0, 0, 0, 0), s;
}

export const KO = { lessThanXSeconds: { one: "less than a second", other: "less than {{count}} seconds" }, xSeconds: { one: "1 second", other: "{{count}} seconds" }, halfAMinute: "half a minute", lessThanXMinutes: { one: "less than a minute", other: "less than {{count}} minutes" }, xMinutes: { one: "1 minute", other: "{{count}} minutes" }, aboutXHours: { one: "about 1 hour", other: "about {{count}} hours" }, xHours: { one: "1 hour", other: "{{count}} hours" }, xDays: { one: "1 day", other: "{{count}} days" }, aboutXWeeks: { one: "about 1 week", other: "about {{count}} weeks" }, xWeeks: { one: "1 week", other: "{{count}} weeks" }, aboutXMonths: { one: "about 1 month", other: "about {{count}} months" }, xMonths: { one: "1 month", other: "{{count}} months" }, aboutXYears: { one: "about 1 year", other: "about {{count}} years" }, xYears: { one: "1 year", other: "{{count}} years" }, overXYears: { one: "over 1 year", other: "over {{count}} years" }, almostXYears: { one: "almost 1 year", other: "almost {{count}} years" } };

export const XO = (e, n, s) => {
  let a;
  const r = KO[e];
  return typeof r == "string" ? a = r : n === 1 ? a = r.one : a = r.other.replace("{{count}}", n.toString()), s != null && s.addSuffix ? s.comparison && s.comparison > 0 ? "in " + a : a + " ago" : a;
};

export function Ip(e) {
  return (n = {}) => {
    const s = n.width ? String(n.width) : e.defaultWidth;
    return e.formats[s] || e.formats[e.defaultWidth];
  };
}

export const ZO = { full: "EEEE, MMMM do, y", long: "MMMM do, y", medium: "MMM d, y", short: "MM/dd/yyyy" };

export const eL = { full: "h:mm:ss a zzzz", long: "h:mm:ss a z", medium: "h:mm:ss a", short: "h:mm a" };

export const tL = { full: "{{date}} 'at' {{time}}", long: "{{date}} 'at' {{time}}", medium: "{{date}}, {{time}}", short: "{{date}}, {{time}}" };

export const nL = { date: Ip({ formats: ZO, defaultWidth: "full" }), time: Ip({ formats: eL, defaultWidth: "full" }), dateTime: Ip({ formats: tL, defaultWidth: "full" }) };

export const sL = { lastWeek: "'last' eeee 'at' p", yesterday: "'yesterday at' p", today: "'today at' p", tomorrow: "'tomorrow at' p", nextWeek: "eeee 'at' p", other: "P" };

export const aL = (e, n, s, a) => sL[e];

export function Yo(e) {
  return (n, s) => {
    const a = s != null && s.context ? String(s.context) : "standalone";
    let r;
    if (a === "formatting" && e.formattingValues) {
      const o = e.defaultFormattingWidth || e.defaultWidth, l = s != null && s.width ? String(s.width) : o;
      r = e.formattingValues[l] || e.formattingValues[o];
    } else {
      const o = e.defaultWidth, l = s != null && s.width ? String(s.width) : e.defaultWidth;
      r = e.values[l] || e.values[o];
    }
    const i = e.argumentCallback ? e.argumentCallback(n) : n;
    return r[i];
  };
}

export const rL = { narrow: ["B", "A"], abbreviated: ["BC", "AD"], wide: ["Before Christ", "Anno Domini"] };

export const iL = { narrow: ["1", "2", "3", "4"], abbreviated: ["Q1", "Q2", "Q3", "Q4"], wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"] };

export const oL = { narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"] };

export const lL = { narrow: ["S", "M", "T", "W", "T", "F", "S"], short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"], abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"] };

export const cL = { narrow: { am: "a", pm: "p", midnight: "mi", noon: "n", morning: "morning", afternoon: "afternoon", evening: "evening", night: "night" }, abbreviated: { am: "AM", pm: "PM", midnight: "midnight", noon: "noon", morning: "morning", afternoon: "afternoon", evening: "evening", night: "night" }, wide: { am: "a.m.", pm: "p.m.", midnight: "midnight", noon: "noon", morning: "morning", afternoon: "afternoon", evening: "evening", night: "night" } };

export const dL = { narrow: { am: "a", pm: "p", midnight: "mi", noon: "n", morning: "in the morning", afternoon: "in the afternoon", evening: "in the evening", night: "at night" }, abbreviated: { am: "AM", pm: "PM", midnight: "midnight", noon: "noon", morning: "in the morning", afternoon: "in the afternoon", evening: "in the evening", night: "at night" }, wide: { am: "a.m.", pm: "p.m.", midnight: "midnight", noon: "noon", morning: "in the morning", afternoon: "in the afternoon", evening: "in the evening", night: "at night" } };

export const uL = (e, n) => {
  const s = Number(e), a = s % 100;
  if (a > 20 || a < 10) switch (a % 10) {
    case 1:
      return s + "st";
    case 2:
      return s + "nd";
    case 3:
      return s + "rd";
  }
  return s + "th";
};

export const mL = { ordinalNumber: uL, era: Yo({ values: rL, defaultWidth: "wide" }), quarter: Yo({ values: iL, defaultWidth: "wide", argumentCallback: (e) => e - 1 }), month: Yo({ values: oL, defaultWidth: "wide" }), day: Yo({ values: lL, defaultWidth: "wide" }), dayPeriod: Yo({ values: cL, defaultWidth: "wide", formattingValues: dL, defaultFormattingWidth: "wide" }) };

export function Ko(e) {
  return (n, s = {}) => {
    const a = s.width, r = a && e.matchPatterns[a] || e.matchPatterns[e.defaultMatchWidth], i = n.match(r);
    if (!i) return null;
    const o = i[0], l = a && e.parsePatterns[a] || e.parsePatterns[e.defaultParseWidth], c = Array.isArray(l) ? hL(l, (p) => p.test(o)) : pL(l, (p) => p.test(o));
    let u;
    u = e.valueCallback ? e.valueCallback(c) : c, u = s.valueCallback ? s.valueCallback(u) : u;
    const m = n.slice(o.length);
    return { value: u, rest: m };
  };
}

export function pL(e, n) {
  for (const s in e) if (Object.prototype.hasOwnProperty.call(e, s) && n(e[s])) return s;
}

export function hL(e, n) {
  for (let s = 0; s < e.length; s++) if (n(e[s])) return s;
}

export function fL(e) {
  return (n, s = {}) => {
    const a = n.match(e.matchPattern);
    if (!a) return null;
    const r = a[0], i = n.match(e.parsePattern);
    if (!i) return null;
    let o = e.valueCallback ? e.valueCallback(i[0]) : i[0];
    o = s.valueCallback ? s.valueCallback(o) : o;
    const l = n.slice(r.length);
    return { value: o, rest: l };
  };
}

export const xL = /^(\d+)(th|st|nd|rd)?/i;

export const gL = /\d+/i;

export const vL = { narrow: /^(b|a)/i, abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i, wide: /^(before christ|before common era|anno domini|common era)/i };

export const yL = { any: [/^b/i, /^(a|c)/i] };

export const jL = { narrow: /^[1234]/i, abbreviated: /^q[1234]/i, wide: /^[1234](th|st|nd|rd)? quarter/i };

export const bL = { any: [/1/i, /2/i, /3/i, /4/i] };

export const wL = { narrow: /^[jfmasond]/i, abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i, wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i };

export const NL = { narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i], any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i] };

export const CL = { narrow: /^[smtwf]/i, short: /^(su|mo|tu|we|th|fr|sa)/i, abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i, wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i };

export const SL = { narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i], any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i] };

export const kL = { narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i, any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i };

export const TL = { any: { am: /^a/i, pm: /^p/i, midnight: /^mi/i, noon: /^no/i, morning: /morning/i, afternoon: /afternoon/i, evening: /evening/i, night: /night/i } };

export const PL = { ordinalNumber: fL({ matchPattern: xL, parsePattern: gL, valueCallback: (e) => parseInt(e, 10) }), era: Ko({ matchPatterns: vL, defaultMatchWidth: "wide", parsePatterns: yL, defaultParseWidth: "any" }), quarter: Ko({ matchPatterns: jL, defaultMatchWidth: "wide", parsePatterns: bL, defaultParseWidth: "any", valueCallback: (e) => e + 1 }), month: Ko({ matchPatterns: wL, defaultMatchWidth: "wide", parsePatterns: NL, defaultParseWidth: "any" }), day: Ko({ matchPatterns: CL, defaultMatchWidth: "wide", parsePatterns: SL, defaultParseWidth: "any" }), dayPeriod: Ko({ matchPatterns: kL, defaultMatchWidth: "any", parsePatterns: TL, defaultParseWidth: "any" }) };

export const fg = { code: "en-US", formatDistance: XO, formatLong: nL, formatRelative: aL, localize: mL, match: PL, options: { weekStartsOn: 0, firstWeekContainsDate: 1 } };

export function EL(e) {
  const n = we(e);
  return Vs(n, NS(n)) + 1;
}

export function xg(e) {
  const n = we(e), s = +va(n) - +HO(n);
  return Math.round(s / ug) + 1;
}

export function gg(e, n) {
  var m, p, h, f;
  const s = we(e), a = s.getFullYear(), r = xi(), i = (n == null ? void 0 : n.firstWeekContainsDate) ?? ((p = (m = n == null ? void 0 : n.locale) == null ? void 0 : m.options) == null ? void 0 : p.firstWeekContainsDate) ?? r.firstWeekContainsDate ?? ((f = (h = r.locale) == null ? void 0 : h.options) == null ? void 0 : f.firstWeekContainsDate) ?? 1, o = qe(e, 0);
  o.setFullYear(a + 1, 0, i), o.setHours(0, 0, 0, 0);
  const l = Fn(o, n), c = qe(e, 0);
  c.setFullYear(a, 0, i), c.setHours(0, 0, 0, 0);
  const u = Fn(c, n);
  return s.getTime() >= l.getTime() ? a + 1 : s.getTime() >= u.getTime() ? a : a - 1;
}

export function ML(e, n) {
  var l, c, u, m;
  const s = xi(), a = (n == null ? void 0 : n.firstWeekContainsDate) ?? ((c = (l = n == null ? void 0 : n.locale) == null ? void 0 : l.options) == null ? void 0 : c.firstWeekContainsDate) ?? s.firstWeekContainsDate ?? ((m = (u = s.locale) == null ? void 0 : u.options) == null ? void 0 : m.firstWeekContainsDate) ?? 1, r = gg(e, n), i = qe(e, 0);
  return i.setFullYear(r, 0, a), i.setHours(0, 0, 0, 0), Fn(i, n);
}

export function vg(e, n) {
  const s = we(e), a = +Fn(s, n) - +ML(s, n);
  return Math.round(a / ug) + 1;
}

export function Be(e, n) {
  const s = e < 0 ? "-" : "", a = Math.abs(e).toString().padStart(n, "0");
  return s + a;
}

export const Ia = { y(e, n) {
  const s = e.getFullYear(), a = s > 0 ? s : 1 - s;
  return Be(n === "yy" ? a % 100 : a, n.length);
}, M(e, n) {
  const s = e.getMonth();
  return n === "M" ? String(s + 1) : Be(s + 1, 2);
}, d(e, n) {
  return Be(e.getDate(), n.length);
}, a(e, n) {
  const s = e.getHours() / 12 >= 1 ? "pm" : "am";
  switch (n) {
    case "a":
    case "aa":
      return s.toUpperCase();
    case "aaa":
      return s;
    case "aaaaa":
      return s[0];
    case "aaaa":
    default:
      return s === "am" ? "a.m." : "p.m.";
  }
}, h(e, n) {
  return Be(e.getHours() % 12 || 12, n.length);
}, H(e, n) {
  return Be(e.getHours(), n.length);
}, m(e, n) {
  return Be(e.getMinutes(), n.length);
}, s(e, n) {
  return Be(e.getSeconds(), n.length);
}, S(e, n) {
  const s = n.length, a = e.getMilliseconds(), r = Math.trunc(a * Math.pow(10, s - 3));
  return Be(r, n.length);
} };

export const Si = { am: "am", pm: "pm", midnight: "midnight", noon: "noon", morning: "morning", afternoon: "afternoon", evening: "evening", night: "night" };

export const c0 = { G: function(e, n, s) {
  const a = e.getFullYear() > 0 ? 1 : 0;
  switch (n) {
    case "G":
    case "GG":
    case "GGG":
      return s.era(a, { width: "abbreviated" });
    case "GGGGG":
      return s.era(a, { width: "narrow" });
    case "GGGG":
    default:
      return s.era(a, { width: "wide" });
  }
}, y: function(e, n, s) {
  if (n === "yo") {
    const a = e.getFullYear(), r = a > 0 ? a : 1 - a;
    return s.ordinalNumber(r, { unit: "year" });
  }
  return Ia.y(e, n);
}, Y: function(e, n, s, a) {
  const r = gg(e, a), i = r > 0 ? r : 1 - r;
  if (n === "YY") {
    const o = i % 100;
    return Be(o, 2);
  }
  return n === "Yo" ? s.ordinalNumber(i, { unit: "year" }) : Be(i, n.length);
}, R: function(e, n) {
  const s = wS(e);
  return Be(s, n.length);
}, u: function(e, n) {
  const s = e.getFullYear();
  return Be(s, n.length);
}, Q: function(e, n, s) {
  const a = Math.ceil((e.getMonth() + 1) / 3);
  switch (n) {
    case "Q":
      return String(a);
    case "QQ":
      return Be(a, 2);
    case "Qo":
      return s.ordinalNumber(a, { unit: "quarter" });
    case "QQQ":
      return s.quarter(a, { width: "abbreviated", context: "formatting" });
    case "QQQQQ":
      return s.quarter(a, { width: "narrow", context: "formatting" });
    case "QQQQ":
    default:
      return s.quarter(a, { width: "wide", context: "formatting" });
  }
}, q: function(e, n, s) {
  const a = Math.ceil((e.getMonth() + 1) / 3);
  switch (n) {
    case "q":
      return String(a);
    case "qq":
      return Be(a, 2);
    case "qo":
      return s.ordinalNumber(a, { unit: "quarter" });
    case "qqq":
      return s.quarter(a, { width: "abbreviated", context: "standalone" });
    case "qqqqq":
      return s.quarter(a, { width: "narrow", context: "standalone" });
    case "qqqq":
    default:
      return s.quarter(a, { width: "wide", context: "standalone" });
  }
}, M: function(e, n, s) {
  const a = e.getMonth();
  switch (n) {
    case "M":
    case "MM":
      return Ia.M(e, n);
    case "Mo":
      return s.ordinalNumber(a + 1, { unit: "month" });
    case "MMM":
      return s.month(a, { width: "abbreviated", context: "formatting" });
    case "MMMMM":
      return s.month(a, { width: "narrow", context: "formatting" });
    case "MMMM":
    default:
      return s.month(a, { width: "wide", context: "formatting" });
  }
}, L: function(e, n, s) {
  const a = e.getMonth();
  switch (n) {
    case "L":
      return String(a + 1);
    case "LL":
      return Be(a + 1, 2);
    case "Lo":
      return s.ordinalNumber(a + 1, { unit: "month" });
    case "LLL":
      return s.month(a, { width: "abbreviated", context: "standalone" });
    case "LLLLL":
      return s.month(a, { width: "narrow", context: "standalone" });
    case "LLLL":
    default:
      return s.month(a, { width: "wide", context: "standalone" });
  }
}, w: function(e, n, s, a) {
  const r = vg(e, a);
  return n === "wo" ? s.ordinalNumber(r, { unit: "week" }) : Be(r, n.length);
}, I: function(e, n, s) {
  const a = xg(e);
  return n === "Io" ? s.ordinalNumber(a, { unit: "week" }) : Be(a, n.length);
}, d: function(e, n, s) {
  return n === "do" ? s.ordinalNumber(e.getDate(), { unit: "date" }) : Ia.d(e, n);
}, D: function(e, n, s) {
  const a = EL(e);
  return n === "Do" ? s.ordinalNumber(a, { unit: "dayOfYear" }) : Be(a, n.length);
}, E: function(e, n, s) {
  const a = e.getDay();
  switch (n) {
    case "E":
    case "EE":
    case "EEE":
      return s.day(a, { width: "abbreviated", context: "formatting" });
    case "EEEEE":
      return s.day(a, { width: "narrow", context: "formatting" });
    case "EEEEEE":
      return s.day(a, { width: "short", context: "formatting" });
    case "EEEE":
    default:
      return s.day(a, { width: "wide", context: "formatting" });
  }
}, e: function(e, n, s, a) {
  const r = e.getDay(), i = (r - a.weekStartsOn + 8) % 7 || 7;
  switch (n) {
    case "e":
      return String(i);
    case "ee":
      return Be(i, 2);
    case "eo":
      return s.ordinalNumber(i, { unit: "day" });
    case "eee":
      return s.day(r, { width: "abbreviated", context: "formatting" });
    case "eeeee":
      return s.day(r, { width: "narrow", context: "formatting" });
    case "eeeeee":
      return s.day(r, { width: "short", context: "formatting" });
    case "eeee":
    default:
      return s.day(r, { width: "wide", context: "formatting" });
  }
}, c: function(e, n, s, a) {
  const r = e.getDay(), i = (r - a.weekStartsOn + 8) % 7 || 7;
  switch (n) {
    case "c":
      return String(i);
    case "cc":
      return Be(i, n.length);
    case "co":
      return s.ordinalNumber(i, { unit: "day" });
    case "ccc":
      return s.day(r, { width: "abbreviated", context: "standalone" });
    case "ccccc":
      return s.day(r, { width: "narrow", context: "standalone" });
    case "cccccc":
      return s.day(r, { width: "short", context: "standalone" });
    case "cccc":
    default:
      return s.day(r, { width: "wide", context: "standalone" });
  }
}, i: function(e, n, s) {
  const a = e.getDay(), r = a === 0 ? 7 : a;
  switch (n) {
    case "i":
      return String(r);
    case "ii":
      return Be(r, n.length);
    case "io":
      return s.ordinalNumber(r, { unit: "day" });
    case "iii":
      return s.day(a, { width: "abbreviated", context: "formatting" });
    case "iiiii":
      return s.day(a, { width: "narrow", context: "formatting" });
    case "iiiiii":
      return s.day(a, { width: "short", context: "formatting" });
    case "iiii":
    default:
      return s.day(a, { width: "wide", context: "formatting" });
  }
}, a: function(e, n, s) {
  const r = e.getHours() / 12 >= 1 ? "pm" : "am";
  switch (n) {
    case "a":
    case "aa":
      return s.dayPeriod(r, { width: "abbreviated", context: "formatting" });
    case "aaa":
      return s.dayPeriod(r, { width: "abbreviated", context: "formatting" }).toLowerCase();
    case "aaaaa":
      return s.dayPeriod(r, { width: "narrow", context: "formatting" });
    case "aaaa":
    default:
      return s.dayPeriod(r, { width: "wide", context: "formatting" });
  }
}, b: function(e, n, s) {
  const a = e.getHours();
  let r;
  switch (a === 12 ? r = Si.noon : a === 0 ? r = Si.midnight : r = a / 12 >= 1 ? "pm" : "am", n) {
    case "b":
    case "bb":
      return s.dayPeriod(r, { width: "abbreviated", context: "formatting" });
    case "bbb":
      return s.dayPeriod(r, { width: "abbreviated", context: "formatting" }).toLowerCase();
    case "bbbbb":
      return s.dayPeriod(r, { width: "narrow", context: "formatting" });
    case "bbbb":
    default:
      return s.dayPeriod(r, { width: "wide", context: "formatting" });
  }
}, B: function(e, n, s) {
  const a = e.getHours();
  let r;
  switch (a >= 17 ? r = Si.evening : a >= 12 ? r = Si.afternoon : a >= 4 ? r = Si.morning : r = Si.night, n) {
    case "B":
    case "BB":
    case "BBB":
      return s.dayPeriod(r, { width: "abbreviated", context: "formatting" });
    case "BBBBB":
      return s.dayPeriod(r, { width: "narrow", context: "formatting" });
    case "BBBB":
    default:
      return s.dayPeriod(r, { width: "wide", context: "formatting" });
  }
}, h: function(e, n, s) {
  if (n === "ho") {
    let a = e.getHours() % 12;
    return a === 0 && (a = 12), s.ordinalNumber(a, { unit: "hour" });
  }
  return Ia.h(e, n);
}, H: function(e, n, s) {
  return n === "Ho" ? s.ordinalNumber(e.getHours(), { unit: "hour" }) : Ia.H(e, n);
}, K: function(e, n, s) {
  const a = e.getHours() % 12;
  return n === "Ko" ? s.ordinalNumber(a, { unit: "hour" }) : Be(a, n.length);
}, k: function(e, n, s) {
  let a = e.getHours();
  return a === 0 && (a = 24), n === "ko" ? s.ordinalNumber(a, { unit: "hour" }) : Be(a, n.length);
}, m: function(e, n, s) {
  return n === "mo" ? s.ordinalNumber(e.getMinutes(), { unit: "minute" }) : Ia.m(e, n);
}, s: function(e, n, s) {
  return n === "so" ? s.ordinalNumber(e.getSeconds(), { unit: "second" }) : Ia.s(e, n);
}, S: function(e, n) {
  return Ia.S(e, n);
}, X: function(e, n, s) {
  const a = e.getTimezoneOffset();
  if (a === 0) return "Z";
  switch (n) {
    case "X":
      return u0(a);
    case "XXXX":
    case "XX":
      return Ar(a);
    case "XXXXX":
    case "XXX":
    default:
      return Ar(a, ":");
  }
}, x: function(e, n, s) {
  const a = e.getTimezoneOffset();
  switch (n) {
    case "x":
      return u0(a);
    case "xxxx":
    case "xx":
      return Ar(a);
    case "xxxxx":
    case "xxx":
    default:
      return Ar(a, ":");
  }
}, O: function(e, n, s) {
  const a = e.getTimezoneOffset();
  switch (n) {
    case "O":
    case "OO":
    case "OOO":
      return "GMT" + d0(a, ":");
    case "OOOO":
    default:
      return "GMT" + Ar(a, ":");
  }
}, z: function(e, n, s) {
  const a = e.getTimezoneOffset();
  switch (n) {
    case "z":
    case "zz":
    case "zzz":
      return "GMT" + d0(a, ":");
    case "zzzz":
    default:
      return "GMT" + Ar(a, ":");
  }
}, t: function(e, n, s) {
  const a = Math.trunc(e.getTime() / 1e3);
  return Be(a, n.length);
}, T: function(e, n, s) {
  const a = e.getTime();
  return Be(a, n.length);
} };

export function d0(e, n = "") {
  const s = e > 0 ? "-" : "+", a = Math.abs(e), r = Math.trunc(a / 60), i = a % 60;
  return i === 0 ? s + String(r) : s + String(r) + n + Be(i, 2);
}

export function u0(e, n) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + Be(Math.abs(e) / 60, 2) : Ar(e, n);
}

export function Ar(e, n = "") {
  const s = e > 0 ? "-" : "+", a = Math.abs(e), r = Be(Math.trunc(a / 60), 2), i = Be(a % 60, 2);
  return s + r + n + i;
}

export const m0 = (e, n) => {
  switch (e) {
    case "P":
      return n.date({ width: "short" });
    case "PP":
      return n.date({ width: "medium" });
    case "PPP":
      return n.date({ width: "long" });
    case "PPPP":
    default:
      return n.date({ width: "full" });
  }
};

export const SS = (e, n) => {
  switch (e) {
    case "p":
      return n.time({ width: "short" });
    case "pp":
      return n.time({ width: "medium" });
    case "ppp":
      return n.time({ width: "long" });
    case "pppp":
    default:
      return n.time({ width: "full" });
  }
};

export const RL = (e, n) => {
  const s = e.match(/(P+)(p+)?/) || [], a = s[1], r = s[2];
  if (!r) return m0(e, n);
  let i;
  switch (a) {
    case "P":
      i = n.dateTime({ width: "short" });
      break;
    case "PP":
      i = n.dateTime({ width: "medium" });
      break;
    case "PPP":
      i = n.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      i = n.dateTime({ width: "full" });
      break;
  }
  return i.replace("{{date}}", m0(a, n)).replace("{{time}}", SS(r, n));
};

export const yf = { p: SS, P: RL };

export const IL = /^D+$/;

export const AL = /^Y+$/;

export const DL = ["D", "DD", "YY", "YYYY"];

export function kS(e) {
  return IL.test(e);
}

export function TS(e) {
  return AL.test(e);
}

export function jf(e, n, s) {
  const a = _L(e, n, s);
  if (console.warn(a), DL.includes(e)) throw new RangeError(a);
}

export function _L(e, n, s) {
  const a = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${n}\`) for formatting ${a} to the input \`${s}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}

export const OL = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;

export const LL = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;

export const FL = /^'([^]*?)'?$/;

export const zL = /''/g;

export const $L = /[a-zA-Z]/;

export function ts(e, n, s) {
  var m, p, h, f, v, x, y, b;
  const a = xi(), r = (s == null ? void 0 : s.locale) ?? a.locale ?? fg, i = (s == null ? void 0 : s.firstWeekContainsDate) ?? ((p = (m = s == null ? void 0 : s.locale) == null ? void 0 : m.options) == null ? void 0 : p.firstWeekContainsDate) ?? a.firstWeekContainsDate ?? ((f = (h = a.locale) == null ? void 0 : h.options) == null ? void 0 : f.firstWeekContainsDate) ?? 1, o = (s == null ? void 0 : s.weekStartsOn) ?? ((x = (v = s == null ? void 0 : s.locale) == null ? void 0 : v.options) == null ? void 0 : x.weekStartsOn) ?? a.weekStartsOn ?? ((b = (y = a.locale) == null ? void 0 : y.options) == null ? void 0 : b.weekStartsOn) ?? 0, l = we(e);
  if (!QO(l)) throw new RangeError("Invalid time value");
  let c = n.match(LL).map((g) => {
    const j = g[0];
    if (j === "p" || j === "P") {
      const w = yf[j];
      return w(g, r.formatLong);
    }
    return g;
  }).join("").match(OL).map((g) => {
    if (g === "''") return { isToken: false, value: "'" };
    const j = g[0];
    if (j === "'") return { isToken: false, value: JL(g) };
    if (c0[j]) return { isToken: true, value: g };
    if (j.match($L)) throw new RangeError("Format string contains an unescaped latin alphabet character `" + j + "`");
    return { isToken: false, value: g };
  });
  r.localize.preprocessor && (c = r.localize.preprocessor(l, c));
  const u = { firstWeekContainsDate: i, weekStartsOn: o, locale: r };
  return c.map((g) => {
    if (!g.isToken) return g.value;
    const j = g.value;
    (!(s != null && s.useAdditionalWeekYearTokens) && TS(j) || !(s != null && s.useAdditionalDayOfYearTokens) && kS(j)) && jf(j, n, String(e));
    const w = c0[j[0]];
    return w(l, j, r.localize, u);
  }).join("");
}

export function JL(e) {
  const n = e.match(FL);
  return n ? n[1].replace(zL, "'") : e;
}

export let Rz = Popover;

export let Iz = PopoverTrigger;

export const C_ql = Rz;

export const Ql = Iz;

export let D7 = Collapsible;

export const Pu = D7;

export const Eu = CollapsibleTrigger;

export const Mu = CollapsibleContent;

export let H7 = AlertDialog;

export const Ru = H7;
