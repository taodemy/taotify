import React, { createContext, useEffect, useState, useRef } from "react";

interface WebAudioContextProps {
  audioContext: AudioContext | null;
  audioSource: AudioBufferSourceNode | null;
  setAudioSource: React.Dispatch<React.SetStateAction<AudioBufferSourceNode | null>>;
  gainNode: GainNode | null;
}

const defaultValues = {
  audioContext: null,
  audioSource: null,
  setAudioSource: () => {},
  gainNode: null,
};

export const WebAudioContext = createContext<WebAudioContextProps>(defaultValues);

interface Props {
  children: React.ReactNode;
}

export const WebAudioContextProvider = ({ children }: Props) => {
  const audioContextRef = useRef<AudioContext | null>(null);
  const audioContext = audioContextRef.current;
  const [audioSource, setAudioSource] = useState<AudioBufferSourceNode | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const gainNode = gainNodeRef.current;
  useEffect(() => {
    audioContextRef.current = new AudioContext();
    console.log(audioContext);
    return () => {
      if (audioContext) {
        audioContext.close();
      }
    };
  }, []);

  useEffect(() => {
    if (audioContext && audioSource) {
      gainNodeRef.current = audioContext.createGain();
      audioSource.connect(gainNodeRef.current);
      gainNodeRef.current.connect(audioContext.destination);
    }
  }, [audioSource]);
  return (
    <WebAudioContext.Provider
      value={{
        audioContext,
        audioSource,
        setAudioSource,
        gainNode,
      }}
    >
      {children}
    </WebAudioContext.Provider>
  );
};
