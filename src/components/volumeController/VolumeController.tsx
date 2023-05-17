import React from "react";
import VolumeMuteController from "./VolumeMuteController";
import VolumeSlideController from "./VolumeSlideController";

export default function VolumeController() {
  return (
    <div className="absolute right-10 bottom-5 flex gap-2">
      <VolumeMuteController />
      <VolumeSlideController />
    </div>
  );
}
