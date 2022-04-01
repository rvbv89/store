import "./App.css";
import React, { useContext, useEffect, useReducer, useState } from "react";
import NavBar from "./NavBar";
import CardGroup from "./CardGroup";
import { Container, Segment, Grid } from "semantic-ui-react";
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
      <Container>
        <SearchContext.Provider
          value={{
            searchState: state,
            searchDispatch: dispatch,
          }}
        >
          <Container id="nav-segment" style={{ margin: -2, padding: 25 }}>
            <NavBar />
          </Container>

          <Container
            id="card-container"
            textAlign="center"
            style={{ padding: 20 }}
          >
            <CardGroup />
          </Container>
        </SearchContext.Provider>
      </Container>
    </div>
  );
}

export default App;
