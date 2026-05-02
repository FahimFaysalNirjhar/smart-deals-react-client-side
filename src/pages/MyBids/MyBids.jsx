import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthContext";
import Bids from "../../components/Bids/Bids";

const MyBids = () => {
  const { user } = use(AuthContext);
  const [bids, setBids] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/bids?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setBids(data));
  }, [user]);

  return (
    <div className="min-h-screen bg-[#E9E9E9] px-4 py-16">
      <p className="text-[#001931] text-2xl sm:text-3xl md:text-5xl font-bold leading-tight text-center mb-10">
        My Bids:{" "}
        <span className="bg-gradient-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
          {bids.length}
        </span>
      </p>

      <div className="max-w-6xl mx-auto overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
        <table className="w-full text-sm text-left bg-white">
          <thead className="bg-gray-50 text-xs text-gray-500 uppercase tracking-wide border-b border-gray-100">
            <tr>
              <th className="px-5 py-4 font-semibold">SL</th>
              <th className="px-5 py-4 font-semibold">Product</th>
              <th className="px-5 py-4 font-semibold">Seller</th>
              <th className="px-5 py-4 font-semibold">Bid Price</th>
              <th className="px-5 py-4 font-semibold">Status</th>
              <th className="px-5 py-4 font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {bids.map((bid, index) => (
              <Bids key={bid._id} bid={bid} index={index} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBids;
