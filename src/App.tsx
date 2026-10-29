import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "@/components/NavBar";
import { ScrollToTop } from "@/components/ScrollToTop";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Personas from "./pages/Personas";
import Library from "./pages/Library";
import Settings from "./pages/Settings";
import SessionCreation from "./pages/SessionCreation";
import SessionWorkspace from "./pages/SessionWorkspace";
import SessionReport from "./pages/SessionReport";
import IRHub from "./pages/IRHub";
import AdminCenter from "./pages/AdminCenter";
import { RadarOverview, RadarHeatMap, RadarSignalSetup, RadarHistory, RadarSettings, RadarSignalDetail } from "./ir/radar";
import { CanvasOverview, CanvasNarrative, CanvasBrief, CanvasReadiness, CanvasHistory, CanvasSettings } from "./ir/canvas";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coach" element={<Dashboard />} />
          <Route path="/radar" element={<RadarOverview />} />
          <Route path="/radar/heatmap" element={<RadarHeatMap />} />
          <Route path="/radar/setup" element={<RadarSignalSetup />} />
          <Route path="/radar/history" element={<RadarHistory />} />
          <Route path="/radar/settings" element={<RadarSettings />} />
          <Route path="/radar/signal/:id" element={<RadarSignalDetail />} />
          <Route path="/canvas" element={<CanvasOverview />} />
          <Route path="/canvas/narrative" element={<CanvasNarrative />} />
          <Route path="/canvas/narrative/:id" element={<CanvasNarrative />} />
          <Route path="/canvas/brief" element={<CanvasBrief />} />
          <Route path="/canvas/brief/:id" element={<CanvasBrief />} />
          <Route path="/canvas/readiness" element={<CanvasReadiness />} />
          <Route path="/canvas/history" element={<CanvasHistory />} />
          <Route path="/canvas/settings" element={<CanvasSettings />} />
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
