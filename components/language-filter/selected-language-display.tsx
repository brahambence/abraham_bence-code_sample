import { CSSProperties, Dispatch } from "react";
import { LanguageOption } from "components/language-filter";

interface SelectedLanguageDisplayProps {
  selected: LanguageOption,
  isLanguageFilterOpen: boolean,
  setIsLanguageFilterOpen: Dispatch<boolean>,
  languageOptionStyles: { [key: string]: CSSProperties },
}

export default function SelectedLanguageDisplay(
  { selected, isLanguageFilterOpen, setIsLanguageFilterOpen, languageOptionStyles }:
    SelectedLanguageDisplayProps) {
  return (
    <span
      className={`
          block
          w-full
          p-1.5
          font-bold
          border hover:border-white
          ${isLanguageFilterOpen ? "border-white" : "border-blue-dark"}
          rounded
          transition-colors
          cursor-pointer
        `}
      style={{
        ...languageOptionStyles[selected],
      }}
      onClick={() => setIsLanguageFilterOpen(!isLanguageFilterOpen)}
      aria-label="Filter songs by language"
      role="button"
    >
      {selected}
    </span>
  );
}