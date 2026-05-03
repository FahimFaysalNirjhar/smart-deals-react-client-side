import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthContext";
import ProductTable from "../../components/ProductTable/ProductTable";
import Swal from "sweetalert2";

const MyProducts = () => {
  const { user } = use(AuthContext);
  console.log(user);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/products?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        console.log(data);
      });
  }, [user]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Delete this product?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Delete",
      confirmButtonColor: "#EF4444",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "", "success");
        fetch(`http://localhost:3000/products/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount) {
              const remainingProducts = products.filter(
                (product) => product._id !== id,
              );
              setProducts(remainingProducts);
            }
          });
      }
    });
  };

  return (
    <div className="min-h-screen bg-[#E9E9E9] px-4 py-16">
      <p className="text-[#001931] text-2xl sm:text-3xl md:text-5xl font-bold leading-tight text-center mb-10">
        My Products:{" "}
        <span className="bg-gradient-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
          {products.length}
        </span>
      </p>

      <div className="max-w-6xl mx-auto overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
        <table className="w-full text-sm text-left bg-white">
          <thead className="bg-gray-50 text-xs text-gray-500 uppercase tracking-wide border-b border-gray-100">
            <tr>
              <th className="px-5 py-4 font-semibold">SL No</th>
              <th className="px-5 py-4 font-semibold">Image</th>
              <th className="px-5 py-4 font-semibold">Product Name</th>
              <th className="px-5 py-4 font-semibold">Category</th>
              <th className="px-5 py-4 font-semibold">Price</th>
              <th className="px-5 py-4 font-semibold">Status</th>
              <th className="px-5 py-4 font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {products.map((bid, index) => (
              <ProductTable
                handleDelete={handleDelete}
                key={bid._id}
                bid={bid}
                index={index}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyProducts;
