import "./App.css";
import React, {
  useContext,
  useEffect,
  useReducer,
  useState,
  createRef,
} from "react";
import { Outlet, Routes, Route } from "react-router-dom";
import Home from "./Home";
import NavBar from "./NavBar";
import CardGroup from "./CardGroup";
import ProductPage from "./ProductPage";
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

  return (
    <div className="App">
      <SearchContext.Provider
        value={{
          searchState: state,
          searchDispatch: dispatch,
        }}
      >
        <NavBar />

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="product-page" element={<ProductPage/>}/>
          {/* <Container
            id="card-container"
            fluid
            style={{ margin: -20, paddingTop: 50 }}
          >
            <div
              className="ui center aligned header"
              style={{
                width: "100%",
                height: "20em",
                backgroundColor: "#EEBC77",
              }}
            >
              <h2 className="ui huge header" style={{ padding: "2em" }}>
                The Big Something Event!
              </h2>
              <h1
                className="ui huge header"
                style={{ fontStyle: "italic", fontWeight: "lighter" }}
              >
                Some Sort Of Discout Available!
              </h1>
            </div>
            <CardGroup />
          </Container> */}
         
        </Routes>
      </SearchContext.Provider>
    </div>
  );
}

export default App;
