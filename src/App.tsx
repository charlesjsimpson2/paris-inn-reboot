import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ContactBubble } from "@/components/ContactBubble";
import { ScrollToTop } from "@/components/ScrollToTop";
import Index from "./pages/Index";
import Actualites from "./pages/Actualites";
import NosChambres from "./pages/NosChambres";
import Seminaires from "./pages/Seminaires";
import Contact from "./pages/Contact";
import Localisation from "./pages/Localisation";
import PetitDejeuner from "./pages/PetitDejeuner";
import ReservationSeminaire from "./pages/ReservationSeminaire";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/nos-chambres" element={<NosChambres />} />
          <Route path="/seminaires" element={<Seminaires />} />
          <Route path="/petit-dejeuner" element={<PetitDejeuner />} />
          <Route path="/reservation-seminaire" element={<ReservationSeminaire />} />
          <Route path="/actualites" element={<Actualites />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/localisation" element={<Localisation />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ContactBubble />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
