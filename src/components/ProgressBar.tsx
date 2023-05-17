import React from "react";
import formatTime from "../utils/formatTime";
interface ProgressBarProps {
  currentTime: number;
  endTime: number;
  handleProgressChange: (time: number) => void;
}
const ProgressBar = ({ currentTime, endTime, handleProgressChange }: ProgressBarProps) => {
  return (
    <div className="flex flex-row items-center justify-center gap-4 text-light" role="progressbar">
      <p role="currentTime" className="text-xs md:text-sm">
        {formatTime(Math.min(currentTime, endTime))}
      </p>
      <input
        className="grow"
        type="range"
        min={0}
        max={endTime}
        value={currentTime}
        onChange={(e) => {
          handleProgressChange(parseInt(e.target.value));
        }}
      />
      {/* <div className="relative h-0.5 flex-1 rounded-full bg-dark-100 md:h-1">
        <div className="absolute h-0.5 w-1/2 flex-1 rounded-full bg-light md:h-1" />
      </div> */}
      <p role="endTime" className="text-xs md:text-sm">
        {formatTime(endTime)}
      </p>
    </div>
  );
};

export default ProgressBar;
