import { Link } from "react-router-dom";
import { Calendar, Music, Mic, Leaf, Trophy, Timer } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import enfoiresAffiche from "@/assets/enfoires-2026-affiche.png";
import mikaHero from "@/assets/mika-concert-hero.jpg";
import claraHero from "@/assets/clara-luciani-hero.jpg";
import salonAgricultureHero from "@/assets/salon-agriculture-hero.jpg";
import rugbyImage from "@/assets/rugby-france-irlande.jpg";
import semiMarathonHero from "@/assets/semi-marathon-course.jpg";
import wutangHero from "@/assets/wu-tang-concert.jpg";
import vingtKmHero from "@/assets/20km-paris-hero.jpg";

interface RelatedEventsProps {
  currentEventId: string;
}

export const RelatedEvents = ({ currentEventId }: RelatedEventsProps) => {
  const { t } = useLanguage();

  const allEvents = [
    {
      id: "enfoires",
      title: t('enfoires.title'),
      date: t('actualites.enfoires.date'),
      sortDate: "2026-01-13",
      endDate: "2026-01-19",
      link: "/evenements/enfoires-2026",
      image: enfoiresAffiche,
      icon: Music,
      color: "from-pink-500 to-rose-600",
      bgColor: "bg-pink-100 dark:bg-pink-900/30",
      textColor: "text-pink-600 dark:text-pink-400",
    },
    {
      id: "mika",
      title: "MIKA",
      date: "16 " + t('mika.february') + " 2026",
      sortDate: "2026-02-16",
      endDate: "2026-02-16",
      link: "/evenements/mika-concert",
      image: mikaHero,
      icon: Mic,
      color: "from-orange-500 to-pink-600",
      bgColor: "bg-orange-100 dark:bg-orange-900/30",
      textColor: "text-orange-600 dark:text-orange-400",
    },
    {
      id: "clara",
      title: "Clara Luciani",
      date: t('actualites.clara.date'),
      sortDate: "2026-02-18",
      endDate: "2026-02-19",
      link: "/evenements/clara-luciani-concert",
      image: claraHero,
      icon: Mic,
      color: "from-indigo-500 to-purple-600",
      bgColor: "bg-indigo-100 dark:bg-indigo-900/30",
      textColor: "text-indigo-600 dark:text-indigo-400",
    },
    {
      id: "agriculture",
      title: t('actualites.agriculture.title'),
      date: t('actualites.agriculture.date'),
      sortDate: "2026-02-21",
      endDate: "2026-03-01",
      link: "/evenements/salon-agriculture",
      image: salonAgricultureHero,
      icon: Leaf,
      color: "from-green-500 to-emerald-600",
      bgColor: "bg-green-100 dark:bg-green-900/30",
      textColor: "text-green-600 dark:text-green-400",
    },
    {
      id: "rugby",
      title: t('actualites.rugby.title'),
      date: t('actualites.rugby.date'),
      sortDate: "2026-02-05",
      endDate: "2026-02-05",
      link: "/evenements/tournoi-6-nations",
      image: rugbyImage,
      icon: Trophy,
      color: "from-blue-500 to-indigo-600",
      bgColor: "bg-blue-100 dark:bg-blue-900/30",
      textColor: "text-blue-600 dark:text-blue-400",
    },
    {
      id: "semimarathon",
      title: t('semimarathon.title'),
      date: t('actualites.semimarathon.date'),
      sortDate: "2026-03-08",
      endDate: "2026-03-08",
      link: "/evenements/semi-marathon-paris",
      image: semiMarathonHero,
      icon: Timer,
      color: "from-[#E94E4B] to-[#3BB5DC]",
      bgColor: "bg-[#E94E4B]/10 dark:bg-[#E94E4B]/20",
      textColor: "text-[#E94E4B]",
    },
    {
      id: "wutang",
      title: t('wutang.title'),
      date: t('actualites.wutang.date'),
      sortDate: "2026-03-11",
      endDate: "2026-03-11",
      link: "/evenements/wu-tang-concert",
      image: wutangHero,
      icon: Mic,
      color: "from-yellow-500 to-amber-600",
      bgColor: "bg-yellow-100 dark:bg-yellow-900/30",
      textColor: "text-yellow-600 dark:text-yellow-400",
    },
    {
      id: "france-angleterre",
      title: t('actualites.franceangleterre.title'),
      date: t('actualites.franceangleterre.date'),
      sortDate: "2026-03-14",
      endDate: "2026-03-14",
      link: "/evenements/france-angleterre",
      image: rugbyImage,
      icon: Trophy,
      color: "from-blue-600 to-red-600",
      bgColor: "bg-purple-100 dark:bg-purple-900/30",
      textColor: "text-purple-600 dark:text-purple-400",
    },
    {
      id: "20-km-paris",
      title: t('vingtKm.title'),
      date: "11 " + t('mika.october') + " 2026",
      sortDate: "2026-10-11",
      endDate: "2026-10-11",
      link: "/evenements/20-km-paris",
      image: vingtKmHero,
      icon: Timer,
      color: "from-emerald-500 to-teal-600",
      bgColor: "bg-emerald-100 dark:bg-emerald-900/30",
      textColor: "text-emerald-600 dark:text-emerald-400",
    },
  ];

  // Filter out current event and past events, then take up to 3
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const relatedEvents = allEvents
    .filter(event => {
      if (event.id === currentEventId) return false;
      const eventEndDate = new Date(event.endDate);
      eventEndDate.setHours(23, 59, 59, 999);
      return eventEndDate >= today;
    })
    .sort((a, b) => new Date(a.sortDate).getTime() - new Date(b.sortDate).getTime())
    .slice(0, 3);

  if (relatedEvents.length === 0) return null;

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-2">
              {t('relatedEvents.title')}
            </h2>
            <p className="text-muted-foreground">{t('relatedEvents.subtitle')}</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {relatedEvents.map((event) => (
              <Link 
                key={event.id} 
                to={event.link}
                className="group block"
              >
                <div className="bg-card rounded-2xl overflow-hidden shadow-lg border border-border/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="relative h-40 overflow-hidden">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${event.color} opacity-40`} />
                    <div className={`absolute top-3 left-3 ${event.bgColor} backdrop-blur-sm px-3 py-1 rounded-full`}>
                      <event.icon className={`w-4 h-4 ${event.textColor} inline mr-1`} />
                      <span className={`text-xs font-medium ${event.textColor}`}>{event.date}</span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-display text-lg text-foreground group-hover:text-primary transition-colors line-clamp-1">
                      {event.title}
                    </h3>
                    <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>{event.date}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link 
              to="/evenements" 
              className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
            >
              {t('relatedEvents.viewAll')} →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
