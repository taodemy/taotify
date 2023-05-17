import React from "react";
import { MusicList } from "types";
import AlbumItem from "./AlbumItem";

type AlbumsProps = {
  area: "EA" | "JP" | "KR" | "ZH";
  albums: MusicList[];
};

export default function Albums({ area, albums }: AlbumsProps) {
  enum Areas {
    EA = "US & Europe",
    JP = "Japan",
    KR = "Korea",
    ZH = "China",
  }
  return (
    <div className="mb-8">
      <h3 className="mb-1 text-light">TOP MUSIC</h3>
      <p className="text-sm text-light-200">{Areas[area]}</p>
      <div className="grid auto-rows-[0] grid-cols-4 grid-rows-1 gap-x-1 overflow-y-hidden md:grid-cols-5 md:gap-x-8 lg:grid-cols-7">
        {albums.map((album, index) => (
          <AlbumItem key={index} musicList={album} />
        ))}
      </div>
    </div>
  );
}
