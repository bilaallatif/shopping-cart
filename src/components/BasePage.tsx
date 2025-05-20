import type { BaseProps } from "../main.tsx";
import { styled } from "styled-components";
import { StyledHeader } from "./Header.tsx";
import { StyledFooter } from "./Footer.tsx";

const BasePage = ({ className }: BaseProps) => {
  return (
    <div className={className}>
      <StyledHeader></StyledHeader>
      <div style={{ flex: 7 }}></div>
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
