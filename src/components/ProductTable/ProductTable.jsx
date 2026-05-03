import React from "react";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

const ProductTable = ({ product, index, handleDelete, handleModal }) => {
  const navigate = useNavigate();
  const {
    _id,
    productImage: image,
    title: name,
    category,
    minPrice,
    maxPrice,
    status,
  } = product;

  const handleMakeSold = (id) => {
    console.log(id);
    Swal.fire({
      title: "Marked as Sold ✅",
      text: "Your product has been successfully marked as sold.",
      icon: "success",
      confirmButtonText: "Awesome!",
      confirmButtonColor: "#632EE3",
    });
    navigate("/products");
  };

  return (
    <tr className="hover:bg-gray-50 transition-colors duration-150">
      {/* SL No */}
      <td className="px-5 py-4 text-gray-500 font-medium">{index + 1}</td>

      {/* Image */}
      <td className="px-5 py-4">
        <img
          src={image}
          alt={name}
          className="w-12 h-12 object-cover rounded-lg bg-gray-100"
          onError={(e) => {
            e.target.style.background = "#e5e7eb";
            e.target.src = "";
          }}
        />
      </td>

      {/* Product Name */}
      <td className="px-5 py-4 font-medium text-gray-800">{name}</td>

      {/* Category */}
      <td className="px-5 py-4 text-gray-600">{category}</td>

      {/* Price */}
      <td className="px-5 py-4 font-semibold text-gray-800">
        {minPrice}-{maxPrice}
      </td>

      {/* Status */}
      <td className="px-5 py-4">
        <span
          className={`inline-block px-3 py-1 rounded-full text-xs font-semibold text-white ${
            status === "Sold" ? "bg-emerald-500" : "bg-amber-400"
          }`}
        >
          {status || "Pending"}
        </span>
      </td>

      {/* Actions */}
      <td className="px-5 py-4">
        <div className="flex items-center gap-2">
          <button
            onClick={() => handleModal(_id)}
            className="px-3 py-1 text-xs font-medium border border-violet-500 text-violet-500 rounded-md hover:bg-violet-50 transition-colors"
          >
            Edit
          </button>
          <button
            onClick={() => handleDelete(_id)}
            className="px-3 py-1 text-xs font-medium border border-red-500 text-red-500 rounded-md hover:bg-red-50 transition-colors"
          >
            Delete
          </button>
          <button
            onClick={() => handleMakeSold(_id)}
            disabled={status === "Sold"}
            className="px-3 py-1 text-xs font-medium border border-emerald-500 text-emerald-500 rounded-md hover:bg-emerald-50 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Make Sold
          </button>
        </div>
      </td>
    </tr>
  );
};

export default ProductTable;
