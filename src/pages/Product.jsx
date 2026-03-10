import React, { useEffect, useState } from "react";
import ProductCard from "../components/products/ProductCard";
import { getAllProducts } from "../api";


const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllProducts();
      setProducts(data);
    };

    fetchData();
  }, []);

  return (
    <section className="max-w-7xl mx-auto p-8">
      <h1 className="text-4xl font-bold text-center mb-10">
        All Products
      </h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </section>
  );
};

export default Products;