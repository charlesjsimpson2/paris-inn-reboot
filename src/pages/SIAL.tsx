import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Train, Users, Utensils, Hotel, Car, UtensilsCrossed } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { RelatedEvents } from "@/components/RelatedEvents";
import { EventHotelPromo } from "@/components/EventHotelPromo";
import { EasyAccessSection } from "@/components/EasyAccessSection";
import { EventBackButton } from "@/components/EventBackButton";
import hotelMetroFacade from "@/assets/hotel-metro-facade.jpg";
import petitDejeuner from "@/assets/petit-dejeuner.jpg";
import chambreDouble from "@/assets/chambre-double.jpg";
import sialHero from "@/assets/sial-hero.jpeg";
import sialEvent from "@/assets/sial-event.webp";
import { useState, useEffect } from "react";

const SIAL = () => {
  const { t } = useLanguage();
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date('2026-10-17T09:00:00');
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
      <EventBackButton />
      <main>
        <section className="relative pt-20 pb-20 overflow-hidden min-h-[90vh] flex items-center">
          {/* Animated gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 via-orange-500 to-amber-600 animate-gradient" />
          
          {/* Animated circles */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-20 -left-20 w-96 h-96 bg-yellow-300/30 rounded-full blur-3xl animate-float" />
            <div className="absolute top-1/2 -right-32 w-80 h-80 bg-orange-400/40 rounded-full blur-3xl animate-float animation-delay-400" />
            <div className="absolute -bottom-20 left-1/3 w-72 h-72 bg-amber-500/30 rounded-full blur-3xl animate-float animation-delay-600" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-10 items-center">
                {/* Image portrait à gauche avec effet glow */}
                <div className="flex justify-center order-2 md:order-1 animate-fade-up">
                  <div className="relative group">
                    <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400 via-orange-500 to-amber-600 rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500 animate-pulse-glow" />
                    <img 
                      src={sialHero} 
                      alt="SIAL Paris 2026" 
                      className="relative w-full max-w-sm md:max-w-md rounded-2xl shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-500" 
                    />
                  </div>
                </div>
                
                {/* Texte à droite */}
                <div className="text-center md:text-left order-1 md:order-2">
                  <div className="animate-fade-up">
                    <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-5 py-2.5 rounded-full mb-6 border border-white/30">
                      <UtensilsCrossed className="w-5 h-5 text-yellow-300" />
                      <span className="text-white uppercase tracking-widest text-sm font-bold">{t('sial.badge')}</span>
                    </div>
                  </div>
                  
                  <h1 className="font-display text-5xl md:text-7xl text-white mb-4 drop-shadow-2xl animate-fade-up animation-delay-200">
                    {t('sial.title')}
                  </h1>
                  
                  <p className="text-white/90 text-lg md:text-xl mb-6 animate-fade-up animation-delay-300">{t('sial.subtitle')}</p>

                  <div className="space-y-3 mb-6 animate-fade-up animation-delay-400">
                    <div className="flex items-center gap-3 bg-white/20 backdrop-blur-md px-4 py-3 rounded-xl border border-white/30">
                      <Calendar className="w-5 h-5 text-yellow-300" />
                      <span className="text-white font-medium">{t("sial.dateDisplay")}</span>
                    </div>
                    <div className="flex items-center gap-3 bg-white/20 backdrop-blur-md px-4 py-3 rounded-xl border border-white/30">
                      <MapPin className="w-5 h-5 text-yellow-300" />
                      <span className="text-white font-medium">{t("sial.venue")}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-4 gap-2 mb-6 animate-fade-up animation-delay-500">
                    {[
                      { value: countdown.days, label: t("agriculture.countdown.days") },
                      { value: countdown.hours, label: t("agriculture.countdown.hours") },
                      { value: countdown.minutes, label: t("agriculture.countdown.minutes") },
                      { value: countdown.seconds, label: t("agriculture.countdown.seconds") },
                    ].map((item, index) => (
                      <div key={index} className="bg-white/20 backdrop-blur-md border border-white/30 rounded-xl p-3 text-center">
                        <div className="text-2xl md:text-3xl font-bold text-white">{item.value}</div>
                        <div className="text-xs text-white/80 uppercase tracking-wide">{item.label}</div>
                      </div>
                    ))}
                  </div>

                  <a href="https://www.booking.com" target="_blank" rel="noopener noreferrer" className="block animate-fade-up animation-delay-600">
                    <Button size="lg" className="w-full bg-white text-orange-600 hover:bg-white/90 font-bold shadow-lg">
                      <Hotel className="w-5 h-5 mr-2" />{t('agriculture.bookAccommodation')}
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-gradient-to-br from-orange-50 via-amber-50 to-orange-50 dark:from-orange-950/30 dark:via-amber-950/20 dark:to-orange-950/30">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-3xl md:text-4xl text-center text-foreground mb-8">{t("agriculture.exclusiveOffers")}</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="bg-white dark:bg-card rounded-2xl p-6 shadow-xl border-2 border-orange-200 dark:border-orange-800/50 hover:scale-105 transition-transform duration-300 text-center">
                <div className="w-14 h-14 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Car className="w-7 h-7 text-orange-600" />
                </div>
                <h3 className="font-display text-xl text-foreground mb-2">{t("agriculture.offers.parking.title")}</h3>
                <p className="text-muted-foreground text-sm mb-4">{t("agriculture.offers.parking.desc")}</p>
                <div className="inline-block bg-orange-600 text-white font-bold px-4 py-2 rounded-full">{t("agriculture.offers.parking.price")}</div>
              </div>
              <div className="bg-white dark:bg-card rounded-2xl p-6 shadow-xl border-2 border-amber-200 dark:border-amber-800/50 hover:scale-105 transition-transform duration-300 text-center">
                <div className="w-14 h-14 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Car className="w-7 h-7 text-amber-600" />
                </div>
                <h3 className="font-display text-xl text-foreground mb-2">{t("agriculture.offers.taxi.title")}</h3>
                <p className="text-muted-foreground text-sm mb-4">{t("agriculture.offers.taxi.desc")}</p>
                <div className="inline-block bg-amber-600 text-white font-bold px-4 py-2 rounded-full">{t("agriculture.offers.taxi.discount")}</div>
              </div>
            </div>
          </div>
        </section>

        <EasyAccessSection 
          venue={t("sial.venue")}
          travelTime="30 min"
          metroLineKey="easyAccess.lines.rer"
          metroRouteKey="easyAccess.routes.villepinte"
          accentColor="from-orange-600 via-orange-700 to-amber-600"
        />

        <section className="py-16 bg-gradient-to-br from-orange-50 via-white to-amber-50 dark:from-orange-950/20 dark:via-card dark:to-amber-950/20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <UtensilsCrossed className="w-8 h-8 text-orange-600" />
                  <h2 className="font-display text-3xl md:text-4xl text-foreground">{t('sial.about')}</h2>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">{t('sial.desc1')}</p>
                <p className="text-muted-foreground text-lg leading-relaxed">{t('sial.desc2')}</p>
              </div>
              <div className="flex justify-center">
                <div className="aspect-[4/3] w-full max-w-md overflow-hidden rounded-xl shadow-xl">
                  <img src={sialEvent} alt="SIAL Paris Event" className="w-full h-full object-cover" />
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
              <div className="bg-card overflow-hidden border border-border">
                <div className="aspect-[4/3] overflow-hidden"><img src={petitDejeuner} alt="Petit-déjeuner" className="w-full h-full object-cover" /></div>
                <div className="p-6 text-center">
                  <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mx-auto mb-4 -mt-10 relative z-10 border-4 border-card"><Utensils className="w-6 h-6 text-orange-600" /></div>
                  <h3 className="font-display text-xl text-foreground mb-2">{t('agriculture.breakfast')}</h3>
                  <p className="text-muted-foreground text-sm">{t('agriculture.breakfastDesc')}</p>
                </div>
              </div>
              <div className="bg-card overflow-hidden border border-border">
                <div className="aspect-[4/3] overflow-hidden"><img src={hotelMetroFacade} alt="Métro" className="w-full h-full object-cover" /></div>
                <div className="p-6 text-center">
                  <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mx-auto mb-4 -mt-10 relative z-10 border-4 border-card"><Train className="w-6 h-6 text-orange-600" /></div>
                  <h3 className="font-display text-xl text-foreground mb-2">{t('agriculture.transport')}</h3>
                  <p className="text-muted-foreground text-sm">{t('agriculture.transportDesc')}</p>
                </div>
              </div>
              <div className="bg-card overflow-hidden border border-border">
                <div className="aspect-[4/3] overflow-hidden"><img src={chambreDouble} alt="Chambre" className="w-full h-full object-cover" /></div>
                <div className="p-6 text-center">
                  <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mx-auto mb-4 -mt-10 relative z-10 border-4 border-card"><Users className="w-6 h-6 text-orange-600" /></div>
                  <h3 className="font-display text-xl text-foreground mb-2">{t('agriculture.rooms')}</h3>
                  <p className="text-muted-foreground text-sm">{t('agriculture.roomsDesc')}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <EventHotelPromo 
          eventName={t("sial.eventName")}
          accentColor="from-orange-600 via-orange-700 to-amber-600"
          urgencyMessage={t("sial.urgencyMessage")}
          compact
        />

        <RelatedEvents currentEventId="sial" />
      </main>
      <Footer />
    </div>
  );
};

export default SIAL;
