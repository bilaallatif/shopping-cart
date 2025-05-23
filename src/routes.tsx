import { createBrowserRouter, Navigate } from "react-router-dom";
import { Content } from "./components/Content.tsx";
import { StyledBasePage } from "./components/BasePage.tsx";
import { Home } from "./components/Home.tsx";
import { Cart } from "./components/Cart.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <StyledBasePage></StyledBasePage>,
    children: [
      {
        index: true,
        element: <Navigate to={"/shop"} replace></Navigate>,
      },
      {
        path: "/*",
        element: <Navigate to={"/shop"} replace></Navigate>,
      },
      {
        path: "/shop",
        element: <Content></Content>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/cart",
        element: <Cart></Cart>,
      },
    ],
  },
]);
