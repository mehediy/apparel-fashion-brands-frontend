import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Slider.css";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Slider = ({ banners }) => {
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
          {banners.map((item, idx) => (
            <SwiperSlide key={idx}>
              <img src={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Slider;
