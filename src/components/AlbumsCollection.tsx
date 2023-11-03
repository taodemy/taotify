import React from "react";
import Albums from "@/components/Albums";
import { IoIosArrowForward } from "react-icons/io";
import { MusicList } from "@/types/context";
import { GENRES } from "@/constant/genres";

export type AlbumsCollectionProps = {
  albums: {
    featureAlbum: MusicList[];
    englishAlbum: MusicList[];
    koreanAlbum: MusicList[];
    chineseAlbum: MusicList[];
    japanAlbum: MusicList[];
  };
};

const AlbumsCollection = ({ albums }: AlbumsCollectionProps) => {
  const { featureAlbum, englishAlbum, koreanAlbum, chineseAlbum, japanAlbum } = albums;

  function getAlbumsForCollection(collection: (typeof GENRES)[0]) {
    switch (collection.collectionName) {
      case "FEATURED":
        return featureAlbum;
      case "TOP MUSIC":
        return englishAlbum;
      case "C-Pop":
        return chineseAlbum;
      case "K-Pop":
        return koreanAlbum;
      case "J-Pop":
        return japanAlbum;
      default:
        return [];
    }
  }

  return (
    <div>
      {GENRES.map((collection) => (
        <div className="mt-8" key={collection.collectionName}>
          <div className="flex max-w-[200px] cursor-pointer items-center gap-1 text-light">
            <h3>{collection.collectionName}</h3>
            <IoIosArrowForward className="h-6 w-6" />
          </div>
          <p className="mt-1 mb-8 text-sm text-light-200">{collection.collectionDescription}</p>
          <Albums albums={getAlbumsForCollection(collection)} />
        </div>
      ))}
    </div>
  );
};

export default AlbumsCollection;
