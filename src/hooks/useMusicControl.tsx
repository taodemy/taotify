import { useEffect, useState } from "react";
import { Song } from "types";

export type MusicControlProps = {
  audioRef: HTMLAudioElement | any;
  musicData: Song[];
  trackIndex: number;
  setTrackIndex: any;
  setCurrentMusic: any;
};

const useMusicControl = ({
  trackIndex,
  musicData,
  setTrackIndex,
  setCurrentMusic,
  audioRef,
}: MusicControlProps) => {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    {
      isPlaying ? audioRef.current.play() : audioRef.current.pause();
    }
  }, [isPlaying, audioRef]);

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  const handlePrevious = () => {
    setIsPlaying(false);
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
    setIsPlaying(false);
    if (trackIndex >= musicData.length - 1) {
      setTrackIndex(0);
      setCurrentMusic(musicData[0]);
      setIsPlaying(true);
    } else {
      setTrackIndex((prev: number) => prev + 1);
      setCurrentMusic(musicData[trackIndex + 1]);
      setIsPlaying(true);
    }
  };

  return { isPlaying, togglePlayPause, handlePrevious, handleNext };
};

export default useMusicControl;
