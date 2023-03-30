import { MusicContext } from "contexts/MusicContext";
import React, { useContext, useEffect, useState } from "react";
import ListItem from "./ListItem";

type MusicListProps = {
  list: Array<Music>;
};

export default function MusicList({ list }: MusicListProps) {
  const context = useContext(MusicContext);

  //if user decided to play this musiclist, load this list and selected index to context
  const loadMusicList = (index = 0) => {
    context.setMusicList(list);
    context.setMusicIndex(index);
  };

  return (
    <table className="w-full">
      <tbody>
        {list.map((e, i) => (
          <ListItem key={i} music={e} index={i} loadMusicList={loadMusicList} />
        ))}
      </tbody>
    </table>
  );
}
