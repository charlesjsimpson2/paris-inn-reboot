import { useEffect, useState } from "react";
import { getActiveEventTheme } from "@/config/eventThemes";

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
  const theme = getActiveEventTheme();

  useEffect(() => {
    if (!theme?.floatingEmojis) return;
    const emojis = theme.floatingEmojis;
    const els: FloatingElement[] = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      emoji: emojis[i % emojis.length],
      left: Math.random() * 100,
      delay: Math.random() * 8,
      duration: 10 + Math.random() * 10,
      size: 16 + Math.random() * 14,
    }));
    setElements(els);
  }, [theme?.id]);

  if (!theme?.floatingEmojis || elements.length === 0) return null;

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
