import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import useSwiper from "@/hooks/useSwiper";
import { MusicList } from "@/types/context";
import Indicator from "./Indicator";

export interface CarouselProps {
  albums: MusicList[];
}

const Carousel = ({ albums }: CarouselProps) => {
  const {
    getSwiperOptions,
    handleSwiperInit,
    swiperWidth,
    swiperInstance,
    isSwiperReady,
    activeIndex,
    setActiveIndex,
    setPreIndex,
    handleSlideChange,
    handleClick,
    getAlbumLength,
    setSwiperContainerWidth,
    setInitialSlideAfterSwiperMounted,
  } = useSwiper({
    albums,
  });

  useEffect(() => {
    setSwiperContainerWidth();
  }, []);

  useEffect(() => {
    setInitialSlideAfterSwiperMounted();
  }, [isSwiperReady, swiperInstance]);

  if (!Array.isArray(albums)) {
    console.error("Invalid 'albums' prop:", albums);
    return null;
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <Swiper
        {...getSwiperOptions(swiperWidth)}
        onSwiper={handleSwiperInit}
        onSlideChange={handleSlideChange}
        className="carousel-container flex h-[30vh] w-full"
        id="swiper-container"
      >
        {albums.map((musicList, index) => (
          <SwiperSlide
            key={index}
            style={{ width: "70%" }}
            onClick={() => {
              handleClick(index, musicList);
            }}
            className="carousel-item"
          >
            <img
              className="block h-full w-full object-cover"
              src={musicList.musicContext[0].album.image}
              alt="album cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Indicator
        length={getAlbumLength()}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        setPreIndex={setPreIndex}
        swiperInstance={swiperInstance}
      />
    </div>
  );
};
export default Carousel;
