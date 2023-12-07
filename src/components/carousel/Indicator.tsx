import React from "react";

export interface IndicatorProps {
  activeIndex: number;
  length: number;
  handleIndicatorClick: (index: number) => void;
}

export default function Indicator({ activeIndex, length, handleIndicatorClick }: IndicatorProps) {
  return (
    <div className="flex items-center space-x-1 md:-bottom-10">
      {Array.from(Array(length), (_, index) => (
        <div
          role="indicator carousel"
          key={`indicator-${index}`}
          className={`my-4 h-2 rounded-full bg-white opacity-50  transition-all duration-500 hover:w-4 hover:opacity-100
            ${activeIndex === index ? "w-4 opacity-100" : "w-2 bg-gray-400"}`}
          onClick={() => handleIndicatorClick(index)}
        ></div>
      ))}
    </div>
  );
}
