import { VolumeParam } from "@/constant/volume";
const volumeUtils = {
  calculateVolume: (progressWidth: number, slideWidth: number): number => {
    let newVolumeLevel = (progressWidth / slideWidth) * 100;
    newVolumeLevel =
      newVolumeLevel < VolumeParam.minVolume ? VolumeParam.minVolume : newVolumeLevel;
    newVolumeLevel =
      newVolumeLevel > VolumeParam.maxVolume ? VolumeParam.maxVolume : newVolumeLevel;
    return newVolumeLevel;
  },
};

export default volumeUtils;
