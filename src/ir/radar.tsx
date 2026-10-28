// @ts-nocheck
/* eslint-disable */
// Generated port of the IR Co-Pilot demo (Radar / Canvas / GEI).
import * as React from "react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { Label } from "@/components/ui/label";
import { PopoverContent } from "@/components/ui/popover";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { SelectContent, SelectItem, SelectTrigger } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { toast, useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { ActivityIcon, ArchiveIcon, ArrowLeftIcon, BellIcon, BookmarkIcon, BrainIcon, Building2Icon, CalendarIcon, CheckIcon, ChevronDownIcon, ChevronRightIcon, CircleAlertIcon, CircleCheckBigIcon, ClockIcon, DatabaseIcon, ExternalLinkIcon, EyeIcon, FilePenIcon, FileTextIcon, FlaskConicalIcon, Grid3x3Icon, InfoIcon, LightbulbIcon, MessageSquareIcon, MicIcon, MinusIcon, NewspaperIcon, PillIcon, PlusIcon, PowerIcon, RadioIcon, SaveIcon, SettingsIcon, SquarePenIcon, SwordsIcon, TargetIcon, Trash2Icon, TrendingDownIcon, TrendingUpIcon, UsersIcon, XIcon } from "lucide-react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { C_ce, C_ei, C_le, C_ot, C_ql, C_ti, Ql, Vn, ga, ts } from "./shared";

export let iI = Tooltip;

export let oI = TooltipTrigger;

export const C_j1 = iI;

export const C_b1 = oI;

export const qA = [{ path: "/radar", label: "Overview", icon: RadioIcon }, { path: "/radar/heatmap", label: "Heat Map", icon: Grid3x3Icon }, { path: "/radar/setup", label: "Signal Setup", icon: DatabaseIcon }, { path: "/radar/history", label: "History", icon: ArchiveIcon }, { path: "/radar/settings", label: "Settings", icon: SettingsIcon }];

export function Ao() {
  const e = useLocation(), n = (s) => s === "/radar" ? e.pathname === "/radar" || e.pathname.startsWith("/radar/signal/") : e.pathname === s;
  return (<nav className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
<div className="container mx-auto px-6">
<div className="flex items-center justify-between gap-6 h-14">
<div className="flex flex-1 items-center gap-6">
<Link to="/radar" className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
R
</div>
<span className="font-bold text-lg text-foreground">
Radar
</span>
</Link>
<div className="flex flex-1 items-center justify-evenly">
{qA.map((s) => {
    const C_a = s.icon, r = n(s.path);
    return (<Link to={s.path} key={s.path}>
<Button variant="ghost" size="sm" className={cn("gap-2 transition-colors duration-200 relative", r && "text-primary font-medium")}>
<C_a className="h-4 w-4" />
{s.label}
{r && (<span className="absolute bottom-0 left-2 right-2 h-0.5 bg-primary rounded-full" />)}
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

export const Gy = { product: { label: "Product", icon: PillIcon }, sentiment: { label: "Sentiment", icon: BrainIcon }, competitive: { label: "Competitive", icon: SwordsIcon }, market: { label: "Market", icon: TrendingDownIcon }, regulatory: { label: "Regulatory", icon: FlaskConicalIcon }, media: { label: "Media", icon: NewspaperIcon } };

export const YA = { attention: { label: "Attention Required", className: "bg-destructive/10 text-destructive border-destructive/20" }, monitor: { label: "Monitor Closely", className: "bg-warning/10 text-warning border-warning/20" }, none: { label: "No Action Needed", className: "bg-muted text-muted-foreground border-border" } };

export const KA = (e) => e >= 80 ? "text-destructive" : e >= 50 ? "text-warning" : "text-emerald-600";

export const XA = ({ category: e, priority: n, priorityScore: s, headline: a, recency: r, onClick: i }) => {
  const C_o = Gy[e].icon, l = YA[n];
  return (<Card className="glass-card card-hover cursor-pointer group" onClick={i}>
<CardContent className="p-5">
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-2">
<C_o className="h-4 w-4 text-muted-foreground" />
<span className="text-sm font-medium text-muted-foreground">
{Gy[e].label}
</span>
</div>
<div className="flex items-center gap-3">
{s !== void 0 && (<div className="flex flex-col items-center">
<span className={cn("text-lg font-bold", KA(s))}>
{s}
</span>
<span className="text-[10px] text-muted-foreground uppercase tracking-wide">
Score
</span>
</div>)}
<span className={cn("text-xs font-medium px-2.5 py-1 rounded-full border", l.className)}>
{l.label}
</span>
</div>
</div>
<p className="text-foreground font-semibold leading-snug mb-4">
{a}
</p>
<div className="flex items-center justify-between">
<div className="flex items-center gap-1.5 text-muted-foreground">
<ClockIcon className="h-3.5 w-3.5" />
<span className="text-xs">
{r}
</span>
</div>
<div className="flex items-center gap-1 text-muted-foreground group-hover:text-primary transition-colors">
<span className="text-xs font-medium">
View details
</span>
<ChevronRightIcon className="h-4 w-4" />
</div>
</div>
</CardContent>
</Card>);
};

export const ZA = () => (<Card className="glass-card sticky top-6">
<CardHeader className="pb-4">
<div className="flex items-center gap-2">
<InfoIcon className="h-4 w-4 text-primary" />
<CardTitle className="text-base font-semibold">
Signal Guide
</CardTitle>
</div>
</CardHeader>
<CardContent className="space-y-6">
<div>
<h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3">
Categories
</h4>
<div className="space-y-2.5">
<div className="flex items-start gap-2.5">
<PillIcon className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
<p className="text-sm text-muted-foreground">
<span className="font-medium text-foreground">
Product
</span>
{" — Signals tied to Novartis assets and performance"}
</p>
</div>
<div className="flex items-start gap-2.5">
<SwordsIcon className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
<p className="text-sm text-muted-foreground">
<span className="font-medium text-foreground">
Competitive
</span>
{" — Key competitor moves or positioning shifts"}
</p>
</div>
<div className="flex items-start gap-2.5">
<BrainIcon className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
<p className="text-sm text-muted-foreground">
<span className="font-medium text-foreground">
Sentiment
</span>
{" — Reputation and perception signals"}
</p>
</div>
<div className="flex items-start gap-2.5">
<TrendingDownIcon className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
<p className="text-sm text-muted-foreground">
<span className="font-medium text-foreground">
Market
</span>
{" — Stock and trading-related signals"}
</p>
</div>
<div className="flex items-start gap-2.5">
<NewspaperIcon className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
<p className="text-sm text-muted-foreground">
<span className="font-medium text-foreground">
Media
</span>
{" — Narrative and coverage themes"}
</p>
</div>
<div className="flex items-start gap-2.5">
<FlaskConicalIcon className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
<p className="text-sm text-muted-foreground">
<span className="font-medium text-foreground">
Regulatory
</span>
{" — Clinical or regulatory developments"}
</p>
</div>
</div>
</div>
<div>
<h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3">
Indicators
</h4>
<div className="space-y-2">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-destructive flex-shrink-0" />
<p className="text-sm text-muted-foreground">
<span className="font-medium text-foreground">
Attention Required
</span>
{" — Immediate review or preparation"}
</p>
</div>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-warning flex-shrink-0" />
<p className="text-sm text-muted-foreground">
<span className="font-medium text-foreground">
Monitor Closely
</span>
{" — Track developments"}
</p>
</div>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-muted-foreground flex-shrink-0" />
<p className="text-sm text-muted-foreground">
<span className="font-medium text-foreground">
No Action Needed
</span>
{" — Informational"}
</p>
</div>
</div>
</div>
<div className="pt-2 border-t border-border space-y-2">
<p className="text-xs text-muted-foreground italic">
Signals indicate relevance, not approved messaging.
</p>
<p className="text-xs text-muted-foreground italic">
Priority scores indicate relative relevance based on signal context, timing, and source activity.
</p>
</div>
</CardContent>
</Card>);

export const C_eD = () => (<div className="mb-8">
<div className="flex items-start justify-between">
<div>
<h1 className="text-2xl font-bold text-foreground mb-1">
Welcome back!
</h1>
<p className="text-muted-foreground">
Here's what needs your attention today
</p>
</div>
<div className="flex items-center gap-3">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
<RadioIcon className="h-3.5 w-3.5 text-primary" />
<span className="text-sm font-medium text-primary">
Radar: On
</span>
</div>
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted border border-border">
<ClockIcon className="h-3.5 w-3.5 text-primary" />
<span className="text-sm text-muted-foreground">
Updated 2 hours ago
</span>
</div>
</div>
</div>
</div>);

export const G6 = [{ id: 1, category: "sentiment", priority: "attention", priorityScore: 88, headline: "US drug pricing narrative resurfacing in financial media coverage", recency: "4h ago", timestamp: new Date(Date.now() - 4 * 60 * 60 * 1e3) }, { id: 2, category: "product", priority: "attention", priorityScore: 92, headline: "Cosentyx Phase 3 data shows PASI90 at 74%; sell-side review expected", recency: "6h ago", timestamp: new Date(Date.now() - 6 * 60 * 60 * 1e3) }, { id: 3, category: "competitive", priority: "monitor", priorityScore: 74, headline: "AbbVie Immunology pipeline framing shifting analyst expectations", recency: "8h ago", timestamp: new Date(Date.now() - 8 * 60 * 60 * 1e3) }, { id: 4, category: "market", priority: "monitor", priorityScore: 66, headline: "Novartis stock move aligned with sector rotation, not company-specific", recency: "2h ago", timestamp: new Date(Date.now() - 2 * 60 * 60 * 1e3) }, { id: 5, category: "regulatory", priority: "monitor", priorityScore: 71, headline: "FDA review timeline signals potential acceleration for key submissions", recency: "12h ago", timestamp: new Date(Date.now() - 12 * 60 * 60 * 1e3) }, { id: 6, category: "media", priority: "none", priorityScore: 52, headline: "Large-cap pharma defensive narrative gaining traction in market commentary", recency: "1d ago", timestamp: new Date(Date.now() - 24 * 60 * 60 * 1e3) }];

export const q6 = [{ value: "all", label: "All Categories" }, { value: "product", label: "Product" }, { value: "competitive", label: "Competitive" }, { value: "sentiment", label: "Sentiment" }, { value: "market", label: "Market" }, { value: "regulatory", label: "Regulatory" }, { value: "media", label: "Media" }];

export const Q6 = [{ value: "all", label: "All Scores" }, { value: "80-100", label: "80-100 (High)" }, { value: "50-79", label: "50-79 (Medium)" }, { value: "0-49", label: "0-49 (Low)" }];

export const Y6 = [{ value: "attention", label: "Attention Required" }, { value: "monitor", label: "Monitor Closely" }, { value: "none", label: "No Action Needed" }];

export const RadarOverview = () => {
  const e = useNavigate(), [n, s] = React.useState("all"), [a, r] = React.useState("all"), [i, o] = React.useState(["attention", "monitor", "none"]), l = (p) => {
    e(`/radar/signal/${p}`);
  }, c = (p) => {
    o((h) => h.includes(p) ? h.filter((f) => f !== p) : [...h, p]);
  }, u = React.useMemo(() => {
    let p = [...G6];
    if (n !== "all" && (p = p.filter((h) => h.category === n)), a !== "all") {
      const [h, f] = a.split("-").map(Number);
      p = p.filter((v) => v.priorityScore >= h && v.priorityScore <= f);
    }
    return p = p.filter((h) => i.includes(h.priority)), p.sort((h, f) => f.priorityScore !== h.priorityScore ? f.priorityScore - h.priorityScore : f.timestamp.getTime() - h.timestamp.getTime()), p;
  }, [n, a, i]), m = n !== "all" || a !== "all" || i.length < 3;
  return (<div className="min-h-screen bg-background flex flex-col">
<Ao />
<div className="container mx-auto px-6 py-8 flex-1">
<C_eD />
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-2">
<RadioIcon className="h-5 w-5 text-primary" />
<h2 className="text-lg font-semibold text-foreground">
Top Signals
</h2>
<span className="text-sm text-muted-foreground ml-2">
Sorted by priority score and recency
</span>
</div>
<Link to="/radar/heatmap">
<Button variant="outline" size="sm" className="gap-2">
<Grid3x3Icon className="h-4 w-4" />
Heat Map View
</Button>
</Link>
</div>
<div className="flex flex-wrap items-center gap-3 mb-6">
<C_le value={n} onValueChange={s}>
<SelectTrigger className="w-[160px]">
<C_ce placeholder="All Categories" />
</SelectTrigger>
<SelectContent>
{q6.map((p) => (<SelectItem value={p.value} key={p.value}>
{p.label}
</SelectItem>))}
</SelectContent>
</C_le>
<C_le value={a} onValueChange={r}>
<SelectTrigger className="w-[160px]">
<C_ce placeholder="All Scores" />
</SelectTrigger>
<SelectContent>
{Q6.map((p) => (<SelectItem value={p.value} key={p.value}>
{p.label}
</SelectItem>))}
</SelectContent>
</C_le>
<C_ei>
<C_ti asChild>
<Button variant="outline" className="gap-2">
Indicators
{i.length < 3 && (<Badge variant="secondary" className="ml-1 text-xs px-1.5">
{i.length}
</Badge>)}
<ChevronDownIcon className="h-4 w-4" />
</Button>
</C_ti>
<DropdownMenuContent align="start" className="w-48">
{Y6.map((p) => (<DropdownMenuCheckboxItem checked={i.includes(p.value)} onCheckedChange={() => c(p.value)} key={p.value}>
{p.label}
</DropdownMenuCheckboxItem>))}
<DropdownMenuSeparator />
<DropdownMenuCheckboxItem checked={i.length === 3} onCheckedChange={() => o(i.length === 3 ? [] : ["attention", "monitor", "none"])}>
Select All
</DropdownMenuCheckboxItem>
</DropdownMenuContent>
</C_ei>
{m && (<Button variant="ghost" size="sm" onClick={() => {
    s("all"), r("all"), o(["attention", "monitor", "none"]);
  }} className="text-muted-foreground">
Clear filters
</Button>)}
</div>
<div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8">
<div className="space-y-4">
{u.length === 0 ? (<div className="text-center py-12 text-muted-foreground">
No signals found for the selected category
</div>) : u.map((p, h) => (<div className="animate-fade-in-up" style={{ animationDelay: `${h * 60}ms` }} key={p.id}>
<XA category={p.category} priority={p.priority} priorityScore={p.priorityScore} headline={p.headline} recency={p.recency} onClick={() => l(p.id)} />
</div>))}
</div>
<div className="hidden lg:block">
<ZA />
</div>
</div>
</div>
<Vn />
</div>);
};

export const ea = ["product", "competitive", "sentiment", "market", "media", "regulatory"];

export const Ld = ["current", "recent", "emerging"];

export const Ra = ["attention", "monitor", "none"];

export const wu = { product: "Product", competitive: "Competitive", sentiment: "Sentiment", market: "Market", media: "Media", regulatory: "Regulatory" };

export const Nu = { current: { label: "Current", sublabel: "Now" }, recent: { label: "Recent", sublabel: "1-3 days" }, emerging: { label: "Emerging", sublabel: "4-7 days" } };

export const RC = [{ id: 101, category: "product", priority: "attention", priorityScore: 92, headline: "Cosentyx Phase 3 data shows PASI90 at 74%; sell-side review expected", timeWindow: "current", recency: "6h ago" }, { id: 102, category: "product", priority: "attention", priorityScore: 85, headline: "Sell-side expectation shift on Immunology portfolio performance", timeWindow: "current", recency: "8h ago" }, { id: 103, category: "product", priority: "monitor", priorityScore: 68, headline: "Pipeline readout timeline questions emerging from investor calls", timeWindow: "current", recency: "12h ago" }, { id: 104, category: "product", priority: "monitor", priorityScore: 72, headline: "Analyst note highlights Entresto generic timeline concerns", timeWindow: "recent", recency: "2d ago" }, { id: 105, category: "product", priority: "none", priorityScore: 55, headline: "Key brand performance tracking ahead of guidance", timeWindow: "recent", recency: "3d ago" }, { id: 106, category: "product", priority: "none", priorityScore: 48, headline: "Early-stage oncology pipeline garnering specialist attention", timeWindow: "emerging", recency: "5d ago" }, { id: 201, category: "competitive", priority: "monitor", priorityScore: 74, headline: "AbbVie Immunology pipeline framing shifting analyst expectations", timeWindow: "current", recency: "8h ago" }, { id: 202, category: "competitive", priority: "monitor", priorityScore: 65, headline: "Merck pricing strategy drawing comparative commentary", timeWindow: "current", recency: "10h ago" }, { id: 203, category: "competitive", priority: "none", priorityScore: 52, headline: "Peer company M&A activity generating sector discussion", timeWindow: "recent", recency: "2d ago" }, { id: 204, category: "competitive", priority: "monitor", priorityScore: 70, headline: "Competitor analyst day messaging creating narrative comparison", timeWindow: "emerging", recency: "5d ago" }, { id: 205, category: "competitive", priority: "none", priorityScore: 58, headline: "Industry consolidation themes gaining traction in coverage", timeWindow: "emerging", recency: "6d ago" }, { id: 301, category: "sentiment", priority: "attention", priorityScore: 88, headline: "US drug pricing narrative resurfacing in financial media coverage", timeWindow: "current", recency: "4h ago" }, { id: 302, category: "sentiment", priority: "monitor", priorityScore: 78, headline: "Social media amplification of ESG-related concerns detected", timeWindow: "current", recency: "6h ago" }, { id: 303, category: "sentiment", priority: "none", priorityScore: 55, headline: "Retail investor sentiment trending neutral on forums", timeWindow: "recent", recency: "2d ago" }, { id: 304, category: "sentiment", priority: "none", priorityScore: 45, headline: "Long-term institutional holder commentary remains constructive", timeWindow: "emerging", recency: "5d ago" }, { id: 401, category: "market", priority: "monitor", priorityScore: 66, headline: "Novartis stock move aligned with sector rotation, not company-specific", timeWindow: "current", recency: "2h ago" }, { id: 402, category: "market", priority: "none", priorityScore: 50, headline: "Healthcare sector ETF flows showing defensive positioning", timeWindow: "recent", recency: "3d ago" }, { id: 501, category: "media", priority: "none", priorityScore: 52, headline: "Trade publication coverage of manufacturing expansion", timeWindow: "current", recency: "1d ago" }, { id: 502, category: "media", priority: "none", priorityScore: 48, headline: "Large-cap pharma defensive narrative gaining traction in commentary", timeWindow: "emerging", recency: "6d ago" }, { id: 601, category: "regulatory", priority: "monitor", priorityScore: 71, headline: "FDA review timeline signals potential acceleration for key submissions", timeWindow: "current", recency: "12h ago" }, { id: 602, category: "regulatory", priority: "monitor", priorityScore: 65, headline: "EU regulatory pathway clarification expected in coming weeks", timeWindow: "current", recency: "18h ago" }, { id: 603, category: "regulatory", priority: "none", priorityScore: 55, headline: "Industry-wide pricing legislation developments being monitored", timeWindow: "recent", recency: "2d ago" }];

export function X6(e, n, s = RC) {
  return s.filter((a) => a.category === e && a.timeWindow === n);
}

export function Z6(e, n, s) {
  const a = X6(e, n, s), r = a.length, i = r > 0 ? a.reduce((u, m) => u + m.priorityScore, 0) / r : 0, o = r > 0 ? Math.max(...a.map((u) => u.priorityScore)) : 0, l = { attention: a.filter((u) => u.priority === "attention").length, monitor: a.filter((u) => u.priority === "monitor").length, none: a.filter((u) => u.priority === "none").length };
  let c = "stable";
  return l.attention > 0 ? c = "up" : l.monitor > l.none ? c = "stable" : r > 0 && l.none > l.monitor && (c = "down"), { category: e, timeWindow: n, signals: a, signalCount: r, avgScore: i, highestScore: o, indicatorBreakdown: l, trend: c };
}

export function eO(e, n, s = false) {
  return n === 0 ? "empty" : e >= 80 || n >= 3 ? "high" : e >= 50 || n >= 2 ? "moderate" : "low";
}

export const tO = { high: "bg-red-500/70 text-red-900 border-red-600/30 hover:bg-red-500/80", moderate: "bg-amber-400/50 text-amber-900 border-amber-500/30 hover:bg-amber-400/60", low: "bg-yellow-200/40 text-yellow-800 border-yellow-300/30 hover:bg-yellow-200/50", empty: "bg-muted/10 text-muted-foreground border-border hover:bg-muted/20" };

export function C_nO({ category: e, timeWindow: n, signals: s, isNormalized: a }) {
  const r = useNavigate(), i = Z6(e, n, s), o = eO(i.avgScore, i.signalCount, a), l = () => {
    r(`/radar?category=${e}&timeWindow=${n}`);
  }, C_c = i.trend === "up" ? TrendingUpIcon : i.trend === "down" ? TrendingDownIcon : MinusIcon;
  return (<C_j1>
<C_b1 asChild>
<button onClick={l} className={cn("relative w-full h-20 rounded-lg border transition-all duration-200", "flex items-center justify-center cursor-pointer", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", tO[o])} aria-label={`${wu[e]} ${Nu[n].label}: ${i.signalCount} signals`}>
<span className="text-2xl font-bold">
{i.signalCount}
</span>
{i.signalCount > 0 && (<C_c className="absolute top-2 right-2 h-4 w-4 opacity-60" />)}
</button>
</C_b1>
<TooltipContent side="top" className="max-w-xs">
<div className="space-y-2">
<p className="font-semibold">
{wu[e]}
{" × "}
{Nu[n].label}
</p>
{i.signalCount > 0 ? (<>
<p className="text-sm">
{i.signalCount}
{" signal"}
{i.signalCount !== 1 ? "s" : ""}
</p>
<p className="text-sm text-muted-foreground">
{"Highest score: "}
{i.highestScore}
</p>
<div className="text-xs text-muted-foreground space-y-0.5">
{i.indicatorBreakdown.attention > 0 && (<p>
{i.indicatorBreakdown.attention}
{" Attention Required"}
</p>)}
{i.indicatorBreakdown.monitor > 0 && (<p>
{i.indicatorBreakdown.monitor}
{" Monitor Closely"}
</p>)}
{i.indicatorBreakdown.none > 0 && (<p>
{i.indicatorBreakdown.none}
{" No Action Needed"}
</p>)}
</div>
<p className="text-xs text-primary">
Click for details →
</p>
</>) : (<p className="text-sm text-muted-foreground">
No signals in this cell
</p>)}
</div>
</TooltipContent>
</C_j1>);
}

export function C_sO({ signals: e, selectedCategories: n, selectedTimeWindows: s, isNormalized: a }) {
  const r = ea.filter((o) => n.includes(o)), i = Ld.filter((o) => s.includes(o));
  return (<div className="space-y-4">
<div className="overflow-x-auto">
<table className="w-full border-collapse">
<thead>
<tr>
<th className="text-left p-3 w-32 text-sm font-medium text-muted-foreground">
Signal Category
</th>
{i.map((o) => (<th className="p-3 text-center min-w-[120px]" key={o}>
<div className="text-sm font-semibold text-foreground">
{Nu[o].label}
</div>
<div className="text-xs text-muted-foreground">
{Nu[o].sublabel}
</div>
</th>))}
</tr>
</thead>
<tbody>
{r.map((o) => (<tr className="border-t border-border" key={o}>
<td className="p-3 text-sm font-medium text-foreground">
{wu[o]}
</td>
{i.map((l) => (<td className="p-2" key={`${o}-${l}`}>
<C_nO category={o} timeWindow={l} signals={e} isNormalized={a} />
</td>))}
</tr>))}
</tbody>
</table>
</div>
<p className="text-xs text-muted-foreground italic px-3">
Heat map signals indicate relevance and momentum based on external activity and context. They do not represent approved messaging, disclosure guidance, or company position.
</p>
</div>);
}

export function C_oO() {
  return (<Card className="sticky top-20">
<CardHeader className="pb-3">
<CardTitle className="text-base font-semibold flex items-center gap-2">
<InfoIcon className="h-4 w-4 text-muted-foreground" />
Heat Map Guide
</CardTitle>
</CardHeader>
<CardContent className="space-y-6">
<div className="space-y-3">
<h4 className="text-sm font-medium text-foreground">
Heat Intensity
</h4>
<div className="space-y-2">
<div className="flex items-center gap-3">
<div className="w-4 h-4 rounded-full bg-red-500/70" />
<div className="text-sm">
<span className="font-medium">
High concentration
</span>
<span className="text-muted-foreground">
{" — Immediate attention"}
</span>
</div>
</div>
<div className="flex items-center gap-3">
<div className="w-4 h-4 rounded-full bg-amber-400/60" />
<div className="text-sm">
<span className="font-medium">
Moderate concentration
</span>
<span className="text-muted-foreground">
{" — Monitor closely"}
</span>
</div>
</div>
<div className="flex items-center gap-3">
<div className="w-4 h-4 rounded-full bg-yellow-200/50" />
<div className="text-sm">
<span className="font-medium">
Low concentration
</span>
<span className="text-muted-foreground">
{" — Informational"}
</span>
</div>
</div>
</div>
</div>
<Separator />
<div className="space-y-3">
<h4 className="text-sm font-medium text-foreground">
Indicator Legend
</h4>
<div className="space-y-2 text-sm">
<div>
<span className="font-medium text-red-600">
Attention Required
</span>
<p className="text-muted-foreground text-xs">
Immediate review or preparation
</p>
</div>
<div>
<span className="font-medium text-amber-600">
Monitor Closely
</span>
<p className="text-muted-foreground text-xs">
Track developments
</p>
</div>
<div>
<span className="font-medium text-muted-foreground">
No Action Needed
</span>
<p className="text-muted-foreground text-xs">
Contextual awareness
</p>
</div>
</div>
</div>
<Separator />
<div className="space-y-3">
<h4 className="text-sm font-medium text-foreground">
Trend Indicators
</h4>
<div className="space-y-2">
<div className="flex items-center gap-3 text-sm">
<TrendingUpIcon className="h-4 w-4 text-red-500" />
<span>
Increasing / Escalating
</span>
</div>
<div className="flex items-center gap-3 text-sm">
<TrendingDownIcon className="h-4 w-4 text-green-500" />
<span>
Decreasing / De-escalating
</span>
</div>
<div className="flex items-center gap-3 text-sm">
<MinusIcon className="h-4 w-4 text-muted-foreground" />
<span>
Stable
</span>
</div>
</div>
</div>
<Separator />
<p className="text-xs text-muted-foreground italic leading-relaxed">
Trend indicators reflect changes in signal concentration and priority over the selected time window. They are derived from publicly reported activity and context.
</p>
</CardContent>
</Card>);
}

export const wO = { attention: "Attention Required", monitor: "Monitor Closely", none: "No Action Needed" };

export const RadarHeatMap = () => {
  const [e, n] = React.useState([...ea]), [s, a] = React.useState([...Ld]), [r, i] = React.useState([...Ra]), [o, l] = React.useState(false), c = React.useMemo(() => RC.filter((v) => r.includes(v.priority)), [r]), u = (v) => {
    n((x) => x.includes(v) ? x.filter((y) => y !== v) : [...x, v]);
  }, m = (v) => {
    i((x) => x.includes(v) ? x.filter((y) => y !== v) : [...x, v]);
  }, p = (v) => {
    a(v);
  }, h = e.length < ea.length || s.length < Ld.length || r.length < Ra.length, f = () => {
    n([...ea]), a([...Ld]), i([...Ra]);
  };
  return (<div className="min-h-screen bg-background flex flex-col">
<Ao />
<div className="container mx-auto px-6 py-8 flex-1">
<div className="mb-6">
<div className="flex items-center justify-between mb-2">
<h1 className="text-2xl font-bold text-foreground">
Radar Heat Map
</h1>
<div className="flex items-center gap-2 text-sm text-muted-foreground">
<RadioIcon className="h-4 w-4" />
<span>
Heat Map Updated 2 hours ago
</span>
</div>
</div>
<p className="text-muted-foreground max-w-3xl">
Sense market, competitive, regulatory, and sentiment signals via heat map scanning and translate signal concentration into clear implications
</p>
</div>
<Alert className="mb-6 bg-muted/50 border-muted">
<InfoIcon className="h-4 w-4" />
<AlertDescription className="text-sm text-muted-foreground">
The heat map provides a consolidated view of where external signals are clustering. It indicates relative relevance and momentum — not approved disclosure or messaging.
</AlertDescription>
</Alert>
<div className="flex flex-wrap items-center gap-3 mb-6">
<C_ei>
<C_ti asChild>
<Button variant="outline" className="gap-2">
Categories
{e.length < ea.length && (<Badge variant="secondary" className="ml-1 text-xs px-1.5">
{e.length}
</Badge>)}
<ChevronDownIcon className="h-4 w-4" />
</Button>
</C_ti>
<DropdownMenuContent align="start" className="w-48">
{ea.map((v) => (<DropdownMenuCheckboxItem checked={e.includes(v)} onCheckedChange={() => u(v)} key={v}>
{wu[v]}
</DropdownMenuCheckboxItem>))}
<DropdownMenuSeparator />
<DropdownMenuCheckboxItem checked={e.length === ea.length} onCheckedChange={() => n(e.length === ea.length ? [] : [...ea])}>
Select All
</DropdownMenuCheckboxItem>
</DropdownMenuContent>
</C_ei>
<ToggleGroup type="multiple" value={s} onValueChange={p} className="border rounded-lg">
<ToggleGroupItem value="current" aria-label="Current" className="px-4">
Current
</ToggleGroupItem>
<ToggleGroupItem value="recent" aria-label="Recent" className="px-4">
Recent
</ToggleGroupItem>
<ToggleGroupItem value="emerging" aria-label="Emerging" className="px-4">
Emerging
</ToggleGroupItem>
</ToggleGroup>
<C_ei>
<C_ti asChild>
<Button variant="outline" className="gap-2">
Indicators
{r.length < Ra.length && (<Badge variant="secondary" className="ml-1 text-xs px-1.5">
{r.length}
</Badge>)}
<ChevronDownIcon className="h-4 w-4" />
</Button>
</C_ti>
<DropdownMenuContent align="start" className="w-48">
{Ra.map((v) => (<DropdownMenuCheckboxItem checked={r.includes(v)} onCheckedChange={() => m(v)} key={v}>
{wO[v]}
</DropdownMenuCheckboxItem>))}
<DropdownMenuSeparator />
<DropdownMenuCheckboxItem checked={r.length === Ra.length} onCheckedChange={() => i(r.length === Ra.length ? [] : [...Ra])}>
Select All
</DropdownMenuCheckboxItem>
</DropdownMenuContent>
</C_ei>
<div className="flex items-center gap-2 ml-auto">
<Switch id="normalize" checked={o} onCheckedChange={l} />
<Label htmlFor="normalize" className="text-sm cursor-pointer">
Normalize
</Label>
</div>
{h && (<Button variant="ghost" size="sm" onClick={f} className="text-muted-foreground">
Clear filters
</Button>)}
</div>
<div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8">
<div className="min-w-0">
<C_sO signals={c} selectedCategories={e} selectedTimeWindows={s} isNormalized={o} />
</div>
<div className="hidden lg:block">
<C_oO />
</div>
</div>
</div>
<Vn />
</div>);
};

export const l0 = ga.filter((e) => e.moduleAccess.radar);

export const LO = (e) => {
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
      return TrendingUpIcon;
    default:
      return DatabaseIcon;
  }
};

export const FO = (e) => {
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
      return "Market Signals";
    default:
      return e;
  }
};

export const Rp = [{ value: "product", label: "Product", icon: PillIcon }, { value: "sentiment", label: "Sentiment", icon: BrainIcon }, { value: "competitive", label: "Competitive", icon: SwordsIcon }, { value: "market", label: "Market", icon: TrendingDownIcon }, { value: "regulatory", label: "Regulatory", icon: FlaskConicalIcon }, { value: "media", label: "Media", icon: NewspaperIcon }];

export const RadarSignalSetup = () => {
  const [e, n] = React.useState(false), [s, a] = React.useState(""), [r, i] = React.useState(""), [o, l] = React.useState([]), [c, u] = React.useState([{ id: "1", description: "US drug pricing narrative resurfaces in financial media coverage of pharma access and affordability", category: "sentiment", dataSources: ["ds-1", "ds-2"], createdAt: "Sep 15, 2026" }, { id: "2", description: "Cosentyx Phase 3 data shows PASI90 at 74%; sell-side review expected", category: "product", dataSources: ["ds-1"], createdAt: "Sep 10, 2026" }]), m = (v) => {
    l((x) => x.includes(v) ? x.filter((y) => y !== v) : [...x, v]);
  }, p = () => {
    if (!s || !r || o.length === 0) {
      toast({ title: "Missing fields", description: "Please fill in all required fields", variant: "destructive" });
      return;
    }
    const v = { id: Date.now().toString(), description: s, category: r, dataSources: o, createdAt: (/* @__PURE__ */ new Date()).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }) };
    u((x) => [v, ...x]), toast({ title: "Signal created", description: "Your new signal has been added to the overview" }), a(""), i(""), l([]), n(false);
  }, h = (v) => {
    u((x) => x.filter((y) => y.id !== v)), toast({ title: "Signal removed", description: "The signal has been removed from your configuration" });
  }, f = (v) => Rp.find((x) => x.value === v) || Rp[0];
  return (<div className="min-h-screen bg-background flex flex-col">
<Ao />
<div className="container mx-auto px-6 py-8 flex-1">
<div className="max-w-4xl mx-auto space-y-6">
<div className="mb-6">
<p className="text-muted-foreground">
Create and configure signals by defining their context and selecting data sources from External Intelligence
</p>
</div>
<div className="flex justify-end">
<Button onClick={() => n(true)} className="gap-2">
<PlusIcon className="h-4 w-4" />
Create New Signal
</Button>
</div>
<Card>
<CardHeader>
<CardTitle className="text-lg flex items-center gap-2">
<DatabaseIcon className="h-5 w-5 text-primary" />
Configured Signals
</CardTitle>
</CardHeader>
<CardContent className="space-y-4">
{c.length === 0 ? (<div className="text-center py-8 text-muted-foreground">
<DatabaseIcon className="h-8 w-8 mx-auto mb-3 opacity-50" />
<p>
No signals configured
</p>
<p className="text-sm">
Click "Create New Signal" to get started
</p>
</div>) : c.map((v) => {
    const x = f(v.category), C_y = x.icon;
    return (<div className="p-4 border rounded-lg hover:bg-muted/50 transition-colors" key={v.id}>
<div className="flex items-start justify-between gap-4">
<div className="flex-1 min-w-0">
<div className="flex items-center gap-2 mb-2">
<Badge variant="outline" className="gap-1.5">
<C_y className="h-3.5 w-3.5" />
{x.label}
</Badge>
<span className="text-xs text-muted-foreground">
{"Created "}
{v.createdAt}
</span>
</div>
<p className="font-medium text-foreground mb-3">
{v.description}
</p>
<div className="flex items-center gap-2 flex-wrap">
<span className="text-xs text-muted-foreground">
Data Sources:
</span>
{v.dataSources.map((b) => {
      const g = ga.find((j) => j.id === b);
      return g ? (<Badge variant="secondary" className="text-xs" key={b}>
{g.name}
</Badge>) : null;
    })}
</div>
</div>
<div className="flex items-center gap-2">
<Button variant="ghost" size="icon" className="h-8 w-8">
<SquarePenIcon className="h-4 w-4" />
</Button>
<Button variant="ghost" size="icon" className="h-8 w-8 text-destructive hover:text-destructive" onClick={() => h(v.id)}>
<Trash2Icon className="h-4 w-4" />
</Button>
</div>
</div>
</div>);
  })}
</CardContent>
</Card>
<Card className="bg-muted/30">
<CardContent className="py-4">
<div className="flex items-start gap-3">
<ExternalLinkIcon className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
<div>
<p className="text-sm text-muted-foreground">
Signals are powered by curated data sources from the
{" "}
<span className="font-medium text-foreground">
External Intelligence
</span>
{" "}
module. Each signal will appear on the Overview page with auto-calculated priority scores
</p>
</div>
</div>
</CardContent>
</Card>
</div>
</div>
<C_ot open={e} onOpenChange={n}>
<DialogContent className="sm:max-w-lg">
<DialogHeader>
<DialogTitle>
Create New Signal
</DialogTitle>
<DialogDescription>
Define a signal that will be tracked and displayed on the Radar Overview
</DialogDescription>
</DialogHeader>
<div className="space-y-4 py-4">
<div className="space-y-2">
<Label htmlFor="description">
Signal Description
</Label>
<Textarea id="description" placeholder="Enter the signal headline that will appear on the overview" value={s} onChange={(v) => a(v.target.value)} className="min-h-[80px]" />
<p className="text-xs text-muted-foreground">
This description will be shown as the signal headline
</p>
</div>
<div className="space-y-2">
<Label htmlFor="category">
Category
</Label>
<C_le value={r} onValueChange={i}>
<SelectTrigger>
<C_ce placeholder="Select a category" />
</SelectTrigger>
<SelectContent>
{Rp.map((v) => {
    const C_x = v.icon;
    return (<SelectItem value={v.value} key={v.value}>
<div className="flex items-center gap-2">
<C_x className="h-4 w-4" />
{v.label}
</div>
</SelectItem>);
  })}
</SelectContent>
</C_le>
</div>
<div className="space-y-2">
<Label>
Data Sources
</Label>
<p className="text-xs text-muted-foreground mb-2">
Select the GEI data sources that will power this signal
</p>
<div className="space-y-2 max-h-[200px] overflow-y-auto border rounded-lg p-2">
{l0.length === 0 ? (<div className="text-center py-4 text-muted-foreground text-sm">
No data sources with Radar access available
</div>) : l0.map((v) => (<div className={`flex items-start gap-3 p-3 border rounded-lg cursor-pointer transition-colors ${o.includes(v.id) ? "border-primary bg-primary/5" : "hover:bg-muted/50"}`} onClick={() => m(v.id)} key={v.id}>
<div className={`w-5 h-5 rounded border flex items-center justify-center flex-shrink-0 mt-0.5 ${o.includes(v.id) ? "bg-primary border-primary" : "border-input"}`}>
{o.includes(v.id) && (<CheckIcon className="h-3 w-3 text-primary-foreground" />)}
</div>
<div className="flex-1 min-w-0">
<h4 className="font-medium text-foreground text-sm">
{v.name}
</h4>
<p className="text-xs text-muted-foreground mt-0.5 line-clamp-1">
{v.description}
</p>
<div className="flex items-center gap-1.5 mt-2 flex-wrap">
{v.createdFrom.slice(0, 3).map((x) => {
    const C_y = LO(x);
    return (<Badge variant="secondary" className="gap-1 text-xs py-0" key={x}>
<C_y className="h-2.5 w-2.5" />
{FO(x)}
</Badge>);
  })}
</div>
</div>
</div>))}
</div>
</div>
</div>
<DialogFooter>
<Button variant="outline" onClick={() => n(false)}>
Cancel
</Button>
<Button onClick={p} disabled={!s || !r || o.length === 0} className="gap-2">
<PlusIcon className="h-4 w-4" />
Create Signal
</Button>
</DialogFooter>
</DialogContent>
</C_ot>
<Vn />
</div>);
};

export const Dz = [{ id: 1, headline: "US drug pricing narrative resurfaces in financial media coverage of pharma access and affordability", category: "sentiment", priority: "attention", capturedDate: "Apr 12, 2026", originalDetection: "12 hours" }, { id: 2, headline: "Cosentyx Phase 3 data shows PASI90 at 74%; sell-side review expected", category: "product", priority: "attention", capturedDate: "Apr 10, 2026", originalDetection: "6 hours" }, { id: 3, headline: "AbbVie emphasizes next-gen Immunology pipeline to reinforce post-Humira growth narrative", category: "competitive", priority: "monitor", capturedDate: "Apr 8, 2026", originalDetection: "1 day" }, { id: 4, headline: "Novartis shares down 4.1% in line with broader pharma sell-off", category: "market", priority: "monitor", capturedDate: "Apr 5, 2026", originalDetection: "2 hours" }, { id: 5, headline: "FDA signals longer review timelines for select Immunology submissions", category: "regulatory", priority: "monitor", capturedDate: "Apr 2, 2026", originalDetection: "1 day" }, { id: 6, headline: "Large-cap pharma framed as defensive amid macro uncertainty", category: "media", priority: "none", capturedDate: "Mar 28, 2026", originalDetection: "2 days" }, { id: 7, headline: "Competitor generic launch timeline revised following FDA guidance update", category: "competitive", priority: "attention", capturedDate: "Mar 22, 2026", originalDetection: "4 hours" }, { id: 8, headline: "Earnings guidance reaffirmed ahead of sector conference", category: "product", priority: "none", capturedDate: "Mar 15, 2026", originalDetection: "1 hour" }];

export const v0 = { product: { label: "Product", icon: PillIcon }, competitive: { label: "Competitive", icon: SwordsIcon }, sentiment: { label: "Sentiment", icon: BrainIcon }, market: { label: "Market", icon: TrendingDownIcon }, media: { label: "Media", icon: NewspaperIcon }, regulatory: { label: "Regulatory", icon: FlaskConicalIcon } };

export const y0 = { attention: { label: "Attention Required", icon: CircleAlertIcon, className: "bg-destructive/10 text-destructive border-destructive/20" }, monitor: { label: "Monitor Closely", icon: EyeIcon, className: "bg-amber-500/10 text-amber-600 border-amber-500/20" }, none: { label: "No Action Needed", icon: CircleCheckBigIcon, className: "bg-muted text-muted-foreground border-muted" } };

export const Aa = ["product", "competitive", "sentiment", "market", "media", "regulatory"];

export const Da = ["attention", "monitor", "none"];

export const j0 = [{ id: "30d", label: "Last 30 days" }, { id: "90d", label: "Last 90 days" }, { id: "180d", label: "Last 180 days" }, { id: "custom", label: "Custom Range" }];

export const RadarHistory = () => {
  var v;
  const [e, n] = React.useState([...Aa]), [s, a] = React.useState([...Da]), [r, i] = React.useState("180d"), [o, l] = React.useState({ from: void 0, to: void 0 }), [c, u] = React.useState(false), m = (x) => {
    n((y) => y.includes(x) ? y.filter((b) => b !== x) : [...y, x]);
  }, p = (x) => {
    a((y) => y.includes(x) ? y.filter((b) => b !== x) : [...y, x]);
  }, h = () => {
    l({ from: void 0, to: void 0 }), i("180d");
  }, f = React.useMemo(() => Dz.filter((x) => e.includes(x.category) && s.includes(x.priority)), [e, s]);
  return (<div className="min-h-screen bg-background flex flex-col">
<Ao />
<div className="container mx-auto px-6 py-8 flex-1">
<div className="max-w-4xl mx-auto space-y-6">
<div className="mb-6">
<p className="text-muted-foreground">
Browse and search archived signals preserved for reference and pattern analysis
</p>
</div>
<div className="flex flex-wrap items-center gap-3">
<C_ei>
<C_ti asChild>
<Button variant="outline" className="gap-2">
Category
{e.length < Aa.length && (<Badge variant="secondary" className="ml-1 text-xs px-1.5">
{e.length}
</Badge>)}
<ChevronDownIcon className="h-4 w-4" />
</Button>
</C_ti>
<DropdownMenuContent align="start" className="w-48">
{Aa.map((x) => {
    const y = v0[x], C_b = y.icon;
    return (<DropdownMenuCheckboxItem checked={e.includes(x)} onCheckedChange={() => m(x)} key={x}>
<C_b className="h-4 w-4 mr-2" />
{y.label}
</DropdownMenuCheckboxItem>);
  })}
<DropdownMenuSeparator />
<DropdownMenuCheckboxItem checked={e.length === Aa.length} onCheckedChange={() => n(e.length === Aa.length ? [] : [...Aa])}>
Select All
</DropdownMenuCheckboxItem>
</DropdownMenuContent>
</C_ei>
<C_ei>
<C_ti asChild>
<Button variant="outline" className="gap-2">
Priority
{s.length < Da.length && (<Badge variant="secondary" className="ml-1 text-xs px-1.5">
{s.length}
</Badge>)}
<ChevronDownIcon className="h-4 w-4" />
</Button>
</C_ti>
<DropdownMenuContent align="start" className="w-48">
{Da.map((x) => {
    const y = y0[x];
    return (<DropdownMenuCheckboxItem checked={s.includes(x)} onCheckedChange={() => p(x)} key={x}>
{y.label}
</DropdownMenuCheckboxItem>);
  })}
<DropdownMenuSeparator />
<DropdownMenuCheckboxItem checked={s.length === Da.length} onCheckedChange={() => a(s.length === Da.length ? [] : [...Da])}>
Select All
</DropdownMenuCheckboxItem>
</DropdownMenuContent>
</C_ei>
<C_ql open={c} onOpenChange={u}>
<Ql asChild>
<Button variant="outline" className="gap-2">
<CalendarIcon className="h-4 w-4" />
{o.from ? (<>
{ts(o.from, "MMM d, yyyy")}
{o.to ? ` - ${ts(o.to, "MMM d, yyyy")}` : ""}
</>) : ((v = j0.find((x) => x.id === r)) == null ? void 0 : v.label) || "Date Range"}
<ChevronDownIcon className="h-4 w-4" />
</Button>
</Ql>
<PopoverContent className="w-auto p-0" align="start" onInteractOutside={(x) => {
    x.preventDefault();
  }}>
<div className="p-3 border-b">
<div className="flex items-center justify-between">
<span className="text-sm font-medium">
Select Date Range
</span>
{o.from && (<Button variant="ghost" size="sm" onClick={h} className="h-6 px-2 text-xs">
<XIcon className="h-3 w-3 mr-1" />
Clear
</Button>)}
</div>
<div className="flex gap-2 mt-2">
{j0.filter((x) => x.id !== "custom").map((x) => (<Button variant={r === x.id && !o.from ? "default" : "outline"} size="sm" className="text-xs h-7" onClick={() => {
    i(x.id), l({ from: void 0, to: void 0 });
  }} key={x.id}>
{x.label}
</Button>))}
</div>
</div>
<Calendar initialFocus mode="range" defaultMonth={o.from} selected={o} onSelect={(x) => {
    l(x || { from: void 0, to: void 0 }), x != null && x.from && i("custom");
  }} numberOfMonths={2} className="p-3" />
<div className="p-3 border-t flex justify-end">
<Button size="sm" onClick={() => u(false)}>
Apply
</Button>
</div>
</PopoverContent>
</C_ql>
{(e.length < Aa.length || s.length < Da.length || r !== "180d") && (<Button variant="ghost" size="sm" onClick={() => {
    n([...Aa]), a([...Da]), i("180d"), l({ from: void 0, to: void 0 });
  }} className="text-muted-foreground">
Clear filters
</Button>)}
</div>
<div className="space-y-3">
{f.length === 0 ? (<Card className="opacity-60">
<CardContent className="py-12 text-center text-muted-foreground">
No signals match the selected filters
</CardContent>
</Card>) : f.map((x) => {
    const y = v0[x.category], b = y0[x.priority], C_g = y.icon;
    return (<Link to={`/radar/signal/${x.id}`} key={x.id}>
<Card className="opacity-80 hover:opacity-100 transition-opacity duration-200 cursor-pointer hover:shadow-md">
<CardContent className="py-4">
<div className="space-y-3">
<div className="flex items-center gap-2 flex-wrap">
<Badge variant="outline" className="gap-1.5 font-normal">
<C_g className="h-3.5 w-3.5" />
{y.label}
</Badge>
<Badge variant="outline" className={cn("font-normal", b.className)}>
{b.label}
</Badge>
</div>
<h3 className="font-medium text-foreground leading-snug">
{x.headline}
</h3>
<div className="flex items-center gap-4 text-xs text-muted-foreground">
<span className="flex items-center gap-1.5">
<ClockIcon className="h-3.5 w-3.5" />
{"Captured on "}
{x.capturedDate}
</span>
<span>
{"Originally detected within "}
{x.originalDetection}
</span>
</div>
</div>
</CardContent>
</Card>
</Link>);
  })}
</div>
</div>
</div>
<Vn />
</div>);
};

export const md = ga.filter((e) => e.moduleAccess.radar);

export const Wz = (e) => {
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
      return TrendingUpIcon;
    default:
      return DatabaseIcon;
  }
};

export const Gz = (e) => {
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
      return "Market Signals";
    default:
      return e;
  }
};

export const RadarSettings = () => {
  const { toast: e } = useToast(), [n, s] = React.useState(md.filter((y) => y.status === "active").map((y) => y.id)), [a, r] = React.useState(true), [i, o] = React.useState("attention-only"), [l, c] = React.useState({ inApp: true, email: false }), [u, m] = React.useState(true), p = React.useMemo(() => ({ enabledSources: md.filter((y) => y.status === "active").map((y) => y.id), notificationsEnabled: true, notificationLevel: "attention-only", channels: { inApp: true, email: false }, radarOn: true }), []), h = React.useMemo(() => a !== p.notificationsEnabled || i !== p.notificationLevel || l.inApp !== p.channels.inApp || l.email !== p.channels.email || u !== p.radarOn || n.length !== p.enabledSources.length || !n.every((y) => p.enabledSources.includes(y)), [n, a, i, l, u, p]), f = (y) => {
    s((b) => b.includes(y) ? b.filter((g) => g !== y) : [...b, y]);
  }, v = () => {
    e({ title: "Settings updated" });
  }, x = () => {
    s(p.enabledSources), r(true), o("attention-only"), c({ inApp: true, email: false }), m(true);
  };
  return (<div className="min-h-screen bg-background flex flex-col">
<Ao />
<div className="container mx-auto px-6 py-8 flex-1">
<div className="max-w-3xl mx-auto space-y-6">
<div className="mb-6">
<p className="text-muted-foreground">
Manage Radar preferences, data source access, and notification settings
</p>
</div>
<Card>
<CardHeader>
<div className="flex items-center justify-between">
<div>
<CardTitle className="text-lg flex items-center gap-2">
<DatabaseIcon className="h-5 w-5 text-primary" />
Data Sources
</CardTitle>
<CardDescription className="mt-1">
Powered by External Intelligence
</CardDescription>
</div>
<Link to="/gei/data-sources" className="text-xs text-primary hover:underline flex items-center gap-1">
Manage in External Intelligence
<ExternalLinkIcon className="h-3 w-3" />
</Link>
</div>
</CardHeader>
<CardContent className="space-y-3">
{md.length === 0 ? (<div className="text-center py-6 text-muted-foreground">
<DatabaseIcon className="h-8 w-8 mx-auto mb-2 opacity-50" />
<p>
No data sources with Radar access
</p>
<p className="text-sm">
Enable Radar access in the External Intelligence module
</p>
</div>) : md.map((y) => (<div className="flex items-start justify-between p-3 border rounded-lg hover:bg-muted/30 transition-colors" key={y.id}>
<div className="flex-1 min-w-0 pr-4">
<div className="flex items-center gap-2 mb-1">
<h4 className="font-medium text-sm text-foreground truncate">
{y.name}
</h4>
<Badge variant="outline" className={`text-xs ${y.status === "active" ? "bg-emerald-500/10 text-emerald-600 border-emerald-500/20" : y.status === "inactive" ? "bg-muted text-muted-foreground" : ""}`}>
{y.status}
</Badge>
</div>
<p className="text-xs text-muted-foreground line-clamp-1 mb-2">
{y.description}
</p>
<div className="flex items-center gap-1.5 flex-wrap">
{y.createdFrom.slice(0, 3).map((b) => {
    const C_g = Wz(b);
    return (<Badge variant="secondary" className="gap-1 text-xs py-0" key={b}>
<C_g className="h-2.5 w-2.5" />
{Gz(b)}
</Badge>);
  })}
{y.createdFrom.length > 3 && (<span className="text-xs text-muted-foreground">
+
{y.createdFrom.length - 3}
{" more"}
</span>)}
</div>
</div>
<Switch checked={n.includes(y.id)} onCheckedChange={() => f(y.id)} disabled={y.status === "inactive"} />
</div>))}
</CardContent>
</Card>
<Card>
<CardHeader>
<CardTitle className="text-lg flex items-center gap-2">
<BellIcon className="h-5 w-5 text-primary" />
Notifications
</CardTitle>
</CardHeader>
<CardContent className="space-y-6">
<div className="flex items-center justify-between">
<Label htmlFor="notifications-toggle" className="text-sm font-medium">
Enable Notifications
</Label>
<Switch id="notifications-toggle" checked={a} onCheckedChange={r} />
</div>
{a && (<>
<div className="space-y-3">
<Label className="text-sm font-medium">
Notification Level
</Label>
<RadioGroup value={i} onValueChange={o} className="space-y-2">
<div className="flex items-center space-x-2">
<RadioGroupItem value="attention-only" id="attention-only" />
<Label htmlFor="attention-only" className="text-sm font-normal cursor-pointer">
Attention Required only
</Label>
</div>
<div className="flex items-center space-x-2">
<RadioGroupItem value="attention-monitor" id="attention-monitor" />
<Label htmlFor="attention-monitor" className="text-sm font-normal cursor-pointer">
Attention Required + Monitor Closely
</Label>
</div>
</RadioGroup>
</div>
<div className="space-y-3">
<Label className="text-sm font-medium">
Channels
</Label>
<div className="space-y-2">
<div className="flex items-center space-x-2">
<input type="checkbox" id="channel-inapp" checked={l.inApp} onChange={(y) => c((b) => ({ ...b, inApp: y.target.checked }))} className="h-4 w-4 rounded border-input" />
<Label htmlFor="channel-inapp" className="text-sm font-normal cursor-pointer">
In-app
</Label>
</div>
<div className="flex items-center space-x-2">
<input type="checkbox" id="channel-email" checked={l.email} onChange={(y) => c((b) => ({ ...b, email: y.target.checked }))} className="h-4 w-4 rounded border-input" />
<Label htmlFor="channel-email" className="text-sm font-normal cursor-pointer">
Email
</Label>
</div>
</div>
</div>
</>)}
</CardContent>
</Card>
<Card>
<CardHeader>
<CardTitle className="text-lg flex items-center gap-2">
<PowerIcon className="h-5 w-5 text-primary" />
Radar Status
</CardTitle>
</CardHeader>
<CardContent>
<div className="flex items-center justify-between">
<div>
<Label htmlFor="radar-toggle" className="text-sm font-medium">
{u ? "Radar is active" : "Radar is paused"}
</Label>
<p className="text-xs text-muted-foreground mt-0.5">
{u ? "Signals are being monitored and surfaced" : "Signal monitoring is temporarily paused"}
</p>
</div>
<Switch id="radar-toggle" checked={u} onCheckedChange={m} />
</div>
</CardContent>
</Card>
<div className="flex gap-3 pt-4">
<Button onClick={v} className="flex-1 gap-2" disabled={!h}>
<SaveIcon className="h-4 w-4" />
Save Settings
</Button>
<Button variant="outline" onClick={x} className="gap-2" disabled={!h}>
<XIcon className="h-4 w-4" />
Cancel
</Button>
</div>
</div>
</div>
<Vn />
</div>);
};

export const Qz = [{ id: 1, category: "sentiment", priority: "attention", priorityScore: 88, headline: "US drug pricing narrative resurfaces in financial media coverage of pharma access and affordability", recency: "12 hours ago", whatHappened: "A financial publication revisited drug pricing themes while discussing broader pharma governance trends, referencing Novartis without introducing new factual developments", whyMatters: "Repeated association with legacy narratives can revive governance and risk-discount questions even in the absence of new developments", signalStrength: { severity: "High", credibility: "Medium", momentum: "Increasing" }, expectedReaction: "While immediate questions are unlikely, the narrative may reappear in ESG-focused discussions or broader risk framing", recommendedPosture: "Monitor Closely \u2014 Prepare holding language and engage only if the narrative gains traction" }, { id: 2, category: "product", priority: "attention", priorityScore: 92, headline: "Cosentyx Phase 3 data shows PASI90 at 74%; sell-side review expected", recency: "6 hours ago", whatHappened: "Novartis released topline Phase 3 results for Cosentyx in moderate-to-severe psoriasis, reporting a PASI90 response rate of 74% versus 48% for placebo at Week 16, with a safety profile consistent with prior disclosures", whyMatters: "Cosentyx is a priority Immunology asset, and this data may influence durability assumptions, revenue outlooks, and long-term positioning within analyst models", signalStrength: { severity: "High", credibility: "High", momentum: "Early" }, expectedReaction: "Analysts are likely to reassess long-term Immunology assumptions and probe durability, population expansion, and comparative differentiation", recommendedPosture: "Prepare \u2014 Route to Canvas for disclosure-safe framing and flag for rehearsal if earnings timing is near" }, { id: 3, category: "competitive", priority: "monitor", priorityScore: 74, headline: "AbbVie emphasizes next-gen Immunology pipeline to reinforce post-Humira growth narrative", recency: "1 day ago", whatHappened: "AbbVie highlighted mid-stage Immunology assets in an investor presentation, projecting high-single-digit portfolio growth through 2028", whyMatters: "This framing may reset relative expectations and increase scrutiny on Immunology differentiation during conferences and analyst meetings", signalStrength: { severity: "Medium", credibility: "Medium\u2013High", momentum: "Moderate" }, expectedReaction: "Analysts may draw sharper comparisons between pipeline optionality and durability across large-cap Immunology players", recommendedPosture: "Monitor Closely \u2014 Prepare comparative context for engagement; no proactive response required" }, { id: 4, category: "market", priority: "monitor", priorityScore: 66, headline: "Novartis shares down 4.1% in line with broader pharma sell-off", recency: "Today", whatHappened: "Novartis shares declined 4.1% intraday, broadly tracking a 3.6% decline in the broader pharma index following macro commentary on drug pricing", whyMatters: "Rapid clarification is often required to distinguish sector-driven moves from company-specific fundamentals", signalStrength: { severity: "Medium", credibility: "High", momentum: "Stabilizing" }, expectedReaction: "Analysts may seek confirmation that the move reflects sector dynamics rather than new company-specific information", recommendedPosture: "No Action Needed \u2014 Prepare an internal stock-move explainer for leadership reference" }, { id: 5, category: "regulatory", priority: "monitor", priorityScore: 71, headline: "FDA signals longer review timelines for select Immunology submissions", recency: "1 day ago", whatHappened: "FDA commentary indicated extended review timelines for certain Immunology submissions due to internal resourcing shifts, without naming specific assets", whyMatters: "Timeline sensitivity can trigger clarification requests and speculation around procedural versus scientific delays", signalStrength: { severity: "Medium", credibility: "Medium", momentum: "Early" }, expectedReaction: "Analysts may test assumptions around regulatory cadence and seek confirmation that existing timelines remain intact", recommendedPosture: "Prepare \u2014 Align internal language and avoid proactive disclosure" }, { id: 6, category: "media", priority: "none", priorityScore: 52, headline: "Large-cap pharma framed as defensive amid macro uncertainty", recency: "2 days ago", whatHappened: "Several outlets positioned large-cap pharma as relatively defensive in the current macro environment, with brief positive references to Novartis", whyMatters: "The coverage is supportive but non-specific and unlikely to persist or shape investor questioning", signalStrength: { severity: "Low", credibility: "Medium", momentum: "Flat" }, expectedReaction: "Minimal, with limited likelihood of follow-up or incorporation into valuation discussions", recommendedPosture: "No Action Needed \u2014 Archive" }];

export const Yz = (e) => Qz.find((n) => n.id === e);

export const Kz = () => {
  const e = () => {
    toast({ title: "Saved to History", description: "This signal has been added to your history for future reference" });
  };
  return (<div className="space-y-6 sticky top-8">
<div className="flex flex-col gap-3">
<Button variant="outline" className="justify-start gap-2 h-10 text-sm font-medium hover:bg-accent">
<FilePenIcon className="h-4 w-4" />
Send to Canvas
</Button>
<Button variant="outline" className="justify-start gap-2 h-10 text-sm font-medium hover:bg-accent">
<MicIcon className="h-4 w-4" />
Trigger Coach
</Button>
<Button variant="outline" className="justify-start gap-2 h-10 text-sm font-medium hover:bg-accent" onClick={e}>
<BookmarkIcon className="h-4 w-4" />
Save to History
</Button>
</div>
<Card className="glass-card">
<CardHeader className="pb-4">
<CardTitle className="flex items-center gap-2 text-base font-semibold">
<InfoIcon className="h-4 w-4 text-primary" />
Signal Guide
</CardTitle>
</CardHeader>
<CardContent className="space-y-6">
<div className="space-y-3">
<h4 className="text-sm font-medium text-foreground">
Categories
</h4>
<div className="space-y-2 text-sm text-muted-foreground">
<div className="flex items-start gap-2">
<PillIcon className="h-4 w-4 mt-0.5 shrink-0" />
<span>
<strong className="text-foreground">
Product
</strong>
{" — Signals tied to Novartis assets and performance"}
</span>
</div>
<div className="flex items-start gap-2">
<SwordsIcon className="h-4 w-4 mt-0.5 shrink-0" />
<span>
<strong className="text-foreground">
Competitive
</strong>
{" — Key competitor moves or positioning shifts"}
</span>
</div>
<div className="flex items-start gap-2">
<BrainIcon className="h-4 w-4 mt-0.5 shrink-0" />
<span>
<strong className="text-foreground">
Sentiment
</strong>
{" — Reputation and perception signals"}
</span>
</div>
<div className="flex items-start gap-2">
<TrendingDownIcon className="h-4 w-4 mt-0.5 shrink-0" />
<span>
<strong className="text-foreground">
Market
</strong>
{" — Stock and trading-related signals"}
</span>
</div>
<div className="flex items-start gap-2">
<NewspaperIcon className="h-4 w-4 mt-0.5 shrink-0" />
<span>
<strong className="text-foreground">
Media
</strong>
{" — Narrative and coverage themes"}
</span>
</div>
<div className="flex items-start gap-2">
<FlaskConicalIcon className="h-4 w-4 mt-0.5 shrink-0" />
<span>
<strong className="text-foreground">
Regulatory
</strong>
{" — Clinical or regulatory developments"}
</span>
</div>
</div>
</div>
<div className="space-y-3">
<h4 className="text-sm font-medium text-foreground">
Indicators
</h4>
<div className="space-y-2 text-sm text-muted-foreground">
<div>
<strong className="text-foreground">
Impact
</strong>
{" — Potential relevance if unaddressed"}
</div>
<div>
<strong className="text-foreground">
Severity
</strong>
{" — Strength of the signal"}
</div>
<div>
<strong className="text-foreground">
Credibility
</strong>
{" — Confidence in source"}
</div>
<div>
<strong className="text-foreground">
Momentum
</strong>
{" — Direction of change"}
</div>
</div>
</div>
<div className="pt-2 border-t border-border">
<p className="text-xs text-muted-foreground italic">
Signals indicate relevance, not approved messaging.
</p>
</div>
</CardContent>
</Card>
</div>);
};

export const Xz = (e) => e >= 80 ? "text-destructive" : e >= 50 ? "text-warning" : "text-emerald-600";

export const zp = (e) => {
  const n = e.toLowerCase();
  return n === "high" || n === "increasing" ? "text-destructive" : n === "medium" || n === "medium\u2013high" || n === "moderate" || n === "early" ? "text-warning" : n === "low" || n === "flat" || n === "stabilizing" ? "text-emerald-600" : "text-foreground";
};

export const b0 = { product: { label: "Product", icon: PillIcon }, sentiment: { label: "Sentiment", icon: BrainIcon }, competitive: { label: "Competitive", icon: SwordsIcon }, market: { label: "Market", icon: TrendingDownIcon }, regulatory: { label: "Regulatory", icon: FlaskConicalIcon }, media: { label: "Media", icon: NewspaperIcon } };

export const Zz = { attention: { label: "Attention Required", className: "bg-destructive/10 text-destructive border-destructive/20" }, monitor: { label: "Monitor Closely", className: "bg-warning/10 text-warning border-warning/20" }, none: { label: "No Action Needed", className: "bg-muted text-muted-foreground border-border" } };

export const RadarSignalDetail = () => {
  const { id: e } = useParams();
  useNavigate();
  const n = Yz(Number(e));
  if (!n) return (<div className="min-h-screen bg-background flex items-center justify-center">
<div className="text-center">
<h1 className="text-2xl font-semibold text-foreground mb-4">
Signal not found
</h1>
<Link to="/radar" className="text-primary hover:underline">
← Back to Overview
</Link>
</div>
</div>);
  const C_s = b0[n.category].icon, a = Zz[n.priority];
  return (<div className="min-h-screen bg-background flex flex-col">
<Ao />
<div className="container mx-auto px-6 py-8 flex-1">
<div className="flex justify-end mb-6">
<Link to="/radar" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
<ArrowLeftIcon className="h-4 w-4" />
<span className="text-sm font-medium">
Back to Overview
</span>
</Link>
</div>
<div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8">
<div className="space-y-6">
<div className="flex items-center gap-2">
<C_s className="h-5 w-5 text-primary" />
<span className="text-sm font-medium text-muted-foreground">
{b0[n.category].label}
</span>
</div>
<h1 className="text-2xl font-bold text-foreground leading-tight">
{n.headline}
</h1>
<div className="flex items-center gap-4 flex-wrap">
{n.priorityScore && (<div className="flex flex-col items-center mr-2">
<span className={cn("text-2xl font-bold", Xz(n.priorityScore))}>
{n.priorityScore}
</span>
<span className="text-xs text-muted-foreground uppercase tracking-wide">
Score
</span>
</div>)}
<span className={cn("text-xs font-medium px-2.5 py-1 rounded-full border", a.className)}>
{a.label}
</span>
<div className="flex items-center gap-1.5 text-muted-foreground">
<ClockIcon className="h-3.5 w-3.5" />
<span className="text-sm">
{n.recency}
</span>
</div>
</div>
<div className="pt-2" />
<section>
<h2 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
<FileTextIcon className="h-5 w-5 text-primary" />
What Happened
</h2>
<p className="text-muted-foreground leading-relaxed">
{n.whatHappened}
</p>
</section>
<section>
<h2 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
<LightbulbIcon className="h-5 w-5 text-primary" />
Why This Matters
</h2>
<p className="text-muted-foreground leading-relaxed">
{n.whyMatters}
</p>
</section>
<section>
<h2 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
<ActivityIcon className="h-5 w-5 text-primary" />
Signal Strength
</h2>
<p className="text-muted-foreground">
<span className="font-medium text-foreground">
Severity:
</span>
{" "}
<span className={cn("font-medium", zp(n.signalStrength.severity))}>
{n.signalStrength.severity}
</span>
{" · "}
<span className="font-medium text-foreground">
Credibility:
</span>
{" "}
<span className={cn("font-medium", zp(n.signalStrength.credibility))}>
{n.signalStrength.credibility}
</span>
{" · "}
<span className="font-medium text-foreground">
Momentum:
</span>
{" "}
<span className={cn("font-medium", zp(n.signalStrength.momentum))}>
{n.signalStrength.momentum}
</span>
</p>
</section>
<section>
<h2 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
<UsersIcon className="h-5 w-5 text-primary" />
Expected Analyst Reaction
</h2>
<p className="text-muted-foreground leading-relaxed">
{n.expectedReaction}
</p>
</section>
<section>
<h2 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
<TargetIcon className="h-5 w-5 text-primary" />
Recommended Posture
</h2>
<p className="text-muted-foreground leading-relaxed">
{n.recommendedPosture}
</p>
</section>
</div>
<div className="hidden lg:block">
<Kz />
</div>
</div>
</div>
<Vn />
</div>);
};
