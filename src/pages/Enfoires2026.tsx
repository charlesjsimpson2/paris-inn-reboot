import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Music, Heart, Star, Users, Mic, Sparkles, Gift, Ticket, Clock, Car, Shirt, Trophy } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import enfoiresAffiche from "@/assets/enfoires-2026-affiche.png";
import { useLanguage } from "@/contexts/LanguageContext";
import { RelatedEvents } from "@/components/RelatedEvents";
import { EventHotelPromo } from "@/components/EventHotelPromo";
import { EasyAccessSection } from "@/components/EasyAccessSection";
import { SEO } from "@/components/SEO";

const Enfoires2026 = () => {
  const { t } = useLanguage();
  
  const targetDate = new Date('2026-01-13T20:00:00').getTime();
  
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

  const concertDates = [
    { day: "Mar. 13", month: t('enfoires.january') },
    { day: "Mer. 14", month: t('enfoires.january') },
    { day: "Jeu. 15", month: t('enfoires.january') },
    { day: "Ven. 16", month: t('enfoires.january') },
    { day: "Sam. 17", month: t('enfoires.january') },
    { day: "Dim. 18", month: t('enfoires.january') },
    { day: "Lun. 19", month: t('enfoires.january') },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Les Enfoirés 2026 Paris - Concert Accor Arena Janvier"
        description="Les Enfoirés en concert à Paris du 13 au 19 janvier 2026 à l'Accor Arena. 7 dates exceptionnelles pour les Restos du Cœur."
        canonical="/evenements/enfoires-2026"
      />
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 overflow-hidden bg-gradient-to-br from-pink-600 via-fuchsia-600 to-purple-700">
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          <div className="absolute inset-0 opacity-15">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,white_1px,transparent_1px),radial-gradient(circle_at_80%_70%,white_1px,transparent_1px)] bg-[length:50px_50px]" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="flex justify-center order-2 md:order-1">
                  <img src={enfoiresAffiche} alt="Les Enfoirés 2026" className="w-full max-w-md md:max-w-lg shadow-2xl" />
                </div>
                <div className="text-center md:text-left order-1 md:order-2">
                  <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                    <Heart className="w-4 h-4 text-pink-200" fill="currentColor" />
                    <span className="text-white/90 uppercase tracking-widest text-xs font-medium">{t('enfoires.restosCoeur')}</span>
                  </div>
                  <h1 className="font-display text-4xl md:text-6xl text-white mb-3 drop-shadow-lg">{t('enfoires.title')}</h1>
                  <p className="text-xl md:text-2xl text-pink-200 font-display mb-6">{t('enfoires.ballade')}</p>
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-8">
                    <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white font-medium text-sm">
                      <Calendar className="w-4 h-4" />13 - 19 {t('enfoires.january')} 2026
                    </div>
                    <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white font-medium text-sm">
                      <MapPin className="w-4 h-4" />Accor Arena Paris
                    </div>
                  </div>
                  <div className="inline-block bg-white/10 backdrop-blur-sm rounded-2xl p-5">
                    <div className="flex items-center justify-center gap-2 mb-3 text-pink-200">
                      <Clock className="w-4 h-4" />
                      <span className="text-xs uppercase tracking-wider font-medium">{t('enfoires.countdown')}</span>
                    </div>
                    <div className="grid grid-cols-4 gap-2 md:gap-4 text-center">
                      {[
                        { value: countdown.days, label: t('enfoires.days') },
                        { value: countdown.hours, label: t('enfoires.hours') },
                        { value: countdown.minutes, label: t('enfoires.min') },
                        { value: countdown.seconds, label: t('enfoires.sec') }
                      ].map((item, idx) => (
                        <div key={idx}>
                          <div className="bg-white/20 rounded-xl px-2 md:px-4 py-2">
                            <span className="font-display text-xl md:text-3xl text-white">{item.value}</span>
                          </div>
                          <p className="text-pink-200 text-xs mt-1 uppercase">{item.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Exclusive Offers - 3 columns */}
        <section className="py-10 bg-gradient-to-br from-pink-50 via-white to-fuchsia-50 dark:from-pink-950/20 dark:via-background dark:to-fuchsia-950/20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-fuchsia-600 text-white px-5 py-2 rounded-full mb-2 shadow-lg">
                  <Gift className="w-4 h-4" />
                  <span className="font-bold text-sm uppercase tracking-wider">{t('clara.exclusiveOffers')}</span>
                </div>
                <p className="text-muted-foreground text-sm">{t('clara.offersSubtitle')}</p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-5">
                {/* Parking */}
                <div className="bg-white dark:bg-card rounded-2xl p-5 shadow-xl border-2 border-pink-200 dark:border-pink-800/50 hover:scale-[1.02] transition-transform duration-300 group">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Car className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg text-foreground">{t('clara.parking')}</h3>
                      <div className="inline-block bg-pink-600 text-white font-bold text-base px-2.5 py-0.5 rounded-full">{t('clara.parkingPrice')}</div>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm">{t('clara.parkingDesc')}</p>
                </div>

                {/* Taxi */}
                <div className="bg-white dark:bg-card rounded-2xl p-5 shadow-xl border-2 border-fuchsia-200 dark:border-fuchsia-800/50 hover:scale-[1.02] transition-transform duration-300 group">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-fuchsia-500 to-fuchsia-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Car className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg text-foreground">{t('clara.taxi')}</h3>
                      <div className="inline-block bg-fuchsia-600 text-white font-bold text-base px-2.5 py-0.5 rounded-full">{t('clara.taxiDiscount')}</div>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm">{t('clara.taxiDesc')}</p>
                </div>

                {/* T-shirt Raffle */}
                <div className="bg-white dark:bg-card rounded-2xl p-5 shadow-xl border-2 border-purple-200 dark:border-purple-800/50 hover:scale-[1.02] transition-transform duration-300 group relative overflow-hidden">
                  <div className="absolute top-2 right-2">
                    <Trophy className="w-4 h-4 text-purple-400" />
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Shirt className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg text-foreground">{t('concert.raffle.title').replace('!', '')}</h3>
                      <span className="text-xs text-purple-600 dark:text-purple-400 font-medium uppercase tracking-wide">{t('concert.raffle.badge')}</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm">{t('concert.raffle.subtitle')}</p>
                </div>
              </div>
              
              <p className="text-center text-xs text-muted-foreground mt-4 italic">{t('clara.offersNote')} {t('concert.raffle.note')}</p>
            </div>
          </div>
        </section>

        {/* Easy Access Section */}
        <EasyAccessSection 
          venue="Accor Arena Paris"
          travelTime="~25 min"
          metroLine="Ligne 14"
          metroRoute="Place d'Italie → Bercy (correspondance Ligne 6 ou 14)"
          accentColor="from-pink-600 via-fuchsia-600 to-purple-700"
        />


        {/* About Section */}
        <section className="py-16 bg-white dark:bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 px-4 py-2 rounded-full mb-4">
                <Sparkles className="w-4 h-4" />
                <span className="font-medium text-sm">{t('enfoires.edition2026')}</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">{t('enfoires.uniqueShow')}</h2>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">{t('enfoires.showDesc')}</p>
            </div>
          </div>
        </section>

        {/* Description Section */}
        <section className="py-16 bg-pink-50/50 dark:bg-pink-950/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white dark:bg-charcoal rounded-2xl shadow-lg p-8 md:p-10 border border-pink-100 dark:border-pink-900/20">
                <div className="prose prose-lg max-w-none text-muted-foreground space-y-5">
                  <p className="text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: t('enfoires.aboutText1') }} />
                  <p className="leading-relaxed" dangerouslySetInnerHTML={{ __html: t('enfoires.aboutText2') }} />
                  <p className="leading-relaxed" dangerouslySetInnerHTML={{ __html: t('enfoires.aboutText3') }} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dates Section */}
        <section className="py-16 bg-white dark:bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-10">
                <Calendar className="w-10 h-10 text-pink-600 mx-auto mb-3" />
                <h2 className="font-display text-3xl md:text-4xl text-foreground mb-2">{t('enfoires.7dates')}</h2>
                <p className="text-muted-foreground">Accor Arena (Paris-Bercy) - {t('enfoires.january')} 2026</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3 mb-6">
                {concertDates.map((date, index) => (
                  <div key={index} className="bg-gradient-to-br from-pink-500 to-fuchsia-600 rounded-xl p-4 text-center hover:scale-105 transition-all duration-300 shadow-md">
                    <p className="font-display text-lg text-white">{date.day}</p>
                    <p className="text-pink-200 text-xs">{date.month}</p>
                    <p className="text-white/50 text-xs mt-1">2026</p>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground bg-pink-50 dark:bg-pink-950/20 rounded-lg p-3">
                <MapPin className="w-4 h-4 text-pink-600" />
                <span>Accor Arena, 8 Boulevard de Bercy, 75012 Paris</span>
              </div>
            </div>
          </div>
        </section>

        {/* Solidarity Section */}
        <section className="py-16 bg-gradient-to-br from-fuchsia-900 via-pink-900 to-purple-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,white_1px,transparent_1px)] bg-[length:40px_40px]" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <Heart className="w-12 h-12 text-pink-400 mx-auto mb-3" fill="currentColor" />
                <h2 className="font-display text-3xl md:text-4xl mb-2">{t('enfoires.solidarity')}</h2>
                <p className="text-pink-200">{t('enfoires.humanAdventure')}</p>
              </div>
              <div className="grid md:grid-cols-2 gap-6 mb-10">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <h3 className="font-display text-xl mb-3 text-pink-300">{t('enfoires.heritage')}</h3>
                  <p className="text-white/80 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: t('enfoires.heritageDesc') }} />
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <h3 className="font-display text-xl mb-3 text-pink-300">{t('enfoires.commitment')}</h3>
                  <p className="text-white/80 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: t('enfoires.commitmentDesc') }} />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <Users className="w-8 h-8 text-pink-400 mx-auto mb-2" />
                  <p className="font-display text-3xl">35+</p>
                  <p className="text-pink-200 text-xs">{t('enfoires.years')}</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <Heart className="w-8 h-8 text-pink-400 mx-auto mb-2" fill="currentColor" />
                  <p className="font-display text-3xl">1M+</p>
                  <p className="text-pink-200 text-xs">{t('enfoires.mealsYear')}</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <Mic className="w-8 h-8 text-pink-400 mx-auto mb-2" />
                  <p className="font-display text-3xl">50+</p>
                  <p className="text-pink-200 text-xs">{t('enfoires.artists')}</p>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Video Section */}
        <section className="py-16 bg-white dark:bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <Music className="w-10 h-10 text-pink-600 mx-auto mb-3" />
              <h2 className="font-display text-3xl text-foreground">{t('enfoires.watchVideo')}</h2>
            </div>
            <div className="max-w-4xl mx-auto aspect-video rounded-xl overflow-hidden shadow-xl ring-1 ring-pink-100 dark:ring-pink-900/30">
              <iframe width="100%" height="100%" src="https://www.youtube.com/embed/ZuAnUmO8RfA" title="Les Enfoirés 2025" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="w-full h-full" />
            </div>
          </div>
        </section>

        {/* Hotel Promo Section - Compact */}
        <EventHotelPromo 
          eventName="Les Enfoirés 2026" 
          accentColor="from-pink-600 via-fuchsia-600 to-purple-700"
          urgencyMessage="Offre spéciale Enfoirés"
          compact
        />

        {/* Related Events */}
        <RelatedEvents currentEventId="enfoires" />
      </main>
      <Footer />
    </div>
  );
};

export default Enfoires2026;
