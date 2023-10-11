import "@testing-library/jest-dom";
import { getAudioBuffer } from "@/utils/getAudioBuffer";

describe("loadSong utils", () => {
  describe("getAudioBuffer", () => {
    it("should fetch audio data successfully", async () => {
      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        arrayBuffer: jest.fn().mockResolvedValue("mocked audio data"),
      });

      const mp3Url = "http://example.com/audio.mp3";
      const result = await getAudioBuffer(mp3Url);

      expect(result.status).toBe(true);
      expect(result.audioBuffer).toBe("mocked audio data");
    });

    it("should handle failed audio data fetch", async () => {
      global.fetch = jest.fn().mockResolvedValue({
        ok: false,
      });

      const mp3Url = "http://test.com/test.mp3";
      const result = await getAudioBuffer(mp3Url);

      expect(result.status).toBe(false);
      expect(result.audioBuffer).toBe(null);
    });
  });
});
