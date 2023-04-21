import { MusicContext } from "@/contexts/MusicContext";
import shuffleSongs from "@/utils/shuffleSongs";
import React, { useContext, useEffect, useState } from "react";
import { PlayList } from "types";

type PlayControlsProps = {
  loopMode: string;
  toggleLoopMode: () => void;
};

export default function PlayControls({ loopMode, toggleLoopMode }: PlayControlsProps) {
  const [isShuffle, setIsShuffle] = useState(false);
  const [originPlayList, setOriginPlayList] = useState<PlayList | null>(null);

  const { playingQueue, playingIndex, setPlayingQueue, setPlayingIndex } = useContext(MusicContext);

  //if there is a new queue playing, store the copy of it
  useEffect(() => {
    if (playingQueue) setOriginPlayList(playingQueue);
  }, [playingQueue?.id, playingQueue?.type]);

  //if there is a new copy or new shuffled mode, detect if it needs to be shuffled or reset
  useEffect(() => {
    if (!playingQueue || !originPlayList) return;

    if (isShuffle) {
      const shuffledPlayList = shuffleSongs(playingQueue, playingIndex);
      setPlayingIndex(0);
      setPlayingQueue(shuffledPlayList);
    } else {
      if (playingQueue === originPlayList) return;
      const playingSong = playingQueue.songs[playingIndex];
      const originIndex = originPlayList.songs.indexOf(playingSong);
      setPlayingIndex(originIndex);
      setPlayingQueue(originPlayList);
    }
  }, [isShuffle, originPlayList]);

  return (
    <div className="flex">
      <div className="mr-8">
        <button onClick={toggleLoopMode}>Loop</button>
        {/*only for display functionality, remove it when styling this*/}
        <div>{loopMode}</div>
      </div>
      <div>
        <button onClick={() => setIsShuffle((prev) => !prev)}>Shuffle</button>
        {/*only for display functionality, remove it when styling this*/}
        <div>{isShuffle ? "on" : "off"}</div>
      </div>
    </div>
  );
}
