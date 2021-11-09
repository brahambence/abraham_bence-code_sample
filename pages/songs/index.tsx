import { getSongList } from "api/songs";
import MainContent from "components/main-content";
import LanguageFilter, { useLanguageFilter } from "components/language-filter";
import SongList from "components/song-list";
import { ChevronDown } from "react-feather";
import Song from "types/song";

export async function getStaticProps(context) {
  const songs = await getSongList();
  return {
    props: { songs, backHref: "/", path: "/songs" },
  };
}

interface SongsProps {
  songs: Song[],
}

export default function Songs({ songs }: SongsProps) {
  const [language, setLanguage] = useLanguageFilter();
  return (
    <MainContent>
      <LanguageFilter
        language={language}
        setLanguage={setLanguage}
      />
      <ChevronDown
        className={`
          w-full
          mb-1.5
          text-center 
        text-white-translucent
        `}
      />
      <SongList
        songs={songs.filter(song => (
          language === "all languages" || song.language === language
        ))}
        showLanguages={language === "all languages"}
      />
    </MainContent>
  );
}
