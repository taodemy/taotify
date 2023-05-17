import { getStaticProps } from "../src/pages/index";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "../src/pages/index";

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
  expect(props).toEqual({
    newAlbums: [
      { area: "EA", albums: [] },
      { area: "JP", albums: [] },
      { area: "KR", albums: [] },
      { area: "ZH", albums: [] },
    ],
  });
});

describe("Home page", () => {
  beforeEach(() => {
    render(
      <Home
        newAlbums={[
          { area: "EA", albums: [] },
          { area: "JP", albums: [] },
          { area: "KR", albums: [] },
          { area: "ZH", albums: [] },
        ]}
      />
    );
  });

  it("renders home page with new albums", () => {
    const zh = screen.getByText(/china/i);
    const ea = screen.getByText(/us & europe/i);
    const jp = screen.getByText(/japan/i);
    const kr = screen.getByText(/korea/i);
    expect(zh).toBeInTheDocument();
    expect(ea).toBeInTheDocument();
    expect(jp).toBeInTheDocument();
    expect(kr).toBeInTheDocument();
  });
});
