import React, { useEffect, useState } from "react";
import ProductCard from "../products/ProductCard";
import { getAllProducts } from "../../api";

const FeaturedProducts = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {

    const fetchProducts = async () => {
      const data = await getAllProducts();

      // show only first 8 products
      setProducts(data.slice(0,8));
    };

    fetchProducts();

  }, []);

  return (
    <section className="px-10 py-12 bg-gray-100">

      <h2 className="text-3xl font-bold text-center mb-10">
        Featured Products
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}

      </div>

    </section>
  );
};

export default FeaturedProducts;