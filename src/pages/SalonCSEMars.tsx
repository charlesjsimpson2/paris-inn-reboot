import { Header } from "@/components/Header";
import { SEO } from "@/components/SEO";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Train, Users, Clock, Utensils, Hotel, Car, Briefcase } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { RelatedEvents } from "@/components/RelatedEvents";
import { EventHotelPromo } from "@/components/EventHotelPromo";
import { EasyAccessSection } from "@/components/EasyAccessSection";
import { EventBackButton } from "@/components/EventBackButton";
import hotelMetroFacade from "@/assets/hotel-metro-facade.jpg";
import petitDejeuner from "@/assets/petit-dejeuner.webp";
import chambreDouble from "@/assets/chambre-double.webp";
import salonCSEHero from "@/assets/salon-cse-hero.png";
import salonCSEElus from "@/assets/salon-cse-elus.png";
import { useState, useEffect } from "react";

const SalonCSEMars = () => {
  const { t } = useLanguage();
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date('2026-03-18T09:00:00');
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
      <SEO title="Salon des CSE Mars 2026 — Hôtel à Paris" description="Séjournez à l'Hôtel Inn Design Paris pour le Salon des CSE de mars. Accès direct Porte de Champerret." />
      <EventBackButton />
      <main>
        {/* Hero Section - Sidebar Layout */}
        <section className="relative py-16 md:py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-10 left-10 w-32 h-32 bg-blue-400 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-48 h-48 bg-slate-400 rounded-full blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              {/* Image Side */}
              <div className="flex justify-center">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/30 to-slate-500/30 rounded-2xl blur-xl"></div>
                  <img 
                    src={salonCSEHero} 
                    alt="Salon CSE Paris" 
                    className="relative max-w-xs md:max-w-sm rounded-2xl shadow-2xl border-4 border-white/20"
                  />
                </div>
              </div>

              {/* Content Side */}
              <div className="text-left">
                <div className="inline-flex items-center gap-2 bg-blue-500/90 backdrop-blur-sm text-white px-4 py-2 rounded-full mb-4 shadow-lg">
                  <Briefcase className="w-4 h-4" />
                  <span className="font-medium text-sm uppercase tracking-wider">{t('salonCSE.badge')}</span>
                </div>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white drop-shadow-lg mb-4">{t('salonCSE.title')}</h1>
                <p className="text-white/90 text-lg md:text-xl mb-8">{t('salonCSE.subtitle')}</p>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl border border-white/20">
                    <Calendar className="w-5 h-5 text-blue-300" />
                    <span className="text-white font-medium">{t("salonCSE.mars.dateDisplay")}</span>
                  </div>
                  <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl border border-white/20">
                    <MapPin className="w-5 h-5 text-blue-300" />
                    <span className="text-white font-medium">{t("salonCSE.venue")}</span>
                  </div>
                </div>

                {/* Countdown */}
                <div className="grid grid-cols-4 gap-2 mb-8">
                  {[
                    { value: countdown.days, label: t("agriculture.countdown.days") },
                    { value: countdown.hours, label: t("agriculture.countdown.hours") },
                    { value: countdown.minutes, label: t("agriculture.countdown.minutes") },
                    { value: countdown.seconds, label: t("agriculture.countdown.seconds") },
                  ].map((item, index) => (
                    <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-3 text-center">
                      <div className="text-2xl md:text-3xl font-bold text-white">{item.value}</div>
                      <div className="text-xs text-blue-200 uppercase tracking-wide">{item.label}</div>
                    </div>
                  ))}
                </div>

                <a href="https://www.secure-hotel-booking.com/d-edge/Hotel-inn-Paris-Place-d-Italie/JJGV/fr-FR/DateSelection" target="_blank" rel="noopener noreferrer" className="block">
                  <Button size="lg" className="w-full bg-white text-blue-800 hover:bg-blue-50 font-bold shadow-lg">
                    <Hotel className="w-5 h-5 mr-2" />{t('agriculture.bookAccommodation')}
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Exclusive Offers Section */}
        <section className="py-12 bg-gradient-to-br from-blue-50 via-slate-50 to-blue-50 dark:from-blue-950/30 dark:via-slate-950/20 dark:to-blue-950/30">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-3xl md:text-4xl text-center text-foreground mb-8">{t("agriculture.exclusiveOffers")}</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="bg-white dark:bg-card rounded-2xl p-6 shadow-xl border-2 border-blue-200 dark:border-blue-800/50 hover:scale-105 transition-transform duration-300 text-center">
                <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Car className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="font-display text-xl text-foreground mb-2">{t("agriculture.offers.parking.title")}</h3>
                <p className="text-muted-foreground text-sm mb-4">{t("agriculture.offers.parking.desc")}</p>
                <div className="inline-block bg-blue-600 text-white font-bold px-4 py-2 rounded-full">{t("agriculture.offers.parking.price")}</div>
              </div>
              <div className="bg-white dark:bg-card rounded-2xl p-6 shadow-xl border-2 border-slate-200 dark:border-slate-800/50 hover:scale-105 transition-transform duration-300 text-center">
                <div className="w-14 h-14 bg-slate-100 dark:bg-slate-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Car className="w-7 h-7 text-slate-600" />
                </div>
                <h3 className="font-display text-xl text-foreground mb-2">{t("agriculture.offers.taxi.title")}</h3>
                <p className="text-muted-foreground text-sm mb-4">{t("agriculture.offers.taxi.desc")}</p>
                <div className="inline-block bg-slate-600 text-white font-bold px-4 py-2 rounded-full">{t("agriculture.offers.taxi.discount")}</div>
              </div>
            </div>
          </div>
        </section>

        <EasyAccessSection 
          venue={t("salonCSE.venue")}
          travelTime="25 min"
          metroLineKey="easyAccess.lines.line12"
          metroRouteKey="easyAccess.routes.porteDeVersailles"
          accentColor="from-blue-600 via-blue-700 to-slate-600"
        />

        {/* Event Description */}
        <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-slate-50 dark:from-blue-950/20 dark:via-card dark:to-slate-950/20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Briefcase className="w-8 h-8 text-blue-600" />
                  <h2 className="font-display text-3xl md:text-4xl text-foreground">{t('salonCSE.about')}</h2>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">{t('salonCSE.desc1')}</p>
                <p className="text-muted-foreground text-lg leading-relaxed">{t('salonCSE.desc2')}</p>
              </div>
              <div className="flex justify-center">
                <img src={salonCSEElus} alt="Élus CSE" className="max-w-full rounded-xl shadow-xl object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Comfort Section */}
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
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4 -mt-10 relative z-10 border-4 border-card"><Utensils className="w-6 h-6 text-blue-600" /></div>
                  <h3 className="font-display text-xl text-foreground mb-2">{t('agriculture.breakfast')}</h3>
                  <p className="text-muted-foreground text-sm">{t('agriculture.breakfastDesc')}</p>
                </div>
              </div>
              <div className="bg-card overflow-hidden border border-border">
                <div className="aspect-[4/3] overflow-hidden"><img src={hotelMetroFacade} alt="Métro" className="w-full h-full object-cover" /></div>
                <div className="p-6 text-center">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4 -mt-10 relative z-10 border-4 border-card"><Train className="w-6 h-6 text-blue-600" /></div>
                  <h3 className="font-display text-xl text-foreground mb-2">{t('agriculture.transport')}</h3>
                  <p className="text-muted-foreground text-sm">{t('agriculture.transportDesc')}</p>
                </div>
              </div>
              <div className="bg-card overflow-hidden border border-border">
                <div className="aspect-[4/3] overflow-hidden"><img src={chambreDouble} alt="Chambre" className="w-full h-full object-cover" /></div>
                <div className="p-6 text-center">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4 -mt-10 relative z-10 border-4 border-card"><Users className="w-6 h-6 text-blue-600" /></div>
                  <h3 className="font-display text-xl text-foreground mb-2">{t('agriculture.rooms')}</h3>
                  <p className="text-muted-foreground text-sm">{t('agriculture.roomsDesc')}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <EventHotelPromo 
          eventName={t("salonCSE.eventName")}
          accentColor="from-blue-600 via-blue-700 to-slate-600"
          urgencyMessage={t("salonCSE.urgencyMessage")}
          eventType="salon"
          compact
        />

        <RelatedEvents currentEventId="salon-cse-mars" />
      </main>
      <Footer />
    </div>
  );
};

export default SalonCSEMars;
