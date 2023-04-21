import React, { useCallback, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

interface ISearchProps {
  onSubmit?: React.FormEventHandler<HTMLFormElement> | (() => void);
  onClick?: React.MouseEventHandler<SVGElement> | (() => void);
}

const Search = <T extends ISearchProps>({ onSubmit, onClick }: T) => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleSearch = onSubmit;
  const expendMaskLayer = onClick;

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <form className="relative flex grow items-center justify-end" onSubmit={handleSearch}>
        <label htmlFor="searchInput" className="sr-only">
          Search for music, album and artist
        </label>
        <div className="pointer-events-none absolute inset-y-0 left-0 hidden items-center pl-3 sm:flex">
          <AiOutlineSearch className="h-4 w-4 text-light-400"></AiOutlineSearch>
        </div>
        <input
          id="searchInput"
          placeholder="Search for music, album and artist"
          className="hidden h-9 w-full items-center rounded-full border border-light-100 bg-black/75 py-1.5 px-3 
          pl-8 text-xl text-light-400 focus:border-light-400 focus:outline-none focus:placeholder:text-light-400 sm:flex"
          onChange={handleInput}
          value={inputValue}
        ></input>
        <label className="sr-only">
          Search for music, album and artist
          <AiOutlineSearch
            aria-label="search icon"
            data-testid="search icon"
            className="h-6 w-6 justify-self-end text-light-400 sm:hidden"
            onClick={expendMaskLayer}
          ></AiOutlineSearch>
        </label>
      </form>
    </>
  );
};
export default Search;
