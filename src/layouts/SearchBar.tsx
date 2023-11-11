import IconButton from "@/components/buttons/IconButton";
import Search from "@/components/Input/Search";
import Link from "next/link";
import React, { useState } from "react";
import { SiYoutubemusic } from "react-icons/si";
import { AiOutlineSearch } from "react-icons/ai";
import {
  ArtistRootObject,
  AlbumRootObject,
  SongRootObject,
  SearchResults,
} from "@/types/SearchTypes";
import SearchBarResult from "@/components/SearchBarResult";
import { RxCross1 } from "react-icons/rx";

const SearchBar = () => {
  const [searchInputShown, setSearchInputShown] = useState(false);
  const [searchResults, setSearchResults] = useState<SearchResults>({
    matchedArtists: {} as ArtistRootObject,
    matchedAlbums: [],
    matchedSongs: {} as SongRootObject,
  });
  const [inputValue, setInputValue] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="flex items-center pt-2 pb-8 md:pt-6 lg:pt-8">
      <Link className="mr-2 text-light" href={"/"}>
        Home
      </Link>
      <div className="flex w-full justify-center gap-2 font-roboto text-light sm:hidden">
        <SiYoutubemusic className="h-8 w-8" />
        <h3 className="">Taotify</h3>
      </div>
      <div className="relative hidden w-full sm:flex sm:flex-col">
        <Search
          inputValue={inputValue}
          setInputValue={setInputValue}
          searchResults={searchResults}
          setSearchResults={setSearchResults}
          setSearchInputShown={setSearchInputShown}
          setIsLoading={setIsLoading}
        />
        <div className="absolute top-9 z-20 flex w-full flex-col items-center bg-dark-300 text-white">
          {inputValue ? (
            <>
              <SearchBarResult searchResults={searchResults} isLoading={isLoading} />
              <RxCross1
                className="absolute right-8 top-8 -translate-y-1/2"
                onClick={() => {
                  setSearchInputShown(false), setInputValue("");
                }}
              ></RxCross1>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
      <AiOutlineSearch
        aria-label="search icon"
        data-testid="search icon"
        className="h-6 w-6 justify-self-end text-light-400 sm:hidden"
        onClick={() => setSearchInputShown(!searchInputShown)}
      ></AiOutlineSearch>
      <div className="hidden sm:flex">
        <IconButton iconTypes="setting"></IconButton>
        <IconButton iconTypes="notification"></IconButton>
      </div>
      {searchInputShown ? (
        <div
          className="fixed top-0 left-0 z-20 mt-2 h-screen w-screen bg-dark bg-opacity-90 px-2 sm:hidden"
          onClick={() => {
            setSearchInputShown(false), setInputValue("");
          }}
        >
          <div className="absolute left-1/2 top-8 flex w-full -translate-x-1/2 items-center justify-center">
            <div className="mx-10 w-[327px]">
              <Search
                inputValue={inputValue}
                setInputValue={setInputValue}
                searchResults={searchResults}
                setSearchResults={setSearchResults}
                setSearchInputShown={setSearchInputShown}
                setIsLoading={setIsLoading}
              />
            </div>
            {inputValue ? (
              <div className="absolute top-9 left-0 z-20 mt-[28px] flex h-screen w-full flex-col items-center bg-dark-300">
                <SearchBarResult searchResults={searchResults} isLoading={isLoading} />
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default SearchBar;
