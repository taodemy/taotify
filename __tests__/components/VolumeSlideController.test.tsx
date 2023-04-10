import { render, fireEvent, screen } from "@testing-library/react";
import VolumeSlideController from "../../src/components/VolumeSlideController";
import volumeUtils from "../../src/utils/volumeUtils/volumeUtils";
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
    fireEvent.click(volumeSlideBar);
    expect(volumeSlideProgress).toHaveStyle("width: 100%");
    mockCalculateVolume.mockRestore();
  });

  it("should handle drag successfully", () => {
    const volumeSlideThumb = screen.getByTestId("volumeSlideThumb");
    const volumeSlideProgress = screen.getByTestId("volumeSlideProgress");
    const mockCalculateVolume = jest
      .spyOn(volumeUtils, "calculateVolume")
      .mockImplementation(() => 100);
    fireEvent.mouseDown(volumeSlideThumb);
    fireEvent.mouseMove(volumeSlideThumb);
    fireEvent.mouseUp(volumeSlideThumb);
    expect(volumeSlideProgress).toHaveStyle("width: 100%");
    mockCalculateVolume.mockRestore();
  });
});
