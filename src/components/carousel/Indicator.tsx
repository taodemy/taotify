import React, { Dispatch, SetStateAction } from "react";
import SwiperCore from "swiper";

export interface IndicatorProps {
  activeIndex: number;
  length: number;
  setActiveIndex: Dispatch<SetStateAction<number>>;
  setPreIndex: Dispatch<SetStateAction<number>>;
  swiperInstance: SwiperCore | null;
}

export default function Indicator({
  activeIndex,
  length,
  setActiveIndex,
  setPreIndex,
  swiperInstance,
}: IndicatorProps) {
  return (
    <div className="flex items-center space-x-1 md:-bottom-10">
      {Array.from(Array(length), (_, index) => {
        return (
          <div
            role="indicator carousel"
            key={`indicator-${index}`}
            className={`my-4 h-2 rounded-full bg-white opacity-50  transition-all duration-500 hover:w-4 hover:opacity-100
            ${activeIndex === index ? "w-4 opacity-100" : "w-2 bg-gray-400"}`}
            onClick={() => {
              setPreIndex(activeIndex);
              setActiveIndex(index); // Set the active index directly
              if (swiperInstance) {
                swiperInstance.slideTo(index, 0); // Slide to the clicked index
              }
            }}
          ></div>
        );
      })}
    </div>
  );
}
