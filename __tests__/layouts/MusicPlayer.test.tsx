import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MusicPlayer from "@/layouts/MusicPlayer";
import { MusicContextProvider } from "@/contexts/MusicContext";

const music1 = {
  id: 1,
  name: "testSong1",
  artist: "testArtist",
  album: "testAlbum",
  picUrl: "testPicUrl",
  audioUrl: "url1",
};
const music2 = {
  id: 2,
  name: "testSong2",
  artist: "testArtist",
  album: "testAlbum",
  picUrl: "testPicUrl",
  audioUrl: "url2",
};

const testMusicList: MusicList = { id: 0, type: "album", tracks: [music1, music2] };

const renderMusicPlayer = (index: number, queue: MusicList) => {
  return render(
    <MusicContextProvider index={index} queue={queue}>
      <MusicPlayer />
    </MusicContextProvider>
  );
};

describe("Music Player", () => {
  it("should handle playing end properly", async () => {
    renderMusicPlayer(0, testMusicList);
    const audio = screen.getByRole("audio");
    fireEvent.ended(audio);
    expect(audio).toHaveAttribute("src", "url2");
  });
});
