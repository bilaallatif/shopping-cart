import type { BaseProps } from "../main.tsx";
import { styled } from "styled-components";
import { StyledHeader } from "./Header.tsx";
import { StyledFooter } from "./Footer.tsx";
import { useState } from "react";
import { Outlet } from "react-router-dom";

const BasePage = ({ className }: BaseProps) => {
  const [items, setItems] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

  return (
    <div className={className}>
      <StyledHeader
        count={items.reduce(
          (previousValue, currentValue) => previousValue + currentValue,
        )}
      ></StyledHeader>
      <Outlet context={{ items, setItems }}></Outlet>
      <StyledFooter></StyledFooter>
    </div>
  );
};

export const StyledBasePage = styled(BasePage)((props) => ({
  width: "100vw",
  height: "100vh",

  display: "flex",
  flexDirection: "column",
  fontFamily: props.theme.fonts.primary,

  backgroundColor: props.theme.colours.green,
}));
