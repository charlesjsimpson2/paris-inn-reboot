import { getActiveEventTheme } from "@/config/eventThemes";

export const FloatingNatureElements = () => {
  const theme = getActiveEventTheme();
  if (!theme?.floatingEmojis) return null;
  return null;
};
