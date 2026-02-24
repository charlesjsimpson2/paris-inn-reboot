import { useEffect, useState } from "react";

interface FloatingBubble {
  id: number;
  animal: string;
  left: number;
  delay: number;
  duration: number;
  size: number;
}

const animalPaths: Record<string, string> = {
  cow: "M12 4c-1.5 0-3 1-3 3s1 3 2 4c-2 1-4 3-4 5v2h14v-2c0-2-2-4-4-5 1-1 2-2 2-4s-1.5-3-3-3zM9 6.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm6 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z",
  chicken: "M12 3c-1 0-2 1-2 2 0 .5.2 1 .5 1.4C9 7 8 8.5 8 10c0 2 1.5 3.5 3 4v3h2v-3c1.5-.5 3-2 3-4 0-1.5-1-3-2.5-3.6.3-.4.5-.9.5-1.4 0-1-1-2-2-2z",
  pig: "M19 10c0-.5-.3-1-.7-1.3.4-.5.7-1.2.7-1.7 0-1-1-2-2-2-.5 0-1 .2-1.3.5C14.8 5 13.5 4.5 12 4.5S9.2 5 8.3 5.5C8 5.2 7.5 5 7 5c-1 0-2 1-2 2 0 .5.3 1.2.7 1.7-.4.3-.7.8-.7 1.3 0 3 3 6 7 6s7-3 7-6zM10 9a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm4 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm-1 3h-2v-1h2v1z",
  sheep: "M12 4c-2 0-3.5 1-4 2.5C6.5 7 6 8.5 6 10c0 2.5 2 4 4 4.5V17h1v-2.5h2V17h1v-2.5c2-.5 4-2 4-4.5 0-1.5-.5-3-2-3.5C15.5 5 14 4 12 4zm-2 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm4 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z",
  horse: "M18 4l-2 3c0 1-1 2-2 2.5V12c0 2-1.5 3.5-3 4v2h-1v-2c-1.5-.5-3-2-3-4V9.5C6 9 5 8 5 7l-2-3h3l1 2c1-1 2.5-1.5 4-1.5S14 5 15 6l1-2h2z",
  rabbit: "M12 8c-2 0-4 2-4 4v4h2v-2h4v2h2v-4c0-2-2-4-4-4zm-1 2V4c0-1-.5-2-1.5-2S8 3 8 4v4.5c1-.8 2-1.2 3-1.5zm2 0c1 .3 2 .7 3 1.5V4c0-1-.5-2-1.5-2S13 3 13 4v6z",
};

const animalKeys = Object.keys(animalPaths);

export const FloatingNatureElements = () => {
  const [bubbles, setBubbles] = useState<FloatingBubble[]>([]);

  const now = new Date();
  const start = new Date("2026-02-21T00:00:00");
  const end = new Date("2026-03-01T23:59:59");
  const isActive = now >= start && now <= end;

  useEffect(() => {
    if (!isActive) return;
    const els: FloatingBubble[] = Array.from({ length: 10 }, (_, i) => ({
      id: i,
      animal: animalKeys[i % animalKeys.length],
      left: 5 + Math.random() * 90,
      delay: Math.random() * 12,
      duration: 14 + Math.random() * 10,
      size: 36 + Math.random() * 24,
    }));
    setBubbles(els);
  }, [isActive]);

  if (!isActive || bubbles.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[5] overflow-hidden" aria-hidden="true">
      {bubbles.map((b) => (
        <span
          key={b.id}
          className="absolute animate-nature-fall"
          style={{
            left: `${b.left}%`,
            animationDelay: `${b.delay}s`,
            animationDuration: `${b.duration}s`,
            width: `${b.size}px`,
            height: `${b.size}px`,
          }}
        >
          <svg
            viewBox="0 0 24 24"
            width={b.size}
            height={b.size}
            className="drop-shadow-sm"
          >
            {/* Bubble */}
            <circle
              cx="12"
              cy="12"
              r="11"
              fill="hsla(152, 45%, 28%, 0.06)"
              stroke="hsla(152, 45%, 28%, 0.15)"
              strokeWidth="0.5"
            />
            {/* Animal silhouette */}
            <path
              d={animalPaths[b.animal]}
              fill="hsla(152, 45%, 28%, 0.25)"
            />
          </svg>
        </span>
      ))}
    </div>
  );
};
