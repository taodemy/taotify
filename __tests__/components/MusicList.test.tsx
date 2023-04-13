import MusicList from "@/components/MusicList";
import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MusicContextProvider } from "@/contexts/MusicContext";
import MusicPlayer from "@/layouts/MusicPlayer";

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
const music3 = {
  id: 3,
  name: "testSong3",
  artist: "testArtist",
  album: "testAlbum",
  picUrl: "testPicUrl",
  audioUrl: "url3",
};
const testMusicList: MusicList = { id: 0, type: "newSongs", tracks: [music1, music2] };
const testMusicList2: MusicList = { id: 0, type: "album", tracks: [music3] };
const testMusicList3: MusicList = { id: 0, type: "playlist", tracks: [] };

const renderMusicList = (index: number, queue: MusicList | null) => {
  return render(
    <MusicContextProvider index={index} queue={queue}>
      <MusicList musicList={testMusicList} />
      <MusicPlayer />
    </MusicContextProvider>
  );
};

const renderMusicList2 = () => {
  return render(
    <MusicContextProvider>
      <MusicList musicList={testMusicList} />
      <MusicPlayer />
    </MusicContextProvider>
  );
};

describe("Music List", () => {
  it("renders items correctly", async () => {
    render(<MusicList musicList={testMusicList} />);
    testMusicList.tracks.forEach((item) => {
      const text = screen.getByText(item.name);
      expect(text).toBeInTheDocument();
    });
  });

  it("renders error message when no item", async () => {
    render(<MusicList musicList={testMusicList3} />);
    const errorMsg = screen.getByText(/Ops, failed to load the music/i);
    expect(errorMsg).toBeInTheDocument();
  });

  it("click list item to load new list", async () => {
    renderMusicList2();
    const clickableElement = screen.getAllByRole("button")[0];
    fireEvent.click(clickableElement);
    const audio = screen.getByRole("audio");
    expect(audio).toHaveAttribute("src", "url1");
  });

  it("click list item to load new index when current list is playing", async () => {
    renderMusicList(0, testMusicList);
    const clickableElement = screen.getAllByRole("button")[1];
    fireEvent.click(clickableElement);
    const audio = screen.getByRole("audio");
    expect(audio).toHaveAttribute("src", "url2");
  });
});
