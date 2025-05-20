import styled from "styled-components";
import type { BaseProps } from "../main.tsx";

const Title = styled.div((props) => ({
  flex: 1,

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  fontSize: "5rem",
  fontWeight: "Bold",
  color: props.theme.colours.green,
  // border: "1px solid black",
}));

const Header = ({ className }: BaseProps) => {
  return (
    <div className={className}>
      <Title>Pick'd</Title>
      <div style={{ flex: 7 }}></div>
      <div style={{ flex: 1 }}></div>
    </div>
  );
};
export const StyledHeader = styled(Header)((props) => ({
  flex: 1,

  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  padding: "0 20px",

  backgroundColor: props.theme.colours.brown,
}));
