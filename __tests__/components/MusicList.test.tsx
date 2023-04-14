import MusicList from "@/components/MusicList";
import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MusicContextProvider } from "@/contexts/MusicContext";
import MusicPlayer from "@/layouts/MusicPlayer";
import { PlayList } from "types";
import { mockEmptyPlayList, mockPlayList } from "mockData/mockData";

const renderComponentsWithCustomContex = (index: number, queue: PlayList | null) => {
  return render(
    <MusicContextProvider index={index} queue={queue}>
      <MusicList musicList={mockPlayList} />
      <MusicPlayer />
    </MusicContextProvider>
  );
};

const renderComponentsWithDefaultContext = () => {
  return render(
    <MusicContextProvider>
      <MusicList musicList={mockPlayList} />
      <MusicPlayer />
    </MusicContextProvider>
  );
};

describe("Music List", () => {
  it("renders items correctly", async () => {
    render(<MusicList musicList={mockPlayList} />);
    mockPlayList.songs.forEach((song) => {
      const text = screen.getByText(song.name);
      expect(text).toBeInTheDocument();
    });
  });

  it("renders error message when music list is empty", async () => {
    render(<MusicList musicList={mockEmptyPlayList} />);
    const errorMsg = screen.getByText(/Ops, failed to load this music list/i);
    expect(errorMsg).toBeInTheDocument();
  });

  it("click list item to load music list", async () => {
    renderComponentsWithDefaultContext();
    const clickableElement = screen.getAllByRole("button")[0];
    fireEvent.click(clickableElement);
    const audio = screen.getByRole("audio");
    expect(audio).toHaveAttribute("src", "url1");
  });

  it("click list item to load new index when current list is playing", async () => {
    renderComponentsWithCustomContex(0, mockPlayList);
    const clickableElement = screen.getAllByRole("button")[1];
    fireEvent.click(clickableElement);
    const audio = screen.getByRole("audio");
    expect(audio).toHaveAttribute("src", "url2");
  });
});
