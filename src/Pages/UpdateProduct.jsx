import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const UpdateProduct = () => {
  const { id } = useParams();
  const product = useLoaderData();
  const [brands, setBrands] = useState([]);
  const [currentBrandId, setCurrentBrandId] = useState(product.brandId);
  const [loading, setLoading] = useState(true);

  const selectedBrand = brands?.find((brand) => brand.id === currentBrandId);
  // console.log(selectedBrand);
  // console.log(selectedBrand);

  useEffect(() => {
    setLoading(true);
    fetch("/brands.json")
      .then((res) => res.json())
      .then((data) => {
        setBrands(data);
        setLoading(false);
      });
  }, []);

  const updateProductHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const brandId = selectedBrand.id;
    const brand = selectedBrand.brand_name;
    const type = form.type.value;
    const price = form.price.value;
    const description = form.description.value;
    const image = form.image.value;
    const rating = form.rating.value;

    const updatedProduct = {
      name,
      brandId,
      brand,
      type,
      price,
      description,
      image,
      rating,
    };

    fetch(`http://localhost:5000/products/${currentBrandId}/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center flex flex-col gap-2 pb-16">
        <h1 className="text-dark text-5xl">Update Product</h1>
        <h3 className="text-gray-3">Need to change something? Update it!</h3>
      </div>
      <form className="max-w-2xl mx-auto" onSubmit={updateProductHandler}>
        <div className="flex gap-4">
          <div className="grid grid-cols-2 gap-4 w-full">
            <label className="font-medium text-xl">
              Name
              <input
                className="block outline outline-1 outline-gray-2 focus:outline-primary my-2 p-2 w-full text-base font-normal rounded-md"
                type="text"
                name="name"
                placeholder="Enter product name"
                defaultValue={product.name}
                required
              />
            </label>
            <label className="font-medium text-xl">
              Brand
              {loading || (
                <select
                  className="block outline outline-1 outline-gray-2 focus:outline-primary my-2 p-2 w-full text-base font-normal rounded-md"
                  name="brand"
                  onChange={(e) => setCurrentBrandId(e.target.value)}
                  defaultValue={product.brandId}
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
              )}
            </label>

            <label className="font-medium text-xl">
              Type
              {loading || (
                <select
                  className="block outline outline-1 outline-gray-2 focus:outline-primary my-2 p-2 w-full text-base font-normal rounded-md"
                  name="type"
                  required
                  defaultValue={product.type}
                >
                  {/* Brand specific types */}
                  <option value={""} disabled>
                    Select brand
                  </option>
                  {brands
                    ?.find((brand) => brand.id === currentBrandId)
                    ?.types?.map((type) => (
                      <option key={type}>{type}</option>
                    ))}
                </select>
              )}
            </label>

            <label className="font-medium text-xl">
              Price
              <input
                className="block outline outline-1 outline-gray-2 focus:outline-primary my-2 p-2 w-full text-base font-normal rounded-md"
                type="number"
                name="price"
                placeholder="Enter product price in Taka"
                defaultValue={product.price}
                required
              />
            </label>

            <label className="font-medium text-xl col-span-2">
              Short description
              <textarea
                className="block outline outline-1 outline-gray-2 focus:outline-primary my-2 p-2 w-full text-base font-normal rounded-md"
                name="description"
                placeholder="Enter product short description"
                defaultValue={product.description}
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
                defaultValue={product.image}
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
                defaultValue={product.rating}
                required
              />
            </label>

            <button
              type="submit"
              className="bg-secondary-1 text-2xl py-1 block w-full font-normal rounded-md col-span-2 outline outline-1 outline-primary hover:bg-primary hover:text-white transition duration-150 hover:ease-in-out"
            >
              Update Product
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateProduct;
