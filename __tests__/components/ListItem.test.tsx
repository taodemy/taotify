import React from "react";
import { render } from "@testing-library/react";
import ListItem from "@/components/ListItem";
import "@testing-library/jest-dom";

const music: Music = {
  id: 1,
  name: "testSong",
  artist: "testArtist",
  album: "testAlbum",
  picUrl: "testPicUrl",
  audioUrl: "testaudioUrl",
};

describe("In ListItem test, ", () => {
  it("should render the list items correctly", () => {
    const testIndex = 1;
    const musicName = music.name;
    const fn = jest.fn();
    const { getByText, getByRole } = render(
      <table>
        <tbody>
          <ListItem music={music} index={testIndex} loadMusicList={fn} />
        </tbody>
      </table>
    );
    const button = getByRole("button");
    button.click();
    expect(fn).toHaveBeenCalled();
    expect(getByText(musicName)).toBeInTheDocument();
  });
});
