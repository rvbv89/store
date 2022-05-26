import "./App.css";
import React, {
  useContext,
  useEffect,
  useReducer,
  useState,
  createRef,
} from "react";
import { useCart } from "./context/CartProvider";
import { useNavigate } from "react-router-dom";
import { Outlet, Routes, Route } from "react-router-dom";
import Home from "./Home";
import NavBar from "./NavBar";
import CardGroup from "./CardGroup";
import ProductPage from "./ProductPage";
import CartPage from "./CartPage"
import { Container, Segment, Grid, Sticky, Ref } from "semantic-ui-react";
import SearchReducer from "./SearchReducer";
import axios from "axios";

export const SearchContext = React.createContext();

const initialState = {
  source: [],
  filteredSource: [],
  filter: "",
  error: null,
  loading: false,
  results: [],
  value: "",
};

const searchReducer = SearchReducer;

function App() {
  const [state, dispatch] = useReducer(searchReducer, initialState);
  const { setCurrentProduct, currentProduct, setCart, cart } = useCart();
  const apiURL = "https://fakestoreapi.com/products";

  useEffect(() => {
    dispatch({ type: "API_CALL" });
    const getAPI = async () => {
      const res = await axios(apiURL);
      if (res.status == 200) {
        dispatch({ type: "API_SUCCESS", data: res.data });

        return;
      }
      dispatch({ type: "API_ERROR", error: res.error });
    };
    getAPI();
  }, []);

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
  return (
    <div className="App">
      <SearchContext.Provider
        value={{
          searchState: state,
          searchDispatch: dispatch,
        }}
      >
        <NavBar
          navigateToProductPage={navigateToProductPage}
          navigateToCartPage={navigateToCartPage}
          navigateToHomePage={navigateToHomePage}
          currentProduct={currentProduct}
          setCurrentProduct={setCurrentProduct}
        />

        <Routes>
          <Route path="/" element={<Home navigateToProductPage={navigateToProductPage} />} />
          <Route path="product-page" element={<ProductPage />} />
          <Route path="cart-page" element={<CartPage />} />
        </Routes>
      </SearchContext.Provider>
    </div>
  );
}

export default App;
