import React from "react";
import CartCard from "../Components/Shop/CartCard";

const Cart = () => {
  return (
    <div className="container mx-auto px-4 py-4">
      <h1 className="text-3xl">Your Cart</h1>
      <CartCard />
    </div>
  );
};

export default Cart;
