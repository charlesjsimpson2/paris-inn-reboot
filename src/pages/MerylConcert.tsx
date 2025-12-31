import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Calendar, MapPin, Clock, Gift, Car, Shirt, Trophy, Sparkles, Mic, History, Hotel } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { RelatedEvents } from "@/components/RelatedEvents";
import { EventHotelPromo } from "@/components/EventHotelPromo";
import { EasyAccessSection } from "@/components/EasyAccessSection";
import heroImage from "@/assets/meryl-hero-gen.jpg";

const MerylConcert = () => {
  const { t } = useLanguage();
  
  const targetDate = new Date('2026-10-27T20:00:00').getTime();
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
        {/* Hero Section with Sidebar Info */}
        <section className="relative py-24 overflow-hidden">
          <img src={heroImage} alt="Meryl Concert Accor Arena 2026" className="absolute inset-0 w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              {/* Texte à gauche */}
              <div className="text-left">
                <div className="inline-flex items-center gap-2 bg-pink-600/90 backdrop-blur-sm text-white px-4 py-2 rounded-full mb-4 shadow-lg">
                  <Mic className="w-4 h-4" />
                  <span className="font-medium text-sm uppercase tracking-wider">{t('meryl.tour')}</span>
                </div>
                <h1 className="font-display text-4xl md:text-6xl text-white drop-shadow-lg mb-4">
                  <span className="bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 bg-clip-text text-transparent">
                    {t('meryl.title')}
                  </span>
                </h1>
                <p className="text-white/90 text-lg md:text-xl">{t('meryl.subtitle')}</p>
              </div>

              {/* Info sidebar à droite */}
              <div className="bg-pink-50/95 dark:bg-pink-950/90 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-2xl border border-pink-200/50 dark:border-pink-800/50">
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3 bg-white dark:bg-card px-4 py-3 rounded-xl shadow-sm border border-pink-200 dark:border-pink-800">
                    <Calendar className="w-5 h-5 text-pink-600" />
                    <span className="text-pink-800 dark:text-pink-200 font-medium">{t('meryl.dateInfo')}</span>
                  </div>
                  <div className="flex items-center gap-3 bg-white dark:bg-card px-4 py-3 rounded-xl shadow-sm border border-pink-200 dark:border-pink-800">
                    <MapPin className="w-5 h-5 text-pink-600" />
                    <span className="text-pink-800 dark:text-pink-200 font-medium">Accor Arena Paris</span>
                  </div>
                </div>

                {/* Countdown */}
                <div className="grid grid-cols-4 gap-2 mb-6">
                  {[
                    { value: countdown.days, label: t('meryl.days') },
                    { value: countdown.hours, label: t('meryl.hours') },
                    { value: countdown.minutes, label: t('meryl.min') },
                    { value: countdown.seconds, label: t('meryl.sec') },
                  ].map((item, index) => (
                    <div key={index} className="bg-white dark:bg-card border-2 border-pink-200 dark:border-pink-700 rounded-xl p-3 text-center shadow-sm">
                      <div className="text-2xl md:text-3xl font-bold text-pink-700 dark:text-pink-400">{item.value}</div>
                      <div className="text-xs text-pink-600 dark:text-pink-500 uppercase tracking-wide">{item.label}</div>
                    </div>
                  ))}
                </div>

                <a href="https://www.booking.com" target="_blank" rel="noopener noreferrer" className="block">
                  <Button size="lg" className="w-full bg-pink-600 hover:bg-pink-700 text-white font-bold shadow-lg">
                    <Hotel className="w-5 h-5 mr-2" />{t('meryl.bookAccommodation')}
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Exclusive Offers - 3 columns */}
        <section className="py-10 bg-gradient-to-br from-pink-50 via-white to-purple-50 dark:from-pink-950/20 dark:via-background dark:to-purple-950/20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-5 py-2 rounded-full mb-2 shadow-lg">
                  <Gift className="w-4 h-4" />
                  <span className="font-bold text-sm uppercase tracking-wider">{t('meryl.exclusiveOffers')}</span>
                </div>
                <p className="text-muted-foreground text-sm">{t('meryl.offersSubtitle')}</p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-5">
                {/* Parking */}
                <div className="bg-white dark:bg-card rounded-2xl p-5 shadow-xl border-2 border-pink-200 dark:border-pink-800/50 hover:scale-[1.02] transition-transform duration-300 group">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Car className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg text-foreground">{t('meryl.parking')}</h3>
                      <div className="inline-block bg-pink-600 text-white font-bold text-base px-2.5 py-0.5 rounded-full">{t('meryl.parkingPrice')}</div>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm">{t('meryl.parkingDesc')}</p>
                </div>

                {/* Taxi */}
                <div className="bg-white dark:bg-card rounded-2xl p-5 shadow-xl border-2 border-purple-200 dark:border-purple-800/50 hover:scale-[1.02] transition-transform duration-300 group">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Car className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg text-foreground">{t('meryl.taxi')}</h3>
                      <div className="inline-block bg-purple-600 text-white font-bold text-base px-2.5 py-0.5 rounded-full">{t('meryl.taxiDiscount')}</div>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm">{t('meryl.taxiDesc')}</p>
                </div>

                {/* T-shirt Raffle */}
                <div className="bg-white dark:bg-card rounded-2xl p-5 shadow-xl border-2 border-indigo-200 dark:border-indigo-800/50 hover:scale-[1.02] transition-transform duration-300 group relative overflow-hidden">
                  <div className="absolute top-2 right-2">
                    <Trophy className="w-4 h-4 text-pink-400" />
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Shirt className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg text-foreground">{t('concert.raffle.title').replace('!', '')}</h3>
                      <span className="text-xs text-pink-600 dark:text-pink-400 font-medium uppercase tracking-wide">{t('concert.raffle.badge')}</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm">{t('concert.raffle.subtitle')}</p>
                </div>
              </div>
              
              <p className="text-center text-xs text-muted-foreground mt-4 italic">{t('meryl.offersNote')}</p>
            </div>
          </div>
        </section>

        {/* Easy Access Section */}
        <EasyAccessSection 
          venue="Accor Arena Paris"
          travelTime="~25 min"
          metroLine="Ligne 14"
          metroRoute="Place d'Italie → Bercy (correspondance Ligne 6 ou 14)"
          accentColor="from-pink-500 via-purple-600 to-indigo-700"
        />

        {/* About Section - Artist History */}
        <section className="py-16 bg-white dark:bg-background relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500" />
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-100 to-purple-100 dark:from-pink-900/40 dark:to-purple-900/40 text-pink-700 dark:text-pink-300 px-6 py-3 rounded-full mb-4 shadow-lg">
                  <History className="w-5 h-5" />
                  <span className="font-bold text-sm uppercase tracking-wider">{t('meryl.artistHistory')}</span>
                </div>
                <h2 className="font-display text-4xl md:text-5xl text-foreground">{t('meryl.legendTitle')}</h2>
              </div>
              
              <div className="space-y-6 text-muted-foreground max-w-4xl mx-auto">
                <p className="text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: t('meryl.history1') }} />
                <p className="leading-relaxed" dangerouslySetInnerHTML={{ __html: t('meryl.history2') }} />
                <p className="leading-relaxed" dangerouslySetInnerHTML={{ __html: t('meryl.history3') }} />
              </div>
            </div>
          </div>
        </section>

        {/* Show Description Section */}
        <section className="py-20 bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 dark:from-pink-950/20 dark:via-purple-950/20 dark:to-indigo-950/20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-full mb-4 shadow-lg">
                  <Sparkles className="w-5 h-5 animate-pulse" />
                  <span className="font-bold text-sm uppercase tracking-wider">{t('meryl.firstArena')}</span>
                </div>
                <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">{t('meryl.uniqueShow')}</h2>
              </div>
              
              <div className="bg-white dark:bg-charcoal rounded-3xl shadow-2xl p-8 md:p-12 border-2 border-pink-200 dark:border-pink-800/50 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-pink-400/20 to-purple-400/20 rounded-full blur-3xl" />
                <div className="prose prose-lg max-w-none text-muted-foreground space-y-5 relative">
                  <p className="text-xl leading-relaxed font-medium" dangerouslySetInnerHTML={{ __html: t('meryl.showIntro') }} />
                  <p className="leading-relaxed" dangerouslySetInnerHTML={{ __html: t('meryl.showDesc') }} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hotel Promo Section - Compact */}
        <EventHotelPromo 
          eventName={t("meryl.title")}
          accentColor="from-pink-500 via-purple-600 to-indigo-700"
          urgencyMessage={t("meryl.urgencyMessage")}
          compact
        />

        {/* Related Events */}
        <RelatedEvents currentEventId="meryl" />
      </main>
      <Footer />
    </div>
  );
};

export default MerylConcert;