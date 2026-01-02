import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Train, Users, Utensils, Hotel, Car, Landmark, Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { RelatedEvents } from "@/components/RelatedEvents";
import { EventHotelPromo } from "@/components/EventHotelPromo";
import { EasyAccessSection } from "@/components/EasyAccessSection";
import { EventBackButton } from "@/components/EventBackButton";
import hotelMetroFacade from "@/assets/hotel-metro-facade.jpg";
import petitDejeuner from "@/assets/petit-dejeuner.jpg";
import chambreDouble from "@/assets/chambre-double.jpg";
import congresHero from "@/assets/congres-accdom-hero.png";
import congresLogo from "@/assets/congres-accdom-logo.jpeg";
import { useState, useEffect } from "react";

const CongresACCDOM = () => {
  const { t } = useLanguage();
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date('2026-11-12T09:00:00');
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
        {/* Hero Section - Mika Style with tropical gradient */}
        <section className="relative py-16 md:py-24 overflow-hidden">
          {/* Animated gradient background inspired by tropical outre-mer */}
          <div className="absolute inset-0 bg-gradient-to-br from-teal-700 via-emerald-600 to-sky-600 animate-gradient-slow">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.15)_0%,transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,182,193,0.2)_0%,transparent_50%)]" />
          </div>
          
          {/* Decorative circles */}
          <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-teal-400/20 blur-2xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-pink-400/20 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              {/* Left: Hero poster with glow effect */}
              <div className="relative flex justify-center md:justify-start order-2 md:order-1">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-teal-500 via-emerald-400 to-pink-400 rounded-2xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
                  <img 
                    src={congresHero} 
                    alt="33e Congrès ACCDOM" 
                    className="relative rounded-xl shadow-2xl max-w-sm md:max-w-md w-full transform group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Right: Event info and countdown */}
              <div className="text-left order-1 md:order-2">
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full mb-4 shadow-lg border border-white/30">
                  <Globe className="w-4 h-4" />
                  <span className="font-medium text-sm uppercase tracking-wider">{t('congresACCDOM.badge')}</span>
                </div>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white drop-shadow-lg mb-4">
                  33<sup className="text-xl">e</sup> Congrès de l'ACCDOM
                </h1>
                <p className="text-white/90 text-lg md:text-xl mb-2 font-medium">
                  "Les Outre-Mer : La force d'inventer l'avenir"
                </p>
                <p className="text-white/80 text-base mb-6">{t('congresACCDOM.subtitle')}</p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl border border-white/20">
                    <Calendar className="w-5 h-5 text-teal-200" />
                    <span className="text-white font-medium">12-14 novembre 2026</span>
                  </div>
                  <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl border border-white/20">
                    <MapPin className="w-5 h-5 text-teal-200" />
                    <span className="text-white font-medium">Mercure Porte de Versailles, Paris</span>
                  </div>
                </div>

                {/* Countdown */}
                <div className="grid grid-cols-4 gap-2 mb-6">
                  {[
                    { value: countdown.days, label: t("agriculture.countdown.days") },
                    { value: countdown.hours, label: t("agriculture.countdown.hours") },
                    { value: countdown.minutes, label: t("agriculture.countdown.minutes") },
                    { value: countdown.seconds, label: t("agriculture.countdown.seconds") },
                  ].map((item, index) => (
                    <div key={index} className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl p-3 text-center">
                      <div className="text-2xl md:text-3xl font-bold text-white">{item.value}</div>
                      <div className="text-xs text-white/80 uppercase tracking-wide">{item.label}</div>
                    </div>
                  ))}
                </div>

                <a href="/nos-chambres" className="block">
                  <Button size="lg" className="w-full bg-white hover:bg-white/90 text-teal-700 font-bold shadow-lg">
                    <Hotel className="w-5 h-5 mr-2" />{t('agriculture.bookAccommodation')}
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Exclusive Offers */}
        <section className="py-12 bg-gradient-to-br from-teal-50 via-emerald-50 to-sky-50 dark:from-teal-950/30 dark:via-emerald-950/20 dark:to-sky-950/30">
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
              <div className="bg-white dark:bg-card rounded-2xl p-6 shadow-xl border-2 border-emerald-200 dark:border-emerald-800/50 hover:scale-105 transition-transform duration-300 text-center">
                <div className="w-14 h-14 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Car className="w-7 h-7 text-emerald-600" />
                </div>
                <h3 className="font-display text-xl text-foreground mb-2">{t("agriculture.offers.taxi.title")}</h3>
                <p className="text-muted-foreground text-sm mb-4">{t("agriculture.offers.taxi.desc")}</p>
                <div className="inline-block bg-emerald-600 text-white font-bold px-4 py-2 rounded-full">{t("agriculture.offers.taxi.discount")}</div>
              </div>
            </div>
          </div>
        </section>

        <EasyAccessSection 
          venue="Mercure Porte de Versailles"
          travelTime="20 min"
          metroLineKey="easyAccess.lines.line12"
          metroRouteKey="easyAccess.routes.paris"
          accentColor="from-teal-600 via-emerald-600 to-sky-600"
        />

        {/* About Section */}
        <section className="py-16 bg-gradient-to-br from-teal-50 via-white to-emerald-50 dark:from-teal-950/20 dark:via-card dark:to-emerald-950/20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Globe className="w-8 h-8 text-teal-600" />
                  <h2 className="font-display text-3xl md:text-4xl text-foreground">{t('congresACCDOM.about')}</h2>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  L'ACCDOM (Association des Communes et Collectivités d'Outre-Mer) organise son 33e Congrès annuel à Paris, réunissant les élus et décideurs des territoires ultramarins français : Guadeloupe, Martinique, Guyane, La Réunion, Mayotte, et les collectivités du Pacifique.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Sous le thème "Les Outre-Mer : La force d'inventer l'avenir", ce congrès sera l'occasion d'échanger sur les défis et opportunités des territoires ultramarins : transition écologique, développement économique, coopération régionale et innovation sociale.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Trois jours de débats, conférences et networking entre maires, présidents de collectivités et acteurs du développement ultramarin.
                </p>
              </div>
              <div className="flex justify-center">
                <div className="bg-white dark:bg-card p-6 rounded-2xl shadow-xl">
                  <img src={congresLogo} alt="ACCDOM - Association des Communes et Collectivités d'Outre-Mer" className="max-w-xs md:max-w-sm object-contain" />
                </div>
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
              <div className="bg-card overflow-hidden border border-border rounded-xl">
                <div className="aspect-[4/3] overflow-hidden"><img src={petitDejeuner} alt="Petit-déjeuner" className="w-full h-full object-cover" /></div>
                <div className="p-6 text-center">
                  <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900/30 rounded-full flex items-center justify-center mx-auto mb-4 -mt-10 relative z-10 border-4 border-card"><Utensils className="w-6 h-6 text-teal-600" /></div>
                  <h3 className="font-display text-xl text-foreground mb-2">{t('agriculture.breakfast')}</h3>
                  <p className="text-muted-foreground text-sm">{t('agriculture.breakfastDesc')}</p>
                </div>
              </div>
              <div className="bg-card overflow-hidden border border-border rounded-xl">
                <div className="aspect-[4/3] overflow-hidden"><img src={hotelMetroFacade} alt="Métro" className="w-full h-full object-cover" /></div>
                <div className="p-6 text-center">
                  <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900/30 rounded-full flex items-center justify-center mx-auto mb-4 -mt-10 relative z-10 border-4 border-card"><Train className="w-6 h-6 text-teal-600" /></div>
                  <h3 className="font-display text-xl text-foreground mb-2">{t('agriculture.transport')}</h3>
                  <p className="text-muted-foreground text-sm">{t('agriculture.transportDesc')}</p>
                </div>
              </div>
              <div className="bg-card overflow-hidden border border-border rounded-xl">
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
          eventName="Congrès de l'ACCDOM"
          accentColor="from-teal-600 via-emerald-600 to-sky-600"
          urgencyMessage={t("congresACCDOM.urgencyMessage")}
          eventType="salon"
        />

        <RelatedEvents currentEventId="congres-accdom" />
      </main>
      <Footer />
    </div>
  );
};

export default CongresACCDOM;
