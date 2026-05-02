import React from "react";
import { Link } from "react-router";

const ShowAll = () => {
  return (
    <div className=" bg-[#E9E9E9] text-center">
      <div className="pb-20">
        <Link
          to="/products"
          className="px-6 py-3 rounded-md bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white font-medium shadow-md"
        >
          Show All
        </Link>
      </div>
    </div>
  );
};

export default ShowAll;
