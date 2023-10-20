import React, { useContext, useEffect, useState } from "react";
import CartCard from "../Components/Shop/CartCard";
import { AuthContext } from "../Provider/AuthProvider";
import Loading from "../Components/Loading";

const Cart = () => {
  const { user } = useContext(AuthContext);
  const [cartItems, setCartItems] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:5000/user/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setCartItems(data.cart);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (!loading) {
      fetch(`http://localhost:5000/cart-products`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ cartItems }),
      })
        .then((res) => res.json())
        .then((data) => {
          setCartProducts(data);
        });
    }
  }, [cartItems, loading]);

  // console.log(cartProducts);
  // console.log(cartItems);

  return (
    <div className="container mx-auto px-4 py-4">
      <h1 className="text-3xl lg:text-5xl text-center font-medium py-8">
        My Cart
      </h1>

      {loading == true ? (
        <Loading />
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {cartProducts.map((product) => (
            <CartCard key={product._id} data={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
