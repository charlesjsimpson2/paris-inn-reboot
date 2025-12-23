import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Music, Star, Mic, Sparkles, Gift, Ticket, Clock, Car, Coffee, Wifi, Tv, Users, Train, Zap, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import mikaAffiche from "@/assets/mika-spinning-out-tour.webp";
import mikaHero from "@/assets/mika-concert-hero.jpg";
import mikaBanner from "@/assets/mika-spinning-tour-banner.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const MikaConcert = () => {
  const { t } = useLanguage();
  
  // Date confirmée : 16 février 2026 à 20h00
  const targetDate = new Date('2026-02-16T20:00:00').getTime();
  
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
        {/* Hero Section - PUNCHY */}
        <section className="relative pt-20 pb-20 overflow-hidden min-h-[90vh] flex items-center">
          {/* Animated gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-pink-600 to-purple-700 animate-gradient" />
          
          {/* Animated circles */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-20 -left-20 w-96 h-96 bg-yellow-400/30 rounded-full blur-3xl animate-float" />
            <div className="absolute top-1/2 -right-32 w-80 h-80 bg-pink-500/40 rounded-full blur-3xl animate-float animation-delay-400" />
            <div className="absolute -bottom-20 left-1/3 w-72 h-72 bg-purple-600/30 rounded-full blur-3xl animate-float animation-delay-600" />
          </div>
          
          {/* Sparkle pattern */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,white_2px,transparent_2px),radial-gradient(circle_at_80%_70%,white_1px,transparent_1px),radial-gradient(circle_at_50%_50%,white_1.5px,transparent_1.5px)] bg-[length:60px_60px,40px_40px,80px_80px]" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-10 items-center">
                {/* Affiche avec effet glow */}
                <div className="flex justify-center order-2 md:order-1 animate-fade-up">
                  <div className="relative group">
                    <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500 animate-pulse-glow" />
                    <img 
                      src={mikaAffiche} 
                      alt="MIKA Spinning Out Tour" 
                      className="relative w-full max-w-md md:max-w-lg rounded-2xl shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-500" 
                    />
                    {/* Badge flottant */}
                    <div className="absolute -top-4 -right-4 bg-yellow-400 text-black font-bold px-4 py-2 rounded-full shadow-xl animate-bounce-subtle">
                      <span className="flex items-center gap-1">
                        <Zap className="w-4 h-4" /> LIVE
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Texte avec animations */}
                <div className="text-center md:text-left order-1 md:order-2">
                  <div className="animate-fade-up">
                    <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-5 py-2.5 rounded-full mb-6 border border-white/30">
                      <Music className="w-5 h-5 text-yellow-300 animate-bounce-subtle" />
                      <span className="text-white uppercase tracking-widest text-sm font-bold">{t('mika.tour')}</span>
                    </div>
                  </div>
                  
                  <h1 className="font-display text-5xl md:text-7xl text-white mb-4 drop-shadow-2xl animate-fade-up animation-delay-200">
                    <span className="bg-gradient-to-r from-yellow-300 via-pink-200 to-white bg-clip-text text-transparent">
                      {t('mika.title')}
                    </span>
                  </h1>
                  
                  <p className="text-2xl md:text-3xl text-yellow-200 font-display mb-8 animate-fade-up animation-delay-400">
                    {t('mika.subtitle')}
                  </p>
                  
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-10 animate-fade-up animation-delay-600">
                    <div className="flex items-center gap-2 bg-white/25 backdrop-blur-md px-5 py-3 rounded-full text-white font-bold text-sm border border-white/30 hover:bg-white/35 transition-colors">
                      <Calendar className="w-5 h-5 text-yellow-300" />{t('mika.dateInfo')}
                    </div>
                    <div className="flex items-center gap-2 bg-white/25 backdrop-blur-md px-5 py-3 rounded-full text-white font-bold text-sm border border-white/30 hover:bg-white/35 transition-colors">
                      <MapPin className="w-5 h-5 text-pink-300" />Accor Arena Paris
                    </div>
                  </div>
                  
                  {/* Countdown PUNCHY */}
                  <div className="inline-block bg-black/30 backdrop-blur-xl rounded-3xl p-6 border border-white/20 animate-fade-up animation-delay-600">
                    <div className="flex items-center justify-center gap-2 mb-4 text-yellow-300">
                      <Clock className="w-5 h-5 animate-pulse" />
                      <span className="text-sm uppercase tracking-widest font-bold">{t('mika.countdown')}</span>
                    </div>
                    <div className="grid grid-cols-4 gap-3 md:gap-5 text-center">
                      {[
                        { value: countdown.days, label: t('mika.days') },
                        { value: countdown.hours, label: t('mika.hours') },
                        { value: countdown.minutes, label: t('mika.min') },
                        { value: countdown.seconds, label: t('mika.sec') }
                      ].map((item, idx) => (
                        <div key={idx} className="group">
                          <div className="bg-gradient-to-br from-yellow-400 via-orange-500 to-pink-600 rounded-2xl px-3 md:px-5 py-3 shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                            <span className="font-display text-2xl md:text-4xl text-white font-bold drop-shadow-lg">{item.value}</span>
                          </div>
                          <p className="text-yellow-200 text-xs mt-2 uppercase font-bold tracking-wide">{item.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section - Plus dynamique */}
        <section className="py-16 bg-white dark:bg-background relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600" />
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-100 to-pink-100 dark:from-orange-900/40 dark:to-pink-900/40 text-orange-700 dark:text-orange-300 px-6 py-3 rounded-full mb-4 shadow-lg">
                <Sparkles className="w-5 h-5 animate-pulse" />
                <span className="font-bold text-sm uppercase tracking-wider">{t('mika.edition2026')}</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">{t('mika.uniqueShow')}</h2>
              <p className="text-muted-foreground text-xl leading-relaxed max-w-2xl mx-auto">{t('mika.showDesc')}</p>
            </div>
          </div>
        </section>

        {/* Description Section - Plus punchy */}
        <section className="py-20 bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 dark:from-orange-950/20 dark:via-pink-950/20 dark:to-purple-950/20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {/* Texte principal avec image à gauche */}
              <div className="bg-white dark:bg-charcoal rounded-3xl shadow-2xl p-8 md:p-12 border-2 border-orange-200 dark:border-orange-800/50 mb-10 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-orange-400/20 to-pink-400/20 rounded-full blur-3xl" />
                <div className="grid md:grid-cols-2 gap-10 items-start relative">
                  <div className="relative group">
                    <div className="absolute -inset-3 bg-gradient-to-r from-orange-400 to-pink-500 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity" />
                    <img 
                      src={mikaBanner} 
                      alt="MIKA Spinning Out Tour" 
                      className="relative w-full h-auto rounded-2xl shadow-xl object-cover transform group-hover:scale-[1.02] transition-transform duration-500" 
                    />
                  </div>
                  <div className="prose prose-lg max-w-none text-muted-foreground space-y-5">
                    <p className="text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: t('mika.aboutText1') }} />
                    <p className="leading-relaxed" dangerouslySetInnerHTML={{ __html: t('mika.aboutText2') }} />
                    <p className="leading-relaxed" dangerouslySetInnerHTML={{ __html: t('mika.aboutText3') }} />
                  </div>
                </div>
              </div>
              
              {/* Biographie avec image */}
              <div className="bg-gradient-to-br from-orange-200 via-pink-200 to-purple-200 dark:from-orange-900/40 dark:via-pink-900/40 dark:to-purple-900/40 rounded-3xl p-8 border-2 border-orange-300/50 dark:border-orange-700/30 shadow-xl">
                <div className="grid md:grid-cols-2 gap-8 items-start">
                  <div>
                    <h3 className="font-display text-2xl text-foreground mb-4 flex items-center gap-3">
                      <Heart className="w-6 h-6 text-pink-500" />
                      {t('mika.bio.title')}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: t('mika.bio.text1') }} />
                    <p className="text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: t('mika.bio.text2') }} />
                  </div>
                  <div className="relative group">
                    <div className="absolute -inset-2 bg-gradient-to-r from-pink-400 to-purple-500 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity" />
                    <img 
                      src={mikaHero} 
                      alt="MIKA en concert" 
                      className="relative w-full h-auto rounded-2xl shadow-xl object-cover aspect-video transform group-hover:scale-[1.02] transition-transform duration-500" 
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Concert Info - Plus punchy */}
        <section className="py-20 bg-white dark:bg-background relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(255,150,50,0.1),transparent),radial-gradient(circle_at_70%_30%,rgba(255,100,150,0.1),transparent)]" />
          <div className="container mx-auto px-4 relative">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-block p-4 bg-gradient-to-br from-orange-500 to-pink-600 rounded-full mb-4 shadow-xl animate-bounce-subtle">
                  <Calendar className="w-10 h-10 text-white" />
                </div>
                <h2 className="font-display text-4xl md:text-5xl text-foreground mb-3">{t('mika.concertParis')}</h2>
                <p className="text-muted-foreground text-lg">Accor Arena (Paris-Bercy) - {t('mika.monday')} 16 {t('mika.february')} 2026</p>
              </div>
              <div className="flex justify-center mb-8">
                <div className="relative group">
                  <div className="absolute -inset-2 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 rounded-2xl blur-lg opacity-60 group-hover:opacity-80 transition-opacity animate-pulse-glow" />
                  <div className="relative bg-gradient-to-br from-orange-500 via-pink-600 to-purple-600 rounded-2xl p-8 text-center shadow-2xl">
                    <p className="font-display text-3xl md:text-4xl text-white font-bold">{t('mika.monday')} 16 {t('mika.february')} 2026</p>
                    <p className="text-yellow-200 text-xl mt-2 font-bold">20h00</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3 text-base text-muted-foreground bg-gradient-to-r from-orange-100 to-pink-100 dark:from-orange-950/30 dark:to-pink-950/30 rounded-2xl p-5 border border-orange-200 dark:border-orange-800/30">
                <MapPin className="w-6 h-6 text-orange-600" />
                <span className="font-medium">Accor Arena, 8 Boulevard de Bercy, 75012 Paris</span>
              </div>
            </div>
          </div>
        </section>

        {/* Artist Section - Ultra punchy */}
        <section className="py-20 bg-gradient-to-br from-purple-900 via-pink-900 to-orange-900 text-white relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-64 h-64 bg-yellow-400/20 rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-10 right-10 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl animate-float animation-delay-400" />
          </div>
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,white_2px,transparent_2px),radial-gradient(circle_at_70%_80%,white_1px,transparent_1px)] bg-[length:50px_50px,30px_30px]" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-block p-4 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full mb-4 shadow-xl animate-float">
                  <Star className="w-12 h-12 text-white" />
                </div>
                <h2 className="font-display text-4xl md:text-5xl mb-3">{t('mika.exceptionalArtist')}</h2>
                <p className="text-yellow-200 text-xl">{t('mika.internationalCareer')}</p>
              </div>
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white/15 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-colors group">
                  <h3 className="font-display text-2xl mb-4 text-yellow-300 group-hover:text-yellow-200 transition-colors">{t('mika.musicalPath')}</h3>
                  <p className="text-white/90 leading-relaxed">{t('mika.musicalPathDesc')}</p>
                </div>
                <div className="bg-white/15 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-colors group">
                  <h3 className="font-display text-2xl mb-4 text-pink-300 group-hover:text-pink-200 transition-colors">{t('mika.legendaryShows')}</h3>
                  <p className="text-white/90 leading-relaxed">{t('mika.legendaryShowsDesc')}</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-6 text-center">
                {[
                  { icon: Mic, value: "10M+", label: t('mika.albumsSold'), color: "from-yellow-400 to-orange-500" },
                  { icon: Star, value: "6", label: t('mika.studioAlbums'), color: "from-pink-400 to-purple-500" },
                  { icon: Music, value: "15+", label: t('mika.careerYears'), color: "from-purple-400 to-pink-500" }
                ].map((item, idx) => (
                  <div key={idx} className="group">
                    <div className="bg-white/15 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/25 transition-all hover:scale-105 duration-300">
                      <div className={`inline-block p-3 bg-gradient-to-br ${item.color} rounded-full mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                        <item.icon className="w-8 h-8 text-white" />
                      </div>
                      <p className="font-display text-4xl md:text-5xl font-bold">{item.value}</p>
                      <p className="text-yellow-200 text-sm mt-2 uppercase tracking-wide">{item.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Offers Section - Plus punchy */}
        <section className="py-20 bg-gradient-to-br from-orange-100 via-white to-pink-100 dark:from-orange-950/30 dark:via-card dark:to-pink-950/30 relative overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-300/30 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-pink-300/30 rounded-full blur-3xl" />
          <div className="container mx-auto px-4 relative">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-block p-4 bg-gradient-to-br from-orange-500 to-pink-600 rounded-full mb-4 shadow-xl">
                  <Gift className="w-10 h-10 text-white" />
                </div>
                <h2 className="font-display text-4xl md:text-5xl text-foreground mb-3">{t('mika.exclusiveOffers')}</h2>
                <p className="text-muted-foreground text-lg">{t('mika.offersSubtitle')}</p>
              </div>
              <div className="grid md:grid-cols-2 gap-10">
                <div className="group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-3xl blur-lg opacity-40 group-hover:opacity-60 transition-opacity" />
                  <div className="relative bg-white dark:bg-card rounded-3xl p-10 shadow-2xl border-2 border-orange-200 dark:border-orange-700/50 hover:scale-[1.03] transition-transform duration-300">
                    <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-2xl flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 transition-transform">
                      <Car className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="font-display text-3xl text-foreground mb-3">{t('mika.parking')}</h3>
                    <p className="text-muted-foreground mb-6 text-lg">{t('mika.parkingDesc')}</p>
                    <div className="inline-block bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-bold text-2xl px-6 py-3 rounded-full shadow-lg">{t('mika.parkingPrice')}</div>
                  </div>
                </div>
                <div className="group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-3xl blur-lg opacity-40 group-hover:opacity-60 transition-opacity" />
                  <div className="relative bg-white dark:bg-card rounded-3xl p-10 shadow-2xl border-2 border-pink-200 dark:border-pink-700/50 hover:scale-[1.03] transition-transform duration-300">
                    <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 transition-transform">
                      <Ticket className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="font-display text-3xl text-foreground mb-3">{t('mika.taxi')}</h3>
                    <p className="text-muted-foreground mb-6 text-lg">{t('mika.taxiDesc')}</p>
                    <div className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold text-2xl px-6 py-3 rounded-full shadow-lg">{t('mika.taxiDiscount')}</div>
                  </div>
                </div>
              </div>
              <p className="text-center text-base text-muted-foreground mt-10 italic">{t('mika.offersNote')}</p>
            </div>
          </div>
        </section>

        {/* Hotel Promo Section */}
        <section className="py-20 bg-gradient-to-br from-amber-50 via-white to-orange-50 dark:from-amber-950/20 dark:via-background dark:to-orange-950/20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/20 to-orange-500/20 text-primary px-6 py-3 rounded-full mb-4 shadow-lg border border-primary/20">
                  <Star className="w-5 h-5" />
                  <span className="font-bold text-sm uppercase tracking-wider">{t('mika.hotelPromo.badge')}</span>
                </div>
                <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">{t('mika.hotelPromo.title')}</h2>
                <p className="text-muted-foreground text-xl max-w-2xl mx-auto">{t('mika.hotelPromo.subtitle')}</p>
              </div>

              <div className="bg-white dark:bg-card rounded-3xl shadow-2xl border-2 border-border/50 overflow-hidden">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="p-10 md:p-12">
                    <h3 className="font-display text-2xl text-foreground mb-6">{t('mika.hotelPromo.whyUs')}</h3>
                    <div className="space-y-5">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/20 to-orange-500/20 flex items-center justify-center flex-shrink-0">
                          <Train className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-bold text-foreground text-lg">{t('mika.hotelPromo.location')}</h4>
                          <p className="text-muted-foreground">{t('mika.hotelPromo.locationDesc')}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-100 to-yellow-100 dark:from-orange-900/30 dark:to-yellow-900/30 flex items-center justify-center flex-shrink-0">
                          <Coffee className="w-6 h-6 text-orange-600" />
                        </div>
                        <div>
                          <h4 className="font-bold text-foreground text-lg">{t('mika.hotelPromo.breakfast')}</h4>
                          <p className="text-muted-foreground">{t('mika.hotelPromo.breakfastDesc')}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-pink-100 to-purple-100 dark:from-pink-900/30 dark:to-purple-900/30 flex items-center justify-center flex-shrink-0">
                          <Users className="w-6 h-6 text-pink-600" />
                        </div>
                        <div>
                          <h4 className="font-bold text-foreground text-lg">{t('mika.hotelPromo.reception')}</h4>
                          <p className="text-muted-foreground">{t('mika.hotelPromo.receptionDesc')}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-primary/5 via-orange-100/50 to-pink-100/50 dark:from-primary/10 dark:via-orange-900/20 dark:to-pink-900/20 p-10 md:p-12">
                    <h3 className="font-display text-2xl text-foreground mb-6">{t('mika.hotelPromo.comfort')}</h3>
                    <ul className="space-y-4">
                      {[
                        { icon: Tv, text: t('mika.hotelPromo.tv') },
                        { icon: Wifi, text: t('mika.hotelPromo.wifi') },
                        { icon: Coffee, text: t('mika.hotelPromo.buffet') },
                        { icon: Car, text: t('mika.hotelPromo.parkingOption') }
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-center gap-4 text-muted-foreground">
                          <div className="w-10 h-10 rounded-xl bg-white dark:bg-card flex items-center justify-center shadow-md">
                            <item.icon className="w-5 h-5 text-primary" />
                          </div>
                          <span className="font-medium">{item.text}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8">
                      <Link to="/nos-chambres">
                        <Button className="w-full bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700 text-white font-bold py-6 text-lg shadow-xl hover:scale-105 transition-all duration-300">
                          {t('mika.hotelPromo.discoverRooms')}
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Video Section - Plus punchy */}
        <section className="py-20 bg-gradient-to-br from-purple-50 via-white to-orange-50 dark:from-purple-950/20 dark:via-background dark:to-orange-950/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <div className="inline-block p-4 bg-gradient-to-br from-orange-500 to-pink-600 rounded-full mb-4 shadow-xl">
                <Music className="w-10 h-10 text-white" />
              </div>
              <h2 className="font-display text-4xl md:text-5xl text-foreground">{t('mika.watchVideo')}</h2>
            </div>
            <div className="max-w-5xl mx-auto relative group">
              <div className="absolute -inset-3 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 rounded-3xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity" />
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl ring-4 ring-white/50">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube.com/embed/PdKB51C6TEE" 
                  title="MIKA - Spinning Out Tour" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen 
                  className="w-full h-full" 
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section - Ultra punchy */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-pink-600 to-purple-700 animate-gradient" />
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-400/30 rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500/30 rounded-full blur-3xl animate-float animation-delay-600" />
          </div>
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,white_2px,transparent_2px)] bg-[length:40px_40px]" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-block p-4 bg-white/20 backdrop-blur-md rounded-full mb-6 animate-bounce-subtle border border-white/30">
                  <Gift className="w-12 h-12 text-yellow-300" />
                </div>
                <h2 className="font-display text-4xl md:text-6xl text-white mb-4 drop-shadow-2xl">{t('mika.bookStay')}</h2>
                <p className="text-yellow-200 text-xl">{t('mika.bestConditions')}</p>
              </div>
              <div className="text-center">
                <Link to="/reservation-seminaire">
                  <Button size="lg" className="bg-white text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-pink-600 hover:bg-yellow-50 font-bold px-12 py-8 text-xl shadow-2xl hover:scale-110 transition-all duration-300 border-4 border-white/50 group">
                    <Music className="w-6 h-6 mr-3 text-orange-600 group-hover:animate-bounce" />
                    <span className="bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">{t('mika.bookNow')}</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default MikaConcert;
