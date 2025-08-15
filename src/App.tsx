import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ParisItinerary from "./pages/ParisItinerary";
import ThailandItinerary from "./pages/ThailandItinerary";
import JapanItinerary from "./pages/JapanItinerary";
import SriLankaItinerary from "./pages/SriLankaItinerary";
import PhilippinesItinerary from "./pages/PhilippinesItinerary";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/paris-itinerary" element={<ParisItinerary />} />
          <Route path="/thailand-itinerary" element={<ThailandItinerary />} />
          <Route path="/japan-itinerary" element={<JapanItinerary />} />
          <Route path="/srilanka-itinerary" element={<SriLankaItinerary />} />
          <Route path="/philippines-itinerary" element={<PhilippinesItinerary />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
