import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import {
  MapPin, Utensils, Navigation, Footprints,
  Clock, Star, Phone, ChefHat, Soup, Salad
} from "lucide-react";
import heroImg from "@/assets/cuisine-asiatique-hero.webp";
import phoImg from "@/assets/cuisine-asiatique-pho.webp";
import dimsumImg from "@/assets/cuisine-asiatique-dimsum.webp";
import ramenImg from "@/assets/cuisine-asiatique-ramen.webp";
import thaiImg from "@/assets/cuisine-asiatique-thai.webp";

const CuisineAsiatique = () => {
  const { t } = useLanguage();

  const restaurants = [
    {
      name: "Pho 13",
      address: "129 avenue de Choisy, 75013",
      walk: "8 min",
      transport: "Ligne 7 — Tolbiac",
      rating: "4.4",
      budget: "€",
      hours: "11h–22h30 (7j/7)",
      phone: "01 45 85 97 36",
      image: phoImg,
      type: t('asian.guide.pho13.type'),
      desc: t('asian.guide.pho13.desc'),
      specialties: t('asian.guide.pho13.specialties'),
      tip: t('asian.guide.pho13.tip'),
    },
    {
      name: "Lao Lane Xang",
      address: "102 avenue d'Ivry, 75013",
      walk: "7 min",
      transport: "Ligne 7 — Tolbiac",
      rating: "4.3",
      budget: "€",
      hours: "11h30–23h",
      phone: "01 58 89 00 00",
      image: thaiImg,
      type: t('asian.guide.laolane.type'),
      desc: t('asian.guide.laolane.desc'),
      specialties: t('asian.guide.laolane.specialties'),
      tip: t('asian.guide.laolane.tip'),
    },
    {
      name: "Tricotin",
      address: "15 avenue de Choisy, 75013",
      walk: "6 min",
      transport: "Ligne 7 — Place d'Italie",
      rating: "4.2",
      budget: "€€",
      hours: "9h–23h (7j/7)",
      phone: "01 45 84 74 44",
      image: dimsumImg,
      type: t('asian.guide.tricotin.type'),
      desc: t('asian.guide.tricotin.desc'),
      specialties: t('asian.guide.tricotin.specialties'),
      tip: t('asian.guide.tricotin.tip'),
    },
    {
      name: "Ramen Misoya",
      address: "63 avenue d'Italie, 75013",
      walk: "5 min",
      transport: "Ligne 5, 6, 7 — Place d'Italie",
      rating: "4.5",
      budget: "€€",
      hours: "12h–14h30 / 19h–22h",
      phone: "01 43 31 52 10",
      image: ramenImg,
      type: t('asian.guide.misoya.type'),
      desc: t('asian.guide.misoya.desc'),
      specialties: t('asian.guide.misoya.specialties'),
      tip: t('asian.guide.misoya.tip'),
    },
    {
      name: "Sinorama",
      address: "49 avenue de Choisy, 75013",
      walk: "7 min",
      transport: "Ligne 7 — Tolbiac",
      rating: "4.1",
      budget: "€€",
      hours: "11h–15h / 18h–23h",
      phone: "01 45 84 82 88",
      image: dimsumImg,
      type: t('asian.guide.sinorama.type'),
      desc: t('asian.guide.sinorama.desc'),
      specialties: t('asian.guide.sinorama.specialties'),
      tip: t('asian.guide.sinorama.tip'),
    },
    {
      name: "Basilic & Spice",
      address: "88 avenue d'Ivry, 75013",
      walk: "8 min",
      transport: "Ligne 7 — Tolbiac",
      rating: "4.3",
      budget: "€€",
      hours: "12h–14h30 / 19h–22h30",
      phone: "01 45 85 19 30",
      image: thaiImg,
      type: t('asian.guide.basilic.type'),
      desc: t('asian.guide.basilic.desc'),
      specialties: t('asian.guide.basilic.specialties'),
      tip: t('asian.guide.basilic.tip'),
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Restaurants asiatiques près de l'hôtel — Paris 13ème | Hôtel Inn Design"
        description="Guide des meilleurs restaurants asiatiques du 13ème arrondissement à Paris : vietnamien, chinois, thaï, japonais près de l'Hôtel Inn Design Place d'Italie."
        canonical="/decouvrir-paris/cuisine-asiatique"
      />
      <Header />

      {/* Hero */}
      <section className="relative pt-32 md:pt-40 pb-20 bg-gradient-to-b from-charcoal to-background overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img src={heroImg} alt="" className="w-full h-full object-cover" loading="eager" fetchPriority="high" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <Link to="/decouvrir-paris" className="inline-flex items-center gap-2 text-burgundy hover:text-burgundy/80 transition-colors text-sm font-medium">
            ← {t('asian.back')}
          </Link>
          <div className="text-center mt-6">
            <span className="text-burgundy font-medium text-sm uppercase tracking-[0.3em] mb-4 block">
              {t('asian.badge')}
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
              {t('asian.title')}
            </h1>
            <p className="text-foreground text-lg max-w-2xl mx-auto leading-relaxed drop-shadow-md font-medium">
              {t('asian.subtitle')}
            </p>
            <div className="flex items-center justify-center gap-2 mt-4 text-burgundy text-sm font-medium bg-background/80 backdrop-blur-sm px-4 py-2 rounded-full mx-auto w-fit">
              <Navigation className="w-4 h-4" />
              {t('asian.distance')}
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
                {t('asian.intro.title')}
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                {t('asian.intro.p1')}
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {t('asian.intro.p2')}
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img src={heroImg} alt="Quartier asiatique Paris 13ème" className="w-full h-80 object-cover" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* Guide des restaurants */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-burgundy font-medium text-sm uppercase tracking-[0.3em] mb-4 block">
              {t('asian.guide.badge')}
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
              {t('asian.guide.title')}
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {t('asian.guide.desc')}
            </p>
          </div>

          <div className="space-y-8 max-w-5xl mx-auto">
            {restaurants.map((resto, index) => (
              <div
                key={index}
                className="group rounded-2xl bg-charcoal border border-border/50 hover:border-burgundy/40 transition-all duration-300 hover:shadow-xl overflow-hidden"
              >
                <div className="grid md:grid-cols-[320px_1fr]">
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

                      <div className="flex items-start gap-2 mb-3">
                        <ChefHat className="w-4 h-4 text-burgundy shrink-0 mt-0.5" />
                        <p className="text-foreground text-sm">
                          <span className="font-semibold">{t('asian.guide.specialtiesLabel')}</span> {resto.specialties}
                        </p>
                      </div>

                      <div className="flex items-start gap-2 mb-5">
                        <Star className="w-4 h-4 text-burgundy shrink-0 mt-0.5" />
                        <p className="text-foreground text-sm italic">{resto.tip}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-x-5 gap-y-2 pt-4 border-t border-border/30 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1.5">
                        <Footprints className="w-4 h-4 text-burgundy" />
                        {resto.walk} {t('asian.guide.fromHotel')}
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
                {t('asian.tips.badge')}
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
                {t('asian.tips.title')}
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-background/50 border border-border/50 text-center">
                <Clock className="w-8 h-8 text-burgundy mx-auto mb-4" />
                <h3 className="font-display text-lg text-foreground mb-2">{t('asian.tips.hours.title')}</h3>
                <p className="text-muted-foreground text-sm">{t('asian.tips.hours.desc')}</p>
              </div>
              <div className="p-6 rounded-2xl bg-background/50 border border-border/50 text-center">
                <Utensils className="w-8 h-8 text-burgundy mx-auto mb-4" />
                <h3 className="font-display text-lg text-foreground mb-2">{t('asian.tips.sharing.title')}</h3>
                <p className="text-muted-foreground text-sm">{t('asian.tips.sharing.desc')}</p>
              </div>
              <div className="p-6 rounded-2xl bg-background/50 border border-border/50 text-center">
                <MapPin className="w-8 h-8 text-burgundy mx-auto mb-4" />
                <h3 className="font-display text-lg text-foreground mb-2">{t('asian.tips.explore.title')}</h3>
                <p className="text-muted-foreground text-sm">{t('asian.tips.explore.desc')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-burgundy to-burgundy/80">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl text-white mb-4 drop-shadow-md">
            {t('asian.cta.title')}
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-xl mx-auto leading-relaxed">
            {t('asian.cta.desc')}
          </p>
          <a
            href="https://www.secure-hotel-booking.com/d-edge/Hotel-inn-Paris-Place-d-Italie/JJGV/fr-FR/DateSelection"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-white text-foreground font-semibold text-base hover:bg-white/95 transition-colors shadow-lg hover:shadow-xl"
          >
            {t('asian.cta.button')}
            <MapPin className="w-4 h-4" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CuisineAsiatique;
