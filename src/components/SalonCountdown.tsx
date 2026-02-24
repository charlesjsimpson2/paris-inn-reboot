import { useState, useEffect } from "react";
import { Leaf, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const SalonCountdown = () => {
  const targetDate = new Date("2026-02-21T09:00:00");
  const endDate = new Date("2026-03-01T23:59:59");
  const now = new Date();

  // Show countdown before event, or "En cours" during event
  const isBeforeEvent = now < targetDate;
  const isDuringEvent = now >= targetDate && now <= endDate;
  const isActive = now <= endDate && now >= new Date("2026-02-01T00:00:00");

  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    if (!isBeforeEvent) return;
    const update = () => {
      const diff = Math.max(0, targetDate.getTime() - Date.now());
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, [isBeforeEvent]);

  if (!isActive) return null;

  const timeUnits = [
    { label: "Jours", value: timeLeft.days },
    { label: "Heures", value: timeLeft.hours },
    { label: "Min", value: timeLeft.minutes },
    { label: "Sec", value: timeLeft.seconds },
  ];

  return (
    <section className="relative py-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-green-800 via-emerald-700 to-green-800" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-600/20 via-transparent to-transparent" />
      
      {/* Decorative elements */}
      <div className="absolute top-2 left-8 text-4xl opacity-20 animate-float">🌾</div>
      <div className="absolute bottom-2 right-12 text-3xl opacity-20 animate-float animation-delay-600">🐄</div>
      <div className="absolute top-4 right-1/4 text-2xl opacity-15 animate-bounce-subtle">🌻</div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm px-4 py-1.5 rounded-full mb-4">
            <Leaf className="w-4 h-4 text-green-200" />
            <span className="text-green-100 text-sm font-medium uppercase tracking-wider">
              Salon de l'Agriculture 2026
            </span>
          </div>

          <h2 className="font-display text-2xl md:text-4xl text-white mb-2">
            {isDuringEvent ? "🐄 Le Salon est en cours !" : "Le Salon arrive bientôt !"}
          </h2>
          <p className="text-green-100/80 mb-6 text-sm md:text-base">
            Du 21 février au 1er mars • Porte de Versailles
          </p>

          {isBeforeEvent && (
            <div className="flex justify-center gap-3 md:gap-5 mb-6">
              {timeUnits.map((unit) => (
                <div key={unit.label} className="flex flex-col items-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-white/15 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/20 shadow-lg">
                    <span className="font-display text-2xl md:text-3xl text-white font-bold">
                      {String(unit.value).padStart(2, "0")}
                    </span>
                  </div>
                  <span className="text-green-200 text-[10px] md:text-xs mt-1.5 uppercase tracking-wider">
                    {unit.label}
                  </span>
                </div>
              ))}
            </div>
          )}

          <Link to="/evenements/salon-agriculture">
            <Button className="bg-white text-green-800 hover:bg-green-50 font-semibold px-6">
              {isDuringEvent ? "Réserver maintenant" : "Voir l'offre spéciale"}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
