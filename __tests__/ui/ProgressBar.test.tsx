import { fireEvent, render, screen } from "@testing-library/react";
import ProgressBar from "@/components/player/ProgressBar";
import "@testing-library/jest-dom";

describe("ProgressBar component", () => {
  const mockFunc = jest.fn();

  beforeEach(() => {
    render(<ProgressBar />);
  });

  it("renders the progress time and current time", () => {
    const currentTimeEl = screen.getByRole("currentTime");
    const endTimeEl = screen.getByRole("endTime");
    expect(currentTimeEl).toBeInTheDocument();
    expect(endTimeEl).toBeInTheDocument();
    expect(currentTimeEl).toHaveTextContent("0");
    expect(endTimeEl).toHaveTextContent("0");
  });

  it("renders the progress bar with correct styles", () => {
    const progressBar = screen.getByRole("progressbar");
    expect(progressBar).toBeInTheDocument();
    expect(progressBar).toHaveClass(
      "relative flex h-[14px] w-full items-center justify-center gap-4 text-light"
    );

    const rangeInput = screen.getByRole("slider");
    expect(rangeInput).toBeInTheDocument();
    expect(rangeInput).toHaveAttribute("min", "0");
    expect(rangeInput).toHaveAttribute("max", "0");
    expect(rangeInput).toHaveAttribute("value", "0");
  });
});
