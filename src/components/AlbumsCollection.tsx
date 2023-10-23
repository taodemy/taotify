import React from "react";
import Albums from "@/components/Albums"; // 导入Albums组件
import { IoIosArrowForward } from "react-icons/io";
import { MusicList } from "@/types/context";

const albumCollectionContent = [
  {
    collectionName: "FEATURED",
    collectionDescription: "This Week",
  },
  {
    collectionName: "TOP MUSIC",
    collectionDescription: "American",
  },
];

type AlbumsCollectionProps = {
  albums: MusicList[];
};

const AlbumsCollection = ({ albums }: AlbumsCollectionProps) => {
  return (
    <div>
      {albumCollectionContent.map((collection, index) => (
        <div className="mt-8" key={index}>
          <div className="flex max-w-[200px] cursor-pointer items-center gap-1 text-light">
            <h3>{collection.collectionName}</h3>
            <IoIosArrowForward className="h-6 w-6" />
          </div>
          <p className="mt-1 mb-8 text-sm text-light-200">{collection.collectionDescription}</p>
          <Albums albums={index === 0 ? albums.slice(0, 7) : albums.slice(7)} />
        </div>
      ))}
    </div>
  );
};

export default AlbumsCollection;
