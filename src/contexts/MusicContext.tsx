import React, { createContext, useState } from "react";

interface MusicContextProps {
  playingIndex: number;
  setPlayingIndex: React.Dispatch<React.SetStateAction<number>>;
  playingQueue: MusicList | null;
  setPlayingQueue: React.Dispatch<React.SetStateAction<MusicList | null>>;
  noResourceAlert: boolean;
  setNoResourceAlert: React.Dispatch<React.SetStateAction<boolean>>;
}

const defaultValues = {
  playingIndex: -1,
  setPlayingIndex: () => {},
  playingQueue: null,
  setPlayingQueue: () => {},
  noResourceAlert: false,
  setNoResourceAlert: () => {},
};

export const MusicContext = createContext<MusicContextProps>(defaultValues);

interface Props {
  children: React.ReactNode;
}

export const MusicContextProvider = ({ children }: Props) => {
  const [playingIndex, setPlayingIndex] = useState(-1);
  const [playingQueue, setPlayingQueue] = useState<MusicList | null>(null);
  const [noResourceAlert, setNoResourceAlert] = useState<boolean>(false);

  return (
    <MusicContext.Provider
      value={{
        playingIndex,
        setPlayingIndex,
        playingQueue,
        setPlayingQueue,
        noResourceAlert,
        setNoResourceAlert,
      }}
    >
      {children}
    </MusicContext.Provider>
  );
};
