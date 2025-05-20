import { type ReactNode, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { StyledBasePage } from "./components/BasePage.tsx";
import "./main.css";
import { type DefaultTheme, ThemeProvider } from "styled-components";

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
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <StyledBasePage></StyledBasePage>
    </ThemeProvider>
  </StrictMode>,
);
