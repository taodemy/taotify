import React from "react";
import { render } from "@testing-library/react";
import { MusicContextProvider, MusicContext } from "../contexts/MusicContext";
import "@testing-library/jest-dom/extend-expect";

test("provides default values", () => {
  const defaultValues = {
    musicList: [],
    setMusicList: expect.any(Function),
    noResourceAlert: false,
    setNoResourceAlert: expect.any(Function),
  };
  const { getByTestId } = render(
    <MusicContextProvider value={{}}>
      <div data-testid="child" />
    </MusicContextProvider>
  );
  expect(getByTestId("child")).toBeInTheDocument();
  expect(MusicContext._currentValue).toEqual(defaultValues);
});
