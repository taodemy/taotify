import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";

interface GlobalContextProps {
  likedSongsIdList: string[];
  setLikedSongsIdList: React.Dispatch<React.SetStateAction<string[]>>;
  playlistsName: string[];
  setPlaylistsName: React.Dispatch<React.SetStateAction<string[]>>;
}

const GlobalContext = createContext<GlobalContextProps | undefined>(undefined);

export const GlobalContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [likedSongsIdList, setLikedSongsIdList] = useState<string[]>([]);
  const [playlistsName, setPlaylistsName] = useState<string[]>([]);

  useEffect(() => {
    const playlists = localStorage.getItem("playlists");
    if (playlists) {
      const parsedPlaylists = JSON.parse(playlists);
      const playlistsName = Object.keys(parsedPlaylists);
      setPlaylistsName(playlistsName);
    }
  }, []);
  return (
    <GlobalContext.Provider
      value={{
        likedSongsIdList,
        setLikedSongsIdList,
        playlistsName,
        setPlaylistsName,
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
