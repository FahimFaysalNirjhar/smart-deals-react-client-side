import React, { use } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { AuthContext } from "../../Provider/AuthContext";

const Header = () => {
  const { user, UserSignOut } = use(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    UserSignOut().then(() => navigate("/login"));
  };

  const Links = (
    <>
      <li>
        <NavLink
          to="/"
          end
          className="font-medium text-base px-4 py-2"
          style={({ isActive }) =>
            isActive
              ? {
                  border: "2px solid transparent",
                  borderRadius: "8px",
                  backgroundImage:
                    "linear-gradient(white, white), linear-gradient(125deg, #632EE3, #9F62F2)",
                  backgroundOrigin: "border-box",
                  backgroundClip: "padding-box, border-box",
                }
              : {}
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/products"
          end
          className="font-medium text-base px-4 py-2"
          style={({ isActive }) =>
            isActive
              ? {
                  border: "2px solid transparent",
                  borderRadius: "8px",
                  backgroundImage:
                    "linear-gradient(white, white), linear-gradient(125deg, #632EE3, #9F62F2)",
                  backgroundOrigin: "border-box",
                  backgroundClip: "padding-box, border-box",
                }
              : {}
          }
        >
          All Products
        </NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink
              to="/myProducts"
              end
              className="font-medium text-base px-4 py-2"
              style={({ isActive }) =>
                isActive
                  ? {
                      border: "2px solid transparent",
                      borderRadius: "8px",
                      backgroundImage:
                        "linear-gradient(white, white), linear-gradient(125deg, #632EE3, #9F62F2)",
                      backgroundOrigin: "border-box",
                      backgroundClip: "padding-box, border-box",
                    }
                  : {}
              }
            >
              My Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/mybids"
              end
              className="font-medium text-base px-4 py-2"
              style={({ isActive }) =>
                isActive
                  ? {
                      border: "2px solid transparent",
                      borderRadius: "8px",
                      backgroundImage:
                        "linear-gradient(white, white), linear-gradient(125deg, #632EE3, #9F62F2)",
                      backgroundOrigin: "border-box",
                      backgroundClip: "padding-box, border-box",
                    }
                  : {}
              }
            >
              My Bids
            </NavLink>
          </li>
        </>
      )}
      <li>
        <NavLink
          to="/createProducts"
          end
          className="font-medium text-base px-4 py-2"
          style={({ isActive }) =>
            isActive
              ? {
                  border: "2px solid transparent",
                  borderRadius: "8px",
                  backgroundImage:
                    "linear-gradient(white, white), linear-gradient(125deg, #632EE3, #9F62F2)",
                  backgroundOrigin: "border-box",
                  backgroundClip: "padding-box, border-box",
                }
              : {}
          }
        >
          Create Product
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar sticky top-0 z-50 bg-white border-b border-[#E9E9E9]">
      {/* LEFT — logo + mobile menu */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            {Links}
          </ul>
        </div>
        <a className="text-xl sm:text-2xl lg:text-3xl font-bold">
          Smart
          <span className="bg-gradient-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
            Deals
          </span>
        </a>
      </div>

      {/* CENTER — nav links */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{Links}</ul>
      </div>

      {/* RIGHT — auth */}
      <div className="navbar-end">
        {user ? (
          <div className="flex items-center gap-2 sm:gap-3">
            <img
              width={40}
              height={40}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover border"
              src={user.photoURL}
              alt={user.displayName}
            />
            <span className="text-sm text-gray-600 hidden sm:block">
              {user.email}
            </span>
            <button
              onClick={handleLogout}
              className="btn border-2 border-[#632EE3]"
            >
              <span className="bg-gradient-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
                LogOut
              </span>
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-4">
            <Link to="/login" className="btn border-2 border-[#632EE3]">
              <span className="bg-gradient-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
                Login
              </span>
            </Link>
            <Link
              to="/register"
              className="btn bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white border-0"
            >
              Register
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
