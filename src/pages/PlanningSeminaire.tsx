import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { useState } from "react";
import { Loader2, CalendarDays, Monitor, Users, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import heroSeminaire from "@/assets/salon-marshall-1.webp";

const PlanningSeminaire = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={t('seo.planning.title')}
        description={t('seo.planning.description')}
        pageKey="planning"
      />
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[55vh] min-h-[400px]">
        <img 
          src={heroSeminaire} 
          alt="Salles de séminaire - Hôtel Inn Design Paris" 
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
          <div className="container mx-auto">
            <span className="inline-block bg-burgundy text-white font-body uppercase tracking-[0.15em] text-sm px-4 py-2 mb-4">
              Séminaires
            </span>
            <h1 className="font-display text-3xl md:text-5xl lg:text-6xl text-white drop-shadow-lg">
              Planning des salles
            </h1>
            <p className="text-white/80 mt-3 max-w-2xl text-lg drop-shadow-md">
              Consultez les disponibilités de nos salles en temps réel et réservez en ligne en quelques clics.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          
          {/* Intro */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-display text-2xl md:text-3xl text-foreground mb-6">
              Réservez votre salle de séminaire en ligne
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              L'Hôtel Inn Design Paris met à votre disposition <strong className="text-foreground">3 salles de séminaire</strong> modulables, 
              disponibles à la réservation directement en ligne. Consultez le calendrier ci-dessous pour vérifier 
              les disponibilités en temps réel, puis faites votre demande de devis en quelques minutes.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
            <div className="text-center p-6 rounded-xl border border-border bg-card hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-burgundy/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Monitor className="w-7 h-7 text-burgundy" />
              </div>
              <h3 className="font-display text-lg text-foreground mb-2">Salle Bose</h3>
              <p className="text-muted-foreground text-sm">Salle principale, idéale pour les grandes réunions et conférences.</p>
            </div>
            <div className="text-center p-6 rounded-xl border border-border bg-card hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-burgundy/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-7 h-7 text-burgundy" />
              </div>
              <h3 className="font-display text-lg text-foreground mb-2">Salle Fender</h3>
              <p className="text-muted-foreground text-sm">Espace polyvalent adapté aux formations et ateliers collaboratifs.</p>
            </div>
            <div className="text-center p-6 rounded-xl border border-border bg-card hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-burgundy/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CalendarDays className="w-7 h-7 text-burgundy" />
              </div>
              <h3 className="font-display text-lg text-foreground mb-2">Salle Marshall</h3>
              <p className="text-muted-foreground text-sm">Espace intimiste pour les réunions de direction et séminaires en petit comité.</p>
            </div>
          </div>

          {/* How it works */}
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-2xl text-foreground text-center mb-8">Comment réserver ?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-10 h-10 bg-burgundy text-white rounded-full flex items-center justify-center font-bold text-lg mb-3">1</div>
                <h4 className="font-medium text-foreground mb-1">Consultez le planning</h4>
                <p className="text-muted-foreground text-sm">Vérifiez la disponibilité de nos salles sur le calendrier en temps réel.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-10 h-10 bg-burgundy text-white rounded-full flex items-center justify-center font-bold text-lg mb-3">2</div>
                <h4 className="font-medium text-foreground mb-1">Demandez un devis</h4>
                <p className="text-muted-foreground text-sm">Remplissez notre formulaire en précisant vos besoins et dates souhaitées.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-10 h-10 bg-burgundy text-white rounded-full flex items-center justify-center font-bold text-lg mb-3">3</div>
                <h4 className="font-medium text-foreground mb-1">Confirmation rapide</h4>
                <p className="text-muted-foreground text-sm">Recevez votre devis personnalisé et confirmez votre réservation.</p>
              </div>
            </div>
          </div>

          {/* Planning iframe */}
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Clock className="w-5 h-5 text-burgundy" />
              <h2 className="font-display text-2xl text-foreground">Disponibilités en temps réel</h2>
            </div>
            
            <div className="relative border border-border rounded-xl overflow-hidden bg-white">
              {isLoading && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-background z-10 min-h-[500px]">
                  <Loader2 className="w-8 h-8 text-burgundy animate-spin mb-4" />
                  <p className="text-muted-foreground text-sm">Chargement du planning...</p>
                </div>
              )}
              <iframe
                src="https://gustaves.ai/hid-paris-13/planning-embed"
                width="100%"
                style={{ height: '600px', border: 'none' }}
                title="Planning des salles de séminaire"
                onLoad={() => setIsLoading(false)}
              />
            </div>

            {/* Legend */}
            <div className="mt-4 flex flex-wrap gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-green-500"></span>
                <span>Confirmé</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-amber-500"></span>
                <span>Option</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-blue-500"></span>
                <span>Option Web</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-gray-400"></span>
                <span>En attente</span>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="max-w-3xl mx-auto mt-16 text-center bg-burgundy/5 border border-burgundy/20 rounded-2xl p-8 md:p-12">
            <h2 className="font-display text-2xl md:text-3xl text-foreground mb-4">
              Une date vous convient ?
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Demandez votre devis personnalisé en quelques minutes. Notre équipe vous répondra sous 24h.
            </p>
            <Button
              variant="gold"
              size="lg"
              className="bg-burgundy hover:bg-burgundy/90 border-burgundy text-white px-8 py-6 text-lg font-bold"
              asChild
            >
              <Link to="/reservation-seminaire" className="flex items-center gap-3">
                Demander un devis
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PlanningSeminaire;
