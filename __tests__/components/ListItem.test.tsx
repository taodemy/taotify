import React from "react";
import { render } from "@testing-library/react";
import ListItem from "@/components/ListItem";
import "@testing-library/jest-dom";

type ListItemProps = {
  music: Music;
  index: number;
  loadMusicList: (index: number) => void;
};

const music: Music = {
  id: 1,
  name: "testSong",
  artist: "testArtist",
  album: "testAlbum",
  picUrl: "testPicUrl",
  audioUrl: "testaudioUrl",
};

describe("In ListItem test, ", () => {
  //ignore the warning message of jest
  let originalConsoleError: {
    (...data: any[]): void;
    (message?: any, ...optionalParams: any[]): void;
    (...data: any[]): void;
    (message?: any, ...optionalParams: any[]): void;
  };
  beforeAll(() => {
    originalConsoleError = console.error;
    console.error = jest.fn();
  });
  it("should render the list items correctly", () => {
    const testIndex = 1;
    const musicName = music.name;
    const fn = jest.fn();
    const { getByText, getByRole } = render(
      <ListItem music={music} index={testIndex} loadMusicList={fn} />
    );
    const button = getByRole("button");
    button.click();
    expect(fn).toHaveBeenCalled();
    expect(getByText(musicName)).toBeInTheDocument();
  });
  //ignore the warning message of jest
  afterAll(() => {
    console.error = originalConsoleError;
  });
});
