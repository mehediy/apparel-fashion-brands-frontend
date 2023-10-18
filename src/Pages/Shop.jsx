import React from "react";
import Sidebar from "../Components/Shop/Sidebar";
import Products from "../Components/Shop/Products";

const Shop = () => {
  return (
    <div className="container mx-auto px-4 grid grid-cols-4 gap-4 py-4">
      <div className="bg-gray-1">
        <Sidebar />
      </div>
      <div className="col-span-3">
        <Products />
      </div>
    </div>
  );
};

export default Shop;
