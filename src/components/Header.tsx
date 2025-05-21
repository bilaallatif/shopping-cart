import styled from "styled-components";
import type { BaseProps } from "../main.tsx";

export const ElementDiv = styled.div((props) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  color: props.theme.colours.green,
}));

const Title = styled(ElementDiv)({
  flex: 1,
  minWidth: "20%",

  fontSize: "5rem",
  fontWeight: "Bold",
});

const NavBar = styled(ElementDiv)({
  flex: 7,

  gap: "5rem",

  fontSize: "2rem",
  fontWeight: 400,
});

const BasketArea = styled(ElementDiv)({
  flex: 1,
  minWidth: "20%",

  gap: "1.5rem",
  fontSize: "3rem",
  fontWeight: 200,
});

const NavBarElement = styled.div((props) => ({
  transition: "all 0.1s ease-in-out",

  "&:hover": {
    color: props.theme.colours.red,
    transform: "scale(1.05)",
  },
}));

const Header = ({ className }: BaseProps) => {
  return (
    <div className={className}>
      <Title>Pick'd</Title>
      <NavBar>
        <NavBarElement>Home</NavBarElement>
        <NavBarElement>Shop</NavBarElement>
        <NavBarElement>Contact</NavBarElement>
      </NavBar>
      <BasketArea>
        <NavBarElement>Basket</NavBarElement>
        <NavBarElement>Search</NavBarElement>
      </BasketArea>
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
