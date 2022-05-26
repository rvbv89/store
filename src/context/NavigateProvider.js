import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useCart }  from "./CartProvider"

const NavigateContext = React.createContext();

export function useNavigateCustomHook() {
  return useContext(NavigateContext);
}

export default function NavigateProvider({ children }) {
    const { setCurrentProduct } = useCart()

    const navigate = useNavigate();

    const navigateToProductPage = (product) => {
      setCurrentProduct(product);
      console.log(product);
      navigate("/product-page");
    };
  
    const navigateToCartPage = () => {
      navigate("/cart-page")
    }
    const navigateToHomePage = () => {
      setCurrentProduct("");
      navigate("/");
    };

  

  const value = {
navigateToProductPage,
navigateToCartPage,
navigateToHomePage
  };
  return <NavigateContext.Provider value={value}>{children}</NavigateContext.Provider>;
}