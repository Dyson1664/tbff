import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import { AppRouter } from "./router";
import LandingPage from "./pages/LandingPage";
import ParisItinerary from "./pages/ParisItinerary";
import ThailandItinerary from "./pages/ThailandItinerary";
import JapanItinerary from "./pages/JapanItinerary";
import SriLankaItinerary from "./pages/SriLankaItinerary";
import PhilippinesItinerary from "./pages/PhilippinesItinerary";
import FranceDestination from "./pages/FranceDestination";
import ThailandDestination from "./pages/ThailandDestination";
import JapanDestination from "./pages/JapanDestination";
import SriLankaDestination from "./pages/SriLankaDestination";
import PhilippinesDestination from "./pages/PhilippinesDestination";
import ColombiaDestination from "./pages/ColombiaDestination";
import IndiaDestination from "./pages/IndiaDestination";
import VietnamDestination from "./pages/VietnamDestination";
import BhutanDestination from "./pages/BhutanDestination";
import IndiaItinerary from "./pages/IndiaItinerary";
import AboutUs from "./pages/AboutUs";
import PreDepartureInfo from "./pages/PreDepartureInfo";
import TravelSafety from "./pages/TravelSafety";
import FAQs from "./pages/FAQs";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AppRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          
          {/* Destination Pages */}
          <Route path="/france" element={<FranceDestination />} />
          <Route path="/thailand" element={<ThailandDestination />} />
          <Route path="/japan" element={<JapanDestination />} />
          <Route path="/srilanka" element={<SriLankaDestination />} />
          <Route path="/philippines" element={<PhilippinesDestination />} />
          <Route path="/colombia" element={<ColombiaDestination />} />
          <Route path="/india" element={<IndiaDestination />} />
          <Route path="/vietnam" element={<VietnamDestination />} />
          <Route path="/bhutan" element={<BhutanDestination />} />
          
          {/* Individual Trip Pages */}
          <Route path="/paris-itinerary" element={<ParisItinerary />} />
          <Route path="/thailand-itinerary" element={<ThailandItinerary />} />
          <Route path="/japan-itinerary" element={<JapanItinerary />} />
          <Route path="/srilanka-itinerary" element={<SriLankaItinerary />} />
          <Route path="/philippines-itinerary" element={<PhilippinesItinerary />} />
          <Route path="/india-itinerary" element={<IndiaItinerary />} />
          
          {/* Static Pages */}
          <Route path="/about" element={<AboutUs />} />
          <Route path="/pre-departure" element={<PreDepartureInfo />} />
          <Route path="/travel-safety" element={<TravelSafety />} />
          <Route path="/faqs" element={<FAQs />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AppRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
