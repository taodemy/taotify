import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MusicPlayer from "@/layouts/MusicPlayer";
import { MusicContextProvider } from "@/contexts/MusicContext";
import { mockMusicList } from "mockData/mockData";
import { MusicList } from "types";

const renderMusicPlayer = (index: number, queue: MusicList) => {
  return render(
    <MusicContextProvider index={index} queue={queue}>
      <MusicPlayer />
    </MusicContextProvider>
  );
};

describe("Music Player Bar", () => {
  it("should handle playing end properly", async () => {
    renderMusicPlayer(0, mockMusicList);
    const audio = screen.getByRole("audio");
    fireEvent.ended(audio);
    expect(audio).toHaveAttribute("src", "url2");
  });

  it("should set new end time when duration changed", async () => {
    renderMusicPlayer(0, mockMusicList);
    const audio = screen.getByRole("audio");
    fireEvent.durationChange(audio);
    const endTime = screen.getByRole("endTime");
    expect(endTime).toHaveTextContent("0:00");
  });

  it("should reset playing queue to origin order when shuffle mode turned off", async () => {
    renderMusicPlayer(0, mockMusicList);
    const audio = screen.getByRole("audio");
    const shuffleButton = screen.getByRole("shuffleButton");
    fireEvent.click(shuffleButton);
    fireEvent.click(shuffleButton);
    expect(audio).toHaveAttribute("src", "url1");
    fireEvent.ended(audio);
    expect(audio).toHaveAttribute("src", "url2");
  });

  it("should loop all when loop all mode", async () => {
    renderMusicPlayer(2, mockMusicList);
    const audio = screen.getByRole("audio");
    const loopButton = screen.getByRole("loopButton");
    fireEvent.click(loopButton);
    const loopAllButton = screen.getByRole("loopButton");
    fireEvent.click(loopAllButton);
    fireEvent.ended(audio);
    expect(audio).toHaveAttribute("src", "url1");
  });

  it("should loop single song when loop single mode", async () => {
    const mockLoad = jest.spyOn(HTMLMediaElement.prototype, "load").mockImplementation(() => {});
    renderMusicPlayer(0, mockMusicList);
    const audio = screen.getByRole("audio");
    const loopButton = screen.getByRole("loopButton");
    fireEvent.click(loopButton);
    fireEvent.ended(audio);
    expect(audio).toHaveAttribute("src", "url1");
    mockLoad.mockRestore();
  });

  it("should start timer when audio on playing", async () => {
    jest.useFakeTimers();
    jest.spyOn(global, "setInterval");
    renderMusicPlayer(0, mockMusicList);
    const audio = screen.getByRole("audio");
    fireEvent.playing(audio);
    expect(setInterval).toHaveBeenCalledTimes(1);
    jest.clearAllTimers();
  });

  it("should clear timer when audio on pause", async () => {
    jest.useFakeTimers();
    jest.spyOn(global, "clearInterval");
    renderMusicPlayer(0, mockMusicList);
    const audio = screen.getByRole("audio");
    fireEvent.playing(audio);
    fireEvent.pause(audio);
    expect(clearInterval).toHaveBeenCalledTimes(1);
    jest.clearAllTimers();
  });

  it("should play the next song when click the next button", () => {
    renderMusicPlayer(0, mockMusicList);
    const audio = screen.getByRole("audio");
    const nextButton = screen.getByRole("nextButton");
    fireEvent.click(nextButton);
    expect(audio).toHaveAttribute("src", "url2");
  });

  it("should play the first song when click the next button and current song is last song", () => {
    renderMusicPlayer(2, mockMusicList);
    const audio = screen.getByRole("audio");
    const nextButton = screen.getByRole("nextButton");
    fireEvent.click(nextButton);
    expect(audio).toHaveAttribute("src", "url1");
  });

  it("should play the previous song when click the previous button ", () => {
    renderMusicPlayer(2, mockMusicList);
    const audio = screen.getByRole("audio");
    const prevButton = screen.getByRole("prevButton");
    fireEvent.click(prevButton);
    expect(audio).toHaveAttribute("src", "url2");
  });

  it("should play the last song when click the previous button and current song is first song ", () => {
    renderMusicPlayer(0, mockMusicList);
    const audio = screen.getByRole("audio");
    const prevButton = screen.getByRole("prevButton");
    fireEvent.click(prevButton);
    expect(audio).toHaveAttribute("src", "url3");
  });

  it("should toggle the isPlaying state when click the play button", () => {
    renderMusicPlayer(0, mockMusicList);
    const playButton = screen.getByRole("playButton");
    fireEvent.click(playButton);
    expect(screen.getByRole("pauseButton")).toBeInTheDocument();
  });
});
