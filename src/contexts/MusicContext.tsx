import React, { createContext, useEffect, useState } from "react";
import { MusicList } from "@/types/context";

interface MusicContextProps {
  playingIndex: number;
  setPlayingIndex: React.Dispatch<React.SetStateAction<number>>;
  playingQueue: MusicList | null;
  setPlayingQueue: React.Dispatch<React.SetStateAction<MusicList | null>>;
  noResourceAlert: boolean;
  setNoResourceAlert: React.Dispatch<React.SetStateAction<boolean>>;
  isPlaying: boolean;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  imgUrl: string;
  setImgUrl: React.Dispatch<React.SetStateAction<string>>;
  selectedAlbum: MusicList | null;
  setSelectedAlbum: React.Dispatch<React.SetStateAction<MusicList | null>>;
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
  imgUrl: "",
  setImgUrl: () => {},
  selectedAlbum: null,
  setSelectedAlbum: () => {},
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
  const [imgUrl, setImgUrl] = useState<string>("");
  const [selectedAlbum, setSelectedAlbum] = useState<MusicList | null>(null);

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
        imgUrl,
        setImgUrl,
        selectedAlbum,
        setSelectedAlbum,
      }}
    >
      {children}
    </MusicContext.Provider>
  );
};
