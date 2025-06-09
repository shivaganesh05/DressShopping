import React from "react";
import Navbar from "./components/Navbar";
import { useCart } from "./CartContext";

const UserCart = () => {
  const { cartItems, removeFromCart } = useCart();

  return (
    <>
      <Navbar />
      <div>
        <h2 className="y-cart">Your Cart</h2>
        {cartItems.length === 0 ? (
          <p className="empty">Your Cart is Empty</p>
        ) : (
          <div>
            {cartItems.map((item) => (
              <div className="cart-section" key={item.id}>
                <div className="cart-img">
                  <img src={item.img} alt={item.title} />
                </div>
                <div className="cart-details">
                  <h3>{item.title}</h3>
                  <h2>{item.price}</h2>
                  <p>{item.description}</p>
                </div>
                <button
                  className="removeBtn"
                  onClick={() => removeFromCart(item)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default UserCart;
