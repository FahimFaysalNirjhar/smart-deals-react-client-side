import React from "react";
import Product from "../../components/Product/Product";

const productsPromise = fetch(
  "https://smart-deals-server-weld.vercel.app/products",
).then((res) => res.json());

const Products = () => {
  return (
    <div className="min-h-screen text-center bg-[#E9E9E9] flex items-center justify-center ">
      <Product productsPromise={productsPromise}></Product>
    </div>
  );
};

export default Products;
