import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "./layouts/Root.jsx";
import Home from "./pages/Home/Home.jsx";
import Products from "./pages/Products/Products.jsx";
import Login from "./pages/Login/Login.jsx";
import Register from "./pages/Register/Register.jsx";
import AuthProvider from "./Provider/AuthProvider.jsx";
import MyProducts from "./pages/MyProducts/MyProducts.jsx";
import MyBids from "./pages/MyBids/MyBids.jsx";
import CreateProducts from "./pages/CreateProducts/CreateProducts.jsx";
import PrivateProvider from "./Provider/PrivateProvider.jsx";
import ProductDetails from "./pages/ProductDetails/ProductDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      {
        path: "/products",
        Component: Products,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/myProducts",
        element: (
          <PrivateProvider>
            <MyProducts></MyProducts>
          </PrivateProvider>
        ),
      },
      {
        path: "/mybids",
        element: (
          <PrivateProvider>
            <MyBids></MyBids>
          </PrivateProvider>
        ),
      },
      {
        path: "/createProducts",
        element: (
          <PrivateProvider>
            <CreateProducts></CreateProducts>
          </PrivateProvider>
        ),
      },
      {
        path: "/productDetails/:productId",
        loader: ({ params }) =>
          fetch(
            `https://smart-deals-server-weld.vercel.app/products/${params.productId}`,
          ),
        element: (
          <PrivateProvider>
            <ProductDetails></ProductDetails>
          </PrivateProvider>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
);
