import { CSSProperties } from "react";

interface OptionProps {
  option: string,
  onClick: () => void,
  style: CSSProperties,
}

export default function Option({ option, onClick, style }: OptionProps) {
  return (
    <li
      className={`
        h-7
        pb-10 pt-2 mb-4 
        border border-blue
        rounded-md 
        hover:bg-blue-contour
        hover:border-white
        transition-colors
        text-lg font-bold
        cursor-pointer
      `}
      style={style}
      onClick={onClick}
      aria-label={`Browse songs in ${option}`}
      role="button"
    >
      {option}
    </li>
  );
}