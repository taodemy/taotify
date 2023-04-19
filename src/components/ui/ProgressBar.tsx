import React from "react";

interface ProgressBarProps {
  processTime: string;
  currentTime: string;
}
const ProgressBar = ({ processTime, currentTime }: ProgressBarProps) => {
  return (
    <div className="relative flex h-[14px] items-center justify-center gap-4 text-light">
      <p className="text-sm">{processTime}</p>
      <div className="relative h-[4px] w-[calc(100vw-720px)] rounded-full bg-dark-100">
        <div className="absolute h-[4px] w-[calc(70vw-720px)] rounded-full bg-light" />
      </div>
      <p className="text-sm">{currentTime}</p>
    </div>
  );
};

export default ProgressBar;
