import React, { createContext, useEffect, useRef, useState } from "react";

interface WebAudioContextProps {
  audioContext: AudioContext | null;
  audioSource: AudioBufferSourceNode | null;
  setAudioSource: React.Dispatch<React.SetStateAction<AudioBufferSourceNode | null>>;
  gainNode: GainNode | null;
  analyserNode: AnalyserNode | null;
  visualArr: Uint8Array | null;
  setVisualArr: React.Dispatch<React.SetStateAction<Uint8Array | null>>;
  audioData: number[] | null;
  setAudioData: React.Dispatch<React.SetStateAction<number[] | null>>;
}

const defaultValues = {
  audioContext: null,
  audioSource: null,
  setAudioSource: () => {},
  gainNode: null,
  analyserNode: null,
  visualArr: null,
  setVisualArr: () => {},
  audioData: null,
  setAudioData: () => {},
};

export const WebAudioContext = createContext<WebAudioContextProps>(defaultValues);

interface Props {
  children: React.ReactNode;
}

export const WebAudioContextProvider = ({ children }: Props) => {
  const [isInitialized, setIsInitialized] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);
  const [audioSource, setAudioSource] = useState<AudioBufferSourceNode | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const analyserNodeRef = useRef<AnalyserNode | null>(null);
  const [visualArr, setVisualArr] = useState<Uint8Array | null>(null);
  const [audioData, setAudioData] = useState<number[] | null>(null);
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
        setVisualArr(new Uint8Array(analyserNodeRef.current.frequencyBinCount));
      } catch (err) {
        return;
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
        visualArr: visualArr,
        setVisualArr: setVisualArr,
        audioData: audioData,
        setAudioData: setAudioData,
      }}
    >
      {children}
    </WebAudioContext.Provider>
  );
};
