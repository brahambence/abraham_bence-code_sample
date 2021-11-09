import Language from "types/language";
import { languageBackground, textBackgroundClipStyles } from "styles/utilities";

interface LanguageLabelProps {
  language: Language,
  truncate: boolean,
}

export default function LanguageLabel(
  { language, truncate }: LanguageLabelProps) {
  return (
    <div
      className={`
        py-1 px-2
        rounded
        bg-blue-dark
        border border-white-translucent
        group-hover:border-yellow
        font-bold
        cursor-pointer
      `}>
      <span
        style={{
          backgroundImage: languageBackground(language),
          ...textBackgroundClipStyles,
        }}
      >{truncate ? language.slice(0, 3) : language}</span>
    </div>
  )
}