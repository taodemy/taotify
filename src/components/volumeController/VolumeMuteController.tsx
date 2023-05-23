import React, { useContext } from "react";
import { VolumeContext } from "@/contexts/VolumeContext";

export default function VolumeMuteController() {
  const { volumeLevel, setVolumeLevel, preMuteVolumeLevel } = useContext(VolumeContext);
  const handleClick = () => {
    const newVolumeLevel = volumeLevel === 0 ? preMuteVolumeLevel : 0;
    setVolumeLevel(newVolumeLevel);
  };
  return <button className="h-5 w-5 bg-light-100" onClick={handleClick}></button>;
}
