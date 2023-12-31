import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import { Rating } from "@smastrom/react-rating";

const AddProduct = () => {
  const brands = useLoaderData();
  const [currentBrandId, setCurrentBrandId] = useState("");
  const [rating, setRating] = useState(0);

  const selectedBrand = brands?.find((brand) => brand.id === currentBrandId);

  const addProductHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const brand = selectedBrand.brand_name;
    const type = form.type.value;
    const price = form.price.value;
    const description = form.description.value;
    const image = form.image.value;

    const newProduct = { name, brand, type, price, description, image, rating };
    fetch(
      `https://apparelfashion-server.vercel.app/products/${currentBrandId}`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newProduct),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged == true) {
          toast.success("Product added!");
        }
      });
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center flex flex-col gap-2 pb-16">
        <h1 className="text-dark text-4xl sm:text-5xl font-medium">
          Add Product
        </h1>
        <h3 className="text-gray-3">Arrived new product? Add it!</h3>
      </div>
      <form className="max-w-2xl mx-auto" onSubmit={addProductHandler}>
        <div className="flex gap-4">
          <div className="grid grid-cols-2 gap-4 w-full">
            <label className="font-medium text-xl col-span-2 md:col-span-1">
              Name
              <input
                className="block outline outline-1 outline-gray-2 focus:outline-primary my-2 p-2 w-full text-base font-normal rounded-md"
                type="text"
                name="name"
                placeholder="Enter product name"
                required
              />
            </label>
            <label className="font-medium text-xl col-span-2 md:col-span-1">
              Brand
              <select
                className="block outline outline-1 outline-gray-2 focus:outline-primary my-2 p-2 w-full text-base font-normal rounded-md"
                name="brand"
                onChange={(e) => setCurrentBrandId(e.target.value)}
                defaultValue={""}
                required
              >
                <option value={""} disabled>
                  Select brand
                </option>
                {brands.map((brand) => (
                  <option key={brand.id} value={brand.id}>
                    {brand.brand_name}
                  </option>
                ))}
              </select>
            </label>

            <label className="font-medium text-xl col-span-2 md:col-span-1">
              Type
              <select
                className="block outline outline-1 outline-gray-2 focus:outline-primary my-2 p-2 w-full text-base font-normal rounded-md"
                name="type"
                defaultValue={""}
                required
              >
                {/* Brand specific types */}
                <option disabled value="">
                  Select type
                </option>
                {brands
                  ?.find((brand) => brand.id === currentBrandId)
                  ?.types?.map((type) => (
                    <option key={type}>{type}</option>
                  ))}
              </select>
            </label>

            <label className="font-medium text-xl col-span-2 md:col-span-1">
              Price
              <input
                className="block outline outline-1 outline-gray-2 focus:outline-primary my-2 p-2 w-full text-base font-normal rounded-md"
                type="number"
                name="price"
                placeholder="Enter product price in Taka"
                required
              />
            </label>

            <label className="font-medium text-xl col-span-2">
              Short description
              <textarea
                className="block outline outline-1 outline-gray-2 focus:outline-primary my-2 p-2 w-full text-base font-normal rounded-md"
                name="description"
                placeholder="Enter product short description"
                required
              />
            </label>

            <label className="font-medium text-xl col-span-2">
              Product Image
              <input
                className="block outline outline-1 outline-gray-2 focus:outline-primary my-2 p-2 w-full text-base font-normal rounded-md"
                type="text"
                name="image"
                placeholder="Enter image URL"
                required
              />
            </label>

            <div className="col-span-2 md:col-span-1 flex gap-2 items-center">
              <p className="font-medium text-xl ">Rating</p>
              <Rating
                style={{ maxWidth: 150 }}
                value={rating}
                onChange={setRating}
              />
            </div>

            <button
              type="submit"
              className="mt-4 bg-secondary-1 text-lg md:text-2xl py-1 block w-full font-normal rounded-md col-span-2 outline outline-1 outline-primary hover:bg-primary hover:text-white transition duration-150 hover:ease-in-out"
            >
              Add Product
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
