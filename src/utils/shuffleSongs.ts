import { PlayList } from "types";

export default function shuffleSongs(playList: PlayList, index: number) {
  const songs = [...playList.songs];
  const playingSong = songs.splice(index, 1)[0];

  const shuffledSongs = songs
    .map((song) => ({ song, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ song }) => song);

  const shuffledPlayList = {
    id: playList.id,
    type: playList.type,
    songs: [playingSong, ...shuffledSongs],
  };

  return shuffledPlayList;
}
