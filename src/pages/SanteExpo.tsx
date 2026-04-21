import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Train, Users, Utensils, Hotel, Car, Heart } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { RelatedEvents } from "@/components/RelatedEvents";
import { EventHotelPromo } from "@/components/EventHotelPromo";
import { EasyAccessSection } from "@/components/EasyAccessSection";
import { EventBackButton } from "@/components/EventBackButton";
import hotelMetroFacade from "@/assets/hotel-metro-facade.jpg";
import petitDejeuner from "@/assets/petit-dejeuner.webp";
import chambreDouble from "@/assets/chambre-double.webp";
import santeExpoHero from "@/assets/sante-expo-logo-new.png";
import santeExpoEvent from "@/assets/sante-expo-event.jpg";
import { useState, useEffect } from "react";

const SanteExpo = () => {
  const { t } = useLanguage();
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date('2026-05-19T09:00:00');
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
        title="Santé Expo 2026 — Hôtel proche Porte de Versailles"
        description="Santé Expo / HealthCare Week Paris 2026 : hébergement à Paris pour le salon hospitalier. Offres parking et taxi exclusives."
        canonical="/evenements/sante-expo"
      />
      <Header />
      <EventBackButton />
      <main>
        <section className="py-24 bg-gradient-to-br from-teal-50 via-cyan-50 to-teal-50 dark:from-teal-950/30 dark:via-cyan-950/20 dark:to-teal-950/30">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="order-2 md:order-1">
                <img src={santeExpoHero} alt="Santé Expo" loading="eager" fetchPriority="high" decoding="async" className="rounded-2xl shadow-2xl w-full max-w-lg mx-auto object-cover" />
              </div>

              <div className="order-1 md:order-2">
                <div className="inline-flex items-center gap-2 bg-teal-600/90 backdrop-blur-sm text-white px-4 py-2 rounded-full mb-4 shadow-lg">
                  <Heart className="w-4 h-4" />
                  <span className="font-medium text-sm uppercase tracking-wider">{t('santeExpo.badge')}</span>
                </div>
                <h1 className="font-display text-4xl md:text-6xl text-foreground mb-4">{t('santeExpo.title')}</h1>
                <p className="text-muted-foreground text-lg md:text-xl mb-6">{t('santeExpo.subtitle')}</p>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3 bg-white dark:bg-card px-4 py-3 rounded-xl shadow-sm border border-teal-200 dark:border-teal-800">
                    <Calendar className="w-5 h-5 text-teal-600" />
                    <span className="text-teal-800 dark:text-teal-200 font-medium">{t("santeExpo.dateDisplay")}</span>
                  </div>
                  <div className="flex items-center gap-3 bg-white dark:bg-card px-4 py-3 rounded-xl shadow-sm border border-teal-200 dark:border-teal-800">
                    <MapPin className="w-5 h-5 text-teal-600" />
                    <span className="text-teal-800 dark:text-teal-200 font-medium">{t("santeExpo.venue")}</span>
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-2 mb-6">
                  {[
                    { value: countdown.days, label: t("agriculture.countdown.days") },
                    { value: countdown.hours, label: t("agriculture.countdown.hours") },
                    { value: countdown.minutes, label: t("agriculture.countdown.minutes") },
                    { value: countdown.seconds, label: t("agriculture.countdown.seconds") },
                  ].map((item, index) => (
                    <div key={index} className="bg-white dark:bg-card border-2 border-teal-200 dark:border-teal-700 rounded-xl p-3 text-center shadow-sm">
                      <div className="text-2xl md:text-3xl font-bold text-teal-700 dark:text-teal-400">{item.value}</div>
                      <div className="text-xs text-teal-600 dark:text-teal-500 uppercase tracking-wide">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-gradient-to-br from-teal-50 via-cyan-50 to-teal-50 dark:from-teal-950/30 dark:via-cyan-950/20 dark:to-teal-950/30">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-3xl md:text-4xl text-center text-foreground mb-8">{t("agriculture.exclusiveOffers")}</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="bg-white dark:bg-card rounded-2xl p-6 shadow-xl border-2 border-teal-200 dark:border-teal-800/50 hover:scale-105 transition-transform duration-300 text-center">
                <div className="w-14 h-14 bg-teal-100 dark:bg-teal-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Car className="w-7 h-7 text-teal-600" />
                </div>
                <h3 className="font-display text-xl text-foreground mb-2">{t("agriculture.offers.parking.title")}</h3>
                <p className="text-muted-foreground text-sm mb-4">{t("agriculture.offers.parking.desc")}</p>
                <div className="inline-block bg-teal-600 text-white font-bold px-4 py-2 rounded-full">{t("agriculture.offers.parking.price")}</div>
              </div>
              <div className="bg-white dark:bg-card rounded-2xl p-6 shadow-xl border-2 border-cyan-200 dark:border-cyan-800/50 hover:scale-105 transition-transform duration-300 text-center">
                <div className="w-14 h-14 bg-cyan-100 dark:bg-cyan-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Car className="w-7 h-7 text-cyan-600" />
                </div>
                <h3 className="font-display text-xl text-foreground mb-2">{t("agriculture.offers.taxi.title")}</h3>
                <p className="text-muted-foreground text-sm mb-4">{t("agriculture.offers.taxi.desc")}</p>
                <div className="inline-block bg-cyan-600 text-white font-bold px-4 py-2 rounded-full">{t("agriculture.offers.taxi.discount")}</div>
              </div>
            </div>
          </div>
        </section>

        <EasyAccessSection 
          venue={t("santeExpo.venue")}
          travelTime="25 min"
          metroLineKey="easyAccess.lines.line12"
          metroRouteKey="easyAccess.routes.porteDeVersailles"
          accentColor="from-teal-600 via-teal-700 to-cyan-600"
        />

        <section className="py-16 bg-gradient-to-br from-teal-50 via-white to-cyan-50 dark:from-teal-950/20 dark:via-card dark:to-cyan-950/20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Heart className="w-8 h-8 text-teal-600" />
                  <h2 className="font-display text-3xl md:text-4xl text-foreground">{t('santeExpo.about')}</h2>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">{t('santeExpo.desc1')}</p>
                <p className="text-muted-foreground text-lg leading-relaxed">{t('santeExpo.desc2')}</p>
              </div>
              <div className="flex justify-center">
                <img src={santeExpoEvent} alt="Santé Expo" className="max-w-xs md:max-w-sm rounded-xl shadow-xl object-cover" />
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
              <div className="bg-card overflow-hidden border border-border">
                <div className="aspect-[4/3] overflow-hidden"><img src={petitDejeuner} alt="Petit-déjeuner" className="w-full h-full object-cover" /></div>
                <div className="p-6 text-center">
                  <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900/30 rounded-full flex items-center justify-center mx-auto mb-4 -mt-10 relative z-10 border-4 border-card"><Utensils className="w-6 h-6 text-teal-600" /></div>
                  <h3 className="font-display text-xl text-foreground mb-2">{t('agriculture.breakfast')}</h3>
                  <p className="text-muted-foreground text-sm">{t('agriculture.breakfastDesc')}</p>
                </div>
              </div>
              <div className="bg-card overflow-hidden border border-border">
                <div className="aspect-[4/3] overflow-hidden"><img src={hotelMetroFacade} alt="Métro" className="w-full h-full object-cover" /></div>
                <div className="p-6 text-center">
                  <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900/30 rounded-full flex items-center justify-center mx-auto mb-4 -mt-10 relative z-10 border-4 border-card"><Train className="w-6 h-6 text-teal-600" /></div>
                  <h3 className="font-display text-xl text-foreground mb-2">{t('agriculture.transport')}</h3>
                  <p className="text-muted-foreground text-sm">{t('agriculture.transportDesc')}</p>
                </div>
              </div>
              <div className="bg-card overflow-hidden border border-border">
                <div className="aspect-[4/3] overflow-hidden"><img src={chambreDouble} alt="Chambre" className="w-full h-full object-cover" /></div>
                <div className="p-6 text-center">
                  <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900/30 rounded-full flex items-center justify-center mx-auto mb-4 -mt-10 relative z-10 border-4 border-card"><Users className="w-6 h-6 text-teal-600" /></div>
                  <h3 className="font-display text-xl text-foreground mb-2">{t('agriculture.rooms')}</h3>
                  <p className="text-muted-foreground text-sm">{t('agriculture.roomsDesc')}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <EventHotelPromo 
          eventName={t("santeExpo.eventName")}
          accentColor="from-teal-600 via-teal-700 to-cyan-600"
          urgencyMessage={t("santeExpo.urgencyMessage")}
          eventType="salon"
          compact
        />

        <RelatedEvents currentEventId="sante-expo" />
      </main>
      <Footer />
    </div>
  );
};

export default SanteExpo;
