import React, { createContext, useEffect, useState } from "react";

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
  const [audioContext, setAudioContext] = useState<AudioContext | null>(null);
  const [audioSource, setAudioSource] = useState<AudioBufferSourceNode | null>(null);
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
    console.log(audioContext);
    if (audioContext && audioSource) {
      const newGainNode = audioContext.createGain();
      setGainNode(newGainNode);
    }
  }, [audioSource]);

  useEffect(() => {
    console.log(audioSource);
    if (audioContext && audioSource && gainNode) {
      audioSource.connect(gainNode);
      gainNode.connect(audioContext.destination);
    }
  }, [gainNode]);
  return (
    <WebAudioContext.Provider
      value={{
        audioContext: audioContext,
        audioSource: audioSource,
        setAudioSource: setAudioSource,
        gainNode: gainNode,
      }}
    >
      {children}
    </WebAudioContext.Provider>
  );
};
