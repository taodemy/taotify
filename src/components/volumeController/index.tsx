import React, { useContext, useEffect } from "react";
import VolumeMuteController from "./VolumeMuteController";
import VolumeSlideController from "./VolumeSlideController";
import { VolumeContext } from "@/contexts/VolumeContext";
import { WebAudioContext } from "@/contexts/WebAudioContext";

export default function VolumeController() {
  const { volumeLevel } = useContext(VolumeContext);
  const { gainNode } = useContext(WebAudioContext);
  useEffect(() => {
    if (gainNode) {
      gainNode.gain.value = volumeLevel * 0.01;
    }
  }, [volumeLevel]);
  return (
    <div className="right-50 absolute top-20 flex gap-2">
      <VolumeMuteController />
      <VolumeSlideController />
    </div>
  );
}
