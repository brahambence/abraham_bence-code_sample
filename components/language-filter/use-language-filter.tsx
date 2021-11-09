import { defaultLanguage, LanguageOption } from "components/language-filter";
import { useEffect, useState, Dispatch } from "react";
import { useLocalstorageState } from "rooks";

export function useLanguageFilter() {
  const [componentDidMount, setComponentDidMount] = useState(false);

  useEffect(() => {
    setComponentDidMount(true);
  }, []);

  const [storedLanguage, setStoredLanguage, clearStoredLanguage] =
    useLocalstorageState("lyr:songs_language_filter", defaultLanguage);

  if (componentDidMount) {
    return [storedLanguage, setStoredLanguage, clearStoredLanguage] as
      [LanguageOption, Dispatch<LanguageOption>, () => void];
  } else {
    return [defaultLanguage, setStoredLanguage, clearStoredLanguage] as
      [LanguageOption, Dispatch<LanguageOption>, () => void];
  }
}