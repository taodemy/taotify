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

  it("should loop all when loop all mode", async () => {
    renderMusicPlayer(2, mockPlayList);
    const audio = screen.getByRole("audio");
    const loopButton = screen.getByRole("button", { name: /loop/i });
    fireEvent.click(loopButton);
    fireEvent.click(loopButton);
    fireEvent.ended(audio);
    expect(audio).toHaveAttribute("src", "url1");
  });

  it("should set new end time when duration changed", async () => {
    renderMusicPlayer(0, mockPlayList);
    const audio = screen.getByRole("audio");
    fireEvent.durationChange(audio);
    const endTime = screen.getByRole("endTime");
    expect(endTime).toHaveTextContent("0:00");
  });

  it("should reset playing queue to origin order when shuffle mode turned off", async () => {
    renderMusicPlayer(0, mockPlayList);
    const audio = screen.getByRole("audio");
    const shuffleButton = screen.getByRole("button", { name: /shuffle/i });
    fireEvent.click(shuffleButton);
    fireEvent.click(shuffleButton);
    expect(audio).toHaveAttribute("src", "url1");
    fireEvent.ended(audio);
    expect(audio).toHaveAttribute("src", "url2");
  });
});
