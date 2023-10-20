import React, { useEffect, useState } from "react";
import Banner from "../Components/Header/Banner";
import Brands from "../Components/Brands/Brands";
import LatestProducts from "../Components/LatestProducts";
import Instagram from "../Components/Instagram";
import Slider from "../Components/Slider/Slider";
import Loading from "../Components/Loading";

const Home = () => {
  const [bannerLoading, setBannerLoading] = useState(true);
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    setBannerLoading(true);
    fetch("/banners.json")
      .then((res) => res.json())
      .then((data) => {
        setBanners(data.all);
        setBannerLoading(false);
      });
  }, []);

  return (
    <>
      {/* <Banner /> */}
      {bannerLoading ? <Loading /> : <Slider banners={banners.banner} />}
      <Brands />
      <LatestProducts />
      <Instagram />
    </>
  );
};

export default Home;
