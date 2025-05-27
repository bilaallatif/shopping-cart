import type { BaseProps } from "../main.tsx";
import { styled } from "styled-components";
import * as React from "react";
import { useOutletContext } from "react-router-dom";
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

  borderRadius: "30px",
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

interface CounterProps extends BaseProps {
  count: number;
}

const Counter = styled(({ className, count }: CounterProps) => {
  return <div className={className}>{count}</div>;
})((props) => ({
  flex: 1.75,
  height: "100%",

  boxSizing: "border-box",
  border: "3px solid",
  borderColor: props.theme.colours.brown,
  borderRadius: "5%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const QuantityModifier = styled.button((props) => ({
  flex: 1,
  height: "100%",

  boxSizing: "border-box",
  border: "3px solid",
  borderColor: props.theme.colours.brown,
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

interface ItemProps extends BaseProps {
  addCount: (count: number) => void;
}

const Item = ({ addCount }: ItemProps) => {
  const [internalCount, setInternalCount] = React.useState(0);

  return (
    <Card>
      <Visual></Visual>
      <Interactions>
        <QuantityControl>
          <QuantityModifier
            onClick={() => {
              setInternalCount(Math.max(0, internalCount - 1));
            }}
          >
            -
          </QuantityModifier>
          <Counter count={internalCount}></Counter>
          <QuantityModifier
            onClick={() => {
              setInternalCount(internalCount + 1);
            }}
          >
            +
          </QuantityModifier>
        </QuantityControl>
        <BuyButton
          onClick={() => {
            addCount(internalCount);
            setInternalCount(0);
          }}
        >
          Add
        </BuyButton>
      </Interactions>
    </Card>
  );
};

export interface ItemContext {
  items: number[];
  setItems: React.Dispatch<React.SetStateAction<number[]>>;
}

export const Content = styled(({ className }: BaseProps) => {
  const { items, setItems } = useOutletContext<ItemContext>();

  return (
    <div className={className}>
      <Banner>
        <div>Welcome to Pick'd — Where Fresh Apples Meet Family Tradition.</div>
        <div>Hand-Picked, Sun-Kissed, and Grown with Love.</div>
      </Banner>
      <ItemsList>
        {items.map((_value, index) => (
          <Item
            key={index}
            addCount={(added: number) => {
              const newItems = [...items];
              newItems[index] += added;
              console.log(newItems);
              setItems(newItems);
            }}
          ></Item>
        ))}
      </ItemsList>
      <Banner>
        <div>Warning: May Cause Spontaneous Apple-Picking Joy.</div>
      </Banner>
    </div>
  );
})({
  height: "100%",

  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});
