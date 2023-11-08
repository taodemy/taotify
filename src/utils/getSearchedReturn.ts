import {
  ArtistRootObject,
  AlbumRootObject,
  SongRootObject,
  SearchResults,
} from "@/types/SearchTypes";
import debounce from "@/utils/debounce";

import { getSearchedAlbums, getSearchedArtists, getSearchedSongs } from "@/utils/fetchHandler";

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

export const getSearchedReturn = async (inputValue: string): Promise<SearchResults> => {
  const debounceFn = debounce(handleDebounceFn, 1000);
  if (!inputValue) {
    return {
      matchedArtists: {} as ArtistRootObject,
      matchedAlbums: [],
      matchedSongs: {} as SongRootObject,
    };
  }

  try {
    const results = await debounceFn(inputValue);
    return results as SearchResults;
  } catch (error) {
    console.error("Error in component:", error);
    throw error;
  }
};
