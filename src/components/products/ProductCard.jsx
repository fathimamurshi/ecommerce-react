import { useNavigate } from "react-router-dom";
import { addToCart } from "../../utils/Cart";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/products/${product.id}`)}
      className="bg-white border p-4 rounded-lg shadow hover:shadow-lg transition cursor-pointer"
    >
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

      {/* <button className="bg-black text-white px-4 py-2 mt-3 rounded w-full hover:bg-gray-800">
        Add to Cart
      </button> */}
      <button
        onClick={(e) => {
          e.stopPropagation(); // prevent navigation
          addToCart(product);
          alert("Added to cart");
        }}
        className="bg-black text-white px-4 py-2 mt-3 rounded w-full hover:bg-gray-800"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;