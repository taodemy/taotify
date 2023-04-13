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
