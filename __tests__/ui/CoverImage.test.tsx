import { render, screen } from "@testing-library/react";
import CoverImage from "@/components/CoverImage";
import "@testing-library/jest-dom";

describe("Cover image", () => {
  it("should render music cover image with given image in success", () => {
    render(<CoverImage src="/sample_cover.png" />);
    const coverImg = screen.getByRole("img", { name: /picture of musiccover/i });
    expect(coverImg).toBeInTheDocument();
    expect(coverImg.classList).toContain("rounded-full");
    expect(coverImg).toHaveAttribute("src", "/sample_cover.png");
    expect(coverImg).toHaveAttribute("alt", "Picture of musicCover");
  });

  it("should render avatar image with given image in success", () => {
    render(<CoverImage variant="avatars" src="/sample_cover.png" />);
    const avatarsImg = screen.getByRole("img", { name: /picture of avatars/i });
    expect(avatarsImg).toBeInTheDocument();
    expect(avatarsImg.classList).toContain("rounded-full");
    expect(avatarsImg).toHaveAttribute("src", "/sample_cover.png");
    expect(avatarsImg).toHaveAttribute("alt", "Picture of avatars");
  });
});
