import { fireEvent, render, screen } from "@testing-library/react";
import Button from "@ui/Button";
import "@testing-library/jest-dom";

describe("Button", () => {
  it("should render button with primary color", () => {
    render(<Button color="primary" label="button" />);
    const button = screen.getByRole("button", { name: /button/i });
    expect(button).toBeInTheDocument();
    expect(button.classList).toContain("bg-primary");
  });

  it("should render button with secondary color", () => {
    render(<Button color="secondary" label="button"></Button>);
    const button = screen.getByRole("button", { name: /button/i });
    expect(button).toBeInTheDocument();
    expect(button.classList).toContain("bg-secondary");
  });

  it("should render button with ternary color", () => {
    render(<Button color="ternary" label="button"></Button>);
    const button = screen.getByRole("button", { name: /button/i });
    expect(button).toBeInTheDocument();
    expect(button.classList).toContain("bg-ternary");
  });

  it("should render button with warning color", () => {
    render(<Button color="warning" label="button"></Button>);
    const button = screen.getByRole("button", { name: /button/i });
    expect(button).toBeInTheDocument();
    expect(button.classList).toContain("bg-warning");
  });

  it("should render button with info color", () => {
    render(<Button color="info" label="button"></Button>);
    const button = screen.getByRole("button", { name: /button/i });
    expect(button).toBeInTheDocument();
    expect(button.classList).toContain("bg-info");
  });

  it("should render button with light color", () => {
    render(<Button color="light" label="button"></Button>);
    const button = screen.getByRole("button", { name: /button/i });
    expect(button).toBeInTheDocument();
    expect(button.classList).toContain("bg-light-400");
  });

  it("should render button with dark color", () => {
    render(<Button color="dark" label="button"></Button>);
    const button = screen.getByRole("button", { name: /button/i });
    expect(button).toBeInTheDocument();
    expect(button.classList).toContain("bg-dark-400");
  });

  it("should render the icon when variant is set to icon", () => {
    render(<Button variant="icon" size="large" />);
    const icon = screen.getByRole("icon");
    expect(icon).toBeInTheDocument();
    expect(icon.outerHTML).toContain("svg");
  });

  it("calls onClick prop when clicked", () => {
    const clickHandler = jest.fn();
    render(<Button onClick={clickHandler} />);
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(clickHandler).toBeCalled();
  });

  it("should render outline when outline attribute is true", () => {
    render(<Button outline label="button" />);
    const button = screen.getByRole("button", { name: /button/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveStyle(`background: "transparent"`);
    expect(button.classList).toContain("border-primary");
  });

  it("should render button with primary border", () => {
    render(<Button color="primary" outline label="button" />);
    const button = screen.getByRole("button", { name: /button/i });
    expect(button).toBeInTheDocument();
    expect(button.classList).toContain("border-primary");
  });

  it("should render button with secondary border", () => {
    render(<Button color="secondary" outline label="button"></Button>);
    const button = screen.getByRole("button", { name: /button/i });
    expect(button).toBeInTheDocument();
    expect(button.classList).toContain("border-secondary");
  });

  it("should render button with ternary border", () => {
    render(<Button color="ternary" outline label="button"></Button>);
    const button = screen.getByRole("button", { name: /button/i });
    expect(button).toBeInTheDocument();
    expect(button.classList).toContain("border-ternary");
  });

  it("should render button with warning border", () => {
    render(<Button color="warning" outline label="button"></Button>);
    const button = screen.getByRole("button", { name: /button/i });
    expect(button).toBeInTheDocument();
    expect(button.classList).toContain("border-warning");
  });

  it("should render button with info border", () => {
    render(<Button color="info" outline label="button"></Button>);
    const button = screen.getByRole("button", { name: /button/i });
    expect(button).toBeInTheDocument();
    expect(button.classList).toContain("border-info");
  });

  it("should render button with light border", () => {
    render(<Button color="light" outline label="button"></Button>);
    const button = screen.getByRole("button", { name: /button/i });
    expect(button).toBeInTheDocument();
    expect(button.classList).toContain("border-light-100");
  });

  it("should render button with dark border", () => {
    render(<Button color="dark" outline label="button"></Button>);
    const button = screen.getByRole("button", { name: /button/i });
    expect(button).toBeInTheDocument();
    expect(button.classList).toContain("border-dark-100");
  });
});
