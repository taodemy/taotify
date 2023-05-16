import React, { createContext, useState } from "react";
import { MusicList } from "types";

interface MusicContextProps {
  playingIndex: number;
  setPlayingIndex: React.Dispatch<React.SetStateAction<number>>;
  playingQueue: MusicList | null;
  setPlayingQueue: React.Dispatch<React.SetStateAction<MusicList | null>>;
  noResourceAlert: boolean;
  setNoResourceAlert: React.Dispatch<React.SetStateAction<boolean>>;
  isPlaying: boolean;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  audioContext: AudioContext | null;
  setAudioContext: React.Dispatch<React.SetStateAction<AudioContext | null>>;
  gainNode: GainNode | null;
  setGainNode: React.Dispatch<React.SetStateAction<GainNode | null>>;
  audioSource: AudioBufferSourceNode | null;
  setAudioSource: React.Dispatch<React.SetStateAction<AudioBufferSourceNode | null>>;
}

const defaultValues = {
  playingIndex: -1,
  setPlayingIndex: () => {},
  playingQueue: null,
  setPlayingQueue: () => {},
  noResourceAlert: false,
  setNoResourceAlert: () => {},
  isPlaying: false,
  setIsPlaying: () => {},
  audioContext: null,
  setAudioContext: () => {},
  gainNode: null,
  setGainNode: () => {},
  audioSource: null,
  setAudioSource: () => {},
};

export const MusicContext = createContext<MusicContextProps>(defaultValues);

interface Props {
  index?: number;
  queue?: MusicList | null;
  alert?: false;
  children: React.ReactNode;
}

export const MusicContextProvider = ({
  children,
  index = -1,
  queue = null,
  alert = false,
}: Props) => {
  const [playingIndex, setPlayingIndex] = useState(index);
  const [playingQueue, setPlayingQueue] = useState<MusicList | null>(queue);
  const [noResourceAlert, setNoResourceAlert] = useState<boolean>(alert);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [audioContext, setAudioContext] = useState<AudioContext | null>(null);
  const [gainNode, setGainNode] = useState<GainNode | null>(null);
  const [audioSource, setAudioSource] = useState<AudioBufferSourceNode | null>(null);

  return (
    <MusicContext.Provider
      value={{
        playingIndex,
        setPlayingIndex,
        playingQueue,
        setPlayingQueue,
        noResourceAlert,
        setNoResourceAlert,
        isPlaying,
        setIsPlaying,
        audioContext,
        setAudioContext,
        gainNode,
        setGainNode,
        audioSource,
        setAudioSource,
      }}
    >
      {children}
    </MusicContext.Provider>
  );
};
