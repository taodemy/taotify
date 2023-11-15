import { BiPlayCircle, BiPauseCircle, BiHeart } from "react-icons/bi";
import { FiFastForward, FiSkipForward, FiSkipBack } from "react-icons/fi";
import { IoPlayBackOutline } from "react-icons/io5";
import { TbArrowsShuffle } from "react-icons/tb";
import { BsRepeat, BsRepeat1 } from "react-icons/bs";
import { MusicContext } from "@/contexts/MusicContext";
import shuffleSongs from "@/utils/shuffleSongs";
import React, { Dispatch, SetStateAction, useContext, useEffect, useState, useRef } from "react";
import { MusicList } from "@/types/context";
import { useGlobalContext } from "@/contexts/GlobalContext";
import { WebAudioContext } from "@/contexts/WebAudioContext";

interface AudioControlsProps {
  loopMode?: string;
  setLoopMode: Dispatch<SetStateAction<"none" | "single" | "all">>;
  audioRef: React.MutableRefObject<HTMLAudioElement | null>;
  setIsSongArchived: (isSongArchived: boolean) => void;
}

const AudioControls = ({
  loopMode,
  setLoopMode,
  audioRef,
  setIsSongArchived,
}: AudioControlsProps) => {
  const [isShuffle, setIsShuffle] = useState(false);
  const [originMusicList, setOriginMusicList] = useState<MusicList | null>(null);
  const { playingQueue, playingIndex, setPlayingQueue, setPlayingIndex, setIsPlaying, isPlaying } =
    useContext(MusicContext);
  const { likedSongsIdList } = useGlobalContext();
  const audio = audioRef.current;
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
      setLoopMode("none");
    } else {
      if (playingQueue === originMusicList) return;
      const playingSong = playingQueue.musicContext[playingIndex];
      const originIndex = originMusicList.musicContext.indexOf(playingSong);
      setPlayingIndex(originIndex);
      setPlayingQueue(originMusicList);
    }
  }, [isShuffle, originMusicList]);

  const toggleLoopMode = () => {
    setIsShuffle(false);
    if (loopMode === "none") setLoopMode("single");
    if (loopMode === "single") setLoopMode("all");
    if (loopMode === "all") setLoopMode("none");
  };

  const onNextClick = () => {
    if (playingIndex !== -1 && playingQueue) {
      playingIndex >= playingQueue?.musicContext.length - 1
        ? setPlayingIndex(0)
        : setPlayingIndex((prev: number) => prev + 1);
    }
  };
  const onPrevClick = () => {
    if (playingIndex !== -1 && playingQueue) {
      playingIndex === 0
        ? setPlayingIndex(playingQueue?.musicContext.length - 1)
        : setPlayingIndex(playingIndex - 1);
    }
  };

  const handlePlayPauseClick = () => {
    setIsPlaying(!isPlaying);
  };

  const handleFastForward = () => {
    audio && (audio.currentTime += 10);
  };
  const handleRewind = () => {
    audio && (audio.currentTime -= 10);
  };
  return (
    <div className="flex h-8 w-full items-center justify-between text-light md:h-16">
      <button
        type="button"
        className="flex h-8 w-8 items-center justify-center"
        onClick={() => {
          setIsSongArchived(true);
        }}
      >
        <BiHeart className="h-6 w-6" />
      </button>

      <div className="flex items-center gap-6">
        <div className="flex flex-1 justify-end gap-2">
          <button
            className="flex h-8 w-8 items-center justify-center"
            type="button"
            role="prevButton"
            onClick={onPrevClick}
          >
            <FiSkipBack className="h-3 w-3" />
          </button>
          <button
            type="button"
            className="hidden h-8 w-8 items-center justify-center md:flex"
            role="rewindButton"
            onClick={handleRewind}
          >
            <IoPlayBackOutline className="h-4 w-4" />
          </button>
        </div>

        {playingQueue && isPlaying ? (
          <button
            type="button"
            className="items-center justify-center"
            onClick={handlePlayPauseClick}
            role="playButton"
          >
            <BiPauseCircle className="h-8 w-8" />
          </button>
        ) : (
          <button
            type="button"
            className="items-center justify-center"
            onClick={handlePlayPauseClick}
            role="pauseButton"
          >
            <BiPlayCircle className="h-8 w-8" />
          </button>
        )}

        <div className="flex flex-1 justify-start gap-2">
          <button
            type="button"
            className="hidden h-8 w-8 items-center justify-center md:flex"
            role="fastForwardButton"
            onClick={handleFastForward}
          >
            <FiFastForward className="h-4 w-4" />
          </button>
          <button
            type="button"
            className="flex h-8 w-8 items-center justify-center"
            role="nextButton"
            onClick={onNextClick}
          >
            <FiSkipForward className="h-3 w-3" />
          </button>
        </div>
      </div>

      <div className="flex items-center justify-center gap-6 py-[2px] text-light">
        <button
          type="button"
          className="flex h-8 w-8 items-center justify-center"
          onClick={() => setIsShuffle((prev) => !prev)}
          role="shuffle"
        >
          {isShuffle === true ? (
            <TbArrowsShuffle className="h-5 w-5 text-primary" />
          ) : (
            <TbArrowsShuffle className="h-5 w-5" />
          )}
        </button>
        <button
          type="button"
          className="flex h-8 w-8 items-center justify-center"
          onClick={toggleLoopMode}
          role="loop"
        >
          {loopMode === "none" ? (
            <BsRepeat className="h-5 w-5" />
          ) : loopMode === "single" ? (
            <BsRepeat1 className="h-5 w-5 text-primary" />
          ) : (
            <BsRepeat className="h-5 w-5 text-primary" />
          )}
        </button>
      </div>
    </div>
  );
};

export default AudioControls;
