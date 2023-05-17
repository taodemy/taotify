import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Albums from "@/components/Albums";
import { mockMusicList } from "mockData/mockData";

describe("", () => {
  beforeEach(() => {
    render(<Albums area="ZH" albums={[mockMusicList]} />);
  });

  it("should render albums area", () => {
    const area = screen.getByText(/china/i);
    expect(area).toBeInTheDocument();
  });
});
