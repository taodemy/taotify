import "@testing-library/jest-dom";
import shuffleSongs from "@/utils/shuffleSongs";
import { mockPlayList } from "mockData/mockData";

describe("shuffleSongs function", () => {
  it("put the playing song at the first position", () => {
    const shuffledPlayList = shuffleSongs(mockPlayList, 1);
    expect(shuffledPlayList.songs[0].name).toBe("song2");
  });
});
