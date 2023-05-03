import { fireEvent, render, screen } from "@testing-library/react";
import ImageButton from "@/components/buttons/ImageButton";
import "@testing-library/jest-dom";

describe("ImageButton", () => {
  it("should render the image in avatar size", () => {
    render(<ImageButton isAvatar src="/sample_cover.png" />);
    const image = screen.getByRole("img") as HTMLImageElement;
    expect(image).toBeInTheDocument();
    expect(image.width).toBe(48);
    expect(image.alt).toBe("Picture of avatar");
  });
  it("should render the image in music cover size", () => {
    render(<ImageButton src="/sample_cover.png" />);
    const image = screen.getByRole("img") as HTMLImageElement;
    expect(image).toBeInTheDocument();
    expect(image.width).toBeGreaterThan(48);
    expect(image.alt).toBe("Picture of music cover");
  });

  it("calls onClick prop when icon is clicked", () => {
    const clickHandler = jest.fn();
    render(<ImageButton src="/sample_cover.png" onClick={clickHandler} />);
    const imageIcon = screen.getByRole("img");
    fireEvent.click(imageIcon);
    expect(clickHandler).toBeCalled();
  });
});
