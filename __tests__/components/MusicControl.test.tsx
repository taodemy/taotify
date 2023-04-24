import MusicControls from "@/components/MusicControls";
import { render, fireEvent, screen } from "@testing-library/react";
import { mockSongs } from "mockData/mockData";

const mockRef = {
  Audio: {
    pause: jest.fn(),
    play: jest.fn(() => Promise.resolve()),
  },
};
const mockFn = jest.fn();

describe("Music Control component test", () => {
  it("should render the music control component in success", () => {
    render(
      <MusicControls
        audioRef={mockRef}
        musicData={mockSongs}
        playingIndex={0}
        setPlayingIndex={mockFn}
        isPlaying={false}
        setIsPlaying={mockFn}
      />
    );

    const previousBtn = screen.getAllByAltText("previous icon");
    expect(previousBtn).toBeInTheDocument();
  });
});
