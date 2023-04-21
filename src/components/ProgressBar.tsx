import React from "react";
import formatTime from "../utils/formatTime";

type ProgressBarProps = {
  currentTime: number;
  endTime: number;
  handleProgressChange: (time: number) => void;
};

export default function ProgressBar({
  currentTime,
  endTime,
  handleProgressChange,
}: ProgressBarProps) {
  return (
    <div className="flex w-96 m-10">
      <p role="currentTime">{formatTime(Math.min(currentTime, endTime))}</p>
      <input
        className="w-full"
        type="range"
        min={0}
        max={endTime}
        value={currentTime}
        onChange={(e) => {
          handleProgressChange(parseInt(e.target.value));
        }}
      />
      <p role="endTime">{formatTime(endTime)}</p>
    </div>
  );
}
