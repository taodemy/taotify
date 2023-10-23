import IconButton from "@/components/buttons/IconButton";
import Search from "@/components/Input/Search";
import Link from "next/link";
import React from "react";

const SearchBar = () => {
  return (
    <div className="flex w-full items-center pb-8 md:pt-6 lg:pt-8">
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
