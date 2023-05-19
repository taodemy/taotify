import React, { createContext, useEffect } from "react";

interface WebAudioContextProps {
  audioContext: AudioContext | null;
  audioSource: AudioBufferSourceNode | null;
  gainNode: GainNode | null;
}

const defaultValues = {
  audioContext: null,
  audioSource: null,
  gainNode: null,
};

export const WebAudioContext = createContext<WebAudioContextProps>(defaultValues);

interface Props {
  children: React.ReactNode;
}

export const WebAudioContextProvider = ({ children }: Props) => {
  const audioContext = new AudioContext();
  let audioSource = null;
  let gainNode = null;
  useEffect(() => {
    return () => {
      if (audioContext) {
        audioContext.close();
      }
    };
  }, []);

  return (
    <WebAudioContext.Provider
      value={{
        audioContext,
        audioSource,
        gainNode,
      }}
    >
      {children}
    </WebAudioContext.Provider>
  );
};
