import type { BaseProps } from "../main.tsx";
import { styled } from "styled-components";
import { useOutletContext } from "react-router-dom";
import type { ItemContext } from "./Content.tsx";

const Items = styled.div({
  display: "flex",
  flexDirection: "column",
  gap: "1.5rem",
});

const ItemList = styled.div((props) => ({
  fontSize: "1.5rem",
  padding: "1rem",

  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  border: "3px solid",
  borderColor: props.theme.colours.green,
  gap: "1.5rem",
}));

const BuyButton = styled.button((props) => ({
  backgroundColor: props.theme.colours.red,
  color: props.theme.colours.white,
  border: "none",
  padding: "0.5rem",
  fontSize: "1.5rem",
  fontWeight: 600,
}));

const Reciept = styled.div((props) => ({
  width: "25%",
  borderRadius: "100px",
  backgroundColor: props.theme.colours.white,
  color: props.theme.colours.brown,
  fontSize: "2.5rem",
  padding: "1.5rem",

  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "2rem",
}));

export const Cart = styled(({ className }: BaseProps) => {
  const { items, setItems } = useOutletContext<ItemContext>();
  const purchasedItems = items.filter((val) => val > 0);

  const resetItems = () => {
    setItems(Array(items.length).fill(0));
  };

  return (
    <div className={className}>
      <Reciept>
        Bill
        {purchasedItems.length > 0 ? (
          <>
            <ItemList>
              <Items>
                <div>
                  {purchasedItems.map((item, idx) => (
                    <div key={idx}>{item}x Apple:</div>
                  ))}
                </div>
                <div>Total:</div>
              </Items>
              <Items>
                <div>
                  {purchasedItems.map((_item, idx) => (
                    <div key={idx}>$28</div>
                  ))}
                </div>
                <div>$28</div>
              </Items>
            </ItemList>
            <BuyButton
              onClick={() => {
                resetItems();
              }}
            >
              Buy
            </BuyButton>
          </>
        ) : (
          <div>No Items</div>
        )}
      </Reciept>
    </div>
  );
})({
  display: "flex",
  height: "100%",
  justifyContent: "center",
  alignItems: "center",
});
