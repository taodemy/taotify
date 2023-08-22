import { MusicList } from "@/types/context";

export default function shuffleSongs(musicList: MusicList, index: number) {
  const songs = [...musicList.musicContext];
  const playingSong = songs.splice(index, 1)[0];

  for (let i = songs.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [songs[i], songs[j]] = [songs[j], songs[i]];
  }

  const shuffledMusicList = {
    id: musicList.id,
    type: musicList.type,
    musicContext: [playingSong, ...songs],
  };

  return shuffledMusicList;
}
