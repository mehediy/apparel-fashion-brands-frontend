import { Rating } from "@smastrom/react-rating";
import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";

const ProductDetails = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const { image, brand, name, description, price } = product;
  useEffect(() => {
    fetch(`http://localhost:5000/product/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  const addToCartHandler = (id) => {
    const email = user.email;
    const cart = [id];

    const newCart = { email, cart };
    // console.log(newCart);
    fetch(`http://localhost:5000/user/${email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCart),
    })
      .then((res) => res.json())
      .then((data) => {
        if ((data.modifiedCount || data.upsertedCount) == 1) {
          toast.success("Added to cart!");
        } else if (data.modifiedCount == 0 && data.matchedCount == 1) {
          toast.success("Already added to cart!");
        }
      });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex gap-8 flex-col md:flex-row">
        <div className="h-full w-full md:w-[40%] overflow-hidden rounded">
          <img className="h-full" src={image} />
        </div>
        <div className="w-full md:w-[60%] flex flex-col gap-4 items-start">
          <div className="text-base text-white bg-accent-1 px-2 py-1 rounded-md">
            <span>{brand}</span>
          </div>
          <h1 className="text-3xl font-medium md:text-4xl">{name}</h1>
          <p>{description}</p>
          <p className="font-medium">Price: {price} Tk</p>
          <Rating style={{ maxWidth: 120 }} value={product.rating} readOnly />

          <div className="flex gap-2">
            <button
              onClick={() => addToCartHandler(id)}
              className="bg-primary text-white hover:bg-accent-1 px-4 py-1 rounded y transition duration-150 hover:ease-in-out text-center outline outline-1 outline-primary hover:outline-accent-1"
            >
              Add to cart
            </button>
            <Link
              to={`/product/update/${id}`}
              className="bg-white hover:bg-accent-1 hover:text-white px-4 py-1 rounded y transition duration-150 hover:ease-in-out text-center outline outline-1 outline-gray-2 hover:outline-accent-1"
            >
              Update
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
