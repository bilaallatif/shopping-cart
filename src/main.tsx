import { type ReactNode, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./main.css";
import { type DefaultTheme, ThemeProvider } from "styled-components";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes.tsx";

export interface BaseProps {
  className?: string;
  children?: ReactNode;
}

const theme: DefaultTheme = {
  colours: {
    red: "#F96666",
    brown: "#674747",
    green: "#829460",
    white: "#EEEEEE",
  },
  fonts: {
    primary: "Playwrite US Modern, cursive",
    secondary: "Playwrite DK Loopet, cursive",
  },
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router}></RouterProvider>
    </ThemeProvider>
  </StrictMode>,
);
