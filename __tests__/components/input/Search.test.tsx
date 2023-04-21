import { render, screen, fireEvent } from "@testing-library/react";
import Search from "@/components/Input/Search";
// import "@testing-library/jest-dom"

describe("search bar", () => {
  it("should render the input element in search bar", () => {
    const util = render(<Search />);
    const input = util.container.querySelector("#searchInput") as HTMLInputElement | undefined;
    if (input) {
      fireEvent.change(input, { target: { value: "new value" } });
      expect(input).toBeInTheDocument;
      expect(input.value).toBe("new value");
      return;
    }
    throw new Error("fail to find input element");
  });
  it("should render the search icon in phone viewport", () => {
    jest.spyOn(window.screen, "width", "get").mockReturnValue(300);
    render(<Search />);
    const input = screen.getByLabelText(/Search for music,/i);
    const icon = screen.getByTestId("search icon");

    expect(input.classList).toContain("hidden");
    expect(icon).toBeInTheDocument;
    expect(icon.classList).toContain("h-6");
  });
});
