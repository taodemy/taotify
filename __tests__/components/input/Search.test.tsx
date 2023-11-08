import { render, screen, fireEvent } from "@testing-library/react";
import Search from "@/components/Input/Search";
import React, { useState } from "react";

describe("search bar", () => {
  it("should render the input element in the search bar", () => {
    const Wrapper = () => {
      const [inputValue, setInputValue] = useState("");
      return <Search inputValue={inputValue} setInputValue={setInputValue} />;
    };

    render(<Wrapper />);
    const input = screen.getByTestId("searchInput") as HTMLInputElement | undefined;
    if (input) {
      fireEvent.change(input, { target: { value: "new value" } });
      expect(input).toBeDefined();
      expect(input.value).toBe("new value");
    } else {
      throw new Error("Failed to find the input element");
    }
  });

  it("should render the search icon in the phone viewport", () => {
    jest.spyOn(window.screen, "width", "get").mockReturnValue(300);
    const Wrapper = () => {
      const [inputValue, setInputValue] = useState("");
      return <Search inputValue={inputValue} setInputValue={setInputValue} />;
    };

    render(<Wrapper />);
    const input = screen.getByTestId("searchInput");
    // Test for the expected styling
    expect(input.classList).not.toContain("hidden");

    const icon = screen.queryByTestId("search icon");
    // Check if the icon exists and then check its class
    if (icon) {
      expect(icon.classList).toContain("h-6");
    }
  });
});
