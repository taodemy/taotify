import { render, screen, fireEvent, act } from "@testing-library/react";
import Search from "@/components/Input/Search";
import React, { useState } from "react";
import { SearchResults, ArtistRootObject, SongRootObject } from "@/types/SearchTypes";
import { getSearchedReturn } from "@/utils/getSearchedReturn";

describe("search bar", () => {
  it("should render the input element in the search bar", async () => {
    const Wrapper = () => {
      const [inputValue, setInputValue] = useState("");
      const [searchResults, setSearchResults] = useState<SearchResults>({
        matchedArtists: {} as ArtistRootObject,
        matchedAlbums: [],
        matchedSongs: {} as SongRootObject,
      });
      const [searchInputShown, setSearchInputShown] = useState(false);
      const [isLoading, setIsLoading] = useState(false);

      const handleKeywordsChange = async (value: string) => {
        setInputValue(value);
        try {
          setSearchInputShown(true);
          const sanitizedKeywords = value.trim();
          // 使用 act 函数包裹可能引起状态更新的异步操作
          await act(async () => {
            const results = await getSearchedReturn(sanitizedKeywords);
            setSearchResults(results);
          });
        } catch (error) {
          console.error("Error in component:", error);
        } finally {
          // 使用 act 函数包裹可能引起状态更新的异步操作
          await act(() => {
            setIsLoading(false);
          });
        }
      };

      return (
        <Search
          inputValue={inputValue}
          setInputValue={setInputValue}
          searchResults={searchResults}
          setSearchResults={setSearchResults}
          setSearchInputShown={setSearchInputShown}
          setIsLoading={setIsLoading}
        />
      );
    };

    render(<Wrapper />);
    const input = screen.getByTestId("searchInput") as HTMLInputElement | undefined;
    if (input) {
      await act(async () => {
        fireEvent.change(input, { target: { value: "new value" } });
        // 使用 act 函数等待异步操作完成
        await Promise.resolve();
      });
      expect(input).toBeDefined();
      expect(input.value).toBe("new value");
    } else {
      throw new Error("Failed to find the input element");
    }
  });

  it("should render the search icon in the phone viewport", () => {
    const Wrapper = () => {
      const [inputValue, setInputValue] = useState("");
      const [searchResults, setSearchResults] = useState<SearchResults>({
        matchedArtists: {} as ArtistRootObject,
        matchedAlbums: [],
        matchedSongs: {} as SongRootObject,
      });
      const [searchInputShown, setSearchInputShown] = useState(false);
      const [isLoading, setIsLoading] = useState(false);
      jest.spyOn(window.screen, "width", "get").mockReturnValue(300);
      return (
        <Search
          inputValue={inputValue}
          setInputValue={setInputValue}
          searchResults={searchResults}
          setSearchResults={setSearchResults}
          setSearchInputShown={setSearchInputShown}
          setIsLoading={setIsLoading}
        />
      );
    };

    render(<Wrapper />);
    const input = screen.getByTestId("searchInput");
    // Test for the expected styling
    expect(input.classList).not.toContain("hidden");

    const icon = screen.queryByTestId("search icon");
    // Check if the icon exists and then check its class
    if (icon) {
      expect(icon.classList).toContain("h-6");
    }
  });
});
