import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, Camera, Music, Trophy, Leaf, Mic, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import enfoiresAffiche from "@/assets/enfoires-2026-affiche.png";
import rugbyImage from "@/assets/rugby-france-irlande.jpg";
import salonAgricultureHero from "@/assets/salon-agriculture-hero.jpg";
import mikaHero from "@/assets/mika-concert-hero.jpg";
import claraHero from "@/assets/clara-luciani-hero.jpg";

const drapeauFrance = "https://flagcdn.com/w80/fr.png";
const drapeauIrlande = "https://flagcdn.com/w80/ie.png";

const Actualites = () => {
  const { t } = useLanguage();

  // Events with sortable dates and end dates for filtering
  const events = [
    {
      id: "enfoires",
      title: t('enfoires.title'),
      subtitle: t('actualites.enfoires.subtitle'),
      date: t('actualites.enfoires.date'),
      sortDate: "2026-01-13",
      endDate: "2026-01-19",
      location: t('actualites.enfoires.location'),
      category: t('actualites.concert'),
      link: "/enfoires-2026",
      image: enfoiresAffiche,
      icon: Music,
      badgeColor: "bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400",
    },
    {
      id: "mika",
      title: t('mika.title'),
      subtitle: t('mika.subtitle'),
      date: "16 " + t('mika.february') + " 2026",
      sortDate: "2026-02-16",
      endDate: "2026-02-16",
      location: "Accor Arena Paris",
      category: t('actualites.concert'),
      link: "/mika-concert",
      image: mikaHero,
      icon: Mic,
      badgeColor: "bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400",
    },
    {
      id: "clara",
      title: t('clara.title'),
      subtitle: t('clara.subtitle'),
      date: t('actualites.clara.date'),
      sortDate: "2026-02-18",
      endDate: "2026-02-18",
      location: "Accor Arena Paris",
      category: t('actualites.concert'),
      link: "/clara-luciani-concert",
      image: claraHero,
      icon: Mic,
      badgeColor: "bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400",
    },
    {
      id: "agriculture",
      title: t('actualites.agriculture.title'),
      subtitle: t('actualites.agriculture.subtitle'),
      date: t('actualites.agriculture.date'),
      sortDate: "2026-02-21",
      endDate: "2026-03-01",
      location: t('actualites.agriculture.location'),
      category: t('actualites.salon'),
      link: "/salon-agriculture",
      image: salonAgricultureHero,
      icon: Leaf,
      badgeColor: "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400",
    },
    {
      id: "rugby",
      title: t('actualites.rugby.title'),
      subtitle: t('actualites.rugby.subtitle'),
      date: t('actualites.rugby.date'),
      sortDate: "2026-02-22",
      endDate: "2026-02-22",
      location: t('actualites.rugby.location'),
      category: t('rugby.tournament'),
      link: "/tournoi-6-nations",
      image: rugbyImage,
      icon: Trophy,
      badgeColor: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",
      hasFlags: true,
    },
  ];

  // Get today's date at midnight for comparison
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Filter upcoming events (end date >= today)
  const upcomingEvents = [...events]
    .filter(event => {
      const eventEndDate = new Date(event.endDate);
      eventEndDate.setHours(23, 59, 59, 999);
      return eventEndDate >= today;
    })
    .sort((a, b) => 
      new Date(a.sortDate).getTime() - new Date(b.sortDate).getTime()
    );

  // Filter past events (end date < today)
  const pastEvents = [...events]
    .filter(event => {
      const eventEndDate = new Date(event.endDate);
      eventEndDate.setHours(23, 59, 59, 999);
      return eventEndDate < today;
    })
    .sort((a, b) => 
      new Date(b.sortDate).getTime() - new Date(a.sortDate).getTime() // Most recent first
    );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="pt-32 pb-16 bg-charcoal">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <p className="text-primary font-body uppercase tracking-[0.2em] text-sm mb-4">{t('actualites.hero.badge')}</p>
              <h1 className="font-display text-4xl md:text-6xl text-foreground mb-6">{t('actualites.hero.title')}</h1>
              <p className="text-muted-foreground text-lg">{t('actualites.hero.description')}</p>
            </div>
          </div>
        </section>

        {/* Upcoming Events Section */}
        <section className="py-16 bg-gradient-to-b from-background to-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <p className="text-primary font-body uppercase tracking-[0.2em] text-sm mb-3">{t('actualites.upcoming')}</p>
              <h2 className="font-display text-3xl md:text-4xl text-foreground">{t('actualites.dontMiss')}</h2>
            </div>
            
            {upcomingEvents.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
                {upcomingEvents.map((event) => {
                  const Icon = event.icon;
                  return (
                    <Link key={event.id} to={event.link} className="group h-full">
                      <article className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-border/50 h-full flex flex-col">
                        <div className="aspect-[3/4] overflow-hidden relative">
                          <img src={event.image} alt={event.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                          {event.hasFlags && (
                            <div className="absolute bottom-2 left-2 right-2 flex items-center justify-center gap-2 bg-white/90 dark:bg-card/90 backdrop-blur-sm rounded-lg py-1.5 px-3">
                              <img src={drapeauFrance} alt="France" loading="lazy" className="w-6 h-4 object-cover rounded shadow-sm" />
                              <span className="font-display text-foreground text-xs">VS</span>
                              <img src={drapeauIrlande} alt="Irlande" loading="lazy" className="w-6 h-4 object-cover rounded shadow-sm" />
                            </div>
                          )}
                        </div>
                        <div className="p-4 flex flex-col flex-1">
                          <div className="flex items-center justify-center mb-2">
                            <span className={`inline-flex items-center gap-1 ${event.badgeColor} px-2 py-0.5 rounded-full text-xs font-medium`}>
                              <Icon className="w-3 h-3" />{event.category}
                            </span>
                          </div>
                          <h3 className="font-display text-lg text-foreground mb-2 group-hover:text-primary transition-colors text-center leading-tight min-h-[3rem] flex items-center justify-center">{event.title}</h3>
                          <p className="text-muted-foreground text-xs mb-3 text-center leading-relaxed min-h-[3rem]">{event.subtitle}</p>
                          <div className="mt-auto border-t border-border/30 pt-3">
                            <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                              <Calendar className="w-3 h-3" /><span>{event.date}</span>
                            </div>
                            <p className="text-xs text-muted-foreground mt-1 text-center">{event.location}</p>
                          </div>
                        </div>
                      </article>
                    </Link>
                  );
                })}
              </div>
            ) : (
              <p className="text-center text-muted-foreground italic">{t('actualites.noUpcoming')}</p>
            )}
          </div>
        </section>

        {/* Past Events Section */}
        <section className="py-16 bg-charcoal">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Clock className="w-5 h-5 text-primary" />
                <span className="text-primary font-body uppercase tracking-[0.2em] text-sm">{t('actualites.flashback')}</span>
              </div>
              <h2 className="font-display text-2xl md:text-3xl text-foreground">{t('actualites.pastEvents')}</h2>
              <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">{t('actualites.pastEventsDesc')}</p>
            </div>
            
            {pastEvents.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {pastEvents.map((event) => {
                  const Icon = event.icon;
                  return (
                    <Link key={event.id} to={event.link} className="group">
                      <article className="bg-card/50 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-border/30 relative">
                        <div className="absolute inset-0 bg-black/20 z-10" />
                        <div className="aspect-[4/3] overflow-hidden relative">
                          <img src={event.image} alt={event.title} loading="lazy" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                          {event.hasFlags && (
                            <div className="absolute bottom-2 left-2 right-2 flex items-center justify-center gap-2 bg-white/80 dark:bg-card/80 backdrop-blur-sm rounded-lg py-1 px-2 z-20">
                              <img src={drapeauFrance} alt="France" loading="lazy" className="w-5 h-3 object-cover rounded shadow-sm" />
                              <span className="font-display text-foreground text-xs">VS</span>
                              <img src={drapeauIrlande} alt="Irlande" loading="lazy" className="w-5 h-3 object-cover rounded shadow-sm" />
                            </div>
                          )}
                        </div>
                        <div className="p-4 relative z-20">
                          <div className="flex items-center justify-center mb-2">
                            <span className={`inline-flex items-center gap-1 ${event.badgeColor} px-2 py-0.5 rounded-full text-xs font-medium opacity-80`}>
                              <Icon className="w-3 h-3" />{event.category}
                            </span>
                          </div>
                          <h3 className="font-display text-base text-foreground mb-1 group-hover:text-primary transition-colors text-center">{event.title}</h3>
                          <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                            <Calendar className="w-3 h-3" /><span>{event.date}</span>
                          </div>
                        </div>
                      </article>
                    </Link>
                  );
                })}
              </div>
            ) : (
              <p className="text-center text-muted-foreground text-sm italic">{t('actualites.photosComing')}</p>
            )}
          </div>
        </section>

        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">{t('actualites.newsletter.title')}</h2>
              <p className="text-muted-foreground mb-8">{t('actualites.newsletter.description')}</p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input type="email" placeholder={t('actualites.newsletter.placeholder')} className="flex-1 px-4 py-3 bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors" />
                <Button variant="gold">{t('actualites.newsletter.button')}</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Actualites;