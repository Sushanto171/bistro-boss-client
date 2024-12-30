import { Autoplay, FreeMode, Navigation, Thumbs } from "swiper/modules";
// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import img1 from "../../../assets/home/01.jpg";
import img2 from "../../../assets/home/02.jpg";
import img3 from "../../../assets/home/03.png";
import img4 from "../../../assets/home/04.jpg";
import img5 from "../../../assets/home/05.png";
import img6 from "../../../assets/home/06.png";
// Import Swiper styles
import { useState } from "react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./styles.css";
const Banner = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs, Pagination, Autoplay]}
        className="mySwiper2"
        pagination={{ clickable: true }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <div>
            <img src={img1} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={img2} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={img3} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={img4} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={img5} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={img6} alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper !w-4/12 mx-auto"
      >
        <SwiperSlide>
          <div>
            <img src={img1} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={img2} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={img3} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={img4} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={img5} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={img6} alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
