import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, Music, Heart, Ticket } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const featuredEvent = {
  id: 1,
  title: "🎤 Les Enfoirés 2026",
  subtitle: "La Ballade des Enfoirés",
  excerpt: "Spectacle caritatif à l'Accor Arena • Offre spéciale hôtel -10% sur le taxi",
  dateStart: "13 Janvier 2026",
  dateEnd: "19 Janvier 2026",
  category: "Concert",
  youtubeLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
};

export const NewsSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-pink-600 via-fuchsia-500 to-pink-600">
      {/* Animated colorful gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500/40 via-fuchsia-400/30 to-pink-500/40 animate-pulse" />
      
      {/* Moving shimmer effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />
      
      {/* Confetti-like pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,white_2px,transparent_2px),radial-gradient(circle_at_80%_70%,white_2px,transparent_2px),radial-gradient(circle_at_50%_50%,white_1px,transparent_1px)] bg-[length:60px_60px,40px_40px,30px_30px]" />
      </div>
      
      {/* Animated hearts/stars */}
      <div className="absolute left-[10%] top-1/2 -translate-y-1/2">
        <Heart className="w-8 h-8 text-white/30 animate-pulse" fill="currentColor" />
      </div>
      <div className="absolute right-[10%] top-1/2 -translate-y-1/2 animation-delay-200">
        <Heart className="w-6 h-6 text-white/30 animate-pulse" fill="currentColor" />
      </div>
      <div className="absolute left-[5%] top-1/3">
        <Music className="w-5 h-5 text-white/20 animate-bounce" />
      </div>
      <div className="absolute right-[5%] top-2/3 animation-delay-400">
        <Music className="w-4 h-4 text-white/20 animate-bounce" />
      </div>
      
      {/* Glow accents */}
      <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-64 h-32 bg-fuchsia-400/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute right-1/4 top-1/2 -translate-y-1/2 w-48 h-24 bg-pink-400/30 rounded-full blur-2xl animate-pulse animation-delay-200" />
      
      <div className="container mx-auto px-4 py-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left: Badge + Event info */}
          <div className="flex items-center gap-4 md:gap-6">
            {/* Animated badge */}
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 px-4 py-2 rounded-full shadow-lg">
              <Ticket className="w-4 h-4 text-white animate-pulse" />
              <span className="text-white text-sm font-bold uppercase tracking-wider">
                {featuredEvent.category}
              </span>
            </div>
            
            {/* Event details */}
            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
              <div>
                <h3 className="font-display text-xl md:text-2xl text-white font-bold drop-shadow-lg">
                  {featuredEvent.title}
                </h3>
                <p className="text-white/90 text-sm font-medium">
                  {featuredEvent.subtitle}
                </p>
              </div>
              <div className="hidden md:block w-px h-10 bg-white/40" />
              <p className="text-white/90 text-sm hidden lg:block max-w-sm">
                {featuredEvent.excerpt}
              </p>
            </div>
          </div>
          
          {/* Right: Date + CTA */}
          <div className="flex items-center gap-4 md:gap-6">
            <div className="flex items-center text-white text-sm font-medium bg-white/10 px-3 py-1.5 rounded-full">
              <Calendar className="w-4 h-4 mr-2" />
              {featuredEvent.dateStart} - {featuredEvent.dateEnd}
            </div>
            
            <Link to="/enfoires-2026">
              <Button 
                size="lg"
                className="bg-white text-pink-600 hover:bg-pink-50 hover:text-pink-700 font-bold shadow-xl group transition-all duration-300 hover:scale-105 border-2 border-white/50"
              >
                Découvrir l'offre
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
