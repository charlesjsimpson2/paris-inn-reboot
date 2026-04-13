import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import heroSeminaire from "@/assets/salon-marshall-1.webp";

const ReservationSeminaire = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[45vh] min-h-[300px]">
        <img 
          src={heroSeminaire} 
          alt="Salle de séminaire - Hôtel Inn Design Paris" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
          <div className="container mx-auto">
            <span className="inline-block bg-primary text-primary-foreground font-body uppercase tracking-[0.15em] text-sm px-4 py-2 mb-4">
              Séminaires
            </span>
            <h1 className="font-display text-3xl md:text-5xl lg:text-6xl text-white">
              Demande de devis séminaire
            </h1>
            <p className="text-white/80 mt-3 max-w-2xl text-lg">
              Complétez le formulaire ci-dessous pour recevoir un devis personnalisé pour votre événement professionnel.
            </p>
          </div>
        </div>
      </section>

      <main className="pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto relative pt-12">
            {isLoading && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-background z-10 min-h-[600px]">
                <Loader2 className="w-8 h-8 text-primary animate-spin mb-4" />
                <p className="text-muted-foreground text-sm">Chargement du formulaire...</p>
              </div>
            )}
            <iframe
              src="https://gustaves.ai/hid-paris-13/booking-embed"
              width="100%"
              style={{ height: '2400px', border: 'none' }}
              title="Demande de devis séminaire"
              onLoad={() => setIsLoading(false)}
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ReservationSeminaire;
