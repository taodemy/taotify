import React from "react";
import formatTime from "../../utils/formatTime";
interface ProgressBarProps {
  currentTime: number;
  endTime: number;
  handleProgressChange: (time: number) => void;
}
const ProgressBar = ({ currentTime, endTime, handleProgressChange }: ProgressBarProps) => {
  return (
    <div
      className="relative flex h-[14px] w-full items-center justify-center gap-4 text-light"
      role="progressbar"
    >
      <p role="currentTime" className="text-xs md:text-sm">
        {formatTime(Math.min(currentTime, endTime))}
      </p>
      <input
        className="h-1 w-full md:h-3"
        type="range"
        min={0}
        max={endTime}
        value={currentTime}
        onChange={(e) => {
          handleProgressChange(parseInt(e.target.value));
        }}
      />

      <p role="endTime" className="text-xs md:text-sm">
        {formatTime(endTime)}
      </p>
    </div>
  );
};

export default ProgressBar;
