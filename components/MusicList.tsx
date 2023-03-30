import { MusicContext } from "contexts/MusicContext";
import React, { useContext, useEffect, useState } from "react";
import ListItem from "./ListItem";

type MusicListProps = {
  list: Array<Song>;
};

export default function MusicList({ list }: MusicListProps) {
  const context = useContext(MusicContext);
  //load this music list to play
  //if this is a page or the only music list, it's ok to load music here when user reach this page or play this list
  //if this is just one of many music lists, better to load music somewhere outside
  context.setMusicList(list);

  return (
    <table className="w-full">
      <tbody>
        {list.map((e, i) => (
          <ListItem key={i} song={e} index={i} />
        ))}
      </tbody>
    </table>
  );
}
