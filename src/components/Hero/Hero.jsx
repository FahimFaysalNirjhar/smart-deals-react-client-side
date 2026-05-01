import React from "react";
import { Link } from "react-router";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-[linear-gradient(127deg,#FFE6FD_5.68%,#E0F8F5_92.19%)] overflow-hidden px-4">
      {/* LEFT DECORATION */}
      <img
        src="/bg-hero-left.png"
        alt="left decoration"
        className="absolute left-0 top-1/2 -translate-y-1/2 w-72 md:w-[420px] opacity-40 pointer-events-none select-none"
      />

      {/* RIGHT DECORATION */}
      <img
        src="/bg-hero-right.png"
        alt="right decoration"
        className="absolute right-0 top-1/2 -translate-y-1/2 w-72 md:w-[420px] opacity-40 pointer-events-none select-none"
      />

      {/* MAIN CONTENT */}
      <div className="relative z-10 text-center max-w-3xl">
        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold text-[#0F172A] leading-tight">
          Deal Your <span className="text-[#8B5CF6]">Products</span>
          <br />
          In A <span className="text-[#8B5CF6]">Smart</span> Way !
        </h1>

        {/* Subtitle */}
        <p className="mt-5 text-[#627382] text-sm md:text-base max-w-2xl mx-auto">
          SmartDeals helps you sell, resell, and shop from trusted local sellers
          — all in one place!
        </p>

        {/* SEARCH BAR */}
        <div className="mt-8 flex justify-center">
          <div className="flex w-full max-w-xl bg-white rounded-full shadow-md overflow-hidden">
            <input
              type="text"
              placeholder="Search for products, categories..."
              className="w-full px-6 py-3 border-0 outline-none text-sm"
            />

            <button className="bg-gradient-to-br from-[#632EE3] to-[#9F62F2] px-5 flex items-center justify-center">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M17.5 17.5L13.8833 13.8833"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </button>
          </div>
        </div>

        {/* BUTTONS */}
        <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/products"
            className="px-6 py-3 rounded-md bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white font-medium shadow-md"
          >
            Watch All Products
          </Link>

          <Link
            to="/createProducts"
            className="px-6 py-3 rounded-md border border-[#7C3AED] font-medium"
          >
            <span className="bg-gradient-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
              Post an Product
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
