import React, { createContext, useEffect, useRef, useState } from "react";

interface WebAudioContextProps {
  audioContext: AudioContext | null;
  audioSource: AudioBufferSourceNode | null;
  setAudioSource: React.Dispatch<React.SetStateAction<AudioBufferSourceNode | null>>;
  gainNode: GainNode | null;
  analyserNode: AnalyserNode | null;
}

const defaultValues = {
  audioContext: null,
  audioSource: null,
  setAudioSource: () => {},
  gainNode: null,
  analyserNode: null,
};

export const WebAudioContext = createContext<WebAudioContextProps>(defaultValues);

interface Props {
  children: React.ReactNode;
}

export const WebAudioContextProvider = ({ children }: Props) => {
  const [isInitialized, setIsInitialized] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);
  // const [audioContext, setAudioContext] = useState<AudioContext | null>(null);
  const [audioSource, setAudioSource] = useState<AudioBufferSourceNode | null>(null);
  // const [gainNode, setGainNode] = useState<GainNode | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const analyserNodeRef = useRef<AnalyserNode | null>(null);
  useEffect(() => {
    if (typeof window !== "undefined") {
      audioContextRef.current = new AudioContext();
      gainNodeRef.current = audioContextRef.current.createGain();
      analyserNodeRef.current = audioContextRef.current.createAnalyser();
      analyserNodeRef.current.connect(gainNodeRef.current);
      gainNodeRef.current.connect(audioContextRef.current.destination);
      setIsInitialized(true);
    }
    return () => {
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
    };
  }, []);

  useEffect(() => {
    console.log(audioContextRef.current);
    if (audioContextRef.current && analyserNodeRef.current && gainNodeRef.current && audioSource) {
      try {
        audioSource.connect(analyserNodeRef.current);
      } catch (err) {
        console.log(err);
      }
    }
  }, [audioSource]);

  if (!isInitialized) {
    return null;
  }

  return (
    <WebAudioContext.Provider
      value={{
        audioContext: audioContextRef.current,
        audioSource: audioSource,
        setAudioSource: setAudioSource,
        gainNode: gainNodeRef.current,
        analyserNode: analyserNodeRef.current,
      }}
    >
      {children}
    </WebAudioContext.Provider>
  );
};
