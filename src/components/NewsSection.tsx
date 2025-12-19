import { Calendar, ArrowRight, Music, Trophy, Leaf, Ticket } from "lucide-react";
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
    category: "Concert solidaire",
    link: "/enfoires-2026",
    gradient: "from-pink-600 via-fuchsia-500 to-purple-600",
    accentColor: "pink",
    icon: Music,
    image: enfoiresAffiche,
  },
  {
    id: 2,
    title: "Tournoi 6 Nations",
    subtitle: "France vs Irlande",
    subtitleWithFlags: true,
    dateStart: "8 Mars 2025",
    category: "Rugby",
    link: "/tournoi-6-nations",
    gradient: "from-blue-600 via-indigo-500 to-blue-700",
    accentColor: "blue",
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
    gradient: "from-green-600 via-emerald-500 to-teal-600",
    accentColor: "green",
    icon: Leaf,
    image: salonAgricultureHero,
  },
];

export const NewsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-charcoal to-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary px-4 py-2 rounded-full mb-4">
            <Ticket className="w-4 h-4" />
            <span className="font-medium text-sm uppercase tracking-wider">Événements à venir</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl text-foreground">
            Réservez pour les grands événements parisiens
          </h2>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {events.map((event) => {
            const Icon = event.icon;
            return (
              <Link 
                key={event.id} 
                to={event.link}
                className="group"
              >
                <article className="relative h-full bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-border/50">
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    {/* Gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-t ${event.gradient} opacity-40 mix-blend-multiply`} />
                    
                    {/* Category badge */}
                    <div className="absolute top-4 left-4">
                      <span className={`inline-flex items-center gap-1.5 bg-white/95 dark:bg-card/95 backdrop-blur-sm shadow-lg px-3 py-1.5 rounded-full text-xs font-semibold ${
                        event.accentColor === 'pink' ? 'text-pink-600' :
                        event.accentColor === 'blue' ? 'text-blue-600' :
                        'text-green-600'
                      }`}>
                        <Icon className="w-3.5 h-3.5" />
                        {event.category}
                      </span>
                    </div>

                    {/* Flags for rugby match */}
                    {event.subtitleWithFlags && (
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-3 bg-white/95 dark:bg-card/95 backdrop-blur-sm rounded-full py-2 px-4 shadow-lg">
                        <img src={drapeauFrance} alt="France" className="w-8 h-5 object-cover rounded shadow-sm" />
                        <span className="font-display text-foreground text-sm font-bold">VS</span>
                        <img src={drapeauIrlande} alt="Irlande" className="w-8 h-5 object-cover rounded shadow-sm" />
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-display text-xl text-foreground mb-1 group-hover:text-primary transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {event.subtitleWithFlags ? "Le choc au sommet du Tournoi" : event.subtitle}
                    </p>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div className="flex items-center text-muted-foreground text-sm">
                        <Calendar className="w-4 h-4 mr-2" />
                        {event.dateStart}
                      </div>
                      <div className={`flex items-center font-semibold text-sm group-hover:translate-x-1 transition-transform ${
                        event.accentColor === 'pink' ? 'text-pink-600' :
                        event.accentColor === 'blue' ? 'text-blue-600' :
                        'text-green-600'
                      }`}>
                        Découvrir
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};
