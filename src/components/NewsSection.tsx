import { Calendar, ArrowRight, Music, Trophy, Leaf, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import enfoiresAffiche from "@/assets/enfoires-2026-affiche.png";
import rugbyImage from "@/assets/rugby-france-irlande.jpg";
import salonAgricultureHero from "@/assets/salon-agriculture-hero.jpg";

const drapeauFrance = "https://flagcdn.com/w80/fr.png";
const drapeauIrlande = "https://flagcdn.com/w80/ie.png";

const events = [
  {
    id: 1,
    title: "Les Enfoirés 2026",
    subtitle: "La Ballade des Enfoirés",
    dateStart: "13 - 19 Janvier 2026",
    category: "Concert",
    link: "/enfoires-2026",
    bgColor: "bg-gradient-to-br from-pink-500 via-fuchsia-500 to-purple-600",
    textColor: "text-pink-100",
    icon: Music,
    image: enfoiresAffiche,
  },
  {
    id: 2,
    title: "France vs Irlande",
    subtitle: "Tournoi 6 Nations",
    subtitleWithFlags: true,
    dateStart: "8 Mars 2025",
    category: "Rugby",
    link: "/tournoi-6-nations",
    bgColor: "bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-700",
    textColor: "text-blue-100",
    icon: Trophy,
    image: rugbyImage,
  },
  {
    id: 3,
    title: "Salon de l'Agriculture",
    subtitle: "La plus grande ferme de France",
    dateStart: "22 Fév - 2 Mars 2025",
    category: "Salon",
    link: "/salon-agriculture",
    bgColor: "bg-gradient-to-br from-green-500 via-emerald-500 to-teal-600",
    textColor: "text-green-100",
    icon: Leaf,
    image: salonAgricultureHero,
  },
];

export const NewsSection = () => {
  return (
    <section className="relative py-16 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal/95 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Attention-grabbing header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/20 to-gold/20 border border-primary/30 text-primary px-5 py-2.5 rounded-full mb-4 animate-pulse">
            <Sparkles className="w-4 h-4" />
            <span className="font-bold text-sm uppercase tracking-wider">Ne manquez pas !</span>
            <Sparkles className="w-4 h-4" />
          </div>
          <h2 className="font-display text-3xl md:text-5xl text-burgundy mb-2">
            Événements <span className="text-primary">à venir</span>
          </h2>
          <p className="text-burgundy/80 text-lg">Réservez votre séjour pour les grands rendez-vous parisiens</p>
        </div>

        {/* Featured Event - Full Width */}
        <Link to={events[0].link} className="group block mb-8">
          <div className={`relative overflow-hidden rounded-3xl ${events[0].bgColor} shadow-2xl hover:shadow-3xl transition-all duration-500`}>
            <div className="absolute inset-0 opacity-20">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,white_1px,transparent_1px)] bg-[length:24px_24px]" />
            </div>
            
            <div className="grid md:grid-cols-2 items-center">
              {/* Image */}
              <div className="relative aspect-[4/3] md:aspect-auto md:h-80 overflow-hidden">
                <img 
                  src={events[0].image} 
                  alt={events[0].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-pink-600/80 hidden md:block" />
              </div>
              
              {/* Content */}
              <div className="relative p-8 md:p-10">
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full mb-4">
                  <Music className="w-4 h-4" />
                  {events[0].category}
                </div>
                
                <h3 className="font-display text-3xl md:text-4xl text-white mb-3 group-hover:translate-x-2 transition-transform">
                  {events[0].title}
                </h3>
                <p className="text-white/80 text-lg mb-4">{events[0].subtitle}</p>
                
                <div className="flex items-center gap-6">
                  <div className="flex items-center text-white/90">
                    <Calendar className="w-5 h-5 mr-2" />
                    <span className="font-medium">{events[0].dateStart}</span>
                  </div>
                  <div className="flex items-center text-white font-bold group-hover:translate-x-2 transition-transform">
                    Découvrir
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>

        {/* Two smaller events */}
        <div className="grid md:grid-cols-2 gap-6">
          {events.slice(1).map((event) => {
            const Icon = event.icon;
            return (
              <Link 
                key={event.id} 
                to={event.link}
                className="group"
              >
                <div className={`relative overflow-hidden rounded-2xl ${event.bgColor} shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1`}>
                  <div className="absolute inset-0 opacity-15">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,white_1px,transparent_1px)] bg-[length:20px_20px]" />
                  </div>

                  <div className="relative flex items-stretch">
                    {/* Image */}
                    <div className="relative w-1/3 min-h-[180px] overflow-hidden">
                      <img 
                        src={event.image} 
                        alt={event.title}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-r from-transparent to-current opacity-60 ${
                        event.id === 2 ? 'to-blue-600' : 'to-green-600'
                      }`} />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 p-6 flex flex-col justify-center">
                      <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full mb-3 w-fit">
                        <Icon className="w-3.5 h-3.5" />
                        {event.category}
                      </div>
                      
                      <h3 className="font-display text-xl md:text-2xl text-white mb-1 group-hover:translate-x-1 transition-transform flex items-center gap-2 flex-wrap">
                        {event.subtitleWithFlags && (
                          <>
                            <img src={drapeauFrance} alt="France" className="w-6 h-4 object-cover rounded shadow" />
                          </>
                        )}
                        {event.title}
                        {event.subtitleWithFlags && (
                          <>
                            <img src={drapeauIrlande} alt="Irlande" className="w-6 h-4 object-cover rounded shadow" />
                          </>
                        )}
                      </h3>
                      <p className="text-white/70 text-sm mb-3">{event.subtitleWithFlags ? "Tournoi 6 Nations" : event.subtitle}</p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-white/80 text-sm">
                          <Calendar className="w-4 h-4 mr-1.5" />
                          {event.dateStart}
                        </div>
                        <div className="flex items-center text-white font-semibold text-sm group-hover:translate-x-1 transition-transform">
                          Voir
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </div>
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
