import React from "react";
import Albums from "@/components/Albums";
import { IoIosArrowForward } from "react-icons/io";
import { MusicList } from "@/types/context";

const albumCollectionContent = [
  {
    collectionName: "FEATURED",
    collectionDescription: "This Week",
    area: "ALL",
    limit: 14,
  },
  {
    collectionName: "TOP MUSIC",
    collectionDescription: "English",
    area: "EA",
    limit: 14,
  },
  {
    collectionName: "MandoPop",
    collectionDescription: "Chinese",
    area: "ZH",
    limit: 14,
  },
  {
    collectionName: "KPop",
    collectionDescription: "Korean",
    area: "KR",
    limit: 14,
  },
  {
    collectionName: "JPop",
    collectionDescription: "Japan",
    area: "JP",
    limit: 14,
  },
];

export type AlbumsCollectionProps = {
  albums: {
    featureAlbum: MusicList[];
    westernAlbum: MusicList[];
    koreanAlbum: MusicList[];
    chineseAlbum: MusicList[];
    japanAlbum: MusicList[];
  };
};

const AlbumsCollection = ({ albums }: AlbumsCollectionProps) => {
  const { featureAlbum, westernAlbum, koreanAlbum, chineseAlbum, japanAlbum } = albums;

  function getAlbumsForCollection(collection: (typeof albumCollectionContent)[0]) {
    switch (collection.collectionName) {
      case "FEATURED":
        return featureAlbum.slice(7, 14);
      case "TOP MUSIC":
        return westernAlbum.slice(7);
      case "MandoPop":
        return chineseAlbum.slice(7);
      case "KPop":
        return koreanAlbum.slice(7);
      case "JPop":
        return japanAlbum.slice(7);
      default:
        return [];
    }
  }

  return (
    <div>
      {albumCollectionContent.map((collection) => (
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
