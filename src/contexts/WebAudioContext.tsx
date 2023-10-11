import React, { createContext, useEffect, useRef, useState } from "react";
import { FFT_SIZE, ARRAY_LENGTH } from "@/constant/visualizer";

interface WebAudioContextProps {
  audioContext: AudioContext | null;
  audioBuffer: AudioBuffer | null;
  setAudioBuffer: React.Dispatch<React.SetStateAction<AudioBuffer | null>>;
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
  audioBuffer: null,
  setAudioBuffer: () => {},
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
  const [audioBuffer, setAudioBuffer] = useState<AudioBuffer | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const analyserNodeRef = useRef<AnalyserNode | null>(null);
  const [audioSource, setAudioSource] = useState<AudioBufferSourceNode | null>(null);
  const [visualArr, setVisualArr] = useState<Uint8Array | null>(null);
  const [audioData, setAudioData] = useState<number[] | null>(null);

  const initWebAuidoContext = () => {
    audioContextRef.current = new AudioContext();
    gainNodeRef.current = audioContextRef.current.createGain();
    analyserNodeRef.current = audioContextRef.current.createAnalyser();
    analyserNodeRef.current.connect(gainNodeRef.current);
    analyserNodeRef.current.fftSize = FFT_SIZE;
    gainNodeRef.current.connect(audioContextRef.current.destination);
    setAudioSource(audioContextRef.current.createBufferSource());
    setIsInitialized(true);
    return () => {
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
    };
  };

  useEffect(() => {
    initWebAuidoContext();
  }, []);

  if (!isInitialized) {
    return null;
  }

  return (
    <WebAudioContext.Provider
      value={{
        audioContext: audioContextRef.current,
        audioBuffer: audioBuffer,
        setAudioBuffer: setAudioBuffer,
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
