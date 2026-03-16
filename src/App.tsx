import { lazy, Suspense, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ContactBubble } from "@/components/ContactBubble";
import { FloatingNatureElements } from "@/components/FloatingNatureElements";
import { ScrollToTop } from "@/components/ScrollToTop";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { AuthProvider } from "@/contexts/AuthContext";
import { logEventI18nAudit } from "@/lib/i18nAudit";
import ProtectedRoute from "@/components/admin/ProtectedRoute";

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
const SalonCSEMars = lazy(() => import("./pages/SalonCSEMars"));
const SalonCSESeptembre = lazy(() => import("./pages/SalonCSESeptembre"));
const FoireDeParis = lazy(() => import("./pages/FoireDeParis"));
const SanteExpo = lazy(() => import("./pages/SanteExpo"));
const EuroPCR = lazy(() => import("./pages/EuroPCR"));
const Eurosatory = lazy(() => import("./pages/Eurosatory"));
const JapanExpo = lazy(() => import("./pages/JapanExpo"));
const TexWorld = lazy(() => import("./pages/TexWorld"));
const SIAL = lazy(() => import("./pages/SIAL"));
const VingtKmParis = lazy(() => import("./pages/VingtKmParis"));
const MarathonParis = lazy(() => import("./pages/MarathonParis"));
const Equiphotel = lazy(() => import("./pages/Equiphotel"));
const CongresACCDOM = lazy(() => import("./pages/CongresACCDOM"));
const CongresMaires = lazy(() => import("./pages/CongresMaires"));
const DecouvrirParis = lazy(() => import("./pages/DecouvrirParis"));
const QuartierChinois = lazy(() => import("./pages/QuartierChinois"));
const ButteAuxCailles = lazy(() => import("./pages/ButteAuxCailles"));
const BnfFrancoisMitterrand = lazy(() => import("./pages/BnfFrancoisMitterrand"));
const CentreItalie2 = lazy(() => import("./pages/CentreItalie2"));
const CuisineItalienne = lazy(() => import("./pages/CuisineItalienne"));
const CuisineAsiatique = lazy(() => import("./pages/CuisineAsiatique"));
const CuisineFrancaise = lazy(() => import("./pages/CuisineFrancaise"));
const StreetFood = lazy(() => import("./pages/StreetFood"));
const ValidationReservationSeminaire = lazy(() => import("./pages/ValidationReservationSeminaire"));
const MentionsLegales = lazy(() => import("./pages/MentionsLegales"));
const WiFiPage = lazy(() => import("./pages/WiFi"));
const AdminLogin = lazy(() => import("./pages/admin/Login"));
const AdminDashboard = lazy(() => import("./pages/admin/Dashboard"));
const AdminArticles = lazy(() => import("./pages/admin/Articles"));
const AdminArticleEditor = lazy(() => import("./pages/admin/ArticleEditor"));
const AdminMedia = lazy(() => import("./pages/admin/Media"));
const AdminSEO = lazy(() => import("./pages/admin/SEO"));
const AdminUsers = lazy(() => import("./pages/admin/Users"));
const AdminSettings = lazy(() => import("./pages/admin/Settings"));
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
            <AuthProvider>
              <Suspense fallback={<PageLoader />}>
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/nos-chambres" element={<NosChambres />} />
                  <Route path="/seminaires" element={<Seminaires />} />
                  <Route path="/petit-dejeuner" element={<PetitDejeuner />} />
                  <Route path="/reservation-seminaire" element={<ReservationSeminaire />} />
                  <Route path="/validation-reservation-seminaire" element={<ValidationReservationSeminaire />} />
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
                  <Route path="/evenements/salon-cse-mars" element={<SalonCSEMars />} />
                  <Route path="/evenements/salon-cse-septembre" element={<SalonCSESeptembre />} />
                  <Route path="/evenements/foire-de-paris" element={<FoireDeParis />} />
                  <Route path="/evenements/sante-expo" element={<SanteExpo />} />
                  <Route path="/evenements/euro-pcr" element={<EuroPCR />} />
                  <Route path="/evenements/eurosatory" element={<Eurosatory />} />
                  <Route path="/evenements/japan-expo" element={<JapanExpo />} />
                  <Route path="/evenements/tex-world" element={<TexWorld />} />
                  <Route path="/evenements/sial" element={<SIAL />} />
                  <Route path="/evenements/20-km-paris" element={<VingtKmParis />} />
                  <Route path="/evenements/marathon-paris" element={<MarathonParis />} />
                  <Route path="/evenements/equiphotel" element={<Equiphotel />} />
                  <Route path="/evenements/congres-accdom" element={<CongresACCDOM />} />
                  <Route path="/evenements/congres-maires" element={<CongresMaires />} />
                  <Route path="/decouvrir-paris" element={<DecouvrirParis />} />
                  <Route path="/decouvrir-paris/quartier-chinois" element={<QuartierChinois />} />
                  <Route path="/decouvrir-paris/butte-aux-cailles" element={<ButteAuxCailles />} />
                  <Route path="/decouvrir-paris/bnf-francois-mitterrand" element={<BnfFrancoisMitterrand />} />
                  <Route path="/decouvrir-paris/centre-italie-2" element={<CentreItalie2 />} />
                  <Route path="/decouvrir-paris/cuisine-italienne" element={<CuisineItalienne />} />
                  <Route path="/decouvrir-paris/cuisine-asiatique" element={<CuisineAsiatique />} />
                  <Route path="/decouvrir-paris/cuisine-francaise" element={<CuisineFrancaise />} />
                  <Route path="/decouvrir-paris/street-food" element={<StreetFood />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/localisation" element={<Localisation />} />
                  <Route path="/mentions-legales" element={<MentionsLegales />} />
                  <Route path="/wifi" element={<WiFiPage />} />
                  {/* Admin routes */}
                  <Route path="/admin/login" element={<AdminLogin />} />
                  <Route path="/admin/dashboard" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
                  <Route path="/admin/articles" element={<ProtectedRoute><AdminArticles /></ProtectedRoute>} />
                  <Route path="/admin/articles/:id" element={<ProtectedRoute><AdminArticleEditor /></ProtectedRoute>} />
                  <Route path="/admin/media" element={<ProtectedRoute><AdminMedia /></ProtectedRoute>} />
                  <Route path="/admin/seo" element={<ProtectedRoute><AdminSEO /></ProtectedRoute>} />
                  <Route path="/admin/users" element={<ProtectedRoute><AdminUsers /></ProtectedRoute>} />
                  <Route path="/admin/settings" element={<ProtectedRoute><AdminSettings /></ProtectedRoute>} />
                  {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </AuthProvider>
            <ContactBubble />
            <FloatingNatureElements />
          </BrowserRouter>
        </TooltipProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
};

export default App;
