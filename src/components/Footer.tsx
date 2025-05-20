import { styled } from "styled-components";
import type { BaseProps } from "../main.tsx";
import { ElementDiv } from "./Header.tsx";

const Footer = ({ className }: BaseProps) => {
  return (
    <div className={className}>
      <ElementDiv>Copyright @ Bilaal Latif 2025</ElementDiv>
    </div>
  );
};

export const StyledFooter = styled(Footer)((props) => ({
  flex: 1,

  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  backgroundColor: props.theme.colours.brown,
  fontSize: "2rem",
  fontWeight: 200,
}));
