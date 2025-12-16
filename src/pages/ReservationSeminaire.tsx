import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";

const ReservationSeminaire = () => {
  useEffect(() => {
    // Load Tally embed script
    const script = document.createElement("script");
    script.src = "https://tally.so/widgets/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

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
          
          <div className="max-w-3xl mx-auto">
            <iframe
              data-tally-src="https://tally.so/embed/npZGGB?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
              loading="lazy"
              width="100%"
              height="500"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              title="Demande de devis séminaire"
              className="min-h-[600px]"
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ReservationSeminaire;
