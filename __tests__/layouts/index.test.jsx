import { render, screen } from "@testing-library/react";
import Layout from "../../src/layouts";
import "@testing-library/jest-dom";

describe("Layout", () => {
  beforeEach(() => {
    render(<Layout />);
  });

  it("renders search bar", () => {
    const SearchBarTitle = screen.getByPlaceholderText(/search for music/i);
    expect(SearchBarTitle).toBeInTheDocument();
  });
});
