import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Brain, Building2, FileText, MessageSquare, Send, Sparkles, Target } from "lucide-react";
import { cn } from "@/lib/utils";
import { getPersona, personas } from "@/data/personas";

const referenceDocs = ["Novartis Q2 2026 Earnings Transcript", "Novartis Pipeline & Product Summary"];

interface AnalystQAPanelProps {
  personaId: number;
  onPersonaChange: (id: number) => void;
}

// Presentation-only: layout for the persona-led Analyst Q&A session (no live chat wired up yet).
export function AnalystQAPanel({ personaId, onPersonaChange }: AnalystQAPanelProps) {
  const persona = getPersona(personaId);
  const difficultyColor =
    persona.difficulty >= 8 ? "text-destructive" : persona.difficulty >= 5 ? "text-warning" : "text-success";

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      {/* Left: persona */}
      <div className="lg:col-span-3 space-y-4">
        <Card className="p-5">
          <h3 className="font-semibold mb-4 flex items-center gap-2">
            <Brain className="h-4 w-4 text-primary" />
            Persona Profile
          </h3>
          <div className="flex items-start justify-between">
            <div>
              <p className="font-semibold text-lg leading-tight">{persona.name}</p>
              <div className="flex items-center gap-1.5 mt-1 text-xs text-muted-foreground">
                <Building2 className="h-3.5 w-3.5" />
                {persona.firm}
              </div>
            </div>
            <span className={cn("text-xl font-bold", difficultyColor)}>{persona.difficulty}/10</span>
          </div>

          <p className="text-xs font-medium text-muted-foreground mt-5 mb-2">Focus Areas</p>
          <ul className="space-y-1.5">
            {persona.focusAreas.map((area) => (
              <li key={area} className="text-sm flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                {area}
              </li>
            ))}
          </ul>

          <p className="text-xs font-medium text-muted-foreground mt-5 mb-2">Style Tags</p>
          <div className="flex flex-wrap gap-2">
            {persona.style.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </Card>

        <Card className="p-5">
          <h3 className="font-semibold mb-3 flex items-center gap-2">
            <Brain className="h-4 w-4 text-primary" />
            Select Persona to Chat
          </h3>
          <Select value={String(persona.id)} onValueChange={(v) => onPersonaChange(Number(v))}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {personas.map((p) => (
                <SelectItem key={p.id} value={String(p.id)}>
                  {p.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </Card>
      </div>

      {/* Center: live interaction */}
      <div className="lg:col-span-6">
        <Card className="p-6 flex flex-col h-[640px]">
          <h3 className="font-semibold mb-4 flex items-center gap-2">
            <MessageSquare className="h-4 w-4 text-primary" />
            Live Interaction
          </h3>
          <div className="flex-1 flex items-center justify-center">
            <div className="max-w-md rounded-xl bg-primary/5 border border-primary/10 px-6 py-5 text-center">
              <p className="text-sm italic text-muted-foreground leading-relaxed">
                Hi, I'm {persona.name} from {persona.firm}. Share your opening statement or begin with your guidance
                framework.
              </p>
            </div>
          </div>
          <div className="flex gap-2 pt-3 border-t">
            <Input placeholder="Type your response..." className="flex-1" />
            <Button size="icon" aria-label="Send">
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </Card>
      </div>

      {/* Right: summary */}
      <div className="lg:col-span-3 space-y-4">
        <Card className="p-5">
          <h3 className="font-semibold mb-2 flex items-center gap-2">
            <Target className="h-4 w-4 text-primary" />
            Session Summary
          </h3>
          <p className="text-sm text-muted-foreground">Metrics will appear after your first response</p>
        </Card>

        <Card className="p-5">
          <h3 className="font-semibold mb-2 flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-primary" />
            Key Themes
          </h3>
          <p className="text-sm text-muted-foreground">Themes will appear after each exchange</p>
        </Card>

        <Card className="p-5">
          <h3 className="font-semibold mb-3 flex items-center gap-2">
            <FileText className="h-4 w-4 text-primary" />
            Reference Snapshot
          </h3>
          <ul className="space-y-3">
            {referenceDocs.map((doc) => (
              <li key={doc} className="flex items-start gap-2 text-sm">
                <FileText className="h-4 w-4 mt-0.5 text-muted-foreground flex-shrink-0" />
                {doc}
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </div>
  );
}
