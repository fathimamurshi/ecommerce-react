import React, { useEffect, useState } from "react";
import ProductCard from "../components/products/ProductCard";
import { getAllProducts } from "../api";
import { useLocation } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);

  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const searchTerm = query.get("search") || "";

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllProducts();

      const filtered = data.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      );

      setProducts(filtered);
    };

    fetchData();
  }, [searchTerm]);

  return (
    <section className="max-w-7xl mx-auto p-8">
      <h1 className="text-4xl font-bold text-center mb-10">
        All Products
      </h1>

      {products.length === 0 ? (
        <p className="text-center text-gray-500">No products found</p>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      )}
    </section>
  );
};

export default Products;