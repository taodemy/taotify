import { MusicList } from "@/types/context";
import { useRouter } from "next/router";
import React, { Dispatch, SetStateAction, useContext, useEffect } from "react";
import { MusicContext } from "@/contexts/MusicContext";

export interface CardProps {
  index: number;
  activeIndex: number;
  musicList: MusicList;
  slidesPerView?: number;
  setActiveIndex: Dispatch<SetStateAction<number>>;
}

const CarouselItem = ({
  index,
  activeIndex,
  slidesPerView = 3,
  setActiveIndex,
  musicList,
}: CardProps) => {
  const router = useRouter();
  const { setSelectedAlbum } = useContext(MusicContext);
  const offset = index - activeIndex;
  const absOffset = Math.abs(offset);

  const cssTransformProperties = `
        scaleY(calc(1 -  ${absOffset / 10}  ))
        translateX(calc(10% * ${offset}))
        translateZ(calc( ${offset} * 200px))
       `;

  const handleClick = (index: number) => {
    if (index === activeIndex) {
      router.push(`/album/${musicList.id}`);
      return;
    }
    setActiveIndex(index);
    setSelectedAlbum(musicList);
  };

  useEffect(() => {
    if (index === activeIndex) {
      setSelectedAlbum(musicList);
    }
  }, []);

  return (
    <div
      className={`carousel-item ${absOffset >= slidesPerView ? "hidden" : "block"}`}
      style={{
        transform: cssTransformProperties,
        zIndex: `${10 - absOffset}`,
      }}
      onClick={() => {
        handleClick(index);
      }}
    >
      <img
        className="block h-full w-full object-cover"
        src={musicList.musicContext[0].album.image}
        alt="album cover"
      />
    </div>
  );
};

export default CarouselItem;
