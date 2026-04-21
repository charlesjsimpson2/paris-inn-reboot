import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Train, Users, Utensils, Hotel, Car, Building2, Clock, Gift } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { RelatedEvents } from "@/components/RelatedEvents";
import { EventHotelPromo } from "@/components/EventHotelPromo";
import { EasyAccessSection } from "@/components/EasyAccessSection";
import { EventBackButton } from "@/components/EventBackButton";
import { SEO } from "@/components/SEO";
import hotelMetroFacade from "@/assets/hotel-metro-facade.jpg";
import petitDejeuner from "@/assets/petit-dejeuner.webp";
import chambreDouble from "@/assets/chambre-double.webp";
import heroImage from "@/assets/equiphotel-hero.png";
import eventImage from "@/assets/equiphotel-event.jpg";
import { useState, useEffect } from "react";

const Equiphotel = () => {
  const { t } = useLanguage();
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date('2026-11-02T09:00:00');
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();
      if (difference > 0) {
        setCountdown({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Equiphotel Paris 2026 - Salon Hôtellerie Restauration"
        description="Equiphotel Paris du 2 au 5 novembre 2026. Réservez votre hébergement près du métro Place d'Italie pour le salon professionnel de l'hôtellerie-restauration."
        canonical="/evenements/equiphotel"
      />
      <Header />
      <EventBackButton />
      <main>
        {/* Hero Section - Sidebar layout (image gauche, texte droite) */}
        <section className="relative py-24 bg-gradient-to-br from-stone-900 via-neutral-900 to-stone-800 overflow-hidden">
          {/* Subtle pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,white_1px,transparent_1px)] bg-[length:40px_40px]" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-10 items-center">
                {/* Image hero gauche */}
                <div className="flex justify-center animate-fade-up">
                  <div className="relative group">
                    <div className="absolute -inset-4 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
                    <img 
                      src={heroImage} 
                      alt="Equiphotel Paris 2026" 
                      loading="eager"
                      fetchPriority="high"
                      decoding="async"
                      className="relative w-full max-w-md rounded-2xl shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-500" 
                    />
                  </div>
                </div>

                {/* Texte droite */}
                <div className="text-center md:text-left">
                  <div className="inline-flex items-center gap-2 bg-amber-600/90 backdrop-blur-sm text-white px-4 py-2 rounded-full mb-4 shadow-lg animate-fade-up">
                    <Building2 className="w-4 h-4" />
                    <span className="font-medium text-sm uppercase tracking-wider">{t('equiphotel.badge')}</span>
                  </div>
                  
                  <h1 className="font-display text-4xl md:text-6xl text-white drop-shadow-lg mb-4 animate-fade-up animation-delay-200">
                    {t('equiphotel.title')}
                  </h1>
                  
                  <p className="text-white/80 text-lg md:text-xl mb-6 animate-fade-up animation-delay-400">
                    {t('equiphotel.subtitle')}
                  </p>

                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-8 animate-fade-up animation-delay-600">
                    <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-white font-medium text-sm border border-white/30">
                      <Calendar className="w-4 h-4 text-amber-400" />{t("equiphotel.dateDisplay")}
                    </div>
                    <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-white font-medium text-sm border border-white/30">
                      <MapPin className="w-4 h-4 text-amber-400" />{t("equiphotel.venue")}
                    </div>
                  </div>

                  {/* Countdown */}
                  <div className="inline-block bg-black/40 backdrop-blur-xl rounded-2xl p-5 border border-white/20 animate-fade-up animation-delay-600">
                    <div className="flex items-center justify-center gap-2 mb-3 text-amber-400">
                      <Clock className="w-4 h-4 animate-pulse" />
                      <span className="text-xs uppercase tracking-widest font-bold">{t("agriculture.countdown.title")}</span>
                    </div>
                    <div className="grid grid-cols-4 gap-3 text-center">
                      {[
                        { value: countdown.days, label: t("agriculture.countdown.days") },
                        { value: countdown.hours, label: t("agriculture.countdown.hours") },
                        { value: countdown.minutes, label: t("agriculture.countdown.minutes") },
                        { value: countdown.seconds, label: t("agriculture.countdown.seconds") },
                      ].map((item, index) => (
                        <div key={index} className="group">
                          <div className="bg-gradient-to-br from-amber-600 to-amber-700 rounded-xl px-3 py-2 shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                            <span className="font-display text-xl md:text-2xl text-white font-bold">{item.value}</span>
                          </div>
                          <p className="text-amber-300 text-xs mt-1 uppercase font-medium tracking-wide">{item.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Exclusive Offers - 2 columns */}
        <section className="py-12 bg-gradient-to-br from-amber-50 via-white to-yellow-50 dark:from-amber-950/30 dark:via-background dark:to-yellow-950/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600 to-yellow-600 text-white px-5 py-2 rounded-full mb-2 shadow-lg">
                <Gift className="w-4 h-4" />
                <span className="font-bold text-sm uppercase tracking-wider">{t("agriculture.exclusiveOffers")}</span>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="bg-white dark:bg-card rounded-2xl p-6 shadow-xl border-2 border-amber-200 dark:border-amber-800/50 hover:scale-[1.02] transition-transform duration-300 text-center">
                <div className="w-14 h-14 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Car className="w-7 h-7 text-amber-600" />
                </div>
                <h3 className="font-display text-xl text-foreground mb-2">{t("agriculture.offers.parking.title")}</h3>
                <p className="text-muted-foreground text-sm mb-4">{t("agriculture.offers.parking.desc")}</p>
                <div className="inline-block bg-amber-600 text-white font-bold px-4 py-2 rounded-full">{t("agriculture.offers.parking.price")}</div>
              </div>
              <div className="bg-white dark:bg-card rounded-2xl p-6 shadow-xl border-2 border-yellow-200 dark:border-yellow-800/50 hover:scale-[1.02] transition-transform duration-300 text-center">
                <div className="w-14 h-14 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Car className="w-7 h-7 text-yellow-600" />
                </div>
                <h3 className="font-display text-xl text-foreground mb-2">{t("agriculture.offers.taxi.title")}</h3>
                <p className="text-muted-foreground text-sm mb-4">{t("agriculture.offers.taxi.desc")}</p>
                <div className="inline-block bg-yellow-600 text-white font-bold px-4 py-2 rounded-full">{t("agriculture.offers.taxi.discount")}</div>
              </div>
            </div>
          </div>
        </section>

        <EasyAccessSection 
          venue={t("equiphotel.venue")}
          travelTime="25 min"
          metroLineKey="easyAccess.lines.line12"
          metroRouteKey="easyAccess.routes.porteDeVersailles"
          accentColor="from-amber-600 via-amber-700 to-yellow-600"
        />

        {/* About Section with event image */}
        <section className="py-16 bg-gradient-to-br from-amber-50 via-white to-yellow-50 dark:from-amber-950/20 dark:via-background dark:to-yellow-950/20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-10 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <Building2 className="w-8 h-8 text-amber-600" />
                    <h2 className="font-display text-3xl md:text-4xl text-foreground">{t('equiphotel.about')}</h2>
                  </div>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">{t('equiphotel.desc1')}</p>
                  <p className="text-muted-foreground text-lg leading-relaxed">{t('equiphotel.desc2')}</p>
                </div>
                <div className="flex justify-center">
                  <div className="relative group">
                    <div className="absolute -inset-2 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
                    <img 
                      src={eventImage} 
                      alt="Equiphotel salon" 
                      className="relative w-full max-w-md rounded-xl shadow-xl object-cover transform group-hover:scale-[1.02] transition-transform duration-500" 
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">{t('agriculture.comfort')}</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">{t('agriculture.comfortDesc')}</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="bg-card overflow-hidden border border-border rounded-xl">
                <div className="aspect-[4/3] overflow-hidden"><img src={petitDejeuner} alt="Petit-déjeuner" className="w-full h-full object-cover" /></div>
                <div className="p-6 text-center">
                  <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center mx-auto mb-4 -mt-10 relative z-10 border-4 border-card"><Utensils className="w-6 h-6 text-amber-600" /></div>
                  <h3 className="font-display text-xl text-foreground mb-2">{t('agriculture.breakfast')}</h3>
                  <p className="text-muted-foreground text-sm">{t('agriculture.breakfastDesc')}</p>
                </div>
              </div>
              <div className="bg-card overflow-hidden border border-border rounded-xl">
                <div className="aspect-[4/3] overflow-hidden"><img src={hotelMetroFacade} alt="Métro" className="w-full h-full object-cover" /></div>
                <div className="p-6 text-center">
                  <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center mx-auto mb-4 -mt-10 relative z-10 border-4 border-card"><Train className="w-6 h-6 text-amber-600" /></div>
                  <h3 className="font-display text-xl text-foreground mb-2">{t('agriculture.transport')}</h3>
                  <p className="text-muted-foreground text-sm">{t('agriculture.transportDesc')}</p>
                </div>
              </div>
              <div className="bg-card overflow-hidden border border-border rounded-xl">
                <div className="aspect-[4/3] overflow-hidden"><img src={chambreDouble} alt="Chambre" className="w-full h-full object-cover" /></div>
                <div className="p-6 text-center">
                  <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center mx-auto mb-4 -mt-10 relative z-10 border-4 border-card"><Users className="w-6 h-6 text-amber-600" /></div>
                  <h3 className="font-display text-xl text-foreground mb-2">{t('agriculture.rooms')}</h3>
                  <p className="text-muted-foreground text-sm">{t('agriculture.roomsDesc')}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <EventHotelPromo 
          eventName={t("equiphotel.eventName")}
          accentColor="from-amber-600 via-amber-700 to-yellow-600"
          urgencyMessage={t("equiphotel.urgencyMessage")}
          eventType="salon"
          compact
        />

        <RelatedEvents currentEventId="equiphotel" />
      </main>
      <Footer />
    </div>
  );
};

export default Equiphotel;