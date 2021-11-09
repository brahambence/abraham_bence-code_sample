import Language from "types/language";
import { useState, CSSProperties } from "react";
import { useOutsideClickRef } from "rooks";
import { theme } from "tailwind.config";
import SelectedLanguageDisplay from "./selected-language-display";
import OptionList from "./option-list";
import { textBackgroundClipStyles, languageBackground } from "styles/utilities";

export { useLanguageFilter } from "./use-language-filter";
export type LanguageOption = Language | "all languages";
export type OptionStyles = { [key: string]: CSSProperties };

export const languageOptions: LanguageOption[] = [
  "all languages",
  "italian",
  "german",
  "hungarian",
  "french",
  "spanish"
];
export const defaultLanguage = languageOptions[0];

const languageOptionStyles = languageOptions.reduce(
  (styles, option) => {
    if (option === "all languages") {
      styles[option] = {
        backgroundColor: theme.colors.white.DEFAULT,
        ...textBackgroundClipStyles,
      };
    } else {
      styles[option] = {
        backgroundImage: languageBackground(option),
        ...textBackgroundClipStyles,
      };
    }
    return styles;
  }, {});

interface LanguageFilterProps {
  language: LanguageOption,
  setLanguage: (language: LanguageOption) => void;
}

export default function LanguageFilter({ language, setLanguage }: LanguageFilterProps) {
  const [isLanguageFilterOpen, setIsLanguageFilterOpen] = useState(false);
  const [languageFilterRef] = useOutsideClickRef(
    () => setIsLanguageFilterOpen(false),
    isLanguageFilterOpen
  );

  return (
    <div
      ref={languageFilterRef}
      className={`
        relative
        text-center
      `}
      role="region"
    >
      <h1
        className={`
          mb-0.5 mt-4
          text-center
          text-md
        `}
      >
        browse songs in
        <SelectedLanguageDisplay
          selected={language}
          isLanguageFilterOpen={isLanguageFilterOpen}
          setIsLanguageFilterOpen={setIsLanguageFilterOpen}
          languageOptionStyles={languageOptionStyles}
        />
      </h1>

      {isLanguageFilterOpen && (
        <div
          className={`
          absolute top-full w-full left-0 
          z-20
          mt-1.5
        `}
        >
          <OptionList
            options={languageOptions.filter(
              option => option !== language
            )}
            setOption={setLanguage}
            hideOptions={() => setIsLanguageFilterOpen(false)}
            optionStyles={languageOptionStyles}
          />
        </div>
      )}
    </div>
  )
}