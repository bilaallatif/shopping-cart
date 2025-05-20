import type { BaseProps } from "../main.tsx";
import { useTheme, styled } from "styled-components";
import { StyledHeader } from "./Header.tsx";

const BasePage = ({ className }: BaseProps) => {
  const theme = useTheme();

  return (
    <div className={className}>
      <StyledHeader></StyledHeader>
      <div style={{ flex: 7 }}></div>
      <div style={{ backgroundColor: theme.colours.brown, flex: 1 }}></div>
    </div>
  );
};

export const StyledBasePage = styled(BasePage)((props) => ({
  width: "100vw",
  height: "100vh",

  display: "flex",
  flexDirection: "column",

  backgroundColor: props.theme.colours.green,
}));
