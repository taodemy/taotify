import { fireEvent, render, screen } from "@testing-library/react";
import Button from "@/components/buttons/";
import "@testing-library/jest-dom";

describe("Button", () => {
  /*=====================================================*/
  // test icon variant
  /*=====================================================*/
  it("should render the Normal Button with default primary color ", () => {
    render(<Button />);
    const button = screen.getByRole("button", { name: /button/i });
    expect(button).toBeInTheDocument();
    expect(button.classList).toContain("bg-primary");
  });

  it("should render the Icon Button", () => {
    render(<Button variant="icon" />);
    const button = screen.getByRole("button");
    const icon = button.firstChild as SVGElement;
    expect(icon).toBeInTheDocument();
    expect(icon.outerHTML).toContain("svg");
  });

  it("should render the Link Button", () => {
    render(<Button variant="link" linkTypes="discover" />);
    const button = screen.getByLabelText("discover");
    const icon = button.firstChild as SVGElement;
    expect(button).toBeInTheDocument();
    expect(icon.outerHTML).toContain("svg");
  });

  it("should render the image Button", () => {
    render(<Button variant="image" src="/testSrc" />);
    const button = screen.getByRole("button");
    const imageElement = button.firstChild as HTMLImageElement;
    expect(button).toBeInTheDocument();
    expect(imageElement.src).toContain("/testSrc");
  });

  it("should render the a span when image src is not defined", () => {
    render(<Button variant="image" />);
    const span = screen.getByText("invalid img url");
    expect(span).toBeInTheDocument();
    expect(span.outerHTML).toContain("span");
  });
});
