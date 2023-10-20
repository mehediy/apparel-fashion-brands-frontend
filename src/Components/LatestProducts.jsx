import React, { useEffect, useState } from "react";
import ProductCard from "../Components/Shop/ProductCard";
import Loading from "./Loading";

const LatestProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:5000/latest_products`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container mx-auto pt-12 pb-16 px-4 lg:px-8">
      <div className="pb-8 text-center">
        <h2 className="text-dark text-4xl md:text-5xl font-medium pb-2">
          New Arrivals
        </h2>
        <h3 className="text-gray-3">Latest products at a glance</h3>
      </div>
      {loading ? (
        <Loading />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-4 px-2">
          {products.map((product) => (
            <ProductCard key={product._id} productData={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default LatestProducts;
