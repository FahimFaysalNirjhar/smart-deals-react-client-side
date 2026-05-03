import React, { use, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../Provider/AuthContext";
import ProductTable from "../../components/ProductTable/ProductTable";
import Swal from "sweetalert2";

const MyProducts = () => {
  const { user } = use(AuthContext);
  const [productId, setProductId] = useState(null);
  const { displayName, email, photoURL } = user;

  console.log(user);
  const bidModalRef = useRef(null);

  const handleModal = (id) => {
    bidModalRef.current.showModal();
    setProductId(id);
  };

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

  const handleUpdateProduct = (e) => {
    e.preventDefault();

    const createAt = new Date().toISOString();

    const title = e.target.title.value;
    const category = e.target.category.value;
    const minPrice = e.target.min_price.value;
    const maxPrice = e.target.max_price.value;
    const condition = e.target.condition.value;
    const usedTime = e.target.used_time.value;
    const productImage = e.target.productImage.value;
    const sellerName = e.target.sellerName.value;
    const location = e.target.location.value;
    const description = e.target.description.value;
    const created_at = createAt;
    const status = "pending";
    const sellerEmail = e.target.sellerEmail.value;
    const sellerContact = e.target.sellerContact.value;
    const sellerImage = e.target.sellerImage.value;
    const updatedProduct = {
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
    };

    fetch(`http://localhost:3000/products/${productId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("after update product", data);
        if (data.modifiedCount) {
          Swal.fire({
            title: "Success 🎉",
            text: "Your changes have been saved!",
            icon: "success",
            confirmButtonText: "Great!",
            confirmButtonColor: "#632EE3",
            backdrop: `rgba(99,46,227,0.2)`,
          });
          bidModalRef.current.close();
          const updatedProducts = products.map((product) =>
            product._id === productId
              ? { ...product, ...updatedProduct }
              : product,
          );
          setProducts(updatedProducts);
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
            {products.map((product, index) => (
              <ProductTable
                handleUpdateProduct={handleUpdateProduct}
                handleDelete={handleDelete}
                handleModal={handleModal}
                key={product._id}
                product={product} // ✅
                index={index}
              />
            ))}
          </tbody>
        </table>
      </div>

      <dialog ref={bidModalRef} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box max-w-2xl rounded-lg">
          {/* Title */}
          <h3 className="text-xl md:text-2xl font-bold text-center text-[#0F172A] mb-6">
            Edit Product Details
          </h3>

          {/* Form */}
          <form
            onSubmit={handleUpdateProduct}
            className="grid grid-cols-1 md:grid-cols-2 gap-5"
          >
            {/* Title */}
            <div>
              <label className="text-sm font-medium">Title</label>
              <input
                type="text"
                name="title"
                className="w-full mt-1 px-4 py-2 border rounded-md outline-none"
                required
              />
            </div>

            {/* Category */}
            <div>
              <label className="text-sm font-medium">Category</label>
              <select
                name="category"
                className="w-full mt-1 px-4 py-2 border rounded-md outline-none"
              >
                <option>Electronics</option>
                <option>Furniture</option>
                <option>Sports</option>
              </select>
            </div>

            {/* Min Price */}
            <div>
              <label className="text-sm font-medium">Min Price ($)</label>
              <input
                type="number"
                name="min_price"
                className="w-full mt-1 px-4 py-2 border rounded-md outline-none"
                required
              />
            </div>

            {/* Max Price */}
            <div>
              <label className="text-sm font-medium">Max Price ($)</label>
              <input
                type="number"
                name="max_price"
                className="w-full mt-1 px-4 py-2 border rounded-md outline-none"
              />
            </div>

            {/* Condition */}
            <div>
              <label className="text-sm font-medium block mb-2">
                Product Condition
              </label>
              <div className="flex items-center gap-4">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="condition"
                    value="fresh"
                    defaultChecked
                  />
                  Brand New
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="condition" value="used" />
                  Used
                </label>
              </div>
            </div>

            {/* Usage */}
            <div>
              <label className="text-sm font-medium">Usage Time</label>
              <input
                type="text"
                name="used_time"
                className="w-full mt-1 px-4 py-2 border rounded-md outline-none"
              />
            </div>

            {/* Product Image */}
            <div className="md:col-span-2">
              <label className="text-sm font-medium">Product Image URL</label>
              <input
                type="text"
                name="productImage"
                className="w-full mt-1 px-4 py-2 border rounded-md outline-none"
              />
            </div>

            {/* Seller Name */}
            <div>
              <label className="text-sm font-medium">Seller Name</label>
              <input
                type="text"
                name="sellerName"
                defaultValue={displayName}
                className="w-full mt-1 px-4 py-2 border rounded-md outline-none"
              />
            </div>

            {/* Seller Email */}
            <div>
              <label className="text-sm font-medium">Seller Email</label>
              <input
                type="email"
                name="sellerEmail"
                defaultValue={email}
                className="w-full mt-1 px-4 py-2 border rounded-md outline-none"
              />
            </div>

            {/* Seller Contact */}
            <div>
              <label className="text-sm font-medium">Seller Contact</label>
              <input
                type="text"
                name="sellerContact"
                className="w-full mt-1 px-4 py-2 border rounded-md outline-none"
              />
            </div>

            {/* Seller Image */}
            <div>
              <label className="text-sm font-medium">Seller Image URL</label>
              <input
                type="text"
                name="sellerImage"
                defaultValue={photoURL}
                className="w-full mt-1 px-4 py-2 border rounded-md outline-none"
              />
            </div>

            {/* Location */}
            <div className="md:col-span-2">
              <label className="text-sm font-medium">Location</label>
              <input
                type="text"
                name="location"
                className="w-full mt-1 px-4 py-2 border rounded-md outline-none"
              />
            </div>

            {/* Description */}
            <div className="md:col-span-2">
              <label className="text-sm font-medium">Description</label>
              <textarea
                rows="4"
                name="description"
                className="w-full mt-1 px-4 py-2 border rounded-md outline-none"
              ></textarea>
            </div>

            {/* Buttons */}
            <div className="md:col-span-2 flex justify-end gap-3 mt-6">
              {/* Cancel */}
              <button
                type="button"
                onClick={() => bidModalRef.current.close()}
                className="px-5 py-2 rounded-md border border-[#632EE3] text-[#632EE3]"
              >
                Cancel
              </button>

              {/* Submit */}
              <button
                type="submit"
                className="px-5 py-2 rounded-md text-white bg-gradient-to-br from-[#632EE3] to-[#9F62F2]"
              >
                Update Product
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default MyProducts;
