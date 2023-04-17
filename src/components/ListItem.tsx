import React from "react";
import { Song } from "types";

type ListItemProps = {
  song: Song;
  index: number;
  loadMusicList: (index: number) => void;
};

export default function ListItem({ song, index, loadMusicList }: ListItemProps) {
  return (
    <tr className="flex">
      <td className="border">
        <img className="h-12 w-12" src={song.album.picUrl} alt={song.name} />
      </td>
      <td className="w-1/5 border" onClick={() => loadMusicList(index)} role="button">
        {song.name}
      </td>
      <td className="w-1/5 border">
        {song.artists.map((artist, index) => (
          <p key={index}>{artist.name}</p>
        ))}
      </td>
      <td className="w-1/5 border">{song.album.name}</td>
    </tr>
  );
}
