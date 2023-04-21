import { fireEvent, render, screen } from "@testing-library/react";
import ProgressBar from "@/components/ProgressBar";

describe("ProgressBar", () => {
  it("handles change", () => {
    const mockFunc = jest.fn();
    const { getByRole } = render(
      <ProgressBar currentTime={0} endTime={500} handleProgressChange={mockFunc} />
    );
    const progressBar = getByRole("slider");
    fireEvent.change(progressBar, { target: { value: "10" } });

    expect(mockFunc).toHaveBeenCalledTimes(1);
    expect(mockFunc).toHaveBeenCalledWith(10);
  });
});
