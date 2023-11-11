import React from "react";
import {
  ArtistRootObject,
  AlbumRootObject,
  SongRootObject,
  SearchResults,
} from "@/types/SearchTypes";
import AlbumItem from "./AlbumItem";
import sliceArray from "@/utils/sliceArray";

interface SearchBarResultProps {
  searchResults: SearchResults;
  isLoading: boolean;
}

const SearchBarResult = ({ searchResults, isLoading }: SearchBarResultProps) => {
  const artists = searchResults.matchedArtists?.result?.artists;
  const albums = sliceArray(searchResults.matchedAlbums, 0, 7);
  const songs = searchResults.matchedSongs?.result?.songs;

  return (
    <div className="flex w-full flex-col items-center pb-8">
      {isLoading ? (
        <h3 className="pt-4 text-white">Loading...</h3>
      ) : (
        <>
          <h3 className="items-center pt-4 pb-8 text-primary-100">Search results:</h3>
          <div className="grid auto-rows-[0] grid-cols-3 grid-rows-1 gap-x-2 overflow-y-hidden sm:grid-cols-4 md:grid-cols-5 md:gap-x-4 lg:grid-cols-6 lg:gap-x-6 xl:grid-cols-7">
            {albums.map((album, index) => (
              <div className="mb-8 max-h-[100px] max-w-[100px] px-[6px]" key={index}>
                <AlbumItem key={index} musicList={album} isCanAlbumPlayed={false} />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default SearchBarResult;
