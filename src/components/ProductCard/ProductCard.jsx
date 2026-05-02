import React from "react";
import { Link } from "react-router";

const ProductCard = ({ product }) => {
  const { _id, title, minPrice, maxPrice, productImage } = product;

  return (
    <div className="bg-white rounded-2xl p-4 flex flex-col gap-3 border border-gray-100 shadow-sm">
      {/* Image — fixed height + object-cover ensures ALL images look the same */}
      <div className="w-full h-44 rounded-xl overflow-hidden bg-gray-100 flex-shrink-0">
        <img
          src={productImage}
          alt={title}
          className="w-full h-full object-cover object-center block"
          onError={(e) => {
            e.target.src =
              "https://placehold.co/400x300/f3f4f6/9ca3af?text=No+Image";
          }}
        />
      </div>

      {/* Badge */}
      <span className="inline-block bg-purple-100 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full w-fit">
        On Sale
      </span>

      {/* Title */}
      <h2 className="text-base font-bold text-gray-900 leading-snug m-0 text-left line-clamp-2">
        {title}
      </h2>

      {/* Price */}
      <p className="text-purple-600 font-bold text-base m-0 text-left">
        $ {minPrice} – {maxPrice}
      </p>

      {/* Button */}
      <Link
        to={`/productDetails/${_id}`}
        className="w-full py-3 rounded-md border border-purple-600 text-purple-600 font-bold text-sm hover:bg-purple-600 hover:text-white transition-colors cursor-pointer bg-transparent"
      >
        View Details
      </Link>
    </div>
  );
};

export default ProductCard;
