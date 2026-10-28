import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "@/components/NavBar";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import ModulePlaceholder from "./pages/ModulePlaceholder";
import Personas from "./pages/Personas";
import Library from "./pages/Library";
import Settings from "./pages/Settings";
import SessionCreation from "./pages/SessionCreation";
import SessionWorkspace from "./pages/SessionWorkspace";
import SessionReport from "./pages/SessionReport";
import IRHub from "./pages/IRHub";
import AdminCenter from "./pages/AdminCenter";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coach" element={<Dashboard />} />
          <Route path="/radar" element={<ModulePlaceholder title="Radar" tagline="Sense external signals that matter" />} />
          <Route path="/canvas" element={<ModulePlaceholder title="Canvas" tagline="Shape disclosure-safe investor narratives" />} />
          <Route path="/gei" element={<ModulePlaceholder title="Governed External Intelligence" tagline="A trusted intelligence foundation for IR decision-making" />} />
          <Route path="/personas" element={<Personas />} />
          <Route path="/library" element={<Library />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/session/new" element={<SessionCreation />} />
          <Route path="/session/workspace/:id" element={<SessionWorkspace />} />
          <Route path="/session/report/:id" element={<SessionReport />} />
          <Route path="/irhub" element={<IRHub />} />
          <Route path="/admin" element={<AdminCenter />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
