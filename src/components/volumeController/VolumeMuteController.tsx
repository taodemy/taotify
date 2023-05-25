import React, { useContext } from "react";
import { VolumeContext } from "@/contexts/VolumeContext";
import { volumeParam } from "@/constant/volume";

export default function VolumeMuteController() {
  const { volumeLevel, setVolumeLevel, preMuteVolumeLevel } = useContext(VolumeContext);
  const handleClick = () => {
    const newVolumeLevel =
      volumeLevel === volumeParam.minVolume ? preMuteVolumeLevel : volumeParam.minVolume;
    setVolumeLevel(newVolumeLevel);
  };
  return <button className="h-5 w-5 bg-light-100" onClick={handleClick}></button>;
}
