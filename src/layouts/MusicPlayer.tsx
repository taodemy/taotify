import React, { useRef, useState } from "react";
import MusicControls from "@/components/MusicControls";
import useMusicData from "@/hooks/useMusicData";
import useMusicSource from "@/hooks/useMusicSource";
import { APITypes } from "@/constant/api";

export default function MusicPlayer() {
  const [trackIndex, setTrackIndex] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);
  const { musicData, currentMusic, setCurrentMusic } = useMusicData(APITypes.NEWSONG);
  const { musicUrl } = useMusicSource(currentMusic.id, "exhigh");

  return (
    <div
      className=" w-[100vw] h-[100px] bg-secondary-100 fixed bottom-0 left-0 border-2"
      onClick={() => console.log(musicUrl)}
    >
      Music Player
      <div>
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
