import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../Components/Shop/ProductCard";
import Slider from "../Components/Slider/Slider";
import Loading from "../Components/Loading";

const Products = () => {
  const { brand } = useParams();
  const [products, setProducts] = useState([]);
  const [bannerLoading, setBannerLoading] = useState(true);
  const [loading, setLoading] = useState(true);
  const [banners, setBanners] = useState([]);
  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:5000/products/${brand}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, [brand]);

  useEffect(() => {
    setBannerLoading(true);
    fetch("/banners.json")
      .then((res) => res.json())
      .then((data) => {
        setBanners(data[`${brand}`]);
        setBannerLoading(false);
      });
  }, [brand]);

  return (
    <div>
      {bannerLoading ? (
        <Loading />
      ) : banners.banner.length == 0 ? (
        ""
      ) : (
        <Slider banners={banners.banner} />
      )}
      <div className="container mx-auto px-4 pb-16">
        {loading ? (
          <div>
            <Loading />
          </div>
        ) : products.length == 0 ? (
          <div className="font-medium text-xl h-[200px] flex items-center justify-center">
            No products available
          </div>
        ) : (
          <div>
            <h1 className="font-medium text-3xl md:text-5xl pt-16 pb-8 flex items-center justify-center">
              Our collection
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {products.map((product) => (
                <ProductCard key={product._id} productData={product} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
