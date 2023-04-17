import React from "react";
import Image from "next/image";
import useMusicControl from "@/hooks/useMusicControl";
import { MusicControlProps } from "@/hooks/useMusicControl";

const MusicControls = ({
  audioRef,
  musicData,
  playingIndex,
  setPlayingIndex,
  isPlaying,
  setIsPlaying,
}: MusicControlProps) => {
  const { togglePlayPause, handlePrevious, handleNext } = useMusicControl({
    playingIndex,
    musicData,
    setPlayingIndex,
    audioRef,
    isPlaying,
    setIsPlaying,
  });

  return (
    <div className="flex flex-row">
      <button onClick={handlePrevious}>
        <Image src="/icons/previous.svg" alt="previous icon" width={36} height={36} />
      </button>
      <button onClick={togglePlayPause} disabled={musicData === "" ? true : false}>
        {isPlaying ? (
          <Image src="/icons/pause.svg" alt="play icon" width={36} height={36} />
        ) : (
          <Image src="/icons/play.svg" alt="play icon" width={36} height={36} />
        )}
      </button>
      <button onClick={handleNext}>
        <Image src="/icons/forward.svg" alt="forward icon" width={36} height={36} />
      </button>
    </div>
  );
};

export default MusicControls;
