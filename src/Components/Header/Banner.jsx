import React from "react";
import banner1 from "./../../assets/banner-1.jpg";
import banner2 from "./../../assets/banner-2.webp";
import banner3 from "./../../assets/aarong-1.webp";
import banner4 from "./../../assets/aarong-2.webp";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Banner.css";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

const Banner = () => {
  const [bannerLoading, setBannerLoading] = useState(true);
  const [banners, setBanners] = useState([]);
  return (
    <>
      <div className="max-w-[1920px] mx-auto h-[200px] sm:h-[350px] md:h-[600px] 2xl:h-[800px]">
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
            <Link to={"/brand/lereve"}>
              <img src={banner1} />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={"/brand/bata"}>
              <img src={banner2} />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={"/brand/aarong"}>
              <img src={banner3} />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={"/brand/aarong"}>
              <img src={banner4} />
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Banner;
