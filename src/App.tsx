import { lazy, Suspense, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ContactBubble } from "@/components/ContactBubble";
import { ScrollToTop } from "@/components/ScrollToTop";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { logEventI18nAudit } from "@/lib/i18nAudit";

// Lazy load pages for better performance
const Index = lazy(() => import("./pages/Index"));
const Actualites = lazy(() => import("./pages/Actualites"));
const NosChambres = lazy(() => import("./pages/NosChambres"));
const Seminaires = lazy(() => import("./pages/Seminaires"));
const Contact = lazy(() => import("./pages/Contact"));
const Localisation = lazy(() => import("./pages/Localisation"));
const PetitDejeuner = lazy(() => import("./pages/PetitDejeuner"));
const ReservationSeminaire = lazy(() => import("./pages/ReservationSeminaire"));
const Enfoires2026 = lazy(() => import("./pages/Enfoires2026"));
const Tournoi6Nations = lazy(() => import("./pages/Tournoi6Nations"));
const SalonAgriculture = lazy(() => import("./pages/SalonAgriculture"));
const MikaConcert = lazy(() => import("./pages/MikaConcert"));
const ClaraLucianiConcert = lazy(() => import("./pages/ClaraLucianiConcert"));
const SemiMarathonParis = lazy(() => import("./pages/SemiMarathonParis"));
const WuTangConcert = lazy(() => import("./pages/WuTangConcert"));
const FranceAngleterre = lazy(() => import("./pages/FranceAngleterre"));
const GunsNRosesConcert = lazy(() => import("./pages/GunsNRosesConcert"));
const ScorpionsConcert = lazy(() => import("./pages/ScorpionsConcert"));
const MerylConcert = lazy(() => import("./pages/MerylConcert"));
const KeryJamesConcert = lazy(() => import("./pages/KeryJamesConcert"));
const OrelsanConcert = lazy(() => import("./pages/OrelsanConcert"));
const IndochineConcert = lazy(() => import("./pages/IndochineConcert"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

// Loading fallback
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

const App = () => {
  useEffect(() => {
    logEventI18nAudit();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ScrollToTop />
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/nos-chambres" element={<NosChambres />} />
                <Route path="/seminaires" element={<Seminaires />} />
                <Route path="/petit-dejeuner" element={<PetitDejeuner />} />
                <Route path="/reservation-seminaire" element={<ReservationSeminaire />} />
                <Route path="/evenements" element={<Actualites />} />
                <Route path="/evenements/enfoires-2026" element={<Enfoires2026 />} />
                <Route path="/evenements/tournoi-6-nations" element={<Tournoi6Nations />} />
                <Route path="/evenements/salon-agriculture" element={<SalonAgriculture />} />
                <Route path="/evenements/mika-concert" element={<MikaConcert />} />
                <Route path="/evenements/clara-luciani-concert" element={<ClaraLucianiConcert />} />
                <Route path="/evenements/semi-marathon-paris" element={<SemiMarathonParis />} />
                <Route path="/evenements/wu-tang-concert" element={<WuTangConcert />} />
                <Route path="/evenements/france-angleterre" element={<FranceAngleterre />} />
                <Route path="/evenements/guns-n-roses-concert" element={<GunsNRosesConcert />} />
                <Route path="/evenements/scorpions-concert" element={<ScorpionsConcert />} />
                <Route path="/evenements/meryl-concert" element={<MerylConcert />} />
                <Route path="/evenements/kery-james-concert" element={<KeryJamesConcert />} />
                <Route path="/evenements/orelsan-concert" element={<OrelsanConcert />} />
                <Route path="/evenements/indochine-concert" element={<IndochineConcert />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/localisation" element={<Localisation />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
            <ContactBubble />
          </BrowserRouter>
        </TooltipProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
};

export default App;
