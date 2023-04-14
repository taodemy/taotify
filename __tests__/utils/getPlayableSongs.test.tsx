import getPlayableSongs from "@/utils/getPlayableSongs";
import { mockSongs, mockUrls } from "../../mockData/mockData";

describe("get playable songs", () => {
  it("returns only songs with urls", () => {
    expect(mockSongs).toHaveLength(3);
    const playableSongs = getPlayableSongs(mockUrls, mockSongs);
    expect(playableSongs).toHaveLength(2);
  });
});
