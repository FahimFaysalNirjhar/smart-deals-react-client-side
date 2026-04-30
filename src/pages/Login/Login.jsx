import React, { use, useRef, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../Provider/AuthContext";
import Swal from "sweetalert2";

const Login = () => {
  const [error, setError] = useState("");
  const emailRef = useRef(null);
  const navigate = useNavigate();
  const { signInGoogle, signIn, forgetPassword } = use(AuthContext);
  const handleLoginUser = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        console.log(result.user);
        if (!result.user.emailVerified) {
          Swal.fire({
            title: "Email Not Verified!",
            text: "Please verify your email before logging in.",
            icon: "warning",
            confirmButtonText: "OK",
            titleText: "Email Not Verified!",
            customClass: {
              title: "text-2xl font-bold text-[#001931]",
              text: "text-base text-gray-600",
              confirmButton:
                "bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white font-medium px-6 py-2 rounded-lg border-0",
            },
            buttonsStyling: false,
          });
        }
        navigate("/");
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

  const handleGoogleLogin = () => {
    signInGoogle()
      .then(() => {
        navigate("/");
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

  const handleForgetPassword = () => {
    const email = emailRef.current.value;
    console.log(email);
    if (!email) {
      Swal.fire({
        toast: true,
        position: "top-end",
        icon: "warning",
        title: "Please enter your email",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        customClass: {
          popup: "bg-white shadow-lg rounded-lg",
          title: "text-sm font-medium text-[#001931]",
        },
      });
    } else {
      forgetPassword(email)
        .then(() => {
          Swal.fire({
            toast: true,
            position: "top-end",
            icon: "success",
            title: "Password reset email sent!",
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
            customClass: {
              popup: "bg-white shadow-lg rounded-lg",
              title: "text-sm font-medium text-[#001931]",
            },
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
          setError(errorCode, errorMessage);
        });
    }
  };

  return (
    <div className="min-h-screen bg-[#E9E9E9] flex items-center justify-center p-14">
      <div className="w-full max-w-md p-8 rounded-lg bg-white shadow-[0_10px_20px_-12px_rgba(0,0,0,0.10)]">
        <h1 className="text-[#001931] font-semibold text-3xl text-center mb-1">
          Login
        </h1>
        <p className="text-[#001931] text-center mb-6">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="bg-gradient-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-medium cursor-pointer"
          >
            Register Now
          </Link>
        </p>
        <form onSubmit={handleLoginUser}>
          <fieldset className="fieldset gap-1">
            <legend className="fieldset-legend text-sm">Email</legend>
            <input
              type="email"
              name="email"
              ref={emailRef}
              className="input w-full"
              placeholder="Enter your email"
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
            <div onClick={handleForgetPassword}>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn w-full mt-4 bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white border-0">
              Sign In
            </button>
            <p className="text-red-500 text-sm">{error}</p>
            <div className="divider">OR</div>
            <button
              onClick={handleGoogleLogin}
              className="btn w-full bg-white text-black border-[#e5e5e5]"
            >
              <svg
                aria-label="Google logo"
                width="25"
                height="25"
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

export default Login;
