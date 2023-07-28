import { render, screen } from "@testing-library/react";
import Layout from "../../src/layouts";
import "@testing-library/jest-dom";

describe("Layout", () => {
  beforeEach(() => {
    render(<Layout />);
  });

  it("renders sidebar txt", () => {
    const SideBarTitle = screen.getByText(/This is the left SideBar/i);
    expect(SideBarTitle).toBeInTheDocument();
  });

  it("renders search bar", () => {
    const SearchBarTitle = screen.getByPlaceholderText(/search for music/i);
    expect(SearchBarTitle).toBeInTheDocument();
  });
});
