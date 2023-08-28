import { useState } from "react";
import CarouselItem from "./CarouselItem";
import { MusicList } from "@/types/context";
import Indicator from "./Indicator";

interface CarouselProps {
  albums: MusicList[];
  slidesPerView?: number;
}

const Carousel = ({ albums, slidesPerView }: CarouselProps) => {
  const initialIndex = albums.length >= 3 ? 2 : 0;
  const [activeIndex, setActiveIndex] = useState<number>(initialIndex);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative h-[30vh] w-2/3">
        {albums.map((musicList, index) => (
          <CarouselItem
            key={index}
            index={index}
            musicList={musicList}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            slidesPerView={slidesPerView}
          />
        ))}
      </div>
      <Indicator length={albums.length} activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
    </div>
  );
};
export default Carousel;
