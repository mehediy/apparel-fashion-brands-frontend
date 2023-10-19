import React, { useEffect, useState } from "react";
import Brand from "./Brand";

const Brands = () => {
  const [brands, setBrands] = useState([]);
  useEffect(() => {
    fetch("./brands.json")
      .then((res) => res.json())
      .then((data) => setBrands(data));
  }, []);

  return (
    <div className="container mx-auto pt-16 pb-16 px-4 lg:px-8">
      <div className="pb-8 text-center">
        <h2 className="text-dark text-5xl font-medium">Brands</h2>
        <h3 className="text-gray-3">Favorite brands in one place</h3>
      </div>

      <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
        {brands.map((brand) => (
          <Brand key={brand.id} brand={brand} />
        ))}
      </div>
    </div>
  );
};

export default Brands;
