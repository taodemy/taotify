import React, { Dispatch, SetStateAction } from "react";

export interface IndicatorProps {
  activeIndex: number;
  length: number;
  maxIndicatorVisible?: number;
  setActiveIndex: Dispatch<SetStateAction<number>>;
}

export default function Indicator({ activeIndex, length, setActiveIndex }: IndicatorProps) {
  return (
    <div className="flex items-center space-x-1 border border-primary-100 md:-bottom-10">
      {Array.from(Array(length), (_, index) => {
        return (
          <div
            key={`indicator-${index}`}
            className={`h-2 rounded-full bg-white opacity-50  transition-all duration-500 hover:w-4 hover:opacity-100
            ${activeIndex === index ? "w-4 opacity-100" : "w-2 bg-gray-400"}`}
            onClick={() => {
              setActiveIndex(index);
            }}
          ></div>
        );
      })}
    </div>
  );
}
