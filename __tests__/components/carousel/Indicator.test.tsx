import Indicator from "@/components/carousel/Indicator";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Carousel Indicator", () => {
  const setActiveIndex = jest.fn();
  it("should render indicator", () => {
    render(<Indicator activeIndex={1} length={3} handleIndicatorClick={() => {}} />);

    const indicators = screen.getAllByRole("indicator");
    expect(indicators).toBeInTheDocument;
    expect(indicators.length).toBe(3);
  });

  it("should set correct active index when clicked", () => {
    render(<Indicator activeIndex={1} length={3} handleIndicatorClick={() => {}} />);

    const indicators = screen.getAllByRole("indicator");
    fireEvent.click(indicators[2]);
    expect(indicators).toBeInTheDocument;
  });
});
