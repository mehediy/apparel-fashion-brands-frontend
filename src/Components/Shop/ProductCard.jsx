import { Link } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";

const ProductCard = ({ productData }) => {
  const { _id, brandId, name, brand, type, image, price, rating } = productData;
  return (
    <div className="relative shadow-md hover:shadow-lg transition duration-150 hover:ease-in-out flex items-center justify-between flex-col">
      <div className="w-full">
        <div className="rounded-t overflow-hidden h-[300px] max-w-full mx-auto">
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
          className="bg-gray-1 hover:bg-primary hover:text-white px-2 py-1 rounded outline outline-1 outline-gray-2 hover:outline-primary transition duration-150 hover:ease-in-out w-full text-center"
        >
          Details
        </Link>
        <Link
          to={`/product/update/${_id}`}
          className="bg-white hover:bg-accent-1 hover:text-white px-2 py-1 rounded outline outline-1 outline-gray-2 hover:outline-accent-1 transition duration-150 hover:ease-in-out w-full text-center"
        >
          Update
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
