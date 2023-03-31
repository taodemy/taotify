import { rest } from "msw";
import { render, screen } from "@testing-library/react";

import Demo from "@/pages/demo";

import { server } from "../server";

beforeAll(() => server.listen);
afterAll(() => server.close);

describe("demo", () => {
  it("handles good response", async () => {
    render(
      <Demo
        audioUrl={`${process.env.NEXT_MUSIC_SERVER_ADDRESS}/song/url/v1?id=33894312&level=exhigh`}
      />
    );

    const music = screen.getByRole("audio", { hidden: true }) as HTMLImageElement;

    expect(music.src).toBe(
      "http://m8.music.126.net/20230330075439/e22705428ede9bcce7df7dd16b91bd28/ymusic/0fd6/4f65/43ed/ab.mp3"
    );
  });
});

// test("handles good response", async () => {
//   render(
//     <Demo
//       audioUrl={`${process.env.NEXT_MUSIC_SERVER_ADDRESS}/song/url/v1?id=33894312&level=exhigh`}
//     />
//   );
//   const audioElement= await screen.getByRole("audio", { hidden: true });
//   const sourceElement = audioElement.querySelector("source");
//   expect(sourceElement).toHaveAttribute("src", "http://m8.music.126.net/20230330075439/e22705428ede9bcce7df7dd16b91bd28/ymusic/0fd6/4f65/43ed/ab.mp3");
// });

// describe("getServerSideProps function", () => {
//   it("fetches the audio URL and returns it as props", async () => {

//     const props = await getServerSideProps();
//     expect(props).toEqual({ props: { audioUrl: mockData.data[0].url } });
//   });
// });
