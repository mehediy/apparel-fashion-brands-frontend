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
            console.log(data);
            setLoading(false);
          });
      });
  }, []);

  console.log(cartProducts);
  // console.log(cartItems);

  return (
    <div className="container mx-auto px-4 py-4">
      <h1 className="text-3xl">Your Cart</h1>
      {loading ? (
        <Loading />
      ) : (
        cartProducts.map((product) => (
          <CartCard key={product._id} data={product} />
        ))
      )}
    </div>
  );
};

export default Cart;
