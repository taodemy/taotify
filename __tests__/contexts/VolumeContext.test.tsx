import { render, screen } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";
import { VolumeContext, VolumeContextProvider } from "@/contexts/VolumeContext";

describe("VolumeContext", () => {
  it("should provide correct volume context values", () => {
    const TestComponent = () => {
      const context = React.useContext(VolumeContext);
      return (
        <div>
          <p>VolumeLevel: {context.volumeLevel}</p>
          <p>BacktrackVolumeLevel: {context.backtrackVolumeLevel}</p>
        </div>
      );
    };
    render(
      <VolumeContextProvider>
        <TestComponent />
      </VolumeContextProvider>
    );
    expect(screen.getByText("VolumeLevel: 50")).toBeInTheDocument();
    expect(screen.getByText("BacktrackVolumeLevel: 50")).toBeInTheDocument();
  });
});
