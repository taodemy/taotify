import { render, screen } from "@testing-library/react";
import ProgressBar from "@/components/ui/ProgressBar";
import "@testing-library/jest-dom";

describe("Progress bar", () => {
  it("renders the progress time and current time", () => {
    const processTime = "0:00";
    const currentTime = "2:30";
    render(<ProgressBar processTime={processTime} currentTime={currentTime} />);
    expect(screen.getByText(processTime)).toBeInTheDocument();
    expect(screen.getByText(currentTime)).toBeInTheDocument();
  });

  it("renders the progress bar with correct styles", () => {
    const processTime = "0:00";
    const currentTime = "2:30";
    render(<ProgressBar processTime={processTime} currentTime={currentTime} />);
    const progressBar = screen.getByRole("progressbar");
    expect(progressBar.className).toBe(
      "relative flex h-[14px] w-full items-center justify-center gap-4 text-light"
    );
  });
});
