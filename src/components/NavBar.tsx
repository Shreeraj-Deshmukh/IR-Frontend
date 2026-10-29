import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Settings2 } from "lucide-react";
import { cn } from "@/lib/utils";

const modules = [
  { path: "/radar", label: "Radar" },
  { path: "/canvas", label: "Canvas" },
  { path: "/coach", label: "Coach" },
];

const coachNav = [
  { path: "/coach", label: "Dashboard" },
  { path: "/personas", label: "Personas" },
  { path: "/library", label: "Library" },
  { path: "/session/workspace/1", label: "Workspace" },
  { path: "/session/report/1", label: "Reports" },
  { path: "/irhub", label: "IR Data Hub" },
  { path: "/settings", label: "Settings" },
];

const coachPrefixes = ["/coach", "/personas", "/library", "/session", "/irhub", "/settings"];

const isCoachPath = (pathname: string) =>
  coachPrefixes.some((p) => pathname === p || pathname.startsWith(`${p}/`));

export function NavBar() {
  const { pathname } = useLocation();
  const inCoach = isCoachPath(pathname);

  return (
    <header className="bg-card">
      <nav className="border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 items-center h-16">
            <Link to="/" className="text-xl font-bold">
              IR Co-Pilot
            </Link>

            <div className="hidden md:flex items-center justify-center gap-1">
              {modules.map((item) => {
                const isActive = item.path === "/coach" ? inCoach : pathname.startsWith(item.path);
                return (
                  <Link key={item.path} to={item.path}>
                    <Button
                      variant="ghost"
                      size="sm"
                      className={cn("text-base", isActive && "bg-blue-50 text-blue-600 font-semibold")}
                    >
                      {item.label}
                    </Button>
                  </Link>
                );
              })}
            </div>

            <div className="flex justify-end">
              <Link to="/admin">
                <Button
                  variant="ghost"
                  size="sm"
                  className={cn("gap-2 text-base", pathname === "/admin" && "bg-blue-50 text-blue-600 font-semibold")}
                >
                  <Settings2 className="h-4 w-4" />
                  Admin
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {inCoach && (
        <div className="border-b bg-muted/30">
          <div className="container mx-auto px-4 flex items-center gap-6 h-11">
            <div className="flex flex-1 items-center justify-evenly overflow-x-auto">
              {coachNav.map((item) => (
                <Link key={item.path} to={item.path}>
                  <Button
                    variant="ghost"
                    size="sm"
                    className={cn(
                      "text-sm whitespace-nowrap",
                      pathname === item.path && "bg-blue-50 text-blue-600 font-semibold"
                    )}
                  >
                    {item.label}
                  </Button>
                </Link>
              ))}
            </div>
            <Link to="/">
              <Button
                variant="ghost"
                size="sm"
                className="gap-2 text-sm whitespace-nowrap text-muted-foreground hover:text-foreground"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to IR Co Pilot
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
