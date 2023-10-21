import { Rating } from "@smastrom/react-rating";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from "react-toastify";

const CartCard = ({ data, deleteHandler }) => {
  const { _id, brandId, name, brand, type, image, price, rating } = data;
  // const { user } = useContext(AuthContext);
  // const deleteHandler = (_id) => {
  //   fetch(`https://apparelfashion-server.vercel.app/user/${user.email}/${_id}`, {
  //     method: "DELETE",
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       if (data.modifiedCount == 1) {
  //         toast.success("Deleted!");
  //       }
  //     });
  // };
  return (
    <div className="relative shadow-md hover:shadow-lg transition duration-150 hover:ease-in-out flex items-center justify-between flex-col">
      <div className="w-full">
        <div className="rounded-t overflow-hidden h-[350px] max-w-full mx-auto">
          <img
            className="w-full h-full object-cover object-center min-w-full min-h-full"
            src={image}
            alt={name}
          />
        </div>

        <div className="absolute top-4 left-4 text-base text-white bg-accent-1 px-2 py-1 rounded-md">
          <span>{brand}</span>
        </div>

        <div className="flex flex-col w-full p-4 gap-1 text-base">
          <span className="text-sm text-gray-3">{type}</span>
          <Link to={`/brand/${brandId}/${_id}`}>
            <h2 className="font-medium text-lg">{name}</h2>
          </Link>

          <span>Price: {price} Tk</span>
          <Rating style={{ maxWidth: 120 }} value={rating} readOnly />
        </div>
      </div>

      <div className="flex justify-between p-4 gap-2 text-lg w-full">
        <Link
          to={`/brand/${brandId}/${_id}`}
          className="bg-gray-1 hover:bg-accent-1 hover:text-white px-2 py-1 rounded outline outline-1 outline-gray-2 hover:outline-accent-1 transition duration-150 hover:ease-in-out w-full text-center"
        >
          Details
        </Link>
        <button
          onClick={() => deleteHandler(_id)}
          className="bg-white hover:bg-primary hover:text-white px-2 py-1 rounded outline outline-1 outline-gray-2 hover:outline-primary transition duration-150 hover:ease-in-out w-full text-center"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default CartCard;
