import { getActiveEventTheme } from "@/config/eventThemes";

const EasterDivider = () => {
  const emojis = ["🥚", "🐰", "🌸", "🐣", "🌷"];
  return (
    <div className="flex items-center justify-center gap-4 py-4 opacity-30" aria-hidden="true">
      {emojis.map((emoji, i) => (
        <span
          key={i}
          className="text-lg md:text-xl animate-float"
          style={{ animationDelay: `${i * 0.4}s` }}
        >
          {emoji}
        </span>
      ))}
    </div>
  );
};

export const EasterSectionDivider = () => {
  const theme = getActiveEventTheme();
  if (theme?.id !== "paques-2026") return null;
  return <EasterDivider />;
};
