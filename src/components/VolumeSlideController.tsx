import React, { useRef, useState } from "react";

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
    if (!volumeSlider.current) {
      return;
    }
    const rect = volumeSlider.current.getBoundingClientRect();
    const width = event.clientX - rect.left;
    let newVolumeLevel = (width / rect.width) * 100;
    newVolumeLevel = newVolumeLevel < 0 ? 0 : newVolumeLevel;
    newVolumeLevel = newVolumeLevel > 100 ? 100 : newVolumeLevel;
    setVolumeLevel(newVolumeLevel);
  };
  const handleDragSlideEnd = () => {
    document.removeEventListener("mousemove", handleDragSlideMove);
    document.removeEventListener("mouseup", handleDragSlideEnd);
  };
  return (
    <div className={`w-52 absolute right-10 bottom-5 mx-auto`}>
      <div
        ref={volumeSlider}
        className={`relative h-5 rounded cursor-pointer bg-primary-100`}
        onClick={handleDragSlideMove}
      >
        <div
          className="absolute inset-y-0 bg-primary-400"
          style={{ width: `${volumeLevel}%` }}
        ></div>
        <div
          className={`absolute w-5 h-5 rounded-full bg-primary-200 top-1/2 transform -translate-y-1/2 cursor-pointer`}
          style={{ left: `calc(${volumeLevel}% - ${halfThumb}rem)` }}
          onMouseDown={handleDragSlideStart}
        ></div>
      </div>
    </div>
  );
}
