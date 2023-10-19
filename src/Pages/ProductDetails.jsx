import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { brand: brandId, id } = useParams();
  const [product, setProduct] = useState([]);
  const { image, brand, name, description, price } = product;
  useEffect(() => {
    fetch(`http://localhost:5000/product/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  const addToCartHandler = (id) => {
    console.log(id);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex gap-8 flex-col md:flex-row">
        <div className="h-[300px] w-full md:w-[40%] sm:h-[400] md:h-[500px] overflow-hidden rounded">
          <img className="" src={image} />
        </div>
        <div className="w-full md:w-[60%] flex flex-col gap-4 items-start">
          <div className="text-base text-white bg-accent-1 px-2 py-1 rounded-md">
            <span>{brand}</span>
          </div>
          <h1 className="text-3xl font-medium md:text-4xl">{name}</h1>
          <p>{description}</p>
          <p className="font-medium">Price: {price} Tk</p>
          <button
            onClick={() => addToCartHandler(id)}
            className="bg-primary text-white hover:bg-accent-1 px-4 py-1 rounded y transition duration-150 hover:ease-in-out text-center"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
