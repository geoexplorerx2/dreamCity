"use client"

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/controller";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/thumbs";
import "swiper/css/pagination"

import { Swiper, SwiperSlide } from "swiper/react";

export default Object.assign(Swiper, {
  Slide: SwiperSlide,
});



export * from "swiper";
export { useSwiper, useSwiperSlide } from "swiper/react";
