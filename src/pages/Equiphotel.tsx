import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Train, Users, Utensils, Hotel, Car, Building2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { RelatedEvents } from "@/components/RelatedEvents";
import { EventHotelPromo } from "@/components/EventHotelPromo";
import { EasyAccessSection } from "@/components/EasyAccessSection";
import hotelMetroFacade from "@/assets/hotel-metro-facade.jpg";
import petitDejeuner from "@/assets/petit-dejeuner.jpg";
import chambreDouble from "@/assets/chambre-double.jpg";
import heroSeminaire from "@/assets/hero-seminaire.jpg";
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
      <Header />
      <main>
        <section className="relative py-24 overflow-hidden">
          <img src={heroSeminaire} alt="Equiphotel" className="absolute inset-0 w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="text-left">
                <div className="inline-flex items-center gap-2 bg-amber-600/90 backdrop-blur-sm text-white px-4 py-2 rounded-full mb-4 shadow-lg">
                  <Building2 className="w-4 h-4" />
                  <span className="font-medium text-sm uppercase tracking-wider">{t('equiphotel.badge')}</span>
                </div>
                <h1 className="font-display text-4xl md:text-6xl text-white drop-shadow-lg mb-4">{t('equiphotel.title')}</h1>
                <p className="text-white/90 text-lg md:text-xl">{t('equiphotel.subtitle')}</p>
              </div>

              <div className="bg-amber-50/95 dark:bg-amber-950/90 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-2xl border border-amber-200/50 dark:border-amber-800/50">
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3 bg-white dark:bg-card px-4 py-3 rounded-xl shadow-sm border border-amber-200 dark:border-amber-800">
                    <Calendar className="w-5 h-5 text-amber-600" />
                    <span className="text-amber-800 dark:text-amber-200 font-medium">{t("equiphotel.dateDisplay")}</span>
                  </div>
                  <div className="flex items-center gap-3 bg-white dark:bg-card px-4 py-3 rounded-xl shadow-sm border border-amber-200 dark:border-amber-800">
                    <MapPin className="w-5 h-5 text-amber-600" />
                    <span className="text-amber-800 dark:text-amber-200 font-medium">{t("equiphotel.venue")}</span>
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-2 mb-6">
                  {[
                    { value: countdown.days, label: t("agriculture.countdown.days") },
                    { value: countdown.hours, label: t("agriculture.countdown.hours") },
                    { value: countdown.minutes, label: t("agriculture.countdown.minutes") },
                    { value: countdown.seconds, label: t("agriculture.countdown.seconds") },
                  ].map((item, index) => (
                    <div key={index} className="bg-white dark:bg-card border-2 border-amber-200 dark:border-amber-700 rounded-xl p-3 text-center shadow-sm">
                      <div className="text-2xl md:text-3xl font-bold text-amber-700 dark:text-amber-400">{item.value}</div>
                      <div className="text-xs text-amber-600 dark:text-amber-500 uppercase tracking-wide">{item.label}</div>
                    </div>
                  ))}
                </div>

                <a href="https://www.booking.com" target="_blank" rel="noopener noreferrer" className="block">
                  <Button size="lg" className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold shadow-lg">
                    <Hotel className="w-5 h-5 mr-2" />{t('agriculture.bookAccommodation')}
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-gradient-to-br from-amber-50 via-yellow-50 to-amber-50 dark:from-amber-950/30 dark:via-yellow-950/20 dark:to-amber-950/30">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-3xl md:text-4xl text-center text-foreground mb-8">{t("agriculture.exclusiveOffers")}</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="bg-white dark:bg-card rounded-2xl p-6 shadow-xl border-2 border-amber-200 dark:border-amber-800/50 hover:scale-105 transition-transform duration-300 text-center">
                <div className="w-14 h-14 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Car className="w-7 h-7 text-amber-600" />
                </div>
                <h3 className="font-display text-xl text-foreground mb-2">{t("agriculture.offers.parking.title")}</h3>
                <p className="text-muted-foreground text-sm mb-4">{t("agriculture.offers.parking.desc")}</p>
                <div className="inline-block bg-amber-600 text-white font-bold px-4 py-2 rounded-full">{t("agriculture.offers.parking.price")}</div>
              </div>
              <div className="bg-white dark:bg-card rounded-2xl p-6 shadow-xl border-2 border-yellow-200 dark:border-yellow-800/50 hover:scale-105 transition-transform duration-300 text-center">
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

        <section className="py-16 bg-gradient-to-br from-amber-50 via-white to-yellow-50 dark:from-amber-950/20 dark:via-card dark:to-yellow-950/20">
          <div className="container mx-auto px-4">
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
                <img src={heroSeminaire} alt="Equiphotel" className="max-w-xs md:max-w-sm rounded-xl shadow-xl object-cover" />
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
                  <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center mx-auto mb-4 -mt-10 relative z-10 border-4 border-card"><Utensils className="w-6 h-6 text-amber-600" /></div>
                  <h3 className="font-display text-xl text-foreground mb-2">{t('agriculture.breakfast')}</h3>
                  <p className="text-muted-foreground text-sm">{t('agriculture.breakfastDesc')}</p>
                </div>
              </div>
              <div className="bg-card overflow-hidden border border-border">
                <div className="aspect-[4/3] overflow-hidden"><img src={hotelMetroFacade} alt="Métro" className="w-full h-full object-cover" /></div>
                <div className="p-6 text-center">
                  <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center mx-auto mb-4 -mt-10 relative z-10 border-4 border-card"><Train className="w-6 h-6 text-amber-600" /></div>
                  <h3 className="font-display text-xl text-foreground mb-2">{t('agriculture.transport')}</h3>
                  <p className="text-muted-foreground text-sm">{t('agriculture.transportDesc')}</p>
                </div>
              </div>
              <div className="bg-card overflow-hidden border border-border">
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
          compact
        />

        <RelatedEvents currentEventId="equiphotel" />
      </main>
      <Footer />
    </div>
  );
};

export default Equiphotel;
