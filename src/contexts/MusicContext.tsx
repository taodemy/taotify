import React, { createContext, useState } from "react";

interface MusicContextProps {
  musicList: string[];
  setMusicList: React.Dispatch<React.SetStateAction<string[]>>;
  noResourceAlert: boolean;
  setNoResourceAlert: React.Dispatch<React.SetStateAction<boolean>>;
}

const defaultValues = {
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
  const [musicList, setMusicList] = useState<string[]>([]);
  const [noResourceAlert, setNoResourceAlert] = useState<boolean>(false);

  return (
    <MusicContext.Provider value={{ musicList, setMusicList, noResourceAlert, setNoResourceAlert }}>
      {children}
    </MusicContext.Provider>
  );
};
