// Event Theme Configuration - "Google Doodle" style theming system
// Each event defines its active dates, color palette (HSL), logo decorations, and optional floating elements.

export interface EventTheme {
  id: string;
  name: string;
  startDate: string; // ISO date
  endDate: string;   // ISO date
  colors: {
    primary: string;        // HSL values e.g. "152 45% 28%"
    primaryForeground: string;
    accent: string;
    gold: string;
    goldLight: string;
    goldDark: string;
    burgundy: string;
    ring: string;
  };
  logoDecorations: {
    left: string;   // emoji(s) displayed to the left of the logo
    right: string;  // emoji(s) displayed to the right of the logo
  };
  bannerGradient: string; // Tailwind gradient classes for the banner
  bannerText: string;
  bannerLink: string;
  bannerEmoji: string;
  floatingEmojis?: string[];
}

export const EVENT_THEMES: EventTheme[] = [
  {
    id: "salon-agriculture-2026",
    name: "Salon de l'Agriculture 2026",
    startDate: "2026-02-21T00:00:00",
    endDate: "2026-03-01T23:59:59",
    colors: {
      primary: "152 45% 28%",
      primaryForeground: "0 0% 98%",
      accent: "152 45% 28%",
      gold: "152 45% 28%",
      goldLight: "145 35% 38%",
      goldDark: "155 50% 18%",
      burgundy: "152 55% 30%",
      ring: "152 45% 28%",
    },
    logoDecorations: {
      left: "🐄",
      right: "🌾",
    },
    bannerGradient: "from-green-700 via-emerald-600 to-green-700",
    bannerText: "Salon de l'Agriculture — Du 21 février au 1er mars 2026 • Réservez votre séjour !",
    bannerLink: "/evenements/salon-agriculture",
    bannerEmoji: "🐄",
    floatingEmojis: ["🐄", "🐔", "🐷", "🐑", "🐴", "🐐", "🐰", "🐣", "🌾", "🍃"],
  },
  {
    id: "paques-2026",
    name: "Pâques 2026",
    startDate: "2026-03-12T00:00:00",
    endDate: "2026-04-07T23:59:59",
    colors: {
      primary: "45 70% 55%",
      primaryForeground: "0 0% 98%",
      accent: "340 50% 70%",
      gold: "45 70% 55%",
      goldLight: "45 65% 68%",
      goldDark: "40 75% 42%",
      burgundy: "340 45% 65%",
      ring: "45 70% 55%",
    },
    logoDecorations: {
      left: "🥚",
      right: "🐰",
    },
    bannerGradient: "from-emerald-400 via-pink-300 to-yellow-300",
    bannerText: "Joyeuses Pâques ! Offre spéciale séjour pascal — Du 28 mars au 7 avril 🐣",
    bannerLink: "/",
    bannerEmoji: "🐣",
    floatingEmojis: ["🥚", "🐰", "🐣", "🌸", "🌷", "🦋"],
  },
];

// Default (neutral) theme colors - classic hotel elegant style
export const DEFAULT_COLORS = {
  primary: "35 55% 52%",
  primaryForeground: "0 0% 98%",
  accent: "35 55% 52%",
  gold: "35 55% 52%",
  goldLight: "38 50% 62%",
  goldDark: "32 60% 38%",
  burgundy: "345 65% 35%",
  ring: "35 55% 52%",
};

/**
 * Returns the currently active event theme, or null if no event is active.
 */
export function getActiveEventTheme(): EventTheme | null {
  const now = new Date();
  return EVENT_THEMES.find((theme) => {
    const start = new Date(theme.startDate);
    const end = new Date(theme.endDate);
    return now >= start && now <= end;
  }) || null;
}
