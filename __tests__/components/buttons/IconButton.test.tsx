import { fireEvent, render, screen } from "@testing-library/react";
import IconButton from "@/components/buttons/IconButton";
import "@testing-library/jest-dom";

describe("IconButton", () => {
  it.each`
    label
    ${"close"}
    ${"playback"}
    ${"fastForward"}
    ${"like"}
    ${"pause"}
    ${"play"}
    ${"next"}
    ${"previous"}
    ${"shuffle"}
    ${"repeat"}
    ${"loop"}
    ${"lists"}
    ${"bin"}
  `(`should render the $label icon`, ({ label }) => {
    render(<IconButton iconTypes={label} />);
    const button = screen.getByLabelText(label);
    const icon = button.firstChild as SVGElement;
    expect(button).toBeInTheDocument();
    expect(icon.outerHTML).toContain("svg");
  });
  it("calls onClick prop when icon is clicked", () => {
    const clickHandler = jest.fn();
    render(<IconButton onClick={clickHandler} />);
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(clickHandler).toBeCalled();
  });
});
