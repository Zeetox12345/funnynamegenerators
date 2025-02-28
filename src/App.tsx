import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Import individual generator pages
import CabinGenerator from "./pages/generators/CabinGenerator";
import WarriorGenerator from "./pages/generators/WarriorGenerator";
import BatmanGenerator from "./pages/generators/BatmanGenerator";
import StrawberryGenerator from "./pages/generators/StrawberryGenerator";
import AxolotlGenerator from "./pages/generators/AxolotlGenerator";
import BaitGenerator from "./pages/generators/BaitGenerator";
import CafeGenerator from "./pages/generators/CafeGenerator";
import BMWGenerator from "./pages/generators/BMWGenerator";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <div className="w-full min-h-screen">
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            
            {/* Individual generator routes */}
            <Route path="/cabin" element={<CabinGenerator />} />
            <Route path="/warrior" element={<WarriorGenerator />} />
            <Route path="/batman" element={<BatmanGenerator />} />
            <Route path="/strawberry" element={<StrawberryGenerator />} />
            <Route path="/axolotl" element={<AxolotlGenerator />} />
            <Route path="/bait" element={<BaitGenerator />} />
            <Route path="/cafe" element={<CafeGenerator />} />
            <Route path="/bmw" element={<BMWGenerator />} />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
