import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/scrollbar";
import { Scrollbar } from "swiper/modules";

export default function Popular() {
  return (
    <>
      <Swiper
        scrollbar={{
          hide: true,
        }}
        slidesPerView={5}
        modules={[Scrollbar]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://assets.chakana.uz/brand/image/no-image.png"
            alt=""
            className=" w-[100px] h-[10px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://assets.chakana.uz/brand//64ef3a9ff2c53.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://assets.chakana.uz/brand//64ef3a896f9b5.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://assets.chakana.uz/brand/image/no-image.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://assets.chakana.uz/brand//64ef3ac0d9742.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://assets.chakana.uz/brand//64ef38fc7bf17.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://assets.chakana.uz/brand//64ef3ac0d9742.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://assets.chakana.uz/brand/image/no-image.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://assets.chakana.uz/brand//64ef3a9ff2c53.png"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
