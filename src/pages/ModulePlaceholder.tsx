import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ModulePlaceholderProps {
  title: string;
  tagline: string;
}

// Temporary screen for IR Co-Pilot modules that are not built yet.
export default function ModulePlaceholder({ title, tagline }: ModulePlaceholderProps) {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">{title}</h1>
          <p className="text-muted-foreground">{tagline}</p>
        </div>
        <Card className="p-10 text-center">
          <Badge variant="secondary" className="mb-3">Coming soon</Badge>
          <p className="text-sm text-muted-foreground">This section is being set up.</p>
        </Card>
      </div>
    </div>
  );
}
