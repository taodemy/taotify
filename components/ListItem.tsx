import { MusicContext } from "contexts/MusicContext";
import React, { useContext } from "react";

type ListItemProps = {
  music: Music;
  index: number;
};

export default function ListItem({ music, index }: ListItemProps) {
  const context = useContext(MusicContext);
  //if user click any music, update context to play this music
  const handlePlay = () => {
    context.setMusicIndex(index);
  };

  return (
    <tr className="flex" onClick={handlePlay}>
      <td className="border">
        <img className="h-12 w-12" src={music.picUrl} alt={music.name} />
      </td>
      <td className="border w-1/5">{music.name}</td>
      <td className="border w-1/5">{music.artist}</td>
      <td className="border w-1/5">{music.album}</td>
    </tr>
  );
}
