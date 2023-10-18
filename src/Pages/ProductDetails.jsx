import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { brand: brandId, id } = useParams();
  const [product, setProduct] = useState([]);
  const { image, brand, name, description, price } = product;
  useEffect(() => {
    fetch(`http://localhost:5000/products/${brandId}/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  return (
    <div className="container mx-auto px-4 pb-8">
      <div className="flex flex-col items-start gap-2">
        <div className="h-[400px]">
          <img className="h-full" src={image} />
        </div>
        <div className="text-base text-white bg-accent-1 px-2 py-1 rounded-md">
          <span>{brand}</span>
        </div>
        <h1 className="text-4xl">{name}</h1>
        <p>{description}</p>
        <p className="font-medium">Price: {price} Tk</p>
        <button className="bg-primary text-white hover:bg-accent-1 px-4 py-1 rounded y transition duration-150 hover:ease-in-out text-center">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
