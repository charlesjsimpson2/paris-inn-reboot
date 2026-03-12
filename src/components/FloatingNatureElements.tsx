import { useEffect, useState } from "react";
import { getActiveEventTheme } from "@/config/eventThemes";

interface FloatingElement {
  id: number;
  emoji: string;
  left: number;
  top: number;
  size: number;
  rotation: number;
  opacity: number;
}

export const FloatingNatureElements = () => {
  const [elements, setElements] = useState<FloatingElement[]>([]);
  const theme = getActiveEventTheme();

  useEffect(() => {
    if (!theme?.floatingEmojis) return;
    const emojis = theme.floatingEmojis;
    const els: FloatingElement[] = Array.from({ length: 18 }, (_, i) => ({
      id: i,
      emoji: emojis[i % emojis.length],
      left: 5 + Math.random() * 90,
      top: 5 + Math.random() * 90,
      size: 28 + Math.random() * 36,
      rotation: Math.random() * 360,
      opacity: 0.06 + Math.random() * 0.08,
    }));
    setElements(els);
  }, [theme?.id]);

  if (!theme?.floatingEmojis || elements.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden" aria-hidden="true">
      {elements.map((el) => (
        <span
          key={el.id}
          className="absolute select-none"
          style={{
            left: `${el.left}%`,
            top: `${el.top}%`,
            fontSize: `${el.size}px`,
            transform: `rotate(${el.rotation}deg)`,
            opacity: el.opacity,
          }}
        >
          {el.emoji}
        </span>
      ))}
    </div>
  );
};
