import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { Loader2 } from "lucide-react";

const ReservationSeminaire = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load Tally embed script
    const script = document.createElement("script");
    script.src = "https://tally.so/widgets/embed.js";
    script.async = true;
    document.body.appendChild(script);

    // Set a timeout to hide loading state
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => {
      document.body.removeChild(script);
      clearTimeout(timer);
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
          
          <div className="max-w-3xl mx-auto relative">
            {isLoading && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-background z-10 min-h-[600px]">
                <Loader2 className="w-8 h-8 text-primary animate-spin mb-4" />
                <p className="text-muted-foreground text-sm">Chargement du formulaire...</p>
                <div className="w-full max-w-md mt-6 space-y-4">
                  <Skeleton className="h-10 w-full" />
                  <Skeleton className="h-10 w-full" />
                  <Skeleton className="h-10 w-3/4" />
                  <Skeleton className="h-24 w-full" />
                  <Skeleton className="h-10 w-1/2" />
                </div>
              </div>
            )}
            <iframe
              data-tally-src="https://tally.so/embed/npZGGB?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
              width="100%"
              height="500"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              title="Demande de devis séminaire"
              className="min-h-[600px]"
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
