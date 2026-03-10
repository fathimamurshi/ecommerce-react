import React, { useEffect, useState } from "react";
import { getAllProducts } from "../../api";

const FeaturedProducts = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {

    const fetchProducts = async () => {
      const data = await getAllProducts();
      setProducts(data);
    };

    fetchProducts();

  }, []);

  return (
    <section className="px-10 py-12 bg-gray-100">

      <h2 className="text-3xl font-bold text-center mb-10">
        Featured Products
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

        {products?.map((product) => (

          <div
            key={product.id}
            className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition duration-300"
          >

            <img
              src={product.image}
              alt={product.title}
              className="h-40 mx-auto object-contain"
            />

            <h3 className="mt-4 text-sm font-semibold line-clamp-2">
              {product.title}
            </h3>

            <p className="text-lg font-bold text-blue-600 mt-2">
              ${product.price}
            </p>

            <button
              className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Add to Cart
            </button>

          </div>

        ))}

      </div>

    </section>
  );
};

export default FeaturedProducts;