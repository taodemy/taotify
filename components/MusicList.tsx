import { MusicContext } from "contexts/MusicContext";
import React, { useContext, useEffect, useState } from "react";
import ListItem from "./ListItem";

type MusicListProps = {
  list: Array<Music>;
};

export default function MusicList({ list }: MusicListProps) {
  const context = useContext(MusicContext);
  //load this music list to play
  //not good to load here, better to have a trigger to start loading
  context.setMusicList(list);

  return (
    <table className="w-full">
      <tbody>
        {list.map((e, i) => (
          <ListItem key={i} music={e} index={i} />
        ))}
      </tbody>
    </table>
  );
}
