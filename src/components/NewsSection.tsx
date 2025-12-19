import { Calendar, ArrowRight, Music, Trophy, Leaf, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import enfoiresAffiche from "@/assets/enfoires-2026-affiche.png";
import rugbyImage from "@/assets/rugby-france-irlande.jpg";
import salonAgricultureHero from "@/assets/salon-agriculture-hero.jpg";

const drapeauFrance = "https://flagcdn.com/w80/fr.png";
const drapeauIrlande = "https://flagcdn.com/w80/ie.png";

export const NewsSection = () => {
  const { t } = useLanguage();

  const events = [
    {
      id: 1,
      title: t('enfoires.title'),
      subtitle: t('enfoires.ballade'),
      dateStart: t('actualites.enfoires.date'),
      category: t('actualites.concert'),
      link: "/enfoires-2026",
      bgColor: "bg-gradient-to-br from-pink-500 via-fuchsia-500 to-purple-600",
      textColor: "text-pink-100",
      icon: Music,
      image: enfoiresAffiche,
    },
    {
      id: 2,
      title: t('actualites.rugby.title'),
      subtitle: t('rugby.tournament'),
      subtitleWithFlags: true,
      dateStart: t('actualites.rugby.date'),
      category: t('rugby.tournament'),
      link: "/tournoi-6-nations",
      bgColor: "bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-700",
      textColor: "text-blue-100",
      icon: Trophy,
      image: rugbyImage,
    },
    {
      id: 3,
      title: t('actualites.agriculture.title'),
      subtitle: t('agriculture.biggestFarm'),
      dateStart: t('actualites.agriculture.date'),
      category: t('actualites.salon'),
      link: "/salon-agriculture",
      bgColor: "bg-gradient-to-br from-green-500 via-emerald-500 to-teal-600",
      textColor: "text-green-100",
      icon: Leaf,
      image: salonAgricultureHero,
    },
  ];

  return (
    <section className="relative py-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal/95 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-burgundy via-burgundy to-primary text-white px-6 py-3 rounded-full mb-6 shadow-lg shadow-burgundy/30 animate-pulse hover:scale-105 transition-transform cursor-default">
            <Sparkles className="w-5 h-5 animate-spin" style={{ animationDuration: '3s' }} />
            <span className="font-bold text-base uppercase tracking-widest">{t('news.dontMiss')}</span>
            <Sparkles className="w-5 h-5 animate-spin" style={{ animationDuration: '3s', animationDirection: 'reverse' }} />
          </div>
          <h2 className="font-display text-3xl md:text-5xl text-burgundy mb-2">
            {t('news.upcomingEvents')}
          </h2>
          <p className="text-muted-foreground text-lg">{t('news.subtitle')}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {events.map((event) => {
            const Icon = event.icon;
            return (
              <Link key={event.id} to={event.link} className="group">
                <div className={`relative overflow-hidden ${event.bgColor} shadow-xl hover:shadow-2xl transition-all duration-500 h-full`}>
                  <div className="absolute inset-0 opacity-15">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,white_1px,transparent_1px)] bg-[length:20px_20px]" />
                  </div>
                  <div className="relative flex flex-col h-full">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img src={event.image} alt={event.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                      <div className={`absolute inset-0 bg-gradient-to-t from-current to-transparent opacity-60`} />
                    </div>
                    <div className="flex-1 p-6 flex flex-col justify-center">
                      <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 w-fit mb-3">
                        <Icon className="w-3.5 h-3.5" />{event.category}
                      </div>
                      <h3 className="font-display text-xl md:text-2xl text-white mb-1 group-hover:translate-x-1 transition-transform flex items-center gap-2 flex-wrap">
                        {event.subtitleWithFlags && <img src={drapeauFrance} alt="France" loading="lazy" className="w-6 h-4 object-cover shadow" />}
                        {event.title}
                        {event.subtitleWithFlags && <img src={drapeauIrlande} alt="Irlande" loading="lazy" className="w-6 h-4 object-cover shadow" />}
                      </h3>
                      <p className="text-white/70 text-sm mb-3">{event.subtitle}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-white/80 text-sm"><Calendar className="w-4 h-4 mr-1.5" />{event.dateStart}</div>
                        <div className="flex items-center text-white font-semibold text-sm group-hover:translate-x-1 transition-transform">{t('news.see')}<ArrowRight className="w-4 h-4 ml-1" /></div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};
