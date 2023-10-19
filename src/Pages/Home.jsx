import React from "react";
import Banner from "../Components/Header/Banner";
import Brands from "../Components/Brands/Brands";
import LatestProducts from "../Components/LatestProducts";
import Instagram from "../Components/Instagram";

const Home = () => {
  return (
    <>
      <Banner />
      <Brands />
      <LatestProducts />
      <Instagram />
    </>
  );
};

export default Home;
