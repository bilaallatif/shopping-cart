import type { BaseProps } from "../main.tsx";
import { styled } from "styled-components";

const Banner = styled.div((props) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",

  padding: "1rem 0px",

  fontSize: "1.3rem",
  backgroundColor: props.theme.colours.red,
  color: props.theme.colours.white,
}));

const Content = ({ className }: BaseProps) => {
  return (
    <div className={className}>
      <Banner>
        <div>Welcome to Pick'd — Where Fresh Apples Meet Family Tradition.</div>
        <div>Hand-Picked, Sun-Kissed, and Grown with Love.</div>
      </Banner>
      <Banner>
        <div>Warning: May Cause Spontaneous Apple-Picking Joy.</div>
      </Banner>
    </div>
  );
};

export const StyledContent = styled(Content)({
  flex: 10,

  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
});
