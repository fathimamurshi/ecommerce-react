import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white border p-4 rounded-lg shadow hover:shadow-lg transition">

      <img
        src={product.images?.[0]}
        alt={product.title}
        className="h-40 mx-auto object-contain"
      />

      <h2 className="text-lg font-semibold mt-3">
        {product.title.slice(0, 30)}
      </h2>

      <p className="text-gray-600 mt-1">
        ${product.price}
      </p>

      <button className="bg-black text-white px-4 py-2 mt-3 rounded w-full hover:bg-gray-800">
        Add to Cart
      </button>

    </div>
  );
};

export default ProductCard;