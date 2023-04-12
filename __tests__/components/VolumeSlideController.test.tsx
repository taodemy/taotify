import { render, fireEvent, screen } from "@testing-library/react";
import VolumeSlideController from "@/components/VolumeSlideController";
import volumeUtils from "@/utils/volumeUtils/volumeUtils";
import "@testing-library/jest-dom";

describe("VolumeSlideController", () => {
  beforeEach(() => {
    render(<VolumeSlideController />);
  });

  it("should handle click successfully", () => {
    const volumeSlideBar = screen.getByTestId("volumeSlideBar");
    const volumeSlideProgress = screen.getByTestId("volumeSlideProgress");
    const mockCalculateVolume = jest
      .spyOn(volumeUtils, "calculateVolume")
      .mockImplementation(() => 100);
    fireEvent.mouseDown(volumeSlideBar);
    expect(volumeSlideProgress).toHaveStyle("width: 100%");
    mockCalculateVolume.mockRestore();
  });

  it("should handle drag successfully", () => {
    const volumeSlideBar = screen.getByTestId("volumeSlideBar");
    const volumeSlideProgress = screen.getByTestId("volumeSlideProgress");
    const mockCalculateVolume = jest
      .spyOn(volumeUtils, "calculateVolume")
      .mockImplementation(() => 100);
    fireEvent.mouseDown(volumeSlideBar);
    fireEvent.mouseMove(volumeSlideBar);
    fireEvent.mouseUp(volumeSlideBar);
    expect(volumeSlideProgress).toHaveStyle("width: 100%");
    mockCalculateVolume.mockRestore();
  });
});
