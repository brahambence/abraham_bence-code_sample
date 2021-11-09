import Language from "types/language";
import { theme } from "tailwind.config";

export const textBackgroundClipStyles = {
  backgroundClip: "text",
  WebkitBackgroundClip: "text",
  color: "transparent",
};

export const languageBackground = (language: Language) => {
  const palette = {
    fallback: theme.colors.white.DEFAULT,
    red: "#ff8d8d",
    black: "#666",
    white: "#fff",
    yellow: "#fdff8d",
    green: "#b2ff8d",
    blue: "#5c8fff",
  };

  const tricolor = (colors, stops) => {
    return `
        linear-gradient(to bottom, 
        ${colors[0]} 0%, 
        ${colors[0]} ${stops[0]}%,
        ${colors[1]} ${stops[0]}%,
        ${colors[1]} ${stops[1]}%,
        ${colors[2]} ${stops[1]}%
        )
    `;
  };

  let colors = [palette.fallback, palette.fallback, palette.fallback];
  let stops = [0, 100];
  switch (language) {
    case "german":
      colors = [palette.black, palette.red, palette.yellow];
      stops = [40, 56];
      break;
    case "italian":
      colors = [palette.green, palette.white, palette.red];
      stops = [40, 60];
      break;
    case "hungarian":
      colors = [palette.red, palette.white, palette.green];
      stops = [42, 60];
      break;
    case "french":
      colors = [palette.blue, palette.white, palette.red];
      stops = [42, 60];
      break;
    case "spanish":
      colors = [palette.red, palette.yellow, palette.red];
      stops = [50, 68];
      break;
    default:
      console.log(`Language background param incorrect: ${language}`);
      break;
  }
  return tricolor(colors, stops);
};