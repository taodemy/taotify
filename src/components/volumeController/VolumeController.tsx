import React from "react";
import { VolumeContextProvider } from "@/contexts/VolumeContext";
import VolumeMuteController from "./VolumeMuteController";
import VolumeSlideController from "./VolumeSlideController";

export default function VolumeController() {
  return (
    <VolumeContextProvider>
      <div className="flex gap-2 absolute right-10 bottom-5">
        <VolumeMuteController />
        <VolumeSlideController />
      </div>
    </VolumeContextProvider>
  );
}
