import { render, screen } from "@testing-library/react";
import Layout from "../../layouts/index"
import "@testing-library/jest-dom";

describe("Layout", () => {
  beforeEach(() => {
    render(<Layout />);
  });

  it("renders sidebar txt", () => {
    const SideBarTitle = screen.getByText(/This is the left SideBar/i);
    expect(SideBarTitle).toBeInTheDocument();
  });

  it("renders search bar txt", () => {
    const SearchBarTitle = screen.getByText(/This is the top search bar/i);
    expect(SearchBarTitle).toBeInTheDocument();
  });

  it("renders music player txt", () => {
    const MusicPlayerTitle = screen.getByText(/Music Player/i);
    expect(MusicPlayerTitle).toBeInTheDocument();
  });
});