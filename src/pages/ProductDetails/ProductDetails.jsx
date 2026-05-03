import React, { use, useEffect, useRef, useState } from "react";
import { useLoaderData, Link } from "react-router";
import { AuthContext } from "../../Provider/AuthContext";
import Swal from "sweetalert2";
import ShowBids from "../../components/ShowBids/ShowBids";

const ProductDetails = () => {
  const { user } = use(AuthContext);
  const [bids, setBids] = useState([]);
  const { displayName, email, photoURL } = user;
  console.log(user);

  const product = useLoaderData();
  const bidModalRef = useRef();

  const handleModal = () => {
    bidModalRef.current.showModal();
  };

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

  const handleBidSubmit = (e) => {
    e.preventDefault();
    const product_id = _id;
    const buyerEmail = e.target.email.value;
    const buyerName = e.target.name.value;
    const buyerImage = e.target.photoUrl.value;
    const bidPrice = e.target.bid_price.value;
    const contact = e.target.phoneNumber.value;
    const created_at = new Date().toISOString();
    console.log(
      product_id,
      buyerEmail,
      buyerImage,
      buyerName,
      bidPrice,
      contact,
      created_at,
    );
    const newBid = {
      product_id,
      buyerEmail,
      buyerImage,
      buyerName,
      bidPrice,
      contact,
      created_at,
    };

    fetch("http://localhost:3000/bids", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBid),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("after bids placed", data);
        bidModalRef.current.close();
        Swal.fire({
          title: "Bid Submitted 🚀",
          text: "Seller will review your offer soon.",
          icon: "success",
          timer: 2000,
          showConfirmButton: false,
        });
      });
  };

  useEffect(() => {
    fetch(`http://localhost:3000/product/bids/${_id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        setBids(data);
      });
  }, [_id]);

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
          <button
            onClick={handleModal}
            className="w-full py-3 rounded-md text-white font-medium bg-gradient-to-br from-[#632EE3] to-[#9F62F2]"
          >
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

      <div className="px-4 py-16">
        <p className="text-[#001931] text-2xl sm:text-3xl md:text-5xl font-bold leading-tight mb-10">
          Bids For This Products:{" "}
          <span className="bg-gradient-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
            {bids.length}
          </span>
        </p>
        <div className="max-w-6xl mx-auto overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
          <table className="w-full text-sm text-left bg-white">
            <thead className="bg-gray-50 text-xs text-gray-500 uppercase tracking-wide border-b border-gray-100">
              <tr>
                <th className="px-5 py-4 font-semibold">SL</th>
                <th className="px-5 py-4 font-semibold">Bidder</th>
                <th className="px-5 py-4 font-semibold">Bid Price</th>
                <th className="px-5 py-4 font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {bids.map((bid, index) => (
                <ShowBids key={bid._id} bid={bid} index={index} />
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Open the modal using document.getElementById('ID').showModal() method */}
      {/* <button
        className="btn"
        onClick={() => document.getElementById("my_modal_5").showModal()}
      >
        open modal
      </button> */}
      <dialog ref={bidModalRef} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box max-w-2xl rounded-lg">
          {/* Title */}
          <h3 className="text-xl md:text-2xl font-bold text-center text-[#0F172A] mb-6">
            Give Seller Your Offered Price
          </h3>

          {/* Form */}
          <form
            onSubmit={handleBidSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {/* Buyer Name */}
            <div>
              <label className="text-sm font-medium">Buyer Name</label>
              <input
                type="text"
                name="name"
                value={displayName}
                placeholder="Your name"
                className="w-full mt-1 px-4 py-2 border rounded-md outline-none"
              />
            </div>

            {/* Buyer Email */}
            <div>
              <label className="text-sm font-medium">Buyer Email</label>
              <input
                type="email"
                name="email"
                value={email}
                placeholder="Your Email"
                className="w-full mt-1 px-4 py-2 border rounded-md outline-none"
              />
            </div>

            {/* Buyer Image */}
            <div className="md:col-span-2">
              <label className="text-sm font-medium">Buyer Image URL</label>
              <input
                type="text"
                name="photoUrl"
                value={photoURL}
                placeholder="https://...your_img_url"
                className="w-full mt-1 px-4 py-2 border rounded-md outline-none"
              />
            </div>

            {/* Offered Price */}
            <div className="md:col-span-2">
              <label className="text-sm font-medium">Place your Price</label>
              <input
                type="number"
                name="bid_price"
                placeholder="e.g. 25000"
                className="w-full mt-1 px-4 py-2 border rounded-md outline-none"
              />
            </div>

            {/* Contact */}
            <div className="md:col-span-2">
              <label className="text-sm font-medium">Contact Info</label>
              <input
                type="text"
                name="phoneNumber"
                placeholder="e.g. +8801XXXXXXXXX"
                className="w-full mt-1 px-4 py-2 border rounded-md outline-none"
              />
            </div>

            {/* Buttons */}
            <div className="md:col-span-2 flex justify-end gap-3 mt-6">
              {/* Cancel */}
              <form method="dialog">
                <button className="px-5 py-2 rounded-md border border-[#632EE3] text-[#632EE3] font-medium hover:bg-purple-50">
                  Cancel
                </button>
              </form>

              {/* Submit */}
              <button
                type="submit"
                className="px-5 py-2 rounded-md text-white font-medium bg-gradient-to-br from-[#632EE3] to-[#9F62F2]"
              >
                Submit Bid
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default ProductDetails;
