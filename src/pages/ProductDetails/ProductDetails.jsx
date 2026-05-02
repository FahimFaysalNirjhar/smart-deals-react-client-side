import React from "react";
import { useLoaderData, Link } from "react-router";

const ProductDetails = () => {
  const product = useLoaderData();

  const {
    _id,
    title,
    category,
    minPrice,
    maxPrice,
    condition,
    usedTime,
    productImage,
    sellerName,
    location,
    description,
    created_at,
    status,
    sellerEmail,
    sellerContact,
    sellerImage,
  } = product;

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {/* Back */}
      <Link to="/products" className="text-sm text-gray-500 mb-3 inline-block">
        ← Back to Products
      </Link>

      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-2">
        {title}
      </h1>

      <span className="text-xs bg-purple-100 text-purple-600 px-3 py-1 rounded-full">
        {category}
      </span>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {/* LEFT IMAGE */}
        <div className="bg-gray-100 rounded-xl overflow-hidden">
          <img
            src={productImage}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* RIGHT INFO */}
        <div className="space-y-4">
          {/* Price */}
          <div className="bg-gray-100 p-4 rounded-xl">
            <h2 className="text-green-600 font-bold text-xl">
              $ {minPrice} - {maxPrice}
            </h2>
            <p className="text-sm text-gray-500">Price starts from</p>
          </div>

          {/* Product Details */}
          <div className="bg-gray-100 p-4 rounded-xl">
            <h3 className="font-semibold mb-2">Product Details</h3>
            <p className="text-sm text-gray-600">Product ID: {_id}</p>
            <p className="text-sm text-gray-600">
              Posted: {new Date(created_at).toLocaleDateString()}
            </p>
          </div>

          {/* Seller Info */}
          <div className="bg-gray-100 p-4 rounded-xl">
            <h3 className="font-semibold mb-3">Seller Information</h3>

            <div className="flex items-center gap-3 mb-3">
              <img
                src={sellerImage}
                alt={sellerName}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="font-medium">{sellerName}</p>
                <p className="text-xs text-gray-500">{sellerEmail}</p>
              </div>
            </div>

            <p className="text-sm text-gray-600">Location: {location}</p>

            <p className="text-sm text-gray-600">Contact: {sellerContact}</p>

            <p className="text-sm text-gray-600">
              Status:{" "}
              <span className="bg-yellow-200 text-yellow-800 px-2 py-1 rounded text-xs">
                {status}
              </span>
            </p>
          </div>

          {/* Button */}
          <button className="w-full py-3 rounded-md text-white font-medium bg-gradient-to-br from-[#632EE3] to-[#9F62F2]">
            I Want Buy This Product
          </button>
        </div>
      </div>

      {/* DESCRIPTION */}
      <div className="mt-8 bg-gray-100 p-5 rounded-xl">
        <h3 className="font-semibold mb-3">Product Description</h3>

        <div className="flex gap-6 text-sm mb-3">
          <p>
            <span className="text-purple-600 font-medium">Condition:</span>{" "}
            {condition}
          </p>
          <p>
            <span className="text-purple-600 font-medium">Usage Time:</span>{" "}
            {usedTime}
          </p>
        </div>

        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
