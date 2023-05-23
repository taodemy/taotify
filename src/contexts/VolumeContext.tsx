import { createContext, useState } from "react";

interface VolumeContextType {
  volumeLevel: number;
  setVolumeLevel: React.Dispatch<React.SetStateAction<number>>;
  preMuteVolumeLevel: number;
  setPreMuteVolumeLevel: React.Dispatch<React.SetStateAction<number>>;
}

export const VolumeContext = createContext<VolumeContextType>({
  volumeLevel: 50,
  setVolumeLevel: () => {},
  preMuteVolumeLevel: 50,
  setPreMuteVolumeLevel: () => {},
});

interface Props {
  children: React.ReactNode;
}

export const VolumeContextProvider = ({ children }: Props) => {
  const [volumeLevel, setVolumeLevel] = useState<number>(50);
  const [preMuteVolumeLevel, setPreMuteVolumeLevel] = useState<number>(50);

  return (
    <VolumeContext.Provider
      value={{ volumeLevel, setVolumeLevel, preMuteVolumeLevel, setPreMuteVolumeLevel }}
    >
      {children}
    </VolumeContext.Provider>
  );
};
