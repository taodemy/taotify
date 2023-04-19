const volumeUtils = {
  calculateVolume: (progressWidth: number, slideWidth: number): number => {
    let newVolumeLevel = (progressWidth / slideWidth) * 100;
    newVolumeLevel = newVolumeLevel < 0 ? 0 : newVolumeLevel;
    newVolumeLevel = newVolumeLevel > 100 ? 100 : newVolumeLevel;
    return newVolumeLevel;
  },
};

export default volumeUtils;
