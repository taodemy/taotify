import "@testing-library/jest-dom";
import shuffleSongs from "@/utils/shuffleSongs";
import { mockMusicList } from "mockData/mockData";

describe("shuffleSongs function", () => {
  it("put the playing song at the first position", () => {
    const shuffledMusicList = shuffleSongs(mockMusicList, 1);
    expect(shuffledMusicList.musicContext[0].song.name).toBe("song2");
  });
});
