import { createBrowserRouter, Navigate } from "react-router-dom";
import { Content } from "./components/Content.tsx";
import { StyledBasePage } from "./components/BasePage.tsx";

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
    ],
  },
]);
