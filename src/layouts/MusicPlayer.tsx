import React, { useRef, useState, useContext } from "react";
import MusicControls from "@/components/MusicControls";
import useMusicData from "@/hooks/useMusicData";
import useMusicSource from "@/hooks/useMusicSource";
import { APITypes } from "@/constant/api";
import { MusicContext } from "@/contexts/MusicContext";

export default function MusicPlayer() {
  const [trackIndex, setTrackIndex] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);
  const { musicData, currentMusic, setCurrentMusic } = useMusicData(APITypes.NEWSONG);
  const { musicUrl } = useMusicSource(currentMusic.id, "exhigh");
  const { playingQueue, playingIndex, setPlayingIndex } = useContext(MusicContext);
  const audioUrl = playingQueue?.songs[playingIndex].mp3Url || "";
  const handleEnd = () => {
    if (playingQueue?.songs && playingIndex < playingQueue.songs.length - 1)
      setPlayingIndex((prev) => prev + 1);
  };

  return (
    <div
      className=" w-[100vw] h-[100px] bg-secondary-100 fixed bottom-0 left-0 border-2"
      onClick={() => console.log(musicUrl)}
    >
      Music Player
      <div>
        <audio src={audioUrl} role="audio" controls autoPlay onEnded={handleEnd} />
        <audio src={musicUrl} ref={audioRef} />
        <MusicControls
          audioRef={audioRef}
          musicData={musicData}
          trackIndex={trackIndex}
          setTrackIndex={setTrackIndex}
          setCurrentMusic={setCurrentMusic}
        />
      </div>
    </div>
  );
}
