import { Card } from "@/components/ui/card";
import { ArrowRight, ArrowUp, Database, GraduationCap, Palette, Radar, type LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

const flow = ["Sense", "Shape", "Prepare"];

const modules: { name: string; path: string; icon: LucideIcon; headline: string; description: string }[] = [
  {
    name: "Radar",
    path: "/radar",
    icon: Radar,
    headline: "Sense external signals that matter",
    description: "External signals shaping investor perception and market expectations",
  },
  {
    name: "Canvas",
    path: "/canvas",
    icon: Palette,
    headline: "Shape disclosure-safe investor narratives",
    description: "Earnings narratives, investor and conference briefings",
  },
  {
    name: "Coach",
    path: "/coach",
    icon: GraduationCap,
    headline: "Prepare and rehearse executive readiness",
    description: "Practice prepared remarks and simulated analyst interactions with readiness feedback",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold mb-4">IR Co-Pilot</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A unified AI-powered platform for end-to-end Investor Relations workflows from market awareness to
            executive readiness
          </p>
        </div>

        <div className="flex items-center justify-center gap-3 mb-10">
          {flow.map((step, i) => (
            <div key={step} className="flex items-center gap-3">
              <span className="px-5 py-2 rounded-full bg-muted text-lg font-medium">{step}</span>
              {i < flow.length - 1 && <ArrowRight className="h-4 w-4 text-primary" />}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {modules.map(({ name, path, icon: Icon, headline, description }, i) => (
            <Card
              key={name}
              className={`p-6 flex flex-col card-hover animate-fade-in-up ${["", "animation-delay-100", "animation-delay-200"][i] ?? ""}`}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                  <Icon className="h-5 w-5" />
                </div>
                <h2 className="text-xl font-semibold">{name}</h2>
              </div>
              <h3 className="font-medium mb-2">{headline}</h3>
              <p className="text-sm text-muted-foreground mb-5 flex-1">{description}</p>
              <Link to={path} className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline">
                Enter {name} <ArrowRight className="h-4 w-4" />
              </Link>
            </Card>
          ))}
        </div>

        {/* Connector between modules and GEI */}
        <div className="hidden md:grid grid-cols-3 h-20 rounded-b-2xl bg-gradient-to-b from-transparent to-primary/10 items-start justify-items-center pt-2">
          {modules.map((m) => (
            <ArrowUp key={m.name} className="h-8 w-8 text-primary/40" />
          ))}
        </div>

        <Card className="p-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
              <Database className="h-5 w-5" />
            </div>
            <h2 className="text-xl font-semibold">Governed External Intelligence</h2>
          </div>
          <h3 className="font-medium mb-2">A trusted intelligence foundation for IR decision-making</h3>
          <p className="text-sm text-muted-foreground max-w-3xl mx-auto mb-4">
            Curated and governed external signals across analysts, media, social narratives, competitors, and markets
            that power IR Co-Pilot
          </p>
          <Link to="/gei" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline">
            Enter GEI <ArrowRight className="h-4 w-4" />
          </Link>
          <p className="text-xs text-muted-foreground mt-3">Curated • Governed • Reusable</p>
        </Card>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-muted-foreground text-center">
          <span>Designed as a single connected platform</span>
          <span>Shared intelligence foundation across modules</span>
          <span>Built for governance, traceability &amp; enterprise readiness</span>
        </div>
      </div>
    </div>
  );
}
