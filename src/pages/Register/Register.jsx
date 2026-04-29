import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../Provider/AuthContext";
import { sendEmailVerification, updateProfile } from "firebase/auth";
import Swal from "sweetalert2";

const Register = () => {
  const [error, setError] = useState("");
  const { createUser, signInGoogle } = use(AuthContext);
  const navigate = useNavigate();

  const handleAddUser = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const name = e.target.name.value;
    const photoUrl = e.target.photoUrl.value;
    const password = e.target.password.value;
    console.log(email, password, name, photoUrl);
    const lengthRegex = /^.{6,}$/;
    const upperCaseRegex = /^(?=.*[A-Z]).+$/;
    const numberRegex = /\d/;
    const specialRegex = /^(?=.*[!@#$%^&*(),.?":{}|<>]).+$/;

    setError("");

    if (!lengthRegex.test(password)) {
      setError("Password must be at least 6 characters long.");
      return;
    } else if (!upperCaseRegex.test(password)) {
      setError("Password must contain at least one uppercase letter");
      return;
    } else if (!numberRegex.test(password)) {
      setError("Password must contain at least one number.");
      return;
    } else if (!specialRegex.test(password)) {
      setError("Password must contain at least one special character.");
      return;
    }

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        sendEmailVerification(result.user).then(() => {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "A verification email has been sent.",
            showConfirmButton: false,
            timer: 1500,
          });
        });

        const profile = {
          displayName: name,
          photoURL: photoUrl,
        };
        updateProfile(result.user, profile)
          .then(() => {
            console.log("Proflie Updated");
          })
          .catch((error) => {
            console.log(error);
          });
        navigate("/login");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorCode, errorMessage);
        // ..
      });
  };

  const handleGoogleLogin = () => {
    signInGoogle()
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.

        // The AuthCredential type that was used.

        // ...
        setError(errorCode, errorMessage);
      });
  };

  return (
    <div className="min-h-screen bg-[#E9E9E9] flex items-center justify-center p-14">
      <div className="w-full max-w-md p-8 rounded-lg bg-white shadow-[0_10px_20px_-12px_rgba(0,0,0,0.10)]">
        <h1 className="text-[#001931] font-semibold text-3xl text-center mb-1">
          Register Now!
        </h1>
        <p className="text-[#001931] text-center mb-6">
          Already have an account?{" "}
          <Link
            to="/login"
            className="bg-gradient-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-medium cursor-pointer"
          >
            Login Now
          </Link>
        </p>
        <form onSubmit={handleAddUser}>
          <fieldset className="fieldset gap-1">
            <legend className="fieldset-legend text-sm">Name</legend>
            <input
              type="text"
              name="name"
              className="input w-full"
              placeholder="Enter your name"
              required
            />
            <legend className="fieldset-legend text-sm">Email</legend>
            <input
              type="email"
              name="email"
              className="input w-full"
              placeholder="Enter your email"
              required
            />
            <legend className="fieldset-legend text-sm">Image-URL</legend>
            <input
              type="text"
              name="photoUrl"
              className="input w-full"
              placeholder="Image URL"
              required
            />
            <legend className="fieldset-legend text-sm">Password</legend>
            <input
              type="password"
              name="password"
              className="input w-full"
              placeholder="Enter your password"
              required
            />
            <button className="btn w-full mt-4 bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white border-0">
              Register
            </button>
            <p className="text-red-500 text-sm">{error}</p>
            <div className="divider">OR</div>
            <button
              onClick={handleGoogleLogin}
              className="btn w-full bg-white text-black border-[#e5e5e5]"
            >
              <svg
                aria-label="Google logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  ></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  ></path>
                </g>
              </svg>
              Login with Google
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Register;
