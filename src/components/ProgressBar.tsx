import React from "react";

interface ProgressBarProps {
  processTime: string;
  currentTime: string;
}
const ProgressBar = ({ processTime, currentTime }: ProgressBarProps) => {
  return (
    <div
      className="relative flex h-[14px] w-full items-center justify-center gap-4 text-light"
      role="progressbar"
    >
      <p className="text-xs md:text-sm">{processTime}</p>
      <div className="relative h-0.5 flex-1 rounded-full bg-dark-100 md:h-1">
        <div className="absolute h-0.5 w-1/2 flex-1 rounded-full bg-light md:h-1" />
      </div>
      <p className="text-xs md:text-sm">{currentTime}</p>
    </div>
  );
};

export default ProgressBar;
