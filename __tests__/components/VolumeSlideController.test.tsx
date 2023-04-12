import { render, fireEvent, screen } from "@testing-library/react";
import VolumeSlideController from "@/components/VolumeSlideController";
import volumeUtils from "@/utils/volumeUtils/volumeUtils";
import "@testing-library/jest-dom";

describe("VolumeSlideController", () => {
  beforeEach(() => {
    Element.prototype.getBoundingClientRect = jest.fn(() => {
      return {
        width: 100,
        height: 50,
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        x: 0,
        y: 0,
        toJSON: () => {},
      };
    });
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
