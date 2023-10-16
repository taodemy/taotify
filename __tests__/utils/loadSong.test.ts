import "@testing-library/jest-dom";
import { getArrayBuffer } from "@/utils/getAudioBuffer";

describe("loadSong utils", () => {
  describe("getAudioBuffer", () => {
    it("should fetch audio data successfully", async () => {
      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        arrayBuffer: jest.fn().mockResolvedValue("mocked audio data"),
      });

      const mp3Url = "http://example.com/audio.mp3";
      const result = await getArrayBuffer(mp3Url);

      expect(result.status).toBe(true);
      expect(result.arrayBuffer).toBe("mocked audio data");
    });

    it("should handle failed audio data fetch", async () => {
      global.fetch = jest.fn().mockResolvedValue({
        ok: false,
      });

      const mp3Url = "http://test.com/test.mp3";
      const result = await getArrayBuffer(mp3Url);

      expect(result.status).toBe(false);
      expect(result.arrayBuffer).toBe(null);
    });
  });
});
