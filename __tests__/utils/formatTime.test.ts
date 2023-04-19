import "@testing-library/jest-dom";
import formatTime from "@/utils/formatTime";

describe("formatTime function", () => {
  it("should format time properly", () => {
    const time = 4178;
    const expectedFormattedTime = "1:09:38";
    const result = formatTime(time);
    expect(result).toBe(expectedFormattedTime);
  });
});
