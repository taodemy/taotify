import { useEffect, useState } from "react";
import { Song } from "types";

export type MusicControlProps = {
  audioRef: HTMLAudioElement | any;
  musicData: Song[] | "";
  playingIndex: number;
  setPlayingIndex: React.Dispatch<React.SetStateAction<number>>;
  isPlaying: boolean;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
};

const useMusicControl = ({
  playingIndex,
  musicData,
  setPlayingIndex,
  audioRef,
  isPlaying,
  setIsPlaying,
}: MusicControlProps) => {
  useEffect(() => {
    {
      isPlaying ? audioRef.current.play() : audioRef.current.pause();
    }
  }, [isPlaying, audioRef]);

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  const handlePrevious = () => {
    if (playingIndex === 0) {
      let lastTrackIndex = musicData.length - 1;
      setPlayingIndex(lastTrackIndex);
    } else {
      setPlayingIndex((prev: number) => prev - 1);
    }
  };

  const handleNext = () => {
    if (playingIndex >= musicData.length - 1) {
      setPlayingIndex(0);
      setIsPlaying(true);
    } else {
      setPlayingIndex((prev: number) => prev + 1);
      setIsPlaying(true);
    }
  };

  return { isPlaying, togglePlayPause, handlePrevious, handleNext };
};

export default useMusicControl;
