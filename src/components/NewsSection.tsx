import { Calendar, ArrowRight, Music, Trophy, Leaf, Sparkles, Mic, Timer, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import enfoiresLogo from "@/assets/enfoires-logo-new.png";
import rugbyImage from "@/assets/rugby-france-irlande.jpg";
import franceAngleterreMatch from "@/assets/france-angleterre-match.png";
import salonAgricultureHero from "@/assets/salon-agriculture.webp";
import mikaAffiche from "@/assets/mika-cropped.jpg";
import claraHero from "@/assets/clara-luciani-portrait.jpg";
import semiMarathonHero from "@/assets/semi-marathon-course.jpg";
import wutangHero from "@/assets/wu-tang-concert.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const drapeauFrance = "https://flagcdn.com/w80/fr.png";
const drapeauIrlande = "https://flagcdn.com/w80/ie.png";
const drapeauAngleterre = "https://flagcdn.com/w80/gb-eng.png";

export const NewsSection = () => {
  const { t } = useLanguage();

  // Events with sortable dates (YYYY-MM-DD format for sorting)
  // endDate is the last day of the event - events are hidden after this date
  const events = [
    {
      id: 1,
      title: t('enfoires.title'),
      subtitle: t('enfoires.ballade'),
      dateStart: t('actualites.enfoires.date'),
      sortDate: "2026-01-13",
      endDate: "2026-01-19", // Dernier jour des Enfoirés
      category: t('actualites.concert'),
      link: "/evenements/enfoires-2026",
      bgColor: "bg-gradient-to-br from-pink-500 via-fuchsia-500 to-purple-600",
      textColor: "text-pink-100",
      icon: Music,
      image: enfoiresLogo,
    },
    {
      id: 2,
      title: t('actualites.rugby.title'),
      subtitle: t('rugby.tournament'),
      subtitleWithFlags: true,
      dateStart: t('actualites.rugby.date'),
      sortDate: "2026-02-22",
      endDate: "2026-02-22", // Match France-Irlande
      category: t('rugby.tournament'),
      link: "/evenements/tournoi-6-nations",
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
      sortDate: "2026-02-21",
      endDate: "2026-03-01", // Fin du Salon de l'Agriculture
      category: t('actualites.salon'),
      link: "/evenements/salon-agriculture",
      bgColor: "bg-gradient-to-br from-green-500 via-emerald-500 to-teal-600",
      textColor: "text-green-100",
      icon: Leaf,
      image: salonAgricultureHero,
    },
    {
      id: 4,
      title: t('mika.title'),
      subtitle: t('mika.subtitle'),
      dateStart: t('actualites.mika.date'),
      sortDate: "2026-02-16",
      endDate: "2026-02-16", // Concert Mika
      category: t('actualites.concert'),
      link: "/evenements/mika-concert",
      bgColor: "bg-gradient-to-br from-orange-500 via-pink-500 to-purple-600",
      textColor: "text-orange-100",
      icon: Mic,
      image: mikaAffiche,
    },
    {
      id: 5,
      title: t('clara.title'),
      subtitle: t('clara.subtitle'),
      dateStart: t('actualites.clara.date'),
      sortDate: "2026-02-18",
      endDate: "2026-02-18", // Concert Clara Luciani
      category: t('actualites.concert'),
      link: "/evenements/clara-luciani-concert",
      bgColor: "bg-gradient-to-br from-sky-500 via-cyan-500 to-teal-600",
      textColor: "text-indigo-100",
      icon: Mic,
      image: claraHero,
    },
    {
      id: 6,
      title: t('semimarathon.title'),
      subtitle: t('semimarathon.subtitle'),
      dateStart: t('actualites.semimarathon.date'),
      sortDate: "2026-03-08",
      endDate: "2026-03-08", // Semi-Marathon de Paris
      category: t('actualites.sport'),
      link: "/evenements/semi-marathon-paris",
      bgColor: "bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-600",
      textColor: "text-emerald-100",
      icon: Timer,
      image: semiMarathonHero,
    },
    {
      id: 7,
      title: t('wutang.title'),
      subtitle: t('wutang.subtitle'),
      dateStart: t('actualites.wutang.date'),
      sortDate: "2026-03-11",
      endDate: "2026-03-11", // Concert Wu-Tang Clan
      category: t('actualites.concert'),
      link: "/evenements/wu-tang-concert",
      bgColor: "bg-gradient-to-br from-yellow-500 via-amber-500 to-orange-600",
      textColor: "text-yellow-100",
      icon: Mic,
      image: wutangHero,
    },
    {
      id: 8,
      title: "France vs Angleterre",
      subtitle: "Le Crunch - La rivalité légendaire",
      subtitleWithFlagsEngland: true,
      dateStart: "14 mars 2026",
      sortDate: "2026-03-14",
      endDate: "2026-03-14",
      category: t('rugby.tournament'),
      link: "/evenements/france-angleterre",
      bgColor: "bg-gradient-to-br from-blue-600 via-purple-600 to-red-600",
      textColor: "text-blue-100",
      icon: Trophy,
      image: franceAngleterreMatch,
    },
  ];

  // Get today's date at midnight for comparison
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Filter out past events and sort by date (closest first)
  const sortedEvents = [...events]
    .filter(event => {
      const eventEndDate = new Date(event.endDate);
      eventEndDate.setHours(23, 59, 59, 999); // End of the last day
      return eventEndDate >= today;
    })
    .sort((a, b) => 
      new Date(a.sortDate).getTime() - new Date(b.sortDate).getTime()
    );

  return (
    <section className="relative py-10 xs:py-12 sm:py-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal/95 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
      
      <div className="container mx-auto px-3 xs:px-4 relative z-10">
        <div className="text-center mb-6 xs:mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 xs:gap-2 sm:gap-3 bg-gradient-to-r from-burgundy via-burgundy to-primary text-white px-3 xs:px-4 sm:px-6 py-1.5 xs:py-2 sm:py-3 rounded-full mb-3 xs:mb-4 sm:mb-6 shadow-lg shadow-burgundy/30 cursor-default">
            <Sparkles className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5" />
            <span className="font-bold text-[11px] xs:text-xs sm:text-base uppercase tracking-wider xs:tracking-widest">{t('news.dontMiss')}</span>
            <Sparkles className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5" />
          </div>
          <h2 className="font-display text-xl xs:text-2xl sm:text-3xl md:text-5xl text-burgundy mb-1.5 xs:mb-2">
            {t('news.upcomingEvents')}
          </h2>
          <p className="text-muted-foreground text-sm xs:text-base sm:text-lg">{t('news.subtitle')}</p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: false,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-3 xs:-ml-4">
            {sortedEvents.map((event) => {
              const Icon = event.icon;
              return (
                <CarouselItem key={event.id} className="pl-3 xs:pl-4 basis-[85%] xs:basis-[80%] sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                  <Link to={event.link} className="group block h-full perspective-1000">
                    <div className={`relative overflow-hidden ${event.bgColor} shadow-xl hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 h-full rounded-lg xs:rounded-xl transform-gpu group-hover:scale-[1.02] group-hover:-translate-y-2 group-hover:rotate-y-1`}>
                      {/* Shine effect on hover */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-20">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
                      </div>
                      <div className="absolute inset-0 opacity-15">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,white_1px,transparent_1px)] bg-[length:20px_20px]" />
                      </div>
                      <div className="relative flex flex-col h-full">
                        <div className="relative aspect-[4/3] overflow-hidden">
                          <img src={event.image} alt={event.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
                          <div className={`absolute inset-0 bg-gradient-to-t from-current to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500`} />
                          {/* Glow border effect */}
                          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ring-2 ring-white/30 ring-inset rounded-t-lg xs:rounded-t-xl" />
                        </div>
                        <div className="flex-1 p-3 xs:p-4 flex flex-col justify-center">
                          <div className="inline-flex items-center gap-1.5 xs:gap-2 bg-white/20 backdrop-blur-sm text-white text-[10px] xs:text-xs font-bold uppercase tracking-wider px-2 xs:px-3 py-1 xs:py-1.5 w-fit mb-1.5 xs:mb-2 group-hover:bg-white/30 transition-colors duration-300">
                            <Icon className="w-3 h-3 xs:w-3.5 xs:h-3.5 group-hover:rotate-12 transition-transform duration-300" />{event.category}
                          </div>
                          <h3 className="font-display text-base xs:text-lg md:text-xl text-white mb-0.5 xs:mb-1 group-hover:translate-x-2 transition-transform duration-300 ease-out flex items-center gap-1.5 xs:gap-2 flex-wrap">
                            {event.subtitleWithFlags && <img src={drapeauFrance} alt="France" loading="lazy" className="w-4 h-2.5 xs:w-5 xs:h-3 object-cover shadow group-hover:scale-110 transition-transform" />}
                            {(event as any).subtitleWithFlagsEngland && <img src={drapeauFrance} alt="France" loading="lazy" className="w-4 h-2.5 xs:w-5 xs:h-3 object-cover shadow group-hover:scale-110 transition-transform" />}
                            {event.title}
                            {event.subtitleWithFlags && <img src={drapeauIrlande} alt="Irlande" loading="lazy" className="w-4 h-2.5 xs:w-5 xs:h-3 object-cover shadow group-hover:scale-110 transition-transform" />}
                            {(event as any).subtitleWithFlagsEngland && <img src={drapeauAngleterre} alt="Angleterre" loading="lazy" className="w-4 h-2.5 xs:w-5 xs:h-3 object-cover shadow group-hover:scale-110 transition-transform" />}
                          </h3>
                          <p className="text-white/70 text-[11px] xs:text-xs mb-1.5 xs:mb-2 line-clamp-2 group-hover:text-white/90 transition-colors duration-300">{event.subtitle}</p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center text-white/80 text-[10px] xs:text-xs group-hover:text-white transition-colors duration-300"><Calendar className="w-2.5 h-2.5 xs:w-3 xs:h-3 mr-1 group-hover:scale-110 transition-transform" />{event.dateStart}</div>
                            <div className="flex items-center text-white font-semibold text-[10px] xs:text-xs group-hover:translate-x-2 transition-transform duration-300 ease-out">{t('news.see')}<ArrowRight className="w-2.5 h-2.5 xs:w-3 xs:h-3 ml-1 group-hover:ml-2 transition-all duration-300" /></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <div className="flex justify-center gap-3 xs:gap-4 mt-4 xs:mt-6">
            <CarouselPrevious className="relative static translate-y-0 bg-burgundy hover:bg-burgundy/80 text-white border-none h-9 w-9 xs:h-10 xs:w-10" />
            <CarouselNext className="relative static translate-y-0 bg-burgundy hover:bg-burgundy/80 text-white border-none h-9 w-9 xs:h-10 xs:w-10" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};