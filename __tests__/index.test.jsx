import { render, screen } from "@testing-library/react";
import Home, { getStaticProps } from "../src/pages/index";
import "@testing-library/jest-dom";
import { mockMusicList, mockEmptyMusicList } from "../mockData/mockData";

describe("Home", () => {
  beforeEach(() => {
    render(<Home newAlbums={[mockMusicList, mockEmptyMusicList]} />);
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

describe("getStaticProps", () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve([]),
    })
  );
});

beforeEach(() => {
  fetch.mockClear();
});

it("fetches data from the API", async () => {
  const { props } = await getStaticProps();
  expect(props).toEqual({ newAlbums: [] });
});
