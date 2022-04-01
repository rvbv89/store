import React, { useCallback, useRef, useEffect, useContext } from "react";
import { SearchContext } from "./App";
import { Search, Grid } from "semantic-ui-react";
import _ from "lodash";

export default function SearchBar() {
  const searchContext = useContext(SearchContext);
  const timeoutRef = useRef();

  const handleSearchChange = useCallback(
    (e, data) => {
      clearTimeout(timeoutRef.current);
      searchContext.searchDispatch({ type: "START_SEARCH", query: data.value });
      timeoutRef.current = setTimeout(() => {
        if (data.value.length === 0) {
          searchContext.searchDispatch({ type: "CLEAN_QUERY" });
          return;
        }
        const filteredSource = searchContext.searchState.filteredSource;
        const re = new RegExp(_.escapeRegExp(data.value), "i");
        const isMatch = (result) => re.test(result.title);
        if (filteredSource.length !== 0) {
          console.log(searchContext.searchState.filteredSource);
          searchContext.searchDispatch({
            type: "FINISH_FILTERED_SEARCH",
            results: _.filter(
              searchContext.searchState.filteredSource,
              isMatch
            ),
          });
        } else {
          console.log(searchContext.searchState.filteredSource);
          searchContext.searchDispatch({
            type: "FINISH_SEARCH",
            results: _.filter(searchContext.searchState.source, isMatch),
          });
        }
      }, 300);
    },
    [searchContext.searchState.source, searchContext.searchState.filteredSource]
  );

  useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <>
      <Grid.Row>
        <Grid.Column width={10}>
          <Search
            input={{ fluid: true }}
            loading={searchContext.searchState.loading}
            placeholder="Search..."
            onResultSelect={(e, data) =>
              searchContext.searchDispatch({
                type: "UPDATE_SELECTION",
                selection: data.result.title,
              })
            }
            onSearchChange={handleSearchChange}
            results={searchContext.searchState.results}
            value={searchContext.searchState.value}
          />
        </Grid.Column>
      </Grid.Row>
    </>
  );
}
