import { MusicContext } from "@/contexts/MusicContext";
import React, { useContext } from "react";
import ListItem from "./ListItem";

type MusicListProps = {
  musicList: Array<Music>;
};

export default function MusicList({ musicList }: MusicListProps) {
  const { setMusicList, setMusicIndex } = useContext(MusicContext);

  //if user decided to play this musiclist, load this list and selected index to context
  const loadMusicList = (index = 0) => {
    setMusicList(musicList);
    setMusicIndex(index);
  };

  return musicList.length > 0 ? (
    <table className="w-full">
      <tbody>
        {musicList.map((music, index) => (
          <ListItem key={index} music={music} index={index} loadMusicList={loadMusicList} />
        ))}
      </tbody>
    </table>
  ) : (
    <div>Ops, The music list components went wrong</div>
  );
}
