import React, { useContext, useEffect, useState } from "react";
import {
  Card,
  Image,
  Container,
  Rating,
  Header,
  Dimmer,
  Loader,
  Transition,
  TransitionGroup,
} from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
import { useCart } from "./context/CartProvider";
import { SearchContext } from "./App";
import QuickShop from "./QuickShop";
import { AnimatePresence, motion } from "framer-motion";

const CardGroup = ({ navigateToProductPage, loadingProducts }) => {
  const searchContext = useContext(SearchContext);
  const allProducts = searchContext.searchState.source;
  const filteredProducts = searchContext.searchState.filteredSource;
  const { setCurrentProduct } = useCart();
  const [productCards, setProductCards] = useState();
  const [active, setActive] = useState(false);

  const openModal = () => {
    return;
  };

  const makeItemList = (products) => {
    const cards = [];
    // const MotionCard = motion(Card);
    products.forEach((product) =>
      cards.push(
        <Transition
          animation="slide right"
          duration={500}
          transitionOnMount={true}
        >
          <Card
            centered
            raised={true}
            props={motion}
            style={{
              minWidth: 300,
              maxWidth: 300,
              cursor: "pointer",
              margin: 10,
            }}
          >
            <Dimmer
              onMouseEnter={setActive(true)}
              onMouseLeave={setActive(false)}
              active={active}
            >
              <Header as="h2">Click To Open Product Page</Header>
            </Dimmer>
            <Image.Group
              style={{ width: 300, height: 250, overflow: "hidden" }}
              size="medium"
            >
              <Image
                centered
                onClick={(e) => {
                  setCurrentProduct(product);
                  navigateToProductPage(product);
                }}
                src={product.image}
              />
            </Image.Group>

            <Card.Content>
              <Card.Header style={{ padding: 10 }}>{product.title}</Card.Header>
              <Card.Meta>
                <div className="ui container flex-col">
                  <Rating
                    icon="star"
                    defaultRating={product.rating.rate}
                    maxRating={5}
                  />
                </div>
              </Card.Meta>
            </Card.Content>
            <Card.Content
              extra
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <span style={{ color: "green" }}>
                {"$" + product.price.toFixed(2)}
              </span>
              <QuickShop product={product} />
            </Card.Content>
          </Card>
        </Transition>
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
    <>
      {loadingProducts ? (
        <Container style={{ paddingTop: "20em" }}>
          <Loader
            style={{ marginTop: "20em" }}
            active
            centered
            size="huge"
            content="Fetching Products..."
          />
        </Container>
      ) : (
        <Card.Group centered style={{ maxHeight: 300 }}>
          {productCards}
        </Card.Group>
      )}
    </>
  );
};

export default CardGroup;
