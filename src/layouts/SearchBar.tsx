import IconButton from "@/components/buttons/IconButton";
import Search from "@/components/Input/Search";
import Link from "next/link";
import React from "react";

const SearchBar = () => {
  return (
    <div className="flex w-full items-center bg-dark-200 md:left-[64px] lg:left-[320px]">
      <Link className="mr-2 text-light" href={"/"}>
        Home
      </Link>
      <Search />
      <IconButton iconTypes="setting"></IconButton>
      <IconButton iconTypes="notification"></IconButton>
    </div>
  );
};

export default SearchBar;
