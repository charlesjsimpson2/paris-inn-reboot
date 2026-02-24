import { useEffect, useState } from "react";

interface FloatingElement {
  id: number;
  emoji: string;
  left: number;
  delay: number;
  duration: number;
  size: number;
}

export const FloatingNatureElements = () => {
  const [elements, setElements] = useState<FloatingElement[]>([]);

  // Only show between Feb 21 and Mar 1, 2026
  const now = new Date();
  const start = new Date("2026-02-21T00:00:00");
  const end = new Date("2026-03-01T23:59:59");
  const isActive = now >= start && now <= end;

  useEffect(() => {
    if (!isActive) return;
    const emojis = ["🌾", "🍃", "🌻", "🐄", "🌿", "🍂", "🌱"];
    const els: FloatingElement[] = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      emoji: emojis[i % emojis.length],
      left: Math.random() * 100,
      delay: Math.random() * 8,
      duration: 10 + Math.random() * 10,
      size: 16 + Math.random() * 14,
    }));
    setElements(els);
  }, [isActive]);

  if (!isActive || elements.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[5] overflow-hidden" aria-hidden="true">
      {elements.map((el) => (
        <span
          key={el.id}
          className="absolute animate-nature-fall opacity-60"
          style={{
            left: `${el.left}%`,
            animationDelay: `${el.delay}s`,
            animationDuration: `${el.duration}s`,
            fontSize: `${el.size}px`,
          }}
        >
          {el.emoji}
        </span>
      ))}
    </div>
  );
};
