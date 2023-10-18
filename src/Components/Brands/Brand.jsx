import React from "react";
import { Link } from "react-router-dom";

const Brand = ({ brand }) => {
  return (
    <Link
      to={`/brand/${brand.id}`}
      className="shadow-md hover:shadow-lg transition duration-150 hover:ease-in-out flex items-center justify-center flex-col p-4"
    >
      <div className="flex items-center justify-center h-[200px]">
        <img className="max-h-full" src={brand.logo} />
      </div>
      <p className="text-center pt-4 text-dark">{brand.brand_name}</p>
    </Link>
  );
};

export default Brand;
