import React from "react";
import ReactDOM from "react-dom/client";
import "./fonts.css";
import "./index.css";
import Product from "./Pages/Product";
import Basket from "./Pages/Basket";
import Products from "./Pages/Products";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { store } from "./store";
import { Provider } from "react-redux";
import Registration from "./Pages/Registration";
import Login from "./Pages/Login";
import { useSelector } from "react-redux";

const CheckAuth = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  if (isAuthenticated) {
    return children;
  }

  return <Navigate to="/login" />;
};
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <CheckAuth>
        <Products />
      </CheckAuth>
    ),
  },
  {
    path: "/basket",
    element: (
      <CheckAuth>
        <Basket />
      </CheckAuth>
    ),
  },
  {
    path: "/:id",
    element: (
      <CheckAuth>
        <Product />
      </CheckAuth>
    ),
  },
  {
    path: "/register",
    element: <Registration />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
