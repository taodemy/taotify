import { fireEvent, render, screen } from "@testing-library/react";
import NormalButton from "@/components/buttons/NormalButton";
import "@testing-library/jest-dom";

/*=====================================================*/
// test color
/*=====================================================*/
describe("NormalButton", () => {
  it("should render button with primary color", () => {
    render(<NormalButton color="primary" />);
    const button = screen.getByRole("button", { name: /button/i });
    expect(button).toBeInTheDocument();
    expect(button.classList).toContain("bg-primary");
  });

  it("should render button with secondary color", () => {
    render(<NormalButton color="secondary" />);
    const button = screen.getByRole("button", { name: /button/i });
    expect(button).toBeInTheDocument();
    expect(button.classList).toContain("bg-secondary");
  });

  it("should render button with ternary color", () => {
    render(<NormalButton color="ternary" />);
    const button = screen.getByRole("button", { name: /button/i });
    expect(button).toBeInTheDocument();
    expect(button.classList).toContain("bg-ternary");
  });

  it("should render button with warning color", () => {
    render(<NormalButton color="warning" />);
    const button = screen.getByRole("button", { name: /button/i });
    expect(button).toBeInTheDocument();
    expect(button.classList).toContain("bg-warning");
  });

  it("should render button with info color", () => {
    render(<NormalButton color="info" />);
    const button = screen.getByRole("button", { name: /button/i });
    expect(button).toBeInTheDocument();
    expect(button.classList).toContain("bg-info");
  });

  it("should render button with light color", () => {
    render(<NormalButton color="light" />);
    const button = screen.getByRole("button", { name: /button/i });
    expect(button).toBeInTheDocument();
    expect(button.classList).toContain("bg-light-400");
  });

  it("should render button with dark color", () => {
    render(<NormalButton color="dark" />);
    const button = screen.getByRole("button", { name: /button/i });
    expect(button).toBeInTheDocument();
    expect(button.classList).toContain("bg-dark-400");
  });

  /*=====================================================*/
  // test outline color
  /*=====================================================*/
  it("should render out line", () => {
    render(<NormalButton outline />);
    const button = screen.getByRole("button", { name: /button/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveStyle(`background: "transparent"`);
    expect(button.classList).toContain("border-primary");
  });

  it("should render button with primary border", () => {
    render(<NormalButton color="primary" outline />);
    const button = screen.getByRole("button", { name: /button/i });
    expect(button).toBeInTheDocument();
    expect(button.classList).toContain("border-primary");
  });

  it("should render button with secondary border", () => {
    render(<NormalButton color="secondary" outline />);
    const button = screen.getByRole("button", { name: /button/i });
    expect(button).toBeInTheDocument();
    expect(button.classList).toContain("border-secondary");
  });

  it("should render button with ternary border", () => {
    render(<NormalButton color="ternary" outline />);
    const button = screen.getByRole("button", { name: /button/i });
    expect(button).toBeInTheDocument();
    expect(button.classList).toContain("border-ternary");
  });

  it("should render button with warning border", () => {
    render(<NormalButton color="warning" outline />);
    const button = screen.getByRole("button", { name: /button/i });
    expect(button).toBeInTheDocument();
    expect(button.classList).toContain("border-warning");
  });

  it("should render button with info border", () => {
    render(<NormalButton color="info" outline />);
    const button = screen.getByRole("button", { name: /button/i });
    expect(button).toBeInTheDocument();
    expect(button.classList).toContain("border-info");
  });

  it("should render button with light border", () => {
    render(<NormalButton color="light" outline />);
    const button = screen.getByRole("button", { name: /button/i });
    expect(button).toBeInTheDocument();
    expect(button.classList).toContain("border-light-100");
  });

  it("should render button with dark border", () => {
    render(<NormalButton color="dark" outline />);
    const button = screen.getByRole("button", { name: /button/i });
    expect(button).toBeInTheDocument();
    expect(button.classList).toContain("border-dark-100");
  });
});

/*=====================================================*/
// test onclick event
/*=====================================================*/

it("calls onClick prop when button is clicked", () => {
  const clickHandler = jest.fn();
  render(<NormalButton onClick={clickHandler} />);
  const button = screen.getByRole("button");
  fireEvent.click(button);
  expect(clickHandler).toBeCalled();
});
