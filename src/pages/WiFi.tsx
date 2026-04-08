import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Wifi, Signal, Shield, Zap, Video, Laptop, Monitor, Users, Building } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import wifiCoworking from "@/assets/wifi-coworking-hotel.webp";

const WiFiPage = () => {
  const { t } = useLanguage();

  const specs = [
    { icon: Zap, value: "3 Gbps", label: t('wifiPage.spec.capacity.label'), desc: t('wifiPage.spec.capacity.desc') },
    { icon: Shield, value: "3×", label: t('wifiPage.spec.redundancy.label'), desc: t('wifiPage.spec.redundancy.desc') },
    { icon: Signal, value: "25", label: t('wifiPage.spec.accessPoints.label'), desc: t('wifiPage.spec.accessPoints.desc') },
    { icon: Building, value: "7", label: t('wifiPage.spec.floors.label'), desc: t('wifiPage.spec.floors.desc') },
  ];

  const useCases = [
    { icon: Video, title: t('wifiPage.use.video.title'), desc: t('wifiPage.use.video.desc') },
    { icon: Laptop, title: t('wifiPage.use.remote.title'), desc: t('wifiPage.use.remote.desc') },
    { icon: Monitor, title: t('wifiPage.use.streaming.title'), desc: t('wifiPage.use.streaming.desc') },
    { icon: Users, title: t('wifiPage.use.seminar.title'), desc: t('wifiPage.use.seminar.desc') },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="WiFi Haut Débit - Hôtel Inn Design Paris | 3 Gbps, 25 bornes WiFi"
        description="WiFi professionnel haut débit dans tout l'hôtel : 3 Gbps de capacité, triple redondance, 25 points d'accès sur 7 étages. Idéal télétravail, visioconférences et séminaires."
        canonical="/wifi"
      />
      <Header />

      {/* Hero */}
      <section className="relative h-[60vh] min-h-[450px]">
        <img
          src={wifiCoworking}
          alt="WiFi haut débit - Espace de travail à l'hôtel"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 sm:px-6 md:px-12 pb-10 md:pb-14">
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2.5 bg-primary/20 backdrop-blur-sm rounded-sm">
                <Wifi className="w-5 h-5 text-primary" />
              </div>
              <span className="inline-block bg-primary text-primary-foreground font-body uppercase tracking-[0.15em] text-xs sm:text-sm px-4 py-1.5">
                {t('wifiPage.badge')}
              </span>
            </div>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
              {t('wifiPage.hero.title')}
            </h1>
            <p className="text-white/85 text-base sm:text-lg md:text-xl mt-3 max-w-2xl leading-relaxed drop-shadow-[0_1px_5px_rgba(0,0,0,0.5)]">
              {t('wifiPage.hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-charcoal">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-muted-foreground text-lg sm:text-xl leading-relaxed">
              {t('wifiPage.intro')}
            </p>
          </div>
        </div>
      </section>

      {/* Specs Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-primary font-body uppercase tracking-[0.2em] text-sm mb-3">
              {t('wifiPage.specs.badge')}
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-foreground">
              {t('wifiPage.specs.title')}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {specs.map((spec, idx) => (
              <div key={idx} className="bg-primary/5 border border-primary/20 p-6 text-center">
                <div className="mx-auto w-12 h-12 bg-primary/15 flex items-center justify-center mb-4">
                  <spec.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="font-display text-3xl text-primary mb-1">{spec.value}</div>
                <div className="font-display text-base text-foreground mb-2">{spec.label}</div>
                <p className="text-muted-foreground text-sm">{spec.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-primary font-body uppercase tracking-[0.2em] text-sm mb-3">
              {t('wifiPage.uses.badge')}
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-foreground">
              {t('wifiPage.uses.title')}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {useCases.map((uc, idx) => (
              <div key={idx} className="bg-background border border-border/30 p-6 flex items-start gap-4">
                <div className="p-2 bg-primary/10 flex-shrink-0">
                  <uc.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg text-foreground mb-1">{uc.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{uc.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seminars CTA */}
      <section className="py-16 bg-charcoal">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-2xl md:text-3xl text-foreground mb-4">
              {t('wifiPage.seminar.title')}
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              {t('wifiPage.seminar.desc')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gold" size="lg" asChild>
                <a href="https://www.secure-hotel-booking.com/d-edge/Hotel-inn-Paris-Place-d-Italie/JJGV/fr-FR/DateSelection" target="_blank" rel="noopener noreferrer">
                  {t('wifiPage.cta.book')}
                </a>
              </Button>
              <Button variant="elegant" size="lg" asChild>
                <Link to="/seminaires">{t('wifiPage.cta.seminars')}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* JSON-LD for SEO */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Hotel",
        "name": "Hôtel Inn Design Paris Place d'Italie",
        "amenityFeature": [
          {
            "@type": "LocationFeatureSpecification",
            "name": "WiFi",
            "value": true,
            "description": "WiFi haut débit professionnel - 3 Gbps, 25 points d'accès, triple redondance"
          }
        ]
      })}} />

      <Footer />
    </div>
  );
};

export default WiFiPage;
