import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import AudioControls from "@/components/AudioControls";

describe("Audio controls panel", () => {
  it("should render all the icons correctly when playing the music", () => {
    render(
      <AudioControls
        isPlaying={false}
        onPlayPauseClick={() => {}}
        onPrevClick={() => {}}
        onNextClick={() => {}}
      />
    );
    const heartIcon = screen.getAllByRole("button")[3];
    expect(heartIcon).toBeInTheDocument;
  });

  it("should render all the icons correctly when playing the music", () => {
    render(
      <AudioControls
        isPlaying={true}
        onPlayPauseClick={() => {}}
        onPrevClick={() => {}}
        onNextClick={() => {}}
      />
    );
    const heartIcon = screen.getAllByRole("button")[3];
    expect(heartIcon).toBeInTheDocument;
  });
});

// describe("calls the onPlayPauseClick function when the play/pause button is clicked", () => {
//   const mockOnPlayPauseClick = jest.fn();
//   render(
//     <AudioControls
//       isPlaying={true}
//       onPlayPauseClick={mockOnPlayPauseClick}
//       onPrevClick={() => {}}
//       onNextClick={() => {}}
//     />
//   );

//   fireEvent.click(screen.getByRole("button", { name: "play/pause" }));
//   expect(mockOnPlayPauseClick).toHaveBeenCalled();
// });

// describe("calls the onPrevClick function when the previous button is clicked", () => {
//   const mockOnPrevClick = jest.fn();
//   render(
//     <AudioControls
//       isPlaying={true}
//       onPlayPauseClick={() => {}}
//       onPrevClick={mockOnPrevClick}
//       onNextClick={() => {}}
//     />
//   );

//   fireEvent.click(screen.getByRole("button", { name: "skip back" }));
//   expect(mockOnPrevClick).toHaveBeenCalled();
// });

// describe("calls the onNextClick function when the next button is clicked", () => {
//   const mockOnNextClick = jest.fn();
//   render(
//     <AudioControls
//       isPlaying={true}
//       onPlayPauseClick={() => {}}
//       onPrevClick={() => {}}
//       onNextClick={mockOnNextClick}
//     />
//   );

//   fireEvent.click(screen.getByRole("button", { name: "skip forward" }));
//   expect(mockOnNextClick).toHaveBeenCalled();
//});
