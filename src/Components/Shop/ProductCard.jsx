import { Link } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";

const ProductCard = ({ productData }) => {
  const { _id, brandId, name, brand, type, image, price, rating } = productData;
  return (
    <div className="relative shadow-md hover:shadow-lg transition duration-150 hover:ease-in-out flex items-center justify-between flex-col gap-6 p-4">
      <div>
        <div className="rounded h-[300px] flex items-center justify-center overflow-hidden">
          <img className="w-full" src={image} alt={name} />
        </div>

        <div className="absolute top-4 left-4 text-base text-white bg-accent-1 px-2 py-1 rounded-md">
          <span>{brand}</span>
        </div>

        <div className="flex flex-col w-full gap-1 text-base">
          <span className="text-sm text-gray-3">{type}</span>
          <Link to={`/brand/${brandId}/${_id}`}>
            <h2 className="font-medium text-lg">{name}</h2>
          </Link>

          <span>Price: {price} Tk</span>
          <Rating style={{ maxWidth: 120 }} value={rating} readOnly />
        </div>
      </div>
      <div className="flex justify-between gap-2 text-lg py-2 w-full">
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
