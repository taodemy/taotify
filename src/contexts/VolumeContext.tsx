import { createContext, useEffect, useState } from "react";
import { VolumeParam } from "@/constant/volume";

interface VolumeContextType {
  volumeLevel: number;
  setVolumeLevel: React.Dispatch<React.SetStateAction<number>>;
  preMuteVolumeLevel: number;
  setPreMuteVolumeLevel: React.Dispatch<React.SetStateAction<number>>;
}

export const VolumeContext = createContext<VolumeContextType>({
  volumeLevel: VolumeParam.defaultVolume,
  setVolumeLevel: () => {},
  preMuteVolumeLevel: VolumeParam.defaultVolume,
  setPreMuteVolumeLevel: () => {},
});

interface Props {
  children: React.ReactNode;
}

export const VolumeContextProvider = ({ children }: Props) => {
  const [volumeLevel, setVolumeLevel] = useState<number>(VolumeParam.defaultVolume);
  const [preMuteVolumeLevel, setPreMuteVolumeLevel] = useState<number>(VolumeParam.defaultVolume);

  useEffect(() => {
    if (volumeLevel > VolumeParam.maxVolume) {
      setVolumeLevel(VolumeParam.maxVolume);
    }
    if (volumeLevel < VolumeParam.minVolume) {
      setVolumeLevel(VolumeParam.minVolume);
    }
  }, [volumeLevel]);

  useEffect(() => {
    if (preMuteVolumeLevel > VolumeParam.maxVolume) {
      setPreMuteVolumeLevel(VolumeParam.maxVolume);
    }
    if (preMuteVolumeLevel < VolumeParam.minVolume) {
      setPreMuteVolumeLevel(VolumeParam.minVolume);
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
