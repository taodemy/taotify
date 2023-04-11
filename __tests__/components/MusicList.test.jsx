import MusicList from "@/components/MusicList";
import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("List component", () => {
  const music1 = {
    id: 1,
    name: "testSong1",
    artist: "testArtist",
    album: "testAlbum",
    picUrl: "testPicUrl",
    audioUrl: "testaudioUrl",
  };
  const music2 = {
    id: 2,
    name: "testSong2",
    artist: "testArtist",
    album: "testAlbum",
    picUrl: "testPicUrl",
    audioUrl: "testaudioUrl",
  };
  const music3 = {
    id: 3,
    name: "testSong3",
    artist: "testArtist",
    album: "testAlbum",
    picUrl: "testPicUrl",
    audioUrl: "testaudioUrl",
  };
  const musicListArr = [music1, music2, music3];

  test("renders items correctly", () => {
    const { getByText } = render(<MusicList musicList={musicListArr} />);
    musicListArr.forEach((item) => {
      const text = getByText(item.name);
      expect(text).toBeInTheDocument();
    });
  });

  // test("renders list items based on input items", () => {
  //   const { getByRole } = renderer.create(<MusicList list={musicListArr} />);
  //   const list = getByRole("list");
  //   expect(list.children.length).toBe(items.length);
  // items.forEach((item, index) => {
  //   const listItem = getByRole('listitem', { name: item });
  //   expect(listItem).toBeInTheDocument();
  //   expect(listItem.textContent).toBe(item);
  // });
  // });
});
