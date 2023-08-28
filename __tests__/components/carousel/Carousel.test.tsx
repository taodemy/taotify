import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Carousel from "@/components/carousel/Carousel";
import { mockMusicList } from "mockData/mockData";
import mockRouter from "next-router-mock";
jest.mock("next/router", () => jest.requireActual("next-router-mock"));

describe("Carousel", () => {
  it("render carousel image", () => {
    render(<Carousel albums={[mockMusicList]} />);
    const image = screen.getByRole("img");
    fireEvent.click(image);
    expect(image).toBeInTheDocument();
    if (image.parentElement) {
      expect(image.parentElement).toHaveClass("block");
    }
  });

  it("should set index to be 10, when slider is clicked", () => {
    render(<Carousel albums={[mockMusicList, mockMusicList, mockMusicList, mockMusicList]} />);
    const image1 = screen.getAllByRole("img")[0];
    fireEvent.click(image1);
    const style = getComputedStyle(image1.parentElement!);
    expect(image1).toBeInTheDocument();
    expect(style["z-index" as unknown as number]).toBe("10");
  });

  it("should redirect to new url when click", () => {
    render(<Carousel albums={[mockMusicList]} />);
    const image = screen.getByRole("img");
    fireEvent.click(image);
    expect(image).toBeInTheDocument();
    expect(mockRouter.asPath).toBe("/album/0");
  });

  it("It should adjust the number of visible slide when the `slidesPerView` is set", () => {
    render(
      <Carousel
        albums={[mockMusicList, mockMusicList, mockMusicList, mockMusicList]}
        slidesPerView={1}
      />
    );
    const imageArray = screen.getAllByRole("img");
    expect(imageArray.length).toBe(4);
    expect(imageArray[3].parentNode).toHaveClass("hidden");
  });
});
