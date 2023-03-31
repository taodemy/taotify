import { rest } from "msw";

const handlers = [
  rest.get(
    `${process.env.NEXT_MUSIC_SERVER_ADDRESS}/song/url/v1?id=33894312&level=exhigh`,
    (req, res, ctx) => {
      const mockApiResponse = {
        data: [
          {
            url: "http://m8.music.126.net/20230330075439/e22705428ede9bcce7df7dd16b91bd28/ymusic/0fd6/4f65/43ed/ab.mp3",
          },
        ],
      };
      return res(ctx.json(mockApiResponse));
    }
  ),
];

export { handlers };
