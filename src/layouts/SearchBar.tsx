import Search from "@/components/Input/Search";
import React from "react";

const SearchBar = () => {
  return (
    <div className="sticky top-0 z-10 flex flex-row items-center bg-dark pb-1.5 pt-2 md:pt-6 lg:pt-8">
      <p className="mr-3.5 text-light">Home</p>
      <Search />
    </div>
  );
};

export default SearchBar;
