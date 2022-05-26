import React, { useState } from "react";
import {
  Container,
  Grid,
  GridColumn,
  Header,
  Image,
  Segment,
  Rating,
  GridRow,
  ImageGroup,
  Button,
  Dropdown,
  DropdownMenu,
  DropdownItem,
} from "semantic-ui-react";
import { useCart } from "./context/CartProvider";

const dropdownOptions = [
  {
    key: 1,
    text: "1",
    value: 1,
  },
  {
    key: 2,
    text: "2",
    value: 2,
  },
  {
    key: 3,
    text: "3",
    value: 3,
  },
  {
    key: 4,
    text: "4",
    value: 4,
  },
  {
    key: 5,
    text: "5",
    value: 5,
  },
];

export default function ProductPage() {
  const { currentProduct, setCart, cart, updateCart } = useCart();
  const [quantity, setQuantity] = useState(null)

  // const updateCartFromPage = (value) => {

  //   console.log(value)
  // }

  const onCartAdd = () => {
    
    if (quantity === null){
      alert('Please select a quantity to add to cart')
    } else {
      for (let n = 0; n < quantity; n++) {
        setCart(prevCartProducts =>
          [...prevCartProducts, currentProduct]
        )
      }
    }
  }

  return (
    currentProduct && (
      <Container>
        <Header centered>{currentProduct.title}</Header>
        <Rating
          icon="star"
          defaultRating={currentProduct.rating.rate}
          maxRating={5}
        />
        <span>${currentProduct.price}</span>
        <Grid columns={2} padded="horizontally" centered>
          <GridRow>
            <GridColumn centered>
              <ImageGroup style={{ height: 500, overflow: "hidden" }}>
                <Image size="large" bordered src={currentProduct.image} />
              </ImageGroup>
            </GridColumn>
            <GridColumn centered>
              <Segment size="large">{currentProduct.description}</Segment>
              <GridRow>
                <Dropdown
                  onChange={(e, result) => {
                    console.log(result.value);
                    setQuantity(result.value)
                  }}
                  style={{ margin: 15, width: 4 }}
                  options={dropdownOptions}
                  clearable
                  selection
                  placeholder="Select Quantity"
                />
                <Button
                  onClick={
                   (e) => {
                     onCartAdd()
                   }
                  }
                  basic
                  color="green"
                >
                  Add To Cart
                </Button>
              </GridRow>
            </GridColumn>
          </GridRow>
        </Grid>
      </Container>
    )
  );
}
