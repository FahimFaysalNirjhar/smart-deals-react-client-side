import React from "react";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

const ShowBids = ({ bid, index }) => {
  const { buyerImage, buyerName, bidPrice } = bid;
  const navigate = useNavigate();

  const handleAcceptOffer = () => {
    Swal.fire({
      title: "Congratulations 🎉",
      text: "You have successfully accepted the offer!",
      icon: "success",
      confirmButtonText: "Great!",
      confirmButtonColor: "#632EE3",
    });
    navigate("/products");
  };

  const handleRejectOffer = () => {
    Swal.fire({
      title: "Offer Rejected ❌",
      text: "You have declined this offer.",
      icon: "error",
      confirmButtonText: "OK",
      confirmButtonColor: "#EF4444", // red
    });
    navigate("/products");
  };

  return (
    <tr className="hover:bg-gray-50 transition-colors">
      {/* SL */}
      <td className="px-5 py-4 text-gray-400 font-semibold">{index + 1}</td>

      {/* Bidder */}
      <td className="px-5 py-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full overflow-hidden bg-gray-100 shrink-0">
            <img
              src={buyerImage}
              alt={buyerName}
              className="w-full h-full object-cover"
              onError={(e) => (e.target.style.display = "none")}
            />
          </div>

          <p className="text-sm font-medium text-gray-800">{buyerName}</p>
        </div>
      </td>

      {/* Bid Price */}
      <td className="px-5 py-4 font-bold text-gray-800">
        $ {Number(bidPrice).toLocaleString()}
      </td>

      {/* Actions */}
      <td className="px-5 py-4 flex gap-2">
        <button
          onClick={handleAcceptOffer}
          className="text-xs font-bold text-[#4CAF50] border border-[#4CAF50] px-3 py-1.5 rounded-lg hover:bg-[#4CAF50] hover:text-white transition"
        >
          Accept Offer
        </button>

        <button
          onClick={handleRejectOffer}
          className="text-xs font-bold text-red-500 border border-red-400 px-3 py-1.5 rounded-lg hover:bg-red-500 hover:text-white transition"
        >
          Reject Offer
        </button>
      </td>
    </tr>
  );
};

export default ShowBids;
