import { useEffect, useState } from "react";

const AddProduct = () => {
  const [brands, setBrands] = useState([]);
  const [currentBrand, setCurrentBrand] = useState("");

  useEffect(() => {
    fetch("./brands.json")
      .then((res) => res.json())
      .then((data) => {
        setBrands(data);
      });
  }, []);

  const addProductHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const brand = form.brand.value;
    const type = form.type.value;
    const price = form.price.value;
    const image = form.image.value;
    const rating = form.rating.value;

    const newProduct = { name, brand, type, price, image, rating };
    console.log(newProduct);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center flex flex-col gap-2 pb-16">
        <h1 className="text-dark text-5xl">Add Product</h1>
        <h3 className="text-gray-3">Arrived new product? Add it!</h3>
      </div>
      <form className="max-w-2xl mx-auto" onSubmit={addProductHandler}>
        <div className="flex gap-4">
          <div className="grid grid-cols-2 gap-4 w-full">
            <label className="font-medium text-xl">
              Name
              <input
                className="block outline outline-1 outline-gray-2 focus:outline-primary my-2 p-2 w-full text-base font-normal rounded-md"
                type="text"
                name="name"
                placeholder="Enter product name"
                required
              />
            </label>
            <label className="font-medium text-xl">
              Brand
              <select
                className="block outline outline-1 outline-gray-2 focus:outline-primary my-2 p-2 w-full text-base font-normal rounded-md"
                name="brand"
                onChange={(e) => setCurrentBrand(e.target.value)}
                defaultValue={""}
                required
              >
                <option value={""} disabled>
                  Select brand
                </option>
                {brands.map((brand) => (
                  <option key={brand.id} value={brand.brand_name}>
                    {brand.brand_name}
                  </option>
                ))}
              </select>
            </label>

            <label className="font-medium text-xl">
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
                  ?.find((brand) => brand.brand_name === currentBrand)
                  ?.types?.map((type) => (
                    <option key={type}>{type}</option>
                  ))}
              </select>
            </label>

            <label className="font-medium text-xl">
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

            <label className="font-medium text-xl">
              Rating
              <input
                className="block outline outline-1 outline-gray-2 focus:outline-primary my-2 p-2 w-full text-base font-normal rounded-md"
                type="number"
                name="rating"
                placeholder="Rating between 0 - 5"
                min={0}
                max={5}
                required
              />
            </label>

            <button
              type="submit"
              className="bg-secondary-1 text-2xl py-1 block w-full font-normal rounded-md col-span-2 outline outline-1 outline-primary hover:bg-primary hover:text-white transition duration-150 hover:ease-in-out"
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
