import type { BaseProps } from "../main.tsx";
import { styled } from "styled-components";
import { StyledHeader } from "./Header.tsx";
import { StyledFooter } from "./Footer.tsx";
import { Content } from "./Content.tsx";
import { useState } from "react";

const BasePage = ({ className }: BaseProps) => {
  const [items, setItems] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

  return (
    <div className={className}>
      <StyledHeader
        count={items.reduce(
          (previousValue, currentValue) => previousValue + currentValue,
        )}
      ></StyledHeader>
      <Content items={items} setItems={setItems}></Content>
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
