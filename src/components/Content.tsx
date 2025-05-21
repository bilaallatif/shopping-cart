import type { BaseProps } from "../main.tsx";
import { styled } from "styled-components";
// import apple from "../assets/apple.jpg";

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

const ItemsList = styled.div({
  boxSizing: "border-box",
  flex: 1,
  display: "grid",
  gridTemplateColumns: "repeat(5, 1fr)",
  width: "100%",
  columnGap: "5rem",
  rowGap: "5rem",
  padding: "3rem 10rem",
});

const Card = styled.div((props) => ({
  width: "100%",

  borderRadius: "5%",
  backgroundColor: props.theme.colours.white,
  transition: "transform 0.1s",
  "&:hover": {
    transform: "scale(1.05)",
  },

  padding: "1rem",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "5px",
}));

const Visual = styled.img({
  flex: 4,
  borderRadius: "5%",
  width: "100%",
  border: "1px solid black",
});

const Interactions = styled.div((props) => ({
  flex: 1,
  width: "100%",

  display: "flex",
  flexDirection: "row",
  gap: "1.5rem",
  fontFamily: props.theme.fonts.secondary,
  color: props.theme.colours.green,
}));

const Counter = styled(({ className }: BaseProps) => {
  return <div className={className}>0</div>;
})((props) => ({
  flex: 1.75,
  height: "100%",
  backgroundColor: props.theme.colours.brown,

  borderRadius: "5%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const QuantityModifier = styled(({ className, children }: BaseProps) => {
  return <div className={className}>{children}</div>;
})((props) => ({
  flex: 1,
  height: "100%",
  backgroundColor: props.theme.colours.brown,

  borderRadius: "5%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const QuantityControl = styled.div({
  flex: 3,
  height: "100%",

  display: "flex",
  flexDirection: "row",
  gap: "0.5rem",
});

const BuyButton = styled.button((props) => ({
  flex: 1,
  height: "100%",

  borderRadius: "5%",
  backgroundColor: props.theme.colours.brown,
  color: props.theme.colours.green,
  border: "none",
  fontSize: "1.5rem",
  fontWeight: 600,
}));

const Item = () => {
  return (
    <Card>
      <Visual></Visual>
      <Interactions>
        <QuantityControl>
          <QuantityModifier>-</QuantityModifier>
          <Counter></Counter>
          <QuantityModifier>+</QuantityModifier>
        </QuantityControl>
        <BuyButton>Buy</BuyButton>
      </Interactions>
    </Card>
  );
};

const Content = ({ className }: BaseProps) => {
  const items = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

  return (
    <div className={className}>
      <Banner>
        <div>Welcome to Pick'd — Where Fresh Apples Meet Family Tradition.</div>
        <div>Hand-Picked, Sun-Kissed, and Grown with Love.</div>
      </Banner>
      <ItemsList>
        {items.map((_value, index) => (
          <Item key={index}></Item>
        ))}
      </ItemsList>
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
  // justifyContent: "space-between",
  alignItems: "center",
});
