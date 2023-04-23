import { fireEvent, render, screen } from "@testing-library/react";
import ProgressBar from "@/components/ProgressBar";
import "@testing-library/jest-dom";

describe("Progress bar", () => {
  const mockFunc = jest.fn();
  const { getByRole } = render(
    <ProgressBar currentTime={0} endTime={500} handleProgressChange={mockFunc} />
  );

  it("renders the progress time and current time", () => {
    expect(screen.getByRole("currentTime")).toBeInTheDocument();
    expect(screen.getByRole("endTime")).toBeInTheDocument();
  });

  // it("renders the progress bar with correct styles", () => {
  //   const progressBar = screen.getByRole("slider");
  //   fireEvent.change(progressBar, { target: { value: "10" } });
  //   expect(mockFunc).toHaveBeenCalledTimes(1);
  //   expect(mockFunc).toHaveBeenCalledWith(10);
  // });
});
