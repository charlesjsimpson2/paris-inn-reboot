import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, Music, Heart, Ticket, Trophy, Leaf } from "lucide-react";
import { Link } from "react-router-dom";

const drapeauFrance = "https://flagcdn.com/w80/fr.png";
const drapeauIrlande = "https://flagcdn.com/w80/ie.png";

const events = [
  {
    id: 1,
    title: "🎤 Les Enfoirés 2026",
    subtitle: "La Ballade des Enfoirés",
    dateStart: "13 - 19 Janvier 2026",
    category: "Concert",
    link: "/enfoires-2026",
    gradient: "from-pink-600 to-fuchsia-600",
    icon: Music,
  },
  {
    id: 2,
    title: "🏉 Tournoi 6 Nations",
    subtitle: "France vs Irlande",
    subtitleWithFlags: true,
    dateStart: "8 Mars 2025",
    category: "Rugby",
    link: "/tournoi-6-nations",
    gradient: "from-blue-600 to-green-600",
    icon: Trophy,
  },
  {
    id: 3,
    title: "🐄 Salon de l'Agriculture",
    subtitle: "Porte de Versailles",
    dateStart: "22 Fév - 2 Mars 2025",
    category: "Salon",
    link: "/salon-agriculture",
    gradient: "from-green-600 to-amber-600",
    icon: Leaf,
  },
];

export const NewsSection = () => {
  return (
    <section className="py-12 bg-gradient-to-br from-charcoal via-charcoal to-charcoal/95">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
            <Ticket className="w-4 h-4" />
            <span className="font-medium text-sm uppercase tracking-wider">Événements à venir</span>
          </div>
          <h2 className="font-display text-2xl md:text-3xl text-white">
            Réservez pour les grands événements parisiens
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {events.map((event) => {
            const Icon = event.icon;
            return (
              <Link 
                key={event.id} 
                to={event.link}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${event.gradient} opacity-90`} />
                
                {/* Pattern overlay */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,white_1px,transparent_1px)] bg-[length:20px_20px]" />
                </div>

                {/* Content */}
                <div className="relative p-6 flex flex-col h-full min-h-[220px]">
                  {/* Category badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">
                      <Icon className="w-3.5 h-3.5" />
                      {event.category}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <div className="flex-1">
                    <h3 className="font-display text-xl md:text-2xl text-white mb-2 group-hover:scale-105 transition-transform origin-left">
                      {event.title}
                    </h3>
                    <p className="text-white/80 text-sm flex items-center gap-1.5">
                      {event.subtitleWithFlags ? (
                        <>
                          <img src={drapeauFrance} alt="France" className="w-5 h-3.5 object-cover rounded-sm" />
                          <span>{event.subtitle}</span>
                          <img src={drapeauIrlande} alt="Irlande" className="w-5 h-3.5 object-cover rounded-sm" />
                        </>
                      ) : (
                        event.subtitle
                      )}
                    </p>
                  </div>

                  {/* Date & CTA */}
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/20">
                    <div className="flex items-center text-white/90 text-sm">
                      <Calendar className="w-4 h-4 mr-2" />
                      {event.dateStart}
                    </div>
                    <div className="flex items-center text-white font-medium text-sm group-hover:translate-x-1 transition-transform">
                      Voir
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </div>
                  </div>
                </div>

                {/* Hover glow effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-white/10 to-transparent pointer-events-none" />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};
