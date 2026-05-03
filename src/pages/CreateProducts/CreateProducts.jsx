import React, { use } from "react";
import { AuthContext } from "../../Provider/AuthContext";
import Swal from "sweetalert2";

const CreateProducts = () => {
  const { user } = use(AuthContext);
  console.log(user);

  const handleCreateProduct = (e) => {
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

    // console.log(
    //   title,
    //   category,
    //   minPrice,
    //   maxPrice,
    //   condition,
    //   usedTime,
    //   productImage,
    //   sellerName,
    //   location,
    //   description,
    //   created_at,
    // );
    const newProduct = {
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
    console.log(newProduct);

    fetch("http://localhost:3000/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("after new product placed", data);
        e.target.reset();
        if (data.insertedId) {
          Swal.fire({
            title: "Created Successfully ✅",
            text: "Your product is now live.",
            icon: "success",
            timer: 2000,
            showConfirmButton: false,
          });
        }
      });
  };

  return (
    <div className="min-h-screen bg-[#E9E9E9] flex items-center justify-center p-14">
      <div>
        {/* Header */}
        <div className="text-center px-4">
          <h1 className="text-[#001931] text-sm sm:text-base md:text-lg font-medium mb-3 sm:mb-4">
            ← Back to Products
          </h1>

          <p className="text-[#001931] text-2xl sm:text-3xl md:text-5xl font-bold leading-tight">
            Create{" "}
            <span className="bg-gradient-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
              A Product
            </span>
          </p>
        </div>

        {/* Form */}
        <div className="min-h-screen flex items-center justify-center px-4 py-10">
          <div className="w-full max-w-3xl bg-white p-8 rounded-xl shadow">
            <form
              onSubmit={handleCreateProduct}
              className="grid grid-cols-1 md:grid-cols-2 gap-5"
            >
              {/* Title */}
              <div>
                <label className="text-sm font-medium">Title</label>
                <input
                  type="text"
                  name="title"
                  placeholder="e.g. Yamaha Fz Guitar for Sale"
                  className="w-full mt-1 px-4 py-2 border border-[#D2D2D2] rounded-md outline-none"
                  required
                />
              </div>

              {/* Category */}
              <div>
                <label className="text-sm font-medium">Category</label>
                <select
                  name="category"
                  className="w-full mt-1 px-4 py-2 border  border-[#D2D2D2] rounded-md outline-none"
                >
                  <option>Select a Category</option>
                  <option>Electronics</option>
                  <option>Furniture</option>
                  <option>Sports</option>
                </select>
              </div>

              {/* Min Price */}
              <div>
                <label className="text-sm font-medium">
                  Min Price You want to Sale ($)
                </label>
                <input
                  type="number"
                  name="min_price"
                  required
                  placeholder="e.g. 18.5"
                  className="w-full mt-1 px-4 py-2 border border-[#D2D2D2] rounded-md outline-none"
                />
              </div>

              {/* Max Price */}
              <div>
                <label className="text-sm font-medium">
                  Max Price You want to Sale ($)
                </label>
                <input
                  type="number"
                  name="max_price"
                  required
                  placeholder="Optional (default = Min Price)"
                  className="w-full mt-1 px-4 py-2 border border-[#D2D2D2] rounded-md outline-none"
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
                      value="fresh"
                      name="condition"
                      defaultChecked
                      required
                    />
                    Brand New
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="radio" value="used" name="condition" />
                    Used
                  </label>
                </div>
              </div>

              {/* Usage */}
              <div>
                <label className="text-sm font-medium">
                  Product Usage time
                </label>
                <input
                  type="text"
                  name="used_time"
                  required
                  placeholder="e.g. 1 year 3 month"
                  className="w-full mt-1 px-4 py-2 border border-[#D2D2D2] rounded-md outline-none"
                />
              </div>

              {/* Product Image */}
              <div className="md:col-span-2">
                <label className="text-sm font-medium">
                  Your Product Image URL
                </label>
                <input
                  required
                  type="text"
                  name="productImage"
                  placeholder="https://..."
                  className="w-full mt-1 px-4 py-2 border border-[#D2D2D2] rounded-md outline-none"
                />
              </div>

              {/* Seller Name */}
              <div>
                <label className="text-sm font-medium">Seller Name</label>
                <input
                  type="text"
                  name="sellerName"
                  required
                  defaultValue={user.displayName}
                  placeholder="e.g. Artisan Roasters"
                  className="w-full mt-1 px-4 py-2 border border-[#D2D2D2] rounded-md outline-none"
                />
              </div>

              {/* Seller Email */}
              <div>
                <label className="text-sm font-medium">Seller Email</label>
                <input
                  type="email"
                  name="sellerEmail"
                  required
                  defaultValue={user.email}
                  placeholder="leli31955@nlord.com"
                  className="w-full mt-1 px-4 py-2 border border-[#D2D2D2] rounded-md outline-none"
                />
              </div>

              {/* Seller Contact */}
              <div>
                <label className="text-sm font-medium">Seller Contact</label>
                <input
                  type="text"
                  name="sellerContact"
                  required
                  placeholder="e.g. +1-555-1234"
                  className="w-full mt-1 px-4 py-2 border border-[#D2D2D2] rounded-md outline-none"
                />
              </div>

              {/* Seller Image */}
              <div>
                <label className="text-sm font-medium">Seller Image URL</label>
                <input
                  type="text"
                  name="sellerImage"
                  required
                  defaultValue={user.photoURL}
                  placeholder="https://..."
                  className="w-full mt-1 px-4 py-2 border border-[#D2D2D2] rounded-md outline-none"
                />
              </div>

              {/* Location */}
              <div className="md:col-span-2">
                <label className="text-sm font-medium">Location</label>
                <input
                  type="text"
                  name="location"
                  required
                  placeholder="City, Country"
                  className="w-full mt-1 px-4 py-2 border border-[#D2D2D2] rounded-md outline-none"
                />
              </div>

              {/* Description */}
              <div className="md:col-span-2">
                <label className="text-sm font-medium">
                  Simple Description about your Product
                </label>
                <textarea
                  rows="4"
                  name="description"
                  required
                  placeholder="e.g. I bought this product 3 month ago..."
                  className="w-full mt-1 px-4 py-2 border border-[#D2D2D2] rounded-md outline-none"
                ></textarea>
              </div>

              {/* Button */}
              <div className="md:col-span-2 mt-4">
                <button className="w-full py-3 rounded-md text-white font-medium bg-gradient-to-br from-[#632EE3] to-[#9F62F2]">
                  Create A Product
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateProducts;
