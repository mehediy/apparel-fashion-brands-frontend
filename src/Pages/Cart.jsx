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
  const [deleteComplete, setDeleteComplete] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:5000/user/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setCartItems(data.cart);
        setLoading(false);
      });
  }, [deleteComplete]);

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

  const deleteHandler = (_id) => {
    setDeleteComplete(false);
    fetch(`http://localhost:5000/user/${user.email}/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.modifiedCount == 1) {
          toast.success("Deleted!");
          setDeleteComplete(true);
        }
      });
  };

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
