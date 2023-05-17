import React, { createContext, useEffect, useState } from "react";
import { MusicList, Song } from "types";
import getNewSongs from "../utils/getNewSongs";

interface MusicContextProps {
  playingIndex: number;
  setPlayingIndex: React.Dispatch<React.SetStateAction<number>>;
  playingQueue: MusicList | null;
  setPlayingQueue: React.Dispatch<React.SetStateAction<MusicList | null>>;
  noResourceAlert: boolean;
  setNoResourceAlert: React.Dispatch<React.SetStateAction<boolean>>;
  isPlaying: boolean;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  audioContext: AudioContext | null;
  setAudioContext: React.Dispatch<React.SetStateAction<AudioContext | null>>;
}

const defaultValues = {
  playingIndex: -1,
  setPlayingIndex: () => {},
  playingQueue: null,
  setPlayingQueue: () => {},
  noResourceAlert: false,
  setNoResourceAlert: () => {},
  isPlaying: false,
  setIsPlaying: () => {},
  audioContext: null,
  setAudioContext: () => {},
};

export const MusicContext = createContext<MusicContextProps>(defaultValues);

interface Props {
  index?: number;
  queue?: MusicList | null;
  alert?: false;
  children: React.ReactNode;
}

export const MusicContextProvider = ({
  children,
  index = -1,
  queue = null,
  alert = false,
}: Props) => {
  const [playingIndex, setPlayingIndex] = useState(index);
  const [playingQueue, setPlayingQueue] = useState<MusicList | null>(queue);
  const [noResourceAlert, setNoResourceAlert] = useState<boolean>(alert);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [audioContext, setAudioContext] = useState<AudioContext | null>(null);
  useEffect(() => {
    setAudioContext(new AudioContext());
    return () => {
      if (audioContext) {
        audioContext.close();
      }
    };
  }, []);

  useEffect(() => {
    const initalize = async () => {
      console.log(123);
      const newSongsRes = await getNewSongs();
      console.log(newSongsRes);
      const musicList: MusicList = {
        id: 0,
        type: "newSongs",
        songs: newSongsRes.status ? newSongsRes.songs : [],
      };
      setPlayingQueue(musicList);
      setPlayingIndex(0);
    };
    initalize();
  }, []);

  return (
    <MusicContext.Provider
      value={{
        playingIndex,
        setPlayingIndex,
        playingQueue,
        setPlayingQueue,
        noResourceAlert,
        setNoResourceAlert,
        isPlaying,
        setIsPlaying,
        audioContext,
        setAudioContext,
      }}
    >
      {children}
    </MusicContext.Provider>
  );
};
