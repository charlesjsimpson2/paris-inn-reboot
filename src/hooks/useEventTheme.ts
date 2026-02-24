import { useEffect, useState } from "react";
import { getActiveEventTheme, DEFAULT_COLORS, type EventTheme } from "@/config/eventThemes";

/**
 * Hook that applies the active event theme's CSS variables to :root.
 * Returns the active theme (or null for neutral).
 */
export function useEventTheme() {
  const [activeTheme, setActiveTheme] = useState<EventTheme | null>(getActiveEventTheme);

  useEffect(() => {
    const theme = getActiveEventTheme();
    setActiveTheme(theme);
    const colors = theme?.colors ?? DEFAULT_COLORS;
    const root = document.documentElement;

    root.style.setProperty("--primary", colors.primary);
    root.style.setProperty("--primary-foreground", colors.primaryForeground);
    root.style.setProperty("--accent", colors.accent);
    root.style.setProperty("--accent-foreground", colors.primaryForeground);
    root.style.setProperty("--gold", colors.gold);
    root.style.setProperty("--gold-light", colors.goldLight);
    root.style.setProperty("--gold-dark", colors.goldDark);
    root.style.setProperty("--burgundy", colors.burgundy);
    root.style.setProperty("--ring", colors.ring);

    // Update gradient tokens
    root.style.setProperty(
      "--gradient-gold",
      `linear-gradient(135deg, hsl(${colors.primary}) 0%, hsl(${colors.goldDark}) 100%)`
    );
    root.style.setProperty(
      "--shadow-gold",
      `0 4px 30px hsla(${colors.primary.split(" ")[0]}, ${colors.primary.split(" ")[1]}, ${colors.primary.split(" ")[2]}, 0.08)`
    );
    root.style.setProperty(
      "--shadow-elegant",
      `0 25px 50px -12px hsla(${colors.primary.split(" ")[0]}, ${colors.primary.split(" ")[1]}, ${colors.primary.split(" ")[2]}, 0.15)`
    );

    return () => {
      // Cleanup: reset to defaults when unmounting (e.g. HMR)
      const defaults = DEFAULT_COLORS;
      root.style.setProperty("--primary", defaults.primary);
      root.style.setProperty("--accent", defaults.accent);
      root.style.setProperty("--gold", defaults.gold);
      root.style.setProperty("--gold-light", defaults.goldLight);
      root.style.setProperty("--gold-dark", defaults.goldDark);
      root.style.setProperty("--burgundy", defaults.burgundy);
      root.style.setProperty("--ring", defaults.ring);
    };
  }, []);

  return activeTheme;
}
