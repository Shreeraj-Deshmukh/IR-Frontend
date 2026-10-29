// @ts-nocheck
/* eslint-disable */
// Generated port of the IR Co-Pilot demo (Radar / Canvas / GEI).
import * as React from "react";
import { AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { SelectContent, SelectItem, SelectTrigger } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { ActivityIcon, ArrowLeftIcon, ArrowRightIcon, Building2Icon, CalendarIcon, ChartColumnIcon, CheckIcon, ChevronDownIcon, ChevronRightIcon, CircleAlertIcon, CircleCheckBigIcon, CircleCheckIcon, ClipboardCheckIcon, ClockIcon, CompassIcon, DatabaseIcon, ExternalLinkIcon, EyeIcon, FileCheckIcon, FileTextIcon, FolderOpenIcon, GitBranchIcon, HistoryIcon, HouseIcon, LayersIcon, LightbulbIcon, LinkIcon, MessageSquareIcon, MicIcon, MilestoneIcon, PackageIcon, PenLineIcon, PencilIcon, PillIcon, PlusIcon, RotateCcwIcon, SearchIcon, SettingsIcon, ShieldCheckIcon, ShieldIcon, SparklesIcon, SquareCheckBigIcon, SwordsIcon, TargetIcon, Trash2Icon, TrendingUpIcon, TriangleAlertIcon, UploadIcon, UserIcon, UsersIcon, WandSparklesIcon, ZapIcon } from "lucide-react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { C_ce, C_le, C_ot, Eu, Mu, Pu, Ru, Vn, ga, xn } from "./shared";

export const t7 = [{ path: "/canvas", label: "Overview", icon: HouseIcon }, { path: "/canvas/narrative", label: "Narrative Canvas", icon: WandSparklesIcon }, { path: "/canvas/brief", label: "Narrative Brief", icon: FileTextIcon }, { path: "/canvas/readiness", label: "Readiness & Alignment", icon: ShieldCheckIcon }, { path: "/canvas/history", label: "History & Reuse", icon: HistoryIcon }, { path: "/canvas/settings", label: "Settings", icon: SettingsIcon }];

export function _o() {
  const e = useLocation(), n = (s) => s === "/canvas" ? e.pathname === "/canvas" : e.pathname === s;
  return (<nav className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
<div className="container mx-auto px-6">
<div className="flex items-center justify-between gap-6 h-14">
<div className="flex flex-1 items-center gap-6">
<Link to="/canvas" className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
C
</div>
<span className="font-bold text-lg text-foreground">
Canvas
</span>
</Link>
<div className="flex flex-1 items-center justify-evenly">
{t7.map((s) => {
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

export const C_n7 = () => {
  const e = useNavigate(), n = () => {
    e("/canvas/narrative");
  };
  return (<div className="mb-8">
<div className="flex items-start justify-between">
<div>
<h1 className="text-2xl font-bold text-foreground mb-1">
Welcome back!
</h1>
<p className="text-muted-foreground">
Manage narratives, ensure consistency, and reduce disclosure risk
</p>
</div>
<div className="flex items-center">
<Button className="gap-2" onClick={n}>
<PlusIcon className="h-4 w-4" />
Create New Narrative
</Button>
</div>
</div>
</div>);
};

export const w0 = { earnings: { label: "Earnings", icon: TrendingUpIcon }, product: { label: "Product", icon: PillIcon }, clinical: { label: "Clinical / Regulatory", icon: ShieldIcon }, competitive: { label: "Competitive", icon: UsersIcon }, market: { label: "Market Volatility", icon: ChartColumnIcon }, strategy: { label: "Long-Term Strategy", icon: TargetIcon } };

export const s7 = { draft: { label: "Draft", className: "bg-muted text-muted-foreground border-border" }, review: { label: "Review Ready", className: "bg-warning/10 text-warning border-warning/20" }, approved: { label: "Approved", className: "bg-success/10 text-success border-success/20" } };

export const C_a7 = ({ title: e, type: n, status: s, lastUsed: a, onClick: r }) => {
  const C_i = w0[n].icon, o = w0[n].label, l = s7[s];
  return (<Card className="cursor-pointer transition-all duration-200 hover:shadow-md hover:border-primary/20 bg-card" onClick={r}>
<CardContent className="p-4">
<div className="flex items-start justify-between gap-4">
<div className="flex-1 min-w-0">
<div className="flex items-center gap-2 mb-2">
<div className="flex items-center gap-1.5 text-muted-foreground">
<C_i className="h-3.5 w-3.5" />
<span className="text-xs font-medium">
{o}
</span>
</div>
</div>
<h3 className="font-medium text-foreground mb-2 line-clamp-2">
{e}
</h3>
<p className="text-xs text-muted-foreground">
{a}
</p>
</div>
<Badge variant="outline" className={cn("shrink-0 text-xs", l.className)}>
{l.label}
</Badge>
</div>
</CardContent>
</Card>);
};

export const r7 = [{ label: "Overall Readiness", value: "Medium", level: "medium", icon: ActivityIcon }, { label: "Disclosure Risk", value: "Low", level: "high", icon: ShieldIcon }, { label: "Coverage Status", value: "Partial", level: "medium", icon: FileCheckIcon }];

export const i7 = ['Some narratives are missing "What This Does NOT Mean" sections', "FAQ coverage is incomplete for Earnings narratives", "Recent narratives remain consistent with prior disclosures"];

export const o7 = ["Complete FAQs for Earnings narratives", "Review Draft narratives", "Check alignment for upcoming disclosures"];

export const l7 = (e) => {
  switch (e) {
    case "high":
      return CircleCheckBigIcon;
    case "medium":
      return TriangleAlertIcon;
    case "low":
      return CircleAlertIcon;
  }
};

export const c7 = (e) => {
  switch (e) {
    case "high":
      return "text-success";
    case "medium":
      return "text-warning";
    case "low":
      return "text-destructive";
  }
};

export const C_d7 = () => (<Card className="bg-card sticky top-20">
<CardHeader className="pb-4">
<CardTitle className="text-base font-semibold text-foreground flex items-center gap-2">
<ActivityIcon className="h-4 w-4 text-primary" />
Narrative Health
</CardTitle>
</CardHeader>
<CardContent className="space-y-6">
<div className="space-y-3">
{r7.map((e) => {
  const C_n = l7(e.level), s = c7(e.level), C_a = e.icon;
  return (<div className="flex items-center justify-between py-2 border-b border-border last:border-0" key={e.label}>
<div className="flex items-center gap-2">
<C_a className="h-4 w-4 text-muted-foreground" />
<span className="text-sm text-muted-foreground">
{e.label}
</span>
</div>
<div className="flex items-center gap-1.5">
<C_n className={cn("h-3.5 w-3.5", s)} />
<span className={cn("text-sm font-medium", s)}>
{e.value}
</span>
</div>
</div>);
})}
</div>
<div className="space-y-3">
<div className="flex items-center gap-2">
<EyeIcon className="h-4 w-4 text-muted-foreground" />
<span className="text-sm font-medium text-foreground">
Key Observations
</span>
</div>
<div className="space-y-2">
{i7.map((e, n) => (<div className="flex items-start gap-2 py-1" key={n}>
<span className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-1.5 shrink-0" />
<span className="text-sm text-muted-foreground">
{e}
</span>
</div>))}
</div>
</div>
<div className="space-y-3">
<div className="flex items-center gap-2">
<ZapIcon className="h-4 w-4 text-muted-foreground" />
<span className="text-sm font-medium text-foreground">
Suggested Actions
</span>
</div>
<div className="space-y-2">
{o7.map((e, n) => (<div className="flex items-start gap-2 py-1" key={n}>
<span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
<span className="text-sm text-muted-foreground">
{e}
</span>
</div>))}
</div>
</div>
</CardContent>
</Card>);

export const u7 = [{ id: 1, title: "Q3 2026 Earnings | Performance & Outlook", type: "earnings", status: "review", lastUsed: "Not yet used" }, { id: 2, title: "Cosentyx | Product Performance & Positioning", type: "product", status: "approved", lastUsed: "Used in Earnings Call, Jun 2026" }, { id: 3, title: "Immunology Phase 3 Trial | Data Disclosure", type: "clinical", status: "approved", lastUsed: "Used in Investor Conference, Jun 2026" }, { id: 4, title: "Competitive Landscape | Immunology Update", type: "competitive", status: "approved", lastUsed: "Used in Analyst Meeting, May 2026" }, { id: 5, title: "Regulatory Review Timeline | Manufacturing Update", type: "clinical", status: "draft", lastUsed: "Not yet used" }, { id: 6, title: "Long-Term Equity Story | Portfolio Strength", type: "strategy", status: "approved", lastUsed: "Used in Investor Conference, Apr 2026" }];

export const CanvasOverview = () => {
  const e = useNavigate(), n = (s) => {
    e(`/canvas/brief/${s}`);
  };
  return (<div className="min-h-screen bg-background flex flex-col">
<_o />
<div className="container mx-auto px-6 py-8 flex-1">
<C_n7 />
<div className="flex items-center gap-2 mb-4">
<FileTextIcon className="h-5 w-5 text-primary" />
<h2 className="text-lg font-semibold text-foreground">
Active Narratives
</h2>
<span className="text-sm text-muted-foreground ml-2">
Sorted by status and recency
</span>
</div>
<div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8">
<div className="space-y-4">
{u7.map((s, a) => (<div className="animate-fade-in-up" style={{ animationDelay: `${a * 60}ms` }} key={s.id}>
<C_a7 title={s.title} type={s.type} status={s.status} lastUsed={s.lastUsed} onClick={() => n(s.id)} />
</div>))}
</div>
<div className="hidden lg:block">
<C_d7 />
</div>
</div>
</div>
<Vn />
</div>);
};

export const N0 = [{ id: "a", label: "Option A", sublabel: "Balanced Performance", tone: "Conservative", risk: "Low", riskLevel: "low", text: "Cosentyx continues to deliver steady performance within the immunology portfolio, supported by consistent demand across core indications. The product maintains a strong clinical profile, and execution remains disciplined across commercialization and lifecycle management efforts. Performance this period reflects a balanced contribution to the broader immunology franchise, consistent with expectations." }, { id: "b", label: "Option B", sublabel: "Performance & Momentum", tone: "Confident", risk: "Medium", riskLevel: "medium", text: "Cosentyx demonstrated solid momentum during the period, with continued uptake reinforcing its position within the immunology portfolio. Ongoing physician adoption reflects confidence in its differentiated clinical profile, and execution across key markets remains strong. Cosentyx continues to be an important growth contributor within immunology, supported by focused commercial execution." }, { id: "c", label: "Option C", sublabel: "Long-Term Value", tone: "Strategic", risk: "Low\u2013Medium", riskLevel: "low-medium", text: "Cosentyx plays a central role in Novartis's long-term immunology strategy, supported by its established clinical foundation and continued investment in lifecycle management. The product contributes to portfolio durability while reinforcing the company's broader focus on sustainable innovation in immunology. Cosentyx remains well positioned as part of a diversified, long-term growth strategy." }];

export const g7 = [{ name: "Earnings Deck \u2014 Q3 2026", category: "Earnings", date: "Jun 2026" }, { name: "Immunology Franchise Update", category: "Product", date: "May 2026" }, { name: "Prior Disclosure \u2014 Q2 2026", category: "Internal", date: "Mar 2026" }];

export const v7 = [{ id: "prior-disclosures", label: "Prior disclosures" }, { id: "earnings-transcripts", label: "Earnings transcripts" }, { id: "internal-summaries", label: "Internal performance summaries" }, { id: "product-updates", label: "Product lifecycle updates" }];

export const y7 = ["Avoid comparative efficacy claims", "Avoid forward-looking assumptions", "Do not imply regulatory or label expansion timelines"];

export const j7 = ["High analyst sensitivity around immunology growth", "Prior quarter used conservative product framing"];

export const b7 = (e) => {
  switch (e) {
    case "low":
      return "text-success bg-success/10 border-success/20";
    case "medium":
      return "text-warning bg-warning/10 border-warning/20";
    case "low-medium":
      return "text-warning bg-warning/10 border-warning/20";
    default:
      return "text-muted-foreground bg-muted border-border";
  }
};

export const w7 = (e) => {
  switch (e) {
    case "Earnings":
      return "bg-primary/10 text-primary";
    case "Product":
      return "bg-accent text-accent-foreground";
    case "Internal":
      return "bg-muted text-muted-foreground";
    default:
      return "bg-muted text-muted-foreground";
  }
};

export const CanvasNarrative = () => {
  const e = useNavigate(), [n, s] = React.useState(null), [a, r] = React.useState({}), [i, o] = React.useState(["prior-disclosures", "earnings-transcripts"]), [l, c] = React.useState(false), u = () => {
    c(true);
  }, m = (v) => {
    s(v);
    const x = N0.find((y) => y.id === v);
    x && !a[v] && r((y) => ({ ...y, [v]: x.text }));
  }, p = (v, x) => {
    r((y) => ({ ...y, [v]: x }));
  }, h = (v) => {
    o((x) => x.includes(v) ? x.filter((y) => y !== v) : [...x, v]);
  }, f = () => {
    e("/canvas/brief/2");
  };
  return (<div className="min-h-screen bg-background flex flex-col">
<_o />
<div className="border-b border-border bg-card/50">
<div className="container mx-auto px-6 py-4">
<div className="flex items-center justify-between gap-6 flex-wrap">
<div className="flex items-center gap-6 flex-wrap">
<div className="flex items-center gap-2">
<LayersIcon className="h-4 w-4 text-muted-foreground" />
<C_le defaultValue="product">
<SelectTrigger className="w-[160px] h-9 text-sm">
<C_ce placeholder="Case Type" />
</SelectTrigger>
<SelectContent>
<SelectItem value="earnings">
Earnings
</SelectItem>
<SelectItem value="product">
Product
</SelectItem>
<SelectItem value="clinical">
Clinical
</SelectItem>
<SelectItem value="competitive">
Competitive
</SelectItem>
<SelectItem value="regulatory">
Regulatory
</SelectItem>
<SelectItem value="market-volatility">
Market Volatility
</SelectItem>
<SelectItem value="long-term-strategy">
Long-Term Strategy
</SelectItem>
</SelectContent>
</C_le>
</div>
<div className="flex items-center gap-2">
<UsersIcon className="h-4 w-4 text-muted-foreground" />
<C_le defaultValue="analysts-investors">
<SelectTrigger className="w-[180px] h-9 text-sm">
<C_ce placeholder="Audience" />
</SelectTrigger>
<SelectContent>
<SelectItem value="analysts">
Analysts
</SelectItem>
<SelectItem value="investors">
Investors
</SelectItem>
<SelectItem value="analysts-investors">
{"Analysts & Investors"}
</SelectItem>
</SelectContent>
</C_le>
</div>
<div className="flex items-center gap-2">
<CalendarIcon className="h-4 w-4 text-muted-foreground" />
<C_le defaultValue="earnings-call">
<SelectTrigger className="w-[180px] h-9 text-sm">
<C_ce placeholder="Event" />
</SelectTrigger>
<SelectContent>
<SelectItem value="earnings-call">
Earnings Call
</SelectItem>
<SelectItem value="investor-conference">
Investor Conference
</SelectItem>
<SelectItem value="analyst-meeting">
Analyst Meeting
</SelectItem>
<SelectItem value="investor-update">
Investor Update
</SelectItem>
<SelectItem value="regulatory-update">
Regulatory Update
</SelectItem>
<SelectItem value="ad-hoc-disclosure">
Ad-hoc Disclosure
</SelectItem>
</SelectContent>
</C_le>
</div>
</div>
<Button className="gap-2" onClick={u} disabled={l}>
<SparklesIcon className="h-4 w-4" />
{l ? "Drafts Generated" : "Generate Draft Variants"}
</Button>
</div>
</div>
</div>
<div className="container mx-auto px-6 py-8 flex-1">
<div className="grid grid-cols-1 lg:grid-cols-[280px_1fr_280px] gap-6">
<div className="space-y-6">
<Card className="bg-card">
<CardHeader className="pb-4">
<CardTitle className="text-base font-semibold text-foreground flex items-center gap-2">
<FolderOpenIcon className="h-4 w-4 text-primary" />
Supporting Materials
</CardTitle>
<p className="text-xs text-muted-foreground mt-1">
Select materials to ground this narrative
</p>
</CardHeader>
<CardContent className="space-y-6">
<div className="space-y-3">
<Button variant="outline" className="w-full justify-start gap-2 h-9">
<UploadIcon className="h-4 w-4" />
Upload Documents
</Button>
<div className="space-y-2">
{g7.map((v, x) => (<div className="p-3 rounded-md border border-border bg-muted/30" key={x}>
<div className="flex items-start justify-between gap-2">
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-foreground truncate">
{v.name}
</p>
<div className="flex items-center gap-2 mt-1.5">
<span className={cn("text-xs px-2 py-0.5 rounded-full", w7(v.category))}>
{v.category}
</span>
<span className="text-xs text-muted-foreground">
{v.date}
</span>
</div>
</div>
</div>
</div>))}
</div>
</div>
<div className="space-y-3">
<div className="flex items-center gap-2">
<SquareCheckBigIcon className="h-4 w-4 text-muted-foreground" />
<span className="text-sm font-medium text-foreground">
Select Approved Sources
</span>
</div>
<div className="space-y-2">
{v7.map((v) => (<div className="flex items-center gap-3 py-1" key={v.id}>
<Checkbox id={v.id} checked={i.includes(v.id)} onCheckedChange={() => h(v.id)} />
<label htmlFor={v.id} className="text-sm text-muted-foreground cursor-pointer">
{v.label}
</label>
</div>))}
</div>
</div>
</CardContent>
</Card>
</div>
<div className="space-y-6">
<div>
<div className="flex items-center gap-2 mb-2">
<FileTextIcon className="h-5 w-5 text-primary" />
<h2 className="text-lg font-semibold text-foreground">
Draft Narrative Options
</h2>
</div>
<p className="text-sm text-muted-foreground">
{l ? "Review and compare narrative options before selecting one for editing" : "Select your context and click 'Generate Draft Variants' to create narrative options"}
</p>
</div>
{l ? (<>
<div className="space-y-4">
{N0.map((v) => {
    const x = n === v.id, y = a[v.id] || v.text;
    return (<Card className={cn("bg-card transition-all duration-200", x ? "ring-2 ring-primary shadow-md" : "hover:shadow-sm")} key={v.id}>
<CardHeader className="pb-3">
<div className="flex items-start justify-between gap-4">
<div>
{x && (<div className="flex items-center gap-1.5 mb-2">
<PenLineIcon className="h-3.5 w-3.5 text-primary" />
<span className="text-xs font-medium text-primary">
Selected Draft (Editable)
</span>
</div>)}
<CardTitle className="text-base font-semibold text-foreground">
{v.label}
{" — "}
{v.sublabel}
</CardTitle>
</div>
<div className="flex items-center gap-2 shrink-0">
<span className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
{v.tone}
</span>
<span className={cn("text-xs px-2 py-1 rounded-full border", b7(v.riskLevel))}>
{"Risk: "}
{v.risk}
</span>
</div>
</div>
</CardHeader>
<CardContent className="space-y-4">
{x ? (<textarea value={y} onChange={(b) => p(v.id, b.target.value)} className="w-full min-h-[160px] p-3 text-sm text-muted-foreground leading-relaxed bg-muted/30 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none" />) : (<p className={cn("text-sm text-muted-foreground leading-relaxed", n && !x && "line-clamp-3")}>
{v.text}
</p>)}
{!x && (<Button variant="outline" size="sm" onClick={() => m(v.id)} className="gap-2">
Select This Option
</Button>)}
</CardContent>
</Card>);
  })}
</div>
<div className="pt-4">
<Button onClick={f} disabled={!n || !l} className="gap-2">
Send to Narrative Brief
<ArrowRightIcon className="h-4 w-4" />
</Button>
</div>
</>) : (<div className="flex items-center justify-center py-20 border border-dashed border-border rounded-lg bg-muted/20">
<div className="text-center">
<SparklesIcon className="h-10 w-10 text-muted-foreground/50 mx-auto mb-4" />
<p className="text-muted-foreground text-sm">
Configure your context above and generate draft variants
</p>
</div>
</div>)}
</div>
<div className="space-y-6">
<Card className="bg-card sticky top-20">
<CardHeader className="pb-4">
<CardTitle className="text-base font-semibold text-foreground flex items-center gap-2">
<ShieldIcon className="h-4 w-4 text-primary" />
Narrative Considerations
</CardTitle>
</CardHeader>
<CardContent className="space-y-6">
<div className="space-y-3">
<div className="flex items-center gap-2">
<TriangleAlertIcon className="h-4 w-4 text-warning" />
<span className="text-sm font-medium text-foreground">
Guardrail Reminders
</span>
</div>
<div className="space-y-2">
{y7.map((v, x) => (<div className="flex items-start gap-2 py-1" key={x}>
<span className="w-1.5 h-1.5 rounded-full bg-warning mt-1.5 shrink-0" />
<span className="text-sm text-muted-foreground">
{v}
</span>
</div>))}
</div>
</div>
<div className="space-y-3">
<div className="flex items-center gap-2">
<FileTextIcon className="h-4 w-4 text-muted-foreground" />
<span className="text-sm font-medium text-foreground">
Context Notes
</span>
</div>
<div className="space-y-2">
{j7.map((v, x) => (<div className="flex items-start gap-2 py-1" key={x}>
<span className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-1.5 shrink-0" />
<span className="text-sm text-muted-foreground">
{v}
</span>
</div>))}
</div>
</div>
</CardContent>
</Card>
</div>
</div>
</div>
<Vn />
</div>);
};

export const Nk = [{ id: 1, title: "Q3 2026 Earnings | Performance & Outlook", caseType: "earnings", audience: "analysts-investors", event: "earnings-call", status: "review", preparedBy: "IR Team", lastUpdated: "Jun 15, 2026", situationSummary: "Q3 2026 results reflect steady top-line growth driven by strength in Immunology, partially offset by competitive dynamics in select Oncology categories. Performance aligned with guidance and internal expectations.", approvedNarrative: "Novartis delivered solid third-quarter results, supported by disciplined execution across the portfolio. Immunology contributed meaningfully to performance, while Oncology trends reflected a competitive environment and timing-related factors. The company remains focused on balanced execution and sustained investment to support long-term value creation.", implications: ["Reinforces portfolio resilience", "Signals operational discipline", "Maintains confidence without over-indexing on short-term dynamics"], whatThisDoesNotMean: ["Does not indicate changes to full-year guidance", "Does not imply structural weakness in Oncology", "Does not suggest shifts in capital allocation priorities"], consistencyCheck: ["Aligned with prior quarter earnings disclosures", "No deviation from established guidance language"], disclosureGuardrails: ["Avoid revenue run-rate extrapolation", "Avoid speculative forward-looking commentary"] }, { id: 2, title: "Cosentyx | Product Performance & Positioning", caseType: "product", audience: "analysts-investors", event: "earnings-call", status: "approved", preparedBy: "IR Team", lastUpdated: "Jun 12, 2026", situationSummary: "Cosentyx performance reflects steady execution within the immunology portfolio, supported by consistent demand across core indications and disciplined commercialization efforts.", approvedNarrative: "Cosentyx continues to deliver steady performance within the immunology portfolio, supported by consistent demand across core indications. The product maintains a strong clinical profile and contributes meaningfully to a balanced and durable portfolio strategy.", implications: ["Reinforces stability within the immunology franchise", "Supports confidence in disciplined execution"], whatThisDoesNotMean: ["Does not imply changes to guidance", "Does not suggest comparative claims versus competitors", "Does not indicate regulatory or lifecycle timing updates"], consistencyCheck: ["Consistent with prior product disclosures", "No deviation from established positioning"], disclosureGuardrails: ["Avoid comparative efficacy or market share claims", "Avoid forward-looking assumptions"] }, { id: 3, title: "Immunology Phase 3 Trial | Data Disclosure", caseType: "clinical", audience: "analysts-investors", event: "investor-conference", status: "approved", preparedBy: "IR Team", lastUpdated: "Jun 8, 2026", situationSummary: "A Phase 3 immunology study met its primary endpoint, demonstrating statistically significant improvement versus placebo. Secondary endpoints showed directional improvement.", approvedNarrative: "The study met its primary efficacy endpoint and demonstrated a favorable safety profile. While secondary endpoints showed directional improvement, the overall dataset supports continued confidence in the program's clinical potential.", implications: ["Reinforces pipeline credibility", "Supports disciplined clinical progression"], whatThisDoesNotMean: ["Does not imply regulatory submission timing", "Does not suggest superiority versus competing therapies"], consistencyCheck: ["Aligned with prior clinical communications", "No shift in development posture"], disclosureGuardrails: ["Avoid commentary on approval probability", "Avoid comparative efficacy claims"] }, { id: 4, title: "Competitive Landscape | Immunology Update", caseType: "competitive", audience: "analysts", event: "analyst-meeting", status: "approved", preparedBy: "IR Team", lastUpdated: "May 28, 2026", situationSummary: "Recent competitor data releases have increased focus on the immunology treatment landscape, reflecting an evolving competitive environment.", approvedNarrative: "Novartis continues to monitor competitive developments closely. Individual data readouts contribute to the broader landscape, while the company remains focused on executing its differentiated immunology strategy.", implications: ["Positions the company as informed and disciplined", "Avoids reactive or speculative messaging"], whatThisDoesNotMean: ["Does not imply changes to competitive strategy", "Does not indicate near-term share shifts"], consistencyCheck: ["Aligned with prior competitive commentary", "No reactive tone introduced"], disclosureGuardrails: ["Avoid competitor timeline commentary", "Avoid speculative comparisons"] }, { id: 5, title: "Regulatory Review Timeline | Manufacturing Update", caseType: "regulatory", audience: "analysts-investors", event: "regulatory-update", status: "draft", preparedBy: "IR Team", lastUpdated: "Jun 5, 2026", situationSummary: "A regulatory authority requested additional manufacturing documentation, resulting in a modest extension of the review timeline.", approvedNarrative: "The additional request relates to manufacturing documentation and does not reflect concerns regarding safety or efficacy. The company is working closely with regulators to address the request.", implications: ["Maintains confidence in regulatory engagement", "Frames delay as procedural"], whatThisDoesNotMean: ["Does not indicate approvability concerns", "Does not imply changes to long-term outlook"], consistencyCheck: ["Consistent with prior regulatory disclosures", "No escalation in tone"], disclosureGuardrails: ["Avoid discussing revised approval timelines", "Avoid linking delay to commercial impact"] }, { id: 6, title: "Long-Term Equity Story | Portfolio Strength", caseType: "long-term-strategy", audience: "investors", event: "investor-conference", status: "approved", preparedBy: "IR Team", lastUpdated: "Apr 20, 2026", situationSummary: "Portfolio review highlights continued investment across Immunology, Oncology, and Cardiovascular, supported by disciplined capital allocation.", approvedNarrative: "Novartis's long-term equity story is anchored in portfolio diversification, disciplined capital deployment, and sustained investment in innovation to support durable growth.", implications: ["Reinforces long-term investor confidence", "Connects near-term execution to strategy"], whatThisDoesNotMean: ["Does not imply near-term financial targets", "Does not suggest changes to capital return policies"], consistencyCheck: ["Fully aligned with prior investor communications"], disclosureGuardrails: ["Avoid numerical long-term forecasts", "Avoid timeline-specific commitments"] }];

export const N7 = (e) => Nk.find((n) => n.id === e);

export const C7 = (e) => ({ earnings: "Earnings", product: "Product", clinical: "Clinical", competitive: "Competitive", regulatory: "Regulatory", "long-term-strategy": "Long-Term Strategy" })[e];

export const S7 = (e) => ({ analysts: "Analysts", investors: "Investors", "analysts-investors": "Analysts & Investors" })[e];

export const k7 = (e) => ({ "earnings-call": "Earnings Call", "investor-conference": "Investor Conference", "analyst-meeting": "Analyst Meeting", "regulatory-update": "Regulatory Update" })[e];

export const S0 = { draft: { label: "Draft", className: "bg-muted text-muted-foreground border-border", icon: FileTextIcon }, review: { label: "Review Ready", className: "bg-warning/10 text-warning border-warning/20", icon: ClockIcon }, approved: { label: "Approved", className: "bg-success/10 text-success border-success/20", icon: CircleCheckIcon } };

export const CanvasBrief = () => {
  const { id: e } = useParams();
  useNavigate();
  const { toast: n } = useToast(), s = e ? Number(e) : 1, a = N7(s) || Nk[0], [r, i] = React.useState(a), [o, l] = React.useState(r.status === "approved");
  if (!r) return (<div className="min-h-screen bg-background flex items-center justify-center">
<div className="text-center">
<h1 className="text-2xl font-semibold text-foreground mb-4">
Narrative Brief not found
</h1>
<Link to="/canvas" className="text-primary hover:underline">
← Back to Overview
</Link>
</div>
</div>);
  const c = () => {
    i((p) => ({ ...p, status: "approved" })), l(true), n({ title: "Narrative Approved", description: "This narrative is now available in Canvas Overview and History & Reuse." });
  }, u = o ? S0.approved : S0[r.status], C_m = u.icon;
  return (<div className="min-h-screen bg-background flex flex-col">
<_o />
<div className="border-b border-border bg-card/50">
<div className="container mx-auto px-6 py-4">
<div className="flex items-center gap-8 flex-wrap">
<div className="flex items-center gap-2">
<LayersIcon className="h-4 w-4 text-muted-foreground" />
<span className="text-sm text-muted-foreground">
Case Type:
</span>
<span className="text-sm font-medium text-foreground">
{C7(r.caseType)}
</span>
</div>
<div className="flex items-center gap-2">
<UsersIcon className="h-4 w-4 text-muted-foreground" />
<span className="text-sm text-muted-foreground">
Audience:
</span>
<span className="text-sm font-medium text-foreground">
{S7(r.audience)}
</span>
</div>
<div className="flex items-center gap-2">
<CalendarIcon className="h-4 w-4 text-muted-foreground" />
<span className="text-sm text-muted-foreground">
Event:
</span>
<span className="text-sm font-medium text-foreground">
{k7(r.event)}
</span>
</div>
</div>
</div>
</div>
<div className="container mx-auto px-6 py-8 flex-1">
<Link to="/canvas" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6">
<ArrowLeftIcon className="h-4 w-4" />
<span className="text-sm font-medium">
Back to Overview
</span>
</Link>
<div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8">
<div className="space-y-8">
<h1 className="text-2xl font-bold text-foreground leading-tight">
{r.title}
</h1>
<section>
<h2 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
<FileTextIcon className="h-5 w-5 text-primary" />
Situation Summary
</h2>
<p className="text-muted-foreground leading-relaxed">
{r.situationSummary}
</p>
</section>
<Separator />
<section>
<h2 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
<CircleCheckIcon className="h-5 w-5 text-primary" />
Approved Narrative
</h2>
<Card className="bg-muted/30 border-border">
<CardContent className="p-4">
<p className="text-foreground leading-relaxed">
{r.approvedNarrative}
</p>
</CardContent>
</Card>
</section>
<Separator />
<section>
<h2 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
<LightbulbIcon className="h-5 w-5 text-primary" />
Implications
</h2>
<ul className="space-y-2">
{r.implications.map((p, h) => (<li className="flex items-start gap-2 text-muted-foreground" key={h}>
<span className="text-primary mt-1">
•
</span>
<span>
{p}
</span>
</li>))}
</ul>
</section>
<Separator />
<section>
<h2 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
<CircleAlertIcon className="h-5 w-5 text-primary" />
What This Does NOT Mean
</h2>
<ul className="space-y-2">
{r.whatThisDoesNotMean.map((p, h) => (<li className="flex items-start gap-2 text-muted-foreground" key={h}>
<span className="text-destructive mt-1">
✕
</span>
<span>
{p}
</span>
</li>))}
</ul>
</section>
<Separator />
<section>
<h2 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
<CircleCheckIcon className="h-5 w-5 text-primary" />
Consistency Check
</h2>
<ul className="space-y-2">
{r.consistencyCheck.map((p, h) => (<li className="flex items-start gap-2 text-muted-foreground" key={h}>
<span className="text-success mt-1">
✓
</span>
<span>
{p}
</span>
</li>))}
</ul>
</section>
<Separator />
<section>
<h2 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
<ShieldIcon className="h-5 w-5 text-primary" />
Disclosure Guardrails
</h2>
<ul className="space-y-2">
{r.disclosureGuardrails.map((p, h) => (<li className="flex items-start gap-2 text-muted-foreground" key={h}>
<span className="text-warning mt-1">
⚠
</span>
<span>
{p}
</span>
</li>))}
</ul>
</section>
</div>
<div className="hidden lg:block">
<Card className="bg-card border-border sticky top-24">
<CardContent className="p-6 space-y-6">
<h3 className="font-semibold text-foreground">
Review Status
</h3>
<div className="flex items-center gap-2">
<C_m className="h-4 w-4" />
<Badge variant="outline" className={cn("text-sm", u.className)}>
{u.label}
</Badge>
</div>
<Separator />
<div className="space-y-2">
<div className="flex items-center gap-2 text-muted-foreground">
<UserIcon className="h-4 w-4" />
<span className="text-sm">
Prepared By
</span>
</div>
<p className="text-sm font-medium text-foreground pl-6">
{r.preparedBy}
</p>
</div>
<div className="space-y-2">
<div className="flex items-center gap-2 text-muted-foreground">
<ClockIcon className="h-4 w-4" />
<span className="text-sm">
Last Updated
</span>
</div>
<p className="text-sm font-medium text-foreground pl-6">
{r.lastUpdated}
</p>
</div>
<Separator />
{!o && r.status !== "approved" && (<Button onClick={c} className="w-full gap-2">
<CircleCheckIcon className="h-4 w-4" />
Approve Narrative
</Button>)}
{(o || r.status === "approved") && (<div className="p-4 rounded-lg bg-success/10 border border-success/20">
<div className="flex items-center gap-2 text-success">
<CircleCheckIcon className="h-4 w-4" />
<span className="text-sm font-medium">
Narrative Approved
</span>
</div>
<p className="text-xs text-muted-foreground mt-2 pl-6">
{"Available in Canvas Overview and History & Reuse"}
</p>
</div>)}
</CardContent>
</Card>
</div>
</div>
</div>
<Vn />
</div>);
};

export const pd = [{ id: 1, narrative: "Q3 2026 Earnings | Performance & Outlook", caseType: "Earnings", audience: "Analysts & Investors", event: "Earnings Call", analystQuestions: [{ question: "What drove the performance this quarter?", response: "Q3 results reflect steady top-line growth driven by strength in Immunology, partially offset by competitive dynamics in select Oncology categories", confidence: "high" }, { question: "Are there any concerns about Oncology performance?", response: "Oncology trends reflected a competitive environment and timing-related factors. We remain focused on balanced execution across the portfolio", confidence: "medium", followUpRisk: "Questions on specific product dynamics" }], investorQuestions: [{ question: "Is the full-year guidance unchanged?", response: "Performance aligned with guidance and internal expectations. We remain focused on sustained investment to support long-term value creation", confidence: "high" }], edgeScenarios: [{ scenario: "Investors interpret cautious language as signaling weakness", responseFraming: "Reinforce portfolio resilience and operational discipline without over-indexing on short-term dynamics", escalationGuidance: "Escalate if questions suggest expectation of guidance changes" }], storyPillars: ["Portfolio resilience", "Operational discipline", "Long-term value creation"], pillarAlignment: [{ pillar: "Portfolio resilience", status: "aligned" }, { pillar: "Operational discipline", status: "aligned" }, { pillar: "Long-term value creation", status: "aligned" }], consistencyNotes: ["Aligned with prior quarter earnings disclosures", "No deviation from established guidance language", "Consistent tone on competitive dynamics"] }, { id: 2, narrative: "Cosentyx | Product Performance & Positioning", caseType: "Product", audience: "Analysts & Investors", event: "Earnings Call", analystQuestions: [{ question: "How sustainable is Cosentyx's current performance?", response: "Cosentyx performance reflects consistent demand across core indications and disciplined execution. We remain focused on sustainable execution rather than short-term extrapolation", confidence: "high", followUpRisk: "Potential questions on competitive pressure" }, { question: "How should Cosentyx be viewed in an increasingly competitive immunology landscape?", response: "Immunology remains a competitive space. Our focus is on executing against Cosentyx's established clinical profile and its role within a diversified portfolio strategy", confidence: "medium" }], investorQuestions: [{ question: "How does Cosentyx fit into Novartis's long-term immunology strategy?", response: "Cosentyx is an important contributor within a broader immunology portfolio, supporting durability while the company continues to invest across the pipeline", confidence: "high" }], edgeScenarios: [{ scenario: "Investors infer slowing momentum due to conservative product language", responseFraming: "Reinforce disciplined execution and portfolio balance without reframing performance as deceleration", escalationGuidance: "No escalation unless explicitly tied to guidance changes" }], storyPillars: ["Portfolio diversification", "Innovation durability", "Disciplined capital allocation"], pillarAlignment: [{ pillar: "Portfolio diversification", status: "aligned" }, { pillar: "Innovation durability", status: "aligned" }, { pillar: "Disciplined capital allocation", status: "indirect" }], consistencyNotes: ["Tone consistent with prior quarter product disclosures", "Balanced emphasis relative to broader portfolio", "No promotional or comparative drift"] }, { id: 3, narrative: "Immunology Phase 3 Trial | Data Disclosure", caseType: "Clinical", audience: "Analysts & Investors", event: "Investor Conference", analystQuestions: [{ question: "How should the secondary endpoint results be interpreted?", response: "The study met its primary endpoint and demonstrated a favorable safety profile. Secondary endpoints showed directional improvement, and the overall dataset supports confidence in the program's clinical potential", confidence: "high" }, { question: "Does this data change regulatory expectations?", response: "We remain focused on disciplined development and do not comment on regulatory timing or submission plans", confidence: "high" }], investorQuestions: [{ question: "How meaningful is this readout for the broader pipeline?", response: "The results reinforce confidence in the immunology pipeline and our data-driven approach to advancing programs", confidence: "medium" }], edgeScenarios: [{ scenario: "Market infers approvability based solely on primary endpoint success", responseFraming: "Reiterate that development decisions consider the full dataset and established regulatory processes", escalationGuidance: "Escalate if approval probability questions arise" }], storyPillars: ["Innovation and pipeline durability", "Disciplined development execution"], pillarAlignment: [{ pillar: "Innovation durability", status: "aligned" }, { pillar: "Disciplined execution", status: "aligned" }], consistencyNotes: ["Fully aligned with prior clinical communications", "Conservative, data-first framing maintained", "No implied change to development posture"] }, { id: 4, narrative: "Competitive Landscape | Immunology Update", caseType: "Competitive", audience: "Analysts & Investors", event: "Analyst Meeting", analystQuestions: [{ question: "How do recent competitor readouts impact Novartis's immunology positioning?", response: "Individual data readouts contribute to the broader landscape. We continue to focus on executing our differentiated immunology strategy", confidence: "high" }, { question: "Are there plans to adjust competitive strategy?", response: "We remain focused on disciplined execution of our established strategy and do not comment on competitive responses", confidence: "medium", followUpRisk: "Questions on specific competitor timelines" }], investorQuestions: [{ question: "Should investors expect market share shifts?", response: "We monitor competitive developments closely while maintaining focus on long-term portfolio durability", confidence: "medium" }], edgeScenarios: [{ scenario: "Analysts interpret neutral language as defensive positioning", responseFraming: "Position the company as informed and disciplined, avoiding reactive or speculative messaging", escalationGuidance: "Escalate if specific share projections are requested" }], storyPillars: ["Portfolio diversification", "Disciplined competitive strategy", "Long-term market positioning"], pillarAlignment: [{ pillar: "Portfolio diversification", status: "aligned" }, { pillar: "Disciplined competitive strategy", status: "aligned" }, { pillar: "Long-term positioning", status: "indirect" }], consistencyNotes: ["Aligned with prior competitive commentary", "No reactive tone introduced", "Consistent with established market positioning"] }, { id: 5, narrative: "Regulatory Review Timeline | Manufacturing Update", caseType: "Regulatory", audience: "Analysts & Investors", event: "Regulatory Update", analystQuestions: [{ question: "What caused the review timeline extension?", response: "The additional request relates to manufacturing documentation and does not reflect concerns regarding safety or efficacy", confidence: "high" }, { question: "Does this affect the approval outlook?", response: "We are working closely with regulators to address the request. We do not speculate on approval timelines", confidence: "medium", followUpRisk: "Questions on revised approval dates" }], investorQuestions: [{ question: "What is the commercial impact of the delay?", response: "We remain focused on working constructively with regulators and do not link procedural timelines to commercial projections", confidence: "medium" }], edgeScenarios: [{ scenario: "Market interprets delay as indicator of approvability concerns", responseFraming: "Frame delay as procedural and maintain confidence in regulatory engagement", escalationGuidance: "Escalate if questions suggest approvability doubts" }], storyPillars: ["Regulatory discipline", "Quality-first approach", "Long-term pipeline confidence"], pillarAlignment: [{ pillar: "Regulatory discipline", status: "aligned" }, { pillar: "Quality-first approach", status: "aligned" }, { pillar: "Pipeline confidence", status: "indirect" }], consistencyNotes: ["Consistent with prior regulatory disclosures", "No escalation in tone", "Procedural framing maintained"] }, { id: 6, narrative: "Long-Term Equity Story | Portfolio Strength", caseType: "Long-Term Strategy", audience: "Analysts & Investors", event: "Investor Conference", analystQuestions: [{ question: "What are the key pillars of the long-term strategy?", response: "The long-term equity story is anchored in portfolio diversification, disciplined capital deployment, and sustained investment in innovation", confidence: "high" }, { question: "How should investors think about growth durability?", response: "Our focus on balanced execution across Immunology, Oncology, and Cardiovascular supports durable growth over the long term", confidence: "high" }], investorQuestions: [{ question: "Are there changes to capital allocation priorities?", response: "Capital allocation remains disciplined and consistent with our stated priorities. We do not comment on specific future allocations", confidence: "high" }], edgeScenarios: [{ scenario: "Investors seek specific long-term financial targets", responseFraming: "Reinforce strategic priorities without providing numerical long-term forecasts", escalationGuidance: "Escalate if specific timeline commitments are requested" }], storyPillars: ["Portfolio diversification", "Disciplined capital deployment", "Sustained innovation investment"], pillarAlignment: [{ pillar: "Portfolio diversification", status: "aligned" }, { pillar: "Disciplined capital deployment", status: "aligned" }, { pillar: "Sustained innovation investment", status: "aligned" }], consistencyNotes: ["Fully aligned with prior investor communications", "Consistent strategic messaging maintained", "No timeline-specific commitments introduced"] }];

export const hd = { high: { label: "High", className: "bg-green-100 text-green-800 border-green-200" }, medium: { label: "Medium", className: "bg-amber-100 text-amber-800 border-amber-200" }, low: { label: "Low", className: "bg-red-100 text-red-800 border-red-200" } };

export const T7 = { aligned: { icon: CircleCheckIcon, className: "text-green-600" }, indirect: { icon: TriangleAlertIcon, className: "text-amber-500" }, misaligned: { icon: TriangleAlertIcon, className: "text-red-500" } };

export const CanvasReadiness = () => {
  const [e, n] = React.useState(pd[0].id), s = pd.find((a) => a.id === e) || pd[0];
  return (<div className="min-h-screen bg-background flex flex-col">
<_o />
<div className="border-b bg-muted/30">
<div className="container mx-auto px-6 py-3">
<div className="flex items-center gap-8 text-sm">
<div className="flex items-center gap-2">
<LayersIcon className="h-4 w-4 text-muted-foreground" />
<span className="text-muted-foreground">
Narrative:
</span>
<C_le value={e.toString()} onValueChange={(a) => n(parseInt(a))}>
<SelectTrigger className="w-auto h-auto border-0 bg-transparent p-0 font-medium text-foreground focus:ring-0 focus:ring-offset-0 gap-1.5">
<C_ce />
</SelectTrigger>
<SelectContent className="bg-background border border-border shadow-lg z-50">
{pd.map((a) => (<SelectItem value={a.id.toString()} key={a.id}>
{a.narrative}
</SelectItem>))}
</SelectContent>
</C_le>
</div>
<div className="flex items-center gap-2">
<span className="text-muted-foreground">
Case Type:
</span>
<span className="font-medium text-foreground">
{s.caseType}
</span>
</div>
<div className="flex items-center gap-2">
<UsersIcon className="h-4 w-4 text-muted-foreground" />
<span className="text-muted-foreground">
Audience:
</span>
<span className="font-medium text-foreground">
{s.audience}
</span>
</div>
<div className="flex items-center gap-2">
<CalendarIcon className="h-4 w-4 text-muted-foreground" />
<span className="text-muted-foreground">
Event:
</span>
<span className="font-medium text-foreground">
{s.event}
</span>
</div>
</div>
</div>
</div>
<div className="container mx-auto px-6 py-8 flex-1">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
<div className="space-y-6">
<div>
<div className="flex items-center gap-2 mb-2">
<ShieldCheckIcon className="h-5 w-5 text-primary" />
<h2 className="text-lg font-semibold text-foreground">
External Readiness
</h2>
</div>
<p className="text-sm text-muted-foreground">
Prepare for likely questions and interpretation risks
</p>
</div>
<Card className="border border-border shadow-sm">
<CardHeader className="pb-3">
<div className="flex items-center gap-2">
<MessageSquareIcon className="h-4 w-4 text-muted-foreground" />
<CardTitle className="text-base font-medium">
Likely Analyst Questions
</CardTitle>
</div>
</CardHeader>
<CardContent className="space-y-4">
{s.analystQuestions.map((a, r) => (<div className="space-y-2" key={r}>
{r > 0 && (<Separator className="my-4" />)}
<p className="text-sm font-medium text-foreground">
{a.question}
</p>
<div className="bg-muted/50 rounded-md p-3">
<p className="text-sm text-muted-foreground leading-relaxed">
{a.response}
</p>
</div>
<div className="flex items-center gap-3 text-xs">
<div className="flex items-center gap-1.5">
<span className="text-muted-foreground">
Confidence:
</span>
<Badge variant="outline" className={hd[a.confidence].className}>
{hd[a.confidence].label}
</Badge>
</div>
{a.followUpRisk && (<div className="flex items-center gap-1.5 text-muted-foreground">
<TriangleAlertIcon className="h-3 w-3 text-amber-500" />
<span>
{a.followUpRisk}
</span>
</div>)}
</div>
</div>))}
</CardContent>
</Card>
<Card className="border border-border shadow-sm">
<CardHeader className="pb-3">
<div className="flex items-center gap-2">
<UsersIcon className="h-4 w-4 text-muted-foreground" />
<CardTitle className="text-base font-medium">
Investor Questions
</CardTitle>
</div>
</CardHeader>
<CardContent className="space-y-4">
{s.investorQuestions.map((a, r) => (<div className="space-y-2" key={r}>
{r > 0 && (<Separator className="my-4" />)}
<p className="text-sm font-medium text-foreground">
{a.question}
</p>
<div className="bg-muted/50 rounded-md p-3">
<p className="text-sm text-muted-foreground leading-relaxed">
{a.response}
</p>
</div>
<div className="flex items-center gap-1.5 text-xs">
<span className="text-muted-foreground">
Confidence:
</span>
<Badge variant="outline" className={hd[a.confidence].className}>
{hd[a.confidence].label}
</Badge>
</div>
</div>))}
</CardContent>
</Card>
<Card className="border border-border shadow-sm">
<CardHeader className="pb-3">
<div className="flex items-center gap-2">
<LightbulbIcon className="h-4 w-4 text-muted-foreground" />
<CardTitle className="text-base font-medium">
Edge / Interpretation Scenarios
</CardTitle>
</div>
</CardHeader>
<CardContent className="space-y-4">
{s.edgeScenarios.map((a, r) => (<div className="space-y-3" key={r}>
{r > 0 && (<Separator className="my-4" />)}
<div>
<p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
Scenario
</p>
<p className="text-sm text-foreground">
{a.scenario}
</p>
</div>
<div>
<p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
Response Framing
</p>
<p className="text-sm text-muted-foreground">
{a.responseFraming}
</p>
</div>
<div>
<p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
Escalation Guidance
</p>
<p className="text-sm text-muted-foreground">
{a.escalationGuidance}
</p>
</div>
</div>))}
</CardContent>
</Card>
</div>
<div className="space-y-6">
<div>
<div className="flex items-center gap-2 mb-2">
<TargetIcon className="h-5 w-5 text-primary" />
<h2 className="text-lg font-semibold text-foreground">
Internal Alignment
</h2>
</div>
<p className="text-sm text-muted-foreground">
Confirm consistency with the long-term equity story
</p>
</div>
<Card className="border border-border shadow-sm">
<CardHeader className="pb-3">
<div className="flex items-center gap-2">
<MilestoneIcon className="h-4 w-4 text-muted-foreground" />
<CardTitle className="text-base font-medium">
Long-Term Story Pillars
</CardTitle>
</div>
</CardHeader>
<CardContent>
<ul className="space-y-2">
{s.storyPillars.map((a, r) => (<li className="flex items-center gap-2 text-sm text-muted-foreground" key={r}>
<div className="w-1.5 h-1.5 rounded-full bg-primary" />
{a}
</li>))}
</ul>
</CardContent>
</Card>
<Card className="border border-border shadow-sm">
<CardHeader className="pb-3">
<div className="flex items-center gap-2">
<GitBranchIcon className="h-4 w-4 text-muted-foreground" />
<CardTitle className="text-base font-medium">
Narrative-to-Pillar Alignment
</CardTitle>
</div>
</CardHeader>
<CardContent>
<ul className="space-y-3">
{s.pillarAlignment.map((a, r) => {
    const i = T7[a.status], C_o = i.icon;
    return (<li className="flex items-center justify-between text-sm" key={r}>
<span className="text-foreground">
{a.pillar}
</span>
<div className="flex items-center gap-1.5">
<C_o className={`h-4 w-4 ${i.className}`} />
{a.status === "indirect" && (<span className="text-xs text-muted-foreground">
(indirect reference)
</span>)}
</div>
</li>);
  })}
</ul>
</CardContent>
</Card>
<Card className="border border-border shadow-sm">
<CardHeader className="pb-3">
<div className="flex items-center gap-2">
<ClipboardCheckIcon className="h-4 w-4 text-muted-foreground" />
<CardTitle className="text-base font-medium">
Consistency Notes
</CardTitle>
</div>
</CardHeader>
<CardContent>
<ul className="space-y-2">
{s.consistencyNotes.map((a, r) => (<li className="flex items-start gap-2 text-sm text-muted-foreground" key={r}>
<CircleCheckIcon className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
{a}
</li>))}
</ul>
</CardContent>
</Card>
</div>
</div>
</div>
<Vn />
</div>);
};

export const T0 = { earnings: { label: "Earnings", icon: TrendingUpIcon }, product: { label: "Product", icon: PillIcon }, clinical: { label: "Clinical / Regulatory", icon: ShieldIcon }, competitive: { label: "Competitive", icon: UsersIcon }, strategy: { label: "Long-Term Strategy", icon: TargetIcon } };

export const E7 = [{ id: 2, title: "Cosentyx | Product Performance & Positioning", caseType: "product", eventType: "earnings-call", usageStatus: "used", lastUsedContext: "Used in Earnings Call, Jun 2026", lastUpdated: "Jun 15, 2026" }, { id: 3, title: "Immunology Phase 3 Trial | Data Disclosure", caseType: "clinical", eventType: "investor-conference", usageStatus: "used", lastUsedContext: "Used in Investor Conference, Jun 2026", lastUpdated: "Jun 12, 2026" }, { id: 4, title: "Competitive Landscape | Immunology Update", caseType: "competitive", eventType: "analyst-meeting", usageStatus: "used", lastUsedContext: "Used in Analyst Meeting, May 2026", lastUpdated: "May 18, 2026" }, { id: 6, title: "Long-Term Equity Story | Portfolio Strength", caseType: "strategy", eventType: "investor-conference", usageStatus: "used", lastUsedContext: "Used in Investor Conference, Apr 2026", lastUpdated: "Apr 22, 2026" }];

export const CanvasHistory = () => {
  const e = useNavigate(), [n, s] = React.useState("all"), [a, r] = React.useState("all"), [i, o] = React.useState("all"), l = E7.filter((p) => !(n !== "all" && p.caseType !== n || a !== "all" && p.eventType !== a || i !== "all" && p.usageStatus !== i)), c = (p) => {
    e(`/canvas/brief/${p}`);
  }, u = () => {
    e("/canvas/readiness");
  }, m = () => {
    e("/canvas/narrative");
  };
  return (<div className="min-h-screen bg-background flex flex-col">
<_o />
<div className="container mx-auto px-6 py-8 flex-1 max-w-7xl">
<div>
<div className="flex flex-wrap items-center gap-4 mb-8">
<div className="flex items-center gap-2">
<span className="text-sm text-muted-foreground">
Case Type:
</span>
<C_le value={n} onValueChange={s}>
<SelectTrigger className="w-[180px] h-9 bg-card border-border">
<C_ce placeholder="All Types" />
</SelectTrigger>
<SelectContent>
<SelectItem value="all">
All Types
</SelectItem>
<SelectItem value="earnings">
Earnings
</SelectItem>
<SelectItem value="product">
Product
</SelectItem>
<SelectItem value="clinical">
Clinical / Regulatory
</SelectItem>
<SelectItem value="competitive">
Competitive
</SelectItem>
<SelectItem value="strategy">
Long-Term Strategy
</SelectItem>
</SelectContent>
</C_le>
</div>
<div className="flex items-center gap-2">
<span className="text-sm text-muted-foreground">
Event:
</span>
<C_le value={a} onValueChange={r}>
<SelectTrigger className="w-[180px] h-9 bg-card border-border">
<C_ce placeholder="All Events" />
</SelectTrigger>
<SelectContent>
<SelectItem value="all">
All Events
</SelectItem>
<SelectItem value="earnings-call">
Earnings Call
</SelectItem>
<SelectItem value="investor-conference">
Investor Conference
</SelectItem>
<SelectItem value="analyst-meeting">
Analyst Meeting
</SelectItem>
<SelectItem value="investor-update">
Investor Update
</SelectItem>
</SelectContent>
</C_le>
</div>
<div className="flex items-center gap-2">
<span className="text-sm text-muted-foreground">
Usage:
</span>
<C_le value={i} onValueChange={o}>
<SelectTrigger className="w-[180px] h-9 bg-card border-border">
<C_ce placeholder="All Statuses" />
</SelectTrigger>
<SelectContent>
<SelectItem value="all">
All Statuses
</SelectItem>
<SelectItem value="used">
Used
</SelectItem>
<SelectItem value="approved-not-used">
Approved (Not yet used)
</SelectItem>
</SelectContent>
</C_le>
</div>
</div>
{l.length > 0 ? (<div className="space-y-4">
{l.map((p) => {
    const C_h = T0[p.caseType].icon, f = T0[p.caseType].label;
    return (<Card className="bg-card border-border shadow-sm" key={p.id}>
<CardContent className="p-5">
<div className="flex items-start justify-between gap-6">
<div className="flex-1 min-w-0">
<div className="flex items-center gap-1.5 text-muted-foreground mb-2">
<C_h className="h-3.5 w-3.5" />
<span className="text-xs font-medium">
{f}
</span>
</div>
<h3 className="font-medium text-foreground mb-2">
{p.title}
</h3>
<div className="flex items-center gap-4 text-xs text-muted-foreground">
<span>
{p.lastUsedContext}
</span>
<span className="text-border">
•
</span>
<span>
{"Updated "}
{p.lastUpdated}
</span>
</div>
</div>
<div className="flex flex-col items-end gap-3">
<Badge variant="outline" className="bg-success/10 text-success border-success/20 text-xs">
<CircleCheckIcon className="h-3 w-3 mr-1" />
Approved
</Badge>
<div className="flex items-center gap-2">
<Button variant="ghost" size="sm" className="h-8 text-xs text-muted-foreground hover:text-foreground" onClick={() => c(p.id)}>
<FileTextIcon className="h-3.5 w-3.5 mr-1.5" />
View Brief
</Button>
<Button variant="ghost" size="sm" className="h-8 text-xs text-muted-foreground hover:text-foreground" onClick={u}>
<EyeIcon className="h-3.5 w-3.5 mr-1.5" />
Readiness
</Button>
<Button variant="outline" size="sm" className="h-8 text-xs" onClick={m}>
<RotateCcwIcon className="h-3.5 w-3.5 mr-1.5" />
Reuse as Starting Point
</Button>
</div>
</div>
</div>
</CardContent>
</Card>);
  })}
</div>) : (<Card className="bg-card border-border">
<CardContent className="p-12">
<p className="text-muted-foreground text-sm text-center">
Approved narratives will appear here once they are finalized
</p>
</CardContent>
</Card>)}
</div>
</div>
<Vn />
</div>);
};

export const P0 = [{ id: "prior-disclosures", name: "Prior Disclosures", icon: (<FileTextIcon className="h-4 w-4" />), sources: [{ id: "pd-1", name: "FY2025 Prior Disclosure Archive", enabled: true }, { id: "pd-2", name: "FY2024 Prior Disclosure Archive", enabled: true }, { id: "pd-3", name: "FY2023 Prior Disclosure Archive", enabled: true }, { id: "pd-4", name: "FY2022 Prior Disclosure Archive", enabled: true }, { id: "pd-5", name: "FY2021 Prior Disclosure Archive", enabled: true }] }, { id: "earnings-transcripts", name: "Earnings Transcripts", icon: (<MicIcon className="h-4 w-4" />), sources: [{ id: "et-1", name: "Q3 FY2025 Earnings Transcript", enabled: true }, { id: "et-2", name: "Q2 FY2026 Earnings Transcript", enabled: true }, { id: "et-3", name: "Q1 FY2026 Earnings Transcript", enabled: true }, { id: "et-4", name: "Q4 FY2024 Earnings Transcript", enabled: true }, { id: "et-5", name: "Q3 FY2024 Earnings Transcript", enabled: true }, { id: "et-6", name: "Q2 FY2025 Earnings Transcript", enabled: true }, { id: "et-7", name: "Q1 FY2025 Earnings Transcript", enabled: true }, { id: "et-8", name: "Q4 FY2023 Earnings Transcript", enabled: true }, { id: "et-9", name: "Q3 FY2023 Earnings Transcript", enabled: true }, { id: "et-10", name: "Q2 FY2024 Earnings Transcript", enabled: true }, { id: "et-11", name: "Q1 FY2024 Earnings Transcript", enabled: true }, { id: "et-12", name: "Q4 FY2022 Earnings Transcript", enabled: true }, { id: "et-13", name: "Q3 FY2022 Earnings Transcript", enabled: true }, { id: "et-14", name: "Q2 FY2023 Earnings Transcript", enabled: true }, { id: "et-15", name: "Q1 FY2023 Earnings Transcript", enabled: true }, { id: "et-16", name: "Q4 FY2021 Earnings Transcript", enabled: true }, { id: "et-17", name: "Q3 FY2021 Earnings Transcript", enabled: true }, { id: "et-18", name: "Q2 FY2022 Earnings Transcript", enabled: true }, { id: "et-19", name: "Q1 FY2022 Earnings Transcript", enabled: true }] }, { id: "internal-performance", name: "Internal Performance", icon: (<ChartColumnIcon className="h-4 w-4" />), sources: [{ id: "ip-1", name: "Monthly Business Review - August 2026", enabled: true }, { id: "ip-2", name: "Monthly Business Review - July 2026", enabled: true }, { id: "ip-3", name: "Monthly Business Review - June 2026", enabled: true }, { id: "ip-4", name: "Quarterly Strategic Review - Q1 2026", enabled: true }, { id: "ip-5", name: "Annual Planning Deck - FY2026", enabled: true }] }, { id: "product-lifecycle", name: "Product Lifecycle Updates", icon: (<PackageIcon className="h-4 w-4" />), sources: [{ id: "pl-1", name: "Cosentyx Label Expansion Tracker", enabled: true }, { id: "pl-2", name: "Entresto LOE Transition Plan", enabled: true }, { id: "pl-3", name: "Ianalumab Launch Readiness", enabled: true }, { id: "pl-4", name: "NVS-2113 Phase 3 Progress Report", enabled: true }, { id: "pl-5", name: "Immunology Pipeline Overview - Q2 2026", enabled: true }] }];

export const E0 = [{ id: "earnings", name: "Earnings", icon: (<TrendingUpIcon className="h-4 w-4" />), pillars: [{ id: "e-1", name: "Revenue Growth Narrative" }, { id: "e-2", name: "Margin Resilience" }, { id: "e-3", name: "Guidance Confidence" }] }, { id: "product", name: "Product", icon: (<PillIcon className="h-4 w-4" />), pillars: [{ id: "p-1", name: "Competitive Differentiation" }, { id: "p-2", name: "Market Access Momentum" }, { id: "p-3", name: "Innovation Pipeline" }] }, { id: "clinical", name: "Clinical", icon: (<ShieldIcon className="h-4 w-4" />), pillars: [{ id: "c-1", name: "Data Integrity & Rigor" }, { id: "c-2", name: "Regulatory Pathway Clarity" }] }, { id: "competitive", name: "Competitive", icon: (<SwordsIcon className="h-4 w-4" />), pillars: [{ id: "comp-1", name: "Market Leadership Position" }, { id: "comp-2", name: "Sustainable Advantages" }] }, { id: "strategy", name: "Strategy", icon: (<CompassIcon className="h-4 w-4" />), pillars: [{ id: "s-1", name: "Long-term Value Creation" }, { id: "s-2", name: "Capital Deployment Priorities" }, { id: "s-3", name: "Portfolio Transformation" }] }];

export const fd = ga.filter((e) => e.moduleAccess.canvas);

export const q7 = (e) => {
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

export const Q7 = (e) => {
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
    default:
      return e;
  }
};

export const Y7 = (e) => {
  switch (e) {
    case "active":
      return "bg-emerald-100 text-emerald-700";
    case "approved":
      return "bg-blue-100 text-blue-700";
    case "draft":
      return "bg-amber-100 text-amber-700";
    default:
      return "bg-gray-100 text-gray-600";
  }
};

export const CanvasSettings = () => {
  const [e, n] = React.useState(P0), [s, a] = React.useState(E0), [r, i] = React.useState([]), [o, l] = React.useState([]), [c, u] = React.useState(""), [m, p] = React.useState(""), [h, f] = React.useState(fd.filter((ae) => ae.status === "active").map((ae) => ae.id)), [v] = React.useState(fd.filter((ae) => ae.status === "active").map((ae) => ae.id)), [x, y] = React.useState(false), [b, g] = React.useState(null), [j, w] = React.useState(""), [C, P] = React.useState(false), [I, L] = React.useState(null), [z, R] = React.useState(""), [B, J] = React.useState(false), [X, k] = React.useState(null), [V, F] = React.useState(""), [S, E] = React.useState(false), [N, T] = React.useState(null), [_, q] = React.useState(false), [A, $] = React.useState(null), W = React.useMemo(() => {
    const ae = JSON.stringify(e) !== JSON.stringify(P0), U = JSON.stringify(s) !== JSON.stringify(E0), be = JSON.stringify([...h].sort()) !== JSON.stringify([...v].sort());
    return ae || U || be;
  }, [e, s, h, v]), ee = (ae) => {
    f((U) => U.includes(ae) ? U.filter((be) => be !== ae) : [...U, ae]);
  }, Q = (ae) => {
    i((U) => U.includes(ae) ? U.filter((be) => be !== ae) : [...U, ae]);
  }, pe = (ae) => {
    l((U) => U.includes(ae) ? U.filter((be) => be !== ae) : [...U, ae]);
  }, Te = (ae, U) => {
    n((be) => be.map((Tn) => Tn.id === ae ? { ...Tn, sources: Tn.sources.map((It) => It.id === U ? { ...It, enabled: !It.enabled } : It) } : Tn));
  }, Ce = () => {
    !b || !j.trim() || (n((ae) => ae.map((U) => U.id === b ? { ...U, sources: [...U.sources, { id: `uploaded-${Date.now()}`, name: j.trim(), enabled: true, isUploaded: true }] } : U)), xn.success(`"${j.trim()}" has been added`), y(false), w(""), g(null));
  }, Pe = () => {
    N && (n((ae) => ae.map((U) => U.id === N.categoryId ? { ...U, sources: U.sources.filter((be) => be.id !== N.sourceId) } : U)), xn.success(`"${N.sourceName}" has been removed`), E(false), T(null));
  }, Ee = () => {
    !I || !z.trim() || (a((ae) => ae.map((U) => U.id === I ? { ...U, pillars: [...U.pillars, { id: `pillar-${Date.now()}`, name: z.trim() }] } : U)), xn.success(`"${z.trim()}" has been added`), P(false), R(""), L(null));
  }, vt = () => {
    !X || !V.trim() || (a((ae) => ae.map((U) => U.id === X.caseTypeId ? { ...U, pillars: U.pillars.map((be) => be.id === X.pillarId ? { ...be, name: V.trim() } : be) } : U)), xn.success(`Pillar renamed to "${V.trim()}"`), J(false), F(""), k(null));
  }, Rt = () => {
    A && (a((ae) => ae.map((U) => U.id === A.caseTypeId ? { ...U, pillars: U.pillars.filter((be) => be.id !== A.pillarId) } : U)), xn.success(`"${A.pillarName}" has been removed`), q(false), $(null));
  }, Hn = React.useMemo(() => {
    if (!c.trim()) return e;
    const ae = c.toLowerCase();
    return e.map((U) => ({ ...U, sources: U.sources.filter((be) => be.name.toLowerCase().includes(ae)) })).filter((U) => U.sources.length > 0 || U.name.toLowerCase().includes(ae));
  }, [e, c]), Wn = React.useMemo(() => {
    if (!m.trim()) return s;
    const ae = m.toLowerCase();
    return s.map((U) => ({ ...U, pillars: U.pillars.filter((be) => be.name.toLowerCase().includes(ae)) })).filter((U) => U.pillars.length > 0 || U.name.toLowerCase().includes(ae));
  }, [s, m]), ls = () => {
    xn.success("Canvas settings saved successfully");
  };
  return (<div className="min-h-screen bg-background">
<_o />
<div className="container mx-auto px-6 py-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
<div className="space-y-6">
<Card className="border border-border">
<CardHeader className="pb-3">
<div className="flex items-center gap-2">
<DatabaseIcon className="h-5 w-5 text-muted-foreground" />
<CardTitle className="text-lg font-semibold">
Internal Sources
</CardTitle>
</div>
<p className="text-sm text-muted-foreground">
Internal materials for narrative creation and review
</p>
</CardHeader>
<CardContent className="space-y-4">
<div className="relative">
<SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
<Input placeholder="Search internal sources..." value={c} onChange={(ae) => u(ae.target.value)} className="pl-10" />
</div>
<div className="space-y-2">
{Hn.map((ae) => {
    const U = ae.sources.filter((It) => It.enabled).length, be = ae.sources.length, Tn = r.includes(ae.id);
    return (<Pu open={Tn} onOpenChange={() => Q(ae.id)} key={ae.id}>
<Eu asChild>
<div className="flex items-center justify-between p-3 rounded-lg border border-border bg-muted/30 hover:bg-muted/50 cursor-pointer transition-colors">
<div className="flex items-center gap-2">
{Tn ? (<ChevronDownIcon className="h-4 w-4 text-muted-foreground" />) : (<ChevronRightIcon className="h-4 w-4 text-muted-foreground" />)}
{ae.icon}
<span className="font-medium text-sm">
{ae.name}
</span>
</div>
<div className="flex items-center gap-2">
<span className="text-xs text-muted-foreground">
{U}
{" of "}
{be}
{" enabled"}
</span>
<Button variant="ghost" size="sm" className="h-7 w-7 p-0" onClick={(It) => {
      It.stopPropagation(), g(ae.id), y(true);
    }}>
<UploadIcon className="h-3.5 w-3.5" />
</Button>
</div>
</div>
</Eu>
<Mu className="mt-1">
<div className="ml-6 space-y-1">
{ae.sources.map((It) => (<div className="flex items-center justify-between p-2 rounded-md hover:bg-muted/30 group" key={It.id}>
<span className="text-sm text-foreground truncate flex-1 mr-2">
{It.name}
</span>
<div className="flex items-center gap-2">
<Button variant="ghost" size="sm" className="h-6 w-6 p-0 opacity-0 group-hover:opacity-100 transition-opacity" onClick={() => {
      T({ categoryId: ae.id, sourceId: It.id, sourceName: It.name }), E(true);
    }}>
<Trash2Icon className="h-3 w-3 text-muted-foreground hover:text-destructive" />
</Button>
<Switch checked={It.enabled} onCheckedChange={() => Te(ae.id, It.id)} />
</div>
</div>))}
</div>
</Mu>
</Pu>);
  })}
</div>
</CardContent>
</Card>
<Card className="border border-border">
<CardHeader className="pb-3">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<LinkIcon className="h-5 w-5 text-muted-foreground" />
<CardTitle className="text-lg font-semibold">
External Sources
</CardTitle>
</div>
<Link to="/gei/data-sources" className="text-xs text-primary hover:underline flex items-center gap-1">
Manage in External Intelligence
<ExternalLinkIcon className="h-3 w-3" />
</Link>
</div>
<p className="text-sm text-muted-foreground">
Intelligence from External Intelligence module enabled for Canvas
</p>
</CardHeader>
<CardContent className="space-y-3">
{fd.length === 0 ? (<div className="text-center py-6 text-muted-foreground text-sm">
No external sources configured for Canvas
</div>) : fd.map((ae) => (<div className="flex items-center justify-between p-3 rounded-lg border border-border bg-muted/20 hover:bg-muted/30 transition-colors" key={ae.id}>
<div className="flex-1 min-w-0 mr-4">
<div className="flex items-center gap-2 mb-1">
<span className="font-medium text-sm truncate">
{ae.name}
</span>
<span className={cn("text-[10px] font-medium px-1.5 py-0.5 rounded capitalize shrink-0", Y7(ae.status))}>
{ae.status}
</span>
</div>
<p className="text-xs text-muted-foreground truncate mb-2">
{ae.description}
</p>
<div className="flex items-center gap-1.5 flex-wrap">
{ae.createdFrom.map((U) => {
    const C_be = q7(U);
    return (<div className="flex items-center gap-1 text-[10px] text-muted-foreground bg-muted px-1.5 py-0.5 rounded" key={U}>
<C_be className="h-3 w-3" />
{Q7(U)}
</div>);
  })}
</div>
</div>
<Switch checked={h.includes(ae.id)} onCheckedChange={() => ee(ae.id)} />
</div>))}
</CardContent>
</Card>
</div>
<div>
<Card className="border border-border">
<CardHeader className="pb-3">
<div className="flex items-center gap-2">
<TargetIcon className="h-5 w-5 text-muted-foreground" />
<CardTitle className="text-lg font-semibold">
Story Pillars
</CardTitle>
</div>
<p className="text-sm text-muted-foreground">
Leadership-approved pillars that guide narrative alignment across case types
</p>
</CardHeader>
<CardContent className="space-y-4">
<div className="relative">
<SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
<Input placeholder="Search pillars..." value={m} onChange={(ae) => p(ae.target.value)} className="pl-10" />
</div>
<div className="space-y-2">
{Wn.map((ae) => {
    const U = o.includes(ae.id);
    return (<Pu open={U} onOpenChange={() => pe(ae.id)} key={ae.id}>
<Eu asChild>
<div className="flex items-center justify-between p-3 rounded-lg border border-border bg-muted/30 hover:bg-muted/50 cursor-pointer transition-colors">
<div className="flex items-center gap-2">
{U ? (<ChevronDownIcon className="h-4 w-4 text-muted-foreground" />) : (<ChevronRightIcon className="h-4 w-4 text-muted-foreground" />)}
{ae.icon}
<span className="font-medium text-sm">
{ae.name}
</span>
</div>
<div className="flex items-center gap-2">
<span className="text-xs text-muted-foreground">
{ae.pillars.length}
{" pillars"}
</span>
<Button variant="ghost" size="sm" className="h-7 w-7 p-0" onClick={(be) => {
      be.stopPropagation(), L(ae.id), P(true);
    }}>
<PlusIcon className="h-3.5 w-3.5" />
</Button>
</div>
</div>
</Eu>
<Mu className="mt-1">
<div className="ml-6 space-y-1">
{ae.pillars.map((be) => (<div className="flex items-center justify-between p-2 rounded-md hover:bg-muted/30 group" key={be.id}>
<span className="text-sm text-foreground truncate flex-1 mr-2">
{be.name}
</span>
<div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
<Button variant="ghost" size="sm" className="h-6 w-6 p-0" onClick={() => {
      k({ caseTypeId: ae.id, pillarId: be.id, currentName: be.name }), F(be.name), J(true);
    }}>
<PencilIcon className="h-3 w-3 text-muted-foreground" />
</Button>
<Button variant="ghost" size="sm" className="h-6 w-6 p-0" onClick={() => {
      $({ caseTypeId: ae.id, pillarId: be.id, pillarName: be.name }), q(true);
    }}>
<Trash2Icon className="h-3 w-3 text-muted-foreground hover:text-destructive" />
</Button>
</div>
</div>))}
</div>
</Mu>
</Pu>);
  })}
</div>
</CardContent>
</Card>
</div>
</div>
<div className="flex items-center justify-between mt-6 pt-4 border-t border-border">
<p className="text-xs text-muted-foreground">
Last updated by IR Admin on Sep 10, 2025
</p>
<Button onClick={ls} disabled={!W} className="gap-2">
<CheckIcon className="h-4 w-4" />
Save Settings
</Button>
</div>
</div>
<C_ot open={x} onOpenChange={y}>
<DialogContent>
<DialogHeader>
<DialogTitle>
Add New Source
</DialogTitle>
<DialogDescription>
Add a new source to the selected category
</DialogDescription>
</DialogHeader>
<div className="space-y-4 py-4">
<div className="space-y-2">
<label className="text-sm font-medium">
Source Name
</label>
<Input placeholder="Enter source name..." value={j} onChange={(ae) => w(ae.target.value)} />
</div>
<div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
<UploadIcon className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
<p className="text-sm text-muted-foreground">
Drag and drop a file here, or click to browse
</p>
</div>
</div>
<DialogFooter>
<Button variant="outline" onClick={() => y(false)}>
Cancel
</Button>
<Button onClick={Ce} disabled={!j.trim()}>
Add Source
</Button>
</DialogFooter>
</DialogContent>
</C_ot>
<C_ot open={C} onOpenChange={P}>
<DialogContent>
<DialogHeader>
<DialogTitle>
Add New Pillar
</DialogTitle>
<DialogDescription>
Add a new story pillar to the selected case type
</DialogDescription>
</DialogHeader>
<div className="space-y-4 py-4">
<div className="space-y-2">
<label className="text-sm font-medium">
Pillar Name
</label>
<Input placeholder="Enter pillar name..." value={z} onChange={(ae) => R(ae.target.value)} />
</div>
</div>
<DialogFooter>
<Button variant="outline" onClick={() => P(false)}>
Cancel
</Button>
<Button onClick={Ee} disabled={!z.trim()}>
Add Pillar
</Button>
</DialogFooter>
</DialogContent>
</C_ot>
<C_ot open={B} onOpenChange={J}>
<DialogContent>
<DialogHeader>
<DialogTitle>
Rename Pillar
</DialogTitle>
<DialogDescription>
Enter a new name for the pillar
</DialogDescription>
</DialogHeader>
<div className="space-y-4 py-4">
<div className="space-y-2">
<label className="text-sm font-medium">
Pillar Name
</label>
<Input placeholder="Enter pillar name..." value={V} onChange={(ae) => F(ae.target.value)} />
</div>
</div>
<DialogFooter>
<Button variant="outline" onClick={() => J(false)}>
Cancel
</Button>
<Button onClick={vt} disabled={!V.trim()}>
Rename
</Button>
</DialogFooter>
</DialogContent>
</C_ot>
<Ru open={S} onOpenChange={E}>
<AlertDialogContent>
<AlertDialogHeader>
<AlertDialogTitle>
Delete Source
</AlertDialogTitle>
<AlertDialogDescription>
Are you sure you want to delete "
{N == null ? void 0 : N.sourceName}
"? This action cannot be undone.
</AlertDialogDescription>
</AlertDialogHeader>
<AlertDialogFooter>
<AlertDialogCancel>
Cancel
</AlertDialogCancel>
<AlertDialogAction onClick={Pe} className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
Delete
</AlertDialogAction>
</AlertDialogFooter>
</AlertDialogContent>
</Ru>
<Ru open={_} onOpenChange={q}>
<AlertDialogContent>
<AlertDialogHeader>
<AlertDialogTitle>
Delete Pillar
</AlertDialogTitle>
<AlertDialogDescription>
Are you sure you want to delete "
{A == null ? void 0 : A.pillarName}
"? This action cannot be undone.
</AlertDialogDescription>
</AlertDialogHeader>
<AlertDialogFooter>
<AlertDialogCancel>
Cancel
</AlertDialogCancel>
<AlertDialogAction onClick={Rt} className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
Delete
</AlertDialogAction>
</AlertDialogFooter>
</AlertDialogContent>
</Ru>
</div>);
};
