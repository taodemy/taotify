import songListFilter from "@/utils/songListFilter";
import { tracks, urls, tracksWithUrl } from "../../mockData/mockData";

describe("songListFilter", () => {
  it("returns only new songs with urls", () => {
    expect(songListFilter(urls, tracks)).toEqual(tracksWithUrl);
  });
});
