// @ts-nocheck
/* eslint-disable */
// Generated port of the IR Co-Pilot demo (Radar / Canvas / GEI).
import * as React from "react";
import { AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PopoverContent } from "@/components/ui/popover";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ScrollArea } from "@/components/ui/scroll-area";
import { SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Switch } from "@/components/ui/switch";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { toast, useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { ActivityIcon, ArchiveIcon, ArrowLeftIcon, ArrowRightIcon, BeakerIcon, BookOpenIcon, BriefcaseIcon, Building2Icon, CalendarClockIcon, CalendarDaysIcon, CalendarIcon, ChartColumnIcon, ChartLineIcon, CheckIcon, ChevronDownIcon, ChevronRightIcon, ChevronsDownUpIcon, ChevronsUpDownIcon, CircleAlertIcon, CircleCheckBigIcon, CircleCheckIcon, CircleHelpIcon, CircleXIcon, ClipboardListIcon, ClockIcon, CloudIcon, CompassIcon, DatabaseIcon, EllipsisVerticalIcon, ExternalLinkIcon, EyeIcon, FileSearchIcon, FileTextIcon, FileUpIcon, FilterIcon, GitBranchIcon, GraduationCapIcon, HouseIcon, InfoIcon, LayersIcon, Link2Icon, MessageCircleIcon, MessageSquareIcon, MicIcon, MinusIcon, NewspaperIcon, PackageIcon, PaletteIcon, PencilIcon, PhoneIcon, PillIcon, PlusIcon, QuoteIcon, RadarIcon, RadioIcon, ScrollTextIcon, SearchIcon, SendIcon, Share2Icon, ShieldIcon, SparklesIcon, TagIcon, TargetIcon, TrendingDownIcon, TrendingUpIcon, TriangleAlertIcon, UploadIcon, UserIcon, UsersIcon, XIcon } from "lucide-react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { C_ce, C_ei, C_le, C_ot, C_ql, C_ti, Eu, Fn, Mu, Pu, Ql, Ru, TS, fg, ga, gg, jf, kS, qe, ts, va, vg, we, xg, xi, xn, xo, yf } from "./shared";

export let c4 = Object.defineProperty;

export let d4 = (e, n, s) => n in e ? c4(e, n, { enumerable: true, configurable: true, writable: true, value: s }) : e[n] = s;

export let de = (e, n, s) => d4(e, typeof n != "symbol" ? n + "" : n, s);

export function lf(e) {
  return e === void 0 && (e = ""), new URLSearchParams(typeof e == "string" || Array.isArray(e) || e instanceof URLSearchParams ? e : Object.keys(e).reduce((n, s) => {
    let a = e[s];
    return n.concat(Array.isArray(a) ? a.map((r) => [s, r]) : [[s, a]]);
  }, []));
}

export function kA(e, n) {
  let s = lf(e);
  return n && n.forEach((a, r) => {
    s.has(r) || n.getAll(r).forEach((i) => {
      s.append(r, i);
    });
  }), s;
}

export function wc(e) {
  let n = React.useRef(lf(e)), s = React.useRef(false), a = useLocation(), r = React.useMemo(() => kA(a.search, s.current ? null : n.current), [a.search]), i = useNavigate(), o = React.useCallback((l, c) => {
    const u = lf(typeof l == "function" ? l(r) : l);
    s.current = true, i("?" + u, c);
  }, [i, r]);
  return [r, o];
}

export let j_ = SelectGroup;

export const C_a0 = j_;

export const OO = { "ds-001": [{ id: "audit-001", action: "Module Access Changed", description: "Coach access enabled", user: "IR Manager", timestamp: "Sep 18, 2026 at 2:45 PM", details: "Enabled for executive preparation support" }, { id: "audit-002", action: "Module Access Changed", description: "Canvas access enabled", user: "IR Manager", timestamp: "Sep 15, 2026 at 10:30 AM", details: "Enabled for Q3 narrative preparation" }, { id: "audit-003", action: "Status Changed", description: "Data Source activated", user: "IR Director", timestamp: "Sep 12, 2026 at 4:15 PM", details: "Approved for production use" }, { id: "audit-004", action: "Status Changed", description: "Data Source approved", user: "VP, Investor Relations", timestamp: "Sep 10, 2026 at 11:00 AM", details: "Governance review completed" }, { id: "audit-005", action: "Intelligence Added", description: "24 items promoted from Analyst workspace", user: "IR Analyst", timestamp: "Sep 9, 2026 at 2:30 PM" }, { id: "audit-006", action: "Created", description: "Data Source created from Analyst selection", user: "IR Coordinator", timestamp: "Sep 8, 2026 at 9:00 AM", details: "Initial creation with 4 analysts selected" }], "ds-002": [{ id: "audit-007", action: "Module Access Changed", description: "Canvas access enabled", user: "IR Manager", timestamp: "Sep 15, 2026 at 3:00 PM", details: "Enabled for competitive narrative development" }, { id: "audit-008", action: "Status Changed", description: "Data Source activated", user: "IR Director", timestamp: "Sep 10, 2026 at 11:15 AM", details: "Approved for competitive monitoring" }, { id: "audit-009", action: "Module Access Changed", description: "Radar access enabled", user: "IR Manager", timestamp: "Sep 5, 2026 at 9:30 AM" }, { id: "audit-010", action: "Intelligence Added", description: "18 items promoted from Company and Asset workspaces", user: "IR Analyst", timestamp: "Aug 20, 2026 at 2:30 PM" }, { id: "audit-011", action: "Created", description: "Data Source created from competitive monitoring", user: "Strategy Team", timestamp: "Aug 15, 2026 at 10:00 AM", details: "Initial creation with 4 companies and 3 assets" }], "ds-003": [{ id: "audit-012", action: "Module Access Changed", description: "Coach access enabled", user: "IR Manager", timestamp: "Sep 14, 2026 at 1:00 PM", details: "Enabled for conference debrief preparation" }, { id: "audit-013", action: "Module Access Changed", description: "Canvas access enabled", user: "IR Manager", timestamp: "Sep 14, 2026 at 12:45 PM" }, { id: "audit-014", action: "Status Changed", description: "Data Source approved", user: "IR Director", timestamp: "Sep 13, 2026 at 4:30 PM", details: "Approved for module configuration" }, { id: "audit-015", action: "Intelligence Added", description: "31 items promoted from Event and Analyst workspaces", user: "IR Analyst", timestamp: "Sep 12, 2026 at 11:00 AM" }, { id: "audit-016", action: "Created", description: "Data Source created for JPM 2026 coverage", user: "IR Team", timestamp: "Sep 12, 2026 at 9:00 AM", details: "Initial creation for conference intelligence" }], "ds-004": [{ id: "audit-017", action: "Intelligence Added", description: "12 items promoted from Narrative and Asset workspaces", user: "IR Analyst", timestamp: "Sep 19, 2026 at 10:30 AM" }, { id: "audit-018", action: "Created", description: "Data Source auto-created from narrative tracking", user: "System", timestamp: "Sep 19, 2026 at 9:00 AM", details: "Initial draft for review" }], "ds-005": [{ id: "audit-019", action: "Status Changed", description: "Data Source deactivated", user: "IR Manager", timestamp: "Aug 1, 2026 at 2:00 PM", details: "Paused for strategy review" }, { id: "audit-020", action: "Status Changed", description: "Data Source activated", user: "IR Director", timestamp: "Jul 25, 2026 at 10:00 AM" }, { id: "audit-021", action: "Module Access Changed", description: "Radar access enabled", user: "IR Manager", timestamp: "Jul 22, 2026 at 3:30 PM" }, { id: "audit-022", action: "Intelligence Added", description: "8 items promoted from Market Signals workspace", user: "IR Analyst", timestamp: "Jul 21, 2026 at 11:00 AM" }, { id: "audit-023", action: "Created", description: "Data Source created for market volatility tracking", user: "Analytics Team", timestamp: "Jul 20, 2026 at 9:00 AM", details: "Initial creation for pharma sector monitoring" }], "ds-006": [{ id: "audit-024", action: "Module Access Changed", description: "Canvas access enabled", user: "IR Manager", timestamp: "Sep 17, 2026 at 11:00 AM", details: "Enabled for LOE narrative preparation" }, { id: "audit-025", action: "Status Changed", description: "Data Source approved", user: "VP, Investor Relations", timestamp: "Sep 15, 2026 at 4:00 PM", details: "Governance review completed for LOE preparation" }, { id: "audit-026", action: "Intelligence Added", description: "22 items promoted from Analyst, Company, and Narrative workspaces", user: "IR Analyst", timestamp: "Sep 10, 2026 at 2:00 PM" }, { id: "audit-027", action: "Created", description: "Data Source created for Entresto LOE preparation", user: "IR Team", timestamp: "Sep 5, 2026 at 10:00 AM", details: "Initial creation for loss of exclusivity communications" }] };

export function Ft(e, n) {
  const s = we(e);
  return isNaN(n) ? qe(e, NaN) : (n && s.setDate(s.getDate() + n), s);
}

export const JO = 6e4;

export const BO = 36e5;

export const VO = 1e3;

export function VL() {
  return Object.assign({}, xi());
}

export function UL(e) {
  let s = we(e).getDay();
  return s === 0 && (s = 7), s;
}

export function qL(e, n) {
  const s = n instanceof Date ? qe(n, 0) : new n(0);
  return s.setFullYear(e.getFullYear(), e.getMonth(), e.getDate()), s.setHours(e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()), s;
}

export const QL = 10;

export class ES {
  constructor() {
    de(this, "subPriority", 0);
  }
  validate(n, s) {
    return true;
  }
}

export class YL extends ES {
  constructor(n, s, a, r, i) {
    super(), this.value = n, this.validateValue = s, this.setValue = a, this.priority = r, i && (this.subPriority = i);
  }
  validate(n, s) {
    return this.validateValue(n, this.value, s);
  }
  set(n, s, a) {
    return this.setValue(n, s, this.value, a);
  }
}

export class KL extends ES {
  constructor() {
    super(...arguments);
    de(this, "priority", QL);
    de(this, "subPriority", -1);
  }
  set(s, a) {
    return a.timestampIsSet ? s : qe(s, qL(s, Date));
  }
}

export class $e {
  run(n, s, a, r) {
    const i = this.parse(n, s, a, r);
    return i ? { setter: new YL(i.value, this.validate, this.set, this.priority, this.subPriority), rest: i.rest } : null;
  }
  validate(n, s, a) {
    return true;
  }
}

export class XL extends $e {
  constructor() {
    super(...arguments);
    de(this, "priority", 140);
    de(this, "incompatibleTokens", ["R", "u", "t", "T"]);
  }
  parse(s, a, r) {
    switch (a) {
      case "G":
      case "GG":
      case "GGG":
        return r.era(s, { width: "abbreviated" }) || r.era(s, { width: "narrow" });
      case "GGGGG":
        return r.era(s, { width: "narrow" });
      case "GGGG":
      default:
        return r.era(s, { width: "wide" }) || r.era(s, { width: "abbreviated" }) || r.era(s, { width: "narrow" });
    }
  }
  set(s, a, r) {
    return a.era = r, s.setFullYear(r, 0, 1), s.setHours(0, 0, 0, 0), s;
  }
}

export const xt = { month: /^(1[0-2]|0?\d)/, date: /^(3[0-1]|[0-2]?\d)/, dayOfYear: /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/, week: /^(5[0-3]|[0-4]?\d)/, hour23h: /^(2[0-3]|[0-1]?\d)/, hour24h: /^(2[0-4]|[0-1]?\d)/, hour11h: /^(1[0-1]|0?\d)/, hour12h: /^(1[0-2]|0?\d)/, minute: /^[0-5]?\d/, second: /^[0-5]?\d/, singleDigit: /^\d/, twoDigits: /^\d{1,2}/, threeDigits: /^\d{1,3}/, fourDigits: /^\d{1,4}/, anyDigitsSigned: /^-?\d+/, singleDigitSigned: /^-?\d/, twoDigitsSigned: /^-?\d{1,2}/, threeDigitsSigned: /^-?\d{1,3}/, fourDigitsSigned: /^-?\d{1,4}/ };

export const $s = { basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/, basic: /^([+-])(\d{2})(\d{2})|Z/, basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/, extended: /^([+-])(\d{2}):(\d{2})|Z/, extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/ };

export function gt(e, n) {
  return e && { value: n(e.value), rest: e.rest };
}

export function lt(e, n) {
  const s = n.match(e);
  return s ? { value: parseInt(s[0], 10), rest: n.slice(s[0].length) } : null;
}

export function Js(e, n) {
  const s = n.match(e);
  if (!s) return null;
  if (s[0] === "Z") return { value: 0, rest: n.slice(1) };
  const a = s[1] === "+" ? 1 : -1, r = s[2] ? parseInt(s[2], 10) : 0, i = s[3] ? parseInt(s[3], 10) : 0, o = s[5] ? parseInt(s[5], 10) : 0;
  return { value: a * (r * BO + i * JO + o * VO), rest: n.slice(s[0].length) };
}

export function MS(e) {
  return lt(xt.anyDigitsSigned, e);
}

export function pt(e, n) {
  switch (e) {
    case 1:
      return lt(xt.singleDigit, n);
    case 2:
      return lt(xt.twoDigits, n);
    case 3:
      return lt(xt.threeDigits, n);
    case 4:
      return lt(xt.fourDigits, n);
    default:
      return lt(new RegExp("^\\d{1," + e + "}"), n);
  }
}

export function ku(e, n) {
  switch (e) {
    case 1:
      return lt(xt.singleDigitSigned, n);
    case 2:
      return lt(xt.twoDigitsSigned, n);
    case 3:
      return lt(xt.threeDigitsSigned, n);
    case 4:
      return lt(xt.fourDigitsSigned, n);
    default:
      return lt(new RegExp("^-?\\d{1," + e + "}"), n);
  }
}

export function yg(e) {
  switch (e) {
    case "morning":
      return 4;
    case "evening":
      return 17;
    case "pm":
    case "noon":
    case "afternoon":
      return 12;
    case "am":
    case "midnight":
    case "night":
    default:
      return 0;
  }
}

export function RS(e, n) {
  const s = n > 0, a = s ? n : 1 - n;
  let r;
  if (a <= 50) r = e || 100;
  else {
    const i = a + 50, o = Math.trunc(i / 100) * 100, l = e >= i % 100;
    r = e + o - (l ? 100 : 0);
  }
  return s ? r : 1 - r;
}

export function IS(e) {
  return e % 400 === 0 || e % 4 === 0 && e % 100 !== 0;
}

export class ZL extends $e {
  constructor() {
    super(...arguments);
    de(this, "priority", 130);
    de(this, "incompatibleTokens", ["Y", "R", "u", "w", "I", "i", "e", "c", "t", "T"]);
  }
  parse(s, a, r) {
    const i = (o) => ({ year: o, isTwoDigitYear: a === "yy" });
    switch (a) {
      case "y":
        return gt(pt(4, s), i);
      case "yo":
        return gt(r.ordinalNumber(s, { unit: "year" }), i);
      default:
        return gt(pt(a.length, s), i);
    }
  }
  validate(s, a) {
    return a.isTwoDigitYear || a.year > 0;
  }
  set(s, a, r) {
    const i = s.getFullYear();
    if (r.isTwoDigitYear) {
      const l = RS(r.year, i);
      return s.setFullYear(l, 0, 1), s.setHours(0, 0, 0, 0), s;
    }
    const o = !("era" in a) || a.era === 1 ? r.year : 1 - r.year;
    return s.setFullYear(o, 0, 1), s.setHours(0, 0, 0, 0), s;
  }
}

export class eF extends $e {
  constructor() {
    super(...arguments);
    de(this, "priority", 130);
    de(this, "incompatibleTokens", ["y", "R", "u", "Q", "q", "M", "L", "I", "d", "D", "i", "t", "T"]);
  }
  parse(s, a, r) {
    const i = (o) => ({ year: o, isTwoDigitYear: a === "YY" });
    switch (a) {
      case "Y":
        return gt(pt(4, s), i);
      case "Yo":
        return gt(r.ordinalNumber(s, { unit: "year" }), i);
      default:
        return gt(pt(a.length, s), i);
    }
  }
  validate(s, a) {
    return a.isTwoDigitYear || a.year > 0;
  }
  set(s, a, r, i) {
    const o = gg(s, i);
    if (r.isTwoDigitYear) {
      const c = RS(r.year, o);
      return s.setFullYear(c, 0, i.firstWeekContainsDate), s.setHours(0, 0, 0, 0), Fn(s, i);
    }
    const l = !("era" in a) || a.era === 1 ? r.year : 1 - r.year;
    return s.setFullYear(l, 0, i.firstWeekContainsDate), s.setHours(0, 0, 0, 0), Fn(s, i);
  }
}

export class tF extends $e {
  constructor() {
    super(...arguments);
    de(this, "priority", 130);
    de(this, "incompatibleTokens", ["G", "y", "Y", "u", "Q", "q", "M", "L", "w", "d", "D", "e", "c", "t", "T"]);
  }
  parse(s, a) {
    return ku(a === "R" ? 4 : a.length, s);
  }
  set(s, a, r) {
    const i = qe(s, 0);
    return i.setFullYear(r, 0, 4), i.setHours(0, 0, 0, 0), va(i);
  }
}

export class nF extends $e {
  constructor() {
    super(...arguments);
    de(this, "priority", 130);
    de(this, "incompatibleTokens", ["G", "y", "Y", "R", "w", "I", "i", "e", "c", "t", "T"]);
  }
  parse(s, a) {
    return ku(a === "u" ? 4 : a.length, s);
  }
  set(s, a, r) {
    return s.setFullYear(r, 0, 1), s.setHours(0, 0, 0, 0), s;
  }
}

export class sF extends $e {
  constructor() {
    super(...arguments);
    de(this, "priority", 120);
    de(this, "incompatibleTokens", ["Y", "R", "q", "M", "L", "w", "I", "d", "D", "i", "e", "c", "t", "T"]);
  }
  parse(s, a, r) {
    switch (a) {
      case "Q":
      case "QQ":
        return pt(a.length, s);
      case "Qo":
        return r.ordinalNumber(s, { unit: "quarter" });
      case "QQQ":
        return r.quarter(s, { width: "abbreviated", context: "formatting" }) || r.quarter(s, { width: "narrow", context: "formatting" });
      case "QQQQQ":
        return r.quarter(s, { width: "narrow", context: "formatting" });
      case "QQQQ":
      default:
        return r.quarter(s, { width: "wide", context: "formatting" }) || r.quarter(s, { width: "abbreviated", context: "formatting" }) || r.quarter(s, { width: "narrow", context: "formatting" });
    }
  }
  validate(s, a) {
    return a >= 1 && a <= 4;
  }
  set(s, a, r) {
    return s.setMonth((r - 1) * 3, 1), s.setHours(0, 0, 0, 0), s;
  }
}

export class aF extends $e {
  constructor() {
    super(...arguments);
    de(this, "priority", 120);
    de(this, "incompatibleTokens", ["Y", "R", "Q", "M", "L", "w", "I", "d", "D", "i", "e", "c", "t", "T"]);
  }
  parse(s, a, r) {
    switch (a) {
      case "q":
      case "qq":
        return pt(a.length, s);
      case "qo":
        return r.ordinalNumber(s, { unit: "quarter" });
      case "qqq":
        return r.quarter(s, { width: "abbreviated", context: "standalone" }) || r.quarter(s, { width: "narrow", context: "standalone" });
      case "qqqqq":
        return r.quarter(s, { width: "narrow", context: "standalone" });
      case "qqqq":
      default:
        return r.quarter(s, { width: "wide", context: "standalone" }) || r.quarter(s, { width: "abbreviated", context: "standalone" }) || r.quarter(s, { width: "narrow", context: "standalone" });
    }
  }
  validate(s, a) {
    return a >= 1 && a <= 4;
  }
  set(s, a, r) {
    return s.setMonth((r - 1) * 3, 1), s.setHours(0, 0, 0, 0), s;
  }
}

export class rF extends $e {
  constructor() {
    super(...arguments);
    de(this, "incompatibleTokens", ["Y", "R", "q", "Q", "L", "w", "I", "D", "i", "e", "c", "t", "T"]);
    de(this, "priority", 110);
  }
  parse(s, a, r) {
    const i = (o) => o - 1;
    switch (a) {
      case "M":
        return gt(lt(xt.month, s), i);
      case "MM":
        return gt(pt(2, s), i);
      case "Mo":
        return gt(r.ordinalNumber(s, { unit: "month" }), i);
      case "MMM":
        return r.month(s, { width: "abbreviated", context: "formatting" }) || r.month(s, { width: "narrow", context: "formatting" });
      case "MMMMM":
        return r.month(s, { width: "narrow", context: "formatting" });
      case "MMMM":
      default:
        return r.month(s, { width: "wide", context: "formatting" }) || r.month(s, { width: "abbreviated", context: "formatting" }) || r.month(s, { width: "narrow", context: "formatting" });
    }
  }
  validate(s, a) {
    return a >= 0 && a <= 11;
  }
  set(s, a, r) {
    return s.setMonth(r, 1), s.setHours(0, 0, 0, 0), s;
  }
}

export class iF extends $e {
  constructor() {
    super(...arguments);
    de(this, "priority", 110);
    de(this, "incompatibleTokens", ["Y", "R", "q", "Q", "M", "w", "I", "D", "i", "e", "c", "t", "T"]);
  }
  parse(s, a, r) {
    const i = (o) => o - 1;
    switch (a) {
      case "L":
        return gt(lt(xt.month, s), i);
      case "LL":
        return gt(pt(2, s), i);
      case "Lo":
        return gt(r.ordinalNumber(s, { unit: "month" }), i);
      case "LLL":
        return r.month(s, { width: "abbreviated", context: "standalone" }) || r.month(s, { width: "narrow", context: "standalone" });
      case "LLLLL":
        return r.month(s, { width: "narrow", context: "standalone" });
      case "LLLL":
      default:
        return r.month(s, { width: "wide", context: "standalone" }) || r.month(s, { width: "abbreviated", context: "standalone" }) || r.month(s, { width: "narrow", context: "standalone" });
    }
  }
  validate(s, a) {
    return a >= 0 && a <= 11;
  }
  set(s, a, r) {
    return s.setMonth(r, 1), s.setHours(0, 0, 0, 0), s;
  }
}

export function oF(e, n, s) {
  const a = we(e), r = vg(a, s) - n;
  return a.setDate(a.getDate() - r * 7), a;
}

export class lF extends $e {
  constructor() {
    super(...arguments);
    de(this, "priority", 100);
    de(this, "incompatibleTokens", ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "i", "t", "T"]);
  }
  parse(s, a, r) {
    switch (a) {
      case "w":
        return lt(xt.week, s);
      case "wo":
        return r.ordinalNumber(s, { unit: "week" });
      default:
        return pt(a.length, s);
    }
  }
  validate(s, a) {
    return a >= 1 && a <= 53;
  }
  set(s, a, r, i) {
    return Fn(oF(s, r, i), i);
  }
}

export function cF(e, n) {
  const s = we(e), a = xg(s) - n;
  return s.setDate(s.getDate() - a * 7), s;
}

export class dF extends $e {
  constructor() {
    super(...arguments);
    de(this, "priority", 100);
    de(this, "incompatibleTokens", ["y", "Y", "u", "q", "Q", "M", "L", "w", "d", "D", "e", "c", "t", "T"]);
  }
  parse(s, a, r) {
    switch (a) {
      case "I":
        return lt(xt.week, s);
      case "Io":
        return r.ordinalNumber(s, { unit: "week" });
      default:
        return pt(a.length, s);
    }
  }
  validate(s, a) {
    return a >= 1 && a <= 53;
  }
  set(s, a, r) {
    return va(cF(s, r));
  }
}

export const uF = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

export const mF = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

export class pF extends $e {
  constructor() {
    super(...arguments);
    de(this, "priority", 90);
    de(this, "subPriority", 1);
    de(this, "incompatibleTokens", ["Y", "R", "q", "Q", "w", "I", "D", "i", "e", "c", "t", "T"]);
  }
  parse(s, a, r) {
    switch (a) {
      case "d":
        return lt(xt.date, s);
      case "do":
        return r.ordinalNumber(s, { unit: "date" });
      default:
        return pt(a.length, s);
    }
  }
  validate(s, a) {
    const r = s.getFullYear(), i = IS(r), o = s.getMonth();
    return i ? a >= 1 && a <= mF[o] : a >= 1 && a <= uF[o];
  }
  set(s, a, r) {
    return s.setDate(r), s.setHours(0, 0, 0, 0), s;
  }
}

export class hF extends $e {
  constructor() {
    super(...arguments);
    de(this, "priority", 90);
    de(this, "subpriority", 1);
    de(this, "incompatibleTokens", ["Y", "R", "q", "Q", "M", "L", "w", "I", "d", "E", "i", "e", "c", "t", "T"]);
  }
  parse(s, a, r) {
    switch (a) {
      case "D":
      case "DD":
        return lt(xt.dayOfYear, s);
      case "Do":
        return r.ordinalNumber(s, { unit: "date" });
      default:
        return pt(a.length, s);
    }
  }
  validate(s, a) {
    const r = s.getFullYear();
    return IS(r) ? a >= 1 && a <= 366 : a >= 1 && a <= 365;
  }
  set(s, a, r) {
    return s.setMonth(0, r), s.setHours(0, 0, 0, 0), s;
  }
}

export function jg(e, n, s) {
  var p, h, f, v;
  const a = xi(), r = (s == null ? void 0 : s.weekStartsOn) ?? ((h = (p = s == null ? void 0 : s.locale) == null ? void 0 : p.options) == null ? void 0 : h.weekStartsOn) ?? a.weekStartsOn ?? ((v = (f = a.locale) == null ? void 0 : f.options) == null ? void 0 : v.weekStartsOn) ?? 0, i = we(e), o = i.getDay(), c = (n % 7 + 7) % 7, u = 7 - r, m = n < 0 || n > 6 ? n - (o + u) % 7 : (c + u) % 7 - (o + u) % 7;
  return Ft(i, m);
}

export class fF extends $e {
  constructor() {
    super(...arguments);
    de(this, "priority", 90);
    de(this, "incompatibleTokens", ["D", "i", "e", "c", "t", "T"]);
  }
  parse(s, a, r) {
    switch (a) {
      case "E":
      case "EE":
      case "EEE":
        return r.day(s, { width: "abbreviated", context: "formatting" }) || r.day(s, { width: "short", context: "formatting" }) || r.day(s, { width: "narrow", context: "formatting" });
      case "EEEEE":
        return r.day(s, { width: "narrow", context: "formatting" });
      case "EEEEEE":
        return r.day(s, { width: "short", context: "formatting" }) || r.day(s, { width: "narrow", context: "formatting" });
      case "EEEE":
      default:
        return r.day(s, { width: "wide", context: "formatting" }) || r.day(s, { width: "abbreviated", context: "formatting" }) || r.day(s, { width: "short", context: "formatting" }) || r.day(s, { width: "narrow", context: "formatting" });
    }
  }
  validate(s, a) {
    return a >= 0 && a <= 6;
  }
  set(s, a, r, i) {
    return s = jg(s, r, i), s.setHours(0, 0, 0, 0), s;
  }
}

export class xF extends $e {
  constructor() {
    super(...arguments);
    de(this, "priority", 90);
    de(this, "incompatibleTokens", ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "E", "i", "c", "t", "T"]);
  }
  parse(s, a, r, i) {
    const o = (l) => {
      const c = Math.floor((l - 1) / 7) * 7;
      return (l + i.weekStartsOn + 6) % 7 + c;
    };
    switch (a) {
      case "e":
      case "ee":
        return gt(pt(a.length, s), o);
      case "eo":
        return gt(r.ordinalNumber(s, { unit: "day" }), o);
      case "eee":
        return r.day(s, { width: "abbreviated", context: "formatting" }) || r.day(s, { width: "short", context: "formatting" }) || r.day(s, { width: "narrow", context: "formatting" });
      case "eeeee":
        return r.day(s, { width: "narrow", context: "formatting" });
      case "eeeeee":
        return r.day(s, { width: "short", context: "formatting" }) || r.day(s, { width: "narrow", context: "formatting" });
      case "eeee":
      default:
        return r.day(s, { width: "wide", context: "formatting" }) || r.day(s, { width: "abbreviated", context: "formatting" }) || r.day(s, { width: "short", context: "formatting" }) || r.day(s, { width: "narrow", context: "formatting" });
    }
  }
  validate(s, a) {
    return a >= 0 && a <= 6;
  }
  set(s, a, r, i) {
    return s = jg(s, r, i), s.setHours(0, 0, 0, 0), s;
  }
}

export class gF extends $e {
  constructor() {
    super(...arguments);
    de(this, "priority", 90);
    de(this, "incompatibleTokens", ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "E", "i", "e", "t", "T"]);
  }
  parse(s, a, r, i) {
    const o = (l) => {
      const c = Math.floor((l - 1) / 7) * 7;
      return (l + i.weekStartsOn + 6) % 7 + c;
    };
    switch (a) {
      case "c":
      case "cc":
        return gt(pt(a.length, s), o);
      case "co":
        return gt(r.ordinalNumber(s, { unit: "day" }), o);
      case "ccc":
        return r.day(s, { width: "abbreviated", context: "standalone" }) || r.day(s, { width: "short", context: "standalone" }) || r.day(s, { width: "narrow", context: "standalone" });
      case "ccccc":
        return r.day(s, { width: "narrow", context: "standalone" });
      case "cccccc":
        return r.day(s, { width: "short", context: "standalone" }) || r.day(s, { width: "narrow", context: "standalone" });
      case "cccc":
      default:
        return r.day(s, { width: "wide", context: "standalone" }) || r.day(s, { width: "abbreviated", context: "standalone" }) || r.day(s, { width: "short", context: "standalone" }) || r.day(s, { width: "narrow", context: "standalone" });
    }
  }
  validate(s, a) {
    return a >= 0 && a <= 6;
  }
  set(s, a, r, i) {
    return s = jg(s, r, i), s.setHours(0, 0, 0, 0), s;
  }
}

export function vF(e, n) {
  const s = we(e), a = UL(s), r = n - a;
  return Ft(s, r);
}

export class yF extends $e {
  constructor() {
    super(...arguments);
    de(this, "priority", 90);
    de(this, "incompatibleTokens", ["y", "Y", "u", "q", "Q", "M", "L", "w", "d", "D", "E", "e", "c", "t", "T"]);
  }
  parse(s, a, r) {
    const i = (o) => o === 0 ? 7 : o;
    switch (a) {
      case "i":
      case "ii":
        return pt(a.length, s);
      case "io":
        return r.ordinalNumber(s, { unit: "day" });
      case "iii":
        return gt(r.day(s, { width: "abbreviated", context: "formatting" }) || r.day(s, { width: "short", context: "formatting" }) || r.day(s, { width: "narrow", context: "formatting" }), i);
      case "iiiii":
        return gt(r.day(s, { width: "narrow", context: "formatting" }), i);
      case "iiiiii":
        return gt(r.day(s, { width: "short", context: "formatting" }) || r.day(s, { width: "narrow", context: "formatting" }), i);
      case "iiii":
      default:
        return gt(r.day(s, { width: "wide", context: "formatting" }) || r.day(s, { width: "abbreviated", context: "formatting" }) || r.day(s, { width: "short", context: "formatting" }) || r.day(s, { width: "narrow", context: "formatting" }), i);
    }
  }
  validate(s, a) {
    return a >= 1 && a <= 7;
  }
  set(s, a, r) {
    return s = vF(s, r), s.setHours(0, 0, 0, 0), s;
  }
}

export class jF extends $e {
  constructor() {
    super(...arguments);
    de(this, "priority", 80);
    de(this, "incompatibleTokens", ["b", "B", "H", "k", "t", "T"]);
  }
  parse(s, a, r) {
    switch (a) {
      case "a":
      case "aa":
      case "aaa":
        return r.dayPeriod(s, { width: "abbreviated", context: "formatting" }) || r.dayPeriod(s, { width: "narrow", context: "formatting" });
      case "aaaaa":
        return r.dayPeriod(s, { width: "narrow", context: "formatting" });
      case "aaaa":
      default:
        return r.dayPeriod(s, { width: "wide", context: "formatting" }) || r.dayPeriod(s, { width: "abbreviated", context: "formatting" }) || r.dayPeriod(s, { width: "narrow", context: "formatting" });
    }
  }
  set(s, a, r) {
    return s.setHours(yg(r), 0, 0, 0), s;
  }
}

export class bF extends $e {
  constructor() {
    super(...arguments);
    de(this, "priority", 80);
    de(this, "incompatibleTokens", ["a", "B", "H", "k", "t", "T"]);
  }
  parse(s, a, r) {
    switch (a) {
      case "b":
      case "bb":
      case "bbb":
        return r.dayPeriod(s, { width: "abbreviated", context: "formatting" }) || r.dayPeriod(s, { width: "narrow", context: "formatting" });
      case "bbbbb":
        return r.dayPeriod(s, { width: "narrow", context: "formatting" });
      case "bbbb":
      default:
        return r.dayPeriod(s, { width: "wide", context: "formatting" }) || r.dayPeriod(s, { width: "abbreviated", context: "formatting" }) || r.dayPeriod(s, { width: "narrow", context: "formatting" });
    }
  }
  set(s, a, r) {
    return s.setHours(yg(r), 0, 0, 0), s;
  }
}

export class wF extends $e {
  constructor() {
    super(...arguments);
    de(this, "priority", 80);
    de(this, "incompatibleTokens", ["a", "b", "t", "T"]);
  }
  parse(s, a, r) {
    switch (a) {
      case "B":
      case "BB":
      case "BBB":
        return r.dayPeriod(s, { width: "abbreviated", context: "formatting" }) || r.dayPeriod(s, { width: "narrow", context: "formatting" });
      case "BBBBB":
        return r.dayPeriod(s, { width: "narrow", context: "formatting" });
      case "BBBB":
      default:
        return r.dayPeriod(s, { width: "wide", context: "formatting" }) || r.dayPeriod(s, { width: "abbreviated", context: "formatting" }) || r.dayPeriod(s, { width: "narrow", context: "formatting" });
    }
  }
  set(s, a, r) {
    return s.setHours(yg(r), 0, 0, 0), s;
  }
}

export class NF extends $e {
  constructor() {
    super(...arguments);
    de(this, "priority", 70);
    de(this, "incompatibleTokens", ["H", "K", "k", "t", "T"]);
  }
  parse(s, a, r) {
    switch (a) {
      case "h":
        return lt(xt.hour12h, s);
      case "ho":
        return r.ordinalNumber(s, { unit: "hour" });
      default:
        return pt(a.length, s);
    }
  }
  validate(s, a) {
    return a >= 1 && a <= 12;
  }
  set(s, a, r) {
    const i = s.getHours() >= 12;
    return i && r < 12 ? s.setHours(r + 12, 0, 0, 0) : !i && r === 12 ? s.setHours(0, 0, 0, 0) : s.setHours(r, 0, 0, 0), s;
  }
}

export class CF extends $e {
  constructor() {
    super(...arguments);
    de(this, "priority", 70);
    de(this, "incompatibleTokens", ["a", "b", "h", "K", "k", "t", "T"]);
  }
  parse(s, a, r) {
    switch (a) {
      case "H":
        return lt(xt.hour23h, s);
      case "Ho":
        return r.ordinalNumber(s, { unit: "hour" });
      default:
        return pt(a.length, s);
    }
  }
  validate(s, a) {
    return a >= 0 && a <= 23;
  }
  set(s, a, r) {
    return s.setHours(r, 0, 0, 0), s;
  }
}

export class SF extends $e {
  constructor() {
    super(...arguments);
    de(this, "priority", 70);
    de(this, "incompatibleTokens", ["h", "H", "k", "t", "T"]);
  }
  parse(s, a, r) {
    switch (a) {
      case "K":
        return lt(xt.hour11h, s);
      case "Ko":
        return r.ordinalNumber(s, { unit: "hour" });
      default:
        return pt(a.length, s);
    }
  }
  validate(s, a) {
    return a >= 0 && a <= 11;
  }
  set(s, a, r) {
    return s.getHours() >= 12 && r < 12 ? s.setHours(r + 12, 0, 0, 0) : s.setHours(r, 0, 0, 0), s;
  }
}

export class kF extends $e {
  constructor() {
    super(...arguments);
    de(this, "priority", 70);
    de(this, "incompatibleTokens", ["a", "b", "h", "H", "K", "t", "T"]);
  }
  parse(s, a, r) {
    switch (a) {
      case "k":
        return lt(xt.hour24h, s);
      case "ko":
        return r.ordinalNumber(s, { unit: "hour" });
      default:
        return pt(a.length, s);
    }
  }
  validate(s, a) {
    return a >= 1 && a <= 24;
  }
  set(s, a, r) {
    const i = r <= 24 ? r % 24 : r;
    return s.setHours(i, 0, 0, 0), s;
  }
}

export class TF extends $e {
  constructor() {
    super(...arguments);
    de(this, "priority", 60);
    de(this, "incompatibleTokens", ["t", "T"]);
  }
  parse(s, a, r) {
    switch (a) {
      case "m":
        return lt(xt.minute, s);
      case "mo":
        return r.ordinalNumber(s, { unit: "minute" });
      default:
        return pt(a.length, s);
    }
  }
  validate(s, a) {
    return a >= 0 && a <= 59;
  }
  set(s, a, r) {
    return s.setMinutes(r, 0, 0), s;
  }
}

export class PF extends $e {
  constructor() {
    super(...arguments);
    de(this, "priority", 50);
    de(this, "incompatibleTokens", ["t", "T"]);
  }
  parse(s, a, r) {
    switch (a) {
      case "s":
        return lt(xt.second, s);
      case "so":
        return r.ordinalNumber(s, { unit: "second" });
      default:
        return pt(a.length, s);
    }
  }
  validate(s, a) {
    return a >= 0 && a <= 59;
  }
  set(s, a, r) {
    return s.setSeconds(r, 0), s;
  }
}

export class EF extends $e {
  constructor() {
    super(...arguments);
    de(this, "priority", 30);
    de(this, "incompatibleTokens", ["t", "T"]);
  }
  parse(s, a) {
    const r = (i) => Math.trunc(i * Math.pow(10, -a.length + 3));
    return gt(pt(a.length, s), r);
  }
  set(s, a, r) {
    return s.setMilliseconds(r), s;
  }
}

export class MF extends $e {
  constructor() {
    super(...arguments);
    de(this, "priority", 10);
    de(this, "incompatibleTokens", ["t", "T", "x"]);
  }
  parse(s, a) {
    switch (a) {
      case "X":
        return Js($s.basicOptionalMinutes, s);
      case "XX":
        return Js($s.basic, s);
      case "XXXX":
        return Js($s.basicOptionalSeconds, s);
      case "XXXXX":
        return Js($s.extendedOptionalSeconds, s);
      case "XXX":
      default:
        return Js($s.extended, s);
    }
  }
  set(s, a, r) {
    return a.timestampIsSet ? s : qe(s, s.getTime() - xo(s) - r);
  }
}

export class RF extends $e {
  constructor() {
    super(...arguments);
    de(this, "priority", 10);
    de(this, "incompatibleTokens", ["t", "T", "X"]);
  }
  parse(s, a) {
    switch (a) {
      case "x":
        return Js($s.basicOptionalMinutes, s);
      case "xx":
        return Js($s.basic, s);
      case "xxxx":
        return Js($s.basicOptionalSeconds, s);
      case "xxxxx":
        return Js($s.extendedOptionalSeconds, s);
      case "xxx":
      default:
        return Js($s.extended, s);
    }
  }
  set(s, a, r) {
    return a.timestampIsSet ? s : qe(s, s.getTime() - xo(s) - r);
  }
}

export class IF extends $e {
  constructor() {
    super(...arguments);
    de(this, "priority", 40);
    de(this, "incompatibleTokens", "*");
  }
  parse(s) {
    return MS(s);
  }
  set(s, a, r) {
    return [qe(s, r * 1e3), { timestampIsSet: true }];
  }
}

export class AF extends $e {
  constructor() {
    super(...arguments);
    de(this, "priority", 20);
    de(this, "incompatibleTokens", "*");
  }
  parse(s) {
    return MS(s);
  }
  set(s, a, r) {
    return [qe(s, r), { timestampIsSet: true }];
  }
}

export const DF = { G: new XL(), y: new ZL(), Y: new eF(), R: new tF(), u: new nF(), Q: new sF(), q: new aF(), M: new rF(), L: new iF(), w: new lF(), I: new dF(), d: new pF(), D: new hF(), E: new fF(), e: new xF(), c: new gF(), i: new yF(), a: new jF(), b: new bF(), B: new wF(), h: new NF(), H: new CF(), K: new SF(), k: new kF(), m: new TF(), s: new PF(), S: new EF(), X: new MF(), x: new RF(), t: new IF(), T: new AF() };

export const _F = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;

export const OF = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;

export const LF = /^'([^]*?)'?$/;

export const FF = /''/g;

export const zF = /\S/;

export const $F = /[a-zA-Z]/;

export function AS(e, n, s, a) {
  var x, y, b, g;
  const r = VL(), i = r.locale ?? fg, o = r.firstWeekContainsDate ?? ((y = (x = r.locale) == null ? void 0 : x.options) == null ? void 0 : y.firstWeekContainsDate) ?? 1, l = r.weekStartsOn ?? ((g = (b = r.locale) == null ? void 0 : b.options) == null ? void 0 : g.weekStartsOn) ?? 0, c = { firstWeekContainsDate: o, weekStartsOn: l, locale: i }, u = [new KL()], m = n.match(OF).map((j) => {
    const w = j[0];
    if (w in yf) {
      const C = yf[w];
      return C(j, i.formatLong);
    }
    return j;
  }).join("").match(_F), p = [];
  for (let j of m) {
    TS(j) && jf(j, n, e), kS(j) && jf(j, n, e);
    const w = j[0], C = DF[w];
    if (C) {
      const { incompatibleTokens: P } = C;
      if (Array.isArray(P)) {
        const L = p.find((z) => P.includes(z.token) || z.token === w);
        if (L) throw new RangeError(`The format string mustn't contain \`${L.fullToken}\` and \`${j}\` at the same time`);
      } else if (C.incompatibleTokens === "*" && p.length > 0) throw new RangeError(`The format string mustn't contain \`${j}\` and any other token at the same time`);
      p.push({ token: w, fullToken: j });
      const I = C.run(e, j, i.match, c);
      if (!I) return qe(s, NaN);
      u.push(I.setter), e = I.rest;
    } else {
      if (w.match($F)) throw new RangeError("Format string contains an unescaped latin alphabet character `" + w + "`");
      if (j === "''" ? j = "'" : w === "'" && (j = JF(j)), e.indexOf(j) === 0) e = e.slice(j.length);
      else return qe(s, NaN);
    }
  }
  if (e.length > 0 && zF.test(e)) return qe(s, NaN);
  const h = u.map((j) => j.priority).sort((j, w) => w - j).filter((j, w, C) => C.indexOf(j) === w).map((j) => u.filter((w) => w.priority === j).sort((w, C) => C.subPriority - w.subPriority)).map((j) => j[0]);
  let f = we(s);
  if (isNaN(f.getTime())) return qe(s, NaN);
  const v = {};
  for (const j of h) {
    if (!j.validate(f, c)) return qe(s, NaN);
    const w = j.set(f, v, c);
    Array.isArray(w) ? (f = w[0], Object.assign(v, w[1])) : f = w;
  }
  return qe(s, f);
}

export function JF(e) {
  return e.match(LF)[1].replace(FF, "'");
}

export function DS(e, n) {
  const s = +we(e), [a, r] = [+we(n.start), +we(n.end)].sort((i, o) => i - o);
  return s >= a && s <= r;
}

export let A9 = Tabs;

export const C_si = A9;

export const Q9 = { platform_discovery: "Platform Discovery", manual_request: "Manual Request" };

export const Y9 = { analyst: "Analyst", company: "Company", asset: "Asset", event: "Event", narrative: "Narrative", market_signal: "Market Signal" };

export const K9 = { discovered: "Discovered", sent_for_review: "Sent for Review" };

export const X9 = { entity_added: "Entity Added", entity_approved: "Entity Approved", entity_rejected: "Entity Rejected", status_changed: "Status Changed", module_access_changed: "Module Access Changed", data_source_created: "Data Source Created", data_source_activated: "Data Source Activated", data_source_deactivated: "Data Source Deactivated" };

export const _m = [{ id: "rev-001", entityName: "Thibault Boutherin", entityType: "analyst", source: "platform_discovery", requestedBy: "System", requestedOn: "Sep 18, 2026", status: "discovered" }, { id: "rev-002", entityName: "Michael Leuchten", entityType: "analyst", source: "platform_discovery", requestedBy: "System", requestedOn: "Sep 17, 2026", status: "discovered" }, { id: "rev-003", entityName: "Emmanuel Papadakis", entityType: "analyst", source: "manual_request", requestedBy: "IR Coordinator", requestedOn: "Sep 16, 2026", status: "sent_for_review" }, { id: "rev-004", entityName: "Vertex Pharmaceuticals", entityType: "company", source: "platform_discovery", requestedBy: "System", requestedOn: "Sep 18, 2026", status: "discovered" }, { id: "rev-005", entityName: "Regeneron", entityType: "company", source: "platform_discovery", requestedBy: "System", requestedOn: "Sep 17, 2026", status: "discovered" }, { id: "rev-006", entityName: "Rinvoq", entityType: "asset", source: "platform_discovery", requestedBy: "System", requestedOn: "Sep 16, 2026", status: "discovered" }, { id: "rev-007", entityName: "Dupixent", entityType: "asset", source: "platform_discovery", requestedBy: "System", requestedOn: "Sep 15, 2026", status: "discovered" }, { id: "rev-008", entityName: "Pfizer Q2 2026 Earnings Call", entityType: "event", source: "platform_discovery", requestedBy: "System", requestedOn: "Sep 21, 2026", status: "discovered" }, { id: "rev-009", entityName: "AbbVie Investor Day 2026", entityType: "event", source: "platform_discovery", requestedBy: "System", requestedOn: "Oct 5, 2026", status: "discovered" }];

export const gd = [{ id: "audit-001", timestamp: "Sep 18, 2026 at 2:45 PM", actionType: "module_access_changed", objectType: "module_access", objectName: "Q2 2026 Analyst Coverage Pack", performedBy: "IR Manager", notes: "Coach access enabled" }, { id: "audit-002", timestamp: "Sep 18, 2026 at 10:00 AM", actionType: "entity_added", objectType: "entity", objectName: "Thibault Boutherin (Analyst)", performedBy: "System", notes: "Platform Discovery" }, { id: "audit-003", timestamp: "Sep 17, 2026 at 3:00 PM", actionType: "data_source_activated", objectType: "data_source", objectName: "Immunology Competitive Landscape", performedBy: "IR Director", notes: "Data Source activated" }, { id: "audit-004", timestamp: "Sep 16, 2026 at 11:30 AM", actionType: "entity_added", objectType: "entity", objectName: "Emmanuel Papadakis (Analyst)", performedBy: "IR Coordinator", notes: "Manual Request" }, { id: "audit-005", timestamp: "Sep 15, 2026 at 4:20 PM", actionType: "entity_approved", objectType: "entity", objectName: "Marcus Reid (Analyst)", performedBy: "IR Director", notes: "Approved for active tracking" }, { id: "audit-006", timestamp: "Sep 15, 2026 at 2:00 PM", actionType: "data_source_created", objectType: "data_source", objectName: "Oncology Pipeline Intelligence", performedBy: "IR Manager", notes: "Created from curated analyst group" }, { id: "audit-007", timestamp: "Sep 14, 2026 at 9:15 AM", actionType: "module_access_changed", objectType: "module_access", objectName: "Immunology Competitive Landscape", performedBy: "IR Director", notes: "Radar and Canvas access enabled" }, { id: "audit-008", timestamp: "Sep 13, 2026 at 11:00 AM", actionType: "entity_rejected", objectType: "entity", objectName: "Generic Pharma Corp", performedBy: "IR Manager", notes: "Not relevant to coverage scope" }, { id: "audit-009", timestamp: "Sep 12, 2026 at 3:30 PM", actionType: "status_changed", objectType: "data_source", objectName: "Q1 2026 Earnings Coverage", performedBy: "System", notes: "Auto-archived after 90 days" }, { id: "audit-010", timestamp: "Sep 10, 2026 at 10:45 AM", actionType: "entity_added", objectType: "entity", objectName: "Vertex Pharmaceuticals (Company)", performedBy: "System", notes: "Platform Discovery" }];

export const w5 = () => _m.length;

export const Z9 = () => _m.filter((e) => e.status === "discovered").length;

export const e$ = () => _m.filter((e) => e.status === "sent_for_review").length;

export const t$ = [{ label: "Home", path: "/gei", icon: HouseIcon }, { label: "Entities", path: "/gei/entities", icon: Building2Icon }, { label: "Data Sources", path: "/gei/data-sources", icon: DatabaseIcon }, { label: "Governance", path: "/gei/governance", icon: ShieldIcon }];

export function C_zn() {
  const e = useLocation(), n = (a) => a === "/gei" ? e.pathname === "/gei" : e.pathname.startsWith(a), s = w5();
  return (<nav className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
<div className="container mx-auto px-6">
<div className="flex items-center justify-between h-14">
<div className="flex items-center gap-6">
<Link to="/gei" className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
G
</div>
<span className="font-bold text-lg text-foreground">
External Intelligence
</span>
</Link>
<div className="flex items-center gap-1">
{t$.map((a) => {
    const C_r = a.icon, i = n(a.path), o = a.label === "Governance" && s > 0;
    return (<Link to={a.path} key={a.path}>
<Button variant="ghost" size="sm" className={cn("gap-2 transition-colors duration-200 relative", i && "text-primary font-medium")}>
<C_r className="h-4 w-4" />
{a.label}
{o && (<span className="ml-0.5 text-xs font-medium bg-primary/15 text-primary px-1.5 py-0.5 rounded-full">
{s}
</span>)}
{i && (<span className="absolute bottom-0 left-2 right-2 h-0.5 bg-primary rounded-full" />)}
</Button>
</Link>);
  })}
</div>
</div>
<Link to="/">
<Button variant="ghost" size="sm" className="gap-2 text-muted-foreground hover:text-foreground transition-colors duration-200">
<ArrowLeftIcon className="h-4 w-4" />
Back to IR Co Pilot
</Button>
</Link>
</div>
</div>
</nav>);
}

export function C_n$({ title: e, value: n, description: s, icon: C_a, className: r }) {
  return (<div className={cn("bg-card rounded-lg border border-border/50 p-5", "transition-all duration-200", r)}>
<div className="flex items-center gap-2 mb-1">
{C_a && (<C_a className="h-4 w-4 text-muted-foreground" />)}
<p className="text-sm font-medium text-muted-foreground">
{e}
</p>
</div>
<p className="text-3xl font-semibold text-foreground mb-2">
{n}
</p>
<p className="text-xs text-muted-foreground leading-relaxed">
{s}
</p>
</div>);
}

export function C_s$({ title: e, description: n, stat: s, href: a, icon: C_r, className: i }) {
  return (<Link to={a} className={cn("block bg-card rounded-lg border border-border/50 p-5", "transition-all duration-200", "hover:border-primary/30 hover:shadow-sm hover:-translate-y-0.5", "group", i)}>
<div className="flex items-start justify-between mb-2">
<div className="flex items-center gap-2">
{C_r && (<C_r className="h-4 w-4 text-muted-foreground" />)}
<h4 className="text-sm font-semibold text-foreground">
{e}
</h4>
</div>
<ArrowRightIcon className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
</div>
<p className="text-xs text-muted-foreground leading-relaxed mb-3">
{n}
</p>
<p className="text-xs font-medium text-primary">
{s}
</p>
</Link>);
}

export const a$ = { approved: { icon: CircleCheckBigIcon, iconColor: "text-green-600", bgColor: "bg-green-50" }, "in-review": { icon: ClockIcon, iconColor: "text-amber-600", bgColor: "bg-amber-50" }, reference: { icon: ArchiveIcon, iconColor: "text-muted-foreground", bgColor: "bg-muted/50" } };

export function C_r$({ status: e, title: n, description: s, stat: a, className: r }) {
  const i = a$[e], C_o = i.icon;
  return (<div className={cn("flex items-center gap-4 bg-card rounded-lg border border-border/50 p-4", "transition-all duration-200", r)}>
<div className={cn("w-10 h-10 rounded-full flex items-center justify-center", i.bgColor)}>
<C_o className={cn("w-5 h-5", i.iconColor)} />
</div>
<div className="flex-1">
<p className="text-sm font-semibold text-foreground">
{n}
</p>
<p className="text-xs text-muted-foreground">
{s}
</p>
</div>
<div className="text-right">
<p className="text-sm font-medium text-foreground">
{a}
</p>
</div>
</div>);
}

export const ac = { price_volatility: "Price Volatility", volume_spike: "Volume Spike", sentiment_shift: "Sentiment Shift", sector_rotation: "Sector Rotation", options_activity: "Options Activity", analyst_action: "Analyst Action" };

export const i$ = { price_volatility: "text-red-600 bg-red-500/10", volume_spike: "text-blue-600 bg-blue-500/10", sentiment_shift: "text-purple-600 bg-purple-500/10", sector_rotation: "text-amber-600 bg-amber-500/10", options_activity: "text-emerald-600 bg-emerald-500/10", analyst_action: "text-cyan-600 bg-cyan-500/10" };

export const rc = [{ id: "1", name: "Novartis Post-Earnings Price Movement", signalType: "price_volatility", signalDate: "Sep 15, 2026", magnitude: "high", topics: ["Market Activity", "Investor Sentiment", "Financials"], linkedEntities: ["Novartis", "Novartis Q2 2026 Earnings Call"], direction: "neutral", intelligenceType: "external" }, { id: "2", name: "Large-Cap Pharma Volume Surge \u2014 Conference Week", signalType: "volume_spike", signalDate: "Sep 10, 2026", magnitude: "high", topics: ["Market Activity", "Investor Sentiment"], linkedEntities: ["JPMorgan Healthcare Conference 2026"], direction: "bullish", intelligenceType: "external" }, { id: "3", name: "Immunology Sector Sentiment Shift", signalType: "sentiment_shift", signalDate: "Sep 12, 2026", magnitude: "medium", topics: ["Investor Sentiment", "Competitive Positioning"], linkedEntities: ["Cosentyx", "Skyrizi", "IL-17/IL-23 Class"], direction: "bearish", intelligenceType: "external" }, { id: "4", name: "Pharma Sector Rotation \u2014 Defensive Positioning", signalType: "sector_rotation", signalDate: "Aug 18, 2026", magnitude: "medium", topics: ["Market Activity", "Strategy"], linkedEntities: ["Large-Cap Pharma"], direction: "bullish", intelligenceType: "external" }, { id: "5", name: "Unusual Options Activity \u2014 Novartis Pre-Earnings", signalType: "options_activity", signalDate: "Sep 13, 2026", magnitude: "medium", topics: ["Market Activity", "Investor Sentiment"], linkedEntities: ["Novartis"], direction: "neutral", intelligenceType: "external" }, { id: "6", name: "Analyst Rating Changes \u2014 Immunology Coverage", signalType: "analyst_action", signalDate: "Sep 16, 2026", magnitude: "low", topics: ["Investor Sentiment", "Competitive Positioning"], linkedEntities: ["James Quigley", "Richard Vosser", "Novartis"], direction: "neutral", intelligenceType: "external" }];

export const N5 = { 1: [{ id: "signal1-1", source: "market_activity", intelligenceType: "external", date: "Sep 15, 2026", content: `"Novartis shares experienced elevated volatility in post-earnings trading, with intraday swings reflecting investor uncertainty around growth visibility and portfolio sustainability."

Market wrap commentary following Q2 earnings release.`, topics: ["Market Activity", "Investor Sentiment"], attribution: "Market Commentary" }, { id: "signal1-2", source: "research_note", intelligenceType: "external", date: "Sep 15, 2026", content: `"Trading patterns suggest investors remain divided on near-term trajectory, with some viewing cautious guidance as appropriately conservative while others cite lack of positive catalysts."

Sell-side quantitative research note.`, topics: ["Investor Sentiment", "Financials"], attribution: "Sell-side Research" }], 2: [{ id: "signal2-1", source: "market_activity", intelligenceType: "external", date: "Sep 10, 2026", content: `"Trading volumes across large-cap pharma names spiked significantly during JPMorgan Healthcare Conference week, reflecting heightened investor engagement and portfolio rebalancing activity."

Quantitative market analysis.`, topics: ["Market Activity"], attribution: "Market Analytics" }, { id: "signal2-2", source: "research_note", intelligenceType: "external", date: "Sep 11, 2026", content: `"Volume surge appears correlated with conference presentation schedules, with notable spikes around key company sessions and breakout meetings."

Trading desk commentary.`, topics: ["Investor Sentiment", "Market Activity"], attribution: "Trading Desk Research" }], 3: [{ id: "signal3-1", source: "research_note", intelligenceType: "external", date: "Sep 12, 2026", content: `"Sentiment indicators for Immunology-focused pharma have shifted moderately negative, reflecting concerns around generic timelines and competitive dynamics within the IL-17/IL-23 class."

Quantitative sentiment analysis.`, topics: ["Investor Sentiment", "Competitive Positioning"], attribution: "Quantitative Research" }, { id: "signal3-2", source: "social_media", intelligenceType: "external", date: "Sep 12, 2026", content: `"Social media discussions among investors reflect increased skepticism around Immunology portfolio durability, with frequent comparisons between Cosentyx and Skyrizi trajectories."

Aggregated social sentiment analysis.`, topics: ["Investor Sentiment", "Competitive Positioning"], attribution: "Social Sentiment Analytics" }], 4: [{ id: "signal4-1", source: "market_activity", intelligenceType: "external", date: "Aug 18, 2026", content: `"Sector rotation data indicates increased institutional allocation to defensive pharma names amid broader market uncertainty, with large-cap healthcare stocks benefiting from risk-off sentiment."

Institutional flow analysis.`, topics: ["Market Activity", "Strategy"], attribution: "Institutional Flow Data" }, { id: "signal4-2", source: "research_note", intelligenceType: "external", date: "Aug 19, 2026", content: `"Defensive positioning within pharma reflects macro uncertainty rather than sector-specific developments, suggesting rotation may reverse with improved risk appetite."

Sector strategy note.`, topics: ["Market Activity", "Investor Sentiment"], attribution: "Sector Strategy Research" }], 5: [{ id: "signal5-1", source: "market_activity", intelligenceType: "external", date: "Sep 13, 2026", content: `"Options activity in Novartis spiked notably ahead of Q2 earnings, with elevated put-call ratios suggesting hedging activity and increased implied volatility around the announcement."

Options market analysis.`, topics: ["Market Activity", "Investor Sentiment"], attribution: "Options Analytics" }, { id: "signal5-2", source: "research_note", intelligenceType: "external", date: "Sep 13, 2026", content: `"Pre-earnings options positioning appears consistent with uncertainty around guidance, with traders positioning for potential volatility rather than directional conviction."

Derivatives research note.`, topics: ["Market Activity"], attribution: "Derivatives Research" }], 6: [{ id: "signal6-1", source: "research_note", intelligenceType: "external", date: "Sep 16, 2026", content: `"Multiple sell-side analysts adjusted ratings on Immunology-exposed pharma names following Q2 earnings season, with changes reflecting updated views on competitive positioning and growth visibility."

Rating change summary.`, topics: ["Investor Sentiment", "Competitive Positioning"], attribution: "Sell-side Research" }, { id: "signal6-2", source: "media", intelligenceType: "external", date: "Sep 16, 2026", content: `"Analyst rating activity across large-cap pharma remained mixed, with upgrades and downgrades reflecting divergent views on near-term catalysts and portfolio sustainability."

Financial media coverage.`, topics: ["Investor Sentiment"], attribution: "Financial Media" }] };

export const o$ = { 1: { overview: "Novartis post-earnings price movement reflected elevated volatility as investors assessed management commentary on portfolio durability and growth visibility, with intraday swings indicating divided sentiment on near-term trajectory", keyMetrics: [{ metric: "Intraday Range", value: "2.8%", context: "Wider than 30-day average" }, { metric: "Volume", value: "1.4x ADV", context: "Above average trading activity" }, { metric: "IV Rank", value: "65th percentile", context: "Elevated implied volatility" }], driverAnalysis: [{ factor: "Growth visibility uncertainty", detail: "Cautious guidance prompted investor reassessment of near-term trajectory" }, { factor: "Portfolio sustainability questions", detail: "Immunology durability narrative under scrutiny" }, { factor: "Competitive positioning", detail: "IL-17/IL-23 dynamics contributing to sentiment division" }], crossEntityRefs: [{ type: "Companies", entities: ["Novartis"] }, { type: "Events", entities: ["Novartis Q2 2026 Earnings Call"] }, { type: "Assets", entities: ["Cosentyx", "Immunology Portfolio"] }], narrativePatterns: ["Volatility reflecting divided investor sentiment", "Growth visibility concerns outweighing durability messaging", "Near-term trajectory uncertainty dominant theme"], timeline: [{ date: "Sep 14, 2026", activity: "Earnings release after market close" }, { date: "Sep 15, 2026", activity: "Post-earnings trading with elevated volatility" }, { date: "Sep 15, 2026", activity: "Sell-side note publication cycle" }] }, 2: { overview: "Large-cap pharma trading volumes spiked significantly during JPMorgan Healthcare Conference week, reflecting heightened institutional engagement and portfolio rebalancing around key company presentations", keyMetrics: [{ metric: "Average Volume Increase", value: "2.1x", context: "Sector-wide elevation" }, { metric: "Peak Day", value: "Sep 10", context: "Aligned with major presentations" }, { metric: "Institutional Block Trades", value: "+45%", context: "Above normal period" }], driverAnalysis: [{ factor: "Conference catalyst", detail: "Presentation schedule driving trading activity" }, { factor: "Portfolio rebalancing", detail: "Institutional adjustments based on strategy updates" }, { factor: "Information flow", detail: "Breakout meetings and management access" }], crossEntityRefs: [{ type: "Events", entities: ["JPMorgan Healthcare Conference 2026"] }, { type: "Companies", entities: ["Large-Cap Pharma Universe"] }], narrativePatterns: ["Conference-driven volume spike pattern", "Institutional engagement elevated", "Information-driven rebalancing activity"], timeline: [{ date: "Sep 9, 2026", activity: "Conference opens with initial volume uptick" }, { date: "Sep 10, 2026", activity: "Peak volume day aligned with major presentations" }, { date: "Sep 11, 2026", activity: "Volume normalization as conference concludes" }] }, 3: { overview: "Sentiment indicators for Immunology-focused pharma shifted moderately negative, driven by concerns around generic timelines and competitive dynamics within the IL-17/IL-23 class", keyMetrics: [{ metric: "Sentiment Score", value: "-12%", context: "Week-over-week decline" }, { metric: "Social Mention Volume", value: "+28%", context: "Increased discussion activity" }, { metric: "Negative Mention Ratio", value: "1.4x", context: "Above baseline" }], driverAnalysis: [{ factor: "Generic timeline concerns", detail: "Approaching patent cliffs raising durability questions" }, { factor: "IL-17/IL-23 competitive dynamics", detail: "Cosentyx vs Skyrizi comparisons intensifying" }, { factor: "Growth visibility", detail: "Near-term catalyst uncertainty" }], crossEntityRefs: [{ type: "Assets", entities: ["Cosentyx", "Skyrizi", "IL-17/IL-23 Class"] }, { type: "Companies", entities: ["Novartis", "AbbVie"] }], narrativePatterns: ["Generic exposure concerns rising", "Competitive dynamics intensifying in IL-17/IL-23", "Durability narrative under pressure"], timeline: [{ date: "Sep 10, 2026", activity: "Initial sentiment shift detected" }, { date: "Sep 11, 2026", activity: "Social discussion volume increases" }, { date: "Sep 12, 2026", activity: "Negative sentiment ratio peaks" }] }, 4: { overview: "Sector rotation data indicates increased institutional allocation to defensive pharma names amid broader market uncertainty, with large-cap healthcare benefiting from risk-off sentiment", keyMetrics: [{ metric: "Sector Inflows", value: "+$1.2B", context: "Weekly institutional flows" }, { metric: "Relative Performance", value: "+180bps", context: "vs S&P 500" }, { metric: "Defensive Beta", value: "0.72", context: "Below market average" }], driverAnalysis: [{ factor: "Macro uncertainty", detail: "Broader market volatility driving defensive allocation" }, { factor: "Dividend yield appeal", detail: "Large-cap pharma yield attracting income investors" }, { factor: "Earnings stability", detail: "Perceived resilience relative to cyclical sectors" }], crossEntityRefs: [{ type: "Companies", entities: ["Large-Cap Pharma", "Healthcare Sector"] }], narrativePatterns: ["Defensive rotation benefiting pharma", "Risk-off sentiment driving allocation", "Macro-driven rather than sector-specific"], timeline: [{ date: "Aug 15, 2026", activity: "Rotation pattern emerges" }, { date: "Aug 18, 2026", activity: "Institutional flow data confirms trend" }, { date: "Aug 19, 2026", activity: "Sector strategy commentary published" }] }, 5: { overview: "Options activity in Novartis spiked ahead of Q2 earnings with elevated put-call ratios and implied volatility, suggesting hedging activity and uncertainty around earnings guidance", keyMetrics: [{ metric: "Put-Call Ratio", value: "1.35", context: "Above 30-day average of 0.95" }, { metric: "IV Percentile", value: "78th", context: "Near 52-week highs" }, { metric: "Open Interest Change", value: "+22%", context: "Week-over-week increase" }], driverAnalysis: [{ factor: "Earnings uncertainty", detail: "Guidance concerns driving hedging activity" }, { factor: "Volatility positioning", detail: "Traders expecting price movement rather than direction" }, { factor: "Portfolio protection", detail: "Institutional put buying for risk management" }], crossEntityRefs: [{ type: "Companies", entities: ["Novartis"] }, { type: "Events", entities: ["Novartis Q2 2026 Earnings Call"] }], narrativePatterns: ["Pre-earnings hedging elevated", "Volatility positioning dominant over directional", "Uncertainty around guidance driving activity"], timeline: [{ date: "Sep 10, 2026", activity: "Options activity begins to elevate" }, { date: "Sep 13, 2026", activity: "Put-call ratio peaks" }, { date: "Sep 14, 2026", activity: "Earnings release" }] }, 6: { overview: "Multiple sell-side analysts adjusted ratings on Immunology-exposed pharma following Q2 earnings, reflecting updated views on competitive positioning and growth visibility", keyMetrics: [{ metric: "Rating Changes", value: "4", context: "Within coverage universe" }, { metric: "Net Direction", value: "Neutral", context: "2 upgrades, 2 downgrades" }, { metric: "Price Target Revisions", value: "6", context: "Mixed direction" }], driverAnalysis: [{ factor: "Competitive positioning reassessment", detail: "IL-17/IL-23 dynamics driving rating changes" }, { factor: "Growth visibility updates", detail: "Guidance interpretation varying across analysts" }, { factor: "Valuation adjustments", detail: "Price targets reflecting updated models" }], crossEntityRefs: [{ type: "Analysts", entities: ["James Quigley", "Richard Vosser", "Sell-side Coverage"] }, { type: "Companies", entities: ["Novartis"] }], narrativePatterns: ["Mixed analyst sentiment post-earnings", "Competitive positioning driving divergence", "Valuation methodology differences emerging"], timeline: [{ date: "Sep 15, 2026", activity: "Initial rating changes published" }, { date: "Sep 16, 2026", activity: "Additional analyst notes released" }, { date: "Sep 16, 2026", activity: "Media coverage of rating activity" }] } };

export function l$(e) {
  return o$[e];
}

export function c$(e) {
  return N5[e] || [];
}

export const sa = { perception_theme: "Perception Theme", competitive_positioning: "Competitive Positioning", risk_narrative: "Risk Narrative", growth_story: "Growth Story", leadership_messaging: "Leadership Messaging", market_sentiment: "Market Sentiment" };

export const Qa = { active: "Active", emerging: "Emerging", fading: "Fading", dormant: "Dormant" };

export const yo = [{ id: "narrative-1", name: "Immunology Portfolio Durability", narrativeType: "perception_theme", status: "active", lastUpdated: "Sep 15, 2026", riskLevel: "high", topics: ["Financials", "Guidance", "Competitive Positioning", "Investor Sentiment", "Messaging"], linkedEntities: [{ type: "company", name: "Novartis", id: "novartis" }, { type: "asset", name: "Cosentyx", id: "cosentyx" }, { type: "event", name: "Novartis Q2 2026 Earnings", id: "event-1" }], intelligenceItems: [{ id: "ni-1-1", sourceType: "Earnings Call", date: "Sep 14, 2026", rawContent: "Management reiterated confidence in the durability of the Immunology portfolio, while acknowledging continued pricing pressure and competitive intensity across key therapeutic areas.", context: "Prepared remarks during Novartis Q2 2026 earnings call.", topics: ["Financials", "Guidance", "Competitive Positioning"], attribution: "Novartis Q2 2026 Earnings Call" }, { id: "ni-1-2", sourceType: "Analyst Commentary", date: "Sep 15, 2026", rawContent: "Investor focus remains on the long-term durability of the Immunology portfolio, with questions around generic exposure and competitive dynamics in the IL-17/IL-23 class.", context: "Sell-side analyst note reacting to Q2 earnings commentary.", topics: ["Investor Sentiment", "Competitive Positioning"], attribution: "Sell-side Research" }, { id: "ni-1-3", sourceType: "Media", date: "Sep 14, 2026", rawContent: "Novartis's earnings messaging emphasized confidence in its Immunology franchise, though analysts noted continued scrutiny around near-term growth visibility.", context: "Financial media coverage reacting to earnings commentary.", topics: ["Messaging", "Investor Sentiment"], attribution: "Financial Media" }, { id: "ni-1-4", sourceType: "Social Media", date: "Sep 13, 2026", rawContent: "Investor and patient discussions on X and Reddit reference Cosentyx's durability and safety profile favorably, while raising questions about long-term differentiation versus Skyrizi as generic timelines approach.", context: "Aggregated public social media discussions following Q2 earnings and IL-17/IL-23 data updates.", topics: ["Investor Sentiment", "Competitive Positioning", "Messaging"], attribution: "X (formerly Twitter) and Reddit \u2014 Public Social Discourse" }], detailContent: { overview: "A persistent narrative theme centered on whether Novartis's Immunology portfolio can maintain competitive differentiation and revenue durability amid generic pressures and competitive IL-17/IL-23 launches.", keyTopics: ["Pipeline", "Competitive Positioning", "Investor Sentiment", "Guidance"], externalQuestions: ["What is the long-term trajectory of Cosentyx and Entresto?", "How will generic competition impact margin sustainability?", "What pipeline assets can offset potential erosion?"], perceptionPatterns: ["Analysts frequently frame durability as the central question for Immunology", "Messaging often characterized as 'confident but cautious'", "Peer comparisons to AbbVie's Skyrizi feature prominently"], crossEntityReferences: ["Cosentyx", "Entresto", "AbbVie", "Skyrizi", "Novartis Q2 2026 Earnings"], narrativeEvolution: ["Initially focused on generic risk in 2025", "Shifted to competitive positioning as IL-17/IL-23 data matured", "Now centered on portfolio-level durability and pipeline depth"], timeline: [{ date: "Jul 2026", label: "Cosentyx clinical update renewed durability discussion" }, { date: "Sep 2026", label: "Q2 earnings messaging reinforced confidence theme" }] } }, { id: "narrative-2", name: "Pipeline Execution Risk", narrativeType: "risk_narrative", status: "active", lastUpdated: "Sep 12, 2026", riskLevel: "medium", topics: ["Pipeline", "Execution Risk", "Strategy"], linkedEntities: [{ type: "company", name: "Novartis", id: "novartis" }, { type: "asset", name: "NVS-2113", id: "novartis-2113" }, { type: "event", name: "JPMorgan Healthcare Conference", id: "event-jpm" }], intelligenceItems: [{ id: "ni-2-1", sourceType: "Analyst Commentary", date: "Sep 12, 2026", rawContent: "Investors continue to assess execution risk across mid- and late-stage pipeline assets, particularly around development timelines and probability of success.", context: "Analyst assessment of pipeline cadence and delivery risk.", topics: ["Pipeline", "Execution Risk"], attribution: "Sell-side Research" }, { id: "ni-2-2", sourceType: "Investor Conference", date: "Sep 10, 2026", rawContent: "Management discussions at JPMorgan highlighted confidence in pipeline depth, while acknowledging execution complexity across multiple programs.", context: "Conference session commentary from JPMorgan Healthcare Conference.", topics: ["Strategy", "Pipeline"], attribution: "JPMorgan Healthcare Conference" }], detailContent: { overview: "A recurring risk narrative around whether pipeline catalysts will deliver on schedule and meet clinical expectations, with particular focus on mid-to-late-stage assets.", keyTopics: ["Pipeline", "Execution Risk", "Clinical Data", "Strategy"], externalQuestions: ["Are pipeline timelines achievable given historical execution patterns?", "What is the risk of clinical setbacks for key assets?", "How is management addressing execution concerns?"], perceptionPatterns: ["Execution risk cited as a key investor concern at conferences", "Questions often focus on specific catalyst timing", "Analyst tone reflects cautious optimism"], crossEntityReferences: ["NVS-2113", "JPMorgan Healthcare Conference"], narrativeEvolution: ["Emerged following pipeline restructuring announcements", "Heightened focus during investor conference season", "Remains an active watchpoint for 2026"], timeline: [{ date: "Sep 2026", label: "JPM conference highlighted execution as investor priority" }] } }, { id: "narrative-3", name: "Competitive Dynamics in IL-17/IL-23", narrativeType: "competitive_positioning", status: "active", lastUpdated: "Sep 10, 2026", riskLevel: "medium", topics: ["Competitive Positioning", "Clinical Data", "Safety", "Investor Sentiment"], linkedEntities: [{ type: "company", name: "Novartis", id: "novartis" }, { type: "company", name: "AbbVie", id: "abbvie" }, { type: "asset", name: "Cosentyx", id: "cosentyx" }, { type: "asset", name: "Skyrizi", id: "skyrizi" }], intelligenceItems: [{ id: "ni-3-1", sourceType: "Clinical / Regulatory", date: "Jul 29, 2026", rawContent: "Updated IL-17/IL-23 data for Cosentyx reinforced confidence in safety and efficacy, with limited immediate implications for competitive differentiation.", context: "External clinical coverage of IL-17/IL-23 data updates.", topics: ["Clinical Data", "Safety"], attribution: "Clinical News Outlet" }, { id: "ni-3-2", sourceType: "Analyst Commentary", date: "Jul 30, 2026", rawContent: "Competitive positioning within the IL-17/IL-23 class remains stable, with no material shifts in relative standing following recent data.", context: "Post-data sell-side analyst commentary.", topics: ["Competitive Positioning", "Pipeline"], attribution: "Sell-side Research" }, { id: "ni-3-3", sourceType: "Social Media", date: "Sep 13, 2026", rawContent: "Online discussions frequently compare Cosentyx and Skyrizi on durability, dosing convenience, and perceived long-term efficacy, reflecting cautious optimism alongside competitive debate.", context: "Public social media discussions among investors, clinicians, and patient communities.", topics: ["Competitive Positioning", "Investor Sentiment"], attribution: "X (formerly Twitter) and Reddit \u2014 Public Social Discourse" }], detailContent: { overview: "An ongoing narrative comparing Cosentyx's positioning against Skyrizi and other IL-17/IL-23 agents, with focus on clinical differentiation and commercial trajectory.", keyTopics: ["Competitive Positioning", "Clinical Data", "Pipeline", "Investor Sentiment"], externalQuestions: ["Can Cosentyx maintain share against Skyrizi?", "What clinical data would shift competitive dynamics?", "How are payers viewing IL-17/IL-23 differentiation?"], perceptionPatterns: ["Skyrizi frequently positioned as the class leader", "Cosentyx data updates viewed as incremental rather than transformative", "Competitive framing dominates analyst discussions"], crossEntityReferences: ["Cosentyx", "Skyrizi", "AbbVie", "Novartis"], narrativeEvolution: ["Established with initial IL-17/IL-23 competitive launches", "Intensified as both assets accumulated real-world data", "Current focus on label expansions and payer dynamics"], timeline: [{ date: "Jul 2026", label: "Cosentyx data update characterized as incremental" }, { date: "Sep 2026", label: "Conference discussions reaffirmed competitive positioning" }] } }, { id: "narrative-4", name: "Regulatory Oversight & Strategy", narrativeType: "leadership_messaging", status: "emerging", lastUpdated: "Aug 10, 2026", riskLevel: "low", topics: ["Regulatory", "Strategy", "Investor Sentiment"], linkedEntities: [{ type: "event", name: "FDA Decision \u2014 Immunology Label Update", id: "event-4" }], intelligenceItems: [{ id: "ni-4-1", sourceType: "Regulatory", date: "Aug 8, 2026", rawContent: "The FDA announced an updated label decision impacting select Immunology treatments, renewing discussion around long-term regulatory strategy.", context: "Regulatory announcement coverage.", topics: ["Regulatory", "Strategy"], attribution: "FDA / Regulatory News" }, { id: "ni-4-2", sourceType: "Media", date: "Aug 9, 2026", rawContent: "Industry observers characterized the label update as part of ongoing oversight rather than a material shift in competitive dynamics.", context: "Media interpretation of FDA announcement.", topics: ["Investor Sentiment", "Regulatory"], attribution: "Industry Media" }], detailContent: { overview: "An emerging narrative around how regulatory decisions and FDA oversight are being framed externally, with focus on long-term strategic implications.", keyTopics: ["Regulatory", "Strategy", "Messaging", "Investor Sentiment"], externalQuestions: ["What are the implications of recent regulatory decisions?", "How is management positioning around regulatory risk?", "Are there broader industry implications?"], perceptionPatterns: ["Regulatory events framed as 'oversight reminders' rather than crises", "Messaging characterized as measured and strategic", "Limited direct competitive read-through"], crossEntityReferences: ["FDA Decision \u2014 Immunology Label Update"], narrativeEvolution: ["Emerged following August 2026 regulatory announcement", "Currently in early observation phase", "May intensify depending on future regulatory catalysts"], timeline: [{ date: "Aug 2026", label: "FDA label decision prompted initial narrative emergence" }] } }, { id: "narrative-5", name: "Market Sentiment & Sector Read-Through", narrativeType: "market_sentiment", status: "fading", lastUpdated: "Aug 5, 2026", riskLevel: "low", topics: ["Market Activity", "Competitive Positioning", "Investor Sentiment"], linkedEntities: [{ type: "event", name: "Market Volatility Following Pharma Peer Earnings", id: "event-5" }], intelligenceItems: [{ id: "ni-5-1", sourceType: "Market Activity", date: "Aug 3, 2026", rawContent: "Pharma stocks experienced modest volatility following peer earnings releases, with investors citing sector-wide read-through effects.", context: "Market wrap commentary following peer earnings.", topics: ["Market Activity", "Competitive Positioning"], attribution: "Market Commentary" }, { id: "ni-5-2", sourceType: "Analyst Commentary", date: "Aug 4, 2026", rawContent: "Trading activity appeared driven more by sentiment and macro considerations than by incremental fundamental disclosures.", context: "Analyst interpretation of market movements.", topics: ["Investor Sentiment", "Market Activity"], attribution: "Sell-side Research" }], detailContent: { overview: "A transient narrative around sector-wide market sentiment following peer earnings, with limited company-specific implications.", keyTopics: ["Market Activity", "Investor Sentiment", "Competitive Positioning"], externalQuestions: ["What drove sector-wide volatility?", "Are there specific company implications?", "How long will sentiment effects persist?"], perceptionPatterns: ["Volatility attributed to macro and sector factors", "Limited company-specific read-through", "Narrative appears to be fading as focus shifts"], crossEntityReferences: ["Market Volatility Event", "Pharma Sector"], narrativeEvolution: ["Emerged following early December peer earnings", "Peaked during volatility period", "Now fading as market focus shifts"], timeline: [{ date: "Aug 2026", label: "Peer earnings triggered sector volatility" }] } }, { id: "narrative-6", name: "Leadership Messaging Consistency", narrativeType: "leadership_messaging", status: "active", lastUpdated: "Aug 22, 2026", riskLevel: "low", topics: ["Messaging", "Investor Sentiment"], linkedEntities: [{ type: "company", name: "Novartis", id: "novartis" }, { type: "event", name: "Media Coverage \u2014 Pharma Leadership & Messaging", id: "event-6" }], intelligenceItems: [{ id: "ni-6-1", sourceType: "Media", date: "Aug 22, 2026", rawContent: "Recent media coverage revisited leadership messaging across large-cap pharma, highlighting the importance of consistency amid competitive and regulatory scrutiny.", context: "National business media article on pharma leadership communication.", topics: ["Messaging", "Investor Sentiment"], attribution: "Business Media Outlet" }], detailContent: { overview: "A narrative focused on the consistency and effectiveness of leadership messaging in shaping investor perception, particularly during periods of competitive and regulatory scrutiny.", keyTopics: ["Messaging", "Investor Sentiment", "Strategy", "Competitive Positioning"], externalQuestions: ["Is leadership messaging consistent across channels?", "How do investors perceive management credibility?", "What messaging gaps exist?"], perceptionPatterns: ["Consistency valued highly by investors", "Messaging scrutinized during earnings and conferences", "Media coverage amplifies perception of consistency gaps"], crossEntityReferences: ["Novartis", "Media Coverage Event"], narrativeEvolution: ["Recurring theme across earnings cycles", "Intensified during December media coverage", "Remains active heading into 2026"], timeline: [{ date: "Aug 2026", label: "Media coverage highlighted messaging consistency" }] } }];

export const Bp = yo.map((e) => ({ id: e.id, title: e.name, narrativeType: e.narrativeType, status: e.status, lastUpdated: e.lastUpdated, riskLevel: e.riskLevel, topics: e.topics, linkedEntities: e.linkedEntities, intelligenceType: "external" }));

export function C5(e) {
  return yo.find((n) => n.id === e);
}

export const jo = [{ id: "1", name: "Novartis Q2 2026 Earnings Call", eventType: "earnings", eventDate: "Sep 14, 2026", activityLevel: "high", topics: ["Financials", "Guidance", "Competitive Positioning", "Pipeline", "Investor Sentiment", "Messaging"], focusAreas: ["Financials", "Guidance", "Competitive Positioning", "Pipeline", "Investor Sentiment"], primarySources: ["Earnings Calls", "Research Notes", "Media"], intelligenceType: "internal" }, { id: "2", name: "JPMorgan Healthcare Conference 2026 \u2014 Pharma Sessions", eventType: "investor_conference", eventDate: "Sep 9\u201311, 2026", activityLevel: "high", topics: ["Strategy", "Pipeline", "Execution Risk", "Investor Sentiment"], focusAreas: ["Strategy", "Pipeline", "Execution Risk", "Investor Sentiment"], primarySources: ["Investor Conference", "Research Notes"], intelligenceType: "external" }, { id: "3", name: "Cosentyx Clinical Data Update (IL-17/IL-23 Class)", eventType: "clinical_disclosure", eventDate: "Jul 29, 2026", activityLevel: "medium", topics: ["Clinical Data", "Safety", "Competitive Positioning", "Pipeline"], focusAreas: ["Clinical Data", "Safety", "Competitive Positioning", "Pipeline"], primarySources: ["Clinical / Regulatory", "Research Notes"], intelligenceType: "internal" }, { id: "4", name: "FDA Decision \u2014 Immunology Label Update", eventType: "regulatory_decision", eventDate: "Aug 8, 2026", activityLevel: "medium", topics: ["Regulatory", "Strategy", "Investor Sentiment"], focusAreas: ["Regulatory", "Strategy", "Investor Sentiment"], primarySources: ["Regulatory / Clinical", "Media"], intelligenceType: "external" }, { id: "5", name: "Market Volatility Following Pharma Peer Earnings", eventType: "market_volatility", eventDate: "Aug 3, 2026", activityLevel: "medium", topics: ["Market Activity", "Competitive Positioning", "Investor Sentiment"], focusAreas: ["Market Activity", "Competitive Positioning", "Investor Sentiment"], primarySources: ["Market Activity", "Research Notes"], intelligenceType: "external" }, { id: "6", name: "Media Coverage \u2014 Pharma Leadership & Messaging", eventType: "crisis", eventDate: "Aug 22, 2026", activityLevel: "low", topics: ["Messaging", "Investor Sentiment"], focusAreas: ["Messaging", "Investor Sentiment"], primarySources: ["Media"], intelligenceType: "external" }];

export const S5 = { 1: [{ id: "event1-1", source: "earnings_call", intelligenceType: "internal", date: "Sep 14, 2026", content: `"Management reiterated confidence in the durability of the Immunology portfolio, while acknowledging continued pricing pressure and competitive intensity across key therapeutic areas."

Prepared remarks during Novartis Q2 2026 earnings call.`, topics: ["Financials", "Guidance", "Competitive Positioning"], attribution: "Novartis Q2 2026 Earnings Call" }, { id: "event1-2", source: "research_note", intelligenceType: "external", date: "Sep 15, 2026", content: `"Investor questions continue to focus on pipeline cadence and the sustainability of core growth drivers, particularly within Immunology, following management's Q2 update."

Sell-side analyst note reacting to earnings call content.`, topics: ["Pipeline", "Investor Sentiment"], attribution: "Sell-side Research" }, { id: "event1-3", source: "media", intelligenceType: "external", date: "Sep 15, 2026", content: `"Novartis's earnings commentary was largely viewed as steady, though analysts highlighted a cautious tone around near-term growth visibility."

Financial media coverage summarizing external reaction to earnings.`, topics: ["Messaging", "Investor Sentiment"], attribution: "Financial Media" }], 2: [{ id: "event2-1", source: "investor_conference", intelligenceType: "external", date: "Sep 10, 2026", content: `"Company presentations emphasized long-term portfolio optionality and pipeline depth, with management teams addressing investor questions on competitive positioning and capital allocation."

Conference session commentary from JPMorgan Healthcare Conference.`, topics: ["Strategy", "Pipeline"], attribution: "JPMorgan Healthcare Conference" }, { id: "event2-2", source: "research_note", intelligenceType: "external", date: "Sep 11, 2026", content: `"Takeaways from the conference suggest investors remain focused on execution risk and clarity of long-term strategy rather than near-term financial inflection."

Analyst note summarizing conference discussions.`, topics: ["Execution Risk", "Investor Sentiment"], attribution: "Sell-side Research" }], 3: [{ id: "event3-1", source: "regulatory", intelligenceType: "external", date: "Jul 29, 2026", content: `"Updated data for Cosentyx were cited as reinforcing confidence in the asset's established safety and efficacy profile, with limited implications for immediate competitive dynamics."

External clinical coverage of IL-17/IL-23 data updates.`, topics: ["Clinical Data", "Safety"], attribution: "Clinical News Outlet" }, { id: "event3-2", source: "research_note", intelligenceType: "external", date: "Jul 30, 2026", content: `"Analysts characterized the data as incremental, noting that competitive positioning across the IL-17/IL-23 class remains largely unchanged."

Post-data sell-side commentary.`, topics: ["Competitive Positioning", "Pipeline"], attribution: "Sell-side Research" }], 4: [{ id: "event4-1", source: "regulatory", intelligenceType: "external", date: "Aug 8, 2026", content: `"The FDA announced an updated label decision impacting select Immunology treatments, prompting renewed discussion around long-term regulatory strategy."

Regulatory announcement coverage.`, topics: ["Regulatory", "Strategy"], attribution: "FDA / Regulatory News" }, { id: "event4-2", source: "media", intelligenceType: "external", date: "Aug 9, 2026", content: `"Industry observers framed the regulatory update as a reminder of ongoing oversight risk, rather than a material shift in competitive dynamics."

Media interpretation of regulatory announcement.`, topics: ["Investor Sentiment", "Regulatory"], attribution: "Industry Media" }], 5: [{ id: "event5-1", source: "market_activity", intelligenceType: "external", date: "Aug 3, 2026", content: `"Pharma stocks saw modest volatility following peer earnings releases, with investors citing sector-wide read-through rather than company-specific developments."

Market wrap commentary.`, topics: ["Market Activity", "Competitive Positioning"], attribution: "Market Commentary" }, { id: "event5-2", source: "research_note", intelligenceType: "external", date: "Aug 4, 2026", content: `"Market reaction appeared driven more by sentiment and macro considerations than by incremental fundamental disclosures."

Analyst assessment of trading patterns.`, topics: ["Investor Sentiment", "Market Activity"], attribution: "Sell-side Research" }], 6: [{ id: "event6-1", source: "media", intelligenceType: "external", date: "Aug 22, 2026", content: `"Recent media coverage revisited leadership messaging across large-cap pharma, highlighting the importance of consistency amid ongoing competitive and regulatory scrutiny."

National business media article.`, topics: ["Messaging", "Investor Sentiment"], attribution: "Business Media Outlet" }], "discovered-1": [{ id: "pfe-event-1", source: "earnings_call", intelligenceType: "external", date: "Sep 21, 2026", content: `"Pfizer management addressed post-peak revenue dynamics, emphasizing strategic realignment efforts and a renewed focus on pipeline productivity for long-term growth."

Pfizer Q2 2026 earnings call prepared remarks.`, topics: ["Financials", "Pipeline"], attribution: "Pfizer Q2 2026 Earnings Call" }, { id: "pfe-event-2", source: "research_note", intelligenceType: "external", date: "Sep 21, 2026", content: `"The earnings call generated renewed peer comparisons on pipeline cadence and margin outlook, with analysts drawing parallels to Novartis's own portfolio transition messaging."

Post-earnings sell-side research.`, topics: ["Pipeline", "Guidance"], attribution: "Sell-side Research" }, { id: "pfe-event-3", source: "media", intelligenceType: "external", date: "Sep 21, 2026", content: `"Pfizer's guidance commentary was closely watched for sector-wide read-through, with investor attention on execution discipline messaging."

Financial media coverage.`, topics: ["Guidance", "Investor Sentiment"], attribution: "Financial Media" }], "discovered-2": [{ id: "abbv-event-1", source: "investor_conference", intelligenceType: "external", date: "Oct 5, 2026", content: `"AbbVie leadership outlined long-term capital allocation strategy and pipeline sequencing priorities, with emphasis on Immunology franchise durability and next-generation asset positioning."

AbbVie Investor Day 2026 prepared remarks.`, topics: ["Strategy", "Pipeline"], attribution: "AbbVie Investor Day 2026" }, { id: "abbv-event-2", source: "research_note", intelligenceType: "external", date: "Oct 5, 2026", content: `"Investor Day messaging reinforced AbbVie's positioning as an execution benchmark, with competitive differentiation themes resonating across the analyst community."

Post-event sell-side research.`, topics: ["Investor Sentiment", "Competitive Positioning"], attribution: "Sell-side Research" }, { id: "abbv-event-3", source: "media", intelligenceType: "external", date: "Oct 5, 2026", content: `"AbbVie's strategic clarity and pipeline sequencing were highlighted as competitive benchmarks relevant to peer IR narratives."

Industry media coverage.`, topics: ["Strategy", "Competitive Positioning"], attribution: "Industry Media" }] };

export const d$ = { 1: { overview: "Novartis Q2 2026 Earnings Call marks the conclusion of fiscal 2026 with management reiterating confidence in Immunology portfolio durability while acknowledging continued pricing pressure and competitive intensity across key therapeutic areas", keyTopics: ["Financials", "Guidance", "Competitive Positioning", "Pipeline", "Investor Sentiment", "Messaging"], questionsCommentary: [{ theme: "Immunology durability", context: "Investor focus on sustainability of core growth drivers within Immunology" }, { theme: "Pipeline cadence", context: "Questions around development timeline and near-term catalysts" }, { theme: "Pricing pressure", context: "Attention to competitive intensity and margin dynamics" }, { theme: "Growth visibility", context: "Analyst discussion of cautious tone around near-term outlook" }], marketReactions: [{ pattern: "Steady interpretation", detail: "Commentary viewed as stable with cautious growth visibility framing" }, { pattern: "Sentiment assessment", detail: "Analysts highlighted measured tone in management remarks" }, { pattern: "Peer comparison", detail: "Performance contextualized relative to sector dynamics" }], crossEntityRefs: [{ type: "Companies", entities: ["Novartis"] }, { type: "Assets", entities: ["Cosentyx", "Immunology Portfolio"] }, { type: "Analysts", entities: ["Sell-side Coverage Universe"] }], narrativePatterns: ["Durability confidence emphasized amid competitive pressure", "Cautious tone around near-term growth visibility noted", "Pipeline cadence and catalyst timing under scrutiny", "Pricing and competitive intensity acknowledgment"], timeline: [{ date: "Sep 14, 2026", activity: "Earnings release and prepared remarks" }, { date: "Sep 14, 2026", activity: "Management Q&A session" }, { date: "Sep 15, 2026", activity: "Sell-side note publication cycle" }, { date: "Sep 15, 2026", activity: "Financial media coverage synthesis" }] }, 2: { overview: "JPMorgan Healthcare Conference 2026 served as the premier annual gathering for healthcare investor engagement, with company presentations emphasizing long-term portfolio optionality and pipeline depth", keyTopics: ["Strategy", "Pipeline", "Execution Risk", "Investor Sentiment"], questionsCommentary: [{ theme: "Portfolio optionality", context: "Management emphasis on long-term strategic flexibility" }, { theme: "Competitive positioning", context: "Investor questions on market share dynamics" }, { theme: "Capital allocation", context: "Discussion of investment priorities and M&A appetite" }, { theme: "Execution clarity", context: "Focus on strategy articulation rather than near-term financials" }], marketReactions: [{ pattern: "Long-term focus", detail: "Investors prioritizing execution risk over near-term inflection" }, { pattern: "Strategy clarity", detail: "Attention to consistency of long-term messaging" }, { pattern: "Cross-company assessment", detail: "Comparative evaluation across presentations" }], crossEntityRefs: [{ type: "Companies", entities: ["Multiple Large-Cap Pharma"] }, { type: "Analysts", entities: ["Conference Attendee Universe"] }], narrativePatterns: ["Long-term portfolio optionality emphasized", "Pipeline depth as key strategic asset", "Execution risk and clarity prioritized by investors", "Near-term financial inflection less emphasized"], timeline: [{ date: "Sep 9, 2026", activity: "Conference opens" }, { date: "Sep 10, 2026", activity: "Company presentation sessions" }, { date: "Sep 11, 2026", activity: "Analyst summary notes published" }, { date: "Sep 11, 2026", activity: "Conference concludes" }] }, 3: { overview: "Cosentyx clinical data update reinforced confidence in the asset's established safety and efficacy profile, with external commentary noting limited implications for immediate competitive dynamics within the IL-17/IL-23 class", keyTopics: ["Clinical Data", "Safety", "Competitive Positioning", "Pipeline"], questionsCommentary: [{ theme: "Efficacy confirmation", context: "Data cited as reinforcing established profile" }, { theme: "Safety profile", context: "Continued confidence in tolerability" }, { theme: "Competitive implications", context: "Analysts noting unchanged competitive positioning" }, { theme: "Incremental nature", context: "Data characterized as supportive rather than transformative" }], marketReactions: [{ pattern: "Incremental characterization", detail: "Data viewed as confirmatory rather than inflecting" }, { pattern: "Competitive stability", detail: "IL-17/IL-23 class positioning remains largely unchanged" }, { pattern: "Limited market movement", detail: "Modest reaction reflecting data interpretation" }], crossEntityRefs: [{ type: "Companies", entities: ["Novartis"] }, { type: "Assets", entities: ["Cosentyx", "Skyrizi", "IL-17/IL-23 Class"] }, { type: "Analysts", entities: ["Sell-side Coverage"] }], narrativePatterns: ["Established efficacy and safety profile reinforced", "Incremental data characterization prevalent", "Competitive dynamics within IL-17/IL-23 class stable", "Limited near-term positioning implications"], timeline: [{ date: "Jul 29, 2026", activity: "Clinical data disclosure" }, { date: "Jul 30, 2026", activity: "Sell-side commentary published" }, { date: "Jul 30, 2026", activity: "External clinical news coverage" }] }, 4: { overview: "FDA announced an updated label decision impacting select Immunology treatments, prompting renewed discussion around long-term regulatory strategy while observers framed the update as a reminder of ongoing oversight risk", keyTopics: ["Regulatory", "Strategy", "Investor Sentiment"], questionsCommentary: [{ theme: "Regulatory strategy", context: "Discussion of long-term implications for portfolio approach" }, { theme: "Oversight risk", context: "Industry framing as reminder of regulatory environment" }, { theme: "Competitive dynamics", context: "Assessment of material impact on positioning" }, { theme: "Label interpretation", context: "Analysis of specific language and scope" }], marketReactions: [{ pattern: "Risk reminder framing", detail: "Update viewed as ongoing oversight acknowledgment" }, { pattern: "Limited competitive shift", detail: "Not seen as materially altering dynamics" }, { pattern: "Strategic discussion", detail: "Prompted renewal of regulatory strategy dialogue" }], crossEntityRefs: [{ type: "Companies", entities: ["Immunology Treatment Manufacturers"] }, { type: "Regulatory", entities: ["FDA"] }], narrativePatterns: ["Regulatory oversight risk reminder emphasized", "Long-term strategy discussion renewed", "Limited material competitive impact noted", "Industry-wide implications considered"], timeline: [{ date: "Aug 8, 2026", activity: "FDA label decision announced" }, { date: "Aug 9, 2026", activity: "Industry media interpretation published" }, { date: "Aug 9, 2026", activity: "Regulatory news coverage" }] }, 5: { overview: "Pharma stocks experienced modest volatility following peer earnings releases, with investors citing sector-wide read-through rather than company-specific developments as the primary driver", keyTopics: ["Market Activity", "Competitive Positioning", "Investor Sentiment"], questionsCommentary: [{ theme: "Sector read-through", context: "Volatility attributed to peer dynamics rather than company-specific news" }, { theme: "Macro considerations", context: "Broader sentiment and market factors cited" }, { theme: "Fundamental assessment", context: "Incremental disclosures seen as secondary driver" }, { theme: "Trading patterns", context: "Analyst evaluation of market behavior" }], marketReactions: [{ pattern: "Sector-driven movement", detail: "Read-through from peer earnings primary factor" }, { pattern: "Sentiment influence", detail: "Macro and market considerations outweighing fundamentals" }, { pattern: "Modest volatility", detail: "Movement characterized as contained rather than significant" }], crossEntityRefs: [{ type: "Companies", entities: ["Large-Cap Pharma Sector"] }, { type: "Market", entities: ["Pharma Index", "Peer Group"] }], narrativePatterns: ["Sector-wide read-through emphasized over company-specific", "Sentiment and macro factors cited as primary drivers", "Fundamental disclosures secondary consideration", "Modest and contained volatility characterization"], timeline: [{ date: "Aug 3, 2026", activity: "Peer earnings released" }, { date: "Aug 3, 2026", activity: "Market volatility observed" }, { date: "Aug 4, 2026", activity: "Analyst trading pattern assessment" }] }, 6: { overview: "National business media coverage revisited leadership messaging across large-cap pharma, highlighting the importance of consistency amid ongoing competitive and regulatory scrutiny", keyTopics: ["Messaging", "Investor Sentiment"], questionsCommentary: [{ theme: "Messaging consistency", context: "Importance of coherent leadership communication emphasized" }, { theme: "Competitive scrutiny", context: "External attention to competitive positioning narratives" }, { theme: "Regulatory context", context: "Oversight environment shaping messaging considerations" }, { theme: "Industry framing", context: "Large-cap pharma leadership practices examined" }], marketReactions: [{ pattern: "Messaging importance", detail: "Consistency highlighted as key investor consideration" }, { pattern: "Scrutiny acknowledgment", detail: "Competitive and regulatory attention noted" }, { pattern: "Industry-level discussion", detail: "Coverage spanning sector rather than single company" }], crossEntityRefs: [{ type: "Companies", entities: ["Large-Cap Pharma Sector"] }, { type: "Media", entities: ["Business Media Outlets"] }], narrativePatterns: ["Leadership messaging consistency emphasized", "Competitive scrutiny as ongoing consideration", "Regulatory environment shaping communication approach", "Industry-wide practices under examination"], timeline: [{ date: "Aug 22, 2026", activity: "Business media article published" }, { date: "Aug 22, 2026", activity: "Industry messaging discussion renewed" }] }, "discovered-1": { overview: "Pfizer Q2 2026 Earnings Call generated renewed peer comparisons on pipeline cadence and margin outlook across large-cap pharma. The event was auto-detected based on IR activity and competitive read-through relevance", keyTopics: ["Financials", "Pipeline", "Guidance"], questionsCommentary: [{ theme: "Post-peak transition", context: "Management addressed revenue normalization dynamics" }, { theme: "Pipeline productivity", context: "Renewed focus on R&D efficiency and long-term growth" }, { theme: "Peer comparisons", context: "Margin outlook and guidance cadence compared to sector" }], marketReactions: [{ pattern: "Sector read-through", detail: "Investor attention on execution discipline messaging" }, { pattern: "Guidance focus", detail: "Near-term visibility and strategic realignment scrutinized" }], crossEntityRefs: [{ type: "Companies", entities: ["Pfizer", "Novartis"] }, { type: "Topics", entities: ["Pipeline cadence", "Margin outlook"] }], narrativePatterns: ["Post-peak revenue dynamics under scrutiny", "Peer comparisons on pipeline cadence", "Strategic realignment messaging", "Execution discipline as investor focus"], timeline: [{ date: "Sep 21, 2026", activity: "Earnings release and prepared remarks" }, { date: "Sep 21, 2026", activity: "Post-earnings analyst notes" }, { date: "Sep 21, 2026", activity: "Financial media coverage" }] }, "discovered-2": { overview: "AbbVie Investor Day 2026 highlighted long-term capital allocation strategy and pipeline sequencing, referenced in competitive positioning discussions. The event was auto-detected based on IR activity relevance", keyTopics: ["Strategy", "Pipeline", "Investor Sentiment"], questionsCommentary: [{ theme: "Capital allocation", context: "Long-term investment priorities outlined" }, { theme: "Pipeline sequencing", context: "Priority assets and development timeline discussed" }, { theme: "Franchise durability", context: "Immunology portfolio sustainability emphasized" }], marketReactions: [{ pattern: "Execution benchmark", detail: "Messaging reinforced competitive differentiation" }, { pattern: "Strategic clarity", detail: "Clear communication valued by investor community" }], crossEntityRefs: [{ type: "Companies", entities: ["AbbVie", "Novartis"] }, { type: "Assets", entities: ["Skyrizi", "Rinvoq"] }], narrativePatterns: ["Capital allocation strategy as differentiator", "Pipeline sequencing priorities", "Competitive benchmark for IR narratives", "Immunology franchise durability emphasis"], timeline: [{ date: "Oct 5, 2026", activity: "Investor Day presentations" }, { date: "Oct 5, 2026", activity: "Post-event analyst reactions" }, { date: "Oct 5, 2026", activity: "Industry media coverage" }] } };

export const u$ = (e) => jo.find((n) => n.id === e);

export const m$ = (e) => S5[e] || [];

export const p$ = (e) => d$[e];

export const bo = [{ id: "1", name: "Cosentyx", company: "Novartis", assetType: "marketed", therapeuticArea: "Immunology", activityLevel: "high", lastUpdated: "Updated Sep 15, 2026", activeTopics: ["Financials", "Guidance", "Competitive Positioning", "Investor Sentiment", "Clinical Data", "Messaging"], focusAreas: ["Financials", "Guidance", "Competitive Positioning", "Investor Sentiment", "Clinical Data", "Safety", "Messaging", "Execution Risk"], primarySources: ["Earnings Calls", "Research Notes", "Media", "Clinical / Regulatory"], intelligenceType: "internal" }, { id: "2", name: "Skyrizi", company: "AbbVie", assetType: "marketed", therapeuticArea: "Immunology", activityLevel: "high", lastUpdated: "Updated Sep 17, 2026", activeTopics: ["Financials", "Strategy", "Competitive Positioning", "Investor Sentiment"], focusAreas: ["Financials", "Strategy", "Competitive Positioning", "Investor Sentiment"], primarySources: ["Earnings Calls", "Research Notes"], intelligenceType: "external" }, { id: "3", name: "Enbrel", company: "Amgen", assetType: "marketed", therapeuticArea: "Immunology", activityLevel: "medium", lastUpdated: "Updated Aug 12, 2026", activeTopics: ["Strategy", "Competitive Positioning", "Investor Sentiment"], focusAreas: ["Strategy", "Competitive Positioning", "Investor Sentiment"], primarySources: ["Media", "Research Notes"], intelligenceType: "external" }, { id: "4", name: "Keytruda", company: "Merck", assetType: "marketed", therapeuticArea: "Oncology", activityLevel: "high", lastUpdated: "Updated Sep 11, 2026", activeTopics: ["Financials", "Strategy", "Competitive Positioning", "Investor Sentiment"], focusAreas: ["Financials", "Strategy", "Competitive Positioning", "Investor Sentiment"], primarySources: ["Earnings Calls", "Media"], intelligenceType: "external" }, { id: "5", name: "NVS-2113", company: "Novartis", assetType: "clinical", therapeuticArea: "Immunology", activityLevel: "medium", lastUpdated: "Updated Sep 6, 2026", activeTopics: ["Pipeline", "Clinical Data", "Regulatory"], focusAreas: ["Pipeline", "Clinical Data", "Regulatory"], primarySources: ["Research Notes", "Clinical / Regulatory"], intelligenceType: "internal" }, { id: "6", name: "BMS-986165", company: "Bristol Myers Squibb", assetType: "pipeline", therapeuticArea: "Immunology", activityLevel: "medium", lastUpdated: "Updated Sep 9, 2026", activeTopics: ["Pipeline", "Strategy", "Competitive Positioning"], focusAreas: ["Pipeline", "Strategy", "Competitive Positioning"], primarySources: ["Investor Conference", "Research Notes"], intelligenceType: "external" }];

export const k5 = { 1: [{ id: "cosentyx-1", source: "earnings_call", intelligenceType: "internal", date: "Sep 14, 2026", content: `"Management reiterated confidence in Cosentyx as a core Immunology growth driver, noting continued demand across key markets despite heightened competitive activity within the IL-17/IL-23 class."

Excerpt from Novartis Q2 2026 earnings call remarks on Immunology portfolio performance.`, topics: ["Financials", "Guidance", "Competitive Positioning"], attribution: "Novartis Q2 2026 Earnings Call" }, { id: "cosentyx-2", source: "research_note", intelligenceType: "external", date: "Sep 15, 2026", content: `"Investor focus around Cosentyx remains centered on durability and lifecycle execution, with analysts closely tracking competitive positioning relative to newer IL-17/IL-23 entrants."

Post-earnings sell-side research note.`, topics: ["Competitive Positioning", "Execution Risk"], attribution: "Sell-side Research" }, { id: "cosentyx-3", source: "media", intelligenceType: "external", date: "Aug 20, 2026", content: `"Cosentyx continues to feature prominently in external discussions of the IL-17/IL-23 landscape, often framed as a durability test amid evolving competitive benchmarks."

Industry media coverage on Immunology treatment dynamics.`, topics: ["Investor Sentiment", "Messaging"], attribution: "Industry Media" }, { id: "cosentyx-4", source: "regulatory", intelligenceType: "external", date: "Jul 29, 2026", content: `"Recent clinical updates for Cosentyx were cited as reinforcing confidence in its established efficacy and safety profile, without materially altering near-term competitive expectations."

External clinical news commentary.`, topics: ["Clinical Data", "Safety"], attribution: "Clinical News Outlet" }], 2: [{ id: "skyrizi-1", source: "earnings_call", intelligenceType: "external", date: "Sep 16, 2026", content: `"Leadership described Skyrizi as a cornerstone asset, emphasizing strong demand visibility and confidence in long-term growth across Immunology indications."

AbbVie Q2 2026 earnings call remarks.`, topics: ["Financials", "Strategy"], attribution: "AbbVie Q2 2026 Earnings Call" }, { id: "skyrizi-2", source: "research_note", intelligenceType: "external", date: "Sep 17, 2026", content: `"Skyrizi continues to be viewed as the benchmark IL-17/IL-23 asset, shaping investor expectations for competitive performance across the class."

Analyst research note comparing Immunology portfolios.`, topics: ["Competitive Positioning", "Investor Sentiment"], attribution: "Sell-side Research" }], 3: [{ id: "enbrel-1", source: "media", intelligenceType: "external", date: "Aug 12, 2026", content: `"Enbrel is increasingly referenced as a legacy Immunology asset, serving as a historical anchor point in discussions around portfolio transition strategies."

Industry media article on Immunology market evolution.`, topics: ["Strategy", "Competitive Positioning"], attribution: "Industry Media" }, { id: "enbrel-2", source: "research_note", intelligenceType: "external", date: "Jul 30, 2026", content: `"Investors now frame Enbrel primarily as a legacy reference when evaluating newer Immunology assets and long-term portfolio sustainability."

Sell-side research commentary.`, topics: ["Investor Sentiment", "Strategy"], attribution: "Sell-side Research" }], 4: [{ id: "keytruda-1", source: "earnings_call", intelligenceType: "external", date: "Sep 11, 2026", content: `"Management reaffirmed Keytruda's central role in the Oncology portfolio, while acknowledging increased investor focus on the asset's long-term trajectory amid competitive evolution."

Merck Q2 2026 earnings call remarks.`, topics: ["Financials", "Strategy"], attribution: "Merck Q2 2026 Earnings Call" }, { id: "keytruda-2", source: "media", intelligenceType: "external", date: "Aug 18, 2026", content: `"Keytruda remains the reference point in Oncology discussions, shaping how analysts and investors frame competitive comparisons across the sector."

Financial media coverage on Oncology leadership narratives.`, topics: ["Competitive Positioning", "Investor Sentiment"], attribution: "Financial Media" }], 5: [{ id: "novartis2113-1", source: "research_note", intelligenceType: "external", date: "Sep 6, 2026", content: `"NVS-2113 is increasingly cited as a key clinical-stage program underpinning longer-term Immunology optionality, with attention focused on upcoming trial milestones."

Analyst note discussing Novartis pipeline depth.`, topics: ["Pipeline", "Clinical Data"], attribution: "Sell-side Research" }, { id: "novartis2113-2", source: "regulatory", intelligenceType: "external", date: "Aug 8, 2026", content: `"External observers highlighted recent trial updates for NVS-2113 as supportive of continued development, without drawing conclusions on eventual commercial positioning."

Clinical news coverage of trial disclosures.`, topics: ["Clinical Data", "Regulatory"], attribution: "Clinical News Outlet" }], 6: [{ id: "bms986165-1", source: "investor_conference", intelligenceType: "external", date: "Sep 9, 2026", content: `"Management positioned BMS-986165 as a key pipeline opportunity, emphasizing its potential role in shaping the next phase of Immunology portfolio growth."

Investor conference presentation remarks.`, topics: ["Pipeline", "Strategy"], attribution: "BMS Investor Conference" }, { id: "bms986165-2", source: "research_note", intelligenceType: "external", date: "Aug 14, 2026", content: `"Analysts increasingly reference BMS-986165 when discussing future competitive dynamics in Immunology, particularly in pipeline-focused comparisons."

Sell-side research note.`, topics: ["Pipeline", "Competitive Positioning"], attribution: "Sell-side Research" }], "discovered-1": [{ id: "rinvoq-1", source: "earnings_call", intelligenceType: "external", date: "Sep 16, 2026", content: `"AbbVie management addressed ongoing attention around Rinvoq's safety profile, emphasizing confidence in the risk-benefit profile and continued focus on label expansion opportunities."

AbbVie Q2 2026 earnings call commentary on Rinvoq positioning.`, topics: ["Safety", "Regulatory"], attribution: "AbbVie Q2 2026 Earnings Call" }, { id: "rinvoq-2", source: "research_note", intelligenceType: "external", date: "Sep 15, 2026", content: `"Rinvoq's competitive positioning within Immunology remains a key focus for investors, particularly around safety labeling and differentiation relative to IL-17/IL-23 alternatives."

Analyst note on competitive dynamics.`, topics: ["Competitive Positioning", "Safety"], attribution: "Sell-side Research" }, { id: "rinvoq-3", source: "media", intelligenceType: "external", date: "Sep 14, 2026", content: `"Industry coverage continues to reference Rinvoq when discussing the evolving safety narrative within the JAK inhibitor class."

Industry media on safety profile comparisons.`, topics: ["Safety", "Regulatory"], attribution: "Industry Media" }], "discovered-2": [{ id: "dupixent-1", source: "earnings_call", intelligenceType: "external", date: "Sep 15, 2026", content: `"Dupixent continues to demonstrate strong demand across multiple indications, with management reiterating confidence in long-term franchise durability and ongoing label expansion."

Sanofi/Regeneron Q2 2026 earnings commentary.`, topics: ["Clinical Data", "Investor Sentiment"], attribution: "Sanofi Q2 2026 Earnings Call" }, { id: "dupixent-2", source: "research_note", intelligenceType: "external", date: "Sep 14, 2026", content: `"Analysts increasingly frame Dupixent as the durability benchmark in Immunology, drawing comparisons to Novartis's approach to lifecycle management and indication expansion."

Analyst note on franchise durability.`, topics: ["Competitive Positioning", "Pipeline"], attribution: "Sell-side Research" }, { id: "dupixent-3", source: "media", intelligenceType: "external", date: "Sep 13, 2026", content: `"Dupixent's multi-indication strategy continues to set expectations for franchise longevity within the Immunology landscape."

Industry media on franchise strategy.`, topics: ["Pipeline", "Investor Sentiment"], attribution: "Industry Media" }] };

export const h$ = { 1: { overview: `Cosentyx (secukinumab) is a marketed Immunology asset positioned in the IL-17A inhibitor class. Novartis positions Cosentyx as a core Immunology growth driver with continued demand across key markets.

External commentary focuses on durability and lifecycle execution, with analysts closely tracking competitive positioning relative to newer IL-17/IL-23 entrants.`, focusAreas: ["Financials", "Guidance", "Competitive Positioning", "Investor Sentiment", "Clinical Data", "Safety", "Messaging", "Execution Risk"], clinicalThemes: [{ theme: "Durable efficacy profile", context: "Continued demand despite heightened IL-17/IL-23 competitive activity" }, { theme: "Established safety profile", context: "Recent clinical updates reinforced confidence without altering expectations" }], regulatorySignals: [{ area: "Clinical data updates", detail: "Efficacy and safety profile reinforced in recent communications" }, { area: "Competitive landscape", detail: "Evolving benchmarks within the IL-17/IL-23 class" }], perceptionSignals: [{ source: "Sell-side research", signal: "Focus on durability and lifecycle execution relative to newer IL-17/IL-23 entrants" }, { source: "Industry media", signal: "Framed as a durability test amid evolving competitive benchmarks" }, { source: "Earnings commentary", signal: "Core Immunology growth driver positioning emphasized" }], narrativePatterns: ["Core Immunology growth driver positioning emphasized", "Competitive dynamics in IL-17/IL-23 class intensifying", "Lifecycle execution and durability under scrutiny", "Near-term competitive expectations stable despite newer entrants"], timeline: [{ date: "Sep 15, 2026", activity: "Analyst note on durability and lifecycle execution" }, { date: "Sep 14, 2026", activity: "Q2 2026 earnings call on Immunology portfolio" }, { date: "Aug 20, 2026", activity: "Industry media on competitive benchmarks" }, { date: "Jul 29, 2026", activity: "Clinical data update coverage" }] }, 2: { overview: `Skyrizi (risankizumab) is a marketed Immunology asset positioned as a cornerstone of AbbVie's Immunology strategy. Leadership emphasizes strong demand visibility and confidence in long-term growth across indications.

Skyrizi is widely viewed as the benchmark IL-17/IL-23 asset, shaping investor expectations for competitive performance across the class.`, focusAreas: ["Financials", "Strategy", "Competitive Positioning", "Investor Sentiment"], clinicalThemes: [{ theme: "Strong demand visibility", context: "Confidence in long-term growth trajectory" }, { theme: "Lifecycle planning", context: "Execution discipline reinforcing investor perception" }], regulatorySignals: [{ area: "Market positioning", detail: "Benchmark status within IL-17/IL-23 class" }, { area: "Competitive dynamics", detail: "Comparison point for peer assets" }], perceptionSignals: [{ source: "Sell-side research", signal: "Benchmark asset within IL-17/IL-23 class with strong sentiment" }, { source: "Investor sentiment", signal: "Confidence in AbbVie's execution and lifecycle planning" }], narrativePatterns: ["Cornerstone of AbbVie Immunology strategy", "Benchmark positioning in IL-17/IL-23 class", "Strong execution and lifecycle planning confidence", "Long-term growth trajectory visibility"], timeline: [{ date: "Sep 17, 2026", activity: "Analyst note on competitive positioning" }, { date: "Sep 16, 2026", activity: "Q2 2026 earnings call on Immunology strategy" }] }, 3: { overview: `Enbrel (etanercept) is a marketed Immunology asset referenced as a legacy portfolio component. While no longer a growth driver, Enbrel serves as a historical anchor point in discussions around portfolio transition strategies.

Investors now frame Enbrel primarily as a legacy reference when evaluating newer Immunology assets and long-term portfolio sustainability.`, focusAreas: ["Strategy", "Competitive Positioning", "Investor Sentiment"], clinicalThemes: [{ theme: "Legacy positioning", context: "Historical anchor point in Immunology discussions" }, { theme: "Portfolio transition", context: "Context for evaluating newer assets" }], regulatorySignals: [{ area: "Market evolution", detail: "Positioned as reference point for portfolio transitions" }, { area: "Competitive context", detail: "Framed alongside newer Immunology assets" }], perceptionSignals: [{ source: "Industry media", signal: "Referenced as legacy asset in market evolution discussions" }, { source: "Sell-side research", signal: "Used as reference point for evaluating portfolio sustainability" }], narrativePatterns: ["Legacy framing in portfolio discussions", "Reference point for newer asset assessments", "Immunology market evolution context", "Portfolio transition strategy benchmark"], timeline: [{ date: "Aug 12, 2026", activity: "Industry media on legacy asset positioning" }, { date: "Jul 30, 2026", activity: "Analyst commentary on portfolio sustainability" }] }, 4: { overview: `Keytruda (pembrolizumab) is a marketed Oncology asset centrally positioned within Merck's portfolio. Management reaffirms confidence in Keytruda's central role while acknowledging increased investor focus on the asset's long-term trajectory.

Keytruda remains the reference point in Oncology discussions, shaping how analysts and investors frame competitive comparisons across the sector.`, focusAreas: ["Financials", "Strategy", "Competitive Positioning", "Investor Sentiment"], clinicalThemes: [{ theme: "Central portfolio role", context: "Confidence in sustained positioning" }, { theme: "Long-term trajectory", context: "Attention on competitive evolution" }], regulatorySignals: [{ area: "Market leadership", detail: "Reference asset for Oncology competitive comparisons" }, { area: "Competitive dynamics", detail: "Evolving landscape under investor scrutiny" }], perceptionSignals: [{ source: "Sell-side research", signal: "Reference asset shaping Oncology competitive framing" }, { source: "Financial media", signal: "Market leadership narrative reinforced" }], narrativePatterns: ["Central role in Merck Oncology portfolio", "Reference asset for competitive comparisons", "Long-term trajectory attention increasing", "Market leadership narrative maintained"], timeline: [{ date: "Sep 11, 2026", activity: "Q2 2026 earnings commentary on Oncology portfolio" }, { date: "Aug 18, 2026", activity: "Financial media on Oncology market leadership" }] }, 5: { overview: `NVS-2113 is a clinical-stage Immunology program from Novartis. It is increasingly cited as a key program underpinning longer-term Immunology optionality.

External observers focus on upcoming trial milestones, with recent updates supportive of continued development without drawing conclusions on eventual commercial positioning.`, focusAreas: ["Pipeline", "Clinical Data", "Regulatory"], clinicalThemes: [{ theme: "Trial milestones", context: "Upcoming data readouts drawing attention" }, { theme: "Development trajectory", context: "Recent updates supportive of continued development" }], regulatorySignals: [{ area: "Clinical progress", detail: "Trial updates supportive of continued development" }, { area: "Regulatory pathway", detail: "No conclusions yet on commercial positioning" }], perceptionSignals: [{ source: "Sell-side research", signal: "Key clinical-stage program for longer-term Immunology optionality" }, { source: "Clinical news", signal: "Trial updates supportive without commercial conclusions" }], narrativePatterns: ["Longer-term Immunology optionality emphasis", "Trial milestones attracting attention", "Pipeline depth contribution to Novartis narrative", "Development trajectory on track"], timeline: [{ date: "Sep 6, 2026", activity: "Analyst note on pipeline depth and trial milestones" }, { date: "Aug 8, 2026", activity: "Clinical news on trial disclosures" }] }, 6: { overview: `BMS-986165 (Deucravacitinib) is a pipeline Immunology asset from Bristol Myers Squibb. Management positions it as a key pipeline opportunity for shaping the next phase of Immunology portfolio growth.

Analysts increasingly reference BMS-986165 when discussing future competitive dynamics in Immunology, particularly in pipeline-focused comparisons.`, focusAreas: ["Pipeline", "Strategy", "Competitive Positioning"], clinicalThemes: [{ theme: "Portfolio growth driver", context: "Key role in next phase of Immunology strategy" }, { theme: "Competitive positioning", context: "Referenced in pipeline-focused competitive discussions" }], regulatorySignals: [{ area: "Development progress", detail: "Positioned as key pipeline opportunity" }, { area: "Strategic priority", detail: "Emphasis on Immunology portfolio growth potential" }], perceptionSignals: [{ source: "Investor conference", signal: "Key pipeline opportunity for Immunology growth" }, { source: "Sell-side research", signal: "Referenced in future competitive dynamics discussions" }], narrativePatterns: ["Key pipeline opportunity positioning", "Next phase of Immunology portfolio growth", "Pipeline-focused competitive comparisons", "Strategic priority for BMS"], timeline: [{ date: "Sep 9, 2026", activity: "Investor conference on pipeline opportunity" }, { date: "Aug 14, 2026", activity: "Analyst note on competitive dynamics" }] }, "discovered-1": { overview: `Rinvoq (upadacitinib) is a marketed Immunology asset from AbbVie, increasingly cited as a competitive benchmark in discussions around safety profile and label expansion. It has been auto-detected based on IR activity related to competitive positioning.

External commentary centers on safety narrative comparisons, regulatory developments, and positioning relative to Novartis's Immunology portfolio.`, focusAreas: ["Competitive Positioning", "Safety", "Regulatory"], clinicalThemes: [{ theme: "Safety profile scrutiny", context: "Comparisons to JAK inhibitor class dynamics" }, { theme: "Label expansion", context: "Regulatory momentum driving competitive read-through" }], regulatorySignals: [{ area: "Safety labeling", detail: "Ongoing attention to class-wide safety profile" }, { area: "Label expansion", detail: "Strategic focus on indication breadth" }], perceptionSignals: [{ source: "Sell-side research", signal: "Competitive benchmark for Immunology safety narrative" }, { source: "Media coverage", signal: "Referenced in safety profile comparisons" }], narrativePatterns: ["Competitive benchmark for safety profile", "Label expansion as strategic differentiator", "JAK inhibitor class dynamics under scrutiny", "Positioning relative to Novartis Immunology assets"], timeline: [{ date: "Sep 18, 2026", activity: "Auto-detected in IR activity" }, { date: "Sep 16, 2026", activity: "Analyst note on safety positioning" }, { date: "Sep 14, 2026", activity: "Media coverage on label expansion" }] }, "discovered-2": { overview: `Dupixent (dupilumab) is a marketed Immunology asset from Sanofi/Regeneron, referenced in analyst commentary comparing long-term franchise durability and multi-indication expansion strategies. It was auto-detected based on IR activity.

Investor focus centers on clinical data, pipeline breadth, and the asset's positioning as a franchise durability benchmark.`, focusAreas: ["Clinical Data", "Pipeline", "Investor Sentiment"], clinicalThemes: [{ theme: "Multi-indication expansion", context: "Broad label driving franchise durability narrative" }, { theme: "Clinical data strength", context: "Ongoing evidence generation supporting sentiment" }], regulatorySignals: [{ area: "Indication breadth", detail: "Continued label expansion across therapeutic areas" }, { area: "Franchise durability", detail: "Long-term positioning as class benchmark" }], perceptionSignals: [{ source: "Sell-side research", signal: "Franchise durability benchmark for Immunology" }, { source: "Investor sentiment", signal: "Confidence in multi-indication expansion strategy" }], narrativePatterns: ["Franchise durability benchmark", "Multi-indication expansion strategy", "Clinical data supporting long-term confidence", "Competitive comparison point for Novartis assets"], timeline: [{ date: "Sep 17, 2026", activity: "Auto-detected in IR activity" }, { date: "Sep 15, 2026", activity: "Analyst note on franchise durability" }, { date: "Sep 13, 2026", activity: "Media on multi-indication strategy" }] } };

export const f$ = (e) => bo.find((n) => n.id === e);

export const x$ = (e) => k5[e] || [];

export const g$ = (e) => h$[e];

export const ic = { esg: { label: "ESG", className: "bg-blue-500/10 text-blue-600 dark:text-blue-400" }, sustainability: { label: "Sustainability", className: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400" }, governance: { label: "Governance", className: "bg-purple-500/10 text-purple-600 dark:text-purple-400" }, access: { label: "Access", className: "bg-amber-500/10 text-amber-600 dark:text-amber-400" }, environmental: { label: "Environmental", className: "bg-green-500/10 text-green-600 dark:text-green-400" } };

export const Sf = { high: { label: "High", className: "bg-red-500/10 text-red-600 dark:text-red-400" }, medium: { label: "Medium", className: "bg-amber-500/10 text-amber-600 dark:text-amber-400" }, low: { label: "Low", className: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400" } };

export const v$ = { questionnaire: "Questionnaire", disclosure_review: "Disclosure Review", data_integration: "Data Integration", assessment: "Assessment", hybrid: "Questionnaire + Disclosure Review" };

export const T5 = { annual: "Annual", biennial: "Biennial", ongoing: "Ongoing" };

export const Lc = [{ id: "atmi", name: "Access to Medicines Index (ATMI)", owner: "Access to Medicine Foundation", category: "access", description: "Biennial assessment evaluating pharmaceutical companies on R&D, pricing, and access strategies for underserved populations.", updateCadence: "biennial", submissionModel: "hybrid", focusAreas: ["Access", "R&D", "Pricing", "Global Health"], activityLevel: "high", lastUpdated: "Sep 15, 2025", score: { currentScore: "3.43", previousScore: "4.03", reportingCycle: "2025", trendLabel: "Declined", trendNote: "Lower score indicates weaker relative performance in ATMI methodology" }, pillars: [{ id: "rd_priority", name: "R&D for Priority Diseases", criteria: [{ id: "pipeline_alignment", name: "Pipeline alignment with unmet needs" }, { id: "rd_investment", name: "R&D investment transparency" }] }, { id: "pricing_access", name: "Pricing & Access Strategies", criteria: [{ id: "tiered_pricing", name: "Tiered pricing programs" }, { id: "patient_assistance", name: "Patient assistance availability" }] }], intelligenceByCriterion: { pipeline_alignment: { internal: [{ id: "atmi-int-1", type: "leadership_claim", source: "Investor Day 2025", speaker: "Vas Narasimhan", content: "Our pipeline strategy continues to focus on areas of significant unmet medical need, including conditions that disproportionately impact underserved and lower-income populations.", classification: "Leadership Claim", claimStrength: "Implied commitment", governanceStatus: "Approved", date: "Jul 12, 2025" }, { id: "atmi-int-2", type: "approved_disclosure", source: "Health for Humanity Report 2025", content: "Public disclosure outlining Novartis's R&D focus areas, including infectious diseases and conditions aligned with global health priorities, with references to ongoing and planned access initiatives.", classification: "Approved Disclosure", visibility: "Public", date: "Jun 8, 2025" }, { id: "atmi-int-3", type: "internal_context", source: "IR Internal Update", content: "Additional early-stage programs aligned to priority disease areas are under internal review and may be considered for inclusion in future public disclosures.", classification: "Internal Context", visibility: "Not public", date: "Aug 3, 2025" }], external: [{ id: "atmi-ext-1", type: "external_signal", source: "Access-focused NGO assessment", content: "Novartis continues to be recognized for its long-standing commitment to access initiatives, though greater quantitative disclosure on R&D prioritization would strengthen transparency.", classification: "NGO Commentary", tone: "Neutral / Constructive", date: "Sep 8, 2025" }, { id: "atmi-ext-2", type: "external_signal", source: "Sell-side healthcare ESG note", content: "Novartis's access narrative is well established, but disclosure depth on pipeline alignment varies relative to peers with more granular reporting.", classification: "Analyst Commentary", tone: "Neutral", date: "Aug 18, 2025" }] }, rd_investment: { internal: [{ id: "atmi-rd-int-1", type: "approved_disclosure", source: "ESG & Sustainability Report 2025", content: "Novartis invested $15.1 billion in R&D in 2025, with approximately 20% directed toward diseases with significant unmet need in low- and middle-income countries.", classification: "Approved Disclosure", visibility: "Public", date: "Nov 15, 2025" }, { id: "atmi-rd-int-2", type: "internal_context", source: "IR Strategy Briefing", content: "R&D investment breakdown by therapeutic area and geography is being prepared for enhanced disclosure in the 2026 reporting cycle.", classification: "Internal Context", visibility: "Not public", date: "Sep 20, 2025" }], external: [{ id: "atmi-rd-ext-1", type: "external_signal", source: "Access to Medicine Foundation review", content: "Novartis provides partial R&D investment transparency compared to leading peers who disclose granular breakdowns by disease area and development stage.", classification: "NGO Commentary", tone: "Constructive", date: "Oct 5, 2025" }] }, tiered_pricing: { internal: [{ id: "atmi-tp-int-1", type: "leadership_claim", source: "Earnings Call Q2 2026", speaker: "Mukul Mehta", content: "We remain committed to tiered pricing strategies that reflect local economic conditions and ensure our medicines reach patients who need them most.", classification: "Leadership Claim", claimStrength: "Explicit commitment", governanceStatus: "Approved", date: "Sep 22, 2025" }, { id: "atmi-tp-int-2", type: "approved_disclosure", source: "Global Access Report 2025", content: "Novartis operates tiered pricing programs in over 50 low- and middle-income countries, covering essential medicines and key therapeutic areas including infectious diseases and oncology.", classification: "Approved Disclosure", visibility: "Public", date: "Jul 10, 2025" }], external: [{ id: "atmi-tp-ext-1", type: "external_signal", source: "Access-focused advocacy assessment", content: "Novartis demonstrates consistent application of tiered pricing principles, though transparency on specific pricing differentials by market remains limited compared to some peers.", classification: "NGO Commentary", tone: "Neutral / Constructive", date: "Aug 12, 2025" }] }, patient_assistance: { internal: [{ id: "atmi-pa-int-1", type: "approved_disclosure", source: "Annual Report 2025", content: "Patient assistance programs provided over $1.2 billion in free medications to eligible patients in the United States during 2025, with additional programs supporting access in emerging markets.", classification: "Approved Disclosure", visibility: "Public", date: "Oct 28, 2025" }, { id: "atmi-pa-int-2", type: "internal_context", source: "Access Programs Review", content: "Expansion of patient assistance eligibility criteria is under evaluation for key therapeutic areas with high out-of-pocket burden.", classification: "Internal Context", visibility: "Not public", date: "Sep 15, 2025" }], external: [{ id: "atmi-pa-ext-1", type: "external_signal", source: "Healthcare policy commentary", content: "Novartis's patient assistance programs are among the most comprehensive in the industry, though advocacy groups continue to push for broader eligibility and international expansion.", classification: "Policy Commentary", tone: "Positive", date: "Sep 30, 2025" }] } }, readinessIndicators: { pipeline_alignment: "evidence", rd_investment: "partial", tiered_pricing: "evidence", patient_assistance: "evidence" } }, { id: "bloomberg-esg", name: "Bloomberg ESG Disclosure Score", owner: "Bloomberg", category: "esg", description: "Annual scoring of ESG disclosure quality and coverage across environmental, social, and governance dimensions.", updateCadence: "annual", submissionModel: "hybrid", focusAreas: ["ESG", "Disclosure", "Transparency"], activityLevel: "medium", lastUpdated: "Aug 20, 2025", score: { currentScore: "20.1", reportingCycle: "2025", trendLabel: "Not available", subScores: [{ label: "Environmental", value: 42 }, { label: "Social", value: 33 }, { label: "Governance", value: 5 }] }, pillars: [{ id: "social_disclosure", name: "Social Disclosure", criteria: [{ id: "health_equity", name: "Access and health equity transparency" }, { id: "workforce", name: "Workforce metrics disclosure" }] }, { id: "env_disclosure", name: "Environmental Disclosure", criteria: [{ id: "emissions", name: "Emissions reporting" }, { id: "climate_targets", name: "Climate targets transparency" }] }], intelligenceByCriterion: { health_equity: { internal: [{ id: "bloomberg-int-1", type: "approved_disclosure", source: "Health for Humanity ESG Summary 2025", content: "Disclosure describing Novartis's global health equity initiatives, philanthropic investments, and access programs, with qualitative discussion of outcomes and priorities.", classification: "Approved Disclosure", visibility: "Public", date: "Jun 15, 2025" }, { id: "bloomberg-int-2", type: "leadership_claim", source: "Earnings Call (FY 2026)", content: "Health equity and access remain core to how we think about long-term value creation and responsible growth.", classification: "Leadership Claim", claimStrength: "Strategic positioning", governanceStatus: "Approved", date: "Sep 22, 2025" }], external: [{ id: "bloomberg-ext-1", type: "external_signal", source: "Bloomberg ESG profile summary", content: "Novartis demonstrates broad ESG disclosure coverage, with stronger qualitative transparency than quantitative metric depth in select social categories.", classification: "Bloomberg Data Commentary", tone: "Neutral", date: "Aug 15, 2025" }, { id: "bloomberg-ext-2", type: "external_signal", source: "ESG-focused fund commentary", content: "Disclosure quality is consistent, though additional standardized metrics could improve comparability.", classification: "Investor Commentary", tone: "Neutral", date: "Jul 28, 2025" }] }, workforce: { internal: [{ id: "bloomberg-wf-int-1", type: "approved_disclosure", source: "DEI & Human Capital Report 2025", content: "Novartis employs approximately 132,000 people globally, with workforce diversity metrics showing 49% female representation overall and 37% in management positions.", classification: "Approved Disclosure", visibility: "Public", date: "Dec 10, 2025" }, { id: "bloomberg-wf-int-2", type: "internal_context", source: "HR Analytics Update", content: "Enhanced workforce metrics including turnover rates by region and employee engagement scores are being prepared for next reporting cycle.", classification: "Internal Context", visibility: "Not public", date: "Oct 1, 2025" }], external: [{ id: "bloomberg-wf-ext-1", type: "external_signal", source: "ESG data provider analysis", content: "Novartis's social disclosure depth on workforce metrics is improving but remains below top-quartile peers who provide more granular pay equity and turnover data.", classification: "ESG Data Commentary", tone: "Neutral / Constructive", date: "Sep 18, 2025" }] }, emissions: { internal: [{ id: "bloomberg-em-int-1", type: "approved_disclosure", source: "Sustainability Report 2025", content: "Novartis reported Scope 1 emissions of 412,000 metric tons CO2e, Scope 2 emissions of 285,000 metric tons, and Scope 3 emissions of 8.2 million metric tons across the value chain.", classification: "Approved Disclosure", visibility: "Public", date: "January 15, 2026" }], external: [{ id: "bloomberg-em-ext-1", type: "external_signal", source: "Environmental analyst commentary", content: "Novartis provides comprehensive emissions reporting across all three scopes, with methodology aligned to GHG Protocol standards. Scope 3 coverage continues to expand.", classification: "Environmental Commentary", tone: "Positive", date: "Feb 5, 2026" }] }, climate_targets: { internal: [{ id: "bloomberg-ct-int-1", type: "leadership_claim", source: "Investor Day 2025", speaker: "Vas Narasimhan", content: "Our commitment to net-zero emissions by 2045 is backed by validated science-based targets and significant capital investment in renewable energy and sustainable operations.", classification: "Leadership Claim", claimStrength: "Explicit commitment", governanceStatus: "Approved", date: "Jul 12, 2025" }, { id: "bloomberg-ct-int-2", type: "approved_disclosure", source: "Climate Action Report 2025", content: "Novartis's near-term targets validated by SBTi include 60% reduction in Scope 1 and 2 emissions by 2030 from a 2019 baseline, and 25% reduction in Scope 3 emissions.", classification: "Approved Disclosure", visibility: "Public", date: "May 20, 2025" }], external: [{ id: "bloomberg-ct-ext-1", type: "external_signal", source: "Climate advocacy assessment", content: "Novartis's climate targets are among the most ambitious in the pharmaceutical sector, with SBTi validation providing credibility. Execution progress will be closely monitored.", classification: "Climate Commentary", tone: "Positive", date: "Jun 15, 2025" }] } }, readinessIndicators: { health_equity: "evidence", workforce: "partial", emissions: "evidence", climate_targets: "evidence" } }, { id: "djsi", name: "Dow Jones Sustainability Index (DJSI)", owner: "S&P Global / RobecoSAM", category: "sustainability", description: "Annual sustainability assessment based on the Corporate Sustainability Assessment (CSA) questionnaire.", updateCadence: "annual", submissionModel: "assessment", focusAreas: ["Sustainability", "Governance", "Social"], activityLevel: "medium", lastUpdated: "Aug 10, 2025", score: { currentScore: "Included", previousScore: "Included", status: "Included", reportingCycle: "2025", indexName: "DJSI World", performanceBand: "Top Quartile (Pharmaceuticals)", trendLabel: "Stable (Maintained Inclusion)" }, pillars: [{ id: "social_stakeholder", name: "Social & Stakeholder Engagement", criteria: [{ id: "healthcare_access", name: "Access to healthcare and community impact" }, { id: "stakeholder_engagement", name: "Stakeholder engagement practices" }] }, { id: "governance_ethics", name: "Governance & Ethics", criteria: [{ id: "board_oversight", name: "Board oversight of sustainability" }, { id: "ethics_compliance", name: "Ethics and compliance programs" }] }], intelligenceByCriterion: { healthcare_access: { internal: [{ id: "djsi-int-1", type: "approved_disclosure", source: "Corporate Sustainability Assessment submission", content: "Disclosure outlining Novartis's access, community engagement, and global health programs, aligned to long-term sustainability objectives.", classification: "Approved Disclosure", visibility: "Public", date: "May 30, 2025" }], external: [{ id: "djsi-ext-1", type: "external_signal", source: "Industry sustainability review", content: "Continued inclusion in DJSI reflects consistent sustainability practices and mature governance structures.", classification: "Sustainability Commentary", tone: "Positive", date: "Aug 8, 2025" }] }, stakeholder_engagement: { internal: [{ id: "djsi-se-int-1", type: "approved_disclosure", source: "Stakeholder Engagement Report 2025", content: "Novartis maintains formal stakeholder engagement frameworks covering investors, patients, healthcare providers, employees, and community organizations, with annual materiality assessments informing sustainability priorities.", classification: "Approved Disclosure", visibility: "Public", date: "Apr 15, 2025" }, { id: "djsi-se-int-2", type: "internal_context", source: "IR Stakeholder Mapping", content: "Enhanced stakeholder feedback mechanisms are being implemented to capture real-time input on ESG priorities from key investor and patient advocacy groups.", classification: "Internal Context", visibility: "Not public", date: "Sep 10, 2025" }], external: [{ id: "djsi-se-ext-1", type: "external_signal", source: "Sustainability analyst commentary", content: "Novartis's stakeholder engagement practices are well-documented and systematic, contributing to strong performance in the DJSI social dimension.", classification: "Sustainability Commentary", tone: "Positive", date: "Jul 20, 2025" }] }, board_oversight: { internal: [{ id: "djsi-bo-int-1", type: "approved_disclosure", source: "Proxy Statement 2025", content: "The Board's Regulatory Compliance & Sustainability Committee provides oversight of environmental, social, and governance matters, meeting quarterly to review ESG strategy, metrics, and emerging risks.", classification: "Approved Disclosure", visibility: "Public", date: "Nov 20, 2024" }], external: [{ id: "djsi-bo-ext-1", type: "external_signal", source: "Governance commentary", content: "Board-level ESG oversight at Novartis is formalized through a dedicated committee structure, reflecting mature governance practices expected of DJSI constituents.", classification: "Governance Commentary", tone: "Positive", date: "Aug 15, 2025" }] }, ethics_compliance: { internal: [{ id: "djsi-ec-int-1", type: "approved_disclosure", source: "Code of Conduct and Ethics Report 2025", content: "Novartis's ethics and compliance program includes mandatory annual training for all employees, a confidential reporting hotline, and regular audits across global operations.", classification: "Approved Disclosure", visibility: "Public", date: "Mar 1, 2025" }, { id: "djsi-ec-int-2", type: "internal_context", source: "Compliance Program Review", content: "Enhanced third-party due diligence protocols are being rolled out across high-risk markets as part of the 2026 compliance program enhancement.", classification: "Internal Context", visibility: "Not public", date: "Oct 5, 2025" }], external: [{ id: "djsi-ec-ext-1", type: "external_signal", source: "Compliance industry assessment", content: "Novartis's ethics program is recognized as industry-leading, with robust training, monitoring, and remediation processes that exceed typical pharmaceutical sector standards.", classification: "Compliance Commentary", tone: "Positive", date: "Sep 22, 2025" }] } }, readinessIndicators: { healthcare_access: "evidence", stakeholder_engagement: "evidence", board_oversight: "evidence", ethics_compliance: "evidence" } }, { id: "msci-esg", name: "MSCI ESG Ratings", owner: "MSCI", category: "esg", description: "Ongoing ESG risk assessment covering industry-specific key issues and management practices.", updateCadence: "ongoing", submissionModel: "disclosure_review", focusAreas: ["ESG", "Risk", "Access"], activityLevel: "medium", lastUpdated: "Sep 5, 2025", score: { currentScore: "A", previousScore: "A", reportingCycle: "2025", trendLabel: "Stable" }, pillars: [{ id: "social_risk", name: "Social Risk", criteria: [{ id: "product_access", name: "Product access and affordability" }, { id: "product_safety", name: "Product safety and quality" }] }, { id: "governance_risk", name: "Governance Risk", criteria: [{ id: "corporate_governance", name: "Corporate governance practices" }, { id: "business_ethics", name: "Business ethics" }] }], intelligenceByCriterion: { product_access: { internal: [{ id: "msci-int-1", type: "approved_disclosure", source: "ESG Risk Disclosure", content: "Public reporting describing affordability strategies, patient assistance programs, and access partnerships in key markets.", classification: "Approved Disclosure", visibility: "Public", date: "Jul 20, 2025" }], external: [{ id: "msci-ext-1", type: "external_signal", source: "MSCI Commentary (Public Summary)", content: "Novartis's exposure to access-related social risk is mitigated by established programs and governance practices.", classification: "MSCI Commentary", tone: "Neutral / Positive", date: "Sep 3, 2025" }] }, product_safety: { internal: [{ id: "msci-ps-int-1", type: "approved_disclosure", source: "Quality Management System Report 2025", content: "Novartis maintains ISO-certified quality management systems across all manufacturing facilities, with robust pharmacovigilance programs monitoring product safety across the product lifecycle.", classification: "Approved Disclosure", visibility: "Public", date: "Feb 30, 2025" }, { id: "msci-ps-int-2", type: "internal_context", source: "Quality Assurance Update", content: "Enhanced real-time adverse event monitoring systems are being deployed across key therapeutic areas to strengthen post-market surveillance.", classification: "Internal Context", visibility: "Not public", date: "Aug 10, 2025" }], external: [{ id: "msci-ps-ext-1", type: "external_signal", source: "MSCI ESG Research", content: "Novartis maintains strong product safety management practices, with comprehensive quality systems and pharmacovigilance programs that effectively manage key social risks.", classification: "MSCI Commentary", tone: "Positive", date: "Sep 15, 2025" }] }, corporate_governance: { internal: [{ id: "msci-cg-int-1", type: "approved_disclosure", source: "Proxy Statement 2025", content: "The Board comprises 12 directors, 11 of whom are independent. Board composition reflects diversity in skills, experience, gender, and ethnicity, with robust succession planning processes in place.", classification: "Approved Disclosure", visibility: "Public", date: "Nov 20, 2024" }], external: [{ id: "msci-cg-ext-1", type: "external_signal", source: "Governance analyst commentary", content: "Novartis's board independence and diversity metrics are strong relative to sector peers, contributing to favorable governance risk assessments.", classification: "Governance Commentary", tone: "Positive", date: "Oct 10, 2025" }] }, business_ethics: { internal: [{ id: "msci-be-int-1", type: "approved_disclosure", source: "Anti-Corruption and Ethics Program Report 2025", content: "Novartis maintains a comprehensive anti-corruption program including global policies, risk-based due diligence, mandatory training, and third-party monitoring across all markets.", classification: "Approved Disclosure", visibility: "Public", date: "Apr 15, 2025" }], external: [{ id: "msci-be-ext-1", type: "external_signal", source: "Regulatory compliance commentary", content: "Novartis's ethics track record reflects mature compliance infrastructure, though pricing and access scrutiny remains a consideration in overall risk assessment.", classification: "Compliance Commentary", tone: "Neutral", date: "Sep 28, 2025" }] } }, readinessIndicators: { product_access: "evidence", product_safety: "evidence", corporate_governance: "evidence", business_ethics: "partial" } }, { id: "sustainalytics", name: "Sustainalytics ESG Risk Rating", owner: "Sustainalytics (Morningstar)", category: "esg", description: "Annual ESG risk assessment measuring unmanaged ESG risk exposure.", updateCadence: "annual", submissionModel: "disclosure_review", focusAreas: ["ESG", "Risk Management", "Access"], activityLevel: "low", lastUpdated: "Jul 30, 2025", score: { currentScore: "20.1", previousScore: "22.1", reportingCycle: "2025", riskCategory: "Low Risk", trendLabel: "Improved", trendNote: "Lower score indicates lower unmanaged ESG risk" }, pillars: [{ id: "social_risk_mgmt", name: "Social Risk Management", criteria: [{ id: "access_affordability", name: "Access and affordability risk mitigation" }, { id: "human_capital", name: "Human capital management" }] }, { id: "governance_oversight", name: "Governance Oversight", criteria: [{ id: "esg_governance", name: "ESG governance framework" }, { id: "risk_controls", name: "Internal risk controls" }] }], intelligenceByCriterion: { access_affordability: { internal: [{ id: "sust-int-1", type: "approved_disclosure", source: "Risk Management & ESG Governance Section", content: "Disclosure describing governance oversight of access and affordability risks, including policies and internal controls.", classification: "Approved Disclosure", visibility: "Public", date: "Jun 25, 2025" }], external: [{ id: "sust-ext-1", type: "external_signal", source: "Sustainalytics Public Summary", content: "Novartis demonstrates effective management of material ESG risks, resulting in a low overall risk profile.", classification: "Sustainalytics Summary", tone: "Positive", date: "Jul 28, 2025" }] }, human_capital: { internal: [{ id: "sust-hc-int-1", type: "approved_disclosure", source: "Human Capital Report 2025", content: "Novartis invests over $1 billion annually in employee development programs, with comprehensive talent management frameworks supporting career progression and skill development across all levels.", classification: "Approved Disclosure", visibility: "Public", date: "January 20, 2025" }, { id: "sust-hc-int-2", type: "internal_context", source: "HR Strategy Briefing", content: "Enhanced retention initiatives targeting critical talent segments are being implemented following competitive talent market analysis.", classification: "Internal Context", visibility: "Not public", date: "Sep 5, 2025" }], external: [{ id: "sust-hc-ext-1", type: "external_signal", source: "ESG risk commentary", content: "Novartis's human capital management practices are well-developed, with strong employee development programs that effectively manage social risk exposure.", classification: "ESG Risk Commentary", tone: "Positive", date: "Aug 20, 2025" }] }, esg_governance: { internal: [{ id: "sust-eg-int-1", type: "approved_disclosure", source: "ESG Governance Framework 2025", content: "Novartis's ESG governance structure includes board-level oversight through the Regulatory Compliance & Sustainability Committee, executive accountability through ESG-linked compensation, and operational integration through cross-functional ESG councils.", classification: "Approved Disclosure", visibility: "Public", date: "Dec 10, 2024" }, { id: "sust-eg-int-2", type: "leadership_claim", source: "Annual Shareholder Letter 2025", speaker: "Vas Narasimhan", content: "Our governance framework ensures that ESG considerations are embedded in strategic decision-making at every level of the organization.", classification: "Leadership Claim", claimStrength: "Strategic positioning", governanceStatus: "Approved", date: "Nov 1, 2025" }], external: [{ id: "sust-eg-ext-1", type: "external_signal", source: "Governance analyst commentary", content: "Novartis's ESG governance framework is comprehensive, with clear accountability mechanisms and integration into executive compensation that strengthen oversight effectiveness.", classification: "Governance Commentary", tone: "Positive", date: "Oct 15, 2025" }] }, risk_controls: { internal: [{ id: "sust-rc-int-1", type: "approved_disclosure", source: "Enterprise Risk Management Report 2025", content: "Novartis's enterprise risk management framework integrates ESG risks into the overall risk assessment process, with quarterly reviews by the Audit Committee and annual board-level strategic risk discussions.", classification: "Approved Disclosure", visibility: "Public", date: "May 15, 2025" }], external: [{ id: "sust-rc-ext-1", type: "external_signal", source: "Risk management commentary", content: "Novartis demonstrates mature internal risk controls with comprehensive ERM integration, contributing to effective management of unmanaged ESG risk exposure.", classification: "Risk Management Commentary", tone: "Positive", date: "Jul 10, 2025" }] } }, readinessIndicators: { access_affordability: "evidence", human_capital: "evidence", esg_governance: "evidence", risk_controls: "evidence" } }, { id: "cdp-climate", name: "CDP Climate Disclosure Score", owner: "CDP", category: "environmental", description: "Annual climate disclosure assessment evaluating governance, strategy, and emissions reporting.", updateCadence: "annual", submissionModel: "questionnaire", focusAreas: ["Climate", "Emissions", "Environmental"], activityLevel: "medium", lastUpdated: "Aug 5, 2025", score: { currentScore: "A-", previousScore: "A-", reportingCycle: "2025", trendLabel: "Stable" }, pillars: [{ id: "climate_governance", name: "Climate Governance", criteria: [{ id: "oversight_emissions", name: "Oversight and emissions disclosure" }, { id: "climate_strategy", name: "Climate strategy integration" }] }, { id: "targets_performance", name: "Targets & Performance", criteria: [{ id: "reduction_targets", name: "Emissions reduction targets" }, { id: "performance_tracking", name: "Performance tracking and reporting" }] }], intelligenceByCriterion: { oversight_emissions: { internal: [{ id: "cdp-int-1", type: "approved_disclosure", source: "CDP Climate Response", content: "Disclosure outlining board-level oversight of climate risks, emissions reporting, and climate strategy integration.", classification: "Approved Disclosure", visibility: "Public", date: "Mar 31, 2025" }], external: [{ id: "cdp-ext-1", type: "external_signal", source: "Environmental reporting summary", content: "Novartis maintains strong climate disclosure practices aligned with CDP expectations.", classification: "Climate Transparency Commentary", tone: "Positive", date: "Aug 3, 2025" }] }, climate_strategy: { internal: [{ id: "cdp-cs-int-1", type: "leadership_claim", source: "Sustainability Leadership Summit 2025", speaker: "Vas Narasimhan", content: "Climate action is not separate from our business strategy\u2014it is integral to how we think about long-term value creation and operational resilience.", classification: "Leadership Claim", claimStrength: "Strategic positioning", governanceStatus: "Approved", date: "Jun 5, 2025" }, { id: "cdp-cs-int-2", type: "approved_disclosure", source: "TCFD Report 2025", content: "Novartis integrates climate risk assessment into strategic planning processes, with scenario analysis informing capital allocation and R&D prioritization decisions.", classification: "Approved Disclosure", visibility: "Public", date: "Feb 30, 2025" }], external: [{ id: "cdp-cs-ext-1", type: "external_signal", source: "Climate strategy commentary", content: "Novartis demonstrates meaningful integration of climate considerations into business strategy, with TCFD-aligned disclosures providing transparency on risk assessment and strategic response.", classification: "Climate Strategy Commentary", tone: "Positive", date: "Sep 20, 2025" }] }, reduction_targets: { internal: [{ id: "cdp-rt-int-1", type: "approved_disclosure", source: "Science Based Targets Commitment 2025", content: "Novartis's SBTi-validated targets include 60% absolute reduction in Scope 1 and 2 GHG emissions by 2030 from a 2019 base year, and 25% reduction in Scope 3 emissions across the value chain.", classification: "Approved Disclosure", visibility: "Public", date: "January 15, 2025" }], external: [{ id: "cdp-rt-ext-1", type: "external_signal", source: "Climate advocacy commentary", content: "Novartis's science-based targets are among the most ambitious in the healthcare sector, with SBTi validation providing credibility and accountability for emissions reduction commitments.", classification: "Climate Advocacy Commentary", tone: "Positive", date: "Aug 10, 2025" }] }, performance_tracking: { internal: [{ id: "cdp-pt-int-1", type: "approved_disclosure", source: "Emissions Performance Report 2025", content: "Novartis tracks emissions performance against targets using GHG Protocol-aligned methodology, with third-party verification of Scope 1, 2, and material Scope 3 categories. Annual progress is disclosed in the sustainability report.", classification: "Approved Disclosure", visibility: "Public", date: "Apr 20, 2025" }, { id: "cdp-pt-int-2", type: "internal_context", source: "Environmental Data Quality Review", content: "Enhanced data collection systems are being deployed to improve granularity and timeliness of emissions tracking across Scope 3 categories.", classification: "Internal Context", visibility: "Not public", date: "Oct 1, 2025" }], external: [{ id: "cdp-pt-ext-1", type: "external_signal", source: "Environmental reporting commentary", content: "Novartis's emissions performance tracking is rigorous, with third-party verification and transparent methodology disclosure that meets CDP expectations for leadership-level reporting.", classification: "Environmental Commentary", tone: "Positive", date: "Sep 15, 2025" }] } }, readinessIndicators: { oversight_emissions: "evidence", climate_strategy: "evidence", reduction_targets: "evidence", performance_tracking: "partial" } }];

export function y$(e) {
  return Lc.find((n) => n.id === e);
}

export function j$(e) {
  const n = [];
  return Object.values(e.intelligenceByCriterion).forEach((s) => {
    n.push(...s.internal, ...s.external);
  }), n;
}

export const hn = { analysts: 4, companies: 5, assets: bo.length, events: jo.length, narratives: yo.length, market: rc.length, indices: Lc.length };

export const b$ = [{ title: "Active Entities", value: String(hn.analysts + hn.companies + hn.assets + hn.events + hn.narratives + hn.market + hn.indices), description: "Entities with ongoing external intelligence coverage", icon: Building2Icon }, { title: "Signals Ingested (7 days)", value: "2,184", description: "New external signals captured", icon: RadioIcon }, { title: "Signals Reviewed", value: "412", description: "Signals assessed and governed by IR", icon: CircleCheckIcon }, { title: "Approved Data Sources", value: "18", description: "Reusable intelligence sources available across workflows", icon: DatabaseIcon }];

export const w$ = [{ title: "Analysts", description: "Coverage across questions, commentary, and public stance", stat: `${hn.analysts} analysts tracked`, href: "/gei/entities?type=analysts", icon: UsersIcon }, { title: "Companies & Competitors", description: "Competitive moves and perception signals", stat: `${hn.companies} companies tracked`, href: "/gei/entities?type=companies", icon: BriefcaseIcon }, { title: "Assets & Drugs", description: "Clinical, pipeline, and safety intelligence", stat: `${hn.assets} assets tracked`, href: "/gei/entities?type=assets", icon: PillIcon }, { title: "Events", description: "Earnings, conferences, and disclosures", stat: `${hn.events} active events`, href: "/gei/entities?type=events", icon: CalendarIcon }, { title: "Narratives", description: "Themes shaping investor perception", stat: `${hn.narratives} active narratives`, href: "/gei/entities?type=narratives", icon: MessageSquareIcon }, { title: "Market Signals", description: "Sector, policy, and macro context", stat: `${hn.market} signal categories`, href: "/gei/entities?type=market", icon: TrendingUpIcon }, { title: "Indices & Scores", description: "External benchmarks and ESG evaluations", stat: `${hn.indices} indices tracked`, href: "/gei/entities?type=indices", icon: ChartColumnIcon }];

export const N$ = [{ status: "approved", title: "Approved", description: "Signals cleared for reuse", stat: "18 data sources" }, { status: "in-review", title: "In Review", description: "Signals awaiting IR review", stat: "27 signals" }, { status: "reference", title: "Reference Only", description: "Archived or informational intelligence", stat: "94 signals" }];

export function GeiHome() {
  return (<div className="min-h-screen bg-background">
<C_zn />
<main className="container mx-auto px-6 py-8">
<div className="mb-8">
<h1 className="text-2xl font-bold text-foreground mb-1">
Welcome back!
</h1>
<p className="text-muted-foreground">
Here's a high-level view of the current external intelligence powering IR workflows
</p>
</div>
<section className="mb-10">
<div className="flex items-center gap-2 mb-4">
<ActivityIcon className="h-4 w-4 text-muted-foreground" />
<h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
Intelligence health
</h2>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
{b$.map((e) => (<C_n$ title={e.title} value={e.value} description={e.description} icon={e.icon} key={e.title} />))}
</div>
</section>
<section className="mb-10">
<div className="flex items-center gap-2 mb-4">
<RadioIcon className="h-4 w-4 text-muted-foreground" />
<h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
Intelligence coverage
</h2>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
{w$.map((e) => (<C_s$ title={e.title} description={e.description} stat={e.stat} href={e.href} icon={e.icon} key={e.title} />))}
</div>
</section>
<section className="mb-10">
<div className="flex items-center gap-2 mb-4">
<ShieldIcon className="h-4 w-4 text-muted-foreground" />
<h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
Governance posture
</h2>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
{N$.map((e) => (<C_r$ status={e.status} title={e.title} description={e.description} stat={e.stat} key={e.status} />))}
</div>
</section>
</main>
</div>);
}

export const Vp = [{ value: "analyst", label: "Analyst", icon: UsersIcon, group: "primary" }, { value: "company", label: "Company / Competitor", icon: Building2Icon, group: "primary" }, { value: "asset", label: "Asset / Drug", icon: PillIcon, group: "primary" }, { value: "event", label: "Event", icon: CalendarIcon, group: "primary" }, { value: "narrative", label: "Narrative (Tracking)", icon: MessageSquareIcon, group: "tracking" }, { value: "market_signal", label: "Market Signal (Tracking)", icon: TrendingUpIcon, group: "tracking" }];

export const S$ = ["Large Cap Pharma", "Biotech", "Medical Devices", "Healthcare Services", "Specialty Pharma"];

export const k$ = [{ value: "peer", label: "Peer" }, { value: "adjacent", label: "Adjacent" }, { value: "emerging", label: "Emerging" }];

export const T$ = ["Immunology", "Oncology", "Cardiovascular", "Neurology", "Rare Disease", "Infectious Disease"];

export const P$ = [{ value: "earnings", label: "Earnings" }, { value: "investor_conference", label: "Investor Conference" }, { value: "regulatory", label: "Regulatory" }, { value: "clinical", label: "Clinical" }, { value: "market", label: "Market" }];

export const E$ = [{ value: "perception_theme", label: "Perception Theme" }, { value: "risk_narrative", label: "Risk Narrative" }, { value: "competitive_narrative", label: "Competitive Narrative" }, { value: "sentiment_narrative", label: "Sentiment Narrative" }];

export const M$ = [{ value: "macro", label: "Macro" }, { value: "sector", label: "Sector" }, { value: "policy_regulatory", label: "Policy / Regulatory" }, { value: "market_activity", label: "Market Activity" }, { value: "sentiment", label: "Sentiment" }];

export const R$ = [{ value: "global", label: "Global" }, { value: "us", label: "US" }, { value: "therapeutic_area", label: "Therapeutic Area\u2013specific" }];

export function I$({ open: e, onClose: n }) {
  const { toast: s } = useToast(), [a, r] = React.useState(""), [i, o] = React.useState(""), [l, c] = React.useState(""), [u, m] = React.useState(""), [p, h] = React.useState(""), [f, v] = React.useState(""), [x, y] = React.useState(""), [b, g] = React.useState(""), [j, w] = React.useState(""), [C, P] = React.useState(""), [I, L] = React.useState(""), [z, R] = React.useState(""), [B, J] = React.useState(""), [X, k] = React.useState(""), [V, F] = React.useState(""), [S, E] = React.useState(""), [N, T] = React.useState(""), [_, q] = React.useState(""), [A, $] = React.useState(""), [W, ee] = React.useState(""), [Q, pe] = React.useState(""), [Te, Ce] = React.useState(""), [Pe, Ee] = React.useState(""), vt = () => {
    r(""), o(""), c(""), m(""), h(""), v(""), y(""), g(""), w(""), P(""), L(""), R(""), J(""), k(""), F(""), E(""), T(""), q(""), $(""), ee(""), pe(""), Ce(""), Ee("");
  }, Rt = () => {
    vt(), n();
  }, Hn = () => {
    if (!a) return false;
    switch (a) {
      case "analyst":
        return i.trim() !== "" && l.trim() !== "";
      case "company":
        return f.trim() !== "" && x !== "";
      case "asset":
        return j.trim() !== "";
      case "event":
        return z.trim() !== "" && B !== "" && X !== "";
      case "narrative":
        return V.trim() !== "" && S !== "";
      case "market_signal":
        return A.trim() !== "" && W !== "";
      default:
        return false;
    }
  }, Wn = () => {
    Hn() && (s({ title: "Entity submitted for tracking", description: "This entity will begin collecting intelligence once approved." }), Rt());
  }, ls = () => {
    switch (a) {
      case "analyst":
        return (<div className="space-y-4">
<div className="space-y-2">
<Label htmlFor="analyst-name">
{"Analyst Name "}
<span className="text-destructive">
*
</span>
</Label>
<Input id="analyst-name" placeholder="e.g., Richard Vosser" value={i} onChange={(U) => o(U.target.value)} />
</div>
<div className="space-y-2">
<Label htmlFor="analyst-firm">
{"Firm "}
<span className="text-destructive">
*
</span>
</Label>
<Input id="analyst-firm" placeholder="e.g., JPMorgan" value={l} onChange={(U) => c(U.target.value)} />
</div>
<div className="space-y-2">
<Label htmlFor="analyst-coverage">
Coverage Area
</Label>
<C_le value={u} onValueChange={m}>
<SelectTrigger id="analyst-coverage">
<C_ce placeholder="Select coverage area" />
</SelectTrigger>
<SelectContent>
{S$.map((U) => (<SelectItem value={U} key={U}>
{U}
</SelectItem>))}
</SelectContent>
</C_le>
</div>
<div className="space-y-2">
<Label htmlFor="analyst-notes">
Notes
</Label>
<Textarea id="analyst-notes" placeholder="Optional notes about this analyst" value={p} onChange={(U) => h(U.target.value)} rows={2} />
</div>
</div>);
      case "company":
        return (<div className="space-y-4">
<div className="space-y-2">
<Label htmlFor="company-name">
{"Company Name "}
<span className="text-destructive">
*
</span>
</Label>
<Input id="company-name" placeholder="e.g., AbbVie" value={f} onChange={(U) => v(U.target.value)} />
</div>
<div className="space-y-2">
<Label htmlFor="company-category">
{"Category "}
<span className="text-destructive">
*
</span>
</Label>
<C_le value={x} onValueChange={y}>
<SelectTrigger id="company-category">
<C_ce placeholder="Select category" />
</SelectTrigger>
<SelectContent>
{k$.map((U) => (<SelectItem value={U.value} key={U.value}>
{U.label}
</SelectItem>))}
</SelectContent>
</C_le>
</div>
<div className="space-y-2">
<Label htmlFor="company-therapeutic">
Primary Therapeutic Area
</Label>
<C_le value={b} onValueChange={g}>
<SelectTrigger id="company-therapeutic">
<C_ce placeholder="Select therapeutic area" />
</SelectTrigger>
<SelectContent>
{T$.map((U) => (<SelectItem value={U} key={U}>
{U}
</SelectItem>))}
</SelectContent>
</C_le>
</div>
</div>);
      case "asset":
        return (<div className="space-y-4">
<div className="space-y-2">
<Label htmlFor="asset-name">
{"Asset / Drug Name "}
<span className="text-destructive">
*
</span>
</Label>
<Input id="asset-name" placeholder="e.g., Cosentyx" value={j} onChange={(U) => w(U.target.value)} />
</div>
<div className="space-y-2">
<Label htmlFor="asset-modality">
Modality / Therapy Area
</Label>
<Input id="asset-modality" placeholder="e.g., IL-17/IL-23 Inhibitor" value={C} onChange={(U) => P(U.target.value)} />
</div>
<div className="space-y-2">
<Label htmlFor="asset-company">
Associated Company
</Label>
<Input id="asset-company" placeholder="e.g., Novartis" value={I} onChange={(U) => L(U.target.value)} />
</div>
</div>);
      case "event":
        return (<div className="space-y-4">
<div className="space-y-2">
<Label htmlFor="event-name">
{"Event Name "}
<span className="text-destructive">
*
</span>
</Label>
<Input id="event-name" placeholder="e.g., Q2 2026 Earnings Call" value={z} onChange={(U) => R(U.target.value)} />
</div>
<div className="space-y-2">
<Label htmlFor="event-type">
{"Event Type "}
<span className="text-destructive">
*
</span>
</Label>
<C_le value={B} onValueChange={J}>
<SelectTrigger id="event-type">
<C_ce placeholder="Select event type" />
</SelectTrigger>
<SelectContent>
{P$.map((U) => (<SelectItem value={U.value} key={U.value}>
{U.label}
</SelectItem>))}
</SelectContent>
</C_le>
</div>
<div className="space-y-2">
<Label htmlFor="event-date">
{"Event Date "}
<span className="text-destructive">
*
</span>
</Label>
<Input id="event-date" type="date" value={X} onChange={(U) => k(U.target.value)} />
</div>
</div>);
      case "narrative":
        return (<div className="space-y-4">
<div className="space-y-2">
<Label htmlFor="narrative-title">
{"Narrative Title "}
<span className="text-destructive">
*
</span>
</Label>
<Input id="narrative-title" placeholder="e.g., Immunology Portfolio Durability" value={V} onChange={(U) => F(U.target.value)} />
</div>
<div className="space-y-2">
<Label htmlFor="narrative-category">
{"Narrative Category "}
<span className="text-destructive">
*
</span>
</Label>
<C_le value={S} onValueChange={E}>
<SelectTrigger id="narrative-category">
<C_ce placeholder="Select category" />
</SelectTrigger>
<SelectContent>
{E$.map((U) => (<SelectItem value={U.value} key={U.value}>
{U.label}
</SelectItem>))}
</SelectContent>
</C_le>
</div>
<div className="space-y-2">
<Label htmlFor="narrative-keywords">
Initial Keywords / Phrases
</Label>
<Input id="narrative-keywords" placeholder="e.g., generic pressure, IL-17/IL-23 competition" value={N} onChange={(U) => T(U.target.value)} />
</div>
<div className="space-y-2">
<Label htmlFor="narrative-notes">
Notes
</Label>
<Textarea id="narrative-notes" placeholder="Optional notes about this narrative" value={_} onChange={(U) => q(U.target.value)} rows={2} />
</div>
<p className="text-xs text-muted-foreground bg-muted/50 p-3 rounded-md">
This narrative will be used to collect and organize raw external intelligence from web, media, and social sources.
</p>
</div>);
      case "market_signal":
        return (<div className="space-y-4">
<div className="space-y-2">
<Label htmlFor="signal-name">
{"Signal Name "}
<span className="text-destructive">
*
</span>
</Label>
<Input id="signal-name" placeholder="e.g., IL-17/IL-23 Class Competitive Momentum" value={A} onChange={(U) => $(U.target.value)} />
</div>
<div className="space-y-2">
<Label htmlFor="signal-category">
{"Signal Category "}
<span className="text-destructive">
*
</span>
</Label>
<C_le value={W} onValueChange={ee}>
<SelectTrigger id="signal-category">
<C_ce placeholder="Select category" />
</SelectTrigger>
<SelectContent>
{M$.map((U) => (<SelectItem value={U.value} key={U.value}>
{U.label}
</SelectItem>))}
</SelectContent>
</C_le>
</div>
<div className="space-y-2">
<Label htmlFor="signal-scope">
Scope
</Label>
<C_le value={Q} onValueChange={pe}>
<SelectTrigger id="signal-scope">
<C_ce placeholder="Select scope" />
</SelectTrigger>
<SelectContent>
{R$.map((U) => (<SelectItem value={U.value} key={U.value}>
{U.label}
</SelectItem>))}
</SelectContent>
</C_le>
</div>
<div className="space-y-2">
<Label htmlFor="signal-keywords">
Keywords / Triggers
</Label>
<Input id="signal-keywords" placeholder="e.g., generic launch, market share shift" value={Te} onChange={(U) => Ce(U.target.value)} />
</div>
<div className="space-y-2">
<Label htmlFor="signal-notes">
Notes
</Label>
<Textarea id="signal-notes" placeholder="Optional notes about this signal" value={Pe} onChange={(U) => Ee(U.target.value)} rows={2} />
</div>
<p className="text-xs text-muted-foreground bg-muted/50 p-3 rounded-md">
This signal will surface raw market and external intelligence as it evolves.
</p>
</div>);
      default:
        return null;
    }
  }, ae = a ? Vp.find((U) => U.value === a) : null;
  return (<C_ot open={e} onOpenChange={Rt}>
<DialogContent className="sm:max-w-lg max-h-[85vh] overflow-y-auto">
<DialogHeader>
<DialogTitle className="flex items-center gap-2">
<PlusIcon className="h-5 w-5 text-primary" />
Add Entity
</DialogTitle>
<DialogDescription>
Add a new entity or tracking construct to Governed External Intelligence
</DialogDescription>
</DialogHeader>
<div className="space-y-5 py-2">
<div className="space-y-2">
<Label htmlFor="entity-type">
{"Entity Type "}
<span className="text-destructive">
*
</span>
</Label>
<C_le value={a} onValueChange={(U) => r(U)}>
<SelectTrigger id="entity-type">
<C_ce placeholder="Select entity type" />
</SelectTrigger>
<SelectContent>
<C_a0>
<SelectLabel className="text-xs text-muted-foreground font-medium">
Primary Entities
</SelectLabel>
{Vp.filter((U) => U.group === "primary").map((U) => {
    const C_be = U.icon;
    return (<SelectItem value={U.value} key={U.value}>
<div className="flex items-center gap-2">
<C_be className="h-4 w-4" />
{U.label}
</div>
</SelectItem>);
  })}
</C_a0>
<C_a0>
<SelectLabel className="text-xs text-muted-foreground font-medium">
Tracking Entities
</SelectLabel>
{Vp.filter((U) => U.group === "tracking").map((U) => {
    const C_be = U.icon;
    return (<SelectItem value={U.value} key={U.value}>
<div className="flex items-center gap-2">
<C_be className="h-4 w-4" />
{U.label}
</div>
</SelectItem>);
  })}
</C_a0>
</SelectContent>
</C_le>
</div>
{a && (<div className="border-t pt-4">
<div className="flex items-center gap-2 mb-4">
{ae && (<>
<ae.icon className="h-4 w-4 text-primary" />
<span className="text-sm font-medium">
{ae.label}
{" Details"}
</span>
</>)}
</div>
{ls()}
</div>)}
</div>
<div className="flex justify-end gap-2 pt-2 border-t">
<Button variant="outline" onClick={Rt}>
Cancel
</Button>
<Button onClick={Wn} disabled={!Hn()}>
Submit for Review
</Button>
</div>
</DialogContent>
</C_ot>);
}

export const A$ = { earnings_transcript: "Earnings Call Transcript", investor_day_transcript: "Investor Day Transcript", prepared_remarks: "Prepared Remarks" };

export const D$ = { ceo: "CEO", cfo: "CFO", cso: "Chief Scientific Officer", other: "Other" };

export const _$ = ["Q1", "Q2", "Q3", "Q4"];

export const O$ = [2025, 2026, 2026];

export const P5 = [{ id: "1", name: "Novartis", type: "company" }, { id: "2", name: "AbbVie", type: "company" }, { id: "3", name: "Amgen", type: "company" }, { id: "4", name: "Eli Lilly", type: "company" }, { id: "5", name: "Pfizer", type: "company" }, { id: "1", name: "Cosentyx", type: "asset" }, { id: "5", name: "NVS-2113", type: "asset" }, { id: "2", name: "Skyrizi", type: "asset" }, { id: "1", name: "Novartis Q2 2026 Earnings Call", type: "event" }, { id: "2", name: "JPMorgan Healthcare Conference 2026", type: "event" }, { id: "narrative-1", name: "Immunology Portfolio Durability", type: "narrative" }, { id: "narrative-2", name: "Pipeline Execution Risk", type: "narrative" }, { id: "narrative-3", name: "Competitive Dynamics in IL-17/IL-23", type: "narrative" }];

export const Xo = [".pdf", ".docx", ".txt"];

export const Zo = 10;

export function L$({ open: e, onClose: n, onComplete: s }) {
  const [a, r] = React.useState(1), i = React.useRef(null), [o, l] = React.useState(""), [c, u] = React.useState(""), [m, p] = React.useState(""), [h, f] = React.useState([]), [v, x] = React.useState([]), [y, b] = React.useState(null), [g, j] = React.useState(""), [w, C] = React.useState(false), [P, I] = React.useState(""), L = ["ceo", "cfo", "cso", "other"], z = (T) => {
    f((_) => _.includes(T) ? _.filter((q) => q !== T) : [..._, T]);
  }, R = (T) => {
    v.find((_) => _.id === T.id && _.type === T.type) || x([...v, T]), j(""), C(false);
  }, B = (T) => {
    x(v.filter((_) => !(_.id === T.id && _.type === T.type)));
  }, J = P5.filter((T) => T.name.toLowerCase().includes(g.toLowerCase()) && !v.find((_) => _.id === T.id && _.type === T.type)), X = (T) => {
    var q;
    const _ = (q = T.target.files) == null ? void 0 : q[0];
    if (_) {
      const A = _.name.substring(_.name.lastIndexOf(".")).toLowerCase();
      if (!Xo.includes(A)) {
        toast({ title: "Invalid file type", description: `Please upload a ${Xo.join(", ")} file.`, variant: "destructive" });
        return;
      }
      if (_.size > Zo * 1024 * 1024) {
        toast({ title: "File too large", description: `Maximum file size is ${Zo}MB.`, variant: "destructive" });
        return;
      }
      b(_);
    }
  }, k = (T) => {
    var q;
    T.preventDefault();
    const _ = (q = T.dataTransfer.files) == null ? void 0 : q[0];
    if (_) {
      const A = _.name.substring(_.name.lastIndexOf(".")).toLowerCase();
      if (!Xo.includes(A)) {
        toast({ title: "Invalid file type", description: `Please upload a ${Xo.join(", ")} file.`, variant: "destructive" });
        return;
      }
      if (_.size > Zo * 1024 * 1024) {
        toast({ title: "File too large", description: `Maximum file size is ${Zo}MB.`, variant: "destructive" });
        return;
      }
      b(_);
    }
  }, V = o !== "" && c !== "" && m !== "" && y !== null, F = () => {
    V && r(2);
  }, S = () => {
    r(1);
  }, E = () => {
    toast({ title: "Source submitted for review", description: "Your upload will be reviewed before claim extraction begins." }), s();
  }, N = () => {
    r(1), l(""), u(""), p(""), f([]), x([]), b(null), I(""), n();
  };
  return (<C_ot open={e} onOpenChange={(T) => !T && N()}>
<DialogContent className="sm:max-w-[560px] max-h-[90vh] overflow-y-auto">
<DialogHeader>
<div className="flex items-center justify-between">
<DialogTitle>
{a === 1 ? "Upload Internal Source Material" : "Governance Review"}
</DialogTitle>
<span className="text-xs text-muted-foreground">
{"Step "}
{a}
/2
</span>
</div>
</DialogHeader>
{a === 1 ? (<div className="space-y-5 mt-2">
<div className="space-y-2">
<Label className="text-sm font-medium">
{"Source Type "}
<span className="text-destructive">
*
</span>
</Label>
<C_le value={o} onValueChange={(T) => l(T)}>
<SelectTrigger>
<C_ce placeholder="Select source type" />
</SelectTrigger>
<SelectContent>
{Object.entries(A$).map(([T, _]) => (<SelectItem value={T} key={T}>
{_}
</SelectItem>))}
</SelectContent>
</C_le>
</div>
<div className="space-y-2">
<Label className="text-sm font-medium">
{"Quarter & Year "}
<span className="text-destructive">
*
</span>
</Label>
<div className="flex gap-3">
<C_le value={c} onValueChange={u}>
<SelectTrigger className="w-[100px]">
<C_ce placeholder="Quarter" />
</SelectTrigger>
<SelectContent>
{_$.map((T) => (<SelectItem value={T} key={T}>
{T}
</SelectItem>))}
</SelectContent>
</C_le>
<C_le value={m} onValueChange={p}>
<SelectTrigger className="w-[100px]">
<C_ce placeholder="Year" />
</SelectTrigger>
<SelectContent>
{O$.map((T) => (<SelectItem value={T.toString()} key={T}>
{T}
</SelectItem>))}
</SelectContent>
</C_le>
</div>
</div>
<div className="space-y-2">
<Label className="text-sm font-medium">
Primary Speaker(s)
</Label>
<div className="flex flex-wrap gap-2">
{L.map((T) => (<button type="button" onClick={() => z(T)} className={cn("px-3 py-1.5 text-sm rounded-md border transition-colors", h.includes(T) ? "bg-primary text-primary-foreground border-primary" : "bg-background text-foreground border-input hover:bg-muted")} key={T}>
{D$[T]}
</button>))}
</div>
</div>
<div className="space-y-2">
<Label className="text-sm font-medium">
Related Entities (optional)
</Label>
<div className="flex flex-wrap gap-2 items-center">
{v.map((T) => (<span className="inline-flex items-center gap-1 px-2.5 py-1 text-sm bg-muted rounded-md" key={`${T.type}-${T.id}`}>
{T.name}
<button type="button" onClick={() => B(T)} className="ml-1 hover:text-destructive">
<XIcon className="h-3 w-3" />
</button>
</span>))}
<C_ql open={w} onOpenChange={C}>
<Ql asChild>
<Button variant="outline" size="sm" className="gap-1">
<PlusIcon className="h-3.5 w-3.5" />
Add Entity
</Button>
</Ql>
<PopoverContent className="w-64 p-2" align="start">
<div className="relative mb-2">
<SearchIcon className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
<Input placeholder="Search entities..." value={g} onChange={(T) => j(T.target.value)} className="pl-8 h-8 text-sm" />
</div>
<div className="max-h-48 overflow-y-auto space-y-0.5">
{J.length === 0 ? (<p className="text-sm text-muted-foreground text-center py-2">
No entities found
</p>) : J.map((T) => (<button type="button" onClick={() => R(T)} className="w-full text-left px-2 py-1.5 text-sm rounded hover:bg-muted transition-colors" key={`${T.type}-${T.id}`}>
<span className="font-medium">
{T.name}
</span>
<span className="text-xs text-muted-foreground ml-2 capitalize">
(
{T.type}
)
</span>
</button>))}
</div>
</PopoverContent>
</C_ql>
</div>
</div>
<div className="space-y-2">
<Label className="text-sm font-medium">
{"Upload File "}
<span className="text-destructive">
*
</span>
</Label>
<div onClick={() => {
    var T;
    return (T = i.current) == null ? void 0 : T.click();
  }} onDragOver={(T) => T.preventDefault()} onDrop={k} className={cn("border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors", y ? "border-primary/50 bg-primary/5" : "border-muted-foreground/25 hover:border-primary/50 hover:bg-muted/50")}>
<input ref={i} type="file" accept={Xo.join(",")} onChange={X} className="hidden" />
{y ? (<div className="flex items-center justify-center gap-2">
<UploadIcon className="h-5 w-5 text-primary" />
<span className="text-sm font-medium text-foreground">
{y.name}
</span>
<button type="button" onClick={(T) => {
    T.stopPropagation(), b(null);
  }} className="ml-2 text-muted-foreground hover:text-destructive">
<XIcon className="h-4 w-4" />
</button>
</div>) : (<>
<UploadIcon className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
<p className="text-sm text-muted-foreground">
{"Drag & drop or click to upload"}
</p>
<p className="text-xs text-muted-foreground/70 mt-1">
{"PDF, DOCX, TXT (max "}
{Zo}
MB)
</p>
</>)}
</div>
</div>
<div className="flex justify-end gap-3 pt-2">
<Button variant="outline" onClick={N}>
Cancel
</Button>
<Button onClick={F} disabled={!V}>
Continue →
</Button>
</div>
</div>) : (<div className="space-y-5 mt-2">
<div className="flex gap-3 p-4 rounded-lg bg-amber-500/10 border border-amber-500/20">
<TriangleAlertIcon className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
<div className="space-y-2">
<p className="text-sm font-medium text-foreground">
This source will be submitted for governance review before intelligence extraction begins.
</p>
<div className="text-sm text-muted-foreground space-y-1">
<p>
Once approved:
</p>
<ul className="list-disc list-inside space-y-0.5 pl-1">
<li>
AI-assisted extraction will surface quote candidates
</li>
<li>
You will review and approve each extracted item
</li>
<li>
{"Approved items will populate Claims & Internal Intel"}
</li>
</ul>
</div>
</div>
</div>
<div className="space-y-2">
<Label className="text-sm font-medium">
Notes for reviewer (optional)
</Label>
<Textarea value={P} onChange={(T) => I(T.target.value.slice(0, 500))} placeholder="Add any context or notes for the reviewer..." className="min-h-[100px] resize-none" />
<p className="text-xs text-muted-foreground text-right">
{P.length}
/500
</p>
</div>
<div className="flex justify-end gap-3 pt-2">
<Button variant="outline" onClick={S}>
← Back
</Button>
<Button onClick={E}>
Submit for Review →
</Button>
</div>
</div>)}
</DialogContent>
</C_ot>);
}

export const F$ = { post_call_debrief: "Post-Call Debrief", disclosure_context: "Upcoming Disclosure Context", alignment_note: "Alignment Note", narrative_framing: "Narrative Framing" };

export const z$ = { near_term: "Near-term (0-6 mo)", mid_term: "Mid-term (6-18 mo)", long_term: "Long-term (18+ mo)" };

export const $$ = { high: "High", medium: "Medium", low: "Low" };

export const J$ = ["Guidance", "Immunology", "Pipeline", "Competitive", "Clinical Data", "Regulatory", "Commercial", "Capital Allocation", "M&A", "Leadership", "Messaging", "Perception"];

export const D0 = 2e3;

export const B$ = 10;

export function V$({ open: e, onClose: n, onComplete: s }) {
  const [a, r] = React.useState(""), [i, o] = React.useState(null), [l, c] = React.useState([]), [u, m] = React.useState("near_term"), [p, h] = React.useState("high"), [f, v] = React.useState(""), [x, y] = React.useState(false), [b, g] = React.useState(""), [j, w] = React.useState(false), [C, P] = React.useState(""), [I, L] = React.useState(false), z = P5.filter((S) => S.name.toLowerCase().includes(b.toLowerCase()) && !((i == null ? void 0 : i.id) === S.id && (i == null ? void 0 : i.type) === S.type)), R = (S) => {
    o(S), g(""), w(false);
  }, B = J$.filter((S) => S.toLowerCase().includes(C.toLowerCase()) && !l.includes(S)), J = (S) => {
    c([...l, S]), P(""), L(false);
  }, X = (S) => {
    c(l.filter((E) => E !== S));
  }, k = a !== "" && i !== null && f.length >= B$, V = () => {
    if (!k) {
      toast({ title: "Missing required fields", description: "Please fill in all required fields.", variant: "destructive" });
      return;
    }
    toast({ title: "Intelligence submitted for review", description: "Your entry will be reviewed before publishing." }), s();
  }, F = () => {
    r(""), o(null), c([]), m("near_term"), h("high"), v(""), y(false), g(""), P(""), n();
  };
  return (<C_ot open={e} onOpenChange={(S) => !S && F()}>
<DialogContent className="sm:max-w-[560px] max-h-[90vh] overflow-y-auto">
<DialogHeader>
<DialogTitle>
Add Internal Intelligence
</DialogTitle>
</DialogHeader>
<div className="space-y-5 mt-2">
<div className="space-y-2">
<Label className="text-sm font-medium">
{"Intelligence Type "}
<span className="text-destructive">
*
</span>
</Label>
<C_le value={a} onValueChange={(S) => r(S)}>
<SelectTrigger>
<C_ce placeholder="Select intelligence type" />
</SelectTrigger>
<SelectContent>
{Object.entries(F$).map(([S, E]) => (<SelectItem value={S} key={S}>
{E}
</SelectItem>))}
</SelectContent>
</C_le>
</div>
<div className="space-y-2">
<Label className="text-sm font-medium">
{"Related Entity "}
<span className="text-destructive">
*
</span>
</Label>
<C_ql open={j} onOpenChange={w}>
<Ql asChild>
<Button variant="outline" className={cn("w-full justify-start font-normal", !i && "text-muted-foreground")}>
{i ? (<span className="flex items-center gap-2">
{i.name}
<span className="text-xs text-muted-foreground capitalize">
(
{i.type}
)
</span>
</span>) : "Select entity..."}
</Button>
</Ql>
<PopoverContent className="w-[320px] p-2" align="start">
<div className="relative mb-2">
<SearchIcon className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
<Input placeholder="Search entities..." value={b} onChange={(S) => g(S.target.value)} className="pl-8 h-8 text-sm" />
</div>
<div className="max-h-48 overflow-y-auto space-y-0.5">
{z.length === 0 ? (<p className="text-sm text-muted-foreground text-center py-2">
No entities found
</p>) : z.map((S) => (<button type="button" onClick={() => R(S)} className="w-full text-left px-2 py-1.5 text-sm rounded hover:bg-muted transition-colors" key={`${S.type}-${S.id}`}>
<span className="font-medium">
{S.name}
</span>
<span className="text-xs text-muted-foreground ml-2 capitalize">
(
{S.type}
)
</span>
</button>))}
</div>
</PopoverContent>
</C_ql>
</div>
<div className="space-y-2">
<Label className="text-sm font-medium">
Topic Tags
</Label>
<div className="flex flex-wrap gap-2 items-center">
{l.map((S) => (<span className="inline-flex items-center gap-1 px-2.5 py-1 text-sm bg-muted rounded-md" key={S}>
{S}
<button type="button" onClick={() => X(S)} className="ml-1 hover:text-destructive">
<XIcon className="h-3 w-3" />
</button>
</span>))}
<C_ql open={I} onOpenChange={L}>
<Ql asChild>
<Button variant="outline" size="sm" className="gap-1">
<PlusIcon className="h-3.5 w-3.5" />
Add
</Button>
</Ql>
<PopoverContent className="w-64 p-2" align="start">
<div className="relative mb-2">
<SearchIcon className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
<Input placeholder="Search tags..." value={C} onChange={(S) => P(S.target.value)} className="pl-8 h-8 text-sm" />
</div>
<div className="max-h-48 overflow-y-auto space-y-0.5">
{B.length === 0 ? (<p className="text-sm text-muted-foreground text-center py-2">
No tags found
</p>) : B.map((S) => (<button type="button" onClick={() => J(S)} className="w-full text-left px-2 py-1.5 text-sm rounded hover:bg-muted transition-colors" key={S}>
{S}
</button>))}
</div>
</PopoverContent>
</C_ql>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="space-y-2">
<Label className="text-sm font-medium">
Time Horizon
</Label>
<C_le value={u} onValueChange={(S) => m(S)}>
<SelectTrigger>
<C_ce />
</SelectTrigger>
<SelectContent>
{Object.entries(z$).map(([S, E]) => (<SelectItem value={S} key={S}>
{E}
</SelectItem>))}
</SelectContent>
</C_le>
</div>
<div className="space-y-2">
<Label className="text-sm font-medium">
Confidence Level
</Label>
<C_le value={p} onValueChange={(S) => h(S)}>
<SelectTrigger>
<C_ce />
</SelectTrigger>
<SelectContent>
{Object.entries($$).map(([S, E]) => (<SelectItem value={S} key={S}>
{E}
</SelectItem>))}
</SelectContent>
</C_le>
</div>
</div>
<div className="space-y-2">
<Label className="text-sm font-medium">
{"Intelligence Content "}
<span className="text-destructive">
*
</span>
</Label>
<Textarea value={f} onChange={(S) => v(S.target.value.slice(0, D0))} placeholder="Enter verbatim intelligence content..." className="min-h-[120px] resize-none" />
<p className="text-xs text-muted-foreground text-right">
{f.length}
/
{D0}
</p>
</div>
<div className="flex items-start gap-3">
<Checkbox id="candidate-claim" checked={x} onCheckedChange={(S) => y(S === true)} className="mt-0.5" />
<Label htmlFor="candidate-claim" className="text-sm font-normal cursor-pointer">
Mark as Candidate Claim (requires governance review)
</Label>
</div>
<div className="flex gap-3 p-3 rounded-lg bg-muted border">
<InfoIcon className="h-4 w-4 text-muted-foreground flex-shrink-0 mt-0.5" />
<p className="text-sm text-muted-foreground">
All entries go through governance before publishing
</p>
</div>
<div className="flex justify-end gap-3 pt-2">
<Button variant="outline" onClick={F}>
Cancel
</Button>
<Button onClick={V} disabled={!k}>
Submit for Review →
</Button>
</div>
</div>
</DialogContent>
</C_ot>);
}

export function _0({ icon: e, title: n, description: s, subtext: a, onClick: r }) {
  return (<button onClick={r} className="w-full flex items-start gap-4 p-4 border rounded-lg text-left transition-all duration-200 hover:border-primary/50 hover:bg-muted/50 group">
<div className="flex-shrink-0 w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-colors">
{e}
</div>
<div className="flex-1 min-w-0">
<h3 className="text-sm font-semibold text-foreground mb-1">
{n}
</h3>
<p className="text-sm text-muted-foreground">
{s}
</p>
<p className="text-xs text-muted-foreground/70 mt-1">
{a}
</p>
</div>
<ChevronRightIcon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-2.5" />
</button>);
}

export function U$({ open: e, onClose: n }) {
  const [s, a] = React.useState(false), [r, i] = React.useState(false), o = () => {
    a(true);
  }, l = () => {
    i(true);
  }, c = () => {
    a(false), n();
  }, u = () => {
    a(false);
  }, m = () => {
    i(false), n();
  }, p = () => {
    i(false);
  };
  return s ? (<L$ open onClose={u} onComplete={c} />) : r ? (<V$ open onClose={p} onComplete={m} />) : (<C_ot open={e} onOpenChange={(h) => !h && n()}>
<DialogContent className="sm:max-w-[500px]">
<DialogHeader>
<DialogTitle>
Add Internal Update
</DialogTitle>
<DialogDescription>
Choose how to add internal intelligence:
</DialogDescription>
</DialogHeader>
<div className="space-y-3 mt-2">
<_0 icon={<FileTextIcon className="h-5 w-5" />} title="Upload Internal Source Material" description="Capture historical executive commentary" subtext="Extract claims from approved materials" onClick={o} />
<_0 icon={<PencilIcon className="h-5 w-5" />} title="Add Internal Intelligence" description="Capture IR-generated intelligence in real time" subtext="Post-call debriefs, alignment notes, framing" onClick={l} />
</div>
</DialogContent>
</C_ot>);
}

export function O0({ icon: e, title: n, description: s, subtext: a, onClick: r }) {
  return (<button onClick={r} className="w-full flex items-start gap-4 p-4 border rounded-lg text-left transition-all duration-200 hover:border-primary/50 hover:bg-muted/50 group">
<div className="flex-shrink-0 w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-colors">
{e}
</div>
<div className="flex-1 min-w-0">
<h3 className="text-sm font-semibold text-foreground mb-1">
{n}
</h3>
<p className="text-sm text-muted-foreground">
{s}
</p>
<p className="text-xs text-muted-foreground/70 mt-1">
{a}
</p>
</div>
<ChevronRightIcon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-2.5" />
</button>);
}

export function H$({ open: e, onClose: n }) {
  const s = () => {
    toast({ title: "Cloud Storage Integration", description: "Contact your administrator to configure SharePoint, OneDrive, or Google Drive connections." }), n();
  }, a = () => {
    toast({ title: "Database Integration", description: "Contact your administrator to configure SQL Server, Snowflake, or Redshift connections." }), n();
  };
  return (<C_ot open={e} onOpenChange={(r) => !r && n()}>
<DialogContent className="sm:max-w-[500px]">
<DialogHeader>
<DialogTitle>
Connect to Data
</DialogTitle>
<DialogDescription>
Choose your data source type to configure integration
</DialogDescription>
</DialogHeader>
<div className="space-y-3 mt-2">
<O0 icon={<CloudIcon className="h-5 w-5" />} title="Connect Cloud Storage" description="SharePoint, OneDrive, Google Drive, Box" subtext="Sync files and documents from cloud storage" onClick={s} />
<O0 icon={<DatabaseIcon className="h-5 w-5" />} title="Connect Database" description="SQL Server, Snowflake, Redshift, BigQuery" subtext="Query structured data from enterprise databases" onClick={a} />
</div>
</DialogContent>
</C_ot>);
}

export const W$ = [{ id: "analysts", label: "Analysts", icon: UsersIcon }, { id: "companies", label: "Companies & Competitors", icon: Building2Icon }, { id: "assets", label: "Assets & Drugs", icon: PillIcon }, { id: "events", label: "Events", icon: CalendarIcon }, { id: "narratives", label: "Narratives", icon: MessageSquareIcon }, { id: "market", label: "Market Signals", icon: TrendingUpIcon }, { id: "indices", label: "Indices & Scores", icon: ChartColumnIcon }];

export function G$({ selectedEntity: e, onEntityChange: n, counts: s, activityCounts: a = { discovered: 5, sentForReview: 1 } }) {
  const [r, i] = React.useState(false), [o, l] = React.useState(false), [c, u] = React.useState(false), m = useNavigate();
  return (<>
<div className="w-64 border-r border-border bg-card/50 h-full flex flex-col">
<div className="p-4 border-b border-border">
<div className="flex items-center gap-2">
<LayersIcon className="h-4 w-4 text-muted-foreground" />
<h2 className="text-sm font-semibold text-foreground uppercase tracking-wide">
Entities Workspace
</h2>
</div>
</div>
<nav className="p-2 flex-1">
{W$.map((p) => {
    const C_h = p.icon, f = e === p.id, v = s[p.id];
    return (<button onClick={() => n(p.id)} className={cn("w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-left", "transition-all duration-200", f ? "bg-primary/10 text-primary border border-primary/20" : "text-muted-foreground hover:bg-muted hover:text-foreground")} key={p.id}>
<div className="flex items-center gap-3">
<C_h className="h-4 w-4" />
<span className="text-sm font-medium">
{p.label}
</span>
</div>
{v > 0 && (<span className={cn("text-xs font-medium px-2 py-0.5 rounded-full", f ? "bg-primary/20 text-primary" : "bg-muted text-muted-foreground")}>
{v}
</span>)}
</button>);
  })}
</nav>
<div className="p-3 space-y-3 border-t border-border">
<div className="flex items-center gap-2 px-1">
<LayersIcon className="h-3.5 w-3.5 text-muted-foreground" />
<h3 className="text-xs font-semibold text-foreground uppercase tracking-wide">
Entity Activity
</h3>
</div>
<Button variant="outline" className="w-full justify-start gap-2" onClick={() => i(true)}>
<PlusIcon className="h-4 w-4" />
Add Entity
</Button>
<Button variant="outline" className="w-full justify-start gap-2" onClick={() => l(true)}>
<FileUpIcon className="h-4 w-4" />
Add Internal Update
</Button>
<Button variant="outline" className="w-full justify-start gap-2" onClick={() => u(true)}>
<Link2Icon className="h-4 w-4" />
Connect to Data
</Button>
<div className="space-y-1.5 bg-muted/30 rounded-lg p-2">
<div onClick={() => m("/gei/governance?status=discovered")} className="flex items-center justify-between px-2 py-1.5 rounded-md text-foreground/80 hover:bg-background/60 transition-colors cursor-pointer">
<div className="flex items-center gap-2.5">
<RadarIcon className="h-4 w-4 text-muted-foreground" />
<span className="text-sm font-medium">
Discovered
</span>
</div>
<span className="text-xs font-semibold bg-secondary text-secondary-foreground px-2.5 py-1 rounded-full min-w-[1.75rem] text-center">
{a.discovered}
</span>
</div>
<div onClick={() => m("/gei/governance?status=sent_for_review")} className="flex items-center justify-between px-2 py-1.5 rounded-md text-foreground/80 hover:bg-background/60 transition-colors cursor-pointer">
<div className="flex items-center gap-2.5">
<SendIcon className="h-4 w-4 text-muted-foreground" />
<span className="text-sm font-medium">
Sent for review
</span>
</div>
<span className="text-xs font-semibold bg-primary/15 text-primary px-2.5 py-1 rounded-full min-w-[1.75rem] text-center">
{a.sentForReview}
</span>
</div>
</div>
<button onClick={() => m("/gei/governance")} className="flex items-center gap-2 px-2 py-1.5 text-sm font-medium text-primary hover:text-primary/80 hover:underline w-full transition-colors">
<ExternalLinkIcon className="h-3.5 w-3.5" />
Go to Governance review
</button>
</div>
</div>
<I$ open={r} onClose={() => i(false)} />
<U$ open={o} onClose={() => l(false)} />
<H$ open={c} onClose={() => u(false)} />
</>);
}

export const q$ = { active: { label: "Active", className: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20", icon: CircleCheckBigIcon }, discovered: { label: "Discovered", className: "bg-slate-500/10 text-slate-600 border-slate-500/20", icon: RadarIcon }, sent_for_review: { label: "Sent for review", className: "bg-amber-500/10 text-amber-600 border-amber-500/20", icon: SendIcon } };

export function Om({ status: e, className: n }) {
  const s = q$[e], C_a = s.icon;
  return (<Badge variant="outline" className={cn("text-xs font-normal gap-1", s.className, n)}>
<C_a className="h-3 w-3" />
{s.label}
</Badge>);
}

export function Q$({ analyst: e, onViewIntelligence: n, on360View: s, selected: a = false, onSelectChange: r, showCheckbox: i = false }) {
  var p;
  const o = { high: "text-primary bg-primary/10", medium: "text-amber-600 bg-amber-500/10", low: "text-muted-foreground bg-muted" }, l = { high: "High", medium: "Medium", low: "Low" }, c = e.status === "discovered", u = e.status === "sent_for_review", m = c || u;
  return (<div className={cn("w-full flex items-center gap-4 p-4 rounded-lg border bg-card", "transition-all duration-200", a ? "border-primary/50 bg-primary/5" : "border-border hover:border-primary/30 hover:shadow-sm")}>
{i && (<Checkbox checked={m ? false : a} onCheckedChange={(h) => r == null ? void 0 : r(h === true)} className="shrink-0" disabled={m} />)}
<div className="flex-1 min-w-0">
<div className="flex items-center gap-3 mb-1">
<h3 className="text-sm font-semibold text-foreground">
{e.name}
</h3>
{e.status && e.status !== "active" && (<Om status={e.status} />)}
<span className="text-xs text-muted-foreground">
•
</span>
<span className="text-xs text-muted-foreground">
{e.firm}
</span>
</div>
<p className="text-xs text-muted-foreground">
{e.coverageFocus}
</p>
</div>
<div className="flex-1 flex items-center gap-1.5 justify-center">
{(p = e.activeTopics) == null ? void 0 : p.slice(0, 3).map((h) => (<Badge variant="secondary" className="text-xs font-normal px-2 py-0.5" key={h}>
{h}
</Badge>))}
</div>
<div className="flex items-center gap-4">
<div className="flex flex-col items-end gap-1">
<div className={cn("inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium", o[e.activityLevel])}>
<ActivityIcon className="h-3 w-3" />
{l[e.activityLevel]}
</div>
<span className="text-xs text-muted-foreground">
{e.lastUpdated}
</span>
</div>
<div className="flex items-center gap-2">
<Button size="sm" onClick={(h) => {
    h.stopPropagation(), n();
  }} className="text-xs h-8">
<EyeIcon className="h-3.5 w-3.5 mr-1.5" />
View Intelligence
</Button>
<Button variant="ghost" size="sm" onClick={(h) => {
    h.stopPropagation(), s();
  }} className="text-xs h-8 text-muted-foreground hover:text-foreground">
<CompassIcon className="h-3.5 w-3.5 mr-1.5" />
360° View
</Button>
</div>
</div>
</div>);
}

export const Z$ = { regulatory_expectation: "Regulatory Expectation", development_timeline: "Development Timeline", commercial_potential: "Commercial Potential", strategic_importance: "Strategic Importance" };

export const eJ = { contextual: "Contextual", implied_commitment: "Implied Commitment", explicit_expectation: "Explicit Expectation" };

export const R5 = { addressed: "Addressed", still_open: "Still Open", needs_review: "Needs Review" };

export const tJ = [{ id: "claim-cosentyx-1", verbatimQuote: "We remain confident in Cosentyx's competitive positioning and expect continued share gains across key markets through 2026.", source: "earnings_call", quarter: "Q2 2026", year: 2026, speaker: "CEO", claimType: "commercial_potential", claimStrength: "implied_commitment", status: "still_open", entityId: "1", entityType: "asset", dateRecorded: "Sep 14, 2026", lastReviewedBy: "VP, Investor Relations", lastReviewedAt: "Sep 15, 2026" }, { id: "claim-cosentyx-2", verbatimQuote: "Immunology remains a long-term growth pillar, with Cosentyx positioned as the anchor asset for our IL-17/IL-23 strategy.", source: "earnings_call", quarter: "Q1 2026", year: 2026, speaker: "CFO", claimType: "strategic_importance", claimStrength: "contextual", status: "addressed", entityId: "1", entityType: "asset", dateRecorded: "Jun 17, 2026", lastReviewedBy: "IR Director", lastReviewedAt: "Jun 20, 2026" }, { id: "claim-novartis2113-1", verbatimQuote: "We expect Phase 3 data readout in H1 2026 and remain confident in the regulatory pathway for NVS-2113.", source: "earnings_call", quarter: "Q2 2026", year: 2026, speaker: "CEO", claimType: "development_timeline", claimStrength: "explicit_expectation", status: "still_open", entityId: "5", entityType: "asset", dateRecorded: "Sep 14, 2026", lastReviewedBy: "VP, Investor Relations", lastReviewedAt: "Sep 15, 2026" }, { id: "claim-novartis2113-2", verbatimQuote: "NVS-2113 represents our next-generation oral approach in Immunology, with regulatory submissions expected in 2027.", source: "investor_day", quarter: "Q1 2026", year: 2026, speaker: "Chief Scientific Officer", claimType: "regulatory_expectation", claimStrength: "explicit_expectation", status: "needs_review", entityId: "5", entityType: "asset", dateRecorded: "May 22, 2026", lastReviewedBy: "IR Manager", lastReviewedAt: "May 25, 2026" }, { id: "claim-keytruda-1", verbatimQuote: "Keytruda's label expansion strategy remains on track, with multiple Phase 3 readouts expected across oncology indications in 2026.", source: "earnings_call", quarter: "Q2 2026", year: 2026, speaker: "CEO", claimType: "development_timeline", claimStrength: "explicit_expectation", status: "still_open", entityId: "4", entityType: "asset", dateRecorded: "Sep 12, 2026" }, { id: "claim-novartis-1", verbatimQuote: "We remain committed to disciplined capital allocation, with shareholder returns expected to grow in line with earnings.", source: "earnings_call", quarter: "Q2 2026", year: 2026, speaker: "CFO", claimType: "commercial_potential", claimStrength: "implied_commitment", status: "still_open", entityId: "1", entityType: "company", dateRecorded: "Sep 14, 2026", lastReviewedBy: "VP, Investor Relations", lastReviewedAt: "Sep 15, 2026" }, { id: "claim-novartis-2", verbatimQuote: "Immunology will be a growth driver through the end of the decade, supported by lifecycle execution and pipeline advancement.", source: "investor_day", quarter: "Q4 2025", year: 2026, speaker: "CEO", claimType: "strategic_importance", claimStrength: "explicit_expectation", status: "addressed", entityId: "1", entityType: "company", dateRecorded: "Feb 15, 2026", lastReviewedBy: "IR Director", lastReviewedAt: "Feb 18, 2026" }, { id: "claim-novartis-3", verbatimQuote: "We anticipate gross margin expansion of 50-100 basis points annually through operational efficiency initiatives.", source: "earnings_call", quarter: "Q1 2026", year: 2026, speaker: "CFO", claimType: "commercial_potential", claimStrength: "explicit_expectation", status: "needs_review", entityId: "1", entityType: "company", dateRecorded: "Jun 17, 2026", lastReviewedBy: "IR Manager", lastReviewedAt: "Jun 20, 2026" }, { id: "claim-event-q4-1", verbatimQuote: "Looking ahead to 2026, we expect revenue growth in the mid-single digits, consistent with our long-term guidance framework.", source: "earnings_call", quarter: "Q2 2026", year: 2026, speaker: "CEO", claimType: "commercial_potential", claimStrength: "explicit_expectation", status: "still_open", entityId: "1", entityType: "event", dateRecorded: "Sep 14, 2026", lastReviewedBy: "VP, Investor Relations", lastReviewedAt: "Sep 15, 2026" }, { id: "claim-event-q4-2", verbatimQuote: "We remain focused on pipeline execution, with six potential regulatory approvals anticipated across therapeutic areas in 2026.", source: "earnings_call", quarter: "Q2 2026", year: 2026, speaker: "Chief Scientific Officer", claimType: "regulatory_expectation", claimStrength: "explicit_expectation", status: "needs_review", entityId: "1", entityType: "event", dateRecorded: "Sep 14, 2026", lastReviewedBy: "IR Analyst", lastReviewedAt: "Sep 16, 2026" }, { id: "claim-jpm-1", verbatimQuote: "Our strategic priorities for 2026 center on three pillars: commercial execution, pipeline advancement, and operational discipline.", source: "investor_day", quarter: "Q3 2026", year: 2026, speaker: "CEO", claimType: "strategic_importance", claimStrength: "contextual", status: "still_open", entityId: "2", entityType: "event", dateRecorded: "Sep 13, 2026", lastReviewedBy: "IR Director", lastReviewedAt: "Sep 14, 2026" }, { id: "claim-event-clinical-1", verbatimQuote: "The head-to-head data reinforce Cosentyx's differentiated efficacy profile, and we expect these results to strengthen our competitive narrative.", source: "investor_day", quarter: "Q2 2026", year: 2026, speaker: "Chief Scientific Officer", claimType: "strategic_importance", claimStrength: "implied_commitment", status: "addressed", entityId: "3", entityType: "event", dateRecorded: "Jul 29, 2026", lastReviewedBy: "IR Director", lastReviewedAt: "Aug 2, 2026" }, { id: "claim-event-clinical-2", verbatimQuote: "We see the IL-17/IL-23 class data as validation of our long-term investment thesis in Immunology.", source: "investor_day", quarter: "Q2 2026", year: 2026, speaker: "CEO", claimType: "strategic_importance", claimStrength: "contextual", status: "still_open", entityId: "3", entityType: "event", dateRecorded: "Jul 29, 2026", lastReviewedBy: "VP, Investor Relations", lastReviewedAt: "Jul 30, 2026" }, { id: "claim-skyrizi-1", verbatimQuote: "Skyrizi continues to exceed expectations, and we now project peak sales potential above $20 billion.", source: "earnings_call", quarter: "Q2 2026", year: 2026, speaker: "CEO", claimType: "commercial_potential", claimStrength: "explicit_expectation", status: "still_open", entityId: "2", entityType: "asset", dateRecorded: "Sep 16, 2026" }];

export function Lm(e, n) {
  return tJ.filter((s) => s.entityId === e && s.entityType === n);
}

export function nJ(e) {
  const n = {};
  return [...e].sort((a, r) => {
    if (a.year !== r.year) return r.year - a.year;
    const i = { Q4: 4, Q3: 3, Q2: 2, Q1: 1 }, o = i[a.quarter.split(" ")[0]] || 0;
    return (i[r.quarter.split(" ")[0]] || 0) - o;
  }).forEach((a) => {
    const r = a.quarter;
    n[r] || (n[r] = []), n[r].push(a);
  }), n;
}

export function zg(e, n) {
  var i;
  const s = Lm(e, n), a = s.filter((o) => o.status === "still_open" || o.status === "needs_review"), r = [...s].sort((o, l) => new Date(l.dateRecorded).getTime() - new Date(o.dateRecorded).getTime());
  return { totalClaims: s.length, openClaims: a.length, lastClaimDate: ((i = r[0]) == null ? void 0 : i.dateRecorded) || null };
}

export const L0 = { 1: "on_message", 2: "on_message", 3: "on_message", 4: "on_message", 5: "careful_framing", 6: "on_message", "company-1": "on_message", "company-2": "on_message", "company-3": "on_message", "company-4": "on_message", "company-5": "careful_framing", "event-1": "on_message", "event-2": "on_message", "event-3": "on_message", "narrative-1": "careful_framing", "narrative-2": "careful_framing", "narrative-3": "on_message", "analyst-1": "on_message", "analyst-2": "on_message", "analyst-3": "on_message", "analyst-4": "on_message", default: "on_message" };

export function Lo(e) {
  const n = L0[e] || L0.default;
  return { status: n, ...{ on_message: { label: "On message", description: "Current external narrative aligns with stated positions" }, careful_framing: { label: "Requires careful framing", description: "Recent external commentary may require clarification" }, contradiction_risk: { label: "Potential contradiction risk", description: "External signals conflict with prior leadership claims" } }[n] };
}

export const F0 = { 1: { overview: `James Quigley is a senior healthcare analyst at Goldman Sachs covering large-cap pharma and biotech companies. His recent focus areas include margin sustainability, cost structure discipline, and long-term guidance visibility amid evolving competitive dynamics.

He has been actively engaging during recent earnings cycles, particularly on Immunology assets and margin trends across the Innovative Medicines portfolio.`, questions: [{ date: "Sep 12, 2026", source: "Q2 2026 Earnings Call", content: `"Looking at the Immunology franchise, I'm curious about the trajectory of COSENTYX given the competitive dynamics we're seeing. Can you walk us through how you're thinking about market share retention as new entrants come to market?"` }, { date: "Sep 10, 2026", source: "Q2 2026 Earnings Call", content: '"How should we think about the sustainability of recent margin expansion as inflationary pressures normalize?"' }], commentary: [{ date: "Sep 11, 2026", source: "Bloomberg Interview", content: "Commented on investor focus shifting from top-line growth toward cost discipline and operational leverage in a normalized market environment." }, { date: "Sep 10, 2026", source: "Goldman Sachs Research", content: "Highlighted near-term margin compression across the portfolio driven by integration costs, while maintaining a neutral long-term thesis tied to pipeline execution." }], social: [{ date: "Sep 13, 2026", platform: "Twitter (X)", content: `"Margins are the real debate right now. Execution has been strong, but investors will want clarity on what's structural vs cyclical going forward."` }, { date: "Sep 12, 2026", platform: "Twitter (X)", content: `"Guidance feels reasonable, but sensitivity to inflation and cost inputs shouldn't be underestimated."` }], patterns: ["Increasing scrutiny on margin durability vs temporary tailwinds", "Consistent focus on cost structure and inflation sensitivity", "Repeated probing of competitive positioning within Immunology"], timeline: [{ date: "Sep 13, 2026", activity: "Posted commentary on margin sustainability" }, { date: "Sep 12, 2026", activity: "Asked Immunology pipeline question on earnings call" }, { date: "Sep 11, 2026", activity: "Quoted in Bloomberg interview" }, { date: "Sep 10, 2026", activity: "Published margin analysis note" }] }, 2: { overview: `Richard Vosser is a senior pharmaceutical analyst at JPMorgan with a focus on late-stage pipeline strength, R&D productivity, and long-term innovation strategy across large-cap pharma. His recent commentary reflects increasing investor attention on capital allocation discipline and clarity around pipeline prioritization.

Over the last earnings cycle, he has consistently focused on how R&D investments translate into sustainable growth beyond near-term revenue visibility.`, questions: [{ date: "Sep 14, 2026", source: "Q2 2026 Earnings Call", content: `"Can you help us frame how you're prioritizing capital allocation across the pipeline, particularly as multiple late-stage programs move closer to commercialization?"` }, { date: "Sep 14, 2026", source: "Q2 2026 Earnings Call", content: '"As we think about long-term growth, where do you see the biggest inflection points coming from innovation versus portfolio optimization?"' }], commentary: [{ date: "Sep 15, 2026", source: "JPMorgan Research Note", content: "Highlighted improving R&D productivity metrics and noted increased investor confidence in the sustainability of the late-stage pipeline." }, { date: "Sep 13, 2026", source: "CNBC Interview", content: "Discussed the importance of clear innovation roadmaps as investors reassess long-duration growth assumptions across pharma." }], social: [{ date: "Sep 16, 2026", platform: "Twitter (X)", content: '"Pipeline depth matters more than ever. Investors are looking for execution clarity, not just optionality."' }, { date: "Sep 14, 2026", platform: "Twitter (X)", content: '"Capital allocation discipline is becoming just as important as scientific ambition in this cycle."' }], patterns: ["Strong emphasis on pipeline prioritization", "Repeated focus on R&D productivity and ROI", "Framing innovation as a long-duration growth driver, not a short-term catalyst"], timeline: [{ date: "Sep 16, 2026", activity: "Posted commentary on pipeline depth" }, { date: "Sep 15, 2026", activity: "Published JPMorgan research note" }, { date: "Sep 14, 2026", activity: "Asked strategic pipeline questions on earnings call" }, { date: "Sep 13, 2026", activity: "Appeared on CNBC discussing pharma innovation" }] }, 3: { overview: `Shirley Tan is a pharma-focused analyst at Barclays, covering operational performance, margin execution, and competitive dynamics across healthcare services and biotech. His recent activity reflects heightened scrutiny on segment-level performance and execution risk as cost pressures normalize.

He is known for detailed, data-driven questioning around operational efficiency and margin drivers.`, questions: [{ date: "Sep 9, 2026", source: "Q2 2026 Earnings Call", content: `"Can you break down the margin performance by segment and help us understand where you're seeing the most operational leverage versus ongoing pressure?"` }, { date: "Sep 9, 2026", source: "Q2 2026 Earnings Call", content: '"How should we think about market share trends as pricing pressure persists across devices?"' }], commentary: [{ date: "Sep 10, 2026", source: "Barclays Research Note", content: "Flagged mixed margin performance across key franchises, citing integration complexity and regional pricing pressure." }, { date: "Sep 8, 2026", source: "Financial Times Quote", content: "Commented on the importance of execution discipline in sustaining profitability." }], social: [{ date: "Sep 11, 2026", platform: "Twitter (X)", content: '"Operational execution is the story across the portfolio right now. Margins tell you where the pressure really is."' }], patterns: ["Segment-level margin scrutiny", "Focus on operational efficiency vs structural pressure", "Market share stability as a proxy for execution strength"], timeline: [{ date: "Sep 11, 2026", activity: "Social commentary on margins" }, { date: "Sep 10, 2026", activity: "Barclays pharma research update" }, { date: "Sep 9, 2026", activity: "Earnings call questions on segment performance" }, { date: "Sep 8, 2026", activity: "Quoted in Financial Times" }] }, 4: { overview: `Matthew Weston is a senior healthcare analyst at UBS known for her focus on investor sentiment, leadership messaging, and competitive differentiation. Her recent engagement highlights growing investor sensitivity to tone, consistency, and clarity in management communications.

She often challenges leadership on strategic clarity rather than numerical guidance alone.`, questions: [{ date: "Sep 13, 2026", source: "Healthcare Conference Q&A", content: '"How do you ensure consistency in strategic messaging as the organization balances near-term pressures with long-term ambition?"' }, { date: "Sep 12, 2026", source: "Earnings Call", content: '"What are the key messages you want investors to take away as competitive intensity increases?"' }], commentary: [{ date: "Sep 14, 2026", source: "UBS Research Note", content: "Emphasized the importance of leadership credibility and consistent communication in sustaining valuation premiums." }, { date: "Sep 11, 2026", source: "Reuters Quote", content: "Noted that investors are increasingly rewarding clarity over complexity in healthcare narratives." }], social: [{ date: "Sep 15, 2026", platform: "Twitter (X)", content: '"Clear strategy beats clever strategy. Investors want coherence, not complexity."' }], patterns: ["Focus on management credibility", "Sensitivity to tone and clarity in leadership messaging", "Competitive positioning framed through narrative consistency"], timeline: [{ date: "Sep 15, 2026", activity: "Posted commentary on leadership clarity" }, { date: "Sep 14, 2026", activity: "Published UBS sentiment-focused research" }, { date: "Sep 13, 2026", activity: "Asked messaging-related question at conference" }, { date: "Sep 11, 2026", activity: "Quoted by Reuters" }] }, "discovered-1": { overview: `Thibault Boutherin is an emerging voice in the specialty pharma and oncology coverage space at Morgan Stanley. She has recently been referenced in Novartis-related earnings discussions, with a focus on pipeline competitive dynamics and oncology differentiation strategies.

Her questions during recent peer earnings calls have centered on market share retention and late-stage competitive positioning, which may have IR relevance as investors seek to understand Novartis's oncology narrative.`, questions: [{ date: "Sep 17, 2026", source: "Peer Pharma Q2 2026 Earnings Call", content: `"I'm curious about how you're thinking about the competitive intensity in oncology, particularly as we see multiple late-stage assets approaching potential approvals."` }, { date: "Sep 15, 2026", source: "Sector Conference Q&A", content: `"How should investors think about market share dynamics over the next 12\u201318 months given the pipeline congestion we're seeing?"` }], commentary: [{ date: "Sep 16, 2026", source: "Morgan Stanley Research Note", content: "Highlighted the importance of differentiation strategy in crowded oncology markets, noting that Novartis's positioning will be closely watched." }], social: [{ date: "Sep 15, 2026", platform: "Twitter (X)", content: '"Pipeline depth matters, but execution timelines and competitive read-throughs are what investors are really focused on right now."' }], patterns: ["Focus on competitive positioning in oncology", "Emerging scrutiny of pipeline execution timelines", "Market share dynamics as key investor concern"], timeline: [{ date: "Sep 17, 2026", activity: "Asked competitive dynamics question on earnings call" }, { date: "Sep 16, 2026", activity: "Published research note on oncology differentiation" }, { date: "Sep 15, 2026", activity: "Posted commentary on pipeline execution" }] }, "discovered-2": { overview: `Michael Leuchten covers biotech and immunology at Jefferies, with a recent focus on R&D productivity, margin sustainability, and late-stage pipeline differentiation. He has been referenced in discussions relevant to Novartis's Immunology positioning.

His earnings call questions and research notes reflect increasing investor attention on operational discipline and the balance between investment intensity and near-term profitability.`, questions: [{ date: "Sep 16, 2026", source: "Immunology-focused Earnings Call", content: '"Given the ongoing pressures on R&D productivity and margin sustainability, how should we think about the balance between investment intensity and near-term profitability?"' }, { date: "Sep 14, 2026", source: "Biotech Sector Call", content: '"What metrics are you using internally to assess R&D productivity, and how should investors think about those benchmarks?"' }], commentary: [{ date: "Sep 15, 2026", source: "Jefferies Research Note", content: "Margin sustainability remains a key investor concern, with differentiation increasingly tied to operational discipline." }], social: [{ date: "Sep 14, 2026", platform: "LinkedIn", content: `"R&D productivity is the story no one wants to talk about, but it's driving sentiment more than any single pipeline readout."` }], patterns: ["Scrutiny on R&D productivity metrics", "Margin sustainability as competitive differentiator", "Balance between investment and profitability"], timeline: [{ date: "Sep 16, 2026", activity: "Asked R&D productivity question on earnings call" }, { date: "Sep 15, 2026", activity: "Published research on margin sustainability" }, { date: "Sep 14, 2026", activity: "Posted LinkedIn commentary on R&D sentiment" }] }, "review-1": { overview: `Emmanuel Papadakis is a large cap healthcare analyst at Deutsche Bank, known for her focus on financial narrative clarity, guidance practices, and strategic messaging consistency. She was added to tracking by the IR team to monitor evolving financial narrative themes across diversified pharma portfolios.

Her recent commentary emphasizes guidance visibility as a differentiator for investor confidence.`, questions: [{ date: "Sep 15, 2026", source: "Large Cap Healthcare Earnings Call", content: `"Can you walk us through how you're thinking about guidance visibility and the cadence of updates investors should expect over the coming quarters?"` }, { date: "Sep 13, 2026", source: "Healthcare Conference Q&A", content: `"What are the key milestones you're using to frame guidance for the year, and how flexible is that framework?"` }], commentary: [{ date: "Sep 14, 2026", source: "Deutsche Bank Research Note", content: "Guidance clarity is becoming a differentiator for investor confidence, particularly among diversified pharma names navigating complex portfolio transitions." }], social: [{ date: "Sep 13, 2026", platform: "Twitter (X)", content: '"Clear guidance beats ambitious guidance. Investors want frameworks they can model, not just targets."' }], patterns: ["Focus on guidance visibility and consistency", "Financial narrative as confidence driver", "Emphasis on clear communication over ambitious targets"], timeline: [{ date: "Sep 15, 2026", activity: "Asked guidance visibility question on earnings call" }, { date: "Sep 14, 2026", activity: "Published research on guidance practices" }, { date: "Sep 13, 2026", activity: "Posted commentary on guidance frameworks" }] } };

export const sJ = [{ id: "overview", label: "Analyst Overview", icon: UserIcon }, { id: "questions", label: "Questions Asked", icon: CircleHelpIcon }, { id: "commentary", label: "Public Commentary & Mentions", icon: MessageSquareIcon }, { id: "social", label: "Social / Media Signals", icon: Share2Icon }, { id: "narratives", label: "Narrative Patterns", icon: LayersIcon }, { id: "timeline", label: "Timeline of Activity", icon: ClockIcon }];

export function C_aJ({ analyst: e, onClose: n }) {
  if (!e) return null;
  const s = { high: "text-primary bg-primary/10 border-primary/20", medium: "text-amber-600 bg-amber-500/10 border-amber-500/20", low: "text-muted-foreground bg-muted border-border" }, a = F0[e.id] || F0[1], r = (i) => {
    switch (i) {
      case "overview":
        return (<p className="text-xs text-muted-foreground whitespace-pre-line leading-relaxed">
{a.overview}
</p>);
      case "questions":
        return (<div className="space-y-3">
{a.questions.map((o, l) => (<div className="border-l-2 border-border pl-3" key={l}>
<p className="text-xs text-muted-foreground mb-1">
{o.date}
{" — "}
{o.source}
</p>
<p className="text-xs text-foreground/80 italic">
{o.content}
</p>
</div>))}
</div>);
      case "commentary":
        return (<div className="space-y-3">
{a.commentary.map((o, l) => (<div className="border-l-2 border-border pl-3" key={l}>
<p className="text-xs text-muted-foreground mb-1">
{o.date}
{" — "}
{o.source}
</p>
<p className="text-xs text-foreground/80">
{o.content}
</p>
</div>))}
</div>);
      case "social":
        return (<div className="space-y-3">
{a.social.map((o, l) => (<div className="border-l-2 border-border pl-3" key={l}>
<p className="text-xs text-muted-foreground mb-1">
{o.date}
{" — "}
{o.platform}
</p>
<p className="text-xs text-foreground/80 italic">
{o.content}
</p>
</div>))}
</div>);
      case "narratives":
        return (<ul className="space-y-1.5">
{a.patterns.map((o, l) => (<li className="text-xs text-muted-foreground flex items-start gap-2" key={l}>
<span className="text-primary mt-1">
•
</span>
{o}
</li>))}
</ul>);
      case "timeline":
        return (<div className="space-y-2">
{a.timeline.map((o, l) => (<div className="flex items-start gap-3" key={l}>
<span className="text-xs text-muted-foreground whitespace-nowrap min-w-[85px]">
{o.date}
</span>
<span className="text-xs text-foreground/80">
{o.activity}
</span>
</div>))}
</div>);
      default:
        return null;
    }
  };
  return (<Sheet open={!!e} onOpenChange={() => n()}>
<SheetContent className="w-full sm:max-w-lg overflow-y-auto">
<SheetHeader className="pb-4">
<div className="flex items-center gap-2">
<SheetTitle className="text-lg font-semibold">
Analyst 360° Intelligence View
</SheetTitle>
{(e.status === "discovered" || e.status === "sent_for_review") && (<span className="px-2 py-0.5 rounded text-xs bg-muted text-muted-foreground">
Tracking entity
</span>)}
</div>
</SheetHeader>
<div className="bg-muted/50 rounded-lg p-4 mb-6">
<div className="flex items-start justify-between mb-3">
<div>
<h2 className="text-lg font-semibold text-foreground">
{e.name}
</h2>
<div className="flex items-center gap-2 mt-1">
<Building2Icon className="h-3.5 w-3.5 text-muted-foreground" />
<span className="text-sm text-muted-foreground">
{e.firm}
</span>
</div>
</div>
<div className={cn("inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border", s[e.activityLevel])}>
<ActivityIcon className="h-3 w-3" />
{e.activityLevel === "high" ? "High Activity" : e.activityLevel === "medium" ? "Medium Activity" : "Low Activity"}
</div>
</div>
<div className="flex items-center gap-2">
<TargetIcon className="h-3.5 w-3.5 text-muted-foreground" />
<span className="text-sm text-muted-foreground">
{e.coverageFocus}
</span>
</div>
</div>
<div className="space-y-4">
{sJ.map((i) => {
    const C_o = i.icon;
    return (<div className="border border-border rounded-lg p-4" key={i.id}>
<div className="flex items-center gap-2 mb-3">
<C_o className="h-4 w-4 text-muted-foreground" />
<h3 className="text-sm font-semibold text-foreground">
{i.label}
</h3>
</div>
{r(i.id)}
</div>);
  })}
</div>
<div className="border border-border rounded-lg p-4">
<div className="flex items-center gap-2 mb-3">
<ChartColumnIcon className="h-4 w-4 text-muted-foreground" />
<h3 className="text-sm font-semibold text-foreground">
Claims Snapshot (12 months)
</h3>
</div>
<p className="text-xs text-muted-foreground">
No leadership claims for external entities
</p>
</div>
<C_rJ entityId={`analyst-${e.id}`} />
<Separator className="my-6" />
<p className="text-xs text-muted-foreground text-center">
For full intelligence and curation, use View Intelligence
</p>
</SheetContent>
</Sheet>);
}

export function C_rJ({ entityId: e }) {
  const n = Lo(e), a = { on_message: { icon: CircleCheckBigIcon, iconColor: "text-emerald-600", bgColor: "bg-emerald-500/10" }, careful_framing: { icon: TriangleAlertIcon, iconColor: "text-amber-600", bgColor: "bg-amber-500/10" }, contradiction_risk: { icon: CircleAlertIcon, iconColor: "text-red-600", bgColor: "bg-red-500/10" } }[n.status], C_r = a.icon;
  return (<div className="border border-border rounded-lg p-4">
<div className="flex items-center gap-2 mb-3">
<FileTextIcon className="h-4 w-4 text-muted-foreground" />
<h3 className="text-sm font-semibold text-foreground">
Narrative Continuity
</h3>
</div>
<div className={cn("rounded-lg p-3 mb-3", a.bgColor)}>
<div className="flex items-start gap-2">
<C_r className={cn("h-4 w-4 mt-0.5", a.iconColor)} />
<div>
<p className={cn("text-sm font-medium", a.iconColor)}>
{n.label}
</p>
<p className="text-xs text-muted-foreground mt-0.5">
{n.description}
</p>
</div>
</div>
</div>
<div className="flex items-center gap-1.5 text-xs text-muted-foreground">
<InfoIcon className="h-3 w-3" />
<span>
Advisory only — not disclosure guidance
</span>
</div>
</div>);
}

export function C_iJ({ entity: e, entityType: n, onClose: s }) {
  const { toast: a } = useToast(), [r, i] = React.useState(""), [o, l] = React.useState("30"), [c, u] = React.useState(""), [m, p] = React.useState(""), [h, f] = React.useState({ radar: true, canvas: true, coach: false }), v = () => {
    a({ title: "Data Source Created", description: `${e == null ? void 0 : e.name} has been promoted to a governed data source` }), s(), i(""), l("30"), u(""), p(""), f({ radar: true, canvas: true, coach: false });
  };
  return e ? (<Sheet open={!!e} onOpenChange={() => s()}>
<SheetContent className="w-full sm:max-w-md overflow-y-auto">
<SheetHeader className="pb-4">
<div className="flex items-center gap-2">
<DatabaseIcon className="h-5 w-5 text-primary" />
<SheetTitle className="text-lg font-semibold">
Promote to Data Source
</SheetTitle>
</div>
</SheetHeader>
<div className="space-y-6 py-4">
<div className="bg-muted/50 rounded-lg p-4">
<p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
{"Selected "}
{n}
</p>
<p className="text-sm font-medium text-foreground">
{e.name}
</p>
</div>
<div className="space-y-2">
<Label htmlFor="name">
Data Source Name
</Label>
<Input id="name" placeholder={`${e.name} Intelligence Feed`} value={r} onChange={(x) => i(x.target.value)} />
</div>
<div className="space-y-2">
<Label className="flex items-center gap-2">
<CalendarIcon className="h-4 w-4 text-muted-foreground" />
Time Range
</Label>
<C_le value={o} onValueChange={l}>
<SelectTrigger>
<C_ce placeholder="Select time range" />
</SelectTrigger>
<SelectContent>
<SelectItem value="7">
Last 7 days
</SelectItem>
<SelectItem value="30">
Last 30 days
</SelectItem>
<SelectItem value="90">
Last 90 days
</SelectItem>
<SelectItem value="365">
Last 12 months
</SelectItem>
<SelectItem value="all">
All time
</SelectItem>
</SelectContent>
</C_le>
</div>
<div className="space-y-3">
<Label>
Module Eligibility
</Label>
<div className="space-y-3">
<div className="flex items-center space-x-3">
<Checkbox id="radar" checked={h.radar} onCheckedChange={(x) => f({ ...h, radar: !!x })} />
<label htmlFor="radar" className="flex items-center gap-2 text-sm cursor-pointer">
<RadioIcon className="h-4 w-4 text-muted-foreground" />
Radar
</label>
</div>
<div className="flex items-center space-x-3">
<Checkbox id="canvas" checked={h.canvas} onCheckedChange={(x) => f({ ...h, canvas: !!x })} />
<label htmlFor="canvas" className="flex items-center gap-2 text-sm cursor-pointer">
<PaletteIcon className="h-4 w-4 text-muted-foreground" />
Canvas
</label>
</div>
<div className="flex items-center space-x-3">
<Checkbox id="coach" checked={h.coach} onCheckedChange={(x) => f({ ...h, coach: !!x })} />
<label htmlFor="coach" className="flex items-center gap-2 text-sm cursor-pointer">
<GraduationCapIcon className="h-4 w-4 text-muted-foreground" />
Coach
</label>
</div>
</div>
</div>
<div className="space-y-2">
<Label className="flex items-center gap-2">
<UserIcon className="h-4 w-4 text-muted-foreground" />
Owner
</Label>
<Input placeholder="Assign an owner" value={c} onChange={(x) => u(x.target.value)} />
</div>
<div className="space-y-2">
<Label>
Notes
</Label>
<Textarea placeholder="Add any relevant notes about this data source" value={m} onChange={(x) => p(x.target.value)} rows={3} />
</div>
</div>
<SheetFooter className="pt-4">
<Button variant="outline" onClick={s}>
Cancel
</Button>
<Button onClick={v}>
Save Data Source
</Button>
</SheetFooter>
</SheetContent>
</Sheet>) : null;
}

export function C_jJ({ open: e, onClose: n, selectedAnalysts: s, appliedFilters: a }) {
  const { toast: r } = useToast(), [i, o] = React.useState(""), [l, c] = React.useState(""), [u, m] = React.useState([]), [p, h] = React.useState(""), f = () => {
    p.trim() && !u.includes(p.trim()) && (m([...u, p.trim()]), h(""));
  }, v = (j) => {
    m(u.filter((w) => w !== j));
  }, x = (j) => {
    j.key === "Enter" && (j.preventDefault(), f());
  }, y = () => {
    i.trim() && (r({ title: "Analyst data source created successfully", description: `"${i}" with ${s.length} analysts has been saved.` }), o(""), c(""), m([]), n());
  }, b = () => {
    o(""), c(""), m([]), n();
  }, g = (j) => ({ 7: "Last 7 days", 30: "Last 30 days", 90: "Last 90 days" })[j] || j;
  return (<C_ot open={e} onOpenChange={b}>
<DialogContent className="sm:max-w-lg">
<DialogHeader>
<DialogTitle className="flex items-center gap-2">
<DatabaseIcon className="h-5 w-5 text-primary" />
Create Analyst Data Source
</DialogTitle>
<DialogDescription>
Save this set of analysts as a governed external data source for use across IR Co-Pilot modules.
</DialogDescription>
</DialogHeader>
<div className="space-y-5 py-2">
<div className="space-y-2">
<Label htmlFor="source-name">
{"Data Source Name "}
<span className="text-destructive">
*
</span>
</Label>
<Input id="source-name" placeholder="Top Sell-Side Analysts – Pharma & Biotech" value={i} onChange={(j) => o(j.target.value)} />
</div>
<div className="space-y-2">
<Label htmlFor="source-description">
Description
</Label>
<Textarea id="source-description" placeholder="Briefly describe the purpose or usage of this analyst source" value={l} onChange={(j) => c(j.target.value)} rows={2} />
</div>
<div className="space-y-2">
<div className="flex items-center gap-2">
<UsersIcon className="h-4 w-4 text-muted-foreground" />
<Label>
Included Analysts
</Label>
<Badge variant="secondary" className="ml-auto text-xs">
{s.length}
{" selected"}
</Badge>
</div>
<ScrollArea className="h-28 rounded-md border bg-muted/30 p-3">
<div className="space-y-2">
{s.map((j) => (<div className="flex items-center gap-2 text-sm" key={j.id}>
<span className="font-medium text-foreground">
{j.name}
</span>
<span className="text-muted-foreground">
—
</span>
<span className="text-muted-foreground">
{j.firm}
</span>
</div>))}
</div>
</ScrollArea>
</div>
<div className="space-y-2">
<div className="flex items-center gap-2">
<FilterIcon className="h-4 w-4 text-muted-foreground" />
<Label>
Applied Filters
</Label>
</div>
<div className="rounded-md border bg-muted/30 p-3 text-sm space-y-1.5">
<div className="flex items-center justify-between">
<span className="text-muted-foreground">
Time Range:
</span>
<span className="text-foreground">
{g(a.timeRange)}
</span>
</div>
<div className="flex items-center justify-between">
<span className="text-muted-foreground">
Topics:
</span>
<span className="text-foreground">
{a.topics.length > 0 ? a.topics.join(", ") : "All Topics"}
</span>
</div>
<div className="flex items-center justify-between">
<span className="text-muted-foreground">
Firms:
</span>
<span className="text-foreground">
{a.firms === "all" ? "All Firms" : a.firms}
</span>
</div>
<div className="flex items-center justify-between">
<span className="text-muted-foreground">
Activity:
</span>
<span className="text-foreground">
{a.activity === "all" ? "All Activity" : a.activity.charAt(0).toUpperCase() + a.activity.slice(1)}
</span>
</div>
</div>
</div>
<div className="space-y-2">
<div className="flex items-center gap-2">
<TagIcon className="h-4 w-4 text-muted-foreground" />
<Label htmlFor="tags">
Tags (Optional)
</Label>
</div>
<div className="flex items-center gap-2">
<Input id="tags" placeholder="Add a tag and press Enter" value={p} onChange={(j) => h(j.target.value)} onKeyDown={x} className="flex-1" />
<Button type="button" variant="outline" size="sm" onClick={f} disabled={!p.trim()}>
Add
</Button>
</div>
{u.length > 0 && (<div className="flex flex-wrap gap-1.5 pt-1">
{u.map((j) => (<Badge variant="secondary" className="pl-2 pr-1 py-1 gap-1" key={j}>
{j}
<button onClick={() => v(j)} className="ml-0.5 hover:bg-muted rounded-full p-0.5">
<XIcon className="h-3 w-3" />
</button>
</Badge>))}
</div>)}
</div>
</div>
<div className="flex justify-end gap-2 pt-2">
<Button variant="outline" onClick={b}>
Cancel
</Button>
<Button onClick={y} disabled={!i.trim()}>
Create Data Source
</Button>
</div>
</DialogContent>
</C_ot>);
}

export function C_dn({ dateRange: e, onDateRangeChange: n, onClear: s, className: a }) {
  const [r, i] = React.useState(false), o = (e == null ? void 0 : e.from) || (e == null ? void 0 : e.to), l = (c) => {
    c.stopPropagation(), n(void 0), s == null || s();
  };
  return (<C_ql open={r} onOpenChange={i}>
<Ql asChild>
<Button variant={o ? "default" : "outline"} size="sm" className={cn("text-xs h-7 gap-1.5 min-w-[100px]", o && "pr-1.5", a)}>
<CalendarIcon className="h-3.5 w-3.5" />
{o ? (<>
<span className="truncate">
{e != null && e.from ? e != null && e.to ? `${ts(e.from, "MMM d")} - ${ts(e.to, "MMM d")}` : ts(e.from, "MMM d, yyyy") : "Custom"}
</span>
<button onClick={l} className="ml-0.5 p-0.5 rounded-full hover:bg-primary-foreground/20">
<XIcon className="h-3 w-3" />
</button>
</>) : "Custom"}
</Button>
</Ql>
<PopoverContent className="w-auto p-0" align="start">
<Calendar mode="range" selected={e} onSelect={(c) => {
    n(c), c != null && c.from && (c != null && c.to) && i(false);
  }} numberOfMonths={2} initialFocus className={cn("p-3 pointer-events-auto")} />
<div className="flex items-center justify-end gap-2 p-3 border-t border-border">
<Button variant="ghost" size="sm" onClick={() => {
    n(void 0), i(false);
  }}>
Clear
</Button>
<Button size="sm" onClick={() => i(false)} disabled={!(e != null && e.from)}>
Apply
</Button>
</div>
</PopoverContent>
</C_ql>);
}

export function Un({ value: e, onChange: n, className: s }) {
  return (<div className={cn("flex items-center gap-4", s)}>
<span className="text-xs text-muted-foreground font-medium whitespace-nowrap">
Intelligence Type:
</span>
<RadioGroup value={e} onValueChange={(a) => n(a)} className="flex items-center gap-4">
<div className="flex items-center gap-1.5">
<RadioGroupItem value="external" id="intel-external" />
<Label htmlFor="intel-external" className="text-sm font-normal cursor-pointer">
External
</Label>
</div>
<div className="flex items-center gap-1.5">
<RadioGroupItem value="internal" id="intel-internal" />
<Label htmlFor="intel-internal" className="text-sm font-normal cursor-pointer">
Internal
</Label>
</div>
<div className="flex items-center gap-1.5">
<RadioGroupItem value="both" id="intel-both" />
<Label htmlFor="intel-both" className="text-sm font-normal cursor-pointer">
Both
</Label>
</div>
</RadioGroup>
</div>);
}

export const kf = [{ id: "discovered-1", name: "Thibault Boutherin", firm: "Morgan Stanley", coverageFocus: "Specialty Pharma, Oncology", activityLevel: "medium", lastUpdated: "Detected Sep 18, 2026", activeTopics: ["Pipeline", "Competitive Positioning", "Investor Sentiment"], status: "discovered", intelligenceType: "external" }, { id: "discovered-2", name: "Michael Leuchten", firm: "Jefferies", coverageFocus: "Biotech, Immunology", activityLevel: "low", lastUpdated: "Detected Sep 17, 2026", activeTopics: ["R&D", "Margins", "Competitive Positioning"], status: "discovered", intelligenceType: "external" }, { id: "review-1", name: "Emmanuel Papadakis", firm: "Deutsche Bank", coverageFocus: "Large Cap Healthcare", activityLevel: "high", lastUpdated: "Submitted Sep 16, 2026", activeTopics: ["Financials", "Guidance", "Strategy"], status: "sent_for_review", intelligenceType: "external" }, { id: "1", name: "James Quigley", firm: "Goldman Sachs", coverageFocus: "Large Cap Pharma, Biotech", activityLevel: "high", lastUpdated: "Updated Sep 13, 2026", activeTopics: ["Financials", "Margins", "Guidance", "Cost Structure"], status: "active", intelligenceType: "external" }, { id: "2", name: "Richard Vosser", firm: "JPMorgan", coverageFocus: "Global Pharma & Biotech", activityLevel: "high", lastUpdated: "Updated Sep 9, 2026", activeTopics: ["Pipeline", "Strategy", "R&D"], status: "active", intelligenceType: "external" }, { id: "3", name: "Shirley Tan", firm: "Barclays", coverageFocus: "Large-Cap Pharma, Healthcare Services", activityLevel: "medium", lastUpdated: "Updated Sep 7, 2026", activeTopics: ["Pharma", "Operations", "Market Share"], status: "active", intelligenceType: "external" }, { id: "4", name: "Matthew Weston", firm: "UBS", coverageFocus: "Global Pharma & Healthcare", activityLevel: "medium", lastUpdated: "Updated Sep 8, 2026", activeTopics: ["Investor Sentiment", "Messaging", "Competitive Positioning"], status: "active", intelligenceType: "external" }];

export const $0 = { 1: { name: "James Quigley", firm: "Goldman Sachs", specialty: "Large Cap Pharma, Biotech", activity: "High", lastUpdated: "Sep 13, 2026", focusAreas: ["Financials", "Margins", "Guidance", "Cost Structure"], primarySources: ["Earnings Calls", "Research Notes", "Social"], status: "active" }, 2: { name: "Richard Vosser", firm: "JPMorgan", specialty: "Global Pharma & Biotech", activity: "High", lastUpdated: "Sep 9, 2026", focusAreas: ["Pipeline", "Strategy", "R&D"], primarySources: ["Earnings Calls", "Research Notes", "Social"], status: "active" }, 3: { name: "Shirley Tan", firm: "Barclays", specialty: "Large-Cap Pharma, Healthcare Services", activity: "Medium", lastUpdated: "Sep 7, 2026", focusAreas: ["Pharma", "Operations", "Market Share"], primarySources: ["Earnings Calls", "Media", "Social"], status: "active" }, 4: { name: "Matthew Weston", firm: "UBS", specialty: "Global Pharma & Healthcare", activity: "Medium", lastUpdated: "Sep 8, 2026", focusAreas: ["Investor Sentiment", "Messaging", "Competitive Positioning"], primarySources: ["Earnings Calls", "Media", "Social"], status: "active" }, "discovered-1": { name: "Thibault Boutherin", firm: "Morgan Stanley", specialty: "Specialty Pharma, Oncology", activity: "Medium", lastUpdated: "Detected Sep 18, 2026", focusAreas: ["Pipeline", "Competitive Positioning", "Investor Sentiment"], primarySources: ["Earnings Calls", "Research Notes"], status: "discovered" }, "discovered-2": { name: "Michael Leuchten", firm: "Jefferies", specialty: "Biotech, Immunology", activity: "Low", lastUpdated: "Detected Sep 17, 2026", focusAreas: ["R&D", "Margins", "Competitive Positioning"], primarySources: ["Earnings Calls", "Research Notes"], status: "discovered" }, "review-1": { name: "Emmanuel Papadakis", firm: "Deutsche Bank", specialty: "Large Cap Healthcare", activity: "High", lastUpdated: "Submitted Sep 16, 2026", focusAreas: ["Financials", "Guidance", "Strategy"], primarySources: ["Earnings Calls", "Research Notes", "Media"], status: "sent_for_review" } };

export const W5 = { 1: [{ id: "1-1", source: "social", intelligenceType: "external", date: "Sep 13, 2026", content: `"Margins are the real debate right now. Execution has been strong, but investors will want clarity on what's structural vs cyclical going forward."`, topics: ["Margins", "Cost Structure"], attribution: "@JamesQuigley" }, { id: "1-2", source: "earnings_call", intelligenceType: "external", date: "Sep 12, 2026", content: `"Looking at the Immunology franchise, I'm curious about the trajectory of COSENTYX given the competitive dynamics we're seeing. Can you walk us through how you're thinking about market share retention as new entrants come to market?"`, topics: ["Pipeline", "Competitive Positioning"], attribution: "Q2 2026 Earnings Call" }, { id: "1-3", source: "research_note", intelligenceType: "external", date: "Sep 10, 2026", content: `In our updated coverage note, we highlight concerns around margin compression in the Innovative Medicines segment. Operating margins declined 80bps YoY, driven primarily by integration costs from recent acquisitions and supply chain normalization.

We maintain our Neutral rating but adjust our price target to reflect near-term headwinds. The long-term thesis remains intact pending successful execution of the Innovative Medicines pipeline.`, topics: ["Margins", "Pharma", "Financials"], attribution: "Goldman Sachs Research" }], 2: [{ id: "2-1", source: "earnings_call", intelligenceType: "external", date: "Sep 10, 2026", content: `"Can you help us understand how you're prioritizing assets across the pipeline, particularly where capital intensity is highest, and what trade-offs you're making longer term?"`, topics: ["Pipeline", "Capital Allocation"], attribution: "Q2 2026 Earnings Call" }, { id: "2-2", source: "research_note", intelligenceType: "external", date: "Sep 9, 2026", content: "The breadth of the pipeline supports long-term growth visibility. Execution discipline and sequencing of late-stage assets will ultimately determine value creation over the next cycle.", topics: ["Pipeline", "Long-Term Strategy"], attribution: "JPMorgan Research" }, { id: "2-3", source: "social", intelligenceType: "external", date: "Sep 6, 2026", content: '"Strong innovation engine, but R&D productivity and capital allocation discipline remain key investor focus areas."', topics: ["R&D", "Capital Allocation"], attribution: "LinkedIn" }], 3: [{ id: "3-1", source: "earnings_call", intelligenceType: "external", date: "Sep 10, 2026", content: '"Can you comment on market share trends across key franchises and how they differ by geography, particularly in faster-growing regions?"', topics: ["Market Share", "Pharma"], attribution: "Q2 2026 Earnings Call" }, { id: "3-2", source: "media", intelligenceType: "external", date: "Sep 7, 2026", content: "Procedure recovery is progressing across most categories, though variability remains between chronic and acute therapy areas.", topics: ["Prescription Volumes", "Segment Trends"], attribution: "Fierce Pharma" }, { id: "3-3", source: "social", intelligenceType: "external", date: "Sep 6, 2026", content: '"Execution looks solid, but share dynamics by geography still matter more than headline growth."', topics: ["Pharma", "Geographic Trends"], attribution: "@ShirleyTan" }], 4: [{ id: "4-1", source: "earnings_call", intelligenceType: "external", date: "Sep 10, 2026", content: '"How are you ensuring consistency in messaging across segments as competitive narratives continue to evolve?"', topics: ["Messaging", "Narrative Control"], attribution: "Q2 2026 Earnings Call" }, { id: "4-2", source: "media", intelligenceType: "external", date: "Sep 8, 2026", content: "Leadership clarity and tone are increasingly influencing investor confidence across the healthcare sector.", topics: ["Investor Sentiment", "Leadership Messaging"], attribution: "Financial Times" }, { id: "4-3", source: "social", intelligenceType: "external", date: "Sep 7, 2026", content: '"Narrative consistency is becoming just as important as fundamentals in this environment."', topics: ["Narrative Consistency", "Investor Sentiment"], attribution: "@MatthewWeston" }], "discovered-1": [{ id: "sc-1", source: "earnings_call", intelligenceType: "external", date: "Sep 17, 2026", content: `"I'm curious about how you're thinking about the competitive intensity in oncology, particularly as we see multiple late-stage assets approaching potential approvals. How should investors think about market share dynamics over the next 12\u201318 months?"`, topics: ["Pipeline", "Competitive Positioning"], attribution: "Peer Pharma Q2 2026 Earnings Call" }, { id: "sc-2", source: "research_note", intelligenceType: "external", date: "Sep 16, 2026", content: `"The oncology pipeline landscape is increasingly crowded, and Novartis's differentiation strategy will be closely watched by investors seeking clarity on durable positioning."

Morgan Stanley research note on sector competitive dynamics.`, topics: ["Competitive Positioning", "Investor Sentiment"], attribution: "Morgan Stanley Research" }, { id: "sc-3", source: "social", intelligenceType: "external", date: "Sep 15, 2026", content: '"Pipeline depth matters, but execution timelines and competitive read-throughs are what investors are really focused on right now."', topics: ["Pipeline", "Investor Sentiment"], attribution: "@SarahChenMS" }], "discovered-2": [{ id: "mt-1", source: "earnings_call", intelligenceType: "external", date: "Sep 16, 2026", content: '"Given the ongoing pressures on R&D productivity and margin sustainability, how should we think about the balance between investment intensity and near-term profitability?"', topics: ["R&D", "Margins"], attribution: "Immunology-focused Earnings Call" }, { id: "mt-2", source: "research_note", intelligenceType: "external", date: "Sep 15, 2026", content: `"Margin sustainability remains a key investor concern across the biotech sector, with differentiation increasingly tied to operational discipline rather than top-line growth alone."

Jefferies note on biotech sector dynamics.`, topics: ["Margins", "Competitive Positioning"], attribution: "Jefferies Research" }, { id: "mt-3", source: "social", intelligenceType: "external", date: "Sep 14, 2026", content: `"R&D productivity is the story no one wants to talk about, but it's driving sentiment more than any single pipeline readout."`, topics: ["R&D", "Investor Sentiment"], attribution: "LinkedIn" }], "review-1": [{ id: "jw-1", source: "earnings_call", intelligenceType: "external", date: "Sep 15, 2026", content: `"Can you walk us through how you're thinking about guidance visibility and the cadence of updates investors should expect over the coming quarters?"`, topics: ["Guidance", "Financials"], attribution: "Large Cap Healthcare Earnings Call" }, { id: "jw-2", source: "research_note", intelligenceType: "external", date: "Sep 14, 2026", content: `"Guidance clarity is becoming a differentiator for investor confidence, particularly among diversified pharma names navigating complex portfolio transitions."

Deutsche Bank research note on healthcare guidance practices.`, topics: ["Guidance", "Strategy"], attribution: "Deutsche Bank Research" }, { id: "jw-3", source: "media", intelligenceType: "external", date: "Sep 13, 2026", content: '"Investors are rewarding companies that provide clear, consistent guidance frameworks, even when near-term visibility is limited."', topics: ["Financials", "Investor Sentiment"], attribution: "Financial Times" }] };

export const bJ = ["Financials", "Margins", "Guidance", "Pipeline", "R&D", "Strategy", "Pharma", "Investor Sentiment", "Messaging", "Competitive Positioning"];

export const wJ = [{ value: "7", label: "Last 7 days" }, { value: "30", label: "Last 30 days" }, { value: "90", label: "Last 90 days" }];

export const Up = kf.map((e) => ({ id: e.id, name: e.name, firm: e.firm, coverageFocus: e.coverageFocus, activityLevel: e.activityLevel, lastUpdated: e.lastUpdated, activeTopics: e.activeTopics, status: e.status, intelligenceType: e.intelligenceType }));

export function J0({ label: e, selected: n, onClick: s }) {
  return (<button onClick={s} className={cn("px-3 py-1.5 rounded-full text-xs font-medium transition-colors whitespace-nowrap", n ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80")}>
{e}
</button>);
}

export function NJ() {
  const e = useNavigate(), [n, s] = React.useState(""), [a, r] = React.useState("all"), [i, o] = React.useState("all"), [l, c] = React.useState("all"), [u, m] = React.useState("30"), [p, h] = React.useState(void 0), [f, v] = React.useState([]), [x, y] = React.useState(null), [b, g] = React.useState(null), [j, w] = React.useState("external"), [C, P] = React.useState(/* @__PURE__ */ new Set()), [I, L] = React.useState(false), z = (_) => {
    m(_), h(void 0);
  }, R = (_) => {
    h(_), _ != null && _.from && m("");
  }, B = (_) => {
    v((q) => q.includes(_) ? q.filter((A) => A !== _) : [...q, _]);
  }, J = Up.filter((_) => {
    var pe;
    const q = _.name.toLowerCase().includes(n.toLowerCase()) || _.firm.toLowerCase().includes(n.toLowerCase()), A = a === "all" || _.firm === a, $ = i === "all" || _.activityLevel === i, W = l === "all" || _.status === l, ee = f.length === 0 || ((pe = _.activeTopics) == null ? void 0 : pe.some((Te) => f.includes(Te))), Q = j === "both" || _.intelligenceType === j;
    return q && A && $ && W && ee && Q;
  }), X = [...new Set(Up.map((_) => _.firm))], k = (_, q) => {
    P((A) => {
      const $ = new Set(A);
      return q ? $.add(_) : $.delete(_), $;
    });
  }, V = J.filter((_) => !_.status || _.status === "active"), F = (_) => {
    P(_ ? new Set(V.map((q) => q.id)) : /* @__PURE__ */ new Set());
  }, S = V.length > 0 && V.every((_) => C.has(_.id)), E = V.some((_) => C.has(_.id)) && !S, N = Up.filter((_) => C.has(_.id)), T = C.size > 0;
  return (<div className="flex-1 flex flex-col h-full overflow-hidden">
<div className="border-b border-border">
<div className="px-6 py-6 pr-6 max-w-[calc(100%-1.5rem)] flex items-center justify-between">
<div>
<div className="flex items-center gap-2 mb-1">
<UsersIcon className="h-5 w-5 text-muted-foreground" />
<h1 className="text-xl font-semibold text-foreground">
Analysts
</h1>
</div>
<p className="text-sm text-muted-foreground">
External analyst behavior, commentary, and questioning patterns
</p>
</div>
<Button variant="outline" size="sm" disabled={!T} onClick={() => L(true)} className="gap-2">
<DatabaseIcon className="h-4 w-4" />
Promote to Data Source
</Button>
</div>
</div>
<div className="p-4 pr-6 border-b border-border bg-muted/30 space-y-4">
<div className="flex items-center gap-3">
<div className="relative flex-1 max-w-md">
<SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
<Input placeholder="Search analysts by name or firm" value={n} onChange={(_) => s(_.target.value)} className="pl-9" />
</div>
<C_le value={a} onValueChange={r}>
<SelectTrigger className="w-36">
<C_ce placeholder="All Firms" />
</SelectTrigger>
<SelectContent>
<SelectItem value="all">
All Firms
</SelectItem>
{X.map((_) => (<SelectItem value={_} key={_}>
{_}
</SelectItem>))}
</SelectContent>
</C_le>
<C_le value={i} onValueChange={o}>
<SelectTrigger className="w-36">
<C_ce placeholder="All Activity" />
</SelectTrigger>
<SelectContent>
<SelectItem value="all">
All Activity
</SelectItem>
<SelectItem value="high">
High
</SelectItem>
<SelectItem value="medium">
Medium
</SelectItem>
<SelectItem value="low">
Low
</SelectItem>
</SelectContent>
</C_le>
<C_le value={l} onValueChange={c}>
<SelectTrigger className="w-40">
<C_ce placeholder="All Status" />
</SelectTrigger>
<SelectContent>
<SelectItem value="all">
All Status
</SelectItem>
<SelectItem value="active">
Active
</SelectItem>
<SelectItem value="discovered">
Discovered
</SelectItem>
<SelectItem value="sent_for_review">
Sent for review
</SelectItem>
</SelectContent>
</C_le>
</div>
<Un value={j} onChange={w} />
<div className="flex items-center gap-2">
<span className="text-xs text-muted-foreground font-medium">
Time:
</span>
<div className="flex items-center gap-1">
{wJ.map((_) => (<J0 label={_.label} selected={u === _.value && !(p != null && p.from)} onClick={() => z(_.value)} key={_.value} />))}
<C_dn dateRange={p} onDateRangeChange={R} onClear={() => m("30")} />
</div>
</div>
<div className="flex items-center gap-2">
<span className="text-xs text-muted-foreground font-medium">
Topics:
</span>
<div className="flex items-center gap-1 overflow-x-auto pb-1">
{bJ.map((_) => (<J0 label={_} selected={f.includes(_)} onClick={() => B(_)} key={_} />))}
</div>
</div>
</div>
<div className="px-4 pr-6 py-2 border-b border-border bg-background flex items-center gap-3">
<Checkbox checked={S} ref={(_) => {
    _ && (_.indeterminate = E);
  }} onCheckedChange={F} />
<span className="text-sm text-muted-foreground">
Select all (
{J.length}
{" in current view)"}
</span>
{T && (<span className="text-sm text-primary font-medium ml-auto">
{C.size}
{" selected"}
</span>)}
</div>
<div className="flex-1 overflow-y-auto p-4 pr-6">
<div className="space-y-3">
{J.length > 0 ? J.map((_) => (<Q$ analyst={_} showCheckbox selected={C.has(_.id)} onSelectChange={(q) => k(_.id, q)} onViewIntelligence={() => {
    e(`/gei/entities/analysts/${_.id}`);
  }} on360View={() => y(_)} key={_.id} />)) : (<div className="text-center py-12 text-muted-foreground">
No analysts found matching your criteria
</div>)}
</div>
</div>
<C_aJ analyst={x} onClose={() => y(null)} onPromote={(_) => {
    y(null), g(_);
  }} />
<C_iJ entity={b} entityType="analyst" onClose={() => g(null)} />
<C_jJ open={I} onClose={() => {
    L(false), P(/* @__PURE__ */ new Set());
  }} selectedAnalysts={N} appliedFilters={{ timeRange: u, topics: f, firms: a, activity: i }} />
</div>);
}

export function CJ({ company: e, onViewIntelligence: n, on360View: s, selected: a = false, onSelectChange: r, showCheckbox: i = false }) {
  var f;
  const o = { high: "text-primary bg-primary/10", medium: "text-amber-600 bg-amber-500/10", low: "text-muted-foreground bg-muted" }, l = { high: "High", medium: "Medium", low: "Low" }, c = { primary: "Primary Company", competitor: "Competitor" }, u = { primary: "text-primary bg-primary/10", competitor: "text-muted-foreground bg-muted" }, m = e.status === "discovered", p = e.status === "sent_for_review", h = m || p;
  return (<div className={cn("w-full flex items-center gap-4 p-4 rounded-lg border bg-card", "transition-all duration-200", a ? "border-primary/50 bg-primary/5" : "border-border hover:border-primary/30 hover:shadow-sm")}>
{i && (<Checkbox checked={h ? false : a} onCheckedChange={(v) => r == null ? void 0 : r(v === true)} className="shrink-0" disabled={h} />)}
<div className="flex-1 min-w-0">
<div className="flex items-center gap-3 mb-1">
<h3 className="text-sm font-semibold text-foreground">
{e.name}
</h3>
{e.status && e.status !== "active" && (<Om status={e.status} />)}
</div>
<Badge variant="outline" className={cn("text-xs font-normal", u[e.companyType])}>
{c[e.companyType]}
</Badge>
</div>
<div className="flex-1 flex items-center gap-1.5 justify-center">
{(f = e.activeTopics) == null ? void 0 : f.slice(0, 4).map((v) => (<Badge variant="secondary" className="text-xs font-normal px-2 py-0.5" key={v}>
{v}
</Badge>))}
</div>
<div className="flex items-center gap-4">
<div className="flex flex-col items-end gap-1">
<div className={cn("inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium", o[e.activityLevel])}>
<ActivityIcon className="h-3 w-3" />
{l[e.activityLevel]}
</div>
<span className="text-xs text-muted-foreground">
{e.lastUpdated}
</span>
</div>
<div className="flex items-center gap-2">
<Button size="sm" onClick={(v) => {
    v.stopPropagation(), n();
  }} className="text-xs h-8">
<EyeIcon className="h-3.5 w-3.5 mr-1.5" />
View Intelligence
</Button>
<Button variant="ghost" size="sm" onClick={(v) => {
    v.stopPropagation(), s();
  }} className="text-xs h-8 text-muted-foreground hover:text-foreground">
<CompassIcon className="h-3.5 w-3.5 mr-1.5" />
360° View
</Button>
</div>
</div>
</div>);
}

export const B0 = { 1: { overview: `Novartis is a global innovative medicines company focused on cardiovascular, immunology, neuroscience, and oncology. Market positioning reflects long-term stability, diversified revenue streams, and a strong balance sheet.

Recent external commentary focuses on Immunology performance, pipeline optionality, pricing pressure in select geographies, and reputational resilience amid drug pricing narratives.`, focusAreas: ["Financials", "Guidance", "Pipeline", "Investor Sentiment", "Messaging", "Competitive Positioning"], earningsThemes: [{ theme: "Immunology as growth pillar", context: "Management reiterated long-term confidence despite near-term pricing pressure" }, { theme: "Disciplined cost control", context: "Emphasized as offset to external volatility" }, { theme: "Pipeline optionality", context: "Positioned as key lever for future growth" }], clinicalSignals: [{ area: "Immunology", detail: "Near-term performance reflects pricing pressure and slower uptake in select geographies" }, { area: "Pipeline", detail: "Optionality emphasized as offset to market volatility" }], perceptionSignals: [{ source: "Sell-side research", signal: "Investors seeking clearer articulation around pipeline inflection points, particularly in Immunology" }, { source: "Media coverage", signal: "Drug pricing narratives resurfacing alongside reputational resilience questions" }, { source: "Market activity", signal: "Shares moved lower following peer earnings with sector-wide read-through cited" }], narrativePatterns: ["Pipeline visibility and inflection point cadence under scrutiny", "Competitive intensity in Immunology reshaping expectations", "Reputational resilience and leadership messaging consistency questioned", "Balance sheet strength remains unquestioned"], timeline: [{ date: "Sep 15, 2026", activity: "Sell-side research note on pipeline visibility" }, { date: "Sep 14, 2026", activity: "Q2 2026 earnings call with Immunology focus" }, { date: "Aug 22, 2026", activity: "Media coverage on reputational concerns" }, { date: "Aug 3, 2026", activity: "Stock movement following peer earnings" }] }, 2: { overview: `AbbVie is a research-based biopharmaceutical company with a strong presence in immunology, oncology, aesthetics, and neuroscience. Market positioning reflects successful navigation of the Humira biosimilar cliff through portfolio diversification.

External commentary centers on continued Immunology strength, lifecycle management strategies, and execution discipline relative to peers navigating complex transitions.`, focusAreas: ["Pipeline", "Strategy", "Competitive Positioning", "Execution Risk", "Investor Sentiment"], earningsThemes: [{ theme: "Immunology strength", context: "Confidence in lifecycle management and next-generation assets" }, { theme: "Execution discipline", context: "Reinforcing investor perception relative to peers" }, { theme: "Portfolio durability", context: "Sustaining momentum beyond current flagship products" }], clinicalSignals: [{ area: "Immunology", detail: "Next-generation assets positioned to sustain momentum" }, { area: "Lifecycle management", detail: "Strategies emphasized for portfolio durability" }], perceptionSignals: [{ source: "Sell-side research", signal: "Execution discipline narrative reinforced, particularly vs peers in transition" }, { source: "Media coverage", signal: "Immunology franchise cited as benchmark with clarity in communication" }, { source: "Investor sentiment", signal: "Confidence in consistency of delivery" }], narrativePatterns: ["Execution discipline as differentiator vs transitioning peers", "Immunology franchise as industry benchmark", "Clarity in communication and consistency in delivery emphasized", "Next-generation assets sustaining momentum narrative"], timeline: [{ date: "Sep 17, 2026", activity: "Post-earnings analyst note on execution vs peers" }, { date: "Sep 16, 2026", activity: "Q2 2026 earnings call on Immunology strategy" }, { date: "Aug 10, 2026", activity: "Industry media on Immunology leadership positioning" }] }, 3: { overview: `Amgen is a biotechnology company focused on human therapeutics, with established franchises in inflammation, oncology, and cardiovascular disease. Market positioning reflects innovation capability and disciplined capital allocation.

Recent external discussion emphasizes balanced approach to innovation, strong narrative control reputation, and positive pipeline reception despite competitive landscape.`, focusAreas: ["Strategy", "Pipeline", "Messaging", "Investor Sentiment"], earningsThemes: [{ theme: "Balanced innovation approach", context: "Pipeline positioned as scientifically differentiated and commercially scalable" }, { theme: "Operational rigor", context: "Emphasized alongside innovation focus" }], clinicalSignals: [{ area: "Pipeline", detail: "Updates broadly well-received, reinforcing confidence" }, { area: "Therapeutic landscape", detail: "Competitive dynamics acknowledged" }], perceptionSignals: [{ source: "Sell-side research", signal: "Leadership team viewed as adept at managing perception during scrutiny" }, { source: "Media coverage", signal: "Pipeline updates broadly well-received" }, { source: "Investor sentiment", signal: "Confidence reinforced despite competitive therapeutic landscape" }], narrativePatterns: ["Strong narrative control reputation among analysts", "Scientific differentiation and commercial scalability emphasized", "Perception management during heightened scrutiny", "Pipeline confidence despite competitive dynamics"], timeline: [{ date: "Sep 10, 2026", activity: "Analyst note on narrative control and perception" }, { date: "Sep 9, 2026", activity: "Q2 2026 earnings on innovation and rigor" }, { date: "Jul 28, 2026", activity: "Media recap of pipeline update reception" }] }, 4: { overview: `Eli Lilly is a global pharmaceutical company with leading positions in diabetes, obesity, and neuroscience. Market positioning reflects innovation leadership with sustained demand momentum.

External narrative is dominated by disciplined execution across commercial and R&D functions, favorable investor sentiment, and confidence in management's ability to translate innovation into durable growth.`, focusAreas: ["Financials", "Execution Risk", "Investor Sentiment", "Strategy", "Guidance"], earningsThemes: [{ theme: "Sustained demand momentum", context: "Recent performance framed as evidence of disciplined execution" }, { theme: "Commercial and R&D execution", context: "Discipline emphasized across both functions" }], clinicalSignals: [{ area: "Innovation", detail: "Management ability to translate into durable growth highlighted" }, { area: "Execution", detail: "Disciplined approach across commercial and R&D" }], perceptionSignals: [{ source: "Sell-side research", signal: "Favorable sentiment driven by confidence in management execution" }, { source: "Market activity", signal: "Shares outperformed broader pharma index" }, { source: "Investor sentiment", signal: "Innovation to durable growth translation confidence" }], narrativePatterns: ["Disciplined execution as core differentiator", "Innovation translating to durable growth", "Management credibility driving favorable sentiment", "Outperformance relative to pharma index"], timeline: [{ date: "Sep 12, 2026", activity: "Analyst research on investor sentiment drivers" }, { date: "Sep 11, 2026", activity: "Q2 2026 earnings on execution discipline" }, { date: "Aug 18, 2026", activity: "Market commentary on index outperformance" }] }, 5: { overview: `Pfizer is a global pharmaceutical company with portfolios spanning vaccines, oncology, inflammation, and rare disease. Market positioning reflects post-peak revenue normalization with strategic realignment efforts underway.

External commentary focuses on near-term revenue headwinds, execution against strategic priorities, and leadership messaging reflecting a recalibration phase.`, focusAreas: ["Financials", "Pipeline", "Execution Risk", "Investor Sentiment", "Messaging", "Strategy"], earningsThemes: [{ theme: "Revenue headwinds", context: "Near-term challenges acknowledged by management" }, { theme: "Strategic realignment", context: "Renewed focus on pipeline productivity" }, { theme: "Recalibration phase", context: "Leadership working to re-anchor long-term equity narrative" }], clinicalSignals: [{ area: "Pipeline", detail: "Productivity focus emphasized in strategic realignment" }, { area: "Strategic priorities", detail: "Execution against stated priorities under scrutiny" }], perceptionSignals: [{ source: "Sell-side research", signal: "Cautious stance as Pfizer navigates post-peak normalization" }, { source: "Media coverage", signal: "Leadership messaging reflects recalibration phase" }, { source: "Investor sentiment", signal: "Attention centered on execution against strategic priorities" }], narrativePatterns: ["Post-peak revenue normalization driving caution", "Execution against strategic priorities as key focus", "Leadership recalibration phase acknowledged", "Long-term equity narrative re-anchoring in progress"], timeline: [{ date: "Sep 9, 2026", activity: "Analyst note on execution risk and sentiment" }, { date: "Sep 8, 2026", activity: "Q2 2026 earnings on strategic realignment" }, { date: "Aug 5, 2026", activity: "Media article on leadership messaging recalibration" }] }, "discovered-1": { overview: `Vertex Pharmaceuticals is a biotechnology company with leadership positions in cystic fibrosis and emerging presence in gene therapy and rare disease. Market positioning reflects pipeline execution strength and strategic clarity.

Vertex has been referenced in competitive discussions related to Immunology and rare disease pipeline advancements, with analysts drawing comparisons to Novartis's approach to innovation and lifecycle management.`, focusAreas: ["Pipeline", "Clinical Data", "Strategy", "Competitive Positioning"], earningsThemes: [{ theme: "Pipeline execution strength", context: "Transition from legacy CF assets to gene therapy emphasized" }, { theme: "Strategic clarity", context: "Clear communication around portfolio priorities" }], clinicalSignals: [{ area: "Gene therapy", detail: "Emerging programs driving investor attention" }, { area: "Rare disease", detail: "Pipeline depth providing competitive benchmark" }], perceptionSignals: [{ source: "Sell-side research", signal: "Pipeline depth and execution cited as competitive benchmark vs Novartis" }, { source: "Media coverage", signal: "Strategic clarity referenced in sector comparisons" }], narrativePatterns: ["Pipeline execution as differentiator", "Gene therapy transition driving investor focus", "Competitive benchmark for rare disease positioning"], timeline: [{ date: "Sep 17, 2026", activity: "Q2 2026 earnings on pipeline transition" }, { date: "Sep 16, 2026", activity: "Analyst note on competitive dynamics" }, { date: "Sep 15, 2026", activity: "Media coverage on strategic positioning" }] }, "discovered-2": { overview: `Regeneron is a biotechnology company with strong positions in immunology, oncology, and rare disease. Market positioning reflects R&D productivity and regulatory execution strength.

Regeneron has been mentioned in relation to regulatory momentum and late-stage pipeline comparisons, particularly relevant to Novartis's immunology positioning and differentiation strategy.`, focusAreas: ["R&D", "Regulatory", "Competitive Positioning"], earningsThemes: [{ theme: "Regulatory momentum", context: "Strong track record on label expansion and approvals" }, { theme: "Franchise durability", context: "Focus on lifecycle management of core assets" }], clinicalSignals: [{ area: "Immunology", detail: "Late-stage pipeline providing competitive read-through" }, { area: "Label expansion", detail: "Regulatory strategy as competitive benchmark" }], perceptionSignals: [{ source: "Sell-side research", signal: "R&D productivity compared to Novartis immunology pipeline" }, { source: "Media coverage", signal: "Regulatory strategy highlighted as industry benchmark" }], narrativePatterns: ["R&D productivity as competitive differentiator", "Regulatory execution driving investor confidence", "Immunology positioning benchmark for Novartis"], timeline: [{ date: "Sep 16, 2026", activity: "Q2 2026 earnings on regulatory momentum" }, { date: "Sep 15, 2026", activity: "Analyst note on R&D productivity" }, { date: "Sep 14, 2026", activity: "Media coverage on regulatory strategy" }] } };

export const SJ = [{ id: "overview", label: "Company Overview", icon: Building2Icon }, { id: "topics", label: "Key Topics & Areas of Focus", icon: TargetIcon }, { id: "earnings", label: "Earnings & Financial Commentary", icon: TrendingUpIcon }, { id: "clinical", label: "Clinical, Regulatory & Pipeline Signals", icon: BeakerIcon }, { id: "perception", label: "Media, Analyst & Investor Perception", icon: MessageSquareIcon }, { id: "narratives", label: "Narrative Patterns", icon: LayersIcon }, { id: "timeline", label: "Timeline of Activity", icon: ClockIcon }];

export function G5({ company: e, onClose: n }) {
  const s = useNavigate();
  if (!e) return null;
  const a = () => {
    n(), s(`/gei/entities/companies/${e.id}?tab=leadership-claims`);
  }, r = { high: "text-primary bg-primary/10 border-primary/20", medium: "text-amber-600 bg-amber-500/10 border-amber-500/20", low: "text-muted-foreground bg-muted border-border" }, i = { primary: "Primary Company", competitor: "Competitor" }, o = B0[e.id] || B0[1], l = (c) => {
    switch (c) {
      case "overview":
        return (<p className="text-xs text-muted-foreground whitespace-pre-line leading-relaxed">
{o.overview}
</p>);
      case "topics":
        return (<div className="flex flex-wrap gap-1.5">
{o.focusAreas.map((u) => (<span className="px-2 py-1 bg-muted text-xs text-muted-foreground rounded-full" key={u}>
{u}
</span>))}
</div>);
      case "earnings":
        return (<div className="space-y-3">
{o.earningsThemes.map((u, m) => (<div className="border-l-2 border-border pl-3" key={m}>
<p className="text-xs font-medium text-foreground mb-0.5">
{u.theme}
</p>
<p className="text-xs text-muted-foreground">
{u.context}
</p>
</div>))}
</div>);
      case "clinical":
        return (<div className="space-y-3">
{o.clinicalSignals.map((u, m) => (<div className="border-l-2 border-border pl-3" key={m}>
<p className="text-xs font-medium text-foreground mb-0.5">
{u.area}
</p>
<p className="text-xs text-muted-foreground">
{u.detail}
</p>
</div>))}
</div>);
      case "perception":
        return (<div className="space-y-3">
{o.perceptionSignals.map((u, m) => (<div className="border-l-2 border-border pl-3" key={m}>
<p className="text-xs text-muted-foreground mb-0.5">
{u.source}
</p>
<p className="text-xs text-foreground/80">
{u.signal}
</p>
</div>))}
</div>);
      case "narratives":
        return (<ul className="space-y-1.5">
{o.narrativePatterns.map((u, m) => (<li className="text-xs text-muted-foreground flex items-start gap-2" key={m}>
<span className="text-primary mt-1">
•
</span>
{u}
</li>))}
</ul>);
      case "timeline":
        return (<div className="space-y-2">
{o.timeline.map((u, m) => (<div className="flex items-start gap-3" key={m}>
<span className="text-xs text-muted-foreground whitespace-nowrap min-w-[85px]">
{u.date}
</span>
<span className="text-xs text-foreground/80">
{u.activity}
</span>
</div>))}
</div>);
      default:
        return null;
    }
  };
  return (<Sheet open={!!e} onOpenChange={() => n()}>
<SheetContent className="w-full sm:max-w-lg overflow-y-auto">
<SheetHeader className="pb-4">
<div className="flex items-center gap-2">
<SheetTitle className="text-lg font-semibold">
Company 360° Intelligence View
</SheetTitle>
{(e.status === "discovered" || e.status === "sent_for_review") && (<span className="px-2 py-0.5 rounded text-xs bg-muted text-muted-foreground">
Tracking entity
</span>)}
</div>
</SheetHeader>
<div className="bg-muted/50 rounded-lg p-4 mb-6">
<div className="flex items-start justify-between mb-3">
<div>
<h2 className="text-lg font-semibold text-foreground">
{e.name}
</h2>
<div className="flex items-center gap-2 mt-1">
<span className={cn("text-xs px-2 py-0.5 rounded-full", e.companyType === "primary" ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground")}>
{i[e.companyType]}
</span>
</div>
</div>
<div className={cn("inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border", r[e.activityLevel])}>
<ActivityIcon className="h-3 w-3" />
{e.activityLevel === "high" ? "High Activity" : e.activityLevel === "medium" ? "Medium Activity" : "Low Activity"}
</div>
</div>
</div>
<div className="space-y-4">
{SJ.map((c) => {
    const C_u = c.icon;
    return (<div className="border border-border rounded-lg p-4" key={c.id}>
<div className="flex items-center gap-2 mb-3">
<C_u className="h-4 w-4 text-muted-foreground" />
<h3 className="text-sm font-semibold text-foreground">
{c.label}
</h3>
</div>
{l(c.id)}
</div>);
  })}
</div>
<C_kJ entityId={e.id} entityType="company" onViewAllClaims={a} />
<TJ entityId={`company-${e.id}`} />
<Separator className="my-6" />
<p className="text-xs text-muted-foreground text-center">
For full intelligence and curation, use View Intelligence
</p>
</SheetContent>
</Sheet>);
}

export function C_kJ({ entityId: e, entityType: n, onViewAllClaims: s }) {
  const a = zg(e, n);
  return a.totalClaims === 0 ? (<div className="border border-border rounded-lg p-4">
<div className="flex items-center gap-2 mb-3">
<ChartColumnIcon className="h-4 w-4 text-muted-foreground" />
<h3 className="text-sm font-semibold text-foreground">
Claims Snapshot (12 months)
</h3>
</div>
<p className="text-xs text-muted-foreground">
No leadership claims recorded for this entity
</p>
</div>) : (<div className="border border-border rounded-lg p-4">
<div className="flex items-center gap-2 mb-3">
<ChartColumnIcon className="h-4 w-4 text-muted-foreground" />
<h3 className="text-sm font-semibold text-foreground">
Claims Snapshot (12 months)
</h3>
</div>
<div className="grid grid-cols-3 gap-4 mb-3">
<div>
<p className="text-xs text-muted-foreground">
Total Claims
</p>
<p className="text-lg font-semibold text-foreground">
{a.totalClaims}
</p>
</div>
<div>
<p className="text-xs text-muted-foreground">
Open Claims
</p>
<p className="text-lg font-semibold text-foreground">
{a.openClaims}
</p>
</div>
<div>
<p className="text-xs text-muted-foreground">
Last Claim
</p>
<p className="text-sm font-medium text-foreground">
{a.lastClaimDate}
</p>
</div>
</div>
<button onClick={s} className="text-xs text-primary hover:underline flex items-center gap-1">
View All Claims
<ArrowRightIcon className="h-3 w-3" />
</button>
</div>);
}

export function TJ({ entityId: e }) {
  const n = Lo(e), a = { on_message: { icon: CircleCheckBigIcon, iconColor: "text-emerald-600", bgColor: "bg-emerald-500/10" }, careful_framing: { icon: TriangleAlertIcon, iconColor: "text-amber-600", bgColor: "bg-amber-500/10" }, contradiction_risk: { icon: CircleAlertIcon, iconColor: "text-red-600", bgColor: "bg-red-500/10" } }[n.status], C_r = a.icon;
  return (<div className="border border-border rounded-lg p-4">
<div className="flex items-center gap-2 mb-3">
<FileTextIcon className="h-4 w-4 text-muted-foreground" />
<h3 className="text-sm font-semibold text-foreground">
Narrative Continuity
</h3>
</div>
<div className={cn("rounded-lg p-3 mb-3", a.bgColor)}>
<div className="flex items-start gap-2">
<C_r className={cn("h-4 w-4 mt-0.5", a.iconColor)} />
<div>
<p className={cn("text-sm font-medium", a.iconColor)}>
{n.label}
</p>
<p className="text-xs text-muted-foreground mt-0.5">
{n.description}
</p>
</div>
</div>
</div>
<div className="flex items-center gap-1.5 text-xs text-muted-foreground">
<InfoIcon className="h-3 w-3" />
<span>
Advisory only — not disclosure guidance
</span>
</div>
</div>);
}

export function PJ({ open: e, onClose: n, selectedCompanies: s, appliedFilters: a }) {
  const { toast: r } = useToast(), [i, o] = React.useState(""), [l, c] = React.useState(""), [u, m] = React.useState([]), [p, h] = React.useState(""), f = () => {
    p.trim() && !u.includes(p.trim()) && (m([...u, p.trim()]), h(""));
  }, v = (w) => {
    m(u.filter((C) => C !== w));
  }, x = (w) => {
    w.key === "Enter" && (w.preventDefault(), f());
  }, y = () => {
    i.trim() && (r({ title: "Company data source created successfully", description: `"${i}" with ${s.length} companies has been saved.` }), o(""), c(""), m([]), n());
  }, b = () => {
    o(""), c(""), m([]), n();
  }, g = (w) => ({ 7: "Last 7 days", 30: "Last 30 days", 90: "Last 90 days" })[w] || w, j = (w) => ({ primary: "Primary Company", competitor: "Competitor" })[w] || w;
  return (<C_ot open={e} onOpenChange={b}>
<DialogContent className="sm:max-w-lg">
<DialogHeader>
<DialogTitle className="flex items-center gap-2">
<DatabaseIcon className="h-5 w-5 text-primary" />
Create Company Data Source
</DialogTitle>
<DialogDescription>
Save this set of companies as a governed external data source for use across IR Co-Pilot modules.
</DialogDescription>
</DialogHeader>
<div className="space-y-5 py-2">
<div className="space-y-2">
<Label htmlFor="source-name">
{"Data Source Name "}
<span className="text-destructive">
*
</span>
</Label>
<Input id="source-name" placeholder="Key Competitors – Large Cap Pharma" value={i} onChange={(w) => o(w.target.value)} />
</div>
<div className="space-y-2">
<Label htmlFor="source-description">
Description
</Label>
<Textarea id="source-description" placeholder="Briefly describe the purpose or usage of this company source" value={l} onChange={(w) => c(w.target.value)} rows={2} />
</div>
<div className="space-y-2">
<div className="flex items-center gap-2">
<Building2Icon className="h-4 w-4 text-muted-foreground" />
<Label>
Included Companies
</Label>
<Badge variant="secondary" className="ml-auto text-xs">
{s.length}
{" selected"}
</Badge>
</div>
<ScrollArea className="h-28 rounded-md border bg-muted/30 p-3">
<div className="space-y-2">
{s.map((w) => (<div className="flex items-center gap-2 text-sm" key={w.id}>
<span className="font-medium text-foreground">
{w.name}
</span>
<Badge variant="outline" className="text-xs font-normal">
{j(w.companyType)}
</Badge>
</div>))}
</div>
</ScrollArea>
</div>
<div className="space-y-2">
<div className="flex items-center gap-2">
<FilterIcon className="h-4 w-4 text-muted-foreground" />
<Label>
Applied Filters
</Label>
</div>
<div className="rounded-md border bg-muted/30 p-3 text-sm space-y-1.5">
<div className="flex items-center justify-between">
<span className="text-muted-foreground">
Time Range:
</span>
<span className="text-foreground">
{g(a.timeRange)}
</span>
</div>
<div className="flex items-center justify-between">
<span className="text-muted-foreground">
Topics:
</span>
<span className="text-foreground">
{a.topics.length > 0 ? a.topics.join(", ") : "All Topics"}
</span>
</div>
<div className="flex items-center justify-between">
<span className="text-muted-foreground">
Company Type:
</span>
<span className="text-foreground">
{a.companyType === "all" ? "All Types" : j(a.companyType)}
</span>
</div>
<div className="flex items-center justify-between">
<span className="text-muted-foreground">
Activity:
</span>
<span className="text-foreground">
{a.activity === "all" ? "All Activity" : a.activity.charAt(0).toUpperCase() + a.activity.slice(1)}
</span>
</div>
</div>
</div>
<div className="space-y-2">
<div className="flex items-center gap-2">
<TagIcon className="h-4 w-4 text-muted-foreground" />
<Label htmlFor="tags">
Tags (Optional)
</Label>
</div>
<div className="flex items-center gap-2">
<Input id="tags" placeholder="Add a tag and press Enter" value={p} onChange={(w) => h(w.target.value)} onKeyDown={x} className="flex-1" />
<Button type="button" variant="outline" size="sm" onClick={f} disabled={!p.trim()}>
Add
</Button>
</div>
{u.length > 0 && (<div className="flex flex-wrap gap-1.5 pt-1">
{u.map((w) => (<Badge variant="secondary" className="pl-2 pr-1 py-1 gap-1" key={w}>
{w}
<button onClick={() => v(w)} className="ml-0.5 hover:bg-muted rounded-full p-0.5">
<XIcon className="h-3 w-3" />
</button>
</Badge>))}
</div>)}
</div>
</div>
<div className="flex justify-end gap-2 pt-2">
<Button variant="outline" onClick={b}>
Cancel
</Button>
<Button onClick={y} disabled={!i.trim()}>
Create Data Source
</Button>
</div>
</DialogContent>
</C_ot>);
}

export const q5 = [{ id: "discovered-1", name: "Vertex Pharmaceuticals", companyType: "competitor", activityLevel: "medium", lastUpdated: "Detected Sep 18, 2026", activeTopics: ["Pipeline", "Clinical Data", "Strategy"], status: "discovered", intelligenceType: "external" }, { id: "discovered-2", name: "Regeneron", companyType: "competitor", activityLevel: "high", lastUpdated: "Detected Sep 17, 2026", activeTopics: ["R&D", "Regulatory", "Competitive Positioning"], status: "discovered", intelligenceType: "external" }, { id: "1", name: "Novartis", companyType: "primary", activityLevel: "high", lastUpdated: "Updated Sep 15, 2026", activeTopics: ["Financials", "Guidance", "Pipeline", "Investor Sentiment"], status: "active", intelligenceType: "internal" }, { id: "2", name: "AbbVie", companyType: "competitor", activityLevel: "high", lastUpdated: "Updated Sep 17, 2026", activeTopics: ["Pipeline", "Strategy", "Competitive Positioning"], status: "active", intelligenceType: "external" }, { id: "3", name: "Amgen", companyType: "competitor", activityLevel: "medium", lastUpdated: "Updated Sep 10, 2026", activeTopics: ["Strategy", "Pipeline", "Investor Sentiment"], status: "active", intelligenceType: "external" }, { id: "4", name: "Eli Lilly", companyType: "competitor", activityLevel: "high", lastUpdated: "Updated Sep 12, 2026", activeTopics: ["Financials", "Execution Risk", "Strategy"], status: "active", intelligenceType: "external" }, { id: "5", name: "Pfizer", companyType: "competitor", activityLevel: "medium", lastUpdated: "Updated Sep 9, 2026", activeTopics: ["Financials", "Pipeline", "Execution Risk", "Messaging"], status: "active", intelligenceType: "external" }];

export const EJ = ["Financials", "Margins", "Guidance", "Pipeline", "Clinical Data", "Regulatory", "Strategy", "Investor Sentiment", "Competitive Positioning", "Execution Risk"];

export const MJ = [{ value: "7", label: "Last 7 days" }, { value: "30", label: "Last 30 days" }, { value: "90", label: "Last 90 days" }];

export const V0 = q5.map((e) => ({ id: e.id, name: e.name, companyType: e.companyType, activityLevel: e.activityLevel, lastUpdated: e.lastUpdated, activeTopics: e.activeTopics, status: e.status, intelligenceType: e.intelligenceType }));

export function U0({ label: e, selected: n, onClick: s }) {
  return (<button onClick={s} className={cn("px-3 py-1.5 rounded-full text-xs font-medium transition-colors whitespace-nowrap", n ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80")}>
{e}
</button>);
}

export function RJ() {
  const e = useNavigate(), [n, s] = React.useState(""), [a, r] = React.useState("all"), [i, o] = React.useState("all"), [l, c] = React.useState("all"), [u, m] = React.useState("30"), [p, h] = React.useState(void 0), [f, v] = React.useState([]), [x, y] = React.useState(/* @__PURE__ */ new Set()), [b, g] = React.useState(null), [j, w] = React.useState(false), [C, P] = React.useState("external"), I = (N) => {
    m(N), h(void 0);
  }, L = (N) => {
    h(N), N != null && N.from && m("");
  }, z = (N) => {
    v((T) => T.includes(N) ? T.filter((_) => _ !== N) : [...T, N]);
  }, R = V0.filter((N) => {
    var ee;
    const T = N.name.toLowerCase().includes(n.toLowerCase()), _ = a === "all" || N.companyType === a, q = i === "all" || N.activityLevel === i, A = l === "all" || N.status === l, $ = f.length === 0 || ((ee = N.activeTopics) == null ? void 0 : ee.some((Q) => f.includes(Q))), W = C === "both" || N.intelligenceType === C;
    return T && _ && q && A && $ && W;
  }), B = (N, T) => {
    y((_) => {
      const q = new Set(_);
      return T ? q.add(N) : q.delete(N), q;
    });
  }, J = R.filter((N) => !N.status || N.status === "active"), X = (N) => {
    y(N ? new Set(J.map((T) => T.id)) : /* @__PURE__ */ new Set());
  }, k = J.length > 0 && J.every((N) => x.has(N.id)), V = J.some((N) => x.has(N.id)) && !k, F = x.size > 0, S = (N) => {
    e(`/gei/entities/companies/${N}`);
  }, E = (N) => {
    g(N);
  };
  return (<div className="flex-1 flex flex-col h-full overflow-hidden">
<div className="border-b border-border">
<div className="px-6 py-6 pr-6 max-w-[calc(100%-1.5rem)] flex items-center justify-between">
<div>
<div className="flex items-center gap-2 mb-1">
<Building2Icon className="h-5 w-5 text-muted-foreground" />
<h1 className="text-xl font-semibold text-foreground">
{"Companies & Competitors"}
</h1>
</div>
<p className="text-sm text-muted-foreground">
Competitive moves and perception signals across industry peers
</p>
</div>
<Button variant="outline" size="sm" disabled={!F} onClick={() => w(true)} className="gap-2">
<DatabaseIcon className="h-4 w-4" />
Promote to Data Source
</Button>
</div>
</div>
<div className="p-4 pr-6 border-b border-border bg-muted/30 space-y-4">
<div className="flex items-center gap-3">
<div className="relative flex-1 max-w-md">
<SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
<Input placeholder="Search companies by name" value={n} onChange={(N) => s(N.target.value)} className="pl-9" />
</div>
<C_le value={a} onValueChange={r}>
<SelectTrigger className="w-40">
<C_ce placeholder="All Types" />
</SelectTrigger>
<SelectContent>
<SelectItem value="all">
All Types
</SelectItem>
<SelectItem value="primary">
Primary Company
</SelectItem>
<SelectItem value="competitor">
Competitor
</SelectItem>
</SelectContent>
</C_le>
<C_le value={i} onValueChange={o}>
<SelectTrigger className="w-36">
<C_ce placeholder="All Activity" />
</SelectTrigger>
<SelectContent>
<SelectItem value="all">
All Activity
</SelectItem>
<SelectItem value="high">
High
</SelectItem>
<SelectItem value="medium">
Medium
</SelectItem>
<SelectItem value="low">
Low
</SelectItem>
</SelectContent>
</C_le>
<C_le value={l} onValueChange={c}>
<SelectTrigger className="w-40">
<C_ce placeholder="All Status" />
</SelectTrigger>
<SelectContent>
<SelectItem value="all">
All Status
</SelectItem>
<SelectItem value="active">
Active
</SelectItem>
<SelectItem value="discovered">
Discovered
</SelectItem>
<SelectItem value="sent_for_review">
Sent for review
</SelectItem>
</SelectContent>
</C_le>
</div>
<Un value={C} onChange={P} />
<div className="flex items-center gap-2">
<span className="text-xs text-muted-foreground font-medium">
Time:
</span>
<div className="flex items-center gap-1">
{MJ.map((N) => (<U0 label={N.label} selected={u === N.value && !(p != null && p.from)} onClick={() => I(N.value)} key={N.value} />))}
<C_dn dateRange={p} onDateRangeChange={L} onClear={() => m("30")} />
</div>
</div>
<div className="flex items-center gap-2">
<span className="text-xs text-muted-foreground font-medium">
Topics:
</span>
<div className="flex items-center gap-1 overflow-x-auto pb-1">
{EJ.map((N) => (<U0 label={N} selected={f.includes(N)} onClick={() => z(N)} key={N} />))}
</div>
</div>
</div>
<div className="px-4 pr-6 py-2 border-b border-border bg-background flex items-center gap-3">
<Checkbox checked={k} ref={(N) => {
    N && (N.indeterminate = V);
  }} onCheckedChange={X} />
<span className="text-sm text-muted-foreground">
Select all (
{R.length}
{" in current view)"}
</span>
{F && (<span className="text-sm text-primary font-medium ml-auto">
{x.size}
{" selected"}
</span>)}
</div>
<div className="flex-1 overflow-y-auto p-4 pr-6">
<div className="space-y-3">
{R.length > 0 ? R.map((N) => (<CJ company={N} showCheckbox selected={x.has(N.id)} onSelectChange={(T) => B(N.id, T)} onViewIntelligence={() => S(N.id)} on360View={() => E(N)} key={N.id} />)) : (<div className="text-center py-12 text-muted-foreground">
<Building2Icon className="h-12 w-12 mx-auto mb-4 opacity-50" />
<p>
No companies match your filters
</p>
</div>)}
</div>
</div>
<G5 company={b} onClose={() => g(null)} />
<PJ open={j} onClose={() => {
    w(false), y(/* @__PURE__ */ new Set());
  }} selectedCompanies={V0.filter((N) => x.has(N.id))} appliedFilters={{ timeRange: u, topics: f, companyType: a, activity: i }} />
</div>);
}

export function IJ({ asset: e, onViewIntelligence: n, on360View: s, selected: a = false, onSelectChange: r, showCheckbox: i = false }) {
  var f;
  const o = { high: "text-primary bg-primary/10", medium: "text-amber-600 bg-amber-500/10", low: "text-muted-foreground bg-muted" }, l = { high: "High", medium: "Medium", low: "Low" }, c = { marketed: "Marketed Drug", pipeline: "Pipeline Asset", clinical: "Clinical-Stage Program" }, u = { marketed: "text-primary bg-primary/10", pipeline: "text-amber-600 bg-amber-500/10", clinical: "text-muted-foreground bg-muted" }, m = e.status === "discovered", p = e.status === "sent_for_review", h = m || p;
  return (<div className={cn("w-full flex items-center gap-4 p-4 rounded-lg border bg-card", "transition-all duration-200", a ? "border-primary/50 bg-primary/5" : "border-border hover:border-primary/30 hover:shadow-sm")}>
{i && (<Checkbox checked={h ? false : a} onCheckedChange={(v) => r == null ? void 0 : r(v === true)} className="shrink-0" disabled={h} />)}
<div className="flex-1 min-w-0 max-w-[200px]">
<div className="flex items-center gap-2 mb-0.5">
<h3 className="text-sm font-semibold text-foreground">
{e.name}
</h3>
{e.status && e.status !== "active" && (<Om status={e.status} />)}
<span className="text-xs text-muted-foreground">
(
{e.company}
)
</span>
</div>
<Badge variant="outline" className={cn("text-xs font-normal", u[e.assetType])}>
{c[e.assetType]}
</Badge>
</div>
<div className="flex-1 flex items-center gap-1.5 justify-center">
{(f = e.activeTopics) == null ? void 0 : f.slice(0, 4).map((v) => (<Badge variant="secondary" className="text-xs font-normal px-2 py-0.5" key={v}>
{v}
</Badge>))}
</div>
<div className="flex items-center gap-4">
<div className="flex flex-col items-end gap-1">
<div className={cn("inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium", o[e.activityLevel])}>
<ActivityIcon className="h-3 w-3" />
{l[e.activityLevel]}
</div>
<span className="text-xs text-muted-foreground">
{e.lastUpdated}
</span>
</div>
<div className="flex items-center gap-2">
<Button size="sm" onClick={(v) => {
    v.stopPropagation(), n();
  }} className="text-xs h-8">
<EyeIcon className="h-3.5 w-3.5 mr-1.5" />
View Intelligence
</Button>
<Button variant="ghost" size="sm" onClick={(v) => {
    v.stopPropagation(), s();
  }} className="text-xs h-8 text-muted-foreground hover:text-foreground">
<CompassIcon className="h-3.5 w-3.5 mr-1.5" />
360° View
</Button>
</div>
</div>
</div>);
}

export const AJ = { overview: "No detailed intelligence available for this asset.", focusAreas: [], clinicalThemes: [], regulatorySignals: [], perceptionSignals: [], narrativePatterns: [], timeline: [] };

export const DJ = [{ id: "overview", label: "Asset Overview", icon: PillIcon }, { id: "topics", label: "Key Topics & Areas of Focus", icon: TargetIcon }, { id: "clinical", label: "Clinical & Development Themes", icon: BeakerIcon }, { id: "regulatory", label: "Regulatory & Pipeline Signals", icon: TrendingUpIcon }, { id: "perception", label: "Media, Analyst & Investor Perception", icon: MessageSquareIcon }, { id: "narratives", label: "Narrative Patterns", icon: LayersIcon }, { id: "timeline", label: "Timeline of Activity", icon: ClockIcon }];

export function Q5({ asset: e, onClose: n }) {
  const s = useNavigate();
  if (!e) return null;
  const a = () => {
    n(), s(`/gei/entities/assets/${e.id}?tab=leadership-claims`);
  }, r = { high: "text-primary bg-primary/10 border-primary/20", medium: "text-amber-600 bg-amber-500/10 border-amber-500/20", low: "text-muted-foreground bg-muted border-border" }, i = { marketed: "Marketed Drug", pipeline: "Pipeline Asset", clinical: "Clinical-Stage Program" }, o = g$(e.id) || AJ, l = (c) => {
    switch (c) {
      case "overview":
        return (<p className="text-xs text-muted-foreground whitespace-pre-line leading-relaxed">
{o.overview}
</p>);
      case "topics":
        return (<div className="flex flex-wrap gap-1.5">
{o.focusAreas.map((u) => (<span className="px-2 py-1 bg-muted text-xs text-muted-foreground rounded-full" key={u}>
{u}
</span>))}
</div>);
      case "clinical":
        return (<div className="space-y-3">
{o.clinicalThemes.map((u, m) => (<div className="border-l-2 border-border pl-3" key={m}>
<p className="text-xs font-medium text-foreground mb-0.5">
{u.theme}
</p>
<p className="text-xs text-muted-foreground">
{u.context}
</p>
</div>))}
</div>);
      case "regulatory":
        return (<div className="space-y-3">
{o.regulatorySignals.map((u, m) => (<div className="border-l-2 border-border pl-3" key={m}>
<p className="text-xs font-medium text-foreground mb-0.5">
{u.area}
</p>
<p className="text-xs text-muted-foreground">
{u.detail}
</p>
</div>))}
</div>);
      case "perception":
        return (<div className="space-y-3">
{o.perceptionSignals.map((u, m) => (<div className="border-l-2 border-border pl-3" key={m}>
<p className="text-xs text-muted-foreground mb-0.5">
{u.source}
</p>
<p className="text-xs text-foreground/80">
{u.signal}
</p>
</div>))}
</div>);
      case "narratives":
        return (<ul className="space-y-1.5">
{o.narrativePatterns.map((u, m) => (<li className="text-xs text-muted-foreground flex items-start gap-2" key={m}>
<span className="text-primary mt-1">
•
</span>
{u}
</li>))}
</ul>);
      case "timeline":
        return (<div className="space-y-2">
{o.timeline.map((u, m) => (<div className="flex items-start gap-3" key={m}>
<span className="text-xs text-muted-foreground whitespace-nowrap min-w-[85px]">
{u.date}
</span>
<span className="text-xs text-foreground/80">
{u.activity}
</span>
</div>))}
</div>);
      default:
        return null;
    }
  };
  return (<Sheet open={!!e} onOpenChange={() => n()}>
<SheetContent className="w-full sm:max-w-lg overflow-y-auto">
<SheetHeader className="pb-4">
<div className="flex items-center gap-2">
<SheetTitle className="text-lg font-semibold">
Asset 360° Intelligence View
</SheetTitle>
{(e.status === "discovered" || e.status === "sent_for_review") && (<span className="px-2 py-0.5 rounded text-xs bg-muted text-muted-foreground">
Tracking entity
</span>)}
</div>
</SheetHeader>
<div className="bg-muted/50 rounded-lg p-4 mb-6">
<div className="flex items-start justify-between mb-3">
<div>
<h2 className="text-lg font-semibold text-foreground">
{e.name}
</h2>
<p className="text-sm text-muted-foreground mb-1">
{e.company}
</p>
<div className="flex items-center gap-2 mt-1">
<span className={cn("text-xs px-2 py-0.5 rounded-full", e.assetType === "marketed" ? "bg-primary/10 text-primary" : e.assetType === "pipeline" ? "bg-amber-500/10 text-amber-600" : "bg-muted text-muted-foreground")}>
{i[e.assetType]}
</span>
</div>
</div>
<div className={cn("inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border", r[e.activityLevel])}>
<ActivityIcon className="h-3 w-3" />
{e.activityLevel === "high" ? "High Activity" : e.activityLevel === "medium" ? "Medium Activity" : "Low Activity"}
</div>
</div>
</div>
<div className="space-y-4">
{DJ.map((c) => {
    const C_u = c.icon;
    return (<div className="border border-border rounded-lg p-4" key={c.id}>
<div className="flex items-center gap-2 mb-3">
<C_u className="h-4 w-4 text-muted-foreground" />
<h3 className="text-sm font-semibold text-foreground">
{c.label}
</h3>
</div>
{l(c.id)}
</div>);
  })}
</div>
<_J entityId={e.id} entityType="asset" onViewAllClaims={a} />
<OJ entityId={e.id} />
<Separator className="my-6" />
<p className="text-xs text-muted-foreground text-center">
For full intelligence and curation, use View Intelligence
</p>
</SheetContent>
</Sheet>);
}

export function _J({ entityId: e, entityType: n, onViewAllClaims: s }) {
  const a = zg(e, n);
  return a.totalClaims === 0 ? (<div className="border border-border rounded-lg p-4">
<div className="flex items-center gap-2 mb-3">
<ChartColumnIcon className="h-4 w-4 text-muted-foreground" />
<h3 className="text-sm font-semibold text-foreground">
Claims Snapshot (12 months)
</h3>
</div>
<p className="text-xs text-muted-foreground">
No leadership claims recorded for this entity
</p>
</div>) : (<div className="border border-border rounded-lg p-4">
<div className="flex items-center gap-2 mb-3">
<ChartColumnIcon className="h-4 w-4 text-muted-foreground" />
<h3 className="text-sm font-semibold text-foreground">
Claims Snapshot (12 months)
</h3>
</div>
<div className="grid grid-cols-3 gap-4 mb-3">
<div>
<p className="text-xs text-muted-foreground">
Total Claims
</p>
<p className="text-lg font-semibold text-foreground">
{a.totalClaims}
</p>
</div>
<div>
<p className="text-xs text-muted-foreground">
Open Claims
</p>
<p className="text-lg font-semibold text-foreground">
{a.openClaims}
</p>
</div>
<div>
<p className="text-xs text-muted-foreground">
Last Claim
</p>
<p className="text-sm font-medium text-foreground">
{a.lastClaimDate}
</p>
</div>
</div>
<button onClick={s} className="text-xs text-primary hover:underline flex items-center gap-1">
View All Claims
<ArrowRightIcon className="h-3 w-3" />
</button>
</div>);
}

export function OJ({ entityId: e }) {
  const n = Lo(e), a = { on_message: { icon: CircleCheckBigIcon, iconColor: "text-emerald-600", bgColor: "bg-emerald-500/10" }, careful_framing: { icon: TriangleAlertIcon, iconColor: "text-amber-600", bgColor: "bg-amber-500/10" }, contradiction_risk: { icon: CircleAlertIcon, iconColor: "text-red-600", bgColor: "bg-red-500/10" } }[n.status], C_r = a.icon;
  return (<div className="border border-border rounded-lg p-4">
<div className="flex items-center gap-2 mb-3">
<FileTextIcon className="h-4 w-4 text-muted-foreground" />
<h3 className="text-sm font-semibold text-foreground">
Narrative Continuity
</h3>
</div>
<div className={cn("rounded-lg p-3 mb-3", a.bgColor)}>
<div className="flex items-start gap-2">
<C_r className={cn("h-4 w-4 mt-0.5", a.iconColor)} />
<div>
<p className={cn("text-sm font-medium", a.iconColor)}>
{n.label}
</p>
<p className="text-xs text-muted-foreground mt-0.5">
{n.description}
</p>
</div>
</div>
</div>
<div className="flex items-center gap-1.5 text-xs text-muted-foreground">
<InfoIcon className="h-3 w-3" />
<span>
Advisory only — not disclosure guidance
</span>
</div>
</div>);
}

export function LJ({ open: e, onClose: n, selectedAssets: s, appliedFilters: a }) {
  const [r, i] = React.useState(""), [o, l] = React.useState(""), [c, u] = React.useState(""), m = () => {
    if (!r.trim()) {
      xn.error("Please enter a name for the data source");
      return;
    }
    xn.success(`Asset data source "${r}" created successfully`, { description: `${s.length} assets added to GEI \u2192 Data Sources` }), i(""), l(""), u(""), n();
  }, p = () => a.timeRange === "7" ? "Last 7 days" : a.timeRange === "30" ? "Last 30 days" : a.timeRange === "90" ? "Last 90 days" : "Custom range";
  return (<C_ot open={e} onOpenChange={n}>
<DialogContent className="sm:max-w-lg">
<DialogHeader>
<DialogTitle className="flex items-center gap-2">
<DatabaseIcon className="h-5 w-5 text-primary" />
Create Asset Data Source
</DialogTitle>
<DialogDescription>
Promote selected assets to a governed data source for use across modules
</DialogDescription>
</DialogHeader>
<div className="space-y-4 py-4">
<div className="space-y-2">
<Label htmlFor="name">
Data Source Name
</Label>
<Input id="name" placeholder="e.g., Key Commercial Assets Q3 2026" value={r} onChange={(h) => i(h.target.value)} />
</div>
<div className="space-y-2">
<Label htmlFor="description">
Description (Optional)
</Label>
<Textarea id="description" placeholder="Brief description of this data source..." value={o} onChange={(h) => l(h.target.value)} rows={2} />
</div>
<div className="space-y-2">
<Label htmlFor="tags">
Tags (Optional)
</Label>
<Input id="tags" placeholder="e.g., immunology, oncology, pipeline" value={c} onChange={(h) => u(h.target.value)} />
</div>
<div className="bg-muted/50 rounded-lg p-4 space-y-3">
<h4 className="text-sm font-medium text-foreground">
Governance Metadata
</h4>
<div className="flex items-start gap-2">
<PillIcon className="h-4 w-4 text-muted-foreground mt-0.5" />
<div>
<p className="text-xs font-medium text-foreground">
Included Assets
</p>
<div className="flex flex-wrap gap-1 mt-1">
{s.slice(0, 4).map((h) => (<Badge variant="secondary" className="text-xs" key={h.id}>
{h.name}
</Badge>))}
{s.length > 4 && (<Badge variant="outline" className="text-xs">
+
{s.length - 4}
{" more"}
</Badge>)}
</div>
</div>
</div>
<div className="flex items-start gap-2">
<CalendarIcon className="h-4 w-4 text-muted-foreground mt-0.5" />
<div>
<p className="text-xs font-medium text-foreground">
Time Range
</p>
<p className="text-xs text-muted-foreground">
{p()}
</p>
</div>
</div>
{a.topics.length > 0 && (<div className="flex items-start gap-2">
<TagIcon className="h-4 w-4 text-muted-foreground mt-0.5" />
<div>
<p className="text-xs font-medium text-foreground">
Topics Filter
</p>
<div className="flex flex-wrap gap-1 mt-1">
{a.topics.map((h) => (<Badge variant="outline" className="text-xs" key={h}>
{h}
</Badge>))}
</div>
</div>
</div>)}
</div>
</div>
<DialogFooter>
<Button variant="outline" onClick={n}>
Cancel
</Button>
<Button onClick={m} disabled={!r.trim()}>
Create Data Source
</Button>
</DialogFooter>
</DialogContent>
</C_ot>);
}

export const FJ = ["Financials", "Guidance", "Pipeline", "Clinical Data", "Regulatory", "Safety", "Strategy", "Investor Sentiment", "Competitive Positioning", "Execution Risk", "Messaging"];

export const zJ = [{ value: "7", label: "Last 7 days" }, { value: "30", label: "Last 30 days" }, { value: "90", label: "Last 90 days" }];

export const $J = [{ id: "discovered-1", name: "Rinvoq", company: "AbbVie", assetType: "marketed", activityLevel: "medium", lastUpdated: "Detected Sep 18, 2026", activeTopics: ["Competitive Positioning", "Safety", "Regulatory"], status: "discovered", intelligenceType: "external" }, { id: "discovered-2", name: "Dupixent", company: "Sanofi / Regeneron", assetType: "marketed", activityLevel: "high", lastUpdated: "Detected Sep 17, 2026", activeTopics: ["Clinical Data", "Pipeline", "Investor Sentiment"], status: "discovered", intelligenceType: "external" }];

export const JJ = bo.map((e) => ({ id: e.id, name: e.name, company: e.company, assetType: e.assetType, activityLevel: e.activityLevel, lastUpdated: e.lastUpdated, activeTopics: e.activeTopics, status: e.status || "active", intelligenceType: e.intelligenceType }));

export const H0 = [...$J, ...JJ];

export function W0({ label: e, selected: n, onClick: s }) {
  return (<button onClick={s} className={cn("px-3 py-1.5 rounded-full text-xs font-medium transition-colors whitespace-nowrap", n ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80")}>
{e}
</button>);
}

export function BJ() {
  const e = useNavigate(), [n, s] = React.useState(""), [a, r] = React.useState("all"), [i, o] = React.useState("all"), [l, c] = React.useState("all"), [u, m] = React.useState("30"), [p, h] = React.useState(void 0), [f, v] = React.useState([]), [x, y] = React.useState(/* @__PURE__ */ new Set()), [b, g] = React.useState(null), [j, w] = React.useState(false), [C, P] = React.useState("external"), I = (N) => {
    m(N), h(void 0);
  }, L = (N) => {
    h(N), N != null && N.from && m("");
  }, z = (N) => {
    v((T) => T.includes(N) ? T.filter((_) => _ !== N) : [...T, N]);
  }, R = H0.filter((N) => {
    var ee;
    const T = N.name.toLowerCase().includes(n.toLowerCase()), _ = a === "all" || N.assetType === a, q = i === "all" || N.activityLevel === i, A = l === "all" || N.status === l, $ = f.length === 0 || ((ee = N.activeTopics) == null ? void 0 : ee.some((Q) => f.includes(Q))), W = C === "both" || N.intelligenceType === C;
    return T && _ && q && A && $ && W;
  }), B = (N, T) => {
    y((_) => {
      const q = new Set(_);
      return T ? q.add(N) : q.delete(N), q;
    });
  }, J = R.filter((N) => !N.status || N.status === "active"), X = (N) => {
    y(N ? new Set(J.map((T) => T.id)) : /* @__PURE__ */ new Set());
  }, k = J.length > 0 && J.every((N) => x.has(N.id)), V = J.some((N) => x.has(N.id)) && !k, F = x.size > 0, S = (N) => {
    e(`/gei/entities/assets/${N}`);
  }, E = (N) => {
    g(N);
  };
  return (<div className="flex-1 flex flex-col h-full overflow-hidden">
<div className="border-b border-border">
<div className="px-6 py-6 pr-6 max-w-[calc(100%-1.5rem)] flex items-center justify-between">
<div>
<div className="flex items-center gap-2 mb-1">
<PillIcon className="h-5 w-5 text-muted-foreground" />
<h1 className="text-xl font-semibold text-foreground">
{"Assets & Drugs"}
</h1>
</div>
<p className="text-sm text-muted-foreground">
External intelligence across branded assets and drug programs
</p>
</div>
<Button variant="outline" size="sm" disabled={!F} onClick={() => w(true)} className="gap-2">
<DatabaseIcon className="h-4 w-4" />
Promote to Data Source
</Button>
</div>
</div>
<div className="p-4 pr-6 border-b border-border bg-muted/30 space-y-4">
<div className="flex items-center gap-3">
<div className="relative flex-1 max-w-md">
<SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
<Input placeholder="Search assets by name" value={n} onChange={(N) => s(N.target.value)} className="pl-9" />
</div>
<C_le value={a} onValueChange={r}>
<SelectTrigger className="w-48">
<C_ce placeholder="All Types" />
</SelectTrigger>
<SelectContent>
<SelectItem value="all">
All Types
</SelectItem>
<SelectItem value="marketed">
Marketed Drug
</SelectItem>
<SelectItem value="pipeline">
Pipeline Asset
</SelectItem>
<SelectItem value="clinical">
Clinical-Stage Program
</SelectItem>
</SelectContent>
</C_le>
<C_le value={i} onValueChange={o}>
<SelectTrigger className="w-36">
<C_ce placeholder="All Activity" />
</SelectTrigger>
<SelectContent>
<SelectItem value="all">
All Activity
</SelectItem>
<SelectItem value="high">
High
</SelectItem>
<SelectItem value="medium">
Medium
</SelectItem>
<SelectItem value="low">
Low
</SelectItem>
</SelectContent>
</C_le>
<C_le value={l} onValueChange={c}>
<SelectTrigger className="w-40">
<C_ce placeholder="All Status" />
</SelectTrigger>
<SelectContent>
<SelectItem value="all">
All Status
</SelectItem>
<SelectItem value="active">
Active
</SelectItem>
<SelectItem value="discovered">
Discovered
</SelectItem>
<SelectItem value="sent_for_review">
Sent for review
</SelectItem>
</SelectContent>
</C_le>
</div>
<Un value={C} onChange={P} />
<div className="flex items-center gap-2">
<span className="text-xs text-muted-foreground font-medium">
Time:
</span>
<div className="flex items-center gap-1">
{zJ.map((N) => (<W0 label={N.label} selected={u === N.value && !(p != null && p.from)} onClick={() => I(N.value)} key={N.value} />))}
<C_dn dateRange={p} onDateRangeChange={L} onClear={() => m("30")} />
</div>
</div>
<div className="flex items-center gap-2">
<span className="text-xs text-muted-foreground font-medium">
Topics:
</span>
<div className="flex items-center gap-1 overflow-x-auto pb-1">
{FJ.map((N) => (<W0 label={N} selected={f.includes(N)} onClick={() => z(N)} key={N} />))}
</div>
</div>
</div>
<div className="px-4 pr-6 py-2 border-b border-border bg-background flex items-center gap-3">
<Checkbox checked={k} ref={(N) => {
    N && (N.indeterminate = V);
  }} onCheckedChange={X} />
<span className="text-sm text-muted-foreground">
Select all (
{R.length}
{" in current view)"}
</span>
{F && (<span className="text-sm text-primary font-medium ml-auto">
{x.size}
{" selected"}
</span>)}
</div>
<div className="flex-1 overflow-y-auto p-4 pr-6">
<div className="space-y-3">
{R.length > 0 ? R.map((N) => (<IJ asset={N} showCheckbox selected={x.has(N.id)} onSelectChange={(T) => B(N.id, T)} onViewIntelligence={() => S(N.id)} on360View={() => E(N)} key={N.id} />)) : (<div className="text-center py-12 text-muted-foreground">
<PillIcon className="h-12 w-12 mx-auto mb-4 opacity-50" />
<p>
No assets match your filters
</p>
</div>)}
</div>
</div>
<Q5 asset={b} onClose={() => g(null)} />
<LJ open={j} onClose={() => {
    w(false), y(/* @__PURE__ */ new Set());
  }} selectedAssets={H0.filter((N) => x.has(N.id))} appliedFilters={{ timeRange: u, topics: f, assetType: a, activity: i }} />
</div>);
}

export const VJ = { earnings: "Earnings", investor_conference: "Investor Conference", clinical_disclosure: "Clinical Disclosure", regulatory_decision: "Regulatory Decision", ma_licensing: "M&A / Licensing", crisis: "Crisis", market_volatility: "Market Volatility" };

export const UJ = { earnings: "text-blue-600 bg-blue-500/10", investor_conference: "text-purple-600 bg-purple-500/10", clinical_disclosure: "text-emerald-600 bg-emerald-500/10", regulatory_decision: "text-amber-600 bg-amber-500/10", ma_licensing: "text-rose-600 bg-rose-500/10", crisis: "text-red-600 bg-red-500/10", market_volatility: "text-orange-600 bg-orange-500/10" };

export function HJ({ event: e, onViewIntelligence: n, on360View: s, selected: a = false, onSelectChange: r, showCheckbox: i = false }) {
  var p;
  const o = { high: "text-primary bg-primary/10", medium: "text-amber-600 bg-amber-500/10", low: "text-muted-foreground bg-muted" }, l = { high: "High", medium: "Medium", low: "Low" }, c = e.status === "discovered", u = e.status === "sent_for_review", m = c || u;
  return (<div className={cn("w-full flex items-center gap-4 p-4 rounded-lg border bg-card", "transition-all duration-200", a ? "border-primary/50 bg-primary/5" : "border-border hover:border-primary/30 hover:shadow-sm")}>
{i && (<Checkbox checked={m ? false : a} onCheckedChange={(h) => r == null ? void 0 : r(h === true)} className="shrink-0" disabled={m} />)}
<div className="flex-1 min-w-0 max-w-[280px]">
<div className="flex items-center gap-2 mb-0.5">
<h3 className="text-sm font-semibold text-foreground truncate">
{e.name}
</h3>
{e.status && e.status !== "active" && (<Om status={e.status} />)}
</div>
<div className="flex items-center gap-2">
<Badge variant="outline" className={cn("text-xs font-normal", UJ[e.eventType])}>
{VJ[e.eventType]}
</Badge>
<span className="text-xs text-muted-foreground flex items-center gap-1">
<CalendarIcon className="h-3 w-3" />
{e.eventDate}
</span>
</div>
</div>
<div className="flex-1 flex items-center gap-1.5 justify-center">
{(p = e.activeTopics) == null ? void 0 : p.slice(0, 4).map((h) => (<Badge variant="secondary" className="text-xs font-normal px-2 py-0.5" key={h}>
{h}
</Badge>))}
</div>
<div className="flex items-center gap-4">
<div className="flex flex-col items-end gap-1">
<div className={cn("inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium", o[e.activityLevel])}>
<ActivityIcon className="h-3 w-3" />
{l[e.activityLevel]}
</div>
</div>
<div className="flex items-center gap-2">
<Button size="sm" onClick={(h) => {
    h.stopPropagation(), n();
  }} className="text-xs h-8">
<EyeIcon className="h-3.5 w-3.5 mr-1.5" />
View Intelligence
</Button>
<Button variant="ghost" size="sm" onClick={(h) => {
    h.stopPropagation(), s();
  }} className="text-xs h-8 text-muted-foreground hover:text-foreground">
<CompassIcon className="h-3.5 w-3.5 mr-1.5" />
360° View
</Button>
</div>
</div>
</div>);
}

export const G0 = { earnings: "Earnings Release / Call", investor_conference: "Investor Conference / Roadshow", clinical_disclosure: "Clinical Data Disclosure", regulatory_decision: "Regulatory Decision", ma_licensing: "M&A / Licensing Announcement", crisis: "Crisis / Reputational Event", market_volatility: "Market Volatility Event" };

export const WJ = { overview: "No detailed intelligence available for this event", keyTopics: [], questionsCommentary: [], marketReactions: [], crossEntityRefs: [], narrativePatterns: [], timeline: [] };

export const GJ = [{ id: "overview", label: "Event Overview", icon: CalendarIcon }, { id: "topics", label: "Key Topics & Areas of Focus", icon: TargetIcon }, { id: "questions", label: "Primary External Questions & Commentary", icon: MessageSquareIcon }, { id: "reactions", label: "Market & Investor Reaction Patterns", icon: TrendingUpIcon }, { id: "crossrefs", label: "Cross-Entity References", icon: Link2Icon }, { id: "narratives", label: "Narrative Patterns", icon: LayersIcon }, { id: "timeline", label: "Timeline of Event-Related Activity", icon: ClockIcon }];

export function Y5({ event: e, onClose: n }) {
  const s = useNavigate();
  if (!e) return null;
  const a = () => {
    n(), s(`/gei/entities/events/${e.id}?tab=leadership-claims`);
  }, r = { high: "text-primary bg-primary/10 border-primary/20", medium: "text-amber-600 bg-amber-500/10 border-amber-500/20", low: "text-muted-foreground bg-muted border-border" }, i = p$(e.id) || WJ, o = (l) => {
    switch (l) {
      case "overview":
        return (<div className="space-y-2">
<div className="flex items-center gap-2 mb-2">
<span className="text-xs font-medium text-foreground">
{e.name}
</span>
<span className="text-xs text-muted-foreground">
•
</span>
<span className="text-xs text-muted-foreground">
{G0[e.eventType]}
</span>
</div>
<p className="text-xs text-muted-foreground leading-relaxed">
{i.overview}
</p>
</div>);
      case "topics":
        return (<div className="flex flex-wrap gap-1.5">
{i.keyTopics.map((c) => (<span className="px-2 py-1 bg-muted text-xs text-muted-foreground rounded-full" key={c}>
{c}
</span>))}
</div>);
      case "questions":
        return (<div className="space-y-3">
{i.questionsCommentary.map((c, u) => (<div className="border-l-2 border-border pl-3" key={u}>
<p className="text-xs font-medium text-foreground mb-0.5">
{c.theme}
</p>
<p className="text-xs text-muted-foreground">
{c.context}
</p>
</div>))}
</div>);
      case "reactions":
        return (<div className="space-y-3">
{i.marketReactions.map((c, u) => (<div className="border-l-2 border-border pl-3" key={u}>
<p className="text-xs font-medium text-foreground mb-0.5">
{c.pattern}
</p>
<p className="text-xs text-muted-foreground">
{c.detail}
</p>
</div>))}
</div>);
      case "crossrefs":
        return (<div className="space-y-3">
{i.crossEntityRefs.map((c, u) => (<div className="border-l-2 border-border pl-3" key={u}>
<p className="text-xs font-medium text-foreground mb-1">
{c.type}
</p>
<div className="flex flex-wrap gap-1">
{c.entities.map((m) => (<span className="px-2 py-0.5 bg-muted/50 text-xs text-muted-foreground rounded" key={m}>
{m}
</span>))}
</div>
</div>))}
</div>);
      case "narratives":
        return (<ul className="space-y-1.5">
{i.narrativePatterns.map((c, u) => (<li className="text-xs text-muted-foreground flex items-start gap-2" key={u}>
<span className="text-primary mt-1">
•
</span>
{c}
</li>))}
</ul>);
      case "timeline":
        return (<div className="space-y-2">
{i.timeline.map((c, u) => (<div className="flex items-start gap-3" key={u}>
<span className="text-xs text-muted-foreground whitespace-nowrap min-w-[100px]">
{c.date}
</span>
<span className="text-xs text-foreground/80">
{c.activity}
</span>
</div>))}
</div>);
      default:
        return null;
    }
  };
  return (<Sheet open={!!e} onOpenChange={() => n()}>
<SheetContent className="w-full sm:max-w-lg overflow-y-auto">
<SheetHeader className="pb-4">
<div className="flex items-center gap-2">
<SheetTitle className="text-lg font-semibold">
Event 360° Intelligence View
</SheetTitle>
{(e.status === "discovered" || e.status === "sent_for_review") && (<span className="px-2 py-0.5 rounded text-xs bg-muted text-muted-foreground">
Tracking entity
</span>)}
</div>
</SheetHeader>
<div className="bg-muted/50 rounded-lg p-4 mb-6">
<div className="flex items-start justify-between mb-3">
<div>
<h2 className="text-lg font-semibold text-foreground">
{e.name}
</h2>
<div className="flex items-center gap-2 mt-1">
<span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary">
{G0[e.eventType]}
</span>
<span className="text-xs text-muted-foreground">
{e.eventDate}
</span>
</div>
</div>
<div className={cn("inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border", r[e.activityLevel])}>
<ActivityIcon className="h-3 w-3" />
{e.activityLevel === "high" ? "High Activity" : e.activityLevel === "medium" ? "Medium Activity" : "Low Activity"}
</div>
</div>
</div>
<div className="space-y-4">
{GJ.map((l) => {
    const C_c = l.icon;
    return (<div className="border border-border rounded-lg p-4" key={l.id}>
<div className="flex items-center gap-2 mb-3">
<C_c className="h-4 w-4 text-muted-foreground" />
<h3 className="text-sm font-semibold text-foreground">
{l.label}
</h3>
</div>
{o(l.id)}
</div>);
  })}
</div>
<C_qJ entityId={e.id} entityType="event" onViewAllClaims={a} />
<QJ entityId={`event-${e.id}`} />
<Separator className="my-6" />
<p className="text-xs text-muted-foreground text-center">
For full intelligence and curation, use View Intelligence
</p>
</SheetContent>
</Sheet>);
}

export function C_qJ({ entityId: e, entityType: n, onViewAllClaims: s }) {
  const a = zg(e, n);
  return a.totalClaims === 0 ? (<div className="border border-border rounded-lg p-4">
<div className="flex items-center gap-2 mb-3">
<ChartColumnIcon className="h-4 w-4 text-muted-foreground" />
<h3 className="text-sm font-semibold text-foreground">
Claims Snapshot (12 months)
</h3>
</div>
<p className="text-xs text-muted-foreground">
No leadership claims recorded for this entity
</p>
</div>) : (<div className="border border-border rounded-lg p-4">
<div className="flex items-center gap-2 mb-3">
<ChartColumnIcon className="h-4 w-4 text-muted-foreground" />
<h3 className="text-sm font-semibold text-foreground">
Claims Snapshot (12 months)
</h3>
</div>
<div className="grid grid-cols-3 gap-4 mb-3">
<div>
<p className="text-xs text-muted-foreground">
Total Claims
</p>
<p className="text-lg font-semibold text-foreground">
{a.totalClaims}
</p>
</div>
<div>
<p className="text-xs text-muted-foreground">
Open Claims
</p>
<p className="text-lg font-semibold text-foreground">
{a.openClaims}
</p>
</div>
<div>
<p className="text-xs text-muted-foreground">
Last Claim
</p>
<p className="text-sm font-medium text-foreground">
{a.lastClaimDate}
</p>
</div>
</div>
<button onClick={s} className="text-xs text-primary hover:underline flex items-center gap-1">
View All Claims
<ArrowRightIcon className="h-3 w-3" />
</button>
</div>);
}

export function QJ({ entityId: e }) {
  const n = Lo(e), a = { on_message: { icon: CircleCheckBigIcon, iconColor: "text-emerald-600", bgColor: "bg-emerald-500/10" }, careful_framing: { icon: TriangleAlertIcon, iconColor: "text-amber-600", bgColor: "bg-amber-500/10" }, contradiction_risk: { icon: CircleAlertIcon, iconColor: "text-red-600", bgColor: "bg-red-500/10" } }[n.status], C_r = a.icon;
  return (<div className="border border-border rounded-lg p-4">
<div className="flex items-center gap-2 mb-3">
<FileTextIcon className="h-4 w-4 text-muted-foreground" />
<h3 className="text-sm font-semibold text-foreground">
Narrative Continuity
</h3>
</div>
<div className={cn("rounded-lg p-3 mb-3", a.bgColor)}>
<div className="flex items-start gap-2">
<C_r className={cn("h-4 w-4 mt-0.5", a.iconColor)} />
<div>
<p className={cn("text-sm font-medium", a.iconColor)}>
{n.label}
</p>
<p className="text-xs text-muted-foreground mt-0.5">
{n.description}
</p>
</div>
</div>
</div>
<div className="flex items-center gap-1.5 text-xs text-muted-foreground">
<InfoIcon className="h-3 w-3" />
<span>
Advisory only — not disclosure guidance
</span>
</div>
</div>);
}

export function YJ({ open: e, onClose: n, selectedEvents: s, appliedFilters: a }) {
  const { toast: r } = useToast(), [i, o] = React.useState(""), [l, c] = React.useState(""), [u, m] = React.useState([]), [p, h] = React.useState(""), f = () => {
    p.trim() && !u.includes(p.trim()) && (m([...u, p.trim()]), h(""));
  }, v = (w) => {
    m(u.filter((C) => C !== w));
  }, x = (w) => {
    w.key === "Enter" && (w.preventDefault(), f());
  }, y = () => {
    i.trim() && (r({ title: "Event data source created successfully", description: `"${i}" with ${s.length} events has been saved.` }), o(""), c(""), m([]), n());
  }, b = () => {
    o(""), c(""), m([]), n();
  }, g = (w) => ({ 7: "Last 7 days", 30: "Last 30 days", 90: "Last 90 days" })[w] || w, j = (w) => ({ all: "All Event Types", earnings: "Earnings", investor_conference: "Investor Conference", clinical_disclosure: "Clinical Disclosure", regulatory_decision: "Regulatory Decision", ma_licensing: "M&A / Licensing", crisis: "Crisis", market_volatility: "Market Volatility" })[w] || w;
  return (<C_ot open={e} onOpenChange={b}>
<DialogContent className="sm:max-w-lg">
<DialogHeader>
<DialogTitle className="flex items-center gap-2">
<DatabaseIcon className="h-5 w-5 text-primary" />
Create Event Data Source
</DialogTitle>
<DialogDescription>
Save this set of events as a governed external data source for use across IR Co-Pilot modules.
</DialogDescription>
</DialogHeader>
<div className="space-y-5 py-2">
<div className="space-y-2">
<Label htmlFor="source-name">
{"Data Source Name "}
<span className="text-destructive">
*
</span>
</Label>
<Input id="source-name" placeholder="Key Industry Events – Q3 2026" value={i} onChange={(w) => o(w.target.value)} />
</div>
<div className="space-y-2">
<Label htmlFor="source-description">
Description
</Label>
<Textarea id="source-description" placeholder="Briefly describe the purpose or usage of this event source" value={l} onChange={(w) => c(w.target.value)} rows={2} />
</div>
<div className="space-y-2">
<div className="flex items-center gap-2">
<CalendarIcon className="h-4 w-4 text-muted-foreground" />
<Label>
Included Events
</Label>
<Badge variant="secondary" className="ml-auto text-xs">
{s.length}
{" selected"}
</Badge>
</div>
<ScrollArea className="h-28 rounded-md border bg-muted/30 p-3">
<div className="space-y-2">
{s.map((w) => (<div className="flex items-center gap-2 text-sm" key={w.id}>
<span className="font-medium text-foreground">
{w.name}
</span>
<span className="text-muted-foreground">
—
</span>
<span className="text-muted-foreground">
{w.eventDate}
</span>
</div>))}
</div>
</ScrollArea>
</div>
<div className="space-y-2">
<div className="flex items-center gap-2">
<FilterIcon className="h-4 w-4 text-muted-foreground" />
<Label>
Applied Filters
</Label>
</div>
<div className="rounded-md border bg-muted/30 p-3 text-sm space-y-1.5">
<div className="flex items-center justify-between">
<span className="text-muted-foreground">
Time Range:
</span>
<span className="text-foreground">
{g(a.timeRange)}
</span>
</div>
<div className="flex items-center justify-between">
<span className="text-muted-foreground">
Topics:
</span>
<span className="text-foreground">
{a.topics.length > 0 ? a.topics.join(", ") : "All Topics"}
</span>
</div>
<div className="flex items-center justify-between">
<span className="text-muted-foreground">
Event Type:
</span>
<span className="text-foreground">
{j(a.eventType)}
</span>
</div>
<div className="flex items-center justify-between">
<span className="text-muted-foreground">
Activity:
</span>
<span className="text-foreground">
{a.activity === "all" ? "All Activity" : a.activity.charAt(0).toUpperCase() + a.activity.slice(1)}
</span>
</div>
</div>
</div>
<div className="space-y-2">
<div className="flex items-center gap-2">
<TagIcon className="h-4 w-4 text-muted-foreground" />
<Label htmlFor="tags">
Tags (Optional)
</Label>
</div>
<div className="flex items-center gap-2">
<Input id="tags" placeholder="Add a tag and press Enter" value={p} onChange={(w) => h(w.target.value)} onKeyDown={x} className="flex-1" />
<Button type="button" variant="outline" size="sm" onClick={f} disabled={!p.trim()}>
Add
</Button>
</div>
{u.length > 0 && (<div className="flex flex-wrap gap-1.5 pt-1">
{u.map((w) => (<Badge variant="secondary" className="pl-2 pr-1 py-1 gap-1" key={w}>
{w}
<button onClick={() => v(w)} className="ml-0.5 hover:bg-muted rounded-full p-0.5">
<XIcon className="h-3 w-3" />
</button>
</Badge>))}
</div>)}
</div>
</div>
<div className="flex justify-end gap-2 pt-2">
<Button variant="outline" onClick={b}>
Cancel
</Button>
<Button onClick={y} disabled={!i.trim()}>
Create Data Source
</Button>
</div>
</DialogContent>
</C_ot>);
}

export const KJ = ["Financials", "Guidance", "Pipeline", "Clinical Data", "Regulatory", "Safety", "Strategy", "Investor Sentiment", "Competitive Positioning", "Execution Risk", "Messaging", "Market Activity"];

export const XJ = [{ value: "7", label: "Last 7 days" }, { value: "30", label: "Last 30 days" }, { value: "90", label: "Last 90 days" }];

export const ZJ = [{ value: "all", label: "All Event Types" }, { value: "earnings", label: "Earnings" }, { value: "investor_conference", label: "Investor Conference" }, { value: "clinical_disclosure", label: "Clinical Disclosure" }, { value: "regulatory_decision", label: "Regulatory Decision" }, { value: "ma_licensing", label: "M&A / Licensing" }, { value: "crisis", label: "Crisis" }, { value: "market_volatility", label: "Market Volatility" }];

export const eB = [{ id: "discovered-1", name: "Pfizer Q2 2026 Earnings Call", eventType: "earnings", eventDate: "Sep 21, 2026", activityLevel: "high", activeTopics: ["Financials", "Pipeline", "Guidance"], status: "discovered", intelligenceType: "external" }, { id: "discovered-2", name: "AbbVie Investor Day 2026", eventType: "investor_conference", eventDate: "Oct 5, 2026", activityLevel: "medium", activeTopics: ["Strategy", "Pipeline", "Investor Sentiment"], status: "discovered", intelligenceType: "external" }];

export const tB = jo.map((e) => ({ id: e.id, name: e.name, eventType: e.eventType, eventDate: e.eventDate, activityLevel: e.activityLevel, activeTopics: e.topics, status: e.status || "active", intelligenceType: e.intelligenceType }));

export const q0 = [...eB, ...tB];

export function Q0({ label: e, selected: n, onClick: s }) {
  return (<button onClick={s} className={cn("px-3 py-1.5 rounded-full text-xs font-medium transition-colors whitespace-nowrap", n ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80")}>
{e}
</button>);
}

export function C_nB() {
  const e = useNavigate(), [n, s] = React.useState(""), [a, r] = React.useState("all"), [i, o] = React.useState("all"), [l, c] = React.useState("all"), [u, m] = React.useState("30"), [p, h] = React.useState(void 0), [f, v] = React.useState([]), [x, y] = React.useState(/* @__PURE__ */ new Set()), [b, g] = React.useState(null), [j, w] = React.useState(false), [C, P] = React.useState("external"), I = (T) => {
    m(T), h(void 0);
  }, L = (T) => {
    h(T), T != null && T.from && m("");
  }, z = (T) => {
    v((_) => _.includes(T) ? _.filter((q) => q !== T) : [..._, T]);
  }, R = q0.filter((T) => {
    var Q;
    const _ = T.name.toLowerCase().includes(n.toLowerCase()), q = a === "all" || T.eventType === a, A = i === "all" || T.activityLevel === i, $ = l === "all" || T.status === l, W = f.length === 0 || ((Q = T.activeTopics) == null ? void 0 : Q.some((pe) => f.includes(pe))), ee = C === "both" || T.intelligenceType === C;
    return _ && q && A && $ && W && ee;
  }), B = q0.filter((T) => x.has(T.id)), J = x.size > 0, X = (T, _) => {
    y((q) => {
      const A = new Set(q);
      return _ ? A.add(T) : A.delete(T), A;
    });
  }, k = R.filter((T) => !T.status || T.status === "active"), V = (T) => {
    y(T ? new Set(k.map((_) => _.id)) : /* @__PURE__ */ new Set());
  }, F = k.length > 0 && k.every((T) => x.has(T.id)), S = k.some((T) => x.has(T.id)) && !F, E = (T) => {
    e(`/gei/entities/events/${T}`);
  }, N = (T) => {
    g(T);
  };
  return (<div className="flex-1 flex flex-col h-full overflow-hidden">
<div className="border-b border-border">
<div className="px-6 py-6 pr-6 max-w-[calc(100%-1.5rem)] flex items-center justify-between">
<div>
<div className="flex items-center gap-2 mb-1">
<CalendarIcon className="h-5 w-5 text-muted-foreground" />
<h1 className="text-xl font-semibold text-foreground">
Events
</h1>
</div>
<p className="text-sm text-muted-foreground">
External intelligence across industry and company events
</p>
</div>
<Button variant="outline" size="sm" disabled={!J} onClick={() => w(true)} className="gap-2">
<DatabaseIcon className="h-4 w-4" />
Promote to Data Source
</Button>
</div>
</div>
<div className="p-4 pr-6 border-b border-border bg-muted/30 space-y-4">
<div className="flex items-center gap-3">
<div className="relative flex-1 max-w-md">
<SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
<Input placeholder="Search events by name" value={n} onChange={(T) => s(T.target.value)} className="pl-9" />
</div>
<C_le value={a} onValueChange={(T) => r(T)}>
<SelectTrigger className="w-56">
<C_ce placeholder="All Event Types" />
</SelectTrigger>
<SelectContent>
{ZJ.map((T) => (<SelectItem value={T.value} key={T.value}>
{T.label}
</SelectItem>))}
</SelectContent>
</C_le>
<C_le value={i} onValueChange={o}>
<SelectTrigger className="w-36">
<C_ce placeholder="All Activity" />
</SelectTrigger>
<SelectContent>
<SelectItem value="all">
All Activity
</SelectItem>
<SelectItem value="high">
High
</SelectItem>
<SelectItem value="medium">
Medium
</SelectItem>
<SelectItem value="low">
Low
</SelectItem>
</SelectContent>
</C_le>
<C_le value={l} onValueChange={c}>
<SelectTrigger className="w-40">
<C_ce placeholder="All Status" />
</SelectTrigger>
<SelectContent>
<SelectItem value="all">
All Status
</SelectItem>
<SelectItem value="active">
Active
</SelectItem>
<SelectItem value="discovered">
Discovered
</SelectItem>
<SelectItem value="sent_for_review">
Sent for review
</SelectItem>
</SelectContent>
</C_le>
</div>
<Un value={C} onChange={P} />
<div className="flex items-center gap-2">
<span className="text-xs text-muted-foreground font-medium">
Time:
</span>
<div className="flex items-center gap-1">
{XJ.map((T) => (<Q0 label={T.label} selected={u === T.value && !(p != null && p.from)} onClick={() => I(T.value)} key={T.value} />))}
<C_dn dateRange={p} onDateRangeChange={L} onClear={() => m("30")} />
</div>
</div>
<div className="flex items-center gap-2">
<span className="text-xs text-muted-foreground font-medium">
Topics:
</span>
<div className="flex items-center gap-1 overflow-x-auto pb-1">
{KJ.map((T) => (<Q0 label={T} selected={f.includes(T)} onClick={() => z(T)} key={T} />))}
</div>
</div>
</div>
<div className="px-4 pr-6 py-2 border-b border-border bg-background flex items-center gap-3">
<Checkbox checked={F} ref={(T) => {
    T && (T.indeterminate = S);
  }} onCheckedChange={V} />
<span className="text-sm text-muted-foreground">
Select all (
{R.length}
{" in current view)"}
</span>
{J && (<span className="text-sm text-primary font-medium ml-auto">
{x.size}
{" selected"}
</span>)}
</div>
<div className="flex-1 overflow-y-auto p-4 pr-6">
<div className="space-y-3">
{R.length > 0 ? R.map((T) => (<HJ event={T} showCheckbox selected={x.has(T.id)} onSelectChange={(_) => X(T.id, _)} onViewIntelligence={() => E(T.id)} on360View={() => N(T)} key={T.id} />)) : (<div className="text-center py-12 text-muted-foreground">
<CalendarIcon className="h-12 w-12 mx-auto mb-4 opacity-50" />
<p>
No events match your filters
</p>
</div>)}
</div>
</div>
<Y5 event={b} onClose={() => g(null)} />
<YJ open={j} onClose={() => {
    w(false), y(/* @__PURE__ */ new Set());
  }} selectedEvents={B} appliedFilters={{ timeRange: u, topics: f, eventType: a, activity: i }} />
</div>);
}

export const sB = { perception_theme: "text-purple-600 bg-purple-500/10", competitive_positioning: "text-blue-600 bg-blue-500/10", risk_narrative: "text-red-600 bg-red-500/10", growth_story: "text-emerald-600 bg-emerald-500/10", leadership_messaging: "text-amber-600 bg-amber-500/10", market_sentiment: "text-cyan-600 bg-cyan-500/10" };

export const aB = { active: "text-emerald-600 bg-emerald-500/10", emerging: "text-blue-600 bg-blue-500/10", fading: "text-amber-600 bg-amber-500/10", dormant: "text-muted-foreground bg-muted" };

export const rB = { high: "text-red-600 bg-red-500/10", medium: "text-amber-600 bg-amber-500/10", low: "text-emerald-600 bg-emerald-500/10" };

export const iB = { high: "High", medium: "Medium", low: "Low" };

export const oB = { company: Building2Icon, asset: PillIcon, event: CalendarDaysIcon };

export function C_lB({ narrative: e, onViewIntelligence: n, on360View: s, selected: a = false, onSelectChange: r, showCheckbox: i = false }) {
  return (<div className={cn("w-full flex items-center gap-4 p-4 rounded-lg border bg-card", "transition-all duration-200", a ? "border-primary/50 bg-primary/5" : "border-border hover:border-primary/30 hover:shadow-sm")}>
{i && (<Checkbox checked={a} onCheckedChange={(o) => r == null ? void 0 : r(o === true)} className="shrink-0" />)}
<div className="flex-1 min-w-0 max-w-[280px]">
<div className="flex items-center gap-2 mb-1">
<h3 className="text-sm font-semibold text-foreground truncate">
{e.title}
</h3>
</div>
<div className="flex items-center gap-2 flex-wrap">
<Badge variant="outline" className={cn("text-xs font-normal", sB[e.narrativeType])}>
{sa[e.narrativeType]}
</Badge>
<span className="text-xs text-muted-foreground flex items-center gap-1">
<CalendarIcon className="h-3 w-3" />
{e.lastUpdated}
</span>
</div>
</div>
<div className="flex-1 flex flex-col items-center gap-1.5">
<div className="flex items-center gap-1.5">
{e.topics.slice(0, 3).map((o) => (<Badge variant="secondary" className="text-xs font-normal px-2 py-0.5" key={o}>
{o}
</Badge>))}
</div>
<div className="flex items-center gap-1.5">
{e.linkedEntities.slice(0, 3).map((o) => {
    const C_l = oB[o.type];
    return (<Badge variant="outline" className="text-xs font-normal px-2 py-0.5 text-muted-foreground" key={`${o.type}-${o.id}`}>
<C_l className="h-3 w-3 mr-1" />
{o.name}
</Badge>);
  })}
</div>
</div>
<div className="flex items-center gap-4">
<div className="flex flex-col items-end gap-1">
<Badge variant="outline" className={cn("text-xs font-normal", aB[e.status])}>
{Qa[e.status]}
</Badge>
<div className={cn("inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium", rB[e.riskLevel])}>
{iB[e.riskLevel]}
{" Risk"}
</div>
</div>
<div className="flex items-center gap-2">
<Button size="sm" onClick={(o) => {
    o.stopPropagation(), n();
  }} className="text-xs h-8">
<EyeIcon className="h-3.5 w-3.5 mr-1.5" />
View Intelligence
</Button>
<Button variant="ghost" size="sm" onClick={(o) => {
    o.stopPropagation(), s();
  }} className="text-xs h-8 text-muted-foreground hover:text-foreground">
<CompassIcon className="h-3.5 w-3.5 mr-1.5" />
360° View
</Button>
</div>
</div>
</div>);
}

export const cB = { active: "text-emerald-600 bg-emerald-500/10", emerging: "text-blue-600 bg-blue-500/10", fading: "text-amber-600 bg-amber-500/10", dormant: "text-muted-foreground bg-muted" };

export function K5({ narrative: e, onClose: n }) {
  const s = e ? C5(e.id) : null;
  return (<Sheet open={!!e} onOpenChange={(a) => !a && n()}>
<SheetContent className="w-[500px] sm:max-w-[500px] p-0 overflow-hidden">
<ScrollArea className="h-full">
<div className="p-6">
<SheetHeader className="text-left mb-6">
<div className="flex items-center gap-2 mb-2">
<MessageSquareIcon className="h-5 w-5 text-primary" />
<span className="text-xs text-muted-foreground font-medium uppercase tracking-wide">
Narrative 360° View
</span>
</div>
<SheetTitle className="text-xl font-semibold">
{e == null ? void 0 : e.title}
</SheetTitle>
<div className="flex items-center gap-2 mt-2">
<Badge variant="outline" className={cn("text-xs", cB[(e == null ? void 0 : e.status) || "active"])}>
{Qa[(e == null ? void 0 : e.status) || "active"]}
</Badge>
<span className="text-xs text-muted-foreground flex items-center gap-1">
<CalendarIcon className="h-3 w-3" />
{e == null ? void 0 : e.lastUpdated}
</span>
</div>
</SheetHeader>
<div className="space-y-6">
<section>
<div className="flex items-center gap-2 mb-3">
<SparklesIcon className="h-4 w-4 text-muted-foreground" />
<h3 className="text-sm font-semibold text-foreground">
Narrative Overview
</h3>
</div>
<p className="text-sm text-muted-foreground leading-relaxed">
{(s == null ? void 0 : s.detailContent.overview) || "A narrative theme shaping how external stakeholders perceive and discuss the company, its portfolio, or strategic positioning."}
</p>
</section>
<Separator />
<section>
<div className="flex items-center gap-2 mb-3">
<MessageSquareIcon className="h-4 w-4 text-muted-foreground" />
<h3 className="text-sm font-semibold text-foreground">
{"Key Topics & Areas of Focus"}
</h3>
</div>
<div className="flex flex-wrap gap-2">
{((s == null ? void 0 : s.detailContent.keyTopics) || (e == null ? void 0 : e.topics) || []).map((a) => (<Badge variant="secondary" className="text-xs" key={a}>
{a}
</Badge>))}
</div>
</section>
<Separator />
<section>
<div className="flex items-center gap-2 mb-3">
<CircleHelpIcon className="h-4 w-4 text-muted-foreground" />
<h3 className="text-sm font-semibold text-foreground">
{"External Questions & Commentary"}
</h3>
</div>
<ul className="space-y-2">
{((s == null ? void 0 : s.detailContent.externalQuestions) || ["What are the key drivers shaping this narrative?", "How is external perception evolving over time?", "What investor concerns are most frequently raised?"]).map((a, r) => (<li className="text-sm text-muted-foreground flex items-start gap-2" key={r}>
<span className="text-primary mt-1">
•
</span>
{a}
</li>))}
</ul>
</section>
<Separator />
<section>
<div className="flex items-center gap-2 mb-3">
<TrendingUpIcon className="h-4 w-4 text-muted-foreground" />
<h3 className="text-sm font-semibold text-foreground">
Perception Patterns
</h3>
</div>
<ul className="space-y-2">
{((s == null ? void 0 : s.detailContent.perceptionPatterns) || ["Recurring themes in external commentary", "Common framing patterns across sources", "Consistent language and positioning"]).map((a, r) => (<li className="text-sm text-muted-foreground flex items-start gap-2" key={r}>
<span className="text-primary mt-1">
•
</span>
{a}
</li>))}
</ul>
</section>
<Separator />
<section>
<div className="flex items-center gap-2 mb-3">
<Link2Icon className="h-4 w-4 text-muted-foreground" />
<h3 className="text-sm font-semibold text-foreground">
Cross-Entity References
</h3>
</div>
<div className="flex flex-wrap gap-2">
{((s == null ? void 0 : s.detailContent.crossEntityReferences) || (e == null ? void 0 : e.linkedEntities.map((a) => a.name)) || ["Related Entity 1", "Related Entity 2"]).map((a) => (<Badge variant="outline" className="text-xs text-muted-foreground" key={a}>
{a}
</Badge>))}
</div>
</section>
<Separator />
<section>
<div className="flex items-center gap-2 mb-3">
<GitBranchIcon className="h-4 w-4 text-muted-foreground" />
<h3 className="text-sm font-semibold text-foreground">
Narrative Evolution
</h3>
</div>
<ul className="space-y-2">
{((s == null ? void 0 : s.detailContent.narrativeEvolution) || ["Initial emergence and framing", "Evolution through key catalysts", "Current state and trajectory"]).map((a, r) => (<li className="text-sm text-muted-foreground flex items-start gap-2" key={r}>
<span className="text-primary mt-1">
{r + 1}
.
</span>
{a}
</li>))}
</ul>
</section>
<Separator />
<section>
<div className="flex items-center gap-2 mb-3">
<ClockIcon className="h-4 w-4 text-muted-foreground" />
<h3 className="text-sm font-semibold text-foreground">
Timeline of Narrative Activity
</h3>
</div>
<div className="space-y-3">
{((s == null ? void 0 : s.detailContent.timeline) || [{ date: "Recent", label: "Latest narrative development" }]).map((a, r) => (<div className="flex items-start gap-3" key={r}>
<div className="flex flex-col items-center">
<div className="w-2 h-2 rounded-full bg-primary" />
{r < ((s == null ? void 0 : s.detailContent.timeline.length) || 1) - 1 && (<div className="w-px h-8 bg-border" />)}
</div>
<div className="flex-1 pb-2">
<p className="text-xs font-medium text-foreground">
{a.date}
</p>
<p className="text-xs text-muted-foreground">
{a.label}
</p>
</div>
</div>))}
</div>
</section>
<Separator />
<C_dB entityId={`narrative-${e == null ? void 0 : e.id}`} />
</div>
</div>
</ScrollArea>
</SheetContent>
</Sheet>);
}

export function C_dB({ entityId: e }) {
  const n = Lo(e), a = { on_message: { icon: CircleCheckBigIcon, iconColor: "text-emerald-600", bgColor: "bg-emerald-500/10" }, careful_framing: { icon: TriangleAlertIcon, iconColor: "text-amber-600", bgColor: "bg-amber-500/10" }, contradiction_risk: { icon: CircleAlertIcon, iconColor: "text-red-600", bgColor: "bg-red-500/10" } }[n.status], C_r = a.icon;
  return (<section>
<div className="flex items-center gap-2 mb-3">
<FileTextIcon className="h-4 w-4 text-muted-foreground" />
<h3 className="text-sm font-semibold text-foreground">
Narrative Continuity
</h3>
</div>
<div className={cn("rounded-lg p-3 mb-3", a.bgColor)}>
<div className="flex items-start gap-2">
<C_r className={cn("h-4 w-4 mt-0.5", a.iconColor)} />
<div>
<p className={cn("text-sm font-medium", a.iconColor)}>
{n.label}
</p>
<p className="text-xs text-muted-foreground mt-0.5">
{n.description}
</p>
</div>
</div>
</div>
<div className="flex items-center gap-1.5 text-xs text-muted-foreground">
<InfoIcon className="h-3 w-3" />
<span>
Advisory only — not disclosure guidance
</span>
</div>
</section>);
}

export function C_uB({ open: e, onClose: n, selectedNarratives: s, appliedFilters: a }) {
  const { toast: r } = useToast(), [i, o] = React.useState(""), [l, c] = React.useState(""), [u, m] = React.useState([]), [p, h] = React.useState(""), f = () => {
    p.trim() && !u.includes(p.trim()) && (m([...u, p.trim()]), h(""));
  }, v = (C) => {
    m(u.filter((P) => P !== C));
  }, x = (C) => {
    C.key === "Enter" && (C.preventDefault(), f());
  }, y = () => {
    i.trim() && (r({ title: "Narrative data source created successfully", description: `"${i}" with ${s.length} narratives has been saved.` }), o(""), c(""), m([]), n());
  }, b = () => {
    o(""), c(""), m([]), n();
  }, g = (C) => ({ 7: "Last 7 days", 30: "Last 30 days", 90: "Last 90 days" })[C] || C, j = (C) => C === "all" ? "All Types" : sa[C] || C, w = (C) => C === "all" ? "All Statuses" : Qa[C] || C;
  return (<C_ot open={e} onOpenChange={b}>
<DialogContent className="sm:max-w-lg">
<DialogHeader>
<DialogTitle className="flex items-center gap-2">
<DatabaseIcon className="h-5 w-5 text-primary" />
Create Narrative Data Source
</DialogTitle>
<DialogDescription>
Save this set of narratives as a governed external data source for use across IR Co-Pilot modules.
</DialogDescription>
</DialogHeader>
<div className="space-y-5 py-2">
<div className="space-y-2">
<Label htmlFor="source-name">
{"Data Source Name "}
<span className="text-destructive">
*
</span>
</Label>
<Input id="source-name" placeholder="Key Risk Narratives – Immunology Portfolio" value={i} onChange={(C) => o(C.target.value)} />
</div>
<div className="space-y-2">
<Label htmlFor="source-description">
Description
</Label>
<Textarea id="source-description" placeholder="Briefly describe the purpose or usage of this narrative source" value={l} onChange={(C) => c(C.target.value)} rows={2} />
</div>
<div className="space-y-2">
<div className="flex items-center gap-2">
<MessageSquareIcon className="h-4 w-4 text-muted-foreground" />
<Label>
Included Narratives
</Label>
<Badge variant="secondary" className="ml-auto text-xs">
{s.length}
{" selected"}
</Badge>
</div>
<ScrollArea className="h-28 rounded-md border bg-muted/30 p-3">
<div className="space-y-2">
{s.map((C) => (<div className="flex items-center gap-2 text-sm" key={C.id}>
<span className="font-medium text-foreground">
{C.title}
</span>
<span className="text-muted-foreground">
—
</span>
<span className="text-muted-foreground">
{C.lastUpdated}
</span>
</div>))}
</div>
</ScrollArea>
</div>
<div className="space-y-2">
<div className="flex items-center gap-2">
<FilterIcon className="h-4 w-4 text-muted-foreground" />
<Label>
Applied Filters
</Label>
</div>
<div className="rounded-md border bg-muted/30 p-3 text-sm space-y-1.5">
<div className="flex items-center justify-between">
<span className="text-muted-foreground">
Time Range:
</span>
<span className="text-foreground">
{g(a.timeRange)}
</span>
</div>
<div className="flex items-center justify-between">
<span className="text-muted-foreground">
Topics:
</span>
<span className="text-foreground">
{a.topics.length > 0 ? a.topics.join(", ") : "All Topics"}
</span>
</div>
<div className="flex items-center justify-between">
<span className="text-muted-foreground">
Narrative Type:
</span>
<span className="text-foreground">
{j(a.narrativeType)}
</span>
</div>
<div className="flex items-center justify-between">
<span className="text-muted-foreground">
Status:
</span>
<span className="text-foreground">
{w(a.status)}
</span>
</div>
</div>
</div>
<div className="space-y-2">
<div className="flex items-center gap-2">
<TagIcon className="h-4 w-4 text-muted-foreground" />
<Label htmlFor="tags">
Tags (Optional)
</Label>
</div>
<div className="flex items-center gap-2">
<Input id="tags" placeholder="Add a tag and press Enter" value={p} onChange={(C) => h(C.target.value)} onKeyDown={x} className="flex-1" />
<Button type="button" variant="outline" size="sm" onClick={f} disabled={!p.trim()}>
Add
</Button>
</div>
{u.length > 0 && (<div className="flex flex-wrap gap-1.5 pt-1">
{u.map((C) => (<Badge variant="secondary" className="pl-2 pr-1 py-1 gap-1" key={C}>
{C}
<button onClick={() => v(C)} className="ml-0.5 hover:bg-muted rounded-full p-0.5">
<XIcon className="h-3 w-3" />
</button>
</Badge>))}
</div>)}
</div>
</div>
<div className="flex justify-end gap-2 pt-2">
<Button variant="outline" onClick={b}>
Cancel
</Button>
<Button onClick={y} disabled={!i.trim()}>
Create Data Source
</Button>
</div>
</DialogContent>
</C_ot>);
}

export const mB = [{ value: "all", label: "All Activity" }, { value: "high", label: "High Risk" }, { value: "medium", label: "Medium Risk" }, { value: "low", label: "Low Risk" }];

export const pB = ["Financials", "Guidance", "Pipeline", "Clinical Data", "Regulatory", "Safety", "Strategy", "Investor Sentiment", "Competitive Positioning", "Execution Risk", "Messaging", "Market Activity"];

export const hB = [{ value: "7", label: "Last 7 days" }, { value: "30", label: "Last 30 days" }, { value: "90", label: "Last 90 days" }];

export const fB = [{ value: "all", label: "All Types" }, { value: "perception_theme", label: sa.perception_theme }, { value: "competitive_positioning", label: sa.competitive_positioning }, { value: "risk_narrative", label: sa.risk_narrative }, { value: "growth_story", label: sa.growth_story }, { value: "leadership_messaging", label: sa.leadership_messaging }, { value: "market_sentiment", label: sa.market_sentiment }];

export const xB = [{ value: "all", label: "All Statuses" }, { value: "active", label: Qa.active }, { value: "emerging", label: Qa.emerging }, { value: "fading", label: Qa.fading }, { value: "dormant", label: Qa.dormant }];

export function Y0({ label: e, selected: n, onClick: s }) {
  return (<button onClick={s} className={cn("px-3 py-1.5 rounded-full text-xs font-medium transition-colors whitespace-nowrap", n ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80")}>
{e}
</button>);
}

export function C_gB() {
  const e = useNavigate(), [n, s] = React.useState(""), [a, r] = React.useState("all"), [i, o] = React.useState("all"), [l, c] = React.useState("30"), [u, m] = React.useState(void 0), [p, h] = React.useState([]), [f, v] = React.useState("all"), [x, y] = React.useState(/* @__PURE__ */ new Set()), [b, g] = React.useState(null), [j, w] = React.useState(false), [C, P] = React.useState("external"), I = (N) => {
    c(N), m(void 0);
  }, L = (N) => {
    m(N), N != null && N.from && c("");
  }, z = (N) => {
    h((T) => T.includes(N) ? T.filter((_) => _ !== N) : [...T, N]);
  }, R = Bp.filter((N) => {
    const T = N.title.toLowerCase().includes(n.toLowerCase()), _ = a === "all" || N.narrativeType === a, q = i === "all" || N.status === i, A = f === "all" || N.riskLevel === f, $ = p.length === 0 || N.topics.some((ee) => p.includes(ee)), W = C === "both" || N.intelligenceType === C;
    return T && _ && q && A && $ && W;
  }), B = (N, T) => {
    y((_) => {
      const q = new Set(_);
      return T ? q.add(N) : q.delete(N), q;
    });
  }, J = (N) => {
    y(N ? new Set(R.map((T) => T.id)) : /* @__PURE__ */ new Set());
  }, X = R.length > 0 && R.every((N) => x.has(N.id)), k = R.some((N) => x.has(N.id)) && !X, V = Bp.filter((N) => x.has(N.id)), F = x.size > 0, S = (N) => {
    e(`/gei/entities/narratives/${N}`);
  }, E = (N) => {
    g(N);
  };
  return (<div className="flex-1 flex flex-col h-full overflow-hidden">
<div className="border-b border-border">
<div className="px-6 py-6 pr-6 max-w-[calc(100%-1.5rem)] flex items-center justify-between">
<div>
<div className="flex items-center gap-2 mb-1">
<MessageSquareIcon className="h-5 w-5 text-muted-foreground" />
<h1 className="text-xl font-semibold text-foreground">
Narratives
</h1>
</div>
<p className="text-sm text-muted-foreground">
Themes shaping investor perception over time
</p>
</div>
<Button variant="outline" size="sm" disabled={!F} onClick={() => w(true)} className="gap-2">
<DatabaseIcon className="h-4 w-4" />
Promote to Data Source
</Button>
</div>
</div>
<div className="p-4 pr-6 border-b border-border bg-muted/30 space-y-4">
<div className="flex items-center gap-3">
<div className="relative flex-1 max-w-md">
<SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
<Input placeholder="Search narratives by title" value={n} onChange={(N) => s(N.target.value)} className="pl-9" />
</div>
<C_le value={a} onValueChange={(N) => r(N)}>
<SelectTrigger className="w-48">
<C_ce placeholder="All Types" />
</SelectTrigger>
<SelectContent>
{fB.map((N) => (<SelectItem value={N.value} key={N.value}>
{N.label}
</SelectItem>))}
</SelectContent>
</C_le>
<C_le value={i} onValueChange={(N) => o(N)}>
<SelectTrigger className="w-40">
<C_ce placeholder="All Statuses" />
</SelectTrigger>
<SelectContent>
{xB.map((N) => (<SelectItem value={N.value} key={N.value}>
{N.label}
</SelectItem>))}
</SelectContent>
</C_le>
<C_le value={f} onValueChange={v}>
<SelectTrigger className="w-44">
<C_ce placeholder="All Activity" />
</SelectTrigger>
<SelectContent>
{mB.map((N) => (<SelectItem value={N.value} key={N.value}>
{N.label}
</SelectItem>))}
</SelectContent>
</C_le>
</div>
<Un value={C} onChange={P} />
<div className="flex items-center gap-2">
<span className="text-xs text-muted-foreground font-medium">
Time:
</span>
<div className="flex items-center gap-1">
{hB.map((N) => (<Y0 label={N.label} selected={l === N.value && !(u != null && u.from)} onClick={() => I(N.value)} key={N.value} />))}
<C_dn dateRange={u} onDateRangeChange={L} onClear={() => c("30")} />
</div>
</div>
<div className="flex items-center gap-2">
<span className="text-xs text-muted-foreground font-medium">
Topics:
</span>
<div className="flex items-center gap-1 overflow-x-auto pb-1">
{pB.map((N) => (<Y0 label={N} selected={p.includes(N)} onClick={() => z(N)} key={N} />))}
</div>
</div>
</div>
<div className="px-4 pr-6 py-2 border-b border-border bg-background flex items-center gap-3">
<Checkbox checked={X} ref={(N) => {
    N && (N.indeterminate = k);
  }} onCheckedChange={J} />
<span className="text-sm text-muted-foreground">
Select all (
{R.length}
{" in current view)"}
</span>
{F && (<span className="text-sm text-primary font-medium ml-auto">
{x.size}
{" selected"}
</span>)}
</div>
<div className="flex-1 overflow-y-auto p-4 pr-6">
<div className="space-y-3">
{R.length > 0 ? R.map((N) => (<C_lB narrative={N} showCheckbox selected={x.has(N.id)} onSelectChange={(T) => B(N.id, T)} onViewIntelligence={() => S(N.id)} on360View={() => E(N)} key={N.id} />)) : Bp.length === 0 ? (<div className="text-center py-12 text-muted-foreground">
<MessageSquareIcon className="h-12 w-12 mx-auto mb-4 opacity-50" />
<p>
No active narratives available
</p>
</div>) : (<div className="text-center py-12 text-muted-foreground">
<MessageSquareIcon className="h-12 w-12 mx-auto mb-4 opacity-50" />
<p>
No narratives match your filters
</p>
</div>)}
</div>
</div>
<K5 narrative={b} onClose={() => g(null)} />
<C_uB open={j} onClose={() => {
    w(false), y(/* @__PURE__ */ new Set());
  }} selectedNarratives={V} appliedFilters={{ timeRange: l, topics: p, narrativeType: a, status: i }} />
</div>);
}

export const Hp = { bullish: { icon: TrendingUpIcon, label: "Bullish", color: "text-emerald-600 bg-emerald-500/10" }, bearish: { icon: TrendingDownIcon, label: "Bearish", color: "text-red-600 bg-red-500/10" }, neutral: { icon: MinusIcon, label: "Neutral", color: "text-muted-foreground bg-muted" } };

export function C_vB({ signal: e, onViewIntelligence: n, on360View: s, selected: a = false, onSelectChange: r, showCheckbox: i = false }) {
  var u;
  const o = { high: "text-primary bg-primary/10", medium: "text-amber-600 bg-amber-500/10", low: "text-muted-foreground bg-muted" }, l = { high: "High", medium: "Medium", low: "Low" }, C_c = Hp[e.direction].icon;
  return (<div className={cn("w-full flex items-center gap-4 p-4 rounded-lg border bg-card", "transition-all duration-200", a ? "border-primary/50 bg-primary/5" : "border-border hover:border-primary/30 hover:shadow-sm")}>
{i && (<Checkbox checked={a} onCheckedChange={(m) => r == null ? void 0 : r(m === true)} className="shrink-0" />)}
<div className="flex-1 min-w-0 max-w-[280px]">
<div className="flex items-center gap-2 mb-0.5">
<h3 className="text-sm font-semibold text-foreground truncate">
{e.name}
</h3>
</div>
<div className="flex items-center gap-2">
<Badge variant="outline" className={cn("text-xs font-normal", i$[e.signalType])}>
{ac[e.signalType]}
</Badge>
<span className="text-xs text-muted-foreground flex items-center gap-1">
<ChartLineIcon className="h-3 w-3" />
{e.signalDate}
</span>
</div>
</div>
<div className="flex-1 flex items-center gap-1.5 justify-center">
{(u = e.activeTopics) == null ? void 0 : u.slice(0, 4).map((m) => (<Badge variant="secondary" className="text-xs font-normal px-2 py-0.5" key={m}>
{m}
</Badge>))}
</div>
<div className="flex items-center gap-4">
<div className="flex items-center gap-2">
<div className={cn("inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium", Hp[e.direction].color)}>
<C_c className="h-3 w-3" />
{Hp[e.direction].label}
</div>
<div className={cn("inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium", o[e.magnitude])}>
<ActivityIcon className="h-3 w-3" />
{l[e.magnitude]}
</div>
</div>
<div className="flex items-center gap-2">
<Button size="sm" onClick={(m) => {
    m.stopPropagation(), n();
  }} className="text-xs h-8">
<EyeIcon className="h-3.5 w-3.5 mr-1.5" />
View Intelligence
</Button>
<Button variant="ghost" size="sm" onClick={(m) => {
    m.stopPropagation(), s();
  }} className="text-xs h-8 text-muted-foreground hover:text-foreground">
<CompassIcon className="h-3.5 w-3.5 mr-1.5" />
360° View
</Button>
</div>
</div>
</div>);
}

export const Wp = { bullish: { icon: TrendingUpIcon, label: "Bullish", color: "text-emerald-600 bg-emerald-500/10 border-emerald-500/20" }, bearish: { icon: TrendingDownIcon, label: "Bearish", color: "text-red-600 bg-red-500/10 border-red-500/20" }, neutral: { icon: MinusIcon, label: "Neutral", color: "text-muted-foreground bg-muted border-border" } };

export const yB = { overview: "No detailed intelligence available for this market signal", keyMetrics: [], driverAnalysis: [], crossEntityRefs: [], narrativePatterns: [], timeline: [] };

export const jB = [{ id: "overview", label: "Signal Overview", icon: ChartLineIcon }, { id: "metrics", label: "Key Metrics", icon: ChartColumnIcon }, { id: "drivers", label: "Driver Analysis", icon: TargetIcon }, { id: "crossrefs", label: "Cross-Entity References", icon: Link2Icon }, { id: "narratives", label: "Narrative Patterns", icon: LayersIcon }, { id: "timeline", label: "Signal Timeline", icon: ClockIcon }];

export function X5({ signal: e, onClose: n }) {
  if (!e) return null;
  const s = { high: "text-primary bg-primary/10 border-primary/20", medium: "text-amber-600 bg-amber-500/10 border-amber-500/20", low: "text-muted-foreground bg-muted border-border" }, a = l$(e.id) || yB, C_r = Wp[e.direction].icon, i = (o) => {
    switch (o) {
      case "overview":
        return (<div className="space-y-2">
<div className="flex items-center gap-2 mb-2">
<span className="text-xs font-medium text-foreground">
{e.name}
</span>
<span className="text-xs text-muted-foreground">
•
</span>
<span className="text-xs text-muted-foreground">
{ac[e.signalType]}
</span>
</div>
<p className="text-xs text-muted-foreground leading-relaxed">
{a.overview}
</p>
</div>);
      case "metrics":
        return (<div className="space-y-3">
{a.keyMetrics.map((l, c) => (<div className="flex items-center justify-between border-b border-border pb-2 last:border-0 last:pb-0" key={c}>
<div>
<p className="text-xs font-medium text-foreground">
{l.metric}
</p>
<p className="text-xs text-muted-foreground">
{l.context}
</p>
</div>
<span className="text-sm font-semibold text-primary">
{l.value}
</span>
</div>))}
</div>);
      case "drivers":
        return (<div className="space-y-3">
{a.driverAnalysis.map((l, c) => (<div className="border-l-2 border-border pl-3" key={c}>
<p className="text-xs font-medium text-foreground mb-0.5">
{l.factor}
</p>
<p className="text-xs text-muted-foreground">
{l.detail}
</p>
</div>))}
</div>);
      case "crossrefs":
        return (<div className="space-y-3">
{a.crossEntityRefs.map((l, c) => (<div className="border-l-2 border-border pl-3" key={c}>
<p className="text-xs font-medium text-foreground mb-1">
{l.type}
</p>
<div className="flex flex-wrap gap-1">
{l.entities.map((u) => (<span className="px-2 py-0.5 bg-muted/50 text-xs text-muted-foreground rounded" key={u}>
{u}
</span>))}
</div>
</div>))}
</div>);
      case "narratives":
        return (<ul className="space-y-1.5">
{a.narrativePatterns.map((l, c) => (<li className="text-xs text-muted-foreground flex items-start gap-2" key={c}>
<span className="text-primary mt-1">
•
</span>
{l}
</li>))}
</ul>);
      case "timeline":
        return (<div className="space-y-2">
{a.timeline.map((l, c) => (<div className="flex items-start gap-3" key={c}>
<span className="text-xs text-muted-foreground whitespace-nowrap min-w-[100px]">
{l.date}
</span>
<span className="text-xs text-foreground/80">
{l.activity}
</span>
</div>))}
</div>);
      default:
        return null;
    }
  };
  return (<Sheet open={!!e} onOpenChange={() => n()}>
<SheetContent className="w-full sm:max-w-lg overflow-y-auto">
<SheetHeader className="pb-4">
<SheetTitle className="text-lg font-semibold">
Market Signal 360° Intelligence View
</SheetTitle>
</SheetHeader>
<div className="bg-muted/50 rounded-lg p-4 mb-6">
<div className="flex items-start justify-between mb-3">
<div>
<h2 className="text-lg font-semibold text-foreground">
{e.name}
</h2>
<div className="flex items-center gap-2 mt-1">
<span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary">
{ac[e.signalType]}
</span>
<span className="text-xs text-muted-foreground">
{e.signalDate}
</span>
</div>
</div>
<div className="flex flex-col items-end gap-1.5">
<div className={cn("inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border", Wp[e.direction].color)}>
<C_r className="h-3 w-3" />
{Wp[e.direction].label}
</div>
<div className={cn("inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border", s[e.magnitude])}>
<ActivityIcon className="h-3 w-3" />
{e.magnitude === "high" ? "High Magnitude" : e.magnitude === "medium" ? "Medium Magnitude" : "Low Magnitude"}
</div>
</div>
</div>
</div>
<div className="space-y-4">
{jB.map((o) => {
    const C_l = o.icon;
    return (<div className="border border-border rounded-lg p-4" key={o.id}>
<div className="flex items-center gap-2 mb-3">
<C_l className="h-4 w-4 text-muted-foreground" />
<h3 className="text-sm font-semibold text-foreground">
{o.label}
</h3>
</div>
{i(o.id)}
</div>);
  })}
</div>
<C_bB entityId={e.id} />
<Separator className="my-6" />
<p className="text-xs text-muted-foreground text-center">
For full intelligence and curation, use View Intelligence
</p>
</SheetContent>
</Sheet>);
}

export function C_bB({ entityId: e }) {
  const n = Lo(e), a = { on_message: { icon: CircleCheckBigIcon, iconColor: "text-emerald-600", bgColor: "bg-emerald-500/10" }, careful_framing: { icon: TriangleAlertIcon, iconColor: "text-amber-600", bgColor: "bg-amber-500/10" }, contradiction_risk: { icon: CircleAlertIcon, iconColor: "text-red-600", bgColor: "bg-red-500/10" } }[n.status], C_r = a.icon;
  return (<div className="border border-border rounded-lg p-4">
<div className="flex items-center gap-2 mb-3">
<FileTextIcon className="h-4 w-4 text-muted-foreground" />
<h3 className="text-sm font-semibold text-foreground">
Narrative Continuity
</h3>
</div>
<div className={cn("rounded-lg p-3 mb-3", a.bgColor)}>
<div className="flex items-start gap-2">
<C_r className={cn("h-4 w-4 mt-0.5", a.iconColor)} />
<div>
<p className={cn("text-sm font-medium", a.iconColor)}>
{n.label}
</p>
<p className="text-xs text-muted-foreground mt-0.5">
{n.description}
</p>
</div>
</div>
</div>
<div className="flex items-center gap-1.5 text-xs text-muted-foreground">
<InfoIcon className="h-3 w-3" />
<span>
Advisory only — not disclosure guidance
</span>
</div>
</div>);
}

export function C_wB({ open: e, onClose: n, selectedSignals: s, appliedFilters: a }) {
  const { toast: r } = useToast(), [i, o] = React.useState(""), [l, c] = React.useState(""), [u, m] = React.useState([]), [p, h] = React.useState(""), f = () => {
    p.trim() && !u.includes(p.trim()) && (m([...u, p.trim()]), h(""));
  }, v = (w) => {
    m(u.filter((C) => C !== w));
  }, x = (w) => {
    w.key === "Enter" && (w.preventDefault(), f());
  }, y = () => {
    i.trim() && (r({ title: "Market signal data source created successfully", description: `"${i}" with ${s.length} signals has been saved.` }), o(""), c(""), m([]), n());
  }, b = () => {
    o(""), c(""), m([]), n();
  }, g = (w) => ({ 7: "Last 7 days", 30: "Last 30 days", 90: "Last 90 days" })[w] || w, j = (w) => w === "all" ? "All Signal Types" : ac[w] || w;
  return (<C_ot open={e} onOpenChange={b}>
<DialogContent className="sm:max-w-lg">
<DialogHeader>
<DialogTitle className="flex items-center gap-2">
<DatabaseIcon className="h-5 w-5 text-primary" />
Create Market Signal Data Source
</DialogTitle>
<DialogDescription>
Save this set of market signals as a governed external data source for use across IR Co-Pilot modules.
</DialogDescription>
</DialogHeader>
<div className="space-y-5 py-2">
<div className="space-y-2">
<Label htmlFor="source-name">
{"Data Source Name "}
<span className="text-destructive">
*
</span>
</Label>
<Input id="source-name" placeholder="Market Volatility Signals — Q3 2026" value={i} onChange={(w) => o(w.target.value)} />
</div>
<div className="space-y-2">
<Label htmlFor="source-description">
Description
</Label>
<Textarea id="source-description" placeholder="Briefly describe the purpose or usage of this signal source" value={l} onChange={(w) => c(w.target.value)} rows={2} />
</div>
<div className="space-y-2">
<div className="flex items-center gap-2">
<ChartLineIcon className="h-4 w-4 text-muted-foreground" />
<Label>
Included Signals
</Label>
<Badge variant="secondary" className="ml-auto text-xs">
{s.length}
{" selected"}
</Badge>
</div>
<ScrollArea className="h-28 rounded-md border bg-muted/30 p-3">
<div className="space-y-2">
{s.map((w) => (<div className="flex items-center gap-2 text-sm" key={w.id}>
<span className="font-medium text-foreground">
{w.name}
</span>
<span className="text-muted-foreground">
—
</span>
<span className="text-muted-foreground">
{w.signalDate}
</span>
</div>))}
</div>
</ScrollArea>
</div>
<div className="space-y-2">
<div className="flex items-center gap-2">
<FilterIcon className="h-4 w-4 text-muted-foreground" />
<Label>
Applied Filters
</Label>
</div>
<div className="rounded-md border bg-muted/30 p-3 text-sm space-y-1.5">
<div className="flex items-center justify-between">
<span className="text-muted-foreground">
Time Range:
</span>
<span className="text-foreground">
{g(a.timeRange)}
</span>
</div>
<div className="flex items-center justify-between">
<span className="text-muted-foreground">
Topics:
</span>
<span className="text-foreground">
{a.topics.length > 0 ? a.topics.join(", ") : "All Topics"}
</span>
</div>
<div className="flex items-center justify-between">
<span className="text-muted-foreground">
Signal Type:
</span>
<span className="text-foreground">
{j(a.signalType)}
</span>
</div>
<div className="flex items-center justify-between">
<span className="text-muted-foreground">
Magnitude:
</span>
<span className="text-foreground">
{a.magnitude === "all" ? "All Magnitudes" : a.magnitude.charAt(0).toUpperCase() + a.magnitude.slice(1)}
</span>
</div>
<div className="flex items-center justify-between">
<span className="text-muted-foreground">
Direction:
</span>
<span className="text-foreground">
{a.direction === "all" ? "All Directions" : a.direction.charAt(0).toUpperCase() + a.direction.slice(1)}
</span>
</div>
</div>
</div>
<div className="space-y-2">
<div className="flex items-center gap-2">
<TagIcon className="h-4 w-4 text-muted-foreground" />
<Label htmlFor="tags">
Tags (Optional)
</Label>
</div>
<div className="flex items-center gap-2">
<Input id="tags" placeholder="Add a tag and press Enter" value={p} onChange={(w) => h(w.target.value)} onKeyDown={x} className="flex-1" />
<Button type="button" variant="outline" size="sm" onClick={f} disabled={!p.trim()}>
Add
</Button>
</div>
{u.length > 0 && (<div className="flex flex-wrap gap-1.5 pt-1">
{u.map((w) => (<Badge variant="secondary" className="pl-2 pr-1 py-1 gap-1" key={w}>
{w}
<button onClick={() => v(w)} className="ml-0.5 hover:bg-muted rounded-full p-0.5">
<XIcon className="h-3 w-3" />
</button>
</Badge>))}
</div>)}
</div>
</div>
<div className="flex justify-end gap-2 pt-2">
<Button variant="outline" onClick={b}>
Cancel
</Button>
<Button onClick={y} disabled={!i.trim()}>
Create Data Source
</Button>
</div>
</DialogContent>
</C_ot>);
}

export const NB = ["Financials", "Guidance", "Pipeline", "Clinical Data", "Regulatory", "Safety", "Strategy", "Investor Sentiment", "Competitive Positioning", "Execution Risk", "Messaging", "Market Activity"];

export const CB = [{ value: "7", label: "Last 7 days" }, { value: "30", label: "Last 30 days" }, { value: "90", label: "Last 90 days" }];

export const SB = [{ value: "all", label: "All Signal Types" }, { value: "price_volatility", label: "Price Volatility" }, { value: "volume_spike", label: "Volume Spike" }, { value: "sentiment_shift", label: "Sentiment Shift" }, { value: "sector_rotation", label: "Sector Rotation" }, { value: "options_activity", label: "Options Activity" }, { value: "analyst_action", label: "Analyst Action" }];

export const kB = [{ value: "all", label: "All Activity" }, { value: "high", label: "High" }, { value: "medium", label: "Medium" }, { value: "low", label: "Low" }];

export const TB = [{ value: "all", label: "All Directions" }, { value: "bullish", label: "Bullish" }, { value: "bearish", label: "Bearish" }, { value: "neutral", label: "Neutral" }];

export const K0 = rc.map((e) => ({ id: e.id, name: e.name, signalType: e.signalType, signalDate: e.signalDate, magnitude: e.magnitude, activeTopics: e.topics, direction: e.direction, intelligenceType: e.intelligenceType }));

export function X0({ label: e, selected: n, onClick: s }) {
  return (<button onClick={s} className={cn("px-3 py-1.5 rounded-full text-xs font-medium transition-colors whitespace-nowrap", n ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80")}>
{e}
</button>);
}

export function PB() {
  const e = useNavigate(), [n, s] = React.useState(""), [a, r] = React.useState("all"), [i, o] = React.useState("all"), [l, c] = React.useState("all"), [u, m] = React.useState("30"), [p, h] = React.useState(void 0), [f, v] = React.useState([]), [x, y] = React.useState(/* @__PURE__ */ new Set()), [b, g] = React.useState(null), [j, w] = React.useState(false), [C, P] = React.useState("external"), I = (N) => {
    m(N), h(void 0);
  }, L = (N) => {
    h(N), N != null && N.from && m("");
  }, z = (N) => {
    v((T) => T.includes(N) ? T.filter((_) => _ !== N) : [...T, N]);
  }, R = K0.filter((N) => {
    var ee;
    const T = N.name.toLowerCase().includes(n.toLowerCase()), _ = a === "all" || N.signalType === a, q = i === "all" || N.magnitude === i, A = l === "all" || N.direction === l, $ = f.length === 0 || ((ee = N.activeTopics) == null ? void 0 : ee.some((Q) => f.includes(Q))), W = C === "both" || N.intelligenceType === C;
    return T && _ && q && A && $ && W;
  }), B = K0.filter((N) => x.has(N.id)), J = x.size > 0, X = (N, T) => {
    y((_) => {
      const q = new Set(_);
      return T ? q.add(N) : q.delete(N), q;
    });
  }, k = (N) => {
    y(N ? new Set(R.map((T) => T.id)) : /* @__PURE__ */ new Set());
  }, V = R.length > 0 && R.every((N) => x.has(N.id)), F = R.some((N) => x.has(N.id)) && !V, S = (N) => {
    e(`/gei/entities/market-signals/${N}`);
  }, E = (N) => {
    g(N);
  };
  return (<div className="flex-1 flex flex-col h-full overflow-hidden">
<div className="border-b border-border">
<div className="px-6 py-6 pr-6 max-w-[calc(100%-1.5rem)] flex items-center justify-between">
<div>
<div className="flex items-center gap-2 mb-1">
<ChartLineIcon className="h-5 w-5 text-muted-foreground" />
<h1 className="text-xl font-semibold text-foreground">
Market Signals
</h1>
</div>
<p className="text-sm text-muted-foreground">
Real-time market data and sentiment patterns across the coverage universe
</p>
</div>
<Button variant="outline" size="sm" disabled={!J} onClick={() => w(true)} className="gap-2">
<DatabaseIcon className="h-4 w-4" />
Promote to Data Source
</Button>
</div>
</div>
<div className="p-4 pr-6 border-b border-border bg-muted/30 space-y-4">
<div className="flex items-center gap-3">
<div className="relative flex-1 max-w-md">
<SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
<Input placeholder="Search signals by name" value={n} onChange={(N) => s(N.target.value)} className="pl-9" />
</div>
<C_le value={a} onValueChange={(N) => r(N)}>
<SelectTrigger className="w-44">
<C_ce placeholder="All Signal Types" />
</SelectTrigger>
<SelectContent>
{SB.map((N) => (<SelectItem value={N.value} key={N.value}>
{N.label}
</SelectItem>))}
</SelectContent>
</C_le>
<C_le value={i} onValueChange={o}>
<SelectTrigger className="w-36">
<C_ce placeholder="All Activity" />
</SelectTrigger>
<SelectContent>
{kB.map((N) => (<SelectItem value={N.value} key={N.value}>
{N.label}
</SelectItem>))}
</SelectContent>
</C_le>
<C_le value={l} onValueChange={c}>
<SelectTrigger className="w-36">
<C_ce placeholder="All Directions" />
</SelectTrigger>
<SelectContent>
{TB.map((N) => (<SelectItem value={N.value} key={N.value}>
{N.label}
</SelectItem>))}
</SelectContent>
</C_le>
</div>
<Un value={C} onChange={P} />
<div className="flex items-center gap-2">
<span className="text-xs text-muted-foreground font-medium">
Time:
</span>
<div className="flex items-center gap-1">
{CB.map((N) => (<X0 label={N.label} selected={u === N.value && !(p != null && p.from)} onClick={() => I(N.value)} key={N.value} />))}
<C_dn dateRange={p} onDateRangeChange={L} onClear={() => m("30")} />
</div>
</div>
<div className="flex items-center gap-2">
<span className="text-xs text-muted-foreground font-medium">
Topics:
</span>
<div className="flex items-center gap-1 overflow-x-auto pb-1">
{NB.map((N) => (<X0 label={N} selected={f.includes(N)} onClick={() => z(N)} key={N} />))}
</div>
</div>
</div>
<div className="px-4 pr-6 py-2 border-b border-border bg-background flex items-center gap-3">
<Checkbox checked={V} ref={(N) => {
    N && (N.indeterminate = F);
  }} onCheckedChange={k} />
<span className="text-sm text-muted-foreground">
Select all (
{R.length}
{" in current view)"}
</span>
{J && (<span className="text-sm text-primary font-medium ml-auto">
{x.size}
{" selected"}
</span>)}
</div>
<div className="flex-1 overflow-y-auto p-4 pr-6">
<div className="space-y-3">
{R.length > 0 ? R.map((N) => (<C_vB signal={N} showCheckbox selected={x.has(N.id)} onSelectChange={(T) => X(N.id, T)} onViewIntelligence={() => S(N.id)} on360View={() => E(N)} key={N.id} />)) : (<div className="text-center py-12 text-muted-foreground">
<ChartLineIcon className="h-12 w-12 mx-auto mb-4 opacity-50" />
<p>
No market signals match your filters
</p>
</div>)}
</div>
</div>
<X5 signal={b} onClose={() => g(null)} />
<C_wB open={j} onClose={() => {
    w(false), y(/* @__PURE__ */ new Set());
  }} selectedSignals={B} appliedFilters={{ timeRange: u, topics: f, signalType: a, magnitude: i, direction: l }} />
</div>);
}

export function EB({ index: e, isSelected: n, onSelect: s, onViewDetails: a, onViewIntelligence: r }) {
  const i = ic[e.category], o = Sf[e.activityLevel];
  return (<div className={cn("w-full flex items-center gap-4 p-4 rounded-lg border bg-card", "transition-all duration-200", n ? "border-primary/50 bg-primary/5" : "border-border hover:border-primary/30 hover:shadow-sm")}>
<Checkbox checked={n} onCheckedChange={(l) => s(e.id, l === true)} className="shrink-0" />
<div className="flex-1 min-w-0 max-w-[260px]">
<div className="flex items-center gap-2 mb-0.5">
<h3 className="text-sm font-semibold text-foreground truncate">
{e.name}
</h3>
<span className="text-xs text-muted-foreground shrink-0">
(
{e.owner}
)
</span>
</div>
<Badge variant="outline" className="text-xs font-normal">
<CalendarClockIcon className="h-3 w-3 mr-1" />
{T5[e.updateCadence]}
</Badge>
</div>
<div className="flex-1 flex items-center gap-1.5 justify-center">
{e.focusAreas.slice(0, 4).map((l) => (<Badge variant="secondary" className="text-xs font-normal px-2 py-0.5" key={l}>
{l}
</Badge>))}
</div>
<div className="flex items-center gap-4">
<div className="flex flex-col items-end gap-1">
<div className="flex items-center gap-2">
<Badge className={cn("text-xs", i.className)}>
{i.label}
</Badge>
<div className={cn("inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium", o.className)}>
<ActivityIcon className="h-3 w-3" />
{o.label}
</div>
</div>
<span className="text-xs text-muted-foreground">
{e.lastUpdated}
</span>
</div>
<div className="flex items-center gap-2">
<Button size="sm" onClick={(l) => {
    l.stopPropagation(), r(e.id);
  }} className="text-xs h-8">
<EyeIcon className="h-3.5 w-3.5 mr-1.5" />
View Intelligence
</Button>
<Button variant="ghost" size="sm" onClick={(l) => {
    l.stopPropagation(), a(e);
  }} className="text-xs h-8 text-muted-foreground hover:text-foreground">
<CompassIcon className="h-3.5 w-3.5 mr-1.5" />
360° View
</Button>
</div>
</div>
</div>);
}

export const MB = { evidence: { icon: CircleCheckBigIcon, color: "text-emerald-600 dark:text-emerald-400", bgColor: "bg-emerald-500/10", label: "Evidence exists" }, partial: { icon: TriangleAlertIcon, color: "text-amber-600 dark:text-amber-400", bgColor: "bg-amber-500/10", label: "Partial coverage" }, gap: { icon: CircleXIcon, color: "text-red-600 dark:text-red-400", bgColor: "bg-red-500/10", label: "Gap identified" } };

export function RB({ current: e, previous: n }) {
  if (!n) return null;
  const s = parseFloat(e), a = parseFloat(n);
  if (isNaN(s) || isNaN(a)) return e === n ? (<MinusIcon className="h-4 w-4 text-muted-foreground" />) : null;
  const r = s > a;
  return s === a ? (<MinusIcon className="h-4 w-4 text-muted-foreground" />) : r ? (<TrendingUpIcon className="h-4 w-4 text-emerald-600" />) : (<TrendingDownIcon className="h-4 w-4 text-amber-600" />);
}

export function Z5({ index: e, onClose: n }) {
  const s = useNavigate();
  if (!e) return null;
  const a = ic[e.category], r = j$(e), i = r.slice(0, 4), o = r.filter((c) => c.type === "external_signal"), l = () => {
    n(), s(`/gei/entities/indices/${e.id}`);
  };
  return (<Sheet open={!!e} onOpenChange={() => n()}>
<SheetContent className="w-[500px] sm:max-w-[500px] overflow-y-auto">
<SheetHeader className="pb-4">
<div className="flex items-start justify-between">
<div className="flex items-center gap-2">
<ChartColumnIcon className="h-5 w-5 text-primary" />
<SheetTitle className="text-lg">
360° Intelligence View
</SheetTitle>
</div>
</div>
</SheetHeader>
<div className="space-y-6">
<section>
<h3 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
<Building2Icon className="h-4 w-4 text-muted-foreground" />
Index Overview
</h3>
<div className="bg-muted/30 rounded-lg p-4 space-y-3">
<div>
<h4 className="font-semibold text-foreground">
{e.name}
</h4>
<p className="text-sm text-muted-foreground mt-1">
{e.description}
</p>
</div>
<div className="grid grid-cols-2 gap-3 text-sm">
<div>
<span className="text-muted-foreground">
Owner:
</span>
<p className="font-medium">
{e.owner}
</p>
</div>
<div>
<span className="text-muted-foreground">
Category:
</span>
<Badge className={cn("ml-2", a.className)}>
{a.label}
</Badge>
</div>
<div>
<span className="text-muted-foreground">
Update Cadence:
</span>
<p className="font-medium">
{T5[e.updateCadence]}
</p>
</div>
<div>
<span className="text-muted-foreground">
Submission Model:
</span>
<p className="font-medium">
{v$[e.submissionModel]}
</p>
</div>
</div>
</div>
</section>
<Separator />
<section>
<h3 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
<ChartColumnIcon className="h-4 w-4 text-muted-foreground" />
Index Score Snapshot
</h3>
<div className="border border-border rounded-lg p-4">
<div className="grid grid-cols-3 gap-4 mb-4">
<div className="text-center">
<p className="text-xs text-muted-foreground mb-1">
Current Score
</p>
<div className="flex items-center justify-center gap-1">
<span className="text-2xl font-bold text-foreground">
{e.score.status || e.score.currentScore}
</span>
<RB current={e.score.currentScore} previous={e.score.previousScore} />
</div>
{e.score.riskCategory && (<Badge variant="outline" className="mt-1 text-xs">
{e.score.riskCategory}
</Badge>)}
</div>
{e.score.previousScore && (<div className="text-center">
<p className="text-xs text-muted-foreground mb-1">
Previous Score
</p>
<span className="text-lg font-semibold text-muted-foreground">
{e.score.previousScore}
</span>
</div>)}
<div className="text-center">
<p className="text-xs text-muted-foreground mb-1">
Reporting Cycle
</p>
<span className="text-lg font-semibold text-foreground">
{e.score.reportingCycle}
</span>
</div>
</div>
{e.score.subScores && e.score.subScores.length > 0 && (<div className="border-t border-border pt-3 mt-3">
<p className="text-xs text-muted-foreground mb-2">
Sub-Scores:
</p>
<div className="flex items-center gap-4">
{e.score.subScores.map((c) => (<div className="text-center" key={c.label}>
<span className="text-sm font-semibold">
{c.value}
</span>
<p className="text-xs text-muted-foreground">
{c.label}
</p>
</div>))}
</div>
</div>)}
<div className="flex items-start gap-2 mt-4 p-2 bg-muted/50 rounded text-xs text-muted-foreground">
<CircleAlertIcon className="h-3.5 w-3.5 flex-shrink-0 mt-0.5" />
<span>
Scores are shown for contextual awareness only. GEI does not calculate, influence, or predict index ratings.
</span>
</div>
</div>
</section>
<Separator />
<section>
<h3 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
<FileTextIcon className="h-4 w-4 text-muted-foreground" />
{"Key Pillars & Focus Areas"}
</h3>
<div className="space-y-3">
<div>
<p className="text-xs text-muted-foreground mb-2">
Pillars:
</p>
<div className="space-y-1">
{e.pillars.map((c) => (<div className="text-sm py-1.5 px-3 bg-muted/30 rounded" key={c.id}>
{c.name}
</div>))}
</div>
</div>
<div>
<p className="text-xs text-muted-foreground mb-2">
Focus Areas:
</p>
<div className="flex flex-wrap gap-1.5">
{e.focusAreas.map((c) => (<Badge variant="secondary" className="text-xs" key={c}>
{c}
</Badge>))}
</div>
</div>
</div>
</section>
<Separator />
<section>
<h3 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
<CircleCheckBigIcon className="h-4 w-4 text-muted-foreground" />
Evidence Coverage Summary
</h3>
<div className="space-y-2">
{Object.entries(e.readinessIndicators).map(([c, u]) => {
    const m = MB[u], C_p = m.icon, h = e.pillars.flatMap((f) => f.criteria).find((f) => f.id === c);
    return (<div className={cn("flex items-center gap-2 p-2 rounded", m.bgColor)} key={c}>
<C_p className={cn("h-4 w-4", m.color)} />
<span className="text-sm flex-1">
{(h == null ? void 0 : h.name) || c}
</span>
<span className={cn("text-xs", m.color)}>
{m.label}
</span>
</div>);
  })}
</div>
</section>
<Separator />
<section>
<h3 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
<TrendingUpIcon className="h-4 w-4 text-muted-foreground" />
External Pressure Summary
</h3>
{o.length > 0 ? (<div className="space-y-2">
{o.slice(0, 3).map((c) => (<div className="p-3 bg-muted/30 rounded-lg text-sm" key={c.id}>
<div className="flex items-center justify-between mb-1">
<span className="font-medium text-foreground">
{c.classification}
</span>
{c.tone && (<Badge variant="outline" className="text-xs">
{c.tone}
</Badge>)}
</div>
<p className="text-muted-foreground text-xs line-clamp-2">
{c.content}
</p>
</div>))}
</div>) : (<p className="text-sm text-muted-foreground">
No external signals recorded
</p>)}
</section>
<Separator />
<section>
<h3 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
<ClockIcon className="h-4 w-4 text-muted-foreground" />
Recent Activity
</h3>
{i.length > 0 ? (<div className="space-y-2">
{i.map((c) => (<div className="flex items-start gap-3 p-2 border-l-2 border-border pl-3" key={c.id}>
<div className="flex-1">
<p className="text-sm font-medium text-foreground">
{c.classification}
</p>
<p className="text-xs text-muted-foreground">
{c.source}
</p>
</div>
{c.date && (<span className="text-xs text-muted-foreground flex-shrink-0">
{c.date}
</span>)}
</div>))}
</div>) : (<p className="text-sm text-muted-foreground">
No recent activity
</p>)}
</section>
<div className="pt-4">
<Button onClick={l} className="w-full">
<EyeIcon className="h-4 w-4 mr-2" />
View Full Intelligence
</Button>
</div>
</div>
</SheetContent>
</Sheet>);
}

export const IB = ["Access", "Climate", "Environmental", "ESG", "Governance", "Social", "Sustainability", "Health Equity", "R&D", "Pricing", "Philanthropy", "Emissions"];

export const AB = [{ value: "7", label: "Last 7 days" }, { value: "30", label: "Last 30 days" }, { value: "90", label: "Last 90 days" }];

export function Z0({ label: e, selected: n, onClick: s }) {
  return (<button onClick={s} className={cn("px-3 py-1.5 rounded-full text-xs font-medium transition-colors whitespace-nowrap", n ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80")}>
{e}
</button>);
}

export function DB() {
  const e = useNavigate(), [n, s] = React.useState(""), [a, r] = React.useState("all"), [i, o] = React.useState("all"), [l, c] = React.useState("30"), [u, m] = React.useState(void 0), [p, h] = React.useState([]), [f, v] = React.useState(/* @__PURE__ */ new Set()), [x, y] = React.useState(null), [b, g] = React.useState("external"), j = (k) => {
    c(k), m(void 0);
  }, w = (k) => {
    m(k), k != null && k.from && c("");
  }, C = (k) => {
    h((V) => V.includes(k) ? V.filter((F) => F !== k) : [...V, k]);
  }, P = Lc.filter((k) => {
    if (n) {
      const V = n.toLowerCase();
      if (!(k.name.toLowerCase().includes(V) || k.owner.toLowerCase().includes(V) || k.focusAreas.some((S) => S.toLowerCase().includes(V)))) return false;
    }
    return !(a !== "all" && k.category !== a || i !== "all" && k.activityLevel !== i || p.length > 0 && !p.some((F) => k.focusAreas.includes(F)));
  }), I = (k, V) => {
    v((F) => {
      const S = new Set(F);
      return V ? S.add(k) : S.delete(k), S;
    });
  }, L = (k) => {
    v(k ? new Set(P.map((V) => V.id)) : /* @__PURE__ */ new Set());
  }, z = P.length > 0 && P.every((k) => f.has(k.id)), R = P.some((k) => f.has(k.id)) && !z, B = f.size > 0, J = (k) => {
    e(`/gei/entities/indices/${k}`);
  }, X = (k) => {
    y(k);
  };
  return (<div className="flex-1 flex flex-col h-full overflow-hidden">
<div className="border-b border-border">
<div className="px-6 py-6 pr-6 max-w-[calc(100%-1.5rem)] flex items-center justify-between">
<div>
<div className="flex items-center gap-2 mb-1">
<ChartColumnIcon className="h-5 w-5 text-muted-foreground" />
<h1 className="text-xl font-semibold text-foreground">
{"Indices & Scores"}
</h1>
</div>
<p className="text-sm text-muted-foreground">
External indices and benchmarks that evaluate company disclosures, commitments, and performance
</p>
</div>
<Button variant="outline" size="sm" disabled={!B} className="gap-2">
<DatabaseIcon className="h-4 w-4" />
Promote to Data Source
</Button>
</div>
</div>
<div className="p-4 pr-6 border-b border-border bg-muted/30 space-y-4">
<div className="flex items-center gap-3">
<div className="relative flex-1 max-w-md">
<SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
<Input placeholder="Search indices by name or owner" value={n} onChange={(k) => s(k.target.value)} className="pl-9" />
</div>
<C_le value={a} onValueChange={r}>
<SelectTrigger className="w-48">
<C_ce placeholder="All Categories" />
</SelectTrigger>
<SelectContent>
<SelectItem value="all">
All Categories
</SelectItem>
{Object.keys(ic).map((k) => (<SelectItem value={k} key={k}>
{ic[k].label}
</SelectItem>))}
</SelectContent>
</C_le>
<C_le value={i} onValueChange={o}>
<SelectTrigger className="w-36">
<C_ce placeholder="All Activity" />
</SelectTrigger>
<SelectContent>
<SelectItem value="all">
All Activity
</SelectItem>
{Object.keys(Sf).map((k) => (<SelectItem value={k} key={k}>
{Sf[k].label}
</SelectItem>))}
</SelectContent>
</C_le>
</div>
<Un value={b} onChange={g} />
<div className="flex items-center gap-2">
<span className="text-xs text-muted-foreground font-medium">
Time:
</span>
<div className="flex items-center gap-1">
{AB.map((k) => (<Z0 label={k.label} selected={l === k.value && !(u != null && u.from)} onClick={() => j(k.value)} key={k.value} />))}
<C_dn dateRange={u} onDateRangeChange={w} onClear={() => c("30")} />
</div>
</div>
<div className="flex items-center gap-2">
<span className="text-xs text-muted-foreground font-medium">
Topics:
</span>
<div className="flex items-center gap-1 overflow-x-auto pb-1">
{IB.map((k) => (<Z0 label={k} selected={p.includes(k)} onClick={() => C(k)} key={k} />))}
</div>
</div>
</div>
<div className="px-4 pr-6 py-2 border-b border-border bg-background flex items-center gap-3">
<Checkbox checked={z} ref={(k) => {
    k && (k.indeterminate = R);
  }} onCheckedChange={L} />
<span className="text-sm text-muted-foreground">
Select all (
{P.length}
{" in current view)"}
</span>
{B && (<span className="text-sm text-primary font-medium ml-auto">
{f.size}
{" selected"}
</span>)}
</div>
<div className="flex-1 overflow-y-auto p-4 pr-6">
<div className="space-y-3">
{P.length > 0 ? P.map((k) => (<EB index={k} isSelected={f.has(k.id)} onSelect={I} onViewIntelligence={J} onViewDetails={X} key={k.id} />)) : (<div className="text-center py-12 text-muted-foreground">
<ChartColumnIcon className="h-12 w-12 mx-auto mb-4 opacity-50" />
<p>
No indices match your filters
</p>
</div>)}
</div>
</div>
<Z5 index={x} onClose={() => y(null)} />
</div>);
}

export const _B = { analysts: 7, companies: 7, assets: 8, events: 8, narratives: 6, market: 6, indices: Lc.length };

export const OB = { discovered: Z9(), sentForReview: e$() };

export const ej = ["analysts", "companies", "assets", "events", "narratives", "market", "indices"];

export function GeiEntities() {
  const [e, n] = wc(), s = e.get("type"), a = ej.includes(s) ? s : "analysts", [r, i] = React.useState(a), o = (c) => {
    i(c), n({ type: c });
  };
  React.useEffect(() => {
    s && ej.includes(s) && i(s);
  }, [s]);
  const l = () => r === "analysts" ? (<NJ />) : r === "companies" ? (<RJ />) : r === "assets" ? (<BJ />) : r === "events" ? (<C_nB />) : r === "narratives" ? (<C_gB />) : r === "market" ? (<PB />) : r === "indices" ? (<DB />) : null;
  return (<div className="min-h-screen bg-background flex flex-col">
<C_zn />
<div className="flex-1 flex overflow-hidden">
<G$ selectedEntity={r} onEntityChange={o} counts={_B} activityCounts={OB} />
{l()}
</div>
</div>);
}

export const $B = (e) => AS(e, "MMM d, yyyy", /* @__PURE__ */ new Date());

export function JB({ initialStatusFilter: e = "all" }) {
  const { toast: n } = useToast(), [s, a] = React.useState(_m), [r, i] = React.useState(/* @__PURE__ */ new Set()), [o, l] = React.useState(e), [c, u] = React.useState("all"), [m, p] = React.useState(void 0), [h, f] = React.useState(false), [v, x] = React.useState(false), [y, b] = React.useState(null), g = s.filter((k) => {
    const V = o === "all" || k.status === o, F = c === "all" || k.entityType === c;
    let S = true;
    if (m != null && m.from) {
      const E = $B(k.requestedOn);
      m.to ? S = DS(E, { start: m.from, end: m.to }) : S = E >= m.from;
    }
    return V && F && S;
  }), j = r.size, w = g.length > 0 && g.every((k) => r.has(k.id)), C = (k) => {
    if (k) {
      const V = new Set(r);
      g.forEach((F) => V.add(F.id)), i(V);
    } else {
      const V = new Set(r);
      g.forEach((F) => V.delete(F.id)), i(V);
    }
  }, P = (k, V) => {
    const F = new Set(r);
    V ? F.add(k) : F.delete(k), i(F);
  }, I = (k) => {
    a((V) => V.filter((F) => F.id !== k.id)), i((V) => {
      const F = new Set(V);
      return F.delete(k.id), F;
    }), n({ title: "Entity approved successfully", description: `${k.entityName} has been approved and is now active` });
  }, L = () => {
    const k = s.filter((V) => r.has(V.id));
    a((V) => V.filter((F) => !r.has(F.id))), i(/* @__PURE__ */ new Set()), n({ title: `${k.length} entities approved`, description: "Selected entities have been approved and are now active" });
  }, z = (k) => {
    b(k), f(true);
  }, R = () => {
    y && (a((k) => k.filter((V) => V.id !== y.id)), i((k) => {
      const V = new Set(k);
      return V.delete(y.id), V;
    }), n({ title: "Entity rejected", description: `${y.entityName} has been rejected`, variant: "destructive" })), f(false), b(null);
  }, B = () => {
    const k = r.size;
    a((V) => V.filter((F) => !r.has(F.id))), i(/* @__PURE__ */ new Set()), x(false), n({ title: `${k} entities rejected`, description: "Selected entities have been rejected", variant: "destructive" });
  }, J = (k) => k === "discovered" ? "secondary" : "outline", X = s.length;
  return (<div className="space-y-4">
<div className="flex items-center gap-4 flex-wrap">
<div className="flex items-center gap-2">
<span className="text-sm text-muted-foreground">
Status:
</span>
<C_le value={o} onValueChange={l}>
<SelectTrigger className="w-[160px]">
<C_ce />
</SelectTrigger>
<SelectContent>
<SelectItem value="all">
All Statuses
</SelectItem>
<SelectItem value="discovered">
Discovered
</SelectItem>
<SelectItem value="sent_for_review">
Sent for Review
</SelectItem>
</SelectContent>
</C_le>
</div>
<div className="flex items-center gap-2">
<span className="text-sm text-muted-foreground">
Entity Type:
</span>
<C_le value={c} onValueChange={u}>
<SelectTrigger className="w-[160px]">
<C_ce />
</SelectTrigger>
<SelectContent>
<SelectItem value="all">
All Types
</SelectItem>
<SelectItem value="analyst">
Analyst
</SelectItem>
<SelectItem value="company">
Company
</SelectItem>
<SelectItem value="asset">
Asset
</SelectItem>
<SelectItem value="event">
Event
</SelectItem>
<SelectItem value="narrative">
Narrative
</SelectItem>
<SelectItem value="market_signal">
Market Signal
</SelectItem>
</SelectContent>
</C_le>
</div>
<div className="flex items-center gap-2">
<span className="text-sm text-muted-foreground">
Date:
</span>
<C_dn dateRange={m} onDateRangeChange={p} />
</div>
{X > 0 && (<div className="ml-auto text-sm text-muted-foreground">
{g.length}
{" of "}
{X}
{" items shown"}
</div>)}
</div>
{j > 0 && (<div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg border">
<span className="text-sm font-medium">
{j}
{" "}
{j === 1 ? "entity" : "entities"}
{" selected"}
</span>
<div className="flex items-center gap-2 ml-auto">
<Button size="sm" variant="default" className="gap-1.5" onClick={L}>
<CheckIcon className="h-3.5 w-3.5" />
Approve All
</Button>
<Button size="sm" variant="outline" className="gap-1.5 text-destructive hover:text-destructive" onClick={() => x(true)}>
<XIcon className="h-3.5 w-3.5" />
Reject All
</Button>
</div>
</div>)}
{g.length > 0 ? (<div className="border rounded-lg">
<Table>
<TableHeader>
<TableRow>
<TableHead className="w-[40px]">
<Checkbox checked={w} onCheckedChange={C} aria-label="Select all" />
</TableHead>
<TableHead>
Entity Name
</TableHead>
<TableHead>
Type
</TableHead>
<TableHead>
Source
</TableHead>
<TableHead>
Requested By
</TableHead>
<TableHead>
Requested On
</TableHead>
<TableHead>
Status
</TableHead>
<TableHead className="text-right">
Actions
</TableHead>
</TableRow>
</TableHeader>
<TableBody>
{g.map((k) => (<TableRow data-state={r.has(k.id) ? "selected" : void 0} key={k.id}>
<TableCell>
<Checkbox checked={r.has(k.id)} onCheckedChange={(V) => P(k.id, !!V)} aria-label={`Select ${k.entityName}`} />
</TableCell>
<TableCell className="font-medium">
{k.entityName}
</TableCell>
<TableCell>
{Y9[k.entityType]}
</TableCell>
<TableCell className="text-muted-foreground">
{Q9[k.source]}
</TableCell>
<TableCell>
{k.requestedBy}
</TableCell>
<TableCell>
{k.requestedOn}
</TableCell>
<TableCell>
<Badge variant={J(k.status)}>
{K9[k.status]}
</Badge>
</TableCell>
<TableCell className="text-right">
<div className="flex items-center justify-end gap-2">
<Button size="sm" variant="default" className="gap-1" onClick={() => I(k)}>
<CheckIcon className="h-3.5 w-3.5" />
Approve
</Button>
<Button size="sm" variant="outline" className="gap-1 text-destructive hover:text-destructive" onClick={() => z(k)}>
<XIcon className="h-3.5 w-3.5" />
Reject
</Button>
</div>
</TableCell>
</TableRow>))}
</TableBody>
</Table>
</div>) : (<div className="flex flex-col items-center justify-center py-16 border rounded-lg bg-muted/20">
<FileSearchIcon className="h-12 w-12 text-muted-foreground/50 mb-4" />
<h3 className="text-lg font-medium text-foreground mb-1">
No entities pending review
</h3>
<p className="text-sm text-muted-foreground">
{s.length === 0 ? "All entities have been reviewed. New discoveries will appear here" : "No entities match the current filters"}
</p>
</div>)}
<Ru open={h} onOpenChange={f}>
<AlertDialogContent>
<AlertDialogHeader>
<AlertDialogTitle>
Reject Entity
</AlertDialogTitle>
<AlertDialogDescription>
Are you sure you want to reject "
{y == null ? void 0 : y.entityName}
"? This action cannot be undone.
</AlertDialogDescription>
</AlertDialogHeader>
<AlertDialogFooter>
<AlertDialogCancel>
Cancel
</AlertDialogCancel>
<AlertDialogAction onClick={R} className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
Reject
</AlertDialogAction>
</AlertDialogFooter>
</AlertDialogContent>
</Ru>
<Ru open={v} onOpenChange={x}>
<AlertDialogContent>
<AlertDialogHeader>
<AlertDialogTitle>
{"Reject "}
{j}
{" Entities"}
</AlertDialogTitle>
<AlertDialogDescription>
{"Are you sure you want to reject "}
{j}
{" selected "}
{j === 1 ? "entity" : "entities"}
? This action cannot be undone.
</AlertDialogDescription>
</AlertDialogHeader>
<AlertDialogFooter>
<AlertDialogCancel>
Cancel
</AlertDialogCancel>
<AlertDialogAction onClick={B} className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
Reject All
</AlertDialogAction>
</AlertDialogFooter>
</AlertDialogContent>
</Ru>
</div>);
}

export const BB = [{ step: 1, icon: Building2Icon, title: "Entity Tracking", description: "Analysts, companies, assets, events, narratives, and market signals are tracked as governed entities within GEI." }, { step: 2, icon: FileTextIcon, title: "Intelligence Collection", description: "Raw intelligence is collected and attributed to each entity, including research notes, earnings calls, and regulatory filings." }, { step: 3, icon: DatabaseIcon, title: "Data Source Promotion", description: "Curated entity groups and intelligence items are promoted to governed Data Sources for structured consumption." }, { step: 4, icon: LayersIcon, title: "Module Access", description: "Only approved Data Sources can be enabled for Radar, Canvas, and Coach modules to ensure governance compliance." }];

export const VB = ["Raw intelligence cannot be consumed directly by modules", "Entities must be active (approved) to be promoted to Data Sources", "Data Sources require governance approval before module activation", "Module access changes are logged in the audit trail"];

export function UB() {
  return (<div className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
{BB.map((e) => {
    const C_n = e.icon;
    return (<Card className="relative" key={e.step}>
<CardHeader className="pb-2">
<div className="flex items-center gap-3">
<div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary text-sm font-semibold">
{e.step}
</div>
<C_n className="h-5 w-5 text-muted-foreground" />
</div>
<CardTitle className="text-base mt-2">
{e.title}
</CardTitle>
</CardHeader>
<CardContent>
<p className="text-sm text-muted-foreground">
{e.description}
</p>
</CardContent>
{e.step < 4 && (<div className="hidden lg:block absolute top-1/2 -right-2 transform -translate-y-1/2 text-muted-foreground/30">
→
</div>)}
</Card>);
  })}
</div>
<Card className="border-primary/20 bg-primary/5">
<CardHeader className="pb-2">
<div className="flex items-center gap-2">
<CircleAlertIcon className="h-5 w-5 text-primary" />
<CardTitle className="text-base">
Governance Rules
</CardTitle>
</div>
</CardHeader>
<CardContent>
<ul className="space-y-2">
{VB.map((e, n) => (<li className="flex items-start gap-2 text-sm" key={n}>
<span className="text-primary mt-1">
•
</span>
<span className="text-foreground/80">
{e}
</span>
</li>))}
</ul>
</CardContent>
</Card>
<div className="bg-muted/30 rounded-lg p-4">
<h4 className="text-sm font-medium mb-2">
Understanding the Flow
</h4>
<p className="text-sm text-muted-foreground">
The promotion model ensures that all intelligence consumed by IR modules passes through governance checkpoints. Entities discovered by the platform or submitted manually must be reviewed and approved before they can be curated into Data Sources. Data Sources then serve as the governed layer that controls which intelligence is available to each module.
</p>
</div>
</div>);
}

export const HB = { entity_added: "bg-blue-500/10 text-blue-600 border-blue-200", entity_approved: "bg-green-500/10 text-green-600 border-green-200", entity_rejected: "bg-red-500/10 text-red-600 border-red-200", status_changed: "bg-amber-500/10 text-amber-600 border-amber-200", module_access_changed: "bg-purple-500/10 text-purple-600 border-purple-200", data_source_created: "bg-cyan-500/10 text-cyan-600 border-cyan-200", data_source_activated: "bg-emerald-500/10 text-emerald-600 border-emerald-200", data_source_deactivated: "bg-slate-500/10 text-slate-600 border-slate-200" };

export const WB = (e) => {
  const n = e.split(" at ")[0];
  return AS(n, "MMM d, yyyy", /* @__PURE__ */ new Date());
};

export function GB() {
  const [e, n] = React.useState("all"), [s, a] = React.useState("all"), [r, i] = React.useState("all"), [o, l] = React.useState(void 0), c = Array.from(new Set(gd.map((m) => m.performedBy))), u = gd.filter((m) => {
    const p = e === "all" || m.actionType === e, h = s === "all" || m.objectType === s, f = r === "all" || m.performedBy === r;
    let v = true;
    if (o != null && o.from) {
      const x = WB(m.timestamp);
      o.to ? v = DS(x, { start: o.from, end: o.to }) : v = x >= o.from;
    }
    return p && h && f && v;
  });
  return (<div className="space-y-4">
<div className="flex items-center gap-4 flex-wrap">
<div className="flex items-center gap-2">
<span className="text-sm text-muted-foreground">
Action:
</span>
<C_le value={e} onValueChange={n}>
<SelectTrigger className="w-[180px]">
<C_ce />
</SelectTrigger>
<SelectContent>
<SelectItem value="all">
All Actions
</SelectItem>
<SelectItem value="entity_added">
Entity Added
</SelectItem>
<SelectItem value="entity_approved">
Entity Approved
</SelectItem>
<SelectItem value="entity_rejected">
Entity Rejected
</SelectItem>
<SelectItem value="status_changed">
Status Changed
</SelectItem>
<SelectItem value="module_access_changed">
Module Access Changed
</SelectItem>
<SelectItem value="data_source_created">
Data Source Created
</SelectItem>
<SelectItem value="data_source_activated">
Data Source Activated
</SelectItem>
<SelectItem value="data_source_deactivated">
Data Source Deactivated
</SelectItem>
</SelectContent>
</C_le>
</div>
<div className="flex items-center gap-2">
<span className="text-sm text-muted-foreground">
Object Type:
</span>
<C_le value={s} onValueChange={a}>
<SelectTrigger className="w-[160px]">
<C_ce />
</SelectTrigger>
<SelectContent>
<SelectItem value="all">
All Types
</SelectItem>
<SelectItem value="entity">
Entity
</SelectItem>
<SelectItem value="data_source">
Data Source
</SelectItem>
<SelectItem value="module_access">
Module Access
</SelectItem>
</SelectContent>
</C_le>
</div>
<div className="flex items-center gap-2">
<span className="text-sm text-muted-foreground">
User:
</span>
<C_le value={r} onValueChange={i}>
<SelectTrigger className="w-[160px]">
<C_ce />
</SelectTrigger>
<SelectContent>
<SelectItem value="all">
All Users
</SelectItem>
{c.map((m) => (<SelectItem value={m} key={m}>
{m}
</SelectItem>))}
</SelectContent>
</C_le>
</div>
<div className="flex items-center gap-2">
<span className="text-sm text-muted-foreground">
Date:
</span>
<C_dn dateRange={o} onDateRangeChange={l} />
</div>
<div className="ml-auto text-sm text-muted-foreground">
{u.length}
{" of "}
{gd.length}
{" events shown"}
</div>
</div>
{u.length > 0 ? (<div className="border rounded-lg">
<Table>
<TableHeader>
<TableRow>
<TableHead className="w-[180px]">
Timestamp
</TableHead>
<TableHead>
Action
</TableHead>
<TableHead>
Object
</TableHead>
<TableHead>
Performed By
</TableHead>
<TableHead>
Notes
</TableHead>
</TableRow>
</TableHeader>
<TableBody>
{u.map((m) => (<TableRow key={m.id}>
<TableCell className="text-muted-foreground text-sm">
{m.timestamp}
</TableCell>
<TableCell>
<Badge variant="outline" className={HB[m.actionType]}>
{X9[m.actionType]}
</Badge>
</TableCell>
<TableCell className="font-medium">
{m.objectName}
</TableCell>
<TableCell>
{m.performedBy}
</TableCell>
<TableCell className="text-muted-foreground text-sm">
{m.notes}
</TableCell>
</TableRow>))}
</TableBody>
</Table>
</div>) : (<div className="flex flex-col items-center justify-center py-16 border rounded-lg bg-muted/20">
<ScrollTextIcon className="h-12 w-12 text-muted-foreground/50 mb-4" />
<h3 className="text-lg font-medium text-foreground mb-1">
No governance actions found
</h3>
<p className="text-sm text-muted-foreground">
{gd.length === 0 ? "No governance actions recorded yet." : "No events match the current filters."}
</p>
</div>)}
</div>);
}

export function GeiGovernance() {
  const [e] = wc(), n = e.get("status") || "all", s = w5();
  return (<div className="min-h-screen bg-background flex flex-col">
<C_zn />
<main className="flex-1 container mx-auto px-6 py-6">
<div className="mb-6">
<p className="text-muted-foreground">
Review entities, manage promotion rules, and audit governance actions
</p>
</div>
<C_si defaultValue="review" className="space-y-6">
<TabsList className="w-full justify-start bg-transparent border-b border-border rounded-none h-auto p-0 gap-0">
<TabsTrigger value="review" className="gap-2 rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none px-4 py-3">
<ClipboardListIcon className="h-4 w-4" />
Entity Review Queue
{s > 0 && (<span className="ml-1 text-xs font-medium bg-primary/15 text-primary px-1.5 py-0.5 rounded-full">
{s}
</span>)}
</TabsTrigger>
<TabsTrigger value="rules" className="gap-2 rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none px-4 py-3">
<BookOpenIcon className="h-4 w-4" />
Promotion Rules
</TabsTrigger>
<TabsTrigger value="audit" className="gap-2 rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none px-4 py-3">
<ScrollTextIcon className="h-4 w-4" />
{"Audit & Traceability"}
</TabsTrigger>
</TabsList>
<TabsContent value="review" className="mt-6">
<JB initialStatusFilter={n} />
</TabsContent>
<TabsContent value="rules" className="mt-6">
<UB />
</TabsContent>
<TabsContent value="audit" className="mt-6">
<GB />
</TabsContent>
</C_si>
</main>
</div>);
}

export const QB = (e) => {
  switch (e) {
    case "active":
      return { label: "Active", className: "bg-emerald-500/10 text-emerald-700 border-emerald-200" };
    case "approved":
      return { label: "Approved", className: "bg-blue-500/10 text-blue-700 border-blue-200" };
    case "draft":
      return { label: "Draft", className: "bg-amber-500/10 text-amber-700 border-amber-200" };
    case "inactive":
      return { label: "Inactive", className: "bg-muted text-muted-foreground border-border" };
  }
};

export const YB = (e) => {
  switch (e) {
    case "analysts":
      return UsersIcon;
    case "companies":
      return Building2Icon;
    case "assets":
      return PillIcon;
    case "events":
      return CalendarIcon;
    case "narratives":
      return MessageSquareIcon;
    case "market-signals":
      return ChartLineIcon;
  }
};

export const tj = (e) => {
  switch (e) {
    case "analysts":
      return "Analysts";
    case "companies":
      return "Companies";
    case "assets":
      return "Assets";
    case "events":
      return "Events";
    case "narratives":
      return "Narratives";
    case "market-signals":
      return "Signals";
  }
};

export const KB = (e) => {
  switch (e) {
    case "high":
      return { label: "High activity", className: "text-emerald-600" };
    case "medium":
      return { label: "Medium activity", className: "text-amber-600" };
    case "low":
      return { label: "Low activity", className: "text-muted-foreground" };
  }
};

export function Gp({ module: e, enabled: n }) {
  const s = { radar: { icon: RadarIcon, label: "Radar" }, canvas: { icon: PaletteIcon, label: "Canvas" }, coach: { icon: GraduationCapIcon, label: "Coach" } }, { icon: C_a, label: r } = s[e];
  return (<div className={cn("flex items-center gap-1.5 px-2 py-1 rounded-md text-xs font-medium transition-colors", n ? "bg-primary/10 text-primary" : "bg-muted/50 text-muted-foreground/50")} title={n ? `Available in ${r}` : `Not enabled for ${r}`}>
<C_a className="h-3.5 w-3.5" />
<span>
{r}
</span>
</div>);
}

export function XB({ dataSource: e }) {
  const n = useNavigate(), s = QB(e.status), a = KB(e.activityLevel);
  return (<Card className="hover:shadow-md transition-shadow">
<CardContent className="p-5">
<div className="flex items-start justify-between gap-4">
<div className="flex-1 min-w-0 space-y-3">
<div className="space-y-1">
<div className="flex items-center gap-3">
<h3 className="font-semibold text-foreground truncate">
{e.name}
</h3>
<Badge variant="outline" className={cn("shrink-0", s.className)}>
{s.label}
</Badge>
</div>
<p className="text-sm text-muted-foreground line-clamp-1">
{e.description}
</p>
</div>
<div className="flex items-center gap-2 text-xs text-muted-foreground">
<span>
Created from:
</span>
<div className="flex items-center gap-1.5">
{e.createdFrom.map((r) => {
    const C_i = YB(r);
    return (<div className="flex items-center gap-1 px-1.5 py-0.5 bg-muted/50 rounded" title={tj(r)} key={r}>
<C_i className="h-3 w-3" />
<span>
{tj(r)}
</span>
</div>);
  })}
</div>
<span className="text-border">
•
</span>
<span>
{e.createdOn}
</span>
<span className="text-border">
•
</span>
<span>
{e.createdBy}
</span>
</div>
<div className="flex items-center gap-1.5 flex-wrap">
{e.topics.map((r) => (<Badge variant="secondary" className="text-xs font-normal" key={r}>
{r}
</Badge>))}
</div>
<div className="flex items-center gap-2">
<span className="text-xs text-muted-foreground">
Available in:
</span>
<div className="flex items-center gap-1.5">
<Gp module="radar" enabled={e.enabledModules.includes("radar")} />
<Gp module="canvas" enabled={e.enabledModules.includes("canvas")} />
<Gp module="coach" enabled={e.enabledModules.includes("coach")} />
</div>
</div>
</div>
<div className="flex flex-col items-end gap-3 shrink-0">
<div className="text-right space-y-1">
<div className={cn("text-xs font-medium", a.className)}>
{a.label}
</div>
<div className="text-xs text-muted-foreground">
{e.itemCount}
{" items"}
</div>
<div className="text-xs text-muted-foreground">
{"Updated "}
{e.lastUpdated}
</div>
</div>
<div className="flex items-center gap-2">
<Button variant="outline" size="sm" onClick={() => n(`/gei/data-sources/${e.id}`)}>
View Data Source
</Button>
<C_ei>
<C_ti asChild>
<Button variant="ghost" size="icon" className="h-8 w-8">
<EllipsisVerticalIcon className="h-4 w-4" />
</Button>
</C_ti>
<DropdownMenuContent align="end">
{e.status === "active" && (<DropdownMenuItem>
Deactivate
</DropdownMenuItem>)}
{e.status === "inactive" && (<DropdownMenuItem>
Reactivate
</DropdownMenuItem>)}
<DropdownMenuItem className="text-destructive">
Delete
</DropdownMenuItem>
</DropdownMenuContent>
</C_ei>
</div>
</div>
</div>
</CardContent>
</Card>);
}

export function ZB() {
  return (<div className="flex flex-col items-center justify-center py-16 text-center">
<div className="w-16 h-16 rounded-full bg-muted/50 flex items-center justify-center mb-4">
<PackageIcon className="h-8 w-8 text-muted-foreground" />
</div>
<h3 className="text-lg font-medium text-foreground mb-2">
No Data Sources created yet
</h3>
<p className="text-sm text-muted-foreground max-w-sm">
Create Data Sources by promoting intelligence from the Entities workspace
</p>
</div>);
}

export function GeiDataSources() {
  const [e, n] = React.useState(""), [s, a] = React.useState("all"), [r, i] = React.useState("all"), [o, l] = React.useState("all"), [c, u] = React.useState("all"), m = ga.filter((h) => !(e && !h.name.toLowerCase().includes(e.toLowerCase()) || s !== "all" && h.status !== s || r !== "all" && !h.enabledModules.includes(r) || o !== "all" && !h.createdFrom.includes(o) || c !== "all" && h.createdBy !== c)), p = [...new Set(ga.map((h) => h.createdBy))];
  return (<div className="min-h-screen bg-background">
<C_zn />
<main className="container mx-auto px-6 py-6">
<div className="mb-6">
<p className="text-muted-foreground">
Governed collections of external intelligence for use across Radar, Canvas, and Coach
</p>
</div>
<div className="flex items-center gap-3 mb-6 flex-wrap">
<div className="relative flex-1 min-w-[240px] max-w-sm">
<SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
<Input placeholder="Search data sources..." value={e} onChange={(h) => n(h.target.value)} className="pl-9" />
</div>
<C_le value={s} onValueChange={a}>
<SelectTrigger className="w-[140px]">
<C_ce placeholder="Status" />
</SelectTrigger>
<SelectContent>
<SelectItem value="all">
All Status
</SelectItem>
<SelectItem value="active">
Active
</SelectItem>
<SelectItem value="approved">
Approved
</SelectItem>
<SelectItem value="draft">
Draft
</SelectItem>
<SelectItem value="inactive">
Inactive
</SelectItem>
</SelectContent>
</C_le>
<C_le value={r} onValueChange={i}>
<SelectTrigger className="w-[160px]">
<C_ce placeholder="Module" />
</SelectTrigger>
<SelectContent>
<SelectItem value="all">
All Modules
</SelectItem>
<SelectItem value="radar">
Radar
</SelectItem>
<SelectItem value="canvas">
Canvas
</SelectItem>
<SelectItem value="coach">
Coach
</SelectItem>
</SelectContent>
</C_le>
<C_le value={o} onValueChange={l}>
<SelectTrigger className="w-[160px]">
<C_ce placeholder="Entity Type" />
</SelectTrigger>
<SelectContent>
<SelectItem value="all">
All Entities
</SelectItem>
<SelectItem value="analysts">
Analysts
</SelectItem>
<SelectItem value="companies">
Companies
</SelectItem>
<SelectItem value="assets">
Assets
</SelectItem>
<SelectItem value="events">
Events
</SelectItem>
<SelectItem value="narratives">
Narratives
</SelectItem>
<SelectItem value="market-signals">
Market Signals
</SelectItem>
</SelectContent>
</C_le>
<C_le value={c} onValueChange={u}>
<SelectTrigger className="w-[140px]">
<C_ce placeholder="Created By" />
</SelectTrigger>
<SelectContent>
<SelectItem value="all">
All Creators
</SelectItem>
{p.map((h) => (<SelectItem value={h} key={h}>
{h}
</SelectItem>))}
</SelectContent>
</C_le>
</div>
<div className="text-sm text-muted-foreground mb-4">
{m.length}
{" data source"}
{m.length !== 1 ? "s" : ""}
</div>
{m.length > 0 ? (<div className="space-y-3">
{m.map((h) => (<XB dataSource={h} key={h.id} />))}
</div>) : (<ZB />)}
</main>
</div>);
}

export const nj = ga.reduce((e, n) => (e[n.id] = n, e), {});

export const sj = { draft: { label: "Draft", variant: "outline", className: "border-amber-500/50 text-amber-600 bg-amber-50" }, approved: { label: "Approved", variant: "outline", className: "border-blue-500/50 text-blue-600 bg-blue-50" }, active: { label: "Active", variant: "default", className: "bg-emerald-500 text-white" }, inactive: { label: "Inactive", variant: "secondary", className: "bg-muted text-muted-foreground" } };

export const tV = { analysts: (<UsersIcon className="h-3.5 w-3.5" />), companies: (<Building2Icon className="h-3.5 w-3.5" />), assets: (<PillIcon className="h-3.5 w-3.5" />), events: (<CalendarIcon className="h-3.5 w-3.5" />), narratives: (<MessageSquareIcon className="h-3.5 w-3.5" />), signals: (<TrendingUpIcon className="h-3.5 w-3.5" />) };

export const nV = { "Earnings Call": (<MicIcon className="h-4 w-4" />), "Research Note": (<FileTextIcon className="h-4 w-4" />), Media: (<NewspaperIcon className="h-4 w-4" />), "Investor Conference": (<BriefcaseIcon className="h-4 w-4" />), Regulatory: (<ShieldIcon className="h-4 w-4" />), "Social Media": (<UsersIcon className="h-4 w-4" />), Social: (<UsersIcon className="h-4 w-4" />), "Market Activity": (<ActivityIcon className="h-4 w-4" />) };

export const vd = { earnings_call: "Earnings Call", research_note: "Research Note", media: "Media", social: "Social Media", regulatory: "Regulatory", investor_conference: "Investor Conference", market_activity: "Market Activity" };

export function GeiDataSourceDetail() {
  const { sourceId: e } = useParams(), n = useNavigate(), { toast: s } = useToast(), a = nj[e || "ds-001"] || nj["ds-001"], r = OO[a.id] || [], [i, o] = React.useState(a.moduleAccess), [l, c] = React.useState(a.status), u = l === "approved" || l === "active" || l === "draft", m = React.useMemo(() => {
    const g = [];
    return a.includedEntityIds.analysts && a.includedEntityIds.analysts.forEach((j) => {
      const w = W5[j] || [], C = kf.find((P) => P.id === j);
      w.forEach((P) => {
        g.push({ id: P.id, type: vd[P.source] || P.source, source: (C == null ? void 0 : C.name) || "Unknown Analyst", date: P.date, content: P.content, topics: P.topics });
      });
    }), a.includedEntityIds.assets && a.includedEntityIds.assets.forEach((j) => {
      const w = k5[j] || [], C = bo.find((P) => P.id === j);
      w.forEach((P) => {
        g.push({ id: P.id, type: vd[P.source] || P.source, source: (C == null ? void 0 : C.name) || "Unknown Asset", date: P.date, content: P.content, topics: P.topics });
      });
    }), a.includedEntityIds.events && a.includedEntityIds.events.forEach((j) => {
      const w = S5[j] || [], C = jo.find((P) => P.id === j);
      w.forEach((P) => {
        g.push({ id: P.id, type: vd[P.source] || P.source, source: (C == null ? void 0 : C.name) || "Unknown Event", date: P.date, content: P.content, topics: P.topics });
      });
    }), a.includedEntityIds.narratives && a.includedEntityIds.narratives.forEach((j) => {
      const w = yo.find((C) => C.id === j);
      w && w.intelligenceItems.forEach((C) => {
        g.push({ id: C.id, type: C.sourceType, source: w.name, date: C.date, content: C.rawContent, topics: C.topics });
      });
    }), a.includedEntityIds.signals && a.includedEntityIds.signals.forEach((j) => {
      const w = N5[j] || [], C = rc.find((P) => P.id === j);
      w.forEach((P) => {
        g.push({ id: P.id, type: vd[P.source] || P.source, source: (C == null ? void 0 : C.name) || "Unknown Signal", date: P.date, content: P.content, topics: P.topics });
      });
    }), g.sort((j, w) => new Date(w.date).getTime() - new Date(j.date).getTime());
  }, [a]), p = React.useMemo(() => {
    const g = { analysts: [], companies: [], assets: [], events: [], narratives: [], signals: [] };
    return a.createdFrom.includes("analysts") && a.includedEntityIds.analysts && (g.analysts = a.includedEntityIds.analysts.map((j) => {
      const w = kf.find((C) => C.id === j);
      return w ? { name: w.name, firm: w.firm } : null;
    }).filter((j) => j !== null)), a.createdFrom.includes("companies") && a.includedEntityIds.companies && (g.companies = a.includedEntityIds.companies.map((j) => {
      const w = q5.find((C) => C.id === j);
      return w ? { name: w.name, type: w.companyType === "primary" ? "Primary" : "Competitor" } : null;
    }).filter((j) => j !== null)), a.createdFrom.includes("assets") && a.includedEntityIds.assets && (g.assets = a.includedEntityIds.assets.map((j) => {
      const w = bo.find((C) => C.id === j);
      return w ? { name: w.name, company: w.company } : null;
    }).filter((j) => j !== null)), a.createdFrom.includes("events") && a.includedEntityIds.events && (g.events = a.includedEntityIds.events.map((j) => {
      const w = jo.find((C) => C.id === j);
      return w ? { name: w.name, date: w.eventDate } : null;
    }).filter((j) => j !== null)), a.createdFrom.includes("narratives") && a.includedEntityIds.narratives && (g.narratives = a.includedEntityIds.narratives.map((j) => {
      const w = yo.find((C) => C.id === j);
      return w ? { name: w.name, type: w.narrativeType } : null;
    }).filter((j) => j !== null)), a.createdFrom.includes("market-signals") && a.includedEntityIds.signals && (g.signals = a.includedEntityIds.signals.map((j) => {
      const w = rc.find((C) => C.id === j);
      return w ? { name: w.name, type: w.signalType } : null;
    }).filter((j) => j !== null)), g;
  }, [a]), h = React.useMemo(() => p.analysts.length + p.companies.length + p.assets.length + p.events.length + p.narratives.length + p.signals.length, [p]), f = (g) => {
    o((j) => {
      const w = { ...j, [g]: !j[g] };
      return s({ title: "Module access updated", description: `${g.charAt(0).toUpperCase() + g.slice(1)} access ${w[g] ? "enabled" : "disabled"}` }), w;
    });
  }, v = () => {
    l === "draft" ? (c("approved"), s({ title: "Data Source approved", description: "This Data Source is now ready for activation" })) : l === "approved" ? (c("active"), s({ title: "Data Source activated", description: "This Data Source is now available to enabled modules" })) : l === "active" ? (c("inactive"), s({ title: "Data Source deactivated", description: "Module access has been suspended" })) : l === "inactive" && (c("active"), s({ title: "Data Source reactivated", description: "Module access has been restored" }));
  }, x = () => {
    switch (l) {
      case "draft":
        return (<Button onClick={v} className="gap-2">
<CircleCheckIcon className="h-4 w-4" />
Approve Data Source
</Button>);
      case "approved":
        return (<Button onClick={v} className="gap-2">
<CircleCheckIcon className="h-4 w-4" />
Activate
</Button>);
      case "active":
        return (<Button variant="outline" onClick={v} className="gap-2">
<CircleAlertIcon className="h-4 w-4" />
Deactivate
</Button>);
      case "inactive":
        return (<Button onClick={v} className="gap-2">
<CircleCheckIcon className="h-4 w-4" />
Reactivate
</Button>);
    }
  }, b = a.createdFrom.filter((g) => g === "analysts" || g === "companies" || g === "assets" || g === "events" || g === "narratives" || g === "market-signals").length === 1 ? "grid-cols-1" : "grid-cols-2";
  return (<div className="min-h-screen bg-background">
<C_zn />
<main className="container mx-auto px-6 py-6">
<div className="flex justify-end mb-4">
<Button variant="ghost" size="sm" className="gap-2" onClick={() => n("/gei/data-sources")}>
<ArrowLeftIcon className="h-4 w-4" />
Back to Data Sources
</Button>
</div>
{l === "inactive" && (<div className="mb-4 p-3 bg-muted/50 border border-border rounded-lg flex items-center gap-3">
<CircleAlertIcon className="h-4 w-4 text-muted-foreground" />
<p className="text-sm text-muted-foreground">
This Data Source is currently inactive and not accessible to IR modules
</p>
</div>)}
<Card className="mb-6">
<CardContent className="p-6">
<div className="flex items-start justify-between gap-6">
<div className="flex-1 min-w-0">
<div className="flex items-center gap-3 mb-2">
<DatabaseIcon className="h-5 w-5 text-primary" />
<h1 className="text-xl font-semibold text-foreground">
{a.name}
</h1>
</div>
<p className="text-sm text-muted-foreground mb-4">
{a.description}
</p>
<div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
<span className="font-mono">
{a.id.toUpperCase()}
</span>
<span className="text-border">
|
</span>
<div className="flex items-center gap-1.5">
<span>
Created from:
</span>
<div className="flex items-center gap-1">
{a.createdFrom.map((g) => (<span className="flex items-center gap-1 px-1.5 py-0.5 bg-muted rounded text-foreground" key={g}>
{tV[g]}
<span className="capitalize">
{g}
</span>
</span>))}
</div>
</div>
<span className="text-border">
|
</span>
<span>
{a.createdOn}
</span>
<span className="text-border">
|
</span>
<span>
{a.createdBy}
</span>
</div>
</div>
<div className="flex items-center gap-3 flex-shrink-0">
<Badge className={sj[l].className}>
{sj[l].label}
</Badge>
{x()}
<C_ei>
<C_ti asChild>
<Button variant="ghost" size="icon">
<EllipsisVerticalIcon className="h-4 w-4" />
</Button>
</C_ti>
<DropdownMenuContent align="end">
<DropdownMenuItem className="text-destructive">
Delete Data Source
</DropdownMenuItem>
</DropdownMenuContent>
</C_ei>
</div>
</div>
</CardContent>
</Card>
<Card className="mb-6">
<CardHeader className="pb-3">
<CardTitle className="text-base flex items-center gap-2">
<ShieldIcon className="h-4 w-4 text-primary" />
Module Access
</CardTitle>
<CardDescription>
Control which IR modules can access this Data Source. Changes are governed and audited
</CardDescription>
</CardHeader>
<CardContent>
<div className="grid grid-cols-3 gap-4">
<div className={`flex items-center justify-between p-4 rounded-lg border ${i.radar ? "border-primary/30 bg-primary/5" : "border-border bg-muted/30"}`}>
<div className="flex items-center gap-3">
<div className={`p-2 rounded-lg ${i.radar ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"}`}>
<RadarIcon className="h-5 w-5" />
</div>
<div>
<p className="font-medium text-sm">
Radar
</p>
<p className="text-xs text-muted-foreground">
Signal detection
</p>
</div>
</div>
<Switch checked={i.radar} onCheckedChange={() => f("radar")} disabled={!u} />
</div>
<div className={`flex items-center justify-between p-4 rounded-lg border ${i.canvas ? "border-primary/30 bg-primary/5" : "border-border bg-muted/30"}`}>
<div className="flex items-center gap-3">
<div className={`p-2 rounded-lg ${i.canvas ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"}`}>
<FileTextIcon className="h-5 w-5" />
</div>
<div>
<p className="font-medium text-sm">
Canvas
</p>
<p className="text-xs text-muted-foreground">
Narrative building
</p>
</div>
</div>
<Switch checked={i.canvas} onCheckedChange={() => f("canvas")} disabled={!u} />
</div>
<div className={`flex items-center justify-between p-4 rounded-lg border ${i.coach ? "border-primary/30 bg-primary/5" : "border-border bg-muted/30"}`}>
<div className="flex items-center gap-3">
<div className={`p-2 rounded-lg ${i.coach ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"}`}>
<MessageSquareIcon className="h-5 w-5" />
</div>
<div>
<p className="font-medium text-sm">
Coach
</p>
<p className="text-xs text-muted-foreground">
{"Q&A preparation"}
</p>
</div>
</div>
<Switch checked={i.coach} onCheckedChange={() => f("coach")} disabled={!u} />
</div>
</div>
</CardContent>
</Card>
<C_si defaultValue="overview" className="space-y-4">
<TabsList className="bg-muted/50">
<TabsTrigger value="overview">
Overview
</TabsTrigger>
<TabsTrigger value="intelligence">
Included Intelligence
</TabsTrigger>
<TabsTrigger value="entities">
Entity Coverage
</TabsTrigger>
<TabsTrigger value="audit">
{"Governance & Audit"}
</TabsTrigger>
</TabsList>
<TabsContent value="overview">
<Card>
<CardContent className="p-6 space-y-6">
<div>
<h3 className="text-sm font-semibold text-foreground mb-2">
Purpose
</h3>
<p className="text-sm text-muted-foreground">
{a.purpose}
</p>
</div>
<div>
<h3 className="text-sm font-semibold text-foreground mb-2">
Intended Use Cases
</h3>
<ul className="space-y-1.5">
{a.useCases.map((g, j) => (<li className="text-sm text-muted-foreground flex items-start gap-2" key={j}>
<CircleCheckIcon className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
{g}
</li>))}
</ul>
</div>
<div>
<h3 className="text-sm font-semibold text-foreground mb-2">
Topics Covered
</h3>
<div className="flex flex-wrap gap-2">
{a.topics.map((g) => (<Badge variant="secondary" className="text-xs" key={g}>
{g}
</Badge>))}
</div>
</div>
<div className="grid grid-cols-2 gap-6">
<div>
<h3 className="text-sm font-semibold text-foreground mb-1">
Update Cadence
</h3>
<p className="text-sm text-muted-foreground flex items-center gap-1.5">
<ClockIcon className="h-3.5 w-3.5" />
{a.updateCadence}
</p>
</div>
<div>
<h3 className="text-sm font-semibold text-foreground mb-1">
Entity Coverage
</h3>
<p className="text-sm text-muted-foreground">
{h}
{" entities across "}
{a.createdFrom.length}
{" type"}
{a.createdFrom.length > 1 ? "s" : ""}
</p>
</div>
</div>
</CardContent>
</Card>
</TabsContent>
<TabsContent value="intelligence">
<Card>
<CardContent className="p-6">
{m.length === 0 ? (<div className="flex flex-col items-center justify-center py-12 text-center">
<FileTextIcon className="h-10 w-10 text-muted-foreground/50 mb-3" />
<p className="text-sm font-medium text-foreground">
No intelligence items available
</p>
<p className="text-xs text-muted-foreground mt-1">
Intelligence items will appear here once promoted
</p>
</div>) : (<div className="space-y-3">
{m.map((g) => (<div className="flex items-start gap-4 p-4 bg-muted/30 rounded-lg border border-border" key={g.id}>
<div className="p-2 bg-background rounded-lg border border-border">
{nV[g.type] || (<FileTextIcon className="h-4 w-4" />)}
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center gap-2 mb-1">
<Badge variant="outline" className="text-xs">
{g.type}
</Badge>
<span className="text-xs text-muted-foreground">
{g.source}
</span>
<span className="text-xs text-muted-foreground">
•
</span>
<span className="text-xs text-muted-foreground">
{g.date}
</span>
</div>
<p className="text-sm text-foreground mb-2 whitespace-pre-line">
{g.content}
</p>
<div className="flex items-center gap-2">
{g.topics.map((j) => (<Badge variant="secondary" className="text-xs py-0" key={j}>
{j}
</Badge>))}
</div>
</div>
<Button variant="ghost" size="sm" className="gap-1.5 text-xs flex-shrink-0">
{"View Source "}
<ExternalLinkIcon className="h-3 w-3" />
</Button>
</div>))}
</div>)}
</CardContent>
</Card>
</TabsContent>
<TabsContent value="entities">
<div className={`grid ${b} gap-4`}>
{a.createdFrom.includes("analysts") && (<Card>
<CardHeader className="pb-3">
<CardTitle className="text-sm flex items-center gap-2">
<UsersIcon className="h-4 w-4 text-primary" />
Analysts (
{p.analysts.length}
)
</CardTitle>
</CardHeader>
<CardContent className="space-y-2">
{p.analysts.length > 0 ? p.analysts.map((g, j) => (<div className="flex items-center justify-between p-2 bg-muted/30 rounded" key={j}>
<span className="text-sm font-medium">
{g.name}
</span>
<span className="text-xs text-muted-foreground">
{g.firm}
</span>
</div>)) : (<p className="text-sm text-muted-foreground text-center py-4">
No analysts included
</p>)}
</CardContent>
</Card>)}
{a.createdFrom.includes("companies") && (<Card>
<CardHeader className="pb-3">
<CardTitle className="text-sm flex items-center gap-2">
<Building2Icon className="h-4 w-4 text-primary" />
Companies (
{p.companies.length}
)
</CardTitle>
</CardHeader>
<CardContent className="space-y-2">
{p.companies.length > 0 ? p.companies.map((g, j) => (<div className="flex items-center justify-between p-2 bg-muted/30 rounded" key={j}>
<span className="text-sm font-medium">
{g.name}
</span>
<Badge variant="outline" className="text-xs">
{g.type}
</Badge>
</div>)) : (<p className="text-sm text-muted-foreground text-center py-4">
No companies included
</p>)}
</CardContent>
</Card>)}
{a.createdFrom.includes("assets") && (<Card>
<CardHeader className="pb-3">
<CardTitle className="text-sm flex items-center gap-2">
<PillIcon className="h-4 w-4 text-primary" />
Assets (
{p.assets.length}
)
</CardTitle>
</CardHeader>
<CardContent className="space-y-2">
{p.assets.length > 0 ? p.assets.map((g, j) => (<div className="flex items-center justify-between p-2 bg-muted/30 rounded" key={j}>
<span className="text-sm font-medium">
{g.name}
</span>
<span className="text-xs text-muted-foreground">
{g.company}
</span>
</div>)) : (<p className="text-sm text-muted-foreground text-center py-4">
No assets included
</p>)}
</CardContent>
</Card>)}
{a.createdFrom.includes("events") && (<Card>
<CardHeader className="pb-3">
<CardTitle className="text-sm flex items-center gap-2">
<CalendarIcon className="h-4 w-4 text-primary" />
Events (
{p.events.length}
)
</CardTitle>
</CardHeader>
<CardContent className="space-y-2">
{p.events.length > 0 ? p.events.map((g, j) => (<div className="flex items-center justify-between p-2 bg-muted/30 rounded" key={j}>
<span className="text-sm font-medium">
{g.name}
</span>
<span className="text-xs text-muted-foreground">
{g.date}
</span>
</div>)) : (<p className="text-sm text-muted-foreground text-center py-4">
No events included
</p>)}
</CardContent>
</Card>)}
{a.createdFrom.includes("narratives") && (<Card>
<CardHeader className="pb-3">
<CardTitle className="text-sm flex items-center gap-2">
<MessageSquareIcon className="h-4 w-4 text-primary" />
Narratives (
{p.narratives.length}
)
</CardTitle>
</CardHeader>
<CardContent className="space-y-2">
{p.narratives.length > 0 ? p.narratives.map((g, j) => (<div className="flex items-center justify-between p-2 bg-muted/30 rounded" key={j}>
<span className="text-sm font-medium">
{g.name}
</span>
<Badge variant="outline" className="text-xs capitalize">
{g.type.replace("_", " ")}
</Badge>
</div>)) : (<p className="text-sm text-muted-foreground text-center py-4">
No narratives included
</p>)}
</CardContent>
</Card>)}
{a.createdFrom.includes("market-signals") && (<Card>
<CardHeader className="pb-3">
<CardTitle className="text-sm flex items-center gap-2">
<TrendingUpIcon className="h-4 w-4 text-primary" />
Market Signals (
{p.signals.length}
)
</CardTitle>
</CardHeader>
<CardContent className="space-y-2">
{p.signals.length > 0 ? p.signals.map((g, j) => (<div className="flex items-center justify-between p-2 bg-muted/30 rounded" key={j}>
<span className="text-sm font-medium">
{g.name}
</span>
<Badge variant="outline" className="text-xs capitalize">
{g.type.replace("_", " ")}
</Badge>
</div>)) : (<p className="text-sm text-muted-foreground text-center py-4">
No signals included
</p>)}
</CardContent>
</Card>)}
</div>
</TabsContent>
<TabsContent value="audit">
<Card>
<CardContent className="p-6">
<div className="space-y-0">
{r.map((g, j) => (<div className="relative pl-6 pb-6 last:pb-0" key={g.id}>
{j < r.length - 1 && (<div className="absolute left-[9px] top-6 bottom-0 w-px bg-border" />)}
<div className="absolute left-0 top-1 w-[18px] h-[18px] rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center">
<div className="w-2 h-2 rounded-full bg-primary" />
</div>
<div className="space-y-1">
<div className="flex items-center gap-2">
<span className="text-sm font-medium text-foreground">
{g.action}
</span>
<span className="text-xs text-muted-foreground">
•
</span>
<span className="text-xs text-muted-foreground">
{g.timestamp}
</span>
</div>
<p className="text-sm text-muted-foreground">
{g.description}
</p>
{g.details && (<p className="text-xs text-muted-foreground/80 italic">
{g.details}
</p>)}
<p className="text-xs text-muted-foreground">
{"By: "}
{g.user}
</p>
</div>
</div>))}
</div>
</CardContent>
</Card>
</TabsContent>
</C_si>
</main>
</div>);
}

export const aV = { earnings_call: { icon: PhoneIcon, label: "Earnings Call", color: "text-blue-600" }, research_note: { icon: FileTextIcon, label: "Research Note", color: "text-emerald-600" }, media: { icon: RadioIcon, label: "Media", color: "text-purple-600" }, social: { icon: MessageCircleIcon, label: "Social", color: "text-orange-600" }, social_media: { icon: UsersIcon, label: "Social Media", color: "text-pink-600" }, regulatory: { icon: FileTextIcon, label: "Regulatory / Clinical", color: "text-red-600" }, market_activity: { icon: RadioIcon, label: "Market Activity", color: "text-cyan-600" }, investor_conference: { icon: PhoneIcon, label: "Investor Conference", color: "text-indigo-600" } };

export function Fo({ item: e, isSelected: n, onToggleSelect: s }) {
  const a = aV[e.source], C_r = a.icon, i = (o) => {
    o.target.closest("button, a") || s == null || s(e.id);
  };
  return (<Card className={cn("border-border/50 transition-all cursor-pointer", n ? "border-primary bg-primary/5 ring-1 ring-primary/20" : "hover:border-border")} onClick={i}>
<CardContent className="p-5">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-3">
<Checkbox checked={n} onCheckedChange={() => s == null ? void 0 : s(e.id)} onClick={(o) => o.stopPropagation()} />
<div className="flex items-center gap-2">
<div className={`p-1.5 rounded-md bg-muted ${a.color}`}>
<C_r className="h-4 w-4" />
</div>
<span className="text-sm font-medium">
{a.label}
</span>
</div>
<Badge variant="outline" className={cn("text-[10px] font-medium uppercase tracking-wide px-2 py-0.5", e.intelligenceType === "internal" ? "border-primary/50 text-primary bg-primary/5" : "border-muted-foreground/50 text-muted-foreground bg-muted")}>
{e.intelligenceType === "internal" ? "Internal" : "External"}
</Badge>
</div>
<span className="text-sm text-muted-foreground">
{e.date}
</span>
</div>
<div className="mb-4 ml-9">
<p className="text-sm leading-relaxed text-foreground whitespace-pre-line">
{e.content}
</p>
</div>
<div className="flex items-center justify-between pt-3 border-t border-border/50 ml-9">
<div className="flex items-center gap-2 flex-wrap">
{e.topics.map((o) => (<Badge variant="secondary" className="text-xs font-normal" key={o}>
{o}
</Badge>))}
{e.attribution && (<span className="text-xs text-muted-foreground ml-2">
{"via "}
{e.attribution}
</span>)}
</div>
<Button variant="ghost" size="sm" className="text-xs text-muted-foreground hover:text-foreground gap-1" onClick={(o) => o.stopPropagation()}>
<ExternalLinkIcon className="h-3 w-3" />
View Source
</Button>
</div>
</CardContent>
</Card>);
}

export const rV = { earnings_call: PhoneIcon, research_note: FileTextIcon, media: RadioIcon, social: MessageCircleIcon, regulatory: FileTextIcon, market_activity: RadioIcon };

export const aj = { earnings_call: "Earnings Call", research_note: "Research Note", media: "Media", social: "Social", regulatory: "Regulatory / Clinical", market_activity: "Market Activity" };

export function C_zo({ items: e, analystName: n, isOpen: s, onClose: a, onSuccess: r }) {
  const { toast: i } = useToast(), [o, l] = React.useState(""), [c, u] = React.useState("analyst_intelligence"), [m, p] = React.useState(false), h = React.useMemo(() => {
    if (e.length === 0) return null;
    const v = [...new Set(e.map((g) => aj[g.source]))], x = [...new Set(e.flatMap((g) => g.topics))], y = e.map((g) => g.date), b = y.length > 1 ? `${y[y.length - 1]} \u2013 ${y[0]}` : y[0];
    return { sourceTypes: v, topics: x, dateRange: b };
  }, [e]), f = () => {
    i({ title: "Added to Data Sources", description: `"${o || `${n} Intelligence`}" has been added with ${e.length} intelligence items` }), l(""), u("analyst_intelligence"), p(false), r();
  };
  return e.length === 0 ? null : (<C_ot open={s} onOpenChange={a}>
<DialogContent className="sm:max-w-lg">
<DialogHeader>
<DialogTitle>
Promote to Data Source
</DialogTitle>
<p className="text-sm text-muted-foreground">
Create a governed intelligence source from selected items
</p>
</DialogHeader>
<div className="space-y-5 py-4">
<div className="p-4 bg-muted/50 rounded-lg space-y-3">
<div className="grid grid-cols-2 gap-3 text-sm">
<div>
<span className="text-muted-foreground">
Entity:
</span>
<p className="font-medium">
{n}
</p>
</div>
<div>
<span className="text-muted-foreground">
Items Selected:
</span>
<p className="font-medium">
{e.length}
{" intelligence items"}
</p>
</div>
<div>
<span className="text-muted-foreground">
Source Types:
</span>
<p className="font-medium">
{h == null ? void 0 : h.sourceTypes.join(", ")}
</p>
</div>
<div>
<span className="text-muted-foreground">
Date Range:
</span>
<p className="font-medium">
{h == null ? void 0 : h.dateRange}
</p>
</div>
</div>
<Pu open={m} onOpenChange={p}>
<Eu asChild>
<Button variant="ghost" size="sm" className="w-full justify-between text-xs">
View selected items
<ChevronDownIcon className={cn("h-4 w-4 transition-transform", m && "rotate-180")} />
</Button>
</Eu>
<Mu className="pt-3 space-y-2">
{e.map((v) => {
    const C_x = rV[v.source];
    return (<div className="p-2.5 bg-background rounded border border-border/50" key={v.id}>
<div className="flex items-center gap-2 mb-1">
<C_x className="h-3 w-3 text-muted-foreground" />
<span className="text-xs text-muted-foreground">
{aj[v.source]}
{" • "}
{v.date}
</span>
</div>
<p className="text-xs text-foreground line-clamp-2">
{v.content}
</p>
</div>);
  })}
</Mu>
</Pu>
</div>
<div className="space-y-4">
<div className="space-y-2">
<Label htmlFor="ds-name">
Data Source Name
</Label>
<Input id="ds-name" placeholder={`${n} Intelligence`} value={o} onChange={(v) => l(v.target.value)} />
</div>
<div className="space-y-2">
<Label>
Category
</Label>
<C_le value={c} onValueChange={u}>
<SelectTrigger>
<C_ce />
</SelectTrigger>
<SelectContent>
<SelectItem value="analyst_intelligence">
Analyst Intelligence
</SelectItem>
<SelectItem value="market_signals">
Market Signals
</SelectItem>
<SelectItem value="competitive_intel">
Competitive Intelligence
</SelectItem>
<SelectItem value="narrative_themes">
Narrative Themes
</SelectItem>
</SelectContent>
</C_le>
</div>
<div className="space-y-2">
<Label>
Topics Included
</Label>
<div className="flex flex-wrap gap-1.5">
{h == null ? void 0 : h.topics.map((v) => (<Badge variant="secondary" className="text-xs" key={v}>
{v}
</Badge>))}
</div>
</div>
</div>
<div className="p-3 bg-muted/50 rounded-lg text-sm text-muted-foreground">
This intelligence will be added to your governed data sources and available for use in Radar, Canvas, and Coach modules
</div>
</div>
<DialogFooter>
<Button variant="outline" onClick={a}>
Cancel
</Button>
<Button onClick={f}>
Add to Data Sources
</Button>
</DialogFooter>
</DialogContent>
</C_ot>);
}

export const iV = ["Last 7 days", "Last 30 days", "Last 90 days"];

export const rj = ["Earnings Calls", "Research Notes", "Media", "Social"];

export const oV = ["Financials", "Margins", "Guidance", "Pipeline", "R&D", "Strategy", "Pharma", "Investor Sentiment", "Messaging", "Competitive Positioning"];

export function GeiAnalystDetail() {
  const { analystId: e } = useParams(), n = $0[e || "1"] || $0[1], [s, a] = React.useState("Last 30 days"), [r, i] = React.useState(void 0), [o, l] = React.useState(rj), [c, u] = React.useState([]), [m, p] = React.useState(/* @__PURE__ */ new Set()), [h, f] = React.useState(false), [v, x] = React.useState("external"), y = (R) => {
    a(R), i(void 0);
  }, b = (R) => {
    i(R), R != null && R.from && a("");
  }, g = (R) => {
    l((B) => B.includes(R) ? B.filter((J) => J !== R) : [...B, R]);
  }, j = (R) => {
    u((B) => B.includes(R) ? B.filter((J) => J !== R) : [...B, R]);
  }, w = W5[e || "1"] || [], C = w.filter((R) => {
    if (v !== "both" && R.intelligenceType !== v) return false;
    const B = { earnings_call: "Earnings Calls", research_note: "Research Notes", media: "Media", social: "Social" };
    return !(!o.includes(B[R.source]) || c.length > 0 && !R.topics.some((X) => c.includes(X)));
  }), P = (R) => {
    p((B) => {
      const J = new Set(B);
      return J.has(R) ? J.delete(R) : J.add(R), J;
    });
  }, I = () => {
    m.size === C.length ? p(/* @__PURE__ */ new Set()) : p(new Set(C.map((R) => R.id)));
  }, L = () => {
    p(/* @__PURE__ */ new Set());
  }, z = React.useMemo(() => w.filter((R) => m.has(R.id)), [m, w]);
  return (<div className="min-h-screen bg-background">
<C_zn />
<div className="container mx-auto px-6 py-6">
<div className="flex justify-end mb-6">
<Link to="/gei/entities" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
<ArrowLeftIcon className="h-4 w-4" />
Back to Analysts
</Link>
</div>
<div className="flex items-start justify-between mb-6">
<div>
<h1 className="text-2xl font-bold text-foreground mb-1">
{n.name}
</h1>
<p className="text-muted-foreground">
{n.firm}
</p>
<p className="text-sm text-muted-foreground">
{n.specialty}
</p>
</div>
<div className="text-right">
<Badge variant={n.activity === "High" ? "default" : "secondary"} className="mb-2">
{n.activity}
{" Activity"}
</Badge>
<p className="text-sm text-muted-foreground">
{"Updated "}
{n.lastUpdated}
</p>
</div>
</div>
<div className="flex flex-wrap items-center gap-6 pb-6 border-b border-border mb-6">
<div className="flex items-center gap-2">
<span className="text-xs text-muted-foreground uppercase tracking-wide">
Focus Areas:
</span>
<div className="flex gap-1.5">
{n.focusAreas.map((R) => (<Badge variant="outline" className="text-xs font-normal" key={R}>
{R}
</Badge>))}
</div>
</div>
<div className="flex items-center gap-2">
<span className="text-xs text-muted-foreground uppercase tracking-wide">
Primary Sources:
</span>
<div className="flex gap-1.5">
{n.primarySources.map((R) => (<Badge variant="outline" className="text-xs font-normal" key={R}>
{R}
</Badge>))}
</div>
</div>
</div>
<div className="space-y-4 mb-6">
<Un value={v} onChange={x} />
<div className="flex items-center gap-2">
<span className="text-xs text-muted-foreground uppercase tracking-wide min-w-[60px]">
Time:
</span>
<div className="flex gap-2">
{iV.map((R) => (<Button variant={s === R && !(r != null && r.from) ? "default" : "outline"} size="sm" className="text-xs h-7" onClick={() => y(R)} key={R}>
{R}
</Button>))}
<C_dn dateRange={r} onDateRangeChange={b} onClear={() => a("Last 30 days")} />
</div>
</div>
<div className="flex items-center gap-2">
<span className="text-xs text-muted-foreground uppercase tracking-wide min-w-[60px]">
Source:
</span>
<div className="flex gap-2 flex-wrap">
{rj.map((R) => (<Button variant={o.includes(R) ? "default" : "outline"} size="sm" className="text-xs h-7" onClick={() => g(R)} key={R}>
{R}
</Button>))}
</div>
</div>
<div className="flex items-start gap-2">
<span className="text-xs text-muted-foreground uppercase tracking-wide min-w-[60px] pt-1.5">
Topic:
</span>
<div className="flex gap-2 flex-wrap">
{oV.map((R) => (<Button variant={c.includes(R) ? "default" : "outline"} size="sm" className="text-xs h-7" onClick={() => j(R)} key={R}>
{R}
</Button>))}
</div>
</div>
</div>
<div className={cn("sticky top-16 z-10 -mx-6 px-6 py-3 bg-background/95 backdrop-blur border-b border-border transition-all", m.size > 0 ? "opacity-100" : "opacity-50")}>
<div className="flex items-center justify-between">
<div className="flex items-center gap-4">
<div className="flex items-center gap-2">
<Checkbox checked={C.length > 0 && m.size === C.length} onCheckedChange={I} disabled={C.length === 0} />
<span className="text-sm text-muted-foreground">
Select All
</span>
</div>
{m.size > 0 ? (<span className="text-sm font-medium">
{m.size}
{" item"}
{m.size !== 1 ? "s" : ""}
{" selected"}
</span>) : (<span className="text-sm text-muted-foreground">
Select intelligence items to promote
</span>)}
</div>
<div className="flex items-center gap-2">
{m.size > 0 && (<>
<Button variant="ghost" size="sm" className="text-xs gap-1.5" onClick={L}>
<XIcon className="h-3.5 w-3.5" />
Clear
</Button>
<Button size="sm" className="gap-1.5" onClick={() => f(true)}>
<DatabaseIcon className="h-3.5 w-3.5" />
Promote to Data Source
</Button>
</>)}
</div>
</div>
</div>
<div className="space-y-4 mt-6">
<div className="flex items-center justify-between">
<h2 className="text-sm font-medium text-muted-foreground">
{C.length}
{" intelligence items"}
</h2>
</div>
{C.length > 0 ? (<div className="space-y-4">
{C.map((R) => (<Fo item={R} isSelected={m.has(R.id)} onToggleSelect={P} key={R.id} />))}
</div>) : (<div className="text-center py-12 text-muted-foreground">
No intelligence items match the current filters
</div>)}
</div>
</div>
<C_zo items={z} analystName={n.name} isOpen={h} onClose={() => f(false)} onSuccess={() => {
    p(/* @__PURE__ */ new Set()), f(false);
  }} />
</div>);
}

export const cV = { addressed: { icon: CircleCheckBigIcon, className: "bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100" }, still_open: { icon: ClockIcon, className: "bg-amber-50 text-amber-700 border-amber-200 hover:bg-amber-100" }, needs_review: { icon: CircleAlertIcon, className: "bg-red-50 text-red-700 border-red-200 hover:bg-red-100" } };

export function C_yd({ status: e, className: n }) {
  const s = cV[e], C_a = s.icon;
  return (<Badge variant="outline" className={cn("gap-1 font-medium", s.className, n)}>
<C_a className="h-3 w-3" />
{R5[e]}
</Badge>);
}

export const dV = { earnings_call: "Earnings Call", investor_day: "Investor Day" };

export const uV = { contextual: "bg-muted text-muted-foreground border-muted", implied_commitment: "bg-amber-50 text-amber-700 border-amber-200", explicit_expectation: "bg-primary/10 text-primary border-primary/30" };

export function C_mV({ claim: e, onStatusChange: n }) {
  const { toast: s } = useToast(), [a, r] = React.useState(e.status), i = (o) => {
    r(o), n == null || n(e.id, o), s({ title: "Status updated", description: `Claim status changed to "${R5[o]}"` });
  };
  return (<Card className="border-border/50 hover:border-border transition-colors">
<CardContent className="p-5">
<div className="flex gap-3 mb-4">
<QuoteIcon className="h-5 w-5 text-muted-foreground/50 shrink-0 mt-0.5" />
<blockquote className="text-sm leading-relaxed text-foreground italic">
"
{e.verbatimQuote}
"
</blockquote>
</div>
<div className="flex items-center gap-2 text-sm text-muted-foreground mb-4 ml-8">
<span className="font-medium">
{e.quarter}
{" "}
{dV[e.source]}
</span>
<span>
•
</span>
<span>
{e.speaker}
</span>
<span>
•
</span>
<span>
{e.dateRecorded}
</span>
</div>
<div className="flex items-center gap-2 mb-4 ml-8">
<Badge variant="outline" className="text-xs font-normal">
{Z$[e.claimType]}
</Badge>
<Badge variant="outline" className={cn("text-xs font-normal", uV[e.claimStrength])}>
{eJ[e.claimStrength]}
</Badge>
</div>
<div className="flex items-center justify-between pt-3 border-t border-border/50 ml-8">
<div className="flex items-center gap-3">
<span className="text-xs text-muted-foreground">
Status:
</span>
<C_le value={a} onValueChange={(o) => i(o)}>
<SelectTrigger className="w-[160px] h-8 text-xs">
<C_ce>
<C_yd status={a} className="border-0 bg-transparent p-0" />
</C_ce>
</SelectTrigger>
<SelectContent>
<SelectItem value="addressed">
<C_yd status="addressed" className="border-0 bg-transparent" />
</SelectItem>
<SelectItem value="still_open">
<C_yd status="still_open" className="border-0 bg-transparent" />
</SelectItem>
<SelectItem value="needs_review">
<C_yd status="needs_review" className="border-0 bg-transparent" />
</SelectItem>
</SelectContent>
</C_le>
</div>
<Button variant="ghost" size="sm" className="text-xs text-muted-foreground hover:text-foreground gap-1">
<ExternalLinkIcon className="h-3 w-3" />
View Context
</Button>
</div>
{e.lastReviewedBy && (<div className="mt-3 ml-8 text-xs text-muted-foreground">
{"Last reviewed by "}
{e.lastReviewedBy}
{e.lastReviewedAt && ` on ${e.lastReviewedAt}`}
</div>)}
</CardContent>
</Card>);
}

export function Gg({ claims: e, filterType: n = "all", filterStatus: s = "all", onStatusChange: a }) {
  const [r, i] = React.useState(/* @__PURE__ */ new Set()), [o, l] = React.useState(false), c = e.filter((f) => !(n !== "all" && f.claimType !== n || s !== "all" && f.status !== s)), u = nJ(c), m = Object.keys(u), p = (f) => {
    i((v) => {
      const x = new Set(v);
      return x.has(f) ? x.delete(f) : x.add(f), x;
    });
  }, h = () => {
    o ? (i(/* @__PURE__ */ new Set()), l(false)) : (i(new Set(m)), l(true));
  };
  return r.size === 0 && m.length > 0 && !o && i(/* @__PURE__ */ new Set([m[0]])), c.length === 0 ? (<div className="text-center py-12 text-muted-foreground">
<p className="text-lg font-medium mb-1">
No claims found
</p>
<p className="text-sm">
Adjust your filters or check back later
</p>
</div>) : (<div className="space-y-4">
<div className="flex items-center justify-between">
<span className="text-sm text-muted-foreground">
{"12-Month Rolling View • "}
{c.length}
{" claim"}
{c.length !== 1 ? "s" : ""}
</span>
<Button variant="ghost" size="sm" className="text-xs gap-1.5" onClick={h}>
{o ? (<>
<ChevronsDownUpIcon className="h-3.5 w-3.5" />
Collapse All
</>) : (<>
<ChevronsUpDownIcon className="h-3.5 w-3.5" />
Expand All
</>)}
</Button>
</div>
<div className="space-y-3">
{m.map((f) => {
    const v = u[f], x = r.has(f);
    return (<Pu open={x} onOpenChange={() => p(f)} key={f}>
<Eu asChild>
<Button variant="ghost" className="w-full justify-start gap-2 h-10 px-3 hover:bg-muted/50">
{x ? (<ChevronDownIcon className="h-4 w-4 text-muted-foreground" />) : (<ChevronRightIcon className="h-4 w-4 text-muted-foreground" />)}
<span className="font-medium">
{f}
</span>
<span className="text-muted-foreground text-sm">
(
{v.length}
{" claim"}
{v.length !== 1 ? "s" : ""}
)
</span>
</Button>
</Eu>
<Mu className="pl-6 pt-2 space-y-3">
{v.map((y) => (<C_mV claim={y} onStatusChange={a} key={y.id} />))}
</Mu>
</Pu>);
  })}
</div>
</div>);
}

export const ij = { 1: { name: "Novartis", companyType: "primary", industry: "Pharmaceuticals, Innovative Medicines", lastUpdated: "Sep 15, 2026", focusAreas: ["Financials", "Guidance", "Pipeline", "Investor Sentiment", "Messaging"], primarySources: ["Earnings Calls", "Research Notes", "Media", "Market Activity"], status: "active" }, 2: { name: "AbbVie", companyType: "competitor", industry: "Biopharmaceuticals", lastUpdated: "Sep 17, 2026", focusAreas: ["Pipeline", "Strategy", "Competitive Positioning", "Execution Risk"], primarySources: ["Earnings Calls", "Research Notes", "Media"], status: "active" }, 3: { name: "Amgen", companyType: "competitor", industry: "Biotechnology", lastUpdated: "Sep 10, 2026", focusAreas: ["Strategy", "Pipeline", "Messaging", "Investor Sentiment"], primarySources: ["Earnings Calls", "Research Notes", "Media"], status: "active" }, 4: { name: "Eli Lilly", companyType: "competitor", industry: "Pharmaceuticals", lastUpdated: "Sep 12, 2026", focusAreas: ["Financials", "Execution Risk", "Investor Sentiment", "Strategy"], primarySources: ["Earnings Calls", "Research Notes", "Market Activity"], status: "active" }, 5: { name: "Pfizer", companyType: "competitor", industry: "Pharmaceuticals", lastUpdated: "Sep 9, 2026", focusAreas: ["Financials", "Pipeline", "Execution Risk", "Messaging", "Strategy"], primarySources: ["Earnings Calls", "Research Notes", "Media"], status: "active" }, "discovered-1": { name: "Vertex Pharmaceuticals", companyType: "competitor", industry: "Biotechnology, Rare Disease", lastUpdated: "Detected Sep 18, 2026", focusAreas: ["Pipeline", "Clinical Data", "Strategy", "Competitive Positioning"], primarySources: ["Earnings Calls", "Research Notes", "Media"], status: "discovered" }, "discovered-2": { name: "Regeneron", companyType: "competitor", industry: "Biotechnology, Immunology", lastUpdated: "Detected Sep 17, 2026", focusAreas: ["R&D", "Regulatory", "Competitive Positioning"], primarySources: ["Earnings Calls", "Research Notes", "Media"], status: "discovered" } };

export const pV = { 1: [{ id: "novartis-1", source: "earnings_call", intelligenceType: "internal", date: "Sep 14, 2026", content: `"Management reiterated that Immunology remains a long-term growth pillar, though near-term performance reflects continued pricing pressure and slower uptake in select geographies. Leadership emphasized disciplined cost control and pipeline optionality as offsets to external volatility."

Excerpt from Novartis Q2 2026 earnings call prepared remarks, addressing performance across Immunology and broader portfolio dynamics.`, topics: ["Financials", "Guidance", "Pipeline"], attribution: "Novartis Q2 2026 Earnings Call" }, { id: "novartis-2", source: "research_note", intelligenceType: "external", date: "Sep 15, 2026", content: `"While Novartis's balance sheet strength remains unquestioned, investors continue to seek clearer articulation around the cadence of pipeline inflection points, particularly in Immunology, where competitive intensity has reshaped expectations."

Sell-side analyst note following Q2 earnings, focusing on pipeline visibility and competitive benchmarking.`, topics: ["Pipeline", "Competitive Positioning"], attribution: "Sell-side Research Note" }, { id: "novartis-3", source: "media", intelligenceType: "external", date: "Aug 22, 2026", content: `"Novartis faces renewed scrutiny as drug pricing narratives resurface alongside broader questions about reputational resilience and leadership messaging consistency."

National business media coverage discussing reputational overhang and investor sentiment implications.`, topics: ["Investor Sentiment", "Messaging"], attribution: "Financial Media Outlet" }, { id: "novartis-4", source: "market_activity", intelligenceType: "external", date: "Aug 3, 2026", content: `"Shares moved modestly lower following peer earnings, with market participants citing sector-wide read-through rather than company-specific disclosures."

Market wrap commentary referencing Novartis stock movement following competitor earnings announcements.`, topics: ["Market Activity", "Competitive Positioning"], attribution: "Market Commentary" }], 2: [{ id: "abbv-1", source: "earnings_call", intelligenceType: "external", date: "Sep 16, 2026", content: `"Management highlighted continued strength in Immunology, noting confidence in lifecycle management strategies and next-generation assets to sustain momentum beyond current flagship products."

AbbVie Q2 2026 earnings call remarks focusing on Immunology strategy and portfolio durability.`, topics: ["Pipeline", "Strategy"], attribution: "AbbVie Q2 2026 Earnings Call" }, { id: "abbv-2", source: "research_note", intelligenceType: "external", date: "Sep 17, 2026", content: `"AbbVie's messaging reinforces investor perception of execution discipline, particularly relative to peers navigating more complex portfolio transitions."

Post-earnings analyst note comparing AbbVie's execution narrative with large-cap pharma peers.`, topics: ["Competitive Positioning", "Execution Risk"], attribution: "Sell-side Research Note" }, { id: "abbv-3", source: "media", intelligenceType: "external", date: "Aug 10, 2026", content: `"AbbVie's Immunology franchise continues to be cited as a benchmark, with analysts pointing to clarity in communication and consistency in delivery."

Industry media article discussing leadership positioning in Immunology.`, topics: ["Investor Sentiment", "Competitive Positioning"], attribution: "Industry Media" }], 3: [{ id: "amgn-1", source: "earnings_call", intelligenceType: "external", date: "Sep 9, 2026", content: `"Amgen executives emphasized a balanced approach to innovation and operational rigor, positioning the pipeline as both scientifically differentiated and commercially scalable."

Amgen Q2 2026 earnings call, focusing on long-term strategy and execution.`, topics: ["Strategy", "Pipeline"], attribution: "Amgen Q2 2026 Earnings Call" }, { id: "amgn-2", source: "research_note", intelligenceType: "external", date: "Sep 10, 2026", content: `"Investors continue to view Amgen's leadership team as adept at managing perception during periods of heightened scrutiny, particularly when addressing pipeline risk."

Analyst note highlighting Amgen's reputation for strong narrative control.`, topics: ["Messaging", "Investor Sentiment"], attribution: "Sell-side Research" }, { id: "amgn-3", source: "media", intelligenceType: "external", date: "Jul 28, 2026", content: `"Amgen's recent pipeline updates were broadly well-received, reinforcing confidence despite a competitive therapeutic landscape."

Media recap of investor and analyst reaction to pipeline disclosures.`, topics: ["Pipeline", "Investor Sentiment"], attribution: "Financial Media" }], 4: [{ id: "lly-1", source: "earnings_call", intelligenceType: "external", date: "Sep 11, 2026", content: `"Leadership underscored sustained demand momentum and framed recent performance as evidence of disciplined execution across both commercial and R&D functions."

Eli Lilly Q2 2026 earnings call commentary.`, topics: ["Financials", "Execution Risk"], attribution: "Eli Lilly Q2 2026 Earnings Call" }, { id: "lly-2", source: "research_note", intelligenceType: "external", date: "Sep 12, 2026", content: `"Eli Lilly continues to benefit from favorable investor sentiment, driven by confidence in management's ability to translate innovation into durable growth."

Analyst research note following earnings.`, topics: ["Investor Sentiment", "Strategy"], attribution: "Sell-side Research" }, { id: "lly-3", source: "market_activity", intelligenceType: "external", date: "Aug 18, 2026", content: `"Shares outperformed the broader pharma index following positive peer read-through and reaffirmed guidance."

Market commentary linking stock performance to sector dynamics.`, topics: ["Market Activity", "Guidance"], attribution: "Market Commentary" }], 5: [{ id: "pfe-1", source: "earnings_call", intelligenceType: "external", date: "Sep 8, 2026", content: `"Management acknowledged near-term revenue headwinds while emphasizing strategic realignment efforts and a renewed focus on pipeline productivity."

Pfizer Q2 2026 earnings call remarks addressing transition dynamics.`, topics: ["Financials", "Pipeline"], attribution: "Pfizer Q2 2026 Earnings Call" }, { id: "pfe-2", source: "research_note", intelligenceType: "external", date: "Sep 9, 2026", content: `"Investors remain cautious as Pfizer navigates post-peak revenue normalization, with attention centered on execution against stated strategic priorities."

Analyst note assessing investor sentiment and execution risk.`, topics: ["Execution Risk", "Investor Sentiment"], attribution: "Sell-side Research" }, { id: "pfe-3", source: "media", intelligenceType: "external", date: "Aug 5, 2026", content: `"Pfizer's leadership messaging reflects a recalibration phase, as the company works to re-anchor its long-term equity narrative."

Media article discussing leadership tone and strategic messaging.`, topics: ["Messaging", "Strategy"], attribution: "Financial Media" }], "discovered-1": [{ id: "vertex-1", source: "earnings_call", intelligenceType: "external", date: "Sep 17, 2026", content: `"Vertex continues to demonstrate pipeline execution strength, with investors closely tracking the transition from legacy cystic fibrosis assets to emerging gene therapy and rare disease programs."

Commentary from recent Vertex Q2 2026 earnings call.`, topics: ["Pipeline", "Strategy"], attribution: "Vertex Q2 2026 Earnings Call" }, { id: "vertex-2", source: "research_note", intelligenceType: "external", date: "Sep 16, 2026", content: `"Vertex's positioning in rare disease and gene therapy has emerged as a competitive benchmark, with analysts drawing comparisons to Novartis's pipeline depth in adjacent therapeutic areas."

Sell-side research on competitive dynamics.`, topics: ["Competitive Positioning", "Clinical Data"], attribution: "Sell-side Research" }, { id: "vertex-3", source: "media", intelligenceType: "external", date: "Sep 15, 2026", content: `"Vertex's strategic clarity and execution consistency continue to be referenced in competitive discussions around pipeline prioritization."

Industry media on sector positioning.`, topics: ["Strategy", "Investor Sentiment"], attribution: "Industry Media" }], "discovered-2": [{ id: "regen-1", source: "earnings_call", intelligenceType: "external", date: "Sep 16, 2026", content: `"Regeneron management emphasized regulatory momentum and differentiation in immunology, with particular focus on the durability of franchise assets."

Commentary from Regeneron Q2 2026 earnings call.`, topics: ["Regulatory", "Competitive Positioning"], attribution: "Regeneron Q2 2026 Earnings Call" }, { id: "regen-2", source: "research_note", intelligenceType: "external", date: "Sep 15, 2026", content: `"Regeneron's R&D productivity and regulatory track record have drawn comparisons to Novartis's own immunology positioning, particularly around late-stage pipeline advancement."

Analyst note on R&D productivity.`, topics: ["R&D", "Competitive Positioning"], attribution: "Sell-side Research" }, { id: "regen-3", source: "media", intelligenceType: "external", date: "Sep 14, 2026", content: `"Regeneron's approach to label expansion and regulatory strategy has been highlighted as a competitive benchmark within immunology."

Industry coverage on regulatory strategy.`, topics: ["Regulatory", "Strategy"], attribution: "Industry Media" }] };

export const hV = ["Last 7 days", "Last 30 days", "Last 90 days"];

export const oj = ["Earnings Calls", "Research Notes", "Media", "Regulatory / Clinical", "Market Activity"];

export const fV = ["Financials", "Margins", "Guidance", "Pipeline", "Clinical Data", "Regulatory", "Strategy", "Investor Sentiment", "Competitive Positioning", "Execution Risk", "Messaging", "Market Activity"];

export function GeiCompanyDetail() {
  const { companyId: e } = useParams(), [n] = wc(), s = ij[e || "1"] || ij[1], a = n.get("tab") || "raw-intelligence", [r, i] = React.useState("Last 30 days"), [o, l] = React.useState(void 0), [c, u] = React.useState(oj), [m, p] = React.useState([]), [h, f] = React.useState(/* @__PURE__ */ new Set()), [v, x] = React.useState(false), [y, b] = React.useState(false), [g, j] = React.useState("external"), [w, C] = React.useState(a), [P, I] = React.useState("all"), [L, z] = React.useState("all"), R = Lm(e || "1", "company"), B = y ? { id: e || "1", name: s.name, companyType: s.companyType, activityLevel: "high", lastUpdated: `Updated ${s.lastUpdated}`, activeTopics: s.focusAreas, intelligenceType: s.companyType === "primary" ? "internal" : "external" } : null, J = (A) => {
    i(A), l(void 0);
  }, X = (A) => {
    l(A), A != null && A.from && i("");
  }, k = (A) => {
    u(($) => $.includes(A) ? $.filter((W) => W !== A) : [...$, A]);
  }, V = (A) => {
    p(($) => $.includes(A) ? $.filter((W) => W !== A) : [...$, A]);
  }, F = pV[e || "1"] || [], S = F.filter((A) => {
    if (g !== "both" && A.intelligenceType !== g) return false;
    const $ = { earnings_call: "Earnings Calls", research_note: "Research Notes", media: "Media", regulatory: "Regulatory / Clinical", market_activity: "Market Activity", social: "Media" };
    return !(!c.includes($[A.source]) || m.length > 0 && !A.topics.some((ee) => m.includes(ee)));
  }), E = (A) => {
    f(($) => {
      const W = new Set($);
      return W.has(A) ? W.delete(A) : W.add(A), W;
    });
  }, N = () => {
    h.size === S.length ? f(/* @__PURE__ */ new Set()) : f(new Set(S.map((A) => A.id)));
  }, T = () => {
    f(/* @__PURE__ */ new Set());
  }, _ = React.useMemo(() => F.filter((A) => h.has(A.id)), [h, F]), q = { primary: "Primary Company", competitor: "Competitor" };
  return (<div className="min-h-screen bg-background">
<C_zn />
<div className="container mx-auto px-6 py-6">
<div className="flex justify-end mb-6">
<Link to="/gei/entities?type=companies" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
<ArrowLeftIcon className="h-4 w-4" />
Back to Companies
</Link>
</div>
<div className="flex items-start justify-between mb-6">
<div>
<div className="flex items-center gap-3 mb-1">
<Building2Icon className="h-6 w-6 text-muted-foreground" />
<h1 className="text-2xl font-bold text-foreground">
{s.name}
</h1>
</div>
<p className="text-muted-foreground">
{s.industry}
</p>
</div>
<div className="flex items-center gap-4">
<Button variant="outline" size="sm" className="gap-1.5" onClick={() => b(true)}>
<CompassIcon className="h-4 w-4" />
360° View
</Button>
<div className="text-right">
<Badge variant={s.companyType === "primary" ? "default" : "secondary"} className="mb-2">
{q[s.companyType]}
</Badge>
<p className="text-sm text-muted-foreground">
{"Updated "}
{s.lastUpdated}
</p>
</div>
</div>
</div>
<div className="flex flex-wrap items-center gap-6 pb-6 border-b border-border mb-6">
<div className="flex items-center gap-2">
<span className="text-xs text-muted-foreground uppercase tracking-wide">
Focus Areas:
</span>
<div className="flex gap-1.5">
{s.focusAreas.map((A) => (<Badge variant="outline" className="text-xs font-normal" key={A}>
{A}
</Badge>))}
</div>
</div>
<div className="flex items-center gap-2">
<span className="text-xs text-muted-foreground uppercase tracking-wide">
Primary Sources:
</span>
<div className="flex gap-1.5">
{s.primarySources.map((A) => (<Badge variant="outline" className="text-xs font-normal" key={A}>
{A}
</Badge>))}
</div>
</div>
</div>
<C_si value={w} onValueChange={C} className="w-full">
<TabsList className="mb-6">
<TabsTrigger value="raw-intelligence" className="gap-2">
<FileTextIcon className="h-4 w-4" />
Raw Intelligence
</TabsTrigger>
<TabsTrigger value="leadership-claims" className="gap-2">
<QuoteIcon className="h-4 w-4" />
Leadership Claims
{R.length > 0 && (<Badge variant="secondary" className="ml-1 text-xs">
{R.length}
</Badge>)}
</TabsTrigger>
</TabsList>
<TabsContent value="raw-intelligence" className="mt-0">
<div className="space-y-4 mb-6">
<Un value={g} onChange={j} />
<div className="flex items-center gap-2">
<span className="text-xs text-muted-foreground uppercase tracking-wide min-w-[60px]">
Time:
</span>
<div className="flex gap-2">
{hV.map((A) => (<Button variant={r === A && !(o != null && o.from) ? "default" : "outline"} size="sm" className="text-xs h-7" onClick={() => J(A)} key={A}>
{A}
</Button>))}
<C_dn dateRange={o} onDateRangeChange={X} onClear={() => i("Last 30 days")} />
</div>
</div>
<div className="flex items-center gap-2">
<span className="text-xs text-muted-foreground uppercase tracking-wide min-w-[60px]">
Source:
</span>
<div className="flex gap-2 flex-wrap">
{oj.map((A) => (<Button variant={c.includes(A) ? "default" : "outline"} size="sm" className="text-xs h-7" onClick={() => k(A)} key={A}>
{A}
</Button>))}
</div>
</div>
<div className="flex items-start gap-2">
<span className="text-xs text-muted-foreground uppercase tracking-wide min-w-[60px] pt-1.5">
Topic:
</span>
<div className="flex gap-2 flex-wrap">
{fV.map((A) => (<Button variant={m.includes(A) ? "default" : "outline"} size="sm" className="text-xs h-7" onClick={() => V(A)} key={A}>
{A}
</Button>))}
</div>
</div>
</div>
<div className={cn("sticky top-16 z-10 -mx-6 px-6 py-3 bg-background/95 backdrop-blur border-b border-border transition-all", h.size > 0 ? "opacity-100" : "opacity-50")}>
<div className="flex items-center justify-between">
<div className="flex items-center gap-4">
<div className="flex items-center gap-2">
<Checkbox checked={S.length > 0 && h.size === S.length} onCheckedChange={N} disabled={S.length === 0} />
<span className="text-sm text-muted-foreground">
Select All
</span>
</div>
{h.size > 0 ? (<span className="text-sm font-medium">
{h.size}
{" item"}
{h.size !== 1 ? "s" : ""}
{" selected"}
</span>) : (<span className="text-sm text-muted-foreground">
Select intelligence items to promote
</span>)}
</div>
<div className="flex items-center gap-2">
{h.size > 0 && (<>
<Button variant="ghost" size="sm" className="text-xs gap-1.5" onClick={T}>
<XIcon className="h-3.5 w-3.5" />
Clear
</Button>
<Button size="sm" className="gap-1.5" onClick={() => x(true)}>
<DatabaseIcon className="h-3.5 w-3.5" />
Promote to Data Source
</Button>
</>)}
</div>
</div>
</div>
<div className="space-y-4 mt-6">
<div className="flex items-center justify-between">
<h2 className="text-sm font-medium text-muted-foreground">
{S.length}
{" intelligence items"}
</h2>
</div>
{S.length > 0 ? (<div className="space-y-4">
{S.map((A) => (<Fo item={A} isSelected={h.has(A.id)} onToggleSelect={E} key={A.id} />))}
</div>) : (<div className="text-center py-12 text-muted-foreground">
<Building2Icon className="h-12 w-12 mx-auto mb-4 opacity-50" />
<p>
No intelligence items match the current filters
</p>
</div>)}
</div>
</TabsContent>
<TabsContent value="leadership-claims" className="mt-0">
<div className="space-y-4 mb-6">
<div className="flex items-center gap-2">
<span className="text-xs text-muted-foreground uppercase tracking-wide min-w-[60px]">
Type:
</span>
<div className="flex gap-2 flex-wrap">
{["all", "regulatory_expectation", "development_timeline", "commercial_potential", "strategic_importance"].map((A) => (<Button variant={P === A ? "default" : "outline"} size="sm" className="text-xs h-7" onClick={() => I(A)} key={A}>
{A === "all" ? "All Types" : A === "regulatory_expectation" ? "Regulatory" : A === "development_timeline" ? "Timeline" : A === "commercial_potential" ? "Commercial" : "Strategic"}
</Button>))}
</div>
</div>
<div className="flex items-center gap-2">
<span className="text-xs text-muted-foreground uppercase tracking-wide min-w-[60px]">
Status:
</span>
<div className="flex gap-2 flex-wrap">
{["all", "still_open", "addressed", "needs_review"].map((A) => (<Button variant={L === A ? "default" : "outline"} size="sm" className="text-xs h-7" onClick={() => z(A)} key={A}>
{A === "all" ? "All Statuses" : A === "still_open" ? "Open" : A === "addressed" ? "Addressed" : "Needs Review"}
</Button>))}
</div>
</div>
</div>
<Gg claims={R} filterType={P} filterStatus={L} />
</TabsContent>
</C_si>
</div>
<C_zo isOpen={v} onClose={() => x(false)} onSuccess={() => {
    x(false), f(/* @__PURE__ */ new Set());
  }} items={_} analystName={s.name} />
<G5 company={B} onClose={() => b(false)} />
</div>);
}

export const gV = ["Last 7 days", "Last 30 days", "Last 90 days"];

export const lj = ["Earnings Calls", "Research Notes", "Media", "Clinical / Regulatory", "Investor Conference"];

export const vV = ["Financials", "Guidance", "Pipeline", "Clinical Data", "Regulatory", "Safety", "Strategy", "Investor Sentiment", "Competitive Positioning", "Execution Risk", "Messaging"];

export function GeiAssetDetail() {
  const { assetId: e } = useParams(), [n] = wc(), a = f$(e || "1") || bo[0], r = n.get("tab") || "raw-intelligence", [i, o] = React.useState("Last 30 days"), [l, c] = React.useState(void 0), [u, m] = React.useState(lj), [p, h] = React.useState([]), [f, v] = React.useState(/* @__PURE__ */ new Set()), [x, y] = React.useState(false), [b, g] = React.useState(false), [j, w] = React.useState("external"), [C, P] = React.useState(r), [I, L] = React.useState("all"), [z, R] = React.useState("all"), B = Lm(e || "1", "asset"), J = b ? { id: e || "1", name: a.name, company: a.company, assetType: a.assetType, activityLevel: a.activityLevel, lastUpdated: a.lastUpdated, activeTopics: a.focusAreas, intelligenceType: a.intelligenceType || "external" } : null, X = ($) => {
    o($), c(void 0);
  }, k = ($) => {
    c($), $ != null && $.from && o("");
  }, V = ($) => {
    m((W) => W.includes($) ? W.filter((ee) => ee !== $) : [...W, $]);
  }, F = ($) => {
    h((W) => W.includes($) ? W.filter((ee) => ee !== $) : [...W, $]);
  }, S = x$(e || "1"), E = S.filter(($) => {
    if (j !== "both" && $.intelligenceType !== j) return false;
    const W = { earnings_call: "Earnings Calls", research_note: "Research Notes", media: "Media", regulatory: "Clinical / Regulatory", market_activity: "Media", investor_conference: "Investor Conference", social: "Media" };
    return !(!u.includes(W[$.source]) || p.length > 0 && !$.topics.some((Q) => p.includes(Q)));
  }), N = ($) => {
    v((W) => {
      const ee = new Set(W);
      return ee.has($) ? ee.delete($) : ee.add($), ee;
    });
  }, T = () => {
    f.size === E.length ? v(/* @__PURE__ */ new Set()) : v(new Set(E.map(($) => $.id)));
  }, _ = () => {
    v(/* @__PURE__ */ new Set());
  }, q = React.useMemo(() => S.filter(($) => f.has($.id)), [f, S]), A = { marketed: "Marketed Drug", pipeline: "Pipeline Asset", clinical: "Clinical-Stage Program" };
  return (<div className="min-h-screen bg-background">
<C_zn />
<div className="container mx-auto px-6 py-6">
<div className="flex justify-end mb-6">
<Link to="/gei/entities?type=assets" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
<ArrowLeftIcon className="h-4 w-4" />
Back to Assets
</Link>
</div>
<div className="flex items-start justify-between mb-6">
<div>
<div className="flex items-center gap-3 mb-1">
<PillIcon className="h-6 w-6 text-muted-foreground" />
<h1 className="text-2xl font-bold text-foreground">
{a.name}
</h1>
<span className="text-lg text-muted-foreground">
(
{a.company}
)
</span>
</div>
<p className="text-muted-foreground">
{a.therapeuticArea}
</p>
</div>
<div className="flex items-center gap-4">
<Button variant="outline" size="sm" className="gap-1.5" onClick={() => g(true)}>
<CompassIcon className="h-4 w-4" />
360° View
</Button>
<div className="text-right">
<Badge variant={a.assetType === "marketed" ? "default" : "secondary"} className="mb-2">
{A[a.assetType]}
</Badge>
<p className="text-sm text-muted-foreground">
{a.lastUpdated}
</p>
</div>
</div>
</div>
<div className="flex flex-wrap items-center gap-6 pb-6 border-b border-border mb-6">
<div className="flex items-center gap-2">
<span className="text-xs text-muted-foreground uppercase tracking-wide">
Focus Areas:
</span>
<div className="flex gap-1.5 flex-wrap">
{a.focusAreas.map(($) => (<Badge variant="outline" className="text-xs font-normal" key={$}>
{$}
</Badge>))}
</div>
</div>
<div className="flex items-center gap-2">
<span className="text-xs text-muted-foreground uppercase tracking-wide">
Primary Sources:
</span>
<div className="flex gap-1.5 flex-wrap">
{a.primarySources.map(($) => (<Badge variant="outline" className="text-xs font-normal" key={$}>
{$}
</Badge>))}
</div>
</div>
</div>
<C_si value={C} onValueChange={P} className="w-full">
<TabsList className="mb-6">
<TabsTrigger value="raw-intelligence" className="gap-2">
<FileTextIcon className="h-4 w-4" />
Raw Intelligence
</TabsTrigger>
<TabsTrigger value="leadership-claims" className="gap-2">
<QuoteIcon className="h-4 w-4" />
Leadership Claims
{B.length > 0 && (<Badge variant="secondary" className="ml-1 text-xs">
{B.length}
</Badge>)}
</TabsTrigger>
</TabsList>
<TabsContent value="raw-intelligence" className="mt-0">
<div className="space-y-4 mb-6">
<Un value={j} onChange={w} />
<div className="flex items-center gap-2">
<span className="text-xs text-muted-foreground uppercase tracking-wide min-w-[60px]">
Time:
</span>
<div className="flex gap-2">
{gV.map(($) => (<Button variant={i === $ && !(l != null && l.from) ? "default" : "outline"} size="sm" className="text-xs h-7" onClick={() => X($)} key={$}>
{$}
</Button>))}
<C_dn dateRange={l} onDateRangeChange={k} onClear={() => o("Last 30 days")} />
</div>
</div>
<div className="flex items-center gap-2">
<span className="text-xs text-muted-foreground uppercase tracking-wide min-w-[60px]">
Source:
</span>
<div className="flex gap-2 flex-wrap">
{lj.map(($) => (<Button variant={u.includes($) ? "default" : "outline"} size="sm" className="text-xs h-7" onClick={() => V($)} key={$}>
{$}
</Button>))}
</div>
</div>
<div className="flex items-start gap-2">
<span className="text-xs text-muted-foreground uppercase tracking-wide min-w-[60px] pt-1.5">
Topic:
</span>
<div className="flex gap-2 flex-wrap">
{vV.map(($) => (<Button variant={p.includes($) ? "default" : "outline"} size="sm" className="text-xs h-7" onClick={() => F($)} key={$}>
{$}
</Button>))}
</div>
</div>
</div>
<div className={cn("sticky top-16 z-10 -mx-6 px-6 py-3 bg-background/95 backdrop-blur border-b border-border transition-all", f.size > 0 ? "opacity-100" : "opacity-50")}>
<div className="flex items-center justify-between">
<div className="flex items-center gap-4">
<div className="flex items-center gap-2">
<Checkbox checked={E.length > 0 && f.size === E.length} onCheckedChange={T} disabled={E.length === 0} />
<span className="text-sm text-muted-foreground">
Select All
</span>
</div>
{f.size > 0 ? (<span className="text-sm font-medium">
{f.size}
{" item"}
{f.size !== 1 ? "s" : ""}
{" selected"}
</span>) : (<span className="text-sm text-muted-foreground">
Select intelligence items to promote
</span>)}
</div>
<div className="flex items-center gap-2">
{f.size > 0 && (<>
<Button variant="ghost" size="sm" className="text-xs gap-1.5" onClick={_}>
<XIcon className="h-3.5 w-3.5" />
Clear
</Button>
<Button size="sm" className="gap-1.5" onClick={() => y(true)}>
<DatabaseIcon className="h-3.5 w-3.5" />
Promote to Data Source
</Button>
</>)}
</div>
</div>
</div>
<div className="space-y-4 mt-6">
<div className="flex items-center justify-between">
<h2 className="text-sm font-medium text-muted-foreground">
{E.length}
{" intelligence items"}
</h2>
</div>
{E.length > 0 ? (<div className="space-y-4">
{E.map(($) => (<Fo item={$} isSelected={f.has($.id)} onToggleSelect={N} key={$.id} />))}
</div>) : (<div className="text-center py-12 text-muted-foreground">
<PillIcon className="h-12 w-12 mx-auto mb-4 opacity-50" />
<p>
No intelligence items match the current filters
</p>
</div>)}
</div>
</TabsContent>
<TabsContent value="leadership-claims" className="mt-0">
<div className="space-y-4 mb-6">
<div className="flex items-center gap-2">
<span className="text-xs text-muted-foreground uppercase tracking-wide min-w-[60px]">
Type:
</span>
<div className="flex gap-2 flex-wrap">
{["all", "regulatory_expectation", "development_timeline", "commercial_potential", "strategic_importance"].map(($) => (<Button variant={I === $ ? "default" : "outline"} size="sm" className="text-xs h-7" onClick={() => L($)} key={$}>
{$ === "all" ? "All Types" : $ === "regulatory_expectation" ? "Regulatory" : $ === "development_timeline" ? "Timeline" : $ === "commercial_potential" ? "Commercial" : "Strategic"}
</Button>))}
</div>
</div>
<div className="flex items-center gap-2">
<span className="text-xs text-muted-foreground uppercase tracking-wide min-w-[60px]">
Status:
</span>
<div className="flex gap-2 flex-wrap">
{["all", "still_open", "addressed", "needs_review"].map(($) => (<Button variant={z === $ ? "default" : "outline"} size="sm" className="text-xs h-7" onClick={() => R($)} key={$}>
{$ === "all" ? "All Statuses" : $ === "still_open" ? "Open" : $ === "addressed" ? "Addressed" : "Needs Review"}
</Button>))}
</div>
</div>
</div>
<Gg claims={B} filterType={I} filterStatus={z} />
</TabsContent>
</C_si>
</div>
<C_zo isOpen={x} onClose={() => {
    y(false), _();
  }} onSuccess={() => {
    y(false), _();
  }} analystName={`${a.name} (${a.company})`} items={q} />
<Q5 asset={J} onClose={() => g(false)} />
</div>);
}

export const jV = { earnings: "Earnings Release / Call", investor_conference: "Investor Conference / Roadshow", clinical_disclosure: "Clinical Data Disclosure", regulatory_decision: "Regulatory Decision", ma_licensing: "M&A / Licensing Announcement", crisis: "Crisis / Reputational Event", market_volatility: "Market Volatility Event" };

export const bV = [{ value: "7", label: "Last 7 days" }, { value: "30", label: "Last 30 days" }, { value: "90", label: "Last 90 days" }];

export const cj = ["Earnings Calls", "Research Notes", "Media", "Regulatory / Clinical", "Market Activity", "Investor Conference"];

export const wV = ["Financials", "Guidance", "Pipeline", "Clinical Data", "Regulatory", "Safety", "Strategy", "Investor Sentiment", "Competitive Positioning", "Execution Risk", "Messaging", "Market Activity"];

export function C_el({ label: e, selected: n, onClick: s }) {
  return (<button onClick={s} className={cn("px-3 py-1.5 rounded-full text-xs font-medium transition-colors whitespace-nowrap", n ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80")}>
{e}
</button>);
}

export function GeiEventDetail() {
  const { eventId: e } = useParams(), [n] = wc(), a = u$(e || "1") || jo[0], r = n.get("tab") || "raw-intelligence", [i, o] = React.useState("30"), [l, c] = React.useState(void 0), [u, m] = React.useState(cj), [p, h] = React.useState([]), [f, v] = React.useState(/* @__PURE__ */ new Set()), [x, y] = React.useState(false), [b, g] = React.useState(false), [j, w] = React.useState("external"), [C, P] = React.useState(r), [I, L] = React.useState("all"), [z, R] = React.useState("all"), B = Lm(e || "1", "event"), J = b ? { id: e || "1", name: a.name, eventType: a.eventType, eventDate: a.eventDate, activityLevel: a.activityLevel, activeTopics: a.topics, intelligenceType: a.intelligenceType || "external" } : null, X = (A) => {
    o(A), c(void 0);
  }, k = (A) => {
    c(A), A != null && A.from && o("");
  }, V = (A) => {
    m(($) => $.includes(A) ? $.filter((W) => W !== A) : [...$, A]);
  }, F = (A) => {
    h(($) => $.includes(A) ? $.filter((W) => W !== A) : [...$, A]);
  }, S = m$(e || "1"), E = S.filter((A) => {
    if (j !== "both" && A.intelligenceType !== j) return false;
    const $ = { earnings_call: "Earnings Calls", research_note: "Research Notes", media: "Media", regulatory: "Regulatory / Clinical", market_activity: "Market Activity", investor_conference: "Investor Conference", social: "Media" };
    return !(!u.includes($[A.source]) || p.length > 0 && !A.topics.some((ee) => p.includes(ee)));
  }), N = (A) => {
    v(($) => {
      const W = new Set($);
      return W.has(A) ? W.delete(A) : W.add(A), W;
    });
  }, T = () => {
    f.size === E.length ? v(/* @__PURE__ */ new Set()) : v(new Set(E.map((A) => A.id)));
  }, _ = () => {
    v(/* @__PURE__ */ new Set());
  }, q = React.useMemo(() => S.filter((A) => f.has(A.id)), [f, S]);
  return (<div className="min-h-screen bg-background">
<C_zn />
<div className="container mx-auto px-6 py-6">
<div className="flex justify-end mb-6">
<Link to="/gei/entities?type=events" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
<ArrowLeftIcon className="h-4 w-4" />
Back to Events
</Link>
</div>
<div className="flex items-start justify-between mb-6">
<div>
<div className="flex items-center gap-3 mb-1">
<CalendarIcon className="h-6 w-6 text-muted-foreground" />
<h1 className="text-2xl font-bold text-foreground">
{a.name}
</h1>
</div>
<p className="text-muted-foreground">
{a.eventDate}
</p>
</div>
<div className="flex items-center gap-4">
<Button variant="outline" size="sm" className="gap-1.5" onClick={() => g(true)}>
<CompassIcon className="h-4 w-4" />
360° View
</Button>
<div className="text-right">
<Badge variant="secondary" className="mb-2">
{jV[a.eventType]}
</Badge>
</div>
</div>
</div>
<div className="flex flex-wrap items-center gap-6 pb-6 border-b border-border mb-6">
<div className="flex items-center gap-2">
<span className="text-xs text-muted-foreground uppercase tracking-wide">
Focus Areas:
</span>
<div className="flex gap-1.5 flex-wrap">
{a.focusAreas.map((A) => (<Badge variant="outline" className="text-xs font-normal" key={A}>
{A}
</Badge>))}
</div>
</div>
<div className="flex items-center gap-2">
<span className="text-xs text-muted-foreground uppercase tracking-wide">
Primary Sources:
</span>
<div className="flex gap-1.5 flex-wrap">
{a.primarySources.map((A) => (<Badge variant="outline" className="text-xs font-normal" key={A}>
{A}
</Badge>))}
</div>
</div>
</div>
<C_si value={C} onValueChange={P} className="w-full">
<TabsList className="mb-6">
<TabsTrigger value="raw-intelligence" className="gap-2">
<FileTextIcon className="h-4 w-4" />
Raw Intelligence
</TabsTrigger>
<TabsTrigger value="leadership-claims" className="gap-2">
<QuoteIcon className="h-4 w-4" />
Leadership Claims
{B.length > 0 && (<Badge variant="secondary" className="ml-1 text-xs">
{B.length}
</Badge>)}
</TabsTrigger>
</TabsList>
<TabsContent value="raw-intelligence" className="mt-0">
<div className="space-y-4 mb-6">
<Un value={j} onChange={w} />
<div className="flex items-center gap-2">
<span className="text-xs text-muted-foreground font-medium min-w-[60px]">
Time:
</span>
<div className="flex items-center gap-1">
{bV.map((A) => (<C_el label={A.label} selected={i === A.value && !(l != null && l.from)} onClick={() => X(A.value)} key={A.value} />))}
<C_dn dateRange={l} onDateRangeChange={k} onClear={() => o("30")} />
</div>
</div>
<div className="flex items-center gap-2">
<span className="text-xs text-muted-foreground font-medium min-w-[60px]">
Source:
</span>
<div className="flex items-center gap-1 flex-wrap">
{cj.map((A) => (<C_el label={A} selected={u.includes(A)} onClick={() => V(A)} key={A} />))}
</div>
</div>
<div className="flex items-center gap-2">
<span className="text-xs text-muted-foreground font-medium min-w-[60px]">
Topics:
</span>
<div className="flex items-center gap-1 flex-wrap">
{wV.map((A) => (<C_el label={A} selected={p.includes(A)} onClick={() => F(A)} key={A} />))}
</div>
</div>
</div>
<div className={cn("sticky top-16 z-10 -mx-6 px-6 py-3 bg-background/95 backdrop-blur border-b border-border transition-all", f.size > 0 ? "opacity-100" : "opacity-50")}>
<div className="flex items-center justify-between">
<div className="flex items-center gap-4">
<div className="flex items-center gap-2">
<Checkbox checked={E.length > 0 && f.size === E.length} onCheckedChange={T} disabled={E.length === 0} />
<span className="text-sm text-muted-foreground">
Select All
</span>
</div>
{f.size > 0 ? (<span className="text-sm font-medium">
{f.size}
{" item"}
{f.size !== 1 ? "s" : ""}
{" selected"}
</span>) : (<span className="text-sm text-muted-foreground">
Select intelligence items to promote
</span>)}
</div>
<div className="flex items-center gap-2">
{f.size > 0 && (<>
<Button variant="ghost" size="sm" className="text-xs gap-1.5" onClick={_}>
<XIcon className="h-3.5 w-3.5" />
Clear
</Button>
<Button size="sm" className="gap-1.5" onClick={() => y(true)}>
<DatabaseIcon className="h-3.5 w-3.5" />
Promote to Data Source
</Button>
</>)}
</div>
</div>
</div>
<div className="space-y-4 mt-6">
<div className="flex items-center justify-between">
<h2 className="text-sm font-medium text-muted-foreground">
{E.length}
{" intelligence items"}
</h2>
</div>
{E.length > 0 ? (<div className="space-y-4">
{E.map((A) => (<Fo item={A} isSelected={f.has(A.id)} onToggleSelect={N} key={A.id} />))}
</div>) : (<div className="text-center py-12 text-muted-foreground">
<CalendarIcon className="h-12 w-12 mx-auto mb-4 opacity-50" />
<p className="text-lg font-medium mb-1">
No intelligence found
</p>
<p className="text-sm">
Adjust your filters to see intelligence items
</p>
</div>)}
</div>
</TabsContent>
<TabsContent value="leadership-claims" className="mt-0">
<div className="space-y-4 mb-6">
<div className="flex items-center gap-2">
<span className="text-xs text-muted-foreground font-medium min-w-[60px]">
Type:
</span>
<div className="flex items-center gap-1 flex-wrap">
{["all", "regulatory_expectation", "development_timeline", "commercial_potential", "strategic_importance"].map((A) => (<C_el label={A === "all" ? "All Types" : A === "regulatory_expectation" ? "Regulatory" : A === "development_timeline" ? "Timeline" : A === "commercial_potential" ? "Commercial" : "Strategic"} selected={I === A} onClick={() => L(A)} key={A} />))}
</div>
</div>
<div className="flex items-center gap-2">
<span className="text-xs text-muted-foreground font-medium min-w-[60px]">
Status:
</span>
<div className="flex items-center gap-1 flex-wrap">
{["all", "still_open", "addressed", "needs_review"].map((A) => (<C_el label={A === "all" ? "All Statuses" : A === "still_open" ? "Open" : A === "addressed" ? "Addressed" : "Needs Review"} selected={z === A} onClick={() => R(A)} key={A} />))}
</div>
</div>
</div>
<Gg claims={B} filterType={I} filterStatus={z} />
</TabsContent>
</C_si>
</div>
<C_zo isOpen={x} onClose={() => y(false)} onSuccess={() => {
    y(false), _();
  }} items={q} analystName={a.name} />
<Y5 event={J} onClose={() => g(false)} />
</div>);
}

export const CV = [{ value: "7", label: "Last 7 days" }, { value: "30", label: "Last 30 days" }, { value: "90", label: "Last 90 days" }];

export const dj = ["Analyst Commentary", "Media", "Earnings Call", "Regulatory / Clinical", "Market Activity", "Investor Conference", "Social Media"];

export const SV = ["Financials", "Guidance", "Pipeline", "Clinical Data", "Regulatory", "Safety", "Strategy", "Investor Sentiment", "Competitive Positioning", "Execution Risk", "Messaging", "Market Activity"];

export function C_qp({ label: e, selected: n, onClick: s }) {
  return (<button onClick={s} className={cn("px-3 py-1.5 rounded-full text-xs font-medium transition-colors whitespace-nowrap", n ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80")}>
{e}
</button>);
}

export const kV = { high: "bg-destructive/10 text-destructive border-destructive/30", medium: "bg-amber-500/10 text-amber-600 border-amber-500/30", low: "bg-emerald-500/10 text-emerald-600 border-emerald-500/30" };

export const TV = { company: (<Building2Icon className="h-3 w-3" />), asset: (<PillIcon className="h-3 w-3" />), event: (<CalendarIcon className="h-3 w-3" />) };

export function GeiNarrativeDetail() {
  const { narrativeId: e } = useParams(), s = C5(e || "narrative-1") || yo[0], [a, r] = React.useState("30"), [i, o] = React.useState(void 0), [l, c] = React.useState(dj), [u, m] = React.useState([]), [p, h] = React.useState(/* @__PURE__ */ new Set()), [f, v] = React.useState(false), [x, y] = React.useState(false), [b, g] = React.useState("external"), j = x ? { id: e || "narrative-1", title: s.name, narrativeType: s.narrativeType, status: s.status, lastUpdated: s.lastUpdated, riskLevel: s.riskLevel, topics: s.topics, linkedEntities: s.linkedEntities, intelligenceType: "external" } : null, w = (S) => {
    r(S), o(void 0);
  }, C = (S) => {
    o(S), S != null && S.from && r("");
  }, P = (S) => {
    c((E) => E.includes(S) ? E.filter((N) => N !== S) : [...E, S]);
  }, I = (S) => {
    m((E) => E.includes(S) ? E.filter((N) => N !== S) : [...E, S]);
  }, L = s.intelligenceItems, z = { "analyst commentary": "research_note", media: "media", "earnings call": "earnings_call", "regulatory / clinical": "regulatory", "clinical / regulatory": "regulatory", regulatory: "regulatory", "market activity": "market_activity", "investor conference": "investor_conference", "social media": "social_media" }, R = (S, E) => {
    const N = S.toLowerCase(), T = E.toLowerCase();
    return (T.includes("novartis")) && (N.includes("earnings") || N.includes("investor day")) ? "internal" : "external";
  }, B = L.map((S) => ({ id: S.id, source: z[S.sourceType.toLowerCase()] || "research_note", intelligenceType: R(S.sourceType, S.attribution), date: S.date, content: S.rawContent, context: S.context, topics: S.topics, attribution: S.attribution })), J = B.filter((S) => {
    if (b !== "both" && S.intelligenceType !== b) return false;
    const E = { research_note: "Analyst Commentary", media: "Media", earnings_call: "Earnings Call", regulatory: "Regulatory / Clinical", market_activity: "Market Activity", investor_conference: "Investor Conference", social_media: "Social Media" };
    return !(!l.includes(E[S.source] || S.source) || u.length > 0 && !S.topics.some((T) => u.includes(T)));
  }), X = (S) => {
    h((E) => {
      const N = new Set(E);
      return N.has(S) ? N.delete(S) : N.add(S), N;
    });
  }, k = () => {
    p.size === J.length ? h(/* @__PURE__ */ new Set()) : h(new Set(J.map((S) => S.id)));
  }, V = () => {
    h(/* @__PURE__ */ new Set());
  }, F = React.useMemo(() => B.filter((S) => p.has(S.id)), [p, B]);
  return (<div className="min-h-screen bg-background">
<C_zn />
<div className="container mx-auto px-6 py-6">
<div className="flex justify-end mb-6">
<Link to="/gei/entities?type=narratives" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
<ArrowLeftIcon className="h-4 w-4" />
Back to Narratives
</Link>
</div>
<div className="flex items-start justify-between mb-6">
<div>
<div className="flex items-center gap-3 mb-1">
<MessageSquareIcon className="h-6 w-6 text-muted-foreground" />
<h1 className="text-2xl font-bold text-foreground">
{s.name}
</h1>
</div>
<p className="text-muted-foreground">
{"Last updated "}
{s.lastUpdated}
</p>
</div>
<div className="flex items-center gap-4">
<Button variant="outline" size="sm" className="gap-1.5" onClick={() => y(true)}>
<CompassIcon className="h-4 w-4" />
360° View
</Button>
<div className="flex flex-col items-end gap-2">
<Badge variant="secondary">
{sa[s.narrativeType]}
</Badge>
<Badge className={cn("border", kV[s.riskLevel])}>
{s.riskLevel.charAt(0).toUpperCase() + s.riskLevel.slice(1)}
{" Risk"}
</Badge>
</div>
</div>
</div>
<div className="flex flex-wrap items-center gap-6 pb-6 border-b border-border mb-6">
<div className="flex items-center gap-2">
<span className="text-xs text-muted-foreground uppercase tracking-wide">
Status:
</span>
<Badge variant="outline" className="text-xs font-normal">
{Qa[s.status]}
</Badge>
</div>
<div className="flex items-center gap-2">
<span className="text-xs text-muted-foreground uppercase tracking-wide">
Key Topics:
</span>
<div className="flex gap-1.5 flex-wrap">
{s.topics.map((S) => (<Badge variant="outline" className="text-xs font-normal" key={S}>
{S}
</Badge>))}
</div>
</div>
<div className="flex items-center gap-2">
<span className="text-xs text-muted-foreground uppercase tracking-wide">
Linked Entities:
</span>
<div className="flex gap-1.5 flex-wrap">
{s.linkedEntities.map((S) => (<Badge variant="outline" className="text-xs font-normal gap-1" key={S.id}>
{TV[S.type]}
{S.name}
</Badge>))}
</div>
</div>
</div>
<div className="space-y-4 mb-6">
<Un value={b} onChange={g} />
<div className="flex items-center gap-2">
<span className="text-xs text-muted-foreground font-medium min-w-[60px]">
Time:
</span>
<div className="flex items-center gap-1">
{CV.map((S) => (<C_qp label={S.label} selected={a === S.value && !(i != null && i.from)} onClick={() => w(S.value)} key={S.value} />))}
<C_dn dateRange={i} onDateRangeChange={C} onClear={() => r("30")} />
</div>
</div>
<div className="flex items-center gap-2">
<span className="text-xs text-muted-foreground font-medium min-w-[60px]">
Source:
</span>
<div className="flex items-center gap-1 flex-wrap">
{dj.map((S) => (<C_qp label={S} selected={l.includes(S)} onClick={() => P(S)} key={S} />))}
</div>
</div>
<div className="flex items-center gap-2">
<span className="text-xs text-muted-foreground font-medium min-w-[60px]">
Topics:
</span>
<div className="flex items-center gap-1 flex-wrap">
{SV.map((S) => (<C_qp label={S} selected={u.includes(S)} onClick={() => I(S)} key={S} />))}
</div>
</div>
</div>
<div className={cn("sticky top-16 z-10 -mx-6 px-6 py-3 bg-background/95 backdrop-blur border-b border-border transition-all", p.size > 0 ? "opacity-100" : "opacity-50")}>
<div className="flex items-center justify-between">
<div className="flex items-center gap-4">
<div className="flex items-center gap-2">
<Checkbox checked={J.length > 0 && p.size === J.length} onCheckedChange={k} disabled={J.length === 0} />
<span className="text-sm text-muted-foreground">
Select All
</span>
</div>
{p.size > 0 ? (<span className="text-sm font-medium">
{p.size}
{" item"}
{p.size !== 1 ? "s" : ""}
{" selected"}
</span>) : (<span className="text-sm text-muted-foreground">
Select intelligence items to promote
</span>)}
</div>
<div className="flex items-center gap-2">
{p.size > 0 && (<>
<Button variant="ghost" size="sm" className="text-xs gap-1.5" onClick={V}>
<XIcon className="h-3.5 w-3.5" />
Clear
</Button>
<Button size="sm" className="gap-1.5" onClick={() => v(true)}>
<DatabaseIcon className="h-3.5 w-3.5" />
Promote to Data Source
</Button>
</>)}
</div>
</div>
</div>
<div className="space-y-4 mt-6">
<div className="flex items-center justify-between">
<h2 className="text-sm font-medium text-muted-foreground">
{J.length}
{" intelligence items"}
</h2>
</div>
{J.length > 0 ? (<div className="space-y-4">
{J.map((S) => (<Fo item={S} isSelected={p.has(S.id)} onToggleSelect={X} key={S.id} />))}
</div>) : (<div className="text-center py-12 text-muted-foreground">
<MessageSquareIcon className="h-12 w-12 mx-auto mb-4 opacity-50" />
<p className="text-lg font-medium mb-1">
No intelligence found
</p>
<p className="text-sm">
Adjust your filters to see intelligence items
</p>
</div>)}
</div>
</div>
<C_zo isOpen={f} onClose={() => v(false)} onSuccess={() => {
    v(false), V();
  }} items={F} analystName={s.name} />
<K5 narrative={j} onClose={() => y(false)} />
</div>);
}

export const EV = ["Last 7 days", "Last 30 days", "Last 90 days"];

export const uj = ["Research Notes", "Market Activity", "Media", "Social Media"];

export const MV = ["Financials", "Guidance", "Pipeline", "Clinical Data", "Regulatory", "Safety", "Strategy", "Investor Sentiment", "Competitive Positioning", "Execution Risk", "Messaging", "Market Activity"];

export const Qp = { bullish: { icon: TrendingUpIcon, label: "Bullish", color: "text-emerald-600 bg-emerald-500/10" }, bearish: { icon: TrendingDownIcon, label: "Bearish", color: "text-red-600 bg-red-500/10" }, neutral: { icon: MinusIcon, label: "Neutral", color: "text-muted-foreground bg-muted" } };

export const mj = { high: { label: "High Magnitude", color: "text-primary bg-primary/10" }, medium: { label: "Medium Magnitude", color: "text-amber-600 bg-amber-500/10" }, low: { label: "Low Magnitude", color: "text-muted-foreground bg-muted" } };

export function GeiMarketSignalDetail() {
  const { signalId: e } = useParams(), n = rc.find((k) => k.id === e), [s, a] = React.useState("Last 30 days"), [r, i] = React.useState(void 0), [o, l] = React.useState(uj), [c, u] = React.useState([]), [m, p] = React.useState(/* @__PURE__ */ new Set()), [h, f] = React.useState(false), [v, x] = React.useState(false), [y, b] = React.useState("external"), g = n ? c$(n.id) : [], j = React.useMemo(() => g.filter((k) => m.has(k.id)), [m, g]), w = (k) => {
    a(k), i(void 0);
  }, C = (k) => {
    i(k), k != null && k.from && a("");
  }, P = (k) => {
    l((V) => V.includes(k) ? V.filter((F) => F !== k) : [...V, k]);
  }, I = (k) => {
    u((V) => V.includes(k) ? V.filter((F) => F !== k) : [...V, k]);
  };
  if (!n) return (<div className="min-h-screen bg-background">
<C_zn />
<div className="container mx-auto px-6 py-12">
<div className="text-center">
<ChartLineIcon className="h-12 w-12 mx-auto mb-4 text-muted-foreground opacity-50" />
<h2 className="text-lg font-semibold text-foreground mb-2">
Signal Not Found
</h2>
<p className="text-muted-foreground mb-4">
The requested market signal could not be found
</p>
<Link to="/gei/entities?type=market">
<Button>
Back to Market Signals
</Button>
</Link>
</div>
</div>
</div>);
  const L = { id: n.id, name: n.name, signalType: n.signalType, signalDate: n.signalDate, magnitude: n.magnitude, activeTopics: n.topics, direction: n.direction, intelligenceType: n.intelligenceType || "external" }, z = g.filter((k) => {
    if (y !== "both" && k.intelligenceType !== y) return false;
    const V = { research_note: "Research Notes", market_activity: "Market Activity", media: "Media", social_media: "Social Media" };
    return !(!o.includes(V[k.source] || k.source) || c.length > 0 && !k.topics.some((S) => c.includes(S)));
  }), R = (k) => {
    p((V) => {
      const F = new Set(V);
      return F.has(k) ? F.delete(k) : F.add(k), F;
    });
  }, B = () => {
    m.size === z.length ? p(/* @__PURE__ */ new Set()) : p(new Set(z.map((k) => k.id)));
  }, J = () => {
    p(/* @__PURE__ */ new Set());
  }, X = Qp[n.direction].icon;
  return (<div className="min-h-screen bg-background">
<C_zn />
<div className="container mx-auto px-6 py-6">
<div className="flex justify-end gap-2 mb-6">
<Button variant="outline" size="sm" onClick={() => f(true)} className="gap-2">
<CompassIcon className="h-4 w-4" />
360° View
</Button>
<Link to="/gei/entities?type=market" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
<ArrowLeftIcon className="h-4 w-4" />
Back to Market Signals
</Link>
</div>
<div className="flex items-start justify-between mb-6">
<div className="flex items-start gap-4">
<div className="p-2 rounded-lg bg-primary/10">
<ChartLineIcon className="h-6 w-6 text-primary" />
</div>
<div>
<h1 className="text-2xl font-bold text-foreground mb-1">
{n.name}
</h1>
<p className="text-muted-foreground">
{"Signal detected: "}
{n.signalDate}
</p>
</div>
</div>
<div className="text-right">
<div className="flex items-center gap-2 justify-end mb-2">
<div className={cn("inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium", Qp[n.direction].color)}>
<X className="h-3 w-3" />
{Qp[n.direction].label}
</div>
<div className={cn("inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium", mj[n.magnitude].color)}>
<ActivityIcon className="h-3 w-3" />
{mj[n.magnitude].label}
</div>
</div>
<p className="text-sm text-muted-foreground">
{ac[n.signalType]}
</p>
</div>
</div>
<div className="flex flex-wrap items-center gap-6 pb-6 border-b border-border mb-6">
<div className="flex items-center gap-2">
<span className="text-xs text-muted-foreground uppercase tracking-wide">
Topics:
</span>
<div className="flex gap-1.5">
{n.topics.map((k) => (<Badge variant="outline" className="text-xs font-normal" key={k}>
{k}
</Badge>))}
</div>
</div>
<div className="flex items-center gap-2">
<span className="text-xs text-muted-foreground uppercase tracking-wide">
Linked Entities:
</span>
<div className="flex gap-1.5">
{n.linkedEntities.map((k) => (<Badge variant="outline" className="text-xs font-normal" key={k}>
{k}
</Badge>))}
</div>
</div>
</div>
<div className="space-y-4 mb-6">
<Un value={y} onChange={b} />
<div className="flex items-center gap-2">
<span className="text-xs text-muted-foreground uppercase tracking-wide min-w-[60px]">
Time:
</span>
<div className="flex gap-2">
{EV.map((k) => (<Button variant={s === k && !(r != null && r.from) ? "default" : "outline"} size="sm" className="text-xs h-7" onClick={() => w(k)} key={k}>
{k}
</Button>))}
<C_dn dateRange={r} onDateRangeChange={C} onClear={() => a("Last 30 days")} />
</div>
</div>
<div className="flex items-center gap-2">
<span className="text-xs text-muted-foreground uppercase tracking-wide min-w-[60px]">
Source:
</span>
<div className="flex gap-2 flex-wrap">
{uj.map((k) => (<Button variant={o.includes(k) ? "default" : "outline"} size="sm" className="text-xs h-7" onClick={() => P(k)} key={k}>
{k}
</Button>))}
</div>
</div>
<div className="flex items-start gap-2">
<span className="text-xs text-muted-foreground uppercase tracking-wide min-w-[60px] pt-1.5">
Topics:
</span>
<div className="flex gap-2 flex-wrap">
{MV.map((k) => (<Button variant={c.includes(k) ? "default" : "outline"} size="sm" className="text-xs h-7" onClick={() => I(k)} key={k}>
{k}
</Button>))}
</div>
</div>
</div>
<div className={cn("sticky top-16 z-10 -mx-6 px-6 py-3 bg-background/95 backdrop-blur border-b border-border transition-all", m.size > 0 ? "opacity-100" : "opacity-50")}>
<div className="flex items-center justify-between">
<div className="flex items-center gap-4">
<div className="flex items-center gap-2">
<Checkbox checked={z.length > 0 && m.size === z.length} onCheckedChange={B} disabled={z.length === 0} />
<span className="text-sm text-muted-foreground">
Select all (
{z.length}
{" items)"}
</span>
</div>
{m.size > 0 ? (<span className="text-sm font-medium">
{m.size}
{" item"}
{m.size !== 1 ? "s" : ""}
{" selected"}
</span>) : (<span className="text-sm text-muted-foreground">
Select intelligence items to promote
</span>)}
</div>
<div className="flex items-center gap-2">
{m.size > 0 && (<>
<Button variant="ghost" size="sm" className="text-xs gap-1.5" onClick={J}>
<XIcon className="h-3.5 w-3.5" />
Clear
</Button>
<Button size="sm" className="gap-1.5" onClick={() => x(true)}>
<DatabaseIcon className="h-3.5 w-3.5" />
Promote to Data Source
</Button>
</>)}
</div>
</div>
</div>
<div className="space-y-4 mt-6">
{z.length > 0 ? (<div className="space-y-4">
{z.map((k) => (<Fo item={k} isSelected={m.has(k.id)} onToggleSelect={R} key={k.id} />))}
</div>) : (<div className="text-center py-12 text-muted-foreground">
<ChartLineIcon className="h-12 w-12 mx-auto mb-4 opacity-50" />
<p>
No intelligence items match your filters
</p>
</div>)}
</div>
</div>
<X5 signal={h ? L : null} onClose={() => f(false)} />
<C_zo items={j} analystName={n.name} isOpen={v} onClose={() => x(false)} onSuccess={() => {
    x(false), p(/* @__PURE__ */ new Set());
  }} />
</div>);
}

export const pj = { evidence: { icon: CircleCheckBigIcon, color: "text-emerald-600", bgColor: "bg-emerald-500/10", label: "Evidence" }, partial: { icon: TriangleAlertIcon, color: "text-amber-600", bgColor: "bg-amber-500/10", label: "Partial" }, gap: { icon: CircleXIcon, color: "text-red-600", bgColor: "bg-red-500/10", label: "Gap" } };

export function IV(e) {
  const { currentScore: n, previousScore: s, trendLabel: a } = e.score;
  if (a) {
    const o = a.toLowerCase();
    return o.includes("improved") ? { status: "improved", label: a } : o.includes("declined") ? { status: "declined", label: a } : o.includes("stable") ? { status: "stable", label: a } : o.includes("not available") ? { status: "not_available", label: a } : { status: "stable", label: a };
  }
  if (!s) return { status: "not_available", label: "Not available" };
  if (e.score.status) return n === s ? { status: "stable", label: "Stable (Maintained Inclusion)" } : { status: "improved", label: "Improved" };
  const r = parseFloat(n), i = parseFloat(s);
  return !isNaN(r) && !isNaN(i) ? e.id === "sustainalytics" ? r < i ? { status: "improved", label: "Improved" } : r > i ? { status: "declined", label: "Declined" } : { status: "stable", label: "Stable" } : r > i ? { status: "improved", label: "Improved" } : r < i ? { status: "declined", label: "Declined" } : { status: "stable", label: "Stable" } : n === s ? { status: "stable", label: "Stable" } : { status: "not_available", label: "Not available" };
}

export function C_hj({ status: e, label: n }) {
  const s = { improved: { icon: TrendingUpIcon, color: "text-emerald-600", bg: "bg-emerald-500/10" }, declined: { icon: TrendingDownIcon, color: "text-red-600", bg: "bg-red-500/10" }, stable: { icon: MinusIcon, color: "text-muted-foreground", bg: "bg-muted" }, not_available: { icon: MinusIcon, color: "text-muted-foreground", bg: "bg-muted" } }, { icon: C_a, color: r, bg: i } = s[e];
  return (<div className="text-center">
<p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
Trend
</p>
<div className={cn("inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full", i)}>
<C_a className={cn("h-4 w-4", r)} />
<span className={cn("text-sm font-medium", r)}>
{n}
</span>
</div>
</div>);
}

export function GeiIndexDetail() {
  const { indexId: e } = useParams(), s = y$(e || "atmi") || Lc[0], [a, r] = React.useState(false), i = ic[s.category], o = IV(s), l = !!s.score.status, c = a ? s : null;
  return (<div className="min-h-screen bg-background">
<C_zn />
<div className="container mx-auto px-6 py-6">
<div className="flex justify-end mb-6">
<Link to="/gei/entities?type=indices" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
<ArrowLeftIcon className="h-4 w-4" />
Back to Indices
</Link>
</div>
<div className="flex items-start justify-between mb-6">
<div>
<div className="flex items-center gap-3 mb-1">
<ChartColumnIcon className="h-6 w-6 text-muted-foreground" />
<h1 className="text-2xl font-bold text-foreground">
{s.name}
</h1>
<span className="text-lg text-muted-foreground">
(
{s.owner}
)
</span>
</div>
<p className="text-muted-foreground">
{s.description}
</p>
</div>
<div className="flex items-center gap-4">
<Button variant="outline" size="sm" className="gap-1.5" onClick={() => r(true)}>
<CompassIcon className="h-4 w-4" />
360° View
</Button>
<div className="text-right">
<Badge className={cn("mb-2", i.className)}>
{i.label}
</Badge>
<p className="text-sm text-muted-foreground">
{s.lastUpdated}
</p>
</div>
</div>
</div>
<Card className="mb-6">
<CardHeader className="pb-3">
<CardTitle className="text-base flex items-center gap-2">
<ChartColumnIcon className="h-4 w-4" />
Index Score Snapshot
</CardTitle>
</CardHeader>
<CardContent>
{l ? (<>
<div className="grid grid-cols-5 gap-6 mb-4">
<div className="text-center">
<p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
Status
</p>
<span className="text-3xl font-bold text-foreground">
{s.score.status}
</span>
</div>
{s.score.indexName && (<div className="text-center">
<p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
Index
</p>
<span className="text-lg font-semibold text-foreground">
{s.score.indexName}
</span>
</div>)}
{s.score.performanceBand && (<div className="text-center">
<p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
Performance Band
</p>
<span className="text-lg font-semibold text-foreground">
{s.score.performanceBand}
</span>
</div>)}
<C_hj status={o.status} label={o.label} />
<div className="text-center">
<p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
Cycle
</p>
<span className="text-3xl font-bold text-foreground">
{s.score.reportingCycle}
</span>
</div>
</div>
</>) : (<>
<div className="grid grid-cols-4 gap-6 mb-4">
<div className="text-center">
<p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
Current Score
</p>
<div className="flex items-center justify-center gap-2">
<span className="text-3xl font-bold text-foreground">
{s.score.currentScore}
</span>
{s.score.riskCategory && (<Badge variant="outline" className="text-xs">
{s.score.riskCategory}
</Badge>)}
</div>
</div>
<div className="text-center">
<p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
Previous Score
</p>
<span className="text-3xl font-bold text-muted-foreground">
{s.score.previousScore || "\u2014"}
</span>
</div>
<C_hj status={o.status} label={o.label} />
<div className="text-center">
<p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
Cycle
</p>
<span className="text-3xl font-bold text-foreground">
{s.score.reportingCycle}
</span>
</div>
</div>
{s.score.trendNote && (<p className="text-sm text-muted-foreground text-center mb-4 italic">
(
{s.score.trendNote}
)
</p>)}
</>)}
{s.score.subScores && s.score.subScores.length > 0 && (<div className="pt-4 border-t border-border">
<p className="text-xs text-muted-foreground uppercase tracking-wide mb-3">
Sub-Scores
</p>
<div className="flex items-center gap-6">
{s.score.subScores.map((u) => (<div className="flex items-center gap-2" key={u.label}>
<span className="text-sm text-muted-foreground">
{u.label}
:
</span>
<span className="text-sm font-semibold">
{u.value}
</span>
</div>))}
</div>
</div>)}
<div className="mt-4 pt-4 border-t border-border space-y-2">
<div className="flex items-start gap-2 text-xs text-muted-foreground">
<InfoIcon className="h-4 w-4 shrink-0 mt-0.5" />
<p>
Scores are shown for contextual awareness only. GEI does not calculate, influence, or predict index ratings.
</p>
</div>
<div className="flex items-start gap-2 text-xs text-muted-foreground">
<InfoIcon className="h-4 w-4 shrink-0 mt-0.5" />
<p>
Trend indicators reflect publicly reported score changes only and do not imply causality or forecast future outcomes.
</p>
</div>
</div>
</CardContent>
</Card>
<Card className="mb-6">
<CardHeader className="pb-3">
<CardTitle className="text-base">
Index Overview
</CardTitle>
</CardHeader>
<CardContent>
<div className="grid grid-cols-3 gap-6">
<div className="flex items-center gap-3">
<Building2Icon className="h-4 w-4 text-muted-foreground" />
<div>
<p className="text-xs text-muted-foreground uppercase tracking-wide">
Owner
</p>
<p className="text-sm font-medium">
{s.owner}
</p>
</div>
</div>
<div className="flex items-center gap-3">
<CalendarIcon className="h-4 w-4 text-muted-foreground" />
<div>
<p className="text-xs text-muted-foreground uppercase tracking-wide">
Update Cadence
</p>
<p className="text-sm font-medium capitalize">
{s.updateCadence}
</p>
</div>
</div>
<div className="flex items-center gap-3">
<FileTextIcon className="h-4 w-4 text-muted-foreground" />
<div>
<p className="text-xs text-muted-foreground uppercase tracking-wide">
Submission Model
</p>
<p className="text-sm font-medium capitalize">
{s.submissionModel.replace(/_/g, " ")}
</p>
</div>
</div>
</div>
<div className="mt-4 pt-4 border-t border-border">
<p className="text-xs text-muted-foreground uppercase tracking-wide mb-2">
Focus Areas
</p>
<div className="flex flex-wrap gap-2">
{s.focusAreas.map((u) => (<Badge variant="secondary" className="text-xs" key={u}>
{u}
</Badge>))}
</div>
</div>
</CardContent>
</Card>
<Card className="mb-6">
<CardHeader className="pb-3">
<CardTitle className="text-base">
Intelligence by Pillar
</CardTitle>
</CardHeader>
<CardContent className="space-y-8">
{s.pillars.map((u) => (<div key={u.id}>
<h3 className="text-base font-semibold border-l-4 border-primary pl-4 mb-6">
{u.name}
</h3>
<div className="space-y-6 ml-4">
{u.criteria.map((m) => {
    var x;
    const p = s.intelligenceByCriterion[m.id], h = ((x = s.readinessIndicators) == null ? void 0 : x[m.id]) || "gap", f = pj[h], C_v = f.icon;
    return (<div className="pb-6 border-b border-border last:border-b-0" key={m.id}>
<div className="flex items-center justify-between mb-4">
<h4 className="text-sm font-medium text-foreground">
{m.name}
</h4>
<div className={cn("inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-xs", f.bgColor)}>
<C_v className={cn("h-3 w-3", f.color)} />
<span className={f.color}>
{f.label}
</span>
</div>
</div>
{p ? (<div className="grid grid-cols-2 gap-6">
<div>
<h5 className="text-sm font-semibold mb-4 flex items-center gap-2">
<div className="h-2 w-2 rounded-full bg-blue-500" />
{"Internal Evidence & Approved Disclosures"}
</h5>
<div className="space-y-4">
{p.internal.length > 0 ? p.internal.map((y) => (<div className="p-4 border border-border rounded-lg bg-card" key={y.id}>
<div className="flex items-start justify-between mb-2">
<Badge variant="outline" className={cn("text-xs", y.type === "leadership_claim" && "border-purple-500/30 text-purple-600 bg-purple-500/10", y.type === "approved_disclosure" && "border-blue-500/30 text-blue-600 bg-blue-500/10", y.type === "internal_context" && "border-amber-500/30 text-amber-600 bg-amber-500/10")}>
{y.classification}
</Badge>
{y.governanceStatus && (<Badge variant="secondary" className="text-xs">
{y.governanceStatus}
</Badge>)}
</div>
<p className="text-xs text-muted-foreground mb-2">
{"Source: "}
{y.source}
{y.speaker && ` \u2022 ${y.speaker}`}
{y.date && ` \u2022 ${y.date}`}
</p>
<p className="text-sm text-foreground leading-relaxed">
"
{y.content}
"
</p>
{y.claimStrength && (<p className="text-xs text-muted-foreground mt-2">
{"Claim Strength: "}
{y.claimStrength}
</p>)}
</div>)) : (<p className="text-sm text-muted-foreground italic">
No internal evidence available
</p>)}
</div>
</div>
<div>
<h5 className="text-sm font-semibold mb-4 flex items-center gap-2">
<div className="h-2 w-2 rounded-full bg-emerald-500" />
External Signals
</h5>
<div className="space-y-4">
{p.external.length > 0 ? p.external.map((y) => (<div className="p-4 border border-border rounded-lg bg-card" key={y.id}>
<div className="flex items-start justify-between mb-2">
<Badge variant="outline" className="text-xs border-emerald-500/30 text-emerald-600 bg-emerald-500/10">
{y.classification}
</Badge>
{y.tone && (<Badge variant="secondary" className={cn("text-xs", y.tone.toLowerCase().includes("positive") && "bg-emerald-500/10 text-emerald-600", y.tone.toLowerCase().includes("neutral") && "bg-muted text-muted-foreground", y.tone.toLowerCase().includes("constructive") && "bg-blue-500/10 text-blue-600")}>
{y.tone}
</Badge>)}
</div>
<p className="text-xs text-muted-foreground mb-2">
{"Source: "}
{y.source}
{y.date && ` \u2022 ${y.date}`}
</p>
<p className="text-sm text-foreground leading-relaxed">
"
{y.content}
"
</p>
</div>)) : (<p className="text-sm text-muted-foreground italic">
No external signals available
</p>)}
</div>
</div>
</div>) : (<p className="text-sm text-muted-foreground italic py-4">
No intelligence available for this criterion
</p>)}
</div>);
  })}
</div>
</div>))}
</CardContent>
</Card>
<Card>
<CardHeader className="pb-3">
<CardTitle className="text-base">
Evidence Readiness
</CardTitle>
</CardHeader>
<CardContent>
<div className="space-y-4">
{s.pillars.map((u) => (<div key={u.id}>
<h4 className="text-sm font-semibold mb-2">
{u.name}
</h4>
<div className="space-y-2">
{u.criteria.map((m) => {
    var v;
    const p = ((v = s.readinessIndicators) == null ? void 0 : v[m.id]) || "gap", h = pj[p], C_f = h.icon;
    return (<div className={cn("flex items-center gap-3 p-2 rounded-md", h.bgColor)} key={m.id}>
<C_f className={cn("h-4 w-4 shrink-0", h.color)} />
<span className="text-sm text-foreground flex-1">
{m.name}
</span>
<span className={cn("text-xs", h.color)}>
{h.label}
</span>
</div>);
  })}
</div>
</div>))}
</div>
<div className="mt-4 pt-4 border-t border-border flex items-start gap-2 text-xs text-muted-foreground">
<InfoIcon className="h-4 w-4 shrink-0 mt-0.5" />
<p>
This reflects evidence availability and external perception only. It does not represent compliance status or index scoring predictions.
</p>
</div>
</CardContent>
</Card>
</div>
<Z5 index={c} onClose={() => r(false)} />
</div>);
}
