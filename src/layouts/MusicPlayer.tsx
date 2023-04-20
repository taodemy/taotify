import { MusicContext } from "@/contexts/MusicContext";
import React, { useContext } from "react";

export default function MusicPlayer() {
  const { playingQueue, playingIndex, setPlayingIndex } = useContext(MusicContext);

  const audioUrl = playingQueue?.songs[playingIndex].mp3Url || "";

  const handleEnd = () => {
    if (playingQueue?.songs && playingIndex < playingQueue.songs.length - 1)
      setPlayingIndex((prev) => prev + 1);
  };

  return (
    <div className="fixed bottom-0 h-[120px] w-[calc(100vw-320px)] border px-4">
      <audio src={audioUrl} role="audio" controls autoPlay onEnded={handleEnd}></audio>
    </div>
  );
}
