import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Music, Star, Mic, Sparkles, Gift, Ticket, Clock, Car, Coffee, Wifi, Tv, Users, Train, Zap, Heart, Shirt, Trophy, CheckCircle, Euro } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import wutangConcert from "@/assets/wu-tang-concert.jpg";
import wutangPortrait from "@/assets/wu-tang-portrait.jpg";
import { useLanguage } from "@/contexts/LanguageContext";
import { RelatedEvents } from "@/components/RelatedEvents";

const WuTangConcert = () => {
  const { t } = useLanguage();
  
  // Date confirmée : 11 mars 2026 à 20h00
  const targetDate = new Date('2026-03-11T20:00:00').getTime();
  
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
          {/* Background image with overlay */}
          <div className="absolute inset-0">
            <img src={wutangConcert} alt="Wu-Tang Clan Concert" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
          </div>
          
          {/* Gold animated elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-20 -left-20 w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-amber-500/30 rounded-full blur-3xl animate-float animation-delay-400" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl">
              <div className="animate-fade-up">
                <div className="inline-flex items-center gap-2 bg-yellow-500/20 backdrop-blur-md px-5 py-2.5 rounded-full mb-6 border border-yellow-500/40">
                  <Mic className="w-5 h-5 text-yellow-400 animate-bounce-subtle" />
                  <span className="text-yellow-300 uppercase tracking-widest text-sm font-bold">{t('wutang.tour')}</span>
                </div>
              </div>
              
              <h1 className="font-display text-5xl md:text-7xl text-white mb-4 drop-shadow-2xl animate-fade-up animation-delay-200">
                <span className="bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500 bg-clip-text text-transparent">
                  {t('wutang.title')}
                </span>
              </h1>
              
              <p className="text-2xl md:text-3xl text-yellow-200 font-display mb-8 animate-fade-up animation-delay-400">
                {t('wutang.subtitle')}
              </p>
              
              <div className="flex flex-wrap items-center gap-3 mb-10 animate-fade-up animation-delay-600">
                <div className="flex items-center gap-2 bg-white/15 backdrop-blur-md px-5 py-3 rounded-full text-white font-bold text-sm border border-white/20 hover:bg-white/25 transition-colors">
                  <Calendar className="w-5 h-5 text-yellow-400" />{t('wutang.dateInfo')}
                </div>
                <div className="flex items-center gap-2 bg-white/15 backdrop-blur-md px-5 py-3 rounded-full text-white font-bold text-sm border border-white/20 hover:bg-white/25 transition-colors">
                  <MapPin className="w-5 h-5 text-yellow-400" />Accor Arena Paris
                </div>
              </div>
              
              {/* Countdown */}
              <div className="inline-block bg-black/50 backdrop-blur-xl rounded-3xl p-6 border border-yellow-500/30 animate-fade-up animation-delay-600">
                <div className="flex items-center justify-center gap-2 mb-4 text-yellow-400">
                  <Clock className="w-5 h-5 animate-pulse" />
                  <span className="text-sm uppercase tracking-widest font-bold">{t('wutang.countdown')}</span>
                </div>
                <div className="grid grid-cols-4 gap-3 md:gap-5 text-center">
                  {[
                    { value: countdown.days, label: t('wutang.days') },
                    { value: countdown.hours, label: t('wutang.hours') },
                    { value: countdown.minutes, label: t('wutang.min') },
                    { value: countdown.seconds, label: t('wutang.sec') }
                  ].map((item, idx) => (
                    <div key={idx} className="group">
                      <div className="bg-gradient-to-br from-yellow-500 via-amber-500 to-yellow-600 rounded-2xl px-3 md:px-5 py-3 shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                        <span className="font-display text-2xl md:text-4xl text-black font-bold">{item.value}</span>
                      </div>
                      <p className="text-yellow-300 text-xs mt-2 uppercase font-bold tracking-wide">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hotel Promo Section - MOVED UP */}
        <section className="py-20 bg-gradient-to-br from-amber-50 via-white to-yellow-50 dark:from-amber-950/20 dark:via-background dark:to-yellow-950/20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/20 to-yellow-500/20 text-primary px-6 py-3 rounded-full mb-4 shadow-lg border border-primary/20">
                  <Star className="w-5 h-5" />
                  <span className="font-bold text-sm uppercase tracking-wider">{t('wutang.hotelPromo.badge')}</span>
                </div>
                <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">{t('wutang.hotelPromo.title')}</h2>
                <p className="text-muted-foreground text-xl max-w-2xl mx-auto">{t('wutang.hotelPromo.subtitle')}</p>
              </div>

              <div className="bg-white dark:bg-card rounded-3xl shadow-2xl border-2 border-border/50 overflow-hidden">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="p-10 md:p-12">
                    <h3 className="font-display text-2xl text-foreground mb-6">{t('wutang.hotelPromo.whyUs')}</h3>
                    <div className="space-y-5">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/20 to-yellow-500/20 flex items-center justify-center flex-shrink-0">
                          <Train className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-bold text-foreground text-lg">{t('wutang.hotelPromo.location')}</h4>
                          <p className="text-muted-foreground">{t('wutang.hotelPromo.locationDesc')}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-yellow-100 to-amber-100 dark:from-yellow-900/30 dark:to-amber-900/30 flex items-center justify-center flex-shrink-0">
                          <Coffee className="w-6 h-6 text-yellow-600" />
                        </div>
                        <div>
                          <h4 className="font-bold text-foreground text-lg">{t('wutang.hotelPromo.breakfast')}</h4>
                          <p className="text-muted-foreground">{t('wutang.hotelPromo.breakfastDesc')}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30 flex items-center justify-center flex-shrink-0">
                          <Users className="w-6 h-6 text-amber-600" />
                        </div>
                        <div>
                          <h4 className="font-bold text-foreground text-lg">{t('wutang.hotelPromo.reception')}</h4>
                          <p className="text-muted-foreground">{t('wutang.hotelPromo.receptionDesc')}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-primary/5 via-yellow-100/50 to-amber-100/50 dark:from-primary/10 dark:via-yellow-900/20 dark:to-amber-900/20 p-10 md:p-12">
                    <h3 className="font-display text-2xl text-foreground mb-6">{t('wutang.hotelPromo.comfort')}</h3>
                    <ul className="space-y-4">
                      {[
                        { icon: Tv, text: t('wutang.hotelPromo.tv') },
                        { icon: Wifi, text: t('wutang.hotelPromo.wifi') },
                        { icon: Coffee, text: t('wutang.hotelPromo.buffet') },
                        { icon: Car, text: t('wutang.hotelPromo.parkingOption') }
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
                        <Button className="w-full bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 text-white font-bold py-6 text-lg shadow-xl hover:scale-105 transition-all duration-300">
                          {t('wutang.hotelPromo.discoverRooms')}
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section - MOVED UP */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-500 via-amber-600 to-orange-600 animate-gradient" />
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-300/30 rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-orange-500/30 rounded-full blur-3xl animate-float animation-delay-600" />
          </div>
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,white_2px,transparent_2px)] bg-[length:40px_40px]" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-block p-4 bg-white/20 backdrop-blur-md rounded-full mb-6 animate-bounce-subtle border border-white/30">
                  <Gift className="w-12 h-12 text-white" />
                </div>
                <h2 className="font-display text-4xl md:text-6xl text-white mb-4 drop-shadow-2xl">{t('wutang.bookStay')}</h2>
                <p className="text-yellow-100 text-xl">{t('wutang.bestConditions')}</p>
              </div>
              <div className="text-center">
                <Link to="/reservation-seminaire">
                  <Button size="lg" className="bg-white text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-amber-600 hover:bg-yellow-50 font-bold px-12 py-8 text-xl shadow-2xl hover:scale-110 transition-all duration-300 border-4 border-white/50 group">
                    <Mic className="w-6 h-6 mr-3 text-yellow-600 group-hover:animate-bounce" />
                    <span className="bg-gradient-to-r from-yellow-600 to-amber-600 bg-clip-text text-transparent">{t('wutang.bookNow')}</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 bg-white dark:bg-background relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-600" />
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-100 to-amber-100 dark:from-yellow-900/40 dark:to-amber-900/40 text-yellow-700 dark:text-yellow-300 px-6 py-3 rounded-full mb-4 shadow-lg">
                <Sparkles className="w-5 h-5 animate-pulse" />
                <span className="font-bold text-sm uppercase tracking-wider">{t('wutang.legendary')}</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">{t('wutang.uniqueShow')}</h2>
              <p className="text-muted-foreground text-xl leading-relaxed max-w-2xl mx-auto">{t('wutang.showDesc')}</p>
            </div>
          </div>
        </section>

        {/* Biography Section */}
        <section className="py-20 bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 dark:from-yellow-950/20 dark:via-amber-950/20 dark:to-orange-950/20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="bg-white dark:bg-charcoal rounded-3xl shadow-2xl p-8 md:p-12 border-2 border-yellow-200 dark:border-yellow-800/50 mb-10 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-yellow-400/20 to-amber-400/20 rounded-full blur-3xl" />
                <div className="grid md:grid-cols-2 gap-10 items-start relative">
                  <div className="relative group">
                    <div className="absolute -inset-3 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity" />
                    <img 
                      src={wutangPortrait} 
                      alt="Wu-Tang Clan" 
                      className="relative w-full h-auto rounded-2xl shadow-xl object-cover transform group-hover:scale-[1.02] transition-transform duration-500" 
                    />
                  </div>
                  <div className="prose prose-lg max-w-none text-muted-foreground space-y-5">
                    <p className="text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: t('wutang.aboutText1') }} />
                    <p className="leading-relaxed" dangerouslySetInnerHTML={{ __html: t('wutang.aboutText2') }} />
                    <p className="leading-relaxed" dangerouslySetInnerHTML={{ __html: t('wutang.aboutText3') }} />
                  </div>
                </div>
              </div>
              
              {/* Biography */}
              <div className="bg-gradient-to-br from-yellow-200 via-amber-200 to-orange-200 dark:from-yellow-900/40 dark:via-amber-900/40 dark:to-orange-900/40 rounded-3xl p-8 border-2 border-yellow-300/50 dark:border-yellow-700/30 shadow-xl">
                <div className="grid md:grid-cols-2 gap-8 items-start">
                  <div>
                    <h3 className="font-display text-2xl text-foreground mb-4 flex items-center gap-3">
                      <Heart className="w-6 h-6 text-yellow-600" />
                      {t('wutang.bio.title')}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: t('wutang.bio.text1') }} />
                    <p className="text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: t('wutang.bio.text2') }} />
                  </div>
                  <div className="relative group">
                    <div className="absolute -inset-2 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity" />
                    <img 
                      src={wutangConcert} 
                      alt="Wu-Tang Clan en concert" 
                      className="relative w-full h-auto rounded-2xl shadow-xl object-cover aspect-video transform group-hover:scale-[1.02] transition-transform duration-500" 
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Concert Info */}
        <section className="py-20 bg-white dark:bg-background relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(234,179,8,0.1),transparent),radial-gradient(circle_at_70%_30%,rgba(245,158,11,0.1),transparent)]" />
          <div className="container mx-auto px-4 relative">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-block p-4 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-full mb-4 shadow-xl animate-bounce-subtle">
                  <Calendar className="w-10 h-10 text-white" />
                </div>
                <h2 className="font-display text-4xl md:text-5xl text-foreground mb-3">{t('wutang.concertParis')}</h2>
                <p className="text-muted-foreground text-lg">Accor Arena (Paris-Bercy) - {t('wutang.wednesday')} 11 {t('wutang.march')} 2026</p>
              </div>
              
              {/* Date principale */}
              <div className="flex justify-center mb-10">
                <div className="relative group">
                  <div className="absolute -inset-2 bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-600 rounded-2xl blur-lg opacity-60 group-hover:opacity-80 transition-opacity animate-pulse-glow" />
                  <div className="relative bg-gradient-to-br from-yellow-500 via-amber-500 to-yellow-600 rounded-2xl p-8 text-center shadow-2xl">
                    <p className="font-display text-3xl md:text-4xl text-black font-bold">{t('wutang.wednesday')} 11 {t('wutang.march')} 2026</p>
                    <p className="text-black/80 text-xl mt-2 font-bold">20h00</p>
                  </div>
                </div>
              </div>
              
              {/* Prix et informations */}
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gradient-to-br from-yellow-100 to-amber-100 dark:from-yellow-950/30 dark:to-amber-950/30 rounded-2xl p-6 border border-yellow-200 dark:border-yellow-800/30 text-center">
                  <Euro className="w-10 h-10 text-yellow-600 mx-auto mb-3" />
                  <h3 className="font-display text-xl text-foreground mb-2">{t('wutang.prices')}</h3>
                  <p className="text-muted-foreground">{t('wutang.priceRange')}</p>
                </div>
                <div className="bg-gradient-to-br from-yellow-100 to-amber-100 dark:from-yellow-950/30 dark:to-amber-950/30 rounded-2xl p-6 border border-yellow-200 dark:border-yellow-800/30 text-center">
                  <Clock className="w-10 h-10 text-yellow-600 mx-auto mb-3" />
                  <h3 className="font-display text-xl text-foreground mb-2">{t('wutang.doorsOpen')}</h3>
                  <p className="text-muted-foreground">19h00</p>
                </div>
                <div className="bg-gradient-to-br from-yellow-100 to-amber-100 dark:from-yellow-950/30 dark:to-amber-950/30 rounded-2xl p-6 border border-yellow-200 dark:border-yellow-800/30 text-center">
                  <MapPin className="w-10 h-10 text-yellow-600 mx-auto mb-3" />
                  <h3 className="font-display text-xl text-foreground mb-2">{t('wutang.venue')}</h3>
                  <p className="text-muted-foreground">Accor Arena</p>
                </div>
              </div>
              
              <div className="flex items-center justify-center gap-3 text-base text-muted-foreground bg-gradient-to-r from-yellow-100 to-amber-100 dark:from-yellow-950/30 dark:to-amber-950/30 rounded-2xl p-5 border border-yellow-200 dark:border-yellow-800/30">
                <MapPin className="w-6 h-6 text-yellow-600" />
                <span className="font-medium">Accor Arena, 8 Boulevard de Bercy, 75012 Paris</span>
              </div>
            </div>
          </div>
        </section>

        {/* Artist Stats Section */}
        <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-64 h-64 bg-yellow-500/20 rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-10 right-10 w-80 h-80 bg-amber-500/20 rounded-full blur-3xl animate-float animation-delay-400" />
          </div>
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,white_2px,transparent_2px),radial-gradient(circle_at_70%_80%,white_1px,transparent_1px)] bg-[length:50px_50px,30px_30px]" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-block p-4 bg-gradient-to-br from-yellow-500 to-amber-500 rounded-full mb-4 shadow-xl animate-float">
                  <Star className="w-12 h-12 text-black" />
                </div>
                <h2 className="font-display text-4xl md:text-5xl mb-3">{t('wutang.legendaryGroup')}</h2>
                <p className="text-yellow-300 text-xl">{t('wutang.internationalCareer')}</p>
              </div>
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-colors group">
                  <h3 className="font-display text-2xl mb-4 text-yellow-400 group-hover:text-yellow-300 transition-colors">{t('wutang.musicalPath')}</h3>
                  <p className="text-white/90 leading-relaxed">{t('wutang.musicalPathDesc')}</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-colors group">
                  <h3 className="font-display text-2xl mb-4 text-amber-400 group-hover:text-amber-300 transition-colors">{t('wutang.legendaryShows')}</h3>
                  <p className="text-white/90 leading-relaxed">{t('wutang.legendaryShowsDesc')}</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-6 text-center">
                {[
                  { icon: Mic, value: "40M+", label: t('wutang.albumsSold'), color: "from-yellow-500 to-amber-500" },
                  { icon: Star, value: "7", label: t('wutang.studioAlbums'), color: "from-amber-500 to-orange-500" },
                  { icon: Music, value: "30+", label: t('wutang.careerYears'), color: "from-orange-500 to-yellow-500" }
                ].map((item, idx) => (
                  <div key={idx} className="group">
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all hover:scale-105 duration-300">
                      <div className={`inline-block p-3 bg-gradient-to-br ${item.color} rounded-full mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                        <item.icon className="w-8 h-8 text-black" />
                      </div>
                      <p className="font-display text-4xl md:text-5xl font-bold">{item.value}</p>
                      <p className="text-yellow-300 text-sm mt-2 uppercase tracking-wide">{item.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Offers Section */}
        <section className="py-20 bg-gradient-to-br from-yellow-100 via-white to-amber-100 dark:from-yellow-950/30 dark:via-card dark:to-amber-950/30 relative overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-300/30 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-amber-300/30 rounded-full blur-3xl" />
          <div className="container mx-auto px-4 relative">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-block p-4 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-full mb-4 shadow-xl">
                  <Gift className="w-10 h-10 text-white" />
                </div>
                <h2 className="font-display text-4xl md:text-5xl text-foreground mb-3">{t('wutang.exclusiveOffers')}</h2>
                <p className="text-muted-foreground text-lg">{t('wutang.offersSubtitle')}</p>
              </div>
              <div className="grid md:grid-cols-2 gap-10">
                <div className="group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-3xl blur-lg opacity-40 group-hover:opacity-60 transition-opacity" />
                  <div className="relative bg-white dark:bg-card rounded-3xl p-10 shadow-2xl border-2 border-yellow-200 dark:border-yellow-700/50 hover:scale-[1.03] transition-transform duration-300">
                    <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-amber-500 rounded-2xl flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 transition-transform">
                      <Car className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="font-display text-3xl text-foreground mb-3">{t('wutang.parking')}</h3>
                    <p className="text-muted-foreground mb-6 text-lg">{t('wutang.parkingDesc')}</p>
                    <div className="inline-block bg-gradient-to-r from-yellow-500 to-amber-500 text-white font-bold text-2xl px-6 py-3 rounded-full shadow-lg">{t('wutang.parkingPrice')}</div>
                  </div>
                </div>
                <div className="group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-3xl blur-lg opacity-40 group-hover:opacity-60 transition-opacity" />
                  <div className="relative bg-white dark:bg-card rounded-3xl p-10 shadow-2xl border-2 border-amber-200 dark:border-amber-700/50 hover:scale-[1.03] transition-transform duration-300">
                    <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 transition-transform">
                      <Ticket className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="font-display text-3xl text-foreground mb-3">{t('wutang.taxi')}</h3>
                    <p className="text-muted-foreground mb-6 text-lg">{t('wutang.taxiDesc')}</p>
                    <div className="inline-block bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold text-2xl px-6 py-3 rounded-full shadow-lg">{t('wutang.taxiDiscount')}</div>
                  </div>
                </div>
              </div>
              <p className="text-center text-base text-muted-foreground mt-10 italic">{t('wutang.offersNote')}</p>
            </div>
          </div>
        </section>

        {/* Raffle Section - T-shirt */}
        <section className="py-20 bg-gradient-to-br from-amber-100 via-yellow-50 to-orange-100 dark:from-amber-950/30 dark:via-yellow-950/20 dark:to-orange-950/30 relative overflow-hidden">
          <div className="absolute top-0 right-1/4 w-80 h-80 bg-yellow-300/40 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-amber-300/30 rounded-full blur-3xl animate-float animation-delay-400" />
          <div className="container mx-auto px-4 relative">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-amber-500 text-white px-6 py-3 rounded-full mb-4 shadow-xl animate-bounce-subtle">
                  <Trophy className="w-5 h-5" />
                  <span className="font-bold text-sm uppercase tracking-wider">{t('concert.raffle.badge')}</span>
                </div>
                <h2 className="font-display text-4xl md:text-5xl text-foreground mb-3">{t('concert.raffle.title')}</h2>
                <p className="text-muted-foreground text-lg">{t('concert.raffle.subtitle')}</p>
              </div>
              
              <div className="bg-white dark:bg-card rounded-3xl shadow-2xl border-2 border-yellow-200 dark:border-yellow-700/50 overflow-hidden">
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Left - T-shirt visual */}
                  <div className="bg-gradient-to-br from-yellow-500 via-amber-500 to-orange-500 p-10 flex flex-col items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 opacity-20">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,white_2px,transparent_2px)] bg-[length:30px_30px]" />
                    </div>
                    <div className="relative bg-white/20 backdrop-blur-md rounded-3xl p-8 border border-white/30 animate-float">
                      <Shirt className="w-32 h-32 text-white drop-shadow-xl" />
                    </div>
                    <p className="text-white font-display text-2xl mt-6 text-center drop-shadow-lg">T-shirt officiel<br />Wu-Tang Clan 2026</p>
                  </div>
                  
                  {/* Right - How to participate */}
                  <div className="p-8 md:p-10">
                    <p className="text-muted-foreground mb-6 leading-relaxed">{t('concert.raffle.desc')}</p>
                    
                    <h3 className="font-display text-xl text-foreground mb-4 flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-yellow-500" />
                      {t('concert.raffle.howTo')}
                    </h3>
                    
                    <div className="space-y-4">
                      {[
                        { step: 1, text: t('concert.raffle.step1') },
                        { step: 2, text: t('concert.raffle.step2') },
                        { step: 3, text: t('concert.raffle.step3') }
                      ].map((item) => (
                        <div key={item.step} className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-500 to-amber-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                            <span className="text-white font-bold">{item.step}</span>
                          </div>
                          <p className="text-muted-foreground pt-2">{item.text}</p>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-6 p-4 bg-gradient-to-r from-yellow-50 to-amber-50 dark:from-yellow-950/30 dark:to-amber-950/30 rounded-xl border border-yellow-200 dark:border-yellow-800/30">
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

        {/* Video Section */}
        <section className="py-20 bg-gradient-to-br from-gray-100 via-white to-yellow-50 dark:from-gray-950/20 dark:via-background dark:to-yellow-950/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <div className="inline-block p-4 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-full mb-4 shadow-xl">
                <Music className="w-10 h-10 text-white" />
              </div>
              <h2 className="font-display text-4xl md:text-5xl text-foreground">{t('wutang.watchVideo')}</h2>
            </div>
            <div className="max-w-5xl mx-auto relative group">
              <div className="absolute -inset-3 bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-500 rounded-3xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity" />
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl ring-4 ring-white/50">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube.com/embed/pJk0p-98Xzc" 
                  title="Wu-Tang Clan - C.R.E.A.M." 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen 
                  className="w-full h-full" 
                />
              </div>
            </div>
          </div>
        </section>

        {/* Related Events */}
        <RelatedEvents currentEventId="wutang" />
      </main>
      <Footer />
    </div>
  );
};

export default WuTangConcert;
