import React from "react";
import VolumeSlideController from "@/components/VolumeSlideController";

export default function MusicPlayer() {
  return (
    <div className=" w-[100vw] h-[100px] bg-secondary-100 fixed bottom-0 left-0 border-2">
      Music Player
      <VolumeSlideController widthUnit={72} heightUnit={5} />
    </div>
  );
}
