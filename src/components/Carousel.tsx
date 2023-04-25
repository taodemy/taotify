import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Mousewheel, EffectCoverflow } from "swiper";
import "swiper/swiper-bundle.min.css";
import 'swiper/css';
import 'swiper/css/effect-coverflow';

SwiperCore.use([Mousewheel, EffectCoverflow]);


import slide1 from "@/assets/images/1.png";
import slide2 from "@/assets/images/2.png";
import slide3 from "@/assets/images/3.png";
import slide4 from "@/assets/images/4.png";
import slide5 from "@/assets/images/5.png";

export default function Carousel() {
  const [activeIndex, setActiveIndex] = useState(2);
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={5}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
        }}
        // loop={true}
        mousewheel={true}
        initialSlide={activeIndex}
        className="w-full"
      >
        <SwiperSlide className="flex place-items-center">
          <Image src={slide1} alt="slide_image"  className="object-cover rounded-lg"/>
        </SwiperSlide>
        <SwiperSlide className="flex place-items-center">
          <Image src={slide2} alt="slide_image"  className="object-cover rounded-lg"/>
        </SwiperSlide>
        <SwiperSlide className="flex place-items-center">
          <Image src={slide3} alt="slide_image"  className="object-cover rounded-lg"/>
        </SwiperSlide>
        <SwiperSlide className="flex place-items-center">
          <Image src={slide4} alt="slide_image"  className="object-cover rounded-lg"/>
        </SwiperSlide>
        <SwiperSlide className="flex place-items-center">
          <Image src={slide5} alt="slide_image"  className="object-cover rounded-lg"/>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

