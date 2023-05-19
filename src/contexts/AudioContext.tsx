import React, { createContext, useEffect, useState } from "react";

interface WebAudioContextProps {
  audioContext: AudioContext | null;
}

const defaultValues = {
  audioContext: null,
};

export const WebAudioContext = createContext<WebAudioContextProps>(defaultValues);

interface Props {
  children: React.ReactNode;
}

export const WebAudioContextProvider = ({ children }: Props) => {
  const audioContext = new AudioContext();
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
      }}
    >
      {children}
    </WebAudioContext.Provider>
  );
};
