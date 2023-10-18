import IconButton from "@/components/buttons/IconButton";
import Search from "@/components/Input/Search";
import Link from "next/link";
import React from "react";
import { SiYoutubemusic } from "react-icons/si";

const SearchBar = () => {
  return (
    <div className="flex w-full items-center pb-8 md:pt-6 lg:pt-8">
      <Link className="mr-2 text-light" href={"/"}>
        Home
      </Link>
      <div className="flex w-full justify-center gap-2 font-roboto text-light sm:hidden">
        <SiYoutubemusic className="h-8 w-8" />
        <h3 className="">Taotify</h3>
      </div>
      <Search />
      <IconButton iconTypes="setting"></IconButton>
      <IconButton iconTypes="notification"></IconButton>
    </div>
  );
};

export default SearchBar;
