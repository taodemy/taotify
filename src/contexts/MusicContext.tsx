import React, { createContext, useState } from "react";

interface MusicContextProps {
  musicIndex: number;
  setMusicIndex: React.Dispatch<React.SetStateAction<number>>;
  musicList: Music[];
  setMusicList: React.Dispatch<React.SetStateAction<Music[]>>;
  noResourceAlert: boolean;
  setNoResourceAlert: React.Dispatch<React.SetStateAction<boolean>>;
}

const defaultValues = {
  musicIndex: -1,
  setMusicIndex: () => null,
  musicList: [],
  setMusicList: () => null,
  noResourceAlert: false,
  setNoResourceAlert: () => null,
};

export const MusicContext = createContext<MusicContextProps>(defaultValues);

interface Props {
  children: React.ReactNode;
}

export const MusicContextProvider = ({ children }: Props) => {
  const [musicIndex, setMusicIndex] = useState(-1);
  const [musicList, setMusicList] = useState<Music[]>([]);
  const [noResourceAlert, setNoResourceAlert] = useState<boolean>(false);

  return (
    <MusicContext.Provider
      value={{
        musicIndex,
        setMusicIndex,
        musicList,
        setMusicList,
        noResourceAlert,
        setNoResourceAlert,
      }}
    >
      {children}
    </MusicContext.Provider>
  );
};
