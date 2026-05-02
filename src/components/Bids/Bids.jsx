import React, { useEffect, useState } from "react";

const Bids = ({ bid, index }) => {
  const { product_id, bidPrice } = bid;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/products/${product_id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [product_id]);

  return (
    <tr className="hover:bg-gray-50 transition-colors">
      {/* SL */}
      <td className="px-5 py-4 text-gray-400 font-semibold">{index + 1}</td>

      {/* Product */}
      <td className="px-5 py-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-lg overflow-hidden bg-gray-100 shrink-0">
            <img
              src={product?.productImage}
              alt={product?.title}
              className="w-full h-full object-cover"
              onError={(e) => (e.target.style.display = "none")}
            />
          </div>
          <div>
            <p className="font-semibold text-gray-800 leading-tight line-clamp-1">
              {product?.title ?? "Loading..."}
            </p>
            <p className="text-xs text-gray-400 mt-0.5">
              ৳ {Number(product?.minPrice).toLocaleString()}
            </p>
          </div>
        </div>
      </td>

      {/* Seller */}
      <td className="px-5 py-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full overflow-hidden bg-gray-100 shrink-0">
            <img
              src={product?.sellerImage}
              alt={product?.sellerName}
              className="w-full h-full object-cover"
              onError={(e) => (e.target.style.display = "none")}
            />
          </div>
          <div>
            <p className="font-semibold text-gray-800 text-sm leading-tight">
              {product?.sellerName ?? "—"}
            </p>
            <p className="text-xs text-gray-400 mt-0.5">
              {product?.sellerEmail}
            </p>
          </div>
        </div>
      </td>

      {/* Bid Price */}
      <td className="px-5 py-4 font-bold text-gray-800">
        ৳ {Number(bidPrice).toLocaleString()}
      </td>

      {/* Status */}
      <td className="px-5 py-4">
        <span className="bg-amber-100 text-amber-600 text-xs font-bold px-3 py-1 rounded-full">
          Pending
        </span>
      </td>

      {/* Actions */}
      <td className="px-5 py-4">
        <button className="text-xs font-bold text-red-500 border border-red-400 px-3 py-1.5 rounded-lg hover:bg-red-500 hover:text-white transition-colors duration-200 cursor-pointer bg-transparent">
          Remove Bid
        </button>
      </td>
    </tr>
  );
};

export default Bids;
