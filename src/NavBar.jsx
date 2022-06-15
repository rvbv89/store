import React, { useEffect } from "react";
import { Icon, Grid, Container } from "semantic-ui-react";
import SearchFilter from "./SearchFilter";
import SearchBar from "./SearchBar";
import { useCart } from "./context/CartProvider";

export default function NavBar({
  currentProduct,
  navigateToProductPage,
  navigateToCartPage,
  navigateToHomePage,
}) {
  const { cartTotal } = useCart();

  useEffect(() => {
    console.log(cartTotal);
  }, [cartTotal]);

  return (
    <Container
      style={{
        margin: -2,
        padding: 25,
        width: "100%",
        backgroundColor: "white",
      }}
    >
      <Grid stackable columns="8">
        <Grid.Column floated="left">
          <h2
            onClick={navigateToHomePage}
            style={{ cursor: "pointer", fontSize: 28 }}
            href="/"
            id="store-title"
          >
            StoreDemo
          </h2>
        </Grid.Column>

        <Grid.Column style={{ marginRight: 20 }}>
          <SearchFilter />
        </Grid.Column>
        <Grid.Column width={8}>
          <SearchBar
            navigateToProductPage={navigateToProductPage}
            currentProduct={currentProduct}
            style={{ marginLeft: 20 }}
          />
        </Grid.Column>

        <Grid.Column floated="right">
          <Grid.Row>
            <Icon
              style={{ padding: 3, cursor: "pointer" }}
              name="shopping cart"
              size="big"
              onClick={navigateToCartPage}
            />
            <span style={{ fontWeight: "bold" }}>{cartTotal}</span>
          </Grid.Row>
        </Grid.Column>
      </Grid>
    </Container>
  );
}
