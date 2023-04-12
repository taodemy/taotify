import React, { useContext, useRef } from "react";
import volumeUtils from "@/utils/volumeUtils/volumeUtils";
import { VolumeContext } from "@/contexts/VolumeContext";

export default function VolumeSlideController() {
  const halfThumb = (5 * 0.25) / 2;
  const { volumeLevel, setVolumeLevel, backtrackVolumeLevel, setBacktrackVolumeLevel } =
    useContext(VolumeContext);
  const volumeSlider = useRef<HTMLDivElement>(null);
  const handleDragSlideStart = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    document.addEventListener("mousemove", handleDragSlideMove);
    document.addEventListener("mouseup", handleDragSlideEnd);
  };
  const handleDragSlideMove = (event: MouseEvent) => {
    const newVolumeLevel = updateVolumeLevel(event);
    setVolumeLevel(newVolumeLevel);
    if (newVolumeLevel > backtrackVolumeLevel) {
      setBacktrackVolumeLevel(newVolumeLevel);
    }
  };
  const handleDragSlideEnd = (event: MouseEvent) => {
    const newVolumeLevel = updateVolumeLevel(event);
    if (newVolumeLevel > 0 && newVolumeLevel <= 100) {
      setBacktrackVolumeLevel(newVolumeLevel);
    }
    document.removeEventListener("mousemove", handleDragSlideMove);
    document.removeEventListener("mouseup", handleDragSlideEnd);
  };
  const updateVolumeLevel = (event: MouseEvent | React.MouseEvent<HTMLDivElement>): number => {
    let newVolumeLevel = 0;
    if (volumeSlider.current) {
      const rect = volumeSlider.current!.getBoundingClientRect();
      const width = event.clientX - rect.left;
      newVolumeLevel = volumeUtils.calculateVolume(width, rect.width);
    }
    return newVolumeLevel;
  };
  return (
    <div className={`w-52 mx-auto`} data-testid="volumeSlideContainer">
      <div
        ref={volumeSlider}
        className={`relative h-5 rounded cursor-pointer bg-primary-100`}
        onMouseDown={handleDragSlideStart}
        data-testid="volumeSlideBar"
      >
        <div
          className="absolute inset-y-0 bg-primary-400"
          style={{ width: `${volumeLevel}%` }}
          data-testid="volumeSlideProgress"
        ></div>
        <div
          className={`absolute w-5 h-5 rounded-full bg-primary-200 top-1/2 transform -translate-y-1/2 cursor-pointer`}
          style={{ left: `calc(${volumeLevel}% - ${halfThumb}rem)` }}
          data-testid="volumeSlideThumb"
        ></div>
      </div>
    </div>
  );
}
