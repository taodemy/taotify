import { render, waitFor, prettyDOM } from "@testing-library/react";
import Demo, { getServerSideProps } from "../src/pages/demo";
import "@testing-library/jest-dom/extend-expect";

jest.mock("isomorphic-fetch");

test("renders an audio element with the provided audioUrl prop", async () => {
  const audioUrl =
    "https://netease-cloud-music-api-mu-peach.vercel.app/song/url/v1?id=33894312&level=exhigh";
  const { getByRole } = render(<Demo audioUrl={audioUrl} />);
  const audioElement = await waitFor(() => getByRole("audio", { hidden: true }));
  const sourceElement = audioElement.querySelector("source");
  expect(sourceElement).toHaveAttribute("src", audioUrl);
  expect(sourceElement).toHaveAttribute("type", "audio/mpeg");
});

describe("getServerSideProps function", () => {
  it("fetches the audio URL and returns it as props", async () => {
    const mockData = { data: [{ url: "mock-audio-url" }] };
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockData),
      })
    );
    const props = await getServerSideProps();
    expect(props).toEqual({ props: { audioUrl: mockData.data[0].url } });
  });
});
