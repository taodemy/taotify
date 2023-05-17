// import React, { createContext, useEffect, useRef, useState } from "react";

// interface WebAudioContextProps {
//   audioContext: AudioContext | null;
//   gainNode: GainNode | null;
//   setGainNode: React.Dispatch<React.SetStateAction<GainNode | null>>;
//   audioBuffer: AudioBuffer | null;
//   setAudioBuffer: React.Dispatch<React.SetStateAction<AudioBuffer | null>>;
//   audioSource: AudioBufferSourceNode | null;
//   setAudioSource: React.Dispatch<React.SetStateAction<AudioBufferSourceNode | null>>;
// }

// const defaultValues = {
//   audioContext: null,
//   gainNode: null,
//   setGainNode: () => {},
//   audioBuffer: null,
//   setAudioBuffer: () => {},
//   audioSource: null,
//   setAudioSource: () => {},
// };

// export const WebAudioContext = createContext<WebAudioContextProps>(defaultValues);

// interface Props {
//   children: React.ReactNode;
// }

// export const WebAudioContextProvider = ({ children }: Props) => {
//   const audioContextRef = useRef<AudioContext | null>(null);
//   const [gainNode, setGainNode] = useState<GainNode | null>(null);
//   const [audioBuffer, setAudioBuffer] = useState<AudioBuffer | null>(null);
//   const [audioSource, setAudioSource] = useState<AudioBufferSourceNode | null>(null);
//   useEffect(() => {
//     audioContextRef.current = new AudioContext();
//     return () => {
//       if (audioContextRef.current) {
//         audioContextRef.current.close();
//       }
//     };
//   }, []);
//   return (
//     <WebAudioContext.Provider value={{ audioContextRef.current, gainNode, setGainNode, audioBuffer, setAudioBuffer, audioSource, setAudioSource }}>
//       {children}
//     </WebAudioContext.Provider>
//   );
// };
