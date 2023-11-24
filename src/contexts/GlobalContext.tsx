import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { IMusicContext } from "@/types/context";
import usePlaylists from "@/hooks/usePlaylists";

interface GlobalContextProps {
  likedSongsIdList: string[];
  setLikedSongsIdList: React.Dispatch<React.SetStateAction<string[]>>;
  playlistsName: string[];
  setPlaylistsName: React.Dispatch<React.SetStateAction<string[]>>;
  playlistContext: IMusicContext;
  setPlaylistContext: React.Dispatch<React.SetStateAction<IMusicContext>>;
}

const GlobalContext = createContext<GlobalContextProps | undefined>(undefined);

export const GlobalContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [likedSongsIdList, setLikedSongsIdList] = useState<string[]>([]);
  const [playlistsName, setPlaylistsName] = useState<string[]>([]);
  const [playlistContext, setPlaylistContext] = useState({} as IMusicContext);
  const { getAllPlaylistsName } = usePlaylists();

  useEffect(() => {
    const playlistsName = getAllPlaylistsName();
    setPlaylistsName(playlistsName);
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        likedSongsIdList,
        setLikedSongsIdList,
        playlistsName,
        setPlaylistsName,
        playlistContext,
        setPlaylistContext,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = (): GlobalContextProps => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobalContext must be used within a GlobalContextProvider");
  }
  return context;
};
