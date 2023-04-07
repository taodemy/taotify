import { render, fireEvent, screen } from "@testing-library/react";
import VolumeSlideController from "../../src/components/VolumeSlideController";
import "@testing-library/jest-dom";

describe("VolumeSlideController", () => {
  beforeEach(() => {
    render(<VolumeSlideController />);
  });

  it("should handle click successfully", () => {
    const volumeSlideBar = screen.getByTestId("volumeSlideBar");
    const volumeSlideProgress = screen.getByTestId("volumeSlideProgress");
    const volumeSlideContainer = screen.getByTestId("volumeSlideContainer");
    const rect = volumeSlideBar.getBoundingClientRect();
    const rect2 = volumeSlideContainer.getBoundingClientRect();
    const midHeight = (rect.bottom + rect.top) / 2;
    console.log(rect.right);
    console.log(rect.left);
    console.log(rect.top);
    console.log(volumeSlideBar);
    console.log(rect2.bottom);
    console.log(volumeSlideContainer);
    fireEvent.click(volumeSlideBar, { screenX: rect.right - 1, screenY: midHeight });
    expect(volumeSlideProgress).toHaveStyle("width: 100%");
  });
});
