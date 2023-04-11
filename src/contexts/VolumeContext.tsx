import { createContext, useState } from "react";

interface VolumeContextType {
  volumeLevel: number;
  setVolumeLevel: React.Dispatch<React.SetStateAction<number>>;
  backtrackVolumeLevel: number;
  setBacktrackVolumeLevel: React.Dispatch<React.SetStateAction<number>>;
}

export const VolumeContext = createContext<VolumeContextType>({
  volumeLevel: 50,
  setVolumeLevel: () => {},
  backtrackVolumeLevel: 50,
  setBacktrackVolumeLevel: () => {},
});

interface Props {
  children: React.ReactNode;
}

export const VolumeContextProvider = ({ children }: Props) => {
  const [volumeLevel, setVolumeLevel] = useState<number>(50);
  const [backtrackVolumeLevel, setBacktrackVolumeLevel] = useState<number>(50);

  return (
    <VolumeContext.Provider
      value={{ volumeLevel, setVolumeLevel, backtrackVolumeLevel, setBacktrackVolumeLevel }}
    >
      {children}
    </VolumeContext.Provider>
  );
};
