import { MusicContext } from "../contexts/MusicContext";
import React, { useContext } from "react";
import ListItem from "./ListItem";
import { PlayList } from "types";

type MusicListProps = {
  musicList: PlayList;
};

export default function MusicList({ musicList }: MusicListProps) {
  const { playingQueue, setPlayingIndex, setPlayingQueue, setIsPlaying } = useContext(MusicContext);

  const loadMusicList = (index: number) => {
    if (playingQueue?.type !== musicList.type || playingQueue?.id !== musicList.id) {
      setPlayingQueue(musicList);
    }
    setPlayingIndex(index);
  };

  return musicList.songs.length > 0 ? (
    <table className="w-full">
      <tbody>
        {musicList.songs.map((song, index) => (
          <ListItem
            key={index}
            song={song}
            index={index}
            loadMusicList={loadMusicList}
            setIsPlaying={setIsPlaying}
          />
        ))}
      </tbody>
    </table>
  ) : (
    <div>Ops, failed to load this music list</div>
  );
}
