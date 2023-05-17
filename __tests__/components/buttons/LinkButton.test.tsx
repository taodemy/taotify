import { fireEvent, render, screen } from "@testing-library/react";
import LinkButton from "@/components/buttons/LinkButton";
import "@testing-library/jest-dom";

describe("LinkButton", () => {
  it.each`
    type
    ${"home"}
    ${"discover"}
    ${"albums"}
    ${"artists"}
    ${"videos"}
    ${"recentPlay"}
    ${"favorite"}
  `(`should render the $type icon`, ({ type }) => {
    render(<LinkButton linkTypes={type} />);
    const button = screen.getByLabelText(type);
    const icon = button.firstChild as SVGElement;
    expect(button).toBeInTheDocument();
    expect(icon.outerHTML).toContain("svg");
  });

  it("should have linear gradient in background when button is active", () => {
    render(<LinkButton linkTypes="home" isActive={true} />);
    const button = screen.getByLabelText("home");
    expect(button).toBeInTheDocument();
    expect(button.classList).toContain("sm:bg-gradient-to-r");
  });

  it("calls onClick prop when icon is clicked", () => {
    const clickHandler = jest.fn();
    render(<LinkButton onClick={clickHandler} />);
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(clickHandler).toBeCalled();
  });
});
