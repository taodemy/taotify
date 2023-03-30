import React from "react";

type ListItemProps = {
  music: Music;
  index: number;
  loadMusicList: (index: number) => void;
};

export default function ListItem({ music, index, loadMusicList }: ListItemProps) {
  return (
    <tr className="flex">
      <td className="border">
        <img className="h-12 w-12" src={music.picUrl} alt={music.name} />
      </td>
      {/* if user click any music, tell musiclist that user decided to play this list*/}
      <td className="border w-1/5" onClick={() => loadMusicList(index)}>
        {music.name}
      </td>
      <td className="border w-1/5">{music.artist}</td>
      <td className="border w-1/5">{music.album}</td>
    </tr>
  );
}
