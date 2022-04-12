import React, { useContext, useEffect, useState } from "react";
import { Card, Image, Container } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "./App";
import QuickShop from "./QuickShop";
import { AnimatePresence, motion } from "framer-motion";

const CardGroup = () => {
  const searchContext = useContext(SearchContext);
  const allProducts = searchContext.searchState.source;
  const filteredProducts = searchContext.searchState.filteredSource;
  const [productCards, setProductCards] = useState();

  const navigate = useNavigate();

  const navigateToProductPage = () => {
    navigate("/product-page");
  };

  const openModal = () => {
    return;
  };
  const makeItemList = (products) => {
    const cards = [];
    console.log(products);
    // const MotionCard = motion(Card);
    products.forEach((product) =>
      cards.push(
        <Card
          onClick={navigateToProductPage}
          raised={true}
          props={motion}
          style={{ minWidth: 300, cursor: "pointer" }}
        >
          <Image.Group
            style={{ width: 300, height: 250, overflow: "hidden" }}
            size="medium"
          >
            <Image src={product.image} />
          </Image.Group>

          <Card.Content>
            <Card.Header style={{ padding: 10 }}>{product.title}</Card.Header>
            <Card.Meta>
              <div className="ui container flex-col">
                <span style={{ color: "black" }}>
                  Rating: {product.rating.rate} out of 5
                </span>
              </div>
            </Card.Meta>
          </Card.Content>
          <Card.Content
            extra
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <span style={{ color: "green" }}>{"$" + product.price}</span>
            <QuickShop product={product} />
          </Card.Content>
        </Card>
      )
    );
    setProductCards(cards);
  };

  useEffect(() => {
    if (filteredProducts.length === 0) {
      makeItemList(allProducts);
    } else {
      makeItemList(filteredProducts);
    }
  }, [filteredProducts, allProducts]);

  return (
    <Container
      id="card-container"
      fluid
      style={{ margin: -20, paddingTop: 50 }}
    >
      <Card.Group
        itemsPerRow={6}
        stackable={true}
        doubling={true}
        centered
        style={{ maxHeight: 300 }}
      >
        {productCards}
      </Card.Group>
    </Container>
  );
};

export default CardGroup;
