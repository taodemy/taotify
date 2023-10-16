import { render, screen } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";
import { AudioContext, AudioContextProvider } from "@/contexts/AudioContext";

describe("VolumeContext", () => {
  it("should provide correct volume context values", () => {
    const TestComponent = () => {
      const context = React.useContext(AudioContext);
      return (
        <div>
          <p>VolumeLevel: {context.volumeLevel}</p>
          <p>BacktrackVolumeLevel: {context.preMuteVolumeLevel}</p>
        </div>
      );
    };
    render(
      <AudioContextProvider>
        <TestComponent />
      </AudioContextProvider>
    );
    expect(screen.getByText("VolumeLevel: 50")).toBeInTheDocument();
    expect(screen.getByText("BacktrackVolumeLevel: 50")).toBeInTheDocument();
  });
});
