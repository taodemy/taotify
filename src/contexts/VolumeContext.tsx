import { createContext, useEffect, useState } from "react";
import { VolumeParam } from "@/constant/volume";

interface VolumeContextType {
  volumeLevel: number;
  setVolumeLevel: React.Dispatch<React.SetStateAction<number>>;
  preMuteVolumeLevel: number;
  setPreMuteVolumeLevel: React.Dispatch<React.SetStateAction<number>>;
}

export const VolumeContext = createContext<VolumeContextType>({
  volumeLevel: VolumeParam.DEFAULT_VALUE,
  setVolumeLevel: () => {},
  preMuteVolumeLevel: VolumeParam.DEFAULT_VALUE,
  setPreMuteVolumeLevel: () => {},
});

interface Props {
  children: React.ReactNode;
}

export const VolumeContextProvider = ({ children }: Props) => {
  const [volumeLevel, setVolumeLevel] = useState<number>(VolumeParam.DEFAULT_VALUE);
  const [preMuteVolumeLevel, setPreMuteVolumeLevel] = useState<number>(VolumeParam.DEFAULT_VALUE);

  useEffect(() => {
    if (volumeLevel > VolumeParam.MAX_VOLUME) {
      setVolumeLevel(VolumeParam.MAX_VOLUME);
    }
    if (volumeLevel < VolumeParam.MIN_VOLUME) {
      setVolumeLevel(VolumeParam.MIN_VOLUME);
    }
  }, [volumeLevel]);

  useEffect(() => {
    if (preMuteVolumeLevel > VolumeParam.MAX_VOLUME) {
      setPreMuteVolumeLevel(VolumeParam.MAX_VOLUME);
    }
    if (preMuteVolumeLevel < VolumeParam.MIN_VOLUME) {
      setPreMuteVolumeLevel(VolumeParam.MIN_VOLUME);
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
