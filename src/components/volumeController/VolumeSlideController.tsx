import React, { useContext, useRef } from "react";
import volumeUtils from "@/utils/volumeUtils/volumeUtils";
import { VolumeContext } from "@/contexts/VolumeContext";
import { VolumeParam } from "@/constant/volume";

export default function VolumeSlideController() {
  const halfThumb = (5 * 0.25) / 2;
  const { volumeLevel, setVolumeLevel, preMuteVolumeLevel, setPreMuteVolumeLevel } =
    useContext(VolumeContext);
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
    if (newVolumeLevel > preMuteVolumeLevel) {
      setPreMuteVolumeLevel(newVolumeLevel);
    }
  };
  const handleDragSlideEnd = (event: MouseEvent) => {
    const newVolumeLevel = updateVolumeLevel(event);
    if (newVolumeLevel > VolumeParam.minVolume && newVolumeLevel <= VolumeParam.maxVolume) {
      setPreMuteVolumeLevel(newVolumeLevel);
    }
    document.removeEventListener("mousemove", handleDragSlideMove);
    document.removeEventListener("mouseup", handleDragSlideEnd);
  };
  const updateVolumeLevel = (event: MouseEvent | React.MouseEvent<HTMLDivElement>): number => {
    let newVolumeLevel = VolumeParam.minVolume;
    if (volumeSlider.current) {
      const rect = volumeSlider.current.getBoundingClientRect();
      const width = event.clientX - rect.left;
      newVolumeLevel = volumeUtils.calculateVolume(width, rect.width);
    }
    return newVolumeLevel;
  };
  return (
    <div className={`right-10 bottom-5 mx-auto w-52`} data-testid="volumeSlideContainer">
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
