import { render, screen } from "@testing-library/react";
import Home, { getStaticProps } from "../src/pages/index";
import "@testing-library/jest-dom";

const music1 = {
  id: 1,
  name: "testSong",
  artist: "testArtist",
  album: "testAlbum",
  picUrl: "testPicUrl",
  audioUrl: "testaudioUrl",
};
const music2 = {
  id: 2,
  name: "testSong",
  artist: "testArtist",
  album: "testAlbum",
  picUrl: "testPicUrl",
  audioUrl: "testaudioUrl",
};
const music3 = {
  id: 3,
  name: "testSong",
  artist: "testArtist",
  album: "testAlbum",
  picUrl: "testPicUrl",
  audioUrl: "testaudioUrl",
};
const musicListArr = [music1, music2, music3];

describe("Home", () => {
  beforeEach(() => {
    render(<Home newSongsWithUrls={musicListArr} />);
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
  console.log(props);
  expect(props).toEqual({ newSongs: [] });
});
