import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./swiper.scss";
import "swiper/css/mousewheel"

import "./Swiper.css";

// import required modules
import { FreeMode, Navigation, Thumbs,Mousewheel } from "swiper/modules";

export default function App() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="h-auto">
      <Swiper
        style={{
          "--swiper-navigation-color": "#f0000",
          "--swiper-navigation-background": "#ffffff",

          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs, Mousewheel]}
        className=" mySwiper2 h-auto"
        autoplay={300}
      >
        <SwiperSlide className="swippp">
          <img src="https://assets.chakana.uz/banner/middle/65fadf2c8976d.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://assets.chakana.uz/banner/middle/658bfc02353ab.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://assets.chakana.uz/banner/middle/65fae55ed2cf2.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://assets.chakana.uz/banner/middle/65547ec263c95.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://assets.chakana.uz/banner/middle/65fc12456cc7f.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://assets.chakana.uz/banner/middle/65fc1529361b1.png" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
