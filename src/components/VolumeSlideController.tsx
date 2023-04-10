import React, { useRef, useState } from "react";
import volumeUtils from "@/utils/volumeUtils/volumeUtils";

export default function VolumeSlideController() {
  const halfThumb = (5 * 0.25) / 2;
  const [volumeLevel, setVolumeLevel] = useState<number>(50);
  const volumeSlider = useRef<HTMLDivElement>(null);
  const handleDragSlideStart = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    document.addEventListener("mousemove", handleDragSlideMove);
    document.addEventListener("mouseup", handleDragSlideEnd);
  };
  const handleDragSlideMove = (event: MouseEvent | React.MouseEvent<HTMLDivElement>) => {
    const rect = volumeSlider.current!.getBoundingClientRect();
    const width = event.clientX - rect.left;
    const newVolumeLevel = volumeUtils.calculateVolume(width, rect.width);
    setVolumeLevel(newVolumeLevel);
  };
  const handleDragSlideEnd = () => {
    document.removeEventListener("mousemove", handleDragSlideMove);
    document.removeEventListener("mouseup", handleDragSlideEnd);
  };
  return (
    <div className={`w-52 absolute right-10 bottom-5 mx-auto`} data-testid="volumeSlideContainer">
      <div
        ref={volumeSlider}
        className={`relative h-5 rounded cursor-pointer bg-primary-100`}
        onClick={handleDragSlideMove}
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
          onMouseDown={handleDragSlideStart}
          data-testid="volumeSlideThumb"
        ></div>
      </div>
    </div>
  );
}
