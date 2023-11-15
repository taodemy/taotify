import React, { useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import {
  ArtistRootObject,
  AlbumRootObject,
  SongRootObject,
  SearchResults,
} from "@/types/SearchTypes";
import useSearchedReturn from "@/hooks/useSearchedReturn";
import useInputSanitization from "@/hooks/useInputSanitization";

interface ISearchProps {
  inputValue: string;
  setInputValue: (value: string) => void;
  searchResults: SearchResults;
  setSearchResults: (searchResults: SearchResults) => void;
  setSearchInputShown: (searchInputShown: boolean) => void;
  setIsLoading: (isLoading: boolean) => void;
  placeholder?: string;
}

const Search = ({
  placeholder = "Search for music, album and artist",
  inputValue = "",
  setInputValue,
  setSearchResults,
  setSearchInputShown,
  setIsLoading,
}: ISearchProps) => {
  const { sanitizedKeywords, handleKeywordsChange } = useInputSanitization();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  const { getSearchedReturn } = useSearchedReturn(inputValue); // Call useSearchedReturn

  useEffect(() => {
    const fetchSearchData = async () => {
      setIsLoading(true);
      setSearchInputShown(true);
      try {
        handleKeywordsChange(inputValue);
        const results = await getSearchedReturn(sanitizedKeywords);
        setSearchResults(results);
      } catch (error) {
        console.error("Error in component:", error);
      } finally {
        setIsLoading(false);
      }
    };

    if (inputValue) {
      fetchSearchData();
    } else {
      setSearchResults({
        matchedArtists: {} as ArtistRootObject,
        matchedAlbums: [],
        matchedSongs: {} as SongRootObject,
      });
    }
  }, [sanitizedKeywords, inputValue]);

  return (
    <div className="flex">
      <form
        className="relative flex grow items-center justify-end"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex w-full">
          <label htmlFor="searchInput" className="sr-only">
            Search for music, album and artist
          </label>
          <div className="pointer-events-none absolute inset-y-0 left-0 hidden items-center pl-3 sm:flex">
            <AiOutlineSearch className="h-4 w-4 text-light-400"></AiOutlineSearch>
          </div>
          <input
            data-testid="searchInput"
            placeholder={placeholder}
            className={`h-9 w-full rounded-full border border-light-100 bg-black/75 px-3 py-2 pl-9 text-xl text-light-400 placeholder:text-light-100 hover:border-light-400 hover:placeholder:text-light-400 focus:border-light-400 focus:outline-none focus:placeholder:text-transparent sm:flex ${
              inputValue ? "sm:rounded-t-3xl sm:rounded-b-none" : ""
            }`}
            onChange={(event) => handleChange(event)}
            value={inputValue}
          ></input>
          <label className="sr-only">Search for music, album and artist</label>
        </div>
      </form>
      <div className="absolute right-2 flex h-9 w-9 items-center justify-center sm:hidden">
        <RxCross1 className="text-white"></RxCross1>
      </div>
    </div>
  );
};
export default Search;
