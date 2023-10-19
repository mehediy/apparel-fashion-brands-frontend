import React from "react";
import banner1 from "./../../assets/banner-1.jpg";
import banner2 from "./../../assets/banner-2.webp";
import banner3 from "./../../assets/aarong-1.webp";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Slider.css";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Slider = () => {
  return (
    <>
      <div className="max-w-[1920px] mx-auto h-[200px] md:h-[450px] xl:h-[600px]">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={banner1} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={banner2} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={banner3} />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Slider;
