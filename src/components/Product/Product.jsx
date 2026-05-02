import React, { use } from "react";
import ProductCard from "../ProductCard/ProductCard";

const Product = ({ productsPromise }) => {
  const products = use(productsPromise);

  return (
    <section>
      <div>
        <p className="text-[#001931] text-2xl sm:text-3xl md:text-5xl font-bold leading-tight mt-20 mb-10">
          All{" "}
          <span className="bg-gradient-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
            Products
          </span>
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Product;
