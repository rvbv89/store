import React, { useContext, useState, useEffect } from "react";

const CartContext = React.createContext();

export function useCart() {
  return useContext(CartContext);
}

export default function CartProvider({ children }) {
  const [currentProduct, setCurrentProduct] = useState("");
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  useEffect(() => {
    console.log(currentProduct);
  }, [currentProduct]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    const sum = cart.reduce((acc, prod) => {
      return acc + prod.quantity
    },0);
    console.log(sum)
    setCartTotal(sum)
  },[cart]);

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
    cartTotal
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
