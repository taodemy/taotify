import React, { useState, useEffect } from "react";
import Image from "next/image";
import { SongProps } from "@/layouts/MusicPlayer";

interface MusicControlProps {
  audioRef: HTMLAudioElement | any;
  musicData: SongProps[];
  trackIndex: number;
  setTrackIndex: any;
  setCurrentMusic: any;
}

const MusicControls = ({
  audioRef,
  musicData,
  trackIndex,
  setTrackIndex,
  setCurrentMusic,
}: MusicControlProps) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  useEffect(() => {
    {
      isPlaying ? audioRef.current.play() : audioRef.current.pause();
    }
  }, [isPlaying, audioRef]);

  const handlePrevious = () => {
    if (trackIndex === 0) {
      let lastTrackIndex = musicData.length - 1;
      setTrackIndex(lastTrackIndex);
      setCurrentMusic(musicData[lastTrackIndex]);
    } else {
      setTrackIndex((prev: number) => prev - 1);
      setCurrentMusic(musicData[trackIndex - 1]);
    }
  };

  const handleNext = () => {
    if (trackIndex >= musicData.length - 1) {
      setTrackIndex(0);
      setCurrentMusic(musicData[0]);
    } else {
      setTrackIndex((prev: number) => prev + 1);
      setCurrentMusic(musicData[trackIndex + 1]);
    }
  };

  return (
    <div className="flex flex-row">
      <button onClick={handlePrevious}>
        <Image src="/icons/previous.svg" alt="previous icon" width={36} height={36} />
      </button>
      <button onClick={togglePlayPause}>
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
