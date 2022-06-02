import React from "react";
import { Container, Segment, Header } from "semantic-ui-react";
import { useCart } from "./context/CartProvider";

export default function CartPage() {
  const { cart, cartTotal, priceTotal } = useCart();


  //TODO fix double decimal places for prices
  return (
    <Container>
      <Segment style={{ minHeight: "20em" }}>
        {cart &&
          cart.map((item) => (
            <>
              <Header>{item.title} -  <span style={{color:"green"}}>${item.price}</span> each</Header>
              <span style={{ fontWeight: "bold", padding: "3em" }}>
                {" "}
                X {cartTotal}
              </span>
            </>
          ))}
          <Header>Total: <span style={{color: "green"}}>${priceTotal}</span></Header>
      </Segment>
    </Container>
  );
}
