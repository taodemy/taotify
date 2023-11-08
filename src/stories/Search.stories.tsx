import React, { useState } from "react";
import Search from "../components/Input/Search";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { SearchResults, ArtistRootObject, SongRootObject } from "@/types/SearchTypes";

export default {
  title: "component/Search",
  component: Search,
} as ComponentMeta<typeof Search>;

export const SearchBar: ComponentStory<typeof Search> = () => {
  const [inputValue, setInputValue] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResults>({
    matchedArtists: {} as ArtistRootObject,
    matchedAlbums: [],
    matchedSongs: {} as SongRootObject,
  });

  return (
    <Search
      inputValue={inputValue}
      setInputValue={setInputValue}
      searchResults={searchResults}
      setSearchResults={setSearchResults}
    />
  );
};
