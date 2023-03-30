import { MusicContext } from "contexts/MusicContext";
import React, { useContext } from "react";

type ListItemProps = {
  song: Song;
  index: number;
};

export default function ListItem({ song, index }: ListItemProps) {
  const context = useContext(MusicContext);
  //if user click any song, update context to play this song
  const handlePlay = () => {
    context.setMusicIndex(index);
  };

  return (
    <tr className="flex" onClick={handlePlay}>
      <td className="border">
        <img className="h-12 w-12" src={song.picUrl} alt={song.name} />
      </td>
      <td className="border w-1/5">{song.name}</td>
      <td className="border w-1/5">{song.artist}</td>
      <td className="border w-1/5">{song.album}</td>
    </tr>
  );
}
