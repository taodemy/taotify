import { BiPlayCircle, BiPauseCircle, BiHeart } from "react-icons/bi";
import { FiFastForward, FiSkipForward, FiSkipBack } from "react-icons/fi";
import { IoPlayBackOutline } from "react-icons/io5";
import { TbArrowsShuffle } from "react-icons/tb";
import { BsRepeat, BsRepeat1 } from "react-icons/bs";
import { MusicContext } from "@/contexts/MusicContext";
import shuffleSongs from "@/utils/shuffleSongs";
import React, { useContext, useEffect, useState } from "react";
import { MusicList } from "types";

interface AudioControlsProps {
  onPlayPauseClick?: () => void;
  onPrevClick?: () => void;
  onNextClick?: () => void;
  loopMode?: string;
  toggleLoopMode?: () => void;
}

const AudioControls = ({
  onPlayPauseClick,
  onPrevClick,
  onNextClick,
  loopMode,
  toggleLoopMode,
}: AudioControlsProps) => {
  const [isShuffle, setIsShuffle] = useState(false);
  const [originMusicList, setOriginMusicList] = useState<MusicList | null>(null);

  const { playingQueue, playingIndex, setPlayingQueue, setPlayingIndex, isPlaying } =
    useContext(MusicContext);

  //if there is a new queue playing, store the copy of it
  useEffect(() => {
    if (playingQueue) setOriginMusicList(playingQueue);
  }, [playingQueue?.id, playingQueue?.type]);

  //if there is a new copy or new shuffled mode, detect if it needs to be shuffled or reset
  useEffect(() => {
    if (!playingQueue || !originMusicList) return;

    if (isShuffle) {
      const shuffledMusicList = shuffleSongs(playingQueue, playingIndex);
      setPlayingIndex(0);
      setPlayingQueue(shuffledMusicList);
    } else {
      if (playingQueue === originMusicList) return;
      const playingSong = playingQueue.songs[playingIndex];
      const originIndex = originMusicList.songs.indexOf(playingSong);
      setPlayingIndex(originIndex);
      setPlayingQueue(originMusicList);
    }
  }, [isShuffle, originMusicList]);

  return (
    <div className="mb-1 flex flex-row items-center justify-between text-light lg:mb-2">
      <BiHeart className="h-6 w-6" />

      <div className="flex flex-row items-center gap-6">
        <FiSkipBack role="prevButton" className="h-3 w-3" onClick={onPrevClick} />
        <IoPlayBackOutline className="hidden h-4 w-4 md:inline" />
        {playingQueue && isPlaying ? (
          <BiPauseCircle role="pauseButton" className="h-8 w-8" onClick={onPlayPauseClick} />
        ) : (
          <BiPlayCircle role="playButton" className="h-8 w-8" onClick={onPlayPauseClick} />
        )}
        <FiFastForward className="hidden h-4 w-4 md:inline" />
        <FiSkipForward role="nextButton" className="h-3 w-3" onClick={onNextClick} />
      </div>

      <div className="flex flex-row items-center gap-6">
        {isShuffle === true ? (
          <TbArrowsShuffle
            role="shuffleButton"
            className="h-5 w-5 text-primary"
            onClick={() => setIsShuffle(false)}
          />
        ) : (
          <TbArrowsShuffle
            role="shuffleButton"
            className="h-5 w-5"
            onClick={() => setIsShuffle(true)}
          />
        )}

        {loopMode === "none" ? (
          <BsRepeat role="loopButton" className="h-5 w-5" onClick={toggleLoopMode} />
        ) : loopMode === "single" ? (
          <BsRepeat1 role="loopButton" className="h-5 w-5 text-primary" onClick={toggleLoopMode} />
        ) : (
          <BsRepeat role="loopButton" className="h-5 w-5 text-primary" onClick={toggleLoopMode} />
        )}
      </div>
    </div>
  );
};

export default AudioControls;
