import { useEffect, useMemo, useState } from "react";

const useNewMusic = (address: string) => {
  const [musicData, setMusicData] = useState<SongProps[]>([]);
  const [currentMusic, setCurrentMusic] = useState({
    id: 0,
    name: "",
    artist: "",
    album: [],
    picUrl: "",
    musicUrl: "",
  });
  const getMusicList = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_MUSIC_SERVER_ADDRESS}${address}`);

      if (!response.ok) {
        throw new Error(`This is an HTTP error: The status is ${response.status}`);
      }
      const data = await response.json();
      const musicList = data.result;
      setMusicData(musicList);
      setCurrentMusic(musicList[0]);
      return musicList;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMusicList();
  }, []);

  return { getMusicList, musicData, currentMusic, setCurrentMusic };
};

export default useNewMusic;
