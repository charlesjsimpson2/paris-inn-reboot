import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useState } from "react";
import { Loader2 } from "lucide-react";

const ReservationSeminaire = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Demande de devis séminaire
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Complétez le formulaire ci-dessous pour recevoir un devis personnalisé pour votre événement professionnel.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto relative">
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
