import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, Music, Heart, Ticket, Trophy, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const events = [
  {
    id: 1,
    title: "🎤 Les Enfoirés 2026",
    subtitle: "La Ballade des Enfoirés",
    excerpt: "Spectacle caritatif à l'Accor Arena • Offre spéciale hôtel -10% sur le taxi",
    dateStart: "13 Janvier 2026",
    dateEnd: "19 Janvier 2026",
    category: "Concert",
    link: "/enfoires-2026",
    gradient: "from-pink-600 via-fuchsia-500 to-pink-600",
    overlayGradient: "from-pink-500/40 via-fuchsia-400/30 to-pink-500/40",
    glowColor1: "bg-fuchsia-400/30",
    glowColor2: "bg-pink-400/30",
    buttonTextColor: "text-pink-600",
    buttonHoverColor: "hover:bg-pink-50 hover:text-pink-700",
    icon: Music,
    iconSecondary: Heart,
  },
  {
    id: 2,
    title: "🏉 Tournoi 6 Nations",
    subtitle: "France vs Irlande",
    excerpt: "Stade de France • Offre spéciale match + accès métro direct",
    dateStart: "8 Mars 2025",
    dateEnd: "",
    category: "Rugby",
    link: "/tournoi-6-nations",
    gradient: "from-green-600 via-emerald-500 to-green-600",
    overlayGradient: "from-green-500/40 via-emerald-400/30 to-green-500/40",
    glowColor1: "bg-emerald-400/30",
    glowColor2: "bg-green-400/30",
    buttonTextColor: "text-green-600",
    buttonHoverColor: "hover:bg-green-50 hover:text-green-700",
    icon: Trophy,
    iconSecondary: Trophy,
  },
];

export const NewsSection = () => {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentEvent = events[currentIndex];
  const Icon = currentEvent.icon;
  const IconSecondary = currentEvent.iconSecondary;

  // Auto-rotate every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % events.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? events.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % events.length);
  };

  return (
    <section className={`relative overflow-hidden bg-gradient-to-r ${currentEvent.gradient} transition-all duration-500`}>
      {/* Animated colorful gradient overlay */}
      <div className={`absolute inset-0 bg-gradient-to-r ${currentEvent.overlayGradient} animate-pulse transition-all duration-500`} />
      
      {/* Moving shimmer effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />
      
      {/* Confetti-like pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,white_2px,transparent_2px),radial-gradient(circle_at_80%_70%,white_2px,transparent_2px),radial-gradient(circle_at_50%_50%,white_1px,transparent_1px)] bg-[length:60px_60px,40px_40px,30px_30px]" />
      </div>
      
      {/* Animated icons */}
      <div className="absolute left-[10%] top-1/2 -translate-y-1/2">
        <IconSecondary className="w-8 h-8 text-white/30 animate-pulse" fill="currentColor" />
      </div>
      <div className="absolute right-[10%] top-1/2 -translate-y-1/2 animation-delay-200">
        <IconSecondary className="w-6 h-6 text-white/30 animate-pulse" fill="currentColor" />
      </div>
      <div className="absolute left-[5%] top-1/3">
        <Icon className="w-5 h-5 text-white/20 animate-bounce" />
      </div>
      <div className="absolute right-[5%] top-2/3 animation-delay-400">
        <Icon className="w-4 h-4 text-white/20 animate-bounce" />
      </div>
      
      {/* Glow accents */}
      <div className={`absolute left-1/4 top-1/2 -translate-y-1/2 w-64 h-32 ${currentEvent.glowColor1} rounded-full blur-3xl animate-pulse transition-all duration-500`} />
      <div className={`absolute right-1/4 top-1/2 -translate-y-1/2 w-48 h-24 ${currentEvent.glowColor2} rounded-full blur-2xl animate-pulse animation-delay-200 transition-all duration-500`} />
      
      <div className="container mx-auto px-4 py-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Navigation arrows (left) */}
          {events.length > 1 && (
            <button
              onClick={goToPrev}
              className="hidden md:flex items-center justify-center w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full transition-colors"
              aria-label="Événement précédent"
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>
          )}

          {/* Left: Badge + Event info */}
          <div className="flex items-center gap-4 md:gap-6 flex-1">
            {/* Animated badge */}
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 px-4 py-2 rounded-full shadow-lg">
              <Ticket className="w-4 h-4 text-white animate-pulse" />
              <span className="text-white text-sm font-bold uppercase tracking-wider">
                {currentEvent.category}
              </span>
            </div>
            
            {/* Event details */}
            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
              <div>
                <h3 className="font-display text-xl md:text-2xl text-white font-bold drop-shadow-lg">
                  {currentEvent.title}
                </h3>
                <p className="text-white/90 text-sm font-medium">
                  {currentEvent.subtitle}
                </p>
              </div>
              <div className="hidden md:block w-px h-10 bg-white/40" />
              <p className="text-white/90 text-sm hidden lg:block max-w-sm">
                {currentEvent.excerpt}
              </p>
            </div>
          </div>
          
          {/* Right: Date + CTA */}
          <div className="flex items-center gap-4 md:gap-6">
            <div className="flex items-center text-white text-sm font-medium bg-white/10 px-3 py-1.5 rounded-full">
              <Calendar className="w-4 h-4 mr-2" />
              {currentEvent.dateEnd 
                ? `${currentEvent.dateStart} - ${currentEvent.dateEnd}`
                : currentEvent.dateStart
              }
            </div>
            
            <Link to={currentEvent.link}>
              <Button 
                size="lg"
                className={`bg-white ${currentEvent.buttonTextColor} ${currentEvent.buttonHoverColor} font-bold shadow-xl group transition-all duration-300 hover:scale-105 border-2 border-white/50`}
              >
                Découvrir l'offre
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          {/* Navigation arrows (right) */}
          {events.length > 1 && (
            <button
              onClick={goToNext}
              className="hidden md:flex items-center justify-center w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full transition-colors"
              aria-label="Événement suivant"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          )}
        </div>

        {/* Dots indicator */}
        {events.length > 1 && (
          <div className="flex justify-center gap-2 mt-4 md:hidden">
            {events.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? "bg-white w-4" : "bg-white/40"
                }`}
                aria-label={`Voir événement ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
