import React from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectCoverflow } from "swiper";
import "swiper/css";

import slide1 from "@/assets/images/1.png";
import slide2 from "@/assets/images/2.png";
import slide3 from "@/assets/images/3.png";
import slide4 from "@/assets/images/4.png";
import slide5 from "@/assets/images/5.png";

SwiperCore.use([EffectCoverflow]);

export default function Carousel() {
  return (
    <div>
      <Swiper
        effect={"coverflow"}
        loop={true}
        centeredSlides={true}
        spaceBetween={50}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 200,
          depth: 80,
          modifier: 5,
          slideShadows: false,
        }}
        className="w-full bg-slate-300"
      >
        <div className="swiper-wrapper">
          <SwiperSlide className="h-[296px] w-[80%]">
            <Image src={slide1} alt="slide" />
          </SwiperSlide>
          <SwiperSlide className=" h-[296px] w-[80%]">
            <Image src={slide2} alt="slide" />
          </SwiperSlide>
          <SwiperSlide className="h-[296px] w-[80%]">
            <Image src={slide3} alt="slide" />
          </SwiperSlide>
          <SwiperSlide className="h-[296px] w-[80%]">
            <Image src={slide4} alt="slide" />
          </SwiperSlide>
          <SwiperSlide className=" h-[296px] w-[80%]">
            <Image src={slide5} alt="slide" />
          </SwiperSlide>
        </div>
      </Swiper>
    </div>
  );
}
