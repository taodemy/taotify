import { render, fireEvent, screen } from "@testing-library/react";
import volumeUtils from "@/utils/volumeUtils/volumeUtils";
import "@testing-library/jest-dom";
import VolumeController from "@/components/volumeController/VolumeController";

describe("VolumeController", () => {
  beforeEach(() => {
    render(<VolumeController />);
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

  it("should unmute to previous volume level successfully", () => {
    const volumeSlideThumb = screen.getByTestId("volumeSlideThumb");
    const volumeSlideProgress = screen.getByTestId("volumeSlideProgress");
    const buttons = screen.getAllByRole("button");
    const muteButton = buttons[0];
    const mockCalculateVolume = jest
      .spyOn(volumeUtils, "calculateVolume")
      .mockImplementation(() => 0);
    fireEvent.mouseDown(volumeSlideThumb);
    fireEvent.mouseMove(volumeSlideThumb);
    fireEvent.mouseUp(volumeSlideThumb);
    fireEvent.click(muteButton);
    expect(volumeSlideProgress).toHaveStyle("width: 50%");
    mockCalculateVolume.mockRestore();
  });

  it("should mute successfully", () => {
    const volumeSlideProgress = screen.getByTestId("volumeSlideProgress");
    const buttons = screen.getAllByRole("button");
    const muteButton = buttons[0];
    fireEvent.click(muteButton);
    expect(volumeSlideProgress).toHaveStyle("width: 0%");
  });
});
