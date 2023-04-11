import VolumeController from "@/components/volumeController/VolumeController";
import React from "react";

export default function MusicPlayer() {
  return (
    <div className=" w-[100vw] h-[100px] bg-secondary-100 fixed bottom-0 left-0 border-2">
      Music Player
      <VolumeController />
    </div>
  );
}
