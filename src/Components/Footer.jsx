import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [brands, setBrands] = useState([]);
  useEffect(() => {
    fetch("/brands.json")
      .then((res) => res.json())
      .then((data) => setBrands(data));
  }, []);

  return (
    <>
      <footer className="bg-dark text-white py-16">
        <div className="max-w-3xl mx-auto px-2 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-4xl pb-2 font-semibold text-white text-center md:text-left">
              Apparel
            </h3>
            <span className="block text-sm text-gray-2 text-center md:text-left">
              Elegance in Fashion
            </span>
          </div>
          <div className="flex flex-col items-center md:items-start gap-2">
            <h3 className="font-medium text-xl text-gray-1">Products</h3>
            <ul className="text-gray-2 flex flex-row md:flex-col gap-2 flex-wrap justify-center items-start">
              {brands.map((item) => (
                <li key={item.id}>
                  <Link to={`/${item.id}`}>{item.brand_name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col items-center md:items-start gap-2">
            <h3 className="font-medium text-xl text-gray-1">Products</h3>
            <ul className="text-gray-2 flex flex-row md:flex-col gap-2 flex-wrap justify-center items-start">
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/add-product"}>Add Product</Link>
              </li>
              <li>
                <Link to={"/my-cart"}>My Cart</Link>
              </li>
            </ul>
          </div>
        </div>
        <p className="text-center text-base pt-8 text-gray-2">
          © 2023 - By Mehedi
        </p>
      </footer>
    </>
  );
};

export default Footer;
