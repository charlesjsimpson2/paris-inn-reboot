import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Link } from "react-router-dom";
import { CheckCircle, ArrowRight, Phone, Mail } from "lucide-react";

const ValidationReservationSeminaire = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Demande envoyée — Séminaire | Hôtel Inn Design Paris"
        description="Votre demande de devis séminaire a bien été envoyée. Notre équipe vous recontactera dans les plus brefs délais."
        pageKey="bookingConfirmation"
      />
      <Header />

      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center mx-auto mb-8">
              <CheckCircle className="w-10 h-10 text-green-500" />
            </div>

            <h1 className="font-display text-3xl md:text-4xl text-foreground mb-4">
              Demande envoyée avec succès !
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Merci pour votre demande de devis séminaire. Notre équipe commerciale l'a bien reçue et vous recontactera
              sous <strong className="text-foreground">24 à 48 heures</strong> avec une proposition personnalisée.
            </p>

            <div className="bg-charcoal rounded-2xl border border-border/50 p-8 mb-10">
              <h2 className="font-display text-xl text-foreground mb-4">Et maintenant ?</h2>
              <ul className="text-muted-foreground text-sm space-y-3 text-left max-w-md mx-auto">
                <li className="flex items-start gap-3">
                  <span className="text-burgundy font-bold mt-0.5">1.</span>
                  Notre équipe analyse votre demande et prépare un devis sur-mesure.
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-burgundy font-bold mt-0.5">2.</span>
                  Vous recevez votre proposition détaillée par email.
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-burgundy font-bold mt-0.5">3.</span>
                  Une visite des espaces peut être organisée si vous le souhaitez.
                </li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <Link
                to="/"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-burgundy text-white font-medium hover:bg-burgundy/90 transition-colors"
              >
                Retour à l'accueil
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/seminaires"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-background border border-border/50 text-foreground font-medium hover:border-burgundy/40 transition-colors"
              >
                Revoir nos espaces
              </Link>
            </div>

            <div className="text-muted-foreground text-sm">
              <p className="mb-2">Une question urgente ?</p>
              <div className="flex items-center justify-center gap-6">
                <a href="tel:+33145842020" className="inline-flex items-center gap-2 text-burgundy hover:underline">
                  <Phone className="w-4 h-4" />
                  01 45 84 20 20
                </a>
                <a href="mailto:contact@hotel-inn-paris.fr" className="inline-flex items-center gap-2 text-burgundy hover:underline">
                  <Mail className="w-4 h-4" />
                  Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ValidationReservationSeminaire;
