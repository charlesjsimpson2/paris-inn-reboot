import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Calendar, MapPin, Music, Clock, Gift, Car, Shirt, Trophy, Sparkles, Mic } from "lucide-react";
import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { RelatedEvents } from "@/components/RelatedEvents";
import { EventHotelPromo } from "@/components/EventHotelPromo";
import { EasyAccessSection } from "@/components/EasyAccessSection";

const IndochineConcert = () => {
  const { t } = useLanguage();
  
  const targetDate = new Date('2026-12-16T20:00:00').getTime();
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;
      if (distance > 0) {
        setCountdown({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-20 pb-20 overflow-hidden min-h-[90vh] flex items-center">
          <div className="absolute inset-0 bg-gradient-to-br from-red-700 via-black to-red-900" />
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-20 -left-20 w-96 h-96 bg-red-500/30 rounded-full blur-3xl animate-float" />
            <div className="absolute top-1/2 -right-32 w-80 h-80 bg-red-600/40 rounded-full blur-3xl animate-float animation-delay-400" />
          </div>
          <div className="absolute inset-0 opacity-30">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,white_2px,transparent_2px)] bg-[length:60px_60px]" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="animate-fade-up">
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-5 py-2.5 rounded-full mb-6 border border-white/30">
                  <Mic className="w-5 h-5 text-red-300 animate-bounce-subtle" />
                  <span className="text-white uppercase tracking-widest text-sm font-bold">{t('indochine.tour')}</span>
                </div>
              </div>
              
              <h1 className="font-display text-5xl md:text-7xl text-white mb-4 drop-shadow-2xl animate-fade-up animation-delay-200">
                <span className="bg-gradient-to-r from-red-300 via-white to-red-300 bg-clip-text text-transparent">
                  {t('indochine.title')}
                </span>
              </h1>
              
              <p className="text-2xl md:text-3xl text-red-200 font-display mb-8 animate-fade-up animation-delay-400">
                {t('indochine.subtitle')}
              </p>
              
              <div className="flex flex-wrap items-center justify-center gap-3 mb-10 animate-fade-up animation-delay-600">
                <div className="flex items-center gap-2 bg-white/25 backdrop-blur-md px-5 py-3 rounded-full text-white font-bold text-sm border border-white/30">
                  <Calendar className="w-5 h-5 text-red-300" />{t('indochine.dateInfo')}
                </div>
                <div className="flex items-center gap-2 bg-white/25 backdrop-blur-md px-5 py-3 rounded-full text-white font-bold text-sm border border-white/30">
                  <MapPin className="w-5 h-5 text-white" />Accor Arena Paris
                </div>
              </div>
              
              {/* Countdown */}
              <div className="inline-block bg-black/30 backdrop-blur-xl rounded-3xl p-6 border border-white/20 animate-fade-up animation-delay-600">
                <div className="flex items-center justify-center gap-2 mb-4 text-red-300">
                  <Clock className="w-5 h-5 animate-pulse" />
                  <span className="text-sm uppercase tracking-widest font-bold">{t('indochine.countdown')}</span>
                </div>
                <div className="grid grid-cols-4 gap-3 md:gap-5 text-center">
                  {[
                    { value: countdown.days, label: t('indochine.days') },
                    { value: countdown.hours, label: t('indochine.hours') },
                    { value: countdown.minutes, label: t('indochine.min') },
                    { value: countdown.seconds, label: t('indochine.sec') }
                  ].map((item, idx) => (
                    <div key={idx} className="group">
                      <div className="bg-gradient-to-br from-red-600 via-red-700 to-black rounded-2xl px-3 md:px-5 py-3 shadow-lg">
                        <span className="font-display text-2xl md:text-4xl text-white font-bold drop-shadow-lg">{item.value}</span>
                      </div>
                      <p className="text-red-200 text-xs mt-2 uppercase font-bold tracking-wide">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Exclusive Offers - 3 columns */}
        <section className="py-10 bg-gradient-to-br from-red-50 via-white to-gray-50 dark:from-red-950/20 dark:via-background dark:to-gray-950/20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-black text-white px-5 py-2 rounded-full mb-2 shadow-lg">
                  <Gift className="w-4 h-4" />
                  <span className="font-bold text-sm uppercase tracking-wider">{t('indochine.exclusiveOffers')}</span>
                </div>
                <p className="text-muted-foreground text-sm">{t('indochine.offersSubtitle')}</p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-5">
                {/* Parking */}
                <div className="bg-white dark:bg-card rounded-2xl p-5 shadow-xl border-2 border-red-200 dark:border-red-800/50 hover:scale-[1.02] transition-transform duration-300 group">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Car className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg text-foreground">{t('indochine.parking')}</h3>
                      <div className="inline-block bg-red-600 text-white font-bold text-base px-2.5 py-0.5 rounded-full">{t('indochine.parkingPrice')}</div>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm">{t('indochine.parkingDesc')}</p>
                </div>

                {/* Taxi */}
                <div className="bg-white dark:bg-card rounded-2xl p-5 shadow-xl border-2 border-gray-200 dark:border-gray-800/50 hover:scale-[1.02] transition-transform duration-300 group">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-black rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Car className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg text-foreground">{t('indochine.taxi')}</h3>
                      <div className="inline-block bg-gray-800 text-white font-bold text-base px-2.5 py-0.5 rounded-full">{t('indochine.taxiDiscount')}</div>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm">{t('indochine.taxiDesc')}</p>
                </div>

                {/* T-shirt Raffle */}
                <div className="bg-white dark:bg-card rounded-2xl p-5 shadow-xl border-2 border-red-200 dark:border-red-800/50 hover:scale-[1.02] transition-transform duration-300 group relative overflow-hidden">
                  <div className="absolute top-2 right-2">
                    <Trophy className="w-4 h-4 text-red-400" />
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-black to-red-900 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Shirt className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg text-foreground">{t('concert.raffle.title').replace('!', '')}</h3>
                      <span className="text-xs text-red-600 dark:text-red-400 font-medium uppercase tracking-wide">{t('concert.raffle.badge')}</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm">{t('concert.raffle.subtitle')}</p>
                </div>
              </div>
              
              <p className="text-center text-xs text-muted-foreground mt-4 italic">{t('indochine.offersNote')}</p>
            </div>
          </div>
        </section>

        {/* Easy Access Section */}
        <EasyAccessSection 
          venue="Accor Arena Paris"
          travelTime="~25 min"
          metroLine="Ligne 14"
          metroRoute="Place d'Italie → Bercy (correspondance Ligne 6 ou 14)"
          accentColor="from-red-700 via-black to-red-900"
        />

        {/* About Section */}
        <section className="py-16 bg-white dark:bg-background relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 via-black to-red-600" />
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-100 to-gray-100 dark:from-red-900/40 dark:to-gray-900/40 text-red-700 dark:text-red-300 px-6 py-3 rounded-full mb-4 shadow-lg">
                <Sparkles className="w-5 h-5 animate-pulse" />
                <span className="font-bold text-sm uppercase tracking-wider">{t('indochine.arenaTour')}</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">{t('indochine.uniqueShow')}</h2>
              <p className="text-muted-foreground text-xl leading-relaxed max-w-2xl mx-auto">{t('indochine.showDesc')}</p>
            </div>
          </div>
        </section>

        {/* Description Section */}
        <section className="py-20 bg-gradient-to-br from-red-50 via-gray-50 to-red-50 dark:from-red-950/20 dark:via-gray-950/20 dark:to-red-950/20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="bg-white dark:bg-charcoal rounded-3xl shadow-2xl p-8 md:p-12 border-2 border-red-200 dark:border-red-800/50 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-red-400/20 to-gray-400/20 rounded-full blur-3xl" />
                <div className="prose prose-lg max-w-none text-muted-foreground space-y-5 relative">
                  <p className="text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: t('indochine.aboutText1') }} />
                  <p className="leading-relaxed" dangerouslySetInnerHTML={{ __html: t('indochine.aboutText2') }} />
                  <p className="leading-relaxed" dangerouslySetInnerHTML={{ __html: t('indochine.aboutText3') }} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hotel Promo Section - Compact */}
        <EventHotelPromo 
          eventName={t("indochine.title")}
          accentColor="from-red-700 via-black to-red-900"
          urgencyMessage={t("indochine.urgencyMessage")}
          compact
        />

        {/* Related Events */}
        <RelatedEvents currentEventId="indochine" />
      </main>
      <Footer />
    </div>
  );
};

export default IndochineConcert;
