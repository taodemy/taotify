import { useEffect, useState } from "react";

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

  return { isPlaying, togglePlayPause, handlePrevious, handleNext };
};

export default useMusicControl;
