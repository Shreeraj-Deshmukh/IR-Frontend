import { PersonaCard } from "@/components/PersonaCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Filter } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { personas } from "@/data/personas";

export default function Personas() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8 flex items-start justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Analyst Personas</h1>
            <p className="text-muted-foreground">
              AI-powered analyst simulations trained on 5+ years of Novartis and peer earnings call transcripts
            </p>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search personas" className="pl-10" />
          </div>
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            Filters
          </Button>
        </div>

        {/* Quick Filters */}
        <div className="flex flex-wrap gap-2 mb-6">
          <Badge variant="outline" className="cursor-pointer hover:bg-secondary">All Personas</Badge>
          <Badge variant="outline" className="cursor-pointer hover:bg-secondary">High Difficulty (8+)</Badge>
          <Badge variant="outline" className="cursor-pointer hover:bg-secondary">Pipeline Focus</Badge>
          <Badge variant="outline" className="cursor-pointer hover:bg-secondary">Financial Focus</Badge>
          <Badge variant="outline" className="cursor-pointer hover:bg-secondary">Strategic Focus</Badge>
        </div>

        {/* Personas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {personas.map((persona) => (
            <PersonaCard
              key={persona.id}
              {...persona}
              onAdd={() => navigate(`/session/workspace/1?tab=analyst&persona=${persona.id}`)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}