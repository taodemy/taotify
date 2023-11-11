import { useEffect, useState } from "react";
import debounce, { DebounceFunction } from "@/utils/debounce";
import {
  ArtistRootObject,
  AlbumRootObject,
  SongRootObject,
  SearchResults,
} from "@/types/SearchTypes";
import { getSearchedAlbums, getSearchedArtists, getSearchedSongs } from "@/utils/fetchHandler";

const debounceTime: number = 1000;

const handleDebounceFn = async (keywords: string) => {
  if (!keywords) {
    console.log("Keywords are empty. Returning default values.");
    return {
      matchedArtists: {} as ArtistRootObject,
      matchedAlbums: [],
      matchedSongs: {} as SongRootObject,
    };
  }
  try {
    const matchedArtists = await getSearchedArtists({ keywords, type: 100 });
    const matchedAlbums = await getSearchedAlbums({ keywords, type: 10 });
    const matchedSongs = await getSearchedSongs({ keywords, type: 1 });

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

const debounceFn: DebounceFunction<[string], Promise<SearchResults | undefined>> = debounce(
  (keywords) => handleDebounceFn(keywords),
  debounceTime
);

const useSearchedReturn = (keywords: string) => {
  const [results, setResults] = useState<SearchResults>({
    matchedArtists: {} as ArtistRootObject,
    matchedAlbums: [],
    matchedSongs: {} as SongRootObject,
  });

  const getSearchedReturn = async (inputValue: string): Promise<SearchResults> => {
    if (!inputValue) {
      return {
        matchedArtists: {} as ArtistRootObject,
        matchedAlbums: [],
        matchedSongs: {} as SongRootObject,
      };
    }

    try {
      const results = await debounceFn(inputValue);
      if (results) {
        setResults(results);
        return results;
      } else {
        throw new Error("Search results are undefined");
      }
    } catch (error) {
      console.error("Error in component:", error);
      throw error;
    }
  };

  useEffect(() => {
    getSearchedReturn(keywords);
  }, [keywords]);

  return { results, getSearchedReturn };
};

export default useSearchedReturn;
