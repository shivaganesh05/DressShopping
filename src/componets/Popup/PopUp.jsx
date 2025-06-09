import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import OrderForm from "../OrderForm";

const Popup = ({ orderPopup, setOrderPopup, cart, handleRemoveFromCart }) => {
  const [orderFormVisible, setOrderFormVisible] = useState(false);

  return (
    <>
      {orderPopup && (
        <div className="popup">
          <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white dark:bg-gray-900 rounded-md duration-200 w-[400px]">
              <div className="flex items-center justify-between">
                <h1 className="text-xl font-bold">Cart Items </h1>
                <IoCloseOutline
                  className="text-2xl cursor-pointer"
                  onClick={() => setOrderPopup(false)}
                />
              </div>
              <div className="mt-4">
                {cart.length > 0 ? (
                  cart.map((product) => (
                    <div
                      key={product.id}
                      className="flex items-center justify-between mb-4"
                    >
                      <div className="flex items-center gap-4">
                        <img
                          src={product.img}
                          alt={product.title}
                          className="w-10 h-10"
                        />
                        <div>
                          <h2 className="text-sm font-semibold">
                            {product.title}
                          </h2>
                          <p className="text-xs text-gray-500">
                            {product.description}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          className="text-red-500 text-xs ml-4"
                          onClick={() => handleRemoveFromCart(product.id)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-center text-sm text-gray-500">
                    No items in the cart.
                  </p>
                )}
              </div>
              <div className="mt-4 flex justify-center">
                <button
                  className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-1 px-4 rounded-full"
                  onClick={() => setOrderFormVisible(true)}
                >
                  Order
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Order Form */}
      {orderFormVisible && (
        <div className="fixed top-0 left-0 h-screen w-screen bg-black/50 z-50 flex justify-center items-center">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-md w-[400px] shadow-lg">
            {/* <h2 className="text-xl font-bold mb-4">Order Form</h2> */}
            <OrderForm closeForm={() => setOrderFormVisible(false)} cart={cart} />
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
