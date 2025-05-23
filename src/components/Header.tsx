import styled from "styled-components";
import type { BaseProps } from "../main.tsx";
import { IoIosBasket } from "react-icons/io";
import { Link } from "react-router-dom";

export const ElementDiv = styled.div((props) => ({
  display: "flex",
  alignItems: "center",

  color: props.theme.colours.green,
}));

const Title = styled(ElementDiv)({
  justifyContent: "flex-start",
  minWidth: "10%",

  fontSize: "5rem",
  fontWeight: "Bold",
});

const NavBar = styled(ElementDiv)({
  flex: 1,
  justifyContent: "center",

  gap: "5rem",

  fontSize: "2rem",
  fontWeight: 400,
});

const NavBarElement = styled(Link)((props) => ({
  textDecoration: "none",
  color: "inherit",
  transition: "all 0.1s ease-in-out",

  "&:hover": {
    color: props.theme.colours.red,
    transform: "scale(1.05)",
  },
}));

const BasketArea = styled(ElementDiv)({
  justifyContent: "flex-end",

  minWidth: "10%",

  fontSize: "5rem",
});

const Basket = styled.div({
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
});

const BasketBadge = styled.div((props) => ({
  position: "absolute",
  bottom: "10px",
  left: "60px",
  color: props.theme.colours.red,
  fontSize: "1.25rem",
  backgroundColor: props.theme.colours.white,
  borderRadius: "50%",
  width: "2rem",
  height: "2rem",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

interface HeaderProps extends BaseProps {
  count: number;
}

const Header = ({ className, count }: HeaderProps) => {
  return (
    <div className={className}>
      <Title>Pick'd</Title>
      <NavBar>
        <NavBarElement to="/home">Home</NavBarElement>
        <NavBarElement to="/shop">Shop</NavBarElement>
        <NavBarElement to="/contact">Contact</NavBarElement>
      </NavBar>
      <BasketArea>
        <Basket>
          <NavBarElement to="/cart">
            <IoIosBasket></IoIosBasket>
          </NavBarElement>
          <BasketBadge>{count}</BasketBadge>
        </Basket>
      </BasketArea>
    </div>
  );
};

export const StyledHeader = styled(Header)((props) => ({
  flex: 1,

  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  padding: "0 50px",

  backgroundColor: props.theme.colours.brown,
}));
