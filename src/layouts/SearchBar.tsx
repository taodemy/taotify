import IconButton from "@/components/buttons/IconButton";
import LinkButton from "@/components/buttons/LinkButton";
import Search from "@/components/Input/Search";
import Link from "next/link";
import React from "react";
import { AiOutlineSetting } from "react-icons/ai";

const SearchBar = () => {
  const handleSetting = () => {};
  const handleNotification = () => {};
  const handleSearch = () => {};

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
