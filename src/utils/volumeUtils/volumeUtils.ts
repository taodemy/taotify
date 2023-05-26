import { VolumeParam } from "@/constant/volume";
const volumeUtils = {
  calculateVolume: (progressWidth: number, slideWidth: number): number => {
    let newVolumeLevel = (progressWidth / slideWidth) * 100;
    newVolumeLevel =
      newVolumeLevel < VolumeParam.MIN_VOLUME ? VolumeParam.MIN_VOLUME : newVolumeLevel;
    newVolumeLevel =
      newVolumeLevel > VolumeParam.MAX_VOLUME ? VolumeParam.MAX_VOLUME : newVolumeLevel;
    return newVolumeLevel;
  },
};

export default volumeUtils;
