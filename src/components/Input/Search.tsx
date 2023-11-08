import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import SearchBarResult from "@/components/SearchBarResult";

interface ISearchProps {
  inputValue: string;
  setInputValue: (value: string) => void;
  placeholder?: string;
}

const Search = ({
  placeholder = "Search for music, album and artist",
  inputValue,
  setInputValue,
}: ISearchProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <form className="relative flex grow items-center justify-end">
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
            inputValue && "sm:rounded-t-3xl sm:rounded-b-none"
          }`}
          onChange={(event) => handleChange(event)}
          value={inputValue}
        ></input>
        <label className="sr-only">Search for music, album and artist</label>
      </div>
      <div className="absolute top-9 left-0 z-[999] flex flex-col items-center bg-dark-300 text-white">
        {inputValue && <SearchBarResult inputValue={inputValue} />}
      </div>
    </form>
  );
};
export default Search;
