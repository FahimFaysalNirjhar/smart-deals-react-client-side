import React, { use } from "react";
import { AuthContext } from "./AuthContext";
import { Navigate } from "react-router";

const PrivateProvider = ({ children }) => {
  const { user, loading } = use(AuthContext);

  if (loading) {
    return <span className="loading loading-dots loading-xl"></span>;
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login"></Navigate>;
};

export default PrivateProvider;
