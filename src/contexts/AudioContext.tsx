import { createContext, useEffect, useState } from "react";
import { VolumeParam } from "@/constant/volume";

interface AudioContextType {
  volumeLevel: number;
  setVolumeLevel: React.Dispatch<React.SetStateAction<number>>;
  preMuteVolumeLevel: number;
  setPreMuteVolumeLevel: React.Dispatch<React.SetStateAction<number>>;
  audioDuration: number;
  setAudioDuration: React.Dispatch<React.SetStateAction<number>>;
  audioStartTime: number;
  setAudioStartTime: React.Dispatch<React.SetStateAction<number>>;
  currentAudioTime: number;
  setCurrentAudioTime: React.Dispatch<React.SetStateAction<number>>;
}

export const AudioContext = createContext<AudioContextType>({
  volumeLevel: VolumeParam.DEFAULT_VALUE,
  setVolumeLevel: () => {},
  preMuteVolumeLevel: VolumeParam.DEFAULT_VALUE,
  setPreMuteVolumeLevel: () => {},
  audioDuration: 0,
  setAudioDuration: () => {},
  audioStartTime: 0,
  setAudioStartTime: () => {},
  currentAudioTime: 0,
  setCurrentAudioTime: () => {},
});

interface Props {
  children: React.ReactNode;
}

export const AudioContextProvider = ({ children }: Props) => {
  const [volumeLevel, setVolumeLevel] = useState<number>(VolumeParam.DEFAULT_VALUE);
  const [preMuteVolumeLevel, setPreMuteVolumeLevel] = useState<number>(VolumeParam.DEFAULT_VALUE);
  const [audioDuration, setAudioDuration] = useState<number>(0);
  const [audioStartTime, setAudioStartTime] = useState<number>(0);
  const [currentAudioTime, setCurrentAudioTime] = useState<number>(0);

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

  useEffect(() => {});
  return (
    <AudioContext.Provider
      value={{
        volumeLevel: volumeLevel,
        setVolumeLevel: setVolumeLevel,
        preMuteVolumeLevel: preMuteVolumeLevel,
        setPreMuteVolumeLevel: setPreMuteVolumeLevel,
        audioDuration: audioDuration,
        setAudioDuration: setAudioDuration,
        audioStartTime: audioStartTime,
        setAudioStartTime: setAudioStartTime,
        currentAudioTime: currentAudioTime,
        setCurrentAudioTime: setCurrentAudioTime,
      }}
    >
      {children}
    </AudioContext.Provider>
  );
};
