import React, { useEffect, useState } from "react";
import debounce from "@/utils/debounce";
import { getSearchedAlbums, getSearchedArtists, getSearchedSongs } from "@/utils/fetchHandler";
import {
  ArtistRootObject,
  AlbumRootObject,
  SongRootObject,
  SearchResults,
} from "@/types/SearchTypes";
import AlbumItem from "./AlbumItem";
import sliceArray from "@/utils/sliceArray";

const handleDebounceFn = async (keywords: string) => {
  if (!keywords) {
    return {
      matchedArtists: {} as ArtistRootObject,
      matchedAlbums: [],
      matchedSongs: {} as SongRootObject,
    };
  }

  try {
    const matchedArtists = await getSearchedArtists({ keywords: keywords, type: 100 });
    const matchedAlbums = await getSearchedAlbums({ keywords: keywords, type: 10 });
    const matchedSongs = await getSearchedSongs({ keywords: keywords, type: 1 });

    const searchResults = {
      matchedArtists,
      matchedAlbums,
      matchedSongs,
    };

    return searchResults;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

const debounceFn = debounce(handleDebounceFn, 1000);

interface SearchBarResultProps {
  inputValue: string;
}

const SearchBarResult = ({ inputValue }: SearchBarResultProps) => {
  const [searchResults, setSearchResults] = useState<SearchResults>({
    matchedArtists: {} as ArtistRootObject,
    matchedAlbums: [],
    matchedSongs: {} as SongRootObject,
  });

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchSearchedData = async () => {
      setIsLoading(true);

      try {
        const results = await debounceFn(inputValue);
        setSearchResults(results as SearchResults);
      } catch (error) {
        console.error("Error in component:", error);
      } finally {
        setIsLoading(false);
      }
    };

    if (inputValue) {
      fetchSearchedData();
    } else {
      setSearchResults({
        matchedArtists: {} as ArtistRootObject,
        matchedAlbums: [],
        matchedSongs: {} as SongRootObject,
      });
    }
  }, [inputValue]);

  const artists = searchResults.matchedArtists?.result?.artists;
  const albums = sliceArray(searchResults.matchedAlbums, 0, 5);
  const songs = searchResults.matchedSongs?.result?.songs;

  return (
    <div className="flex w-full flex-col items-center pb-8">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <h3 className="items-center pt-4 pb-8 text-primary-100">Search results:</h3>
          <div className="grid auto-rows-[0] grid-cols-3 grid-rows-1 overflow-y-hidden px-8 pb-9 md:grid-cols-5 md:gap-x-12">
            {albums.map((album, index) => (
              <div className="max-h-[100px] max-w-[100px] px-[6px]" key={index}>
                <AlbumItem key={index} musicList={album} />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default SearchBarResult;
