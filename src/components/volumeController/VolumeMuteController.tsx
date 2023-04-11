import React, { useContext } from "react";
import { VolumeContext } from "@/contexts/VolumeContext";

export default function VolumeMuteController() {
  const { volumeLevel, setVolumeLevel, backtrackVolumeLevel } = useContext(VolumeContext);
  const handleClick = () => {
    if (volumeLevel > 0 && volumeLevel <= 100) {
      setVolumeLevel(0);
      return;
    }
    if (volumeLevel === 0) {
      setVolumeLevel(backtrackVolumeLevel);
      return;
    }
  };
  return <button className="w-5 h-5 bg-light-100" onClick={handleClick}></button>;
}
