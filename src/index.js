import React from "react";
import ReactDOM from "react-dom/client";
import "./fonts.css";
import "./index.css";
import Product from "./Pages/Product";
import App from "./App";
import Basket from "./Pages/Basket";
import Products from "./Pages/Products";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {store} from './store';
import {Provider} from 'react-redux';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Products />,
  },
  {
    path: "/basket",
    element: <Basket />,
  },
  {
    path: "/:id",
    element: <Product />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store ={store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
