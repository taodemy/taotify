import { render, screen } from "@testing-library/react";
import Home from "../src/pages/index";
import "@testing-library/jest-dom";

describe("Home", () => {
  beforeEach(() => {
    render(<Home />);
  });

  it("renders a heading", () => {
    const main = screen.getByRole("main");
    expect(main).toBeInTheDocument();
  });

  it("renders recently played txt", () => {
    const RecentlyPlayedTitle = screen.getByText(/recently played/i);
    expect(RecentlyPlayedTitle).toBeInTheDocument();
  });

  it("renders friends activity txt", () => {
    const FriendsActivityTitle = screen.getByText(/friends activity/i);
    expect(FriendsActivityTitle).toBeInTheDocument();
  });

  it("renders new releases for you txt", () => {
    const NewReleasesTitle = screen.getByText(/new releases for you/i);
    expect(NewReleasesTitle).toBeInTheDocument();
  });
});
