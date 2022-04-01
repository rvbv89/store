import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";

const ProductCard = () => (
  <Card>
    <Image />
    <Card.Content>
      <Card.Header>Product</Card.Header>
      <Card.Meta>
        <span className="price-span">price</span>
      </Card.Meta>
      <Card.Description>
        Lorem ipsum dolor sit amet consectetur adipisicing.
      </Card.Description>
    </Card.Content>
    <Card.Content>
      <a href="">
        <Icon>Add To Cart</Icon>
      </a>
    </Card.Content>
  </Card>
);

export default ProductCard;
