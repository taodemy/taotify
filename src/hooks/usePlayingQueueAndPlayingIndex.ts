import { MusicContext } from "@/contexts/MusicContext";
import { useContext, useEffect } from "react";
import getNewSongs from "@/utils/getNewSongs";
import { MusicList } from "types";

const usePlayingQueueAndPlayingIndex = () => {
  const { setPlayingQueue, setPlayingIndex } = useContext(MusicContext);
  const initalize = async () => {
    const newSongsRes = await getNewSongs();
    const musicList: MusicList = {
      id: 0,
      type: "newSongs",
      songs: newSongsRes.status ? newSongsRes.songs : [],
    };
    setPlayingQueue(musicList);
    setPlayingIndex(0);
  };
  useEffect(() => {
    initalize();
  }, []);
};
export default usePlayingQueueAndPlayingIndex;
