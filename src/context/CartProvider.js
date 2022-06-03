import React, { useContext, useState, useEffect } from "react";

const CartContext = React.createContext();

export function useCart() {
  return useContext(CartContext);
}

export default function CartProvider({ children }) {
  const [currentProduct, setCurrentProduct] = useState("");
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [priceTotal, setPriceTotal] = useState(0);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart'));
    if (cart) {
      setCart(cart)
    }
  }, []);

  useEffect(() => {
    console.log(currentProduct);
  }, [currentProduct]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    const quantitySum = cart.reduce((acc, prod) => {
      return acc + prod.quantity;
    }, 0);

    setCartTotal(quantitySum);
  }, [cart]);

  useEffect(() => {
    let prices = 0;
    cart.map((product) => {
      for (let i = 0; i < product.quantity; i++) {
        prices += product.price;
        setPriceTotal(prices.toFixed(2));
      }
    });
    console.log(priceTotal);
  }, [cart]);

  const updateCart = (product) =>
    setCart(
      (prevProducts) => [...prevProducts, product],
      () => {
        localStorage.setItem(cart);
      }
    );

  const updateCartWithQuantity = (updatedCurrentProduct) => {
    setCart((prevProducts) => {
      prevProducts.currentProduct = updatedCurrentProduct;
      return [...prevProducts];
    });
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const value = {
    currentProduct,
    setCurrentProduct,
    cart,
    setCart,
    updateCart,
    updateCartWithQuantity,
    cartTotal,
    priceTotal,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
