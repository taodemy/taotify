import MusicListItem from "@/components/MusicListItem";
import { mockPlayList } from "mockData/mockData";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { MusicContextProvider } from "@/contexts/MusicContext";
import MusicPlayer from "@/layouts/MusicPlayer";
import "@testing-library/jest-dom";

const renderComponentsWithDefaultContext = () => {
  return render(
    <MusicContextProvider>
      <MusicListItem musicList={mockPlayList} />
      <MusicPlayer />
    </MusicContextProvider>
  );
};

describe("MusicListItem test", () => {
  it("should render music list item in success", async () => {
    renderComponentsWithDefaultContext();
    const image = screen.getByAltText("song1");
    fireEvent.click(image);

    const audio = screen.getByRole("audio");
    expect(audio).toHaveAttribute("src", "url1");
    expect(screen.getByRole("pauseButton")).toBeInTheDocument();

    // fireEvent.mouseEnter(screen.getByTestId("playlist-image"));
    // await waitFor(() => screen.getByTestId("playlist-image"));
    // expect(screen.getByRole("albumPauseIcon")).toBeInTheDocument();
  });
});
