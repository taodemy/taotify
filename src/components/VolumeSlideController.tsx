import React, { useRef, useState } from "react";
import volumeUtils from "@/utils/volumeUtils/volumeUtils";

export default function VolumeSlideController() {
  const halfThumb = (5 * 0.25) / 2;
  const [volumeLevel, setVolumeLevel] = useState<number>(50);
  const volumeSlider = useRef<HTMLDivElement>(null);
  const handleDragSlideStart = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    const newVolumeLevel = updateVolumeLevel(event);
    setVolumeLevel(newVolumeLevel);
    document.addEventListener("mousemove", handleDragSlideMove);
    document.addEventListener("mouseup", handleDragSlideEnd);
  };
  const handleDragSlideMove = (event: MouseEvent) => {
    const newVolumeLevel = updateVolumeLevel(event);
    setVolumeLevel(newVolumeLevel);
  };
  const handleDragSlideEnd = () => {
    document.removeEventListener("mousemove", handleDragSlideMove);
    document.removeEventListener("mouseup", handleDragSlideEnd);
  };
  const updateVolumeLevel = (event: MouseEvent | React.MouseEvent<HTMLDivElement>) => {
    let newVolumeLevel = 0;
    if (volumeSlider.current) {
      const rect = volumeSlider.current.getBoundingClientRect();
      const width = event.clientX - rect.left;
      newVolumeLevel = volumeUtils.calculateVolume(width, rect.width);
    }
    return newVolumeLevel;
  };
  return (
    <div className={`absolute right-10 bottom-5 mx-auto w-52`} data-testid="volumeSlideContainer">
      <div
        ref={volumeSlider}
        className={`relative h-5 cursor-pointer rounded bg-primary-100`}
        onMouseDown={handleDragSlideStart}
        data-testid="volumeSlideBar"
      >
        <div
          className="absolute inset-y-0 bg-primary-400"
          style={{ width: `${volumeLevel}%` }}
          data-testid="volumeSlideProgress"
        ></div>
        <div
          className={`absolute top-1/2 h-5 w-5 -translate-y-1/2 transform cursor-pointer rounded-full bg-primary-200`}
          style={{ left: `calc(${volumeLevel}% - ${halfThumb}rem)` }}
          data-testid="volumeSlideThumb"
        ></div>
      </div>
    </div>
  );
}
