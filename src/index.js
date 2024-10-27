import React from "react";
import ReactDOM from "react-dom/client";
import "./fonts.css";
import "./index.css";
import Product from "./Pages/Product";
import App from "./App";
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
  const token = useSelector((state) => state.auth.token);
  if (token) {
    return children;
  }

  return <Navigate to="/login" />;
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <Products />,
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
    element: <Product />,
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
