import { MusicContext } from "../contexts/MusicContext";
import React, { useContext } from "react";
import ListItem from "./ListItem";
import { PlayList, Song } from "types";

export type MusicListProps = {
  musicList: PlayList;
};

export default function MusicList({ musicList }: MusicListProps) {
  const { playingQueue, setPlayingIndex, setPlayingQueue } = useContext(MusicContext);

  const loadMusicList = (index: number, song: Song) => {
    if (playingQueue?.type !== musicList.type || playingQueue?.id !== musicList.id) {
      setPlayingQueue(musicList);
      setPlayingIndex(index);
    } else {
      const currentIndex = playingQueue.songs.indexOf(song);
      setPlayingIndex(currentIndex);
    }
  };

  return musicList.songs.length > 0 ? (
    <table className="w-full">
      <tbody>
        {musicList.songs.map((song, index) => (
          <ListItem key={index} song={song} index={index} loadMusicList={loadMusicList} />
        ))}
      </tbody>
    </table>
  ) : (
    <div>Ops, failed to load this music list</div>
  );
}
