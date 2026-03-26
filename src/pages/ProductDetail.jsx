import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAllProducts } from "../api";

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            const data = await getAllProducts();

            const singleProduct = data.find(
                (item) => item.id === Number(id)
            );

            setProduct(singleProduct);
        };

        fetchProduct();
    }, [id]);

    if (!product) {
        return <p className="text-center mt-10">Loading...</p>;
    }

    return (
        <div className="max-w-5xl mx-auto p-8 grid md:grid-cols-2 gap-10">

            <img
                src={product.images?.[0]}
                alt={product.title}
                className="w-full h-96 object-contain"
            />

            <div>
                <h1 className="text-3xl font-bold">{product.title}</h1>

                <p className="text-gray-600 mt-4">
                    {product.description}
                </p>

                <p className="text-2xl font-semibold mt-6">
                    ${product.price}
                </p>

                <div className="flex gap-4 mt-6">
                    <button className="px-6 py-3 bg-black text-white rounded hover:bg-gray-800">
                        Add to Cart
                    </button>

                    <button className="px-6 py-3 bg-green-600 text-white rounded hover:bg-green-700">
                        Order Now
                    </button>
                </div>
            </div>

        </div>
    );
};

export default ProductDetails;