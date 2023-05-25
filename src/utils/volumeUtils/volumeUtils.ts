import { volumeParam } from "@/constant/volume";
const volumeUtils = {
  calculateVolume: (progressWidth: number, slideWidth: number): number => {
    let newVolumeLevel = (progressWidth / slideWidth) * 100;
    newVolumeLevel =
      newVolumeLevel < volumeParam.minVolume ? volumeParam.minVolume : newVolumeLevel;
    newVolumeLevel =
      newVolumeLevel > volumeParam.maxVolume ? volumeParam.maxVolume : newVolumeLevel;
    return newVolumeLevel;
  },
};

export default volumeUtils;
