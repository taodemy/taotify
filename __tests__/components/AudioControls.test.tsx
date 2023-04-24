import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import AudioControls from "@/components/AudioControls";

describe("Audio controls panel", () => {
  describe("Render all the icons correctly", () => {
    it("should render all the icons when playing the music", () => {
      render(<AudioControls isPlaying={true} />);
      const likeButton = screen.getAllByRole("button")[0];
      const skipBackButton = screen.getAllByRole("button")[1];
      const backButton = screen.getAllByRole("button")[2];
      const playButton = screen.getAllByRole("button")[3];
      const forwardButton = screen.getAllByRole("button")[4];
      const skipForwardButton = screen.getAllByRole("button")[5];
      const shuffleButton = screen.getAllByRole("button")[6];
      const repeatButton = screen.getAllByRole("button")[7];
      expect(likeButton).toBeInTheDocument;
      expect(skipBackButton).toBeInTheDocument;
      expect(backButton).toBeInTheDocument;
      expect(playButton).toBeInTheDocument;
      expect(forwardButton).toBeInTheDocument;
      expect(skipForwardButton).toBeInTheDocument;
      expect(shuffleButton).toBeInTheDocument;
      expect(repeatButton).toBeInTheDocument;
    });

    it("should render all the pause icons when not playing the music", () => {
      render(<AudioControls isPlaying={false} />);
      const pauseButton = screen.getAllByRole("button")[3];
      expect(pauseButton).toBeInTheDocument;
    });
  });

  it("should calls the onPlayPauseClick function when the play/pause button is clicked", () => {
    const mockOnPlayPauseClick = jest.fn();
    render(<AudioControls isPlaying={true} onPlayPauseClick={mockOnPlayPauseClick} />);
    fireEvent.click(screen.getAllByRole("button")[3]);
    expect(mockOnPlayPauseClick).toHaveBeenCalled();
  });

  it("calls the onPrevClick function when the previous button is clicked", () => {
    const mockOnPrevClick = jest.fn();
    render(<AudioControls isPlaying={true} onPrevClick={mockOnPrevClick} />);

    fireEvent.click(screen.getAllByRole("button")[2]);
    expect(mockOnPrevClick).toHaveBeenCalled();
  });

  it("calls the onNextClick function when the next button is clicked", () => {
    const mockOnNextClick = jest.fn();
    render(<AudioControls isPlaying={true} onNextClick={mockOnNextClick} />);

    fireEvent.click(screen.getAllByRole("button")[4]);
    expect(mockOnNextClick).toHaveBeenCalled();
  });
});
