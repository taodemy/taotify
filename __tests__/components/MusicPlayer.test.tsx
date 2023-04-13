import React from "react";
import MusicPlayer from "@/layouts/MusicPlayer";
import { render, screen } from "@testing-library/react";

// const mockMusicData: Song = {};

describe("Music Player Component", () => {
  beforeEach(() => {
    render(<MusicPlayer />);
  });

  it("should render music player component in success", () => {});
});
