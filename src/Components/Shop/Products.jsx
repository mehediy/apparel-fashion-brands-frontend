import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";

const Products = () => {
  const { brand } = useParams();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/products/${brand}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      {products.map((product) => (
        <ProductCard key={product._id} productData={product} />
      ))}
    </div>
  );
};

export default Products;
