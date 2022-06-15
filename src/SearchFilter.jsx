import React, { useContext, useCallback } from "react";
import { SearchContext } from "./App";
import { Dropdown } from "semantic-ui-react";

const options = [
  { key: 0, text: "All Products", value: "" },
  { key: 1, text: "Electronics", value: "electronics" },
  { key: 2, text: "Men's Clothing", value: "men's clothing" },
  { key: 3, text: "Women's Clothing", value: "women's clothing" },
  { key: 4, text: "Jewelery", value: "jewelery" },
];

const SearchFilter = () => {
  const searchContext = useContext(SearchContext);
  const dispatch = searchContext.searchDispatch;

  const onFilterSelect = useCallback(
    (e, data) => {
      if (data.value === "") {
        dispatch({
          type: "FILTER_SELECT",
          filteredSource: [],
          filterValue: "",
        });
        return;
      } else {
        const source = searchContext.searchState.source;
        const filteredSource = (options) => {
          const filteredProducts = source.filter(
            (item) => item.category === data.value
          );
          return filteredProducts;
        };
        searchContext.searchDispatch({
          type: "FILTER_SELECT",
          filteredSource: filteredSource(options),
          filterValue: data.value,
        });
      }
    },
    [searchContext.searchState.source, searchContext.searchState.filteredSource]
  );

  return (
    <Dropdown
      onChange={onFilterSelect}
      placeholder="Product Catogories"
      options={options}
      selection
    />
  );
};

export default SearchFilter;
