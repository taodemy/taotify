import { render, fireEvent, screen } from "@testing-library/react";
import volumeUtils from "../../src/utils/volumeUtils/volumeUtils";
import "@testing-library/jest-dom";

describe("volumeUtils", () => {
  describe("calculateVolume", () => {
    it("should return the correct volume level when volume level is greater than or equal to 0 and is smaller than or equal to 100", () => {
      const progressWidth = 50;
      const slideWidth = 100;
      const expectedVolumeLevel = 50;
      const result = volumeUtils.calculateVolume(progressWidth, slideWidth);
      expect(result).toBe(expectedVolumeLevel);
    });
  });

  describe("calculateVolume", () => {
    it("should return the correct volume level when volume level is greater than 100", () => {
      const progressWidth = 101;
      const slideWidth = 100;
      const expectedVolumeLevel = 100;
      const result = volumeUtils.calculateVolume(progressWidth, slideWidth);
      expect(result).toBe(expectedVolumeLevel);
    });
  });

  describe("calculateVolume", () => {
    it("should return the correct volume level when volume level is smaller than 0", () => {
      const progressWidth = -3;
      const slideWidth = 100;
      const expectedVolumeLevel = 0;
      const result = volumeUtils.calculateVolume(progressWidth, slideWidth);
      expect(result).toBe(expectedVolumeLevel);
    });
  });
});
