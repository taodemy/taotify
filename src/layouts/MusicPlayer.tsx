import React, { useRef, useContext } from "react";
import MusicControls from "@/components/MusicControls";
import useMusicSource from "@/hooks/useMusicSource";
import { MusicContext } from "@/contexts/MusicContext";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const { playingQueue, playingIndex, setPlayingIndex, isPlaying, setIsPlaying } =
    useContext(MusicContext);
  const musicData = playingQueue?.songs || "";
  const musicId = playingQueue?.songs[playingIndex].id || 0;
  const { musicUrl } = useMusicSource(musicId, "exhigh");

  const handleEnd = () => {
    if (playingQueue?.songs && playingIndex < playingQueue.songs.length - 1)
      setPlayingIndex((prev) => prev + 1);
  };

  return (
    <div className=" w-[100vw] h-[100px] bg-secondary-100 fixed bottom-0 left-0 border-2">
      <div>
        <audio src={musicUrl} ref={audioRef} onEnded={handleEnd} autoPlay role="audio" />
        <MusicControls
          audioRef={audioRef}
          musicData={musicData}
          playingIndex={playingIndex}
          setPlayingIndex={setPlayingIndex}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
        />
      </div>
    </div>
  );
}
