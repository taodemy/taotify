import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MusicContextProvider } from "@/contexts/MusicContext";
import AlbumItem from "@/components/AlbumItem";
import { mockEmptyMusicList, mockMusicList } from "mockData/mockData";
import MusicPlayer from "@/layouts/MusicPlayer";

const renderAlbumItem = () => {
  return render(
    <MusicContextProvider>
      <AlbumItem musicList={mockMusicList} />
      <MusicPlayer />
    </MusicContextProvider>
  );
};

const renderAlbumItemWithDefaultContext = () => {
  return render(
    <MusicContextProvider index={0} queue={mockMusicList}>
      <AlbumItem musicList={mockMusicList} />
      <MusicPlayer />
    </MusicContextProvider>
  );
};

const renderAlbumItemWithEmptyList = () => {
  return render(
    <MusicContextProvider>
      <AlbumItem musicList={mockEmptyMusicList} />
      <MusicPlayer />
    </MusicContextProvider>
  );
};

describe("", () => {
  it("should handle album clicking to play", async () => {
    renderAlbumItem();
    const play = screen.getByRole("playAlbum");
    const audio = screen.getByRole("audio");
    fireEvent.click(play);
    expect(audio).toHaveAttribute("src", "url1");
  });

  it("should handle album clicking to play", async () => {
    renderAlbumItemWithDefaultContext();
    const play = screen.getByRole("playAlbum");
    fireEvent.click(play);
    const pause = screen.getByRole("pauseAlbum");
    fireEvent.click(pause);
    const audio = screen.getByRole("audio");
    expect(audio).toHaveAttribute("src", "url1");
  });

  it("should display none when this is a empty music list", async () => {
    renderAlbumItemWithEmptyList();
    const emptyAlbum = screen.getByRole("emptyAlbum");
    expect(emptyAlbum).toHaveTextContent("");
  });
});
