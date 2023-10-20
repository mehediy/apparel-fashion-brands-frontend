import React, { useEffect, useState } from "react";
import Brand from "./Brand";
import Loading from "../Loading";

const Brands = () => {
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    fetch("./brands.json")
      .then((res) => res.json())
      .then((data) => {
        setBrands(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container mx-auto pt-16 pb-16 px-4 lg:px-8">
      <div className="pb-8 text-center">
        <h2 className="text-dark text-4xl md:text-5xl font-medium pb-2">
          Brands
        </h2>
        <h3 className="text-gray-3">Favorite brands in one place</h3>
      </div>
      {loading ? (
        <Loading />
      ) : (
        <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          {brands.map((brand) => (
            <Brand key={brand.id} brand={brand} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Brands;
