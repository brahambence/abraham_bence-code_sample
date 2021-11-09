import { LanguageOption, OptionStyles } from "components/language-filter";
import { Dispatch } from "react";
import Option from "./option";

interface OptionListProps {
  options: LanguageOption[],
  setOption: Dispatch<LanguageOption>,
  hideOptions: () => void,
  optionStyles: OptionStyles
}

export default function OptionList(
  { options, setOption, hideOptions, optionStyles }: OptionListProps) {
  return (
    <ul
      className={`
        bg-blue-dark
        rounded-b-md border border-blue-contour
        p-4
      `}>
      {options.map(option => {
        return (
          <Option
            key={option}
            option={option}
            onClick={() => {
              setOption(option);
              hideOptions();
            }}
            style={optionStyles[option]}
          />
        )
      })}
    </ul>
  )
}