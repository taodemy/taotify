import React from "react";
import { VolumeContextProvider } from "@/contexts/VolumeContext";
import VolumeMuteController from "./VolumeMuteController";
import VolumeSlideController from "./VolumeSlideController";

export default function VolumeController() {
  return (
    <div className="right-50 absolute top-20 flex gap-2">
      <VolumeMuteController />
      <VolumeSlideController />
    </div>
  );
}
