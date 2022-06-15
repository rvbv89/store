import React from "react";
import { Container, Segment, Header, Divider, Icon } from "semantic-ui-react";
import { useCart } from "./context/CartProvider";

export default function CartPage() {
  const { cart, setCart, priceTotal } = useCart();

  return (
    <>
      {cart.length > 0 ? (
        <Container>
          <Segment style={{ minHeight: "20em" }}>
            {cart &&
              cart.map((item) => (
                <>
                  <Header>
                    {item.title} -{" "}
                    <span style={{ color: "green" }}>
                      ${item.price}
                      <span
                        style={{
                          color: "black",
                          paddingLeft: 4,
                          fontWeight: "normal",
                        }}
                      >
                        each x {item.quantity}
                      </span>
                      <Icon
                        onClick={() => {
                          setCart((prevCart) =>
                            prevCart.filter((prod) => prod.title !== item.title)
                          );
                        }}
                        name="delete"
                        style={{
                          color: "darkRed",
                          paddingLeft: 10,
                          cursor: "pointer",
                        }}
                      />
                    </span>
                  </Header>
                </>
              ))}
            <Divider />
            <Header style={{ fontSize: 30 }}>
              Total: <span style={{ color: "green" }}>${priceTotal}</span>
            </Header>
          </Segment>
        </Container>
      ) : (
        <Container>
          <Segment>
            <Header>Cart Is Empty</Header>
          </Segment>
        </Container>
      )}
    </>
  );
}
