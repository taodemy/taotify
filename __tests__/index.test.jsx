import { render, screen } from "@testing-library/react";
import Home, { getStaticProps } from "../src/pages/index";
import "@testing-library/jest-dom";
import { mockMusicList, mockEmptyMusicList } from "../mockData/mockData";

describe("getStaticProps", () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve([]),
    })
  );
});

it("fetches data from the API", async () => {
  fetch.mockClear();
  render(<Home newAlbums={[mockMusicList, mockEmptyMusicList]} />);
  const { props } = await getStaticProps();
  expect(props).toEqual({ newAlbums: [] });
});
