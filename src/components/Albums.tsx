import React from "react";
import { MusicList } from "types";
import AlbumItem from "./AlbumItem";

type AlbumsProps = {
  albums: MusicList[];
};

export default function Albums({ albums }: AlbumsProps) {
  return (
    <div className="grid auto-rows-[0] grid-cols-4 grid-rows-1 gap-x-1 overflow-y-hidden md:grid-cols-5 md:gap-x-8 lg:grid-cols-7">
      {albums.map((album, index) => (
        <AlbumItem key={index} musicList={album} />
      ))}
    </div>
  );
}