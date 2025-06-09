import React from "react";

const ProductCard = ({ product, handleOrderPopup }) => {
  return (
    <div className="border p-4 rounded-md shadow-md">
      <img
        src={product.img}
        alt={product.title}
        className="w-32 h-32 object-cover mx-auto"
      />
      <h2 className="text-lg font-bold text-center mt-2">{product.title}</h2>
      <p className="text-sm text-gray-600 text-center">{product.description}</p>
      <div className="flex justify-center mt-4">
        <button
          className="bg-gradient-to-r from-primary to-secondary text-white py-1 px-4 rounded-full hover:scale-105 duration-200"
          onClick={() => handleOrderPopup(product)} // Pass product data
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;