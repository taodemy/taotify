import React from "react";
import { fireEvent, render } from "@testing-library/react";
import ListItem from "@/components/ListItem";
import "@testing-library/jest-dom";
import { Song } from "types";
import { mockSongs } from "mockData/mockData";

const song: Song = mockSongs[0];

describe("In ListItem test, ", () => {
  it("should render the list items correctly", () => {
    const fn = jest.fn();
    const { getByText, getByRole } = render(
      <table>
        <tbody>
          <ListItem song={song} index={0} loadMusicList={fn} />
        </tbody>
      </table>
    );
    const button = getByRole("button");
    fireEvent.click(button);
    expect(fn).toHaveBeenCalled();

    expect(getByText(song.name)).toBeInTheDocument();

    expect(getByText(song.artists[0].name)).toBeInTheDocument();
  });
});
