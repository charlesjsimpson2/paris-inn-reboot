import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Music, Mic, Sparkles, Clock, Shirt, Trophy, CheckCircle, Star, Gift, Car, Ticket, Train, Coffee, Wifi, Tv, Users, Euro } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import claraHero from "@/assets/clara-luciani-hero.jpg";
import claraPortrait from "@/assets/clara-luciani-portrait.jpg";
import chambreDouble from "@/assets/chambre-double.jpg";
import chambreSuperieure from "@/assets/chambre-superieure-balcon.jpg";
import { useLanguage } from "@/contexts/LanguageContext";
import { RelatedEvents } from "@/components/RelatedEvents";
import { EventHotelPromo } from "@/components/EventHotelPromo";

const ClaraLucianiConcert = () => {
  const { t } = useLanguage();
  
  // Dates: 18 et 19 février 2026 à 20h00
  const targetDate = new Date('2026-02-18T20:00:00').getTime();
  
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
        <section className="relative pt-24 pb-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a3e] via-[#2d2d5a] to-[#1a1a3e]" />
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,white_1px,transparent_1px),radial-gradient(circle_at_80%_70%,white_1px,transparent_1px)] bg-[length:50px_50px]" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="flex justify-center order-2 md:order-1">
                  <img src={claraHero} alt="Clara Luciani" className="w-full max-w-xl md:max-w-2xl lg:max-w-3xl shadow-2xl rounded-xl" />
                </div>
                <div className="text-center md:text-left order-1 md:order-2">
                  <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                    <Music className="w-4 h-4 text-blue-200" />
                    <span className="text-white/90 uppercase tracking-widest text-xs font-medium">{t('clara.tour')}</span>
                  </div>
                  <h1 className="font-display text-4xl md:text-6xl text-white mb-3 drop-shadow-lg">{t('clara.title')}</h1>
                  <p className="text-xl md:text-2xl text-blue-200 font-display mb-6">{t('clara.subtitle')}</p>
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-8">
                    <div className="flex items-center gap-2 bg-[#3d5afe]/40 backdrop-blur-sm px-4 py-2 rounded-full text-white font-medium text-sm">
                      <Calendar className="w-4 h-4" />{t('clara.dateInfo')}
                    </div>
                    <div className="flex items-center gap-2 bg-[#3d5afe]/40 backdrop-blur-sm px-4 py-2 rounded-full text-white font-medium text-sm">
                      <MapPin className="w-4 h-4" />Accor Arena Paris
                    </div>
                  </div>
                  <div className="inline-block bg-white/10 backdrop-blur-sm rounded-2xl p-5">
                    <div className="flex items-center justify-center gap-2 mb-3 text-blue-200">
                      <Clock className="w-4 h-4" />
                      <span className="text-xs uppercase tracking-wider font-medium">{t('clara.countdown')}</span>
                    </div>
                    <div className="grid grid-cols-4 gap-2 md:gap-4 text-center">
                      {[
                        { value: countdown.days, label: t('clara.days') },
                        { value: countdown.hours, label: t('clara.hours') },
                        { value: countdown.minutes, label: t('clara.min') },
                        { value: countdown.seconds, label: t('clara.sec') }
                      ].map((item, idx) => (
                        <div key={idx}>
                          <div className="bg-[#3d5afe]/50 rounded-xl px-2 md:px-4 py-2">
                            <span className="font-display text-xl md:text-3xl text-white">{item.value}</span>
                          </div>
                          <p className="text-blue-200 text-xs mt-1 uppercase">{item.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hotel Promo Section */}
        <EventHotelPromo 
          eventName="Clara Luciani" 
          accentColor="from-[#3d5afe] via-[#5c6bc0] to-[#1a1a3e]"
          urgencyMessage="Offre Concert Clara Luciani"
        />

        {/* About Section */}
        <section className="py-10 bg-white dark:bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 px-4 py-2 rounded-full mb-3">
                <Sparkles className="w-4 h-4" />
                <span className="font-medium text-sm">{t('clara.edition2026')}</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-3">{t('clara.uniqueShow')}</h2>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">{t('clara.showDesc')}</p>
            </div>
          </div>
        </section>

        {/* Biography Section with Image */}
        <section className="py-16 bg-indigo-50/50 dark:bg-indigo-950/10">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-10 items-start">
                {/* Image à gauche */}
                <div className="order-2 md:order-1">
                  <img 
                    src={claraPortrait} 
                    alt="Clara Luciani" 
                    className="w-full h-auto rounded-2xl shadow-xl object-cover" 
                  />
                </div>
                
                {/* Texte à droite */}
                <div className="order-1 md:order-2">
                  <h3 className="font-display text-2xl md:text-3xl text-foreground mb-6">{t('clara.bio.title')}</h3>
                  <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                    <p className="leading-relaxed" dangerouslySetInnerHTML={{ __html: t('clara.bio.text1') }} />
                    <p className="leading-relaxed" dangerouslySetInnerHTML={{ __html: t('clara.bio.text2') }} />
                    <p className="leading-relaxed" dangerouslySetInnerHTML={{ __html: t('clara.bio.text3') }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Album Section */}
        <section className="py-16 bg-white dark:bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <Music className="w-10 h-10 text-indigo-600 mx-auto mb-3" />
                <h2 className="font-display text-3xl md:text-4xl text-foreground mb-2">{t('clara.albumTitle')}</h2>
                <p className="text-muted-foreground">{t('clara.albumSubtitle')}</p>
              </div>
              <div className="bg-gradient-to-br from-indigo-100 to-blue-100 dark:from-indigo-900/30 dark:to-blue-900/30 rounded-2xl p-8 border border-indigo-200/50 dark:border-indigo-800/30">
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <h3 className="font-display text-2xl text-foreground mb-3">{t('clara.albumName')}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: t('clara.albumDesc') }} />
                    <div className="flex flex-wrap gap-2">
                      {['La Grenade', 'Nue', 'Le reste', 'Amour toujours', 'Respire encore'].map((song) => (
                        <span key={song} className="bg-indigo-600/10 text-indigo-700 dark:text-indigo-300 px-3 py-1 rounded-full text-sm">
                          {song}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
                    <iframe 
                      width="100%" 
                      height="100%" 
                      src="https://www.youtube.com/embed/NwxR84S6JQE" 
                      title="Clara Luciani - Concert 2025" 
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen 
                      className="w-full h-full" 
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Concert Info */}
        <section className="py-16 bg-gradient-to-br from-indigo-100 via-white to-blue-100 dark:from-indigo-950/30 dark:via-card dark:to-blue-950/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-10">
                <Calendar className="w-10 h-10 text-indigo-600 mx-auto mb-3" />
                <h2 className="font-display text-3xl md:text-4xl text-foreground mb-2">{t('clara.concertDates')}</h2>
                <p className="text-muted-foreground">Accor Arena (Paris-Bercy)</p>
              </div>
              <div className="flex flex-col md:flex-row justify-center gap-6 mb-8">
                <div className="bg-gradient-to-br from-[#3d5afe] to-[#1a1a3e] rounded-xl p-6 text-center shadow-lg flex-1 max-w-xs mx-auto md:mx-0">
                  <p className="font-display text-2xl text-white">{t('clara.date1')}</p>
                  <p className="text-blue-200 text-sm mt-1">20h00</p>
                </div>
                <div className="bg-gradient-to-br from-[#5c6bc0] to-[#1a1a3e] rounded-xl p-6 text-center shadow-lg flex-1 max-w-xs mx-auto md:mx-0">
                  <p className="font-display text-2xl text-white">{t('clara.date2')}</p>
                  <p className="text-indigo-200 text-sm mt-1">20h00</p>
                </div>
              </div>
              <div className="bg-white dark:bg-card rounded-xl p-6 shadow-lg border border-border/50">
                <h3 className="font-display text-xl text-foreground mb-4 text-center">{t('clara.practicalInfo')}</h3>
                <div className="grid md:grid-cols-3 gap-4 text-center">
                  <div className="flex flex-col items-center gap-2">
                    <Clock className="w-6 h-6 text-indigo-600" />
                    <span className="text-muted-foreground text-sm">{t('clara.doorsOpen')}</span>
                    <span className="font-medium text-foreground">19h00</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Euro className="w-6 h-6 text-indigo-600" />
                    <span className="text-muted-foreground text-sm">{t('clara.priceRange')}</span>
                    <span className="font-medium text-foreground">39€ - 89€</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <MapPin className="w-6 h-6 text-indigo-600" />
                    <span className="text-muted-foreground text-sm">{t('clara.venue')}</span>
                    <span className="font-medium text-foreground">Accor Arena, 8 Bd de Bercy</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Artist Stats */}
        <section className="py-16 bg-gradient-to-br from-[#1a1a3e] via-[#2d2d5a] to-[#3d5afe] text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,white_1px,transparent_1px)] bg-[length:40px_40px]" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <Star className="w-12 h-12 text-blue-300 mx-auto mb-3" />
                <h2 className="font-display text-3xl md:text-4xl mb-2">{t('clara.artistSection')}</h2>
                <p className="text-blue-200">{t('clara.artistSubtitle')}</p>
              </div>
              <div className="grid md:grid-cols-2 gap-6 mb-10">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <h3 className="font-display text-xl mb-3 text-blue-300">{t('clara.musicalPath')}</h3>
                  <p className="text-white/80 text-sm leading-relaxed">{t('clara.musicalPathDesc')}</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <h3 className="font-display text-xl mb-3 text-blue-300">{t('clara.awards')}</h3>
                  <p className="text-white/80 text-sm leading-relaxed">{t('clara.awardsDesc')}</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <Mic className="w-8 h-8 text-blue-300 mx-auto mb-2" />
                  <p className="font-display text-3xl">3</p>
                  <p className="text-blue-200 text-xs">{t('clara.albums')}</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <Star className="w-8 h-8 text-blue-300 mx-auto mb-2" />
                  <p className="font-display text-3xl">3</p>
                  <p className="text-blue-200 text-xs">{t('clara.victories')}</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <Music className="w-8 h-8 text-blue-300 mx-auto mb-2" />
                  <p className="font-display text-3xl">1</p>
                  <p className="text-blue-200 text-xs">{t('clara.diamond')}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Offers Section */}
        <section className="py-16 bg-gradient-to-br from-indigo-100 via-white to-blue-100 dark:from-indigo-950/30 dark:via-card dark:to-blue-950/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="font-display text-3xl md:text-4xl text-foreground mb-2">{t('clara.exclusiveOffers')}</h2>
                <p className="text-muted-foreground">{t('clara.offersSubtitle')}</p>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white dark:bg-card rounded-2xl p-8 shadow-xl border-2 border-indigo-200 dark:border-indigo-800/50 hover:scale-105 transition-transform duration-300">
                  <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center mb-4">
                    <Car className="w-8 h-8 text-indigo-600" />
                  </div>
                  <h3 className="font-display text-2xl text-foreground mb-2">{t('clara.parking')}</h3>
                  <p className="text-muted-foreground mb-4">{t('clara.parkingDesc')}</p>
                  <div className="inline-block bg-indigo-600 text-white font-bold text-xl px-4 py-2 rounded-full">{t('clara.parkingPrice')}</div>
                </div>
                <div className="bg-white dark:bg-card rounded-2xl p-8 shadow-xl border-2 border-blue-200 dark:border-blue-800/50 hover:scale-105 transition-transform duration-300">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
                    <Ticket className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="font-display text-2xl text-foreground mb-2">{t('clara.taxi')}</h3>
                  <p className="text-muted-foreground mb-4">{t('clara.taxiDesc')}</p>
                  <div className="inline-block bg-blue-600 text-white font-bold text-xl px-4 py-2 rounded-full">{t('clara.taxiDiscount')}</div>
                </div>
              </div>
              <p className="text-center text-sm text-muted-foreground mt-6 italic">{t('clara.offersNote')}</p>
            </div>
          </div>
        </section>

        {/* Raffle Section - T-shirt */}
        <section className="py-16 bg-gradient-to-br from-indigo-100 via-blue-50 to-purple-100 dark:from-indigo-950/30 dark:via-blue-950/20 dark:to-purple-950/30 relative overflow-hidden">
          <div className="absolute top-0 right-1/4 w-80 h-80 bg-indigo-300/40 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-blue-300/30 rounded-full blur-3xl" />
          <div className="container mx-auto px-4 relative">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-3 rounded-full mb-4 shadow-xl">
                  <Trophy className="w-5 h-5" />
                  <span className="font-bold text-sm uppercase tracking-wider">{t('concert.raffle.badge')}</span>
                </div>
                <h2 className="font-display text-3xl md:text-4xl text-foreground mb-3">{t('concert.raffle.title')}</h2>
                <p className="text-muted-foreground text-lg">{t('concert.raffle.subtitle')}</p>
              </div>
              
              <div className="bg-white dark:bg-card rounded-2xl shadow-xl border-2 border-indigo-200 dark:border-indigo-700/50 overflow-hidden">
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Left - T-shirt visual */}
                  <div className="bg-gradient-to-br from-indigo-500 via-blue-600 to-purple-600 p-10 flex flex-col items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 opacity-20">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,white_2px,transparent_2px)] bg-[length:30px_30px]" />
                    </div>
                    <div className="relative bg-white/20 backdrop-blur-md rounded-3xl p-8 border border-white/30">
                      <Shirt className="w-28 h-28 text-white drop-shadow-xl" />
                    </div>
                    <p className="text-white font-display text-xl mt-6 text-center drop-shadow-lg">T-shirt officiel<br />Clara Luciani Tour 2026</p>
                  </div>
                  
                  {/* Right - How to participate */}
                  <div className="p-8 md:p-10">
                    <p className="text-muted-foreground mb-6 leading-relaxed">{t('concert.raffle.desc')}</p>
                    
                    <h3 className="font-display text-xl text-foreground mb-4 flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-indigo-500" />
                      {t('concert.raffle.howTo')}
                    </h3>
                    
                    <div className="space-y-4">
                      {[
                        { step: 1, text: t('concert.raffle.step1') },
                        { step: 2, text: t('concert.raffle.step2') },
                        { step: 3, text: t('concert.raffle.step3') }
                      ].map((item) => (
                        <div key={item.step} className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                            <span className="text-white font-bold">{item.step}</span>
                          </div>
                          <p className="text-muted-foreground pt-2">{item.text}</p>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-6 p-4 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 rounded-xl border border-indigo-200 dark:border-indigo-800/30">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-6 h-6 text-green-500" />
                        <p className="text-foreground font-medium">{t('concert.raffle.winner')}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <p className="text-center text-sm text-muted-foreground mt-6 italic">{t('concert.raffle.note')}</p>
            </div>
          </div>
        </section>

        {/* Related Events */}
        <RelatedEvents currentEventId="clara" />
      </main>
      <Footer />
    </div>
  );
};

export default ClaraLucianiConcert;
