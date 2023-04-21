import React from "react";
import { BiPlayCircle, BiPauseCircle, BiHeart } from "react-icons/bi";
import { FiFastForward, FiSkipForward, FiSkipBack } from "react-icons/fi";
import { IoPlayBackOutline } from "react-icons/io5";
import { TbArrowsShuffle } from "react-icons/tb";
import { BsRepeat } from "react-icons/bs";

interface AudioControlsProps {
  isPlaying?: boolean;
  onPlayPauseClick?: () => void;
  onPrevClick?: () => void;
  onNextClick?: () => void;
}

const AudioControls = ({
  isPlaying,
  onPlayPauseClick,
  onPrevClick,
  onNextClick,
}: AudioControlsProps) => {
  return (
    <div className="flex h-16 w-full items-center justify-between text-light">
      <button type="button" className="flex h-8 w-8 items-center justify-center">
        <BiHeart className="h-6 w-6" />
      </button>

      <div className="flex items-center gap-6">
        <div className="flex flex-1 justify-end gap-2">
          <button type="button" className="flex h-8 w-8 items-center justify-center">
            <FiSkipBack className="h-3 w-3" />
          </button>
          <button
            type="button"
            className="hidden h-8 w-8 items-center justify-center md:flex"
            onClick={onPrevClick}
          >
            <IoPlayBackOutline className="h-4 w-4" />
          </button>
        </div>

        {isPlaying ? (
          <button type="button" className="items-center justify-center" onClick={onPlayPauseClick}>
            <BiPauseCircle className="h-8 w-8" />
          </button>
        ) : (
          <button type="button" className="items-center justify-center" onClick={onPlayPauseClick}>
            <BiPlayCircle className="h-8 w-8" />
          </button>
        )}

        <div className="flex flex-1 justify-start gap-2">
          <button
            type="button"
            className="hidden h-8 w-8 items-center justify-center md:flex"
            onClick={onNextClick}
          >
            <FiFastForward className="h-4 w-4" />
          </button>
          <button type="button" className="flex h-8 w-8 items-center justify-center">
            <FiSkipForward className="h-3 w-3" />
          </button>
        </div>
      </div>

      <div className="flex items-center justify-center gap-6 py-[2px] text-light">
        <button type="button" className="flex h-8 w-8 items-center justify-center">
          <TbArrowsShuffle className="h-5 w-5" />
        </button>
        <button type="button" className="flex h-8 w-8 items-center justify-center">
          <BsRepeat className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default AudioControls;
