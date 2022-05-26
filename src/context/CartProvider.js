import React, { useContext, useState, useEffect } from "react";

const CartContext = React.createContext();

export function useCart() {
  return useContext(CartContext);
}

export default function CartProvider({ children }) {
  const [currentProduct, setCurrentProduct] = useState("");
  const [cart, setCart] = useState([]);

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  useEffect(() => {
    console.log(currentProduct);
  }, [currentProduct]);

  useEffect(() => {
   localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart]);

  const updateCart = (product) =>
    setCart(
      (prevProducts) => [...prevProducts, product],
      () => {
        localStorage.setItem(cart);
      }
    );

  const value = {
    currentProduct,
    setCurrentProduct,
    cart,
    setCart,
    updateCart,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
