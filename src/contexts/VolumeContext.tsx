import { createContext, useState } from "react";

const defaultVolume: number = 50;
interface VolumeContextType {
  volumeLevel: number;
  setVolumeLevel: React.Dispatch<React.SetStateAction<number>>;
  preMuteVolumeLevel: number;
  setPreMuteVolumeLevel: React.Dispatch<React.SetStateAction<number>>;
}

export const VolumeContext = createContext<VolumeContextType>({
  volumeLevel: defaultVolume,
  setVolumeLevel: () => {},
  preMuteVolumeLevel: defaultVolume,
  setPreMuteVolumeLevel: () => {},
});

interface Props {
  children: React.ReactNode;
}

export const VolumeContextProvider = ({ children }: Props) => {
  const [volumeLevel, setVolumeLevel] = useState<number>(defaultVolume);
  const [preMuteVolumeLevel, setPreMuteVolumeLevel] = useState<number>(defaultVolume);

  return (
    <VolumeContext.Provider
      value={{ volumeLevel, setVolumeLevel, preMuteVolumeLevel, setPreMuteVolumeLevel }}
    >
      {children}
    </VolumeContext.Provider>
  );
};
