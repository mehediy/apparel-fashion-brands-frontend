import React, { useContext, useEffect, useState } from "react";
import CartCard from "../Components/Shop/CartCard";
import { AuthContext } from "../Provider/AuthProvider";
import Loading from "../Components/Loading";
import { toast } from "react-toastify";

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
        if (data && data.cart) {
          setCartItems(data.cart);
        }
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (!loading) {
      fetch(`http://localhost:5000/user/${user.email}`, {
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
  }, [cartItems]);

  const deleteHandler = (_id) => {
    fetch(`http://localhost:5000/user/${user.email}/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.modifiedCount == 1) {
          toast.success("Deleted!");
          const updatedCart = cartProducts.filter((item) => item._id !== _id);
          setCartProducts(updatedCart);
        }
      });
  };

  // console.log(cartItems);

  return (
    <div className="container mx-auto px-4 pt-4 pb-16">
      <h1 className="text-3xl lg:text-5xl text-center font-medium py-8">
        My Cart
      </h1>

      {loading === true ? (
        <Loading />
      ) : cartProducts.length === 0 ? (
        <p>No items in your cart</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {cartProducts.map((product) => (
            <CartCard
              key={product._id}
              data={product}
              deleteHandler={deleteHandler}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
