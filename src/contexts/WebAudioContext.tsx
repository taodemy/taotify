import React, { createContext, useEffect, useState } from "react";

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
  const [audioContext, setAudioContext] = useState<AudioContext | null>(null);
  const [audioSource, setAudioSource] = useState<AudioBufferSourceNode | null>(null);
  const [analyserNode, setAnalyserNode] = useState<AnalyserNode | null>(null);
  const [gainNode, setGainNode] = useState<GainNode | null>(null);
  useEffect(() => {
    setAudioContext(new AudioContext());
    return () => {
      if (audioContext) {
        audioContext.close();
      }
    };
  }, []);

  useEffect(() => {
    if (audioContext) {
      const newGainNode = audioContext.createGain();
      newGainNode.connect(audioContext.destination);
      setGainNode(newGainNode);
    }
  }, [audioContext]);

  useEffect(() => {
    if (audioContext && gainNode) {
      const newAnalyserNode = audioContext.createAnalyser();
      newAnalyserNode.connect(gainNode);
      setAnalyserNode(newAnalyserNode);
    }
  }, [gainNode]);

  useEffect(() => {
    if (audioContext && audioSource && gainNode && analyserNode) {
      audioSource.connect(gainNode);
    }
  }, [audioSource]);
  return (
    <WebAudioContext.Provider
      value={{
        audioContext: audioContext,
        audioSource: audioSource,
        setAudioSource: setAudioSource,
        gainNode: gainNode,
        analyserNode: analyserNode,
      }}
    >
      {children}
    </WebAudioContext.Provider>
  );
};
