import React, { useContext } from "react";
import { VolumeContext } from "@/contexts/VolumeContext";
import { VolumeParam } from "@/constant/volume";

export default function VolumeMuteController() {
  const { volumeLevel, setVolumeLevel, preMuteVolumeLevel } = useContext(VolumeContext);
  const handleClick = () => {
    const newVolumeLevel =
      volumeLevel === VolumeParam.minVolume ? preMuteVolumeLevel : VolumeParam.minVolume;
    setVolumeLevel(newVolumeLevel);
  };
  return <button className="h-5 w-5 bg-light-100" onClick={handleClick}></button>;
}
