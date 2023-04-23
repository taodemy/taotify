import { PlayList } from "types";

export default function shuffleSongs(playList: PlayList, index: number) {
  const songs = [...playList.songs];
  const playingSong = songs.splice(index, 1)[0];

  for (let i = songs.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [songs[i], songs[j]] = [songs[j], songs[i]];
  }

  const shuffledPlayList = {
    id: playList.id,
    type: playList.type,
    songs: [playingSong, ...songs],
  };

  return shuffledPlayList;
}
