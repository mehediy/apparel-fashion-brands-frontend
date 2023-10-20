import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    fetch("/brands.json")
      .then((res) => res.json())
      .then((data) => {
        setBrands(data);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <footer className="bg-gray-1 text-dark py-16">
        <div className="max-w-3xl mx-auto px-2 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-4xl pb-2 font-semibold text-center md:text-left">
              Apparel
            </h3>
            <span className="block text-sm text-center md:text-left">
              Elegance in Fashion
            </span>
          </div>
          <div className="flex flex-col items-center md:items-start gap-2">
            <h3 className="font-medium text-xl">Products</h3>
            {loading ? (
              <p>...</p>
            ) : (
              <ul className="font-normal flex flex-row md:flex-col gap-4 flex-wrap justify-center items-start">
                {brands.map((item) => (
                  <li key={item.id}>
                    <Link to={`brand/${item.id}`}>{item.brand_name}</Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="flex flex-col items-center md:items-start gap-2">
            <h3 className="font-medium text-xl">Pages</h3>
            <ul className="font-normal flex flex-row md:flex-col gap-4 flex-wrap justify-center items-start">
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
        <p className="text-center text-base pt-8">© 2023 - By Mehedi</p>
      </footer>
    </>
  );
};

export default Footer;
