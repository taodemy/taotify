import { fireEvent, render, screen } from "@testing-library/react";
import Button from "@ui/Button";
import "@testing-library/jest-dom";

describe("Button", () => {
  it("should render button on the screen", () => {
    render(<Button color="primary" label="button" />);
    const button = screen.getByRole("button", /"button"/i);
    expect(button).toBeInTheDocument();
    expect(button.classList).toContain("bg-primary");
  });

  it("should render button with secondary color", () => {
    render(<Button color="secondary" label="button"></Button>);
    const button = screen.getByRole("button", /"button"/i);
    expect(button).toBeInTheDocument();
    expect(button.classList).toContain("bg-secondary");
  });

  it("should render the icon when variant is set to icon", () => {
    render(<Button role="icon" size="large" />);
    const icon = screen.getByRole("icon");
    expect(icon).toBeInTheDocument();
  });

  it("should render outline when outline attribute is true", () => {
    render(<Button outline={true} label="button" />);
    const button = screen.getByRole("button", /button/i);
    expect(button).toBeInTheDocument();
    expect(button).toHaveStyle(`background: "transparent"`);
    expect(button.classList).toContain("border-primary");
  });

  it("calls onClick prop when clicked", () => {
    const clickHandler = jest.fn();
    render(<Button onClick={clickHandler} />);
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(clickHandler).toBeCalled();
  });
});
