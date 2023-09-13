import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

interface ISearchProps {
  onSubmit?: React.FormEventHandler<HTMLFormElement> | (() => void);
  onClick?: React.MouseEventHandler<SVGElement> | (() => void);
  placeholder?: string;
}

const Search = ({
  onSubmit,
  onClick,
  placeholder = "Search for music, album and artist",
}: ISearchProps) => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <form className="relative flex grow items-center justify-end" onSubmit={onSubmit}>
      <label htmlFor="searchInput" className="sr-only">
        Search for music, album and artist
      </label>
      <div className="pointer-events-none absolute inset-y-0 left-0 hidden items-center pl-3 sm:flex">
        <AiOutlineSearch className="h-4 w-4 text-light-400"></AiOutlineSearch>
      </div>
      <input
        id="searchInput"
        placeholder={placeholder}
        className="hidden h-9 w-full rounded-full border border-light-100 bg-black/75 px-3 py-2 pl-9 text-xl text-light-400 placeholder:text-light-100
          hover:border-light-400 hover:placeholder:text-light-400 focus:border-light-400 focus:outline-none focus:placeholder:text-transparent sm:flex"
        onChange={handleInput}
        value={inputValue}
      ></input>
      <label className="sr-only">
        Search for music, album and artist
        <AiOutlineSearch
          aria-label="search icon"
          data-testid="search icon"
          className="h-6 w-6 justify-self-end text-light-400 sm:hidden"
          onClick={onClick}
        ></AiOutlineSearch>
      </label>
    </form>
  );
};
export default Search;
