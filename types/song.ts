import Language from "types/language";
import LyricLine from "types/lyric-line";

type Song = {
  artist: string,
  title: string,
  slug: string,
  language: Language,
  lyricLines: LyricLine[],
  coverImage: string,
  videoId: string,
};

export default Song;