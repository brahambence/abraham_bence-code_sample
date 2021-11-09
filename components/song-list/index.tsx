import Song from "types/song";
import SongListItem from "./song-list-item";

interface SongListProps {
  songs: Song[],
  showLanguages: boolean,
}

export default function SongList(
  { songs, showLanguages }: SongListProps) {
  return (
    <ol>
      {songs.map(song => {
        return (
          <SongListItem
            key={song.slug}
            song={song}
            showLanguage={showLanguages}
          />
        )
      })}
    </ol>
  )
}