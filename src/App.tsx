
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import PlanningPage from "./pages/PlanningPage";
import HistoriquePage from "./pages/HistoriquePage";
import FacturesPage from "./pages/FacturesPage";
import CreditImpotPage from "./pages/CreditImpotPage";
import ProfilPage from "./pages/ProfilPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/planning" element={<PlanningPage />} />
          <Route path="/historique" element={<HistoriquePage />} />
          <Route path="/factures" element={<FacturesPage />} />
          <Route path="/credit-impot" element={<CreditImpotPage />} />
          <Route path="/profil" element={<ProfilPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
