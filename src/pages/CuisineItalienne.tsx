import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import {
  MapPin, Utensils, Navigation, Footprints,
  Clock, Wine, Star, Euro, Phone, Globe,
  ChefHat, Pizza, UtensilsCrossed
} from "lucide-react";
import heroImg from "@/assets/cuisine-italienne-hero.webp";
import pizzaImg from "@/assets/cuisine-italienne-pizza.webp";
import pastaImg from "@/assets/cuisine-italienne-pasta.webp";
import tiramisuImg from "@/assets/cuisine-italienne-tiramisu.webp";
import aperitivoImg from "@/assets/cuisine-italienne-aperitivo.webp";

const CuisineItalienne = () => {
  const { t } = useLanguage();

  const restaurants = [
    {
      name: "Fratelli",
      address: "75 avenue d'Italie, 75013",
      walk: "5 min",
      transport: "Ligne 5, 6, 7 — Place d'Italie",
      rating: "4.3",
      budget: "€€",
      hours: "12h–14h30 / 19h–22h30",
      phone: "01 45 85 79 09",
      image: pizzaImg,
      type: t('italian.guide.fratelli.type'),
      desc: t('italian.guide.fratelli.desc'),
      specialties: t('italian.guide.fratelli.specialties'),
      tip: t('italian.guide.fratelli.tip'),
    },
    {
      name: "La Sartoria",
      address: "27 rue de Tolbiac, 75013",
      walk: "7 min",
      transport: "Ligne 7 — Tolbiac",
      rating: "4.5",
      budget: "€€€",
      hours: "12h–14h30 / 19h–23h",
      phone: "01 53 61 09 09",
      image: pastaImg,
      type: t('italian.guide.sartoria.type'),
      desc: t('italian.guide.sartoria.desc'),
      specialties: t('italian.guide.sartoria.specialties'),
      tip: t('italian.guide.sartoria.tip'),
    },
    {
      name: "Pizza Rossi",
      address: "146 avenue d'Italie, 75013",
      walk: "4 min",
      transport: "Ligne 7 — Maison Blanche",
      rating: "4.2",
      budget: "€",
      hours: "11h30–23h (service continu)",
      phone: "01 45 88 12 34",
      image: pizzaImg,
      type: t('italian.guide.rossi.type'),
      desc: t('italian.guide.rossi.desc'),
      specialties: t('italian.guide.rossi.specialties'),
      tip: t('italian.guide.rossi.tip'),
    },
    {
      name: "Il Palazzo",
      address: "82 boulevard Auguste Blanqui, 75013",
      walk: "10 min",
      transport: "Ligne 6 — Glacière",
      rating: "4.4",
      budget: "€€€",
      hours: "12h–14h / 19h30–22h30",
      phone: "01 43 31 45 67",
      image: tiramisuImg,
      type: t('italian.guide.palazzo.type'),
      desc: t('italian.guide.palazzo.desc'),
      specialties: t('italian.guide.palazzo.specialties'),
      tip: t('italian.guide.palazzo.tip'),
    },
    {
      name: "Trattoria Pulcinella",
      address: "11 rue Bobillot, 75013",
      walk: "8 min",
      transport: "Ligne 7 — Place d'Italie",
      rating: "4.1",
      budget: "€€",
      hours: "12h–15h / 18h30–22h30",
      phone: "01 45 80 98 76",
      image: aperitivoImg,
      type: t('italian.guide.pulcinella.type'),
      desc: t('italian.guide.pulcinella.desc'),
      specialties: t('italian.guide.pulcinella.specialties'),
      tip: t('italian.guide.pulcinella.tip'),
    },
    {
      name: "Vapiano",
      address: "Centre Italie 2, 30 avenue d'Italie, 75013",
      walk: "8 min",
      transport: "Ligne 5, 6, 7 — Place d'Italie",
      rating: "3.9",
      budget: "€",
      hours: "11h–23h (7j/7)",
      phone: "",
      image: pastaImg,
      type: t('italian.guide.vapiano.type'),
      desc: t('italian.guide.vapiano.desc'),
      specialties: t('italian.guide.vapiano.specialties'),
      tip: t('italian.guide.vapiano.tip'),
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Restaurants italiens près de l'hôtel — Paris 13ème | Hôtel Inn Design"
        description="Guide des meilleurs restaurants italiens du 13ème arrondissement à Paris : pizzerias, trattorias, pâtes fraîches et tiramisu près de l'Hôtel Inn Design Place d'Italie."
        canonical="/decouvrir-paris/cuisine-italienne"
      />
      <Header />

      {/* Hero */}
      <section className="relative pt-32 md:pt-40 pb-20 bg-gradient-to-b from-charcoal to-background overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img src={heroImg} alt="" className="w-full h-full object-cover" loading="eager" fetchPriority="high" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <Link to="/decouvrir-paris" className="inline-flex items-center gap-2 text-burgundy hover:text-burgundy/80 transition-colors text-sm font-medium">
            ← {t('italian.back')}
          </Link>
          <div className="text-center mt-6">
            <span className="text-burgundy font-medium text-sm uppercase tracking-[0.3em] mb-4 block">
              {t('italian.badge')}
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
              {t('italian.title')}
            </h1>
            <p className="text-white/90 text-lg max-w-2xl mx-auto leading-relaxed drop-shadow-md font-medium">
              {t('italian.subtitle')}
            </p>
            <div className="flex items-center justify-center gap-2 mt-4 text-burgundy text-sm font-medium bg-background/80 backdrop-blur-sm px-4 py-2 rounded-full mx-auto w-fit">
              <Navigation className="w-4 h-4" />
              {t('italian.distance')}
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24 bg-charcoal">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div>
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
                {t('italian.intro.title')}
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                {t('italian.intro.p1')}
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {t('italian.intro.p2')}
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img src={heroImg} alt="Trattoria italienne Paris 13ème" className="w-full h-80 object-cover" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* Guide des restaurants */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-burgundy font-medium text-sm uppercase tracking-[0.3em] mb-4 block">
              {t('italian.guide.badge')}
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
              {t('italian.guide.title')}
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {t('italian.guide.desc')}
            </p>
          </div>

          <div className="space-y-8 max-w-5xl mx-auto">
            {restaurants.map((resto, index) => (
              <div
                key={index}
                className="group rounded-2xl bg-charcoal border border-border/50 hover:border-burgundy/40 transition-all duration-300 hover:shadow-xl overflow-hidden"
              >
                <div className="grid md:grid-cols-[320px_1fr]">
                  {/* Image */}
                  <div className="relative h-56 md:h-full">
                    <img src={resto.image} alt={resto.name} className="w-full h-full object-cover" loading="lazy" />
                    <div className="absolute top-3 left-3 flex gap-2">
                      <span className="px-3 py-1 rounded-full bg-burgundy text-white text-xs font-semibold">
                        {resto.budget}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-background/90 text-foreground text-xs font-semibold flex items-center gap-1">
                        <Star className="w-3 h-3 text-burgundy fill-current" />
                        {resto.rating}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 md:p-8 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between mb-1">
                        <h3 className="font-display text-2xl text-foreground">{resto.name}</h3>
                        <span className="text-burgundy text-xs font-medium uppercase tracking-wider bg-burgundy/10 px-3 py-1 rounded-full shrink-0 ml-3">
                          {resto.type}
                        </span>
                      </div>
                      <p className="text-muted-foreground text-sm mb-4">{resto.address}</p>
                      <p className="text-muted-foreground text-base leading-relaxed mb-4">{resto.desc}</p>
                      
                      {/* Spécialités */}
                      <div className="flex items-start gap-2 mb-3">
                        <ChefHat className="w-4 h-4 text-burgundy shrink-0 mt-0.5" />
                        <p className="text-foreground text-sm">
                          <span className="font-semibold">{t('italian.guide.specialtiesLabel')}</span> {resto.specialties}
                        </p>
                      </div>

                      {/* Conseil */}
                      <div className="flex items-start gap-2 mb-5">
                        <Star className="w-4 h-4 text-burgundy shrink-0 mt-0.5" />
                        <p className="text-foreground text-sm italic">{resto.tip}</p>
                      </div>
                    </div>

                    {/* Infos pratiques */}
                    <div className="flex flex-wrap gap-x-5 gap-y-2 pt-4 border-t border-border/30 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1.5">
                        <Footprints className="w-4 h-4 text-burgundy" />
                        {resto.walk} {t('italian.guide.fromHotel')}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Navigation className="w-4 h-4 text-burgundy" />
                        {resto.transport}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4 text-burgundy" />
                        {resto.hours}
                      </span>
                      {resto.phone && (
                        <a href={`tel:${resto.phone.replace(/\s/g, '')}`} className="flex items-center gap-1.5 hover:text-burgundy transition-colors">
                          <Phone className="w-4 h-4 text-burgundy" />
                          {resto.phone}
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conseils pratiques */}
      <section className="py-24 bg-charcoal">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-14">
              <span className="text-burgundy font-medium text-sm uppercase tracking-[0.3em] mb-4 block">
                {t('italian.tips.badge')}
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
                {t('italian.tips.title')}
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-background/50 border border-border/50 text-center">
                <Clock className="w-8 h-8 text-burgundy mx-auto mb-4" />
                <h3 className="font-display text-lg text-foreground mb-2">{t('italian.tips.hours.title')}</h3>
                <p className="text-muted-foreground text-sm">{t('italian.tips.hours.desc')}</p>
              </div>
              <div className="p-6 rounded-2xl bg-background/50 border border-border/50 text-center">
                <Star className="w-8 h-8 text-burgundy mx-auto mb-4" />
                <h3 className="font-display text-lg text-foreground mb-2">{t('italian.tips.reservation.title')}</h3>
                <p className="text-muted-foreground text-sm">{t('italian.tips.reservation.desc')}</p>
              </div>
              <div className="p-6 rounded-2xl bg-background/50 border border-border/50 text-center">
                <Wine className="w-8 h-8 text-burgundy mx-auto mb-4" />
                <h3 className="font-display text-lg text-foreground mb-2">{t('italian.tips.wine.title')}</h3>
                <p className="text-muted-foreground text-sm">{t('italian.tips.wine.desc')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-burgundy to-burgundy/80">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl text-white mb-4 drop-shadow-md">
            {t('italian.cta.title')}
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-xl mx-auto leading-relaxed">
            {t('italian.cta.desc')}
          </p>
          <a
            href="https://www.secure-hotel-booking.com/d-edge/Hotel-inn-Paris-Place-d-Italie/JJGV/fr-FR/DateSelection"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-white text-foreground font-semibold text-base hover:bg-white/95 transition-colors shadow-lg hover:shadow-xl"
          >
            {t('italian.cta.button')}
            <MapPin className="w-4 h-4" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CuisineItalienne;
