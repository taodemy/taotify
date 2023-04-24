import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MusicPlayer from "@/layouts/MusicPlayer";
import { MusicContextProvider } from "@/contexts/MusicContext";
import { mockPlayList } from "mockData/mockData";
import { PlayList } from "types";

const renderMusicPlayer = (index: number, queue: PlayList) => {
  return render(
    <MusicContextProvider index={index} queue={queue}>
      <MusicPlayer />
    </MusicContextProvider>
  );
};

describe("Music Player", () => {
  it("should handle playing end properly", async () => {
    renderMusicPlayer(0, mockPlayList);
    const audio = screen.getByRole("audio");
    fireEvent.ended(audio);
    expect(audio).toHaveAttribute("src", "url2");
  });

  // it("should toggle the play and pause", () => {
  //   renderMusicPlayer(0, mockPlayList);
  // });
});
