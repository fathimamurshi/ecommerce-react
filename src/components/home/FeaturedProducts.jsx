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
    <div>

      {products?.map((product) => (
        <div key={product.id}>
          <h3>{product.title}</h3>
          <p>${product.price}</p>
        </div>
      ))}

    </div>
  );
};

export default FeaturedProducts;