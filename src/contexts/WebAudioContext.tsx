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
  const [audioSource, setAudioSource] = useState<AudioBufferSourceNode | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  useEffect(() => {
    audioContextRef.current = new AudioContext();
    console.log(audioContextRef.current);
    return () => {
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
    };
  }, []);

  useEffect(() => {
    const audioContext = audioContextRef.current;
    console.log(audioContext);
    if (audioContext && audioSource) {
      gainNodeRef.current = audioContext.createGain();
      audioSource.connect(gainNodeRef.current);
      gainNodeRef.current.connect(audioContext.destination);
    }
  }, [audioSource]);
  return (
    <WebAudioContext.Provider
      value={{
        audioContext: audioContextRef.current,
        audioSource: audioSource,
        setAudioSource: setAudioSource,
        gainNode: gainNodeRef.current,
      }}
    >
      {children}
    </WebAudioContext.Provider>
  );
};
