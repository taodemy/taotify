import { useState } from "react";
import CarouselItem from "./CarouselItem";
import { MusicList } from "@/types/context";
import Indicator from "./Indicator";
import sliceArray from "@/utils/sliceArray";

interface CarouselProps {
  albums: MusicList[];
  slidesPerView?: number;
}

const Carousel = ({ albums, slidesPerView }: CarouselProps) => {
  const startAlbumIndex = 0;
  const endAlbumIndex = 7;
  const slicedAlbum = sliceArray(albums, startAlbumIndex, endAlbumIndex);
  const initialIndex = Math.floor(slicedAlbum.length / 2);
  const [activeIndex, setActiveIndex] = useState<number>(initialIndex);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative h-[30vh] w-[71%]">
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
      <Indicator
        length={slicedAlbum.length}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />
    </div>
  );
};
export default Carousel;
