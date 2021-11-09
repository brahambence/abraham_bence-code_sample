import Song from "types/song";
import Link from "next/link";
import LanguageLabel from "./language-label";
import { useState } from "react";
import { motion } from "framer-motion";
import fade from "components/animations/fade";

interface SongListItemProps {
  song: Song,
  showLanguage: boolean,
}
export default function SongListItem({ song, showLanguage }: SongListItemProps) {
  const { artist, title, language, slug, coverImage } = song;
  const [truncateLanguage, setTruncateLanguage] = useState(true);
  return (
    <motion.li
      variants={fade}
      initial="out"
      animate="in"
      className={`
        block
        relative
        group
        max-w-lg 
        mx-auto pb-2
      `}
      onMouseEnter={() => setTruncateLanguage(false)}
      onMouseLeave={() => setTruncateLanguage(true)}
      data-testid="song-list-item"
    >
      {showLanguage && (
        <div
          className={`
            absolute top-0 left-0
            z-10
            transform -translate-x-2 group-hover:translate-x-0
            transition-transform
          `}
        >
          <LanguageLabel language={language} truncate={truncateLanguage} />
        </div>
      )}

      <Link
        href={`/song/${slug}`}
      >
        <a
          className={`
            block
            w-full
            mb-4
            text-lg
          `}
        >
          <div
            className={`
              flex
              bg-blue-dark bg-opacity-80
              border border-white-translucent 
              group-hover:border-yellow group-hover:bg-white-translucent
              transition-colors
              rounded-md
              shadow-md
          `}
          >
            <img
              className={`
                w-32 h-32
                rounded
                transform translate-x-0.5 group-hover:translate-x-0
                transition-transform
              `}
              src={`/images/covers/optimized/${coverImage}`}
              alt={`album cover image for the song ${title} by ${artist}`}
            />
            <div
              className={`
                w-full
                mt-8 mr-4 overflow-hidden
                text-right text-lg
              `}
            >
              <div
                className="text-yellow"
                data-testid="title"
              >
                {title}
              </div>
              <div
                className="text-green"
                data-testid="artist"
              >
                {artist}
              </div>
            </div>
          </div>
        </a>
      </Link>
    </motion.li>
  )

}