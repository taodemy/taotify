import { createContext, useEffect, useState } from "react";
import { volumeParam } from "@/constant/volume";

interface VolumeContextType {
  volumeLevel: number;
  setVolumeLevel: React.Dispatch<React.SetStateAction<number>>;
  preMuteVolumeLevel: number;
  setPreMuteVolumeLevel: React.Dispatch<React.SetStateAction<number>>;
}

export const VolumeContext = createContext<VolumeContextType>({
  volumeLevel: volumeParam.defaultVolume,
  setVolumeLevel: () => {},
  preMuteVolumeLevel: volumeParam.defaultVolume,
  setPreMuteVolumeLevel: () => {},
});

interface Props {
  children: React.ReactNode;
}

export const VolumeContextProvider = ({ children }: Props) => {
  const [volumeLevel, setVolumeLevel] = useState<number>(volumeParam.defaultVolume);
  const [preMuteVolumeLevel, setPreMuteVolumeLevel] = useState<number>(volumeParam.defaultVolume);

  useEffect(() => {
    if (volumeLevel > volumeParam.maxVolume) {
      setVolumeLevel(volumeParam.maxVolume);
    }
    if (volumeLevel < volumeParam.minVolume) {
      setVolumeLevel(volumeParam.minVolume);
    }
  }, [volumeLevel]);

  useEffect(() => {
    if (preMuteVolumeLevel > volumeParam.maxVolume) {
      setPreMuteVolumeLevel(volumeParam.maxVolume);
    }
    if (preMuteVolumeLevel < volumeParam.minVolume) {
      setPreMuteVolumeLevel(volumeParam.minVolume);
    }
  }, [preMuteVolumeLevel]);

  return (
    <VolumeContext.Provider
      value={{ volumeLevel, setVolumeLevel, preMuteVolumeLevel, setPreMuteVolumeLevel }}
    >
      {children}
    </VolumeContext.Provider>
  );
};
