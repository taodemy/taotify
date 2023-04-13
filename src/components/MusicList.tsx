import { MusicContext } from "../contexts/MusicContext";
import React, { useContext } from "react";
import ListItem from "./ListItem";

type MusicListProps = {
  musicList: MusicList;
};

export default function MusicList({ musicList }: MusicListProps) {
  const { playingQueue, setPlayingIndex, setPlayingQueue } = useContext(MusicContext);

  const loadMusicList = (index: number) => {
    if (playingQueue?.type !== musicList.type || playingQueue?.id !== musicList.id) {
      setPlayingQueue(musicList);
    }
    setPlayingIndex(index);
  };

  return musicList.tracks.length > 0 ? (
    <table className="w-full">
      <tbody>
        {musicList.tracks.map((music, index) => (
          <ListItem key={index} music={music} index={index} loadMusicList={loadMusicList} />
        ))}
      </tbody>
    </table>
  ) : (
    <div>Ops, failed to load the music</div>
  );
}
