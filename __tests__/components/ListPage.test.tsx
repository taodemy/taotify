import ListPage from "@/components/ListPage";
import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MusicContextProvider } from "@/contexts/MusicContext";
import MusicPlayer from "@/layouts/MusicPlayer";
import { MusicList } from "types";
import { mockEmptyMusicList, mockMusicList } from "mockData/mockData";

const renderComponentsWithCustomContex = (index: number, queue: MusicList | null) => {
  return render(
    <MusicContextProvider index={index} queue={queue}>
      <ListPage musicList={mockMusicList} />
      <MusicPlayer />
    </MusicContextProvider>
  );
};

const renderComponentsWithDefaultContext = () => {
  return render(
    <MusicContextProvider>
      <ListPage musicList={mockMusicList} />
      <MusicPlayer />
    </MusicContextProvider>
  );
};

describe("Music List", () => {
  it("renders items correctly", async () => {
    render(<ListPage musicList={mockMusicList} />);
    mockMusicList.songs.forEach((song) => {
      const text = screen.getByText(song.name);
      expect(text).toBeInTheDocument();
    });
  });

  it("renders error message when music list is empty", async () => {
    render(<ListPage musicList={mockEmptyMusicList} />);
    const errorMsg = screen.getByText(/Ops, failed to load this music list/i);
    expect(errorMsg).toBeInTheDocument();
  });

  it("click list item to load music list", async () => {
    renderComponentsWithDefaultContext();
    const songName = screen.getByText(/song1/i);
    fireEvent.click(songName);
    const audio = screen.getByRole("audio");
    expect(audio).toHaveAttribute("src", "url1");
  });

  it("click list item to load new index when current list is playing", async () => {
    renderComponentsWithCustomContex(0, mockMusicList);
    const songName = screen.getByText(/song2/i);
    fireEvent.click(songName);
    const audio = screen.getByRole("audio");
    expect(audio).toHaveAttribute("src", "url2");
  });
});
