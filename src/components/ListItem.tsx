import { MusicContext } from "@/contexts/MusicContext";
import React, { useContext } from "react";
import { Song } from "types";

type ListItemProps = {
  song: Song;
  index: number;
  loadMusicList: (index: number, song: Song) => void;
};

export default function ListItem({ song, index, loadMusicList }: ListItemProps) {
  const { playingQueue, playingIndex } = useContext(MusicContext);
  return (
    <tr className="flex">
      <td className="border">
        <img className="h-12 w-12" src={song.album.picUrl} alt={song.name} />
      </td>
      <td
        className="flex w-1/5 justify-between border"
        onClick={() => loadMusicList(index, song)}
        role="button"
      >
        {song.name}
        {/*only for display functionality, remove it when styling this*/}
        <div>{song.id === playingQueue?.songs[playingIndex].id ? "onplay" : ""}</div>
      </td>
      <td className="w-1/5 border">{song.artists.map((artist) => artist.name)}</td>
      <td className="w-1/5 border">{song.album.name}</td>
    </tr>
  );
}
