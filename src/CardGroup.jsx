import React, { useContext, useEffect, useState } from "react";
import { Card } from "semantic-ui-react";
import { SearchContext } from "./App";

class Product {
  constructor(header, price, description, image) {
    this.header = header;
    this.meta = price;
    this.description = description;
    this.image = image;
  }
}


const CardGroup = () => {
  const searchContext = useContext(SearchContext);
  const allProducts = searchContext.searchState.source;
  const filteredProducts = searchContext.searchState.filteredSource;
  const [items, setItems] = useState([]);

  const makeItemList = (products) => {
    products.forEach(
      (product) =>
        new Product(
          product.title,
          product.price,
          product.description,
          product.image
        )
    );
    setItems(products);
  };

  useEffect(() => {
    if (filteredProducts.length === 0) {
      makeItemList(allProducts);
    } else {
      makeItemList(filteredProducts);
    }
  }, [filteredProducts, allProducts]);

  return <Card.Group centered items={items} />;
};

export default CardGroup;
