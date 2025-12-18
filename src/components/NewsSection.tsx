import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, Flame } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const newsArticles = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    date: "15 Décembre 2024",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop",
    category: "Événement",
  },
];

export const NewsSection = () => {
  const { t } = useLanguage();
  const featuredEvent = newsArticles[0];

  return (
    <section className="relative bg-gradient-to-r from-burgundy via-red-600 to-orange-500 overflow-hidden">
      {/* Animated glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 via-transparent to-yellow-400/20 animate-pulse" />
      
      {/* Shimmer effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />
      
      {/* Decorative elements */}
      <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-white/10 to-transparent" />
      <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white/10 to-transparent" />
      
      <div className="container mx-auto px-4 py-5">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left: Badge + Event info */}
          <div className="flex items-center gap-4 md:gap-6">
            {/* Animated badge */}
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-lg">
              <Flame className="w-5 h-5 text-red-500 animate-pulse" />
              <span className="text-red-600 text-sm font-bold uppercase tracking-wider">
                {featuredEvent.category}
              </span>
            </div>
            
            {/* Event details */}
            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
              <h3 className="font-display text-xl md:text-2xl text-white font-semibold drop-shadow-lg">
                {featuredEvent.title}
              </h3>
              <div className="hidden md:block w-px h-8 bg-white/40" />
              <p className="text-white/90 text-sm hidden md:block max-w-md font-medium">
                {featuredEvent.excerpt}
              </p>
            </div>
          </div>
          
          {/* Right: Date + CTA */}
          <div className="flex items-center gap-4 md:gap-6">
            <div className="flex items-center text-white text-sm font-medium">
              <Calendar className="w-4 h-4 mr-2" />
              {featuredEvent.date}
            </div>
            
            <Link to="/actualites">
              <Button 
                size="lg"
                className="bg-white text-red-600 hover:bg-yellow-50 hover:text-red-700 font-bold shadow-lg group"
              >
                {t('events.cta')}
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
