import { useState, useContext } from "react";
import SwiperCore from "swiper";
import { EffectCoverflow } from "swiper/modules";
import { MusicList } from "@/types/context";
import { MusicContext } from "@/contexts/MusicContext";
import sliceArray from "@/utils/sliceArray";
import { CarouselProps } from "@/components/carousel/Carousel";
import { useRouter } from "next/router";
import {
  START_CAROUSEL_ALBUM_INDEX,
  END_CAROUSEL_ALBUM_INDEX,
  SWIPER_WIDTH_RATIO,
  SLIDE_EFFECT_MODE,
  GRAB_CURSOR,
  ROTATE,
  STRETCH,
  DEPTH,
  MODIFIER,
  SLIDESHOWS,
  CENTERED_SLIDES,
  SLIDES_PER_VIEW,
  SLIDE_TO_CLICKED_SLIDE,
} from "@/constant/carousel";

const useSwiper = ({ albums }: CarouselProps) => {
  const getInitialIndex = () => {
    const slicedAlbum = getSlicedAlbums();
    const initialIndex = Math.floor(slicedAlbum.length / 2);
    return initialIndex;
  };

  const getSlicedAlbums = () => {
    const startAlbumIndex = START_CAROUSEL_ALBUM_INDEX;
    const endAlbumIndex = END_CAROUSEL_ALBUM_INDEX;
    return sliceArray(albums, startAlbumIndex, endAlbumIndex);
  };

  const getAlbumLength = () => {
    return getSlicedAlbums().length;
  };

  const initialIndex = getInitialIndex();
  const [activeIndex, setActiveIndex] = useState<number>(initialIndex);
  const [preIndex, setPreIndex] = useState<number>(initialIndex);
  const [swiperWidth, setSwiperWidth] = useState<number>(0);
  const [swiperInstance, setSwiperInstance] = useState<SwiperCore | null>(null);
  const [isSwiperReady, setIsSwiperReady] = useState(false);
  const router = useRouter();
  const { setSelectedAlbum } = useContext(MusicContext);

  const setInitialSlideAfterSwiperMounted = () => {
    // Check if Swiper is ready
    if (isSwiperReady && swiperInstance) {
      // Set the initial slide after the Swiper component has mounted
      const initialIndex = getInitialIndex();
      swiperInstance.slideTo(initialIndex, 0);
    }
  };

  const setSwiperContainerWidth = () => {
    const handleResize = () => {
      // Update the swiperWidth state on window resize
      setSwiperWidth(document.getElementById("swiper-container")?.offsetWidth || 0);
    };
    // Attach the event listener for window resize
    window.addEventListener("resize", handleResize);
    // Initial setup
    handleResize();
    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  };

  const handleSwiperInit = (swiper: SwiperCore) => {
    setSwiperInstance(swiper);
    setIsSwiperReady(true);
  };

  const handleSlideChange = () => {
    setPreIndex(activeIndex);
    // Get the active index when the slide changes
    if (swiperInstance) {
      setActiveIndex(swiperInstance.activeIndex);
    }
  };

  const handleClick = (index: number, musicList: MusicList) => {
    if (index === activeIndex && preIndex === activeIndex) {
      router.push(`/album/${musicList.id}`);
    } else {
      setPreIndex(activeIndex);
      setActiveIndex(index);
      setSelectedAlbum(musicList);
    }
  };

  const getSwiperOptions = (swiperWidth: number) => {
    return {
      modules: [EffectCoverflow],
      spaceBetween: -swiperWidth * SWIPER_WIDTH_RATIO,
      effect: SLIDE_EFFECT_MODE,
      grabCursor: GRAB_CURSOR,
      centeredSlides: CENTERED_SLIDES,
      slidesPerView: SLIDES_PER_VIEW,
      slideToClickedSlide: SLIDE_TO_CLICKED_SLIDE,
      coverflowEffect: {
        rotate: ROTATE,
        stretch: STRETCH,
        depth: DEPTH,
        modifier: MODIFIER,
        slideShadows: SLIDESHOWS,
      },
    };
  };

  const handleIndicatorClick = (index: number) => {
    setPreIndex(activeIndex);
    setActiveIndex(index);
    if (swiperInstance) {
      swiperInstance.slideTo(index, 0);
    }
  };

  return {
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
    handleIndicatorClick,
  };
};

export default useSwiper;
