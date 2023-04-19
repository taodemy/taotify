import React from "react";

interface ProgressBarProps {
  title: string;
  singer: string;
}

export function MusicInfo({ title, singer }: ProgressBarProps) {
  return (
    <div className="flex flex-col items-start justify-center gap-[10px] px-2 text-white">
      <p className="text-base">{title}</p>
      <p className="text-sm">{singer}</p>
    </div>
  );
}
