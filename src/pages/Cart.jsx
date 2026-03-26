import React, { useEffect, useState } from "react";
import { getCart, removeFromCart } from "../utils/cart";

const Cart = () => {
  const [cart, setCart] = useState([]);

  
  useEffect(() => {
    setCart(getCart());
  }, []);


  useEffect(() => {
    const updateCart = () => {
      setCart(getCart());
    };

    window.addEventListener("cartUpdated", updateCart);

    return () =>
      window.removeEventListener("cartUpdated", updateCart);
  }, []);
  const handleRemove = (id) => {
    removeFromCart(id);
  };

  if (cart.length === 0) {
    return <p className="text-center mt-10">Cart is empty</p>;
  }

  return (
    <div className="max-w-5xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">My Cart</h1>

      {cart.map((item) => (
        <div
          key={item.id}
          className="flex justify-between items-center border p-4 mb-4 rounded"
        >
          <div>
            <h2>{item.title}</h2>
            <p>
              ${item.price} × {item.quantity}
            </p>
          </div>

          <button
            onClick={() => handleRemove(item.id)}
            className="bg-red-500 text-white px-4 py-1 rounded"
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default Cart;