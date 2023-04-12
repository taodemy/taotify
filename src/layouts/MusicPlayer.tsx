import { MusicContext } from "@/contexts/MusicContext";
import React, { useContext } from "react";

export default function MusicPlayer() {
  const { playingQueue, playingIndex, setPlayingIndex } = useContext(MusicContext);

  const audioUrl = playingIndex === -1 ? "" : playingQueue?.tracks[playingIndex].audioUrl;

  const handleEnd = () => {
    if (playingQueue?.tracks && playingIndex < playingQueue.tracks.length - 1)
      setPlayingIndex((prev) => prev + 1);
  };

  return (
    <div className=" w-[100vw] h-[100px] bg-secondary-100 fixed bottom-0 left-0 border-2">
      <audio src={audioUrl} controls autoPlay onEnded={handleEnd}></audio>
    </div>
  );
}
